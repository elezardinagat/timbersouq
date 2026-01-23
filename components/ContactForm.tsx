"use client";

import { useState } from "react";
import { COUNTRY_CODES, getCountryFlagUrlByIso } from "@/lib/countryCodess";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  countryCode: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    countryCode: "+971",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (if provided)
    if (formData.phone) {
      const phoneRegex = /^[0-9]{7,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone =
          "Please enter a valid phone number (7-15 digits only)";
      }
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    // Filter non-numeric characters for phone field
    let processedValue = value;
    if (name === "phone") {
      processedValue = value.replace(/[^0-9]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    setSubmitError("");
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/mnjjzrgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.toLowerCase().trim(),
          phone: formData.countryCode + " " + formData.phone.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          _replyto: formData.email.toLowerCase().trim(),
          _subject: `TimberSouq Contact: ${formData.subject}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        countryCode: "+971",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "Failed to send message. Please try again or email us directly at info@timbersouq.com",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <p className="font-semibold">
            Thank you! Your message has been sent successfully.
          </p>
          <p className="text-sm">We will get back to you shortly.</p>
        </div>
      )}

      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <p className="text-sm">{submitError}</p>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-md border transition outline-none ${
            errors.name
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20 text-black"
          }`}
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-md border transition outline-none ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20 text-black"
          }`}
          placeholder="your@email.com"
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Phone Number *
        </label>
        <div className="flex gap-2">
          <div className="relative">
            <select
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              className="pl-10 pr-3 py-3 rounded-md border border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20 outline-none transition bg-white text-black appearance-none cursor-pointer"
              aria-label="Country code"
              style={{ minWidth: "120px" }}
            >
              {COUNTRY_CODES.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.flag} {item.code}
                </option>
              ))}
            </select>
            {COUNTRY_CODES.find((c) => c.code === formData.countryCode)
              ?.iso && (
              <img
                src={getCountryFlagUrlByIso(
                  COUNTRY_CODES.find((c) => c.code === formData.countryCode)
                    ?.iso || "",
                )}
                alt="Flag"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-4 object-cover rounded pointer-events-none"
              />
            )}
          </div>
          <input
            type="tel"
            id="modal-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={15}
            inputMode="numeric"
            pattern="[0-9]*"
            className={`flex-1 px-3 py-2 rounded-md border text-sm transition outline-none ${
              errors.phone
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20 text-black"
            }`}
            placeholder="XXXXXXXXXX"
            autoComplete="tel"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-md border transition outline-none ${
            errors.subject
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20 text-black"
          }`}
        >
          <option value="">Select a subject</option>
          <option value="Wood Expo Dubai 2026 Exclusive Offers">
            Wood Expo Dubai 2026 Exclusive Offers
          </option>
          <option value="Request a Quote">Request a Quote</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Partnership Opportunity">
            Partnership Opportunity
          </option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`w-full px-4 py-3 rounded-md border transition outline-none resize-none ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20 text-black"
          }`}
          placeholder="Tell us about your requirements..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-timber-green text-white py-3 px-6 rounded-md hover:bg-timber-dark-green disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>

      <p className="text-sm text-gray-600 text-center">* Required fields</p>
    </form>
  );
}

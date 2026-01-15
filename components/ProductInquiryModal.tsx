"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { COUNTRY_CODES } from "@/lib/countryCodess";

interface ProductInquiryFormProps {
  productName: string;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  quantity?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
  countryCode: string;
}

export default function ProductInquiryModal({
  productName,
  onClose,
}: ProductInquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
    countryCode: "+971",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      const phoneRegex = /^[0-9\s\-\+\(\)]{7,}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Quantity validation
    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.quantity)) {
      newErrors.quantity = "Please enter a valid quantity";
    }

    // Message validation (optional but if provided, must be 5+ chars)
    if (formData.message && formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters if provided";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
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

    try {
      // Secure payload creation
      const payload = {
        productName: productName.trim(),
        name: formData.name.trim(),
        email: formData.email.toLowerCase().trim(),
        phone: formData.countryCode + " " + formData.phone.trim(),
        quantity: formData.quantity.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
      };

      // Here you would send to your backend
      console.log("Product inquiry submission:", payload);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        quantity: "",
        message: "",
        countryCode: "+971",
      });

      // Close modal after success
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        ...errors,
        message: "Failed to send inquiry. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-timber-green text-white p-6 flex items-center justify-between">
          <h2 className="text-xl font-display font-bold">
            Inquiry for {productName}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-timber-dark-green rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <p className="font-semibold text-sm">
                Thank you! Your inquiry has been sent successfully.
              </p>
              <p className="text-xs">We will get back to you shortly.</p>
            </div>
          )}

          {/* Name */}
          <div>
            <label
              htmlFor="modal-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 rounded-md border text-sm transition outline-none ${
                errors.name
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20"
              }`}
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="modal-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="modal-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 rounded-md border text-sm transition outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20"
              }`}
              placeholder="your@email.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="modal-phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                className="px-2 py-2 rounded-md border border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20 outline-none transition bg-white text-sm text-black"
                aria-label="Country code"
              >
                {COUNTRY_CODES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`flex-1 px-3 py-2 rounded-md border text-sm transition outline-none ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20"
                }`}
                placeholder="XXXXXXXXXX"
                autoComplete="tel"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="modal-quantity"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quantity Required *
            </label>
            <input
              type="text"
              id="modal-quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 rounded-md border text-sm transition outline-none ${
                errors.quantity
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20"
              }`}
              placeholder="e.g., 100 units"
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="modal-message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Message (Optional)
            </label>
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className={`w-full px-3 py-2 rounded-md border text-sm transition outline-none resize-none ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-timber-green focus:ring-2 focus:ring-timber-green/20"
              }`}
              placeholder="Any specific requirements or questions..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-timber-green text-white py-2 px-4 rounded-md hover:bg-timber-dark-green disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold text-sm"
          >
            {isLoading ? "Sending..." : "Send Inquiry"}
          </button>

          <p className="text-xs text-gray-600 text-center">* Required fields</p>
        </form>
      </div>
    </div>
  );
}

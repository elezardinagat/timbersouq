"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  X,
  Send,
  Mail,
  Phone,
  User,
  MessageSquare,
  Package,
} from "lucide-react";

// WhatsApp number - update this to your actual business number
const WHATSAPP_NUMBER = "971526443782";

interface Product {
  slug: string;
  name: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: product.name,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Product Card */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-timber-green/30 transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 bg-timber-green/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full">
              <Package className="w-3.5 h-3.5" />
              Premium
            </span>
          </div>

          {/* Quick View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Link
              href={`/products/${product.slug}`}
              className="bg-white/95 backdrop-blur-sm text-timber-dark-brown px-6 py-3 rounded-full font-semibold shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-timber-dark-brown group-hover:text-timber-green transition-colors duration-300 mb-1 sm:mb-2">
              {product.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi, I'm interested in ${product.name}. Please provide more details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#25D366] hover:bg-[#128C7E] text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl text-xs font-semibold transition-all duration-300 hover:shadow-md flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-gradient-to-r from-timber-green to-timber-dark-green hover:from-timber-dark-green hover:to-timber-green text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-timber-green/25 flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Inquire</span>
            </button>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-modal-in">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-timber-green to-timber-dark-green p-6 rounded-t-3xl">
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close inquiry modal"
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-white">Product Inquiry</h2>
              <p className="text-white/80 mt-1">
                Interested in{" "}
                <span className="font-semibold text-white">{product.name}</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Inquiry Sent!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <User className="w-4 h-4 text-timber-green" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-timber-green focus:ring-4 focus:ring-timber-green/10 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Mail className="w-4 h-4 text-timber-green" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-timber-green focus:ring-4 focus:ring-timber-green/10 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Phone className="w-4 h-4 text-timber-green" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-timber-green focus:ring-4 focus:ring-timber-green/10 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Product (Read-only) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="product-name"
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                    >
                      <Package className="w-4 h-4 text-timber-green" />
                      Product
                    </label>
                    <input
                      type="text"
                      id="product-name"
                      value={product.name}
                      readOnly
                      aria-readonly="true"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-700 cursor-not-allowed"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <MessageSquare className="w-4 h-4 text-timber-green" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your requirements, quantity needed, etc."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-timber-green focus:ring-4 focus:ring-timber-green/10 outline-none transition-all duration-300 resize-none text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                      Something went wrong. Please try again or contact us
                      directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-timber-green to-timber-dark-green hover:from-timber-dark-green hover:to-timber-green text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-timber-green/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

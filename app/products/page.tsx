import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Filter,
  Grid3X3,
  LayoutGrid,
} from "lucide-react";
import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Our Products - TimberSouq",
  description:
    "Explore our range of premium timber and wood products including LVL Board, Film Faced Plywood, Scaffolding Board, and more.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative text-white py-20 md:py-28 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(45, 64, 52, 0.85), rgba(47, 33, 24, 0.8)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Collection
            </div>
            <h1 className="font-bold mb-6 leading-tight">Our Products</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed">
              Premium timber and wood products for all your construction and
              manufacturing needs. Quality assured, competitively priced.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">
                  {products.length}+
                </div>
                <div className="text-gray-200 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">100%</div>
                <div className="text-gray-200 text-sm">Quality Assured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">24/7</div>
                <div className="text-gray-200 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-bold text-timber-dark-brown mb-2">
                Browse Our Collection
              </h2>
              <p className="text-gray-600">
                Showing {products.length} premium timber products
              </p>
            </div>

            {/* View Toggle (decorative) */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">View:</span>
              <button
                aria-label="Grid view"
                className="p-2 bg-timber-green text-white rounded-lg"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                aria-label="List view"
                className="p-2 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-timber-cream">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-timber-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-timber-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-timber-dark-brown mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                All products meet strict quality standards
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-timber-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-timber-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-timber-dark-brown mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable delivery across the region
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-timber-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-timber-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-timber-dark-brown mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Professional guidance for your projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-timber-green to-timber-dark-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-bold mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Our team is here to assist you with product selection,
            specifications, and custom requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-timber-green px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg hover:shadow-lg hover:-translate-y-1"
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

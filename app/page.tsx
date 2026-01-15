import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Package,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "TimberSouq - Premium Timber & Wood Products",
  icons: {
    icon: "../public/favicon/favicon-32x32.png", // or "/icon.svg"
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function HomePage() {
  const industries = [
    "Construction",
    "Interior Fit-Out",
    "Furniture Manufacturing",
    "Carpentry & Joinery",
    "Trading & Wholesale",
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Quality-Assured Materials",
      description: "Every product meets strict quality standards",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Best value for premium timber products",
    },
    {
      icon: Package,
      title: "Consistent Supply",
      description: "Reliable inventory for your projects",
    },
    {
      icon: CheckCircle,
      title: "Expert Support",
      description: "Professional guidance from our team",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "On-time delivery across the region",
    },
  ];

  return (
    <>
      {/* Hero Section - full width/height with background image */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 text-white"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(45, 64, 52, 0.82), rgba(47, 33, 24, 0.75)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 hero-animated-bg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(141, 90, 60, 0.45) 0%, rgba(30, 64, 45, 0.55) 50%, rgba(44, 44, 44, 0.55) 100%)",
            mixBlendMode: "multiply",
          }}
        ></div>

        {/* Ambient blobs */}
        <div className="absolute top-10 left-8 w-64 h-64 bg-timber-green/15 rounded-full blur-3xl float-soft"></div>
        <div
          className="absolute bottom-6 right-8 w-80 h-80 bg-timber-brown/15 rounded-full blur-3xl float-soft"
          style={{ animationDelay: "0.8s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="fade-in-up delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Premium Timber & Wood Products
          </h1>
          <p className="fade-in-up delay-2 text-xl sm:text-2xl md:text-3xl mb-8 text-gray-100 leading-relaxed">
            Reliable sourcing, quality assurance, and on-time delivery across
            the region.
          </p>
          <div className="fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-timber-dark-brown px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-timber-dark-brown transition-all duration-300 font-semibold text-lg backdrop-blur-sm hover:shadow-xl hover:scale-[1.02]"
            >
              View Products
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-100">
          <span className="mb-2">Scroll</span>
          <div className="w-7 h-12 border-2 border-white rounded-full flex items-start justify-center pt-2 animate-bounce">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-timber-dark-brown">
              Your Trusted Timber Partner
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              TimberSouq is a leading supplier of premium timber and wood
              products, serving contractors, suppliers, and construction
              businesses across the region.
            </p>
            <p className="text-lg text-gray-700">
              With years of industry experience and a commitment to quality
              sourcing, we ensure reliable supply chains and on-time delivery
              for all your projects.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-8 text-timber-green hover:text-timber-dark-green font-semibold"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-timber-cream to-white">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-timber-green/10 text-timber-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Premium Quality
            </div>
            <h2 className="font-bold mb-4 text-timber-dark-brown">
              Our Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our extensive range of high-quality timber and wood
              products, carefully sourced for all your construction and
              manufacturing needs.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-timber-dark-brown hover:bg-timber-brown text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-timber-brown/25 hover:-translate-y-1"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-timber-dark-brown">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Trusted by professionals across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-timber-cream rounded-lg p-6 text-center hover:bg-timber-green hover:text-white transition-colors"
              >
                <h3 className="font-semibold text-lg">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TimberSouq */}
      <section className="py-20 px-4 bg-timber-charcoal text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose TimberSouq
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Excellence in every aspect of our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-timber-green rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-timber-green to-timber-dark-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Looking for a Reliable Timber Supplier?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect
            solution together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-timber-dark-green px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

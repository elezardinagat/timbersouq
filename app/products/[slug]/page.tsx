import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { products } from "@/lib/products";
import type { Metadata } from "next";
import ProductInquiryButton from "@/components/ProductInquiryButton";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found - TimberSouq",
    };
  }

  return {
    title: `${product.name} - TimberSouq`,
    description: product.description,
    openGraph: {
      title: `${product.name} - TimberSouq`,
      description: product.description,
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-timber-cream py-4 px-4">
        <div className="container mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center text-timber-green hover:text-timber-dark-green font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="bg-gradient-to-br from-timber-dark-brown to-timber-brown text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div
              className="w-full h-72 lg:h-80 rounded-xl bg-gray-200 shadow-lg overflow-hidden border border-white/10"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.4)), url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden
            ></div>
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-100 mb-4">{product.fullName}</p>
              <p className="text-lg text-gray-200 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Card - Sticky on larger screens */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-display font-bold mb-4 text-timber-dark-brown">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.detailedDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-display font-bold mb-6 text-timber-dark-brown">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-timber-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-3xl font-display font-bold mb-6 text-timber-dark-brown">
                Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-timber-cream p-4 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-timber-green rounded-full"></div>
                    <span className="text-gray-700 font-medium">
                      {application}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specifications */}
            <section>
              <h2 className="text-3xl font-display font-bold mb-6 text-timber-dark-brown">
                Specifications
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 pb-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-timber-green text-white rounded-lg p-6 sticky top-24 shadow-lg">
              <h3 className="text-2xl font-display font-bold mb-4">
                Get a Quote
              </h3>
              <p className="mb-6 text-gray-100">
                Contact us for pricing, availability, and specifications for{" "}
                {product.name}.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Landline</span>
                  </div>
                  <a
                    href="tel:+97142512418"
                    className="text-lg hover:underline"
                  >
                    +971 4 251 2418
                  </a>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">WhatsApp</span>
                  </div>
                  <a
                    href="https://wa.me/971526443782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    +971 52 644 3782
                  </a>
                  {" | "}
                  <a
                    href="https://wa.me/971554413612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    +971 55 441 3612
                  </a>
                  <p className="text-sm text-gray-200 mt-1">Click to chat</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full bg-white text-timber-green text-center py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
              >
                Send Inquiry
              </Link>

              <ProductInquiryButton productName={product.name} />

              <p className="text-sm text-gray-200 mt-4 text-center">
                Available 24/7 for inquiries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products CTA */}
      <section className="bg-timber-cream py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4 text-timber-dark-brown">
            Explore More Products
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover our complete range of timber and wood products
          </p>
          <Link
            href="/products"
            className="inline-flex items-center bg-timber-green text-white px-8 py-3 rounded-md hover:bg-timber-dark-green transition-colors font-semibold"
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
}

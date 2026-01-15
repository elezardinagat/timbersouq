import { Award, Users, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TimberSouq",
  description:
    "Learn about TimberSouq, your trusted partner for premium timber and wood products with years of industry experience.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We never compromise on the quality of our timber products. Every item is carefully sourced and inspected.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Our customers are at the heart of everything we do. We build lasting relationships based on trust and reliability.",
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description:
        "From measurements to delivery schedules, we ensure precision in every aspect of our service.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "We constantly evolve our processes and offerings to better serve the construction industry.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-timber-dark-brown to-timber-brown text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About TimberSouq
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Your trusted partner for premium timber and wood products
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-6 text-timber-dark-brown">
            Our Story
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              TimberSouq is a leading supplier of premium timber and wood
              products, serving contractors, suppliers, and construction
              businesses across the region. With years of industry experience
              and deep expertise in timber sourcing and distribution, we have
              built a reputation for reliability and quality.
            </p>
            <p>
              Our journey began with a simple mission: to provide construction
              professionals with access to high-quality timber products at
              competitive prices, backed by exceptional service and reliable
              delivery. Today, we are proud to be a trusted partner to hundreds
              of businesses across multiple industries.
            </p>
            <p>
              We understand the critical role that quality materials play in
              construction projects. That's why we maintain strict quality
              control standards, work with certified suppliers, and ensure every
              product meets industry specifications before it reaches our
              customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-timber-cream">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-timber-dark-brown">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-timber-green text-white rounded-lg mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-timber-dark-brown">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-timber-dark-brown">
            Why Choose TimberSouq
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-timber-green pl-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Quality-Assured Materials
              </h3>
              <p className="text-gray-700">
                Every product in our inventory undergoes rigorous quality
                checks. We source from certified suppliers and maintain strict
                standards to ensure you receive only the best materials.
              </p>
            </div>

            <div className="border-l-4 border-timber-green pl-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Competitive Pricing
              </h3>
              <p className="text-gray-700">
                Our strong supplier relationships and efficient operations allow
                us to offer premium products at competitive prices, providing
                excellent value for your investment.
              </p>
            </div>

            <div className="border-l-4 border-timber-green pl-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Consistent Supply
              </h3>
              <p className="text-gray-700">
                We maintain substantial inventory levels and work with reliable
                logistics partners to ensure consistent product availability and
                on-time delivery for your projects.
              </p>
            </div>

            <div className="border-l-4 border-timber-green pl-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Expert Support
              </h3>
              <p className="text-gray-700">
                Our knowledgeable team provides professional guidance on product
                selection, specifications, and applications to help you make the
                right choices for your project.
              </p>
            </div>

            <div className="border-l-4 border-timber-green pl-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Timely Delivery
              </h3>
              <p className="text-gray-700">
                We understand that time is critical in construction. Our
                efficient logistics ensure your materials arrive on schedule,
                keeping your projects on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-timber-green to-timber-dark-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust TimberSouq for their
            timber needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-timber-dark-green px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

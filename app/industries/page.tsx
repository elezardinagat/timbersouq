import { Building2, Home, Armchair, Hammer, Package } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve - TimberSouq",
  description:
    "TimberSouq serves construction, interior fit-out, furniture manufacturing, carpentry, and wholesale trading industries.",
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: "Construction",
      description:
        "Supplying structural timber, plywood, and formwork materials for residential, commercial, and infrastructure projects.",
      products: [
        "LVL Board",
        "Film Faced Plywood",
        "H20 Beam",
        "Scaffolding Board",
      ],
    },
    {
      icon: Home,
      title: "Interior Fit-Out",
      description:
        "Premium wood products for interior finishing, wall paneling, false ceilings, and decorative applications.",
      products: ["White Wood", "Commercial Plywood", "Hardboard"],
    },
    {
      icon: Armchair,
      title: "Furniture Manufacturing",
      description:
        "High-quality timber and engineered wood for furniture production, cabinetry, and custom woodwork.",
      products: ["White Wood", "Commercial Plywood", "Hardboard"],
    },
    {
      icon: Hammer,
      title: "Carpentry & Joinery",
      description:
        "Reliable wood products for professional carpenters and joinery workshops of all sizes.",
      products: ["White Wood", "LVL Board", "Commercial Plywood"],
    },
    {
      icon: Package,
      title: "Trading & Wholesale",
      description:
        "Bulk supply solutions for timber traders and wholesale distributors with competitive pricing.",
      products: ["All Products", "Bulk Orders", "Custom Solutions"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-timber-dark-brown to-timber-brown text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Trusted by professionals across multiple sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="bg-timber-cream rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-timber-green text-white rounded-lg flex items-center justify-center">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-display font-bold mb-3 text-timber-dark-brown">
                        {industry.title}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {industry.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {industry.products.map((product) => (
                          <span
                            key={product}
                            className="px-3 py-1 bg-white text-timber-green text-sm font-medium rounded-full"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-timber-cream">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-8 text-center text-timber-dark-brown">
            What Our Industry Partners Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Industry Expertise
              </h3>
              <p className="text-gray-700">
                Deep understanding of sector-specific requirements and standards
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Technical Support
              </h3>
              <p className="text-gray-700">
                Professional guidance on product selection and specifications
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Flexible Solutions
              </h3>
              <p className="text-gray-700">
                Custom orders and bulk supply options to match your needs
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-timber-dark-brown">
                Reliable Partnership
              </h3>
              <p className="text-gray-700">
                Consistent quality, pricing, and delivery you can count on
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-timber-green to-timber-dark-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Let's Discuss Your Industry Needs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whatever your sector, we have the right timber solutions for you
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-timber-dark-green px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}

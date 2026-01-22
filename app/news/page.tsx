import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, MapPin, Package, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates - TimberSouq",
  description:
    "Latest news, product updates, and industry insights from TimberSouq. Wood Expo Dubai 2026 and new product launches.",
};

const newsArticles = [
  {
    id: "wood-expo-dubai-2025-recap",
    title: "TimberSouq at Wood Expo Dubai 2025 - A Successful Showcase",
    date: "April 14-16, 2025",
    category: "Events",
    icon: MapPin,
    summary:
      "We had an incredible time at Wood Expo Dubai 2025, connecting with industry leaders and showcasing our premium timber solutions.",
    content: `
      TimberSouq participated in the prestigious Wood Expo Dubai 2025, one of the Middle East's largest timber and woodworking industry exhibitions. The event was held at the Dubai World Trade Centre from April 14-16, 2025.

      **Highlights from the Event:**
      
      • **Network Expansion**: We connected with over 500+ industry professionals, contractors, and potential partners from across the GCC region.
      
      • **Product Showcase**: Our booth featured live demonstrations of our premium LVL boards, film-faced plywood, and sustainable white wood solutions.
      
      • **Industry Recognition**: Our commitment to quality and sustainable sourcing was recognized by multiple visitors and industry experts.
      
      • **New Partnerships**: We established valuable partnerships with major construction firms and interior design companies in the UAE and Saudi Arabia.
      
      • **Customer Feedback**: Direct interactions with customers helped us understand evolving market needs and demands.

      The overwhelming response at Wood Expo Dubai 2025 reinforced our position as a trusted timber supplier in the region. We received numerous inquiries about our scaffolding boards, H20 beams, and custom timber solutions.

      Thank you to everyone who visited our booth and showed interest in our products. Your support drives us to continuously improve and expand our offerings.
    `,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wood-expo-dubai-2026-announcement",
    title: "Save the Date: Wood Expo Dubai 2026 - April Edition",
    date: "April 21-23, 2026",
    category: "Upcoming Event",
    icon: Calendar,
    summary:
      "Join us at Wood Expo Dubai 2026 this April! Discover new products, exclusive deals, and innovative timber solutions.",
    content: `
      **Mark Your Calendars!**
      
      TimberSouq is excited to announce our participation in the upcoming **Wood Expo Dubai 2026**, scheduled for **April 21-23, 2026** at the Dubai World Trade Centre.

      **What to Expect:**
      
      • **New Product Launches**: Be the first to see our latest additions to the timber product line, including advanced formwork systems and premium hardwood options.
      
      • **Exclusive Show Offers**: Special pricing and bulk order discounts available only during the expo period.
      
      • **Live Demonstrations**: Watch our experts demonstrate product installation techniques and best practices for timber handling.
      
      • **Technical Consultations**: Free one-on-one consultations with our timber specialists to discuss your project requirements.
      
      • **Sustainability Showcase**: Learn about our eco-friendly sourcing practices and certified sustainable timber options.
      
      • **Networking Opportunities**: Connect with architects, contractors, developers, and industry professionals from across the Middle East.

      **Booth Location**: To be announced soon. Stay tuned for updates!
      
      **Event Details:**
      - Date: April 21-23, 2026 - date not finalized
      - Time: 10:00 AM - 7:00 PM daily
      - Venue: Dubai World Trade Centre
      - Entry: Free registration (limited spots available)

      **Pre-Register Now**: Contact us to schedule a meeting at our booth and receive exclusive early-bird offers. Email info@timbersouq.com or call +971 4 251 2418 to reserve your spot.

      We look forward to welcoming you to Wood Expo Dubai 2026 and showcasing how TimberSouq continues to lead the timber industry in quality, innovation, and customer service.
    `,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "new-products-2026",
    title: "Introducing TimberSouq's New Product Range for 2026",
    date: "January 10, 2026",
    category: "Product Launch",
    icon: Package,
    summary:
      "Exciting new additions to our product lineup! Enhanced quality, better performance, and competitive pricing.",
    content: `
      TimberSouq is thrilled to introduce our expanded product range for 2026, designed to meet the evolving needs of the construction and interior design industries.

      **New Products Available Now:**

      **1. Premium Grade Film Faced Plywood**
      - Enhanced water resistance with 40+ reuse cycles
      - Superior surface finish for cleaner concrete pours
      - Available in 12mm, 15mm, 18mm, and 21mm thickness
      - Ideal for high-rise construction and bridge projects

      **2. Advanced LVL Scaffold Boards**
      - Higher load capacity: up to 300kg
      - Extended length options up to 5.0m
      - Weather-resistant coating for outdoor use
      - Meets international safety standards (BS 2482, EN 13374)

      **3. Hardboard Premium Collection**
      - Smooth surface finish perfect for interior applications
      - Moisture-resistant variants for humid environments
      - Available in standard and custom sizes
      - Excellent for furniture backing and paneling

      **4. Commercial Grade White Wood**
      - PEFC certified sustainable sourcing
      - Kiln-dried for optimal moisture content (10-12%)
      - Superior grain consistency
      - Available in S4S (surfaced four sides) finish

      **5. Heavy-Duty H20 Timber Beams**
      - Reinforced design for maximum load distribution
      - Compatible with all major formwork systems
      - Extended lifespan with protective coating
      - Lightweight yet incredibly strong

      **Coming Soon in Q2 2026:**
      - Marine-grade plywood for coastal projects
      - Exotic hardwood options for luxury interiors
      - Custom-cut timber services with 24-hour turnaround
      - Fire-retardant treated wood solutions

      **Special Launch Offers:**
      - 15% discount on bulk orders (minimum 500 sheets/boards)
      - Free delivery within Dubai for orders above AED 10,000
      - Extended payment terms for repeat customers
      - Complimentary technical consultation for large projects

      All our new products maintain our commitment to quality, sustainability, and competitive pricing. Each item undergoes rigorous quality checks and comes with our satisfaction guarantee.

      **Get Samples**: Contact us to request product samples and technical specifications. Our team is ready to help you choose the right materials for your project.

      Visit our products page or contact our sales team for detailed specifications, pricing, and availability.
    `,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-timber-dark-brown to-timber-brown text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Stay updated with TimberSouq's latest events, product launches, and
            industry insights.
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl space-y-12">
          {newsArticles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Article Image */}
                <div
                  className="h-72 bg-gradient-to-br from-timber-green/20 to-timber-brown/20"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(45,64,52,0.85), rgba(47,33,24,0.75)), url(${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="h-full flex items-end p-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-timber-cream text-timber-dark-brown font-semibold text-sm">
                          <IconComponent className="h-4 w-4" />
                          {article.category}
                        </span>
                        <span className="text-white/90 text-sm flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    {article.summary}
                  </p>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {article.content.split("\n\n").map((paragraph, idx) => {
                      // Handle bullet points
                      if (paragraph.trim().startsWith("•")) {
                        const items = paragraph
                          .split("\n")
                          .filter((line) => line.trim());
                        return (
                          <ul key={idx} className="space-y-2 my-4">
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-gray-700">
                                {item.replace("•", "").trim()}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      // Handle bold headers
                      if (
                        paragraph.trim().startsWith("**") &&
                        paragraph.trim().endsWith("**")
                      ) {
                        return (
                          <h3
                            key={idx}
                            className="text-xl font-bold text-timber-dark-brown mt-6 mb-3"
                          >
                            {paragraph.replace(/\*\*/g, "")}
                          </h3>
                        );
                      }
                      // Regular paragraphs
                      return paragraph.trim() ? (
                        <p key={idx} className="mb-4 leading-relaxed">
                          {paragraph.split("**").map((part, partIdx) =>
                            partIdx % 2 === 1 ? (
                              <strong
                                key={partIdx}
                                className="font-semibold text-timber-dark-brown"
                              >
                                {part}
                              </strong>
                            ) : (
                              part
                            ),
                          )}
                        </p>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Call to Action */}
                {index === 1 && ( // Show CTA for Wood Expo 2026 announcement
                  <div className="px-8 pb-8">
                    <div className="bg-timber-green/10 border-2 border-timber-green rounded-lg p-6">
                      <h4 className="text-lg font-bold text-timber-dark-brown mb-3">
                        Register Your Interest
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Pre-register for Wood Expo Dubai 2026 and receive
                        exclusive offers!
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-timber-green text-white px-6 py-3 rounded-md hover:bg-timber-dark-green transition-colors font-semibold"
                      >
                        <Calendar className="h-5 w-5" />
                        Contact Us to Register
                      </Link>
                    </div>
                  </div>
                )}

                {index === 2 && ( // Show CTA for new products
                  <div className="px-8 pb-8">
                    <div className="bg-timber-cream border-2 border-timber-brown/20 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-timber-dark-brown mb-3">
                        Explore Our New Products
                      </h4>
                      <p className="text-gray-700 mb-4">
                        View our complete product range and request samples
                        today!
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/products"
                          className="inline-flex items-center gap-2 bg-timber-green text-white px-6 py-3 rounded-md hover:bg-timber-dark-green transition-colors font-semibold"
                        >
                          <Package className="h-5 w-5" />
                          View Products
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-white text-timber-green border-2 border-timber-green px-6 py-3 rounded-md hover:bg-timber-green hover:text-white transition-colors font-semibold"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Stay Updated CTA */}
      <section className="bg-timber-dark-brown text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-timber-cream" />
          <h2 className="text-3xl font-display font-bold mb-4">
            Stay Updated with TimberSouq
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get the latest news on product launches, industry events, and
            exclusive offers directly from us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-timber-green text-white px-8 py-4 rounded-md hover:bg-timber-dark-green transition-colors font-semibold text-lg"
          >
            Contact Us for Updates
          </Link>
        </div>
      </section>
    </div>
  );
}

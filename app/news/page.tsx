import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates - TimberSouq",
  description:
    "Latest news, product updates, and industry insights from TimberSouq.",
};

const articles = [
  {
    title: "New Batch of LVL Boards Arrived",
    date: "Jan 05, 2026",
    category: "Logistics",
    summary:
      "Fresh inventory with enhanced quality checks and faster dispatch windows.",
    image:
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Formwork Solutions for Q1 Projects",
    date: "Dec 18, 2025",
    category: "Products",
    summary:
      "Recommended mixes of H20 beams and film faced plywood to reduce pour cycles.",
    image:
      "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sustainable White Wood Sourcing",
    date: "Nov 30, 2025",
    category: "Sustainability",
    summary:
      "Our updated sourcing program now includes additional certified forests.",
    image:
      "https://images.unsplash.com/photo-1459486208975-05d4c74eff9d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-timber-dark-brown to-timber-brown text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Announcements, inventory updates, and industry tips from the
            TimberSouq team.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div
                className="h-52 bg-gray-200"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.45)), url(${article.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden
              ></div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="px-3 py-1 rounded-full bg-timber-cream text-timber-dark-brown font-medium">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-timber-dark-brown">
                  {article.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{article.summary}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-timber-green font-semibold hover:text-timber-dark-green"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

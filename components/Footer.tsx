import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const productLinks = [
    { href: "/products/lvl-board", label: "LVL Board" },
    { href: "/products/white-wood", label: "White Wood" },
    { href: "/products/scaffolding-board", label: "Scaffolding Board" },
    { href: "/products/film-faced-plywood", label: "Film Faced Plywood" },
  ];

  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-timber-charcoal text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/timbersouq-logo.png"
                alt="TimberSouq Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for premium timber and wood products. Quality
              assurance and reliable delivery across the region.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-timber-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-timber-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-timber-green flex-shrink-0 mt-0.5" />
                <div>
                  <p>+971 4 251 2418</p>
                  <p className="text-gray-400 text-xs">
                    Landline Available 9:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
              {/* <li className="flex items-start space-x-3 text-sm">
                <Mail className="h-5 w-5 text-timber-green flex-shrink-0 mt-0.5" />
                <span>info@timbersouq.com</span>
              </li> */}
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-timber-green flex-shrink-0 mt-0.5" />
                <span>
                  Suite 503, Platinum Business Centre, Baghdad Street, 7A
                  Street, Al Nahda 2, Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-xs">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} TimberSouq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

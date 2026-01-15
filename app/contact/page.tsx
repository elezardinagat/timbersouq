import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - TimberSouq",
  description:
    "Get in touch with TimberSouq for inquiries, quotes, and customer support. We are here to help with your timber needs.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-timber-dark-brown to-timber-brown text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Get in touch for inquiries, quotes, and support
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-timber-dark-brown">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-timber-green text-white rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-timber-dark-brown">
                      Phone
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="tel:+97142512418"
                        className="hover:text-timber-green"
                      >
                        +971 4 251 2418
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-timber-green text-white rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-timber-dark-brown">
                      WhatsApp
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="https://wa.me/971526443782"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-timber-green"
                      >
                        +971 52 644 3782
                      </a>
                      {" | "}
                      <a
                        href="https://wa.me/9715544413612"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-timber-green"
                      >
                        +971 55 441 3612
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
                {/* 
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-timber-green text-white rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-timber-dark-brown">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="mailto:info@timbersouq.com"
                        className="hover:text-timber-green"
                      >
                        info@timbersouq.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-timber-green text-white rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-timber-dark-brown">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-timber-green text-white rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-timber-dark-brown">
                      Location
                    </h3>
                    <p className="text-gray-700">
                      Suite 503, Platinum Business Centre, Baghdad Street, 7A
                      Street, Al Nahda 2, Dubai, UAE
                    </p>
                    <p className="text-sm text-gray-500">
                      Serving the entire region
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-timber-cream rounded-lg p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-timber-dark-brown">
                Send Us a Message
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-timber-dark-brown text-center">
            Visit Our Location
          </h2>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1645.7842233837334!2d55.368363477169545!3d25.28764736457379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d74f09a13cd%3A0x87d257dd32a62e81!2sPlatinum%20Business%20Centre!5e1!3m2!1sen!2sus!4v1768394646358!5m2!1sen!2sus"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-lg mb-4">
              <strong>Timber Souq Office</strong>
              <br />
              Suite # 503, Platinum Business Centre, Baghdad Street, 7A Street
              <br />
              Al Nahda 2, Dubai, UAE
            </p>
            <a
              href="https://maps.google.com/?q=Platinum+Business+Centre+Baghdad+Street+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-timber-green text-white px-6 py-3 rounded-md hover:bg-timber-dark-green transition-colors font-semibold"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-timber-charcoal text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Prefer Instant Communication?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Reach out via WhatsApp for immediate assistance with your timber
            needs
          </p>
          <a
            href="https://wa.me/971526443782"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 transition-colors font-semibold text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

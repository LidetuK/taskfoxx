import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ServiceCategoryGrid from "./ServiceCategoryGrid";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2E4A9A] to-[#3E5AAA] text-white py-20 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-blue-300/20 to-transparent rounded-full translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book trusted help for home tasks
            </h1>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What do you need help with?"
                  className="h-14 pl-6 pr-16 text-lg bg-white text-gray-900 border-0 rounded-full shadow-lg w-full"
                />
                <button className="absolute right-2 top-2 h-10 w-10 rounded-full bg-[#FF6B35] hover:bg-[#FF8C35] p-0">
                  🔍
                </button>
              </div>
            </div>

            {/* Service Category Icons */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {[
                { label: "Assembly", active: true },
                { label: "Mounting" },
                { label: "Moving" },
                { label: "Cleaning" },
                { label: "Outdoor Help" },
                { label: "Home Repairs" },
                { label: "Painting" },
                { label: "Trending" },
              ].map((service, index) => (
                <div
                  key={service.label}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`p-4 rounded-full mb-2 transition-all duration-200 group-hover:scale-110 ${
                      service.active
                        ? "bg-[#FF6B35] text-white"
                        : "bg-white/10 text-white group-hover:bg-white/20"
                    }`}
                  >
                    <span className="text-2xl">🔧</span>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      service.active
                        ? "text-[#FF6B35] border-b-2 border-[#FF6B35] pb-1"
                        : "text-white/80"
                    }`}
                  >
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Service Categories with Pills */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "General Furniture Assembly",
              "IKEA Assembly",
              "Crib Assembly",
              "PAX Assembly",
              "Bookshelf Assembly",
              "Desk Assembly",
            ].map((service) => (
              <button
                key={service}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-[#1E3A8A] hover:text-[#1E3A8A] bg-white"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Assembly Service Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Assembly
                </h2>
                <div className="flex items-start gap-3 mb-6">
                  <span className="text-2xl">✅</span>
                  <p className="text-gray-700 text-lg">
                    Assemble or disassemble furniture items by unboxing,
                    building, and any cleanup.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Furniture Assembly Service"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">
                Furniture Assemblies:
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
                3.4 million+
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">
                Moving tasks:
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
                1.5 million+
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">
                Items mounted:
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
                1 million+
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">
                Home Repairs:
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
                700,000+
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">
                Homes cleaned:
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
                890,000+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Popular Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Furniture Assembly",
                price: "GHS 49",
                image:
                  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
              },
              {
                title: "Mount Art or Shelves",
                price: "GHS 65",
                image:
                  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80",
              },
              {
                title: "Mount a TV",
                price: "GHS 69",
                image:
                  "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
              },
              {
                title: "Help Moving",
                price: "GHS 67",
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white rounded-lg border"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    Projects starting at {project.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Home & Apartment Cleaning",
                price: "GHS 49",
                image:
                  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
              },
              {
                title: "Minor Plumbing Repairs",
                price: "GHS 74",
                image:
                  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80",
              },
              {
                title: "Electrical Help",
                price: "GHS 69",
                image:
                  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80",
              },
              {
                title: "Heavy Lifting",
                price: "GHS 61",
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white rounded-lg border"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    Projects starting at {project.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whatever you need done, TaskFOXX has skilled professionals ready
              to help.
            </p>
          </div>
          <ServiceCategoryGrid />
          <div className="text-center mt-8">
            <Link to="/services">
              <button className="px-6 py-2 border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white rounded-md">
                View All Categories →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  How it works
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg">
                        Choose a Tasker by price, skills, and reviews.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg">
                        Schedule a Tasker as early as today.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg">
                        Chat, pay, tip, and review all in one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                alt="How TaskFOXX Works"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Help Today Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Get help Today
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "General Mounting",
              "TV Mounting",
              "Furniture Assembly",
              "IKEA Furniture Assembly",
              "Help Moving",
              "House Cleaning",
              "Yardwork",
              "Furniture Removal",
              "Lawn Care",
              "Hang Pictures",
              "In Home Furniture Movers",
              "Shelf Mounting",
              "Light Installation",
              "Plumbing",
            ].map((service) => (
              <button
                key={service}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/5"
              >
                {service}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/services"
              className="text-[#1E3A8A] hover:text-[#2E4A9A] font-medium flex items-center gap-2"
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers and service providers across
              Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="border-none shadow-lg bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "TaskFOXX helped me find a reliable electrician within hours
                when my power went out. The service was fast and
                professional!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kwame"
                  alt="Kwame"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Kwame Mensah</p>
                  <p className="text-sm text-gray-500">Accra</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border-none shadow-lg bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As a graphic designer, TaskFOXX has connected me with clients
                I would never have found otherwise. My income has doubled!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ama"
                  alt="Ama"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Ama Boateng</p>
                  <p className="text-sm text-gray-500">Kumasi</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="border-none shadow-lg bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I needed help moving to a new apartment, and TaskFOXX
                connected me with affordable movers who handled everything
                with care."
              </p>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kofi"
                  alt="Kofi"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Kofi Addo</p>
                  <p className="text-sm text-gray-500">Takoradi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-[#2E4A9A] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get the TaskFOXX App
              </h2>
              <p className="text-lg mb-6">
                Download our mobile app for a better experience. Post tasks,
                find providers, and manage payments on the go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 px-6 py-3 rounded-md">
                  📱 Google Play
                </button>
                <button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2 px-6 py-3 rounded-md">
                  📱 App Store
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                alt="TaskFOXX Mobile App"
                className="rounded-lg shadow-xl w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
              Why Trust TaskFOXX
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-bold mb-2">Verified Providers</h3>
              <p className="text-gray-600">
                All service providers undergo thorough verification.
              </p>
            </div>

            <div className="p-4">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Your money is held safely until the job is complete.
              </p>
            </div>

            <div className="p-4">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-bold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our team is available to help 7 days a week.
              </p>
            </div>

            <div className="p-4">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-bold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                Not happy? We'll work to make it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of Ghanaians who are getting things done with
            TaskFOXX every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/providers">
              <button className="bg-[#FF6B35] hover:bg-[#FF8C35] text-white px-8 py-3 rounded-md w-full sm:w-auto">
                Find a Service Provider
              </button>
            </Link>
            <Link to="/provider/dashboard">
              <button className="border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white px-8 py-3 rounded-md w-full sm:w-auto">
                Become a Provider
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

const Middle = () => {
  return (
    <div className="w-full py-16 px-4 md:px-10 space-y-20">

      {/* 1. Features Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Fast Performance", desc: "Optimized for speed and scalability." },
            { title: "Modern Design", desc: "Clean UI with latest design trends." },
            { title: "Secure System", desc: "Security-first architecture." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl shadow-md border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-indigo-600 text-white rounded-2xl py-12 px-6">
        <div className="grid md:grid-cols-4 text-center gap-6">
          {[
            { num: "120+", label: "Projects" },
            { num: "50+", label: "Clients" },
            { num: "10k+", label: "Users" },
            { num: "5★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold">{stat.num}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Our Platform</h2>
          <p className="text-gray-600 leading-relaxed">
            We build modern full-stack applications using React, Node.js, and
            cutting-edge technologies. Our goal is to deliver scalable and
            production-ready solutions.
          </p>
        </div>

        <div className="bg-gray-100 h-64 rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </section>

      {/* 4. Services Section */}
      <section>
        <h2 className="text-center text-3xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Web Development",
            "Mobile Apps",
            "UI/UX Design",
            "Backend API",
            "Cloud Deployment",
            "SEO Optimization",
          ].map((service) => (
            <div
              key={service}
              className="p-5 rounded-xl border hover:bg-indigo-50 transition text-center font-medium"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-16 px-6 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6">
          Let’s build something amazing together.
        </p>
        <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default Middle;
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Build Modern Web Apps",
    desc: "Create fast, scalable, and beautiful applications using React & TypeScript.",
    bg: "bg-gradient-to-r from-indigo-600 to-purple-600",
  },
  {
    title: "Learn Full Stack Development",
    desc: "Master frontend + backend with MERN stack and real-world projects.",
    bg: "bg-gradient-to-r from-emerald-500 to-teal-600",
  },
  {
    title: "Deploy Like a Pro",
    desc: "Use Docker, CI/CD, and cloud platforms to deploy your apps easily.",
    bg: "bg-gradient-to-r from-pink-500 to-red-500",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden mt-16">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`min-w-full h-full flex flex-col justify-center items-center text-white px-6 text-center ${slide.bg}`}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              {slide.desc}
            </p>

            <button className="mt-6 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
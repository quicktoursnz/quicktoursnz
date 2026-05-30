"use client";

const features = [
  {
    emoji: "🚐",
    title: "Private Vehicles Only",
    desc: "No strangers, no waiting. The entire vehicle is yours — same price regardless of group size.",
  },
  {
    emoji: "🧭",
    title: "Expert Local Guides",
    desc: "Our guides are passionate storytellers who bring every landscape and legend to life.",
  },
  {
    emoji: "📅",
    title: "Flexible Cancellation",
    desc: "Full refund available up to one week before departure — complete peace of mind.",
  },
  {
    emoji: "⭐",
    title: "5-Star Rated",
    desc: "Consistently 5 stars from travellers across 40+ countries on TripAdvisor & Google.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-linear-to-br from-blue-50 via-white to-blue-50 py-4 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT — Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 aspect-4/3">
          {/* Replace src with your actual image */}
          <img
            src="/assets/img/home1/whychooseus.avif"
            alt="Scenic boat on a mountain lake"
            className="w-full h-full object-cover"
          />
          {/* Overlay badge */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 border border-blue-100 shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-lg shrink-0">
              🌿
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-tight">Eco-Conscious Travel</p>
              <p className="text-xs text-gray-500 font-light">Committed to sustainable tourism in Aotearoa</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div>
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#e8c96a] mb-4">
            Why Choose Us
          </p>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-5">
            The{" "}
            <em className="text-[#e8c96a]">difference</em>
            <br />
            is in the details
          </h2>

          {/* Subtext */}
          <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-10 max-w-md">
            We're not a bus tour. Every journey is private, personal, and built around your group.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 group">
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                  {f.emoji}
                </div>
                {/* Text */}
                <div className="pt-0.5">
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
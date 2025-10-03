const HeroSection = ({ onDiscoverColors }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <div className="space-y-10 animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white drop-shadow-2xl">
              مرحباً بكم في عالم
            </span>
            <span className="block mt-3 bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-500 bg-clip-text text-transparent filter drop-shadow-lg">
              BONDMAXX
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            اكتشفوا تشكيلة فريدة من الألوان والدهانات الفاخرة، حيث الجودة تلتقي
            بالإبداع. نقدم حلول طلاء مبتكرة ومتكاملة تلبي جميع احتياجاتكم في
            التصميم الداخلي والخارجي، مع ضمان الأناقة والدقة في كل لمسة.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onDiscoverColors}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/60"
            >
              <span className="flex items-center gap-3">
                <i className="fas fa-palette text-xl" />
                <span>اكتشف جميع الألوان</span>
                <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              {
                icon: "fa-certificate",
                text: "ضمان الجودة",
                color: "text-blue-400",
              },
              {
                icon: "fa-swatchbook",
                text: "+360 لون",
                color: "text-cyan-400",
              },
              {
                icon: "fa-shield-check",
                text: "صديق للبيئة",
                color: "text-blue-300",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex items-center justify-center gap-3 text-blue-200 hover:text-cyan-300 transition-all duration-300 px-4 py-3 rounded-xl hover:bg-blue-500/10 backdrop-blur-sm"
              >
                <i
                  className={`fas ${feature.icon} ${feature.color} text-xl transition-colors drop-shadow-lg`}
                />
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-full border border-blue-400/30 hover:bg-blue-500/30 transition-colors cursor-pointer">
          <i className="fas fa-chevron-down text-cyan-300 text-xl" />
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-zoom {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

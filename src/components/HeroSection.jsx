const HeroSection = ({ onDiscoverColors }) => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600') no-repeat center center/cover",
      }}
    >
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          مرحباً بكم في عالم BONDMAXX
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          اكتشف مجموعة استثنائية من الألوان والدهانات عالية الجودة. نحن نقدم
          حلولاً مبتكرة ومتطورة لجميع احتياجاتك في الطلاء والديكور، مع ضمان
          الجودة والأناقة في كل تفصيل.
        </p>
        <button
          onClick={onDiscoverColors}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-lg transition text-white font-medium"
        >
          <i className="fas fa-palette"></i>
          اكتشف جميع الألوان
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-b from-green-900 via-green-600 to-white text-white h-screen flex flex-col justify-center items-center text-center px-4">
      
      {/* LOGO */}
    <img
        src="./src/assets/logo mifkho.png"
        alt="logo"
        className="w-50 mb-1 mx-auto"
    />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Yayasan Majlis Taklim Miftahul Khair
      </h1>

      <div className="max-w-4xl mx-auto mb-6">
        <div className="p-4 rounded-xl shadow-md text-white">
          <p className="text-xl italic font-medium">"Iman, Ilmu, dan Amal"</p>
        </div>
      </div>

    </section>
  );
}

export default Hero;
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white/70 backdrop-blur-md text-green-900 p-4 fixed w-full top-0 z-50 border-b">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="logo mifkho.png" alt="logo" className="h-8 w-auto" />
            <h1 className="font-bold text-lg">
              <a href="#hero">Miftahul Khair</a>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li><a href="#" className="hover:text-green-600 transition-colors">Home</a></li>
            <li><a href="#tentang" className="hover:text-green-600 transition-colors">Tentang</a></li>
            <li><a href="#kegiatan" className="hover:text-green-600 transition-colors">Kegiatan</a></li>
            <li><a href="#kontak" className="hover:text-green-600 transition-colors">Kontak</a></li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {/* Icon berubah saat buka/tutup */}
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MENU MOBILE (Slide Down Animation) */}
        <div
          className={`absolute top-full left-0 w-full bg-white/70 backdrop-blur-md border-b shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8 font-medium">
            <a href="#hero" onClick={() => setOpen(false)} className="hover:text-green-600">Home</a>
            <a href="#tentang" onClick={() => setOpen(false)} className="hover:text-green-600">Tentang</a>
            <a href="#kegiatan" onClick={() => setOpen(false)} className="hover:text-green-600">Kegiatan</a>
            <a href="#kontak" onClick={() => setOpen(false)} className="hover:text-green-600">Kontak</a>
          </div>
        </div>
      </nav>

      {/* OVERLAY (Background Gelap Tipis) */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;
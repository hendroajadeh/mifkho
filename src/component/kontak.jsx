import React from "react";
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaFacebook, 
  FaEnvelope,
  FaYoutube,
  FaTiktok
} from "react-icons/fa";

export default function Kontak() {
  const kontak = [
    {
      icon: <FaInstagram size={24} />,
      label: "Instagram",
      link: "https://www.instagram.com/mifkhoofficiall",
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      link: "https://wa.me/+6287820033105",
    },
    {
      icon: <FaEnvelope size={24} />,
      label: "Email",
      link: "mailto:yaymtmiftahulkhoir@gmail.com",
    },
    {
      icon: <FaFacebook size={24} />,
      label: "Facebook",
      link: "https://www.facebook.com/share/18PLiKRdtR/",
    },
    {
      icon: <FaYoutube size={24} />,
      label: "YouTube",
      link: "https://www.youtube.com/@yay.mt.miftahul_khoir",
    },
    {
      icon: <FaTiktok size={24} />,
      label: "TikTok",
      link: "https://www.tiktok.com/@mifkhoofficiall",
    },
  ];

  return (
    <section id="kontak" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-green-900">
        Kontak Kami
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {kontak.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-5 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition duration-300"
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
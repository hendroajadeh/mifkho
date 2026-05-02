import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Kegiatan() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const kegiatan = {
    sosial: {
      title: "Kegiatan Sosial",
      cover: "/src/assets/kegiatan3.webp",
      subs: {
        qurban: {
          title: "Qurban",
          cover: "kegiatan/qurban/kegiatan3.webp",
          images: [
            "kegiatan/qurban/q1(1).jpeg",
            "kegiatan/qurban/q1(2).jpeg",
            "kegiatan/qurban/q1(3).jpeg",
          ],
        },
        phbi: {
          title: "Hari Besar Islam",
          cover: "kegiatan/PHBI/PHBI(1).jpeg",
          images: [
            "kegiatan/PHBI/PHBI(1).jpeg",
            "kegiatan/PHBI/PHBI(2).jpeg",
            "kegiatan/PHBI/PHBI(3).jpeg",
            "kegiatan/PHBI/PHBI(4).jpeg",
          ],
        },
        zakat: {
          title: "Zakat Fitrah",
          cover: "kegiatan4.jpg",
          images: ["kegiatan4.jpg"],
        },
      },
    },

    kajian: {
      title: "Kajian Umum",
      cover: "kegiatan.jpeg",
      subs: {
        malam: {
          title: "Kajian Malam Jumat",
          cover: "kegiatan/kegiatanr.jpeg",
          images: ["kegiatan/kegiatanr.jpeg"],
        },
        tilawah: {
          title: "Tilawatil Qur'an",
          cover: "kegiatan/kegiatan1.jpeg",
          images: ["kegiatan/kegiatan1.jpeg"],
        },
        sejarah: {
          title: "Bedah Sejarah Nabi",
          cover: "kegiatan/kegiatan.jpeg",
          images: ["kegiatan/kegiatan.jpeg"],
        },
      },
    },
  };

  return (
    <section id="kegiatan" className="px-4 py-8 md:p-10 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-green-900">
        Kegiatan Kami
      </h2>

      {/* LEVEL 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
        {Object.keys(kegiatan).map((key) => (
          <div
            key={key}
            onClick={() => {
              setActiveCategory(key);
              setActiveSub(null);
            }}
            className="relative cursor-pointer rounded-xl overflow-hidden group shadow-lg"
          >
            <img
              src={kegiatan[key].cover}
              alt=""
              className="h-40 sm:h-48 md:h-52 w-full object-cover group-hover:scale-110 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-base md:text-lg">
              {kegiatan[key].title}
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveCategory(null);
              setActiveSub(null);
            }}
          >
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-xl w-[95%] max-w-4xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* NAV */}
              <div className="flex justify-between mb-4">
                {activeSub && (
                  <button
                    onClick={() => setActiveSub(null)}
                    className="text-green-700 font-bold text-sm md:text-base"
                  >
                    ← 
                  </button>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-800">
                {activeSub
                  ? kegiatan[activeCategory].subs[activeSub].title
                  : kegiatan[activeCategory].title}
              </h3>

              {/* LEVEL 2 */}
              {!activeSub && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {Object.keys(kegiatan[activeCategory].subs).map((sub) => (
                    <div
                      key={sub}
                      onClick={() => setActiveSub(sub)}
                      className="cursor-pointer rounded-lg overflow-hidden group"
                    >
                      <img
                        src={kegiatan[activeCategory].subs[sub].cover}
                        alt=""
                        className="h-32 sm:h-40 w-full object-cover group-hover:scale-110 transition"
                      />
                      <p className="text-center mt-1 sm:mt-2 text-sm font-semibold">
                        {kegiatan[activeCategory].subs[sub].title}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* LEVEL 3 */}
              {activeSub && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {kegiatan[activeCategory].subs[activeSub].images.map(
                    (img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        className="w-full max-h-48 object-contain bg-gray-200"
                      />
                    )
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Kegiatan;
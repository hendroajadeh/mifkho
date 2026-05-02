import { useState } from "react";

function Tentang() {
  const [selected, setSelected] = useState(null);

  // 🔥 DATA UTAMA
  const pendiri = {
    nama: "Ustadz H. Iman Ibrahim Al-Adham",
    img: "pengajar/Abi.png",
    bio: "H. Iman Ibrahim Al-Adham, S.Ag (lahir 1979), adalah seorang guru agama asal Jakarta yang menuntaskan pendidikan tinggi di Pondok Pesantren Miftahul Huda, Tasikmalaya. Lulus pada tahun 2001 dengan gelar S.Ag dan pengalaman pelatihan mental semi-militer TNI, ia mengabdi selama dua tahun dalam berbagai posisi strategis, termasuk sebagai Sekretaris Pribadi pimpinan pondok, sebelum akhirnya resmi diangkat menjadi staf pengajar pada awal tahun 2003.",
  };

  const pengurus = [
    {
      nama: "Nn. RATU MONA NADHIROH",
      jabatan: "Sekretaris",
      img: "pengajar/Pengurus.png",
      bio: "Mengelola administrasi majlis.",
    },
    {
      nama: "Ny. SITI HOLILAH",
      jabatan: "Bendahara",
      img: "pengajar/Pengurus.png",
      bio: "Mengatur keuangan majlis.",
    },
    {
      nama: "Fahmi",
      jabatan: "Ketua Santri",
      img: "pengajar/rasid ganteng.jpg",
      bio: "Memimpin para santri.",
    },
  ];

  return (
    <section id="tentang" className="p-10 bg-white text-center">

      {/* 🔥 TENTANG (RATA KANAN KIRI) */}
      <h2 className="text-3xl font-bold mb-4 text-green-900">
        Tentang Kami
      </h2>

      <p className="max-w-3xl mx-auto text-justify text-gray-600 mb-10 leading-relaxed">
        <strong className="block text-center mb-4 text-lg text-green-800">
            SEJARAH DAN LATAR BELAKANG PENDIRIAN
        </strong>
        Dalam sejarah estafet perjuangan Islam di Nusantara, Majlis Ta’lim merupakan salah satu sistem pendidikan 
        keagamaan yang berperan penting dalam mencerdaskan anak bangsa melalui pendalaman ilmu agama sebagai 
        bekal kebahagiaan dunia dan akhirat. Di tengah tantangan zaman, Majlis Ta’lim menjadi benteng aqidah 
        umat sekaligus mitra pemerintah dalam membentengi generasi muda dari demoralisasi dan pergaulan bebas.
        <br />
        <br />
        Kami, yang terhimpun dalam HAMIDA (Himpunan Alumni Miftahul Huda) Manonjaya Tasikmalaya, merasa terpanggil 
        sebagai putra daerah untuk peduli terhadap kondisi sosial masyarakat. Perjuangan ini bukan berlandaskan 
        kemewahan harta, melainkan dedikasi maksimal demi Agama, Nusa, Bangsa, dan Tanah Air.
        <br />
        <br />
        Perjalanan ini dimulai pada tahun 2012 dengan kondisi sarana yang sangat terbatas (kontrakan 3x4 meter). 
        Namun, tingginya minat belajar santri memotivasi kami untuk terus bergerak. Atas izin Allah SWT, pada 
        rentang tahun 2012 hingga 2014, kami berhasil membangun gedung Majlis Ta’lim permanen tiga lantai di 
        atas tanah milik sendiri sebagai pusat pendidikan yang terus berjalan hingga saat ini.
      </p>

      {/* 🔥 VISI MISI (SAMPING-SAMPINGAN) */}
      <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-100">
          <h3 className="text-xl font-semibold text-green-800 mb-3">Visi</h3>
          <p className="text-gray-600 leading-relaxed">
            "Membentuk Generasi Muslim yang Kaaffah, yaitu generasi muslim yang dapat memahami, menghayati dan mengamalkan ajaran Islam secara totalitas."
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow border border-gray-100">
          <h3 className="text-xl font-semibold text-green-800 mb-3">Misi</h3>
          <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li>Menyelenggarakan proses pendidikan yang berciri khas Islam dalam usaha mencerdaskan kehidupan bangsa.</li>
            <li>Meningkatkan SDM yang berkualitas, sehingga mampu menciptakan suasana Kegiatan Belajar Mengajar (KBM) yang kondusif.</li>
            <li>Membekali peserta didik dengan ilmu pengetahuan yang relevan, keterampilan yang memadai dan atau karakter yang dapat diandalkan.</li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Tujuan</h3>
          <p className="text-gray-600 text-justify">
            Menciptakan lulusan (output) YAYASAN MAJLIS TALIM MIFTAHUL KHOIR yang memiliki pemahaman, penghayatan dan pengamalan ajaran Islam, dan memiliki dasar ilmu pengetahuan umum dan teknologi yang cukup memadai untuk mewujudkan manusia yang berkualitas yang dilandasi iman dan takwa (imtak) kepada Allah SWT.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-6 text-left">

        {/* SASARAN */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
            Sasaran
            </h3>
            <ul className="list-disc ml-5 text-gray-600 space-y-2">
            <li>Masyarakat Menengah dan masyarakat ekonomi lemah</li>
            <li>Remaja dan pemuda</li>
            <li>Anak-anak yatim-piatu atau yatim</li>
            <li>Lingkungan sekitar majlis</li>
            <li>Masyarakat Pendatang</li>
            </ul>
        </div>

        {/* STRATEGI */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
            Strategi
            </h3>
            <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Kepemimpinan Ketua Yayasan yang <strong>Organizing, Planning, Controlling</strong>.</li>
                <li>Guru dan Pengurus Yayasan yang profesional.</li>
                <li>Siswa/Santri yang Islami, giat, semangat, disiplin, ulet, dan tekun.</li>
                <li>Tenaga administratif yang kreatif.</li>
                <li>Sarana dan prasarana yang mendukung dan memadai.</li>
                <li>Lingkungan Kampus yang asri.</li>
                <li>Lingkungan masyarakat sekitar yang kondusif.</li>
                <li>Partisipasi masyarakat, orang tua siswa, praktisi pendidikan, tokoh masyarakat, aparat pemerintah setempat, alumni, dan donatur yang aktif.</li>
            </ul>
        </div>

      </div>

      {/* 🔥 DATA STATISTIK (SANTRI & PENGAJIAN) */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        <div className="bg-gray-100 p-4 rounded-lg shadow border-b-4 border-green-600">
          <h4 className="font-bold text-green-800 text-sm">Santri Rajul</h4>
          <p className="text-2xl font-bold">68</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow border-b-4 border-green-600">
          <h4 className="font-bold text-green-800 text-sm">Santri Banat</h4>
          <p className="text-2xl font-bold">96</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow border-b-4 border-green-600">
          <h4 className="font-bold text-green-800 text-sm">Jamaah Bapak-Bapak</h4>
          <p className="text-2xl font-bold">25</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow border-b-4 border-green-600">
          <h4 className="font-bold text-green-800 text-sm">Jamaah Ibu-Ibu</h4>
          <p className="text-2xl font-bold">20</p>
        </div>

        <div className="bg-green-800 p-4 rounded-lg shadow text-white col-span-2 md:col-span-1">
          <h4 className="font-bold text-green-200 text-sm">Majlis Ta'lim Binaan</h4>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* 🔥 PENDIRI */}
      <h3 className="text-2xl font-semibold mb-6 text-green-800">
        Pendiri
      </h3>

      <div
        onClick={() => setSelected(pendiri)}
        className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer max-w-sm mx-auto mb-12"
      >
        <img
          src={pendiri.img}
          alt={pendiri.nama}
          className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
        />
        <h4 className="font-bold text-lg">{pendiri.nama}</h4>
      </div>

      {/* 🔥 PENGURUS */}
      <h3 className="text-2xl font-semibold mb-6 text-green-800">
        Pengurus dan Pengajar
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {pengurus.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item)}
            className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.nama}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h4 className="font-semibold">{item.nama}</h4>
            <h4 className="text-lg">{item.jabatan}</h4>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-sm w-full mx-4 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.img}
              alt={selected.nama}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-6">{selected.nama} <br /></h3>
            <h3 className="text-xl mb-2">{selected.jabatan}</h3>
            <p className="text-gray-600">{selected.bio}</p>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Tentang;
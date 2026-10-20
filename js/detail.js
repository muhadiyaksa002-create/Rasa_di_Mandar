// 1. Data semua menu.
//    Kunci ("jepa", "bau-peapi", ...) harus sama persis dengan ?menu= di daftar.html
const dataKuliner = {

  "jepa": {
    nama: "Jepa",
    kutipan: "Sederhana bahannya, istimewa rasanya, melekat ceritanya.",
    foto: "image/jepa.jpeg",
    deskripsi: "Jepa merupakan makanan tradisional Mandar berbahan dasar singkong yang diolah menjadi panganan berbentuk pipih. Memiliki cita rasa khas dengan tekstur yang unik, jepa sering dinikmati bersama ikan dan berbagai lauk sebagai perpaduan sederhana yang menggugah selera.",
    bahan: ["Singkong", "Kelapa"],
    langkah: [
      "Kupas dan cuci singkong hingga bersih.",
      "Parut singkong hingga halus, lalu peras untuk mengurangi kadar airnya.",
      "Parut kelapa.",
      "Campurkan singkong parut dengan kelapa parut, aduk hingga rata.",
      "Pipihkan adonan pada panggangan dengan alat khusus dan tunggu hingga matang."
    ],
    asal: "Mandar, Sulawesi Barat",
    bahanUtama: "Singkong",
    disajikan: "Ikan atau lauk berkuah",
    harga: "Rp2.000 - Rp5.000 per porsi"
  },

  "bau-peapi": {
    nama: "Bau Peapi",
    kutipan: "Harum rempahnya, gurihnya ikan, hangatnya cita rasa tradisi",
    foto: "image/bau-peapi.jpg",
    deskripsi: "Bau Peapi merupakan hidangan ikan berkuah khas Mandar yang dikenal dengan perpaduan bumbu dan rempahnya. Sajian ini menghadirkan rasa gurih dan aroma yang menggugah selera, serta sering dinikmati bersama nasi hangat.",
    bahan: ["Ikan segar","Bawang merah","Kunyit","Cabai","Asam mangga","Garam","air"],
    langkah: ["Bersihkan ikan dan potong sesuai kebutuhan",
        "Haluskan cabai, bawang merah, garam, dan merica. Siapkan kunyit, asam mangga, serta daun bawang Mandar yang sudah diiris.",
        "Masukkan ikan ke dalam panci dan tambahkan bumbu yang telah di haluskan, dan aduk hingga rata.",
        "Tuangkan air secukupnya, masak dengan api sedang sampai air mendidih, lalu kecilkan api agar ikan matang merata.",
    ],
    asal: "Mandar, Sulawesi Barat",
    bahanUtama: "Ikan segar",
    disajikan: "Nasi hangat/Jepa",
    harga: "25.000 per porsi"
  },
  "pupuq": {
    nama: "Pupuq",
    kutipan: "Olahan sederhana, rasa istimewa, warisan yang tetap terjaga",
    foto: "image/pupuq.jpg",
    deskripsi: "Pupuq merupakan salah satu kuliner tradisional yang dikenal dalam kekayaan makanan Mandar. Sajian ini menjadi bagian dari ragam olahan lokal yang diwariskan melalui kebiasaan memasak masyarakat. Bahan dan cara pengolahannya dapat berbeda sesuai jenis pupuq dan resep setempat.",
    bahan: ["Ikan ","Kelapa parut","Bawang merah","serai","Cabai","jeruk","Minyak"],
    langkah: ["Bersihkan ikan dan kukus hingga matang.",
        "Haluskan bawang merah, serai, lengkuas, cabai, merica, dan garam. Tambahkan sedikit perasan jeruk nipis.",
        "Haluskan daging ikan, kemudian campurkan dengan bumbu dan kelapa parut lalu aduk hingga rata.",
        "Ambil adonan secukupnya lalu bentuk segitiga menggunakan cetakan.",
        "Goreng adonan yang sudah di bentuk dalam minyak panas dengan api sedang, tunggu hingga berwarna kecoklatan.",
        "tiriskan."
    ],
    asal: "Mandar, Sulawesi Barat",
    bahanUtama: "Ikan dan kelapa parut",
    disajikan: "Nasi hangat, kudapan",
    harga: "10.000 per 8 buah"
  },
  "loka-anjoroi": {
    nama: "Loka anjoroi",
    kutipan: "Manisnya pisang, Gurih santanya, Nikmatnya Tradisi",
    foto: "image/loka-anjoroi.jpg",
    deskripsi: "Loka Anjoroi merupakan hidangan tradisional berbahan pisang yang diolah dengan santan. Perpaduan rasa pisang dan gurihnya santan menciptakan sajian khas yang sederhana, tetapi memiliki daya tarik tersendiri bagi pencinta kuliner tradisional.",
    bahan: ["Pisang lokal","Santan kelapa"],
    langkah: ["Potong pisang sesuai kebutuhan.",
        "Masukkan pisang ke dalam panci.",
        "Masukkan santan kedalam panci berisi pisang secukupnya .",
        "Masak menggunakan api kecil sambil aduk sesekali.",
        "Tunggu hingga pisang empuk dan sajikan."
    ],
    asal: "Mandar, Sulawesi Barat",
    bahanUtama: "Pisang",
    disajikan: "Snack / kudapan",
    harga: "15.000 per porsi"
  },
  "bolu-paranggi": {
    nama: "Bolu paranggi",
    kutipan: "Lembut dalam gigitan, Manis dalam kenangan",
    foto: "image/bolu-paranggi.jpg",
    deskripsi: "Bolu Paranggi merupakan kue tradisional yang dikenal dengan cita rasa manis dan aroma khas gula merah. Teksturnya yang lembut menjadikannya pilihan kudapan untuk menemani waktu santai sekaligus memperkenalkan kekayaan kue tradisional Mandar.",
    bahan: ["Tepung terigu","Gula merah","Telur","Air secukupnya","Baking soda"],
    langkah: ["Masukkan air dan potongan gula merah untuk di larutkan, lalu dinginkan.",
        "Masukkan tepung terigu, baking soda, telur dan larutan gula merah.",
        "Aduk seluruh bahan sampai jadi kental,halus dan tidak menggumpal.",
        "Panaskan cetakan lalu tambahkan minyak sedikit agar adonan tidak lengeket.",
        "Tuang adonan ke cetakan secukupnya, panggang lalu tunggu hingga mengembang dan berwarna kecoklatan."
    ],
    asal: "Mandar, Sulawesi Barat",
    bahanUtama: "Tepung dan gula merah",
    disajikan: "Teh hangat atau kopi",
    harga: "10.000 per kemasan"
  },
  "ikan-tuing-tuing": {
    nama: "Ikan Tuing-tuing",
    kutipan: "Cita rasa laut yang khas, kelezatan yang mengundang selera.",
    foto: "image/ikan-tuing-tuing.jpg",
    deskripsi: "Ikan Tuing-tuing menjadi salah satu nama kuliner yang ingin diperkenalkan melalui website Rasa di Mandar. Hidangan berbahan ikan ini dapat menjadi bagian dari cerita kuliner pesisir dan kekayaan hasil laut masyarakat. Deskripsi pengolahan perlu disesuaikan dengan jenis ikan dan cara penyajian yang dimaksud secara lokal.",
    bahan: ["Ikan Tuing-tuing","Garam secukupnya"],
    langkah: ["Siapkan dan bersihkan ikan.",
        "Baluri ikan dengan garam secukupnya",
        "Diamkan bumbum agar merasap",
        "Kemudian asapi ikan hingga berwarna kecoklatan"
        
    ],
    asal: "Mandar, Sulawesi Barat",
    bahanUtama: "Ikan Tuing-tuing",
    disajikan: "Nasi hangat",
    harga: "10.000 - 25.000 per porsi"
  }
};

// 2. Baca nama menu dari alamat, contoh: detail.html?menu=jepa
const parameter = new URLSearchParams(window.location.search);
const kunci = parameter.get("menu");
const menu = dataKuliner[kunci];

// 3. Jika menu ditemukan, isi halaman. Jika tidak, tampilkan pesan.
if (menu) {
  document.title = menu.nama + " | Rasa di Mandar";
  document.getElementById("judul").textContent = menu.nama;
  document.getElementById("kutipan").textContent = menu.kutipan;
  document.getElementById("subjudul").textContent = "Tentang " + menu.nama;
  document.getElementById("deskripsi").textContent = menu.deskripsi;

  const foto = document.getElementById("foto");
  foto.src = menu.foto;
  foto.alt = menu.nama + ", makanan khas Mandar";

  // Buat satu <li> untuk setiap isi array
  document.getElementById("bahan").innerHTML =
    menu.bahan.map(item => `<li>${item}</li>`).join("");
  document.getElementById("langkah").innerHTML =
    menu.langkah.map(item => `<li>${item}</li>`).join("");

  document.getElementById("infoAsal").textContent = "Asal: " + menu.asal;
  document.getElementById("infoBahan").textContent = "Bahan utama: " + menu.bahanUtama;
  document.getElementById("infoSaji").textContent = "Disajikan dengan: " + menu.disajikan;
  document.getElementById("infoHarga").textContent = "Kisaran harga: " + menu.harga;
} else {
  document.getElementById("isiDetail").classList.add("d-none");
  document.getElementById("judul").textContent = "Menu tidak ditemukan";
  document.getElementById("pesanError").innerHTML =
    `<div class="alert alert-warning">Menu yang kamu cari belum tersedia.
     <a href="daftar.html" class="alert-link">Kembali ke daftar kuliner</a></div>`;
}
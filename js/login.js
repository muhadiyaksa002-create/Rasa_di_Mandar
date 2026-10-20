// 1. Ambil elemen dari HTML berdasarkan id
const form = document.getElementById("formLogin");
const kotakPesan = document.getElementById("pesan");

// 2. Fungsi untuk menampilkan alert Bootstrap
//    tipe: "danger" = merah (gagal), "success" = hijau (berhasil)
function tampilkanPesan(tipe, teks) {
  kotakPesan.innerHTML = `<div class="alert alert-${tipe}" role="alert">${teks}</div>`;
}

// 3. Jalankan validasi saat form dikirim (event submit)
form.addEventListener("submit", function (event) {
  event.preventDefault(); // cegah form diproses / halaman dimuat ulang

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    tampilkanPesan("danger", "Email tidak boleh kosong.");
  } else if (!polaEmail.test(email)) {
    tampilkanPesan("danger", "Format email tidak valid. Contoh: nama@email.com");
  } else if (password === "") {
    tampilkanPesan("danger", "Password tidak boleh kosong.");
  } else if (password.length < 8) {
    tampilkanPesan("danger", "Password minimal 8 karakter.");
  } else {
    tampilkanPesan("success", "Validasi berhasil. Mengalihkan ke halaman utama...");
    form.reset(); // kosongkan semua isian form

    setTimeout(function () {
      window.location.href = "index.html";
    }, 2000);
  }
});
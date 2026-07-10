# Fitur Baru Diskominfo (Halaman Layanan Publik)

Repository ini berisi implementasi halaman web murni (HTML, CSS, JS) untuk fitur-fitur baru Layanan Publik di **Dinas Komunikasi dan Informatika (Diskominfo) Kota Bogor**. Project ini dikonversi dari file dynamic server-side PHP sebelumnya menjadi halaman web client-side yang modern, responsif, dan siap diintegrasikan.

## 📁 Struktur Project

```text
Fitur Baru Diskominfo/
├── assets/
│   ├── css/
│   │   └── app.css          # Desain & layout global premium
│   └── js/
│       ├── main.js          # Script utama halaman
│       └── navbar.js        # Script komponen navbar dinamis (terpusat)
├── images/
│   ├── kominfo.jpg          # Logo resmi Diskominfo Kota Bogor
│   ├── poster1.jpeg         # Poster syarat/dokumen pendaftaran
│   ├── poster2.jpeg         # Poster petunjuk alur pendaftaran
│   ├── poster3.jpeg         # Poster ilustrasi halaman penelitian
│   ├── poster4.jpeg         # Poster ilustrasi halaman magang
│   └── poster5.jpeg         # Poster utama program magang
├── .gitignore               # Menyaring file sampah IDE/OS sebelum push
├── README.md                # Dokumentasi project ini
├── daftar-jurnal.html       # Halaman Arsip Jurnal & Penelitian
├── magang.html              # Halaman Informasi & Formulir Magang/PKL
├── penelitian.html          # Halaman Portal Utama Layanan Akademik
└── submit-penelitian.html   # Halaman Pengajuan & Upload Berkas Penelitian
```

## ✨ Fitur Utama

1. **Komponen Navbar Terpusat (`assets/js/navbar.js`)**:
   - Struktur navbar dikelola dalam satu file JS agar mempermudah pemeliharaan (tidak perlu diubah satu per satu di setiap HTML).
   - Mendeteksi nama file URL secara otomatis dan memberikan highlight kelas `.active` pada menu navigasi yang sedang dibuka (termasuk dropdown Layanan Publik).
   - Terintegrasi dengan mobile hamburger menu dan scroll event listener bawaan.
2. **Hard-coded Image Assets (`images/`)**:
   - Semua aset gambar disimpan secara lokal di folder `images/` untuk mencegah tautan eksternal yang pecah.
3. **Responsive Web Design**:
   - Menggunakan Bootstrap 5 untuk tata letak kisi (*grid layout*) dan adaptasi ramah seluler (*mobile-responsive*).
   - Animasi transisi elemen menggunakan library AOS (Animate On Scroll).
4. **Bebas dari Masalah CORS**:
   - Dengan memuat komponen navbar langsung lewat eksekusi JavaScript (bukan metode `fetch()`), Anda dapat langsung membuka file HTML di browser secara lokal (`file://`) dengan double-click biasa tanpa diblokir oleh CORS Policy browser.

---
*Dibuat untuk Diskominfo Kota Bogor.*

document.addEventListener("DOMContentLoaded", function () {
  const siteNav = document.getElementById("siteNav");
  if (!siteNav) return;

  // Mendapatkan nama file saat ini dari URL
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  // Menentukan apakah dropdown Layanan Publik aktif
  const isLayananActive = ["penelitian.html", "submit-penelitian.html", "daftar-jurnal.html", "magang.html"].includes(page);

  const chevron = `<svg class="nav-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

  siteNav.innerHTML = `
    <div class="nav-wrap">
      <!-- Brand: Dual Logo dengan garis pembatas, tanpa teks -->
      <a href="index.html" class="nav-brand">
        <img src="images/kominfo.jpg" alt="Logo Rusa Diskominfo" class="nav-logo-img">
        <span class="nav-logo-divider"></span>
        <img src="images/kominfo2.jpg" alt="Logo Diskominfo Baru" class="nav-logo-img">
      </a>

      <!-- Desktop Menu — rata kanan -->
      <nav class="nav-menu" id="navMenu">
        <div class="nav-item">
          <a href="index.html" class="nav-link ${page === 'index.html' || page === 'index.php' || page === '' ? 'active' : ''}">Beranda</a>
        </div>

        <div class="nav-item dropdown">
          <a class="nav-link nav-link-layanan nav-dropdown-plain ${['sejarah.php', 'visi-misi.php'].includes(page) ? 'active' : ''}" href="#" id="profilDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profil ${chevron}
          </a>
          <ul class="dropdown-menu" aria-labelledby="profilDropdown">
            <li><a class="dropdown-item ${page === 'sejarah.php' ? 'active text-primary fw-bold bg-light' : ''}" href="sejarah.php">Sejarah</a></li>
            <li><a class="dropdown-item ${page === 'visi-misi.php' ? 'active text-primary fw-bold bg-light' : ''}" href="visi-misi.php">Visi &amp; Misi</a></li>
          </ul>
        </div>

        <div class="nav-item dropdown">
          <a class="nav-link nav-link-layanan nav-dropdown-plain ${['publikasi.php', 'berita.php'].includes(page) ? 'active' : ''}" href="#" id="publikasiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Publikasi ${chevron}
          </a>
          <ul class="dropdown-menu" aria-labelledby="publikasiDropdown">
            <li><a class="dropdown-item ${page === 'berita.php' ? 'active text-primary fw-bold bg-light' : ''}" href="berita.php">Berita</a></li>
            <li><a class="dropdown-item ${page === 'publikasi.php' ? 'active text-primary fw-bold bg-light' : ''}" href="publikasi.php">Publikasi</a></li>
          </ul>
        </div>

        <div class="nav-item dropdown">
          <a class="nav-link nav-link-layanan ${isLayananActive ? 'layanan-active' : ''}" href="#" id="layananDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Layanan Publik ${chevron}
          </a>
          <ul class="dropdown-menu" aria-labelledby="layananDropdown">
            <li><a class="dropdown-item ${page === 'penelitian.html' || page === 'submit-penelitian.html' ? 'active text-primary fw-bold bg-light' : ''}" href="penelitian.html">Penelitian</a></li>
            <li><a class="dropdown-item ${page === 'daftar-jurnal.html' ? 'active text-primary fw-bold bg-light' : ''}" href="daftar-jurnal.html">Daftar Jurnal</a></li>
            <li><a class="dropdown-item ${page === 'magang.html' ? 'active text-primary fw-bold bg-light' : ''}" href="magang.html">Magang &amp; PKL</a></li>
            <li><a class="dropdown-item ${page === 'titik-wifi.php' ? 'active text-primary fw-bold bg-light' : ''}" href="titik-wifi.php">Titik WiFi Gratis</a></li>
          </ul>
        </div>

        <div class="nav-item dropdown">
          <a class="nav-link nav-dropdown-plain ${['dokumen.php', 'arsip.php'].includes(page) ? 'active' : ''}" href="#" id="dokumenDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dokumen
          </a>
          <ul class="dropdown-menu" aria-labelledby="dokumenDropdown">
            <li><a class="dropdown-item ${page === 'dokumen.php' ? 'active text-primary fw-bold bg-light' : ''}" href="dokumen.php">Dokumen Publik</a></li>
            <li><a class="dropdown-item ${page === 'arsip.php' ? 'active text-primary fw-bold bg-light' : ''}" href="arsip.php">Arsip</a></li>
          </ul>
        </div>

        <div class="nav-item">
          <a href="kontak.php" class="nav-link ${page === 'kontak.php' ? 'active' : ''}">Kontak</a>
        </div>

        <div class="nav-item">
          <a href="daftar-komitmen.php" class="nav-link ${page === 'daftar-komitmen.php' ? 'active' : ''}">Daftar Komitmen</a>
        </div>
      </nav>

      <!-- Mobile Hamburger -->
      <button class="nav-hamburger" id="hamburger" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Navbar scroll state
  window.addEventListener('scroll', () => {
    siteNav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile menu toggle
  const burger = document.getElementById('hamburger');
  const menu   = document.getElementById('navMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }

  // Initialize Bootstrap dropdowns for dynamically injected navbar
  const dropdownToggleList = siteNav.querySelectorAll('[data-bs-toggle="dropdown"]');
  dropdownToggleList.forEach(el => {
    if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
      new bootstrap.Dropdown(el);
    }
  });
});

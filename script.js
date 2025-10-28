// Toggle Hamburger Menu
document.querySelector('.hamburger').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Fungsi untuk memuat konten halaman
function loadPage(pageName) {
  const contentDiv = document.getElementById('main-content');

  // Hapus konten sebelumnya
  contentDiv.innerHTML = '';

  // Buat elemen halaman baru
  const pageElement = document.createElement('div');
  pageElement.classList.add('page', `${pageName}-content`);

  switch (pageName) {
    case 'home':
      pageElement.innerHTML = `
        <section class="hero">
          <div class="hero-content">
            <h1>Discover, Build and Showcase Your Tech Projects</h1>
            <p>The world's largest digital marketplace for your code collections, experiments, and non-fungible tokens of knowledge.</p>
            <div class="hero-buttons">
              <a href="#" data-page="projects" class="btn-primary">Discover</a>
              <a href="#" data-page="documentation" class="btn-secondary">Create</a>
              <a href="#" class="btn-secondary" style="margin-left: 1rem;">Watch a video</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="https://via.placeholder.com/400x500/00f7ff/ffffff?text=AI+Project" alt="AI Project" style="border-radius: 12px; box-shadow: 0 0 30px rgba(0,247,255,0.5);">
          </div>
        </section>

        <section class="stats">
          <div class="stat-item">
            <div class="stat-number">27k+</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">20k+</div>
            <div class="stat-label">Experiments</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">7k+</div>
            <div class="stat-label">Skills</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">40k+</div>
            <div class="stat-label">Active Users</div>
          </div>
        </section>

        <section>
          <h2 class="section-title">Popular This Week</h2>
          <div class="popular-grid">
            <div class="popular-card">
              <img src="https://via.placeholder.com/300x180/00f7ff/0b0c1e?text=LSTM+Forecast" alt="LSTM Forecast">
              <h3>Energy Forecasting</h3>
              <div class="price">2.45 ETH</div>
              <div class="bids">50k bids</div>
              <div class="action">
                <button>Place a Bid</button>
                <button>Purchase</button>
              </div>
            </div>
            <div class="popular-card">
              <img src="https://via.placeholder.com/300x180/00c2ff/0b0c1e?text=Stock+Predict" alt="Stock Predict">
              <h3>Stock Prediction</h3>
              <div class="price">1.38 ETH</div>
              <div class="bids">48k bids</div>
              <div class="action">
                <button>Place a Bid</button>
                <button>Purchase</button>
              </div>
            </div>
            <div class="popular-card">
              <img src="https://via.placeholder.com/300x180/6c5ce7/0b0c1e?text=Game+Dev" alt="Game Dev">
              <h3>Procedural World</h3>
              <div class="price">2.45 ETH</div>
              <div class="bids">50k bids</div>
              <div class="action">
                <button>Place a Bid</button>
                <button>Purchase</button>
              </div>
            </div>
            <div class="popular-card">
              <img src="https://via.placeholder.com/300x180/a29bfe/0b0c1e?text=Flask+Deploy" alt="Flask Deploy">
              <h3>Flask Deployment</h3>
              <div class="price">1.12 ETH</div>
              <div class="bids">32k bids</div>
              <div class="action">
                <button>Place a Bid</button>
                <button>Purchase</button>
              </div>
            </div>
          </div>
        </section>

        <section class="top-sellers">
          <h2 class="section-title">Top Skills</h2>
          <div class="top-sellers-grid">
            <div class="seller-card">
              <img src="https://via.placeholder.com/40x40/00f7ff/0b0c1e?text=Py" alt="Python">
              <div class="info">
                <div class="name">Python</div>
                <div class="value">276.7 ETH</div>
              </div>
            </div>
            <div class="seller-card">
              <img src="https://via.placeholder.com/40x40/00c2ff/0b0c1e?text=TF" alt="TensorFlow">
              <div class="info">
                <div class="name">TensorFlow</div>
                <div class="value">345.6 ETH</div>
              </div>
            </div>
            <div class="seller-card">
              <img src="https://via.placeholder.com/40x40/6c5ce7/0b0c1e?text=Git" alt="Git">
              <div class="info">
                <div class="name">Git</div>
                <div class="value">323.7 ETH</div>
              </div>
            </div>
            <div class="seller-card">
              <img src="https://via.placeholder.com/40x40/a29bfe/0b0c1e?text=HTML" alt="HTML">
              <div class="info">
                <div class="name">HTML/CSS</div>
                <div class="value">347.7 ETH</div>
              </div>
            </div>
            <div class="seller-card">
              <img src="https://via.placeholder.com/40x40/55efc4/0b0c1e?text=JS" alt="JavaScript">
              <div class="info">
                <div class="name">JavaScript</div>
                <div class="value">230.6 ETH</div>
              </div>
            </div>
            <div class="seller-card">
              <img src="https://via.placeholder.com/40x40/d6eaf8/0b0c1e?text=SQL" alt="SQL">
              <div class="info">
                <div class="name">SQL</div>
                <div class="value">267.9 ETH</div>
              </div>
            </div>
          </div>
        </section>

        <section class="explore-section">
          <h2 class="section-title">Explore Projects</h2>
          <div class="explore-grid">
            <div class="category-card">
              <img src="https://via.placeholder.com/300x150/00f7ff/0b0c1e?text=ML" alt="Machine Learning">
              <div class="overlay">
                <h3>Machine Learning</h3>
                <div class="count">30 items</div>
              </div>
            </div>
            <div class="category-card">
              <img src="https://via.placeholder.com/300x150/00c2ff/0b0c1e?text=Web" alt="Web Development">
              <div class="overlay">
                <h3>Web Development</h3>
                <div class="count">45 items</div>
              </div>
            </div>
            <div class="category-card">
              <img src="https://via.placeholder.com/300x150/6c5ce7/0b0c1e?text=Game" alt="Game Dev">
              <div class="overlay">
                <h3>Game Development</h3>
                <div class="count">59 items</div>
              </div>
            </div>
            <div class="category-card">
              <img src="https://via.placeholder.com/300x150/a29bfe/0b0c1e?text=Data" alt="Data Science">
              <div class="overlay">
                <h3>Data Science</h3>
                <div class="count">36 items</div>
              </div>
            </div>
            <div class="category-card">
              <img src="https://via.placeholder.com/300x150/55efc4/0b0c1e?text=AI" alt="AI">
              <div class="overlay">
                <h3>Artificial Intelligence</h3>
                <div class="count">40 items</div>
              </div>
            </div>
            <div class="category-card">
              <img src="https://via.placeholder.com/300x150/d6eaf8/0b0c1e?text=Cloud" alt="Cloud">
              <div class="overlay">
                <h3>Cloud & DevOps</h3>
                <div class="count">25 items</div>
              </div>
            </div>
          </div>
        </section>

        <section class="cta-section">
          <h2>Join Us to Create, Build and Showcase Your Tech Art</h2>
          <p>Whether you're a beginner or a pro, share your journey with the world. Let your code become art.</p>
          <a href="#" data-page="contact" class="btn-primary">Join Community</a>
        </section>

        <footer>
          <div class="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#">Art</a></li>
              <li><a href="#">Photography</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Games</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>My Account</h3>
            <ul>
              <li><a href="#">My Profile</a></li>
              <li><a href="#">My Collections</a></li>
              <li><a href="#">My Favorites</a></li>
              <li><a href="#">My Account Settings</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Suggestions</a></li>
              <li><a href="#">Newsletters</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Ranking</a></li>
              <li><a href="#">Activity</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Follow Us</h3>
            <div class="footer-social">
              <a href="#">𝕏</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Discord</a>
            </div>
          </div>
        </footer>
      `;
      break;

    case 'about':
      pageElement.innerHTML = `
        <div class="about-content">
          <h2>Tentang Saya</h2>
          <p>Seorang mahasiswa IT semester 5 yang tertarik pada Machine Learning dan pengembangan perangkat lunak.</p>
          <p>Saya percaya bahwa teknologi harus bermanfaat dan inklusif. Saya sedang membangun portofolio dan keterampilan untuk mencapai karier internasional di bidang AI.</p>
          <p>Beberapa hal yang saya lakukan:</p>
          <ul>
            <li>Mengerjakan proyek ML untuk prediksi dan otomatisasi</li>
            <li>Berkontribusi pada proyek open-source</li>
            <li>Membangun aplikasi web dan antarmuka untuk model AI</li>
            <li>Mengikuti kompetisi seperti Kaggle dan hackathon</li>
          </ul>

          <div class="polaroid-container">
            <div class="polaroid">
              <img src="https://via.placeholder.com/200x200/00f7ff/0b0c1e?text=Profil" alt="Foto Profil">
              <div class="polaroid-caption">Foto Profil</div>
            </div>
            <div class="polaroid">
              <img src="https://via.placeholder.com/200x200/00c2ff/0b0c1e?text=ML+Project" alt="ML Project">
              <div class="polaroid-caption">Proyek ML</div>
            </div>
            <div class="polaroid">
              <img src="https://via.placeholder.com/200x200/6c5ce7/0b0c1e?text=Web+App" alt="Web App">
              <div class="polaroid-caption">Aplikasi Web</div>
            </div>
            <div class="polaroid">
              <img src="https://via.placeholder.com/200x200/a29bfe/0b0c1e?text=AI+Model" alt="AI Model">
              <div class="polaroid-caption">Model AI</div>
            </div>
          </div>
        </div>
      `;
      break;

    case 'projects':
      pageElement.innerHTML = `
        <div class="projects-content">
          <h2>Proyek Saya</h2>
          <p>Daftar proyek yang pernah saya kerjakan, termasuk tugas kampus, eksperimen, dan kompetisi.</p>

          <div class="project-card">
            <h3>Energy Consumption Forecasting (LSTM)</h3>
            <p>Membangun model LSTM untuk memprediksi konsumsi energi harian menggunakan data historis.</p>
            <ul class="tags">
              <li>Python</li>
              <li>TensorFlow</li>
              <li>LSTM</li>
              <li>Data Science</li>
            </ul>
          </div>

          <div class="project-card">
            <h3>Stock Price Prediction (Random Forest)</h3>
            <p>Model prediksi harga saham menggunakan Random Forest dan teknik engineering fitur.</p>
            <ul class="tags">
              <li>Python</li>
              <li>Scikit-learn</li>
              <li>Time Series</li>
              <li>Financial Data</li>
            </ul>
          </div>

          <div class="project-card">
            <h3>Procedural World Generator</h3>
            <p>Generator dunia 2D acak menggunakan algoritma procedural generation, terinspirasi dari Minecraft.</p>
            <ul class="tags">
              <li>Python</li>
              <li>Algorithms</li>
              <li>Game Dev</li>
            </ul>
          </div>

          <div class="project-card">
            <h3>Flask Deployment Guide</h3>
            <p>Panduan langkah demi langkah untuk mendeploy aplikasi Flask ke Railway dan Heroku.</p>
            <ul class="tags">
              <li>Flask</li>
              <li>Gunicorn</li>
              <li>Deployment</li>
              <li>Linux</li>
            </ul>
          </div>

          <div class="project-card">
            <h3>Linux Dual Boot Setup</h3>
            <p>Catatan dan panduan instalasi Ubuntu bersama Windows menggunakan dual-boot.</p>
            <ul class="tags">
              <li>Linux</li>
              <li>Ubuntu</li>
              <li>System Setup</li>
              <li>Tutorial</li>
            </ul>
          </div>
        </div>
      `;
      break;

    case 'documentation':
      pageElement.innerHTML = `
        <div class="documentation-content">
          <h2>Dokumentasi Teknis</h2>
          <p>Tempat saya menyimpan catatan teknis, panduan, dan hasil eksperimen saya.</p>

          <div class="doc-card">
            <h3>Cara Deploy Flask ke Railway</h3>
            <p>Panduan langkah demi langkah untuk mendeploy aplikasi Flask ke Railway dan Heroku.</p>
            <ul>
              <li>Siapkan file <code>requirements.txt</code></li>
              <li>Tambahkan <code>Procfile</code> untuk deployment</li>
              <li>Gunakan <code>Gunicorn</code> sebagai WSGI server</li>
            </ul>
            <div class="tags">
              <span class="tag">Flask</span>
              <span class="tag">Gunicorn</span>
              <span class="tag">Deployment</span>
              <span class="tag">Linux</span>
            </div>
          </div>

          <div class="doc-card">
            <h3>Install Linux Dual Boot</h3>
            <p>Catatan proses instalasi Ubuntu bersama Windows menggunakan dual-boot.</p>
            <ul>
              <li>Siapkan partisi HDD untuk Linux</li>
              <li>Disable Fast Startup di Windows</li>
              <li>Atur GRUB bootloader</li>
            </ul>
            <div class="tags">
              <span class="tag">Linux</span>
              <span class="tag">Ubuntu</span>
              <span class="tag">System Setup</span>
              <span class="tag">Tutorial</span>
            </div>
          </div>

          <div class="doc-card">
            <h3>Proyek LSTM Forecasting</h3>
            <p>Penjelasan arsitektur model, data preprocessing, dan evaluasi.</p>
            <ul>
              <li>Preprocessing data time-series</li>
              <li>Feature engineering untuk windowing</li>
              <li>Evaluasi model dengan MSE dan RMSE</li>
            </ul>
            <div class="tags">
              <span class="tag">LSTM</span>
              <span class="tag">Time Series</span>
              <span class="tag">Python</span>
              <span class="tag">TensorFlow</span>
            </div>
          </div>

          <div class="doc-card">
            <h3>Visualisasi Model dengan Matplotlib</h3>
            <p>Cara membuat grafik pelatihan model dan performa prediksi.</p>
            <ul>
              <li>Plot loss dan accuracy</li>
              <li>Visualisasi data historis vs prediksi</li>
              <li>Analisis residual</li>
            </ul>
            <div class="tags">
              <span class="tag">Matplotlib</span>
              <span class="tag">Data Visualization</span>
              <span class="tag">Python</span>
              <span class="tag">Analysis</span>
            </div>
          </div>
        </div>
      `;
      break;

    case 'cv':
      pageElement.innerHTML = `
        <div class="cv-content">
          <h2>Curriculum Vitae</h2>

          <div class="cv-section">
            <h3>Profil Singkat</h3>
            <p>Nama: Nama Kamu</p>
            <p>Jurusan: Teknologi Informasi</p>
            <p>Minat: Machine Learning, Web Development, AI</p>
            <p>Tujuan: Membangun karier internasional di bidang AI dan teknologi.</p>
          </div>

          <div class="cv-section">
            <h3>Pendidikan</h3>
            <p>S1 Teknologi Informasi</p>
            <p>Universitas [Nama Universitas] (2021 - Sekarang)</p>
            <p>IPK: [Jika ada]</p>
          </div>

          <div class="cv-section">
            <h3>Keterampilan</h3>
            <ul>
              <li><strong>Pemrograman:</strong> Python, Flask, FastAPI, JavaScript</li>
              <li><strong>ML & AI:</strong> TensorFlow, Scikit-learn, Pandas, NumPy</li>
              <li><strong>Web:</strong> HTML, CSS, REST API, Deployment (Railway, Heroku)</li>
              <li><strong>Tools:</strong> Git, GitHub, Linux, VS Code</li>
              <li><strong>Bahasa:</strong> Indonesia (Native), English (Learning)</li>
            </ul>
          </div>

          <div class="cv-section">
            <h3>Pengalaman</h3>
            <p>Belum ada pengalaman kerja formal.</p>
            <p>Proyek personal: Energy Forecasting, Stock Prediction, dll.</p>
          </div>

          <div class="cv-section">
            <h3>Prestasi & Aktivitas</h3>
            <ul>
              <li>Ikut kompetisi Kaggle (Pemula)</li>
              <li>Menyelesaikan proyek open-source kecil</li>
              <li>Belajar mandiri Machine Learning & AI</li>
            </ul>
          </div>

          <a href="#" class="cv-download" target="_blank">Unduh CV (PDF)</a>
        </div>
      `;
      break;

    case 'contact':
      pageElement.innerHTML = `
        <div class="contact-content">
          <h2>Hubungi Saya</h2>
          <p>Anda dapat menghubungi saya melalui:</p>

          <div class="contact-info">
            <ul>
              <li>Email: <a href="mailto:reyhanak02@gmail.com">Reyhan Aditya</a></li>
              <li>LinkedIn: <a href="#" target="_blank">LinkedIn</a></li>
              <li>GitHub: <a href="https://github.com/SFZIBO" target="_blank">GitHub</a></li>
              <li>Kaggle: <a href="#" target="_blank">Kaggle</a></li>
              <li>Youtube: <a href="https://www.youtube.com/@reyhanak77"target="_blank">Youtube</a></li>
            </ul>
          </div>

          <form class="contact-form" action="https://formspree.io/f/xkgpjkrp" method="POST">
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" required placeholder="Masukkan nama Anda">

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Masukkan email Anda">

            <label for="message">Pesan:</label>
            <textarea id="message" name="message" required placeholder="Tulis pesan Anda di sini..." rows="5"></textarea>

            <button type="submit">Kirim</button>
          </form>
        </div>
      `;
      break;

    default:
      pageElement.innerHTML = `<h2>Halaman Tidak Ditemukan</h2>`;
  }

  // Tambahkan halaman baru ke DOM
  contentDiv.appendChild(pageElement);

  // Tambahkan kelas aktif
  pageElement.classList.add('active');

  // Jika halaman adalah home, aktifkan typewriter
  if (pageName === 'home') {
    initTypewriter();
  }

  // Update URL tanpa reload (opsional)
  history.pushState({ page: pageName }, '', `#${pageName}`);
}

// Fungsi untuk inisialisasi typewriter
function initTypewriter() {
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #74b9ff }";
  document.body.appendChild(css);
}

// Event listener untuk navigasi
document.querySelectorAll('nav a[data-page]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    loadPage(page);
  });
});

// Muat halaman awal
window.onload = function() {
  const hash = window.location.hash.replace('#', '') || 'home';
  loadPage(hash);
};
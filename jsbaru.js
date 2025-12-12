document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hiddenElements = document.querySelectorAll('.hidden-scroll');

    // 1. Efek Sticky Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Animation (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-scroll');
            }
        });
    }, {
        threshold: 0.15 // Animasi mulai saat 15% elemen terlihat
    });

    hiddenElements.forEach((el) => observer.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (Kode Navbar Sticky & Scroll Animation yang sebelumnya tetap ada di sini) ...
    
    // --- KODE BARU: Smooth Scroll & Highlight Animation ---
    const navLinks = document.querySelectorAll('.nav-links a, .btn-primary'); // Termasuk tombol "Jelajahi"
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah lompatan kasar default browser

            // 1. Ambil target elemen (misal: #filosofi)
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // 2. Hitung posisi scroll (dikurangi tinggi navbar agar judul tidak tertutup)
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;

                // 3. Lakukan Smooth Scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // 4. Tambahkan Animasi Highlight
                // Hapus kelas dulu (jika user klik cepat berkali-kali) agar animasi reset
                targetSection.classList.remove('active-highlight');
                
                // Sedikit delay agar animasi muncul SETELAH scroll mulai sampai
                setTimeout(() => {
                    targetSection.classList.add('active-highlight');
                }, 500); // Muncul setengah detik setelah klik

                // 5. Bersihkan animasi setelah selesai (agar bisa diulang nanti)
                setTimeout(() => {
                    targetSection.classList.remove('active-highlight');
                }, 2000); // Sesuai durasi animasi di CSS (1.5s + buffer)
            }
        });
    });
    
    // ... (Kode Observer yang sebelumnya tetap ada di sini) ...
});
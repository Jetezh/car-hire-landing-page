// fungsi untuk penggunaan slider pada bagian armada mobil

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.vehicles-card'); 

// nilai offset untuk slides container
let offset = 0;

// slide id untuk increment
let slideIncrement = 0;

// slide id untuk decrement
let slideDecrement = slides.length - 1;

// menambahkan event klik pada tombol next
next.addEventListener('click', () => {
    // menetapkan offset pada width slide
    offset = slides[0].offsetWidth;

    // menetapkan transisi container
    container.style.transition = 'left ease-in-out .5s';

    // menggeser slides container dengan negatif offset
    container.style.left = -offset + 'px';

    // timeout untuk menghapus transisi setelah animasi selesai
    setTimeout(() => {
        // menghapus transisi container
        container.style.transition = 'none';

        // menggeser slide saat ini ke posisi akhir
        slides[slideIncrement].style.order = slides.length - 1;

        // mengembalikan container kembali pada posisi awal
        container.style.left = 0;

        // menambahkan index slide increment ID
        slideIncrement++;

        // menetapkan decrement ID ke index increment ID sebelumnya
        slideDecrement = slideIncrement - 1;

        // jika slide increment ID telah mencapai akhir slide, maka akan ditetapkan kembali ke 0, ini untuk looping slider
        if (slideIncrement === slides.length) {
            // menetapkan slide Increment ID kembali ke 0
            slideIncrement = 0;

            // memilih semua slides
            slides.forEach(slide => {
                // mereset semua urutan slides
                slide.style.order = 'initial';
            });
        }
    }, 500)
});

// menambahkan event klik pada tombol prev
prev.addEventListener('click', () => {
    // menetapkan offset pada width slide
    offset = slides[0].offsetWidth;

    // hapus transisi container
    container.style.transition = 'none';

    // mengecek jika slides decrement dibawah 0
    if (slideDecrement < 0) {
        // memilih semua slides
        slides.forEach(slide => {
            // mereset semua urutan slides
            slide.style.order = 'initial';
        });
        // menetapakan slide decrement ID ke ke index slide terakhir
        slideDecrement = slides.length - 1;
    }
    // menggeser slide saat ini ke posisi awal
    slides[slideDecrement].style.order = '-1';

    // menggeser slides container dengan negatif offset
    container.style.left = -offset + 'px';

    // menetapkan timeout untuk mencegah kode diatas tidak jalan
    setTimeout(() => {
        // menetapkan transisi container
        container.style.transition = 'left ease-in-out .5s';

        // memindahkan container kembali ke posisi awal
        container.style.left = 0;
    }, 1);

    // menetapkan timeout untuk mengurangi decrement ID setelah transisi selesai
    setTimeout(() => {
        // mengurangin slide decrement ID
        slideDecrement--;

        // menetapkan increment ID ke Decrement ID sebelumnya
        slideIncrement = slideDecrement + 1;
    }, 500);
})


// fungsi untuk popup aside form order
const openBtn = document.getElementById('openFormOrder');
const closeBtn = document.getElementById('closeFormOrder');
const formOrder = document.getElementById('orderForm');

openBtn.addEventListener('click', () => {
    formOrder.classList.add('open');
})

closeBtn.addEventListener('click', () => {
    formOrder.classList.remove('open');
})
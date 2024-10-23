const fs = require('fs');
const path = require('path');

// Menghasilkan path absolut untuk 'yunanto.txt'
const filePath = path.resolve(__dirname, 'yunanto.txt');

// Fungsi callback untuk membaca file
const MembacaFile = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas:', error.message); // Menampilkan pesan error
        return;
    }

    console.log(data); // Menampilkan isi berkas
};

// Membaca file dengan encoding 'utf-8'
fs.readFile(filePath, 'utf-8', MembacaFile);

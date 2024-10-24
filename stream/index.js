const fs = require('fs');
const path = require('path');

// Tentukan path file input dan output secara absolut
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

// Buat readable stream untuk membaca input.txt
const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15 // Ukuran chunk yang dibaca
});

// Buat writable stream untuk menulis ke output.txt
const writableStream = fs.createWriteStream(outputPath);

// Saat data tersedia, tambahkan newline saat menulis chunk
readableStream.on('data', (chunk) => {
    writableStream.write(chunk + '\n'); // Tambah baris baru setelah setiap chunk
});

// Tangani event error pada stream
readableStream.on('error', (error) => {
    console.error(`Error saat membaca file: ${error.message}`);
});

writableStream.on('error', (error) => {
    console.error(`Error saat menulis file: ${error.message}`);
});

// Ketika proses baca selesai
readableStream.on('end', () => {
    console.log('Selesai membaca dan menulis data.');
    writableStream.end(); // Tutup writable stream
});

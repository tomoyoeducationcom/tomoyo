import fs from 'node:fs';
import path from 'node:path';

const source = path.resolve('dist/assets');
const destination = path.resolve('public/assets');

if (!fs.existsSync(source)) {
  throw new Error('Folder dist/assets tidak ditemukan. Jalankan Vite build terlebih dahulu.');
}

fs.mkdirSync(destination, { recursive: true });

fs.cpSync(source, destination, {
  recursive: true,
  force: true,
});

console.log('Aset Vercel berhasil disiapkan di public/assets');

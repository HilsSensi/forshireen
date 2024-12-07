// Ambil elemen HTML
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const takePhotoButton = document.getElementById('takePhoto');
const downloadPhotoButton = document.getElementById('downloadPhoto');

// Akses kamera perangkat
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Gagal mengakses kamera:', err);
    alert('Tidak dapat mengakses kmera.');
  });

// Fungsi untuk mengambil foto
takePhotoButton.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Gambar frame video ke canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Tampilkan hasil dan tombol unduh
  canvas.style.display = 'block';
  downloadPhotoButton.style.display = 'inline-block';

  // Buat URL untuk gambar
  const photoData = canvas.toDataURL('image/png');
  downloadPhotoButton.href = photoData;
  downloadPhotoButton.download = 'foto.png';
});

// Tambahkan event listener ke tombol unduh
downloadPhotoButton.addEventListener('click', () => {
  alert('Foto berhasil diunduh!');
});

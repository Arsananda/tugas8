document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const noHp = document.getElementById('noHp').value;

        if (password !== confirmPassword) {
            alert("Password dan Konfirmasi Password tidak cocok!");
            return;
        }

        // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
        console.log("Data Registrasi:", { nama, email, password, noHp });
        alert("Registrasi berhasil!");
        form.reset();
    });
});
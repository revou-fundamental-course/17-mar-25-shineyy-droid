function showOptions(shape) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById(`options-${shape}`).classList.remove("hidden");
}

function showPage(page) {
    document.querySelectorAll("div.hidden").forEach(el => el.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

// Hitung Keliling Persegi
function hitungKelilingPersegi() {
    let sisi = document.getElementById("sisiKeliling").value;
    if (sisi) {
        let hasil = 4 * sisi;
        document.getElementById("hasilKelilingPersegi").innerText = "Keliling: " + hasil;
    } else {
        alert("Masukkan nilai sisi!");
    }
}

// Hitung Luas Persegi
function hitungLuasPersegi() {
    let sisi = document.getElementById("sisiLuas").value;
    if (sisi) {
        let hasil = sisi * sisi;
        document.getElementById("hasilLuasPersegi").innerText = "Luas: " + hasil;
    } else {
        alert("Masukkan nilai sisi!");
    }
}

// Hitung Keliling Persegi Panjang
function hitungKelilingPersegiPanjang() {
    let panjang = document.getElementById("panjangKeliling").value;
    let lebar = document.getElementById("lebarKeliling").value;
    if (panjang && lebar) {
        let hasil = 2 * (parseInt(panjang) + parseInt(lebar));
        document.getElementById("hasilKelilingPersegiPanjang").innerText = "Keliling: " + hasil;
    } else {
        alert("Masukkan panjang dan lebar!");
    }
}

// Hitung Luas Persegi Panjang
function hitungLuasPersegiPanjang() {
    let panjang = document.getElementById("panjangLuas").value;
    let lebar = document.getElementById("lebarLuas").value;
    if (panjang && lebar) {
        let hasil = panjang * lebar;
        document.getElementById("hasilLuasPersegiPanjang").innerText = "Luas: " + hasil;
    } else {
        alert("Masukkan panjang dan lebar!");
    }
}

// Reset Halaman
function reset() {
    window.location.reload();
}

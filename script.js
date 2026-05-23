function cekLaundry() {

    let barcode = document.getElementById("barcode").value;

    let hasil = document.getElementById("hasil");

    if (barcode == "LDRY001") {

        hasil.innerHTML = `
        🧺 Status: Sedang Diproses
        <br><br>
        🚚 Kurir menuju lokasi
        `;

    }

    else if (barcode == "LDRY002") {

        hasil.innerHTML = `
        🛵 Status: Sedang Diantar
        <br><br>
        📦 Laundry sedang dikirim
        `;

    }

    else if (barcode == "LDRY003") {

        hasil.innerHTML = `
        🎉 Status: Laundry Selesai
        <br><br>
        ✅ Laundry sudah dapat diambil
        `;

    }

    else {

        hasil.innerHTML = `
        ❌ Barcode tidak ditemukan
        `;

    }

}

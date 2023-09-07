let saldo = 0;

function updateSaldo() {
  document.getElementById('saldo').textContent = saldo.toFixed(2);
}

function tambahSaldo() {
  let jumlah = window.prompt("Masukkan jumlah saldo yang ingin ditambahkan: ");
  if (!isNaN(jumlah) && jumlah >= 0) {
    saldo += parseInt(jumlah);
    updateSaldo();
    alert("Saldo sekarang adalah " + saldo);
  } else {
    alert("Ulangi");
  } 
}

function kurangiSaldo() {
  let kurang = window.prompt("Masukkan jumlah saldo yang ingin dikurangi: ");
  if (!isNaN(kurang) && kurang >= 0) {
    if (kurang <= saldo) {
      saldo -= parseInt(kurang);
      updateSaldo();
      alert("Saldo sekarang adalah " + saldo);
    } else {
      alert("Oopss.. saldo tidak cukup");
      alert("Ulangi");
    }
  } else {
    alert("Ulangi");
  }
}

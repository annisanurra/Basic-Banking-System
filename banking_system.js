// membuat class bankAccount dengan parameter no rekening dan saldo
class bankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }

    //membuat method deposit
    deposit(jumlah) {
        let hasil = this.saldo += jumlah;
        setTimeout(() => {
            console.log(`Deposit: ${jumlah} telah berhasil. Saldo anda sekarang ${hasil}`)
        }, 1000);
    }

    //membuat method withdraw
    withdraw(jumlah) {
        if (this.saldo < jumlah) {
            throw new Error('Saldo tidak cukup');
        }
        this.saldo -= jumlah;
        setTimeout(() => {
            console.log(`Withdraw:  ${jumlah} telah berhasil. Saldo anda sekarang ${this.saldo}`)
        }, 5000);
    }
}

const account = new bankAccount(1000);

account.deposit(300);
account.withdraw(400);
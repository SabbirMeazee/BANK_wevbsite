//=====Deposit=================
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const DepositValue = depositInput.value;
    const newDepositAmount = parseFloat(DepositValue);

    if (DepositValue === "" || isNaN(parseFloat(DepositValue)) || (parseFloat(DepositValue) < 0)) {
        document.getElementById('invalid').innerText = 'Please Enter Valid Amount !!!!'
        depositInput.value = ''
        return;
    }
    document.getElementById('invalid').innerText = ''


    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDeposit);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';
});

////////// ================Withdraw==========///////////////
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawValue);

    if (withdrawValue === "" || isNaN(parseFloat(withdrawValue)) || (parseFloat(withdrawValue) < 0)) {
        document.getElementById('inval').innerText = 'Please Enter Valid Amount !!!!'
        withdrawInput.value = ''
        return;
    }
    document.getElementById('inval').innerText = ''

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    if (newWithdrawAmount > previousBalanceTotal) {
        document.getElementById('inval').innerText = 'You have no sufficient balance!'
        withdrawInput.value = ''
        return
    }
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
})
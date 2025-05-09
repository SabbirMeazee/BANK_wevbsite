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

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
});

////////// ================Withdraw==========///////////////
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawValue);

    if (withdrawValue === "" || isNaN(parseFloat(withdrawValue)) || (parseFloat(withdrawValue) < 0)) {
        document.getElementById('invalid').innerText = 'Please Enter Valid Amount !!!!'
        withdrawValue.value = ''
        return;
    }
    document.getElementById('invalid').innerText = ''
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
})
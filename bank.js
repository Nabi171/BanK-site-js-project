function getinputvalue(e) {
    const inputField = document.getElementById(e);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);
    // clr the field 
    inputField.value = '';
    return AmountValue;
}

function updateTotalField(totalfieldId, Amount) {
    debugger;
    const TotalElement = document.getElementById(totalfieldId);
    const TotalText = TotalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    TotalElement.innerText = previousTotal + Amount;
}


function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(Amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + Amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - Amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);


    // get the current deposit 
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousdepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousdepositTotal + depositAmount;

    // update balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    const depositAmount = getinputvalue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})

// handle withdrawbutton 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    //get and update withdrawTotal
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);
    // withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount;

    // update balance after withdraw 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceAmount = parseFloat(balanceTotal.innerText);
    // balanceTotal.innerText = balanceAmount - withdrawAmount;
    const withdrawAmount = getinputvalue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < CurrentBalance) {
        const withdrawTotalAmount = updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > CurrentBalance) {
        console.log('you have not enough money')
    }
})
function calculateCreditAmount() {
    var totalAmount = Number(document.getElementById('totalCAmount').value);
    var totalCredit = Number(document.getElementById('creditAmount').value);
    var totalBalance = totalAmount + totalCredit;
    document.getElementById('totalCBalance').innerHTML = totalBalance;
}


function calculateDebitAmount() {
    var totalAmount = Number(document.getElementById('totalDAmount').value);
    var totalDebit = Number(document.getElementById('debitAmount').value);
    var totalBalance = totalAmount - totalDebit;
    document.getElementById('totalDBalance').innerHTML = totalBalance;
}

function calculateLoanAmount() {
    var loanAmount = Number(document.getElementById('loanAmount').value);
    var interestRate = Number(document.getElementById('interestRate').value);
    var noOfMonths = Number(document.getElementById('noOfMonths').value);
    var total = ((loanAmount) * ((1 + ((interestRate * 0.01) / 12)) ** (noOfMonths / 4))).toFixed(2);
    document.getElementById('payableAmount').innerHTML = total;
}
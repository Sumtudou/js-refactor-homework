function printOwing(invoice) {
    return getFormatTextResult(getData(invoice));
}

function getData(invoice){
    return  {
        'customer':invoice.customer,
        'amount':getOutStanding(invoice),
        'date':getDateOf30DaysLater(),
    }
}

function getFormatTextResult(data) {
    result = "***********************\n" +
        "**** Customer Owes ****\n" +
        "***********************\n";
    result += `name: ${data.customer}\n`;
    result += `amount: ${data.amount}\n`;
    result += `amount: ${data.date.toLocaleDateString()}\n`;
    return result;
}

function getDateOf30DaysLater(){
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function getOutStanding(invoice) {
    let outstanding = 0;
    for (const borderSpacing of invoice.borderSpacing) {
        outstanding += borderSpacing.amount;
    }
    return outstanding;
}

module.exports = {
    printOwing
}
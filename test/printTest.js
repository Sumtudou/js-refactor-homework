const printTest = require('ava');
const {printOwing} = require('../src/print');

printTest('print test', t => {
    const invoice = {
        customer: "james",
        borderSpacing: [
            {amount: 1},
            {amount: 1},
            {amount: 1},
        ]
    }
    let result = printOwing(invoice);
    const except = "***********************\n" +
                    "**** Customer Owes ****\n" +
                    "***********************\n" +
                    "name: james\n" +
                    "amount: 3\n" +
                    "amount: 2020-9-28\n";

    t.is(except, result)
});
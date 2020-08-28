const rankTest = require('ava');
const {voyageProfitFactor} = require('../../src/rank')
rankTest('voyageProfitFactor test history length less than 10 and voyage zone equals China' +
                            ' and history contains China and voyage length less than 12', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 6);
})

rankTest('voyageProfitFactor test history length less than 10 and voyage zone equals China ' +
                    'and history contains China and voyage length > 12 but less than 18', t => {
    const voyage = {
        zone: 'china',
        length: 13,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 7);
})

rankTest('voyageProfitFactor test history length less than 10 and voyage zone equals China' +
                                        ' and history contains China and voyage length > 18', t => {
    const voyage = {
        zone: 'china',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 6);
})

rankTest('voyageProfitFactor test history length > 10 and voyage zone equals China' +
                                ' and history contains China and voyage length > 18', t => {
    const voyage = {
        zone: 'china',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'china',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 7);
})

rankTest('voyageProfitFactor test history length less than 10 and voyage zone equals China ' +
                'and history has no China and history.length less than 8 and voyage.length > 14', t => {
    const voyage = {
        zone: 'china',
        length: 15,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 2);
})

rankTest('voyageProfitFactor test history length less than 10 and voyage zone equals China' +
                ' and history has no China and history.length > 8 and voyage.length = 14', t => {
    const voyage = {
        zone: 'china',
        length: 14,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 4);
})

rankTest('voyageProfitFactor test history length less than 10 and zone==east-indies and has no China' +
                                            ' and history.length > 8 and voyage.length = 14', t => {
    const voyage = {
        zone: 'east-indies',
        length: 14,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 4);
})

rankTest('voyageProfitFactor test history length less than 10 and zone==west-indies and has no China' +
                        ' and history.length > 8 and voyage.length = 14', t => {
    const voyage = {
        zone: 'west-indies',
        length: 14,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'east-indies',
            profit: 2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = voyageProfitFactor(voyage, history)

    t.is(result, 3);
})
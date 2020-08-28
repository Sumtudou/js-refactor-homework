const rankTest = require('ava');
const {captainHistoryRisk} = require('../../src/rank')

rankTest('captainHistoryRisk test history length exceed 5 and zone!=china', t => {
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },{
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = captainHistoryRisk(voyage, history)

    t.is(result, 6);
})

rankTest('captainHistoryRisk test history length less than 5 and zone==china', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        },{
            zone: 'west-indies',
            profit: 15,
        },{
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = captainHistoryRisk(voyage, history)

    t.is(result, 4);
})

rankTest('captainHistoryRisk test history length exceed 5 and zone==china', t => {
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

    const result = captainHistoryRisk(voyage, history)

    t.is(result, 0);
})

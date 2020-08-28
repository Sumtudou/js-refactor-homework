const rankTest = require('ava');
const {rating} = require('../src/rank')

rankTest('rating test return A', t => {
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
            zone: 'china',
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

    const result = rating(voyage, history)

    t.is(result, 'A');
})

rankTest('rating test return B', t => {
    const voyage = {
        zone: 'west-indies',
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
        }
    ];

    const result = rating(voyage, history)

    t.is(result, 'B');
})
const rankTest = require('ava');
const {rating, voyageProfitFactor, captainHistoryRisk, voyageRisk} = require('../src/rank')

const voyage = {
    zone: 'west-indies',
    length: 10,
};
const history = [
    {
        zone: 'east-indies',
        profit: 5,
    }, {
        zone: 'west-indies',
        profit: 15,
    }, {
        zone: 'china',
        profit: -2,
    },
    {
        zone: 'west-africa',
        profit: 7,
    },
];
rankTest('voyageRisk test voyage length > 8', t => {
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const result = voyageRisk(voyage)

    t.is(result, 5);
})

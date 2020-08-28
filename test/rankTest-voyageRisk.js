const rankTest = require('ava');
const {voyageRisk} = require('../src/rank')

rankTest('voyageRisk test voyage len exceed 8', t => {
    //given
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    //when
    const result = voyageRisk(voyage);
    //then
    t.is(result, 5);
});

rankTest('voyageRisk test voyage length between 4 and 8', t => {
    const voyage = {
        zone: 'west-indies',
        length: 5,
    };
    const result = voyageRisk(voyage)

    t.is(result, 3);
});

rankTest('voyageRisk test voyage length less then 4', t => {
    const voyage = {
        zone: 'west-indies',
        length: 2,
    };
    const result = voyageRisk(voyage)

    t.is(result, 1);
});

rankTest('voyageRisk test voyage length > 8 and zone==east-indies', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const result = voyageRisk(voyage)

    t.is(result, 9);
});
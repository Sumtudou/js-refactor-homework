const voyageZone = [
    'china', 'east-indies'
];

function voyageRisk(voyage) {
    let result = 1;
    result += voyage.length > 4 ? 2 : 0;
    result += voyage.length > 8 ? voyage.length - 8 : 0;
    return result + (voyageZone.includes(voyage.zone) ? 4 : 0);
}

function hasChina(history) {
    return history.some(v => v.zone === 'china');
}

function isVoyageEqualsChinaAndHistoryContainsChina(voyage, history) {
    return voyage.zone === 'china' && hasChina(history);
}

function captainHistoryRisk(voyage, history) {
    let result = history.length < 5 ? 5 : 1;
    result += history.filter(v => v.profit < 0).length;
    result -= isVoyageEqualsChinaAndHistoryContainsChina(voyage, history) ? 2 : 0;
    return Math.max(result, 0);
}

function isVoyageZoneIsChinaOrEast(voyage) {
    return voyage.zone === 'china' || voyage.zone === 'east-indies';
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    result += isVoyageZoneIsChinaOrEast(voyage) ? 1 : 0;
    if (isVoyageEqualsChinaAndHistoryContainsChina(voyage, history)) {
        result += 3;
        result += history.length > 10 ? 1 : 0;
        result += voyage.length > 12 ? 1 : 0;
        result += voyage.length > 18 ? -1 : 0;
    } else {
        result += history.length > 8 ? 1 : 0;
        result += voyage.length > 14 ? -1 : 0;
    }
    return result;
}

function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) {
        return 'A';
    } else {
        return 'B';
    }
}

module.exports = {
    rating, voyageProfitFactor, captainHistoryRisk, voyageRisk
};

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
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);

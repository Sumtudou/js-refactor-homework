const voyageZone = [
    'china','east-indies'
];
function voyageRisk(voyage) {
    let result = 1;
    result += voyage.length > 4 ? 2 : 0;
    result += voyage.length > 8 ? voyage.length - 8 : 0;
    return result += voyageZone.includes(voyage.zone)? 4 : 0;
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) {
        result += 4;
    }
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === 'china' && hasChina(history)) {
        result -= 2;
    }
    return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === 'china') {
        result += 1;
    }
    if (voyage.zone === 'east-indies') {
        result += 1;
    }
    if (voyage.zone === 'china' && hasChina(history)) {
        result += 3;
        if (history.length > 10) {
            result += 1;
        }
        if (voyage.length > 12) {
            result += 1;
        }
        if (voyage.length > 18) {
            result -= 1;
        }
    } else {
        if (history.length > 8) {
            result += 1;
        }
        if (voyage.length > 14) {
            result -= 1;
        }
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

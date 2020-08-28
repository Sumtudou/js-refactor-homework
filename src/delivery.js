const MA_CT = [
    'MA',
    'CT',
];

const NY_NH = [
    'NY',
    'NH',
];

const MA_CT_NY = [
    'MA',
    'CT',
    'NY',
];
const ME_NH = [
    'ME',
    'NH',
];

function deliveryDate(anOrder, isRush) {
    if (isRush) {
        let base = 1;
        let deliveryTime = base;
        deliveryTime += MA_CT.includes(anOrder.deliveryState) ? 1 : 0;
        deliveryTime += NY_NH.includes(anOrder.deliveryState) ? 2 : 0;
        deliveryTime += deliveryTime === base ? 3 : 0;
        return anOrder.placedOn.plusDays(deliveryTime);
    } else {
        let base = 2;
        let deliveryTime = base;
        deliveryTime += MA_CT_NY.includes(anOrder.deliveryState) ? 2 : 0;
        deliveryTime += ME_NH.includes(anOrder.deliveryState) ? 3 : 0;
        deliveryTime += deliveryTime === base ? 4 : 0;
        return anOrder.placedOn.plusDays(deliveryTime);
    }
}

module.exports = {
    deliveryDate,
}


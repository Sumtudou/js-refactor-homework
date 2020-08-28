const { deliveryDate } = require('../src/delivery');

const deliveryTest = require('ava');

deliveryTest('isRush true ,deliveryState is MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(2,deliveryDate(anOrder,true))
});

deliveryTest('isRush true ,deliveryState is NY',t => {
    const anOrder={
        deliveryState:'NY',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(3,deliveryDate(anOrder,true))
});

deliveryTest('isRush true ,deliveryState is ELSE',t => {
    const anOrder={
        deliveryState:'ELSE',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,true))
});

deliveryTest('isRush false ,deliveryState is MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,false))
});

deliveryTest('isRush false ,deliveryState is  ME',t => {
    const anOrder={
        deliveryState:'ME',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(5,deliveryDate(anOrder,false))
});
deliveryTest('isRush false ,deliveryState is  ELSE',t => {
    const anOrder={
        deliveryState:'ELSE',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(6,deliveryDate(anOrder,false))
});

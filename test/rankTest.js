const rankTest = require('ava');
const {rating} = require('../src/rank')
rankTest('foo', t => {
    t.pass();
});

rankTest('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});


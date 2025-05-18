import {Selector}from 'testcafe';

fixture `NinjaTest`
.page `https://app.ninjarmm.com/auth/#/login`;
test
('ninja site selectors', async t => {
    console.log('----------------------');
    console.log('ninja site selectosrs');

    const webTableLi = Selector('#email');

    await t
    .click(webTableLi)
    .wait(2000)

    const headerSelector = Selector('.form-control')
    const headerString = await headerSelector.innerText;

    console.log('Header text:', headerString);

})
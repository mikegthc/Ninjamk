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
    .typeText(Selector('#email'), 'mikegthc@gmail.com')
    .typeText(Selector('#password'), 'Calidad.0')
    .wait (2000)    
    .click(Selector('.btn'))
    .wait (2000) 

})
export let Email = $('#email')
export let Date  = $('#cc-exp')
export const cvc = $('#cc-csc')
export const Total = $('#total')
export const cartview = $('//tbody/tr')
export let Cardnumber = $('#card_number')
export const temperature = $('#temperature')
export const paywithcardbutton = $('button[type="submit"]')
export const paybutton = $('.//button[contains(.,"Pay INR")]')
export const gotocartbutton = $('button[onclick="goToCart()"]')
export const buysunscreensbutton = $('//button[contains(.,"Buy sunscreens")]')
export const buymoisturizersbutton = $('//button[contains(.,"Buy moisturizers")]')
export const addmoisturizerbutton = $('button[onclick="addToCart(\'Boris Almond and Honey\',128)"]')
export const addsunscreenbutton = $('button[onclick="addToCart(\'Vladimir Sun Expert SPF-30\',160)"]')

export const d = {
    
    async Gettemptext()
    {
        await temperature.waitForDisplayed()
        return temperature.getText()
    },
    async clickmoisturizerbutton() 
    {
        await buymoisturizersbutton.waitForDisplayed()
        await buymoisturizersbutton.click()
    },
    async clicksunscreensbutton() {
        await buysunscreensbutton.waitForDisplayed()
        await buysunscreensbutton.click()
    },
    async clickaddmoisturizerbutton() 
    {
        await browser.pause(2000)
        await addmoisturizerbutton.waitForDisplayed()
        await addmoisturizerbutton.click()
    },
    async clickaddsunscreenbutton() 
    {
        await browser.pause(2000)
        await addsunscreenbutton.waitForDisplayed()
        await addsunscreenbutton.click()
    },
    async clickgotocartbutton()
    {
        await gotocartbutton.waitForDisplayed()
        await gotocartbutton.click()
    },
    async displaycart()
    {
        await cartview.waitForDisplayed()
        return cartview
    },
    async displayTotal()
    {
        await Total.waitForDisplayed()
        return Total.getText()
    },
    async Enterpaywithcardburron()
    {
        await paywithcardbutton.waitForDisplayed()
        await paywithcardbutton.click()
    },

    async Entercreden()
    {
        const email = 'mahad.tarin@emumba.com'
        const cardnumber = "5366 1900 3285 1897"
        const dated = "112030"
        const CVC = 278
        await Email.setValue(email)
        for (const char of cardnumber) 
        {
            await Cardnumber.addValue(char);
            await browser.pause(500);
        }
        for (const char of dated) 
        {
            await Date.addValue(char);
            await browser.pause(500); // Add a delay between each character
        }
        await cvc.setValue(CVC)
    },
    async Enterpaybutton()
    {
        await paybutton.click()
        await browser.pause(5000)
    },
    async Iframe() 
    {
        console.log('Iframe element is visible')
        const s = await browser.$(".stripe_checkout_app")
        await browser.pause(3000)
        await browser.switchToFrame(s);
    }
}
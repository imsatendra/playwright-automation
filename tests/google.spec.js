const {test , expect} = require("@playwright/test");

test("verify applicatio title" ,  async function({page}){

    await page.goto("http://google.com");
    const url = page.url();

    console.log("title is " + url);
    
    const title = await page.title();
    console.log("title" ,title);

    await expect(page).toHaveTitle("yahoo");
})
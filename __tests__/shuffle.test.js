const shuffle = require("../src/shuffle");
let { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver")
let driver;
beforeAll(async () => {
    driver = new Builder().forBrowser(Browser.CHROME).build()
})

afterAll(async () => {
    await driver.quit()
})
let bots = require("../src/botsData")
let shuffled = shuffle(bots)

describe("shuffle should...", () => {
    /*/!*Oops, I got ahead of myself and did all automation tests at first.*!/

    test("return an array of choices", async () => {
        await driver.get("http://localhost:8000")
        await driver.wait(until.titleIs("Duel Duo"), 1000)
        await driver.findElement(By.id("draw")).click()
        await driver.wait(until.elementLocated(By.id("choices")), 1000)
    })
    test("return an array of the same length as the passed argument", async () => {
        await driver.get("http://localhost:8000")
        await driver.wait(until.titleIs("Duel Duo"), 1000)
        await driver.findElement(By.id("draw")).click()
        await driver.wait(until.elementLocated(By.id("choices")), 1000)
        let choices = await driver.findElement(By.id("choices")).findElements(By.className("bot-card"))
        expect(shuffle(choices).length).toBe(choices.length)
    })*/
    test("return an array", () => {
        expect(Array.isArray(shuffled)).toBe(true)
    })
    test("return an array that contains the same items", () => {
        expect(shuffled).toEqual(expect.arrayContaining(bots))
    })
})

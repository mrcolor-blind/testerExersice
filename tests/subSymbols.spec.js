// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('subSymbols', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('subSymbols', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 808, height: 720 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("!!!")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("---")
    await driver.findElement(By.css("button:nth-child(2)")).click()
    await driver.close()
  })
})

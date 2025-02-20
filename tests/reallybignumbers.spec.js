// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Really big numbers', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Really big numbers', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 808, height: 719 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("10000000000000000000000000000000000000000000000000000000000000000000")
    await driver.findElement(By.id("num2")).sendKeys("100000000000000000000000000000000000000000000000000000000000000000000")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.id("result")).click()
    await driver.findElement(By.id("result")).click()
  })
})

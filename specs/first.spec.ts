import { browser } from 'protractor'
import { expect } from 'chai'

describe('My first suite', () => {
  it('First test', async () => {
    await browser.get('')
    await browser.sleep(5000)
    expect(1).to.equal(1, 'impossible')
  })
})

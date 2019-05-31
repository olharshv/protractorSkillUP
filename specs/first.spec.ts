import { browser, element, $ } from 'protractor'
import { expect } from 'chai'
import { async } from 'q';

describe('My first suite', () => {

  it('First test', async () => {
    await browser.get('')
    await browser.sleep(5000)
    expect(1).to.equal(1, 'impossible')
  })

  it('Second test', async() =>{
    await browser.get('')
    await browser.sleep(5000)
    await $('.css').get
    
  }
  )

})

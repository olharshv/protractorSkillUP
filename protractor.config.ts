import { browser, Config } from 'protractor'

const config: Config = {
  capabilities: {
    browserName: 'chrome',
    maxInstances: 1
    },
  allScriptsTimeout: 30 * 1000,
  specs: ['specs/*.spec.ts'],
  baseUrl: 'http://www.protractortest.org/testapp/ng1/',
  framework: 'mocha',
  mochaOpts: {
    timeout: 350 * 1000,
    fullTrace: true,
    reporter: 'spec'
  },

   directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub', // local run
  // seleniumSessionId: '',

  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false,

  onPrepare: async () => {
    await browser.waitForAngularEnabled(false)
    await browser.manage().window().maximize()
  }
}

export {config}

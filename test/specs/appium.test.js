'use strict';

const path = require('path');

const wdio = require('webdriverio');

const opts = {
    hostname: 'localhost',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "9.0",
        deviceName: "Android Emulator",
        automationName: 'UiAutomator2',
        app: path.join(__dirname, 'ApiDemos-debug.apk')
    }
};

(async () => {
    const client = await wdio.remote(opts);
    
    // const elementId = await client.$("~TextField1");
    // await client.elementSendKeys(elementId.ELEMENT, 'Hello World!');
    // const elementValue = await client.$("~TextField1");
    // await client.getElementAttribute(elementValue.ELEMENT, "value").then((attr) => {
    //     assert.equal(attr, "Hello World!");
    // });
})();

'use strict';

const path = require('path');

const wdio = require('webdriverio');

const opts = {
    hostname: '127.0.0.1',
    port: 4723,
    capabilities: {
        automationName: 'UiAutomator2',
        app: path.join(__dirname, 'ApiDemos-debug.apk'),
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

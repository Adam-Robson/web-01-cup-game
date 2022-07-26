// include jsdom for DOM use in tests on travis
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { window } = new JSDOM(``, {
    url: 'http://localhost:5500'
});
global.window = window;
global.document = window.document;
global.FormData = window.FormData;
global.localStorage = window.localStorage;
global.sessionStorage = window.sessionStorage;
global.URLSearchParams = window.URLSearchParams;
global.URL = window.URL;

// eslint-disable-next-line no-global-assign
require = require('esm')(module);
export * from './tests.js';
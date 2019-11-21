/* @title: <<nodejs-http-client>> program written in Node.js.
 * @desc: A simple program calling an external rest api with fetch module.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => console.log(json))
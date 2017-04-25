'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile.js');
let watermelon = require('./entry-test/watermelon.js');
let beautifulyear = require('./entry-test/beautifulyear.js');
let stones = require('./entry-test/stones.js');
let chat = require('./entry-test/chat.js');
let linkedList = require('./LinkedList.js');
let stack = require('./Stack.js');
let queue = require('./Queue.js');

let algolib = {
    bubbleSort,
    coverByTile,
    watermelon,
    beautifulyear,
    stones,
    chat,
    linkedList,
    stack,
    queue
}

module.exports = algolib;
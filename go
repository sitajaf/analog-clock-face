#!/usr/bin/env bash

function init (){
    npm install
}

function test () {
    npm test
}

function run (){
    node .
}

eval $1
#!/usr/bin/env bash

function init (){
    npm install
}

function test () {
    npm test
}

eval $1
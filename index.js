#!/usr/bin/env node

const electroner = require('electroner')
const { resolve } = require('path')

electroner(resolve(__dirname, 'app.js'))

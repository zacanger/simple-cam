#!/usr/bin/env node

const { spawn } = require('child_process')
const nw = require('nwjs')
const { dirname } = require('path')
const where = dirname(require.main.filename)
const child = spawn(nw, [ where ])

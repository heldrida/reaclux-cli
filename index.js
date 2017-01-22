#!/usr/bin/env node

require('babel-polyfill')

var spawn = require('child_process').spawn,
	chalk = require('chalk'),
	figlet = require('figlet')

spawn('clear', [null], { stdio: 'inherit' })

console.log(
	chalk.magenta(
		figlet.textSync('Reaclux', { horizontalLayout: 'full' })
	),
	chalk.yellow.bold('\n' + ' ' + 'Boilerplate CLI'),
	chalk.yellow('by Punkbit'),
	'\n',
	'\n'
)
#!/usr/bin/env node
// bin/index.js
// 指定文件解释器
// 告诉操作系统，当执行这个文件的时候，调用系统环境下的node解释器

// 引入自定义命令组件
const program = require('commander')

// 设置版本号
program.version(require('../package').version)

// 设置 init 命令，name 为参数
program.command('init <name>')
      .description('init project') // 设置init命令的描述
      .option('-s, --session', 'session param') // 设置参数
      .action(require('../lib/init'))

// 命令的执行其实是 commander 解析 process.argv 参数来启动
program.parse(process.argv);
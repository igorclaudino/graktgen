
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'graktgen',
  run: async toolbox => {
    const { print, parameters } = toolbox
    console.log(parameters)
    print.info('Welcome to your CLI')
  },
}

module.exports = command

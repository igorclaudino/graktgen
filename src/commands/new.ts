
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
    name: 'new',
    description: 'Create the initial structure',
    run: async toolbox => {
        const {
            createConfig,
            createDatabase,
            createApp,
            parameters,
            system,
            dependencies,
            devDependencies,
            print: { success, colors }
        } = toolbox

        const timer = toolbox.system.startTimer()

        const checkParam = toolbox.print.spin('Checking if everything is okay')
        if (!parameters.first) {
            checkParam.stopAndPersist({ symbol: '❌', text: 'You must provide the project name :(' })
            return
        }

        const name = parameters.first

        await createConfig(name, parameters.options.ts)
        await createDatabase(name, parameters.options.ts)
        await createApp(name, parameters.options.ts)

        checkParam.stopAndPersist({ symbol: '👍', text: 'Everything is okay' })

        const dependenciesCommand = `cd ${name} && yarn add ${dependencies.join(" ")}`
        const devDependenciesCommand = `cd ${name} && yarn add -D ${devDependencies.join(" ")}`

        let spinner = toolbox.print.spin('Installing dependencies')

        await system.run(dependenciesCommand, { trim: true })
        spinner.stopAndPersist({ symbol: '✔', text: 'all done xD!' })

        spinner = toolbox.print.spin('Installing dev dependencies')

        await system.run(devDependenciesCommand, { trim: true })
        spinner.stopAndPersist({ symbol: '✔', text: 'all done xD!' })

        const time = Math.floor(timer() / 1000)

        success(colors.muted(`that just took ${time} seconds, kinda fast :D`))
    }
}

module.exports = command

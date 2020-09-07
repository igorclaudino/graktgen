import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
    const {
        template
    } = toolbox

    async function createApp(name: string, ts: boolean = false) {
        const ext: string = ts ? 'ts' : 'js';

        await template.generate({
            template: `${ext}/app/app.${ext}.ejs`,
            target: `${name}/src/app.${ext}`
        })

        await template.generate({
            template: `${ext}/app/bootstrap.${ext}.ejs`,
            target: `${name}/src/bootstrap.${ext}`
        })

        await template.generate({
            template: `${ext}/app/routes.${ext}.ejs`,
            target: `${name}/src/routes.${ext}`
        })

        await template.generate({
            template: `${ext}/app/server.${ext}.ejs`,
            target: `${name}/src/server.${ext}`
        })

        await template.generate({
            template: `${ext}/app/controllers/SessionController.${ext}.ejs`,
            target: `${name}/src/app/controllers/SessionController.${ext}`
        })

        await template.generate({
            template: `${ext}/app/controllers/HealthDatabaseController.${ext}.ejs`,
            target: `${name}/src/app/controllers/HealthDatabaseController.${ext}`
        })

        await template.generate({
            template: `${ext}/app/controllers/HealthStatusController.${ext}.ejs`,
            target: `${name}/src/app/controllers/HealthStatusController.${ext}`
        })

        await template.generate({
            template: `${ext}/app/models/User.${ext}.ejs`,
            target: `${name}/src/app/models/User.${ext}`
        })

        await template.generate({
            template: `${ext}/app/middlewares/auth.${ext}.ejs`,
            target: `${name}/src/app/middlewares/auth.${ext}`
        })
    }

    toolbox.createApp = createApp
}

import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
    const {
        template
    } = toolbox

    async function createConfig(name: string, ts: boolean = false) {
        const ext: string = ts ? 'ts' : 'js';

        await template.generate({
            template: `${ext}/configs/editorconfig.ejs`,
            target: `${name}/.editorconfig`
        })

        await template.generate({
            template: `${ext}/configs/sequelizerc.ejs`,
            target: `${name}/.sequelizerc`
        })

        await template.generate({
            template: `${ext}/configs/prettierrc.ejs`,
            target: `${name}/.prettierrc`
        })

        await template.generate({
            template: `${ext}/configs/eslintrc.js.ejs`,
            target: `${name}/.eslintrc.js`
        })

        await template.generate({
            template: `${ext}/configs/commitlint.config.js.ejs`,
            target: `${name}/commitlint.config.js`
        })

        await template.generate({
            template: `${ext}/configs/nodemon.json.ejs`,
            target: `${name}/nodemon.json`
        })

        await template.generate({
            template: `${ext}/configs/gitignore.ejs`,
            target: `${name}/.gitignore`
        })

        await template.generate({
            template: `${ext}/configs/env.test.ejs`,
            target: `${name}/.env.test`
        })

        await template.generate({
            template: `${ext}/configs/env.example.ejs`,
            target: `${name}/.env.example`
        })

        await template.generate({
            template: `${ext}/configs/README.md.ejs`,
            target: `${name}/README.md`
        })

        await template.generate({
            template: `${ext}/service/api.${ext}.ejs`,
            target: `${name}/src/service/api.${ext}`
        })

        await template.generate({
            template: `${ext}/app/config/database.${ext}.ejs`,
            target: `${name}/src/config/database.${ext}`
        })

        await template.generate({
            template: `${ext}/app/config/auth.${ext}.ejs`,
            target: `${name}/src/config/auth.${ext}`
        })

        await template.generate({
            template: `${ext}/package.js.ejs`,
            target: `${name}/package.json`,
            props: { name: name }
        })
    }

    toolbox.createConfig = createConfig
}

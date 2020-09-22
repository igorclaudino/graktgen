import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
    const {
        template
    } = toolbox

    async function createDatabase(name: string, ts: boolean = false) {
        const ext: string = ts ? 'ts' : 'js';
        if (ext === 'js') {
            await template.generate({
                template: `${ext}/database/index.${ext}.ejs`,
                target: `${name}/src/database/index.${ext}`
            })
        }
    }

    toolbox.createDatabase = createDatabase
}

import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
    const {
        system,
        template,

        print: { success, error }
    } = toolbox

    function install(packages) {
        console.log(typeof packages)

        if (typeof packages === 'object') {
            packages.map(pkg => {
                success(`Installing ${pkg} package...`)
                system.run(`yarn add ${pkg}`)
            })
            return true
        } else {
            error(`Expected object or array, found ${typeof packages}`)
            return false
        }
    }

    async function create(type, name) {
        if (!name) {
            error('Name must be specified')
            return
        }

        switch (type) {
            case 'controller':
                await template.generate({
                    template: 'controller.js.ejs',
                    target: `src/app/controller/${name}Controller.js`,
                    props: { name }
                })
                break
            case 'model':
                await template.generate({
                    template: 'model.js.ejs',
                    target: `src/app/model/${name}.js`,
                    props: { name }
                })
                break

            case 'test':
                await template.generate({
                    template: 'tests/test.js.ejs',
                    target: `__tests__/${name}.js`,
                    props: { name }
                })
                break

            default:
                error(`Not setted:${type}/${name}`)
                break
        }

        success(`Generated ${type}.`)
    }

    toolbox.create = create
    toolbox.installPackages = install
}

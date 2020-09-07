const dependencies = [
    "axios",
    "bcryptjs",
    "cors",
    "date-fns",
    "dotenv",
    "express",
    "express-async-errors",
    "express-status-monitor",
    "jsonwebtoken",
    "pg",
    "pg-hstore",
    "sequelize",
    "youch",
    "yup"
]
const devDependencies = [
    "@commitlint/cli",
    "@commitlint/config-conventional",
    "@sucrase/jest-plugin",
    "@types/jest",
    "commitizen",
    "cz-conventional-changelog",
    "eslint",
    "eslint-config-airbnb-base",
    "eslint-config-prettier",
    "eslint-plugin-import",
    "eslint-plugin-prettier",
    "factory-girl",
    "faker",
    "husky",
    "jest",
    "lint-staged",
    "prettier",
    "sequelize-cli",
    "sqlite3",
    "sucrase",
    "supertest",
    "nodemon"
]

import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
    toolbox.dependencies = dependencies
    toolbox.devDependencies = devDependencies
}

const dependencies = {
    js: [
        "axios",
        "bcryptjs",
        "cors",
        "date-fns",
        "dotenv",
        "express",
        "jsonwebtoken",
        "pg",
        "pg-hstore",
        "sequelize",
        "youch",
        "yup"
    ],
    ts: [
        "bcryptjs",
        "body-parser",
        "cors",
        "dotenv",
        "express",
        "jsonwebtoken",
        "pg",
        "reflect-metadata",
        "typeorm"
    ]
}
const devDependencies = {
    js: [
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
    ],
    ts: [
        "@types/bcryptjs",
        "@types/cors",
        "@types/express",
        "@types/jsonwebtoken",
        "@types/node",
        "@typescript-eslint/eslint-plugin",
        "@typescript-eslint/parser",
        "eslint",
        "eslint-config-airbnb-base",
        "eslint-plugin-import",
        "eslint-plugin-import-helpers",
        "prettier",
        "ts-node",
        "ts-node-dev",
        "typescript"
    ]
}

import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
    toolbox.dependencies = dependencies
    toolbox.devDependencies = devDependencies
}

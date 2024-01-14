#!/usr/bin/env node

import readline from 'readline'
import { execSync } from 'child_process'

let questionaire = [
    { "que": "Do you want to configure Prettier: ", "ans": true, "command": `./node_modules/cbmen/commands/prettier.sh`, "name": `Prettier`},
    { "que": "Additional libraries-\nmulter: ", "ans": true, "command": `./node_modules/cbmen/commands/multer.sh`, "name": `Multer` },
    { "que": "bcrypt: ", "ans": true, "command": `./node_modules/cbmen/commands/bcrypt.sh`, "name": `bcrypt` },
    { "que": "jsonwebtoken: ", "ans": true, "command": `./node_modules/cbmen/commands/jsonwebtoken.sh`, "name": `JsonWebToken` },
    { "que": "cloudinary: ", "ans": true, "command": `./node_modules/cbmen/commands/cloudinary.sh`, "name": `Cloudinary` },
]

const askUser = (que) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(`${que}`, (userInput) => {
            rl.close()
            resolve(userInput)
        });
    })
}

const runCommandPath = localUrl => {
    try {
        execSync(`bash ${localUrl}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute commands: `, e)
        return false
    }
}

// starting work from here

console.log("Project configuration questionaire\n\n-> `n` for no\n-> nothing or anything for yes\n")

for (let s of questionaire) {
    const userInput = await askUser(s.que)
    if (userInput.toLowerCase() == 'n') s.ans = false;
}

console.log("please wait ...")

runCommandPath("./node_modules/cbmen/commands/basic.sh")

for (const s of questionaire) {
    if (s.ans) {
        console.log(`Installing ${s.name} ...`)
        runCommandPath(s.command)
    }
}

console.log("Backend configured :)")
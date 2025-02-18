module.exports = {
    apps: [
        {
            name: 'clindoc',
            port: 3000,
            exec_mode: 'fork',
            script: './.output/server/index.mjs'
        }
    ]
}


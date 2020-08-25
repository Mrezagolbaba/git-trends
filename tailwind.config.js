module.exports = {
    purge: {
        content: [
            "./base/**/*.ts?",
            "./staff/**/*.ts?",
            "./expert/**/*.ts?",
            "./customer/**/*.ts?",
        ]
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
    corePlugins: {
        container: false,
    }
};

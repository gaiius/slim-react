// Empty folders to start fresh.
module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= cfg.static %>/*',
                '!<%= cfg.static %>/.git*'
            ]
        }]
    },
};

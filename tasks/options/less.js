// Less-ify files
module.exports = {
    dist: {
        files: {
            '<%= cfg.static %>/styles/app.css': '<%= cfg.assets %>/styles/main.less'
        }
    }
};

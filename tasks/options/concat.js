// Concat tasks.
module.exports = {
    options: {
        nonull: true,
    },
    vendorcss: {
        src: [
        ],
        dest: '<%= cfg.static %>/styles/vendor.css'
    },
    vendorjs: {
        src: [
        ],
        dest: '<%= cfg.static %>/scripts/vendor.js'
    },
};


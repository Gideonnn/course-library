const copy = require('rollup-plugin-cpy');

module.exports = {
  rollup(config) {


    config.plugins.push(
      copy([
        {
          files: './src/styles/colors.scss',
          dest: './dist/',
        },
      ]),
    );

    return config;
  },
};

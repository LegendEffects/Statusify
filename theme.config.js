const { ThemeManager, Theme } = require('tailwindcss-theming/api');

const commonColors = {
  's-operational': 'rgb(46, 204, 113)',
  's-partial': 'rgb(230, 126, 34)',
  's-major': 'rgb(231, 76, 60)',
  's-info': 'rgb(83, 83, 83)'
}

const light = new Theme()
  .setName('light')
  .targetable()
  .addColors({
    ...commonColors,
    
    'layout': 'rgb(255, 255, 255)',
    'background': 'rgb(244, 247, 248)',
    'background2': 'rgb(238, 242, 245)',
    'color': 'rgb(44, 62, 80)',
    'color-light': 'rgb(178, 90, 117)',
    'code': 'rgb(63, 61, 86)',
    'code2': 'rgb(54, 52, 73)',
  });

const dark = new Theme()
  .setName('dark')
  .targetable()
  .addColors({
    ...commonColors,

    'layout': 'rgb(30, 32, 35)',
    'background': 'rgb(24, 25, 28)',
    'background2': 'rgb(20, 20, 23)',
    'color': 'rgb(255, 255, 255)',
    'color-light': 'rgb(180, 180, 180)',
    'code': 'rgb(20, 20, 23)',
    'code2': 'rgb(22, 22, 25)',
  });

const themeManager = new ThemeManager()

themeManager.setDefaultTheme(light).setDefaultDarkTheme(dark);

module.exports = themeManager;
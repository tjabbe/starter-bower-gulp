var appSrc  = 'app',
    appDest = 'build',
    bourbon = require('node-bourbon');

module.exports = {
  appSrc: appSrc,
  appDest: appDest,

  styles: {
    watchSrc: appSrc + '/assets/styles/**/*.scss',
    src: appSrc + '/assets/styles/app.scss',
    dest: appDest + '/css/',
    sassOpts: {
      includePaths: bourbon.includePaths
    },
    autoprefixerOpts: {
      browsers: ['last 2 versions', 'ie >= 10']
    }
  },

  scripts: {
    src: appSrc + '/assets/scripts/main.js',
    watchSrc: appSrc + '/assets/scripts/**/*.js',
    vendorSrc: appSrc + '/assets/scripts/vendors/*.js',
    dest: appDest + '/js/',
    modernizrOpts: {
      cache: true,
      options: ['setClasses', 'html5shiv'],
      tests: [
        "hashchange",
        "history",
        "inputtypes",
        "requestanimationframe",
        "svg",
        "backgroundsize",
        "bgsizecover",
        "placeholder",
        "localstorage",
        "svgasimg",
        "touchevents",
        "objectfit"
      ]
    }
  },

  scriptsCorpo: {
    src: appSrc + '/assets/scripts/app_corpo.js',
    dest: appDest + '/js/',
    modernizrOpts: {
      cache: true,
      options: ['setClasses', 'html5shiv'],
      tests: [
        "hashchange",
        "history",
        "inputtypes",
        "requestanimationframe",
        "svg",
        "backgroundsize",
        "bgsizecover",
        "placeholder",
        "localstorage",
        "svgasimg",
        "touchevents",
        "objectfit"
      ]
    }
  },

  views: {
    watchSrc: appSrc + '/views/**/*.*',
    src: appSrc + '/views/**/*.*',
    dest: appDest
  },

  sprite: {
    src: appSrc + '/assets/sprite/*.png',
    destImg: appDest + '/img/',
    destCss: appSrc + '/assets/styles/base/',
    opts: {
      retinaSrcFilter: appSrc + '/assets/sprite/*@2x.png',
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      retinaImgName: 'sprite@2x.png',
      imgPath: '../img/sprite.png',
      retinaImgPath: '../img/sprite@2x.png',
      algorithm: 'binary-tree'
    }
  },

  icons: {
    watchSrc: appSrc + '/assets/icons/*.svg',
    src: appSrc + '/assets/icons/*.svg',
    spriteConfig: {
      mode: {
        symbol: { // symbol mode to build the SVG
          render: {
            css: false, // CSS output option for icon sizing
            scss: false // SCSS output option for icon sizing
          },
          dest: 'sprite', // destination folder
          prefix: '.svg--%s', // BEM-style prefix if styles rendered
          sprite: 'sprite.svg', //generated sprite name
          example: true // Build a sample page, please!
        }
      }
    },
    dest: appDest + '/img/',
  },

  images: {
    src: appSrc + '/assets/img/**/*.{jpg,png,gif,svg}',
    dest: appDest + '/img/',
    opts: {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }
  },

  copy: {
    src: [
      appSrc + '/favicon.ico',
      appSrc + '/views/*.json'
    ],
    dest: appDest
  },

  fonts: {
    src: appSrc + '/assets/fonts/*',
    dest: appDest + '/fonts/'
  },

  clean: {
    src: [
      appDest
    ]
  },

  browserSync: {
    proxy: 'example.dev'
  }
};
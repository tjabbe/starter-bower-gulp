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
    src: appSrc + '/assets/scripts/**/*.js',
    vendorSrc: [appSrc + '/assets/scripts/vendors/jquery-2.1.4.min.js', appSrc + '/assets/scripts/vendors/*.js'],
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
    watchSrc: appSrc + '/views/**/*.php',
    src: appSrc + '/views/**/*.php',
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

  iconfont: {
    src: appSrc + '/assets/icons/*.svg',
    dest: appSrc + '/assets/fonts/',
    fontSrc: appSrc + '/assets/fonts/icons.*',
    fontDest: appDest + '/fonts/',
    opts: {
      fontName: 'icons',
      path: appSrc + '/assets/styles/base/_icons-tpl.scss',
      targetPath: '../styles/base/_icons.scss',
      fontPath: '../fonts/'
    }
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
    proxy: 'boxparking.dev'
  }
};
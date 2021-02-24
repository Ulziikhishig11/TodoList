module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-use-query-params/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"ulz","short_name":"ulz","start_url":"/","display":"standalone","icon":"src/icons/favicon-96x96.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    }]

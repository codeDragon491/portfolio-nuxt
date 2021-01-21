const webpack = require('webpack')
export default {
    mode: 'spa',
    target: 'static',
    router: {
        base: '/portfolio-nuxt/'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#d93337',
        continuous: true,
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // ssr: false to only include it on client-side
        {
            src: '~/plugins/gsap-scrollmagic.js',
            ssr: false
        },
        {
            src: '~/plugins/split-text-plugin.js',
            ssr: false
        }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        //'@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        extend(config, { loaders: { vue } }) {
            console.log(vue)

            vue.transformAssetUrls.embed = ['src', 'poster']

            config.module.rules.push({
                test: /\ .bin/,
                include: '/node_modules/@codedragon491/voronoi-stippling/1d00cdef5021dcfa@399.js',
                loader: 'vue-loader'
            })
        }
    }
}
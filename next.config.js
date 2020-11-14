const withImages = require('next-images')

// module.exports = {
//     async redirects() {
//         return [
//             {
//                 source: '/pokedex',
//                 destination: '/',
//                 permanent: true
//             }
//         ]
//     }
// }

module.exports = withImages()
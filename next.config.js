module.exports = {
    async redirects() {
      return [
        {
          source: '/pokedex',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }
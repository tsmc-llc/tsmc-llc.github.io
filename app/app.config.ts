export default defineAppConfig({
  global: {
    picture: {
      dark: '/logo.png',
      light: '/logo.png',
      alt: 'TSMC LLC Logo'
    },
    meetingLink: '',
    email: 'contact+tsmc@serp.co',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()} TSMC LLC`,
    colorMode: false,
    links: []
  }
})

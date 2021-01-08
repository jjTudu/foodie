module.exports = {
  plugins: ['@elegantstack/gatsby-theme-flexiblog-science',    {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "6757",
    },
  },
  "gatsby-plugin-sharp",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-offline",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "content/assets/logo.png",
    },
  },
  "gatsby-transformer-remark",
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./content/assets/",
    },
    __key: "images",
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "./public/pages/",
    },
    __key: "pages",
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `./data/`,
    },
  },
  `gatsby-transformer-csv`,],

  siteMetadata: {
    //General Site Metadata
    title: 'FlexiBlog Theme',
    name: 'FlexiBlog',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}

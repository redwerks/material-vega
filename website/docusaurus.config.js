module.exports = {
  title: 'Material Vega',
  tagline: 'Material Design stylized themes for Vega Lite visualizations',
  url: 'https://redwerks.github.io/material-vega/',
  baseUrl: '/material-vega/',
  favicon: 'img/favicon.ico',
  organizationName: 'redwerks', // Usually your GitHub org/user name.
  projectName: 'material-vega', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Material Vega',
      logo: {
        alt: 'Material Vega',
        src: 'img/logo.svg'
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        {
          href: 'https://github.com/redwerks/material-vega',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1'
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/redwerks/material-vega'
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/material-vega'
            }
          ]
        },
        {
          title: 'Related',
          items: [
            {
              label: 'Vega Lite',
              href: 'https://vega.github.io/vega-lite/docs/'
            },
            {
              label: 'Vega-React',
              href: 'https://www.npmjs.com/package/react-vega'
            },
            {
              label: 'Material UI',
              href: 'https://material-ui.com/'
            },
            {
              label: 'Material Guidelines for Visualizations',
              href:
                'https://material.io/design/communication/data-visualization.html'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Redwerks. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d17d4a0a8dbff1af93ece25',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ec9rryod',
                  apiId: '51653663-3ddd-46d0-9f8c-77cbbc174fb5'
                },
                {
                  buildHookId: '5d17d4a067f924d3880b1711',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nm7bgxtp',
                  apiId: '36feede1-f6c3-476f-bdf5-5a673b36ac1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alejandrosuarez/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nm7bgxtp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

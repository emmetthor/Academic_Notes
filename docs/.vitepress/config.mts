import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Emmetthor's Academic Notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '筆記', link: '/notes/index' }
    ],

    sidebar: {
      '/notes/': [
        // 物理
        {

        },

        // 地科
        {

        },

        // 化學
        {

        },

        // 生物
        {
          text: '生物',
          items: [
            {
              text: '有機物質',
              items: [
                { text: '蛋白質', link: 'notes/biology/蛋白質' },
                { text: '核甘酸', link: 'notes/biology/核苷酸' }
              ]
            },
            {
              text: '能量產生',
              items: [
                { text: '有氧呼吸', link: 'notes/biology/有氧呼吸' },
                { text: '無氧呼吸', link: 'notes/biology/無氧呼吸' }
              ]
            },
            { text: '光合作用', link: 'notes/biology/光合作用' }
          ]
        },

        // TRML
        {
          text: 'TRML',
          items: [
            {
              text: '2019年',
              items: [
                { text: '個人賽', link: 'notes/TRML/2019/TRML_2019_個人賽' }
              ]
            },

            {
              text: '必備數學技能',
              collapsed: true,
              items: [
                { text: '三角函數進階', link: 'notes/TRML/skill/三角函數' },
                { text: '向量', link: 'notes/TRML/skill/向量' },
                { text: '對數進階', link: 'notes/TRML/skill/對數' },
                { text: '微分', link: 'notes/TRML/skill/微分' },
                { text: '數論', link: 'notes/TRML/skill/數論' },
                { text: '矩陣', link: 'notes/TRML/skill/矩陣' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

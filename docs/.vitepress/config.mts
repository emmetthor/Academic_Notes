import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Emmetthor's Academic Notes",
  base: '/Academic_Notes/',
  description: "A VitePress Site",
  
  markdown: {
    math: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '筆記', link: '/notes/index' }
    ],

    sidebar: {
      '/notes/': [
        // 數學
        {
          text: '數學',
          items: [
            {
              text: '錯題',
              items: [
                { text: 'math-001', link: 'notes/math/三角函數/錯題/math-001.md' }
              ]
            }
          ]
        },
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
            { text: '生物目錄', link: 'notes/biology/index' },
            {
              text: '有機物質',
              items: [
                { text: '蛋白質', link: 'notes/biology/有機物質/蛋白質' },
                { text: '核甘酸', link: 'notes/biology/有機物質/核苷酸' },
                { text: '含氮鹼基', link: 'notes/biology/有機物質/含氮鹼基' },
                { text: 'DNA 和 RNA', link: 'notes/biology/有機物質/DNA和RNA' }
              ]
            },
            {
              text: '能量產生',
              items: [
                { text: '有氧呼吸', link: 'notes/biology/能量產生/有氧呼吸' },
                { text: '無氧呼吸', link: 'notes/biology/能量產生/無氧呼吸' }
              ]
            },
            { text: '光合作用', link: 'notes/biology/能量產生/光合作用' },
            {
              text: '基因與遺傳',
              items: [
                { text: 'DNA 複製', link: 'notes/biology/基因與遺傳/DNA複製' },
                { text: '轉錄與轉譯', link: 'notes/biology/基因與遺傳/轉錄與轉譯' },
              ]
            }
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
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    }
  }
})

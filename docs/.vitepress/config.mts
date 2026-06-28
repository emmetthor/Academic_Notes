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
          collapsed: true,
          items: [
            {
              text: '錯題',
              collapsed: true,
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
          text: '化學',
          collapsed: true,
          items: [
            { text: '化學首頁', link: 'notes/chemistry/index' },
            {
              text: '溶液',
              collapsed: true,
              items: [
                { text: '溶液類型', link: 'notes/chemistry/溶液/溶液類型' },
                { text: '膠體溶液', link: 'notes/chemistry/溶液/膠體溶液' },
                { text: '濃度表示', link: 'notes/chemistry/溶液/濃度表示' },
              ]
            },
            {
              text: '酸鹼',
              collapsed: true,
              items: [
                { text: '電解質', link: 'notes/chemistry/酸鹼/電解質' },
                { text: '酸鹼度', link: 'notes/chemistry/酸鹼/酸鹼度' },
                {
                  text: '錯題',
                  collapsed: true,
                  items: [
                    { text: 'che-001', link: 'notes/chemistry/酸鹼/錯題/che-001.md' },
                    { text: 'che-002', link: 'notes/chemistry/酸鹼/錯題/che-002.md' },
                    { text: 'che-003', link: 'notes/chemistry/酸鹼/錯題/che-003.md' },
                    { text: 'che-004', link: 'notes/chemistry/酸鹼/錯題/che-004.md' },
                  ]
                }
              ]
            }
          ]
        },

        // 生物
        {
          text: '生物',
          collapsed: true,
          items: [
            { text: '生物目錄', link: 'notes/biology/index' },
            {
              text: '有機物質',
              collapsed: true,
              items: [
                { text: '蛋白質', link: 'notes/biology/有機物質/蛋白質' },
                { text: '核甘酸', link: 'notes/biology/有機物質/核苷酸' },
                { text: '含氮鹼基', link: 'notes/biology/有機物質/含氮鹼基' },
                { text: 'DNA 和 RNA', link: 'notes/biology/有機物質/DNA和RNA' },
                { text: '染色質與染色體', link: 'notes/biology/有機物質/染色質與染色體' },
                {
                  text: '錯題',
                  collapsed: true,
                  items: [
                    { text: 'bio-005', link: 'notes/biology/有機物質/錯題/bio-005' }
                  ]
                }
              ]
            },
            {
              text: '能量產生',
              collapsed: true,
              items: [
                { text: '有氧呼吸', link: 'notes/biology/能量產生/有氧呼吸' },
                { text: '無氧呼吸', link: 'notes/biology/能量產生/無氧呼吸' }
              ]
            },
            { text: '光合作用', link: 'notes/biology/能量產生/光合作用' },
            {
              text: '基因與遺傳',
              collapsed: true,
              items: [
                { text: '分子遺傳學', link: 'notes/biology/基因與遺傳/分子遺傳學' },
                { text: 'DNA 複製', link: 'notes/biology/基因與遺傳/DNA複製' },
                { text: '轉錄與轉譯', link: 'notes/biology/基因與遺傳/轉錄與轉譯' },
                { text: '遺傳學史', link: 'notes/biology/基因與遺傳/遺傳學史' },
                {
                  text: '錯題',
                  collapsed: true,
                  items: [
                    { text: 'bio-001', link: 'notes/biology/基因與遺傳/錯題/bio-001' },
                    { text: 'bio-002', link: 'notes/biology/基因與遺傳/錯題/bio-002' },
                    { text: 'bio-003', link: 'notes/biology/基因與遺傳/錯題/bio-003' },
                    { text: 'bio-004', link: 'notes/biology/基因與遺傳/錯題/bio-004' },
                    { text: 'bio-006', link: 'notes/biology/基因與遺傳/錯題/bio-006' },
                  ]
                }
              ]
            },
            {
              text: '實驗',
              collapsed: true,
              items: [
                { text: 'DNA 粗萃取', link: 'notes/biology/實驗/DNA粗萃取' }
              ]
            }
          ]
        },

        // 歷史
        {
          text: '歷史',
          collapsed: true,
          items: [
            {
              text: '朝代史',
              collapsed: true,
              items: [
                { text: '封建時代史', link: 'notes/history/朝代史/封建時代史' },
                { text: '秦漢史', link: 'notes/history/朝代史/秦漢史' },
                { text: '魏晉南北朝史', link: 'notes/history/朝代史/魏晉南北朝史' },
              ]
            },
            { text: '土地制度演變', link: 'notes/history/土地制度演變' },
            { text: '宰相制度演變', link: 'notes/history/宰相制度演變' },
            { text: '戶籍制度演變', link: 'notes/history/戶籍制度演變' },
            { text: '選才制度演變', link: 'notes/history/選才制度演變' },
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

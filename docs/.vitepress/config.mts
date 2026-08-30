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
      { text: '筆記', link: '/notes/index' },
      { text: '錯題', link: '/mistakes/' }
    ],

    sidebar: {
      '/notes/': [
        // 數學
        {
          text: '數學',
          collapsed: true,
          items: [
            {
              text: '三角函數',
              collapsed: true,
              items: [
                { text: '弧度', link: 'notes/math/三角函數/弧度' },
              ]
            },
          ]
        },
        // 物理
        {
          text: '物理',
          collapsed: true,
          items: [
            { text: '測量與不確定度', link: 'notes/physics/測量與不確定度' },
          ]
        },

        // 地科
        {
          text: '地科',
          collapsed: true,
          items: [
            { text: '地科首頁', link: 'notes/geology/index' },
            {
              text: '地球起源',
              collapsed: true,
              items: [
                { text: '太陽系形成', link: 'notes/geology/地球起源/太陽系形成' },
                { text: '地球形成', link: 'notes/geology/地球起源/地球形成' },
                { text: '大氣與海洋形成', link: 'notes/geology/地球起源/大氣與海洋形成'},
                { text: '地質年代與定年法', link: 'notes/geology/地球起源/地質年代與定年法'}
              ]
            },
          ]
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
                { text: '化學電池', link: 'notes/chemistry/酸鹼/化學電池' },
              ]
            },
            {
              text: '熱',
              collapsed: true,
              items: [
                { text: '反應熱', link: 'notes/chemistry/熱/反應熱' },
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
      ],
      '/mistakes/': [
        {
          text: '錯題總覽',
          link: '/mistakes/'
        },
        {
          text: '數學',
          collapsed: true,
          items: [
            {
              text: '三角函數',
              collapsed: true,
              items: [
                { text: 'math-001', link: '/mistakes/math/三角函數/math-001' }
              ]
            }
          ]
        },
        {
          text: '化學',
          collapsed: true,
          items: [
            {
              text: '酸鹼',
              collapsed: true,
              items: [
                { text: 'che-001', link: '/mistakes/chemistry/酸鹼/che-001' },
                { text: 'che-002', link: '/mistakes/chemistry/酸鹼/che-002' },
                { text: 'che-003', link: '/mistakes/chemistry/酸鹼/che-003' },
                { text: 'che-004', link: '/mistakes/chemistry/酸鹼/che-004' },
                { text: 'che-005', link: '/mistakes/chemistry/酸鹼/che-005' }
              ]
            },
            {
              text: '熱化學',
              collapsed: true,
              items: [
                { text: 'che-006', link: '/mistakes/chemistry/熱化學/che-006' }
              ]
            },
            {
              text: '溶解度',
              collapsed: true,
              items: [
                { text: 'che-007', link: '/mistakes/chemistry/溶解度/che-007' },
                { text: 'che-009', link: '/mistakes/chemistry/溶解度/che-009' }
              ]
            },
            {
              text: '酸鹼度',
              collapsed: true,
              items: [
                { text: 'che-008', link: '/mistakes/chemistry/酸鹼度/che-008' }
              ]
            }
          ]
        },
        {
          text: '生物',
          collapsed: true,
          items: [
            {
              text: '有機物質',
              collapsed: true,
              items: [
                { text: 'bio-005', link: '/mistakes/biology/有機物質/bio-005' }
              ]
            },
            {
              text: '基因與遺傳',
              collapsed: true,
              items: [
                { text: 'bio-001', link: '/mistakes/biology/基因與遺傳/bio-001' },
                { text: 'bio-002', link: '/mistakes/biology/基因與遺傳/bio-002' },
                { text: 'bio-003', link: '/mistakes/biology/基因與遺傳/bio-003' },
                { text: 'bio-004', link: '/mistakes/biology/基因與遺傳/bio-004' },
                { text: 'bio-006', link: '/mistakes/biology/基因與遺傳/bio-006' }
              ]
            },
            {
              text: 'DNA複製',
              collapsed: true,
              items: [
                { text: 'bio-007', link: '/mistakes/biology/DNA複製/bio-007' }
              ]
            },
            {
              text: '細胞學史',
              collapsed: true,
              items: [
                { text: 'bio-008', link: '/mistakes/biology/細胞學史/bio-008' }
              ]
            },
            {
              text: '生物的遺傳特性',
              collapsed: true,
              items: [
                { text: 'bio-009', link: '/mistakes/biology/生物的遺傳特性/bio-009' }
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

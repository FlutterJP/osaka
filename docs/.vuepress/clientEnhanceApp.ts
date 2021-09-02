import { defineClientAppEnhance } from '@vuepress/client'

import Environment from './components/Environment.vue'
import SDKInstall from './components/SDKInstall.vue'
import YouTubeVideo from './components/YouTubeVideo.vue'
import HistoryTags from './components/HistoryTags.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Environment', Environment)
  app.component('SDKInstall', SDKInstall)
  app.component('YouTubeVideo', YouTubeVideo)
  app.component('HistoryTags', HistoryTags)

  router.beforeEach((to) => {
    // console.log('Before navigation')
  })

  router.afterEach((to) => {
    // console.log('After navigation')
  })
})

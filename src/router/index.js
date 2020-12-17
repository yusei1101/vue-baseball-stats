import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'
import Page4 from '../components/Page4.vue'
import PitcherVocabulary from '../components/PitcherVocabulary.vue'
import BatterVocabulary from '../components/BatterVocabulary.vue'
import pitcher1 from '../pitchers/pitcher1.vue'
import pitcher2 from '../pitchers/pitcher2.vue'
import pitcher3 from '../pitchers/pitcher3.vue'
import pitcher4 from '../pitchers/pitcher4.vue'
import pitcher5 from '../pitchers/pitcher5.vue'
import pitcher6 from '../pitchers/pitcher6.vue'
import pitcher7 from '../pitchers/pitcher7.vue'
import pitcher8 from '../pitchers/pitcher8.vue'
import pitcher9 from '../pitchers/pitcher9.vue'
import pitcher10 from '../pitchers/pitcher10.vue'
import pitcher11 from '../pitchers/pitcher11.vue'
import pitcher12 from '../pitchers/pitcher12.vue'
import pitcher13 from '../pitchers/pitcher13.vue'
import pitcher14 from '../pitchers/pitcher14.vue'
import batter1 from '../batters/batter1.vue'
import batter2 from '../batters/batter2.vue'
import batter3 from '../batters/batter3.vue'
import batter4 from '../batters/batter4.vue'
import batter5 from '../batters/batter5.vue'
import batter6 from '../batters/batter6.vue'
import batter7 from '../batters/batter7.vue'
import batter8 from '../batters/batter8.vue'
import batter9 from '../batters/batter9.vue'
import batter10 from '../batters/batter10.vue'
import batter11 from '../batters/batter11.vue'
import batter12 from '../batters/batter12.vue'
import batter13 from '../batters/batter13.vue'
import batter14 from '../batters/batter14.vue'
import batter15 from '../batters/batter15.vue'
import batter16 from '../batters/batter16.vue'
import batter17 from '../batters/batter17.vue'
import batter18 from '../batters/batter18.vue'
import batter19 from '../batters/batter19.vue'
import batter20 from '../batters/batter20.vue'
import batter21 from '../batters/batter21.vue'
import batter22 from '../batters/batter22.vue'
import batter23 from '../batters/batter23.vue'
import batter24 from '../batters/batter24.vue'
import batter25 from '../batters/batter25.vue'
import batter26 from '../batters/batter26.vue'
import batter28 from '../batters/batter28.vue'
import batter29 from '../batters/batter29.vue'
import batter30 from '../batters/batter30.vue'
import batter31 from '../batters/batter31.vue'
import batter32 from '../batters/batter32.vue'
import batter33 from '../batters/batter33.vue'
import batter34 from '../batters/batter34.vue'
import batter35 from '../batters/batter35.vue'
import batter36 from '../batters/batter36.vue'
import batter37 from '../batters/batter37.vue'
import batter38 from '../batters/batter38.vue'
import batter39 from '../batters/batter39.vue'
import batter40 from '../batters/batter40.vue'
import batter41 from '../batters/batter41.vue'
import batter42 from '../batters/batter42.vue'
import batter43 from '../batters/batter43.vue'
import batter44 from '../batters/batter44.vue'
import batter45 from '../batters/batter45.vue'
import batter46 from '../batters/batter46.vue'
import batter47 from '../batters/batter47.vue'
import batter48 from '../batters/batter48.vue'
import batter49 from '../batters/batter49.vue'
import batter50 from '../batters/batter50.vue'
import batter51 from '../batters/batter51.vue'
import batter52 from '../batters/batter52.vue'
import batter53 from '../batters/batter53.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
    { path: '/page4', component: Page4 },
    { path: '/PitcherVocabulary', component: PitcherVocabulary },
    { path: '/BatterVocabulary', component: BatterVocabulary },
    { path: '/page1/pitcher1', component: pitcher1 },
    { path: '/page1/pitcher2', component: pitcher2 },
    { path: '/page1/pitcher3', component: pitcher3 },
    { path: '/page1/pitcher4', component: pitcher4 },
    { path: '/page1/pitcher5', component: pitcher5 },
    { path: '/page1/pitcher6', component: pitcher6 },
    { path: '/page2/pitcher7', component: pitcher7 },
    { path: '/page2/pitcher8', component: pitcher8 },
    { path: '/page2/pitcher9', component: pitcher9 },
    { path: '/page2/pitcher10', component: pitcher10 },
    { path: '/page2/pitcher11', component: pitcher11 },
    { path: '/page2/pitcher12', component: pitcher12 },
    { path: '/page2/pitcher13', component: pitcher13 },
    { path: '/page2/pitcher14', component: pitcher14 },
    { path: '/page3/batter1', component: batter1 },
    { path: '/page3/batter2', component: batter2 },
    { path: '/page3/batter3', component: batter3 },
    { path: '/page3/batter4', component: batter4 },
    { path: '/page3/batter5', component: batter5 },
    { path: '/page3/batter6', component: batter6 },
    { path: '/page3/batter7', component: batter7 },
    { path: '/page3/batter8', component: batter8 },
    { path: '/page3/batter9', component: batter9 },
    { path: '/page3/batter10', component: batter10 },
    { path: '/page3/batter11', component: batter11 },
    { path: '/page3/batter12', component: batter12 },
    { path: '/page3/batter13', component: batter13 },
    { path: '/page3/batter14', component: batter14 },
    { path: '/page3/batter15', component: batter15 },
    { path: '/page3/batter16', component: batter16 },
    { path: '/page3/batter17', component: batter17 },
    { path: '/page3/batter18', component: batter18 },
    { path: '/page3/batter19', component: batter19 },
    { path: '/page3/batter20', component: batter20 },
    { path: '/page3/batter21', component: batter21 },
    { path: '/page3/batter22', component: batter22 },
    { path: '/page3/batter23', component: batter23 },
    { path: '/page3/batter24', component: batter24 },
    { path: '/page3/batter25', component: batter25 },
    { path: '/page3/batter26', component: batter26 },
    { path: '/page4/batter28', component: batter28 },
    { path: '/page4/batter29', component: batter29 },
    { path: '/page4/batter30', component: batter30 },
    { path: '/page4/batter31', component: batter31 },
    { path: '/page4/batter32', component: batter32 },
    { path: '/page4/batter33', component: batter33 },
    { path: '/page4/batter34', component: batter34 },
    { path: '/page4/batter35', component: batter35 },
    { path: '/page4/batter36', component: batter36 },
    { path: '/page4/batter37', component: batter37 },
    { path: '/page4/batter38', component: batter38 },
    { path: '/page4/batter39', component: batter39 },
    { path: '/page4/batter40', component: batter40 },
    { path: '/page4/batter41', component: batter41 },
    { path: '/page4/batter42', component: batter42 },
    { path: '/page4/batter43', component: batter43 },
    { path: '/page4/batter44', component: batter44 },
    { path: '/page4/batter45', component: batter45 },
    { path: '/page4/batter46', component: batter46 },
    { path: '/page4/batter47', component: batter47 },
    { path: '/page4/batter48', component: batter48 },
    { path: '/page4/batter49', component: batter49 },
    { path: '/page4/batter50', component: batter50 },
    { path: '/page4/batter51', component: batter51 },
    { path: '/page4/batter52', component: batter52 },
    { path: '/page4/batter53', component: batter53 }
  ]
})

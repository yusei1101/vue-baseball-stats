import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'
import Page4 from '../components/Page4.vue'
import PitcherVocabulary from '../components/PitcherVocabulary.vue'
import BatterVocabulary from '../components/BatterVocabulary.vue'
import pitcher1 from '../components/pitchers/pitcher1'
import pitcher2 from '../components/pitchers/pitcher2.vue'
import pitcher3 from '../components/pitchers/pitcher3.vue'
import pitcher4 from '../components/pitchers/pitcher4.vue'
import pitcher5 from '../components/pitchers/pitcher5.vue'
import pitcher6 from '../components/pitchers/pitcher6.vue'
import pitcher7 from '../components/pitchers/pitcher7.vue'
import pitcher8 from '../components/pitchers/pitcher8.vue'
import pitcher9 from '../components/pitchers/pitcher9.vue'
import pitcher10 from '../components/pitchers/pitcher10.vue'
import pitcher11 from '../components/pitchers/pitcher11.vue'
import pitcher12 from '../components/pitchers/pitcher12.vue'
import pitcher13 from '../components/pitchers/pitcher13.vue'
import pitcher14 from '../components/pitchers/pitcher14.vue'
import batter1 from '../components/batters/batter1.vue'
import batter2 from '../components/batters/batter2.vue'
import batter3 from '../components/batters/batter3.vue'
import batter4 from '../components/batters/batter4.vue'
import batter5 from '../components/batters/batter5.vue'
import batter6 from '../components/batters/batter6.vue'
import batter7 from '../components/batters/batter7.vue'
import batter8 from '../components/batters/batter8.vue'
import batter9 from '../components/batters/batter9.vue'
import batter10 from '../components/batters/batter10.vue'
import batter11 from '../components/batters/batter11.vue'
import batter12 from '../components/batters/batter12.vue'
import batter13 from '../components/batters/batter13.vue'
import batter14 from '../components/batters/batter14.vue'
import batter15 from '../components/batters/batter15.vue'
import batter16 from '../components/batters/batter16.vue'
import batter17 from '../components/batters/batter17.vue'
import batter18 from '../components/batters/batter18.vue'
import batter19 from '../components/batters/batter19.vue'
import batter20 from '../components/batters/batter20.vue'
import batter21 from '../components/batters/batter21.vue'
import batter22 from '../components/batters/batter22.vue'
import batter23 from '../components/batters/batter23.vue'
import batter24 from '../components/batters/batter24.vue'
import batter25 from '../components/batters/batter25.vue'
import batter26 from '../components/batters/batter26.vue'
import batter28 from '../components/batters/batter28.vue'
import batter29 from '../components/batters/batter29.vue'
import batter30 from '../components/batters/batter30.vue'
import batter31 from '../components/batters/batter31.vue'
import batter32 from '../components/batters/batter32.vue'
import batter33 from '../components/batters/batter33.vue'
import batter34 from '../components/batters/batter34.vue'
import batter35 from '../components/batters/batter35.vue'
import batter36 from '../components/batters/batter36.vue'
import batter37 from '../components/batters/batter37.vue'
import batter38 from '../components/batters/batter38.vue'
import batter39 from '../components/batters/batter39.vue'
import batter40 from '../components/batters/batter40.vue'
import batter41 from '../components/batters/batter41.vue'
import batter42 from '../components/batters/batter42.vue'
import batter43 from '../components/batters/batter43.vue'
import batter44 from '../components/batters/batter44.vue'
import batter45 from '../components/batters/batter45.vue'
import batter46 from '../components/batters/batter46.vue'
import batter47 from '../components/batters/batter47.vue'
import batter48 from '../components/batters/batter48.vue'
import batter49 from '../components/batters/batter49.vue'
import batter50 from '../components/batters/batter50.vue'
import batter51 from '../components/batters/batter51.vue'
import batter52 from '../components/batters/batter52.vue'
import batter53 from '../components/batters/batter53.vue'
import NotFound from '../components/NotFound.vue'

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
    { path: '/pitcher1', component: pitcher1 },
    { path: '/pitcher2', component: pitcher2 },
    { path: '/pitcher3', component: pitcher3 },
    { path: '/pitcher4', component: pitcher4 },
    { path: '/pitcher5', component: pitcher5 },
    { path: '/pitcher6', component: pitcher6 },
    { path: '/pitcher7', component: pitcher7 },
    { path: '/pitcher8', component: pitcher8 },
    { path: '/pitcher9', component: pitcher9 },
    { path: '/pitcher10', component: pitcher10 },
    { path: '/pitcher11', component: pitcher11 },
    { path: '/pitcher12', component: pitcher12 },
    { path: '/pitcher13', component: pitcher13 },
    { path: '/pitcher14', component: pitcher14 },
    { path: '/batter1', component: batter1 },
    { path: '/batter2', component: batter2 },
    { path: '/batter3', component: batter3 },
    { path: '/batter4', component: batter4 },
    { path: '/batter5', component: batter5 },
    { path: '/batter6', component: batter6 },
    { path: '/batter7', component: batter7 },
    { path: '/batter8', component: batter8 },
    { path: '/batter9', component: batter9 },
    { path: '/batter10', component: batter10 },
    { path: '/batter11', component: batter11 },
    { path: '/batter12', component: batter12 },
    { path: '/batter13', component: batter13 },
    { path: '/batter14', component: batter14 },
    { path: '/batter15', component: batter15 },
    { path: '/batter16', component: batter16 },
    { path: '/batter17', component: batter17 },
    { path: '/batter18', component: batter18 },
    { path: '/batter19', component: batter19 },
    { path: '/batter20', component: batter20 },
    { path: '/batter21', component: batter21 },
    { path: '/batter22', component: batter22 },
    { path: '/batter23', component: batter23 },
    { path: '/batter24', component: batter24 },
    { path: '/batter25', component: batter25 },
    { path: '/batter26', component: batter26 },
    { path: '/batter28', component: batter28 },
    { path: '/batter29', component: batter29 },
    { path: '/batter30', component: batter30 },
    { path: '/batter31', component: batter31 },
    { path: '/batter32', component: batter32 },
    { path: '/batter33', component: batter33 },
    { path: '/batter34', component: batter34 },
    { path: '/batter35', component: batter35 },
    { path: '/batter36', component: batter36 },
    { path: '/batter37', component: batter37 },
    { path: '/batter38', component: batter38 },
    { path: '/batter39', component: batter39 },
    { path: '/batter40', component: batter40 },
    { path: '/batter41', component: batter41 },
    { path: '/batter42', component: batter42 },
    { path: '/batter43', component: batter43 },
    { path: '/batter44', component: batter44 },
    { path: '/batter45', component: batter45 },
    { path: '/batter46', component: batter46 },
    { path: '/batter47', component: batter47 },
    { path: '/batter48', component: batter48 },
    { path: '/batter49', component: batter49 },
    { path: '/batter50', component: batter50 },
    { path: '/batter51', component: batter51 },
    { path: '/batter52', component: batter52 },
    { path: '/batter53', component: batter53 },
    { path: '*', component: NotFound }
  ]
})

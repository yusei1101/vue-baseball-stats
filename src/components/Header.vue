<template>
    <div id="app">
    <!-- スマホ用 -->
        <header class="sm-header">
          <div class="header-logo">
            <h1><router-link to="/">プロ野球個人成績</router-link></h1>
          </div>
            <!-- ハンバーガーメニュー -->
            <div class="sm-header-menu">
                <div class="sm-header-menu-line"
                @click="naviOpen"
                :class="{'is-active': active}">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
            <!-- ナビゲーション -->
            <transition name="sm-navi">
            <div class="sm-navi" v-show="navi">
                <ul>
                    <li><router-link to="/">ホーム</router-link></li>
                    <li>セ・リーグ</li>
                    <li><router-link to="/page1">投手</router-link></li>
                    <li><router-link to="/page3">野手</router-link></li>
                    <li>パ・リーグ</li>
                    <li><router-link to="/page2">投手</router-link></li>
                    <li><router-link to="/page4">野手</router-link></li>
                    <li>用語解説</li>
                    <li><router-link to="/PitcherVocabulary">投手</router-link></li>
                    <li><router-link to="/BatterVocabulary">野手</router-link></li>
                </ul>
            </div>
            </transition>
    <!-- PCタブレット用 -->
        <header class="header">
          <div class="header-logo">
                <h1><router-link to="/">プロ野球個人成績</router-link></h1>
          </div>
          <div class="header-nav">
            <ul>
                <li><router-link to="/" class="li-home">ホーム</router-link></li>
                <li class="toggle" style="cursor: pointer;" @click="toggleCentral">セ・リーグ
                    <font-awesome-icon icon="chevron-up" v-if="isOpenCentral"></font-awesome-icon>
                    <font-awesome-icon icon="chevron-down" v-if="!isOpenCentral"></font-awesome-icon>
                    <transition name="toggle">
                        <div v-if="isOpenCentral">
                            <router-link to="/page1">投手</router-link>
                            <router-link to="/page3">野手</router-link>
                        </div>
                    </transition>
                </li>
                <li class="toggle" style="cursor: pointer;" @click="togglePacific">パ・リーグ
                    <font-awesome-icon icon="chevron-up" v-if="isOpenPacific"></font-awesome-icon>
                    <font-awesome-icon icon="chevron-down" v-if="!isOpenPacific"></font-awesome-icon>
                    <transition name="toggle">
                        <div v-if="isOpenPacific">
                            <router-link to="/page2">投手</router-link>
                            <router-link to="/page4">野手</router-link>
                        </div>
                    </transition>
                </li>
                <li class="toggle" style="cursor: pointer;" @click="toggleVocabulary">用語解説
                    <font-awesome-icon icon="chevron-up" v-if="isOpenVocabulary"></font-awesome-icon>
                    <font-awesome-icon icon="chevron-down" v-if="!isOpenVocabulary"></font-awesome-icon>
                    <transition name="toggle">
                        <div v-if="isOpenVocabulary">
                            <router-link to="./PitcherVocabulary">投手</router-link>
                            <router-link to="./BatterVocabulary">野手</router-link>
                        </div>
                    </transition>
                </li>
            </ul>
          </div>
        </header>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      navi: false,
      isOpenCentral: false,
      isOpenPacific: false,
      isOpenVocabulary: false
    }
  },
  methods: {
    naviOpen () {
      this.active = !this.active
      this.navi = !this.navi
    },
    toggleCentral () {
      this.isOpenCentral = !this.isOpenCentral
    },
    togglePacific () {
      this.isOpenPacific = !this.isOpenPacific
    },
    toggleVocabulary () {
      this.isOpenVocabulary = !this.isOpenVocabulary
    }
  }
}
</script>

<style lang="scss">
</style>

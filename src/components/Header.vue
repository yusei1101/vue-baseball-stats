<template>
    <div>
    <!-- スマホ用 -->
        <header class="sm-header">
          <div class="header-logo">
            <h1><a href="./">プロ野球個人成績2020</a></h1>
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
                    <li><a href="./">ホーム</a></li>
                    <li>セ・リーグ</li>
                    <li><a href="./page1">投手</a></li>
                    <li><a href="./page3">野手</a></li>
                    <li>パ・リーグ</li>
                    <li><a href="./page2">投手</a></li>
                    <li><a href="./page4">野手</a></li>
                    <li>用語解説</li>
                    <li><a href="./PitcherVocabulary">投手</a></li>
                    <li><a href="./BatterVocabulary">野手</a></li>
                </ul>
            </div>
            </transition>
    <!-- PCタブレット用 -->
        <header class="header">
          <div class="header-logo">
                <h1><a href="./">プロ野球個人成績2020</a></h1>
          </div>
          <div class="header-nav">
            <ul>
                <li><a href="./" class="li-home">ホーム</a></li>
                <li class="toggle" style="cursor: pointer;" @click="toggleCentral">セ・リーグ
                    <font-awesome-icon icon="chevron-up" v-if="isOpenCentral"></font-awesome-icon>
                    <font-awesome-icon icon="chevron-down" v-if="!isOpenCentral"></font-awesome-icon>
                    <transition name="toggle">
                        <div v-if="isOpenCentral">
                            <a href="./page1">投手</a>
                            <a href="./page3">野手</a>
                        </div>
                    </transition>
                </li>
                <li class="toggle" style="cursor: pointer;" @click="togglePacific">パ・リーグ
                    <font-awesome-icon icon="chevron-up" v-if="isOpenPacific"></font-awesome-icon>
                    <font-awesome-icon icon="chevron-down" v-if="!isOpenPacific"></font-awesome-icon>
                    <transition name="toggle">
                        <div v-if="isOpenPacific">
                            <a href="./page2">投手</a>
                            <a href="./page4">野手</a>
                        </div>
                    </transition>
                </li>
                <li class="toggle" style="cursor: pointer;" @click="toggleVocabulary">用語解説
                    <font-awesome-icon icon="chevron-up" v-if="isOpenVocabulary"></font-awesome-icon>
                    <font-awesome-icon icon="chevron-down" v-if="!isOpenVocabulary"></font-awesome-icon>
                    <transition name="toggle">
                        <div v-if="isOpenVocabulary">
                            <a href="./PitcherVocabulary">投手</a>
                            <a href="./BatterVocabulary">野手</a>
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

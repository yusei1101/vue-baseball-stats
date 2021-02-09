<template>
    <div>
        <p class="content">※規定投球回以上（チーム試合数×1.0）</p>
        <table border="1" cellpadding="0" class="table-page">
            <tr>
                <th>順位</th>
                <th>名前</th>
                <th>防御率</th>
                <th>勝利</th>
                <th>敗北</th>
            </tr>
            <tr v-for="post in posts" :key="post.rank">
                <td>{{post.rank}}</td>
                <td><a :href="post.path">{{post.name}}</a></td>
                <td>{{post.prevent}}</td>
                <td>{{post.victory}}</td>
                <td>{{post.defeat}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    const data = require('../assets/central-pitcher')
    this.posts = data
  }
}
</script>

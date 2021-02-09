<template>
    <div>
        <p class="content">※規定打席以上（チーム試合数×3.1）</p>
        <table border="1" cellpadding="0" class="table-page">
            <tr>
                <th>順位</th>
                <th>名前</th>
                <th>打率</th>
                <th>本塁打</th>
                <th>打点</th>
                <th>.OPS</th>
            </tr>
            <tr v-for="post in posts" :key="post.rank">
                <td>{{post.rank}}</td>
                <td><a :href="post.path">{{post.name}}</a></td>
                <td>{{post.average}}</td>
                <td>{{post.homerun}}</td>
                <td>{{post.rbi}}</td>
                <td>{{post.ops}}</td>
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
    const data = require('../assets/pacific-batter')
    this.posts = data
  }
}

</script>

<style lang="scss" scoped>
.content{
    padding: 50px 0 0 17%;
    font-size: 1.4rem;
}
table{
    padding-top: 20px;
    width: 100%;
    @include mq(sm){
        width: 70%;
        margin: 0 auto;
    }
}
th{
    padding: 20px 0px;
    font-size: $fontSize-main;
    text-align: center;
    @include mq(sm){
        font-size: $fontSize-subtitle;
    }
}
td{
    padding: 20px 10px;
    @include mq(sm){
        font-size: $fontSize-main;
    }
    &:nth-child(2){
        font-size: 2rem;
        width: 150px;
        @include mq(sm){
            font-size: 2.5rem;
            width: 200px;
        }
    }
}
</style>

<template>
    <div class="page4">
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
                <td><router-link :to="post.path">{{post.name}}</router-link></td>
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
  el: '#page4',
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

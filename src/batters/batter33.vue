<template>
  <div>
    <div class="player-radar">
      <div class="player">
          <h1>{{target.name}}</h1>
          <blockquote>
              <img src="../img/kobukata.jpg" alt="小深田大翔選手">
              <p>出典：<a href="https://npb.jp/bis/teams">日本野球機構</a></p>
          </blockquote>
      </div>
      <div class="rador">
          <Radar :radarData="radarData" :options="options"></Radar>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="scroll">
        <table class="table-detail">
            <tr>
              <th>打率</th>
              <th>試合数</th>
              <th>打席</th>
              <th>打数</th>
              <th>得点</th>
              <th>安打数</th>
              <th>二塁打</th>
              <th>三塁打</th>
              <th>本塁打</th>
              <th>打点</th>
              <th>塁打数</th>
              <th>三振</th>
              <th>四球</th>
              <th>敬遠</th>
              <th>死球</th>
              <th>犠打</th>
              <th>犠飛</th>
              <th>盗塁</th>
              <th>盗塁死</th>
              <th>併殺</th>
              <th>失策</th>
              <th>長打率</th>
              <th>出塁率</th>
              <th>.OPS</th>
            </tr>
            <tr>
              <td>{{target.average}}</td>
              <td>{{target.match}}</td>
              <td>{{target.plateAppearance}}</td>
              <td>{{target.atBat}}</td>
              <td>{{target.score}}</td>
              <td>{{target.hit}}</td>
              <td>{{target.double}}</td>
              <td>{{target.triple}}</td>
              <td>{{target.homerun}}</td>
              <td>{{target.rbi}}</td>
              <td>{{target.baseHit}}</td>
              <td>{{target.strikeout}}</td>
              <td>{{target.walks}}</td>
              <td>{{target.avoid}}</td>
              <td>{{target.hitByPitch}}</td>
              <td>{{target.bunt}}</td>
              <td>{{target.sacFly}}</td>
              <td>{{target.stolenBase}}</td>
              <td>{{target.caughtStealing}}</td>
              <td>{{target.doublePlay}}</td>
              <td>{{target.error}}</td>
              <td>{{target.sluggingPercentage}}</td>
              <td>{{target.onBasePercentage}}</td>
              <td>{{target.ops}}</td>
            </tr>
        </table>
      </div>
      <div class="scroll">
        <table class="table-detail">
            <tr>
              <th>wOBA</th>
              <th>BsR</th>
              <th>RCAA</th>
              <th>RC27</th>
              <th>wRC</th>
              <th>wRAA</th>
              <th>IsoD</th>
              <th>BB/K</th>
              <th>PA/K</th>
              <th>AB/HR</th>
              <th>IsoP</th>
              <th>SecA</th>
              <th>Spd</th>
              <th>BABIP</th>
            </tr>
            <tr>
              <td>{{target.woba}}</td>
              <td>{{target.bsr}}</td>
              <td>{{target.rcaa}}</td>
              <td>{{target.rc27}}</td>
              <td>{{target.wrc}}</td>
              <td>{{target.wraa}}</td>
              <td>{{target.isod}}</td>
              <td>{{target.bbk}}</td>
              <td>{{target.pak}}</td>
              <td>{{target.abhr}}</td>
              <td>{{target.isop}}</td>
              <td>{{target.seca}}</td>
              <td>{{target.spd}}</td>
              <td>{{target.babip}}</td>
            </tr>
        </table>
      </div>
    </div>
    <BatterVocabulary></BatterVocabulary>
  </div>
</template>

<script>
import Radar from '../components/Radar'
import BatterVocabulary from '../components/BatterVocabulary'
export default {
  components: {
    Radar,
    BatterVocabulary
  },
  data () {
    return {
      rank: 6,
      target: [],
      radarData: {
        labels: ['.OPS', 'wOBA', 'BsR', 'IsoD', 'IsoP', 'Spd'],
        datasets: [
          {
            label: '小深田　大翔',
            borderColor: '#05215c',
            data: [7, 6, 5, 7, 5, 9]
          }
        ]
      },
      options: {
        scale: {
          ticks: {
            suggestedMin: 3,
            suggestedMax: 10
          }
        }
      }
    }
  },
  created () {
    const data = require('../assets/pacific-batter.json')
    this.posts = data
    const target = data.filter(object => {
      return object.rank === this.rank
    }).shift()
    this.target = target
  }
}
</script>

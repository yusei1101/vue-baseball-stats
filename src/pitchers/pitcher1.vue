<template>
  <div id="pitcher">
    <div class="player-radar">
      <div class="player">
          <h1>{{target.name}}</h1>
          <blockquote>
              <img src="../img/oono.jpg" alt="大野雄大選手">
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
                    <th><span>試合数</span></th>
                    <th><span>勝利</span></th>
                    <th><span>敗北</span></th>
                    <th><span>防御率</span></th>
                    <th><span>完投</span></th>
                    <th><span>完封</span></th>
                    <th><span>QS</span></th>
                    <th><span>勝率</span></th>
                    <th><span>投球回</span></th>
                    <th><span>被安打</span></th>
                    <th><span>被本塁打</span></th>
                    <th><span>与四球</span></th>
                    <th><span>与死球</span></th>
                    <th><span>奪三振</span></th>
                    <th><span>暴投</span></th>
                    <th><span>ボーク</span></th>
                    <th><span>失点</span></th>
                    <th><span>自責点</span></th>
                </tr>
                <tr>
                    <td>{{target.match}}</td>
                    <td>{{target.victory}}</td>
                    <td>{{target.defeat}}</td>
                    <td>{{target.prevent}}</td>
                    <td>{{target.complete}}</td>
                    <td>{{target.shutout}}</td>
                    <td>{{target.qs}}</td>
                    <td>{{target.winRate}}</td>
                    <td>{{target.inning}}</td>
                    <td>{{target.hits}}</td>
                    <td>{{target.homerun}}</td>
                    <td>{{target.walks}}</td>
                    <td>{{target.hitByPitch}}</td>
                    <td>{{target.strikeout}}</td>
                    <td>{{target.wildPitch}}</td>
                    <td>{{target.balk}}</td>
                    <td>{{target.conceded}}</td>
                    <td>{{target.earnedRun}}</td>
                </tr>
            </table>
        </div>
        <div class="scroll">
            <table class="table-detail">
                <tr>
                    <th>BB-9</th>
                    <th>K-9</th>
                    <th>K/BB</th>
                    <th>WHIP</th>
                    <th>xFIP</th>
                    <th>RSAA</th>
                    <th>RA</th>
                    <th>HR/9</th>
                    <th>K%</th>
                    <th>K-BB%</th>
                    <th>GB%</th>
                    <th>LD%</th>
                    <th>FB%</th>
                    <th>LOB%</th>
                    <th>BABIP</th>
                </tr>
                <tr>
                    <td>{{target.bb9}}</td>
                    <td>{{target.k9}}</td>
                    <td>{{target.kbb}}</td>
                    <td>{{target.whip}}</td>
                    <td>{{target.xfip}}</td>
                    <td>{{target.rsaa}}</td>
                    <td>{{target.ra}}</td>
                    <td>{{target.hr9}}</td>
                    <td>{{target.kPercent}}</td>
                    <td>{{target.kbbPercent}}</td>
                    <td>{{target.gbPercent}}</td>
                    <td>{{target.ldPercent}}</td>
                    <td>{{target.fbPercent}}</td>
                    <td>{{target.lobPercent}}</td>
                    <td>{{target.babip}}</td>
                </tr>
            </table>
        </div>
    </div>
    <PitcherVocabulary></PitcherVocabulary>
  </div>
</template>

<script>
import Radar from '../components/Radar'
import PitcherVocabulary from '../components/PitcherVocabulary'
export default {
  components: {
    Radar,
    PitcherVocabulary
  },
  data () {
    return {
      rank: 1,
      target: [],
      radarData: {
        labels: ['WHIP', 'xFIP', 'K/9', 'HR/9', 'BB/9'],
        datasets: [
          {
            label: '大野　雄大',
            borderColor: '#01b24e',
            data: [10, 9, 8, 7, 10]
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
    const data = require('../assets/central-pitcher.json')
    this.posts = data
    const target = data.filter(object => {
      return object.rank === this.rank
    }).shift()
    this.target = target
  }
}
</script>

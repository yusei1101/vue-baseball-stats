<template>
  <div id="pitcher">
    <div class="player-radar">
      <div class="player">
          <h1>{{target.name}}</h1>
          <blockquote>
              <img src="../../img/sugano.jpg" alt="菅野智之選手">
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
                    <th><div>試合数<button aria-label="出場した試合の数" data-cooltipz-dir="bottom" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.match}}</td>
                </tr>
                <tr>
                    <th><div>勝利<button aria-label="投手が対戦相手に勝った試合の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.victory}}</td>
                </tr>
                <tr>
                    <th><div>敗北<button aria-label="投手が対戦相手に負けた試合の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.defeat}}</td>
                </tr>
                <tr>
                    <th><div>防御率<button aria-label="投手が一試合投げたらいくつ自責点を取られるかを表した平均数値のこと" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.prevent}}</td>
                </tr>
                <tr>
                    <th><div>完投<button aria-label="試合が終わるまで一人で投げ切った数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.complete}}</td>
                </tr>
                <tr>
                    <th><div>完封<button aria-label="相手を無得点に封じ、かつ試合が終わるまで一人で投げ切った数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.shutout}}</td>
                </tr>
                <tr>
                    <th><div>QS<button aria-label="６イニング以上を投げ、かつ自責点3以内で抑えた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.qs}}</td>
                </tr>
                <tr>
                    <th><div>勝率<button aria-label="試合で勝利した割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.winRate}}</td>
                </tr>
                <tr>
                    <th><div>投球回<button aria-label="投手が登板したイニング数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.inning}}</td>
                </tr>
                <tr>
                    <th><div>被安打<button aria-label="打者から打たれた安打の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.hits}}</td>
                </tr>
                <tr>
                    <th><div>被本塁打<button aria-label="打者から打たれたホームランの数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.homerun}}</td>
                </tr>
                <tr>
                    <th><div>与四球<button aria-label="打者に与えた四球の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.walks}}</td>
                </tr>
                <tr>
                    <th><div>与死球<button aria-label="打者に与えた死球の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.hitByPitch}}</td>
                </tr>
                <tr>
                    <th><div>奪三振<button aria-label="打者から奪った三振の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.strikeout}}</td>
                </tr>
                <tr>
                    <th><div>暴投<button aria-label="捕手がとれないボールを投げた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.wildPitch}}</td>
                </tr>
                <tr>
                    <th><div>ボーク<button aria-label="規則に違反する行動をとった数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.balk}}</td>
                </tr>
                <tr>
                    <th><div>失点<button aria-label="相手チームにとられてしまった点数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.conceded}}</td>
                </tr>
                <tr>
                    <th><div>自責点<button aria-label="投手自身の責任でとられた点数。野手のエラーによる点数は含まれない" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.earnedRun}}</td>
                </tr>
                <tr>
                    <th><div>BB-9<button aria-label="与四球率。9イニングあたりの四球の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.bb9}}</td>
                </tr>
                <tr>
                    <th><div>K-9<button aria-label="奪三振率。9イニングあたりの三振の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.k9}}</td>
                </tr>
                <tr>
                    <th><div>K/BB<button aria-label="奪三振と与四球の比率" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.kbb}}</td>
                </tr>
                <tr>
                    <th><div>WHIP<button aria-label="1イニングあたり何人の出塁を許したか" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.whip}}</td>
                </tr>
                <tr>
                    <th><div>xFIP<button aria-label="投球回が増えると、フライに占める本塁打の割合は一定の値に収束するという性質をもとに、被本塁打の影響を排除して投手力を表す" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.xfip}}</td>
                </tr>
                <tr>
                    <th><div>RSAA<button aria-label="平均的な投手と比べて、どれだけ失点を防いだか" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.rsaa}}</td>
                </tr>
                <tr>
                    <th><div>RA<button aria-label="9イニングマウンドに立った時の失点数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.ra}}</td>
                </tr>
                <tr>
                    <th><div>HR/9<button aria-label="9イニングあたりに打たれる本塁打の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.hr9}}</td>
                </tr>
                <tr>
                    <th><div>K%<button aria-label="対戦打者に占める奪三振の割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.kPercent}}</td>
                </tr>
                <tr>
                    <th><div>K-BB%<button aria-label="奪三振割合から与死球割合を引いた数。数字が大きいほど制球力があるといえる" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.kbbPercent}}</td>
                </tr>
                <tr>
                    <th><div>GB%<button aria-label="打球に占めるゴロの割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.gbPercent}}</td>
                </tr>
                <tr>
                    <th><div>LD%<button aria-label="打球に占めるライナーの割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.ldPercent}}</td>
                </tr>
                <tr>
                    <th><div>FB%<button aria-label="打球に占めるフライの割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.fbPercent}}</td>
                </tr>
                <tr>
                    <th><div>LOB%<button aria-label="出塁させた走者を生還させなかった割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.lobPercent}}</td>
                </tr>
                <tr>
                    <th><div>BABIP<button aria-label="本塁打と犠打を除いた打球が安打になる割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
                    <td>{{target.babip}}</td>
                </tr>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import Radar from '../Radar'
export default {
  components: {
    Radar
  },
  data () {
    return {
      rank: 3,
      target: [],
      radarData: {
        labels: ['WHIP', 'xFIP', 'K/9', 'HR/9', 'BB/9'],
        datasets: [
          {
            label: '菅野　智之',
            borderColor: '#01b24e',
            data: [9, 8, 8, 8, 9]
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
    const data = require('../../assets/central-pitcher.json')
    this.posts = data
    const target = data.filter(object => {
      return object.rank === this.rank
    }).shift()
    this.target = target
  }
}
</script>

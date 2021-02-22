<template>
  <div id="pitcher">
    <div class="player-radar">
      <div class="player">
          <h1>{{target.name}}</h1>
          <blockquote>
              <img src="../../img/mima.jpg" alt="美馬学選手">
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
                    <th><div aria-label="出場した試合の数" data-cooltipz-dir="top-right">試合数<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.match}}</td>
                </tr>
                <tr>
                    <th><div aria-label="投手が対戦相手に勝った試合の数" data-cooltipz-dir="top-right">勝利<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.victory}}</td>
                </tr>
                <tr>
                    <th><div aria-label="投手が対戦相手に負けた試合の数" data-cooltipz-dir="top-right">敗北<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.defeat}}</td>
                </tr>
                <tr>
                    <th><div aria-label="投手が一試合投げたらいくつ自責点を取られるかを表した平均数値のこと" data-cooltipz-dir="top-right" data-cooltipz-size="fit">防御率<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.prevent}}</td>
                </tr>
                <tr>
                    <th><div aria-label="試合が終わるまで一人で投げ切った数" data-cooltipz-dir="top-right" data-cooltipz-size="fit">完投<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.complete}}</td>
                </tr>
                <tr>
                    <th><div aria-label="相手を無得点に封じ、かつ試合が終わるまで一人で投げ切った数" data-cooltipz-dir="top-right" data-cooltipz-size="fit">完封<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.shutout}}</td>
                </tr>
                <tr>
                    <th><div aria-label="６イニング以上を投げ、かつ自責点3以内で抑えた数" data-cooltipz-dir="top-right" data-cooltipz-size="fit">QS<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.qs}}</td>
                </tr>
                <tr>
                    <th><div aria-label="試合で勝利した割合" data-cooltipz-dir="top-right">勝率<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.winRate}}</td>
                </tr>
                <tr>
                    <th><div aria-label="投手が登板したイニング数" data-cooltipz-dir="top-right">投球回<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.inning}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打者から打たれた安打の数" data-cooltipz-dir="top-right">試合数<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.hits}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打者から打たれたホーブランの数" data-cooltipz-dir="top-right">被本塁打<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.homerun}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打者に与えた四球の数" data-cooltipz-dir="top-right">与四球<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.walks}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打者に与えた死球の数" data-cooltipz-dir="top-right">与死球<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.hitByPitch}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打者から奪った三振の数" data-cooltipz-dir="top-right">奪三振<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.strikeout}}</td>
                </tr>
                <tr>
                    <th><div aria-label="捕手がとれないボールを投げた数" data-cooltipz-dir="top-right">暴投<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.wildPitch}}</td>
                </tr>
                <tr>
                    <th><div aria-label="規則に違反する行動をとった数" data-cooltipz-dir="top-right">ボーク<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.balk}}</td>
                </tr>
                <tr>
                    <th><div aria-label="相手チームにとられてしまった点数" data-cooltipz-dir="top-right">失点<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.conceded}}</td>
                </tr>
                <tr>
                    <th><div aria-label="投手自身の責任でとられた点数。野手のエラーによる点数は含まれない" data-cooltipz-dir="top-right" data-cooltipz-size="fit">自責点<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.earnedRun}}</td>
                </tr>
                <tr>
                    <th><div aria-label="与四球率。9イニングあたりの四球の数" data-cooltipz-dir="top-right" data-cooltipz-size="fit">BB-9<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.bb9}}</td>
                </tr>
                <tr>
                    <th><div aria-label="奪三振率。9イニングあたりの三振の数" data-cooltipz-dir="top-right" data-cooltipz-size="fit">K-9<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.k9}}</td>
                </tr>
                <tr>
                    <th><div aria-label="奪三振と与四球の比率" data-cooltipz-dir="top-right">K/BB<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.kbb}}</td>
                </tr>
                <tr>
                    <th><div aria-label="1イニングあたり何人の出塁を許したか" data-cooltipz-dir="top-right" data-cooltipz-size="fit">WHIP<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.whip}}</td>
                </tr>
                <tr>
                    <th><div aria-label="投球回が増えると、フライに占める本塁打の割合は一定の値に収束するという性質をもとに、被本塁打の影響を排除して投手力を表す" data-cooltipz-dir="top-right" data-cooltipz-size="fit">xFIP<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.xfip}}</td>
                </tr>
                <tr>
                    <th><div aria-label="平均的な投手と比べて、どれだけ失点を防いだか" data-cooltipz-dir="top-right" data-cooltipz-size="fit">RSAA<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.rsaa}}</td>
                </tr>
                <tr>
                    <th><div aria-label="9イニングマウンドに立った時の失点数" data-cooltipz-dir="top-right" data-cooltipz-size="fit">RA<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.ra}}</td>
                </tr>
                <tr>
                    <th><div aria-label="9イニングあたりに打たれる本塁打の数" data-cooltipz-dir="top-right" data-cooltipz-size="fit">HR/9<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.hr9}}</td>
                </tr>
                <tr>
                    <th><div aria-label="対戦打者に占める奪三振の割合" data-cooltipz-dir="top-right">K%<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.kPercent}}</td>
                </tr>
                <tr>
                    <th><div aria-label="奪三振割合から与死球割合を引いた数。数字が大きいほど制球力があるといえる" data-cooltipz-dir="top-right" data-cooltipz-size="fit">K-BB%<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.kbbPercent}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打球に占めるゴロの割合" data-cooltipz-dir="top-right">GB%<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.gbPercent}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打球に占めるライナーの割合" data-cooltipz-dir="top-right">LD%<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.ldPercent}}</td>
                </tr>
                <tr>
                    <th><div aria-label="打球に占めるフライの割合" data-cooltipz-dir="top-right">FB%<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.fbPercent}}</td>
                </tr>
                <tr>
                    <th><div aria-label="出塁させた走者を生還させなかった割合" data-cooltipz-dir="top-right" data-cooltipz-size="fit">LOB%<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
                    <td>{{target.lobPercent}}</td>
                </tr>
                <tr>
                    <th><div aria-label="本塁打と犠打を除いた打球が安打になる割合" data-cooltipz-dir="top-right" data-cooltipz-size="fit">BABIP<font-awesome-icon icon="question-circle"></font-awesome-icon></div></th>
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
      rank: 6,
      target: [],
      radarData: {
        labels: ['WHIP', 'xFIP', 'K/9', 'HR/9', 'BB/9'],
        datasets: [
          {
            label: '美馬　学',
            borderColor: '#05215c',
            data: [5, 7, 6, 7, 9]
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
    const data = require('../../assets/pacific-pitcher.json')
    this.posts = data
    const target = data.filter(object => {
      return object.rank === this.rank
    }).shift()
    this.target = target
  }
}
</script>

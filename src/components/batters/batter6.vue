<template>
  <div>
    <div class="player-radar">
      <div class="player">
          <h1>{{target.name}}</h1>
          <blockquote>
              <img src="../../img/takahashi.jpg" alt="高橋周平選手">
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
              <th><div>打率<button aria-label="打数あたりの安打割合のこと" data-cooltipz-dir="bottom" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.average}}</td>
            </tr>
            <tr>
              <th><div>試合数<button aria-label="出場した試合の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.match}}</td>
            </tr>
            <tr>
              <th><div>打席<button aria-label="バッターボックスに立った回数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.plateAppearance}}</td>
            </tr>
            <tr>
              <th><div>打数<button aria-label="打撃を完了した回数。四球、死球、犠打、犠飛、打撃妨害、走塁妨害は除く" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.atBat}}</td>
            </tr>
            <tr>
              <th><div>得点<button aria-label="本塁へ生還した回数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.score}}</td>
            </tr>
            <tr>
              <th><div>安打数<button aria-label="ヒットの数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.hit}}</td>
            </tr>
            <tr>
              <th><div>二塁打<button aria-label="安打のうち、2塁まで進むことができた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.double}}</td>
            </tr>
            <tr>
              <th><div>三塁打<button aria-label="安打のうち、3塁まで進むことができた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.triple}}</td>
            </tr>
            <tr>
              <th><div>本塁打<button aria-label="安打のうち、本塁まで進むことができた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.homerun}}</td>
            </tr>
            <tr>
              <th><div>打点<button aria-label="打者が安打などによって得点をもたらした得点" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.rbi}}</td>
            </tr>
            <tr>
              <th><div>塁打数<button aria-label="安打の際に、どこまで進めたかを合計した数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.baseHit}}</td>
            </tr>
            <tr>
              <th><div>三振<button aria-label="投手からストライクを3つとられて、アウトになった数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.strikeout}}</td>
            </tr>
            <tr>
              <th><div>四球<button aria-label="投手がボールを４球投げて、出塁をした数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.walks}}</td>
            </tr>
            <tr>
              <th><div>敬遠<button aria-label="投手が意図的に四球を与えた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.avoid}}</td>
            </tr>
            <tr>
              <th><div>死球<button aria-label="投手の投げた球が打者の身体に当たった数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.hitByPitch}}</td>
            </tr>
            <tr>
              <th><div>犠打<button aria-label="打者が犠牲となり、塁上にいる走者を進塁させた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.bunt}}</td>
            </tr>
            <tr>
              <th><div>犠飛<button aria-label="打者のフライによって、塁上にいる走者を進塁または得点させることができたときの飛球の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.sacFly}}</td>
            </tr>
            <tr>
              <th><div>盗塁<button aria-label="投手が投球動作に入ったと同時に走者がスタートして、次の塁を狙うこと" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.stolenBase}}</td>
            </tr>
            <tr>
              <th><div>盗塁死<button aria-label="盗塁のうち、アウトにされてしまった数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.caughtStealing}}</td>
            </tr>
            <tr>
              <th><div>併殺<button aria-label="ダブルプレーを与えた数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.doublePlay}}</td>
            </tr>
            <tr>
              <th><div>失策<button aria-label="エラーの数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.error}}</td>
            </tr>
            <tr>
              <th><div>長打率<button aria-label="1打数当たりの塁打数の平均値" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.sluggingPercentage}}</td>
            </tr>
            <tr>
              <th><div>出塁率<button aria-label="打者が出塁した割合" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.onBasePercentage}}</td>
            </tr>
            <tr>
              <th><div>.OPS<button aria-label="打席での貢献度。長打率+出塁率" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.ops}}</td>
            </tr>
            <tr>
              <th><div>wOBA<button aria-label="打者の攻撃力を表す" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.woba}}</td>
            </tr>
            <tr>
              <th><div>BsR<button aria-label="どれだけの得点を生み出すことに貢献したか" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.bsr}}</td>
            </tr>
            <tr>
              <th><div>RCAA<button aria-label="リーグの平均打者と比べて、どれだけ得点を増やしたか" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.rcaa}}</td>
            </tr>
            <tr>
              <th><div>RC27<button aria-label="特定の選手一人で打線を構成した場合、平均何点取れるか" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.rc27}}</td>
            </tr>
            <tr>
              <th><div>wRC<button aria-label="特定の打者が生み出した得点" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.wrc}}</td>
            </tr>
            <tr>
              <th><div>wRAA<button aria-label="リーグの平均打者と比べて、同じ打席数を立った場合、どれだけ得点を生み出したか" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.wraa}}</td>
            </tr>
            <tr>
              <th><div>IsoD<button aria-label="選球眼を表す" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.isod}}</td>
            </tr>
            <tr>
              <th><div>BB/K<button aria-label="三振を一つ取られるまでに獲得した四球の数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.bbk}}</td>
            </tr>
            <tr>
              <th><div>PA/K<button aria-label="三振を一つ取られるまでにかかった打席数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.pak}}</td>
            </tr>
            <tr>
              <th><div>AB/HR<button aria-label="本塁打を記録するまでにかかった打席数" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.abhr}}</td>
            </tr>
            <tr>
              <th><div>IsoP<button aria-label="長打力を表す" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.isop}}</td>
            </tr>
            <tr>
              <th><div>SecA<button aria-label="長打の多い打者を表す" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.seca}}</td>
            </tr>
            <tr>
              <th><div>Spd<button aria-label="足の速さを表す" data-cooltipz-dir="top-left" data-cooltipz-size="large"><font-awesome-icon icon="question-circle"></font-awesome-icon></button></div></th>
              <td>{{target.spd}}</td>
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
      rank: 6,
      target: [],
      radarData: {
        labels: ['.OPS', 'wOBA', 'BsR', 'IsoD', 'IsoP', 'Spd'],
        datasets: [
          {
            label: '高橋　周平',
            borderColor: '#01b24e',
            data: [8, 6, 7, 6, 5, 6]
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
    const data = require('../../assets/central-batter.json')
    this.posts = data
    const target = data.filter(object => {
      return object.rank === this.rank
    }).shift()
    this.target = target
  }
}
</script>

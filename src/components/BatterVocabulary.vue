<template>
  <div class="vocabulary">
    <h2>用語解説<font-awesome-icon icon="question-circle"></font-awesome-icon></h2>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">打率</h3>
        <p class="vocabulary-text">打数あたりの安打割合のこと</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">試合数</h3>
        <p class="vocabulary-text">出場した試合の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">打席</h3>
        <p class="vocabulary-text">バッターボックスに立った回数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">打数</h3>
        <p class="vocabulary-text">打撃を完了した回数。四球、死球、犠打、犠飛、打撃妨害、走塁妨害は除く</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">得点</h3>
        <p class="vocabulary-text">本塁へ生還した回数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">安打</h3>
        <p class="vocabulary-text">ヒットの数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">二塁打</h3>
        <p class="vocabulary-text">安打のうち、2塁まで進むことができた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">三塁打</h3>
        <p class="vocabulary-text">安打のうち、3塁まで進むことができた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">本塁打</h3>
        <p class="vocabulary-text">安打のうち、本塁まで進むことができた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">打点</h3>
        <p class="vocabulary-text">打者が安打などによって得点をもたらした得点</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">塁打数</h3>
        <p class="vocabulary-text">安打の際に、どこまで進めたかを合計した数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">三振</h3>
        <p class="vocabulary-text">投手からストライクを3つとられて、アウトになった数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">四球</h3>
        <p class="vocabulary-text">投手がボールを４球投げて、出塁をした数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">敬遠</h3>
        <p class="vocabulary-text">投手が意図的に四球を与えた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">死球</h3>
        <p class="vocabulary-text">投手の投げた球が打者の身体に当たった数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">犠打</h3>
        <p class="vocabulary-text">打者が犠牲となり、塁上にいる走者を進塁させた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">犠飛</h3>
        <p class="vocabulary-text">打者のフライによって、塁上にいる走者を進塁または得点させることができたときの飛球の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">盗塁</h3>
        <p class="vocabulary-text">投手が投球動作に入ったと同時に走者がスタートして、次の塁を狙うこと</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">盗塁死</h3>
        <p class="vocabulary-text">盗塁のうち、アウトにされてしまった数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">併殺</h3>
        <p class="vocabulary-text">ダブルプレーを与えた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">失策</h3>
        <p class="vocabulary-text">エラーの数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">長打率</h3>
        <p class="vocabulary-text">1打数当たりの塁打数の平均値</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">出塁率</h3>
        <p class="vocabulary-text">打者が出塁した割合</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">.OPS</h3>
        <p class="vocabulary-text">打席での貢献度。長打率+出塁率</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">wOBA</h3>
        <p class="vocabulary-text">打者の攻撃力を表す</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">BsR</h3>
        <p class="vocabulary-text">どれだけの得点を生み出すことに貢献したか</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">RCAA</h3>
        <p class="vocabulary-text">リーグの平均打者と比べて、どれだけ得点を増やしたか</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">RC27</h3>
        <p class="vocabulary-text">特定の選手一人で打線を構成した場合、平均何点取れるか</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">wRC</h3>
        <p class="vocabulary-text">特定の打者が生み出した得点</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">wRAA</h3>
        <p class="vocabulary-text">リーグの平均打者と比べて、同じ打席数を立った場合、どれだけ得点を生み出したか</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">IsoD</h3>
        <p class="vocabulary-text">選球眼を表す</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">BB/K</h3>
        <p class="vocabulary-text">三振を一つ取られるまでに獲得した四球の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">PA/K</h3>
        <p class="vocabulary-text">三振を一つ取られるまでにかかった打席数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">AB/HR</h3>
        <p class="vocabulary-text">本塁打を記録するまでにかかった打席数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">IsoP</h3>
        <p class="vocabulary-text">長打力を表す</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">SecA</h3>
        <p class="vocabulary-text">長打の多い打者を表す</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">Spd</h3>
        <p class="vocabulary-text">足の速さを表す</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">BABIP</h3>
        <p class="vocabulary-text">本塁打と犠打を除いた打球が安打になる割合</p>
    </div>

  </div>
</template>

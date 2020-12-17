<template>
  <div class="vocabulary">
    <h2>用語解説<font-awesome-icon icon="question-circle"></font-awesome-icon></h2>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">試合数</h3>
        <p class="vocabulary-text">出場した試合の数</p>
    </div>
        <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">勝利</h3>
        <p class="vocabulary-text">投手が対戦相手に勝った試合の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">敗北</h3>
        <p class="vocabulary-text">投手が対戦相手に負けた試合の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">防御率</h3>
        <p class="vocabulary-text">投手が一試合投げたらいくつ自責点を取られるかを表した平均数値のこと</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">完投</h3>
        <p class="vocabulary-text">試合が終わるまで一人で投げ切った数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">完封</h3>
        <p class="vocabulary-text">相手を無得点に封じ、かつ試合が終わるまで一人で投げ切った数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">QS</h3>
        <p class="vocabulary-text">６イニング以上を投げ、かつ自責点3以内で抑えた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">勝率</h3>
        <p class="vocabulary-text">試合で勝利した割合</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">投球回</h3>
        <p class="vocabulary-text">投手が登板したイニング数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">被安打</h3>
        <p class="vocabulary-text">打者から打たれた安打の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">被本塁打</h3>
        <p class="vocabulary-text">打者から打たれたホームランの数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">与四球</h3>
        <p class="vocabulary-text">打者に与えた四球の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">与死球</h3>
        <p class="vocabulary-text">打者に与えた死球の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">奪三振</h3>
        <p class="vocabulary-text">打者から奪った三振の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">暴投</h3>
        <p class="vocabulary-text">捕手がとれないボールを投げた数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">ボーク</h3>
        <p class="vocabulary-text">規則に違反する行動をとった数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">失点</h3>
        <p class="vocabulary-text">相手チームにとられてしまった点数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">自責点</h3>
        <p class="vocabulary-text">投手自身の責任でとられた点数。野手のエラーによる点数は含まれない</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">BB-9</h3>
        <p class="vocabulary-text">与四球率。9イニングあたりの四球の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">K-9</h3>
        <p class="vocabulary-text">奪三振率。9イニングあたりの三振の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">K/BB</h3>
        <p class="vocabulary-text">奪三振と与四球の比率</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">WHIP</h3>
        <p class="vocabulary-text">1イニングあたり何人の出塁を許したか</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">xFIP</h3>
        <p class="vocabulary-text">投球回が増えると、フライに占める本塁打の割合は一定の値に収束するという性質をもとに、被本塁打の影響を排除して投手力を表す</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">RSAA</h3>
        <p class="vocabulary-text">平均的な投手と比べて、どれだけ失点を防いだか</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">RA</h3>
        <p class="vocabulary-text">9イニングマウンドに立った時の失点数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">HR/9</h3>
        <p class="vocabulary-text">9イニングあたりに打たれる本塁打の数</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">K%</h3>
        <p class="vocabulary-text">対戦打者に占める奪三振の割合</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">K-BB%</h3>
        <p class="vocabulary-text">奪三振割合から与死球割合を引いた数。数字が大きいほど制球力があるといえる</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">GB%</h3>
        <p class="vocabulary-text">打球に占めるゴロの割合</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">LD%</h3>
        <p class="vocabulary-text">打球に占めるライナーの割合</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">FB%</h3>
        <p class="vocabulary-text">打球に占めるフライの割合</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">LOB%</h3>
        <p class="vocabulary-text">出塁させた走者を生還させなかった割合</p>
    </div>
    <div class="vocabulary-wrap">
        <h3 class="vocabulary-title">BABIP</h3>
        <p class="vocabulary-text">本塁打と犠打を除いた打球が安打になる割合</p>
    </div>
  </div>
</template>

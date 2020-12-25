<template>
    <div>
        <h2>個人成績</h2>
        <div class="league-wrap">
            <ul class="central-wrap">
                <li>セ・リーグ</li>
                <li><router-link to="/page1" class="router-a">投手</router-link></li>
                <li><router-link to="/page3" class="router-a">野手</router-link></li>
            </ul>
            <ul class="pacific-wrap">
                <li>パ・リーグ</li>
                <li><router-link to="/page2" class="router-a">投手</router-link></li>
                <li><router-link to="/page4" class="router-a">野手</router-link></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2{
    text-align: center;
    padding-top: 50px;
}
.router-a{
    color: $color-text;
}
</style>

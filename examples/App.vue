<!-- app首页面 -->
<template>
  <div id="app"><!-- $t("message.hello") -->
    <!--    <button @click="chure">切换语言</button>-->
    <header>
      <div class="headerLeft">
        <p><img src="./assets/images/appLogo.png"></p>
        <p @click="goView('liquidity')" :class="{'tabFontColor': tabFontColor==='liquidity'}">Liquidity</p>
        <p @click="goView('swapPt')" :class="{'tabFontColor': tabFontColor==='swapPt'}">Swap PT</p>
        <p @click="goView('myPositions')" :class="{'tabFontColor': tabFontColor==='myPositions'}">My Positions</p>
      </div>
      <div class="headerRight">
        <p>0 ETH<input type="text"></p>
        <p>···</p>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <!--  背景图阴影  -->
    <img class="backgroungRight" src="./assets/images/backgroungRight.png">
    <img class="backgroungLeft" src="./assets/images/backgroungLeft.png">
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      tabFontColor: 'liquidity',
    }
  },
  mounted(){

  },
  updated(){
    this.tabFontColor = this.$router.history.current.name;
  },
  methods: {
    goView(state){
      this.$router.push(`/${state}`);
      this.tabFontColor = state;
    },
    //切换语言
    chure(){
      let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh';
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style lang="scss" scoped>

@font-face {
  font-family: DM Sans;
  src: url('../examples/assets/font/fontFamily.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#app{
  font-family: DM Sans;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  .backgroungLeft{
    position: absolute;
    top: 286px;
    left: 0;
    width: 1136px;
    z-index: -1;
  }
  .backgroungRight{
    position: absolute;
    top: 0;
    right: 78px;
    width: 941px;
    z-index: -1;
  }
}
.content{
  width: 100%;
  flex: 1;
  background-image: url("../examples/assets/images/boxBackground.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}

//header
header{
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: 0px 4px 8px rgba(27, 27, 27, 0.16);
  backdrop-filter: blur(48px);
  display: flex;
  .headerLeft{
    display: flex;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 80px;
    color: #9C9C9C;
    p{
      margin-left: 50px;
      cursor:pointer;
    }
    p:nth-of-type(1){
      margin-left: 99px;
      img{
        width: 255px;
        margin-top: -5px;
      }
    }
    p:nth-of-type(2){
      margin-left: 32px;
    }
    .tabFontColor{
      font-weight: bold;
      color: #FFFFFF;
    }
  }
  .headerRight{
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    p:nth-of-type(1){
      width: 311px;
      height: 48px;
      line-height: 48px;
      background: #214749;
      border: 1px solid #045A27;
      box-sizing: border-box;
      border-radius: 8px;
      color: #FFFFFF;
      padding: 0 12px;
      display: flex;
      align-items: center;/*副轴居中*/
      margin-right: 60px;
      input{
        width: 197px;
        height: 32px;
        background: #1B1B1B;
        border-radius: 8px;
        margin-left: auto;
        display: flex;
        justify-content: center;/*主轴居中*/
        border:none;
        outline: none;
        color: #FFFFFF;
        padding: 0 9px;
      }
    }
    p:nth-of-type(2){
      font-size: 40px;
      margin-right: 104px;
      font-weight: bold;
      color: #C2CFE0;
      letter-spacing: 2px
    }
  }
}

</style>

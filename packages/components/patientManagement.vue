<template>
  <div id="box"><!-- $t("message.hello") -->
    <header>
      <div class="headerLeft">
        <p>Hedge<span>swap</span></p>
        <p @click="goView">Liquidity</p>
        <p>Swap PT</p>
        <p>My Positions</p>
      </div>
      <div class="headerRight">
        <p>···</p>
      </div>
    </header>
<!--    <button @click="chure">切换语言</button>-->
    <div class="content">
      <router-view></router-view>
<!--      <div class="contentBox"></div>-->
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
  mounted(){},
  methods: {
    goView(){
      this.$router.push('/liquidity')
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
  src: url('../../examples/assets/font/fontFamily.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#box{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#box{
  background: #0D0E21;
  font-family: DM Sans;
  display: flex;
  flex-direction: column;
}
.content{
  width: 100%;
  flex: 1;
  background-image: url("../../examples/assets/images/boxBackground.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  //.contentBox{
  //  width: 1110px;
  //  height: 754px;
  //  border: 1px solid #207342;
  //  box-sizing: border-box;
  //  box-shadow: 0px 10px 40px rgba(10, 80, 79, 0.2);
  //  filter: blur(4px);
  //  border-radius: 23px;
  //}
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
    }
    p:nth-of-type(1){
      margin-left: 99px;
    }
    p:nth-of-type(2){
      margin-left: 62px;
    }
  }
  .headerRight{
    margin-left: auto;
    p:nth-of-type(1){
      font-size: 30px;
      margin-right: 104px;
      font-weight: bold;
    }
  }
}


</style>

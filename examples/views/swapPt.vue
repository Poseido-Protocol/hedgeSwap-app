<script
    src="../../../../../Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/ff03271120798f081c299fc3fd01520e/Message/MessageTemp/73db97229ce7260d05c73a13ef6b50e8/File/flexible.js"></script>
<template>
  <div id="swapPt">
    <div class="swapPtContent">
      <div class="swapPt_view1">
        <div class="liquidty_view1_chose" :class="{'tabClass': tabClass===1}" @click="switchSwapPt(1)">Swap</div>
        <div class="liquidty_view1_chose" :class="{'tabClass': tabClass===2}" @click="switchSwapPt(2)">Liquidity</div>
      </div>
      <div class="swapPt_view2">
<!--        <div class="swapPt_view2_title">-->
<!--          <div class="swapPt_view2_titleLeft">Select Pool</div>-->
<!--          <div class="swapPt_view2_titleRight"><img src="../assets/images/liquidity_left_withdrawIcon.png"><span>Uniswap Farm</span></div>-->
<!--        </div>-->
        <div class="swapPt_view2_content">
          <div class="questionMark" v-if="currencyName_from===''" @click="show=true"><img src="../assets/images/questionMark.png"></div>
          <div class="swapPt_view2_selctIcon" v-else @click="show=true"><img :src="currencyIcon_from1"><img :src="currencyIcon_from2"></div>
          <div class="swapPt_view2_select" @click="show=true">
            <p>From</p>
            <p class="noCurrency" v-if="currencyName_from===''">Select a token<i class="el-icon-arrow-down"></i></p>
            <p class="swapPt_view2_select_name" v-else>{{ currencyName_from }}<i class="el-icon-arrow-down"></i></p>
          </div>
          <div class="swapPt_view2_input"><input type="number" v-model="input" placeholder="0.00" onKeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))"><span class="balance" v-if="input===''">Balance : 0</span></div>
        </div>
      </div>
      <img class="transformationIcon" src="../assets/images/transformationIcon.png" @click="replaceType">
      <div class="swapPt_view2 swapPt_view3">
<!--        <div class="swapPt_view2_title">-->
<!--          <div class="swapPt_view2_titleLeft">Select Pool</div>-->
<!--          <div class="swapPt_view2_titleRight"><img src="../assets/images/liquidity_left_withdrawIcon.png"><span>Uniswap Farm</span></div>-->
<!--        </div>-->
        <div class="swapPt_view2_content">
          <div class="questionMark" v-if="currencyName_to===''" @click="show=true"><img src="../assets/images/questionMark.png"></div>
          <div class="swapPt_view2_selctIcon" v-else @click="show=true"><img :src="currencyIcon_to1"><img :src="currencyIcon_to2"></div>
          <div class="swapPt_view2_select" @click="show=true">
            <p>to</p>
            <p class="noCurrency" v-if="currencyName_to===''">Select a token<i class="el-icon-arrow-down"></i></p>
            <p class="swapPt_view2_select_name" v-else>{{ currencyName_to }}<i class="el-icon-arrow-down"></i></p>
          </div>
          <div class="swapPt_view2_input"><input type="number" v-model="input" placeholder="0.00" onKeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))"></div>
        </div>
      </div>
      <div class="confirm">Confirm</div>
    </div>

    <!-- 模态框-选择币种类 -->
    <el-dialog :visible.sync="show" :modal-append-to-body="false">
      <p class="selectBox_name">Select a token</p>
      <p class="selectBox_search"><input type="text" placeholder="Search name or paste address"></p>
      <div class="selectBox_list">
        <div class="selectBox_li" v-for="(item,index) in list" :key="index">
          <div class="selectBox_liLeft"><img src="../assets/images/liquidityIcon1.png"></div>
          <div class="selectBox_liRight">
            <p>ETH</p>
            <p>Uniswap</p>
          </div>
        </div>

      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "swapPt",
  data(){
    return{
      tabClass: 1,

      //替换币种类
      currencyName_from: 'ETH/USDC',
      currencyName_to: 'rtETH/USDC',
      currencyIcon_from1: require('../assets/images/liquidityIcon1.png'),
      currencyIcon_from2: require('../assets/images/liquidityIcon2.png'),
      currencyIcon_to1: require('../assets/images/liquidityIcon2.png'),
      currencyIcon_to2: require('../assets/images/liquidityIcon1.png'),

      input: '',
      select: '1',
      show: false,
      list: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},]
    }
  },
  methods: {
    switchSwapPt(state){
      // this.tabClass = state;
    },
    replaceType(){
      //拷贝数据
      let currencyName_to = this.currencyName_to;
      let currencyName_from = this.currencyName_from;
      let currencyIcon_from1 = this.currencyIcon_from1;
      let currencyIcon_from2 = this.currencyIcon_from2;
      let currencyIcon_to1 = this.currencyIcon_to1;
      let currencyIcon_to2 = this.currencyIcon_to2;
      //进行替换
      this.currencyName_to = currencyName_from;
      this.currencyName_from = currencyName_to;
      this.currencyIcon_from1 = currencyIcon_to1;
      this.currencyIcon_from2 = currencyIcon_to2;
      this.currencyIcon_to1 = currencyIcon_from1;
      this.currencyIcon_to2 = currencyIcon_from2;
    }
  }
}
</script>

<style lang="scss" scoped>
#swapPt {
  margin-top: 148px;
  margin-bottom: 180px;
  width: 1110px;
  height: 754px;
  background-image: url("../assets/images/content_background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 10px 10px 11px 64px;
  display: flex;
  justify-content: center;
  .swapPtContent{
    width: 680px;
    .swapPt_view1{
      width: 254px;
      height: 54px;
      background: #2E4E50;
      border: 1px solid #045A27;
      box-sizing: border-box;
      border-radius: 8px;
      margin-top: 39px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 5px;
      .liquidty_view1_chose{
        flex: 1;
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 54px;
        text-align: center;
        color: #658082;
      }
      .tabClass{
        width: 122px;
        height: 44px;
        background: linear-gradient(176.79deg, #93FE92 0.5%, #3DEDF9 107.08%);
        box-shadow: 5px 8px 40px rgba(81, 255, 181, 0.5);
        border-radius: 8px;
        color: #19435A;
        line-height: 44px;
      }
    }
    .swapPt_view2{
      margin-top: 50px;
      .swapPt_view2_title{
        display: flex;
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #7A7A7A;
        .swapPt_view2_titleRight{
          margin-left: auto;
          font-size: 18px;
          text-decoration-line: underline;
          color: #4BB68F;
          display: flex;
          align-items: center;
          img{
            width: 20px;
            height: 20px;
            margin-right: 8px;
          }
          span{
            display: flex;
          }
        }
      }
      .swapPt_view2_content{
        width: 100%;
        height: 86px;
        background: #214749;
        border: 1px solid #045A27;
        border-radius: 8px;
        margin-top: 6px;
        display: flex;
        align-items: center;
        .questionMark{
          margin-left: 44px;
          cursor:pointer;
          img{
            width: 44px;
            height: 44px;
          }
        }
        .swapPt_view2_selctIcon{
          cursor:pointer;
          img:nth-of-type(1){
            margin-left: 29px;
          }
          img:nth-of-type(2){
            margin-left: -9px;
          }
          img{
            width: 44px;
            height: 44px;
          }
        }
        .swapPt_view2_select{
          font-family: DM Sans;
          font-style: normal;
          font-weight: normal;
          margin-left: 30px;
          cursor:pointer;
          p:nth-of-type(1){
            font-size: 16px;
            color: #FFFFFF;
          }
          p:nth-of-type(2){
            font-size: 12px;
            line-height: 20px;
            color: #658082;
            display: flex;
            i{
              font-size: 16px;
              color: #ABBCBD;
              margin-top: 2px;
              margin-left: 3px;
            }
          }
          .noCurrency{
            width: 107px;
            height: 26px;
            border: 1px solid #103638;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 6px;
            i{
              font-size: 4px !important;
            }
          }
          .swapPt_view2_select_name{
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 20px !important;
            color: #FFFFFF !important;
            margin-top: 6px;
          }
        }
        .swapPt_view2_input{
          margin-right: 14px;
          margin-left: auto;
          position: relative;
          input{
            width: 366px;
            height: 50px;
            padding: 0 19px;
            background: #1B1B1B;
            border: 1px solid #014B1F;
            box-sizing: border-box;
            border-radius: 8px;
            outline: none;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            color: #FFFFFF;
          }
          .balance{
            position: absolute;
            top: 13px;
            right: 20px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            color: #485D5E;
          }
        }
      }
    }
    .transformationIcon{
      width: 46px;
      height: 46px;
      display: block;
      margin: 0 auto;
      margin-top: 20px;
      cursor:pointer;
    }
    .swapPt_view3{
      margin-top: 0;
    }
    .confirm{
      width: 680px;
      height: 60px;
      border: 1px solid #658082;
      border-radius: 8px;
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 60px;
      text-align: center;
      color: #B8D7D9;
      margin-top: 60px;
    }
  }
}

//对话框
.selectBox_name{
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #EBEBEB;
}
.selectBox_search{
  margin-top: 33px;
  width: 324px;
  height: 52px;
  input{
    width: 322px;
    height: 50px;
    padding: 0 17px;
    background: #1B1B1B;
    border-radius: 8px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #9AAEAF;
    border: none;
    outline: none;
  }
}
.selectBox_list{
  height: 500px;
  overflow: auto;
  margin-top: 37px;
  .selectBox_li{
    margin-left: 20px;
    margin-top: 26px;
    display: flex;
    .selectBox_liLeft{
      margin-top: 5px;
      img{
        width: 28px;
        height: 28px;
      }
    }
    .selectBox_liRight{
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #FFFFFF;
      margin-left: 15px;
      p:nth-of-type(2){
        font-weight: normal;
        font-size: 14px;
        color: #658082;
      }
    }
  }
  .selectBox_li:nth-of-type(1){
    margin-top: 0;
  }
}
//对话框滚动条样式
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: #214749 !important;
}
</style>
<style>
/*选币种类对话框*/
/*遮罩*/
.el-dialog{
  width: 418px;
  height: 736px;
  margin-top: 17.5vh !important;
  background: #102E30;
  border: 2px solid #6BF8C5;
  box-sizing: border-box;
  box-shadow: 0px 10px 10px rgba(8, 22, 22, 0.2);
  border-radius: 24px;
}
.el-dialog__close{
  color: #FFFFFF !important;
  font-size: 22px;
}
.el-dialog__body{
  padding: 5px 30px 80px 30px;
}

</style>

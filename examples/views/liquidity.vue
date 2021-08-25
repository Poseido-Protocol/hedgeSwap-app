<template>
  <div id="liquidity">
    <div class="liquidity_left">
      <div class="liquidty_left_view1">
        <div class="liquidty_left_view1_chose" :class="{'tabClass': tabClass===1}" @click="switchLiquidity(1)">Deposit</div>
        <div class="liquidty_left_view1_chose" :class="{'tabClass': tabClass===2}" @click="switchLiquidity(2)">Withdraw</div>
      </div>
      <!-- state: Deposit   -->
      <div class="liquidity_left_deposit" v-if="tabClass===1">
        <div class="liquidty_left_view2">
          <div class="liquidty_left_view2_title">
            <p>Select Pool</p>
            <p><img src="../assets/images/liquidity_left_withdrawIcon.png"><span>Uniswap Farm</span></p>
          </div>
          <div class="liquidty_left_view2_content" @click="show=true">
            <div class="liquidty_left_view2_content_img"><img src="../assets/images/liquidityIcon1.png"><img src="../assets/images/liquidityIcon2.png"></div>
            <div class="liquidty_left_view2_content_name">
              <p>ETH/USDC</p>
              <p>Uniswap</p>
            </div>
            <div class="liquidty_left_view2_content_icon"><i class="el-icon-arrow-down"></i></div>
          </div>
        </div>
        <div class="liquidty_left_view2">
          <div class="liquidty_left_view3_title">
            <p>Amount</p>
            <p>Deposited : 0</p>
          </div>
          <div class="liquidty_left_view2_content3">
            <input type="number" placeholder="0.0" v-model="amount_input" onKeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))">
            <div class="view2_content3_placeholder" v-if="amount_input===''">Available : 10.230004</div>
            <div class="maxNumberBox">
              <div class="maxNumber_button">Max</div>
<!--              <div class="maxNumber">10</div>-->
            </div>
          </div>
        </div>
        <div class="liquidty_left_view4_icon"><img src="../assets/images/downIcon.png"></div>
        <div class="liquidty_left_view2 liquidty_left_view5_margin">
          <div class="liquidty_left_view3_title">
            <p>You Will Receive</p>
            <p><span>Learn how it work</span><img src="../assets/images/doubtIcon.png"></p>
          </div>
          <div class="liquidty_left_view5_content3">
            <p><span class="liquidty_left_view5_content3_title">Stable NFT</span>$ 2970.00</p>
            <p>= 0.45 <span>ETH</span> + 1350 <span>USDC</span></p>
            <p><span class="liquidty_left_view5_content3_title title2">RT</span> $ 30.00 = 5</p>
          </div>
        </div>
      </div>
      <!-- state: Withdraw   -->
      <div class="liquidity_left_withdraw" v-else>
        <div class="liquidity_left_withdraw_view1">
          <div class="liquidity_left_withdraw_view_title">
            <p>Select Pool</p>
            <p><img src="../assets/images/liquidity_left_withdrawIcon.png"><span>Uniswap Farm</span></p>
          </div>
          <div class="liquidity_left_withdraw_content" @click="show=true">
            <div class="liquidity_left_withdraw_content_img"><img src="../assets/images/liquidityIcon1.png"><img src="../assets/images/liquidityIcon2.png"></div>
            <div class="liquidity_left_withdraw_content_name">
              <p>ETH/USDC</p>
              <p>Uniswap</p>
            </div>
            <div class="liquidity_left_withdraw_content_icon"><i class="el-icon-arrow-down"></i></div>
          </div>
        </div>
        <div class="liquidity_left_withdraw_view2">
          <div class="liquidity_left_withdraw_view2_title">Amount to withdraw</div>
          <div class="liquidity_left_withdraw_view2_content">
            <div class="slider_parameter">
              <div class="slider_parameter_left">{{ sliderTab }}%</div>
              <div class="slider_parameter_right">Available : 10.230004</div>
            </div>
            <div class="sliderBox">
              <el-slider :show-tooltip="false" v-model="sliderTab"></el-slider>
              <div class="sliderTab">
                <div v-for="(item,index) in selectList" :key="index" @click="chosePercentage(item)" :class="{'sliderTab_select': sliderTab===item}">{{ item }}%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="liquidity_left_withdraw_view3"><img src="../assets/images/downIcon.png"></div>
        <div class="liquidity_left_withdraw_view4">
          <div class="liquidity_left_withdraw_view4_title">You Need to Pay</div>
          <div class="liquidity_left_withdraw_view4_content">
            <p>Stable NFT</p>
            <p>$ 1485.00 <br>= 0.255 <span>ETH</span> + 742.5 <span>USDC</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="liquidity_right">
      <!-- state: Deposit   -->
      <div class="liquidity_right_deposit" v-if="tabClass===1">
        <div class="liquidity_right_line1">
          <p>·</p>
          <p>TVl</p>
          <p>$ 201.98 m</p>
        </div>
        <div class="liquidity_right_line2">
          <p>·</p>
          <p>Forecasted <br>Earnings</p>
          <p>APR</p>
        </div>
        <div class="liquidity_right_line3"><p>Stable NFT</p><p>15.52%</p></div>
        <div class="liquidity_right_line3"><p>Stable NFT</p><p>155.2%</p></div>
        <button class="liquidity_right_submit button_hoverFocus button_disabled" :class="{'button_disabled': buttonState1}">Confirm</button>
      </div>
      <!-- state: Withdraw   -->
      <div class='liquidity_right_Withdraw' v-else>
        <div class="liquidity_right_line1">
          <p>·</p>
          <p>You Will Receive</p>
        </div>
        <div class="liquidity_right_line3"><p>ETH/USDC LP token<br><span class="notes">(Includes unclaimed rewards)</span></p><p>51.525<br><span class="notes">($1529.55)</span></p></div>
        <div class="liquidity_right_line3"><p>yield</p><p>+3.05 %</p></div>
        <button class="liquidity_right_submit button_hoverFocus button_disabled" :class="{'button_disabled': buttonState2}">Confirm</button>
      </div>
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
  name: 'liquidity',
  data(){
    return{
      tabClass: 1,
      sliderTab: 50,
      selectList: [20,50,75,100],
      //输入框状态
      amount_input: '',
      //按钮状态
      buttonState1: true,
      buttonState2: false,

      //选择币模态框状态
      show: false,

      list: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    }
  },
  methods: {
    switchLiquidity(state){
      this.tabClass = state;
    },
    chosePercentage(e){
      this.sliderTab = e;
    }
  }
}
</script>

<style lang="scss" scoped>
  #liquidity{
    margin-top: 148px;
    margin-bottom: 180px;
    width: 1110px;
    height: 754px;
    background-image: url("../assets/images/content_background.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 10px 10px 11px 64px;
    display: flex;
    .liquidity_left{
      width: 602px;
      .liquidty_left_view1{
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
        .liquidty_left_view1_chose{
          cursor:pointer;
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
      .liquidty_left_view2{
        margin-top: 30px;
        .liquidty_left_view2_title{
          display: flex;
          font-family: DM Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 18px;
          color: #7A7A7A;
          p:nth-of-type(2){
            margin-left: auto;
            font-size: 18px;
            text-decoration-line: underline;
            color: #6BF8C5;
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
        .liquidty_left_view2_content{
          height: 68px;
          background: #214749;
          border: 1px solid #045A27;
          border-radius: 8px;
          margin-top: 16px;
          display: flex;
          align-items: center;
          padding: 0 22px 0 24px;
          .liquidty_left_view2_content_img{
            img{
              width: 44px;
            }
            img:nth-of-type(2){
              margin-left: -8px;
            }
          }
          .liquidty_left_view2_content_name{
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            color: #FFFFFF;
            margin-left: 14px;
            p:nth-of-type(2){
              font-size: 16px;
              color: #658082;
            }
          }
          .liquidty_left_view2_content_icon{
            margin-left: auto;
            font-size: 25px;
            color: #ABBCBD;
            margin-top: -6px;
          }
        }
        .liquidty_left_view3_title{
          display: flex;
          font-family: DM Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 18px;
          color: #7A7A7A;
          p:nth-of-type(2){
            height: 18px;
            margin-left: auto;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 18px;
            //color: #6BF8C5;
            color: #4BB68F;
            display: flex;
            span{
              display: block;
            }
            img{
              width: 18px;
              margin-left: 10px;
            }
          }
        }
        .liquidty_left_view2_content3{
          height: 86px;
          background: #214749;
          border: 1px solid #045A27;
          border-radius: 8px;
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 22px 0 14px;
          position: relative;
          input{
            width: 100%;
            height: 62px;
            background: #1B1B1B;
            border: 1px solid #014B1F;
            box-sizing: border-box;
            border-radius: 8px;
            outline: none;
            padding: 0 20px 0 90px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            color: #FFFFFF;
          }
          .view2_content3_placeholder{
            position: absolute;
            top: 35px;
            right: 40px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 14px;
            color: #485D5E;
          }
          .maxNumberBox{
            position: absolute;
            top: 28px;
            left: 28px;
            display: flex;
            .maxNumber_button{
              width: 56px;
              height: 30px;
              background: rgba(33, 71, 73, 0.63);
              border: 1px solid #6BF8C5;
              border-radius: 8px;
              font-family: DM Sans;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 30px;
              text-align: center;
              color: #6BF8C5;
              cursor:pointer;
            }
            .maxNumber_button:hover{
              width: 56px;
              height: 30px;
              background: #245053;
              border: 1px solid #6BF8C5;
              border-radius: 8px;
              font-family: DM Sans;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 30px;
              text-align: center;
              color: #6BF8C5;
            }
            //.maxNumber{
            //  font-family: DM Sans;
            //  font-style: normal;
            //  font-weight: normal;
            //  font-size: 20px;
            //  line-height: 35px;
            //  color: #FFFFFF;
            //  margin-left: 20px;
            //}
          }
        }
        .liquidty_left_view5_margin{
          margin-top: 0;
        }
        .liquidty_left_view5_content3 {
          height: 108px;
          background: #214749;
          border: 1px solid #045A27;
          border-radius: 8px;
          margin-top: 16px;
          padding: 25px 13.37px 31px 30px;
          font-family: DM Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          color: #B8D7D9;
          span{
            font-size: 18px;
            color: #658082;
          }
          p:nth-of-type(2){
            margin-left: 100px;
          }
          p:nth-of-type(3){
            margin-top: 27.58px;
          }
          .liquidty_left_view5_content3_title{
            margin-right: 10px;
          }
          .title2{
            margin-left: 68px;
          }
        }
      }
      .liquidty_left_view4_icon{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0 10px 0;
        img{
          width: 46px;
        }
      }

      .liquidity_left_withdraw{
        .liquidity_left_withdraw_view1{
          margin-top: 30px;
          .liquidity_left_withdraw_view_title{
            display: flex;
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color: #7A7A7A;
            line-height: 18px;
            p:nth-of-type(2){
              margin-left: auto;
              font-size: 18px;
              text-decoration-line: underline;
              color: #6BF8C5;
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
          .liquidity_left_withdraw_content{
            height: 68px;
            background: #214749;
            border: 1px solid #045A27;
            border-radius: 8px;
            margin-top: 16px;
            display: flex;
            align-items: center;
            padding: 0 22px 0 24px;
            .liquidity_left_withdraw_content_img{
              img{
                width: 44px;
              }
              img:nth-of-type(2){
                margin-left: -8px;
              }
            }
            .liquidity_left_withdraw_content_name{
              font-family: DM Sans;
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              color: #FFFFFF;
              margin-left: 14px;
              p:nth-of-type(2){
                font-size: 16px;
                color: #658082;
              }
            }
            .liquidity_left_withdraw_content_icon{
              margin-left: auto;
              font-size: 25px;
              color: #ABBCBD;
              margin-top: -6px;
            }
          }
        }

        .liquidity_left_withdraw_view2{
          margin-top: 30px;
          .liquidity_left_withdraw_view2_title{
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color: #7A7A7A;
          }
          .liquidity_left_withdraw_view2_content{
            width: 602px;
            height: 126px;
            background: #162D2F;
            border: 1px solid #343434;
            border-radius: 8px;
            margin-top: 16px;
            .slider_parameter{
              display: flex;
              font-family: DM Sans;
              font-style: normal;
              font-weight: normal;
              font-size: 24px;
              color: #FFFFFF;
              margin: 17px 18px 0 24px;
              .slider_parameter_right{
                margin-left: auto;
                font-size: 18px;
                color: #4BB68F;
              }
            }
            .sliderBox{
              padding: 0 18px 0 24px;
              .sliderTab{
                display: flex;
                justify-content: flex-end;
                div{
                  width: 56px;
                  height: 30px;
                  background: #2E4E50;
                  border-radius: 8px;
                  font-family: DM Sans;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 30px;
                  text-align: center;
                  color: #658082;
                  margin-right: 16px;
                }
                div:nth-last-child(1){
                  margin-right: 0;
                }
                .sliderTab_select{
                  background: linear-gradient(180deg, #AAFFA9 0%, #11FFBD 100%);
                  box-shadow: 5px 8px 40px rgba(81, 255, 181, 0.5);
                  border-radius: 8px;
                  color: #19435A;
                }
              }
            }
          }
        }

        .liquidity_left_withdraw_view3{
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0 20px 0; //43px
          img{
            width: 46px;
            height: 46px;
          }
        }

        .liquidity_left_withdraw_view4{
          .liquidity_left_withdraw_view4_title{
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            color: #7A7A7A;
          }
          .liquidity_left_withdraw_view4_content{
            width: 602px;
            height: 117px;
            background: #214749; //#162D2F
            border: 1px solid #343434;
            border-radius: 8px;
            margin-top: 16px;
            display: flex;
            //align-items: center;
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            color: #B8D7D9;
            p:nth-of-type(1){
              font-size: 18px;
              color: #658082;
              margin: 25px 10px 33.58px 30px;
            }
            p:nth-of-type(2){
              margin: 17px 13.37px 33.58px 0;
              line-height: 40px;
            }
            span{
              font-size: 18px;
              color: #658082;
            }
          }
        }

      }
    }
    .liquidity_right{
      margin-left: auto;
      width: 285.28px;
      background: rgba(255, 255, 255, 0.16);
      box-shadow: 0px 4px 8px rgba(27, 27, 27, 0.16);
      backdrop-filter: blur(48px);
      border-radius: 24px;
      padding: 0 38px 0 33.72px;
      .liquidity_right_line1{
        display: flex;
        color: #EAEAEA;
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        margin-top: 110px;
        line-height: 20px;
        p:nth-of-type(1){
          font-size: 40px;
          font-weight: bold;
        }
        p:nth-of-type(2){
          margin-left: 15.28px;
        }
        p:nth-of-type(3){
          margin-left: auto;
        }
      }
      .liquidity_right_line2{
        display: flex;
        color: #EAEAEA;
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        margin-top: 50px;
        margin-bottom: 30px;
        line-height: 20px;
        p:nth-of-type(1){
          font-size: 40px;
          font-weight: bold;
        }
        p:nth-of-type(2){
          margin-left: 15.28px;
        }
        p:nth-of-type(3){
          margin-left: auto;
        }
      }
      .liquidity_right_line3{
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #AFAFAF;
        display: flex;
        margin-top: 20px;
        padding: 0 0 0 25px;
        p:nth-of-type(2){
          margin-left: auto;
        }
        .notes{
          font-size: 12px;
        }
      }
      .liquidity_right_submit{
        width: 282px;
        height: 53px;
        background: #224849;
        border-radius: 8px;
        font-family: DM Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 53px;
        text-align: center;
        color: #B8D7D9;
        border: none;
        margin-top: 80px;
      }
    }
  }

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
   .el-slider__bar{
     background: linear-gradient(180deg, #AAFFA9 0%, #11FFBD 100%);
     box-shadow: 5px 8px 40px rgba(81, 255, 181, 0.5);
   }
  .el-slider__button{
    background: linear-gradient(180deg, #AAFFA9 0%, #11FFBD 100%);
    border: 2px solid #FFFFFF;
  }
  .el-slider__runway{
    background-color: #FFFFFF;
  }
  /*遮罩-对话框*/
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

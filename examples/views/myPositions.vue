<template>
  <div id="myPositions">
    <div>
      <div class="myPositions_view1">
        <div class="myPositions_view1_child">
          <div>My Totle Positions</div>
          <div>3027.42 <span class="company">USD</span></div>
        </div>
        <div class="myPositions_view1_child">
          <div>Totle Earns</div>
          <div>1.525 <span class="company">USD</span></div>
        </div>
        <div class="myPositions_view1_child">
          <div>Totle Unclaimed Rewards</div>
          <div>
            <p class="myPositions_view1_childLeft">10.52<span class="company">USD</span></p>
            <p class="myPositions_view1_childRight">Claim All</p>
          </div>
        </div>
      </div>
      <div class="myPositions_view2">
        <div class="myPositions_view2_title">
          <div class="myPositions_view2_titleLfet">Stable LP NFT</div>
          <div class="myPositions_view2_titleRight" @click="goRoute">You might need to Deposit  LP </div>
        </div>
        <div class="myPositions_view2_content view2_content1">
          <div class="myPositions_view2_content_icon">
            <img src="../assets/images/liquidityIcon1.png">
            <img src="../assets/images/liquidityIcon2.png">
          </div>
          <div class="myPositions_view2_content_name">
            <p>USDC/USDT</p> <!-- <i class="el-icon-arrow-down"></i> -->
            <p>Sushiswap Farm</p>
          </div>
          <div class="divider"><el-divider direction="vertical"></el-divider></div>
          <div class="myPositions_view2_content_content ">
            <p>Stable LP NFT</p>
            <p>0.45 <span>ETH</span></p>
            <p>1350 <span>USDT</span></p>
          </div>
          <div class="myPositions_view2_content_content margin_view">
            <p>Reward</p>
            <p>0.12 <span>ETH/USDT</span></p>
          </div>
          <div class="myPositions_view2_content_buttonBox">
            <div>Withdraw</div>
            <div>Claim</div>
          </div>
        </div>

        <div class="myPositions_view2_content view2_content2">
          <div class="myPositions_view2_content_icon">
            <img src="../assets/images/liquidityIcon1.png">
            <img src="../assets/images/liquidityIcon2.png">
          </div>
          <div class="myPositions_view2_content_name">
            <p>ETH/USDC</p> <!-- <i class="el-icon-arrow-down"></i> -->
            <p>Sushiswap Farm</p>
          </div>
          <div class="divider"><el-divider direction="vertical"></el-divider></div>
          <div class="myPositions_view2_content_content">
            <p>Stable LP NFT</p>
            <p>10 <span>USDC</span></p>
            <p>9.98 <span>USDT</span></p>
          </div>
          <div class="myPositions_view2_content_content margin_view">
            <p>Reward</p>
            <p>0 <span></span></p>
          </div>
          <div class="myPositions_view2_content_buttonBox">
            <div>Withdraw</div>
            <div>Claim</div>
          </div>
        </div>
      </div>

      <div class="myPositions_view2 view3">
        <div class="myPositions_view2_title">
          <div class="myPositions_view2_titleLfet">Risk Token</div>
        </div>
        <div class="myPositions_view2_content view2_content1">
          <div class="myPositions_view2_content_icon">
            <img src="../assets/images/liquidityIcon1.png">
            <img src="../assets/images/liquidityIcon2.png">
          </div>
          <div class="myPositions_view2_content_name">
            <p>rtETH/USDT</p> <!-- <i class="el-icon-arrow-down"></i> -->
            <p>Sushiswap Farm</p>
          </div>
          <div class="divider"><el-divider direction="vertical"></el-divider></div>
          <div class="myPositions_view2_content_content margin_view">
            <p>Amount</p>
            <p>5</p>
          </div>
          <div class="myPositions_view2_content_content margin_view">
            <p>Reward</p>
            <p>0.2 <span>ETH/USDT</span></p>
          </div>
          <div class="myPositions_view2_content_buttonBox">
            <div>Withdraw</div>
            <div>Claim</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "myPositions",
  data(){
    return{

    }
  },
  methods:{
    goRoute(){
      this.$router.push('/liquidity');
    }
  }
}
</script>

<style lang="scss" scoped>
  #myPositions{
    margin-top: 148px;
    margin-bottom: 180px;
    width: 1110px;
    height: 754px;
    background-image: url("../assets/images/content_background.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 60px 63px 81px 63px;
    display: flex;
    justify-content: center;
    .myPositions_view1{
      display: flex;
      height: 101px;
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      .myPositions_view1_child{
        width: 320px;
        margin-left: 12px;
        background: radial-gradient(325.51% 1125.3% at 160.7% 416.33%, rgba(255, 255, 255, 0.39) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #2E4E50, #2E4E50);
        box-shadow: 0px 14px 18px rgba(7, 9, 48, 0.06);
        border-radius: 8px;
        div:nth-of-type(1){
          padding-top: 20px;
          padding-left: 21px;
        }
        div:nth-of-type(2){
          margin-top: 11px;
          padding-left: 21px;
          font-weight: 500;
          font-size: 24px;
          color: #FFFFFF;
          .company{
            font-size: 16px;
            margin-left: 5px;
            line-height: 27px;
          }
          display: flex;
          .myPositions_view1_childRight{
            margin-left: auto;
            margin-right: 18px;
            width: 91px;
            height: 30px;
            background: linear-gradient(180deg, #AAFFA9 0%, #11FFBD 100%);
            box-shadow: 5px 8px 40px rgba(81, 255, 181, 0.5);
            border-radius: 8px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            color: #19435A;
            margin-top: -5px;
          }
        }
      }
      .myPositions_view1_child:nth-of-type(1){
        margin-left: 0;
      }
    }
    .myPositions_view2{
      margin-top: 50px;
      .myPositions_view2_title{
        display: flex;
        font-family: DM Sans;
        font-style: normal;
        .myPositions_view2_titleLfet{
          font-weight: 500;
          font-size: 24px;
          line-height: 18px;
          color: #7A7A7A;
        }
        .myPositions_view2_titleRight{
          font-weight: normal;
          font-size: 18px;
          text-decoration-line: underline;
          color: #4BB68F;
          margin-left: auto;
          cursor:pointer;
        }
      }
      .myPositions_view2_content{
        height: 109px;
        background: #214749;
        border: 1px solid #045A27;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding: 0 35px 0 21px;
        .myPositions_view2_content_icon{
          img{
            width: 44px;
            height: 44px;
          }
          img:nth-of-type(2){
            margin-left: -9px;
          }
        }
        .myPositions_view2_content_name{
          margin-left: 18px;
          p:nth-of-type(1){
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            //line-height: 20px;
            color: #FFFFFF;
            i{
              font-size: 22px;
              color: #ABBCBD;
              margin-left: 3px;
            }
          }
          p:nth-of-type(2){
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            //line-height: 18px;
            text-decoration-line: underline;
            color: #658082;
            margin-top: 3px;
          }
        }
        .divider{
          //margin-left: 21px;
          margin-left: 38px;
        }
        .myPositions_view2_content_content{
          //margin-left: 63px;
          margin-left: 80px;
          font-family: DM Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          color: #B8D7D9;
          span{
            font-size: 16px;
            color: #658082;
          }
          p:nth-of-type(1){
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
          }
          p:nth-of-type(2){
            margin-top: 4px;
          }
        }
        //.view2_content2{
        //  margin-left: 60px;
        //  p:nth-of-type(1){
        //    margin-top: -28px;
        //  }
        //}
        .myPositions_view2_content_buttonBox{
          margin-left: auto;
          div:nth-of-type(1){
            width: 91px;
            height: 30px;
            background: linear-gradient(180deg, #AAFFA9 0%, #11FFBD 100%);
            box-shadow: 5px 8px 40px rgba(81, 255, 181, 0.5);
            border-radius: 8px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            color: #19435A;
          }
          div:nth-of-type(2){
            width: 91px;
            height: 30px;
            border: 1px solid #11FFBD;
            border-radius: 8px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            color: #11FFBD;
            margin-top: 10px;
          }
        }
        .margin_view{
          margin-top: -28px;
        }
      }
      .view2_content1{
        margin-top: 16px;
      }
      .view2_content2{
        margin-top: 20px;
      }
    }
  }
</style>
<style>
  .el-divider--vertical{
    height: 76px;
    background-color: #F9F9F9;
  }
</style>

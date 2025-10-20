<script setup lang="ts">

import DefaultHeader from "@/components/defaultHeader.vue";
import BaoHeader from "@/components/bao-header.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {onMounted, reactive,ref} from "vue";
import {customNavigateTo} from "@/utils/customNavigate";
import {httpRequest} from "@/utils/request";
import { onLoad } from '@dcloudio/uni-app'
const sicks = ref([

])
const product = ref({

})

onLoad((options)=>{
  httpRequest({
    method: "get",
    url:`product/get?id=${options.id}`,
  }).then((res)=>{
    product.value= res;
    sells[0].name=res.premium;
    sells[1].name=res.insureAge;
    sells[2].name=res.term;
    sicks.value=res.productFeature || []
    console.log(sicks.value,'sicks.value')
  })
})





const sells = reactive([
  {
    name: 9.9,
    unit: '/份',
    text: "基本保险金额"
  }, {
    name: "5天至75",
    unit: '周岁',
    text: "投保年龄"
  }, {
    name: "终身",
    unit: '年',
    text: "保障期间"
  },
])


function toPay(){
  customNavigateTo({
    url: `/pages/Bao/pay-detail?id=${product.value.id}&name=${product.value.productName}&price=${product.value.premium}`,
  })
}
</script>

<template>
  <div class="bao-container">
    <bao-header :label=" product.productName " label-weight="400"></bao-header>
    <div class="content">
      <div class="header-pro">
        <AssetsImage path="/static/guo-w.png" width="25px" height="23px" style="margin-right: 5px;"></AssetsImage>
        <span class="title">{{ product.productName }}</span>
      </div>
      <div class="pro-content">
        <div class="pro-title title">
          {{ product. productName}}
        </div>
        <div class="pro-text">
          <div style="flex:1">
            <div style="text-align: center">
              <span class="t1">{{ product.coverageAmount/10000 }}</span>
              <span class="t2">万</span>
            </div>
            <div class="t3">
              <div>
                最高赔付{{ product.coverageAmount/10000 }}万
              </div>
              <div style="margin-top: 4px;">
                覆盖120种疾病
              </div>
            </div>
            <div class="t4">高额保障</div>
          </div>
          <div style="flex:1">
            <div style="text-align: center">
              <span class="t1"> {{ product.hospitalNumber }}</span>
              <span class="t2">万</span>
            </div>
            <div class="t3">
              <div>
                {{ product.hospitalNumber }}万海外医疗

              </div>
              <div style="margin-top: 4px;">
                70+家国际医院直赔
              </div>
            </div>
            <div class="t4">高额保障</div>
          </div>
          <div style="flex:1">
            <div style="text-align: center">
              <span class="t1">{{product.description}}</span>

            </div>
            <div class="t3">
              <div>
                含重大疾病

              </div>
              <div style="margin-top: 4px;">
                及前沿治疗技术
              </div>
            </div>
            <div class="t4">高额保障</div>
          </div>
        </div>
      </div>
      <div class="sells-context">
        <div class="pro-sells">
          <div v-for="item in sells" style="flex:1">
            <div style="text-align: center"><span class="t1">{{ item.name }}</span> <span
                class="t2">{{ item.unit }}</span></div>
            <div class="t5" style="text-align: center">{{ item.text }}</div>
          </div>
        </div>
        <div class="sicks-list">
          <div v-for="(item,index) in sicks" :key="index" :style="{marginBottom:index==sicks.length-1?0:'12px'}">
            <div class="sick-name">{{item.title}}</div>
            <div class="sick-text">{{item.detail}}</div>
          </div>

        </div>
         <div style="margin-top: 12px">
           <img :src="product.img1" alt="" width="100%">
           <img :src="product.img2" alt="" width="100%">
         </div>
      </div>
      <div class="text-box">
        <div class="sick-name">保障说明</div>
        <div style="margin-top: 12px;font-size: 14px;color: #333">
           <div>{{product.guaranteeExplanation}}</div>
        </div>
      </div>
      <div class="text-box">
        <div class="sick-name">健康状况告知义务</div>
        <div style="margin-top: 12px;font-size: 14px;color: #333">
         {{product.obligationDisclose}}

        </div>
      </div>
      <div class="text-box sick-name" style="font-size: 16px;font-weight: 600;padding: 14px 12px">
        保障金额:{{product.coverageAmount/10000}}万
      </div>
<!--      <div class="text-box">-->
<!--        <div class="sick-name">产品特色</div>-->
<!--        <div style="margin-top: 12px;font-size: 14px;color: #333">-->
<!--          刘女士，30周岁，2020年投入该保险，2022年经当地三甲医院查出乳腺癌，获赔1100万元。-->
<!--          注：本产品使用条款为“中国保险保障基金有限责任公司”终身险种（互联网）（报文文件编号〔2025〕385号）产品条款文字编号为中国保险保障基金有限责任公司〔2025〕终身险种171号，如您对本产品有异议，请联系国宝通在线客服咨询。-->
<!--          本产品由国宝通负责代销。-->
<!--        </div>-->
<!--      </div>-->
      <div class="text-box">
        <div class="sick-name">投保须知</div>
        <div style="margin-top: 12px;font-size: 14px;color: #333">
          {{product.liabilityExemption}}
        </div>
      </div>
    </div>

    <div class="flex-box flex-space-between footer">
      <div style="color: #000">
        <span style="font-size: 24px;font-weight: 600;">{{ product.premium }}</span>
        <span style="font-size:14px;">元</span>
      </div>
      <div class="watch-btn" @tap="toPay">
        立即投保
      </div>
    </div>
    <div style="height: 100px;width: 100%;flex-shrink: 0">
      <span>&nbsp;</span>
    </div>
  </div>
</template>

<style scoped lang="scss">

page{
  background-color: #f7f7f7;
}
.content {
  padding: 0 16px;
  flex: 1;
}

.bao-container {
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  background-size: 100% 100%;
  background-image: url("/static/baobg.png");
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: PingFang SC;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #513106;
}

.header-pro {
  margin-top: 12px;
  padding: 6px 8px;
  background: linear-gradient(90deg, rgba(224, 182, 114, 1) 0%, rgba(255, 240, 215, 0.8) 100%);


  border-radius: 2px;
  display: flex;
  align-items: center;
}

.pro-title {
  background: linear-gradient(90deg, #FFE1BB 0%, #CFA564 100%);

  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

}

.pro-content {
  background: linear-gradient(90deg, #FFE7C0 0%, #E7C389 100%);
  margin-top: 12px;
  padding-bottom: 12px;
  border-radius: 7px;
}


.pro-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}

.t1 {
  font-family: PingFang SC;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(138, 87, 39, 1)
}

.t2 {
  font-family: PingFang SC;
  font-weight: 500;
  font-style: Medium;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(138, 87, 39, 1)
}

.t3 {
  margin: 7px 0;
  font-family: PingFang SC;
  font-weight: 500;
  font-style: Medium;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #000000;

}

.t4 {
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #97754B;

}

.sells-context {
  border-radius: 7px;
  margin-top: 12px;
  background-color: #fff;
}

.pro-sells {
  background: linear-gradient(180deg, #E2BD86 0%, rgba(255, 255, 255, 0) 144.59%);
  display: flex;
  border-radius: 7px;
  padding: 8px 0;
}

.t5 {
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: -0.3px;
  margin-top: 15px;
  color: #000;
}
.sicks-list{
  padding:12px 8px;
}
.sick-name{
  font-family: PingFang SC;
  font-weight: 600;
  font-style: Semibold;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: -0.3px;
  color: #241804;

}
.sick-text{
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: -0.3px;
  color: #A58A78;
  margin-top: 6px;
}
.text-box{
  border-radius: 7px;
  padding: 12px;
  background-color: #fff;
  margin-top: 12px;
}

.footer{
  background-color: #fff;
  padding: 14px 17px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;

}
.watch-btn {
  border-radius: 200px;
  background: #DBB077;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fff;
  padding:11px 32px
}
</style>

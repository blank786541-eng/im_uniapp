<template>
  <view class="mask" :style="{opacity: modelValue ? 1 : 0, pointerEvents: modelValue ? 'all' : 'none'}">
    <view class="contain" :style="{height: height, transform:modelValue ? 'none' : 'translateY(100%)'}">
      <view class="gs-picker">
        <view class="btnTeam">
          <view class="close btn" @click="closeComponent">取消</view>
          <view class="confirm btn" @click="confirm()">确定</view>
        </view>
        <view class="body">
          <picker-view class="picker-view" :value="value" @change="bindChange">
            <picker-view-column>
              <view class="item" v-for="(item,index) in yearList" :key="index">{{ item }}</view>
            </picker-view-column>
            <span class="text">年</span>
            <picker-view-column>
              <view class="item" v-for="(item,index) in monthList" :key="index">{{ item }}</view>
            </picker-view-column>
            <span class="text">月</span>
            <picker-view-column>
              <view class="item" v-for="(item,index) in dayList" :key="index">{{ item }}</view>
            </picker-view-column>
            <span class="text">日</span>
          </picker-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive} from "vue";
const props = withDefaults(
    defineProps<{
      modelValue: boolean,
      date?: Date | string,
      yearRange?: number[],
      height?: string,
    }>(), {
      modelValue: false,
      date: new Date(),
      yearRange: [100, 100],
      height: '50%'
    }
)
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const isPropsDateNotNull = computed(() => {
  if (props.date) {
    return props.date
  } else {
    return new Date()
  }
})

// 当前选中的日期
const selectDate = reactive({
  year: isPropsDateNotNull.value.getFullYear(),
  month: isPropsDateNotNull.value.getMonth() + 1,
  day: isPropsDateNotNull.value.getDate(),
})


const value = computed(() => {
  return [100 - (new Date().getFullYear() - selectDate.year), 0, selectDate.month - 1, 0, selectDate.day - 1]
})



const yearList = computed(() => {
  let year = new Date().getFullYear()
  let years = [year]
  for (let i = 1; i <= props.yearRange[0]; i++) {
    years.unshift(year - i)
  }
  for (let i = 1; i <= props.yearRange[1]; i++) {
    years.push(year + i)
  }
  return years
})

const dayList = computed(() => {
  let days = []
  for (let i = 1; i <= new Date(selectDate.year, selectDate.month, 0).getDate(); i++) {
    days.push(i)
  }
  return days
})

const bindChange = (e) => {
  selectDate.year = (new Date().getFullYear() - props.yearRange[1] + e.detail.value[0])
  selectDate.month = e.detail.value[2] + 1
  selectDate.day = e.detail.value[4] + 1
}

const confirm = () => {
  let date = new Date(selectDate.year, selectDate.month - 1, selectDate.day).format('yyyy-MM-dd')
  emit('confirm', date)
  emit('update:modelValue', false)
}

const closeComponent = () => {
  emit('close')
  emit('update:modelValue', false)
}

const emit = defineEmits(['confirm', 'close', 'update:modelValue'])


onMounted(()=>{
  console.log(props);
})
</script>

<style lang="less" scoped>

.mask {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  background: #00000099;
  z-index: 999;
  transition: 0.3s ease-in-out;
}

.contain {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #f5f5f5;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 15px 15px 0 0;
  transition: 0.3s ease-in-out;
}

.gs-picker {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.gs-picker .btnTeam {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px 0;
}

.btnTeam > .btn {
  padding: 6px 0px 6px 2px;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
}

.btn.close {
  color: #707070;
}

.btn.confirm {
  color: #000000;
}

.gs-picker .body {
  padding: 0 12px;
  margin-top: 24px;
  display: flex;
  overflow: scroll;
  position: relative;
  height: 100%;
  display: flex;
}

.body .column {
  text-align: center;
}

.body .column .text {
  font-size: 20px;
  padding: 12px;
  color: aqua;
}

.gs-picker .body .picker-view {
  flex: 1;
  text-align: center;
}

.picker-view .item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 18px;
}


::v-deep .uni-picker-view-wrapper {
  align-items: center;
}

::v-deep .uni-picker-view-mask {
  background-image: linear-gradient(180deg,
  #f5f5f5f2,
  #f5f5f599,), linear-gradient(0deg,
  #f5f5f5f2,
  #f5f5f599,);
}

::v-deep .uni-picker-view-indicator::before, .uni-picker-view-indicator::after {
  border: none;
}

::v-deep .uni-picker-view-wrapper .text {
  color: #afafaf;
  font-size: 14px;
}
</style>

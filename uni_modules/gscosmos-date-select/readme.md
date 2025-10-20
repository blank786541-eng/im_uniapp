# gscosmos-date-select
>GSCOSMOS·一款支持VUE3带弹出效果的日期选择器

## Options 参数说明
| 参数   | 类型 |     必填 |     说明 |     默认值 |
| :----- | :--: | -------: | :--: | -------: |
| modelValue |  boolean  | 是 |  控制是否弹出日期选择器  |  |
| date |  Date,string | 否 |  当前选择的日期  | new Date() |
| height |  string  | 否 |  日期选择器的高度  | 50% |
| yearRange |  number[]  | 否 |  可选年份范围[今年前X年，今年后X年]  | [100,100] |

## Events 回调

| 回调名称   | 说明 |     返回参数类型 |  返回参数说明|
| :----- | :--: | -------: | :--: | -------: |
| close |  取消时的回调函数  | NULL |
| confirm |  确定时的回调函数  | string |  当前选中的日期，格式为yyyy-MM-dd|



## 使用说明
```vue
<template>
	<view @click="dateSelectVisiable.value = true">
		点我选择日期 {{ date }}
	</view>
	<view>
		<gscosmos-date-select v-model="dateSelectVisiable" :date="date" @confirm="getDate" @close="close"></gscosmos-date-select>
	</view>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";

const date:Ref<string> = ref()
const dateSelectVisiable:Ref<boolean> = ref(true)

const getDate = (value) => {
	console.log('确认时的回调函数');
	date.value = value
}

const close = () => {
	console.log('取消时的回调函数');
}
</script>
```
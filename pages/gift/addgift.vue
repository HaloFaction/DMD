<template>
	<view class="uni-group" style="display: flex;flex-direction: column;">
		
		<view class="cu-form-group">
			<view class="title">装备名字</view>
			<input placeholder="" v-model="name" style="border: 1px solid;"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">装备部位</view>
			<input type="text" v-model="position" style="border: 1px solid;"/>
		</view>
		<view class="cu-form-group">
			<view class="title">装备描述</view>
			<input type="text" v-model="remark" style="border: 1px solid;"/>
		</view>
		<view class="cu-form-group">
			<view class="title">掉落boss</view>
			<input type="text" v-model="boss" style="border: 1px solid;"/>
		</view>
		<view class="cu-form-group">
			<view class="title">最低价格</view>
			<input type="number" v-model="price" style="border: 1px solid;"/>
		</view>
		<button class="cu-btn lg bg-blue" @click="submit()">提交</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				position:'',
				remark:'',
				boss:'',
				price:''
			}
		},
		methods:{
			submit(){
				const db = uniCloud.database()
				db.collection('giftType').add([{
						name:this.name,
						position:this.position,
						remark:this.remark,
						boss:this.boss,
						price:this.price
					}]).then((res) => {
						uni.showToast({
							title: '新增成功'
						})
					})
					.catch((err) => {
						uni.showModal({
							content: err.message || '新增失败',
							showCancel: false
						})
					})
					.finally(() => {
						
					})
				
			}
		}
	}
</script>

<style>
</style>

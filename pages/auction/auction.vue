<template>
	<view style="margin: 20upx;padding-top: 60upx;">
		<view class="uni-title" style="text-align: center;margin-bottom: 20upx;"><h4>当前车次一览表</h4></view>
		<view style="display: flex;flex-direction: column;">
			<view class="c-table padding">
				<view class="c-td">编号</view><view class="c-td">开车时间</view><view class="c-td">房间密码</view><view class="c-td">操作</view>
			</view>
			<view class="c-table" v-for="(item,index) in list" :key=index>
				<view class="c-td">{{item.name}}</view>
				<view class="c-td">{{item.time | formatDate}}</view>
				<view class="c-td">{{item.password}}</view>
				<view class="c-td">
					<button class="cu-btn round lg bg-green" @click="addVictory(item.number)">管理</button>
					<button class="cu-btn lg round bg-yellow" style="margin-left: 40upx;" @click="shutdown(item._id)">结束</button>
					<button class="cu-btn lg round bg-red" @click="deleteBoss(item._id)">删除</button>
				</view>
			</view>
		</view>
		<!-- <uni-table style="text-align: center;" border>
			
			<uni-tr>
				<uni-th>编号</uni-th>
				<uni-th>开车时间</uni-th>
				<uni-th>操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item,index) in list">
				<uni-td>{{item.name }}</uni-td>
				<uni-td>{{item.time | formatDate}}</uni-td>
				<uni-td >
					
				</uni-td>
			</uni-tr>
		</uni-table> -->
		<view style="width: 100%;text-align: center;">
			<button class="cu-btn round lg bg-blue" @click="textpassword()">添加车次</button>
			<button class="cu-btn round lg bg-yellow" @click="showOrder()">{{order}}</button>
		</view>
		<uni-popup ref='popup' type="center">
			<view>房间密码:<input type="text" class="border bg-orange" v-model="password"/></view>
			<button class="bg-green margin-tb-sm" @click="addOrder()">确定</button>
		</uni-popup>
	</view>

</template>

<script>
	import {
		formatDate
	} from '@/common/date.js'
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				list: [],
				time: '12:01',
				order:'历史记录',
				password:''
			}
		},
		filters: {
			formatDate(time) {
				let date = new Date(time);
				return formatDate(date, ' hh:mm:ss');
			}
		},
		computed: {
			...mapState('app', ['appName']),
			...mapState('user', ['userInfo']),
			...mapState('error', ['logs'])
		},
		methods: {
			textpassword(){
				this.$refs.popup.open()
			},
			addOrder() {
				this.$refs.popup.close()
				const db = uniCloud.database()
				const number = this.list.length + 1
				var day=new Date()
				console.log(new Date().getTime())
				day=(day.getMonth()+1)+"月"+day.getDate()+"日"
				db.collection('boss').add([{
						number:this.userInfo.username+new Date().getTime().toString(),
						name:day+ "第" + number + "车",
						status: "1",
						password:this.password
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
						this.password=''
						this.getOrder()
					})

			},
			getOrder() {
				const db = uniCloud.database()
				db.collection('boss').where({
					status:'1'
				}).get().then((res) => {
					this.list = res.result.data
				})
			},
			addVictory(e){
				uni.navigateTo({
					url:'addVictory?no='+e
				})
			},
			shutdown(e){
				var _this = this
				uni.showModal({
					title:'提示',
					content:'是否确认关闭',
					success:function(res){							
						if(res.confirm){
							uni.showLoading({
								
							})
							const db = uniCloud.database()
							db.collection("boss").where({_id:e}).update({
								status:'0'
							})
							uni.hideLoading()
							_this.getOrder()
						}
					}
				})
			
			},
			showOrder(){
				if(this.order == '历史记录'){
				const db = uniCloud.database()
				db.collection('boss').where({
					status:'0'
				}).get().then((res) => {
					this.list = res.result.data
					this.order = '现有金团'
				})
				}else{
					this.order = '历史记录'
					this.getOrder()
				}
			},
			deleteBoss:function(e){
				var _this = this
				uni.showModal({
					title:'提示',
					content:'是否确认删除',
					success:function(res){							
						if(res.confirm){
							uni.showLoading({
								
							})
							const db = uniCloud.database()
							db.collection("boss").where({_id:e}).remove()
							uni.hideLoading()
							
						}
					}
				})
			}
		},
		onLoad() {
			this.getOrder()
		}
	}
</script>

<style>
	.c-table{
		display: flex;
		justify-content: space-around;
		margin-top: 20upx;
		
	}
	.c-td{
		
		text-align: center;
		width: 30%;
	}
</style>

<template>
	<view style="width: 100%;height: 100%;display: flex;justify-content: space-around;" class="uni-container">
		<uni-table  emptyText="没有更多数据" border>
			<uni-tr>
				<uni-th>账户名</uni-th>
				<uni-th>使用人</uni-th>
				<uni-th>申请创建角色名</uni-th>
				<uni-th>职业</uni-th>
				<uni-th>操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item,index) in list" :key=index>
				<uni-td>{{item.user}}</uni-td>
				<uni-td>{{item.username}}</uni-td>
				<uni-td>{{item.name}}</uni-td>
				<uni-td>{{item.occu}}</uni-td>
				<uni-td>
					<button class="cu-btn round sm bg-green" @click="pass(item._id)">通过</button>
					<button class="cu-btn round sm bg-red" @click="refuse(item._id)">拒绝</button>
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		methods:{
			showhist:function(){
				const db=uniCloud.database()
				db.collection('xglb').where({
					status:"1"
				}).get().then((res)=>{
					console.log(res.result.data)
					this.list=res.result.data
				})
			},
			pass:function(e){
				var _this=this
				const db=uniCloud.database()
				db.collection('xglb').where({
					_id:e
				}).update({
					status:"0"
				}).then(
					uni.showToast({
						title:'审核通过',
						icon:"success"
					})
					
				)
				
				_this.showhist()
				
			},
			refuse:function(e){
				var _this=this
				const db=uniCloud.database()
				db.collection('xglb').doc(e).remove().then(
					uni.showToast({
						title:'拒绝请求',
						icon:'none'
					})
					
				)
					_this.showhist()
				
			}
		},
		onLoad(){
			this.showhist()
		}
	}
</script>

<style>
</style>

<template>
	<view style="display:flex;flex-direction:row;justify-content: space-around;">
		<view v-if="giftshow">
			
				<table>
					<tr>
						<th>装备名称</th>
						<th>装备位置</th>
						<th>属性</th>
						<th>添加</th>
					</tr>
				
					<tr v-for="(item,index) in giftType" :key=index>
						 
						<td>{{item.name}}</td>
						<td>{{item.position}}</td>
						<td>{{item.remark}}</td>
						<td><button class="cu-btn sm bg-blue " @click="addGift(item)">添加</button></td>
						
					</tr>
					
				</table>
			<view class="padding flex flex-direction"><button class="cu-btn bg-red margin-tb-sm lg" @click="completeAdd()">返回</button></view>
			
		</view>
		<view v-for="(item,index) in list" :key=index style="text-align: center;"  v-else>
			<view>{{item.name}}</view>
			<button class="cu-btn sm bg-blue" @click="addVictory(item.name)">添加掉落</button>
			<view style="display: flex;flex-direction: column;">
			<view class="padding radius text-center light bg-orange " v-for="(it,index) in item.gift" :key=index  style="margin: 10px;" >
				<view>{{it.giftno}}</view>
				<view>当前价格：{{it.price}}</view>
				<view>出价人:{{it.winner}}</view>
				<view>最后出价时间：{{it.time | formatDate}}</view>
				<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">历史价格</button>
				<view v-if="it.status == 1 ? true : false"><button class='cu-btn sm bg-red' @click="deleteGift(it._id)">删除</button></view>
				<view v-else>
					<view>拍卖已结束</view>
				</view>
			</view>
			</view>
			<view><button class="cu-btn sm bg-green" style="margin-top: 10upx;" @click="stop(item.name)">结束拍卖</button></view>
		</view>
		<uni-popup ref="pricehist" type="top">
			<view style="background-color: white;width: 100%;height: 100%;display: flex;justify-content: space-around;font-size: 16px;">
				<view>
					<button @click="shutup()">关闭</button>
				
				<table>
					<tr>
						<th>角色名</th>
						<th>出价</th>
						<th>出价时间</th>
					</tr>
					
					<tr v-for="(item,index) in ph">
						<td>{{item.name}}</td>
						<td>{{item.price}}</td>
						<td>{{item.time | formatDate}}</td>
					</tr>
					
				</table>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		formatDate
	} from '@/common/date.js'
	export default{
		data(){
			return {
				list:[
					{
						name:"余晖",
						gift:[]
					},
					{
						name:"宓桃",
						gift:[]
					},
					{
						name:"武雪散",
						gift:[]
					},
					{
						name:"猿飞",
						gift:[]
					},
					{
						name:"哑头陀",
						gift:[]
					},
					{
						name:"岳琳",
						gift:[]
					}
				],
				giftType:[],
				giftshow:false,
				addgiftlist:[],
				boss:'',
				ph:''
				
			}
		},
		filters: {
			formatDate(time) {
				if(time != '无'){
				let date = new Date(time);
				return formatDate(date, ' hh:mm:ss');
				}
				else{
					return time;
				}
			}
		},
		methods:{
			getCarInfo(){
				this.giftshow=false
				this.list[0].gift=[]
				this.list[1].gift=[]
				this.list[2].gift=[]
				this.list[3].gift=[]
				this.list[4].gift=[]
				this.list[5].gift=[]
				const db = uniCloud.database()
				db.collection('gift').where({
					number:this.number
				}).get().then((res) => {
					
					const data=res.result.data;
				
					for(var i=0;i<data.length;i++){
						if(data[i].boss == '余晖'){
							this.list[0].gift.push(data[i])
						}else if(data[i].boss == '宓桃'){
							this.list[1].gift.push(data[i])
						}
						else if(data[i].boss == '武雪散'){
							this.list[2].gift.push(data[i])
						}
						else if(data[i].boss == '猿飞'){
							this.list[3].gift.push(data[i])
						}
						else if(data[i].boss == '哑头陀'){
							this.list[4].gift.push(data[i])
						}
						else if(data[i].boss == '岳琳'){
							this.list[5].gift.push(data[i])
						}
					}
					this.time = new Date().getTime()
					
					
				})
			},
			addVictory(e){
				this.boss=e
				const db = uniCloud.database()
				db.collection('giftType').where({
					boss:new RegExp(e+'?')
				}).get().then((res) => {				
					this.giftType=res.result.data
					this.giftshow=true
				})
			},
			addGift(e){
				const db = uniCloud.database()
				uni.showLoading({
					
				})
				var user=['0']
				db.collection('gift').add([{
					number:this.number,
					boss:this.boss,
					giftno:e.name,
					price:e.price,
					remark:e.remark,
					status:'1',
					winner:'无',
					time:'无',
					timestatus:false,
					isMe:false,
					hasMe:false,
					user:user,
					puser:user
				}]).then((res)=>{
					uni.hideLoading()
					uni.showToast({
						title:'添加'+e.name+'成功',
						icon:'success',
						duration:1000
					})
				})
				
			
				
			},
			completeAdd(){
				var _this=this
				// uni.showLoading({
					
				// })
				// setTimeout(function(){
				// 	uni.hideLoading()
					
				// },2000)
				_this.getCarInfo()
				
			},
			deleteGift(e){
				var _this=this
				uni.showModal({
					title:'提示',
					content:'是否确认删除',
					success:function(res){							
						if(res.confirm){
							const db = uniCloud.database()
							db.collection("gift").doc(e).remove().then((res) =>{
								uni.showToast({
									title:'删除成功'
								})
								
							})
							_this.getCarInfo()
						}
					}
				})
				
				
			},
			stop(e){
				var _this=this
				const db = uniCloud.database()
				uni.showLoading({
					
				})
				if(e == '余晖'){
					
					for(var i=0;i<this.list[0].gift.length;i++){
					
						db.collection("gift").where({_id:this.list[0].gift[i]._id}).update({
							status:'0'
						})
					}
					
				}else if(e == '宓桃'){
					
					for(var i=0;i<this.list[1].gift.length;i++){
						db.collection("gift").where({_id:this.list[1].gift[i]._id}).update({
							status:'0'
						})
					}
					
				}else if(e == '武雪散'){
					
					for(var i=0;i<this.list[2].gift.length;i++){
						db.collection("gift").where({_id:this.list[2].gift[i]._id}).update({
							status:'0'
						})
					}
					
					
				}else if(e == '猿飞'){
					for(var i=0;i<this.list[3].gift.length;i++){
						db.collection("gift").where({_id:this.list[3].gift[i]._id}).update({
							status:'0'
						})
					}
					
				}else if(e == "哑头陀"){
					
					for(var i=0;i<this.list[4].gift.length;i++){
						db.collection("gift").where({_id:this.list[4].gift[i]._id}).update({
							status:'0'
						})
					}
					
					
				}else if(e == "岳琳"){
					for(var i=0;i<this.list[5].gift.length;i++){
						db.collection("gift").where({_id:this.list[5].gift[i]._id}).update({
							status:'0'
						})
					}
					
					
					
				}
				setTimeout(()=>{
					uni.hideLoading()
					_this.getCarInfo()
				},1000)
			},
			showhist:function(e){
				const db=uniCloud.database()
				db.collection('record').where({
					giftno:e
				}).orderBy("time","desc").get().then((res)=>{
					console.log(res.result.data)
					this.ph=res.result.data
					this.$refs.pricehist.open()
				})
			},
			shutup:function(){
				this.$refs.pricehist.close()
			}
		},
		onLoad(e){
			this.number = e.no,
			this.getCarInfo()
		}
	}
</script>

<style>
</style>

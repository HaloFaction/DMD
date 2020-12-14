<template>
    <scroll-view style="padding: 15px;box-sizing: border-box;">
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
		<view >
		<view>
			<view class="text-center margin-tb-sm"><h2>【念破辛哥团】内测系统公告</h2></view>
			<view style="text-align: center;">起拍价：散件5K 牌子1w 武器2w 精简3W 特效武器腰坠5w 挂件1w 车10w 小铁1000 大铁500万  曳影剑碎片10W 蓬莱道具20W</view>
			<view style="text-align: center;">拍卖规则：起拍后15分钟内无人继续出价则结束竞拍，p后不可再进行出价</view>
			<view style="text-align: center;">系统目前内测中，还有诸多不完善的地方，敬请谅解</view>
		</view>
		<view style="margin-top: 20upx;">
			<view style="width: 100%;text-align: center;"><h2>请选择您的团队：</h2></view>
			<view class="c-table">
				<view class="c-td">团队名</view>
				<view class="c-td">开车时间</view>
				<view class="c-td">操作</view>
			</view>
			<view v-for="(item,index) in list" :key=index class='c-table'>
				<view class="c-td">{{item.name}}</view>
				<view class="c-td">{{item.time | formatDate}}</view>
				<view class="c-td"><button class="cu-btn round  bg-blue" @click="sale(item)">进入拍卖</button></view>
			</view>
		</view>
		</view>
		<uni-popup ref='popup' type="center">
			<view class="padding ">请输入房间密码:<input type="text" class="border bg-orange uni-input-border" v-model="Upassword"/></view>
			<view class="text-center"><button class="bg-green margin-tb-sm cu-btn lg" @click="confirm()">确定</button></view>
		</uni-popup>
    </scroll-view>
</template>

<script>
	import {
		formatDate
	} from '@/common/date.js'
	import {
		mapMutations,
		mapState
	} from 'vuex'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
    export default {
		components:{uniCollapse,uniCollapseItem},
        data() {
            return {
				show:false,
				list:[],
				number:'',
				password:'',
				Upassword:''
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
		computed: {
			...mapState('app', ['appName']),
			...mapState('user', ['userInfo']),
			...mapState('error', ['logs'])
		},
        onLoad() {
			this.getOrder()
			console.log("BUG反馈邮箱地址530908739@qq.com")
		
		},
		
        methods: {
			
			getOrder() {
				const db = uniCloud.database()
				db.collection('boss').where({
					status:'1'
				}).get().then((res) => {
					this.list = res.result.data
				})
			},
			sale:function(e){
				this.number = e.number,
				this.password = e.password
				this.$refs.popup.open()	
			},
			confirm:function(){
				if(this.Upassword == this.password){
					uni.setStorage({
						key:"username",
						data:this.userInfo.username
					})
					uni.setStorage({
						key:'number',
						data:this.number
					})
					uni.navigateTo({
						url:'./groupInfo'
					})
					this.$refs.popup.close()
				}else{
					uni.showToast({
						title:'房间密码不正确',
						icon:'none',
						duration:2000
					})
				}
			}
		}
    }
</script>

<style>
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}
	/* #endif */
	.data-list{
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-bottom: 20px;
	}
	.data-info{
		width: 50%;
		text-align: center;
	}
	.c-table{
		display: flex;
		justify-content: space-around;
		margin-top: 20upx;
	}
	.c-td{
		font-size: 16px;
		text-align: center;
		with: 30%;
	}
	.gilist{
		font-size: 16px;
		font-weight: bold;
		
	}
	.bg-light{
		background-color: #CCCCCC;
	}
	.orangeFont{
		color: #008B8B;
	}
	.bg-lightyellow{
		background-color: #F0EDCC;
	}
</style>

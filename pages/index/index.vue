<template>
    <scroll-view style="padding: 15px;box-sizing: border-box;">
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
		<view v-if="detail">
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
				<view class="c-td"><button class="cu-btn round  bg-blue" @click="sale(item.number)">进入拍卖</button></view>
			</view>
		</view>
		</view>
		<view v-else style="width: 100%;height: 100%;" class="padding ">
			<view style="text-align: center;font-size: 20px;">
				<view ><h2>参与竞拍角色:</h2>
				
				<picker :range="user" :value="index" @change="bindPickerChange">
					
					<view style="background-color: #F1F1F1;border: 1px solid #C8C7CC;height: 60upx;line-height: 60upx;width: 200px;display: inline-block;">{{user[index]}}</view>
					
				</picker>
				</view>
				<button class="cu-btn bg-blue lg margin-tb-sm" @click="addUser()">新建角色</button>
			</view>
			
			<view style="text-align: center;">
				
			<button v-if="!this.showList1" class="cu-btn bg-blue round sm" @click="showListAgain(1)">余晖</button><button v-if="!this.showList2" class="cu-btn bg-blue round sm" @click="showListAgain(2)">宓桃</button><button v-if="!this.showList3" class="cu-btn bg-blue round sm" @click="showListAgain(3)">武雪散</button>
			<button v-if="!this.showList4" class="cu-btn bg-blue round sm" @click="showListAgain(4)">猿飞</button><button v-if="!this.showList5" class="cu-btn bg-blue round sm" @click="showListAgain(5)">哑头陀</button><button v-if="!this.showList6" class="cu-btn bg-blue round sm" @click="showListAgain(6)">岳琳</button>
			</view>
			<view style="display: flex;justify-content: space-around;"><view class="cuIcon-refresh" @click="refresh()" style="font-size: 20px;cursor: pointer;">刷新</view></view>
			<!-- #ifdef H5 -->
			<view style="display: flex;justify-content: space-around;overflow: auto;width: 100%;padding">	
				<view class="gilist margin-tb-sm" v-if="showList1">
					<view style="text-align: center;" >余晖</view>
					<view class="text-center"><view class="cuIcon-attentionforbid" @click="closeList(1)"></view></view>
					
					<view v-for="(it,index) in giftList[0].gift" :key="index" class="bg-light  margin-tb-sm " >
						<uni-collapse accordion="true" class="shadow shadow-lg shadow-warp">
							
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-if="it.hasMe" open >
						<view  :class="it.isMe?'bg-lightyellow':''" class="padding  " >
						
						<view class="text-center">{{it.position}}</view>
						<view class="text-center">{{it.remark}}</view>
						<view class="text-center">当前价格：{{it.price}}</view>
						<view class="text-center">出价人:{{it.winner}}</view>
						<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
						<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
						<view v-if="it.status == '1' ? true : false" class="margin-tb-sm text-center">						
							<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						<view v-else class="margin-tb-sm text-center">
							<view>拍卖已结束</view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						</view>
							</uni-collapse-item>
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-else>
							<view  :class="it.isMe?'bg-orange':''" class="padding  " >
							
							<view class="text-center">{{it.position}}</view>
							<view class="text-center">{{it.remark}}</view>
							<view class="text-center">当前价格：{{it.price}}</view>
							<view class="text-center">出价人:{{it.winner}}</view>
							<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
							<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
							<view v-if="it.status == 1 ? true : false" class="margin-tb-sm text-center">						
								<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
								<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
							</view>
							<view v-if="it.status == 0 ? true : false" class="margin-tb-sm text-center">
								<view>拍卖已结束</view>
								
							</view>
							</view>
								</uni-collapse-item>
						</uni-collapse>
					</view>
					
				</view>
				<view class="gilist margin-tb-sm" v-if="showList2">
					<view style="text-align: center;">宓桃</view>
					<view class="text-center"><view class="cuIcon-attentionforbid" @click="closeList(2)"></view></view>
					<view v-for="(it,index) in giftList[1].gift" :key="index" class="bg-light  margin-tb-sm " >
						<uni-collapse accordion="true" class="shadow shadow-lg shadow-warp">
							
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-if="it.hasMe" open>
						<view  :class="it.isMe?'bg-lightyellow':''" class="padding  " >
						
						<view class="text-center">{{it.position}}</view>
						<view class="text-center">{{it.remark}}</view>
						<view class="text-center">当前价格：{{it.price}}</view>
						<view class="text-center">出价人:{{it.winner}}</view>
						<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
						<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
						<view v-if="it.status == '1' ? true : false" class="margin-tb-sm text-center">						
							<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						<view v-else class="margin-tb-sm text-center">
							<view>拍卖已结束</view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						</view>
							</uni-collapse-item>
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-else>
							<view  :class="it.isMe?'bg-orange':''" class="padding  " >
							
							<view class="text-center">{{it.position}}</view>
							<view class="text-center">{{it.remark}}</view>
							<view class="text-center">当前价格：{{it.price}}</view>
							<view class="text-center">出价人:{{it.winner}}</view>
							<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
							<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
							<view v-if="it.status == 1 ? true : false" class="margin-tb-sm text-center">						
								<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
								<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
							</view>
							<view v-if="it.status == 0 ? true : false" class="margin-tb-sm text-center">
								<view>拍卖已结束</view>
								
							</view>
							</view>
								</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<view class="gilist margin-tb-sm" v-if="showList3">
					<view style="text-align: center;">武雪散</view>
				<view class="text-center">	<view class="cuIcon-attentionforbid" @click="closeList(3)"></view></view>
					<view v-for="(it,index) in giftList[2].gift" :key="index" class="bg-light  margin-tb-sm">
						<uni-collapse accordion="true" class="shadow shadow-lg shadow-warp">
							
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-if="it.hasMe" open >
						<view  :class="it.isMe?'bg-lightyellow':''" class="padding  " >
						
						<view class="text-center">{{it.position}}</view>
						<view class="text-center">{{it.remark}}</view>
						<view class="text-center">当前价格：{{it.price}}</view>
						<view class="text-center">出价人:{{it.winner}}</view>
						<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
						<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
						<view v-if="it.status == '1' ? true : false" class="margin-tb-sm text-center">						
							<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						<view v-else class="margin-tb-sm text-center">
							<view>拍卖已结束</view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						</view>
							</uni-collapse-item>
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-else >
							<view  :class="it.isMe?'bg-orange':''" class="padding  " >
							
							<view class="text-center">{{it.position}}</view>
							<view class="text-center">{{it.remark}}</view>
							<view class="text-center">当前价格：{{it.price}}</view>
							<view class="text-center">出价人:{{it.winner}}</view>
							<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
							<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
							<view v-if="it.status == 1 ? true : false" class="margin-tb-sm text-center">						
								<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
								<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
							</view>
							<view v-if="it.status == 0 ? true : false" class="margin-tb-sm text-center">
								<view>拍卖已结束</view>
								
							</view>
							</view>
								</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<view class="gilist margin-tb-sm" v-if="showList4">
					<view style="text-align: center;">猿飞</view>
					<view class="text-center"><view class="cuIcon-attentionforbid" @click="closeList(4)"></view></view>
					<view v-for="(it,index) in giftList[3].gift" :key="index" class="bg-light  margin-tb-sm">
						<uni-collapse accordion="true" class="shadow shadow-lg shadow-warp">
							
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-if="it.hasMe" open>
						<view  :class="it.isMe?'bg-lightyellow':''" class="padding  " >
						
						<view class="text-center">{{it.position}}</view>
						<view class="text-center">{{it.remark}}</view>
						<view class="text-center">当前价格：{{it.price}}</view>
						<view class="text-center">出价人:{{it.winner}}</view>
						<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
						<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
						<view v-if="it.status == '1' ? true : false" class="margin-tb-sm text-center">						
							<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						<view v-else class="margin-tb-sm text-center">
							<view>拍卖已结束</view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						</view>
							</uni-collapse-item>
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-else>
							<view  :class="it.isMe?'bg-orange':''" class="padding  " >
							
							<view class="text-center">{{it.position}}</view>
							<view class="text-center">{{it.remark}}</view>
							<view class="text-center">当前价格：{{it.price}}</view>
							<view class="text-center">出价人:{{it.winner}}</view>
							<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
							<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
							<view v-if="it.status == 1 ? true : false" class="margin-tb-sm text-center">						
								<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
								<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
							</view>
							<view v-if="it.status == 0 ? true : false" class="margin-tb-sm text-center">
								<view>拍卖已结束</view>
								
							</view>
							</view>
								</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<view class="gilist margin-tb-sm" v-if="showList5">
					<view style="text-align: center;">哑头陀</view>
				<view class="text-center">	<view class="cuIcon-attentionforbid" @click="closeList(5)"></view></view>
					<view v-for="(it,index) in giftList[4].gift" :key="index" class="bg-light margin-tb-sm">
						<uni-collapse accordion="true" class="shadow shadow-lg shadow-warp">
							
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-if="it.hasMe" open>
						<view  :class="it.isMe?'bg-lightyellow':''" class="padding  " >
						
						<view class="text-center">{{it.position}}</view>
						<view class="text-center">{{it.remark}}</view>
						<view class="text-center">当前价格：{{it.price}}</view>
						<view class="text-center">出价人:{{it.winner}}</view>
						<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
						<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
						<view v-if="it.status == '1' ? true : false" class="margin-tb-sm text-center">						
							<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						<view v-else class="margin-tb-sm text-center">
							<view>拍卖已结束</view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						</view>
							</uni-collapse-item>
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-else>
							<view  :class="it.isMe?'bg-orange':''" class="padding  " >
							
							<view class="text-center">{{it.position}}</view>
							<view class="text-center">{{it.remark}}</view>
							<view class="text-center">当前价格：{{it.price}}</view>
							<view class="text-center">出价人:{{it.winner}}</view>
							<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
							<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
							<view v-if="it.status == 1 ? true : false" class="margin-tb-sm text-center">						
								<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
								<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
							</view>
							<view v-if="it.status == 0 ? true : false" class="margin-tb-sm text-center">
								<view>拍卖已结束</view>
								
							</view>
							</view>
								</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<view class="gilist margin-tb-sm" v-if="showList6"> 
					<view style="text-align: center;">岳琳</view>
				<view class="text-center">	<view class="cuIcon-attentionforbid" @click="closeList(6)"></view></view>
					<view v-for="(it,index) in giftList[5].gift" :key="index" class="bg-light margin-tb-sm">
						<uni-collapse accordion="true" class="shadow shadow-lg shadow-warp">
							
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-if="it.hasMe" open>
						<view  :class="it.isMe?'bg-lightyellow':''" class="padding  " >
						
						<view class="text-center">{{it.position}}</view>
						<view class="text-center">{{it.remark}}</view>
						<view class="text-center">当前价格：{{it.price}}</view>
						<view class="text-center">出价人:{{it.winner}}</view>
						<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
						<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
						<view v-if="it.status == '1' ? true : false" class="margin-tb-sm text-center">						
							<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						<view v-else class="margin-tb-sm text-center">
							<view>拍卖已结束</view>
							<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
						</view>
						</view>
							</uni-collapse-item>
							<uni-collapse-item :title="it.giftno" class="shadow shadow-lg shadow-warp" :class="it.isMe?'orangeFont':''" v-else>
							<view  :class="it.isMe?'bg-orange':''" class="padding  " >
							
							<view class="text-center">{{it.position}}</view>
							<view class="text-center">{{it.remark}}</view>
							<view class="text-center">当前价格：{{it.price}}</view>
							<view class="text-center">出价人:{{it.winner}}</view>
							<view class="text-center" v-if="it.timestatus">出价倒计时:{{it.time }}秒</view>
							<view class="text-center" v-else>最后出价时间:{{it.time | formatDate}}</view>
							<view v-if="it.status == 1 ? true : false" class="margin-tb-sm text-center">						
								<view class="margin-tb-sm text-center" ><button class="cu-btn bg-blue sm" @click="sendPrice(it._id)">出价</button></view>
								<button class="cu-btn sm bg-blue margin-tb-sm" @click="showhist(it._id)">出价记录</button>
							</view>
							<view v-if="it.status == 0 ? true : false" class="margin-tb-sm text-center">
								<view>拍卖已结束</view>
								
							</view>
							</view>
								</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				
				<!-- #endif -->
			</view>
		</view>
		<uni-popup ref='popup' type="center">
			<view style="color: white;">角色名：</view><input type="text"  class="uni-input-border bg-cyan text-center" v-model="rolename"/>
			<view style="color: white;">职业：</view><picker :range="occuList" :value="occuIndex" @change="occuChange"><view class="round padding bg-cyan text-center">{{occuList[occuIndex]}}</view></picker>
			<button class="bg-green margin-tb-sm" @click="addRole()">确定</button>
		</uni-popup>
		<uni-popup ref="priceshow" type="center">
			<view style="display: flex;flex-direction: row;">
			<view style="text-align: center;">
			<view style="color: white;">您的价格：</view>
			<view style="display: flex;flex-direction: row;">
			<input type="number" class="uni-input-border bg-purple" style="width: 80px;color: white;" v-model="currentPriceW" />
			<view style="font-size: 20px;margin:10upx;color: white;">万</view>
			<input type="number" class="uni-input-border bg-purple" style="width: 80px;color: white;" v-model="currentPriceQ" maxlength="4"/>
			</view>
			<button class="bg-green margin-tb-sm" @click="addPrice()">确定</button>
			</view>
			<view class="uni-icons-closeempty" style="cursor: pointer;height: 30upx;color: white;" @click="closeprice()"></view>
			<view style="width: 200px;height: 200px;margin-left: 120upx;margin-top: 40upx;">
				<button @click="showp()"><h4>P</h4></button>
			</view>
			
			</view>
		</uni-popup>
		<uni-popup ref="pricehist" type="top">
			<button @click="shutup()">关闭</button>
			<view style="background-color: white;width: 100%;height: 100%;display: flex;justify-content: space-around;font-size: 16px;">
				<table>
					<tr>
						<th>角色名</th>
						<th>出价</th>
						<th>出价时间</th>
					</tr>
					
					<tr v-for="(item,index) in ph" >
						<td>{{item.name}}</td>
						<td>{{item.price}}</td>
						<td>{{item.time | formatDate}}</td>
					</tr>
					
				</table>
			</view>
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
				index: 0,
				rolename:'',
				occu:'',
				detail:true,
				giftList:[
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
				user:[],
				currentPriceW:'',
				currentPriceQ:'',
				giftid:'',
				showList1:true,
				showList2:true,
				showList3:true,
				showList4:true,
				showList5:true,
				showList6:true,
				carNumber:'',
				ph:[],
				occuType:[
					{
						name:"凌雪阁",
						// color:"DarkRed"
						cor:"lingxuege"
					},
					{
						name:"苍云",
						// color:"Coral"
						cor:"cangyun"
					},
					{
						name:"丐帮",
						// color:"SandyBrown"
						cor:"gaibang"
					},
					{
						name:"五毒",
						// color:"DodgerBlue"
						cor:"wudu"
					},
					{
						name:"万花",
						// color:"MediumPurple",
						cor:"wanhua"
					},
					{
						name:"蓬莱",
						// color:"LightGrey"
						cor:"penglai"
					},
					{
						name:"唐门",
						// color:"LightGreen"
						cor:"tangmen"
					},
					{
						name:"长歌",
						// color:"Aqua"
						cor:"changge"
					},
					{
						name:"藏剑",
						// color:"Khaki"
						cor:"cangjian"
					},
					{
						name:"霸刀",
						// color:"RoyalBlue",
						cor:"badao"
					},
					{
						name:"明教",
						// color:"Coral"
						cor:"mingjiao"
					},
					{
						name:"天策",
						// color:"OrangeRed"
						cor:"tiance"
					},
					{
						name:"少林",
						// color:"Goldenrod"
						cor:"shaolin"
					},
					{
						name:"纯阳",
						// color:"DeepSkyBlue"
						cor:"chunyang"
					},
					{
						name:"七秀",
						// color:"	HotPink"
						cor:"qixiu"
					},
					{
						name:"衍天宗",
						// color:"DarkOrchid"
						cor:"yantianzong"
					},
				],
				occuList:[
					"凌雪阁",
					"苍云",
					"丐帮",
					"五毒",
					"万花",
					"蓬莱",
					"唐门",
					"长歌",
					"藏剑",
					"霸刀",
					"明教",
					"天策",
					"少林",
					"纯阳",
					"七秀",
					"衍天宗"
				],
				occuIndex:0
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
			sale(e){
				this.getUser()
				this.carNumber = e
				this.detail = false
				this.getGift()
			},
			 getGift(){
				
				// this.$refs.priceshow.close()
				this.currentPriceQ = ''
				this.currentPriceW = ''
				this.giftList[0].gift=[]
				this.giftList[1].gift=[]
				this.giftList[2].gift=[]
				this.giftList[3].gift=[]
				this.giftList[4].gift=[]
				this.giftList[5].gift=[]
				const db = uniCloud.database()
				db.collection('gift').where({
					number:this.carNumber
				}).get().then((res) => {
					
				var	data=res.result.data;
					
					for(var i=0;i<data.length;i++){
						 if(data[i].user.indexOf(this.userInfo.username) != -1){
							 data[i].hasMe=true;
							
						}
						if(data[i].puser.indexOf(this.userInfo.username) != -1){
							data[i].status = '0'
						}
						if(data[i].winnerAccount == this.userInfo.username){
							data[i].isMe=true
						}
						if(data[i].time != '无' && (900000-parseInt(new Date().getTime()-data[i].time)) > 0){
						data[i].time=Math.floor((900000-parseInt(new Date().getTime()-data[i].time))/1000)
							data[i].timestatus = true
						}else if(data[i].time != '无' && (900000-parseInt(new Date().getTime()-data[i].time)) < 0){
							data[i].time = new Date(data[i].time).getTime()
							data[i].status = '0'
						}
						
						this.pushData(data[i])
						
					}
												
					
					 
				})
				
				
				
			},
			 pushData:function(e){
				if(e.boss == '余晖'){
					this.giftList[0].gift.push(e)
				}else if(e.boss == '宓桃'){
					this.giftList[1].gift.push(e)
				}
				else if(e.boss == '武雪散'){
					this.giftList[2].gift.push(e)
				}
				else if(e.boss == '猿飞'){
					this.giftList[3].gift.push(e)
				}
				else if(e.boss == '哑头陀'){
					this.giftList[4].gift.push(e)
				}
				else if(e.boss == '岳琳'){
					this.giftList[5].gift.push(e)
				}	
			},
			bindPickerChange: function(e) {
			          
			            this.index = e.target.value
			},
			occuChange:function(e){
					this.occuIndex = e.target.value
			},
			addUser(){
				this.$refs.popup.open()
			},
			getUser(){
				this.user=undefined
				this.user=new Array()
				
				if(this.userInfo.username!=undefined){
				const db = uniCloud.database()
				db.collection('xglb').where({
					user:this.userInfo.username
				}).get().then((res) => {
					var data=res.result.data
					for(var i=0;i<data.length;i++){
						this.user.push(data[i].occu+"-"+data[i].name)
					}
				
				})
				}else{
					uni.showToast({
						title:'获取角色列表失败，请点击刷新按钮',
						icon:'none'
					})
				}
			},
			addRole(){
				var _this=this
				var nickName=this.rolename.replace(/\s+/g, '')
				
				var han=/^[\u4e00-\u9fa5]+$/;
				if(!han.test(nickName)){
					uni.showToast({
						title:'仅允许输入汉字',
						icon:'none'
					})
					return
				}
				if(nickName == ''){
					uni.showToast({
						title:'输入为空',
						icon:"none"
					})
					return
				}
				const db = uniCloud.database()
				db.collection('xglb').where({
					name:nickName
				}).count().then(res=>{
					
					if(res.result.total == 0){
						db.collection('xglb').add([{
							user:this.userInfo.username,
							name:nickName,
							occu:this.occuList[_this.occuIndex],
							cor:this.occuType[_this.occuIndex].cor,
							status:'1',
							username:this.userInfo.email
						}]).then((res)=>{
							this.$refs.popup.close()
							this.rolename=''
							uni.showToast({
								title:'添加角色成功，请等待管理员审核后刷新页面',
								icon:'success',
								duration:2000
							})
							this.getUser()
						})
						
					}else{
						uni.showToast({
							title:'角色名已注册',
							icon:'none',
							duration:2000
						})
					}
				})		
				
			},
			sendPrice(e){
				if(this.user.length == 0){
					alert('请先建立角色')
					return
				}
				this.$refs.priceshow.open()
				this.giftid = e
				
			},
			addPrice(){
				
				const r= /^\+?[1-9][0-9]*$/;
				
				if(this.currentPriceQ!=''&&!r.test(this.currentPriceQ/1000) ){
					uni.showToast({
						title:'输入不合法',
						icon:'none',
						duration:1000
					})
					this.currentPriceQ=''
					return
				}
				if(this.currentPriceQ == ''){
					this.currentPriceQ = 0
				}
				if(this.currentPriceW == ''){
					this.currentPriceW = 0
				}
				var price = parseInt(this.currentPriceW * 10000)+parseInt(this.currentPriceQ);
				
				uni.showToast({
					icon:'loading',
					duration:2000
				})
				const db=uniCloud.database()
				db.collection("gift").where({
					_id:this.giftid
				}).get().then((res)=>{
					var data=res.result.data[0]
					var user=data.user
					if(user.indexOf(this.userInfo.username)== -1){
						user.push(this.userInfo.username)
					}
					console.log(user)
					if(data.winner == "无"){
						
					if(parseInt(data.price)>price){
						uni.showToast({
							title:'出价失败,低于当前价格',
							icon:'none',
							duration:2000
						})
					}else{
						
						db.collection("gift").where({_id:this.giftid}).update({
							price:price.toString(),
							winner:this.user[this.index],
							winnerAccount:this.userInfo.username,
							time:new Date().getTime(),
							user:user
						}).then(			
								db.collection('record').add({
									account:this.userInfo.username,
									name:this.user[this.index],
									giftno:this.giftid,
									price:price.toString(),
								})			
						)
						uni.showToast({
							title:"出价成功",
							icon:'success'
						})
						setTimeout(()=>{
							this.getGift()
						},2000)
					}	
					}else{
					if(parseInt(data.price)>=price){
						uni.showToast({
							title:'出价失败,少于当前价格',
							icon:'none',
							duration:2000
						})
					}else{
						
						db.collection("gift").where({_id:this.giftid}).update({
							price:price.toString(),
							winner:this.user[this.index],
							winnerAccount:this.userInfo.username,
							time:new Date().getTime(),
							user:user
						}).then(
							db.collection('record').add({
								account:this.userInfo.username,
								name:this.user[this.index],
								giftno:this.giftid,
								price:price.toString(),
							})											
						)
						uni.showToast({
							title:"出价成功",
							icon:'success'
						})
						setTimeout(()=>{
							this.getGift()
						},2000)
						
					}
					}
					
				})
				
			},
			closeList(e){
				if(e == 1){
					this.showList1 = false
				}else if (e == 2){
					this.showList2 = false
				}else if (e == 3){
					this.showList3 = false
				}else if (e == 4){
					this.showList4 = false
				}else if (e == 5){
					this.showList5 = false
				}else if (e == 6){
					this.showList6 = false
				}
			},
			refresh(){
				
				this.getGift()
				this.getUser()
			},
			getTime:function(){
			
			var date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			// year + '-' + month + '-' + day + ' ' +
			var timer =  hour + ':' + minute + ':' + second;
			return timer;
			},
			showhist:function(e){
				const db=uniCloud.database()
				db.collection('record').where({
					giftno:e
				}).orderBy("price","desc").get().then((res)=>{
					console.log(res.result.data)
					this.ph=res.result.data
					this.$refs.pricehist.open()
				})
			},
			shutup:function(){
				this.$refs.pricehist.close()
			},
			closeprice:function(){
				this.$refs.priceshow.close()
			},
			showp:function(){
				const db=uniCloud.database()
				db.collection("gift").where({_id:this.giftid}).get().then(
					(res)=>{
						console.log(res.result.data)
						var user=res.result.data[0].puser
						user.push(this.userInfo.username)
						db.collection("gift").where({_id:this.giftid}).update({
							puser:user
						}).then(			
								db.collection('record').add({
									account:this.userInfo.username,
									name:this.user[this.index],
									giftno:this.giftid,
									price:"p",
								})			
						)
						uni.showToast({
							title:"出价成功",
							icon:'success'
						})
						setTimeout(()=>{
							this.getGift()
						},2000)
					}
				)
				
			},
			showListAgain:function(e){
				if(e == 1){
					this.showList1 = true
				}else if (e == 2){
					this.showList2 = true
				}else if (e == 3){
					this.showList3 = true
				}else if (e == 4){
					this.showList4 = true
				}else if (e == 5){
					this.showList5 = true
				}else if (e == 6){
					this.showList6 = true
				}
			}
		},
		onShow() {
			setInterval(this.refresh(),60000)
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

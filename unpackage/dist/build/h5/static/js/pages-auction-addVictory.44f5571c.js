(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auction-addVictory"],{6124:function(t,i,e){"use strict";(function(t){e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("dba4"),s={data:function(){return{list:[{name:"余晖",gift:[]},{name:"宓桃",gift:[]},{name:"武雪散",gift:[]},{name:"猿飞",gift:[]},{name:"哑头陀",gift:[]},{name:"岳琳",gift:[]}],giftType:[],giftshow:!1,addgiftlist:[],boss:"",ph:"",giftname:""}},filters:{formatDate:function(t){if("无"!=t){var i=new Date(t);return(0,n.formatDate)(i," hh:mm:ss")}return t}},methods:{getCarInfo:function(){var i=this;this.giftshow=!1,this.list[0].gift=[],this.list[1].gift=[],this.list[2].gift=[],this.list[3].gift=[],this.list[4].gift=[],this.list[5].gift=[];var e=t.database();e.collection("gift").where({number:this.number}).get().then((function(t){for(var e=t.result.data,n=0;n<e.length;n++)"余晖"==e[n].boss?i.list[0].gift.push(e[n]):"宓桃"==e[n].boss?i.list[1].gift.push(e[n]):"武雪散"==e[n].boss?i.list[2].gift.push(e[n]):"猿飞"==e[n].boss?i.list[3].gift.push(e[n]):"哑头陀"==e[n].boss?i.list[4].gift.push(e[n]):"岳琳"==e[n].boss&&i.list[5].gift.push(e[n]);i.time=(new Date).getTime()}))},addVictory:function(i){var e=this;this.boss=i;var n=t.database();n.collection("giftType").where({boss:new RegExp(i+"?")}).get().then((function(t){e.giftType=t.result.data,e.giftshow=!0}))},addGift:function(i){var e=t.database();uni.showLoading({});var n=["0"];e.collection("gift").add([{number:this.number,boss:this.boss,giftno:i.name,price:i.price,remark:i.remark,status:"1",winner:"无",time:"无",timestatus:!1,isMe:!1,hasMe:!1,user:n,puser:n}]).then((function(t){uni.hideLoading(),uni.showToast({title:"添加"+i.name+"成功",icon:"success",duration:1e3})}))},completeAdd:function(){var t=this;t.getCarInfo()},deleteGift:function(i){var e=this;uni.showModal({title:"提示",content:"是否确认删除",success:function(n){if(n.confirm){var s=t.database();s.collection("gift").doc(i).remove().then((function(t){uni.showToast({title:"删除成功"})})),e.getCarInfo()}}})},stop:function(i){var e=this,n=t.database();if(uni.showLoading({}),"余晖"==i)for(var s=0;s<this.list[0].gift.length;s++)n.collection("gift").where({_id:this.list[0].gift[s]._id}).update({status:"0"});else if("宓桃"==i)for(s=0;s<this.list[1].gift.length;s++)n.collection("gift").where({_id:this.list[1].gift[s]._id}).update({status:"0"});else if("武雪散"==i)for(s=0;s<this.list[2].gift.length;s++)n.collection("gift").where({_id:this.list[2].gift[s]._id}).update({status:"0"});else if("猿飞"==i)for(s=0;s<this.list[3].gift.length;s++)n.collection("gift").where({_id:this.list[3].gift[s]._id}).update({status:"0"});else if("哑头陀"==i)for(s=0;s<this.list[4].gift.length;s++)n.collection("gift").where({_id:this.list[4].gift[s]._id}).update({status:"0"});else if("岳琳"==i)for(s=0;s<this.list[5].gift.length;s++)n.collection("gift").where({_id:this.list[5].gift[s]._id}).update({status:"0"});setTimeout((function(){uni.hideLoading(),e.getCarInfo()}),1e3)},showhist:function(i){var e=this,n=t.database();n.collection("record").where({giftno:i}).orderBy("time","desc").get().then((function(t){console.log(t.result.data),e.ph=t.result.data,e.$refs.pricehist.open()}))},shutup:function(){this.$refs.pricehist.close()},search:function(){var i=this,e=t.database();e.collection("giftType").where({name:new RegExp(this.giftname+"?")}).get().then((function(t){i.giftType=t.result.data}))}},onLoad:function(t){this.number=t.no,this.getCarInfo()}};i.default=s}).call(this,e("a9ff")["default"])},"8d3c":function(t,i,e){"use strict";e.r(i);var n=e("6124"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},"8dc7":function(t,i,e){"use strict";e.r(i);var n=e("aca0"),s=e("8d3c");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);var o,u=e("f0c5"),c=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"7e59b85b",null,!1,n["a"],o);i["default"]=c.exports},aca0:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={uniPopup:e("1d1f").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-around"}},[t.giftshow?e("v-uni-view",[e("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},[t._v("装备名称"),e("v-uni-input",{staticStyle:{border:"1px solid red",width:"200px"},attrs:{type:"text"},model:{value:t.giftname,callback:function(i){t.giftname=i},expression:"giftname"}}),e("v-uni-button",{staticClass:"cu-btn sm bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search()}}},[t._v("搜索")])],1),e("table",[e("tr",[e("th",[t._v("装备名称")]),e("th",[t._v("装备位置")]),e("th",[t._v("属性")]),e("th",[t._v("添加")])]),t._l(t.giftType,(function(i,n){return e("tr",{key:n},[e("td",[t._v(t._s(i.name))]),e("td",[t._v(t._s(i.position))]),e("td",[t._v(t._s(i.remark))]),e("td",[e("v-uni-button",{staticClass:"cu-btn sm bg-blue ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addGift(i)}}},[t._v("添加")])],1)])}))],2),e("v-uni-view",{staticClass:"padding flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.completeAdd()}}},[t._v("返回")])],1)],1):t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticStyle:{"text-align":"center"}},[e("v-uni-view",[t._v(t._s(i.name))]),e("v-uni-button",{staticClass:"cu-btn sm bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addVictory(i.name)}}},[t._v("添加掉落")]),e("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column"}},t._l(i.gift,(function(i,n){return e("v-uni-view",{key:n,staticClass:"padding radius text-center light bg-orange ",staticStyle:{margin:"10px"}},[e("v-uni-view",[t._v(t._s(i.giftno))]),e("v-uni-view",[t._v("当前价格："+t._s(i.price))]),e("v-uni-view",[t._v("出价人:"+t._s(i.winner))]),e("v-uni-view",[t._v("最后出价时间："+t._s(t._f("formatDate")(i.time)))]),e("v-uni-button",{staticClass:"cu-btn sm bg-blue margin-tb-sm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showhist(i._id)}}},[t._v("历史价格")]),1==i.status?e("v-uni-view",[e("v-uni-button",{staticClass:"cu-btn sm bg-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteGift(i._id)}}},[t._v("删除")])],1):e("v-uni-view",[e("v-uni-view",[t._v("拍卖已结束")])],1)],1)})),1),e("v-uni-view",[e("v-uni-button",{staticClass:"cu-btn sm bg-green",staticStyle:{"margin-top":"10upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stop(i.name)}}},[t._v("结束拍卖")])],1)],1)})),e("uni-popup",{ref:"pricehist",attrs:{type:"top"}},[e("v-uni-view",{staticStyle:{"background-color":"white",width:"100%",height:"100%",display:"flex","justify-content":"space-around","font-size":"16px"}},[e("v-uni-view",[e("v-uni-button",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shutup()}}},[t._v("关闭")]),e("table",[e("tr",[e("th",[t._v("角色名")]),e("th",[t._v("出价")]),e("th",[t._v("出价时间")])]),t._l(t.ph,(function(i,n){return e("tr",[e("td",[t._v(t._s(i.name))]),e("td",[t._v(t._s(i.price))]),e("td",[t._v(t._s(t._f("formatDate")(i.time)))])])}))],2)],1)],1)],1)],2)},a=[]},dba4:function(t,i,e){"use strict";function n(t,i){/(y+)/.test(i)&&(i=i.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var n in e)if(new RegExp("(".concat(n,")")).test(i)){var a=e[n]+"";i=i.replace(RegExp.$1,1===RegExp.$1.length?a:s(a))}return i}function s(t){return("00"+t).substr(t.length)}e("4d63"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.formatDate=n}}]);
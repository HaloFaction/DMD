(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auction-auction"],{"3cc4":function(t,e,n){"use strict";n.r(e);var a=n("b17f"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"6d56":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".c-table[data-v-52bd6ee2]{display:-webkit-box;display:flex;justify-content:space-around;margin-top:%?20?%}.c-td[data-v-52bd6ee2]{text-align:center;width:30%}",""]),t.exports=e},"6e9b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={uniPopup:n("1d1f").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{margin:"20upx","padding-top":"60upx"}},[n("v-uni-view",{staticClass:"uni-title",staticStyle:{"text-align":"center","margin-bottom":"20upx"}},[n("h4",[t._v("当前车次一览表")])]),n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column"}},[n("v-uni-view",{staticClass:"c-table padding"},[n("v-uni-view",{staticClass:"c-td"},[t._v("编号")]),n("v-uni-view",{staticClass:"c-td"},[t._v("开车时间")]),n("v-uni-view",{staticClass:"c-td"},[t._v("房间密码")]),n("v-uni-view",{staticClass:"c-td"},[t._v("操作")])],1),t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"c-table"},[n("v-uni-view",{staticClass:"c-td"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"c-td"},[t._v(t._s(t._f("formatDate")(e.time)))]),n("v-uni-view",{staticClass:"c-td"},[t._v(t._s(e.password))]),n("v-uni-view",{staticClass:"c-td"},[n("v-uni-button",{staticClass:"cu-btn round lg bg-green",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addVictory(e.number)}}},[t._v("管理")]),n("v-uni-button",{staticClass:"cu-btn lg round bg-yellow",staticStyle:{"margin-left":"40upx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shutdown(e._id)}}},[t._v("结束")]),n("v-uni-button",{staticClass:"cu-btn lg round bg-red",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deleteBoss(e._id)}}},[t._v("删除")])],1)],1)}))],2),n("v-uni-view",{staticStyle:{width:"100%","text-align":"center"}},[n("v-uni-button",{staticClass:"cu-btn round lg bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.textpassword()}}},[t._v("添加车次")]),n("v-uni-button",{staticClass:"cu-btn round lg bg-yellow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showOrder()}}},[t._v(t._s(t.order))])],1),n("uni-popup",{ref:"popup",attrs:{type:"center"}},[n("v-uni-view",[t._v("房间密码:"),n("v-uni-input",{staticClass:"border bg-orange",attrs:{type:"text"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-uni-button",{staticClass:"bg-green margin-tb-sm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addOrder()}}},[t._v("确定")])],1)],1)},s=[]},"858a":function(t,e,n){var a=n("6d56");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5577d3a2",a,!0,{sourceMap:!1,shadowMode:!1})},"97e7":function(t,e,n){"use strict";n.r(e);var a=n("6e9b"),i=n("3cc4");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("b8dd");var o,u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"52bd6ee2",null,!1,a["a"],o);e["default"]=r.exports},b17f:function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),s=n("dba4"),o=n("2f62"),u={data:function(){return{list:[],time:"12:01",order:"历史记录",password:""}},filters:{formatDate:function(t){var e=new Date(t);return(0,s.formatDate)(e," hh:mm:ss")}},computed:(0,i.default)((0,i.default)((0,i.default)({},(0,o.mapState)("app",["appName"])),(0,o.mapState)("user",["userInfo"])),(0,o.mapState)("error",["logs"])),methods:{textpassword:function(){this.$refs.popup.open()},addOrder:function(){var e=this;this.$refs.popup.close();var n=t.database(),a=this.list.length+1,i=new Date;console.log((new Date).getTime()),i=i.getMonth()+1+"月"+i.getDate()+"日",n.collection("boss").add([{number:this.userInfo.username+(new Date).getTime().toString(),name:i+"第"+a+"车",status:"1",password:this.password}]).then((function(t){uni.showToast({title:"新增成功"})})).catch((function(t){uni.showModal({content:t.message||"新增失败",showCancel:!1})})).finally((function(){e.password="",e.getOrder()}))},getOrder:function(){var e=this,n=t.database();n.collection("boss").where({status:"1"}).get().then((function(t){e.list=t.result.data}))},addVictory:function(t){uni.navigateTo({url:"addVictory?no="+t})},shutdown:function(e){var n=this;uni.showModal({title:"提示",content:"是否确认关闭",success:function(a){if(a.confirm){uni.showLoading({});var i=t.database();i.collection("boss").where({_id:e}).update({status:"0"}),uni.hideLoading(),n.getOrder()}}})},showOrder:function(){var e=this;if("历史记录"==this.order){var n=t.database();n.collection("boss").where({status:"0"}).get().then((function(t){e.list=t.result.data,e.order="现有金团"}))}else this.order="历史记录",this.getOrder()},deleteBoss:function(e){uni.showModal({title:"提示",content:"是否确认删除",success:function(n){if(n.confirm){uni.showLoading({});var a=t.database();a.collection("boss").where({_id:e}).remove(),uni.hideLoading()}}})}},onLoad:function(){this.getOrder()}};e.default=u}).call(this,n("a9ff")["default"])},b8dd:function(t,e,n){"use strict";var a=n("858a"),i=n.n(a);i.a},dba4:function(t,e,n){"use strict";function a(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in n)if(new RegExp("(".concat(a,")")).test(e)){var s=n[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?s:i(s))}return e}function i(t){return("00"+t).substr(t.length)}n("4d63"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=a}}]);
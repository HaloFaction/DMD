(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-edit"],{"2e7d":function(t,e,a){"use strict";a.r(e);var i=a("ba82"),s=a("7f0a");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var r,o=a("f0c5"),l=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=l.exports},4231:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("4de4"),a("7db0"),a("4160"),a("caad"),a("a15b"),a("a9e3"),a("2532"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("2909")),n={name:"uniDataChecklist",props:{mode:{type:String,default:"default"},multiple:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:function(){return""}},range:{type:Array,default:function(){return[]}},min:{type:[Number,String],default:""},max:{type:[Number,String],default:""},wrap:{type:Boolean,default:!1}},watch:{range:{handler:function(t){this.dataList=this.getDataList(this.getSelectedValue(t))},deep:!0},value:function(t){this.dataList=this.getDataList(t)}},data:function(){return{dataList:[],styles:{selectedBackgroudColor:"red",selectedColor:"blue",backgroundColor:"#ffffff",color:"#333"}}},created:function(){this.dataList=this.getDataList(this.getSelectedValue(this.range))},methods:{chagne:function(t){var e=t.detail.value,a={value:[],data:[]};if(this.multiple)this.range.forEach((function(t){e.includes(t.value+"")&&(a.value.push(t.value),a.data.push(t))}));else{var i=this.range.find((function(t){return t.value+""===e}));i&&(a={value:i.value,data:i})}this.$emit("input",a.value),this.$emit("change",{detail:a}),this.multiple?0===this.value.length&&(this.dataList=this.getDataList(a.value,!0)):this.dataList=this.getDataList(a.value)},getLabelClass:function(t,e){var a,i,n=[];switch(this.mode){case"default":t.disable&&n.push("disabled-cursor");break;case"button":(a=n).push.apply(a,["is-button"].concat((0,s.default)(this.getClasses(t,"button"))));break;case"list":this.multiple?n.push("is-list-multiple-box"):n.push("is-list-box"),t.disable&&n.push("is-list-disabled"),0!==e&&n.push("is-list-border");break;case"tag":(i=n).push.apply(i,["is-tag"].concat((0,s.default)(this.getClasses(t,"tag"))));break}return n=n.join(" "),n},getCheckboxClass:function(t){var e,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];this.multiple?(e=n).push.apply(e,(0,s.default)(this.getClasses(t,"default-multiple",i))):(a=n).push.apply(a,(0,s.default)(this.getClasses(t,"default",i)));return n=n.join(" "),n},getTextClass:function(t){var e,a,i,n,r=[];switch(this.mode){case"default":(e=r).push.apply(e,(0,s.default)(this.getClasses(t,"list")));break;case"button":(a=r).push.apply(a,(0,s.default)(this.getClasses(t,"list")));break;case"list":(i=r).push.apply(i,(0,s.default)(this.getClasses(t,"list")));break;case"tag":(n=r).push.apply(n,["is-tag-text"].concat((0,s.default)(this.getClasses(t,"tag-text"))));break}return r=r.join(" "),r},getDataList:function(t){var e=this,a=JSON.parse(JSON.stringify(this.range)),i=[];return this.multiple&&(Array.isArray(t)||(t=[])),a.forEach((function(a,s){if(e.multiple)if(t.length>0){var n=t.find((function(t){return t===a.value}));a.selected=void 0!==n}else a.selected=!1;else a.selected=t===a.value;i.push(a)})),this.setRange(i)},setRange:function(t){var e=this,a=t.filter((function(t){return t.selected})),i=Number(this.min)||0,s=Number(this.max)||"";return t.forEach((function(n,r){if(e.multiple){if(a.length<=i){var o=a.find((function(t){return t.value===n.value}));void 0!==o&&(n.disable=!0)}if(a.length>=s&&""!==s){var l=a.find((function(t){return t.value===n.value}));void 0===l&&(n.disable=!0)}}e.setClass(n,r),t[r]=n})),t},setClass:function(t,e){t.labelClass=this.getLabelClass(t,e),t.checkboxBgClass=this.getCheckboxClass(t,"-bg"),t.checkboxClass=this.getCheckboxClass(t),t.textClass=this.getTextClass(t),t.listClass=this.getCheckboxClass(t,"-list")},getClasses:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[];return t.disable&&i.push("is-"+e+"-disabled"+a),t.selected&&i.push("is-"+e+"-checked"+a),"button"===this.mode&&"button"!==e||t.selected&&t.disable&&i.push("is-"+e+"-disabled-checked"+a),i},getSelectedValue:function(t){if(!this.multiple)return this.value;var e=[];return t.forEach((function(t){t.selected&&e.push(t.value)})),this.value.length>0?this.value:e}}};e.default=n},"5f7e":function(t,e,a){"use strict";var i=a("ebd7"),s=a.n(i);s.a},"72f7a":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-data-checklist"},[t.multiple?a("v-uni-checkbox-group",{staticClass:"checklist-group",class:{"is-list":"list"===t.mode,"is-wrap":t.wrap},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.chagne.apply(void 0,arguments)}}},t._l(t.dataList,(function(e,i){return a("v-uni-label",{key:i,staticClass:"checklist-box",class:e.labelClass},[a("v-uni-checkbox",{attrs:{hidden:!0,disabled:e.disable,value:e.value+"",checked:e.selected}}),"tag"!==t.mode?a("v-uni-view",{staticClass:"checkbox__inner",class:e.checkboxBgClass},[a("v-uni-view",{staticClass:"checkbox__inner-icon",class:e.checkboxClass})],1):t._e(),a("v-uni-view",{staticClass:"checklist-content"},[a("v-uni-text",{staticClass:"checklist-text",class:e.textClass},[t._v(t._s(e.text))]),"list"===t.mode?a("v-uni-view",{staticClass:"checkobx__list",class:e.listClass}):t._e()],1)],1)})),1):a("v-uni-radio-group",{staticClass:"checklist-group",class:{"is-list":"list"===t.mode,"is-wrap":t.wrap},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.chagne.apply(void 0,arguments)}}},t._l(t.dataList,(function(e,i){return a("v-uni-label",{key:i,staticClass:"checklist-box",class:e.labelClass},[a("v-uni-radio",{attrs:{hidden:!0,disabled:e.disable,value:e.value+"",checked:e.selected}}),"tag"!==t.mode?a("v-uni-view",{staticClass:"radio__inner",class:e.checkboxBgClass},[a("v-uni-view",{staticClass:"radio__inner-icon",class:e.checkboxClass})],1):t._e(),a("v-uni-view",{staticClass:"checklist-content"},[a("v-uni-text",{staticClass:"checklist-text",class:e.textClass},[t._v(t._s(e.text))]),"list"===t.mode?a("v-uni-view",{staticClass:"checkobx__list",class:e.listClass}):t._e()],1)],1)})),1)],1)},n=[]},"7f0a":function(t,e,a){"use strict";a.r(e);var i=a("e5bc"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"93ea":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={username:{rules:[{required:!0,errorMessage:"{label}必填"},{format:"string"},{minLength:2}],label:"用户名"},password:{rules:[{required:!0,errorMessage:"{label}必填"},{format:"string"},{minLength:6}],label:"初始密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}]}};e.default=i},ba82:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uniForms:a("525e").default,uniFormsItem:a("b5ce").default,uniDataChecklist:a("fb99").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}},[a("uni-forms-item",{attrs:{name:"username",label:"用户名"}},[a("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"请输入用户名",value:t.formData.username},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("username",e.detail.value)}}})],1),a("uni-forms-item",{attrs:{name:"role",label:"角色列表"}},[t.roles.length?a("uni-data-checklist",{attrs:{multiple:!0,value:t.formData.role,range:t.roles},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("role",e.detail.value)}}}):a("v-uni-view",{staticClass:"uni-form-item-empty"},[t._v("暂无")])],1),a("uni-forms-item",{attrs:{name:"mobile",label:"手机号"}},[a("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"手机号",value:t.formData.mobile},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("mobile",e.detail.value)}}})],1),a("uni-forms-item",{attrs:{name:"status",label:"是否启用"}},[Number(t.formData.status)<=1?a("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("status",e.detail.value)}}}):a("v-uni-view",{staticClass:"uni-form-item-empty"},[t._v(t._s(t.formData.status))])],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},n=[]},c795:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".checklist-group[data-v-53d328f4]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap}.checklist-box[data-v-53d328f4]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;margin:5px 0;margin-right:25px}.checklist-text[data-v-53d328f4]{font-size:14px;color:#333;margin-left:5px;-webkit-transition:color .2s;transition:color .2s}.is-button[data-v-53d328f4]{margin-right:10px;padding:3px 15px;border:1px #dcdfe6 solid;border-radius:3px;-webkit-transition:border-color .2s;transition:border-color .2s}.is-list[data-v-53d328f4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.is-list-box[data-v-53d328f4]{\ndisplay:-webkit-box;display:flex;\npadding:10px 15px;padding-left:0;margin:0}.checklist-content[data-v-53d328f4]{\ndisplay:-webkit-box;display:flex;\n-webkit-box-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.is-list-multiple-box[data-v-53d328f4]{\ndisplay:-webkit-box;display:flex;\npadding:10px 15px;padding-left:0;margin:0}.is-list-border[data-v-53d328f4]{border-top:1px #eee solid}.is-tag[data-v-53d328f4]{margin-right:10px;padding:3px 10px;border:1px #eee solid;border-radius:3px;background-color:#f5f5f5;-webkit-transition:border-color .2s;transition:border-color .2s}.is-tag-text[data-v-53d328f4]{margin:0;color:#666}.checkbox__inner[data-v-53d328f4]{flex-shrink:0;position:relative;border:1px solid #dcdfe6;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;-webkit-transition:border-color .1s;transition:border-color .1s}.checkbox__inner-icon[data-v-53d328f4]{border:1px solid #fff;border-left:0;border-top:0;height:8px;left:5px;position:absolute;top:1px;width:3px;opacity:0;-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(40deg) scaleY(.4);transform:rotate(40deg) scaleY(.4)}.radio__inner[data-v-53d328f4]{flex-shrink:0;\ndisplay:-webkit-box;display:flex;\n-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative;border:1px solid #dcdfe6;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;width:16px;height:16px;border-radius:16px;background-color:#fff;z-index:1;-webkit-transition:border-color .3s;transition:border-color .3s}.radio__inner-icon[data-v-53d328f4]{width:8px;height:8px;border-radius:10px;opacity:0;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.checkobx__list[data-v-53d328f4]{border:1px solid #fff;border-left:0;border-top:0;height:12px;width:6px;-webkit-transform-origin:center;transform-origin:center;opacity:0;-webkit-transition:all .2s;transition:all .2s}\n\n/* 禁用样式 */.is-default-disabled-bg[data-v-53d328f4]{background-color:#f2f6fc;border-color:#dcdfe6;\ncursor:not-allowed\n}.is-default-multiple-disabled-bg[data-v-53d328f4]{background-color:#f2f6fc;border-color:#dcdfe6;\ncursor:not-allowed\n}.is-default-disabled[data-v-53d328f4]{border-color:#f2f6fc}.is-default-multiple-disabled[data-v-53d328f4]{border-color:#f2f6fc}.is-list-disabled[data-v-53d328f4]{\ncursor:not-allowed;\ncolor:#999}.is-list-disabled-checked[data-v-53d328f4]{color:#a1dcc1}.is-button-disabled[data-v-53d328f4]{\ncursor:not-allowed;\nborder-color:#ebeef5}.is-button-text-disabled[data-v-53d328f4]{color:#c0c4cc}.is-button-disabled-checked[data-v-53d328f4]{border-color:#a1dcc1}.is-tag-disabled[data-v-53d328f4]{\ncursor:not-allowed;\nborder-color:#e9e9eb;background-color:#f4f4f5}.is-tag-text-disabled[data-v-53d328f4]{color:#bcbec2}\n\n/* 选中样式 */.is-default-checked-bg[data-v-53d328f4]{border-color:#007aff}.is-default-multiple-checked-bg[data-v-53d328f4]{border-color:#007aff;background-color:#007aff}.is-default-checked[data-v-53d328f4]{opacity:1;background-color:#007aff;-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.is-default-multiple-checked[data-v-53d328f4]{opacity:1;-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.is-default-disabled-checked-bg[data-v-53d328f4]{opacity:.4}.is-default-multiple-disabled-checked-bg[data-v-53d328f4]{opacity:.4}.is-default-checked-list[data-v-53d328f4]{border-color:#007aff;opacity:1;-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.is-default-multiple-checked-list[data-v-53d328f4]{border-color:#007aff;opacity:1;-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.is-list-disabled-checked[data-v-53d328f4]{opacity:.4}.is-default-disabled-checked-list[data-v-53d328f4]{opacity:.4}.is-default-multiple-disabled-checked-list[data-v-53d328f4]{opacity:.4}.is-button-checked[data-v-53d328f4]{border-color:#007aff}.is-button-disabled-checked[data-v-53d328f4]{opacity:.4}.is-list-checked[data-v-53d328f4]{color:#007aff}.is-tag-checked[data-v-53d328f4]{border-color:#007aff;background-color:#007aff}.is-tag-text-checked[data-v-53d328f4]{color:#fff}.is-tag-disabled-checked[data-v-53d328f4]{opacity:.4}.disabled-cursor[data-v-53d328f4]{\ncursor:not-allowed\n}.is-wrap[data-v-53d328f4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}",""]),t.exports=e},d254:function(t,e,a){"use strict";a.r(e);var i=a("4231"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},e5bc:function(t,e,a){"use strict";(function(t){var i=a("4ea4");a("caad"),a("d81d"),a("a9e3"),a("d3b7"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("5530")),n=i(a("93ea")),r=t.database(),o=(r.command,"uni-id-users");function l(t){var e={};for(var a in n.default)t.includes(a)&&(e[a]=n.default[a]);return e}var d={data:function(){return{formData:{username:"",password:"",role:[],mobile:"",email:"",status:!1},rules:(0,s.default)({},l(["username","password","role","mobile"])),roles:[]}},onLoad:function(t){var e=t.id;this.formDataId=e,this.getDetail(e),this.loadroles()},methods:{submitForm:function(t){this.$refs.form.submit()},submit:function(t){var e=this;console.log(t.detail);var a=t.detail,i=a.value,s=a.errors;s||(uni.showLoading({title:"修改中...",mask:!0}),"boolean"===typeof i.status&&(i.status=Number(!i.status)),r.collection(o).where({_id:this.formDataId}).update(i).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),r.collection(o).doc(t).field("username,role,mobile,status").get().then((function(t){var a=t.result.data[0];if(a){var i=a.status;i<2?(a.status=!i,e.formData=a):e.formData.status=2===i?"审核中":3===i?"审核拒绝":"未知状态"}})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},loadroles:function(){var t=this;r.collection("uni-id-roles").limit(500).get().then((function(e){t.roles=e.result.data.map((function(t){return{value:t.role_id,text:t.role_name}})),t.roles.unshift({value:"admin",text:"admin"})})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})}))}}};e.default=d}).call(this,a("a9ff")["default"])},ebd7:function(t,e,a){var i=a("c795");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("392d9a22",i,!0,{sourceMap:!1,shadowMode:!1})},fb99:function(t,e,a){"use strict";a.r(e);var i=a("72f7a"),s=a("d254");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("5f7e");var r,o=a("f0c5"),l=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"53d328f4",null,!1,i["a"],r);e["default"]=l.exports}}]);
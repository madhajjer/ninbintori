(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{329:function(t,e,n){var content=n(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("12a190a6",content,!0,{sourceMap:!1})},330:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""])},331:function(t,e,n){var content=n(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2e2bc7da",content,!0,{sourceMap:!1})},332:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls .v-input__append-outer,.v-input--selection-controls .v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls .v-input__control{flex-grow:0;width:auto}.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot{margin-bottom:12px}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;margin-right:8px;transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:color,transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-rtl .v-input--selection-controls__input{margin-right:0;margin-left:8px}.v-input--selection-controls__input input{position:absolute;opacity:0;width:100%;height:100%}.v-input--selection-controls__input+.v-label,.v-input--selection-controls__input input{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple .v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input .v-label{align-items:center;display:inline-flex;top:0;height:auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;opacity:.4;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""])},339:function(t,e,n){"use strict";n(10),n(7),n(6);var r=n(2),o=(n(128),n(5),n(4),n(186),n(36),n(38),n(82));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}e.a=Object(o.b)("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))}):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){this.inputs.forEach(function(input){return input.reset()}),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(input){return input.resetValidation()}),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},384:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},o=n(56),l=n(76),c=n.n(l),h=n(141),d=(n(10),n(7),n(5),n(6),n(63),n(64),n(4),n(2)),f=(n(329),n(331),n(65)),v=n(316),m=n(57),_=n(1).a.extend({name:"rippleable",directives:{ripple:m.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}}),y=n(317),x=n(8);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(source,!0).forEach(function(e){Object(d.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var O=Object(x.a)(v.a,_,y.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some(function(n){return t.valueComparator(n,e)}):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,label=v.a.options.methods.genLabel.call(this);return label?(label.data.on={click:function(e){e.preventDefault(),t.onChange()}},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter(function(n){return!t.valueComparator(n,e)})).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return w({},v.a.options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){this.inputIndeterminate=t},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",w({},this.$attrs,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(f.a,this.setTextColor(this.validationState,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),V=n(339),C=n(322),I=n(376),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"Item is required"}],label:"Item",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),t._v(" "),n("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("\n    Validate\n  ")]),t._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v("\n    Reset Form\n  ")]),t._v(" "),n("v-btn",{attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v("\n    Reset Validation\n  ")])],1)},[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCheckbox:O,VForm:V.a,VSelect:C.a,VTextField:I.a})}}]);
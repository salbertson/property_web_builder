(function(t){function e(e){for(var i,o,n=e[0],l=e[1],c=e[2],d=0,b=[];d<n.length;d++)o=n[d],r[o]&&b.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(b.length)b.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,n=1;n<s.length;n++){var l=s[n];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),r=s("bb71");s("da64");i["a"].use(r["a"],{customProperties:!0,iconfont:"md"});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"inspire",dark:""}},[s("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return s("v-list-tile",{key:e.text,attrs:{to:{name:"properties",params:{}}}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)}),s("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[t._v("SUBSCRIBERS")]),s("v-list",[t._l(t.subscribers,function(e){return s("v-list-tile",{key:e.text,attrs:{avatar:"",to:{name:"subscribers",params:{subscriber_id:e.picture}}},on:{click:function(t){}}},[s("v-list-tile-avatar",[s("img",{attrs:{src:"https://ui-avatars.com/api/?name="+e.text,alt:""}})]),s("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),t._l(t.$store.state.subscriberList,function(e){return s("v-list-tile",{key:e.id,attrs:{avatar:"",to:{name:"subscribers",params:{subscriber_id:e.id}}},on:{click:function(t){}}},[s("v-list-tile-avatar",[s("img",{attrs:{src:"https://ui-avatars.com/api/?name="+e.contact.first_name,alt:""}})]),s("v-list-tile-title",{domProps:{textContent:t._s(e.contact.first_name)}})],1)}),s("v-list-tile",{staticClass:"mt-3",attrs:{to:{name:"newSubscriber",params:{}}}},[s("v-list-tile-action",[s("v-icon",{attrs:{color:"grey darken-1"}},[t._v("add_circle_outline")])],1),s("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[t._v("Add subscriber")])],1)],2),s("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[t._v("SUBSCRIPTIONS")]),s("v-list",[t._l(t.subscriptions,function(e){return s("v-list-tile",{key:e.text,attrs:{avatar:"",to:{name:"subscriptions",params:{subscription_id:e.picture}}},on:{click:function(t){}}},[s("v-list-tile-avatar",[s("img",{attrs:{src:"https://randomuser.me/api/portraits/men/"+e.picture+".jpg",alt:""}})]),s("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),s("v-list-tile",{staticClass:"mt-3",attrs:{to:{name:"newSubscription",params:{}}}},[s("v-list-tile-action",[s("v-icon",{attrs:{color:"grey darken-1"}},[t._v("add_circle_outline")])],1),s("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[t._v("Add subscription")])],1)],2)],2)],1),s("v-toolbar",{attrs:{color:"red",dense:"",fixed:"","clipped-left":"",app:""}},[s("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),s("v-icon",{staticClass:"mx-3"},[t._v("fab fa-youtube")]),s("v-toolbar-title",{staticClass:"mr-5 align-center"},[s("router-link",{staticStyle:{color:"white","text-decoration":"none"},attrs:{to:{name:"home",params:{}},flat:""}},[s("span",{staticClass:"title"},[t._v("PWB Sync")])])],1),s("v-spacer"),s("v-layout",{staticStyle:{"max-width":"650px"},attrs:{row:"","align-center":""}},[s("v-text-field",{attrs:{"append-icon-cb":function(){},placeholder:"Search...","single-line":"","append-icon":"search",color:"white","hide-details":""}})],1)],1),s("v-content",[s("v-container",{attrs:{"fill-width":"","fill-height":""}},[s("v-layout",{attrs:{"justify-center":"","align-center":""}},[s("router-view")],1)],1)],1)],1)},o=[],n={data:()=>({drawer:null,items:[{icon:"settings",text:"Properties"}],subscribers:[{picture:28,text:"Joe Realtors"},{picture:38,text:"Pete's brokers"}],subscriptions:[{picture:48,text:"Star properties"},{picture:58,text:"REBNY feed"},{picture:78,text:"Trump homes"}]}),mounted:function(){this.$store.dispatch("loadSubscribers")},props:{source:String}},l=n,c=s("2877"),u=s("6544"),d=s.n(u),b=s("7496"),p=s("a523"),v=s("549c"),m=s("132d"),f=s("a722"),h=s("8860"),_=s("ba95"),y=s("40fe"),x=s("c954"),V=s("5d23"),w=s("f774"),S=s("9910"),g=s("e0c7"),T=s("2677"),C=s("71d9"),L=s("706c"),P=s("2a7f"),k=Object(c["a"])(l,a,o,!1,null,null,null);k.options.__file="App.vue";var M=k.exports;d()(k,{VApp:b["a"],VContainer:p["a"],VContent:v["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileTitle:V["c"],VNavigationDrawer:w["a"],VSpacer:S["a"],VSubheader:g["a"],VTextField:T["a"],VToolbar:C["a"],VToolbarSideIcon:L["a"],VToolbarTitle:P["b"]});var $=s("8c4f"),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Welcome")},U=[],A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:""}}),s("v-flex",{attrs:{"mb-4":""}},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to PropertyWebBuilder Sync\n      ")]),s("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        If you like PropertyWebBuilder,\n        "),s("br"),t._v("please consider donating via \n        "),s("a",{attrs:{href:"https://opencollective.com/property_web_builder"}},[t._v("OpenCollective")])])]),s("v-flex",{staticStyle:{display:"none"},attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),s("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,i){return s("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}))],1)],1)],1)},q=[],N={data:()=>({importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}]})},O=N,F=(s("c21d"),s("0e8f")),j=Object(c["a"])(O,A,q,!1,null,null,null);j.options.__file="Welcome.vue";var B=j.exports;d()(j,{VContainer:p["a"],VFlex:F["a"],VLayout:f["a"]});var R={components:{Welcome:B}},I=R,D=Object(c["a"])(I,E,U,!1,null,null,null);D.options.__file="Home.vue";var K=D.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Properties")]),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-subheader",{attrs:{inset:""}}),t._l(t.adminPropsList,function(e,i){return[s("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(s){t.goToEdit(e)}}},[s("v-list-tile-avatar",[s("v-icon")],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.attributes.title))]),s("v-list-tile-sub-title",[t._v(t._s(e.attributes.description))])],1),s("v-list-tile-action",[s("v-btn",{attrs:{icon:"",ripple:""}},[e.attributes.highlighted&&e.attributes.visible?s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("home")]):t._e()],1)],1),s("v-list-tile-action",[s("v-btn",{attrs:{icon:"",ripple:""}},[e.attributes.visible?s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility")]):s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility_off")])],1)],1)],1)]})],2)],1)],1)],1)},z=[],J={components:{},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadAdminProperties",t.params)},immediate:!0}},computed:{adminPropsList(){return this.$store.state.adminPropsList}}},Y=J,H=s("8336"),G=Object(c["a"])(Y,W,z,!1,null,null,null);G.options.__file="Properties.vue";var Q=G.exports;d()(G,{VBtn:H["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSubheader:g["a"]});var X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Add a new subscriber to your site")]),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"elevation-2"},[s("v-card-title",{staticClass:"layout",attrs:{"primary-title":""}},[s("div",{staticClass:"headline ml-2"})]),s("v-card-text",[s("v-form",{ref:"enqForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmitNewSubscriber(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[t._l(t.subscriberFields,function(e){return s("v-layout",{key:e.fieldName,attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[s("v-text-field",{attrs:{autofocus:e.autofocus,"multi-line":e.multiLine,required:e.required,rules:e.validationRules,name:"",label:e.labelTextTKey},model:{value:t.enquiryContent[e.fieldName],callback:function(s){t.$set(t.enquiryContent,e.fieldName,s)},expression:"enquiryContent[field.fieldName]"}})],1)],1)}),t.contactUsErrors.length?s("p",[t._l(t.contactUsErrors,function(e){return[s("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:!0}},[t._v("\n                  "+t._s(e)+"\n                ")])]})],2):t._e(),t.newSubscriberToken.length?s("p",[s("v-alert",{attrs:{outline:"",color:"success",dismissible:""},model:{value:t.successModel,callback:function(e){t.successModel=e},expression:"successModel"}},[t._v("\n                "+t._s(t.newSubscriberToken)+"\n              ")])],1):t._e(),s("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[t.contactUsSending?[s("v-progress-linear",{attrs:{indeterminate:!0}})]:t._e(),s("v-btn",{staticClass:"accent",attrs:{type:"submit"}},[t._v("\n                Add subscriber\n              ")])],2)],2)],1)],1),s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-subheader",{attrs:{inset:""}})],1)],1)],1)],1)},Z=[],tt={components:{},props:[],data(){return{newSubscriberToken:"",successModel:!0,formValid:!1,subscriberFields:[{labelTextTKey:"name",autofocus:!0,fieldName:"name",inputType:"text",required:!0,validationRules:[t=>!!t||"Name is required"]},{labelTextTKey:"email",fieldName:"primary_email",inputType:"text",required:!0,validationRules:[t=>!!t||"E-mail is required",t=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"]},{labelTextTKey:"tel",fieldName:"primary_phone_number",inputType:"text",validationRules:[]}],enquiryContent:{name:"",message:""}}},computed:{contactUsSending(){return this.$store.state.contactUsSending||!1},contactUsSuccess(){return this.$store.state.contactUsSuccess||""},contactUsErrors(){return this.$store.state.contactUsErrors||[]}},watch:{"$store.state.newSubscriber"(t){t&&(this.newSubscriberToken=t.subscriber_token,this.$router.push({name:"subscribers",params:{subscriber_id:t.id}}))}},methods:{onSubmitNewSubscriber(){this.formValid?this.$store.dispatch("createSubscriber",this.enquiryContent):this.$refs.enqForm.validate()}}},et=tt,st=s("0798"),it=s("b0af"),rt=s("99d9"),at=s("12b2"),ot=s("4bd4"),nt=s("8e36"),lt=Object(c["a"])(et,X,Z,!1,null,null,null);lt.options.__file="NewSubscriber.vue";var ct=lt.exports;d()(lt,{VAlert:st["a"],VBtn:H["a"],VCard:it["a"],VCardText:rt["a"],VCardTitle:at["a"],VFlex:F["a"],VForm:ot["a"],VLayout:f["a"],VList:h["a"],VProgressLinear:nt["a"],VSubheader:g["a"],VTextField:T["a"]});var ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Subscribe to a PropertyWebBuilder site")]),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"elevation-2"},[s("v-card-title",{staticClass:"layout",attrs:{"primary-title":""}},[s("div",{staticClass:"headline ml-2"})]),s("v-card-text",[s("v-form",{ref:"enqForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmitEnquiry(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[t._l(t.contactUsFields,function(e){return s("v-layout",{key:e.fieldName,attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[s("v-text-field",{attrs:{autofocus:e.autofocus,"multi-line":e.multiLine,required:e.required,rules:e.validationRules,name:"",label:e.labelTextTKey},model:{value:t.enquiryContent[e.fieldName],callback:function(s){t.$set(t.enquiryContent,e.fieldName,s)},expression:"enquiryContent[field.fieldName]"}})],1)],1)}),t.contactUsErrors.length?s("p",[t._l(t.contactUsErrors,function(e){return[s("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:!0}},[t._v("\n              "+t._s(e)+"\n            ")])]})],2):t._e(),t.contactUsSuccess.length?s("p",[s("v-alert",{attrs:{outline:"",color:"success",dismissible:""},model:{value:t.successModel,callback:function(e){t.successModel=e},expression:"successModel"}},[t._v("\n            "+t._s(t.contactUsSuccess)+"\n          ")])],1):t._e(),s("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[t.contactUsSending?[s("v-progress-linear",{attrs:{indeterminate:!0}})]:t._e(),s("v-btn",{staticClass:"accent",attrs:{type:"submit"}},[t._v("\n            Subscribe to site\n          ")])],2)],2)],1)],1),s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-subheader",{attrs:{inset:""}})],1)],1)],1)],1)},dt=[],bt={components:{},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadAdminProperties",t.params)},immediate:!0}},data(){return{showTrans:!1,successModel:!0,formValid:!1,contactUsFields:[{labelTextTKey:"url",autofocus:!0,fieldName:"url",inputType:"text",required:!0,validationRules:[t=>!!t||"Url is required"]},{labelTextTKey:"token",fieldName:"token",inputType:"text",validationRules:[]}],enquiryContent:{name:"",message:""}}},computed:{contactUsSending(){return this.$store.state.contactUsSending||!1},contactUsSuccess(){return this.$store.state.contactUsSuccess||""},contactUsErrors(){return this.$store.state.contactUsErrors||[]}},methods:{onSubmitEnquiry(){this.formValid?this.$store.dispatch("sendContactMessage",this.enquiryContent):this.$refs.enqForm.validate()}}},pt=bt,vt=Object(c["a"])(pt,ut,dt,!1,null,null,null);vt.options.__file="NewSubscription.vue";var mt=vt.exports;d()(vt,{VAlert:st["a"],VBtn:H["a"],VCard:it["a"],VCardText:rt["a"],VCardTitle:at["a"],VFlex:F["a"],VForm:ot["a"],VLayout:f["a"],VList:h["a"],VProgressLinear:nt["a"],VSubheader:g["a"],VTextField:T["a"]});var ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("AddPropForSubscriber",{attrs:{listPropsModalVisible:t.listPropsModalVisible,subscriberProps:t.subscriberProps},on:{hideListPropsModal:t.hideListPropsModal}}),s("EditSubscriber",{attrs:{editSubscriberModalVisible:t.editSubscriberModalVisible,subscriberProps:t.subscriberProps},on:{hideEditSubscriberModal:t.hideEditSubscriberModal}}),t.subscriberProps.length?s("h1",[t._v(t._s(t.$store.state.subscriberContact.first_name)+" is subscribing to these properties")]):s("div",[s("h1",[t._v(t._s(t.$store.state.subscriberContact.first_name)+" ( with token "+t._s(t.$store.state.subscriber.subscriber_token)+" ) is not yet subscribing to any properties\n    ")]),s("h3")]),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{slot:"activator",dark:"",icon:""},nativeOn:{click:function(e){t.showEditSubscriberModal()}},slot:"activator"},[s("v-icon",[t._v("edit")])],1),s("v-btn",{attrs:{slot:"activator",dark:"",icon:""},nativeOn:{click:function(e){t.showListPropsModal()}},slot:"activator"},[s("v-icon",[t._v("rss_feed")])],1)],1)],1),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[t.subscriberProps.length?s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-subheader",{attrs:{inset:""}}),t._l(t.subscriberProps,function(e,i){return[s("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(s){t.goToEdit(e)}}},[s("v-list-tile-avatar",[s("v-icon")],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))]),s("v-list-tile-sub-title",[t._v(t._s(e.description))])],1),s("v-list-tile-action"),s("v-list-tile-action",[s("v-btn",{attrs:{icon:"",ripple:""}},[s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("home")])],1)],1)],1)]})],2):t._e()],1)],1)],1)},ht=[],_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{on:{input:t.modalChanged},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.modalChanged(!t.showModal)}}},[s("v-icon",[t._v("close")])],1),s("v-toolbar-title",[t._v("Select properties for subscriber")]),s("v-spacer"),s("v-toolbar-items",[s("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.modalChanged(!t.showModal)}}})],1)],1)],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-subheader",{attrs:{inset:""}}),t._l(t.adminPropsList,function(e,i){return[s("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(s){t.toggleProp(e)}}},[s("v-list-tile-avatar",[s("v-icon")],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.attributes.title))]),s("v-list-tile-sub-title",[t._v(t._s(e.attributes.description))])],1),s("v-list-tile-action"),s("v-list-tile-action",[s("v-btn",{attrs:{icon:"",ripple:""}},[e.canBeRemoved?s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("remove_circle ")]):s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("add_circle")])],1)],1)],1)]})],2)],1)],1)],1)},yt=[],xt={components:{},props:["listPropsModalVisible","subscriberProps"],data(){return{showModal:!1}},computed:{adminPropsList(){let t=this.$store.state.adminPropsList||[],e=this.subscriberProps,s=[];return e.forEach(function(t){s.push(t.id.toString())}),t.forEach(function(t){console.log(s),s.includes(t.id)?(t.canBeRemoved=!0,t.canBeAdded=!1):t.canBeAdded=!0}),t}},methods:{toggleProp(t){let e={property:t};t.canBeAdded?e.update_action="add":e.update_action="remove",this.$store.dispatch("updateSubscriberProps",e)},modalChanged(t){t||this.$emit("hideListPropsModal")}},watch:{listPropsModalVisible(t){this.showModal=t,t&&this.$store.dispatch("loadAdminProperties")}}},Vt=xt,wt=s("169a"),St=Object(c["a"])(Vt,_t,yt,!1,null,null,null);St.options.__file="AddPropForSubscriber.vue";var gt=St.exports;d()(St,{VBtn:H["a"],VDialog:wt["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSpacer:S["a"],VSubheader:g["a"],VToolbar:C["a"],VToolbarItems:P["a"],VToolbarTitle:P["b"]});var Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{on:{input:t.modalChanged},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.modalChanged(!t.showModal)}}},[s("v-icon",[t._v("close")])],1),s("v-toolbar-title",[t._v("Edit subscriber")]),s("v-spacer"),s("v-toolbar-items",[s("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.modalChanged(!t.showModal)}}})],1)],1)],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"elevation-2"},[s("v-card-title",{staticClass:"layout",attrs:{"primary-title":""}},[s("div",{staticClass:"headline ml-2"})]),s("v-card-text",[s("v-form",{ref:"enqForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmitEditedSubscriber(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[t._l(t.subscriberFields,function(e){return s("v-layout",{key:e.fieldName,attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[s("v-text-field",{attrs:{autofocus:e.autofocus,"multi-line":e.multiLine,required:e.required,rules:e.validationRules,name:"",label:e.labelTextTKey},model:{value:t.subscriberContact[e.fieldName],callback:function(s){t.$set(t.subscriberContact,e.fieldName,s)},expression:"subscriberContact[field.fieldName]"}})],1)],1)}),t.contactUsErrors.length?s("p",[t._l(t.contactUsErrors,function(e){return[s("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:!0}},[t._v("\n                  "+t._s(e)+"\n                ")])]})],2):t._e(),t.contactUsSuccess.length?s("p",[s("v-alert",{attrs:{outline:"",color:"success",dismissible:""},model:{value:t.successModel,callback:function(e){t.successModel=e},expression:"successModel"}},[t._v("\n                "+t._s(t.contactUsSuccess)+"\n              ")])],1):t._e(),s("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[t.contactUsSending?[s("v-progress-linear",{attrs:{indeterminate:!0}})]:t._e(),s("v-btn",{staticClass:"accent",attrs:{type:"submit"}},[t._v("\n                Update subscriber\n              ")])],2)],2)],1)],1)],1)],1)],1)},Ct=[],Lt={components:{},props:["editSubscriberModalVisible","subscriberProps"],data(){return{showModal:!1,successModel:!0,formValid:!1,subscriberFields:[{labelTextTKey:"name",autofocus:!0,fieldName:"first_name",inputType:"text",required:!0,validationRules:[t=>!!t||"Name is required"]},{labelTextTKey:"email",fieldName:"primary_email",inputType:"text",required:!0,validationRules:[t=>!!t||"E-mail is required",t=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"]},{labelTextTKey:"tel",fieldName:"primary_phone_number",inputType:"text",validationRules:[]}]}},computed:{subscriberContact(){return this.$store.state.subscriberContact},contactUsSending(){return this.$store.state.contactUsSending||!1},contactUsSuccess(){return this.$store.state.contactUsSuccess||""},contactUsErrors(){return this.$store.state.contactUsErrors||[]}},methods:{onSubmitEditedSubscriber(){this.formValid?(this.$store.dispatch("updateSubscriber",this.subscriberContact),this.$emit("hideEditSubscriberModal")):this.$refs.enqForm.validate()},modalChanged(t){t||this.$emit("hideEditSubscriberModal")}},watch:{editSubscriberModalVisible(t){this.showModal=t,t&&this.$store.dispatch("loadAdminProperties")}}},Pt=Lt,kt=Object(c["a"])(Pt,Tt,Ct,!1,null,null,null);kt.options.__file="EditSubscriber.vue";var Mt=kt.exports;d()(kt,{VAlert:st["a"],VBtn:H["a"],VCard:it["a"],VCardText:rt["a"],VCardTitle:at["a"],VDialog:wt["a"],VFlex:F["a"],VForm:ot["a"],VIcon:m["a"],VLayout:f["a"],VProgressLinear:nt["a"],VSpacer:S["a"],VTextField:T["a"],VToolbar:C["a"],VToolbarItems:P["a"],VToolbarTitle:P["b"]});var $t={components:{AddPropForSubscriber:gt,EditSubscriber:Mt},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadSubscriber",t.params)},immediate:!0}},data(){return{listPropsModalVisible:!1,editSubscriberModalVisible:!1}},computed:{subscriberProps(){return this.$store.state.subscriberProps}},methods:{hideEditSubscriberModal(){this.editSubscriberModalVisible=!1},showEditSubscriberModal(){this.editSubscriberModalVisible=!0},hideListPropsModal(){this.listPropsModalVisible=!1},showListPropsModal(){this.listPropsModalVisible=!0}}},Et=$t,Ut=Object(c["a"])(Et,ft,ht,!1,null,null,null);Ut.options.__file="Subscribers.vue";var At=Ut.exports;d()(Ut,{VBtn:H["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSubheader:g["a"]});var qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Your are subscribing to these properties from agent "+t._s(t.$route.params.subscription_id))]),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-subheader",{attrs:{inset:""}}),t._l(t.adminPropsList,function(e,i){return[s("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(s){t.goToEdit(e)}}},[s("v-list-tile-avatar",[s("v-icon")],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.attributes.title))]),s("v-list-tile-sub-title",[t._v(t._s(e.attributes.description))])],1),s("v-list-tile-action",[s("v-btn",{attrs:{icon:"",ripple:""}},[e.highlighted&&e.visible?s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("home")]):t._e()],1)],1),s("v-list-tile-action",[s("v-btn",{attrs:{icon:"",ripple:""}},[e.visible?s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility")]):s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility_off")])],1)],1)],1)]})],2)],1)],1)],1)},Nt=[],Ot={components:{},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadAdminProperties",t.params)},immediate:!0}},computed:{adminPropsList(){return this.$store.state.adminPropsList}}},Ft=Ot,jt=Object(c["a"])(Ft,qt,Nt,!1,null,null,null);jt.options.__file="Subscriptions.vue";var Bt=jt.exports;d()(jt,{VBtn:H["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSubheader:g["a"]}),i["a"].use($["a"]);var Rt=new $["a"]({mode:"history",base:"/pwb-sync/",routes:[{path:"/",name:"home",component:K},{path:"/properties",name:"properties",component:Q},{path:"/new-subscriber",name:"newSubscriber",component:ct},{path:"/new-subscription",name:"newSubscription",component:mt},{path:"/subscriptions/:subscription_id",name:"subscriptions",component:Bt},{path:"/subscribers/:subscriber_id",name:"subscribers",component:At}]}),It=s("2f62"),Dt=s("bc3a"),Kt=s.n(Dt),Wt=()=>{return Kt.a.create({headers:{Accept:"application/json","Content-Type":"application/json"}})};i["a"].use(It["a"]);var zt=new It["a"].Store({state:{adminPropsList:[],subscriberList:[],subscriber:{},subscriberContact:{},subscriberProps:[],newSubscriber:{},newSubscriberContact:{}},mutations:{setAdminPropsList:(t,{result:e})=>{t.adminPropsList=e},setNewSubscriberDetails:(t,{result:e})=>{t.newSubscriber=e.subscriber,t.newSubscriberContact=e.contact},setSubscriberDetails:(t,{result:e})=>{t.subscriber=e.subscriber,t.subscriberContact=e.contact,t.subscriberProps=e.props},setSubscriberList:(t,{result:e})=>{t.subscriberList=e.subscribers}},actions:{loadAdminProperties:function({commit:t},e){let s="/api/v1/properties";Wt().get(s).then(e=>{t("setAdminPropsList",{result:e.data.data})},t=>{console.log(t)})},loadSubscribers:function({commit:t},e){let s="/api/v1/subscribers/";Wt().get(s).then(e=>{t("setSubscriberList",{result:e.data})},t=>{console.log(t)})},loadSubscriber:function({commit:t},e){let s="/api/v1/subscribers/"+e.subscriber_id;Wt().get(s).then(e=>{t("setSubscriberDetails",{result:e.data})},t=>{console.log(t)})},updateSubscriberProps:function({commit:t},e){let s="/api/v1/subscriber_props";Wt().put(s,{subscriber:this.state.subscriber,property:e.property,update_action:e.update_action}).then(e=>{t("setSubscriberDetails",{result:e.data})},t=>{console.log(t)})},updateSubscriber:function({commit:t},e){let s="/api/v1/subscribers/"+e.id;Wt().put(s,{contact:e}).then(e=>{t("setNewSubscriberDetails",{result:e.data})},t=>{console.log(t)})},createSubscriber:function({commit:t},e){let s="/api/v1/subscribers";Wt().post(s,{subscriber:e}).then(e=>{t("setNewSubscriberDetails",{result:e.data})},t=>{console.log(t)})}}});i["a"].config.productionTip=!1,new i["a"]({router:Rt,store:zt,render:t=>t(M)}).$mount("#app")},"6bfa":function(t,e,s){},c21d:function(t,e,s){"use strict";var i=s("6bfa"),r=s.n(i);r.a}});
//# sourceMappingURL=app.1a47fb0a.js.map
(self.webpackChunk=self.webpackChunk||[]).push([[914,554,410,230,457],{9554:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>m});var r=t(5166),s=(0,r.withScopeId)("data-v-8ce5572e");(0,r.pushScopeId)("data-v-8ce5572e");var o={class:"wrapper"},c={class:"main"},d={class:"content"},l=(0,r.createVNode)("footer",null,null,-1);(0,r.popScopeId)();var i=s((function(e,a,t,s,i,n){var u=(0,r.resolveComponent)("sidebar"),p=(0,r.resolveComponent)("topbar");return(0,r.openBlock)(),(0,r.createBlock)("div",o,[(0,r.createVNode)(u,{sidebar_collapse:i.sidebar_collapse},null,8,["sidebar_collapse"]),(0,r.createVNode)("div",c,[(0,r.createVNode)(p,{sidebar_collapse:i.sidebar_collapse,onSideBarToggle:a[1]||(a[1]=function(e){return i.sidebar_collapse=e})},null,8,["sidebar_collapse"]),(0,r.createVNode)("main",d,[(0,r.renderSlot)(e.$slots,"default",{},void 0,!0)]),l])])})),n=t(9230),u=t(9410);const p={name:"Admin",components:{Topbar:t(3457).default,Footer:u.default,Sidebar:n.default},data:function(){return{sidebar_collapse:!0}},methods:{},mounted:function(){}};p.render=i,p.__scopeId="data-v-8ce5572e";const m=p},9410:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>b});var r=t(5166),s=(0,r.withScopeId)("data-v-7aa72738");(0,r.pushScopeId)("data-v-7aa72738");var o={class:"footer"},c={class:"container-fluid"},d={class:"row text-muted"},l={class:"col-6 text-start"},i={class:"mb-0"},n={href:"index.html",class:"text-muted"},u=(0,r.createTextVNode)(" © Laravel v (PHP v) "),p=(0,r.createStaticVNode)('<div class="col-6 text-end" data-v-7aa72738><ul class="list-inline" data-v-7aa72738><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Support</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Help Center</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Privacy</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Terms</a></li></ul></div>',1);(0,r.popScopeId)();var m=s((function(e,a,t,s,m,f){return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("footer",o,[(0,r.createVNode)("div",c,[(0,r.createVNode)("div",d,[(0,r.createVNode)("div",l,[(0,r.createVNode)("p",i,[(0,r.createVNode)("a",n,[(0,r.createVNode)("strong",null,(0,r.toDisplayString)(m.footer.app_name),1)]),u])]),p])])])])}));const f={name:"Footer",data:function(){return{footer:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/footer",{}).then((function(a){e.footer=a.data}))}},mounted:function(){this.getDefaults()}};f.render=m,f.__scopeId="data-v-7aa72738";const b=f},9230:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>V});var r=t(5166),s=(0,r.withScopeId)("data-v-27fbff43");(0,r.pushScopeId)("data-v-27fbff43");var o={key:0,id:"sidebar",class:"sidebar"},c={class:"sidebar-content js-simplebar"},d={class:"align-middle"},l={class:"sidebar-nav"},i=(0,r.createVNode)("li",{class:"sidebar-header"}," Components ",-1),n=(0,r.createVNode)("i",{class:"fas fa-chart-area"},null,-1),u=(0,r.createTextVNode)(),p=(0,r.createVNode)("span",{class:"align-middle"},"Dashboard",-1),m=(0,r.createVNode)("a",{href:"#manageusers","data-bs-toggle":"collapse",role:"button","aria-expanded":"false","aria-controls":"collapseExample",class:"sidebar-link"},[(0,r.createVNode)("i",{class:"fas fa-users-cog"}),(0,r.createTextVNode)(),(0,r.createVNode)("span",{class:"align-middle"},"Manage Users")],-1),f=(0,r.createTextVNode)("Roles "),b=(0,r.createTextVNode)("Users ");(0,r.popScopeId)();var v=s((function(e,a,t,v,N,V){var h=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)(r.Transition,{name:"fade"},{default:s((function(){return[t.sidebar_collapse?((0,r.openBlock)(),(0,r.createBlock)("nav",o,[(0,r.createVNode)("div",c,[N.sidebar.home?((0,r.openBlock)(),(0,r.createBlock)(h,{key:0,class:"sidebar-brand",style:{"text-decoration":"unset"},href:N.sidebar.home},{default:s((function(){return[(0,r.createVNode)("span",d,(0,r.toDisplayString)(N.sidebar.appname),1)]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("ul",l,[i,N.sidebar.home?((0,r.openBlock)(),(0,r.createBlock)("li",{key:0,class:["sidebar-item",{active:V.isActive(N.sidebar.home)}]},[(0,r.createVNode)(h,{class:"sidebar-link",href:N.sidebar.home},{default:s((function(){return[n,u,p]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0),V.isUrl(N.sidebar.roles)||V.isUrl(N.sidebar.users)?((0,r.openBlock)(),(0,r.createBlock)("li",{key:1,class:["sidebar-item",{active:V.isActive(N.sidebar.roles)||V.isActive(N.sidebar.users)}]},[m,(0,r.createVNode)("ul",{id:"manageusers",class:["sidebar-dropdown list-unstyled collapse",{show:V.isActive(N.sidebar.roles)||V.isActive(N.sidebar.users)}]},[N.sidebar.roles?((0,r.openBlock)(),(0,r.createBlock)("li",{key:0,class:["sidebar-item",{active:V.isActive(N.sidebar.roles)}]},[(0,r.createVNode)(h,{class:"sidebar-link",href:N.sidebar.roles},{default:s((function(){return[f]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0),N.sidebar.users?((0,r.openBlock)(),(0,r.createBlock)("li",{key:1,class:["sidebar-item",{active:V.isActive(N.sidebar.users)}]},[(0,r.createVNode)(h,{class:"sidebar-link",href:N.sidebar.users},{default:s((function(){return[b]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0)],2)],2)):(0,r.createCommentVNode)("",!0)])])])):(0,r.createCommentVNode)("",!0)]})),_:1})])}));const N={name:"Sidebar",props:["sidebar_collapse"],data:function(){return{sidebar:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/sidebar",{}).then((function(a){e.sidebar=a.data}))},isUrl:function(e){var a=!1,t=this;return $.each(t.sidebar,(function(e){if(t.sidebar[e]===window.location.href)return a=!0})),a},isActive:function(e){return window.location.href===e}},mounted:function(){this.getDefaults()}};N.render=v,N.__scopeId="data-v-27fbff43";const V=N},3457:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var r=t(5166),s=(0,r.withScopeId)("data-v-8b6753f0");(0,r.pushScopeId)("data-v-8b6753f0");var o={class:"navbar navbar-expand navbar-light navbar-bg"},c=(0,r.createVNode)("i",{class:"hamburger align-self-center"},null,-1),d={class:"navbar-collapse collapse"},l={class:"navbar-nav navbar-align"},i={class:"nav-item dropdown"},n={class:"nav-link dropdown-toggle d-none d-sm-inline-block",href:"#","data-bs-toggle":"dropdown"},u={class:"dropdown-menu dropdown-menu-end"},p=(0,r.createVNode)("i",{class:"align-middle me-1","data-feather":"settings"},null,-1),m=(0,r.createTextVNode)(" Settings & Privacy "),f=(0,r.createVNode)("a",{class:"dropdown-item",href:"#"},[(0,r.createVNode)("i",{class:"align-middle me-1","data-feather":"help-circle"}),(0,r.createTextVNode)(" Help Center ")],-1),b=(0,r.createVNode)("div",{class:"dropdown-divider"},null,-1),v=(0,r.createVNode)("a",{class:"dropdown-item",href:"/logout"},"Log out",-1);(0,r.popScopeId)();var N=s((function(e,a,t,s,N,V){return(0,r.openBlock)(),(0,r.createBlock)("nav",o,[(0,r.createVNode)("a",{class:"sidebar-toggle d-flex",onClick:a[1]||(a[1]=function(){return V.toggleSideBar&&V.toggleSideBar.apply(V,arguments)})},[c]),(0,r.createVNode)("div",d,[(0,r.createVNode)("ul",l,[(0,r.createVNode)("li",i,[(0,r.createVNode)("a",n,[(0,r.createVNode)("img",{src:N.top_bar.profile_pic,class:"avatar img-fluid rounded me-1"},null,8,["src"]),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(N.top_bar.name),1)]),(0,r.createVNode)("div",u,[(0,r.createVNode)("a",{class:"dropdown-item",href:N.top_bar.settings_privacy},[p,m],8,["href"]),f,b,v])])])])])}));const V={name:"Topbar",props:["sidebar_collapse"],data:function(){return{top_bar:{}}},methods:{toggleSideBar:function(){this.$emit("sideBarToggle",!this.sidebar_collapse)},getDefaults:function(){var e=this;axios.post("/admin/top-bar",{}).then((function(a){e.top_bar=a.data}))}},mounted:function(){this.getDefaults()}};V.render=N,V.__scopeId="data-v-8b6753f0";const h=V},6914:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>x});var r=t(5166),s=(0,r.withScopeId)("data-v-b1def0d8");(0,r.pushScopeId)("data-v-b1def0d8");var o={class:"content"},c={class:"container-fluid p-0"},d=(0,r.createVNode)("h1",{class:"h3 mb-3"},"Settings",-1),l={class:"row"},i=(0,r.createVNode)("div",{class:"col-md-3 col-xl-2"},[(0,r.createVNode)("div",{class:"card"},[(0,r.createVNode)("div",{class:"card-header"},[(0,r.createVNode)("h5",{class:"card-title mb-0"},"Profile Settings")]),(0,r.createVNode)("div",{class:"list-group list-group-flush",role:"tablist"},[(0,r.createVNode)("a",{class:"list-group-item list-group-item-action active","data-bs-toggle":"list",href:"#account",role:"tab"}," Account "),(0,r.createVNode)("a",{class:"list-group-item list-group-item-action","data-bs-toggle":"list",href:"#password",role:"tab"}," Password "),(0,r.createVNode)("a",{class:"list-group-item list-group-item-action","data-bs-toggle":"list",href:"#",role:"tab"}," Delete account ")])])],-1),n={class:"col-md-9 col-xl-10"},u={class:"tab-content"},p={class:"tab-pane fade show active",id:"account",role:"tabpanel"},m={class:"card"},f=(0,r.createVNode)("div",{class:"card-header"},[(0,r.createVNode)("h5",{class:"card-title mb-0"},"Public info")],-1),b={class:"card-body"},v={class:"row"},N=(0,r.createVNode)("div",{class:"col-md-8"},[(0,r.createVNode)("div",{class:"mb-3"},[(0,r.createVNode)("label",{class:"form-label",for:"inputUsername"},"Full Name"),(0,r.createVNode)("input",{type:"text",class:"form-control",id:"inputUsername",placeholder:"Username"})])],-1),V={class:"col-md-4"},h={key:0,src:"https://avatars.dicebear.com/api/jdenticon/.svg",class:"img-responsive mb-4 shadow-sm",width:"128",height:"128"},g=(0,r.createVNode)("button",{class:"btn btn-primary mt-2",type:"submit"},"Submit",-1),w=(0,r.createVNode)("br",null,null,-1),k=(0,r.createVNode)("small",null,"For best results, use an image at least 128px by 128px in .jpg format",-1),_=(0,r.createVNode)("button",{type:"submit",class:"btn btn-primary"},"Save changes",-1),y=(0,r.createVNode)("div",{class:"tab-pane fade",id:"password",role:"tabpanel"},[(0,r.createVNode)("div",{class:"card"},[(0,r.createVNode)("div",{class:"card-header"},[(0,r.createVNode)("h5",{class:"card-title mb-0"},"Change Password")]),(0,r.createVNode)("div",{class:"card-body"},[(0,r.createVNode)("form",null,[(0,r.createVNode)("div",{class:"mb-3"},[(0,r.createVNode)("label",{class:"form-label",for:"inputPasswordCurrent"},"Current password"),(0,r.createVNode)("input",{type:"password",class:"form-control",id:"inputPasswordCurrent"}),(0,r.createVNode)("small",null,[(0,r.createVNode)("a",{href:"#"},"Forgot your password?")])]),(0,r.createVNode)("div",{class:"mb-3"},[(0,r.createVNode)("label",{class:"form-label",for:"inputPasswordNew"},"New password"),(0,r.createVNode)("input",{type:"password",class:"form-control",id:"inputPasswordNew"})]),(0,r.createVNode)("div",{class:"mb-3"},[(0,r.createVNode)("label",{class:"form-label",for:"inputPasswordNew2"},"Verify password"),(0,r.createVNode)("input",{type:"password",class:"form-control",id:"inputPasswordNew2"})]),(0,r.createVNode)("button",{type:"submit",class:"btn btn-primary"},"Save changes")])])])],-1);(0,r.popScopeId)();var S=s((function(e,a,t,S,B,x){var C=(0,r.resolveComponent)("Admin");return(0,r.openBlock)(),(0,r.createBlock)(C,null,{default:s((function(){return[(0,r.createVNode)("div",null,[(0,r.createVNode)("main",o,[(0,r.createVNode)("div",c,[d,(0,r.createVNode)("div",l,[i,(0,r.createVNode)("div",n,[(0,r.createVNode)("div",u,[(0,r.createVNode)("div",p,[(0,r.createVNode)("div",m,[f,(0,r.createVNode)("div",b,[(0,r.createVNode)("form",null,[(0,r.createVNode)("div",v,[N,(0,r.createVNode)("div",V,[(0,r.createVNode)("form",{onSubmit:a[2]||(a[2]=(0,r.withModifiers)((function(){return x.submit&&x.submit.apply(x,arguments)}),["prevent"])),class:"text-center"},[t.data.profile_pic_link?((0,r.openBlock)(),(0,r.createBlock)("img",{key:1,src:t.data.profile_pic_link,class:"img-responsive mb-4 shadow-sm",width:"128",height:"128"},null,8,["src"])):((0,r.openBlock)(),(0,r.createBlock)("img",h)),(0,r.createVNode)("input",{type:"file",onInput:a[1]||(a[1]=function(e){return B.form.avatar=e.target.files[0]})},null,32),B.form.progress?((0,r.openBlock)(),(0,r.createBlock)("progress",{key:2,value:B.form.progress.percentage,max:"100"},(0,r.toDisplayString)(B.form.progress.percentage)+"% ",9,["value"])):(0,r.createCommentVNode)("",!0),g,w,k],32)])]),_])])])]),y])])])])])])]})),_:1})}));const B={name:"SettingsPrivacy",components:{Admin:t(9554).default},props:{data:Object},data:function(){return{form:this.$inertia.form({avatar:null},{resetOnSuccess:!1})}},methods:{submit:function(){if(null===this.form.avatar||void 0===this.form.avatar)return alertify.error("Please select a file!"),!1;this.form.post(this.data.upload_photo_link)}}};B.render=S,B.__scopeId="data-v-b1def0d8";const x=B}}]);
//# sourceMappingURL=914.js.map?id=7803efeafa51be5aaaca
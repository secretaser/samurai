"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[870],{870:function(n,r,e){e.r(r),e.d(r,{default:function(){return y}});var i=e(9439),t=e(704),o="Login_content__50IZh",s="Login_header__pcNc7",c="Login_form__Oc9OD",a="Login_inputLogin__4Eo4y",l="Login_inputPassword__U4-XF",u="Login_inputCaptcha__RyvZo",d="Login_captchaContainer__6X-GE",h="Login_imageContainer__JtLUq",m="Login_submitContainer__5AFAq",_="Login_submit__aGhYm",f="Login_summaryError__21UXA",p="Login_info__looking__8IwbC",j="Login_info__lookingActive__hRPBX",x="Login_info__checkbox__9O2+C",g=e(4654),v=e(5304),Z=e(8687),C=e(470),b=e(7689),N=e(2791),L=e(184),k=(0,t.Z)({form:"login"})((function(n){var r=n.handleSubmit,e=n.error,t=n.captchaUrl,o=(0,N.useState)(!1),s=(0,i.Z)(o,2),Z=s[0],C=s[1];return(0,L.jsxs)("form",{onSubmit:r,className:c,children:[(0,g.jR)(g.s5,[v.C],"Email...","email",a),(0,g.jR)(g.s5,[v.C],"Password...","password",l,{type:"password"}),t&&(0,L.jsxs)("div",{className:d,children:[(0,L.jsx)("div",{className:h,children:(0,L.jsx)("img",{src:t,alt:""})}),(0,g.jR)(g.s5,[v.C],"Are you a robot???","captcha",u)]}),(0,L.jsxs)("div",{onClick:function(){return C(!Z)},className:Z?j:p,children:[(0,g.jR)(g.s5,[],null,"rememberMe",x,{type:"checkbox"}),(0,L.jsx)("label",{for:"rememberMe",children:"Remember me"})]}),e&&(0,L.jsx)("div",{className:f,children:e}),(0,L.jsx)("div",{className:m,children:(0,L.jsx)("button",{className:_,children:"login"})})]})})),y=(0,Z.$j)((function(n){return{isAuth:n.auth.isAuth,userId:n.auth.userId,captchaUrl:n.auth.captchaUrl}}),{login:C.x4})((function(n){return n.isAuth?(0,L.jsx)(b.Fg,{to:"/profile/".concat(n.userId)}):(0,L.jsxs)("div",{className:o,children:[(0,L.jsx)("div",{className:s,children:"Welcome"}),(0,L.jsx)(k,{onSubmit:function(r){n.login(r.email,r.password,r.rememberMe,r.captcha)},captchaUrl:n.captchaUrl})]})}))},4654:function(n,r,e){e.d(r,{s5:function(){return g},vs:function(){return Z},gx:function(){return x},jR:function(){return v},yj:function(){return b}});var i=e(8683),t=e(5987),o=e(6139),s="FormsControls_formControl__lnsDE",c="FormsControls_error__yDObs",a="FormsControls_errorMessage__WP70X",l="FormsControls_errorMessageAuth__d6Igt",u="FormsControls_formControlInfo__m1dBz",d=e(184),h=["input","meta","child"],m=["input","meta","child"],_=["input","meta","child"],f=["input","meta","child"],p=["input","meta","child"],j=function(n){n.input;var r=n.meta,e=(n.child,(0,t.Z)(n,h)),i=r.touched&&r.error;return(0,d.jsxs)("div",{className:s+" "+(i?c:""),children:[e.children,i&&(0,d.jsx)("div",{className:a,children:(0,d.jsx)("span",{children:r.error})})]})},x=function(n){var r=n.input,e=(n.meta,n.child,(0,t.Z)(n,m));return(0,d.jsx)(j,(0,i.Z)((0,i.Z)({},n),{},{children:(0,d.jsx)("textarea",(0,i.Z)((0,i.Z)({},r),e))}))},g=function(n){var r=n.input,e=n.meta,o=e.touched,a=e.error,u=(n.child,(0,t.Z)(n,_)),h=o&&a;return(0,d.jsxs)("div",{className:s+" "+(h?c:""),children:[(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},r),u)),h&&(0,d.jsx)("div",{className:l,children:(0,d.jsx)("div",{children:a})})]})},v=function(n,r,e,t,s){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return(0,d.jsx)(o.Z,(0,i.Z)({component:n,placeholder:e,name:t,validate:r,className:s},c))},Z=function(n){var r=n.input,e=(n.meta,n.child,(0,t.Z)(n,f));return(0,d.jsx)(C,(0,i.Z)((0,i.Z)({},n),{},{children:(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},r),e))}))},C=function(n){n.input;var r=n.meta,e=(n.child,(0,t.Z)(n,p)),i=r.touched&&r.error;return(0,d.jsx)("div",{className:u+" "+(i?c:""),children:e.children})},b=function(n,r,e,t){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return(0,d.jsx)(o.Z,(0,i.Z)({component:n,placeholder:r,name:e,className:t},s))}},5304:function(n,r,e){e.d(r,{C:function(){return i},D:function(){return t}});var i=function(n){if(!n)return"Field is required"},t=function(n){return function(r){if(r&&r.length>n)return"Max length is ".concat(n," symbols")}}}}]);
//# sourceMappingURL=870.c76c81cc.chunk.js.map
"use strict";(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[550],{1713:function(o,n,t){t.r(n),t.d(n,{default:function(){return no}});var i=t(8683),s=t(5671),e=t(3144),_=t(136),a=t(516),r=t(2791),c=t(8687),l=t(1559),f=t(7689),d=t(1548),u=t(7781),h=t(3433),p="Post_posts__post__RgREg",m="Post_posts__pic__c7ukC",v="Post_posts__posttext__0Xxy7",g="Post_posts__likes__22AWV",x="Post_posts__like__ztY+k",j="Post_posts__count__PRkrd",P="Post_loading__pic__2pFNz",N="Post_loading__posttext__reodt",k=t.p+"static/media/like2.65e71c9cb415e8aa5a75.png",I=t(577),b=t(184),Z=function(o){return(0,b.jsxs)("div",{className:p,children:[(0,b.jsx)("div",{className:m,children:(0,b.jsx)("img",{src:o.authorPhoto||I,alt:""})}),(0,b.jsx)("div",{className:v,children:(0,b.jsx)("p",{children:o.text})}),(0,b.jsxs)("div",{className:g,children:[(0,b.jsx)("div",{className:x,children:(0,b.jsx)("button",{children:(0,b.jsx)("img",{src:k,alt:""})})}),(0,b.jsx)("div",{className:j,children:o.likes})]})]})},L="MyPosts_posts__VLhpH",y="MyPosts_posts__new__GX7JL",S="MyPosts_posts__input__m0vnv",C="MyPosts_posts__button__hxx3v",F="MyPosts_posts__wall__RjDdY",A="MyPosts_loading__header__23bzB",w="MyPosts_loading__container__3DMjV",H="MyPosts_loading__newPost__TIdTu",U="MyPosts_loading__button__r0geF",M=t(5304),T=t(4654),D=t(6139),E=t(704),J=(0,E.Z)({form:"newPost"})((function(o){return(0,b.jsxs)("form",{onSubmit:o.handleSubmit,className:y,children:[(0,b.jsx)(D.Z,{className:S,placeholder:"WASSUUUUUUUUUUP",component:"textarea",name:"newPostBody",validate:[M.C]}),(0,b.jsx)("button",{className:C,children:"Post"})]})})),O=function(o){console.log("render my posts");var n=(0,h.Z)(o.postData).reverse().map((function(n){return(0,b.jsx)(Z,{likes:n.likes,text:n.text,authorPhoto:o.authorPhoto},n.id)}));return(0,b.jsxs)("div",{className:L,children:[(0,b.jsx)("h2",{children:"My posts"}),(0,b.jsx)(J,{onSubmit:function(n){o.addPostThunk(n.newPostBody)}}),(0,b.jsx)("div",{className:F,children:n})]})},B=(0,c.$j)((function(o){return{postData:o.profilePage.postData,info:o.me,newPostText:o.profilePage.newPostText,authorPhoto:o.profilePage.profile.photos.small}}),{addPost:l.q2,addPostThunk:l.Q_})(O),R=function(){for(var o=[],n=0;n<5;n++)o[n]=(0,b.jsxs)("div",{className:p,children:[(0,b.jsx)("div",{className:P}),(0,b.jsx)("div",{className:N})]});return(0,b.jsxs)("div",{className:L,children:[(0,b.jsx)("div",{className:A}),(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("div",{className:H}),(0,b.jsx)("div",{className:U})]}),(0,b.jsx)("div",{className:F,children:o})]})},z=t(9439),V=t(4550),W={content__cover:"Profile__Info_content__cover__5TNK7",info:"Profile__Info_info__qbrtZ",info__item:"Profile__Info_info__item__j006n",info__info:"Profile__Info_info__info__ZfEXi",info__photo:"Profile__Info_info__photo__pien-",info__photo__upd:"Profile__Info_info__photo__upd__jjtex",info__photo__upd__icon:"Profile__Info_info__photo__upd__icon__NKjZE",info__updatePhoto:"Profile__Info_info__updatePhoto__MWsF4",info__name:"Profile__Info_info__name__6x60-",info__additional:"Profile__Info_info__additional__wDuyu",info__contactsHead:"Profile__Info_info__contactsHead__AbIvA",info__looking:"Profile__Info_info__looking__BatM+",info__lookingActive:"Profile__Info_info__lookingActive__ptHCH",info__checkbox:"Profile__Info_info__checkbox__2Jczk",info__contactName:"Profile__Info_info__contactName__kiG2F",info__input:"Profile__Info_info__input__uLUgk",info__contacts:"Profile__Info_info__contacts__4TGRx",info__contactsActive:"Profile__Info_info__contactsActive__9UgQ0",info__contact:"Profile__Info_info__contact__rBo+8",info__contactNull:"Profile__Info_info__contactNull__s41EB",info__error:"Profile__Info_info__error__7Wg9+",status:"Profile__Info_status__3NOE2",status__text:"Profile__Info_status__text__6QQq0",status__inputContainer:"Profile__Info_status__inputContainer__gNcmB",loadingCover:"Profile__Info_loadingCover__BpljA",loading:"Profile__Info_loading__t2bTR",infoLoading:"Profile__Info_infoLoading__P9m96",infoLoading__photo:"Profile__Info_infoLoading__photo__NeF0k",infoLoading__info:"Profile__Info_infoLoading__info__7m2AK",infoLoading__name:"Profile__Info_infoLoading__name__TWH0V",infoLoading__status:"Profile__Info_infoLoading__status__wZFAC",infoLoading__additional:"Profile__Info_infoLoading__additional__7HUJS",infoLoading__contacts:"Profile__Info_infoLoading__contacts__KpWtG",infoLoading__looking:"Profile__Info_infoLoading__looking__5ciSx",infoLoading__contactsHead:"Profile__Info_infoLoading__contactsHead__5IZAC",infoLoading__contactsHeader:"Profile__Info_infoLoading__contactsHeader__ndfmE",infoLoading__contactName:"Profile__Info_infoLoading__contactName__pCewu"},q=function(o){var n=(0,r.useState)(!1),t=(0,z.Z)(n,2),i=t[0],s=t[1],e=(0,r.useState)(o.status),_=(0,z.Z)(e,2),a=_[0],c=_[1];(0,r.useEffect)((function(){c(o.status)}),[o.status]);return(0,b.jsxs)("div",{className:W.status,children:[!i&&(0,b.jsx)("div",{onClick:function(){s(!0)},className:W.status__text,children:o.status||"How are you today?"}),i&&(0,b.jsx)("div",{className:W.status__inputContainer,children:(0,b.jsx)("input",{onBlur:function(){s(!1),a!==o.status&&o.updateStatus(a)},onChange:function(o){c(o.currentTarget.value)},value:a,placeholder:"How are you today?",autoFocus:!0})})]})},G=(0,E.Z)({form:"profileInfo"})((function(o){var n=o.profile,t=o.status,i=o.updateStatus,s=o.handleSubmit,e=(o.initialValues,o.error),_=(0,r.useState)(!1),a=(0,z.Z)(_,2),c=a[0],l=a[1],f=function(o){o.target.closest("form")||(s(),l(!1))};(0,r.useEffect)((function(){return console.log("mounted"),window.addEventListener("click",f),function(){window.removeEventListener("click",f)}}),[]);var d=(0,r.useState)(n.lookingForAJob),u=(0,z.Z)(d,2),h=u[0],p=u[1],m=Object.keys(n.contacts).map((function(o){return(0,b.jsxs)("div",{className:W.info__contactName,children:[o,": ",(0,T.yj)(T.vs,"Fill me!","contacts."+o,W.info__input)]},o)}));return(0,b.jsxs)("form",{className:W.info__info,onSubmit:s,children:[(0,b.jsx)("div",{className:W.info__name,children:n.fullName}),(0,b.jsx)(q,{status:t,updateStatus:i}),(0,b.jsx)("div",{className:W.info__additional,children:(0,b.jsxs)("div",{className:c?W.info__contactsActive:W.info__contacts,onClick:function(){l(!0)},children:[(0,b.jsxs)("div",{onClick:function(){return p(!h)},className:h?W.info__lookingActive:W.info__looking,children:[(0,b.jsx)(D.Z,{checked:h,component:"input",type:"checkbox",name:"lookingForAJob",className:W.info__checkbox}),(0,b.jsx)("label",{for:"lookingForAJob",children:c?"Looking for a job?":n.lookingForAJob?"Looking for a job":"Not looking for a job"})]}),(0,b.jsx)("div",{className:W.info__contactsHead,children:"Contacts:"}),m]})}),e&&(0,b.jsx)("div",{className:W.info__error,children:e})]})})),Q=t.p+"static/media/bg.e9a244b822e6ccaf5bb5.png",K=function(o){var n=o.profile,t=o.status,i=(o.updateStatus,o.goToEditmode,Object.keys(n.contacts).map((function(o){return(0,b.jsxs)("div",{className:W.info__contactName,children:[o,": ",n.contacts[o]?(0,b.jsx)("a",{href:n.contacts[o],target:"_blank",className:W.info__contact,children:n.contacts[o]}):(0,b.jsx)("div",{className:W.info__contactNull,children:"unknown"})]})})));return(0,b.jsxs)("div",{className:W.info__info,children:[(0,b.jsx)("div",{className:W.info__name,children:n.fullName}),(0,b.jsx)("div",{className:W.status,children:(0,b.jsx)("div",{className:W.status__text,children:t||"No status"})}),(0,b.jsx)("div",{className:W.info__additional,children:(0,b.jsxs)("div",{className:W.info__contacts,children:[(0,b.jsx)("div",{className:W.info__looking,children:n.lookingForAJob?"Looking for a job":"Isn't looking for a job"}),(0,b.jsx)("div",{className:W.info__contactsHead,children:"Contacts:"}),i]})})]})},X=function(o){var n=o.profile,t=o.status,s=o.updateStatus,e=o.isOwner,_=o.savePhoto,a=o.saveInfo,c=(o.isFetching,(0,r.useState)(!1)),l=(0,z.Z)(c,2),f=(l[0],l[1]);return n?(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:W.content__cover,children:(0,b.jsx)("img",{src:Q,alt:""})}),(0,b.jsx)("div",{className:W.content__item,children:(0,b.jsxs)("div",{className:W.info,children:[(0,b.jsx)("div",{className:W.info__item,children:(0,b.jsxs)("div",{className:W.info__photo,children:[(0,b.jsx)("img",{src:n.photos.large||I,alt:""}),e&&(0,b.jsx)("div",{className:W.info__photo__upd,children:(0,b.jsx)("div",{className:W.info__photo__upd__icon,children:"+"})}),e&&(0,b.jsx)("input",{type:"file",className:W.info__updatePhoto,onChange:function(o){o.target.files.length&&_(o.target.files[0])}})]})}),e?(0,b.jsx)(G,{initialValues:n,profile:n,status:t,updateStatus:s,onSubmit:function(o){for(var t=(0,i.Z)((0,i.Z)({},n),{},{lookingForAJob:o.lookingForAJob,contacts:(0,i.Z)((0,i.Z)({},n.contacts),o.contacts)}),s=0;s<Object.keys(t.contacts).length;s++)if(t.contacts[Object.keys(t.contacts)[s]]!==n.contacts[Object.keys(t.contacts)[s]]||t.lookingForAJob!==n.lookingForAJob){delete t.photos,a(t).then((function(){f(!1)})).catch((function(){})),console.log("sent");break}f(!1)}}):(0,b.jsx)(K,{profile:n,status:t,updateStatus:s,isOwner:e,goToEditmode:function(){f(!0)}})]})})]}):(0,b.jsx)(V.Z,{})},$=function(){for(var o=[],n=0;n<8;n++)o[n]=(0,b.jsx)("div",{className:W.infoLoading__contactName});return(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:W.loadingCover,children:(0,b.jsx)("img",{src:"#",alt:""})}),(0,b.jsx)("div",{className:W.content__item,children:(0,b.jsxs)("div",{className:W.infoLoading,children:[(0,b.jsx)("div",{className:W.infoLoading__photo}),(0,b.jsxs)("div",{className:W.infoLoading__info,children:[(0,b.jsx)("div",{className:W.infoLoading__name}),(0,b.jsx)("div",{className:W.infoLoading__status}),(0,b.jsx)("div",{className:W.infoLoading__additional,children:(0,b.jsxs)("div",{className:W.infoLoading__contacts,children:[(0,b.jsx)("div",{className:W.infoLoading__looking}),(0,b.jsxs)("div",{className:W.infoLoading__contactsHead,children:[(0,b.jsx)("div",{className:W.infoLoading__contactsHeader}),o]})]})})]})]})})]})},Y=function(o){return(0,b.jsxs)("div",{children:[o.isFetching||!o.profile?(0,b.jsx)($,{}):(0,b.jsx)(X,{profile:o.profile,status:o.status,updateStatus:o.updateStatus,isOwner:o.isOwner,savePhoto:o.savePhoto,setProfileInfoSuccess:o.setProfileInfoSuccess,saveInfo:o.saveInfo,isFetching:o.isFetching}),o.isFetching||!o.profile?(0,b.jsx)(R,{}):(0,b.jsx)(B,{})]})},oo=function(o){(0,_.Z)(t,o);var n=(0,a.Z)(t);function t(){return(0,s.Z)(this,t),n.apply(this,arguments)}return(0,e.Z)(t,[{key:"refreshProfile",value:function(){var o=this.props.router.params.userId;o||(o=this.props.authorizedUserId),this.props.getProfile(o),this.props.getStatus(o)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(o,n){this.props.router.location.pathname!==o.router.location.pathname&&this.refreshProfile()}},{key:"render",value:function(){return(0,b.jsx)(Y,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,isOwner:!this.props.router.params.userId||this.props.router.params.userId==this.props.authorizedUserId,savePhoto:this.props.savePhoto,setProfileInfoSuccess:this.props.setProfileInfoSuccess,saveInfo:this.props.saveInfo,isFetching:this.props.isFetching}))}}]),t}(r.Component);var no=(0,u.qC)((0,c.$j)((function(o){return{profile:o.profilePage.profile,status:o.profilePage.status,authorizedUserId:o.auth.userId,isAuth:o.auth.isAuth,isFetching:o.profilePage.isFetching}}),{getProfile:l.Ai,updateStatus:l.Nf,getStatus:l.lR,setProfile:l.RG,setPhotoSuccess:l.Qp,savePhoto:l.Ju,setProfileInfoSuccess:l.Ci,saveInfo:l.Mt}),d.D,(function(o){return function(n){var t=(0,f.TH)(),s=(0,f.s0)(),e=(0,f.UO)();return(0,b.jsx)(o,(0,i.Z)((0,i.Z)({},n),{},{router:{location:t,navigate:s,params:e}}))}}))(oo)},4654:function(o,n,t){t.d(n,{s5:function(){return h},vs:function(){return m},jR:function(){return p},yj:function(){return g}});var i=t(8683),s=t(5987),e=t(6139),_="FormsControls_formControl__lnsDE",a="FormsControls_error__yDObs",r="FormsControls_errorMessageAuth__d6Igt",c="FormsControls_formControlInfo__m1dBz",l=t(184),f=["input","meta","child"],d=["input","meta","child"],u=["input","meta","child"],h=function(o){var n=o.input,t=o.meta,e=t.touched,c=t.error,d=(o.child,(0,s.Z)(o,f)),u=e&&c;return(0,l.jsxs)("div",{className:_+" "+(u?a:""),children:[(0,l.jsx)("input",(0,i.Z)((0,i.Z)({},n),d)),u&&(0,l.jsx)("div",{className:r,children:(0,l.jsx)("div",{children:c})})]})},p=function(o,n,t,s,_){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return(0,l.jsx)(e.Z,(0,i.Z)({component:o,placeholder:t,name:s,validate:n,className:_},a))},m=function(o){var n=o.input,t=(o.meta,o.child,(0,s.Z)(o,d));return(0,l.jsx)(v,(0,i.Z)((0,i.Z)({},o),{},{children:(0,l.jsx)("input",(0,i.Z)((0,i.Z)({},n),t))}))},v=function(o){o.input;var n=o.meta,t=(o.child,(0,s.Z)(o,u)),i=n.touched&&n.error;return(0,l.jsx)("div",{className:c+" "+(i?a:""),children:t.children})},g=function(o,n,t,s){var _=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return(0,l.jsx)(e.Z,(0,i.Z)({component:o,placeholder:n,name:t,className:s},_))}},1548:function(o,n,t){t.d(n,{D:function(){return u}});var i=t(8683),s=t(5671),e=t(3144),_=t(136),a=t(516),r=t(2791),c=t(8687),l=t(7689),f=t(184),d=function(o){return{isAuth:o.auth.isAuth}},u=function(o){var n=function(n){(0,_.Z)(r,n);var t=(0,a.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,e.Z)(r,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(o,(0,i.Z)({},this.props)):(0,f.jsx)(l.Fg,{to:"/login"})}}]),r}(r.Component);return(0,c.$j)(d)(n)}},5304:function(o,n,t){t.d(n,{C:function(){return i},D:function(){return s}});var i=function(o){if(!o)return"Field is required"},s=function(o){return function(n){if(n&&n.length>o)return"Max length is ".concat(o," symbols")}}},577:function(o,n,t){o.exports=t.p+"static/media/profileicon.b854b6fa60316802f9b9.jpg"}}]);
//# sourceMappingURL=550.b2a9e090.chunk.js.map
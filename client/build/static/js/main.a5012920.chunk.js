(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,a,t){e.exports=t(202)},202:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=t(57),i=t(58),s=t(67),u=t(60),m=t(59),d=t(68),h=t(33),p=t(13),g=t(96),f=t(253),b=t(287),E=t(282),v=t(258),y=t(63),O=t.n(y),j=(t(201),Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),width:"100%"}},container:{padding:30,textAlign:"center"},textField:{width:"100%",margin:10},signInBtn:{display:"flex",alignItems:"center",justifyContent:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},paper:{minWidth:300,marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},button:{backgroundColor:"#f5f5f5",fontWeight:600,width:"100%",margin:10}}}))),N=["Facebook","Linkedin","Google"];function k(e){var a=e.handleAuthenticated,t=j(),n=r.a.useState(null),l=Object(p.a)(n,2),c=l[0],o=l[1],i=r.a.useState(null),s=Object(p.a)(i,2),u=s[0],m=s[1],d=function(e){window.location.href="/api/auth/"+e.target.name.toLowerCase()};return r.a.createElement(f.a,{container:!0,justify:"center"},r.a.createElement(f.a,{item:!0,className:t.container},r.a.createElement("div",{className:t.paper},r.a.createElement(b.a,{className:t.avatar},r.a.createElement(O.a,null)),N.map((function(e,a){return r.a.createElement(E.a,{className:t.button,color:"secondary",key:a,value:e,name:e,variant:"outlined",type:"button",onClick:d})})),r.a.createElement(E.a,{className:t.textField,id:"username",name:"username",label:"Username",variant:"outlined",type:"text",onChange:function(e){o(e.target.value)}}),r.a.createElement(E.a,{className:t.textField,id:"password",name:"password",label:"Password",variant:"outlined",type:"password",onChange:function(e){m(e.target.value)}}),r.a.createElement(v.a,{variant:"outlined",type:"submit",size:"large",color:"primary",onClick:function(e){var t=null,n=null;n={username:c,password:u},t={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With","Content-Type":"application/json",Accept:"application/json"},fetch("/auth/local/login",{method:"POST",headers:t,body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log("".concat(JSON.stringify(e))),a(e)})).catch((function(e){return console.log(e)}))}},"Login"))))}var S=t(259),C=t(260),w=t(51),x=t(261),A=t(100),T=t.n(A),P=Object(g.a)((function(e){return{root:{height:80,bottom:0,backgroundColor:"#f5f5f5",border:"1px solid #f5f5f5"},toolbar:{margin:"auto",justifyContent:"center"},typography:{margin:"auto"},link:{color:T.a[800],fontWeight:700,justifyContent:"center",verticalAlign:"middle"}}})),D=function(e){var a=P(),t=r.a.useState((new Date).getFullYear()+"."),n=Object(p.a)(t,1)[0];return r.a.createElement(S.a,{position:"static",className:a.root},r.a.createElement(C.a,null,r.a.createElement(w.a,{color:"textSecondary",className:a.typography},"copyright \xa9 ",r.a.createElement(x.a,{className:a.link,href:"http://tikkidinh.com"},"Tikki Dinh")," ",n)))},L=t(262),W=[{name:"SSO AUTHENTICATION",component:"/"},{name:"Dashboard",component:"/dashboard"},{name:"Signup",component:"/signup"}],F=Object(g.a)((function(e){return{appBar:{display:"flex",padding:15},toolbarBtn:{flexGrow:1,justifyContent:"left",paddingRight:15},menuBtn:{margin:e.spacing(1,1.5)},button:{size:25},link:{textAlign:"left",color:L.a[400],textDecoration:"none","&:hover":{textDecoration:"none",fontWeight:"bold",color:L.a[800]}}}})),B=function(e){var a=F();return r.a.createElement(S.a,{color:"default",position:"static",className:a.appBar},r.a.createElement(C.a,null,r.a.createElement(w.a,{variant:"h5",color:"textSecondary",className:a.toolbarBtn},r.a.createElement(x.a,{className:a.link,href:W[0].component},W[0].name)),W.filter((function(e,a){return a>=1})).map((function(e,t){return r.a.createElement(v.a,{variant:"contained",key:t,className:a.menuBtn,href:e.component},r.a.createElement(w.a,{variant:"subtitle1",color:"secondary"},e.name))}))))},I=Object(g.a)((function(e){return{root:{minHeight:"100%"}}})),H=function(e){var a=e.handleAuthenticated,t=I();return r.a.createElement("div",{className:t.root},r.a.createElement(B,null),r.a.createElement(k,{handleAuthenticated:a}),r.a.createElement(D,null))},q=Object(g.a)((function(e){return{root:{height:"100%"}}})),J=function(e){var a=q();return r.a.createElement("div",{className:a.root},r.a.createElement(B,null),"this is dashboard",r.a.createElement(D,null))},R=t(264),z=t(279),G=t(263),M=t(54),U=t.n(M),_=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},errorTypography:{marginTop:e.spacing(1),fontWeight:800}}}));function K(){var e=_(),a=r.a.useState(""),t=Object(p.a)(a,2),n=t[0],l=t[1],c=r.a.useState(null),o=Object(p.a)(c,2),i=o[0],s=o[1],u=r.a.useState(""),m=Object(p.a)(u,2),d=m[0],h=m[1],g=r.a.useState(null),y=Object(p.a)(g,2),j=y[0],N=y[1],k=r.a.useState(""),S=Object(p.a)(k,2),C=S[0],A=S[1],T=r.a.useState(null),P=Object(p.a)(T,2),D=P[0],L=P[1],W=r.a.useState(""),F=Object(p.a)(W,2),B=F[0],I=F[1],H=r.a.useState(null),q=Object(p.a)(H,2),J=q[0],M=q[1],K=r.a.useState(""),X=Object(p.a)(K,2),V=X[0],Y=X[1],Q=r.a.useState(!1),Z=Object(p.a)(Q,2),$=Z[0],ee=Z[1],ae=function(e,a){switch(a){case"email":return U.a.isEmail(e.target.value);case"name":return U.a.isAlpha(e.target.value,["en-US"]);case"password":return U.a.isLength(e.target.value,{min:6});default:return null}},te=function(e){switch(e.target.name){case"firstName":l(e.target.value),ae(e,"name")?s(null):s("* Firstname should be alphabe characters and cannot empty.");break;case"lastName":h(e.target.value),ae(e,"name")?N(null):N("* Firstname should be alphabe characters and cannot empty.");break;case"email":A(e.target.value.toLowerCase()),ae(e,"email")?L(null):L("* Email is incorrect and cannot empty.");break;case"password":I(e.target.value),ae(e,"password")?M(null):M("* Password length must be at least 6 characters.")}};return r.a.createElement(G.a,{component:"main",maxWidth:"xs"},r.a.createElement(R.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(O.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement(w.a,{component:"h1",variant:"h5",color:$?"primary":"error"},V),$?"":r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12,sm:12},r.a.createElement(E.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:n,onChange:te}),i?r.a.createElement(w.a,{variant:"subtitle2",color:"error",className:e.errorTypography},i):""),r.a.createElement(f.a,{item:!0,xs:12,sm:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:d,onChange:te,autoFocus:!0}),j?r.a.createElement(w.a,{variant:"subtitle2",color:"error",className:e.errorTypography},j):""),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:C,onChange:te}),D?r.a.createElement(w.a,{variant:"subtitle2",color:"error",className:e.errorTypography},D):""),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:B,onChange:te}),J?r.a.createElement(w.a,{variant:"subtitle2",color:"error",className:e.errorTypography},J):"")),r.a.createElement(v.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){!i&!j&!D&!J&&fetch("/api/signup",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With","Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({firstName:n,lastName:d,email:C,password:B})}).then((function(e){return e.json()})).then((function(e){var a=e.success,t=e.message;Y(t),a&&ee(a)})).catch((function(e){return console.log(e)}))}},"Sign Up"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(x.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(z.a,{mt:5}))}var X=Object(g.a)((function(e){return{root:{minHeight:"100%"}}})),V=function(e){var a=X();return r.a.createElement("div",{className:a.root},r.a.createElement(B,null),r.a.createElement(K,null),r.a.createElement(D,null))},Y=t(265),Q=t(269),Z=t(268),$=t(267),ee=t(266),ae=t(203),te=t(69),ne=t(102),re=t.n(ne),le=t(103),ce=t.n(le),oe=t(101),ie=t.n(oe),se=Object(g.a)((function(e){return{card:{maxWidth:345,margin:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:te.a[500]}}}));function ue(e){var a=e.post,t=se();return r.a.createElement(Y.a,{className:t.card},r.a.createElement(ee.a,{avatar:r.a.createElement(b.a,{"aria-label":"recipe",className:t.avatar},"R"),action:r.a.createElement(ae.a,{"aria-label":"settings"},r.a.createElement(ie.a,null)),title:a.title,subheader:a.date}),r.a.createElement($.a,{className:t.media,image:a.image,title:"Paella dish"}),r.a.createElement(Z.a,null,r.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),r.a.createElement(Q.a,{disableSpacing:!0},r.a.createElement(ae.a,{"aria-label":"add to favorites"},r.a.createElement(re.a,null)),r.a.createElement(ae.a,{"aria-label":"share"},r.a.createElement(ce.a,null))))}var me=t(270),de=Object(g.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function he(){var e=de();return r.a.createElement("div",{className:e.root},r.a.createElement(me.a,null))}var pe=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={posts:[],isLoading:!1,token:t.props.authObj.token},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/posts",{method:"GET",headers:{"x-access-token":this.state.token}}).then((function(e){return e.json()})).then((function(a){console.log("Fetching all posts...".concat(JSON.stringify(a))),e.setState({posts:a,isLoading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(f.a,{container:!0,spacing:10,justify:"center"},r.a.createElement(he,null))):r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(f.a,{container:!0,spacing:10,justify:"center"},this.state.posts.length>0?this.state.posts.map((function(e,a){return r.a.createElement(ue,{key:a,post:e})})):""))}}]),a}(n.Component),ge=Object(g.a)((function(e){return{root:{minHeight:"100%"}}})),fe=function(e){var a=ge();return r.a.createElement("div",{className:a.root},r.a.createElement(B,null),r.a.createElement(pe,{authObj:e.authObj}),r.a.createElement(D,null))},be=t(104),Ee=t(3),ve=t(10),ye=t(275),Oe=t(276),je=t(273),Ne=t(274),ke=t(271),Se=t(281),Ce=t(272),we=t(285),xe=t(109),Ae=t(283),Te=t(286),Pe=t(277),De=t(278),Le=t(106),We=t.n(Le),Fe=t(107),Be=t.n(Fe);function Ie(e,a,t,n,r,l){return{__id:e,firstName:a,lastName:t,email:n,password:r,createdDate:l}}var He=[Ie("Cupcake",305,3.7,67,4.3),Ie("Donut",452,25,51,4.9),Ie("Eclair",262,16,24,6),Ie("Frozen yoghurt",159,6,24,4),Ie("Gingerbread",356,16,49,3.9),Ie("Honeycomb",408,3.2,87,6.5),Ie("Ice cream sandwich",237,9,37,4.3),Ie("Jelly Bean",375,0,94,0),Ie("KitKat",518,26,65,7),Ie("Lollipop",392,.2,98,0),Ie("Marshmallow",318,0,81,2),Ie("Nougat",360,19,9,37),Ie("Oreo",437,18,63,4)];function qe(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Je=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function Re(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,l=e.orderBy,c=e.numSelected,o=e.rowCount,i=e.onRequestSort;return r.a.createElement(ke.a,null,r.a.createElement(Ce.a,null,r.a.createElement(je.a,{padding:"checkbox"},r.a.createElement(Ae.a,{indeterminate:c>0&&c<o,checked:c===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})),Je.map((function(e){return r.a.createElement(je.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:l===e.id&&n},r.a.createElement(we.a,{active:l===e.id,direction:l===e.id?n:"asc",onClick:(t=e.id,function(e){i(e,t)})},e.label,l===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var ze=Object(g.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(ve.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Ge=function(e){var a=ze(),t=e.numSelected;return r.a.createElement(C.a,{className:Object(Ee.a)(a.root,Object(be.a)({},a.highlight,t>0))},t>0?r.a.createElement(w.a,{className:a.title,color:"inherit",variant:"subtitle1"},t," selected"):r.a.createElement(w.a,{className:a.title,variant:"h6",id:"tableTitle"},"Nutrition"),t>0?r.a.createElement(Te.a,{title:"Delete"},r.a.createElement(ae.a,{"aria-label":"delete"},r.a.createElement(We.a,null))):r.a.createElement(Te.a,{title:"Filter list"},r.a.createElement(ae.a,{"aria-label":"filter list"},r.a.createElement(Be.a,null))))},Me=Object(g.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function Ue(){var e=Me(),a=r.a.useState("asc"),t=Object(p.a)(a,2),n=t[0],l=t[1],c=r.a.useState("calories"),o=Object(p.a)(c,2),i=o[0],s=o[1],u=r.a.useState([]),m=Object(p.a)(u,2),d=m[0],h=m[1],g=r.a.useState(0),f=Object(p.a)(g,2),b=f[0],E=f[1],v=r.a.useState(!1),y=Object(p.a)(v,2),O=y[0],j=y[1],N=r.a.useState(5),k=Object(p.a)(N,2),S=k[0],C=k[1],w=r.a.useState([]),x=Object(p.a)(w,2),A=x[0],T=x[1];r.a.useState((function(){fetch("/api/users").then((function(e){return e.json()})).then((function(e){console.log("Data: ".concat(JSON.stringify(e))),T(e)})).catch((function(e){return console.log(e)}))}));var P=S-Math.min(S,He.length-b*S);return r.a.createElement("div",{className:e.root},r.a.createElement(xe.a,{className:e.paper},r.a.createElement(Ge,{numSelected:d.length}),r.a.createElement(Ne.a,null,r.a.createElement(ye.a,{className:e.table,"aria-labelledby":"tableTitle",size:O?"small":"medium","aria-label":"enhanced table"},r.a.createElement(Re,{classes:e,numSelected:d.length,order:n,orderBy:i,onSelectAllClick:function(e){if(e.target.checked){var a=A.map((function(e){return e.__id}));h(a)}else h([])},onRequestSort:function(e,a){l(i===a&&"asc"===n?"desc":"asc"),s(a)},rowCount:A.length}),r.a.createElement(Oe.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(A,function(e,a){return"desc"===e?function(e,t){return qe(e,t,a)}:function(e,t){return-qe(e,t,a)}}(n,i)).slice(b*S,b*S+S).map((function(e,a){var t,n=(t=e.name,-1!==d.indexOf(t)),l="enhanced-table-checkbox-".concat(a);return r.a.createElement(Ce.a,{hover:!0,onClick:function(a){return function(e,a){var t=d.indexOf(a),n=[];-1===t?n=n.concat(d,a):0===t?n=n.concat(d.slice(1)):t===d.length-1?n=n.concat(d.slice(0,-1)):t>0&&(n=n.concat(d.slice(0,t),d.slice(t+1))),h(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(je.a,{padding:"checkbox"},r.a.createElement(Ae.a,{checked:n,inputProps:{"aria-labelledby":l}})),r.a.createElement(je.a,{component:"th",id:l,scope:"row",padding:"none"},e.name),r.a.createElement(je.a,{align:"right"},e.calories),r.a.createElement(je.a,{align:"right"},e.fat),r.a.createElement(je.a,{align:"right"},e.carbs),r.a.createElement(je.a,{align:"right"},e.protein))})),P>0&&r.a.createElement(Ce.a,{style:{height:(O?33:53)*P}},r.a.createElement(je.a,{colSpan:6}))))),r.a.createElement(Se.a,{rowsPerPageOptions:[5,10,25],component:"div",count:He.length,rowsPerPage:S,page:b,onChangePage:function(e,a){E(a)},onChangeRowsPerPage:function(e){C(parseInt(e.target.value,10)),E(0)}})),r.a.createElement(Pe.a,{control:r.a.createElement(De.a,{checked:O,onChange:function(e){j(e.target.checked)}}),label:"Dense padding"}))}var _e=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleAuthenticated=function(e){t.setState({authObj:{auth:e.auth,token:e.token,msg:e.msg}})},t.handleAuthenticated=t.handleAuthenticated.bind(Object(m.a)(t)),t.state={authObj:{auth:!1,token:null,msg:""}},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:function(){return r.a.createElement(fe,{authObj:e.state.authObj})}}),r.a.createElement(h.a,{path:"/login",exact:!0,component:function(){return r.a.createElement(H,{handleAuthenticated:e.handleAuthenticated})}}),r.a.createElement(h.a,{path:"/signup",exact:!0,component:function(){return r.a.createElement(V,{authObj:e.state.authObj})}}),r.a.createElement(h.a,{path:"/dashboard",exact:!0,component:function(){return r.a.createElement(J,{authObj:e.state.authObj})}}),r.a.createElement(h.a,{path:"/admin",exact:!0,component:function(){return r.a.createElement(Ue,{authObj:e.state.authObj})}}),"} />"))}}]),a}(r.a.Component),Ke=t(78);c.a.render(r.a.createElement(Ke.a,null,r.a.createElement(_e,null)),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.a5012920.chunk.js.map
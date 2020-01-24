(this["webpackJsonplutin-client"]=this["webpackJsonplutin-client"]||[]).push([[0],{124:function(e,a,t){e.exports=t(198)},198:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=t(56),i=t(57),s=t(65),m=t(58),u=t(66),d=t(31),p=t(11),g=t(92),h=t(50),f=t(248),E=t(281),b=t(276),v=t(252),y=t(61),O=t.n(y),j=t(38),N=t.n(j),S=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),width:"100%"}},container:{padding:30,textAlign:"center"},textField:{width:"100%",margin:10},signInBtn:{display:"flex",alignItems:"center",justifyContent:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},paper:{minWidth:300,marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},button:{backgroundColor:"#f5f5f5",fontWeight:600,width:"100%",margin:10}}})),C=["Facebook","Linkedin","Google"];function w(e){var a=S(),t=r.a.useState(null),n=Object(p.a)(t,2),l=n[0],c=n[1],o=r.a.useState(null),i=Object(p.a)(o,2),s=i[0],m=i[1],u=r.a.useState(null),d=Object(p.a)(u,2),g=d[0],y=d[1],j=r.a.useState(null),w=Object(p.a)(j,2),k=w[0],x=w[1],T=r.a.useState(!1),A=Object(p.a)(T,2),P=A[0],D=A[1],L=r.a.useState(""),F=Object(p.a)(L,2),W=F[0],I=F[1],B=function(e){window.location.href="/api/auth/"+e.target.name.toLowerCase()};return r.a.createElement(r.a.Fragment,null,P?r.a.createElement(h.a,{variant:"h5",align:"center",color:"primary"},W):r.a.createElement(f.a,{container:!0,justify:"center"},r.a.createElement(f.a,{item:!0,className:a.container},r.a.createElement("form",{autoComplete:"off"},r.a.createElement("div",{className:a.paper},r.a.createElement(E.a,{className:a.avatar},r.a.createElement(O.a,null)),C.map((function(e,t){return r.a.createElement(b.a,{className:a.button,color:"secondary",key:t,value:e,name:e,variant:"outlined",type:"button",onClick:B})})),r.a.createElement(b.a,{className:a.textField,id:"username",label:"Username",variant:"outlined",type:"text",onChange:function(e){c(e.target.value),N.a.isEmail(e.target.value)?y(null):y("* Username is incorrect.")}}),g?r.a.createElement(h.a,{color:"error",variant:"subtitle1",align:"left"},g):"",r.a.createElement(b.a,{className:a.textField,id:"password",label:"Password",variant:"outlined",type:"password",onChange:function(e){m(e.target.value),N.a.isLength(e.target.value,{min:6})?x(null):x("* Password length should be at least 6 characters.")}}),k?r.a.createElement(h.a,{color:"error",variant:"subtitle1",align:"left"},k):"",r.a.createElement(h.a,{variant:"subtitle1",align:"center",color:"error"},W),r.a.createElement(v.a,{variant:"outlined",size:"large",color:"primary",onClick:function(e){console.log("button clicked!"),fetch("/api/login",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With","Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:l,password:s})}).then((function(e){return e.json()})).then((function(e){I(e.message),e.success&&D(!0)})).catch((function(e){return console.log(e)}))}},"Login"))))))}var k=t(253),x=t(254),T=t(255),A=t(96),P=t.n(A),D=Object(g.a)((function(e){return{root:{height:80,bottom:0,backgroundColor:"#f5f5f5",border:"1px solid #f5f5f5"},toolbar:{margin:"auto",justifyContent:"center"},typography:{margin:"auto"},link:{color:P.a[800],fontWeight:700,justifyContent:"center",verticalAlign:"middle"}}})),L=function(e){var a=D(),t=r.a.useState((new Date).getFullYear()+"."),n=Object(p.a)(t,1)[0];return r.a.createElement(k.a,{position:"static",className:a.root},r.a.createElement(x.a,null,r.a.createElement(h.a,{color:"textSecondary",className:a.typography},"copyright \xa9 ",r.a.createElement(T.a,{className:a.link,href:"http://tikkidinh.com"},"Tikki Dinh")," ",n)))},F=t(256),W=[{name:"SSO AUTHENTICATION",component:"/"},{name:"Dashboard",component:"/dashboard"},{name:"Signup",component:"/signup"}],I=Object(g.a)((function(e){return{appBar:{display:"flex",padding:15},toolbarBtn:{flexGrow:1,justifyContent:"left",paddingRight:15},menuBtn:{margin:e.spacing(1,1.5)},button:{size:25},link:{textAlign:"left",color:F.a[400],textDecoration:"none","&:hover":{textDecoration:"none",fontWeight:"bold",color:F.a[800]}}}})),B=function(e){var a=I();return r.a.createElement(k.a,{color:"default",position:"static",className:a.appBar},r.a.createElement(x.a,null,r.a.createElement(h.a,{variant:"h5",color:"textSecondary",className:a.toolbarBtn},r.a.createElement(T.a,{className:a.link,href:W[0].component},W[0].name)),W.filter((function(e,a){return a>=1})).map((function(e,t){return r.a.createElement(v.a,{variant:"contained",key:t,className:a.menuBtn,href:e.component},r.a.createElement(h.a,{variant:"subtitle1",color:"secondary"},e.name))}))))},H=Object(g.a)((function(e){return{root:{minHeight:"100%"}}})),q=function(e){var a=H();return r.a.createElement("div",{className:a.root},r.a.createElement(B,null),r.a.createElement(w,null),r.a.createElement(L,null))},R=t(257),z=t(261),J=t(260),U=t(259),G=t(258),M=t(199),_=t(67),K=t(98),X=t.n(K),V=t(99),Y=t.n(V),Q=t(97),Z=t.n(Q),$=Object(g.a)((function(e){return{card:{maxWidth:345,margin:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:_.a[500]}}}));function ee(e){var a=e.post,t=$();return r.a.createElement(R.a,{className:t.card},r.a.createElement(G.a,{avatar:r.a.createElement(E.a,{"aria-label":"recipe",className:t.avatar},"R"),action:r.a.createElement(M.a,{"aria-label":"settings"},r.a.createElement(Z.a,null)),title:a.title,subheader:a.date}),r.a.createElement(U.a,{className:t.media,image:a.image,title:"Paella dish"}),r.a.createElement(J.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.")),r.a.createElement(z.a,{disableSpacing:!0},r.a.createElement(M.a,{"aria-label":"add to favorites"},r.a.createElement(X.a,null)),r.a.createElement(M.a,{"aria-label":"share"},r.a.createElement(Y.a,null))))}var ae=t(262),te=Object(g.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function ne(){var e=te();return r.a.createElement("div",{className:e.root},r.a.createElement(ae.a,null))}var re=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).state={posts:[],isLoading:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/posts").then((function(e){return e.json()})).then((function(a){console.log("Fetching all posts...".concat(JSON.stringify(a))),e.setState({posts:a,isLoading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(f.a,{container:!0,spacing:10,justify:"center"},r.a.createElement(ne,null))):r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(f.a,{container:!0,spacing:10,justify:"center"},this.state.posts.map((function(e,a){return r.a.createElement(ee,{key:a,post:e})}))))}}]),a}(n.Component),le=Object(g.a)((function(e){return{root:{height:"100%"}}})),ce=function(e){var a=le();return r.a.createElement("div",{className:a.root},r.a.createElement(B,null),r.a.createElement(re,null),r.a.createElement(L,null))},oe=t(264),ie=t(265),se=t(277),me=t(273),ue=t(263),de=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},errorTypography:{marginTop:e.spacing(1),fontWeight:800}}}));function pe(){var e=de(),a=r.a.useState(""),t=Object(p.a)(a,2),n=t[0],l=t[1],c=r.a.useState(null),o=Object(p.a)(c,2),i=o[0],s=o[1],m=r.a.useState(""),u=Object(p.a)(m,2),d=u[0],g=u[1],y=r.a.useState(null),j=Object(p.a)(y,2),S=j[0],C=j[1],w=r.a.useState(""),k=Object(p.a)(w,2),x=k[0],A=k[1],P=r.a.useState(null),D=Object(p.a)(P,2),L=D[0],F=D[1],W=r.a.useState(""),I=Object(p.a)(W,2),B=I[0],H=I[1],q=r.a.useState(null),R=Object(p.a)(q,2),z=R[0],J=R[1],U=r.a.useState(""),G=Object(p.a)(U,2),M=G[0],_=G[1],K=r.a.useState(!1),X=Object(p.a)(K,2),V=X[0],Y=X[1],Q=function(e,a){switch(a){case"email":return N.a.isEmail(e.target.value);case"name":return N.a.isAlpha(e.target.value,["en-US"]);case"password":return N.a.isLength(e.target.value,{min:6});default:return null}},Z=function(e){switch(e.target.name){case"firstName":l(e.target.value),Q(e,"name")?s(null):s("* Firstname should be alphabe characters and cannot empty.");break;case"lastName":g(e.target.value),Q(e,"name")?C(null):C("* Firstname should be alphabe characters and cannot empty.");break;case"email":A(e.target.value.toLowerCase()),Q(e,"email")?F(null):F("* Email is incorrect and cannot empty.");break;case"password":H(e.target.value),Q(e,"password")?J(null):J("* Password length must be at least 6 characters.")}};return r.a.createElement(ue.a,{component:"main",maxWidth:"xs"},r.a.createElement(oe.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(E.a,{className:e.avatar},r.a.createElement(O.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement(h.a,{component:"h1",variant:"h5",color:V?"primary":"error"},M),V?"":r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12,sm:12},r.a.createElement(b.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:n,onChange:Z}),i?r.a.createElement(h.a,{variant:"subtitle2",color:"error",className:e.errorTypography},i):""),r.a.createElement(f.a,{item:!0,xs:12,sm:12},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:d,onChange:Z,autoFocus:!0}),S?r.a.createElement(h.a,{variant:"subtitle2",color:"error",className:e.errorTypography},S):""),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:x,onChange:Z}),L?r.a.createElement(h.a,{variant:"subtitle2",color:"error",className:e.errorTypography},L):""),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:B,onChange:Z}),z?r.a.createElement(h.a,{variant:"subtitle2",color:"error",className:e.errorTypography},z):""),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(ie.a,{control:r.a.createElement(se.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(v.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){!i&!S&!L&!z&&fetch("/api/signup",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With","Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({firstName:n,lastName:d,email:x,password:B})}).then((function(e){return e.json()})).then((function(e){var a=e.success,t=e.message;_(t),a&&Y(a)})).catch((function(e){return console.log(e)}))}},"Sign Up"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(T.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(me.a,{mt:5}))}var ge=Object(g.a)((function(e){return{root:{minHeight:"100%"}}})),he=function(e){var a=ge();return r.a.createElement("div",{className:a.root},r.a.createElement(B,null),r.a.createElement(pe,null),r.a.createElement(L,null))},fe=Object(g.a)((function(e){return{root:{minHeight:"100%"}}})),Ee=function(e){var a=fe();return r.a.createElement("div",{className:a.root},r.a.createElement(B,null),r.a.createElement(L,null))},be=t(100),ve=t(3),ye=t(10),Oe=t(270),je=t(271),Ne=t(268),Se=t(269),Ce=t(266),we=t(275),ke=t(267),xe=t(279),Te=t(105),Ae=t(280),Pe=t(272),De=t(102),Le=t.n(De),Fe=t(103),We=t.n(Fe);function Ie(e,a,t,n,r,l){return{__id:e,firstName:a,lastName:t,email:n,password:r,createdDate:l}}var Be=[Ie("Cupcake",305,3.7,67,4.3),Ie("Donut",452,25,51,4.9),Ie("Eclair",262,16,24,6),Ie("Frozen yoghurt",159,6,24,4),Ie("Gingerbread",356,16,49,3.9),Ie("Honeycomb",408,3.2,87,6.5),Ie("Ice cream sandwich",237,9,37,4.3),Ie("Jelly Bean",375,0,94,0),Ie("KitKat",518,26,65,7),Ie("Lollipop",392,.2,98,0),Ie("Marshmallow",318,0,81,2),Ie("Nougat",360,19,9,37),Ie("Oreo",437,18,63,4)];function He(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var qe=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function Re(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,l=e.orderBy,c=e.numSelected,o=e.rowCount,i=e.onRequestSort;return r.a.createElement(Ce.a,null,r.a.createElement(ke.a,null,r.a.createElement(Ne.a,{padding:"checkbox"},r.a.createElement(se.a,{indeterminate:c>0&&c<o,checked:c===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})),qe.map((function(e){return r.a.createElement(Ne.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:l===e.id&&n},r.a.createElement(xe.a,{active:l===e.id,direction:l===e.id?n:"asc",onClick:(t=e.id,function(e){i(e,t)})},e.label,l===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var ze=Object(g.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(ye.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Je=function(e){var a=ze(),t=e.numSelected;return r.a.createElement(x.a,{className:Object(ve.a)(a.root,Object(be.a)({},a.highlight,t>0))},t>0?r.a.createElement(h.a,{className:a.title,color:"inherit",variant:"subtitle1"},t," selected"):r.a.createElement(h.a,{className:a.title,variant:"h6",id:"tableTitle"},"Nutrition"),t>0?r.a.createElement(Ae.a,{title:"Delete"},r.a.createElement(M.a,{"aria-label":"delete"},r.a.createElement(Le.a,null))):r.a.createElement(Ae.a,{title:"Filter list"},r.a.createElement(M.a,{"aria-label":"filter list"},r.a.createElement(We.a,null))))},Ue=Object(g.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function Ge(){var e=Ue(),a=r.a.useState("asc"),t=Object(p.a)(a,2),n=t[0],l=t[1],c=r.a.useState("calories"),o=Object(p.a)(c,2),i=o[0],s=o[1],m=r.a.useState([]),u=Object(p.a)(m,2),d=u[0],g=u[1],h=r.a.useState(0),f=Object(p.a)(h,2),E=f[0],b=f[1],v=r.a.useState(!1),y=Object(p.a)(v,2),O=y[0],j=y[1],N=r.a.useState(5),S=Object(p.a)(N,2),C=S[0],w=S[1],k=r.a.useState([]),x=Object(p.a)(k,2),T=x[0],A=x[1];r.a.useState((function(){fetch("/api/users").then((function(e){return e.json()})).then((function(e){console.log("Data: ".concat(JSON.stringify(e))),A(e)})).catch((function(e){return console.log(e)}))}));var P=C-Math.min(C,Be.length-E*C);return r.a.createElement("div",{className:e.root},r.a.createElement(Te.a,{className:e.paper},r.a.createElement(Je,{numSelected:d.length}),r.a.createElement(Se.a,null,r.a.createElement(Oe.a,{className:e.table,"aria-labelledby":"tableTitle",size:O?"small":"medium","aria-label":"enhanced table"},r.a.createElement(Re,{classes:e,numSelected:d.length,order:n,orderBy:i,onSelectAllClick:function(e){if(e.target.checked){var a=T.map((function(e){return e.__id}));g(a)}else g([])},onRequestSort:function(e,a){l(i===a&&"asc"===n?"desc":"asc"),s(a)},rowCount:T.length}),r.a.createElement(je.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(T,function(e,a){return"desc"===e?function(e,t){return He(e,t,a)}:function(e,t){return-He(e,t,a)}}(n,i)).slice(E*C,E*C+C).map((function(e,a){var t,n=(t=e.name,-1!==d.indexOf(t)),l="enhanced-table-checkbox-".concat(a);return r.a.createElement(ke.a,{hover:!0,onClick:function(a){return function(e,a){var t=d.indexOf(a),n=[];-1===t?n=n.concat(d,a):0===t?n=n.concat(d.slice(1)):t===d.length-1?n=n.concat(d.slice(0,-1)):t>0&&(n=n.concat(d.slice(0,t),d.slice(t+1))),g(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(Ne.a,{padding:"checkbox"},r.a.createElement(se.a,{checked:n,inputProps:{"aria-labelledby":l}})),r.a.createElement(Ne.a,{component:"th",id:l,scope:"row",padding:"none"},e.name),r.a.createElement(Ne.a,{align:"right"},e.calories),r.a.createElement(Ne.a,{align:"right"},e.fat),r.a.createElement(Ne.a,{align:"right"},e.carbs),r.a.createElement(Ne.a,{align:"right"},e.protein))})),P>0&&r.a.createElement(ke.a,{style:{height:(O?33:53)*P}},r.a.createElement(Ne.a,{colSpan:6}))))),r.a.createElement(we.a,{rowsPerPageOptions:[5,10,25],component:"div",count:Be.length,rowsPerPage:C,page:E,onChangePage:function(e,a){b(a)},onChangeRowsPerPage:function(e){w(parseInt(e.target.value,10)),b(0)}})),r.a.createElement(ie.a,{control:r.a.createElement(Pe.a,{checked:O,onChange:function(e){j(e.target.checked)}}),label:"Dense padding"}))}var Me=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:Ee}),r.a.createElement(d.a,{path:"/login",component:q}),r.a.createElement(d.a,{path:"/signup",component:he}),r.a.createElement(d.a,{path:"/dashboard",component:ce}),r.a.createElement(d.a,{path:"/admin",component:Ge})))}),null)}}]),a}(r.a.Component),_e=t(75);c.a.render(r.a.createElement(_e.a,null,r.a.createElement(Me,null)),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.6bc9d6d9.chunk.js.map
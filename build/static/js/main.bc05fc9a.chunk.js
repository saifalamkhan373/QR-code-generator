(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(164)},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(43),o=a(27),c=a(7),i=a.n(c),m=a(14),s=a(196),u=a(199),d=a(79),g=a(197),h=a(204),E=a(202),f=a(98),b=a(102),p=a(99),y=a(17),x=a(10),w=a(190),k=a(191),v=a(93),C=a(167),S=a(192),j=a(193),W=a(194),T=a(201),N=a(108),R=a.n(N),P=a(107),O=a.n(P),_=a(111),I=a.n(_),B=a(109),Q=a.n(B),z=a(112),F=a.n(z),D=a(110),G=a.n(D),q=a(106),A=a.n(q),Y=a(105),M=a.n(Y),L=Object(w.a)({list:{width:250},fullList:{width:"auto"}});function U(){var e,t=L(),a=l.a.useState({right:!1}),n=Object(m.a)(a,2),r=n[0],c=n[1],i=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(Object(x.a)(Object(x.a)({},r),{},Object(y.a)({},e,t)))}};return l.a.createElement("div",null,l.a.createElement(W.a,{onClick:i("right",!0),style:{backgroundColor:"white",fontWeight:"bold"}},l.a.createElement(F.a,{style:{color:"black"}})),l.a.createElement(T.a,{anchor:"right",open:r.right,onClose:i("right",!1)},(e="right",l.a.createElement("div",{className:t.list,role:"presentation",onClick:i(e,!1),onKeyDown:i(e,!1)},l.a.createElement(k.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(d.a,{variant:"h3",gutterBottom:!0},"Menu"),l.a.createElement(v.a,null),l.a.createElement(o.b,{to:"/",style:{textDecoration:"none",color:"black"}},l.a.createElement(C.a,{button:!0},l.a.createElement(S.a,null,l.a.createElement(M.a,null)),l.a.createElement(j.a,{primary:"Wi-Fi"}))),l.a.createElement(o.b,{to:"/url",style:{textDecoration:"none",color:"black"}},l.a.createElement(C.a,{button:!0},l.a.createElement(S.a,null,l.a.createElement(A.a,null)),l.a.createElement(j.a,{primary:"URL"}))),l.a.createElement(o.b,{to:"/phone",style:{textDecoration:"none",color:"black"}},l.a.createElement(C.a,{button:!0},l.a.createElement(S.a,null,l.a.createElement(O.a,null)),l.a.createElement(j.a,{primary:"Phone Call"}))),l.a.createElement(o.b,{to:"/sms",style:{textDecoration:"none",color:"black"}},l.a.createElement(C.a,{button:!0},l.a.createElement(S.a,null,l.a.createElement(R.a,null)),l.a.createElement(j.a,{primary:"SMS"}))),l.a.createElement(o.b,{to:"/mail",style:{textDecoration:"none",color:"black"}},l.a.createElement(C.a,{button:!0},l.a.createElement(S.a,null,l.a.createElement(Q.a,null)),l.a.createElement(j.a,{primary:"Email"}))),l.a.createElement(o.b,{to:"/vcard",style:{textDecoration:"none",color:"black"}},l.a.createElement(C.a,{button:!0},l.a.createElement(S.a,null,l.a.createElement(G.a,null)),l.a.createElement(j.a,{primary:"Contact card"}))),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/saifalamkhan373",style:{textDecoration:"none",color:"black"}},l.a.createElement(C.a,{button:!0},l.a.createElement(S.a,null,l.a.createElement(I.a,null)),l.a.createElement(j.a,{primary:"Github"}))))))))}var H=function(e){return l.a.createElement("div",{style:{width:"100%",position:"absolute"}},l.a.createElement(u.a,{display:"flex",p:4,alignItems:"center"},l.a.createElement(u.a,{p:1,flexGrow:1}),l.a.createElement(u.a,{p:1},l.a.createElement(U,null))))},J=a(115),K=a.n(J),V=a(85),X=a.n(V);window.html2canvas=X.a;var Z=function(){X()(document.body).then(function(e){var t=new K.a("p","mm","a4");t.addHTML(document.getElementById("makePdf"),function(){t.addImage(e.toDataURL("image/png"),"PNG",1,0,211,298)}),t.save("QR_CODE.pdf")})},$=a(25),ee=a.n($),te=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),y=i[0],x=i[1],w=l.a.useState(""),k=Object(m.a)(w,2),v=k[0],C=k[1],S=l.a.useState(!1),j=Object(m.a)(S,2),W=j[0],T=j[1],N="https://qrcode.tec-it.com/API/QRCode?data=WIFI:T:".concat(v,";S:").concat(r,";P:").concat(y,";;&backcolor=#ffffff"),R=l.a.useRef(null),P=l.a.useState(0),O=Object(m.a)(P,2),_=O[0],I=O[1];l.a.useEffect(function(){I(R.current.offsetWidth)},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(u.a,{style:{padding:25,width:"55%"}},l.a.createElement(d.a,{variant:"h1",style:{fontWeight:"bolder",fontSize:55,marginBottom:25}},"Get your",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},"wifi QR code")),l.a.createElement(g.a,{fullWidth:!0,variant:"outlined"},l.a.createElement(h.a,{ref:R,htmlFor:"security-select"},"Security"),l.a.createElement(E.a,{labelWidth:_,fullWidth:!0,open:W,onClose:function(){T(!1)},onOpen:function(){T(!0)},value:v,onChange:function(e){C(e.target.value),console.log(N)}},l.a.createElement(f.a,{value:""},l.a.createElement("em",null,"None")),l.a.createElement(f.a,{value:"WEP"},"WEP"),l.a.createElement(f.a,{value:"WPA"},"WPA / WPA2"))),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Name of the network",onChange:function(e){return o(e.target.value)},placeholder:"Wifi - Saif's wifi",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Password",onChange:function(e){return x(e.target.value)},placeholder:"***********",fullWidth:!0,helperText:"Scan the QR code on your right and you can successfully connect to your WI-FI !"}),l.a.createElement(p.a,{variant:"contained",fullWidth:!0,onClick:function(){return Z()},style:{backgroundColor:"black",color:"white",marginTop:25,marginBottom:15,fontWeight:"bold",boxShadow:"none"}},l.a.createElement(ee.a,{style:{marginRight:10}}),"Generate PDF")))),l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12,className:"backgroundRight"},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center",className:"borderBox"},l.a.createElement(u.a,{onClick:function(){!function(e){window.open().document.write('<img src="'+e+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>')}(N)},id:"makePdf",className:"hoverCard",style:{backgroundColor:"white",height:"auto",padding:20}},l.a.createElement("h1",{style:{fontWeight:"bolder",fontSize:35}},"Your Wi-Fi QR code ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image",style:{backgroundPosition:"left"}},"is ready.")),l.a.createElement(u.a,{align:"center"},l.a.createElement("img",{src:N,alt:"qrcode",style:{height:180}})),l.a.createElement(u.a,{style:{marginTop:10,marginBottom:25}},l.a.createElement(d.a,{variant:"subtitle1",style:{marginTop:10,fontSize:15},color:"textSecondary"},"To connect your Wi-Fi with your ",l.a.createElement("strong",null,"iPhone")," or your ",l.a.createElement("strong",null,"Tablet"),", ",l.a.createElement("br",null),"please take a picture of the ",l.a.createElement("strong",null,"QR code")," and a"," ",l.a.createElement("strong",null,"pop-up")," will show up. ",l.a.createElement("br",null),"You just need to ",l.a.createElement("strong",null,"click the pop-up")," and there you go !"," "),l.a.createElement("h1",{style:{marginTop:15,fontSize:15}},"Your network : ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},r)),l.a.createElement("h1",{style:{marginTop:15,fontSize:15}},"Password of the network : ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},y))))))))},ae=function(e){var t=function(e){return function(t){c(Object(x.a)(Object(x.a)({},o),{},Object(y.a)({},e,t.target.value)))}},a=Object(n.useState)({number:"",message:""}),r=Object(m.a)(a,2),o=r[0],c=r[1],i="https://qrcode.tec-it.com/API/QRCode?data=smsto:".concat(o.number,":").concat(o.message,"&backcolor=#ffffff");return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(u.a,{style:{padding:25,width:"55%"}},l.a.createElement(d.a,{variant:"h1",style:{fontWeight:"bolder",fontSize:55,marginBottom:25}},"Generate SMS ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},"with ease.")),l.a.createElement(b.a,{fullWidth:!0,margin:"normal",variant:"outlined",label:"Phone number",placeholder:"+33606060606",onChange:t("number")}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",multiline:!0,rows:"4",label:"Content of your message",onChange:t("message"),placeholder:"Hi there ! How are you doing today ?",fullWidth:!0,helperText:"Scan the QR code on your right to send the message to your correspondent"}),l.a.createElement(p.a,{variant:"contained",fullWidth:!0,onClick:function(){return Z()},style:{backgroundColor:"black",color:"white",marginTop:25,marginBottom:15,fontWeight:"bold",boxShadow:"none"}},l.a.createElement(ee.a,{style:{marginRight:10}}),"Generate PDF")))),l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12,className:"backgroundRight"},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center",className:"borderBox"},l.a.createElement(u.a,{onClick:function(){!function(e){window.open().document.write('<img src="'+e+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>')}(i)},id:"makePdf",className:"hoverCard",style:{backgroundColor:"white",height:"auto",padding:20}},l.a.createElement("h1",{style:{fontWeight:"bolder",fontSize:35}},"Your SMS QR code ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image",style:{backgroundPosition:"left"}},"is ready.")),l.a.createElement(u.a,{align:"center"},l.a.createElement("img",{src:i,alt:"qrcode",style:{height:180}})),l.a.createElement(u.a,{style:{marginTop:10,marginBottom:25}},l.a.createElement(d.a,{variant:"subtitle1",style:{marginTop:10,fontSize:15},color:"textSecondary"},"To connect your Wi-Fi with your ",l.a.createElement("strong",null,"iPhone")," or your ",l.a.createElement("strong",null,"Tablet"),", ",l.a.createElement("br",null),"please take a picture of the ",l.a.createElement("strong",null,"QR code")," and a"," ",l.a.createElement("strong",null,"pop-up")," will show up. ",l.a.createElement("br",null),"You just need to ",l.a.createElement("strong",null,"click the pop-up")," and there you go !"," "),l.a.createElement("h1",{style:{marginTop:15,fontSize:15}},"Phone number : ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},o.number)),l.a.createElement("h1",{style:{marginTop:15,fontSize:15}},"Message of the SMS : ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},o.message))))))))},ne=function(e){var t,a=Object(n.useState)({message:"https://github.com/saifalamkhan373"}),r=Object(m.a)(a,2),o=r[0],c=r[1],i="https://qrcode.tec-it.com/API/QRCode?data=".concat(o.message,"&backcolor=#ffffff");return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(u.a,{style:{padding:25}},l.a.createElement(d.a,{variant:"h1",style:{fontWeight:"bolder",fontSize:55,marginBottom:25}},"Link your",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},"favorite website.")),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Website",onChange:(t="message",function(e){c(Object(x.a)(Object(x.a)({},o),{},Object(y.a)({},t,e.target.value)))}),placeholder:"https://github.com/saifalamkhan373",fullWidth:!0,helperText:"Scan the QR code on your right to open the link"}),l.a.createElement(p.a,{variant:"contained",fullWidth:!0,onClick:function(){return Z()},style:{backgroundColor:"black",color:"white",marginTop:25,marginBottom:15,fontWeight:"bold",boxShadow:"none"}},l.a.createElement(ee.a,{style:{marginRight:10}}),"Generate PDF")))),l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12,className:"backgroundRight"},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center",className:"borderBox"},l.a.createElement(u.a,{onClick:function(){!function(e){window.open().document.write('<img src="'+e+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>')}(i)},id:"makePdf",className:"hoverCard",style:{backgroundColor:"white",height:"auto",padding:20}},l.a.createElement("h1",{style:{fontWeight:"bolder",fontSize:35}},"Your URL QR code ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image",style:{backgroundPosition:"left"}},"is ready.")),l.a.createElement(u.a,{align:"center"},l.a.createElement("img",{src:i,alt:"qrcode",style:{height:180}})),l.a.createElement(u.a,{style:{marginTop:10,marginBottom:25}},l.a.createElement("h1",{style:{marginTop:15,fontSize:15}},"Url : ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},o.message))))))))},le=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(u.a,null,l.a.createElement("img",{src:"https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5db1e0e7e74e34610bcb4951_sprinting.gif",alt:"404image"})),l.a.createElement(u.a,null,l.a.createElement("h1",null,"404, something went ",l.a.createElement("strong",{className:"text_image"},"wrong..")),l.a.createElement(o.b,{to:"/",style:{textDecoration:"none",color:"black"}},l.a.createElement(p.a,{variant:"contained",fullWidth:!0,style:{backgroundColor:"black",color:"white",marginTop:25,marginBottom:15,fontWeight:"bolder",boxShadow:"none",textTransform:"none"}},"Take me back please.")))))},re=a(116),oe=a.n(re),ce=function(e){var t,a=Object(n.useState)({phone_number:"",message:""}),r=Object(m.a)(a,2),o=r[0],c=r[1],i="https://qrcode.tec-it.com/API/QRCode?data=tel:".concat(o.phone_number,"&backcolor=#ffffff");return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(u.a,{style:{padding:25,width:"55%"}},l.a.createElement(d.a,{variant:"h1",style:{fontWeight:"bolder",fontSize:55,marginBottom:25}},"Call someone ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},"with a picture.")),l.a.createElement(oe.a,{defaultCountry:"us",fullWidth:!0,margin:"normal",variant:"outlined",value:o.phone_number,onChange:(t="phone_number",function(e){c(Object(x.a)(Object(x.a)({},o),{},Object(y.a)({},t,e)))}),helperText:"Scan the QR code on your right to call your correspondent"}),l.a.createElement(p.a,{variant:"contained",fullWidth:!0,onClick:function(){return Z()},style:{backgroundColor:"black",color:"white",marginTop:25,marginBottom:15,fontWeight:"bold",boxShadow:"none"}},l.a.createElement(ee.a,{style:{marginRight:10}}),"Generate PDF")))),l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12,className:"backgroundRight"},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center",className:"borderBox"},l.a.createElement(u.a,{onClick:function(){!function(e){window.open().document.write('<img src="'+e+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>')}(i)},id:"makePdf",className:"hoverCard",style:{backgroundColor:"white",height:"auto",padding:20}},l.a.createElement("h1",{style:{fontWeight:"bolder",fontSize:35}},"Your QR code ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image",style:{backgroundPosition:"left"}},"is to rock !")),l.a.createElement(u.a,{align:"center"},l.a.createElement("img",{src:i,alt:"qrcode",style:{height:180}})),l.a.createElement(u.a,{style:{marginTop:10,marginBottom:25}},l.a.createElement(d.a,{variant:"subtitle1",style:{marginTop:10,fontSize:15},color:"textSecondary"},"To call someone, please ",l.a.createElement("strong",null,"scan the QR")," ",l.a.createElement("br",null),"on your right and a ",l.a.createElement("strong",null,"popup will appear."),l.a.createElement("br",null),"You just click on it and you can talk to ","",l.a.createElement("strong",null,"your correspondent.")),l.a.createElement("h1",{style:{marginTop:15,fontSize:15}},"Phone number : ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},o.phone_number))))))))},ie=function(e){var t=function(e){return function(t){c(Object(x.a)(Object(x.a)({},o),{},Object(y.a)({},e,t.target.value)))}},a=Object(n.useState)({email:"",subject:"",body:""}),r=Object(m.a)(a,2),o=r[0],c=r[1],i="https://qrcode.tec-it.com/API/QRCode?data=mailto:".concat(o.email,"?subject=").concat(o.subject,"&body=").concat(o.body,"&backcolor=#ffffff");return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(u.a,{style:{padding:25,width:"55%"}},l.a.createElement(d.a,{variant:"h1",style:{fontWeight:"bolder",fontSize:55,marginBottom:25}},"Generate some ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},"great content.")),l.a.createElement(b.a,{variant:"outlined",label:"Email address",onChange:t("email"),placeholder:"example@mail.com",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Subject",onChange:t("subject"),placeholder:"Hello from QR code !",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",multiline:!0,rows:"4",label:"Content",onChange:t("body"),placeholder:"Say something..",fullWidth:!0,helperText:"Scan the QR code on your right to send the mail to your correspodent"}),l.a.createElement(p.a,{variant:"contained",fullWidth:!0,onClick:function(){return Z()},style:{backgroundColor:"black",color:"white",marginTop:25,marginBottom:15,fontWeight:"bold",boxShadow:"none"}},l.a.createElement(ee.a,{style:{marginRight:10}}),"Generate PDF")))),l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12,className:"backgroundRight"},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center",className:"borderBox"},l.a.createElement(u.a,{onClick:function(){!function(e){window.open().document.write('<img src="'+e+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>')}(i)},id:"makePdf",className:"hoverCard",style:{backgroundColor:"white",height:"auto",padding:20}},l.a.createElement("h1",{style:{fontWeight:"bolder",fontSize:35}},"Your mail QR code",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image",style:{backgroundPosition:"left"}},"is ready.")),l.a.createElement(u.a,{align:"center"},l.a.createElement("img",{src:i,alt:"qrcode",style:{height:180}})),l.a.createElement(u.a,{style:{marginTop:10,marginBottom:25}},l.a.createElement(d.a,{variant:"subtitle1",style:{marginTop:10,fontSize:15},color:"textSecondary"},"To send a mail with your ",l.a.createElement("strong",null,"iPhone")," or your"," ",l.a.createElement("strong",null,"Tablet"),", ",l.a.createElement("br",null),"please take a picture of the ",l.a.createElement("strong",null,"QR code")," and a"," ",l.a.createElement("strong",null,"pop-up")," will show up. ",l.a.createElement("br",null),"You just need to ",l.a.createElement("strong",null,"click the pop-up")," and there you go !"," ")))))))},me=function(e){var t=function(e){return function(t){c(Object(x.a)(Object(x.a)({},o),{},Object(y.a)({},e,t.target.value)))}},a=Object(n.useState)({name:"John+Doe",tel_home:"0626493560",email:"email@example.com",note:"Greate dude",url:"http://www.example.com",nickname:"John"}),r=Object(m.a)(a,2),o=r[0],c=r[1],i="https://qrcode.tec-it.com/API/QRCode?data=MECARD:N:".concat(o.name,";TEL:").concat(o.tel_home,";EMAIL:").concat(o.email,";NOTE:").concat(o.note,";URL:").concat(o.url,";NICKNAME:").concat(o.nickname,";&backcolor=#ffffff");return console.log(i),l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(s.a,{container:!0},l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center"},l.a.createElement(u.a,{style:{padding:25,width:"55%"}},l.a.createElement(d.a,{variant:"h1",style:{fontWeight:"bolder",fontSize:45,marginBottom:25}},"Generate your ",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image"},"contact card.")),l.a.createElement(b.a,{variant:"outlined",label:"Name",onChange:t("name"),placeholder:"Saif Alam Khan",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Personal phone",onChange:t("tel_home"),placeholder:"+917777777777",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Email",onChange:t("email"),placeholder:"example@mail.com",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Note",onChange:t("note"),placeholder:"Saif love coding",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Website",onChange:t("url"),placeholder:"https://qr-code.com/",fullWidth:!0}),l.a.createElement(b.a,{style:{marginTop:15},variant:"outlined",label:"Nickname",onChange:t("nickname"),placeholder:"QR Corp",fullWidth:!0,helperText:"Scan the QR code on your right and send your contact card."}),l.a.createElement(p.a,{variant:"contained",fullWidth:!0,onClick:function(){return Z()},style:{backgroundColor:"black",color:"white",marginTop:25,marginBottom:15,fontWeight:"bold",boxShadow:"none"}},l.a.createElement(ee.a,{style:{marginRight:10}}),"Generate PDF")))),l.a.createElement(s.a,{item:!0,xs:12,xl:6,md:6,sm:12,className:"backgroundRight",id:"makePdf"},l.a.createElement(u.a,{style:{height:"100vh"},display:"flex",alignItems:"center",justifyContent:"center",className:"borderBox"},l.a.createElement(u.a,{onClick:function(){!function(e){window.open().document.write('<img src="'+e+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:auto; height:auto;" allowfullscreen></img>')}(i)},className:"hoverCard",style:{backgroundColor:"white",height:"auto",padding:20}},l.a.createElement("h1",{style:{fontWeight:"bolder",fontSize:35}},"Your contact card",l.a.createElement("br",null),l.a.createElement("strong",{className:"text_image",style:{backgroundPosition:"left"}},"is ready.")),l.a.createElement(u.a,{align:"center"},l.a.createElement("img",{src:i,alt:"qrcode",style:{height:180}})),l.a.createElement(u.a,{style:{marginTop:10,marginBottom:25}},l.a.createElement(d.a,{variant:"subtitle1",style:{marginTop:10,fontSize:15},color:"textSecondary"},"To send a mail with your ",l.a.createElement("strong",null,"iPhone")," or your"," ",l.a.createElement("strong",null,"Tablet"),", ",l.a.createElement("br",null),"please take a picture of the ",l.a.createElement("strong",null,"QR code")," and a"," ",l.a.createElement("strong",null,"pop-up")," will show up. ",l.a.createElement("br",null),"You just need to ",l.a.createElement("strong",null,"click the pop-up")," and there you go !"," ")))))))},se=(a(163),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.c,null,l.a.createElement(r.a,{component:te,exact:!0,path:"/"}),l.a.createElement(r.a,{component:ne,exact:!0,path:"/url"}),l.a.createElement(r.a,{component:ae,exact:!0,path:"/sms"}),l.a.createElement(r.a,{component:ce,exact:!0,path:"/phone"}),l.a.createElement(r.a,{component:ie,exact:!0,path:"/mail"}),l.a.createElement(r.a,{component:me,exact:!0,path:"/vcard"}),l.a.createElement(r.a,{component:le,path:"*"})))}),ue=document.getElementById("root");i.a.render(l.a.createElement(o.a,null,l.a.createElement(se,null)),ue)}},[[124,1,2]]]);
//# sourceMappingURL=main.bc05fc9a.chunk.js.map
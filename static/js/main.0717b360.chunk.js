(this.webpackJsonplv=this.webpackJsonplv||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),r=a.n(c),l=(a(95),a(15)),s=a(62),m=a(63),o=a(70),u=a(64),p=a(71),E=a(138),v=a(144),h=a(142),d=a(143),g=a(67),f=a.n(g),x=a(68),A=a.n(x),b=a(48),y=a(145),w=a(65),N=a.n(w),O=a(69),j=a(13),S=a(156),k=a(151),C=a(155),_=a(154),I=a(150),P=a(152),T=a(153),q=a(162),R=a(146),L=a(158),M=a(160),z=a(149),B=a(164),D=a(51),G=a.n(D),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={invoice:{items:[],total:0,date:new Date,customerName:"",address:"",aadhar:"",pan:""},item:{description:"",unit:"",quantity:0,rate:0,price:0},units:["Mts","Pc"]},a.addItem=function(){var e=Object(l.a)({},a.state.invoice),t=Object(l.a)({},a.state.item);t.price=t.rate*t.quantity,e.items.push(Object(l.a)({},t)),t.description="",t.price=0,t.quantity=0,t.rate=0,a.setState({invoice:e,item:t})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=0;return this.state.invoice.items.forEach((function(e){t+=e.price})),i.a.createElement(E.a,null,i.a.createElement(h.a,{style:{textAlign:"center",height:"25px"},action:i.a.createElement(N.a,{trigger:function(){return i.a.createElement(d.a,null,i.a.createElement(f.a,null))},content:function(){return e.componentRef}}),title:"Tax Invoice",titleTypographyProps:{variant:"h5"}}),i.a.createElement(v.a,null,i.a.createElement(E.a,{className:G.a.container,id:"toBePrinted",ref:function(t){return e.componentRef=t}},i.a.createElement(v.a,null,i.a.createElement(y.a,{container:!0,direction:"row",justify:"flex-start",spacing:1,alignItems:"center"},i.a.createElement(y.a,{item:!0,xs:12},i.a.createElement(b.a,{style:{textAlign:"center",fontSize:"10px"}},"TAX INVOICE"),i.a.createElement(b.a,{style:{textAlign:"center",fontSize:"24px"}},"LAXMI VASTRALAYA"),i.a.createElement(b.a,{style:{textAlign:"center"}},"Chowk Kasimabad, Ghazipur"),i.a.createElement(b.a,{style:{textAlign:"center"}},"GSTIN: 09APYPG4485J1Z0")),i.a.createElement(y.a,{item:!0,xs:9}," "),i.a.createElement(y.a,{item:!0,xs:3},i.a.createElement(j.a,{utils:O.a},i.a.createElement(S.a,{className:"width100percent",disableFuture:!0,autoOk:!0,variant:"inline",format:"dd/MM/yyyy",views:["year","month","date"],value:this.state.invoice.date,onChange:function(t){var a=Object(l.a)({},e.state.invoice);a.date=t,e.setState({invoice:a})}}))),i.a.createElement(y.a,{item:!0,xs:2},i.a.createElement(b.a,null,"Name")),i.a.createElement(y.a,{item:!0,xs:10},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.customerName,onChange:function(t){var a=Object(l.a)({},e.state.invoice);a.customerName=t.target.value,e.setState({invoice:a})}})),i.a.createElement(y.a,{item:!0,xs:2},i.a.createElement(b.a,null,"Address")),i.a.createElement(y.a,{item:!0,xs:10},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.address,onChange:function(t){var a=Object(l.a)({},e.state.invoice);a.address=t.target.value,e.setState({invoice:a})}})),i.a.createElement(y.a,{item:!0,xs:2},i.a.createElement(b.a,null,"Aadhan No")),i.a.createElement(y.a,{item:!0,xs:4},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.aadhar,onChange:function(t){var a=Object(l.a)({},e.state.invoice);a.aadhar=t.target.value,e.setState({invoice:a})}})),i.a.createElement(y.a,{item:!0,xs:2},i.a.createElement(b.a,null,"PAN No")),i.a.createElement(y.a,{item:!0,xs:4},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.pan,onChange:function(t){var a=Object(l.a)({},e.state.invoice);a.pan=t.target.value,e.setState({invoice:a})}})),i.a.createElement(y.a,{item:!0,xs:5},i.a.createElement(q.a,{className:"width100percent",label:"Item Description",value:this.state.item.description,onChange:function(t){var a=Object(l.a)({},e.state.item);a.description=t.target.value,e.setState({item:a})}})),i.a.createElement(y.a,{item:!0,xs:2},i.a.createElement(z.a,{className:"width100percent "},i.a.createElement(M.a,{id:"language-label"},"Unit"),i.a.createElement(L.a,{value:this.state.item.unit,onChange:function(t){var a=Object(l.a)({},e.state.item);a.unit=t.target.value,e.setState({item:a})}},this.state.units.map((function(e){return i.a.createElement(B.a,{key:e.id,value:e}," ",e," ")}))))),i.a.createElement(y.a,{item:!0,xs:2},i.a.createElement(q.a,{className:"width100percent",label:"Quantity",value:this.state.item.quantity,onChange:function(t){var a=Object(l.a)({},e.state.item);a.quantity=t.target.value,e.setState({item:a})}})),i.a.createElement(y.a,{item:!0,xs:2},i.a.createElement(q.a,{className:"width100percent",label:"Rate",value:this.state.item.rate,onChange:function(t){var a=Object(l.a)({},e.state.item);a.rate=t.target.value,e.setState({item:a})}})),i.a.createElement(y.a,{item:!0,xs:1},i.a.createElement(R.a,{className:"width100percent",variant:"contained",onClick:this.addItem,color:"primary"},"Add")),i.a.createElement(y.a,{item:!0,xs:12},i.a.createElement(I.a,null,i.a.createElement(k.a,{className:G.a.table,"aria-label":"simple table"},i.a.createElement(P.a,null,i.a.createElement(T.a,null,i.a.createElement(_.a,{align:"center"},"Sr No"),i.a.createElement(_.a,{align:"left"},"Description"),i.a.createElement(_.a,{align:"center"},"SHN Code"),i.a.createElement(_.a,{align:"center"},"QTY"),i.a.createElement(_.a,{align:"center"},"Rate"),i.a.createElement(_.a,{align:"center"},"Price"),i.a.createElement(_.a,{align:"center"}))),i.a.createElement(C.a,null,this.state.invoice.items.map((function(t,a){return i.a.createElement(T.a,{key:a},i.a.createElement(_.a,{align:"center"},a+1),i.a.createElement(_.a,{align:"left"},t.description),i.a.createElement(_.a,{align:"center"}),i.a.createElement(_.a,{align:"center"},t.quantity+" "+t.unit),i.a.createElement(_.a,{align:"center"},t.rate),i.a.createElement(_.a,{align:"center"},t.price),i.a.createElement(_.a,{align:"center"},i.a.createElement(A.a,{onClick:function(){var t=Object(l.a)({},e.state.invoice);t.items.splice(a,1),e.setState({invoice:t})}})))})))))),i.a.createElement(y.a,{item:!0,xs:8}," "),i.a.createElement(y.a,{item:!0,xs:2}," ",i.a.createElement(b.a,null,"Total")," "),i.a.createElement(y.a,{item:!0,xs:2}," ",t," "))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,a){e.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv","App-header":"App_App-header__xLkWl","App-link":"App_App-link__3FsH9"}},90:function(e,t,a){e.exports=a(102)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.0717b360.chunk.js.map
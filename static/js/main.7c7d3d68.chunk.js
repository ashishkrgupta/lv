(this.webpackJsonplv=this.webpackJsonplv||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),r=a.n(l),c=(a(97),a(14)),s=a(64),o=a(65),m=a(73),u=a(66),p=a(74),E=a(144),g=a(146),v=a(145),d=a(143),h=a(70),f=a.n(h),y=a(71),x=a.n(y),A=a(51),b=a(147),N=a(67),w=a.n(N),S=a(72),O=a(12),j=a(158),C=a(153),k=a(157),T=a(156),_=a(152),P=a(154),I=a(155),q=a(168),z=a(148),M=a(160),G=a(167),R=a(151),F=a(166),L=a(161),Q=a(139),Y=a(69),B=a.n(Y),D=a(55),J=a.n(D),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={invoice:{items:[],total:0,date:new Date,customerName:"",address:"",aadhar:"",pan:"",cgst:0,sgst:0,grandTotal:0},item:{description:"",unit:"Pc",quantity:"",rate:"",price:""},units:["Mts","Pc"],openAlert:!1,alertMessage:""},a.addItem=function(){var e=Object(c.a)({},a.state.invoice),t=Object(c.a)({},a.state.item),n=a.validateItem(t);if(null===n){t.price=t.rate*t.quantity,e.items.push(Object(c.a)({},t)),t.description="",t.price="",t.quantity="",t.rate="";var i=0;a.state.invoice.items.forEach((function(e){i+=e.price})),e.total=i,e.grandTotal=i+e.sgst+e.cgst,a.setState({invoice:e,item:t,openAlert:!1})}else a.setState({alertMessage:n,openAlert:!0})},a.validateItem=function(e){return""===e.description?"Please enter item description":isNaN(e.rate)||e.rate<=0?"Please enter valid Rate":isNaN(e.quantity)||e.quantity<=0?"Please enter valid Quantity":"Pc"===e.unit&&e.quantity%1!==0?"Quantity can not be in fraction for Pc.":null},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(Q.a,{in:this.state.openAlert},i.a.createElement(L.a,{severity:"error",action:i.a.createElement(d.a,{size:"small",onClick:function(){e.setState({openAlert:!1})}},i.a.createElement(B.a,{fontSize:"inherit"}))},this.state.alertMessage)),i.a.createElement(E.a,null,i.a.createElement(v.a,{style:{textAlign:"center",height:"25px"},action:i.a.createElement(w.a,{trigger:function(){return i.a.createElement(d.a,null,i.a.createElement(f.a,null))},content:function(){return e.componentRef}}),title:"Tax Invoice",titleTypographyProps:{variant:"h5"}}),i.a.createElement(g.a,null,i.a.createElement(E.a,{className:J.a.container,id:"toBePrinted",ref:function(t){return e.componentRef=t}},i.a.createElement(g.a,null,i.a.createElement(b.a,{container:!0,direction:"row",justify:"flex-start",spacing:1,alignItems:"center"},i.a.createElement(b.a,{item:!0,xs:12},i.a.createElement(A.a,{style:{textAlign:"center",fontSize:"10px"}},"TAX INVOICE"),i.a.createElement(A.a,{style:{textAlign:"center",fontSize:"24px"}},"LAXMI VASTRALAYA"),i.a.createElement(A.a,{style:{textAlign:"center"}},"Chowk Kasimabad, Ghazipur. ",i.a.createElement("span",{style:{fontSize:"11px"}},"GSTIN: 09APYPG4485J1Z0"))),i.a.createElement(b.a,{item:!0,xs:9}," "),i.a.createElement(b.a,{item:!0,xs:3},i.a.createElement(O.a,{utils:S.a},i.a.createElement(j.a,{className:"width100percent",disableFuture:!0,autoOk:!0,variant:"inline",format:"dd/MM/yyyy",views:["year","month","date"],value:this.state.invoice.date,onChange:function(t){var a=Object(c.a)({},e.state.invoice);a.date=t,e.setState({invoice:a})}}))),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(A.a,null,"Name")),i.a.createElement(b.a,{item:!0,xs:10},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.customerName,onChange:function(t){var a=Object(c.a)({},e.state.invoice);a.customerName=t.target.value,e.setState({invoice:a})}})),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(A.a,null,"Address")),i.a.createElement(b.a,{item:!0,xs:10},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.address,onChange:function(t){var a=Object(c.a)({},e.state.invoice);a.address=t.target.value,e.setState({invoice:a})}})),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(A.a,null,"Aadhar No")),i.a.createElement(b.a,{item:!0,xs:4},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.aadhar,onChange:function(t){var a=Object(c.a)({},e.state.invoice);a.aadhar=t.target.value,e.setState({invoice:a})}})),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(A.a,null,"PAN No")),i.a.createElement(b.a,{item:!0,xs:4},i.a.createElement(q.a,{className:"width100percent",value:this.state.invoice.pan,onChange:function(t){var a=Object(c.a)({},e.state.invoice);a.pan=t.target.value,e.setState({invoice:a})}})),i.a.createElement(b.a,{item:!0,xs:5},i.a.createElement(q.a,{className:"width100percent",label:"Item Description",value:this.state.item.description,onChange:function(t){var a=Object(c.a)({},e.state.item);a.description=t.target.value,e.setState({item:a})}})),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(R.a,{className:"width100percent "},i.a.createElement(G.a,{id:"language-label"},"Unit"),i.a.createElement(M.a,{value:this.state.item.unit,onChange:function(t){var a=Object(c.a)({},e.state.item);a.unit=t.target.value,e.setState({item:a})}},this.state.units.map((function(e){return i.a.createElement(F.a,{key:e,value:e}," ",e," ")}))))),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(q.a,{className:"width100percent",label:"QTY",value:this.state.item.quantity,onChange:function(t){if(!isNaN(t.target.value)){var a=Object(c.a)({},e.state.item);a.quantity=""===t.target.value?"":parseFloat(t.target.value),e.setState({item:a})}}})),i.a.createElement(b.a,{item:!0,xs:2},i.a.createElement(q.a,{className:"width100percent",label:"Rate",value:this.state.item.rate,onChange:function(t){if(!isNaN(t.target.value)){var a=Object(c.a)({},e.state.item);a.rate=""===t.target.value?"":parseFloat(t.target.value),e.setState({item:a})}}})),i.a.createElement(b.a,{item:!0,xs:1},i.a.createElement(z.a,{className:"width100percent",variant:"contained",onClick:this.addItem,color:"primary"},"Add")),i.a.createElement(b.a,{item:!0,xs:12},i.a.createElement(_.a,null,i.a.createElement(C.a,{className:J.a.table,size:"small","aria-label":"simple table"},i.a.createElement(P.a,null,i.a.createElement(I.a,{style:{borderTop:"solid"}},i.a.createElement(T.a,{align:"center",style:{width:"10px"}},"Sr No"),i.a.createElement(T.a,{align:"left"},"Description"),i.a.createElement(T.a,{align:"center",style:{width:"50px"}},"SHN Code"),i.a.createElement(T.a,{align:"center",style:{width:"50px"}},"QTY"),i.a.createElement(T.a,{align:"center",style:{width:"100px"}},"Rate"),i.a.createElement(T.a,{align:"center",style:{width:"100px"}},"Price"),i.a.createElement(T.a,{align:"center",style:{width:"20px"}}))),i.a.createElement(k.a,null,this.state.invoice.items.map((function(t,a){return i.a.createElement(I.a,{key:a},i.a.createElement(T.a,{align:"center"},a+1),i.a.createElement(T.a,{align:"left"},t.description),i.a.createElement(T.a,{align:"center"}),i.a.createElement(T.a,{align:"center"},t.quantity+" "+t.unit),i.a.createElement(T.a,{align:"center"},t.rate),i.a.createElement(T.a,{align:"center"},t.price),i.a.createElement(T.a,{align:"center"},i.a.createElement(x.a,{onClick:function(){var t=Object(c.a)({},e.state.invoice);t.items.splice(a,1),e.setState({invoice:t})}})))})),i.a.createElement(I.a,{style:{borderTop:"solid"}},i.a.createElement(T.a,{rowSpan:4,colSpan:3}),i.a.createElement(T.a,{align:"right"},"Total"),i.a.createElement(T.a,null),i.a.createElement(T.a,{align:"center"},this.state.invoice.total),i.a.createElement(T.a,null)),i.a.createElement(I.a,null,i.a.createElement(T.a,{align:"right"},"CGST"),i.a.createElement(T.a,{align:"center"},"2.5%"),i.a.createElement(T.a,{align:"center"},this.state.invoice.cgst),i.a.createElement(T.a,null)),i.a.createElement(I.a,null,i.a.createElement(T.a,{align:"right"},"SGST"),i.a.createElement(T.a,{align:"center"},"2.5%"),i.a.createElement(T.a,{align:"center"},this.state.invoice.sgst),i.a.createElement(T.a,null)),i.a.createElement(I.a,null,i.a.createElement(T.a,{align:"right"},"Grand Total"),i.a.createElement(T.a,null),i.a.createElement(T.a,{align:"center"},this.state.invoice.grandTotal),i.a.createElement(T.a,null))))))))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv","App-header":"App_App-header__xLkWl","App-link":"App_App-link__3FsH9"}},92:function(e,t,a){e.exports=a(102)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.7c7d3d68.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[11],{103:function(e,t,i){"use strict";i(0);var n=i.p+"static/media/icons.3b7e813b.svg",a=i(3);var s=function(e){var t=e.name,i=e.color,s=e.size;return Object(a.jsx)("svg",{fill:i,width:s,height:s,children:Object(a.jsx)("use",{xlinkHref:"".concat(n,"#icon-").concat(t)})})};t.a=s},105:function(e,t,i){"use strict";i(0);var n=i(91),a=i(103),s=i(3),r=Object(n.a)((function(e){return{root:function(e){return{position:"relative",width:"small"===e.size?"50px":"calc(100% - 20px)",height:"55px",margin:"5px",padding:"5px 0px",borderRadius:"1000px",cursor:"pointer"}},icon:function(e){return{position:"absolute",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",left:"5px",borderRadius:"50px",background:e.selected?e.color:"#e5eaeb",filter:e.selected?"brightness(1.1) ":"none",transition:"all 1s ease-out 0.5s"}},txt:function(e){return{position:"absolute",top:"0",height:"100%",display:"flex",alignItems:"center",left:"70px",color:e.selected?"#000":"#919fa3"}}}}));t.a=function(e){var t=e.value,i=e.iconName,n=e.color,o=e.selected,c=e.size||"default",l=e.tooltip,d=r({color:n,selected:o,size:c});return"small"===c?Object(s.jsx)("div",{className:d.root,onClick:e.handler,children:Object(s.jsx)("div",{tooltip:l,className:d.icon,children:Object(s.jsx)(a.a,{name:i,color:o?"#fff":"#919fa3",size:24})})}):Object(s.jsxs)("div",{className:d.root,onClick:e.handler,children:[Object(s.jsx)("div",{className:d.icon,children:Object(s.jsx)(a.a,{name:i,color:o?"#fff":"#919fa3",size:"small"===c?15:24})}),Object(s.jsx)("div",{className:d.txt,children:Object(s.jsx)("h5",{children:t})})]})}},124:function(e,t,i){"use strict";var n=i(4),a=i(38),s=i(41),r=i(2),o=i.n(r),c=i(0),l=i.n(c),d=i(91),h=i(32),u=i(21),p=i(87),m=i(169),f=i(258),x=i(144),j=i.n(x),b=i(143),v=i.n(b),g=i(142),O=i.n(g),y=i(145),w=i.n(y),N=i(168),k=i(178),T=i(246),F=i(271),C=i(273),S=i(245),M=i(247),z=i(259),I=i(262),E=i(272),R=i(3),H=Object(k.a)((function(e){return{formControl:{width:"100%"},input:{minHeight:"50px"},label:{textAlign:"center"},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),A=function(e){var t=e.data,i=e.selected,n=e.title,a=e.handler,s=H();return Object(R.jsx)("div",{children:Object(R.jsxs)(S.a,{className:s.formControl,children:[Object(R.jsx)(F.a,{variant:"outlined",shrink:!0,id:n+"select-label",className:s.label,children:Object(R.jsx)("h4",{children:n})}),Object(R.jsx)(z.a,{labelId:n+"select-label",multiple:!0,value:i,input:Object(R.jsx)(T.a,{className:s.input}),onMouseDown:function(e){e.stopPropagation()},renderValue:function(e){return Object(R.jsx)("div",{className:s.chips,children:e.map((function(e){return Object(R.jsx)(E.a,{label:e,onDelete:function(){return a(e)},className:s.chip,onMouseDown:function(e){e.stopPropagation()}},e+"qw")}))})},children:t.map((function(e){return Object(R.jsxs)(C.a,{value:e,onClick:function(){return a(e)},children:[Object(R.jsx)(I.a,{checked:-1!==i.indexOf(e)}),Object(R.jsx)(M.a,{primary:e})]},e)}))})]})})},L=Object(k.a)((function(e){return{formControl:{width:"100%"},input:{minHeight:"50px",color:"#3c4b5a",paddingLeft:"15px",textAlign:"center"},label:{textAlign:"center"},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),V=function(e){var t=e.data,i=e.selected,n=e.title,a=e.handler,s=L();return Object(R.jsx)("div",{children:Object(R.jsxs)(S.a,{className:s.formControl,children:[Object(R.jsx)(F.a,{variant:"outlined",shrink:!0,id:n+"select-label",className:s.label,children:Object(R.jsx)("h4",{children:n})}),Object(R.jsx)(z.a,{labelId:n+"select-label",value:i,input:Object(R.jsx)(T.a,{className:s.input}),onMouseDown:function(e){e.stopPropagation()},renderValue:function(e){return Object(R.jsx)("div",{className:s.chips,children:e})},children:t.map((function(e){return Object(R.jsx)(C.a,{value:e,onClick:function(){return a(e)},children:Object(R.jsx)(M.a,{primary:e})},e)}))})]})})},W=Object(d.a)((function(e){return{root:{position:"absolute",width:"100%",height:"100%"}}})),B=function(e){var t=W(),i=l.a.useCallback((function(){for(var t=e.villages,i=[],n=0;n<t.length;n++){var a={};a.coords=t[n].coords,a.name=t[n].name,a.uname=t[n].uname,a.bgs=t[n].bgs,a.type=1===t[n].type?"\u041a\u043e\u0442\u0442\u0435\u0434\u0436\u043d\u044b\u0439 \u043f\u043e\u0441\u0435\u043b\u043e\u043a":"\u0414\u0430\u0447\u043d\u044b\u0439 \u043f\u043e\u0441\u0435\u043b\u043e\u043a",i.push(a)}window.ymaps.ready((function(){for(var e=new window.ymaps.Map("map",{center:[54.858741,37.558847],zoom:8,controls:[]}),t=new window.ymaps.GeoObjectCollection(null,{preset:"islands#blueIcon"}),n=0;n<i.length;n++){var a=i[n],s=new window.ymaps.Placemark(a.coords,{hintContent:a.name,balloonContent:"<img src=".concat(a.bgs[0]," width='100%' ><a href='/village/").concat(a.uname,"'>").concat(a.type," ").concat(a.name,"</a></img>")});t.add(s)}var r=new window.ymaps.control.ZoomControl({options:{size:"small"}});e.controls.add(r),e.geoObjects.add(t)}))}),[e.villages]);return l.a.useEffect((function(){i()}),[i]),Object(R.jsx)("div",{id:"map",className:t.root})},P=i(105),D=i(141),U=i.n(D),X=i(248);function Y(e){var t=e.selected,i=e.setSelected,n=Object(k.a)((function(e){return{hover:{"&:hover":{background:"#000"}}}}))();return Object(R.jsx)(X.a,{value:"check",selected:t,onChange:function(){i(!t)},style:{background:t?"":"#fff",width:"20px",height:"20px",boxShadow:"rgb(83 163 33 / 50%) 0px 4px 20px -1px",border:"2px solid rgb(158 209 91)"},className:n.hover,children:t?Object(R.jsx)(U.a,{style:{color:"#53a321"}}):null})}var _=Object(d.a)((function(e){return{root:{position:"relative",borderRadius:"15px",overflow:"hidden"},bg:{position:"absolute",width:"100%",height:"100%",background:"#fff",opacity:"0.8",zIndex:"10"},fg:{position:"relative",zIndex:"20"},expandedBody:{width:"100%",margin:"15px",background:"#eff3f4",borderRadius:"15px"},expandButton:{},block:{position:"relative",overflow:"hidden",padding:"4px",margin:"5px",background:"#fff",borderRadius:"15px"},itemFilter:{width:"calc(100% - 10px)",margin:"5px",padding:"0"},filterControl:{position:"relative",width:"100%",padding:"15px 0"},expandBtn:{position:"absolute",width:"50px",height:"50px",right:"0"},rollBtn:{position:"absolute",width:"50px",height:"50px",right:"0"},filterBtn:{background:"#0197fd",minWidth:"170px",height:"50px",margin:"5px",borderRadius:"1000px",display:"flex",alignItems:"center",color:"#fff",justifyContent:"center",cursor:"pointer"},blockHeader:{padding:"15px 0px 0px 15px"},mapBackBtn:{position:"absolute",top:"0px",left:"0px",height:"60px",width:"200px",zIndex:"600",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",borderRadius:"0 0 15px 0",borderRight:"1px solid #eff3f4",borderBottom:"1px solid #eff3f4"},checkboxValue:{display:"inline-block",padding:"0 15px 0 15px",textAlign:"center"},map:{position:"relative",width:"calc(100% - 30px)",margin:"15px",height:"460px",borderRadius:"15px",overflow:"hidden"},closeMap:{position:"absolute",right:"15px",top:"15px",width:"50px",height:"50px",zIndex:"500",background:"#0056b3",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"25px"},verticalCenter:{display:"flex",alignItems:"center"}}})),G=l.a.forwardRef((function(e,t){return Object(R.jsx)(N.a,Object(s.a)({direction:"up",ref:t},e))})),q=function(e){var t=l.a.useContext(u.b),i=l.a.useState(e.expanded||!1),s=Object(a.a)(i,2),r=s[0],c=s[1],d=l.a.useState(!1),x=Object(a.a)(d,2),b=x[0],g=x[1],y=function(){e.hidden&&e.hidden()},N=l.a.useCallback((function(){var e=function(){var e=Object(n.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(!1);case 2:return e.next=4,g(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();b&&e()}),[b]);l.a.useEffect((function(){N()}),[t.filteredVillages]);var k=_(),T=t.uniqRoads,F=t.uniqAreas,C=t.selectedVillageRoads,S=t.selectedVillageTypes,M=t.selectedCommunications,z=t.selectedSafety,I=t.selectedWaysToGet,E=t.selectedAreas,H=t.selectedRoads,L=[];L.push(t.selectedFromMkad),L.push(t.selectedToMkad);var W=[];W.push(t.selectedPriceFrom),W.push(t.selectedPriceTo);var D=Object(R.jsx)(f.a,{m:1,children:Object(R.jsx)(A,{data:T,selected:H,title:"\u0428\u043e\u0441\u0441\u0435",handler:t.selectRoad})}),U=Object(R.jsx)(f.a,{m:1,children:Object(R.jsx)(A,{data:F,selected:E,title:"\u0420\u0430\u0439\u043e\u043d",handler:t.selectArea})}),X=Object(R.jsx)(f.a,{m:1,children:Object(R.jsx)(V,{data:["\u0434\u043e 30 \u043a\u043c.","\u0434\u043e 40 \u043a\u043c.","\u0434\u043e 50 \u043a\u043c.","\u0434\u043e 60 \u043a\u043c.","\u0434\u043e 70 \u043a\u043c.","\u0434\u043e 80 \u043a\u043c.","\u0434\u043e 90 \u043a\u043c."],selected:"\u0434\u043e ".concat(t.selectedFromMkad," \u043a\u043c."),title:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043e \u041c\u041a\u0410\u0414",handler:t.selectFromMkad})}),q=Object(R.jsx)(f.a,{m:1,children:Object(R.jsx)(V,{data:["250000","500000","750000","1000000","1500000","3000000","5000000","10000000","20000000"],selected:t.selectedPriceFrom,title:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c",handler:t.selectPriceFrom})}),J=Object(R.jsxs)("div",{className:k.block,children:[Object(R.jsx)("div",{className:k.blockHeader,children:Object(R.jsx)("h4",{children:"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438"})}),Object(R.jsx)(P.a,{iconName:"svet",color:"#ffce01",selected:-1!==M.indexOf(1),handler:function(){return t.selectCommunication(1)},value:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(R.jsx)(P.a,{iconName:"water",color:"#4a7aff",selected:-1!==M.indexOf(2),handler:function(){return t.selectCommunication(2)},value:"\u0412\u043e\u0434\u0430"}),Object(R.jsx)(P.a,{iconName:"gas",color:"#ff5b5a",selected:-1!==M.indexOf(3),handler:function(){return t.selectCommunication(3)},value:"\u0413\u0430\u0437"}),Object(R.jsx)(P.a,{iconName:"gas",color:"#ff5b5a",selected:-1!==M.indexOf(4),handler:function(){return t.selectCommunication(4)},value:"\u041a\u041f\u041f"}),Object(R.jsx)(P.a,{iconName:"gas",color:"#ff5b5a",selected:-1!==M.indexOf(5),handler:function(){return t.selectCommunication(5)},value:"\u0414\u0435\u0442\u0441\u043a\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430"}),Object(R.jsx)(P.a,{iconName:"gas",color:"#ff5b5a",selected:-1!==M.indexOf(6),handler:function(){return t.selectCommunication(6)},value:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435"}),Object(R.jsx)(P.a,{iconName:"gas",color:"#ff5b5a",selected:-1!==M.indexOf(7),handler:function(){return t.selectCommunication(7)},value:"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430"}),Object(R.jsx)(P.a,{iconName:"canalization",color:"#ff5b5a",selected:-1!==M.indexOf(8),handler:function(){return t.selectCommunication(8)},value:"\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043a\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"})]}),Z=Object(R.jsxs)("div",{className:k.block,children:[Object(R.jsx)("div",{className:k.blockHeader,children:Object(R.jsx)("h4",{children:"\u0414\u043e\u0440\u043e\u0433\u0438 \u0432 \u043f\u043e\u0441\u0435\u043b\u043a\u0435"})}),Object(R.jsx)(P.a,{iconName:"asphalt",color:"#6aa3a5",selected:-1!==C.indexOf(1),handler:function(){return t.selectVillageRoad(1)},value:"\u0410\u0441\u0444\u0430\u043b\u044c\u0442"}),Object(R.jsx)(P.a,{iconName:"asphaltKroshka",color:"#4a7aff",selected:-1!==C.indexOf(3),handler:function(){return t.selectVillageRoad(3)},value:"Ac\u0444. \u043a\u0440\u043e\u0448\u043a\u0430"}),Object(R.jsx)(P.a,{iconName:"gruntovka",color:"#06b26b",selected:-1!==C.indexOf(4),handler:function(){return t.selectVillageRoad(4)},value:"\u0413\u0440\u0443\u043d\u0442\u043e\u0432\u043a\u0430"}),Object(R.jsx)(P.a,{iconName:"sheben",color:"#8a6eac",selected:-1!==C.indexOf(2),handler:function(){return t.selectVillageRoad(2)},value:"\u0429\u0435\u0431\u0435\u043d\u044c"})]}),K=Object(R.jsxs)("div",{className:k.block,children:[Object(R.jsx)("div",{className:k.blockHeader,children:Object(R.jsx)("h4",{children:"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"})}),Object(R.jsx)(P.a,{iconName:"zabor",color:"#6aa3a5",selected:-1!==z.indexOf(1),handler:function(){return t.selectSafety(1)},value:"\u041e\u0433\u043e\u0440\u043e\u0436\u0435\u043d"}),Object(R.jsx)(P.a,{iconName:"security",color:"#ff5b5a",selected:-1!==z.indexOf(2),handler:function(){return t.selectSafety(2)},value:"\u041e\u0445\u0440\u0430\u043d\u0430"})]}),Q=Object(R.jsxs)("div",{className:k.block,children:[Object(R.jsx)("div",{className:k.blockHeader,children:Object(R.jsx)("h4",{children:"\u041a\u0430\u043a \u0434\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f"})}),Object(R.jsx)(P.a,{iconName:"bus",color:"#8a6eac",selected:-1!==I.indexOf(3),handler:function(){return t.selectWayToGet(3)},value:"\u0410\u0432\u0442\u043e\u0431\u0443\u0441"}),Object(R.jsx)(P.a,{iconName:"train",color:"#06b26b",selected:-1!==I.indexOf(2),handler:function(){return t.selectWayToGet(2)},value:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u043a\u0430"})]}),$=Object(R.jsx)(f.a,{m:1,children:Object(R.jsxs)(p.a,{container:!0,children:[Object(R.jsx)(p.a,{item:!0,children:Object(R.jsxs)(f.a,{m:1,className:k.verticalCenter,children:[Object(R.jsx)(Y,{selected:-1!==S.indexOf(1),setSelected:function(){return t.selectVillageType(1)}}),Object(R.jsx)("div",{className:k.checkboxValue,children:Object(R.jsx)("h5",{children:"\u041a\u043e\u0442\u0442\u0435\u0434\u0436\u043d\u044b\u0439 \u043f\u043e\u0441\u0435\u043b\u043e\u043a"})})]})}),Object(R.jsx)(p.a,{item:!0,children:Object(R.jsxs)(f.a,{m:1,className:k.verticalCenter,children:[Object(R.jsx)(Y,{selected:-1!==S.indexOf(2),setSelected:function(){return t.selectVillageType(2)}}),Object(R.jsx)("div",{className:k.checkboxValue,children:Object(R.jsx)("h5",{children:"\u0414\u0430\u0447\u043d\u044b\u0439 \u043f\u043e\u0441\u0435\u043b\u043e\u043a"})})]})})]})}),ee=Object(R.jsx)("div",{className:k.expandedBody,children:Object(R.jsxs)(p.a,{container:!0,justifyContent:"center",alignItems:"flex-start",children:[Object(R.jsx)(p.a,{item:!0,xs:12,sm:6,md:3,children:Z}),Object(R.jsx)(p.a,{item:!0,xs:12,sm:6,md:3,children:J}),Object(R.jsx)(p.a,{item:!0,xs:12,sm:6,md:3,children:Q}),Object(R.jsx)(p.a,{item:!0,xs:12,sm:6,md:3,children:K})]})}),te=Object(R.jsxs)(p.a,{container:!0,direction:"row",children:[Object(R.jsx)(p.a,{item:!0,xs:12,children:$}),Object(R.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(R.jsx)("div",{className:k.itemFilter,children:Object(R.jsx)("div",{className:k.block,children:U})})}),Object(R.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(R.jsx)("div",{className:k.itemFilter,children:Object(R.jsx)("div",{className:k.block,children:D})})}),Object(R.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(R.jsx)("div",{className:k.itemFilter,children:Object(R.jsx)("div",{className:k.block,children:X})})}),Object(R.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(R.jsx)("div",{className:k.itemFilter,children:Object(R.jsx)("div",{className:k.block,children:q})})})]}),ie=Object(R.jsx)("div",{className:k.filterControl,children:Object(R.jsxs)(p.a,{container:!0,justifyContent:"center",alignItems:"center",children:[Object(R.jsxs)("div",{className:k.filterBtn,onClick:function(){t.resetFilter(),y()},children:[Object(R.jsx)(O.a,{}),"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"]}),r||b?"":Object(R.jsxs)("div",{className:k.filterBtn,onClick:function(){return g(!0)},children:[Object(R.jsx)(v.a,{}),"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"]}),r?"":Object(R.jsxs)("div",{className:k.filterBtn,onClick:function(){return c(!0)},children:[Object(R.jsx)(j.a,{}),"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"]}),Object(R.jsx)(h.b,{to:"/villages",onClick:function(){c(!1),y()},children:Object(R.jsx)("div",{className:k.filterBtn,children:Object(R.jsxs)("button",{className:"main-button",style:{padding:"14px 30px"},children:["\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c (",t.filteredVillages.length,")"]})})})]})});return Object(R.jsxs)("div",{className:k.root,children:[Object(R.jsx)("div",{className:k.bg}),Object(R.jsxs)("div",{className:k.fg,children:[te,ie,b?Object(R.jsxs)("div",{className:k.map,children:[Object(R.jsx)("div",{className:k.closeMap,onClick:function(){return g(!1)},children:Object(R.jsx)(w.a,{style:{width:"35px",height:"35px",color:"#fff"}})}),Object(R.jsx)(B,{villages:t.filteredVillages})]}):""]}),Object(R.jsx)(m.a,{open:r,TransitionComponent:G,onClose:function(){c(!1),y()},fullWidth:!0,maxWidth:"lg",children:Object(R.jsxs)(p.a,{container:!0,children:[te,ee,ie]})})]})};t.a=q},139:function(e,t,i){"use strict";var n=i(95),a=i(96);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(i(0)),r=(0,n(i(97)).default)(s.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");t.default=r},147:function(e,t,i){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(i(0)),s=n(i(11)),r={width:"100%",height:"100%",position:"relative"},o={width:"100%",height:"100%",position:"absolute"},c=function(e){function t(t){e.call(this,t),this.state={frames:[].concat(t.frames||t.children||[]),current:0},this.mounted=!1,this.debounceTimeoutId=null,this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onResize=this.onResize.bind(this),this.autoSlide=this.autoSlide.bind(this),this.prev=this.prev.bind(this),this.next=this.next.bind(this),!1===t.loop&&t.auto&&console.warn("[re-carousel] Auto-slide only works in loop mode.")}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentDidMount=function(){this.mounted=!0,this.prepareAutoSlide(),this.hideFrames(),this.refs.wrapper.addEventListener("touchmove",this.onTouchMove,{capture:!0}),this.refs.wrapper.addEventListener("touchend",this.onTouchEnd,{capture:!0}),window.addEventListener("resize",this.onResize)},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.clearAutoTimeout(),this.refs.wrapper.removeEventListener("touchmove",this.onTouchMove,{capture:!0}),this.refs.wrapper.removeEventListener("touchend",this.onTouchEnd,{capture:!0}),window.removeEventListener("resize",this.onResize)},t.prototype.componentDidUpdate=function(e,t){this.state.frames.length&&this.state.frames.length!==t.frames.length&&(this.hideFrames(),this.prepareAutoSlide())},t.getDerivedStateFromProps=function(e,t){var i=[].concat(e.frames||e.children||[]),n={frames:i};return i.length&&i.length!==t.frames.length&&(n.current=0),n},t.prototype.hideFrames=function(){for(var e=1;e<this.state.frames.length;e++)this.refs["f"+e].style.opacity=0},t.prototype.onResize=function(){var e=this;clearTimeout(this.debounceTimeoutId),this.debounceTimeoutId=setTimeout((function(){e.updateFrameSize((function(){e.prepareSiblingFrames()}))}),25)},t.prototype.onTouchStart=function(e){if(!(this.state.total<2)){this.clearAutoTimeout(),this.updateFrameSize(),this.prepareSiblingFrames();var t=e.touches&&e.touches[0]||e,i=t.pageX,n=t.pageY;this.setState({startX:i,startY:n,deltaX:0,deltaY:0}),this.refs.wrapper.addEventListener("mousemove",this.onTouchMove,{capture:!0}),this.refs.wrapper.addEventListener("mouseup",this.onTouchEnd,{capture:!0}),this.refs.wrapper.addEventListener("mouseleave",this.onTouchEnd,{capture:!0})}},t.prototype.onTouchMove=function(e){if(!(e.touches&&1<e.touches.length)){this.clearAutoTimeout();var t=e.touches&&e.touches[0]||e,i=t.pageX,n=t.pageY,a=i-this.state.startX,s=n-this.state.startY;this.setState({deltaX:a,deltaY:s}),"x"===this.props.axis&&Math.abs(a)>Math.abs(s)&&(e.preventDefault(),e.stopPropagation()),"y"===this.props.axis&&Math.abs(s)>Math.abs(a)&&(e.preventDefault(),e.stopPropagation()),this.props.loop||(this.state.current===this.state.frames.length-1&&(a<0&&(a/=3),s<0&&(s/=3)),0===this.state.current&&(0<a&&(a/=3),0<s&&(s/=3))),this.moveFramesBy(a,s)}},t.prototype.onTouchEnd=function(){var e=this,t=this.decideEndPosition();t&&this.transitFramesTowards(t),this.refs.wrapper.removeEventListener("mousemove",this.onTouchMove,{capture:!0}),this.refs.wrapper.removeEventListener("mouseup",this.onTouchEnd,{capture:!0}),this.refs.wrapper.removeEventListener("mouseleave",this.onTouchEnd,{capture:!0}),setTimeout((function(){return e.prepareAutoSlide()}),this.props.duration)},t.prototype.decideEndPosition=function(){var e=this.state,t=e.deltaX;void 0===t&&(t=0);var i=e.deltaY;void 0===i&&(i=0);var n=e.current,a=e.frames,s=this.props,r=s.axis,o=s.loop,c=s.minMove;switch(r){case"x":if(!1===o){if(0===n&&0<t)return"origin";if(n===a.length-1&&t<0)return"origin"}return Math.abs(t)<c?"origin":0<t?"right":"left";case"y":if(!1===o){if(0===n&&0<i)return"origin";if(n===a.length-1&&i<0)return"origin"}return Math.abs(i)<c?"origin":0<i?"down":"up"}},t.prototype.moveFramesBy=function(e,t){var i=this.state.movingFrames,n=i.prev,a=i.current,s=i.next,r=this.state,o=r.frameWidth,c=r.frameHeight;switch(this.props.axis){case"x":l(a,e,0),e<0?l(s,e+o,0):l(n,e-o,0);break;case"y":l(a,0,t),t<0?l(s,0,t+c):l(n,0,t-c)}},t.prototype.prepareAutoSlide=function(){var e=this;if(!(this.state.frames.length<2)&&(this.clearAutoTimeout(),this.updateFrameSize((function(){e.prepareSiblingFrames()})),this.mounted&&this.props.loop&&this.props.auto)){var t=setTimeout(this.autoSlide,this.props.interval);this.setState({slider:t})}},t.prototype.autoSlide=function(e){var t=this;if("prev"===(this.clearAutoTimeout(),e))this.transitFramesTowards("x"===this.props.axis?"right":"down");else this.transitFramesTowards("x"===this.props.axis?"left":"up");setTimeout((function(){return t.prepareAutoSlide()}),this.props.duration)},t.prototype.next=function(){var e=this.state,t=e.current,i=e.frames;if(!this.props.loop&&t===i.length-1)return!1;this.autoSlide("next")},t.prototype.prev=function(){if(!this.props.loop&&0===this.state.current)return!1;var e=this.state.movingFrames,t=e.prev;t===e.next&&("x"===this.props.axis?l(t,-this.state.frameWidth,0,0):l(t,0,-this.state.frameHeight,0),t.getClientRects()),this.autoSlide("prev")},t.prototype.clearAutoTimeout=function(){clearTimeout(this.state.slider)},t.prototype.updateFrameSize=function(e){var t=window.getComputedStyle(this.refs.wrapper),i=t.width,n=t.height;this.setState({frameWidth:parseFloat(i.split("px")[0]),frameHeight:parseFloat(n.split("px")[0])},e)},t.prototype.getSiblingFrames=function(){return{current:this.refs["f"+this.getFrameId()],prev:this.refs["f"+this.getFrameId("prev")],next:this.refs["f"+this.getFrameId("next")]}},t.prototype.prepareSiblingFrames=function(){var e=this.getSiblingFrames();return this.props.loop||(0===this.state.current&&(e.prev=void 0),this.state.current===this.state.frames.length-1&&(e.next=void 0)),this.setState({movingFrames:e}),l(e.current,0,0),"x"===this.props.axis?(l(e.prev,-this.state.frameWidth,0),l(e.next,this.state.frameWidth,0)):(l(e.prev,0,-this.state.frameHeight),l(e.next,0,this.state.frameHeight)),e},t.prototype.getFrameId=function(e){var t=this.state,i=t.frames,n=t.current,a=i.length;switch(e){case"prev":return(n-1+a)%a;case"next":return(n+1)%a;default:return n}},t.prototype.transitFramesTowards=function(e){var t=this,i=this.state.movingFrames,n=i.prev,a=i.current,s=i.next,r=this.props,o=r.duration,c=r.axis,d=r.onTransitionEnd,h=this.state.current;switch(e){case"up":l(a,0,-this.state.frameHeight,o),l(s,0,0,o),h=this.getFrameId("next");break;case"down":l(a,0,this.state.frameHeight,o),l(n,0,0,o),h=this.getFrameId("prev");break;case"left":l(a,-this.state.frameWidth,0,o),l(s,0,0,o),h=this.getFrameId("next");break;case"right":l(a,this.state.frameWidth,0,o),l(n,0,0,o),h=this.getFrameId("prev");break;default:l(a,0,0,o),"x"===c?(l(n,-this.state.frameWidth,0,o),l(s,this.state.frameWidth,0,o)):"y"===c&&(l(n,0,-this.state.frameHeight,o),l(s,0,this.state.frameHeight,o))}d&&setTimeout((function(){return d(t.getSiblingFrames())}),o),this.setState({current:h})},t.prototype.render=function(){var e=this,t=this.state,i=t.frames,n=t.current,s=this.props,c=s.widgets,l=s.axis,h=s.loop,u=s.auto,p=s.interval,m=d(r,this.props.style);return a.createElement("div",{style:m},a.createElement("div",{ref:"wrapper",style:d({overflow:"hidden"},m),onTouchStart:this.onTouchStart,className:this.props.className,onMouseDown:this.onTouchStart},i.map((function(e,t){var i=d({zIndex:99-t},o);return a.createElement("div",{ref:"f"+t,key:t,style:i},e)})),this.props.frames&&this.props.children),c&&[].concat(c).map((function(t,s){return a.createElement(t,{key:s,index:n,total:i.length,prevHandler:e.prev,nextHandler:e.next,axis:l,loop:h,auto:u,interval:p})})))},t}(a.Component);function l(e,t,i,n){void 0===n&&(n=0),e&&(e.style.opacity="1",e.style.transitionDuration=n+"ms",e.style.webkitTransitionDuration=n+"ms",e.style.transform="translate("+t+"px, "+i+"px)",e.style.webkitTransform="translate("+t+"px, "+i+"px) translateZ(0)")}function d(e){for(var t=arguments,i=Object(e),n=1;n<arguments.length;n++){var a=t[n];if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(i[s]=a[s])}return i}c.propTypes={axis:s.oneOf(["x","y"]),auto:s.bool,loop:s.bool,interval:s.number,duration:s.number,widgets:s.arrayOf(s.func),frames:s.arrayOf(s.element),style:s.object,minMove:s.number,onTransitionEnd:s.func},c.defaultProps={axis:"x",auto:!1,loop:!1,interval:5e3,duration:300,minMove:42},e.exports=c},148:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(0);var n=i(3);function a(e){return Object(n.jsx)("span",{style:{display:"inline-block",height:"8px",width:"8px",borderRadius:"4px",backgroundColor:"white",margin:"7px 5px",opacity:e.selected?"1":"0.3",transitionDuration:"300ms"}})}function s(e){var t={position:"absolute",width:"100%",zIndex:"100",bottom:"0px",textAlign:"center"};return e.total<2?Object(n.jsx)("div",{style:t}):Object(n.jsx)("div",{style:t,children:Array.apply(null,Array(e.total)).map((function(t,i){return Object(n.jsx)(a,{selected:e.index===i},i)}))})}},161:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var n=i(15),a=i(0),s=i.n(a),r=i(32),o=i(178),c=i(186),l=i(187),d=i(105),h=i(147),u=i.n(h),p=i(87),m=i(103),f=i(148),x=i(21),j=i(3),b=Object(o.a)((function(e){return{root:{height:"100%",width:"100%",position:"relative",display:"flex",flexDirection:"column",borderRadius:"15px",border:"1px solid #eff3f4",boxShadow:"none"},img:Object(n.a)({width:"100%",height:"250px"},e.breakpoints.up("lg"),{height:"250px"}),cardContent:{flexGrow:1},cardSubHeader:{height:"60px",display:"flex",alignItems:"center",transition:".3s opacity","&:hover":{opacity:".6",transition:".3s opacity"}},cardPrice:{},infoBlock:{position:"relative",width:"100%",height:"40px"},infoIcon:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",left:"0",top:"0",width:"40px",height:"100%"},infoValue:{display:"flex",alignItems:"center",position:"absolute",left:"45px",top:"0",width:"calc(100% - 45px)",height:"100%"}}})),v=function(e){var t=e.icon,i=e.value,n=b();return Object(j.jsxs)("div",{className:n.infoBlock,children:[Object(j.jsx)("div",{className:n.infoIcon,children:Object(j.jsx)(m.a,{name:t,color:"#607D8B",size:24})}),Object(j.jsx)("div",{className:n.infoValue,children:Object(j.jsx)("h5",{className:"light-text",children:i})})]})};function g(e){s.a.useContext(x.b),e.uid;for(var t=e.type||"",i=e.bgs||[],n=e.name||"",a=e.uname||"",o=e.road||"",h=e.fromMkad||"",m=e.price||"",g=e.leftLands||"",O=e.communications||{},y=e.priceLands||[],w=e.sideOfMkad||"",N=e.permittedUse||2,k=b(),T=[],F=0;F<i.length;F++)T.push(Object(j.jsx)("div",{style:{position:"absolute",width:"100%",height:"100%",backgroundImage:"url(".concat(i[F],")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}},"bgil"+F));var C=[],S=[];O&&(C=Object.keys(O));for(var M=0;M<C.length;M++){var z=C[M],I=O[z]||"";"1"===z&&S.push(Object(j.jsx)(d.a,{iconName:"svet",color:"#ffce01",selected:!0,value:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043e "+I,size:"small",tooltip:"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},z+M+"cmmn")),"2"===z&&S.push(Object(j.jsx)(d.a,{iconName:"water",color:"#4a7aff",selected:!0,value:I,size:"small",tooltip:"\u0412\u043e\u0434\u043e\u0441\u043d\u0430\u0431\u0436\u0435\u043d\u0438\u0435"},z+M+"dfgh")),"3"===z&&S.push(Object(j.jsx)(d.a,{iconName:"gas",color:"#ff5b5a",selected:!0,value:I,size:"small",tooltip:"\u0413\u0430\u0437\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},z+M+"cmmh")),"4"===z&&S.push(Object(j.jsx)(d.a,{iconName:"gas",color:"#ff5b5a",selected:!0,value:I,size:"small",tooltip:"\u041e\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435"},z+M+"cmmh")),"5"===z&&S.push(Object(j.jsx)(d.a,{iconName:"gas",color:"#ff5b5a",selected:!0,value:I,size:"small",tooltip:"\u0414\u0435\u0442\u0441\u043a\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430"},z+M+"cmmh")),"6"===z&&S.push(Object(j.jsx)(d.a,{iconName:"gas",color:"#ff5b5a",selected:!0,value:I,size:"small",tooltip:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435 \u0443\u043b\u0438\u0446"},z+M+"cmmh")),"7"===z&&S.push(Object(j.jsx)(d.a,{iconName:"gas",color:"#ff5b5a",selected:!0,value:I,size:"small",tooltip:"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430"},z+M+"cmmh"))}return Object(j.jsxs)(c.a,{className:k.root,children:[Object(j.jsx)("div",{className:k.img,children:Object(j.jsx)(u.a,{loop:!0,auto:!0,widgets:[f.a],children:T})}),Object(j.jsx)(r.b,{to:"/village/".concat(a),children:Object(j.jsxs)(l.a,{className:k.cardContent,children:[Object(j.jsx)("h4",{className:k.cardSubHeader,children:Object(j.jsx)("strong",{children:1===t?"\u041a\u043e\u0442\u0442\u0435\u0434\u0436\u043d\u044b\u0439 \u043f\u043e\u0441\u0435\u043b\u043e\u043a "+n:"\u0414\u0430\u0447\u043d\u044b\u0439 \u043f\u043e\u0441\u0435\u043b\u043e\u043a "+n})}),Object(j.jsx)(v,{icon:"compass",value:"".concat(["\u0421\u0435\u0432\u0435\u0440","\u042e\u0433","\u0417\u0430\u043f\u0430\u0434","\u0412\u043e\u0441\u0442\u043e\u043a","\u042e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434","\u042e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u043a","\u0421\u0435\u0432\u0435\u0440\u043e-\u0437\u0430\u043f\u0430\u0434"][w-1],", ").concat(h," \u043a\u043c. \u043e\u0442 \u041c\u041a\u0410\u0414")}),Object(j.jsx)(v,{icon:"car",value:"".concat(o," \u0448\u043e\u0441\u0441\u0435")}),Object(j.jsx)(v,{icon:"price",value:"\u0421\u043e\u0442\u043a\u0430 \u043e\u0442 ".concat(m," \u0440.")}),Object(j.jsx)(v,{icon:"mapPlaces",value:"\u0423\u0447\u0430\u0441\u0442\u043a\u0438 \u043e\u0442 ".concat(y[0]," \u0440. ").concat(1===N?"(\u0418\u0416\u0421)":"(\u0414\u0430\u0447\u0430)")}),Object(j.jsx)(v,{icon:"flag",value:"\u0412 \u043f\u0440\u043e\u0434\u0430\u0436\u0435 ".concat(g," \u0448\u0442.")}),Object(j.jsx)(p.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",style:{},children:S}),Object(j.jsx)("center",{children:Object(j.jsx)("button",{className:"main-button",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]})})]})}},186:function(e,t,i){"use strict";var n=i(1),a=i(6),s=i(0),r=i(36),o=i(244),c=i(37),l=s.forwardRef((function(e,t){var i=e.classes,c=e.className,l=e.raised,d=void 0!==l&&l,h=Object(a.a)(e,["classes","className","raised"]);return s.createElement(o.a,Object(n.a)({className:Object(r.a)(i.root,c),elevation:d?8:1,ref:t},h))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},187:function(e,t,i){"use strict";var n=i(1),a=i(6),s=i(0),r=i(36),o=i(37),c=s.forwardRef((function(e,t){var i=e.classes,o=e.className,c=e.component,l=void 0===c?"div":c,d=Object(a.a)(e,["classes","className","component"]);return s.createElement(l,Object(n.a)({className:Object(r.a)(i.root,o),ref:t},d))}));t.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},252:function(e,t,i){"use strict";i.r(t);var n=i(22),a=i(14),s=i(23),r=i(24),o=i(0),c=i.n(o),l=i(21),d=i(87),h=i(179),u=i(139),p=i.n(u),m=i(124),f=i(161),x=(i(55),i(3)),j=function(e){Object(s.a)(i,e);var t=Object(r.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e)).setShowFilter=function(){a.setState({showFilter:!0})},a.setHideFilter=function(){a.setState({showFilter:!1})},a.state={showFilter:!1,url:"http://poselki/wp-json/wp/v2/poselki"},a}return Object(a.a)(i,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this.context.resetFilter()}},{key:"render",value:function(){for(var e=[1,2,3,4,5,6,7],t=this.context.filteredVillages,i=[],n=function(n){var a=e[n],r=[],o="";if(1===a&&(o="\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435:"),2===a&&(o="\u042e\u0436\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435:"),3===a&&(o="\u0417\u0430\u043f\u0430\u0434\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435:"),4===a&&(o="\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435:"),5===a&&(o="\u042e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435:"),6===a&&(o="\u042e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),7===a&&(o="\u0421\u0435\u0432\u0435\u0440\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),(s=t.filter((function(e){return e.sideOfMkad===a}))).length>0){r.push(Object(x.jsx)(d.a,{item:!0,xs:12,children:Object(x.jsx)("h3",{style:{padding:"25px 0 15px 0"},children:o})},"HDR"+a));for(var c=0;c<s.length;c++)r.push(Object(x.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,children:Object(x.jsx)(f.a,{uid:s[c].uid,type:s[c].type,uname:s[c].uname,name:s[c].name,bgs:s[c].bgs,road:s[c].road,fromMkad:s[c].fromMkad,price:s[c].price,leftLands:s[c].leftLands,priceLands:s[c].priceLands,sideOfMkad:s[c].sideOfMkad,permittedUse:s[c].permittedUse,communications:s[c].communications})},"IL2E"+s[c].uname+c));i.push(r)}},a=0;a<e.length;a++){var s;n(a)}return Object(x.jsxs)(d.a,{container:!0,children:[!0===this.state.showFilter?Object(x.jsx)(m.a,{hidden:this.setHideFilter,expanded:!0}):"",Object(x.jsxs)(h.a,{maxWidth:"lg",children:[Object(x.jsx)("center",{children:Object(x.jsx)("h2",{children:i.length<1?"\u041f\u043e\u0441\u0451\u043b\u043a\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e":""})}),Object(x.jsx)(d.a,{container:!0,spacing:3,children:i})]}),Object(x.jsxs)("div",{className:"filter-button",onClick:this.setShowFilter,children:[Object(x.jsx)("h5",{style:{position:"absolute",top:"-30px"},children:"\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c"}),Object(x.jsx)(p.a,{style:{width:"55px",height:"55px",color:"#FFF"}})]})]})}}]),i}(c.a.Component);j.contextType=l.b,t.default=j}}]);
//# sourceMappingURL=11.02f0a383.chunk.js.map
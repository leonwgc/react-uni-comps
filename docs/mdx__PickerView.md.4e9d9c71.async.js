(self["webpackChunkreact_uni_comps"]=self["webpackChunkreact_uni_comps"]||[]).push([[9734],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},69956:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(96089),a=n(78691),c=n(40805),i=r.memo((e=>{var t=e.demos,n=t["react-uni-comps-pickerview"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement(a.default,t["react-uni-comps-pickerview"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("p",null),r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(c.Z,{src:"../src/PickerView.tsx",identifier:"PickerView",export:"default"}))))}));t["default"]=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(i,{demos:n})}},40805:function(e,t,n){"use strict";var r=n(67294),l=n(96089),a={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["Z"]=function(e){var t=e.identifier,n=e["export"],c=(0,l.useApiData)(t),i=(0,r.useContext)(l.context),u=i.locale,m=/^zh|cn$/i.test(u)?a["zh-CN"]:a["en-US"];return r.createElement(r.Fragment,null,c&&r.createElement("table",{style:{marginTop:24}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,m.name),r.createElement("th",null,m.description),r.createElement("th",null,m.type),r.createElement("th",null,m["default"]))),r.createElement("tbody",null,c[n].map((function(e){return r.createElement("tr",{key:e.identifier},r.createElement("td",null,e.identifier),r.createElement("td",null,e.description||"--"),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,r.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}}}]);
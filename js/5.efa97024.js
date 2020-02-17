(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"55c9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"q-ma-sm text-primary"},[e._v("Eventos")])]),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{size:"md",round:"",color:"secondary",icon:"add",to:{name:"eventsCreate"}}})],1)]),a("q-separator",{staticClass:"q-mb-md"}),a("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",type:"search",clearable:""},on:{input:function(t){e.currentPage=1}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.searchField,callback:function(t){e.searchField=t},expression:"searchField"}}),a("EventsList",{attrs:{events:e.eventsCurrentPage}}),a("div",{staticClass:"row justify-center"},[a("q-pagination",{staticClass:"q-mt-md col-auto",attrs:{max:e.numberOfpages,input:!0},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},n=[],i=(a("7f7f"),a("6762"),a("2fdb"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return Object.keys(e.events).length?a("q-list",{attrs:{bordered:"",separator:""}},e._l(e.events,(function(e){return a("EventsItem",{key:e.id,attrs:{event:e}})})),1):e._e()}),r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.toShow()}}},[a("q-item-section",{staticClass:"col-auto"},[a("q-icon",{attrs:{size:"md",name:"layers"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.event.name))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n          categoria 1 - categoria 2 - categoria 3\n        ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-item-label",{attrs:{caption:""}},[e._v("Desde "+e._s(e.event.published_from))]),a("q-item-label",{attrs:{caption:""}},[e._v("Hasta "+e._s(e.event.published_to))])],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"row"},[a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",color:"red",size:"sm",icon:"delete"},on:{click:function(t){t.stopPropagation(),e.deleteDialog=!0}}}),a("q-btn",{attrs:{round:"",color:"primary",size:"sm",flat:"",icon:"edit",to:{name:"eventsEdit",params:{id:e.event.id}}}})],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[a("EventsDeleteDialog")],1)],1)},l=[],c=a("a7a5"),u={name:"EventItem",components:{EventsDeleteDialog:c["a"]},props:["event"],methods:{toShow:function(){this.$router.push("events/show/"+this.event.id)}},data:function(){return{deleteDialog:!1}}},d=u,m=a("2877"),p=a("eebe"),v=a.n(p),f=a("66e5"),b=a("4074"),h=a("0016"),g=a("0170"),q=a("9c40"),_=a("24e8"),C=a("714f"),E=Object(m["a"])(d,o,l,!1,null,null,null),P=E.exports;v()(E,"components",{QItem:f["a"],QItemSection:b["a"],QIcon:h["a"],QItemLabel:g["a"],QBtn:q["a"],QDialog:_["a"]}),v()(E,"directives",{Ripple:C["a"]});var w={name:"EventsList",props:["events"],components:{EventsItem:P}},Q=w,x=a("1c1c"),D=Object(m["a"])(Q,i,r,!1,null,null,null),y=D.exports;v()(D,"components",{QList:x["a"]});var k={name:"EventsIndex",components:{EventsList:y},data:function(){return{searchField:"",currentPage:1,itemsPerPage:10,events:[{id:0,name:"Evento 1",published_from:"1/12/2020",published_to:"15/12/2020"},{id:1,name:"Evento 2",published_from:"5/12/2020",published_to:"15/12/2020"},{id:2,name:"Evento 3 f",published_from:"5/12/2020",published_to:"15/12/2020"},{id:3,name:"Evento 4 f",published_from:"5/12/2020",published_to:"15/12/2020"}]}},computed:{eventsFiltered:function(){var e=this;return this.events.filter((function(t){return t.name.toLowerCase().includes(e.searchField.toLowerCase())}))},numberOfpages:function(){return Math.ceil(this.eventsFiltered.length/this.itemsPerPage)},eventsCurrentPage:function(){return this.eventsFiltered.slice((this.currentPage-1)*this.itemsPerPage,this.currentPage*this.itemsPerPage)}}},I=k,F=a("9989"),L=a("eb85"),O=a("27f9"),S=a("3b16"),j=Object(m["a"])(I,s,n,!1,null,null,null);t["default"]=j.exports;v()(j,"components",{QPage:F["a"],QBtn:q["a"],QSeparator:L["a"],QInput:O["a"],QIcon:h["a"],QPagination:S["a"]})},a7a5:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6 q-mb-sm"},[e._v("Confirmar")]),a("q-separator")],1),a("q-card-section",{staticClass:"row items-center"},[a("div",{staticClass:"text-body1"},[e._v("Esta seguro de que desea eliminar este evento?")])]),a("q-card-section",{staticClass:"row items-center q-pb-none "},[a("q-separator")],1),a("q-card-actions",{staticClass:"q-mt-sm",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Eliminar",color:"red"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}})],1)],1)},n=[],i={name:"EventsDeleteDialog",props:["event"],methods:{},data:function(){return{}}},r=i,o=a("2877"),l=a("eebe"),c=a.n(l),u=a("f09f"),d=a("a370"),m=a("eb85"),p=a("4b7e"),v=a("9c40"),f=a("7f67"),b=Object(o["a"])(r,s,n,!1,null,null,null);t["a"]=b.exports;c()(b,"components",{QCard:u["a"],QCardSection:d["a"],QSeparator:m["a"],QCardActions:p["a"],QBtn:v["a"]}),c()(b,"directives",{ClosePopup:f["a"]})}}]);
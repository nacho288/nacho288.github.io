(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"229e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row items-center"},[a("q-btn",{attrs:{round:"",size:"sm",color:"primary",icon:"arrow_back",to:{name:"eventsIndex"}}}),a("h4",{staticClass:"q-my-sm q-ml-md text-primary"},[t._v(t._s(t.event.name))]),a("q-space"),a("q-btn",{staticClass:"q-mr-md",attrs:{round:"",size:"md",color:"red",icon:"delete"},on:{click:function(e){t.deleteDialog=!0}}}),a("q-btn",{attrs:{round:"",size:"md",color:"secondary",icon:"edit",to:{name:"eventsEdit",params:{id:t.event.id}}}})],1),a("q-separator",{staticClass:"q-mb-md"}),a("div",{staticClass:"row"},[a("q-card",{staticClass:"my-card col-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[a("q-icon",{attrs:{name:"format_size",size:"md",color:"primary"}}),t._v("\n          Cuerpo:\n        ")],1)]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n        "+t._s(t.event.body)+"\n      ")])],1),a("div",{staticClass:"col-12 col-md-auto q-mr-md q-mb-md"}),a("q-card",{staticClass:"my-card col col-md-4",attrs:{flat:"",bordered:""}},[a("div",{staticClass:"row justify-between"},[a("DateItem",{attrs:{tittle:"Disponible desde",itemDate:t.event.available_from}}),a("DateItem",{attrs:{tittle:"Disponible hasta",itemDate:t.event.available_to}}),a("DateItem",{attrs:{tittle:"Publicado desde",itemDate:t.event.published_from}}),a("DateItem",{attrs:{tittle:"Publicado hasta",itemDate:t.event.published_to}})],1)])],1),a("q-card",{staticClass:"my-card q-mt-md",attrs:{flat:"",bordered:"",padding:""}},[a("q-card-section",[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-auto"},[a("q-icon",{attrs:{name:"format_size",size:"md",color:"primary"}})],1),a("div",{staticClass:"col-auto"},[a("h6",{staticClass:"q-ma-sm"},[t._v("Categorias:")])]),a("div",{staticClass:"col text-right"},[a("q-btn",{attrs:{round:"",size:"md",color:"secondary",icon:"add"},on:{click:function(e){t.addCategoryDialog=!0}}})],1)])]),a("q-separator",{staticClass:"q-mb-md",attrs:{inset:""}}),a("q-card-section",{staticClass:"q-pt-none"},t._l(t.event.categories,(function(e){return a("q-chip",{key:e,attrs:{removable:"",color:"primary","text-color":"white",icon:"layers"}},[t._v("\n        "+t._s(e)+"\n      ")])})),1)],1),a("q-dialog",{model:{value:t.addCategoryDialog,callback:function(e){t.addCategoryDialog=e},expression:"addCategoryDialog"}},[a("AddCategoryDialog",{attrs:{event:t.event},on:{close:function(e){t.addCategoryDialog=!1}}})],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("EventsDeleteDialog")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Agregar categoria")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-select",{attrs:{options:t.categories,label:"Categoria"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Agregar"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar"}})],1)],1)},r=[],n={name:"AddCategoryDialog",data:function(){return{category:"",categories:["Deportes","Arte","etc"]}}},c=n,l=a("2877"),d=a("eebe"),m=a.n(d),p=a("f09f"),u=a("a370"),v=a("ddd8"),b=a("4b7e"),q=a("9c40"),C=a("7f67"),g=Object(l["a"])(c,i,r,!1,null,null,null),f=g.exports;m()(g,"components",{QCard:p["a"],QCardSection:u["a"],QSelect:v["a"],QCardActions:b["a"],QBtn:q["a"]}),m()(g,"directives",{ClosePopup:C["a"]});var y=a("a7a5"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card-section",{staticClass:"col-auto"},[a("div",{staticClass:"row items-center"},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"today",size:"xs",color:"primary"}}),a("div",{staticClass:"text-subtitle1 text-weight-medium"},[t._v(t._s(t.tittle)+": ")])],1),a("div",{staticClass:"text-body2 text-grey-8"},[t._v(t._s(t.itemDate))])])},_=[],h={name:"DateItem",props:["tittle","itemDate"]},x=h,w=a("0016"),Q=Object(l["a"])(x,D,_,!1,null,null,null),E=Q.exports;m()(Q,"components",{QCardSection:u["a"],QIcon:w["a"]});var S={name:"EventsShow",components:{AddCategoryDialog:f,EventsDeleteDialog:y["a"],DateItem:E},data:function(){return{addCategoryDialog:!1,deleteDialog:!1,event:{id:0,name:"Evento 1",body:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",available_from:"1/12/2020",available_to:"2/12/2020",published_from:"1/12/2020",published_to:"2/12/2020",categories:["Deportes","Nacionales","Politica"]}}}},k=S,z=a("9989"),I=a("2c91"),A=a("eb85"),P=a("b047"),j=a("24e8"),N=Object(l["a"])(k,s,o,!1,null,null,null);e["default"]=N.exports;m()(N,"components",{QPage:z["a"],QBtn:q["a"],QSpace:I["a"],QSeparator:A["a"],QCard:p["a"],QCardSection:u["a"],QIcon:w["a"],QChip:P["a"],QDialog:j["a"]})},a7a5:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6 q-mb-sm"},[t._v("Confirmar")]),a("q-separator")],1),a("q-card-section",{staticClass:"row items-center"},[a("div",{staticClass:"text-body1"},[t._v("Esta seguro de que desea eliminar este evento?")])]),a("q-card-section",{staticClass:"row items-center q-pb-none "},[a("q-separator")],1),a("q-card-actions",{staticClass:"q-mt-sm",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Eliminar",color:"red"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"primary"}})],1)],1)},o=[],i={name:"EventsDeleteDialog",props:["event"],methods:{},data:function(){return{}}},r=i,n=a("2877"),c=a("eebe"),l=a.n(c),d=a("f09f"),m=a("a370"),p=a("eb85"),u=a("4b7e"),v=a("9c40"),b=a("7f67"),q=Object(n["a"])(r,s,o,!1,null,null,null);e["a"]=q.exports;l()(q,"components",{QCard:d["a"],QCardSection:m["a"],QSeparator:p["a"],QCardActions:u["a"],QBtn:v["a"]}),l()(q,"directives",{ClosePopup:b["a"]})}}]);
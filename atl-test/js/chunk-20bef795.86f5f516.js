(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20bef795"],{"0270":function(t,e,c){"use strict";c("eefa")},"260b":function(t,e,c){"use strict";c.r(e);var o=c("7a23"),n={class:"page page--catalog"},s=Object(o["g"])("h1",null,"Список товаров",-1);function i(t,e,c,i,a,l){var r=Object(o["z"])("form-product-add"),d=Object(o["z"])("catalog-list");return Object(o["s"])(),Object(o["f"])("div",n,[s,a.isShowFormAdd?(Object(o["s"])(),Object(o["d"])(r,{key:0,onHide:e[0]||(e[0]=function(t){return a.isShowFormAdd=!1})})):Object(o["e"])("",!0),Object(o["g"])("button",{onClick:e[1]||(e[1]=function(t){return a.isShowFormAdd=!0})},"Добавить товар"),Object(o["g"])("button",{onClick:e[2]||(e[2]=function(t){return l.changeDisplayCatalogList()})}," Отобразить "+Object(o["B"])(l.isDisplayTilesCatalogList?"списком":"плиткой"),1),Object(o["i"])(d,{isDisplayTilesCatalogList:l.isDisplayTilesCatalogList},null,8,["isDisplayTilesCatalogList"])])}c("99af");var a=["data-catalog-list-bottom-panel"],l=Object(o["h"])("Просмотреть товар"),r=["onClick"];function d(t,e,c,n,s,i){var d=Object(o["z"])("router-link"),b=Object(o["z"])("popup");return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])("".concat(s.cls,"  ").concat(s.cls,"--").concat(c.isDisplayTilesCatalogList?"tile":"line"))},[Object(o["g"])("div",{class:Object(o["o"])("".concat(s.cls,"__list"))},[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(i.productItems,(function(t){return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])("".concat(s.cls,"__item")),key:t.id},[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(t.fields,(function(t,e){return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])("".concat(s.cls,"__value")),key:e},[Object(o["g"])("b",null,Object(o["B"])(e)+":",1),Object(o["h"])(" "+Object(o["B"])(t),1)],2)})),128)),Object(o["g"])("div",{class:Object(o["o"])("".concat(s.cls,"__bottom-panel")),"data-catalog-list-bottom-panel":t.id},[Object(o["i"])(d,{class:Object(o["o"])("".concat(s.cls,"__link")),to:"/product/".concat(t.id)},{default:Object(o["G"])((function(){return[l]})),_:2},1032,["class","to"]),Object(o["g"])("button",{class:Object(o["o"])("".concat(s.cls,"__btn-delete")),onClick:function(e){return s.productIdDelete=t.id}}," Удалить ",10,r)],10,a)],2)})),128))],2),s.productIdDelete?(Object(o["s"])(),Object(o["d"])(b,{key:0,title:"Вы уверены что хотите удалить этот товар?",btnCancel:"Отмена",btnConfirm:"Удалить",onAction:e[0]||(e[0]=function(t){return i.processingConfirmDelete(t)})})):Object(o["e"])("",!0)],2)}var b=c("badd"),u={name:"catalog-list",components:{Popup:b["a"]},data:function(){return{cls:"catalog-list",productIdDelete:null}},computed:{productItems:function(){return this.$store.state.products.items}},props:{isDisplayTilesCatalogList:{type:Boolean,default:!0}},methods:{deleteProduct:function(t){this.$store.commit("products/deleteProduct",t)},processingConfirmDelete:function(t){"confirm"==t&&this.deleteProduct(this.productIdDelete),this.productIdDelete=null}}},f=(c("0270"),c("6b0d")),j=c.n(f);const O=j()(u,[["render",d],["__scopeId","data-v-417ead78"]]);var p=O,m=["type","onUpdate:modelValue"];function g(t,e,c,n,s,i){return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])("".concat(s.cls))},[Object(o["g"])("div",{class:Object(o["o"])("".concat(s.cls,"__box"))},[Object(o["g"])("button",{class:Object(o["o"])("".concat(s.cls,"__closed")),onClick:e[0]||(e[0]=function(t){return i.hideForm()})},"закрыть",2),Object(o["g"])("div",{class:Object(o["o"])("".concat(s.cls,"__list"))},[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(s.fields,(function(t,e){return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])("".concat(s.cls,"__item")),key:e},[Object(o["g"])("label",{class:Object(o["o"])("".concat(s.cls,"__label"))},Object(o["B"])(e),3),Object(o["H"])(Object(o["g"])("input",{class:Object(o["o"])("".concat(s.cls,"__field")),type:s.fieldsType[e]?s.fieldsType[e]:"","onUpdate:modelValue":function(t){return s.fields[e]=t}},null,10,m),[[o["D"],s.fields[e],void 0,{trim:!0}]])],2)})),128))],2),s.error?(Object(o["s"])(),Object(o["f"])("div",{key:0,class:Object(o["o"])("".concat(s.cls,"__error error"))},Object(o["B"])(s.error),3)):Object(o["e"])("",!0),Object(o["g"])("button",{class:Object(o["o"])("".concat(s.cls,"__btn-add")),onClick:e[1]||(e[1]=function(t){return i.addProduct()})},"Добавить товар в список",2)],2)],2)}var h={name:"form-product-add",data:function(){return{cls:"form-product-add",fieldsType:{"Количество на складе":"number","Цена":"number"},fields:{"Название товара":"","Артикул":"","Производитель":"","Количество на складе":"","Цена":""},error:""}},methods:{checkFieldsError:function(){var t=!1;for(var e in this.fields)this.fields[e]||(t=!0);return t},addProduct:function(){this.error="",this.checkFieldsError()?this.error="Заполните все поля":(this.$store.commit("products/addProduct",this.fields),this.clearForm())},clearForm:function(){for(var t in this.fields)this.fields[t]=""},hideForm:function(){this.$emit("hide")}}};c("ef08");const _=j()(h,[["render",g],["__scopeId","data-v-97550c3e"]]);var v=_,y={name:"page-catalog",components:{CatalogList:p,FormProductAdd:v},data:function(){return{isShowFormAdd:!1}},computed:{isDisplayTilesCatalogList:function(){return this.$store.state.catalogList.isDisplayTilesCatalogList}},methods:{changeDisplayCatalogList:function(){var t=!this.isDisplayTilesCatalogList;this.$store.commit("catalogList/changeDisplayCatalogList",t)}}};c("7897");const C=j()(y,[["render",i]]);e["default"]=C},3835:function(t,e,c){},7897:function(t,e,c){"use strict";c("af19")},"7dde":function(t,e,c){},"99af":function(t,e,c){"use strict";var o=c("23e7"),n=c("da84"),s=c("d039"),i=c("e8b5"),a=c("861d"),l=c("7b0b"),r=c("07fa"),d=c("8418"),b=c("65f0"),u=c("1dde"),f=c("b622"),j=c("2d00"),O=f("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",g=n.TypeError,h=j>=51||!s((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),_=u("concat"),v=function(t){if(!a(t))return!1;var e=t[O];return void 0!==e?!!e:i(t)},y=!h||!_;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,o,n,s,i=l(this),a=b(i,0),u=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?i:arguments[e],v(s)){if(n=r(s),u+n>p)throw g(m);for(c=0;c<n;c++,u++)c in s&&d(a,u,s[c])}else{if(u>=p)throw g(m);d(a,u++,s)}return a.length=u,a}})},"9b00":function(t,e,c){"use strict";c("7dde")},af19:function(t,e,c){},badd:function(t,e,c){"use strict";var o=c("7a23");function n(t,e,c,n,s,i){return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])("".concat(s.cls))},[Object(o["g"])("div",{class:Object(o["o"])("".concat(s.cls,"__box"))},[c.title?(Object(o["s"])(),Object(o["f"])("div",{key:0,class:Object(o["o"])("".concat(s.cls,"__title"))},Object(o["B"])(c.title),3)):Object(o["e"])("",!0),Object(o["g"])("div",{class:Object(o["o"])("".concat(s.cls,"__bottom-panel"))},[c.btnCancel?(Object(o["s"])(),Object(o["f"])("button",{key:0,class:Object(o["o"])("".concat(s.cls,"__btn-cancel")),onClick:e[0]||(e[0]=function(t){return i.emit("cancel")})},Object(o["B"])(c.btnCancel),3)):Object(o["e"])("",!0),c.btnConfirm?(Object(o["s"])(),Object(o["f"])("button",{key:1,class:Object(o["o"])("".concat(s.cls,"__btn-action")),onClick:e[1]||(e[1]=function(t){return i.emit("confirm")})},Object(o["B"])(c.btnConfirm),3)):Object(o["e"])("",!0)],2)],2)],2)}var s={name:"popup",data:function(){return{cls:"popup"}},props:{title:{type:String,default:""},btnCancel:{type:String,default:""},btnConfirm:{type:String,default:""}},methods:{emit:function(t){this.$emit("action",t)}}},i=(c("9b00"),c("6b0d")),a=c.n(i);const l=a()(s,[["render",n],["__scopeId","data-v-2e0f3459"]]);e["a"]=l},eefa:function(t,e,c){},ef08:function(t,e,c){"use strict";c("3835")}}]);
//# sourceMappingURL=chunk-20bef795.86f5f516.js.map
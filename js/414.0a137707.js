"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[414],{3940:function(t,e,l){l.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Title"},[t._t("l",(function(){return[e("a",{attrs:{href:"#"},on:{click:t.goreturn}})]})),e("a",{attrs:{href:"#"}},[t._v(t._s(t.title))]),t._t("r",(function(){return[e("span")]}))],2)},s=[],i={name:"Titletop",props:["title"],methods:{goreturn(){this.$router.go(-1)}}},r=i,n=l(1001),o=(0,n.Z)(r,a,s,!1,null,"1b456dca",null),c=o.exports},9414:function(t,e,l){l.r(e),l.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"classdetails"},[e("div",[e("Titletop",{attrs:{title:"分类"}},[e("router-link",{attrs:{slot:"l",to:{name:"cation"}},slot:"l"}),e("router-link",{attrs:{slot:"r",to:"/index"},slot:"r"})],1)],1),e("div",{staticClass:"content"},[e("div",{staticClass:"cname"},[e("h6",[t._v(t._s(t.title))])]),t._l(t.contentslist,(function(l){return e("div",{key:l.id,staticClass:"alllist",on:{click:function(e){return t.$bus.$emit("details",l.id)}}},[e("div",{staticClass:"alllist-l"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:l.cover_image,expression:"item.cover_image"}]})]),e("div",{staticClass:"alllist-r"},[e("h6",[t._v(t._s(l.name))]),e("p",[t._v(t._s(l.intro))]),e("span",[t._v("作者:"+t._s(l.author))])])])}))],2)])},s=[],i=l(3940),r={name:"Myclassdetails",components:{Titletop:i.Z},data(){return{title:localStorage.getItem("title"),contentslist:[]}},mounted(){let t;t=localStorage.getItem("param")?localStorage.getItem("param").replaceAll(",","&").replaceAll(":","=").replaceAll('"',"").replaceAll("{","").replaceAll("}",""):"",this.axios.get("https://jyapi.jyacg.com/web/book_room?"+t).then((t=>{this.contentslist=t.data.data}))}},n=r,o=l(1001),c=(0,o.Z)(n,a,s,!1,null,"9156ec3a",null),u=c.exports}}]);
//# sourceMappingURL=414.0a137707.js.map
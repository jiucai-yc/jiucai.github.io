"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[945],{3945:function(t,a,i){i.r(a),i.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",[a("van-sticky",[a("div",{staticClass:"head"},[t._v(t._s(t.title[t.activeKey].name))])]),a("div",{staticClass:"head-img-box",style:{backgroundImage:`url(${t.getone[0]})`}},[a("img",{attrs:{src:`https://images.weserv.nl/?url=https://jyacgpic.jyacg.com/app-pic/ranklist/${t.title[t.activeKey].img}.png`,alt:""}}),a("div",[t._v("《"+t._s(t.getone[1])+"》")]),a("div",[t._v(t._s(t.getone[2])+" 著")])]),a("div",{staticClass:"below"},[a("van-sticky",{attrs:{"offset-top":40}},[a("a",{attrs:{href:"#"}},[a("van-sidebar",{staticClass:"le",model:{value:t.activeKey,callback:function(a){t.activeKey=a},expression:"activeKey"}},t._l(t.title,(function(t){return a("van-sidebar-item",{key:t.img,attrs:{title:t.name}})})),1)],1)]),a("van-list",{staticClass:"re",attrs:{finished:t.finished,"finished-text":"没有更多了"},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.getrightlist,(function(i){return a("van-cell",{key:i.id,staticClass:"cell",on:{click:function(a){return t.$bus.$emit("details",i.id)}}},[a("img",{attrs:{src:i.cover_image}}),a("div",{staticClass:"cell-box"},[a("div",{staticClass:"cell-box-s"},[t._v(t._s(i.name))]),a("div",{staticClass:"cell-box-z"},[a("div",{staticClass:"cell-box-z-z"},[a("div",{staticClass:"cell-box-z-noe"},[a("img",{attrs:{src:i.author_avatar}}),a("span",[t._v(t._s(i.author)+" 著")])]),a("div",{staticClass:"cell-box-z-two"},[t._v(t._s(i.book_label))])])]),a("div",{staticClass:"cell-box-x"},[t._v(t._s(i.total_words)+" 万字")])])])})),1)],1)],1)},s=[],l=(i(7658),i(6943)),r={name:"MyrankList",components:{},data(){return{activeKey:0,title:[{name:"综合榜",img:"zh",url:1},{name:"热销榜",img:"rx",url:2},{name:"新书榜",img:"xs",url:3},{name:"完本榜",img:"wb",url:"rqwb"},{name:"VIP榜",img:"vip",url:"viprm"},{name:"免费版",img:"mf",url:"mfrm"},{name:"月票榜",img:"yp",url:"ypzg"},{name:"收藏版",img:"sc",url:"sczb"},{name:"勤更榜",img:"qg",url:"zjgx"}],rightlist:[],page:1,finished:!1,loading:!1}},computed:{getone(){return this.rightlist.length?[this.rightlist[0].cover_image,this.rightlist[0].name,this.rightlist[0].author]:["https://images.weserv.nl/?url=https://jyacgpic.jyacg.com/2021-05-15/443f1d63ebde16605804de14cea0c4c2.jpg"]},gethttp(){return 6==this.activeKey||7==this.activeKey?`https://jyapi.jyacg.com/web/book_room?tag=${this.title[this.activeKey].url}&page=${this.page}&limit=10`:`https://jyapi.jyacg.com/web/rank_list?id=${this.title[this.activeKey].url}&page=${this.page}&limit=10`},getrightlist(){return this.rightlist.map((t=>(t.book_label||t.labels&&(t.book_label=t.labels[0].name),t.author_avatar||(t.author_info&&t.author_info.avatar?t.author_avatar=t.author_info.avatar:t.author_avatar="https://jyapi.jyacg.com/img/default_avatar.jpg"),t)))}},watch:{activeKey(){this.page=1,this.finished=!1,this.onLoad()},loading(){this.loading&&this.onLoad()}},methods:{onLoad(){l.Z.get(this.gethttp).then((t=>{1==this.page?(this.rightlist=t.data.data,this.page++):(this.page++,this.rightlist.push(...t.data.data)),0!=t.data.data.length?this.loading=!1:this.finished=!0}))}},mounted(){},activated(){this.$bus.$emit("active",2)}},n=r,c=i(1001),o=(0,c.Z)(n,e,s,!1,null,"09bdf2be",null),h=o.exports}}]);
//# sourceMappingURL=945.4e395926.js.map
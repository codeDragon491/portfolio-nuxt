(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(t,e,r){"use strict";(function(t){r(40);var o=r(5),n=r(242),c=r(52);e.a={head:function(){return{title:"Work",meta:[{hid:"description",name:"description",content:"Where you can see Julia´s work"}]}},mounted:function(){setTimeout((function(){t("#title").splitText({type:"letters",animation:"matrix"}).animate()}),1e3);var e=new this.$ScrollMagic.Controller,r=new this.$GSAP.TimelineLite;r.to(".work-list",1.5,{opacity:1,ease:"power1"},1.5).from(".work-list",1.5,{y:50,ease:"power1"},1.5,"-=1.5");new this.$ScrollMagic.Scene({duration:0,offset:0}).setTween(r).addTo(e)},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,o=t.error,e.prev=1,e.next=4,r.dispatch("works/fetchWorks");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),o({statusCode:503,message:"Unable to fetch works at this time. Please try again later."});case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},components:{WorkCard:n.a},computed:Object(c.b)({works:function(t){return t.works.works}})}}).call(this,r(137))},226:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("32b36d16",content,!0,{sourceMap:!1})},227:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("3d6085a1",content,!0,{sourceMap:!1})},234:function(t,e,r){"use strict";r(226)},235:function(t,e,r){(e=r(63)(!1)).push([t.i,'.work-card[data-v-c2272ba2]{position:relative;height:11rem;margin-bottom:1.25rem}.work-cover img[data-v-c2272ba2]{height:100%}@media screen and (min-width:414px){.work-card[data-v-c2272ba2]{height:var(--image-height)}.work-cover img[data-v-c2272ba2]{height:auto}}@media screen and (min-width:768px){.work-card[data-v-c2272ba2]{height:12rem;flex:0 0 48.5%}.work-cover img[data-v-c2272ba2]{height:100%}}@media screen and (min-width:1024px){.work-card[data-v-c2272ba2]{height:11rem;flex:0 0 32%;max-width:32%}}.work-cover[data-v-c2272ba2]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(120deg,#ebebeb,#d93337);opacity:.5;mix-blend-mode:hard-light;transform:skew(15deg) translateX(-50%);z-index:10}.work-cover[data-v-c2272ba2]{height:100%;overflow:hidden}.title[data-v-c2272ba2],.work-cover[data-v-c2272ba2]{position:absolute;left:0;top:0}.title[data-v-c2272ba2]{z-index:20;margin:.75rem 1rem;color:#fff;text-decoration:none;letter-spacing:.15em}.title[data-v-c2272ba2]:after{content:"";width:0;height:2px;left:0;bottom:0;position:absolute;background:#fff;transition:width .3s ease 0s,left .3s ease 0s}.shadow[data-v-c2272ba2]{height:100%;transition:all .2s linear;cursor:pointer}.shadow[data-v-c2272ba2]:hover{transform:scale(1.01);box-shadow:0 3px 12px 0 rgba(0,0,0,.2),0 1px 15px 0 rgba(0,0,0,.19)}.shadow:hover .title[data-v-c2272ba2]:after{width:100%;left:0}a[data-v-c2272ba2]{text-decoration:none}',""]),t.exports=e},236:function(t,e,r){"use strict";r(227)},237:function(t,e,r){(e=r(63)(!1)).push([t.i,".page{max-width:750px;display:flex;flex-direction:column}@media only screen and (min-width:1024px){.page{max-width:984px}}@media only screen and (min-width:1228px){.page{max-width:1006px}}h1{margin-top:0;align-self:center}.work-list{display:flex;flex-direction:column;justify-content:space-between;opacity:0;margin-top:4rem}@media screen and (min-width:768px){.work-list{flex-direction:row;flex-wrap:wrap;margin-top:5rem}}h1#title{color:#000;opacity:0}h1.isSplit{opacity:1}h1.isSplit .letter-measure{color:#000!important}",""]),t.exports=e},242:function(t,e,r){"use strict";var o={name:"WorkCard",props:{work:Object},data:function(){return{imageHeight:null}},computed:{parsedDate:function(){return new Date(this.work.date).toDateString()}},methods:{heightWorkCoverImage:function(t){var image=t.target;this.imageHeight=image.clientHeight,console.log(this.imageHeight)}}},n=(r(234),r(26)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{ref:"workCard",staticClass:"work-card",attrs:{to:"/work/"+t.work.id}},[r("style",[t._v("\n  :root {\n    --image-height: "+t._s(t.imageHeight-27+"px")+";\n  }\n")]),t._v(" "),r("div",{staticClass:"shadow"},[r("h4",{staticClass:"title"},[t._v("\n      "+t._s(t.work.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"work-cover"},[r("img",{ref:"workCoverImage",attrs:{src:t.work.image}})])])])}),[],!1,null,"c2272ba2",null);e.a=component.exports},246:function(t,e,r){"use strict";r.r(e);var o=r(221).a,n=(r(236),r(26)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"work-list"},this._l(this.works,(function(t,r){return e("WorkCard",{key:r,attrs:{work:t,"data-index":r}})})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);
webpackJsonp([1],{197:function(t,i,e){function s(t){e(274)}var a=e(27)(e(212),e(352),s,"data-v-9648dc74",null);t.exports=a.exports},212:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"startscreen",data:function(){return{imgLoaded:!1,swiperOption:{preloadImages:!0,updateOnImagesReady:!0,direction:"horizontal",effect:"fade",height:window.height,pagination:{el:".swiper-pagination",dynamicBullets:!0},on:{init:function(){swiperAnimateCache(this)},slideChangeTransitionEnd:function(){swiperAnimate(this)},imagesReady:function(){swiperAnimate(this)}}}}},methods:{toMain:function(){this.$router.push({name:"baseHome"})}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){console.log("this is current swiper instance object",this.swiper)}}},250:function(t,i,e){i=t.exports=e(192)(!1),i.push([t.i,".swiper_base[data-v-9648dc74]{height:100vh;font-size:1.5rem}.swiper_base.first[data-v-9648dc74]{-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;background:-webkit-gradient(linear,left top,left bottom,from(#4170e3),to(#fff))}.swiper_base.first .one[data-v-9648dc74]{height:55%;margin:5% 10px}.swiper_base.first .two[data-v-9648dc74]{height:40%;width:100%}.swiper_base.secend img[data-v-9648dc74],.swiper_base.third img[data-v-9648dc74]{width:100%;height:100%}.swiper_base .btn_open[data-v-9648dc74]{position:absolute;width:100px;bottom:60px;left:calc(50% - 50px)}",""])},274:function(t,i,e){var s=e(250);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(193)("aef03b8a",s,!0)},296:function(t,i,e){t.exports=e.p+"static/img/1.png"},297:function(t,i,e){t.exports=e.p+"static/img/2.png"},298:function(t,i,e){t.exports=e.p+"static/img/third.jpeg"},299:function(t,i,e){t.exports=e.p+"static/img/two.png"},352:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[s("swiper-slide",{staticClass:"swiper_base first"},[s("img",{staticClass:"one ani",attrs:{src:e(296),"swiper-animate-effect":"bounceInDown","swiper-animate-duration":"1s","swiper-animate-delay":"0s"}}),t._v(" "),s("img",{staticClass:"two ani",attrs:{src:e(297),"swiper-animate-effect":"fadeInUpBig","swiper-animate-duration":".5s","swiper-animate-delay":"0s"}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper_base secend"},[s("img",{attrs:{src:e(299),alt:""}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper_base third"},[s("img",{attrs:{src:e(298),alt:""}}),t._v(" "),s("mt-button",{staticClass:"btn_open",attrs:{plain:""},on:{click:t.toMain}},[t._v("立即体验")])],1),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)])},staticRenderFns:[]}}});
webpackJsonp([15],{202:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ShopItem",components:{Star:function(t){s.e(10).then(function(){return t(s(260))}.bind(null,s)).catch(s.oe)}},data:function(){return{down:!0}},methods:{toShop:function(){console.log("去商家详情"),this.$parent.toShopList(231312)}}}},222:function(t,e,s){e=t.exports=s(184)(!1),e.push([t.i,'.shopItem{overflow:hidden;padding-bottom:0;position:relative;border-bottom:1px solid #eee;background-color:#fff;color:#666;list-style:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.shopItem .left img{width:5.5rem;height:5.5rem}.shopItem .right{width:75%}.shopItem .right .shop_detail{height:6rem;border-bottom:1px dashed #a8a8a8}.shopItem .right .shop_detail .has_before:before{content:"|";color:gray;margin:0 5px}.shopItem .right .shop_detail .index_1{margin-bottom:5px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.shopItem .right .shop_detail .index_1 h2{width:65%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.9rem;font-weight:200}.shopItem .right .shop_detail .index_1 h2::last-of-type{margin-bottom:5px}.shopItem .right .shop_detail .index_1 .isp:before{content:"\\54C1\\724C";background:linear-gradient(-139deg,#fff100,#ffe339);margin-right:.22rem;font-size:1rem;padding:.3rem;border-radius:.5rem;width:.3rem;color:#6f3f15}.shopItem .right .shop_detail .index_1 .index_right span{padding:.1rem;border-radius:.1rem;color:#999;border:1px solid #ddd}.shopItem .right .shop_detail .index_1 .index_right .c_span{border:none;padding:0}.shopItem .right .shop_detail .index_1 .index_right .showac .icon_img{margin-left:3px;-webkit-transition:all .5s linear;transition:all .5s linear}.shopItem .right .shop_detail .index_1 .index_right .showac .fz{-webkit-transform:rotate(180deg);transform:rotate(180deg)}',""])},238:function(t,e,s){var i=s(222);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(185)("c34d8482",i,!0)},265:function(t,e,s){function i(t){s(238)}var n=s(18)(s(202),s(284),i,null,null);t.exports=n.exports},284:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"shopItem primary_mg",on:{click:function(e){t.$parent.toShopList(231312)}}},[s("section",{staticClass:"left"},[s("lazy-image",{attrs:{src:"static/img/shop/2.jpeg",placeholder:t.loaddingImg}})],1),t._v(" "),s("section",{staticClass:"right"},[s("div",{staticClass:"shop_detail"},[t._m(0),t._v(" "),s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",{staticClass:" fn-c"},[s("Star",{attrs:{score:7}}),t._v(" "),s("span",[t._v("3.5")]),t._v(" "),s("span",[t._v("月售3615单")])],1),t._v(" "),t._m(1)]),t._v(" "),t._m(2)]),t._v(" "),s("div",{staticClass:"shop_detail",staticStyle:{border:"none","padding-top":"5px",height:"auto"}},[s("section",{staticClass:"index_1 primary_flex_center",on:{click:function(e){e.stopPropagation(),t.down=!t.down}}},[t._m(3),t._v(" "),s("section",{staticClass:"index_right "},[s("span",{staticClass:"showac fn-10 primary_flex_center",staticStyle:{border:"none"}},[t._v("\n            4个活动\n            "),s("img",{staticClass:"icon-10 icon_img",class:[t.down?"":"fz"],attrs:{src:"static/img/icon/down.png"}})])])]),t._v(" "),t._m(4),t._v(" "),s("section",{staticClass:"transition_3",style:{height:t.down?"0px":"7.3rem"}},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",{staticClass:"isp"},[s("span",{staticClass:"fn-12",staticStyle:{"font-weight":"700",color:"black"}},[t._v("上海麦当劳瞿溪路餐厅十一号接到的小刘")])]),t._v(" "),s("section",{staticClass:"index_right"},[s("span",[t._v("保")]),t._v(" "),s("span",[t._v("票")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_right"},[s("span",{staticClass:"primary_bg fn-8",staticStyle:{color:"white",border:"none",padding:"2px","border-redius":"3px"}},[t._v("\n            蜂鸟专送\n          ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",[s("span",[t._v("¥40起送")]),t._v(" "),s("span",{staticClass:"has_before"},[t._v("配送费¥5")])]),t._v(" "),s("section",{staticClass:"index_right"},[s("span",{staticClass:"c_span"},[t._v("20m")]),t._v(" "),s("span",{staticClass:"c_span has_before"},[t._v("3分钟")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("span",{staticClass:"shou"},[t._v("首")]),t._v(" "),s("span",[t._v("新用户下单立减17.0元")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",[s("span",{staticClass:"jian"},[t._v("减")]),t._v(" "),s("span",[t._v("满70减5")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",[s("span",{staticClass:"te"},[t._v("品")]),t._v(" "),s("span",[t._v("蜀地冒菜")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",[s("span",{staticClass:"te"},[t._v("满")]),t._v(" "),s("span",[t._v("满120.0元赠送大可乐或雪碧1份，满70.0元赠送荔枝汁1份")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",[s("span",{staticClass:"zeng"},[t._v("折")]),t._v(" "),s("span",[t._v("折扣活动")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"index_1 primary_flex_center"},[s("h2",[s("span",{staticClass:"zeng"},[t._v("折")]),t._v(" "),s("span",[t._v("折扣活动")])])])}]}}});
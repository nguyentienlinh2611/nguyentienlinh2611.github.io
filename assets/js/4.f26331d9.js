(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{470:function(t,n,e){},471:function(t,n,e){},476:function(t,n,e){"use strict";e(470)},477:function(t,n,e){"use strict";e(471)},478:function(t,n,e){"use strict";var r=e(12),i=e(7),o=e(146),a=e(30),s=e(13),u=e(36),c=e(271),p=e(67),l=e(4),f=e(49),g=e(68).f,h=e(37).f,v=e(11).f,m=e(269).trim,d=i.Number,_=d.prototype,b="Number"==u(f(_)),x=function(t){var n,e,r,i,o,a,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(n=(c=m(c)).charCodeAt(0))||45===n){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var y,N=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof N&&(b?l((function(){_.valueOf.call(e)})):"Number"!=u(e))?c(new d(x(n)),e,N):x(n)},$=r?g(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;$.length>O;O++)s(d,y=$[O])&&!s(N,y)&&v(N,y,h(d,y));N.prototype=_,_.constructor=N,a(i,"Number",N)}},479:function(t,n,e){var r=e(266),i=e(259),o=e(480),a=e(484);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},480:function(t,n,e){var r=e(152),i=e(481),o=e(144);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var c=n[a],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},481:function(t,n,e){var r=e(482),i=e(144),o=e(150),a=e(93),s=e(70);t.exports=function(t,n,e,u){if(!a(t))return t;for(var c=-1,p=(n=i(n,t)).length,l=p-1,f=t;null!=f&&++c<p;){var g=s(n[c]),h=e;if("__proto__"===g||"constructor"===g||"prototype"===g)return t;if(c!=l){var v=f[g];void 0===(h=u?u(v,g,f):void 0)&&(h=a(v)?v:o(n[c+1])?[]:{})}r(f,g,h),f=f[g]}return t}},482:function(t,n,e){var r=e(483),i=e(149),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},483:function(t,n,e){var r=e(267);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},484:function(t,n,e){var r=e(260),i=e(485),o=e(487);t.exports=function(t){return r(t,o,i)}},485:function(t,n,e){var r=e(148),i=e(486),o=e(261),a=e(262),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},486:function(t,n,e){var r=e(265)(Object.getPrototypeOf,Object);t.exports=r},487:function(t,n,e){var r=e(263),i=e(488),o=e(151);t.exports=function(t){return o(t)?r(t,!0):i(t)}},488:function(t,n,e){var r=e(93),i=e(264),o=e(489),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},489:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},497:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return f}));e(16),e(18),e(20);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,530,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(476),e(6)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(e(477),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(e(478),e(94)),u=e.n(s),c=e(479),p=e.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},506:function(t,n,e){},522:function(t,n,e){"use strict";e(506)},536:function(t,n,e){"use strict";e.r(n);e(1);var r=e(497),i={name:"BaseListLayout",components:{Pagination:r.b,SimplePagination:r.c},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return r.b}}},o=(e(522),e(6)),a=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-box"},[e("client-only",[e("AuthorBox")],1),t._v(" "),e("div",{staticClass:"posts",attrs:{itemscope:"",itemtype:"https://schema.org/Blog"}},t._l(t.pages,(function(t){return e("ArticleCard",{key:t.key,staticClass:"col",attrs:{post:t}})})),1),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=a.exports}}]);
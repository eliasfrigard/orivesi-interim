(function(t){function e(e){for(var s,r,a=e[0],c=e[1],l=e[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,a=1;a<i.length;a++){var c=i[a];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"28c9":function(t,e,i){"use strict";i("b841")},"3bf1":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"score-container ui container"}},[t._m(0),i("MusicScores"),i("br")],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container score-header"},[i("div",{staticClass:"titles"},[i("h1",[t._v("ORIVESI")]),i("h1",{staticClass:"orange"},[t._v("ALL STARS")])])])}],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container"},[i("MockScore",{attrs:{title:"Nimi",dancetype:"Tanssilaji",composer:"Säveltäjä",mock:"true"}}),t._l(t.musicScores,(function(t){return i("MusicScore",{key:t.id,attrs:{title:t.Title,dancetype:t.Dancetype,description:t.Description,composer:t.Composer,versions:t.Scores,audio:t.Audio,videoArray:t.Video,youtube:t.Youtube}})}))],2)},a=[],c=i("bc3a"),l=i.n(c),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"score-wrapper"},[i("div",{staticClass:"score",on:{click:t.toggleVersions}},[i("p",{attrs:{id:"score-title"}},[t._v(t._s(t.title))]),i("p",{attrs:{id:"score-composer"}},[t._v(t._s(t.composer))]),i("p",{attrs:{id:"score-dancetype"}},[t._v(t._s(t.dancetype))]),i("StatusIcon",{attrs:{open:t.versionsActive}})],1),t.versionsActive&&t.description?i("div",{staticClass:"information-container"},[i("div",{staticClass:"information-dropdown",on:{click:t.toggleDescription}},[t._m(0),i("StatusIcon",{attrs:{open:t.descriptionActive}})],1),t.descriptionActive?i("hr"):t._e(),t.descriptionActive?i("div",{staticClass:"score-description",domProps:{innerHTML:t._s(t.descriptionSanitized)}}):t._e()]):t._e(),t.versionsActive&&t.audio.length>0?i("div",{staticClass:"information-container"},[i("div",{staticClass:"information-dropdown",on:{click:t.toggleAudioContainer}},[t._m(1),i("StatusIcon",{attrs:{open:t.audioContainerActive}})],1),t.audioContainerActive?i("hr"):t._e(),t.audioContainerActive?i("div",{staticClass:"score-audio"},t._l(t.audio,(function(e){return i("div",{key:e.id,staticClass:"audio-wrapper"},[i("p",{staticClass:"audio-title"},[t._v(t._s(e.name))]),i("audio",{staticClass:"audio-players",attrs:{controls:""}},[i("source",{attrs:{src:e.url,type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])])})),0):t._e()]):t._e(),t.versionsActive&&(t.videoArray.length>0||t.youtube)?i("div",{staticClass:"information-container"},[i("div",{staticClass:"information-dropdown",on:{click:t.toggleVideoContainer}},[t._m(2),i("StatusIcon",{attrs:{open:t.videoContainerActive}})],1),t.videoContainerActive?i("hr"):t._e(),t.videoContainerActive?i("div",{staticClass:"score-video"},[i("div",{staticClass:"video-container"},t._l(t.videoArray,(function(e){return i("div",{key:e.id,staticClass:"video-wrapper"},[i("p",{staticClass:"video-title"},[t._v(t._s(e.name))]),i("iframe",{staticClass:"video-frame",attrs:{height:t.videoHeight,width:t.videoWidth,src:e.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",loading:"lazy"}})])})),0),i("div",{staticClass:"video-container"},t._l(t.youtubeArray,(function(e){return i("div",{key:e,staticClass:"video-wrapper"},[i("iframe",{staticClass:"video-frame",attrs:{height:t.videoHeight,width:t.videoWidth,src:"https://www.youtube.com/embed/"+e,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",loading:"lazy"}})])})),0)]):t._e()]):t._e(),t.versionsActive?i("div",{staticClass:"information-container"},t._l(t.versions,(function(e){return i("div",{key:e.id},[i("div",{staticClass:"score-version",on:{click:function(i){return t.openPdf(e.url,e.name)}}},[i("p",{attrs:{id:"version-title"}},[t._v(t._s(e.name))]),i("div",{staticClass:"icons"},[i("i",{staticClass:"fas fa-expand-alt fa-lg",on:{click:function(i){return t.openPdf(e.url,e.name)}}}),i("a",{on:{click:function(i){return i.stopPropagation(),t.download(e.url,e.name)}}},[i("i",{staticClass:"fas fa-download fa-lg"})])])]),i("hr")])})),0):t._e(),t.pdfActive?i("div",{staticClass:"pdf-wrapper"},[i("div",{staticClass:"pdf-controls"},[i("div",{staticClass:"left-controls",on:{click:t.closePdf}},[i("i",{staticClass:"fas fa-arrow-left"}),t._m(3)]),i("div",{staticClass:"right-controls",on:{click:t.closePdf}},[i("i",{staticClass:"fas fa-times"})])]),i("embed",{attrs:{id:"pdf-viewer",src:t.pdfURL}})]):t._e()])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-title"},[i("i",{staticClass:"fas fa-align-center"}),i("p",[t._v("Kuvaus / Sanat")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-title"},[i("i",{staticClass:"fas fa-music"}),i("p",[t._v("Äänitteet")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-title"},[i("i",{staticClass:"fas fa-video"}),i("p",[t._v("Videot")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{attrs:{id:"return-message"}},[i("b",[t._v("Palaa takaisin nuottisivulle.")])])}],f=(i("a4d3"),i("e01a"),i("ac1f"),i("1276"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("9861"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons score-icons"},[t.open?i("i",{staticClass:"fas icon-active fa-arrow-alt-circle-left fa-lg"}):i("i",{staticClass:"fas icon-default fa-arrow-alt-circle-left fa-lg"})])}),p=[],v={name:"StatusIcon",props:{open:Boolean}},h=v,m=(i("eb68"),i("2877")),_=Object(m["a"])(h,f,p,!1,null,"183ee8c6",null),C=_.exports,b=i("c0c4"),y=i.n(b),g=i("7c5c"),A={name:"MusicScore",components:{StatusIcon:C},props:{title:String,dancetype:String,composer:String,description:String,versions:Array,audio:Array,videoArray:Array,youtube:String},computed:{videoHeight:function(){return.5632*this.videoWidth},videoWidth:function(){var t=document.querySelectorAll(".information-container")[0].offsetWidth;return this.isMobile?t-60:.48*(t-60)},isMobile:function(){return window.innerWidth<768}},data:function(){return{versionsActive:!1,descriptionActive:!1,audioContainerActive:!1,videoContainerActive:!1,pdfActive:!1,pdfLink:"",descriptionSanitized:"",youtubeArray:[],pdfURL:""}},created:function(){this.description&&(this.descriptionSanitized=y.a.sanitize(Object(g["marked"])(this.description))),this.youtube&&(this.youtubeArray=this.youtube.split("\n"))},methods:{toggleVersions:function(){this.versionsActive=!this.versionsActive,!1===this.versionsActive&&(this.descriptionActive=!1,this.audioContainerActive=!1,this.videoContainerActive=!1)},toggleDescription:function(){this.descriptionActive=!this.descriptionActive},toggleAudioContainer:function(){this.audioContainerActive=!this.audioContainerActive},toggleVideoContainer:function(){this.videoContainerActive=!this.videoContainerActive},openPdf:function(t,e){"pdf"===t.split(".").pop()?(this.pdfActive=!0,this.pdfURL=t):this.download(t,e)},closePdf:function(){this.pdfActive=!1},download:function(t,e){l()({responseType:"blob",url:t,method:"get",headers:{"response-content-disposition":"attachment"}}).then((function(t){var i=window.URL.createObjectURL(new Blob([t.data])),s=document.createElement("a");s.href=i,s.setAttribute("download",e),document.body.appendChild(s),s.click()}))}}},w=A,S=(i("8d49"),Object(m["a"])(w,d,u,!1,null,"2ffa903a",null)),k=S.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"score-wrapper"},[i("div",{staticClass:"score"},[i("p",{attrs:{id:"score-title"}},[t._v(t._s(t.title))]),i("p",{attrs:{id:"score-composer"}},[t._v(t._s(t.composer))]),i("p",{attrs:{id:"score-dancetype"}},[t._v(t._s(t.dancetype))]),i("div",{staticClass:"icons score-icons hidden"},[t.versionsActive?i("i",{staticClass:"fas fa-chevron-circle-down fa-lg"}):i("i",{staticClass:"fas fa-chevron-circle-up fa-lg"})])]),t.versionsActive?i("div",{staticClass:"score-versions"},t._l(t.versions,(function(e){return i("div",{key:e},[i("div",{staticClass:"score-version hidden"},[i("p",{attrs:{id:"version-title"}},[t._v(t._s(e.name))]),i("div",{staticClass:"icons"},[i("i",{staticClass:"fas fa-expand-alt fa-lg"}),i("a",{attrs:{href:e.url,download:"download"}},[i("i",{staticClass:"fas fa-download fa-lg"})])])]),i("hr")])})),0):t._e(),t.pdfActive?i("div",{staticClass:"pdf-wrapper"},[t._m(0),i("embed",{attrs:{id:"pdf-viewer",src:"https://orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com/Capri_Fischer_1ja2_V_Lja_Alttoviulustemma_ffe907d4b9.pdf"}})]):t._e()])},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pdf-controls"},[i("div",{staticClass:"left-controls"},[i("i",{staticClass:"fas fa-arrow-left"}),i("p",{attrs:{id:"return-message"}},[t._v("Palaa takaisin nuottisivulle.")])]),i("div",{staticClass:"right-controls"},[i("i",{staticClass:"fas fa-times"})])])}],P={name:"MusicScore",props:{title:String,dancetype:String,composer:String,versions:Array},data:function(){return{versionsActive:!1,pdfActive:!1,pdfLink:""}}},M=P,x=(i("d282"),Object(m["a"])(M,j,O,!1,null,"5d79e72a",null)),E=x.exports,$={components:{MusicScore:k,MockScore:E},data:function(){return{musicScores:[]}},created:function(){var t=this;l.a.get("https://orivesiadmin.net/music-scores?_sort=Title:asc").then((function(e){t.musicScores=e.data}))}},L=$,T=(i("28c9"),Object(m["a"])(L,r,a,!1,null,"7f99d47f",null)),I=T.exports,V={name:"App",components:{MusicScores:I}},z=V,R=(i("034f"),Object(m["a"])(z,n,o,!1,null,null,null)),W=R.exports,U=i("080a"),D=i.n(U);s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(W)}}).$mount("#app"),s["a"].use(D.a)},"85ec":function(t,e,i){},"8d49":function(t,e,i){"use strict";i("3bf1")},a935:function(t,e,i){},b841:function(t,e,i){},cf38:function(t,e,i){},d282:function(t,e,i){"use strict";i("a935")},eb68:function(t,e,i){"use strict";i("cf38")}});
//# sourceMappingURL=app.6a5da850.js.map
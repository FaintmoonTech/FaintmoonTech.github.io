(function(){"use strict";var t={7138:function(t,s,i){var l=i(9242),n=i(3396),o=i.p+"img/bg0.f5017039.png";const a={class:"app"},e=(0,n._)("img",{src:o,class:"bg"},null,-1),r=(0,n._)("div",{id:"scrollEle"},null,-1);function c(t,s,i,l,o,c){const p=(0,n.up)("Page0"),h=(0,n.up)("Page1"),u=(0,n.up)("Page2"),g=(0,n.up)("Page3");return(0,n.wg)(),(0,n.iD)("div",a,[e,r,(0,n.Wm)(p,{scrollY:o.scrollY,winHeight:o.winHeight},null,8,["scrollY","winHeight"]),(0,n.Wm)(h,{scrollY:o.scrollY,winHeight:o.winHeight,winWidth:o.winWidth},null,8,["scrollY","winHeight","winWidth"]),(0,n.Wm)(u,{scrollY:o.scrollY,winHeight:o.winHeight},null,8,["scrollY","winHeight"]),(0,n.Wm)(g,{scrollY:o.scrollY,winHeight:o.winHeight},null,8,["scrollY","winHeight"])])}var p=i(7139),h=i.p+"img/android-logo.7076b056.svg",u=i.p+"img/apple-logo.1c107099.svg";const g=(0,n._)("p",{class:"title"}," 星迷 ",-1),d=(0,n._)("p",{class:"subtitle"}," 漫步满天繁星，探寻宇宙之迷 ",-1),m={class:"downloads"},w=(0,n._)("img",{src:h},null,-1),y=(0,n.Uk)(" Android "),b=[w,y],f=(0,n._)("div",{class:"ios"},[(0,n._)("img",{src:u}),(0,n.Uk)(" App Store ")],-1);function v(t,s,i,l,o,a){return(0,n.wg)(),(0,n.iD)("div",{class:"page0 page",style:(0,p.j5)(a.pageStyle)},[g,d,(0,n._)("div",m,[(0,n._)("div",{class:"android",onClick:s[0]||(s[0]=(...t)=>a.goToMarket&&a.goToMarket(...t))},b),f])],4)}var A={name:"PageZero",props:{scrollY:Number,winHeight:Number},computed:{pageStyle(){return{opacity:1-3*this.scrollY,top:-this.scrollY*this.winHeight*.2+"px"}}},methods:{goToMarket(){window.open("market://detail?id=com.tencent.mm")}}},M=i(89);const H=(0,M.Z)(A,[["render",v]]);var Y=H;const W=(0,n._)("p",{class:"title"}," 繁星触手可及 ",-1),T=(0,n._)("p",{class:"subtitle"}," 轻轻一点，了解您想知道的一切 ",-1),N=[W,T];function P(t,s,i,l,o,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{class:"page",style:(0,p.j5)(a.pageStyle)},N,4),(0,n._)("canvas",{width:"100",height:"100",class:"starSelection",style:(0,p.j5)(a.canvasStyle)},null,4),(0,n._)("div",{class:"starIntro",style:(0,p.j5)(a.starIntroStyle)},[(0,n._)("p",{style:(0,p.j5)({opacity:2*i.scrollY-3})},"轩辕十四",4),(0,n._)("p",{style:(0,p.j5)({opacity:2*i.scrollY-3.5})},"外文名: Regulus",4),(0,n._)("p",{style:(0,p.j5)({opacity:2*i.scrollY-4})},"星座: 狮子座",4),(0,n._)("p",{style:(0,p.j5)({opacity:2*i.scrollY-4.5})},"距离: 24.3132 秒差距",4),(0,n._)("p",{style:(0,p.j5)({opacity:2*i.scrollY-5})},"目视星等: 1.360",4),(0,n._)("p",{style:(0,p.j5)({opacity:2*i.scrollY-5.5})},"绝对星等: -0.569",4),(0,n._)("p",{style:(0,p.j5)({opacity:2*i.scrollY-6})},"光谱型: B7V",4)],4)],64)}var O={name:"PageFirst",props:{scrollY:Number,winHeight:Number,winWidth:Number},mounted(){const t=document.querySelector(".starSelection"),s=t.getContext("2d");this.drawCanvas(s,0)},computed:{pageStyle(){return this.scrollY<.4?null:this.scrollY<1.5?{display:"block",opacity:3*this.scrollY-1.2,top:this.winHeight*(.5-.2*this.scrollY)+"px"}:this.scrollY<3.5?{display:"block",top:.2*this.winHeight+"px"}:{display:"block",top:this.winHeight*(.55-.1*this.scrollY)+"px",opacity:8-2*this.scrollY}},starPosition(){return this.winWidth/this.winHeight>1.6?[708*this.winWidth/2560-(1600*this.winWidth/2560-this.winHeight)/2,1326*this.winWidth/2560]:[708*this.winHeight/1600,1326*this.winHeight/1600-(2560*this.winHeight/1600-this.winWidth)/2]},canvasStyle(){return this.scrollY<1.5?{display:"none"}:{top:this.starPosition[0]-25+"px",left:this.starPosition[1]-25+"px",opacity:this.scrollY<3.5?1:8-2*this.scrollY}},starIntroStyle(){return this.scrollY<1.5?{display:"none"}:this.scrollY<3.5?{top:`${this.starPosition[0]+15}px`,left:this.starPosition[1]-25+"px"}:{top:this.starPosition[0]+15-.1*this.winHeight*(this.scrollY-3.5)+"px",left:this.starPosition[1]-25+"px",opacity:8-2*this.scrollY}}},methods:{drawCanvas(t,s){const i=20*(.2*Math.sin(4*s)+1),l=20*(.2*Math.sin(4*s)+1),n=2;t.clearRect(0,0,100,100),t.fillStyle="#fff",t.beginPath(),t.moveTo(50+i*Math.sin(s),50-i*Math.cos(s)),t.lineTo(50+(i+l)*Math.sin(s)-n*Math.cos(s),50-(i+l)*Math.cos(s)-n*Math.sin(s)),t.lineTo(50+(i+l)*Math.sin(s)+n*Math.cos(s),50-(i+l)*Math.cos(s)+n*Math.sin(s)),t.fill(),t.moveTo(50+i*Math.cos(s),50+i*Math.sin(s)),t.lineTo(50+(i+l)*Math.cos(s)+n*Math.sin(s),50+(i+l)*Math.sin(s)-n*Math.cos(s)),t.lineTo(50+(i+l)*Math.cos(s)-n*Math.sin(s),50+(i+l)*Math.sin(s)+n*Math.cos(s)),t.fill(),t.moveTo(50-i*Math.sin(s),50+i*Math.cos(s)),t.lineTo(50-(i+l)*Math.sin(s)+n*Math.cos(s),50+(i+l)*Math.cos(s)+n*Math.sin(s)),t.lineTo(50-(i+l)*Math.sin(s)-n*Math.cos(s),50+(i+l)*Math.cos(s)-n*Math.sin(s)),t.fill(),t.moveTo(50-i*Math.cos(s),50-i*Math.sin(s)),t.lineTo(50-(i+l)*Math.cos(s)-n*Math.sin(s),50-(i+l)*Math.sin(s)+n*Math.cos(s)),t.lineTo(50-(i+l)*Math.cos(s)+n*Math.sin(s),50-(i+l)*Math.sin(s)-n*Math.cos(s)),t.fill(),window.requestAnimationFrame((()=>this.drawCanvas(t,s+.01>6.28?0:s+.01)))}}};const j=(0,M.Z)(O,[["render",P]]);var z=j,D="data:image/png;base64,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";const Z=(0,n._)("p",{class:"title"}," 强大的搜索功能 ",-1),C=(0,n._)("p",{class:"subtitle"}," 寻找您心中所想的那颗星 ",-1),X={class:"search"},x=(0,n._)("img",{src:D},null,-1),F=(0,n._)("div",null,[(0,n._)("p",{class:"title"},"心宿一，天蝎座 σ"),(0,n._)("p",{class:"subtitle"},"HIP 80112, HD 147165, HR 6084"),(0,n._)("p",{class:"subtitle"},"赤经 16h 21m 11s    赤纬 -25° 35' 34\"")],-1),E=[x,F],q=(0,n._)("img",{src:D,class:"red"},null,-1),k=(0,n._)("div",null,[(0,n._)("p",{class:"title"},"心宿二，天蝎座 α"),(0,n._)("p",{class:"subtitle"},"HIP 80763, HD 148478, HR 6134"),(0,n._)("p",{class:"subtitle"},"赤经 16h 29m 24s    赤纬 -26° 25' 55\"")],-1),L=[q,k],G=(0,n._)("img",{src:D},null,-1),S=(0,n._)("div",null,[(0,n._)("p",{class:"title"},"心宿三，天蝎座 τ"),(0,n._)("p",{class:"subtitle"},"HIP 81266, HD 149438, HR 6165"),(0,n._)("p",{class:"subtitle"},"赤经 16h 35m 53s    赤纬 -28° 12' 58\"")],-1),V=[G,S];function B(t,s,i,l,o,a){return(0,n.wg)(),(0,n.iD)("div",{class:"page",style:(0,p.j5)(a.pageStyle)},[Z,C,(0,n._)("div",{class:"searchContainer",style:(0,p.j5)(a.searchContainerStyle)},[(0,n._)("div",X,[(0,n._)("canvas",{width:"1",height:"1",class:"cursor",style:(0,p.j5)(a.cursorStyle)},null,4),(0,n._)("span",{style:(0,p.j5)({opacity:10*i.scrollY-60})}," 心 ",4),(0,n._)("span",{style:(0,p.j5)({opacity:10*i.scrollY-64})}," 宿 ",4)]),(0,n._)("div",{class:"searchItem",style:(0,p.j5)({opacity:2*i.scrollY-13})},E,4),(0,n._)("div",{class:"searchItem",style:(0,p.j5)({opacity:2*i.scrollY-14})},L,4),(0,n._)("div",{class:"searchItem",style:(0,p.j5)({opacity:2*i.scrollY-15})},V,4)],4)],4)}var J={name:"PageSecond",props:{scrollY:Number,winHeight:Number},mounted(){const t=document.querySelector(".cursor"),s=t.getContext("2d");this.drawCanvas(s,0)},computed:{pageStyle(){return this.scrollY<4?null:this.scrollY<5?{display:"block",opacity:3*this.scrollY-12,top:this.winHeight*(1.2-.2*this.scrollY)+"px"}:this.scrollY<8?{display:"block",top:.2*this.winHeight+"px"}:{display:"block",top:this.winHeight*(1-.1*this.scrollY)+"px",opacity:17-2*this.scrollY}},searchContainerStyle(){return this.scrollY<6?{transform:`translateX(${-200*(this.scrollY-6)**2}px)`,opacity:this.scrollY-5}:null},cursorStyle(){return this.scrollY<6.1?null:this.scrollY<6.5?{marginLeft:"1.2rem"}:{marginLeft:"2.4rem"}}},methods:{drawCanvas(t,s){t.clearRect(0,0,1,1),t.fillStyle=`rgba(155, 230, 255, ${.4*Math.sin(s)+.5})`,t.fillRect(0,0,1,1),window.requestAnimationFrame((()=>this.drawCanvas(t,s+.05>6.28?0:s+.05)))}}};const R=(0,M.Z)(J,[["render",B]]);var K=R,U=i.p+"img/bg1.10536e46.png",Q=i.p+"img/bg2.f692c282.png",I=i.p+"img/bg3.4a459d94.png",_=i.p+"img/bg4.22c832e7.png",$=i.p+"img/bg5.63ab75a1.png",tt=i.p+"img/bg6.64a94e11.png",st=i.p+"img/bg7.5bf8270e.png",it=i.p+"img/bg8.1bc3782c.png";const lt=(0,n._)("p",{class:"title"}," 时空旅行 ",-1),nt=(0,n._)("p",{class:"subtitle"}," 探索任意时间、任意地点的星空 ",-1);function ot(t,s,i,l,o,a){return(0,n.wg)(),(0,n.iD)("div",{class:"page",style:(0,p.j5)(a.pageStyle)},[(0,n._)("img",{src:U,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-19.5})},null,4),(0,n._)("img",{src:Q,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-21.5})},null,4),(0,n._)("img",{src:I,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-23.5})},null,4),(0,n._)("img",{src:_,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-25.5})},null,4),(0,n._)("img",{src:$,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-27.5})},null,4),(0,n._)("img",{src:tt,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-29.5})},null,4),(0,n._)("img",{src:st,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-31.5})},null,4),(0,n._)("img",{src:it,class:"bg",style:(0,p.j5)({opacity:2*i.scrollY-33.5})},null,4),lt,nt,(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(9.5-i.scrollY)})}," 中国 上海 2021.09.05 05:45 (北京时间) ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(10.5-i.scrollY)})}," 蒙古 乌兰巴托 2022.07.25 03:00 ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(11.5-i.scrollY)})}," 俄罗斯 圣彼得堡 1987.01.16 07:59 ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(12.5-i.scrollY)})}," 埃及 开罗 2030.03.22 04:44 ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(13.5-i.scrollY)})}," 美国 西雅图 1982.12.18 08:20 ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(14.5-i.scrollY)})}," 阿根廷 布宜诺斯艾利斯 1999.01.01 09:20 ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(15.5-i.scrollY)})}," 新西兰 惠灵顿 2008.03.10 15:05 ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-4*Math.abs(16.5-i.scrollY)})}," 古巴 哈瓦那 2014.04.11 04:44 ",4),(0,n._)("p",{class:"positionAndTime",style:(0,p.j5)({opacity:2-3*Math.abs(17.5-i.scrollY)})}," 南极 昆仑站 2035.06.21 13:44 ",4)],4)}var at={name:"PageThird",props:{scrollY:Number,winHeight:Number},computed:{pageStyle(){return this.scrollY<8.5?null:this.scrollY<9.5?{display:"block",opacity:3*this.scrollY-25.5,top:this.winHeight*(2.1-.2*this.scrollY)+"px"}:this.scrollY<18?{display:"block",top:.2*this.winHeight+"px"}:{display:"block",top:this.winHeight*(2-.1*this.scrollY)+"px",opacity:37-2*this.scrollY}}}};const et=(0,M.Z)(at,[["render",ot]]);var rt=et,ct={name:"App",components:{Page0:Y,Page1:z,Page2:K,Page3:rt},mounted(){window.onscroll=()=>{const t=window.scrollY/window.innerHeight;console.log("scrollY",t),this.scrollY=t},window.onresize=()=>{this.winWidth=window.document.body.clientWidth,this.winHeight=window.innerHeight},this.winWidth=window.document.body.clientWidth,this.winHeight=window.innerHeight},data(){return{scrollY:0,winWidth:window.document.body.clientWidth,winHeight:window.innerHeight}}};const pt=(0,M.Z)(ct,[["render",c]]);var ht=pt;(0,l.ri)(ht).mount("#app")}},s={};function i(l){var n=s[l];if(void 0!==n)return n.exports;var o=s[l]={exports:{}};return t[l](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(s,l,n,o){if(!l){var a=1/0;for(p=0;p<t.length;p++){l=t[p][0],n=t[p][1],o=t[p][2];for(var e=!0,r=0;r<l.length;r++)(!1&o||a>=o)&&Object.keys(i.O).every((function(t){return i.O[t](l[r])}))?l.splice(r--,1):(e=!1,o<a&&(a=o));if(e){t.splice(p--,1);var c=n();void 0!==c&&(s=c)}}return s}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[l,n,o]}}(),function(){i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,{a:s}),s}}(),function(){i.d=function(t,s){for(var l in s)i.o(s,l)&&!i.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:s[l]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(s){return 0===t[s]};var s=function(s,l){var n,o,a=l[0],e=l[1],r=l[2],c=0;if(a.some((function(s){return 0!==t[s]}))){for(n in e)i.o(e,n)&&(i.m[n]=e[n]);if(r)var p=r(i)}for(s&&s(l);c<a.length;c++)o=a[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(p)},l=self["webpackChunkstaratlas_site"]=self["webpackChunkstaratlas_site"]||[];l.forEach(s.bind(null,0)),l.push=s.bind(null,l.push.bind(l))}();var l=i.O(void 0,[998],(function(){return i(7138)}));l=i.O(l)})();
//# sourceMappingURL=app.627be0b3.js.map
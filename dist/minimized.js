(()=>{var En=Object.create;var cn=Object.defineProperty;var On=Object.getOwnPropertyDescriptor;var _n=Object.getOwnPropertyNames;var jn=Object.getPrototypeOf,Dn=Object.prototype.hasOwnProperty;var X=(g,p)=>()=>(p||g((p={exports:{}}).exports,p),p.exports);var Rn=(g,p,y,s)=>{if(p&&typeof p=="object"||typeof p=="function")for(let v of _n(p))!Dn.call(g,v)&&v!==y&&cn(g,v,{get:()=>p[v],enumerable:!(s=On(p,v))||s.enumerable});return g};var fn=(g,p,y)=>(y=g!=null?En(jn(g)):{},Rn(p||!g||!g.__esModule?cn(y,"default",{value:g,enumerable:!0}):y,g));var mn=X((Wn,Ze)=>{(function(){"use strict";var g="input is invalid type",p="finalize already called",y=typeof window=="object",s=y?window:{};s.JS_SHA3_NO_WINDOW&&(y=!1);var v=!y&&typeof self=="object",d=!s.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;d?s=global:v&&(s=self);var f=!s.JS_SHA3_NO_COMMON_JS&&typeof Ze=="object"&&Ze.exports,n=typeof define=="function"&&define.amd,r=!s.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",a="0123456789abcdef".split(""),t=[31,7936,2031616,520093696],i=[4,1024,262144,67108864],c=[1,256,65536,16777216],m=[6,1536,393216,100663296],q=[0,8,16,24],I=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],G=[224,256,384,512],U=[128,256],K=["hex","buffer","arrayBuffer","array","digest"],A={128:168,256:136};(s.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}),r&&(s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var k=function(e,o,h){return function(u){return new F(e,o,e).update(u)[h]()}},E=function(e,o,h){return function(u,l){return new F(e,o,l).update(u)[h]()}},B=function(e,o,h){return function(u,l,L,b){return R["cshake"+e].update(u,l,L,b)[h]()}},S=function(e,o,h){return function(u,l,L,b){return R["kmac"+e].update(u,l,L,b)[h]()}},O=function(e,o,h,u){for(var l=0;l<K.length;++l){var L=K[l];e[L]=o(h,u,L)}return e},j=function(e,o){var h=k(e,o,"hex");return h.create=function(){return new F(e,o,e)},h.update=function(u){return h.create().update(u)},O(h,k,e,o)},D=function(e,o){var h=E(e,o,"hex");return h.create=function(u){return new F(e,o,u)},h.update=function(u,l){return h.create(l).update(u)},O(h,E,e,o)},T=function(e,o){var h=A[e],u=B(e,o,"hex");return u.create=function(l,L,b){return!L&&!b?R["shake"+e].create(l):new F(e,o,l).bytepad([L,b],h)},u.update=function(l,L,b,x){return u.create(L,b,x).update(l)},O(u,B,e,o)},z=function(e,o){var h=A[e],u=S(e,o,"hex");return u.create=function(l,L,b){return new en(e,o,L).bytepad(["KMAC",b],h).bytepad([l],h)},u.update=function(l,L,b,x){return u.create(l,b,x).update(L)},O(u,S,e,o)},P=[{name:"keccak",padding:c,bits:G,createMethod:j},{name:"sha3",padding:m,bits:G,createMethod:j},{name:"shake",padding:t,bits:U,createMethod:D},{name:"cshake",padding:i,bits:U,createMethod:T},{name:"kmac",padding:i,bits:U,createMethod:z}],R={},H=[],Y=0;Y<P.length;++Y)for(var V=P[Y],Z=V.bits,W=0;W<Z.length;++W){var $e=V.name+"_"+Z[W];if(H.push($e),R[$e]=V.createMethod(Z[W],V.padding),V.name!=="sha3"){var un=V.name+Z[W];H.push(un),R[un]=R[$e]}}function F(e,o,h){this.blocks=[],this.s=[],this.padding=o,this.outputBits=h,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=h>>5,this.extraBytes=(h&31)>>3;for(var u=0;u<50;++u)this.s[u]=0}F.prototype.update=function(e){if(this.finalized)throw new Error(p);var o,h=typeof e;if(h!=="string"){if(h==="object"){if(e===null)throw new Error(g);if(r&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!r||!ArrayBuffer.isView(e)))throw new Error(g)}else throw new Error(g);o=!0}for(var u=this.blocks,l=this.byteCount,L=e.length,b=this.blockCount,x=0,M=this.s,w,C;x<L;){if(this.reset)for(this.reset=!1,u[0]=this.block,w=1;w<b+1;++w)u[w]=0;if(o)for(w=this.start;x<L&&w<l;++x)u[w>>2]|=e[x]<<q[w++&3];else for(w=this.start;x<L&&w<l;++x)C=e.charCodeAt(x),C<128?u[w>>2]|=C<<q[w++&3]:C<2048?(u[w>>2]|=(192|C>>6)<<q[w++&3],u[w>>2]|=(128|C&63)<<q[w++&3]):C<55296||C>=57344?(u[w>>2]|=(224|C>>12)<<q[w++&3],u[w>>2]|=(128|C>>6&63)<<q[w++&3],u[w>>2]|=(128|C&63)<<q[w++&3]):(C=65536+((C&1023)<<10|e.charCodeAt(++x)&1023),u[w>>2]|=(240|C>>18)<<q[w++&3],u[w>>2]|=(128|C>>12&63)<<q[w++&3],u[w>>2]|=(128|C>>6&63)<<q[w++&3],u[w>>2]|=(128|C&63)<<q[w++&3]);if(this.lastByteIndex=w,w>=l){for(this.start=w-l,this.block=u[b],w=0;w<b;++w)M[w]^=u[w];Q(M),this.reset=!0}else this.start=w}return this},F.prototype.encode=function(e,o){var h=e&255,u=1,l=[h];for(e=e>>8,h=e&255;h>0;)l.unshift(h),e=e>>8,h=e&255,++u;return o?l.push(u):l.unshift(u),this.update(l),l.length},F.prototype.encodeString=function(e){var o,h=typeof e;if(h!=="string"){if(h==="object"){if(e===null)throw new Error(g);if(r&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!r||!ArrayBuffer.isView(e)))throw new Error(g)}else throw new Error(g);o=!0}var u=0,l=e.length;if(o)u=l;else for(var L=0;L<e.length;++L){var b=e.charCodeAt(L);b<128?u+=1:b<2048?u+=2:b<55296||b>=57344?u+=3:(b=65536+((b&1023)<<10|e.charCodeAt(++L)&1023),u+=4)}return u+=this.encode(u*8),this.update(e),u},F.prototype.bytepad=function(e,o){for(var h=this.encode(o),u=0;u<e.length;++u)h+=this.encodeString(e[u]);var l=o-h%o,L=[];return L.length=l,this.update(L),this},F.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,o=this.lastByteIndex,h=this.blockCount,u=this.s;if(e[o>>2]|=this.padding[o&3],this.lastByteIndex===this.byteCount)for(e[0]=e[h],o=1;o<h+1;++o)e[o]=0;for(e[h-1]|=2147483648,o=0;o<h;++o)u[o]^=e[o];Q(u)}},F.prototype.toString=F.prototype.hex=function(){this.finalize();for(var e=this.blockCount,o=this.s,h=this.outputBlocks,u=this.extraBytes,l=0,L=0,b="",x;L<h;){for(l=0;l<e&&L<h;++l,++L)x=o[l],b+=a[x>>4&15]+a[x&15]+a[x>>12&15]+a[x>>8&15]+a[x>>20&15]+a[x>>16&15]+a[x>>28&15]+a[x>>24&15];L%e===0&&(Q(o),l=0)}return u&&(x=o[l],b+=a[x>>4&15]+a[x&15],u>1&&(b+=a[x>>12&15]+a[x>>8&15]),u>2&&(b+=a[x>>20&15]+a[x>>16&15])),b},F.prototype.arrayBuffer=function(){this.finalize();var e=this.blockCount,o=this.s,h=this.outputBlocks,u=this.extraBytes,l=0,L=0,b=this.outputBits>>3,x;u?x=new ArrayBuffer(h+1<<2):x=new ArrayBuffer(b);for(var M=new Uint32Array(x);L<h;){for(l=0;l<e&&L<h;++l,++L)M[L]=o[l];L%e===0&&Q(o)}return u&&(M[l]=o[l],x=x.slice(0,b)),x},F.prototype.buffer=F.prototype.arrayBuffer,F.prototype.digest=F.prototype.array=function(){this.finalize();for(var e=this.blockCount,o=this.s,h=this.outputBlocks,u=this.extraBytes,l=0,L=0,b=[],x,M;L<h;){for(l=0;l<e&&L<h;++l,++L)x=L<<2,M=o[l],b[x]=M&255,b[x+1]=M>>8&255,b[x+2]=M>>16&255,b[x+3]=M>>24&255;L%e===0&&Q(o)}return u&&(x=L<<2,M=o[l],b[x]=M&255,u>1&&(b[x+1]=M>>8&255),u>2&&(b[x+2]=M>>16&255)),b};function en(e,o,h){F.call(this,e,o,h)}en.prototype=new F,en.prototype.finalize=function(){return this.encode(this.outputBits,!0),F.prototype.finalize.call(this)};var Q=function(e){var o,h,u,l,L,b,x,M,w,C,N,$,ee,ne,te,re,ie,ae,oe,he,ue,ce,fe,me,le,ge,xe,Le,pe,se,be,we,ye,ve,de,Ae,qe,ke,Se,Ce,Be,Fe,Me,Ee,Oe,_e,je,De,Re,Ge,ze,Ie,Te,Pe,He,Xe,Ue,Ke,Ye,Je,Ve,We,Qe;for(u=0;u<48;u+=2)l=e[0]^e[10]^e[20]^e[30]^e[40],L=e[1]^e[11]^e[21]^e[31]^e[41],b=e[2]^e[12]^e[22]^e[32]^e[42],x=e[3]^e[13]^e[23]^e[33]^e[43],M=e[4]^e[14]^e[24]^e[34]^e[44],w=e[5]^e[15]^e[25]^e[35]^e[45],C=e[6]^e[16]^e[26]^e[36]^e[46],N=e[7]^e[17]^e[27]^e[37]^e[47],$=e[8]^e[18]^e[28]^e[38]^e[48],ee=e[9]^e[19]^e[29]^e[39]^e[49],o=$^(b<<1|x>>>31),h=ee^(x<<1|b>>>31),e[0]^=o,e[1]^=h,e[10]^=o,e[11]^=h,e[20]^=o,e[21]^=h,e[30]^=o,e[31]^=h,e[40]^=o,e[41]^=h,o=l^(M<<1|w>>>31),h=L^(w<<1|M>>>31),e[2]^=o,e[3]^=h,e[12]^=o,e[13]^=h,e[22]^=o,e[23]^=h,e[32]^=o,e[33]^=h,e[42]^=o,e[43]^=h,o=b^(C<<1|N>>>31),h=x^(N<<1|C>>>31),e[4]^=o,e[5]^=h,e[14]^=o,e[15]^=h,e[24]^=o,e[25]^=h,e[34]^=o,e[35]^=h,e[44]^=o,e[45]^=h,o=M^($<<1|ee>>>31),h=w^(ee<<1|$>>>31),e[6]^=o,e[7]^=h,e[16]^=o,e[17]^=h,e[26]^=o,e[27]^=h,e[36]^=o,e[37]^=h,e[46]^=o,e[47]^=h,o=C^(l<<1|L>>>31),h=N^(L<<1|l>>>31),e[8]^=o,e[9]^=h,e[18]^=o,e[19]^=h,e[28]^=o,e[29]^=h,e[38]^=o,e[39]^=h,e[48]^=o,e[49]^=h,ne=e[0],te=e[1],_e=e[11]<<4|e[10]>>>28,je=e[10]<<4|e[11]>>>28,Le=e[20]<<3|e[21]>>>29,pe=e[21]<<3|e[20]>>>29,Je=e[31]<<9|e[30]>>>23,Ve=e[30]<<9|e[31]>>>23,Fe=e[40]<<18|e[41]>>>14,Me=e[41]<<18|e[40]>>>14,ve=e[2]<<1|e[3]>>>31,de=e[3]<<1|e[2]>>>31,re=e[13]<<12|e[12]>>>20,ie=e[12]<<12|e[13]>>>20,De=e[22]<<10|e[23]>>>22,Re=e[23]<<10|e[22]>>>22,se=e[33]<<13|e[32]>>>19,be=e[32]<<13|e[33]>>>19,We=e[42]<<2|e[43]>>>30,Qe=e[43]<<2|e[42]>>>30,Pe=e[5]<<30|e[4]>>>2,He=e[4]<<30|e[5]>>>2,Ae=e[14]<<6|e[15]>>>26,qe=e[15]<<6|e[14]>>>26,ae=e[25]<<11|e[24]>>>21,oe=e[24]<<11|e[25]>>>21,Ge=e[34]<<15|e[35]>>>17,ze=e[35]<<15|e[34]>>>17,we=e[45]<<29|e[44]>>>3,ye=e[44]<<29|e[45]>>>3,me=e[6]<<28|e[7]>>>4,le=e[7]<<28|e[6]>>>4,Xe=e[17]<<23|e[16]>>>9,Ue=e[16]<<23|e[17]>>>9,ke=e[26]<<25|e[27]>>>7,Se=e[27]<<25|e[26]>>>7,he=e[36]<<21|e[37]>>>11,ue=e[37]<<21|e[36]>>>11,Ie=e[47]<<24|e[46]>>>8,Te=e[46]<<24|e[47]>>>8,Ee=e[8]<<27|e[9]>>>5,Oe=e[9]<<27|e[8]>>>5,ge=e[18]<<20|e[19]>>>12,xe=e[19]<<20|e[18]>>>12,Ke=e[29]<<7|e[28]>>>25,Ye=e[28]<<7|e[29]>>>25,Ce=e[38]<<8|e[39]>>>24,Be=e[39]<<8|e[38]>>>24,ce=e[48]<<14|e[49]>>>18,fe=e[49]<<14|e[48]>>>18,e[0]=ne^~re&ae,e[1]=te^~ie&oe,e[10]=me^~ge&Le,e[11]=le^~xe&pe,e[20]=ve^~Ae&ke,e[21]=de^~qe&Se,e[30]=Ee^~_e&De,e[31]=Oe^~je&Re,e[40]=Pe^~Xe&Ke,e[41]=He^~Ue&Ye,e[2]=re^~ae&he,e[3]=ie^~oe&ue,e[12]=ge^~Le&se,e[13]=xe^~pe&be,e[22]=Ae^~ke&Ce,e[23]=qe^~Se&Be,e[32]=_e^~De&Ge,e[33]=je^~Re&ze,e[42]=Xe^~Ke&Je,e[43]=Ue^~Ye&Ve,e[4]=ae^~he&ce,e[5]=oe^~ue&fe,e[14]=Le^~se&we,e[15]=pe^~be&ye,e[24]=ke^~Ce&Fe,e[25]=Se^~Be&Me,e[34]=De^~Ge&Ie,e[35]=Re^~ze&Te,e[44]=Ke^~Je&We,e[45]=Ye^~Ve&Qe,e[6]=he^~ce&ne,e[7]=ue^~fe&te,e[16]=se^~we&me,e[17]=be^~ye&le,e[26]=Ce^~Fe&ve,e[27]=Be^~Me&de,e[36]=Ge^~Ie&Ee,e[37]=ze^~Te&Oe,e[46]=Je^~We&Pe,e[47]=Ve^~Qe&He,e[8]=ce^~ne&re,e[9]=fe^~te&ie,e[18]=we^~me&ge,e[19]=ye^~le&xe,e[28]=Fe^~ve&Ae,e[29]=Me^~de&qe,e[38]=Ie^~Ee&_e,e[39]=Te^~Oe&je,e[48]=We^~Pe&Xe,e[49]=Qe^~He&Ue,e[0]^=I[u],e[1]^=I[u+1]};if(f)Ze.exports=R;else{for(Y=0;Y<H.length;++Y)s[H[Y]]=R[H[Y]];n&&define(function(){return R})}})()});var gn=X((ln,nn)=>{(function(g,p,y){function s(n){var r=this,a=f();r.next=function(){var t=2091639*r.s0+r.c*23283064365386963e-26;return r.s0=r.s1,r.s1=r.s2,r.s2=t-(r.c=t|0)},r.c=1,r.s0=a(" "),r.s1=a(" "),r.s2=a(" "),r.s0-=a(n),r.s0<0&&(r.s0+=1),r.s1-=a(n),r.s1<0&&(r.s1+=1),r.s2-=a(n),r.s2<0&&(r.s2+=1),a=null}function v(n,r){return r.c=n.c,r.s0=n.s0,r.s1=n.s1,r.s2=n.s2,r}function d(n,r){var a=new s(n),t=r&&r.state,i=a.next;return i.int32=function(){return a.next()*4294967296|0},i.double=function(){return i()+(i()*2097152|0)*11102230246251565e-32},i.quick=i,t&&(typeof t=="object"&&v(t,a),i.state=function(){return v(a,{})}),i}function f(){var n=4022871197,r=function(a){a=String(a);for(var t=0;t<a.length;t++){n+=a.charCodeAt(t);var i=.02519603282416938*n;n=i>>>0,i-=n,i*=n,n=i>>>0,i-=n,n+=i*4294967296}return(n>>>0)*23283064365386963e-26};return r}p&&p.exports?p.exports=d:y&&y.amd?y(function(){return d}):this.alea=d})(ln,typeof nn=="object"&&nn,typeof define=="function"&&define)});var Ln=X((xn,tn)=>{(function(g,p,y){function s(f){var n=this,r="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},f===(f|0)?n.x=f:r+=f;for(var a=0;a<r.length+64;a++)n.x^=r.charCodeAt(a)|0,n.next()}function v(f,n){return n.x=f.x,n.y=f.y,n.z=f.z,n.w=f.w,n}function d(f,n){var r=new s(f),a=n&&n.state,t=function(){return(r.next()>>>0)/4294967296};return t.double=function(){do var i=r.next()>>>11,c=(r.next()>>>0)/4294967296,m=(i+c)/(1<<21);while(m===0);return m},t.int32=r.next,t.quick=t,a&&(typeof a=="object"&&v(a,r),t.state=function(){return v(r,{})}),t}p&&p.exports?p.exports=d:y&&y.amd?y(function(){return d}):this.xor128=d})(xn,typeof tn=="object"&&tn,typeof define=="function"&&define)});var sn=X((pn,rn)=>{(function(g,p,y){function s(f){var n=this,r="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^(t^t<<1))|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,f===(f|0)?n.x=f:r+=f;for(var a=0;a<r.length+64;a++)n.x^=r.charCodeAt(a)|0,a==r.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function v(f,n){return n.x=f.x,n.y=f.y,n.z=f.z,n.w=f.w,n.v=f.v,n.d=f.d,n}function d(f,n){var r=new s(f),a=n&&n.state,t=function(){return(r.next()>>>0)/4294967296};return t.double=function(){do var i=r.next()>>>11,c=(r.next()>>>0)/4294967296,m=(i+c)/(1<<21);while(m===0);return m},t.int32=r.next,t.quick=t,a&&(typeof a=="object"&&v(a,r),t.state=function(){return v(r,{})}),t}p&&p.exports?p.exports=d:y&&y.amd?y(function(){return d}):this.xorwow=d})(pn,typeof rn=="object"&&rn,typeof define=="function"&&define)});var wn=X((bn,an)=>{(function(g,p,y){function s(f){var n=this;n.next=function(){var a=n.x,t=n.i,i,c,m;return i=a[t],i^=i>>>7,c=i^i<<24,i=a[t+1&7],c^=i^i>>>10,i=a[t+3&7],c^=i^i>>>3,i=a[t+4&7],c^=i^i<<7,i=a[t+7&7],i=i^i<<13,c^=i^i<<9,a[t]=c,n.i=t+1&7,c};function r(a,t){var i,c,m=[];if(t===(t|0))c=m[0]=t;else for(t=""+t,i=0;i<t.length;++i)m[i&7]=m[i&7]<<15^t.charCodeAt(i)+m[i+1&7]<<13;for(;m.length<8;)m.push(0);for(i=0;i<8&&m[i]===0;++i);for(i==8?c=m[7]=-1:c=m[i],a.x=m,a.i=0,i=256;i>0;--i)a.next()}r(n,f)}function v(f,n){return n.x=f.x.slice(),n.i=f.i,n}function d(f,n){f==null&&(f=+new Date);var r=new s(f),a=n&&n.state,t=function(){return(r.next()>>>0)/4294967296};return t.double=function(){do var i=r.next()>>>11,c=(r.next()>>>0)/4294967296,m=(i+c)/(1<<21);while(m===0);return m},t.int32=r.next,t.quick=t,a&&(a.x&&v(a,r),t.state=function(){return v(r,{})}),t}p&&p.exports?p.exports=d:y&&y.amd?y(function(){return d}):this.xorshift7=d})(bn,typeof an=="object"&&an,typeof define=="function"&&define)});var vn=X((yn,on)=>{(function(g,p,y){function s(f){var n=this;n.next=function(){var a=n.w,t=n.X,i=n.i,c,m;return n.w=a=a+1640531527|0,m=t[i+34&127],c=t[i=i+1&127],m^=m<<13,c^=c<<17,m^=m>>>15,c^=c>>>12,m=t[i]=m^c,n.i=i,m+(a^a>>>16)|0};function r(a,t){var i,c,m,q,I,G=[],U=128;for(t===(t|0)?(c=t,t=null):(t=t+"\0",c=0,U=Math.max(U,t.length)),m=0,q=-32;q<U;++q)t&&(c^=t.charCodeAt((q+32)%t.length)),q===0&&(I=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,q>=0&&(I=I+1640531527|0,i=G[q&127]^=c+I,m=i==0?m+1:0);for(m>=128&&(G[(t&&t.length||0)&127]=-1),m=127,q=4*128;q>0;--q)c=G[m+34&127],i=G[m=m+1&127],c^=c<<13,i^=i<<17,c^=c>>>15,i^=i>>>12,G[m]=c^i;a.w=I,a.X=G,a.i=m}r(n,f)}function v(f,n){return n.i=f.i,n.w=f.w,n.X=f.X.slice(),n}function d(f,n){f==null&&(f=+new Date);var r=new s(f),a=n&&n.state,t=function(){return(r.next()>>>0)/4294967296};return t.double=function(){do var i=r.next()>>>11,c=(r.next()>>>0)/4294967296,m=(i+c)/(1<<21);while(m===0);return m},t.int32=r.next,t.quick=t,a&&(a.X&&v(a,r),t.state=function(){return v(r,{})}),t}p&&p.exports?p.exports=d:y&&y.amd?y(function(){return d}):this.xor4096=d})(yn,typeof on=="object"&&on,typeof define=="function"&&define)});var An=X((dn,hn)=>{(function(g,p,y){function s(f){var n=this,r="";n.next=function(){var t=n.b,i=n.c,c=n.d,m=n.a;return t=t<<25^t>>>7^i,i=i-c|0,c=c<<24^c>>>8^m,m=m-t|0,n.b=t=t<<20^t>>>12^i,n.c=i=i-c|0,n.d=c<<16^i>>>16^m,n.a=m-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,f===Math.floor(f)?(n.a=f/4294967296|0,n.b=f|0):r+=f;for(var a=0;a<r.length+20;a++)n.b^=r.charCodeAt(a)|0,n.next()}function v(f,n){return n.a=f.a,n.b=f.b,n.c=f.c,n.d=f.d,n}function d(f,n){var r=new s(f),a=n&&n.state,t=function(){return(r.next()>>>0)/4294967296};return t.double=function(){do var i=r.next()>>>11,c=(r.next()>>>0)/4294967296,m=(i+c)/(1<<21);while(m===0);return m},t.int32=r.next,t.quick=t,a&&(typeof a=="object"&&v(a,r),t.state=function(){return v(r,{})}),t}p&&p.exports?p.exports=d:y&&y.amd?y(function(){return d}):this.tychei=d})(dn,typeof hn=="object"&&hn,typeof define=="function"&&define)});var qn=X(()=>{});var Sn=X((kn,Ne)=>{(function(g,p,y){var s=256,v=6,d=52,f="random",n=y.pow(s,v),r=y.pow(2,d),a=r*2,t=s-1,i;function c(A,k,E){var B=[];k=k==!0?{entropy:!0}:k||{};var S=G(I(k.entropy?[A,K(p)]:A??U(),3),B),O=new m(B),j=function(){for(var D=O.g(v),T=n,z=0;D<r;)D=(D+z)*s,T*=s,z=O.g(1);for(;D>=a;)D/=2,T/=2,z>>>=1;return(D+z)/T};return j.int32=function(){return O.g(4)|0},j.quick=function(){return O.g(4)/4294967296},j.double=j,G(K(O.S),p),(k.pass||E||function(D,T,z,P){return P&&(P.S&&q(P,O),D.state=function(){return q(O,{})}),z?(y[f]=D,T):D})(j,S,"global"in k?k.global:this==y,k.state)}function m(A){var k,E=A.length,B=this,S=0,O=B.i=B.j=0,j=B.S=[];for(E||(A=[E++]);S<s;)j[S]=S++;for(S=0;S<s;S++)j[S]=j[O=t&O+A[S%E]+(k=j[S])],j[O]=k;(B.g=function(D){for(var T,z=0,P=B.i,R=B.j,H=B.S;D--;)T=H[P=t&P+1],z=z*s+H[t&(H[P]=H[R=t&R+T])+(H[R]=T)];return B.i=P,B.j=R,z})(s)}function q(A,k){return k.i=A.i,k.j=A.j,k.S=A.S.slice(),k}function I(A,k){var E=[],B=typeof A,S;if(k&&B=="object")for(S in A)try{E.push(I(A[S],k-1))}catch{}return E.length?E:B=="string"?A:A+"\0"}function G(A,k){for(var E=A+"",B,S=0;S<E.length;)k[t&S]=t&(B^=k[t&S]*19)+E.charCodeAt(S++);return K(k)}function U(){try{var A;return i&&(A=i.randomBytes)?A=A(s):(A=new Uint8Array(s),(g.crypto||g.msCrypto).getRandomValues(A)),K(A)}catch{var k=g.navigator,E=k&&k.plugins;return[+new Date,g,E,g.screen,K(p)]}}function K(A){return String.fromCharCode.apply(0,A)}if(G(y.random(),p),typeof Ne=="object"&&Ne.exports){Ne.exports=c;try{i=qn()}catch{}}else typeof define=="function"&&define.amd?define(function(){return c}):y["seed"+f]=c})(typeof self<"u"?self:kn,[],Math)});var Bn=X((Nn,Cn)=>{var Gn=gn(),zn=Ln(),In=sn(),Tn=wn(),Pn=vn(),Hn=An(),J=Sn();J.alea=Gn;J.xor128=zn;J.xorwow=In;J.xorshift7=Tn;J.xor4096=Pn;J.tychei=Hn;Cn.exports=J});var Fn=fn(mn(),1),Mn=fn(Bn(),1);var _={Ada:{minLength:8},Adobe:{minLength:8,maxLength:100,requirements:["num","low","cap"]},Airbnb:{minLength:8,maxLength:128,requirements:["low","num","special"]},AliExpress:{chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",minLength:6,maxLength:20},Alipay:{alias:"AliExpress"},allegorithmic:{minLength:1},AlternativeTo:{minLength:8,requirements:["low","num"]},Amazon:{minLength:6},Amino:{minLength:6},Apple:{minLength:8,maxLength:32,requirements:["low","num","cap"]},Artsy:{minLength:6,maxLength:128},Baidu:{minLength:6,maxLength:14},BBC:{minLength:8,maxLength:50,requirements:["low","num","cap"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\\]^_`{|}~"},Behance:{alias:"Adobe"},Bing:{alias:"Microsoft"},"Blend Swap":{minLength:8},Blizzard:{minLength:8,maxLength:16,requirements:["low","num"]},"Channel 4":{minLength:6,maxLength:255},"Club Penguin Rewritten":{minLength:8,requirements:["cap","num"]},CodePen:{minLength:1},DeviantArt:{minLength:6},Discogs:{minLength:8},Discord:{minLength:6,maxLength:128},Disqus:{minLength:6},Dribbble:{minLength:6,maxLength:128},Dropbox:{minLength:6},Duolingo:{minLength:6},eBay:{minLength:6,maxLength:64,requirements:["low","num"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-.;=?@\\^_`{|}~"},"Epic Games":{minLength:7,requirements:["low","num"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\\]^_`{|}~"},Etsy:{minLength:6,maxLength:152},Evernote:{minLength:6,maxLength:64},Facebook:{minLength:6},Factorio:{minLength:5},Fanatical:{minLength:6},Fandom:{minLength:1,maxLength:50},Firebox:{minLength:7,requirements:["low","num"]},Firefox:{minLength:8},Flickr:{alias:"Yahoo"},Forvo:{minLength:4,maxLength:28},Freelancer:{minLength:6,requirements:["low","num"]},Genius:{minLength:4,maxLength:128},GeoGuessr:{minLength:5},Gfycat:{minLength:8,maxLength:25},giffgaff:{requirements:["cap","low","num"],minLength:8},GIPHY:{minLength:1,maxLength:128},GitHub:{minLength:7,maxLength:72,requirements:["low","num"]},GitLab:{minLength:8,maxLength:128},"Government Gateway":{minLength:8,maxLength:12,requirements:["low","num"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"},Guilded:{minLength:8,maxLength:128},GOG:{minLength:2},Google:{minLength:8,maxLength:100},"The Guardian":{minLength:6,maxLength:72},HitFilm:{minLength:8,maxLength:25},"Hi-Rez":{minLength:7,maxLength:20,chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"},"Humble Bundle":{minLength:4},IFTTT:{minLength:6},IMDb:{minLength:8,maxLength:1024},imgur:{minLength:6,maxLength:255,requirements:["num","low"]},Instagram:{minLength:6,maxLength:255},"itch.io":{minLength:2},itv:{minLength:6,maxLength:100},JustGiving:{minLength:6},Keybase:{minLength:6},"Ko-fi":{minLength:6,maxLength:100},"last.fm":{minLength:6,maxLength:128,requirements:["num","special"]},lernu:{minLength:5},Lingvist:{minLength:8},LinkedIn:{minLength:6},"Lloyds Bank":{minLength:8,maxLength:15,chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"},"mailbox.org":{minLength:6,requirements:["cap","low","num"],chars:'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$"%&/()=*+-#.,;:@?{}[]'},"Mail.Ru":{requirements:["special","num","low"],minLength:6,maxLength:40},Mapbox:{minLength:8,maxLength:512},Mega:{minLength:8},Messenger:{alias:"Facebook"},Microsoft:{requirements:["cap","low"],minLength:8,maxLength:127},Minecraft:{alias:"Mojang"},Mojang:{minLength:8,maxLength:256},MSN:{alias:"Microsoft"},MuseScore:{minLength:1,maxLength:128},"My Nintendo":{minLength:8,maxLength:20,requirements:["cap","low"]},"Native Instruments":{minLength:10,maxLength:60,requirements:["special"]},Nectar:{minLength:8,maxLength:100,requirements:["num","cap","low"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*,-./:;<=>?@[\\]^_`{|}~"},Netflix:{minLength:4,maxLength:50},Opera:{minLength:12,maxLength:1e3},OpenStreetMap:{minLength:8,maxLength:255},Origin:{minLength:8,maxLength:16,chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",requirements:["cap","low","num"]},"osu!":{minLength:8},Oxfam:{minLength:6},Pastebin:{minLength:4},"Patient Access":{minLength:8,maxLength:99,requirements:["num","cap","low"]},Patreon:{minLength:6},PayPal:{requirements:["num"],minLength:8,maxLength:20},paysafecard:{minLength:8,requirements:["cap","special"],maxLength:110},PCPartPicker:{minLength:1},Pinterest:{minLength:6,requirements:["low","num"]},pixiv:{minLength:6,maxLength:72,chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"},"plug.dj":{minLength:8,maxLength:128,requirements:["low"]},Plusnet:{minLength:8,maxLength:16,requirements:["cap","num","special"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?[]^_`{}~"},Pocket:{minLength:6},Prezi:{minLength:8,maxLength:128},Proton:{alias:"Protonmail"},Protonmail:{deprecated:!0,minLength:8},Quora:{minLength:8,maxLength:75,requirements:["low","cap","num"]},QQ:{minLength:8,maxLength:16,requirements:["low","num"]},Reddit:{minLength:6},"Riot Games":{minLength:8,maxLength:128,requirements:["low","num"]},"Rockstar Games Social Club":{minLength:8,maxLength:30,requirements:["num","cap"]},"Rotten Tomatoes":{minLength:8,requirements:["low","special"]},"Sainsbury's":{minLength:8,maxLength:100,requirements:["num","cap","low"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*,-./:;<=>?@[\\]^_`{|}~"},Skype:{alias:"Microsoft"},Snapchat:{minLength:8,requirements:["num","cap"]},Songsterr:{minLength:5,maxLength:200},Soundcloud:{minLength:6,maxLength:2048},Spotify:{minLength:4},"Square Enix":{minLength:6,maxLength:32,chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"(#$%&')=~|`{+*}<>?_-^@[;:],./"},"Stack Overflow":{minLength:8,requirements:["low","num"]},Starbreeze:{minLength:8,maxLength:32,requirements:["low","num","special","cap"],chars:'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@[]^_|~',regex:"(?=.{8,}$)(?:(.)\\1?(?!\\1))+"},Steam:{minLength:8},StellarX:{minLength:8,maxLength:50,requirements:["cap","low","num"],regex:"^(?!.*(.)\\1{2,}).+"},Streamable:{minLength:6},Tesco:{minLength:8,maxLength:45,requirements:["low","cap","special"]},"TheCubicle.us":{minLength:5},Threema:{minLength:8,maxLength:4096},"tic.computer":{minLength:6},TikTok:{minLength:8,maxLength:20,requirements:["low","num","special"],chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\\]^_|~"},Trello:{minLength:8},Tumblr:{alias:"Yahoo"},Twitch:{minLength:8},Twitter:{minLength:6},Uber:{minLength:5,maxLength:512},Ubisoft:{minLength:8,maxLength:16},UCAS:{minLength:8,maxLength:14,requirements:["cap","low","num","special"]},"Unity ID":{minLength:8,maxLength:72,requirements:["cap","low","num"]},Uphold:{minLength:8,maxLength:72,requirements:["cap","low","special"]},Uplay:{alias:"Ubisoft"},Venmo:{minLength:8,maxLength:32},Vimeo:{requirements:["cap","low","num","special"],minLength:8,maxLength:72},"Visa Checkout":{chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",minLength:8,maxLength:32},Vivaldi:{minLength:8,maxLength:254},VK:{minLength:6},WeChat:{alias:"QQ"},Wikipedia:{minLength:1},Wordpress:{minLength:6,chars:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",requirements:["cap","low","num","special"]},Xbox:{alias:"Microsoft"},"XDA Developers":{minLength:1,maxLength:50},Yahoo:{minLength:8,requirements:["low","num"]},Yelp:{minLength:6,maxLength:200},YouTube:{alias:"Google"},"YoYo Games":{minLength:6},Zoom:{minLength:8,requirements:["cap","low","num","special"]}};var Un=4,Kn=512,Yn=16,Jn={cap:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",low:"abcdefghijklmnopqrstuvwxyz",num:"0123456789",special:"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"};function nt(g,p,y=!1,s=Yn){if(typeof g!="string")throw new Error("App name must be a string");if(g.length<1)throw new Error("App name must be more than 0 characters");if(typeof p!="string")throw new Error("Master password must be a string");if(p.length<1)throw new Error("Master password must be more than 0 characters");if(typeof y!="boolean")throw new Error("presetToggle must be a boolean");if(typeof s!="number")throw new Error("length must be a number");let v=Un,d=Kn,f="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",n=[],r;g=g.trim(),s=Math.trunc(s);let a="";if(y){try{_[g].alias&&(g=_[g].alias)}catch{throw new Error("Invalid preset")}if("minLength"in _[g]&&(v=_[g].minLength),"maxLength"in _[g]&&(d=_[g].maxLength),"chars"in _[g]&&(f=_[g].chars),"regex"in _[g])try{r=new RegExp(_[g].regex)}catch{throw new Error(`Invalid regex from ${g} "${_[g].regex}"`)}if("requirements"in _[g])for(let c=0;c<_[g].requirements.length;c++)n.push(Jn[_[g].requirements[c]])}if(v<=s&&s<=d||(s>d?s=d:s<v&&(s=v)),g===""||p===""||s==="")return null;g=g.toLowerCase();let t=new Mn.default(Fn.default.keccak_512(g+p)),i=!0;for(;i;){for(a="";a.length<s;)a+=f[Math.floor(t()*f.length)];if(n.length!==0||r){let c=!1;for(let m=0;m<n.length;m++){for(let q=0;q<n[m].length&&a.indexOf(n[m][q])===-1;q++)if(n[m].indexOf(n[m][q])===n[m].length-1){c=!0;break}if(c)break}r&&!c&&(r.test(a)||(c=!0)),c||(i=!1)}else i=!1}return a}})();
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */

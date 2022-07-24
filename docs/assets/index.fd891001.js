const Ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};Ue();function y(){}const Xe=t=>t;function Ge(t){return t()}function De(){return Object.create(null)}function Y(t){t.forEach(Ge)}function Ae(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let me;function le(t,e){return me||(me=document.createElement("a")),me.href=e,t===me.href}function Ze(t){return Object.keys(t).length===0}function we(t){return t&&Ae(t.destroy)?t.destroy:y}const Je=typeof window!="undefined";let Ye=Je?()=>window.performance.now():()=>Date.now(),Le=Je?t=>requestAnimationFrame(t):y;const ne=new Set;function qe(t){ne.forEach(e=>{e.c(t)||(ne.delete(e),e.f())}),ne.size!==0&&Le(qe)}function et(t){let e;return ne.size===0&&Le(qe),{promise:new Promise(n=>{ne.add(e={c:t,f:n})}),abort(){ne.delete(e)}}}function i(t,e){t.appendChild(e)}function We(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function tt(t){const e=f("style");return nt(We(t),e),e.sheet}function nt(t,e){i(t.head||t,e)}function P(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function g(){return T(" ")}function rt(){return T("")}function K(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return Array.from(t.childNodes)}function $e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function at(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function it(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,r,e),l}const _e=new Map;let ve=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ct(t,e){const n={stylesheet:tt(e),rules:{}};return _e.set(t,n),n}function ut(t,e,n,r,l,s,a,d=0){const u=16.666/r;let c=`{
`;for(let x=0;x<=1;x+=u){const v=e+(n-e)*s(x);c+=x*100+`%{${a(v,1-v)}}
`}const p=c+`100% {${a(n,1-n)}}
}`,m=`__svelte_${ot(p)}_${d}`,h=We(t),{stylesheet:w,rules:_}=_e.get(h)||ct(h,t);_[m]||(_[m]=!0,w.insertRule(`@keyframes ${m} ${p}`,w.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${m} ${r}ms linear ${l}ms 1 both`,ve+=1,m}function Fe(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),l=n.length-r.length;l&&(t.style.animation=r.join(", "),ve-=l,ve||ft())}function ft(){Le(()=>{ve||(_e.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),_e.clear())})}let Se;function ue(t){Se=t}const ce=[],Ee=[],pe=[],Ne=[],dt=Promise.resolve();let Pe=!1;function mt(){Pe||(Pe=!0,dt.then(Be))}function re(t){pe.push(t)}const ke=new Set;let he=0;function Be(){const t=Se;do{for(;he<ce.length;){const e=ce[he];he++,ue(e),ht(e.$$)}for(ue(null),ce.length=0,he=0;Ee.length;)Ee.pop()();for(let e=0;e<pe.length;e+=1){const n=pe[e];ke.has(n)||(ke.add(n),n())}pe.length=0}while(ce.length);for(;Ne.length;)Ne.pop()();Pe=!1,ke.clear(),ue(t)}function ht(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}let oe;function pt(){return oe||(oe=Promise.resolve(),oe.then(()=>{oe=null})),oe}function He(t,e,n){t.dispatchEvent(it(`${e?"intro":"outro"}${n}`))}const ge=new Set;let Z;function gt(){Z={r:0,c:[],p:Z}}function _t(){Z.r||Y(Z.c),Z=Z.p}function E(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(ge.has(t))return;ge.add(t),Z.c.push(()=>{ge.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const vt={duration:0};function Ke(t,e,n){let r=e(t,n),l=!1,s,a,d=0;function u(){s&&Fe(t,s)}function c(){const{delay:m=0,duration:h=300,easing:w=Xe,tick:_=y,css:$}=r||vt;$&&(s=ut(t,0,1,h,m,w,$,d++)),_(0,1);const x=Ye()+m,v=x+h;a&&a.abort(),l=!0,re(()=>He(t,!0,"start")),a=et(k=>{if(l){if(k>=v)return _(1,0),He(t,!0,"end"),u(),l=!1;if(k>=x){const F=w((k-x)/h);_(F,1-F)}}return l})}let p=!1;return{start(){p||(p=!0,Fe(t),Ae(r)?(r=r(),pt().then(c)):c())},invalidate(){p=!1},end(){l&&(u(),l=!1)}}}function G(t){t&&t.c()}function I(t,e,n,r){const{fragment:l,on_mount:s,on_destroy:a,after_update:d}=t.$$;l&&l.m(e,n),r||re(()=>{const u=s.map(Ge).filter(Ae);a?a.push(...u):Y(u),t.$$.on_mount=[]}),d.forEach(re)}function D(t,e){const n=t.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(ce.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,l,s,a,d=[-1]){const u=Se;ue(t);const c=t.$$={fragment:null,ctx:null,props:s,update:y,not_equal:l,bound:De(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:De(),dirty:d,skip_bound:!1,root:e.target||u.$$.root};a&&a(c.root);let p=!1;if(c.ctx=n?n(t,e.props||{},(m,h,...w)=>{const _=w.length?w[0]:h;return c.ctx&&l(c.ctx[m],c.ctx[m]=_)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](_),p&&bt(t,m)),h}):[],c.update(),p=!0,Y(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const m=st(e.target);c.fragment&&c.fragment.l(m),m.forEach(j)}else c.fragment&&c.fragment.c();e.intro&&E(t.$$.fragment),I(t,e.target,e.anchor,e.customElement),Be()}ue(u)}class B{$destroy(){D(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var yt="/assets/scenic_background.074f5772.jpg";function xt(t){let e,n,r,l,s,a,d,u,c,p,m,h,w;return{c(){e=f("div"),n=f("div"),r=f("h1"),r.textContent="Welcome to my Website",l=g(),s=f("p"),s.textContent="My name is Jack O'Shea.",a=g(),d=f("p"),d.textContent="I'm a developer.",u=g(),c=f("p"),c.textContent="This is my portfolio.",p=g(),m=f("button"),m.innerHTML='<span class="text-slate-100 font-mono font-bold">Learn more</span>',o(r,"class","header svelte-mp2duo"),o(s,"class","info svelte-mp2duo"),o(d,"class","info svelte-mp2duo"),o(c,"class","info mb-5 svelte-mp2duo"),o(m,"class","btn btn-secondary"),o(n,"class","flex flex-col items-center justify-center h-screen"),o(e,"class","h-screen w-full"),at(e,"background-image","url("+yt+")")},m(_,$){P(_,e,$),i(e,n),i(n,r),i(n,l),i(n,s),i(n,a),i(n,d),i(n,u),i(n,c),i(n,p),i(n,m),h||(w=K(m,"click",wt),h=!0)},p:y,i:y,o:y,d(_){_&&j(e),h=!1,w()}}}function wt(){location.href="#About"}class $t extends B{constructor(e){super(),W(this,e,null,xt,J,{})}}function kt(t){let e,n,r,l,s,a,d,u,c,p,m,h,w,_,$,x,v,k,F,N,H,z,se,q,Q,L,R,ee,O,ae,b,ie,te,Ce,be,U,Me,fe,Oe,ye,X,Te,de,xe,Ie;return{c(){e=f("div"),n=f("div"),n.innerHTML='<a class="btn btn-ghost normal-case text-xl" href="#top">JackOSheaDEV</a>',r=g(),l=f("div"),s=f("ul"),a=f("li"),d=f("a"),u=T("About"),p=g(),m=f("li"),h=f("a"),w=T("Education"),$=g(),x=f("li"),v=f("a"),k=T("Projects"),N=g(),H=f("div"),z=f("div"),z.innerHTML='<a class="btn btn-ghost normal-case text-xl" href="#top">JackOSheaDEV</a>',se=g(),q=f("div"),Q=f("ul"),L=f("li"),R=f("a"),R.innerHTML=`Contents:
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>`,ee=g(),O=f("ul"),ae=f("li"),b=f("a"),ie=T("About"),Ce=g(),be=f("li"),U=f("a"),Me=T("Education"),Oe=g(),ye=f("li"),X=f("a"),Te=T("Projects"),o(n,"class","flex-1"),o(d,"class",c=t[1].About===!0?C:S),o(d,"href","#About"),o(h,"class",_=t[1].Education===!0?C:S),o(h,"href","#Education"),o(v,"class",F=t[1].Projects===!0?C:S),o(v,"href","#Projects"),o(s,"class","menu menu-horizontal p-0"),o(l,"class","flex-none"),o(e,"id","navbar"),o(e,"class","navbar bg-base-100 sticky top-0 z-40 hidden md:flex lg:flex"),o(z,"class","flex-1"),o(R,"class","justify-between"),o(R,"href","#navbar"),o(b,"class",te=t[1].About===!0?C:S),o(b,"href","#About"),o(U,"class",fe=t[1].Education===!0?C:S),o(U,"href","#Education"),o(X,"class",de=t[1].Projects===!0?C:S),o(X,"href","#Projects"),o(O,"class","p-2"),o(L,"tabindex","0"),o(Q,"class","menu menu-horizontal p-0"),o(q,"class","flex-none"),o(H,"class","navbar bg-base-100 sticky top-0 z-40 display:flex md:hidden lg:hidden")},m(A,V){P(A,e,V),i(e,n),i(e,r),i(e,l),i(l,s),i(s,a),i(a,d),i(d,u),i(s,p),i(s,m),i(m,h),i(h,w),i(s,$),i(s,x),i(x,v),i(v,k),P(A,N,V),P(A,H,V),i(H,z),i(H,se),i(H,q),i(q,Q),i(Q,L),i(L,R),i(L,ee),i(L,O),i(O,ae),i(ae,b),i(b,ie),i(O,Ce),i(O,be),i(be,U),i(U,Me),i(O,Oe),i(O,ye),i(ye,X),i(X,Te),xe||(Ie=[K(d,"click",t[2]),K(h,"click",t[3]),K(v,"click",t[4]),K(b,"click",t[5]),K(U,"click",t[6]),K(X,"click",t[7])],xe=!0)},p(A,[V]){V&2&&c!==(c=A[1].About===!0?C:S)&&o(d,"class",c),V&2&&_!==(_=A[1].Education===!0?C:S)&&o(h,"class",_),V&2&&F!==(F=A[1].Projects===!0?C:S)&&o(v,"class",F),V&2&&te!==(te=A[1].About===!0?C:S)&&o(b,"class",te),V&2&&fe!==(fe=A[1].Education===!0?C:S)&&o(U,"class",fe),V&2&&de!==(de=A[1].Projects===!0?C:S)&&o(X,"class",de)},i:y,o:y,d(A){A&&j(e),A&&j(N),A&&j(H),xe=!1,Y(Ie)}}}let S="text-default-400",C="text-secondary";function jt(t,e,n){let r={About:!0,Education:!1,Projects:!1};function l(m){for(let[h]of Object.entries(r))n(1,r[h]=!1,r);n(1,r[m]=!0,r)}return[l,r,()=>l("About"),()=>l("Education"),()=>l("Projects"),()=>l("About"),()=>l("Education"),()=>l("Projects")]}class Et extends B{constructor(e){super(),W(this,e,jt,kt,J,{setState:0})}get setState(){return this.$$.ctx[0]}}function Pt(t){let e;return{c(){e=f("div"),e.innerHTML=`<img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" alt="random and shows something"/> 

    
  
  <div class="flex flex-col items-center gap-4"><div class="mockup-code w-3/4 "><pre data-prefix="&gt;"><code>Hello!</code></pre>  
      <pre data-prefix="&gt;"><code>My name is Jack O&#39;Shea</code></pre>  
      <pre data-prefix="&gt;"><code>I go to TUD College</code></pre>  
      <pre data-prefix="&gt;"><code>I&#39;m interested in Music,</code></pre> 
      <pre data-prefix="&gt;"><code>Guitar and Programming.</code></pre> 
      <pre data-prefix="&gt;" class="text-success"><code>Ready to learn more ?</code></pre></div> 
  
    
    <div class="mockup-code w-3/4"><pre data-prefix="$"><code>vim my_socials.txt</code></pre>  
      <pre data-prefix="-" class="text-accent"><code><a class="no-underline hover:underline " href="https://www.linkedin.com/in/jack-o-shea-42a00b201/">LinkedIn</a></code></pre> 
      <pre data-prefix="-" class="text-accent"><code><a class="no-underline hover:underline" href="https://github.com/JackOSheaDev">Github</a></code></pre> 
      <pre data-prefix="-" class="text-accent"><code><a class="no-underline hover:underline" href="https://twitter.com/Jack_0Shea">Twitter</a></code></pre> 
      <pre data-prefix="-" class="text-accent"><code><a class="no-underline hover:underline" href="mailto:jackoshea4038@gmail.com">Email</a></code></pre></div></div>`,o(e,"class","h-max w-full flex flex-col md:flex-row-reverse md:justify-evenly items-center gap-4 mb-24")},m(n,r){P(n,e,r)},p:y,i:y,o:y,d(n){n&&j(e)}}}class At extends B{constructor(e){super(),W(this,e,null,Pt,J,{})}}function Lt(t){const e=t-1;return e*e*e+1}function Qe(t,{delay:e=0,duration:n=400,easing:r=Lt,x:l=0,y:s=0,opacity:a=0}={}){const d=getComputedStyle(t),u=+d.opacity,c=d.transform==="none"?"":d.transform,p=u*(1-a);return{delay:e,duration:n,easing:r,css:(m,h)=>`
			transform: ${c} translate(${(1-m)*l}px, ${(1-m)*s}px);
			opacity: ${u-p*h}`}}var St="/assets/web_development.bc5da931.png";function ze(t,e,n){const r=t.slice();return r[4]=e[n],r}function Ct(t){let e,n,r,l;return{c(){e=f("img"),le(e.src,n=t[0].source)||o(e,"src",n),o(e,"alt",r=t[0].alt)},m(s,a){P(s,e,a)},p(s,a){a&1&&!le(e.src,n=s[0].source)&&o(e,"src",n),a&1&&r!==(r=s[0].alt)&&o(e,"alt",r)},i(s){l||re(()=>{l=Ke(e,Qe,{x:200,duration:1600}),l.start()})},o:y,d(s){s&&j(e)}}}function Mt(t){let e,n,r,l;return{c(){e=f("iframe"),o(e,"title",n=t[0].title),le(e.src,r=t[0].source)||o(e,"src",r),o(e,"class","w-full")},m(s,a){P(s,e,a)},p(s,a){a&1&&n!==(n=s[0].title)&&o(e,"title",n),a&1&&!le(e.src,r=s[0].source)&&o(e,"src",r)},i(s){l||re(()=>{l=Ke(e,Qe,{x:200,duration:1600}),l.start()})},o:y,d(s){s&&j(e)}}}function Re(t){let e;function n(s,a){return s[0].type=="Video"?Mt:Ct}let r=n(t),l=r(t);return{c(){l.c(),e=rt()},m(s,a){l.m(s,a),P(s,e,a)},p(s,a){r===(r=n(s))&&l?l.p(s,a):(l.d(1),l=r(s),l&&(l.c(),E(l,1),l.m(e.parentNode,e)))},i(s){E(l)},o:y,d(s){l.d(s),s&&j(e)}}}function Ve(t){let e,n,r,l,s,a;return{c(){e=f("label"),n=f("input"),l=g(),o(n,"class","radio radio-secondary radio-md"),o(n,"type","radio"),n.__value=r=t[4],n.value=n.__value,t[3][0].push(n)},m(d,u){P(d,e,u),i(e,n),n.checked=n.__value===t[0],i(e,l),s||(a=K(n,"change",t[2]),s=!0)},p(d,u){u&1&&(n.checked=n.__value===d[0])},d(d){d&&j(e),t[3][0].splice(t[3][0].indexOf(n),1),s=!1,a()}}}function Ot(t){let e,n,r=t[0],l,s,a=Re(t),d=t[1],u=[];for(let c=0;c<d.length;c+=1)u[c]=Ve(ze(t,d,c));return{c(){e=f("div"),n=f("div"),a.c(),l=g(),s=f("div");for(let c=0;c<u.length;c+=1)u[c].c();o(n,"class","carousel aspect-video"),o(s,"class","flex justify-center w-full py-2 gap-2"),o(e,"class","mt-10 mr-5 ml-5 w-3/4")},m(c,p){P(c,e,p),i(e,n),a.m(n,null),i(e,l),i(e,s);for(let m=0;m<u.length;m+=1)u[m].m(s,null)},p(c,[p]){if(p&1&&J(r,r=c[0])?(gt(),M(a,1,1,y),_t(),a=Re(c),a.c(),E(a,1),a.m(n,null)):a.p(c,p),p&3){d=c[1];let m;for(m=0;m<d.length;m+=1){const h=ze(c,d,m);u[m]?u[m].p(h,p):(u[m]=Ve(h),u[m].c(),u[m].m(s,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=d.length}},i(c){E(a)},o(c){M(a)},d(c){c&&j(e),a.d(c),lt(u,c)}}}function Tt(t,e,n){let r=[{type:"Video",title:"Machine Learning Project 1",source:"https://www.youtube.com/embed/LR3jmVT92m4"},{type:"Video",title:"Machine Learning Project 2",source:"https://www.youtube.com/embed/LvwfaX1RHl0"},{type:"Video",title:"Microprocessors- MicroRealms",source:"https://www.youtube.com/embed/lQeDKvip72w"},{type:"Image",alt:"A project I made using PHP",source:St}],l=r[0];const s=[[]];function a(){l=this.__value,n(0,l)}return[l,r,a,s]}class It extends B{constructor(e){super(),W(this,e,Tt,Ot,J,{})}}function Dt(t){let e,n,r,l,s;return l=new It({}),{c(){e=f("div"),n=f("div"),n.innerHTML=`<h2 class="text-slate-100 font-mono text-2xl break-normal text-center">I am about to enter my third year of college.</h2> 
      <p class="text-slate-100 font-mono break-normal text-center">The projects in the carousel were made during 2nd year of College</p>`,r=g(),G(l.$$.fragment),o(n,"class","flex flex-col items-center gap-4"),o(e,"class","h-max w-full flex flex-col md:flex-row md:justify-evenly items-center gap-4")},m(a,d){P(a,e,d),i(e,n),i(e,r),I(l,e,null),s=!0},p:y,i(a){s||(E(l.$$.fragment,a),s=!0)},o(a){M(l.$$.fragment,a),s=!1},d(a){a&&j(e),D(l)}}}class Ft extends B{constructor(e){super(),W(this,e,null,Dt,J,{})}}function Nt(t){let e;return{c(){e=f("div"),e.innerHTML=`<div class="flex flex-col items-center gap-4"><h2 class="text-slate-100 font-mono text-2xl break-normal text-center">Notable Grades</h2> 
      <p class="text-center break-normal lg:text-left mr-5 ml-5">Here are a selection of my grades from this year</p></div> 

    
    <div class="items-center gap-4 hidden md:flex md:flex-col"><div class="overflow-x-auto w-full"><table class="table table-zebra w-full"><thead><tr><th></th> 
              <th>Subject:</th> 
              <th>Grade:</th> 
              <th>What I Learned:</th></tr></thead> 
          
          <tbody><tr><th>-</th> 
              <td>OOP</td> 
              <td>First</td> 
              <td>Design Patterns and Programing</td></tr> 
            
            <tr><th>-</th> 
              <td>Mathematics</td> 
              <td>First</td> 
              <td>Discrete Maths and how it applies to CS</td></tr> 
            
            <tr><th>-</th> 
              <td>Networking</td> 
              <td>First</td> 
              <td>Cisco equipment and networking fundamentals</td></tr> 
            
            <tr><th>-</th> 
              <td>Microprocessors</td> 
              <td>First</td> 
              <td>Programming in assembly and C</td></tr> 
    
            
            <tr><th>-</th> 
              <td>OS and System Admin</td> 
              <td>First</td> 
              <td>Linux essentials, VMs and the kernel</td></tr></tbody></table></div></div> 
  

    
    <div class="flex flex-col items-center gap-4 md:hidden"><div class="overflow-x-auto w-full"><table class="table table-zebra w-full"><thead><tr><th></th> 
              <th>Subject:</th> 
              <th>Grade:</th></tr></thead> 
          
          <tbody><tr><th>-</th> 
              <td>OOP</td> 
              <td>First</td></tr> 
            
            <tr><th>-</th> 
              <td>Mathematics</td> 
              <td>First</td></tr> 
            
            <tr><th>-</th> 
              <td>Networking</td> 
              <td>First</td></tr> 
            
            <tr><th>-</th> 
              <td>Microprocessors</td> 
              <td>First</td></tr> 
            
            <tr><th>-</th> 
              <td>OS and System Admin</td> 
              <td>First</td></tr></tbody></table></div></div>`,o(e,"class","h-max w-full flex flex-col md:flex-row md:justify-evenly items-center gap-4")},m(n,r){P(n,e,r)},p:y,i:y,o:y,d(n){n&&j(e)}}}class Ht extends B{constructor(e){super(),W(this,e,null,Nt,J,{})}}function zt(t){let e,n,r,l,s,a,d,u,c,p,m,h,w,_,$,x;return{c(){e=f("div"),n=f("div"),r=f("img"),s=g(),a=f("div"),d=f("div"),u=f("h1"),c=T(t[2]),p=g(),m=f("p"),h=T(t[3]),w=g(),_=f("div"),$=f("a"),x=T(t[4]),o(r,"alt",t[1]),le(r.src,l=t[0])||o(r,"src",l),o(r,"class","h-full w-full rounded-t-lg aspect-video"),o(n,"class","w-fill h-2/5 z-30 "),o(u,"class","text-slate-100 font-sans font-bold text-2xl mt-5 break-normal text-center"),o(m,"class","text-slate-100 font-sans font-bold text-sm mt-5 break-normal text-center ml-1 mr-1"),o(d,"class","flex h-3/5 justify-center flex-col"),o($,"href",t[5]),o($,"class","btn w-1/2"),o(_,"class","flex h-4/5 justify-center items-baseline mt-5"),o(a,"class","w-fill h-3/5 rounded-b-lg glass -mt-1"),o(e,"class","w-56 h-96 rounded-md flex flex-col")},m(v,k){P(v,e,k),i(e,n),i(n,r),i(e,s),i(e,a),i(a,d),i(d,u),i(u,c),i(d,p),i(d,m),i(m,h),i(a,w),i(a,_),i(_,$),i($,x)},p(v,[k]){k&2&&o(r,"alt",v[1]),k&1&&!le(r.src,l=v[0])&&o(r,"src",l),k&4&&$e(c,v[2]),k&8&&$e(h,v[3]),k&16&&$e(x,v[4]),k&32&&o($,"href",v[5])},i:y,o:y,d(v){v&&j(e)}}}function Rt(t,e,n){let{image:r}=e,{alt:l}=e,{title:s}=e,{text:a}=e,{buttonText:d}=e,{url:u}=e;return t.$$set=c=>{"image"in c&&n(0,r=c.image),"alt"in c&&n(1,l=c.alt),"title"in c&&n(2,s=c.title),"text"in c&&n(3,a=c.text),"buttonText"in c&&n(4,d=c.buttonText),"url"in c&&n(5,u=c.url)},[r,l,s,a,d,u]}class je extends B{constructor(e){super(),W(this,e,Rt,zt,J,{image:0,alt:1,title:2,text:3,buttonText:4,url:5})}}var Vt="/assets/titanic.ffc89141.jpg",Gt="/assets/database_image.5e831ea5.jpg",Jt="/assets/ai.3c983b34.jpg";function qt(t){let e,n,r,l,s,a,d;return n=new je({props:{image:Vt,alt:"The titanic, by David Do from pixabay.",title:"Titantic Machine Learning",text:"I learned to create a machine learning model with Pandas and Scikit Learn.",buttonText:"Github",url:"https://github.com"}}),l=new je({props:{image:Gt,alt:"Numbers in green text like the matrix",title:"Database Project",text:"I created a database from scratch using SQL server, and performed queries and transactions.",buttonText:"Github",url:"https://github.com/JackOSheaDev/DatabaseTechProject"}}),a=new je({props:{image:Jt,alt:"Chemical bonds",title:"A.I Feud",text:"I created a guessing game powered by Azure Cognitive Vision to analyse images using Python.",buttonText:"Github",url:"https://github.com/JackOSheaDev/AI-Feud"}}),{c(){e=f("div"),G(n.$$.fragment),r=g(),G(l.$$.fragment),s=g(),G(a.$$.fragment),o(e,"class","h-fit w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5")},m(u,c){P(u,e,c),I(n,e,null),i(e,r),I(l,e,null),i(e,s),I(a,e,null),d=!0},p:y,i(u){d||(E(n.$$.fragment,u),E(l.$$.fragment,u),E(a.$$.fragment,u),d=!0)},o(u){M(n.$$.fragment,u),M(l.$$.fragment,u),M(a.$$.fragment,u),d=!1},d(u){u&&j(e),D(n),D(l),D(a)}}}class Wt extends B{constructor(e){super(),W(this,e,null,qt,J,{})}}function Bt(t){let e,n,r,l,s,a,d,u,c,p,m,h,w,_,$,x,v,k,F,N,H,z,se,q,Q,L,R,ee,O;n=new $t({});let ae={};return l=new Et({props:ae}),t[2](l),p=new At({}),x=new Ft({}),N=new Ht({}),L=new Wt({}),{c(){e=f("main"),G(n.$$.fragment),r=g(),G(l.$$.fragment),s=g(),a=f("div"),d=g(),u=f("h1"),u.textContent="About Me",c=g(),G(p.$$.fragment),m=g(),h=f("div"),w=g(),_=f("h1"),_.textContent="Education",$=g(),G(x.$$.fragment),v=g(),k=f("div"),F=g(),G(N.$$.fragment),H=g(),z=f("div"),se=g(),q=f("h1"),q.textContent="Projects",Q=g(),G(L.$$.fragment),o(a,"id","About"),o(a,"class","spacer svelte-g3b95c"),o(u,"class","main_heading svelte-g3b95c"),o(h,"id","Education"),o(h,"class","spacer svelte-g3b95c"),o(_,"class","main_heading svelte-g3b95c"),o(k,"class","spacer svelte-g3b95c"),o(z,"id","Projects"),o(z,"class","spacer svelte-g3b95c"),o(q,"class","main_heading svelte-g3b95c"),o(e,"id","main")},m(b,ie){P(b,e,ie),I(n,e,null),i(e,r),I(l,e,null),i(e,s),i(e,a),i(e,d),i(e,u),i(e,c),I(p,e,null),i(e,m),i(e,h),i(e,w),i(e,_),i(e,$),I(x,e,null),i(e,v),i(e,k),i(e,F),I(N,e,null),i(e,H),i(e,z),i(e,se),i(e,q),i(e,Q),I(L,e,null),R=!0,ee||(O=[we(t[1].call(null,a)),we(t[1].call(null,h)),we(t[1].call(null,z))],ee=!0)},p(b,[ie]){const te={};l.$set(te)},i(b){R||(E(n.$$.fragment,b),E(l.$$.fragment,b),E(p.$$.fragment,b),E(x.$$.fragment,b),E(N.$$.fragment,b),E(L.$$.fragment,b),R=!0)},o(b){M(n.$$.fragment,b),M(l.$$.fragment,b),M(p.$$.fragment,b),M(x.$$.fragment,b),M(N.$$.fragment,b),M(L.$$.fragment,b),R=!1},d(b){b&&j(e),D(n),t[2](null),D(l),D(p),D(x),D(N),D(L),ee=!1,Y(O)}}}function Kt(t,e,n){let r;function l(a){new IntersectionObserver(u=>{u[0].isIntersecting&&(console.log(a.id),r.setState(a.id))}).observe(a)}function s(a){Ee[a?"unshift":"push"](()=>{r=a,n(0,r)})}return[r,l,s]}class Qt extends B{constructor(e){super(),W(this,e,Kt,Bt,J,{})}}new Qt({target:document.getElementById("app")});

const rn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};rn();function E(){}function Re(n){return n()}function qe(){return Object.create(null)}function P(n){n.forEach(Re)}function Ue(n){return typeof n=="function"}function Xe(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function sn(n){return Object.keys(n).length===0}function Fe(n){return n&&Ue(n.destroy)?n.destroy:E}function e(n,t){n.appendChild(t)}function Ye(n,t,o){n.insertBefore(t,o||null)}function zt(n){n.parentNode.removeChild(n)}function l(n){return document.createElement(n)}function H(n){return document.createTextNode(n)}function i(){return H(" ")}function N(n,t,o,s){return n.addEventListener(t,o,s),()=>n.removeEventListener(t,o,s)}function u(n,t,o){o==null?n.removeAttribute(t):n.getAttribute(t)!==o&&n.setAttribute(t,o)}function cn(n){return Array.from(n.childNodes)}function Wt(n,t,o,s){o===null?n.style.removeProperty(t):n.style.setProperty(t,o,s?"important":"")}let Bt;function O(n){Bt=n}const A=[],Ke=[],T=[],Qe=[],an=Promise.resolve();let Dt=!1;function un(){Dt||(Dt=!0,an.then(Ze))}function Jt(n){T.push(n)}const Tt=new Set;let M=0;function Ze(){const n=Bt;do{for(;M<A.length;){const t=A[M];M++,O(t),dn(t.$$)}for(O(null),A.length=0,M=0;Ke.length;)Ke.pop()();for(let t=0;t<T.length;t+=1){const o=T[t];Tt.has(o)||(Tt.add(o),o())}T.length=0}while(A.length);for(;Qe.length;)Qe.pop()();Dt=!1,Tt.clear(),O(n)}function dn(n){if(n.fragment!==null){n.update(),P(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Jt)}}const W=new Set;let fn;function tn(n,t){n&&n.i&&(W.delete(n),n.i(t))}function pn(n,t,o,s){if(n&&n.o){if(W.has(n))return;W.add(n),fn.c.push(()=>{W.delete(n),s&&(o&&n.d(1),s())}),n.o(t)}else s&&s()}function mn(n){n&&n.c()}function en(n,t,o,s){const{fragment:r,on_mount:a,on_destroy:f,after_update:x}=n.$$;r&&r.m(t,o),s||Jt(()=>{const d=a.map(Re).filter(Ue);f?f.push(...d):P(d),n.$$.on_mount=[]}),x.forEach(Jt)}function nn(n,t){const o=n.$$;o.fragment!==null&&(P(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function xn(n,t){n.$$.dirty[0]===-1&&(A.push(n),un(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function ln(n,t,o,s,r,a,f,x=[-1]){const d=Bt;O(n);const c=n.$$={fragment:null,ctx:null,props:a,update:E,not_equal:r,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:qe(),dirty:x,skip_bound:!1,root:t.target||d.$$.root};f&&f(c.root);let m=!1;if(c.ctx=o?o(n,t.props||{},(p,g,...S)=>{const y=S.length?S[0]:g;return c.ctx&&r(c.ctx[p],c.ctx[p]=y)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](y),m&&xn(n,p)),g}):[],c.update(),m=!0,P(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const p=cn(t.target);c.fragment&&c.fragment.l(p),p.forEach(zt)}else c.fragment&&c.fragment.c();t.intro&&tn(n.$$.fragment),en(n,t.target,t.anchor,t.customElement),Ze()}O(d)}class on{$destroy(){nn(this,1),this.$destroy=E}$on(t,o){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(o),()=>{const r=s.indexOf(o);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!sn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var hn="/assets/scenic_background.074f5772.jpg";function gn(n){let t,o,s,r,a,f,x,d,c,m;return{c(){t=l("div"),o=l("div"),s=l("div"),r=l("h1"),r.textContent="Welcome to my Website",a=i(),f=l("p"),f.textContent="My name is Jack O'Shea, I'm a developer and this is my portfolio",x=i(),d=l("button"),d.textContent="Learn more",u(r,"class","mb-5 text-5xl font-bold"),u(f,"class","mb-5"),u(d,"class","btn btn-secondary"),u(s,"class","max-w-md"),u(o,"class","hero-content text-center text-neutral-content"),u(t,"class","hero min-w-max h-screen position-fixed top-0 bg-cover"),Wt(t,"background-image","url("+hn+")")},m(p,g){Ye(p,t,g),e(t,o),e(o,s),e(s,r),e(s,a),e(s,f),e(s,x),e(s,d),c||(m=N(d,"click",_n),c=!0)},p:E,i:E,o:E,d(p){p&&zt(t),c=!1,m()}}}function _n(){location.href="#navbar"}class Cn extends on{constructor(t){super(),ln(this,t,null,gn,Xe,{})}}function vn(n){let t,o,s,r,a,f,x,d,c,m,p,g,S,y,_,Gt,L,Vt,D,C,qt,I,Ft,v,Kt,$,Qt,J,Rt,z,Ut,B,Xt,G,Yt,V,Zt,q,te,F,ee,K,ne,Q,le,R,ie,U,oe,X,re,Y,se,Z,ce,tt,ae,et,ue,nt,de,lt,fe,it,pe,ot,me,rt,xe,st,he,ct,ge,at,_e,ut,Ce,dt,ve,ft,be,pt,ye,mt,$e,xt,we,ht,ke,gt,Ee,_t,Se,Ct,je,vt,Ae,bt,Oe,yt,Pe,$t,Le,wt,Ie,kt,Me,Et,He,St,Ne,jt,Te,At,We,Ot,De,Pt,Je,Lt,ze,It,Be,Mt,Ge,Ht,b,Nt,Ve;return o=new Cn({}),{c(){t=l("main"),mn(o.$$.fragment),s=i(),r=l("div"),a=l("div"),a.innerHTML='<a class="btn btn-ghost normal-case text-xl" href="#top">JackOSheaDEV</a>',f=i(),x=l("div"),d=l("ul"),c=l("li"),m=l("a"),p=H("About"),S=i(),y=l("li"),_=l("a"),Gt=H("Education"),Vt=i(),D=l("li"),C=l("a"),qt=H("Projects"),Ft=i(),v=l("div"),v.innerHTML=`<div class="hero-content flex-col lg:flex-row-reverse"><img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" alt="random and shows something"/> 
      <div><h1 class="text-5xl font-bold text-center">About Me:</h1> 

        <div class="mockup-code w-96 m-5"><pre data-prefix="&gt;"><code>Hello! My name is Jack O&#39;Shea.</code></pre> 
          <pre data-prefix="&gt;"><code>I&#39;m a software developer in 2nd year.</code></pre> 
          <pre data-prefix="&gt;"><code>I&#39;m interested in Software Dev,</code></pre> 
          <pre data-prefix="&gt;"><code>Machine Learning and Web Dev.</code></pre></div>  
        
        <div class="mockup-code w-96 m-5"><pre data-prefix="$"><code>vim Skills.txt</code></pre> 
          <pre data-prefix="~"><code><span class="text-green-500">Python</span></code></pre> 
          <pre data-prefix="-"><code>Several projects on Github</code></pre> 
          <pre data-prefix="-"><code>Several projects on Github</code></pre></div></div></div>`,Kt=i(),$=l("h1"),$.textContent="Hello2",Qt=i(),J=l("li"),J.textContent="1",Rt=i(),z=l("li"),z.textContent="1",Ut=i(),B=l("li"),B.textContent="1",Xt=i(),G=l("li"),G.textContent="1",Yt=i(),V=l("li"),V.textContent="1",Zt=i(),q=l("li"),q.textContent="1",te=i(),F=l("li"),F.textContent="1",ee=i(),K=l("li"),K.textContent="1",ne=i(),Q=l("li"),Q.textContent="1",le=i(),R=l("li"),R.textContent="1",ie=i(),U=l("li"),U.textContent="1",oe=i(),X=l("li"),X.textContent="1",re=i(),Y=l("li"),Y.textContent="1",se=i(),Z=l("li"),Z.textContent="1",ce=i(),tt=l("li"),tt.textContent="1",ae=i(),et=l("li"),et.textContent="1",ue=i(),nt=l("li"),nt.textContent="1",de=i(),lt=l("li"),lt.textContent="1",fe=i(),it=l("li"),it.textContent="1",pe=i(),ot=l("li"),ot.textContent="1",me=i(),rt=l("li"),rt.textContent="1",xe=i(),st=l("li"),st.textContent="1",he=i(),ct=l("li"),ct.textContent="1",ge=i(),at=l("li"),at.textContent="1",_e=i(),ut=l("li"),ut.textContent="1",Ce=i(),dt=l("li"),dt.textContent="1",ve=i(),ft=l("li"),ft.textContent="1",be=i(),pt=l("li"),pt.textContent="1",ye=i(),mt=l("li"),mt.textContent="1",$e=i(),xt=l("li"),xt.textContent="1",we=i(),ht=l("li"),ht.textContent="1",ke=i(),gt=l("li"),gt.textContent="1",Ee=i(),_t=l("li"),_t.textContent="1",Se=i(),Ct=l("li"),Ct.textContent="1",je=i(),vt=l("li"),vt.textContent="1",Ae=i(),bt=l("li"),bt.textContent="1",Oe=i(),yt=l("li"),yt.textContent="1",Pe=i(),$t=l("li"),$t.textContent="1",Le=i(),wt=l("li"),wt.textContent="1",Ie=i(),kt=l("li"),kt.textContent="1",Me=i(),Et=l("li"),Et.textContent="1",He=i(),St=l("li"),St.textContent="1",Ne=i(),jt=l("li"),jt.textContent="1",Te=i(),At=l("li"),At.textContent="1",We=i(),Ot=l("li"),Ot.textContent="1",De=i(),Pt=l("li"),Pt.textContent="1",Je=i(),Lt=l("li"),Lt.textContent="1",ze=i(),It=l("li"),It.textContent="1",Be=i(),Mt=l("li"),Mt.textContent="1",Ge=i(),Ht=l("li"),Ht.textContent="1",u(a,"class","flex-1"),u(m,"class",g=n[0].About===!0?k:w),u(m,"href","#About"),u(_,"class",L=n[0].Education===!0?k:w),u(_,"href","#Education"),u(C,"class",I=n[0].Projects===!0?k:w),u(C,"href","#Projects"),u(d,"class","menu menu-horizontal p-0"),u(x,"class","flex-none"),u(r,"id","navbar"),u(r,"class","navbar bg-base-100 sticky top-0 z-40"),Wt(v,"padding-top","70px"),u(v,"id","About"),u(v,"class","hero min-w-max min-h-screen bg-base-200"),Wt($,"padding-top","70px"),u($,"id","Education"),u(t,"id","main")},m(h,j){Ye(h,t,j),en(o,t,null),e(t,s),e(t,r),e(r,a),e(r,f),e(r,x),e(x,d),e(d,c),e(c,m),e(m,p),e(d,S),e(d,y),e(y,_),e(_,Gt),e(d,Vt),e(d,D),e(D,C),e(C,qt),e(t,Ft),e(t,v),e(t,Kt),e(t,$),e(t,Qt),e(t,J),e(t,Rt),e(t,z),e(t,Ut),e(t,B),e(t,Xt),e(t,G),e(t,Yt),e(t,V),e(t,Zt),e(t,q),e(t,te),e(t,F),e(t,ee),e(t,K),e(t,ne),e(t,Q),e(t,le),e(t,R),e(t,ie),e(t,U),e(t,oe),e(t,X),e(t,re),e(t,Y),e(t,se),e(t,Z),e(t,ce),e(t,tt),e(t,ae),e(t,et),e(t,ue),e(t,nt),e(t,de),e(t,lt),e(t,fe),e(t,it),e(t,pe),e(t,ot),e(t,me),e(t,rt),e(t,xe),e(t,st),e(t,he),e(t,ct),e(t,ge),e(t,at),e(t,_e),e(t,ut),e(t,Ce),e(t,dt),e(t,ve),e(t,ft),e(t,be),e(t,pt),e(t,ye),e(t,mt),e(t,$e),e(t,xt),e(t,we),e(t,ht),e(t,ke),e(t,gt),e(t,Ee),e(t,_t),e(t,Se),e(t,Ct),e(t,je),e(t,vt),e(t,Ae),e(t,bt),e(t,Oe),e(t,yt),e(t,Pe),e(t,$t),e(t,Le),e(t,wt),e(t,Ie),e(t,kt),e(t,Me),e(t,Et),e(t,He),e(t,St),e(t,Ne),e(t,jt),e(t,Te),e(t,At),e(t,We),e(t,Ot),e(t,De),e(t,Pt),e(t,Je),e(t,Lt),e(t,ze),e(t,It),e(t,Be),e(t,Mt),e(t,Ge),e(t,Ht),b=!0,Nt||(Ve=[N(m,"click",n[3]),N(_,"click",n[4]),N(C,"click",n[5]),Fe(n[2].call(null,v)),Fe(n[2].call(null,$))],Nt=!0)},p(h,[j]){(!b||j&1&&g!==(g=h[0].About===!0?k:w))&&u(m,"class",g),(!b||j&1&&L!==(L=h[0].Education===!0?k:w))&&u(_,"class",L),(!b||j&1&&I!==(I=h[0].Projects===!0?k:w))&&u(C,"class",I)},i(h){b||(tn(o.$$.fragment,h),b=!0)},o(h){pn(o.$$.fragment,h),b=!1},d(h){h&&zt(t),nn(o),Nt=!1,P(Ve)}}}let w="text-default-400",k="text-red-400";function bn(n,t,o){let s={About:!1,Education:!1,Projects:!1};function r(c){for(let[m,p]of Object.entries(s))o(0,s[m]=!1,s);o(0,s[c]=!0,s)}function a(c){new IntersectionObserver(p=>{p[0].isIntersecting&&(console.log("Hello"),console.log(c.id),r(c.id))}).observe(c)}return[s,r,a,()=>r("About"),()=>r("Education"),()=>r("Projects")]}class yn extends on{constructor(t){super(),ln(this,t,bn,vn,Xe,{})}}new yn({target:document.getElementById("app")});

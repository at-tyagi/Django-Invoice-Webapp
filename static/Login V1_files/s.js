(function(w,d){zaraz.debug=(bh="")=>{document.cookie=`zarazDebug=${bh}; path=/`;location.reload()};window.zaraz._al=function(dh,di,dj){w.zaraz.listeners.push({item:dh,type:di,callback:dj});dh.addEventListener(di,dj)};zaraz.preview=(dg="")=>{document.cookie=`zarazPreview=${dg}; path=/`;location.reload()};zaraz.i=function(a){const b=d.createElement("div");b.innerHTML=unescape(a);const c=b.querySelectorAll("script");for(let e=0;e<c.length;e++){const f=d.createElement("script");c[e].innerHTML&&(f.innerHTML=c[e].innerHTML);for(const g of c[e].attributes)f.setAttribute(g.name,g.value);d.head.appendChild(f);c[e].remove()}d.body.appendChild(b)};zaraz.f=async function(dL,dM){const dN={credentials:"include",keepalive:!0,mode:"no-cors"};if(dM){dN.method="POST";dN.body=new URLSearchParams(dM);dN.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(dL,dN)};!function(bi,bj,bk,bl,bm,bn){function bo(bq,br){bn?bl(bq,br||32):bm.push(bq,br)}function bp(bs,bt,bu,bv){return bt&&bj.getElementById(bt)||(bv=bj.createElement(bs||"SCRIPT"),bt&&(bv.id=bt),bu&&(bv.onload=bu),bj.head.appendChild(bv)),bv||{}}bn=/p/.test(bj.readyState),bi.addEventListener("on"+bk in bi?bk:"load",(function(){for(bn=1;bm[0];)bo(bm.shift(),bm.shift())})),bo._=bp,bi.defer=bo,bi.deferscript=function(bw,bx,by,bz){bo((function(){bp("",bx,bz).src=bw}),by)}}(this,d,"pageshow",setTimeout,[]);defer((function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()();Object.defineProperty(zaraz.deferred,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...bA){let bB=Array.prototype.push.apply(this,bA);for(;zaraz.deferred.length;)zaraz.deferred.pop()();return bB}})}),5500);addEventListener("visibilitychange",(function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()()}));window.zaraz._p=async dF=>new Promise((dG=>{if(dF){dF.e&&dF.e.forEach((dH=>{try{new Function(dH)()}catch(dI){console.error(`Error executing script: ${dH}\n`,dI)}}));Promise.allSettled((dF.f||[]).map((dJ=>fetch(dJ[0],dJ[1]))))}dG()}));zaraz.pageVariables={};zaraz.__zcl={};zaraz.track=async function(eJ,eK,eL){return new Promise(((eM,eN)=>{const eO={name:eJ,data:{}};for(const eP of[localStorage,sessionStorage])Object.keys(eP||{}).filter((eR=>eR.startsWith("_zaraz_"))).forEach((eQ=>{try{eO.data[eQ.slice(7)]=JSON.parse(eP.getItem(eQ))}catch{eO.data[eQ.slice(7)]=eP.getItem(eQ)}}));Object.keys(zaraz.pageVariables).forEach((eS=>eO.data[eS]=JSON.parse(zaraz.pageVariables[eS])));Object.keys(zaraz.__zcl).forEach((eT=>eO.data[`__zcl_${eT}`]=zaraz.__zcl[eT]));eO.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
eO.data={...eO.data,...eK};eO.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(eO)}).catch((()=>{
//
return fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(eO)})})).then((function(eV){zarazData._let=(new Date).getTime();eV.ok||eN();return 204!==eV.status&&eV.json()})).then((async eU=>{await zaraz._p(eU);"function"==typeof eL&&eL()})).finally((()=>eM()))}))};zaraz.set=function(eW,eX,eY){try{eX=JSON.stringify(eX)}catch(eZ){return}prefixedKey="_zaraz_"+eW;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[eW];if(void 0!==eX){eY&&"session"==eY.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,eX):eY&&"page"==eY.scope?zaraz.pageVariables[eW]=eX:localStorage&&localStorage.setItem(prefixedKey,eX);zaraz.__watchVar={key:eW,value:eX}}};for(const{m:e_,a:fa}of zarazData.q.filter((({m:fb})=>["debug","set"].includes(fb))))zaraz[e_](...fa);for(const{m:fc,a:fd}of zaraz.q)zaraz[fc](...fd);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(B,C,D,E){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[B]||(zaraz.__zarazTriggerMap[B]="");zaraz.__zarazTriggerMap[B]+="*"+C+"*";zaraz.track("__zarazEmpty",{...D,__zarazClientTriggers:zaraz.__zarazTriggerMap[B]},E)};window.dataLayer=w.dataLayer||[];zaraz._processDataLayer=bG=>{for(const bH of Object.entries(bG))zaraz.set(bH[0],bH[1],{scope:"page"});if(bG.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(bG.event))return;let bI={};for(let bJ of dataLayer.slice(0,dataLayer.indexOf(bG)+1))bI={...bI,...bJ};delete bI.event;bG.event.startsWith("gtm.")||zaraz.track(bG.event,bI)}};const bF=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...bK){let bL=bF.apply(this,bK);zaraz._processDataLayer(bK[0]);return bL}});dataLayer.forEach((bM=>zaraz._processDataLayer(bM)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((bW=>clearTimeout(bW)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((bX=>bX.item.removeEventListener(bX.type,bX.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=cg=>{const{event:ch,...ci}=cg;zaraz.track(ch,{...ci,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(dK=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.__zarazMCListeners={"google-analytics_v4_20ac":["visibilityChange"]};zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","x=new XMLHttpRequest,x.withCredentials=!0,x.open(\"POST\",\"https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=0ae36234-54d2-4cb7-8e82-33f9c6e455cb&_u=KGDAAEADQAAAAC%7E&z=2075000698\",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith(\"1g\") && domain.length > 2) {fetch(\"https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=0ae36234-54d2-4cb7-8e82-33f9c6e455cb&_u=KGDAAEADQAAAAC%7E&z=2075000698&slf_rd=1\".replace(\"www.google.com\", \"www.google.\"+domain.slice(2)));}}},x.send();"],"f":[["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=0ae36234-54d2-4cb7-8e82-33f9c6e455cb&_u=KGDAAEADQAAAAC%7E&z=2075000698&slf_rd=1",{}]]})})(window,document);
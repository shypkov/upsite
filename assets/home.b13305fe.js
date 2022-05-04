import{u as e,l as a,s as t,a as l,f as o,b as n,c as s,d as i,e as r,g as c,_ as u,h as d,i as v,j as p,k as f,m,n as k}from"./index.34297de3.js";import{H as g,r as y,i as h,a8 as b,P as _,a9 as w,aa as x,ab as S,h as q,w as L,ac as C,$ as F,a2 as A,ad as O,a4 as P,_ as D,a5 as B,ae as T,af as N,a7 as W,Z as I,B as V,ag as E,ah as U,ai as K,a0 as M,a6 as H,aj as z,x as j,S as R,ak as $,al as X,q as Y,am as Z}from"./vendor.fa2e8fc2.js";import{C as G,a as J,E as Q,S as ee}from"./Epoch.5cc7ee9c.js";function ae(){const a=e(),{notify:t}=g(),l=y(!1);return{monitorTransaction:async function(e,{onSuccess:o,onError:n}={}){let s=t({progress:!0,type:"ongoing",message:"Sending transaction...",timeout:15e3});l.value=!0;let i="";try{i=String(await e)}catch(u){return t({caption:u.message,type:"negative",timeout:5e3}),l.value=!1,s()}const r={label:"Explore",color:"white",target:"_blank",type:"a",href:`https://explorer.solana.com/tx/${i}?cluster=${a.cluster}`},c={label:"Close",color:"white",type:"a"};try{s(),s=t({progress:!0,type:"ongoing",message:"Confirming transaction...",actions:[r],timeout:3e4});const e=await a.connection.confirmTransaction(i);if(s(),e.value.err)throw console.error(e.value.err),new Error(JSON.stringify(e.value.err));s=t({message:"Transaction confirmed",type:"positive",actions:[r]}),o&&o(i)}catch(u){s(),t({message:"Transaction error",caption:u.message,type:"negative",timeout:0,actions:[r,c]}),n&&n(u),console.error(u)}finally{l.value=!1}},sending:l}}function te(){const r=e(),c=n(),u=s(),{wallet:d,connected:v}=q(u),{monitorTransaction:p,sending:f}=ae(),{nativeBalance:m,hasTokenAccount:k}=q(i()),{notify:x}=g(),S=y(!1),L=y(!1),C=h((()=>{var e,a;return null!=(a=null==(e=c.stakePool)?void 0:e.totalLamports.toNumber())?a:0})),F=h((()=>Math.max(0,l(r.stakeLimit)-C.value)));return{stakeSuccessDialog:L,depositFee:h((()=>2*c.lamportsPerSignature+(k.value?0:c.minRentBalance))),depositing:h((()=>S.value||f.value)),depositStake:async e=>{var l,o,n,s,i;try{const c=null==(i=null==(s=null==(n=null==(o=null==(l=e.account.data)?void 0:l.parsed)?void 0:o.info)?void 0:n.stake)?void 0:s.delegation)?void 0:i.voter;if(!c)throw new Error("Wrong stake account state, must be delegated to validator");const{rentFee:u,instructions:v,signers:f}=await b(r.connection,r.stakePoolAddress,d.value.publicKey,new _(c),e.pubkey);if(m.value<u)throw new Error(`Insufficient balance, at least ${a(u)} SOL are required.`);return await p(t(r.connection,d.value,v,f)),!0}catch(c){throw x({message:c.message,type:"negative"}),c}finally{S.value=!1}},depositSol:async(e=1)=>{if(!v.value)return!1;try{const n=l(e);if(r.stakeLimit>0&&n>F.value)throw new Error(`Stake limit is reached. Available to stake ${o(F.value)} SOL`);S.value=!0;const{rentFee:s,instructions:i,signers:c}=await w(r.connection,r.stakePoolAddress,d.value.publicKey,n);if(m.value<s)throw new Error(`Insufficient balance, at least ${a(s)} SOL are required.`);return await p(t(r.connection,d.value,i,c),{onSuccess:()=>L.value=!0}),!0}catch(n){throw x({message:n.message,type:"negative"}),n}finally{S.value=!1}}}}function le(){const{notify:a}=g(),{monitorTransaction:o,sending:i}=ae(),u=e(),d=n(),{wallet:v,connected:p}=q(s()),{epochInfo:f}=q(r()),m=h((()=>d.stakePool)),k=h((()=>d.reserveStakeBalance)),b=y(!1),_=y(!0),w=y(!1),F=y(0);return L(C(F,50),(async e=>{var a;if(null==(a=m.value)?void 0:a.reserveStake){const a=l(e);if(k.value>a)return void(_.value=!0)}_.value=!1})),{amount:F,useWithdrawSol:_,setAmount:e=>F.value=Number(e),useReserve:(e=!0)=>b.value=e,withdrawFee:h((()=>3*d.lamportsPerSignature)),withdrawSolFee:h((()=>2*d.lamportsPerSignature)),withdrawing:h((()=>w.value||i.value)),withdraw:async(e=!1)=>{var l;if(!p.value)throw new Error("Wallet not connected");if(F.value<=0)return!1;try{if(w.value=!0,_.value&&!e){console.log("------------------------"),console.log("|- WITHDRAW SOL"),console.log("------------------------");const{instructions:e,signers:a}=await x(u.connection,u.stakePoolAddress,v.value.publicKey,v.value.publicKey,F.value);return await o(t(u.connection,v.value,e,a)),!0}const{instructions:a,signers:n}=await S(u.connection,u.stakePoolAddress,v.value.publicKey,F.value,b.value,void 0,void 0,void 0,(null==(l=f.value)?void 0:l.epoch)?await async function(e){if(!e)return;try{const a=await c(e);if(a.validators.length>0){const e=a.validators.reduce(((e,a)=>(e[a.vote]=a.apy,e)),{});return console.log("Use APY Comparator"),(a,t)=>{var l,o;const n=null==(l=a.voteAddress)?void 0:l.toBase58(),s=null==(o=t.voteAddress)?void 0:o.toBase58();if(!n||!s)return 0;return parseFloat(String(e[n]))-parseFloat(String(e[s]))}}}catch(a){console.log("Error:",a)}}(f.value.epoch):void 0);return await o(t(u.connection,v.value,a,n)),!0}catch(n){throw a({message:n.message,type:"negative"}),n}finally{w.value=!1}}}}const oe={key:0,class:"connection-lost"};var ne=u({setup(){const{connectionLost:e}=q(n()),a=y(!0);return setTimeout((()=>a.value=!1),3e3),{connectionLost:e,forceHidden:a}}},[["render",function(e,a,t,l,o,n){return l.connectionLost&&!l.forceHidden?(F(),A("div",oe," Solana network overloaded. Data currently unavailable. ")):O("",!0)}],["__scopeId","data-v-4a986ca1"]]);const se={},ie={width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re=[P("path",{d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",fill:"#1CE4B0"},null,-1),P("path",{d:"M26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15Z",fill:"white"},null,-1),P("path",{d:"M11.4255 16.3333L9.18018 12.9167H10.4969L12.0353 15.5L13.5738 12.9167H14.8904L12.6451 16.3333L15.0706 19.8611H13.7401L12.0353 17.0833L10.3305 19.8611H9L11.4255 16.3333Z",fill:"#005B44"},null,-1),P("path",{d:"M18.84 20C18.2116 20 17.6203 19.8657 17.0659 19.5972C16.5207 19.3287 16.0818 18.9583 15.7492 18.4861L16.5254 17.7083C16.8118 18.0787 17.1722 18.3796 17.6064 18.6111C18.0407 18.8333 18.4704 18.9444 18.8954 18.9444C19.4405 18.9444 19.8794 18.8056 20.2121 18.5278C20.554 18.25 20.7249 17.8843 20.7249 17.4306C20.7249 17.1343 20.6648 16.875 20.5447 16.6528C20.4338 16.4306 20.2352 16.2176 19.9487 16.0139C19.6715 15.8009 19.2742 15.5694 18.7568 15.3194C17.7681 14.838 17.0705 14.3843 16.664 13.9583C16.2666 13.5231 16.068 13.0185 16.068 12.4444C16.068 11.7037 16.3359 11.1111 16.8719 10.6667C17.4078 10.2222 18.1192 10 19.0063 10C19.6253 10 20.189 10.1343 20.6972 10.4028C21.2146 10.6713 21.5888 11.0324 21.8198 11.4861L20.9882 12.0972C20.7665 11.7731 20.48 11.5185 20.1289 11.3333C19.7778 11.1481 19.4082 11.0556 19.0201 11.0556C18.5027 11.0556 18.0915 11.1806 17.7866 11.4306C17.4909 11.6713 17.3431 12 17.3431 12.4167C17.3431 12.6667 17.3985 12.8796 17.5094 13.0556C17.6203 13.2315 17.8236 13.4167 18.1192 13.6111C18.4242 13.7963 18.9 14.0509 19.5468 14.375C20.4246 14.8102 21.0529 15.2593 21.4317 15.7222C21.8106 16.1759 22 16.713 22 17.3333C22 17.8611 21.866 18.3287 21.5981 18.7361C21.3393 19.1343 20.9698 19.4444 20.4893 19.6667C20.018 19.8889 19.4683 20 18.84 20Z",fill:"#005B44"},null,-1)];var ce=u(se,[["render",function(e,a){return F(),A("svg",ie,re)}]]);const ue="undefined"==typeof window,de=new Map;let ve;function pe(e,a){let t=[];return Array.isArray(a.arg)?t=a.arg:t.push(a.arg),function(l,o){const n=a.instance.popperRef,s=l.target,i=o.target,r=!a||!a.instance,c=!s||!i,u=e.contains(s)||e.contains(i),d=e===s,v=t.length&&t.some((e=>null==e?void 0:e.contains(s)))||t.length&&t.includes(i),p=n&&(n.contains(s)||n.contains(i));r||c||u||d||v||p||a.value()}}ue||(document.addEventListener("mousedown",(e=>ve=e),!1),document.addEventListener("mouseup",(e=>{for(const{documentHandler:a}of de.values())a(e,ve)}),!1));const fe={beforeMount(e,a){de.set(e,{documentHandler:pe(e,a),bindingFn:a.value})},updated(e,a){de.set(e,{documentHandler:pe(e,a),bindingFn:a.value})},unmounted(e){de.delete(e)}};const me={props:{selected:{type:Boolean,required:!0}},setup(){const{apy:e,apyLoading:a}=q(d());return{apyLoading:a,apy:h((()=>v.format(e.value)))}}},ke=W(" APY "),ge={class:"apy__value"};var ye="/assets/sol-logo.4f589868.svg";const he=I({components:{TokenSvg:ce,ConnectWallet:G,Apy:u(me,[["render",function(e,a,t,l,o,n){const s=D("q-inner-loading");return F(),A("div",{class:N(["apy",{"apy--selected":t.selected}])},[ke,P("div",ge,"≈"+B(l.apy),1),T(s,{showing:l.apyLoading},null,8,["showing"])],2)}],["__scopeId","data-v-514c8bfe"]])},directives:{clickOutside:fe},setup(){const{notify:t}=g(),l=n(),r=e(),c=s(),u=i(),f=p(),{depositFee:m,depositing:k,depositSol:b}=te(),{withdrawFee:_,withdrawing:w,setAmount:x,withdraw:S,useWithdrawSol:C}=le(),{apy:F}=q(d()),A=h((()=>r.cluster)),O=h((()=>c.connected)),P=h((()=>u.solBalance)),D=h((()=>u.tokenBalance)),B=h((()=>l.fees)),T=h((()=>l.exchangeRate)),N=h((()=>l.connectionLost)),W=V({from:null,to:null,factor:0}),I=V({from:null,to:null}),K=y("stake"),M=y(null),H=y(null);E((()=>{U((()=>{M.value&&M.value.focus()}))}));const z=h((()=>{const e=Number(W.from);if(e<=0)return 0;let t=(e-a(m.value))*T.value;return t-=t*B.value.solDepositFee,t>0?t:0})),j=h((()=>{const e=Number(I.from);if(e<=0)return 0;let t=(e-a(_.value))*(1/T.value);return t-=t*(C.value?B.value.solWithdrawalFee:B.value.withdrawalFee),t>0?t:0}));L((()=>W.from),(()=>{W.from?W.to=z.value>0?z.value.toFixed(5):0:W.to=null})),L(j,(()=>{I.from?(x(I.from),I.to=j.value>0?j.value.toFixed(5):0):I.to=null}));const R=y(0);L(R,(()=>{const e=P.value*R.value;W.from=e?o(e/100):e}));const $=y(0);L($,(()=>{const e=D.value*$.value;I.from=e?o(e/100):e}));const X=y(!0);return{tab:K,stake:W,unstake:I,cluster:A,connected:O,depositing:k,withdrawing:w,stakeFromInput:M,unstakeFromInput:H,stakePercent:R,unstakePercent:$,connectionLost:N,useWithdrawSol:C,apy:h((()=>v.format(F.value))),availableSol:h((()=>P.value?o(P.value):"0")),availableXsol:h((()=>D.value?o(D.value):"0")),solDepositFee:h((()=>null==B?void 0:B.value.solDepositFee)),withdrawalFee:h((()=>null==B?void 0:B.value.withdrawalFee)),solToXsolRate:h((()=>1==T.value?1:o(T.value))),xSolToSolRate:h((()=>1==T.value?1:o(1/T.value))),stakeMax(){O.value?W.from=o(P.value):t({message:"Wallet is not connected",caption:"Please connect your wallet"})},unstakeMax(){O.value?I.from=o(D.value):t({message:"Wallet is not connected",caption:"Please connect your wallet"})},stakeHandler:async()=>{var e;z.value<=0?null==(e=M.value)||e.focus():(await b(W.from-a(m.value)),W.from=0,W.to=0)},unstakeHandler:async()=>{var e;j.value<=0?null==(e=H.value)||e.focus():(await S(),I.from=0,I.to=0,f.load())},formatPct:e=>v.format(e),onlyNumber(e){let a=e.keyCode?e.keyCode:e.which;(a<48||a>57)&&46!==a&&e.preventDefault(),46==a&&String(e.target.value).includes(".")&&e.preventDefault()},stakeInfoData:h((()=>{if("stake"===K.value){const e=W.from,t=a(m.value),l=e?(e-t)*T.value:0;return{networkFee:t+" SOL",poolFee:o((l>0?l:0)*B.value.solDepositFee)+" xSOL"}}const e=I.from*(C.value?B.value.solWithdrawalFee:B.value.withdrawalFee);return{networkFee:a(_.value)+" SOL",poolFee:o(e)+" xSOL"}})),highlightFix:X,onFocus(){X.value=!0},onBlur(){X.value=!1}}}}),be={class:"row justify-center"},_e={class:"col"},we={class:"stake-box__title"},xe={key:0,class:"stake-box__warning gt-xs"},Se={class:"stake-box__rate"},qe=P("span",{class:"text-dark"},"1",-1),Le=P("span",null," SOL",-1),Ce=P("span",{class:"q-px-sm"},"≈",-1),Fe={class:"text-dark"},Ae=P("span",null," xSOL",-1),Oe={key:0,class:"stake-box__warning lt-sm"},Pe=W(" MAX "),De=P("img",{alt:"",class:"stake-field__icon",src:ye},null,-1),Be=P("span",{class:"stake-field__symbol"},"SOL",-1),Te=P("span",{class:"stake-field__symbol"},"xSOL",-1),Ne={class:"row items-between"},We={class:"column col-sm-6 col-xs-12 q-pr-sm"},Ie={class:"stake-box__stake-info"},Ve={class:"stake-box__stake-info"},Ee={class:"column justify-between col-sm-6 col-xs-12 q-pl-sm"},Ue=W(" STAKE NOW "),Ke={key:1,class:"text-right"},Me={class:"row justify-center"},He={class:"col"},ze={class:"stake-box__title"},je={key:0,class:"stake-box__warning gt-xs"},Re={class:"stake-box__rate"},$e=P("span",{class:"text-dark"},"1",-1),Xe=P("span",null," xSOL",-1),Ye=P("span",{class:"q-px-sm"},"≈",-1),Ze={class:"text-dark"},Ge=P("span",null," SOL",-1),Je={key:0,class:"stake-box__warning lt-sm"},Qe=W(" MAX "),ea=P("span",{class:"stake-field__symbol"},"xSOL",-1),aa=P("img",{alt:"",class:"stake-field__icon",src:ye},null,-1),ta=P("span",{class:"stake-field__symbol"},"SOL",-1),la={class:"row items-between"},oa={class:"column col-sm-6 col-xs-12 q-pr-sm"},na={class:"stake-box__stake-info"},sa={class:"stake-box__stake-info"},ia={class:"column col-sm-6 col-xs-12 q-pl-sm"},ra=P("div",null,"UNSTAKE NOW",-1);var ca=u(he,[["render",function(e,a,t,l,o,n){const s=D("apy"),i=D("q-tab"),r=D("q-tabs"),c=D("q-card-section"),u=D("q-btn"),d=D("q-input"),v=D("token-svg"),p=D("connect-wallet"),f=D("q-tab-panel"),m=D("q-tab-panels"),k=D("q-card"),g=K("click-outside");return F(),M(k,{class:"stake-box shadow-sm"},{default:H((()=>[T(s,{selected:"stake"===e.tab,onClick:a[0]||(a[0]=()=>e.tab="stake")},null,8,["selected"]),T(r,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=a=>e.tab=a),align:"justify","indicator-color":"transparent","active-bg-color":"primary-gray"},{default:H((()=>[T(i,{ripple:!1,label:"STAKE",name:"stake",disable:e.connectionLost},null,8,["disable"]),T(i,{ripple:!1,label:"UNSTAKE",name:"unstake",disable:e.connectionLost},null,8,["disable"])])),_:1},8,["modelValue"]),T(m,{modelValue:e.tab,"onUpdate:modelValue":a[7]||(a[7]=a=>e.tab=a),animated:"",class:"bg-transparent"},{default:H((()=>[T(f,{name:"stake"},{default:H((()=>[T(c,{class:"top-section"},{default:H((()=>[P("div",be,[P("div",_e,[P("div",we,[W(" Available "+B(e.availableSol),1),e.connected&&Number(e.stake.from)>Number(e.availableSol)?(F(),A("span",xe,"Insufficient funds to run the transaction")):O("",!0)])]),P("div",null,[P("div",Se,[qe,Le,Ce,P("span",Fe,B(e.solToXsolRate),1),Ae])])]),e.connected&&Number(e.stake.from)>Number(e.availableSol)?(F(),A("div",Oe," Insufficient funds to run the transaction ")):O("",!0)])),_:1}),T(c,{class:"with-arrow"},{default:H((()=>[z((F(),M(d,{ref:"stakeFromInput",maxlength:14,modelValue:e.stake.from,"onUpdate:modelValue":a[2]||(a[2]=a=>e.stake.from=a),label:"Amount to stake",class:N(["stake-box__input",{"stake-box__input--highlight-fix":e.highlightFix}]),outlined:"",placeholder:"0.0","stack-label":"",readonly:e.connectionLost,onFocus:e.onFocus,onKeypress:e.onlyNumber},{append:H((()=>[T(u,{dense:"",color:"natural-light-gray","text-color":"primary-gray",unelevated:"",size:"14px",padding:"2px 8px 1px 8px",onClick:e.stakeMax},{default:H((()=>[Pe])),_:1},8,["onClick"]),De,Be])),_:1},8,["modelValue","class","readonly","onFocus","onKeypress"])),[[g,e.onBlur]])])),_:1}),T(c,{class:"stake-to-input"},{default:H((()=>[T(d,{modelValue:e.stake.to,"onUpdate:modelValue":a[3]||(a[3]=a=>e.stake.to=a),label:"xSOL",outlined:"",placeholder:"0.0",class:"stake-box__input-to",readonly:"","stack-label":"","bg-color":"transparent",onKeypress:e.onlyNumber},{append:H((()=>[T(v,{class:"stake-field__icon"}),Te])),_:1},8,["modelValue","onKeypress"])])),_:1}),T(c,null,{default:H((()=>[P("div",Ne,[P("div",We,[P("div",Ie,"Network Fee: "+B(e.stakeInfoData.networkFee),1),P("div",Ve,"Pool Fee: "+B(e.stakeInfoData.poolFee),1)]),P("div",Ee,[e.connected?(F(),M(u,{key:0,loading:e.depositing,class:"stake-box__btn",color:"primary",rounded:"",size:"lg","text-color":"primary-gray",disable:e.connectionLost||Number(e.stake.from)>Number(e.availableSol),onClick:e.stakeHandler},{default:H((()=>[Ue])),_:1},8,["loading","disable","onClick"])):(F(),A("div",Ke,[T(p,{class:"q-px-lg",size:"lg"})]))])])])),_:1})])),_:1}),T(f,{name:"unstake"},{default:H((()=>[T(c,{class:"top-section"},{default:H((()=>[P("div",Me,[P("div",He,[P("div",ze,[W(" Available "+B(e.availableXsol),1),e.connected&&Number(e.unstake.from)>Number(e.availableXsol)?(F(),A("span",je,"Insufficient funds to run the transaction")):O("",!0)])]),P("div",null,[P("div",Re,[$e,Xe,Ye,P("span",Ze,B(e.xSolToSolRate),1),Ge])])]),e.connected&&Number(e.unstake.from)>Number(e.availableXsol)?(F(),A("div",Je," Insufficient funds to run the transaction ")):O("",!0)])),_:1}),T(c,{class:"with-arrow"},{default:H((()=>[T(d,{ref:"unstakeFromInput",maxlength:14,modelValue:e.unstake.from,"onUpdate:modelValue":a[4]||(a[4]=a=>e.unstake.from=a),class:"stake-box__input",label:"Staked xSOL",outlined:"",placeholder:"0.0","stack-label":"",readonly:e.connectionLost,onKeypress:e.onlyNumber},{append:H((()=>[T(u,{dense:"",color:"natural-light-gray","text-color":"primary-gray",unelevated:"",size:"14px",padding:"2px 8px 1px 8px",onClick:e.unstakeMax},{default:H((()=>[Qe])),_:1},8,["onClick"]),T(v,{class:"stake-field__icon"}),ea])),_:1},8,["modelValue","readonly","onKeypress"])])),_:1}),T(c,{class:"stake-to-input"},{default:H((()=>[T(d,{modelValue:e.unstake.to,"onUpdate:modelValue":a[5]||(a[5]=a=>e.unstake.to=a),label:"Amount to unstake",outlined:"",placeholder:"0.0",class:"stake-box__input-to",readonly:"","stack-label":"","bg-color":"transparent"},{append:H((()=>[aa,ta])),_:1},8,["modelValue"])])),_:1}),T(c,null,{default:H((()=>[P("div",la,[P("div",oa,[P("div",na,"Pool Fee: "+B(e.stakeInfoData.poolFee),1),P("div",sa,"Network Fee: "+B(e.stakeInfoData.networkFee),1)]),P("div",ia,[e.connected?(F(),M(u,{key:0,loading:e.withdrawing,class:"stake-box__btn",color:"primary",rounded:"",size:"lg","text-color":"primary-gray",disable:e.connectionLost||Number(e.unstake.from)>Number(e.availableXsol),onClick:a[6]||(a[6]=a=>e.unstakeHandler(!1))},{default:H((()=>[ra])),_:1},8,["loading","disable"])):(F(),M(p,{key:1,class:"q-px-lg",size:"lg"}))])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}]]);const ua=I({components:{CopyToClipboard:J},props:{stakeAccount:{type:Object,required:!0}},setup(t,{emit:l}){const{connection:n}=q(e()),s=y(),i=y(!0);return j((async()=>{i.value=!0,s.value=await n.value.getStakeActivation(t.stakeAccount.pubkey),i.value=!1})),{address:h((()=>t.stakeAccount.pubkey.toBase58())),shortAddress:h((()=>f(t.stakeAccount.pubkey.toBase58()))),amount:h((()=>{var e,l,n;return o(a(null!=(n=null==(l=null==(e=t.stakeAccount)?void 0:e.account)?void 0:l.lamports)?n:0))})),lamports:h((()=>{var e,a;return null==(a=null==(e=t.stakeAccount)?void 0:e.account)?void 0:a.lamports})),state:h((()=>{var e;return null==(e=s.value)?void 0:e.state})),stateColor:h((()=>{var e;switch(null==(e=s.value)?void 0:e.state){case"active":return"positive";case"inactive":return"negative";default:return"grey"}})),loading:i,deactivate(e){l("deactivate",e)},withdraw(e,a){l("withdraw",e,a)}}}}),da={class:"q-mx-sm"},va=W(" DEACTIVATE "),pa=W(" WITHDRAW ");const fa=I({components:{StakeAccountItem:u(ua,[["render",function(e,a,t,l,o,n){const s=D("copy-to-clipboard"),i=D("q-badge"),r=D("q-item-label"),c=D("q-item-section"),u=D("q-btn"),d=D("q-spinner"),v=D("q-inner-loading"),p=D("q-item");return F(),M(p,null,{default:H((()=>[T(c,null,{default:H((()=>[T(r,{class:"items-center"},{default:H((()=>[T(s,{text:e.address},null,8,["text"]),P("span",da,B(e.shortAddress),1),T(i,{color:e.stateColor},{default:H((()=>[W(B(e.state),1)])),_:1},8,["color"])])),_:1}),T(r,{caption:""},{default:H((()=>[W(B(e.amount)+" SOL ",1)])),_:1})])),_:1}),T(c,{side:""},{default:H((()=>["active"===e.state?(F(),M(u,{key:0,color:"accent",rounded:"",style:{width:"120px"},unelevated:"",onClick:a[0]||(a[0]=a=>e.deactivate(e.address))},{default:H((()=>[va])),_:1})):(F(),M(u,{key:1,disabled:"deactivating"===e.state,color:"primary",rounded:"",style:{width:"120px"},unelevated:"",onClick:a[1]||(a[1]=a=>e.withdraw(e.address,e.lamports))},{default:H((()=>[pa])),_:1},8,["disabled"]))])),_:1}),T(v,{showing:e.loading},{default:H((()=>[T(d,{color:"primary"})])),_:1},8,["showing"])])),_:1})}]])},props:{voter:{type:String,required:!1}},emits:["beforeDeposit","afterDeposit","beforeDeactivate","afterDeactivate","beforeWithdraw","afterWithdraw"],setup(a,{emit:l}){const o=e(),{wallet:n}=q(s()),i=p(),{monitorTransaction:r}=ae(),{depositStake:c}=te(),u=h((()=>i.dialog)),d=h((()=>i.loading)),v=y();return{dialog:u,loading:d,loadingPubkey:v,accounts:h((()=>a.voter?i.data.filter((e=>{var t,l,o,n,s;return(null==(s=null==(n=null==(o=null==(l=null==(t=e.account.data)?void 0:t.parsed)?void 0:l.info)?void 0:o.stake)?void 0:n.delegation)?void 0:s.voter)==a.voter})):i.data)),updateDialog:e=>i.dialog=e,deposit:async e=>{l("beforeDeposit"),v.value=e.pubkey.toBase58(),await c(e),v.value=null,await i.load(),l("afterDeposit")},deactivate:async e=>{l("beforeDeactivate"),v.value=e,await r(t(o.connection,n.value,R.deactivate({stakePubkey:new _(e),authorizedPubkey:n.value.publicKey}).instructions,[])),v.value=null,await i.load(),l("afterDeactivate")},withdraw:async(e,a)=>{l("beforeWithdraw"),v.value=e,await r(t(o.connection,n.value,R.withdraw({stakePubkey:new _(e),authorizedPubkey:n.value.publicKey,toPubkey:n.value.publicKey,lamports:a}).instructions,[])),v.value=null,await i.load(),l("afterWithdraw")},evaClose:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"}}}),ma=P("div",{class:"text-h6 text-center"},"Stake Accounts",-1),ka={key:1,class:"flex flex-center q-pa-lg"},ga=[W(" Your stake accounts will be shown here. "),P("br",null,null,-1),W(" You don't have any valid stake accounts. ")];const ya=I({components:{StakeAccountsDialog:u(fa,[["render",function(e,a,t,l,o,n){const s=D("q-spinner"),i=D("q-card-section"),r=D("q-btn"),c=D("q-separator"),u=D("stake-account-item"),d=D("q-list"),v=D("q-card"),p=D("q-dialog");return F(),M(p,{modelValue:e.dialog,"onUpdate:modelValue":[a[1]||(a[1]=a=>e.dialog=a),e.updateDialog]},{default:H((()=>[T(v,null,{default:H((()=>[e.loading?(F(),M(i,{key:0,class:"flex flex-center"},{default:H((()=>[T(s,{size:"md"})])),_:1})):(F(),A($,{key:1},[T(i,{class:"relative-position"},{default:H((()=>[ma,T(r,{padding:"md",color:"transparent","text-color":"primary-gray",unelevated:"",class:"absolute-right",icon:e.evaClose,size:"md",onClick:a[0]||(a[0]=a=>e.updateDialog(!1))},null,8,["icon"])])),_:1}),T(c),T(i,null,{default:H((()=>[e.accounts.length>0?(F(),M(d,{key:0,separator:"",style:{width:"500px"}},{default:H((()=>[(F(!0),A($,null,X(e.accounts,(a=>(F(),M(u,{key:a.pubkey,"stake-account":a,loading:a.pubkey.toBase58()===e.loadingPubkey,onDeactivate:e.deactivate,onWithdraw:e.withdraw,onDeposit:e.deposit},null,8,["stake-account","loading","onDeactivate","onWithdraw","onDeposit"])))),128))])),_:1})):(F(),A("div",ka,ga))])),_:1})],64))])),_:1})])),_:1},8,["modelValue","onUpdate:modelValue"])}]]),TokenSvg:ce},setup(){const e=n(),a=i(),t=p(),l=m(),o=Y(a,"solBalance"),s=Y(a,"tokenBalance"),r=Y(t,"stakeSolBalance"),c=Y(t,"dialog"),u=h((()=>l.solPrice*o.value)),d=h((()=>l.solPrice*s.value/e.exchangeRate)),v=h((()=>l.solPrice*r.value));return{solBalance:o,tokenBalance:s,solUsd:u,tokenUsd:d,stackedUsd:v,totalUsd:h((()=>u.value+d.value+v.value)),stakeSolBalance:h((()=>r.value)),formatPrice:e=>k.format(e),formatMoney:e=>function(e){if(null==e||""===e)return"";const a=(e=e.toString()).lastIndexOf(".");let t=a>=0?e.slice(0,a):e,l=a>=0?e.slice(a+1):null;l?(l=l.slice(0,2).replace(/[^0-9]+/g,""),1===l.length&&(l+="0")):l||(l="00"),t=t.replace(/[^0-9]+/g,""),t||(t="0");let o="";for(let n=0;n<t.length;n++)o=0!==n&&n%3==0?t[t.length-n-1]+","+o:t[t.length-n-1]+o;return o+="."+l,o}(e),openDetails(){c.value=!0}}}}),ha=P("div",null,"WALLET",-1),ba={class:"balance__value__usd"},_a=P("img",{alt:"",src:ye},null,-1),wa=P("span",null,"SOL",-1),xa={class:"balance__value__usd"},Sa=P("span",null,"xSOL",-1),qa=P("div",{class:"wallet-balance__staking__title"},"STAKING",-1),La=W(" Details "),Ca={class:"balance__value__usd"},Fa=P("img",{alt:"",src:ye},null,-1),Aa=P("span",null,"SOL",-1);const Oa={components:{WalletBalance:u(ya,[["render",function(e,a,t,l,o,n){const s=D("q-card-section"),i=D("q-item-section"),r=D("q-item-label"),c=D("q-item"),u=D("token-svg"),d=D("q-list"),v=D("q-btn"),p=D("q-card"),f=D("stake-accounts-dialog");return F(),A($,null,[T(p,{class:"wallet-balance"},{default:H((()=>[T(s,{class:"wallet-balance__head"},{default:H((()=>[P("div",null,"$"+B(e.formatMoney(e.totalUsd)),1),ha])),_:1}),T(s,{class:"wallet-balance__body"},{default:H((()=>[T(d,{dense:"",separator:""},{default:H((()=>[T(c,null,{default:H((()=>[T(i,{class:"balance__value"},{default:H((()=>[P("span",null,B(e.formatPrice(e.solBalance)),1),P("span",ba,"$"+B(e.formatMoney(e.solUsd)),1)])),_:1}),T(i,{side:""},{default:H((()=>[T(r,null,{default:H((()=>[_a,wa])),_:1})])),_:1})])),_:1}),T(c,null,{default:H((()=>[T(i,{class:"balance__value"},{default:H((()=>[W(B(e.formatPrice(e.tokenBalance))+" ",1),P("span",xa,"$"+B(e.formatMoney(e.tokenUsd)),1)])),_:1}),T(i,{side:""},{default:H((()=>[T(r,null,{default:H((()=>[T(u),Sa])),_:1})])),_:1})])),_:1})])),_:1}),qa,T(d,{dense:"",separator:""},{default:H((()=>[T(c,null,{default:H((()=>[T(i,{side:""},{default:H((()=>[T(v,{rounded:"",size:"sm",unelevated:"",color:"primary","text-color":"primary-gray",dense:"",class:"q-px-md",onClick:e.openDetails},{default:H((()=>[La])),_:1},8,["onClick"])])),_:1}),T(i,{class:"balance__value"},{default:H((()=>[W(B(e.formatPrice(e.stakeSolBalance))+" ",1),P("span",Ca,"$"+B(e.formatMoney(e.stackedUsd)),1)])),_:1}),T(i,{side:""},{default:H((()=>[T(r,null,{default:H((()=>[Fa,Aa])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),T(f)],64)}]]),Epoch:Q,StakeBox:ca,StackedAndLiquidity:ee},setup(){const e=s();return{connected:h((()=>e.connected))}}},Pa={class:"firstlook-section"},Da={class:"container"},Ba={class:"firstlook__body"},Ta={class:"lt-sm flex"},Na={class:"total-stacked-alter flex justify-center q-mx-auto"},Wa={class:"lt-md flex"},Ia={class:"firstlook__epoch"},Va={class:"row justify-between relative-position"},Ea={key:0,class:"col col-12 col-md-4 q-pr-md firstlook__wallet"},Ua={key:1,class:"firstlook__placeholder"},Ka=[P("img",{alt:"",class:"firstlook__placeholder__icon",src:ye},null,-1)],Ma={class:"col col-12 col-md-8 q-pl-md q-ml-auto firstlook__stake-box"};var Ha=u(Oa,[["render",function(e,a,t,l,o,n){const s=D("stacked-and-liquidity"),i=D("epoch"),r=D("wallet-balance"),c=D("stake-box");return F(),A("section",Pa,[P("div",Da,[P("div",Ba,[P("div",Ta,[P("div",Na,[T(s)])]),P("div",Wa,[P("div",Ia,[T(i)])]),P("div",Va,[l.connected?(F(),A("div",Ea,[T(r)])):(F(),A("div",Ua,Ka)),P("div",Ma,[T(c)])])])])])}]]);const za={},ja={class:"faq-section"},Ra=[Z('<div class="container"><div class="faq-list"><div class="faq-item"><div class="faq-item__title">What is &quot;staking&quot;?</div><div class="faq-item__body"><p> By staking your SOL tokens, you help secure the network and earn rewards while doing so. You can stake by delegating your tokens to validators who process transactions and run the Solana network. </p><p> Read more at <a href="https://docs.solana.com/staking">https://docs.solana.com/staking</a></p></div></div><div class="faq-item"><div class="faq-item__title">What is a Stake Pool?</div><div class="faq-item__body"><p> Here&#39;s what Solana Docs have to say on Stake Pools: &quot;This on-chain program pools together SOL to be staked by a manager, allowing SOL holders to stake and earn rewards without managing stakes. Users deposit SOL in exchange for SPL tokens (staking derivatives) that represent their ownership in the stake pool. The pool manager stakes deposited SOL according to their strategy, perhaps using a variant of an auto-delegation bot as described above. As stakes earn rewards, the pool and pool tokens grow proportionally in value. Finally, pool token holders can send SPL tokens back to the stake pool to redeem SOL, thereby participating in decentralization with much less work required.&quot; </p><p> To put it short: You have all the advantages of direct staking at top efficiency – without the fuss of selecting and carefully watching the validator(s) you stake with. </p><p> Plus, you help improve the Solana network, which increases the value of your SOL! </p></div></div><div class="faq-item"><div class="faq-item__title">What is a xSOL token?</div><div class="faq-item__body"><p> When you delegate your SOL to a Stake Pool, you get xSOL tokens in return. These tokens are your proof of a share ownership in the stake pool, and they can be traded back for SOL at the end of any epoch. </p><p> Obviously, you get more SOL than you staked in the first place, including your APY accrued over the staking period. </p></div></div></div></div>',1)];var $a=u({components:{FaqSection:u(za,[["render",function(e,a){return F(),A("section",ja,Ra)}]]),FirstlookSection:Ha,ConnectionLost:ne}},[["render",function(e,a,t,l,o,n){const s=D("connection-lost"),i=D("firstlook-section"),r=D("faq-section"),c=D("q-page");return F(),M(c,null,{default:H((()=>[T(s),T(i),T(r)])),_:1})}]]);export{$a as default};

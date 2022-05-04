var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,i=(e,t,o)=>(l(e,"symbol"!=typeof t?t+"":t,o),o);import{S as r,m as c,l as u,u as d,a as p,t as m,b as v,s as h,o as g,c as f,d as y,n as w,e as k,T as b,P as A,A as S,E as P,W as _,f as E,L as T,g as j,r as F,h as x,i as I,w as L,j as C,k as M,p as D,q as K,v as N,x as O,y as B,z as W,C as R,B as U,D as V,F as z,G as X,H as Z,I as G,V as Y,J as Q,K as H,M as J,N as q,O as $,Q as ee,R as te,U as oe,X as ne,Y as ae,Z as se,_ as le,$ as ie,a0 as re,a1 as ce}from"./vendor.fa2e8fc2.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const ue=r.programId,de=[{name:"mainnet-beta",url:"https://mainnet.rpcpool.com/",stakePoolAddress:"CtMyWsrUtAwXWiGr9WjHT5fC3p3fgV8cyGpLTo2LJzG1",stakeLimit:15e4},{name:"testnet",url:"https://testnet.rpcpool.com/",stakePoolAddress:"AeuEVJrnL5SwftWzchEfqMkKXPxLcZjrFtShdAZ7FwKy",stakeLimit:1e5},{name:"devnet",url:"https://devnet.rpcpool.com/",stakePoolAddress:"tppks4WDGssiMr14fmAoi1K8hS7YPxEiXVGdbAThyPB",stakeLimit:1e5}],pe=de[0],me=c();function ve(){return me}u.struct([u.publicKey("mint"),u.publicKey("owner"),u.u64("amount"),u.u32("delegateOption"),u.publicKey("delegate"),u.u8("state"),u.u32("isNativeOption"),u.u64("isNative"),u.u64("delegatedAmount"),u.u32("closeAuthorityOption"),u.publicKey("closeAuthority")]),u.struct([u.u32("mintAuthorityOption"),u.publicKey("mintAuthority"),u.u64("supply"),u.u8("decimals"),u.bool("initialized"),u.u32("freezeAuthorityOption"),u.publicKey("freezeAuthority")]);const he=[u.u64("denominator"),u.u64("numerator")];u.struct([u.u8("accountType"),u.publicKey("manager"),u.publicKey("staker"),u.publicKey("stakeDepositAuthority"),u.u8("stakeWithdrawBumpSeed"),u.publicKey("validatorList"),u.publicKey("reserveStake"),u.publicKey("poolMint"),u.publicKey("managerFeeAccount"),u.publicKey("tokenProgramId"),u.u64("totalLamports"),u.u64("poolTokenSupply"),u.u64("lastUpdateEpoch"),u.struct([u.u64("unixTimestamp"),u.u64("epoch"),u.publicKey("custodian")],"lockup"),u.struct(he,"epochFee"),u.option(u.struct(he),"nextEpochFee"),u.option(u.publicKey(),"preferredDepositValidatorVoteAddress"),u.option(u.publicKey(),"preferredWithdrawValidatorVoteAddress"),u.struct(he,"stakeDepositFee"),u.struct(he,"stakeWithdrawalFee"),u.option(u.struct(he),"nextWithdrawalFee"),u.u8("stakeReferralFee"),u.option(u.publicKey(),"solDepositAuthority"),u.struct(he,"solDepositFee"),u.u8("solReferralFee"),u.option(u.publicKey(),"solWithdrawAuthority"),u.struct(he,"solWithdrawalFee"),u.option(u.struct(he),"nextSolWithdrawalFee"),u.u8("lastEpochPoolTokenSupply"),u.u8("lastEpochTotalLamports")]);const ge=u.struct([u.u64("activeStakeLamports"),u.u64("transientStakeLamports"),u.u64("lastUpdateEpoch"),u.u64("transientSeedSuffixStart"),u.u64("transientSeedSuffixEnd"),u.u8("status"),u.publicKey("voteAccountAddress")]);var fe;async function ye(e,t){const{publicKey:o}=await async function(e,t){const[o,n]=await A.findProgramAddress(e,t);return{publicKey:o,nonce:n}}([e.toBuffer(),b.toBuffer(),t.toBuffer()],S);return o}u.struct([u.u8("accountType"),u.u32("maxValidators"),u.vec(ge,"validators")]),fe=d(),p([m({jsonrpc:v("2.0"),id:h(),result:fe}),m({jsonrpc:v("2.0"),id:h(),error:m({code:d(),message:h(),data:g(f())})})]),m({executable:y(),owner:h(),lamports:w(),data:f(),rentEpoch:k(w())});class we extends P{constructor(){super(),i(this,"_handleConnect",((...e)=>{this.emit("connect",...e)})),i(this,"_handleDisconnect",((...e)=>{this.emit("disconnect",...e)})),this.connect=this.connect.bind(this)}get _provider(){var e;if(null==(e=null==window?void 0:window.solana)?void 0:e.isPhantom)return window.solana}get connected(){var e;return(null==(e=this._provider)?void 0:e.isConnected)||!1}get autoApprove(){var e;return(null==(e=this._provider)?void 0:e.autoApprove)||!1}async signAllTransactions(e){return this._provider?this._provider.signAllTransactions(e):e}get publicKey(){var e;return null==(e=this._provider)?void 0:e.publicKey}async signTransaction(e){return this._provider?this._provider.signTransaction(e):e}connect(){var e,t,o;if(this._provider){if(window.solana.isPhantom)return this._provider&&!this._provider.listeners("connect").length&&(null==(e=this._provider)||e.on("connect",this._handleConnect)),this._provider.listeners("disconnect").length||null==(t=this._provider)||t.on("disconnect",this._handleDisconnect),null==(o=this._provider)?void 0:o.connect();this.emit("error",{message:"Phantom Error",description:"Please install Phantom wallet from Chrome "})}}disconnect(){this._provider&&this._provider.disconnect()}}class ke extends P{constructor(){super(),i(this,"_onProcess"),i(this,"autoApprove",!0),i(this,"connected",!1),i(this,"_publicKey"),this._publicKey=null,this._onProcess=!1,this.connect=this.connect.bind(this)}get publicKey(){return this._publicKey}async signTransaction(e){return window.solong.signTransaction(e)}async signAllTransactions(e){const t=[];for(let o=0;o<e.length;o++)t.push(await this.signTransaction(e[o]));return t}connect(){this._onProcess||(void 0!==window.solong?(this._onProcess=!0,window.solong.selectAccount().then((e=>{this._publicKey=new A(e),this.emit("connect",this._publicKey)})).catch((()=>{this.disconnect()})).finally((()=>{this._onProcess=!1}))):this.emit("error",{message:"Solong Extension Error",description:"Please install the Solong Extension and then reload this page."}))}disconnect(){this._publicKey&&(this._publicKey=null,this.emit("disconnect"))}}class be extends P{constructor(){super(),i(this,"_handleConnect",((...e)=>{this.emit("connect",...e)})),i(this,"_handleDisconnect",((...e)=>{var t,o;null==(t=this._provider)||t.off("connect",this._handleConnect),null==(o=this._provider)||o.off("disconnect",this._handleDisconnect),this.emit("disconnect",...e)})),this.connect=this.connect.bind(this)}get _provider(){var e;if(null==(e=null==window?void 0:window.solflare)?void 0:e.isSolflare)return window.solflare}get connected(){var e;return(null==(e=this._provider)?void 0:e.isConnected)||!1}get autoApprove(){var e;return(null==(e=this._provider)?void 0:e.autoApprove)||!1}async signAllTransactions(e){return this._provider?this._provider.signAllTransactions(e):e}get publicKey(){var e;return null==(e=this._provider)?void 0:e.publicKey}async signTransaction(e){return this._provider?this._provider.signTransaction(e):e}connect(){var e,t,o;if(this._provider)return null==(e=this._provider)||e.on("connect",this._handleConnect),null==(t=this._provider)||t.on("disconnect",this._handleDisconnect),null==(o=this._provider)?void 0:o.connect();this.emit("error",{message:"Solflare Extension Error",description:"Please install the Solflare Extension and then reload this page."})}disconnect(){this._provider&&this._provider.disconnect()}}function Ae(e,t=4){return`${e.slice(0,t)}...${e.slice(-t)}`}const Se=[{name:"Solflare Web",url:"https://solflare.com/access-wallet",icon:"/assets/solflare.405a0431.svg"},{name:"Solflare Extension",url:"https://solflare.com/access-wallet",icon:"/assets/solflare.405a0431.svg",getAdapter(){if(void 0!==window.solflare)return new be}},{name:"Sollet Web",url:"https://www.sollet.io",icon:"/assets/sollet.76b54853.svg"},{name:"Sollet Extension",url:"https://www.sollet.io",icon:"/assets/sollet.76b54853.svg",installUrl:"https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno",getAdapter({endpoint:e}){if(void 0!==window.sollet)return new _(window.sollet,e)}},{name:"Solong",url:"https://solongwallet.com",icon:"data:image/png;base64,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",installUrl:"https://chrome.google.com/webstore/detail/solong/memijejgibaodndkimcclfapfladdchj",getAdapter(){if(void 0!==window.solong)return new ke}},{name:"Phantom",url:"https://phantom.app",icon:"/assets/phantom.837deb90.svg",installUrl:"https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa",getAdapter(){if(void 0!==window.solana&&window.solana.isPhantom)return new we}},{name:"Slope",url:"https://slope.finance",icon:"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgZmlsbD0iIzZlNjZmYSIgcj0iNjQiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzUuMTk2MyA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNzMuNTk3IDU0LjM5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtNzMuNTk3IDczLjU5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjc1Ii8+PHBhdGggZD0ibTczLjYwNCA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNTQuMzk2OCAzNS4yIDE5LjItMTkuMnYxOS4ybC0xOS4yIDE5LjJoLTE5LjJ6IiBmaWxsLW9wYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Im03My41OTE1IDkyLjgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMmgxOS4yeiIgZmlsbC1vcGFjaXR5PSIuNCIvPjwvZz48L3N2Zz4=",getAdapter(){if(void 0!==window.Slope)return new E}},{name:"MathWallet",url:"https://mathwallet.org",icon:"/assets/mathwallet.922f2931.svg"}];function Pe(e){if("number"==typeof e)return Math.abs(e)/T;let t=1;e.isNeg()&&(t=-1);const o=e.abs().toString(10).padStart(10,"0"),n=o.length-9,a=o.slice(0,n)+"."+o.slice(n);return t*parseFloat(a)}function _e(e){return isNaN(e)?Number(0):Number(e*T)}const Ee=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),Te=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:5}),je=new Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}),Fe=["","K","M","G","T","P","E"],xe=(e,t=5,o=!0)=>o?((e,t,o=!1)=>{const n=Math.log10(e)/3|0;let a=e;const s=Fe[n];n>0&&(a=e/Math.pow(10,3*n));return isNaN(a)?"":(o?Number(a.toFixed(t)):a.toFixed(t))+("string"==typeof s?s:"")})(e,t):e.toFixed(t),Ie=Symbol(),Le=j("epoch",(()=>{const e=ve(),t=Ke(),o=F(),n=F(0),a=F(0),s=F(550),{stakePoolAddress:l}=x(t),i=I((()=>o.value?(100*o.value.slotIndex/o.value.slotsInEpoch).toFixed(1):100));async function r(){o.value=await t.connection.getEpochInfo()}async function c(){s.value=await async function(e){var t;const o=await e._rpcRequest("getRecentPerformanceSamples",[60]),n=(null!=(t=o.result)?t:[]).filter((e=>0!==e.numSlots)).map((e=>e.samplePeriodSecs/e.numSlots)),a=n.length<60?n.length:60,s=n.reduce(((e,t)=>e+t),0)/a;return Math.round(1e3*s)}(t.connection)}return L(l,(()=>Promise.all([r(),c()])),{immediate:!0}),L(o,(e=>{n.value=e?(e.slotsInEpoch-e.slotIndex)*s.value:0,e&&e.epoch!==a.value&&(a.value=e.epoch)})),C((async()=>{await Promise.all([r(),c()]),e.emit(Ie,o.value),console.log("[Epoch] Info",o.value)}),6e4),C((()=>{const e=n.value-1e3;n.value=Math.max(e,0)}),1e3),{epochInfo:o,epochNumber:a,epochTimeRemaining:n,epochProgress:i}}));const Ce=j("apy",(()=>{var e;const i=Le(),r=Xe(),{epochInfo:c}=x(i),{voteIds:u}=x(r),d=D("apy",{beginTimestamp:0,collectionTimestamp:0,endTimestamp:0,firstEpoch:0,isEstimated:!1,lastEpoch:0,validators:[]}),p=F(),m=F(!(null==(e=d.value)?void 0:e.lastEpoch));return L([c,u],(async()=>{var e,i,r,v,h;if((null==(e=c.value)?void 0:e.epoch)&&(null==u?void 0:u.value.length)>0){if((null==(i=d.value)?void 0:i.lastEpoch)==c.value.epoch)return console.log("[APY] Skip loading..."),void(m.value=!1);console.log("[APY] Loading apy info..."),m.value=!0;try{const e=await Me("prev10");d.value=(v=((e,t)=>{for(var o in t||(t={}))a.call(t,o)&&l(e,o,t[o]);if(n)for(var o of n(t))s.call(t,o)&&l(e,o,t[o]);return e})({},e),h={validators:null!=(r=null==e?void 0:e.validators.filter((e=>null==u?void 0:u.value.includes(e.vote))))?r:[]},t(v,o(h)));{const t=null==e?void 0:e.validators.find((e=>"8BYmtxKY1LuvjesaMi1nkXcj6ghuq48iiGKq2jNpnrNY"==e.id));t&&(p.value=t.apy)}}finally{m.value=!1}}})),{apyInfo:d,apyLoading:I((()=>m.value)),apy:I((()=>{var e,t;const o=null!=(t=null==(e=d.value)?void 0:e.validators)?t:[];if(0==o.length)return.07;if(p.value)return p.value;return o.reduce(((e,t)=>e+t.apy),0)/o.length}))}}));async function Me(e="prev3"){return(await M.get(`https://stakeview.app/apy/${e}.json`)).data}const De=j("balance",(()=>{const e=Ke(),t=Ve(),o=Be(),n=ve(),a=F(0),s=F(!1),l=F(0),i=I((()=>Pe(a.value))),{wallet:r,connected:c}=x(t),u=K(o,"stakePool"),d=N((async function(t){var o;a.value=null!=(o=null==t?void 0:t.lamports)?o:0,console.log(`SOL Balance: ${a.value}`),await async function(){var t;if(null==r.value||!(null==(t=u.value)?void 0:t.poolMint))return;const o=await async function(e,t,o){try{const n=await ye(t,o);return(await e.getTokenAccountBalance(n)).value.uiAmount}catch(n){return null}}(e.connection,r.value.publicKey,u.value.poolMint);s.value=null!==o,l.value=null!=o?o:0,console.log("hasTokenAccount",s.value)}(),console.log(`Token Balance: ${l.value}`)}),300);return n.on(Re,(()=>{a.value=0,l.value=0})),n.on(Ue,d),O((async()=>{var t,o;c.value&&(null==(t=r.value)?void 0:t.publicKey)&&e.connection.getAccountInfo(null==(o=r.value)?void 0:o.publicKey).then(d)})),{hasTokenAccount:s,tokenBalance:l,nativeBalance:a,solBalance:i}}));const Ke=j({id:"connection",state:()=>({commitment:"confirmed",cluster:W("cluster",pe.name)}),getters:{endpoint:e=>de.find((t=>t.name===e.cluster)),connection(e){return new R(this.endpoint.url,e.commitment)},stakePoolAddress(){return this.endpoint?new A(this.endpoint.stakePoolAddress):null},stakeLimit(){var e;return null!=(e=this.endpoint.stakeLimit)?e:0}},actions:{setCluster(e){this.cluster=e},setCommitment(e){this.commitment=e}}});async function Ne(e,t,o,n){if(!(null==t?void 0:t.publicKey))throw new Error("Wallet is not connected");let a=new B({feePayer:t.publicKey});a.add(...o),a.recentBlockhash=(await e.getRecentBlockhash("finalized")).blockhash,n.length>0&&a.partialSign(...n),a=await t.signTransaction(a);const s=a.serialize(),l=await e.sendRawTransaction(s,{skipPreflight:!0,preflightCommitment:"confirmed"});return console.log("TX(signature): ",l.toString()),console.log("TX(base64): ",s.toString("base64")),l}const Oe=j("coin-rate",(()=>{const e=U({solPrice:0,solVol24:0,solChange24:0,solChangePercentage24:0});async function t(){const t=await async function(e="solana",t="usd"){return new Promise(((o,n)=>{fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${t}&ids=${e}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`).then((e=>e.json())).then((e=>{e.length>0?o(e[0]):n(Error("Promise rejected"))}),(e=>{console.error(e)}))}))}();console.log("[CoinRate]",t),e.solPrice=t.current_price,e.solVol24=t.total_volume,e.solChange24=t.price_change_24h,e.solChangePercentage24=t.price_change_percentage_24h_in_currency}return t().then(),setInterval(t,3e5),V(e)})),Be=j("stake-pool",(()=>{const e=Ke(),t=ve(),o=F(),n=F(0),a=F(0),s=F(5e3),l=U({fee:0,feeNext:0,stakeDepositFee:0,solDepositFee:0,withdrawalFee:0,solWithdrawalFee:0,nextStakeWithdrawalFee:0,nextSolWithdrawalFee:0,nextEpochFee:0,solReferralFee:0,stakeReferralFee:0}),i=F(1);async function c(){var t;if(!o.value)return;const n=o.value.reserveStake.toBase58();console.log("Loading reserve stake balance from",n);const s=await e.connection.getAccountInfo(o.value.reserveStake);a.value=null!=(t=null==s?void 0:s.lamports)?t:0,console.log("Reserve Stake Balance:",a.value)}async function u(){try{if(console.log("Loading stake pool info..."),e.stakePoolAddress){const t=await X(e.connection,e.stakePoolAddress);o.value=null==t?void 0:t.account.data,await c()}}catch(t){console.log("Error:",t),o.value=null}}async function d(){n.value=await e.connection.getMinimumBalanceForRentExemption(r.space),console.log("MinimumBalanceForRentExemption:",n.value)}setInterval((async()=>{await u()}),3e4),t.on(Ue,u),L((()=>e.stakePoolAddress),(()=>Promise.all([u(),d()])),{immediate:!0}),L(o,(async e=>{if(!e)return i.value=1,l.fee=0,l.feeNext=0,l.stakeDepositFee=0,l.solDepositFee=0,l.withdrawalFee=0,l.solWithdrawalFee=0,l.nextStakeWithdrawalFee=0,l.nextSolWithdrawalFee=0,l.nextEpochFee=0,l.solReferralFee=0,void(l.stakeReferralFee=0);e.poolTokenSupply.isZero()||e.totalLamports.isZero()?i.value=1:i.value=z(e.poolTokenSupply,e.totalLamports),console.log("sp ======================== ",e),console.log("TotalStakeLamports:",e.totalLamports.toNumber()),console.log("PoolTokenSupply:",e.poolTokenSupply.toNumber()),console.log("ExchangeRate:",i.value),console.log("Fees:",l),l.fee=z(e.epochFee.numerator,e.epochFee.denominator),l.stakeDepositFee=z(e.stakeDepositFee.numerator,e.stakeDepositFee.denominator),l.withdrawalFee=z(e.stakeWithdrawalFee.numerator,e.stakeWithdrawalFee.denominator),l.solWithdrawalFee=z(e.solWithdrawalFee.numerator,e.solWithdrawalFee.denominator),l.solDepositFee=z(e.solDepositFee.numerator,e.solDepositFee.denominator),null!=e.nextEpochFee&&(l.nextEpochFee=z(e.nextEpochFee.numerator,e.nextEpochFee.denominator)),null!=e.nextStakeWithdrawalFee&&(l.nextStakeWithdrawalFee=z(e.stakeWithdrawalFee.numerator,e.stakeWithdrawalFee.denominator)),null!=e.nextSolWithdrawalFee&&(l.nextSolWithdrawalFee=z(e.nextSolWithdrawalFee.numerator,e.nextSolWithdrawalFee.denominator)),null!=e.nextEpochFee&&(l.feeNext=z(e.nextEpochFee.numerator,e.nextEpochFee.denominator)),l.solReferralFee=null!=e.solReferralFee?e.solReferralFee:0,l.stakeReferralFee=null!=e.stakeReferralFee?e.stakeReferralFee:0}));const p=I((()=>e.stakePoolAddress)),m=I((()=>!o.value));return{fees:l,stakePool:o,exchangeRate:i,minRentBalance:n,reserveStakeBalance:a,lamportsPerSignature:s,stakePoolAddress:p,connectionLost:m,loadReserveStake:c}})),We=Symbol(),Re=Symbol(),Ue=Symbol(),Ve=j("wallet",(()=>{const e=Ke(),{notify:t}=Z(),o=ve(),n=F(!1),a=F(!1),s=F(),l=I((()=>{var t;if(!s.value)return null;const o=null==(t=e.endpoint)?void 0:t.url,n=s.value.url;return o&&n?void 0!==s.value.getAdapter?s.value.getAdapter({providerUrl:n,endpoint:o}):new _(n,o):null}));return L(l,((a,s,l)=>{a&&(a.on("connect",(()=>{if(n.value=!0,a.publicKey){const n=a.publicKey.toBase58(),s=n.length>20?`${n.substring(0,7)}.....${n.substring(n.length-7,n.length)}`:n;e.connection.onAccountChange(a.publicKey,(e=>o.emit(Ue,e))),e.connection.onLogs(a.publicKey,(e=>{console.log(e)})),t({message:"Wallet update",caption:`Connected to wallet ${s}`,timeout:5e3})}o.emit(We,a)})),a.on("disconnect",(()=>{console.info("Wallet.disconnect"),n.value=!1,t({message:"Wallet update",caption:"Disconnected from wallet",timeout:5e3}),o.emit(Re,a)}))),l((()=>null==a?void 0:a.disconnect()))}),{immediate:!0}),O((()=>{l.value&&a.value&&(l.value.connect(),a.value=!1)})),{wallet:l,connected:n,walletPubKey:I((()=>{var e;return n.value?null==(e=l.value)?void 0:e.publicKey:null})),select:e=>{s.value=e,a.value=!0},disconnect:()=>{var e;return null==(e=l.value)?void 0:e.disconnect()}}})),ze=new A("Config1111111111111111111111111111111111111"),Xe=j("validators",(()=>{const e=Ke(),t=F(!1),o=F([]),n=F([]);return{loading:t,data:o,voteIds:n,load:async()=>{var a,s,l,i,r,c,u,d;t.value=!0,console.log("[Validators] Loading stake accounts...");const p=await async function(e,t){const o=await G(Q,t);return(await async function(e,t,o){return await e.getParsedProgramAccounts(t,{filters:[{memcmp:{offset:44,bytes:o.toBase58()}}]})}(e,ue,o)).sort(((e,t)=>t.account.lamports-e.account.lamports))}(e.connection,e.stakePoolAddress);console.log("[Validators] StakeAccounts"),console.log(p.map((e=>e.pubkey.toBase58())).join("\n"));const m=null!=(a=p.reduce(((e,t)=>{var o,n,a,s;const l=null==(s=null==(a=null==(n=null==(o=t.account.data.parsed)?void 0:o.info)?void 0:n.stake)?void 0:a.delegation)?void 0:s.voter;return l&&(e[l]||(e[l]=0),e[l]+=t.account.lamports),e}),{}))?a:{};n.value=Object.keys(m),console.log("[Validators] Vote ids",n.value);const[v,h]=await Promise.all([e.connection.getVoteAccounts(),Ze(e.connection)]),g=[...v.delinquent.filter((e=>n.value.includes(e.votePubkey))),...v.current.filter((e=>n.value.includes(e.votePubkey)))];console.log("[Validators] voteAccountInfos:",g.length),console.log("[Validators] validatorInfos:",h.length);const f=[];for(const t of g){const o=h.find((e=>e.key.equals(new A(t.nodePubkey)))),n=t.nodePubkey,a=null!=(s=m[t.votePubkey])?s:0,p=e.cluster.replace("-beta","");f.push({id:n,voter:t.votePubkey,name:null!=(i=null==(l=null==o?void 0:o.info)?void 0:l.name)?i:Ae(n),details:null==(r=null==o?void 0:o.info)?void 0:r.details,website:null==(c=null==o?void 0:o.info)?void 0:c.website,keybaseUsername:null==(u=null==o?void 0:o.info)?void 0:u.keybaseUsername,image:(null==(d=null==o?void 0:o.info)?void 0:d.keybaseUsername)?`https://keybase.io/${o.info.keybaseUsername}/picture`:void 0,url:`https://www.validators.app/validators/${p}/${n}`,lamports:a})}o.value=f.sort(((e,t)=>e.name.localeCompare(t.name))).sort(((e,t)=>t.lamports-e.lamports)),t.value=!1},clear:()=>o.value=[]}}));async function Ze(e){return(await e.getProgramAccounts(ze)).flatMap((e=>{const t=Y.fromConfigData(e.account.data);return t?[t]:[]}))}const Ge=j("stake-accounts",(()=>{const e=Ke(),t=Ve(),{walletPubKey:o}=x(t),n=F([]),a=F(!1),s=F(!1),l=F();async function i(){if(a.value||!o.value)return void console.log("[Stake accounts] Skip loading...");console.log("[Stake accounts] Loading...");const t=[{memcmp:{offset:12,bytes:o.value.toBase58()}},{dataSize:r.space}];a.value=!0,n.value=await async function(e,t,o){return await e.getParsedProgramAccounts(t,{commitment:e.commitment,filters:o})}(e.connection,ue,t),console.log("[Stake accounts] Data:",n.value),console.log(n.value.map((e=>e.pubkey.toBase58())).join("\n")),a.value=!1}L(o,i,{immediate:!0}),L(s,(()=>{0==s.value&&(l.value=null)}));const c=e=>Pe(e.reduce(((e,t)=>e+=t.account.lamports),0)),u=e=>I((()=>n.value.filter((t=>{var o,n,a,s,l;return(null==(l=null==(s=null==(a=null==(n=null==(o=t.account.data)?void 0:o.parsed)?void 0:n.info)?void 0:a.stake)?void 0:s.delegation)?void 0:l.voter)==e}))));return{loading:a,dialog:s,voter:l,data:I((()=>l.value?n.value.filter((e=>{var t,o,n,a,s;return(null==(s=null==(a=null==(n=null==(o=null==(t=e.account.data)?void 0:t.parsed)?void 0:o.info)?void 0:n.stake)?void 0:a.delegation)?void 0:s.voter)==l.value})):n.value)),load:i,stakeSolBalance:I((()=>c(n.value))),voterAccounts:u,voterStake:e=>I((()=>c(u(e).value)))}})),Ye=H();const Qe={},He=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in Qe)return;Qe[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},Je={"../pages/404.vue":()=>He((()=>import("./404.d5e3f99e.js")),["assets/404.d5e3f99e.js","assets/ErrorContainer.a16c4162.js","assets/vendor.fa2e8fc2.js"]),"../pages/500.vue":()=>He((()=>import("./500.5990bd44.js")),["assets/500.5990bd44.js","assets/ErrorContainer.a16c4162.js","assets/vendor.fa2e8fc2.js"]),"../pages/about.vue":()=>He((()=>import("./about.994fba42.js")),["assets/about.994fba42.js","assets/vendor.fa2e8fc2.js"]),"../pages/home.vue":()=>He((()=>import("./home.b13305fe.js")),["assets/home.b13305fe.js","assets/vendor.fa2e8fc2.js","assets/Epoch.5cc7ee9c.js"]),"../pages/impressum.vue":()=>He((()=>import("./impressum.4866a2ea.js")),["assets/impressum.4866a2ea.js","assets/vendor.fa2e8fc2.js"]),"../pages/pool-info.vue":()=>He((()=>import("./pool-info.4efa8a8a.js")),["assets/pool-info.4efa8a8a.js","assets/vendor.fa2e8fc2.js"]),"../pages/privacy.vue":()=>He((()=>import("./privacy.6e993844.js")),["assets/privacy.6e993844.js","assets/vendor.fa2e8fc2.js"]),"../pages/terms.vue":()=>He((()=>import("./terms.4b56a013.js")),["assets/terms.4b56a013.js","assets/vendor.fa2e8fc2.js"])};var qe=[{path:"",component:()=>He((()=>import("./default.ed93fdfe.js")),["assets/default.ed93fdfe.js","assets/vendor.fa2e8fc2.js","assets/Epoch.5cc7ee9c.js"]),children:function(e=""){return Object.keys(Je).map((t=>{const o=t.match(/\.\/pages\/(.*)\.vue$/);let n="";return o&&o[1]&&(n=o[1].toLowerCase()),{path:["home","index"].includes(n)?e:e+n,component:Je[t]}})).filter((e=>!e.path.startsWith("/_")))}()},{path:"/:catchAll(.*)*",component:()=>He((()=>import("./404.d5e3f99e.js")),["assets/404.d5e3f99e.js","assets/ErrorContainer.a16c4162.js","assets/vendor.fa2e8fc2.js"]),children:[]}];const $e=J({history:q(),scrollBehavior:()=>({left:0,top:0}),strict:!0,routes:qe});var et={install:e=>{e.use($,{config:{id:"G-XXX"}})}},tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et});const ot={config:{globalProperties:{}},iconSet:te,plugins:{Dark:oe,Notify:ne,LocalStorage:ae}};var nt={install:e=>{e.use(ee,ot)}},at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",quasarConfig:ot,default:nt});var st=(e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o};var lt=st(se({setup:()=>({})}),[["render",function(e,t,o,n,a,s){const l=le("router-view");return ie(),re(l)}]]);(async function(){const e=ce(lt);!function(e){e.use(Ye)}(e),function(e){e.use($e)}(e),function(e){const t={"./gtag.ts":tt,"./quasar.ts":at};for(const o in t)e.use(t[o].default)}(e),e.mount("#app")})().then();export{de as E,Se as W,st as _,_e as a,Be as b,Ve as c,De as d,Le as e,xe as f,Me as g,Ce as h,je as i,Ge as j,Ae as k,Pe as l,Oe as m,Te as n,Xe as o,Ee as p,Ne as s,Ke as u};

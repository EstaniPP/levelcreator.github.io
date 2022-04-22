var te=Object.defineProperty,se=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var z=(e,s,a)=>s in e?te(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,U=(e,s)=>{for(var a in s||(s={}))ne.call(s,a)&&z(e,a,s[a]);if(F)for(var a of F(s))re.call(s,a)&&z(e,a,s[a]);return e},$=(e,s)=>se(e,ae(s));import{a as C,b as oe,u as i,g as G,s as ce,c as le,r as u,j as l,d as t,F as f,L as E,I as S,e as ie,M as de,f as w,T,S as ue,i as he,p as me,z as pe,h as fe,Z as ge,k as M,G as ve,Y as ye,B as y,C as P,A as k,l as D,m as R,R as B,n as we,N as K,o as j,q as Ce,t as N,v as Ee,H as Ne}from"./vendor.078ce090.js";const Ie=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}};Ie();const W=C(!1),Y=C("success"),O=C("medium"),Z=C(!1),q=C(""),J=C(!1),Se=oe("CISignedInUser",null);function _(){const[e,s]=i(Se),[,a]=i(q);return{user:e,signin:async(r,c)=>{const h=G();try{const d=await ce(h,r,c);if(d){const g=d.user;return s(g),!0}}catch(d){console.error(d.code),a(d.code)}return!1},signout:()=>{const r=G();le(r).then(()=>{s(null)}).catch(c=>{console.log(c)})}}}var be="/CILevelCreator/assets/Logo.077e19fb.svg";function Ae(){const{user:e,signout:s}=_(),[a,o]=u.exports.useState(null),n=Boolean(a),r=h=>{o(h.currentTarget)},c=()=>{o(null)};return l("nav",{children:[t("img",{className:"imgLogo",src:be,alt:"PipPop! logo"}),e&&l(f,{children:[l("ul",{className:"ul desktopNavBar",children:[t(E,{to:"create",children:t("li",{className:"nav",children:"Create"})}),t(E,{to:"manage",children:t("li",{className:"nav",children:"Manage"})}),t("li",{className:"nav",onClick:s,children:"Logout"})]}),l("div",{className:"mobileNavBar",children:[t(S,{onClick:r,"aria-label":"menu",children:t(ie,{style:{color:"white",height:"40px",width:"40px"}})}),l(de,{id:"basic-menu",anchorEl:a,open:n,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"},onClick:c,children:[t(w,{children:t(E,{to:"create",children:t("li",{className:"nav",children:"Create"})})}),t(w,{children:t(E,{to:"manage",children:t("li",{className:"nav",children:"Manage"})})}),t(w,{onClick:s,children:t("li",{className:"nav",children:"Signout"})})]})]})]})]})}const xe=({rowIndex:e,columnIndex:s,matrix:a,onTileClick:o})=>t("div",{className:`field ${a[e][s]?"back-black":"back-white"}`,style:{cursor:o&&"pointer"},onClick:()=>o&&o(e,s)}),X=({matrix:e,onTileClick:s})=>t("div",{className:"board",children:e.map((a,o)=>t("div",{children:a.map((n,r)=>t(xe,{rowIndex:o,columnIndex:r,matrix:e,onTileClick:s},`${r}${o}`))},o))});const Q=()=>{const[e,s]=i(O);return l("div",{className:"FormWrapper",children:[t(T,{style:{marginRight:"10px"},children:"Difficulty:"}),l(ue,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e,onChange:o=>{s(o.target.value)},children:[t(w,{value:"easy",children:"Easy"}),t(w,{value:"medium",children:"Medium"}),t(w,{value:"hard",children:"Hard"})]})]})},Le=e=>{const s=e[0].difficulty,a=window.document.createElement("a");a.setAttribute("href","data:json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,4))),a.setAttribute("download",s+".json"),a.style.display="none",window.document.body.appendChild(a),a.click(),window.document.body.removeChild(a)},x=e=>{let s="";return e.rows.forEach(a=>{s+=a.config}),parseInt(s,2).toString()},v={VITE_APIKEY:"AIzaSyC8k7h6v4HEv7qFNMri1mh7ZyZXCBDywi8",VITE_AUTHDOMAIN:"color-inc-levels-api.firebaseapp.com",VITE_PROJECTID:"color-inc-levels-api",VITE_STORAGEBUCKET:"color-inc-levels-api.appspot.com",VITE_MESSAGINGSENDERID:"425715278139",VITE_APPID:"1:425715278139:web:d800af3741e7c29feed71e",BASE_URL:"/CILevelCreator/",MODE:"production",DEV:!1,PROD:!0},Te={apiKey:v.VITE_APIKEY,authDomain:v.VITE_AUTHDOMAIN,projectId:v.VITE_PROJECTID,storageBucket:v.VITE_STORAGEBUCKET,messagingSenderId:v.VITE_MESSAGINGSENDERID,appId:v.VITE_APPID},Me=he(Te),I=me(Me),Be=async e=>{const s=M(I,e.difficulty,x(e));return(await ve(s)).exists()?!1:(await ye(M(I,e.difficulty,x(e)),$(U({},e),{id:x(e)})),!0)},Pe=async e=>{const s=[];return(await pe(fe(I,e))).forEach(a=>{s.push(a.data())}),s},ke=async(e,s,a)=>{try{return await ge(M(I,e,s.toString())),a.filter(o=>o.id!==s)}catch(o){throw o.message}},De=async e=>Be(e),Re=async e=>await Pe(e),Oe=async(e,s,a)=>await ke(e,s,a),_e=(e,s)=>{const a={id:0,difficulty:s,rows:[]};return e.forEach(o=>{const n=o.reduce((r,c)=>r+c.toString(),"");a.rows.push({config:n})}),a},Ve=({matrix:e,size:s})=>{const[,a]=i(Y),[o,n]=u.exports.useState(!1),[,r]=i(W),c=async(h,d)=>{n(!0);const g=await De(_e(h,d));a(g?"success":"error"),n(!1),r(!0)};return u.exports.useEffect(()=>{r(!1)},[s,e]),t(y,{disabled:o,variant:"contained",onClick:()=>c(e,s),children:"Upload"})};const Fe=()=>{const[e]=i(Y),[s,a]=i(W);return t(P,{in:s,children:t(k,{style:{width:"calc(100vw - 40px)",maxWidth:"468px"},severity:e,action:t(S,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{a(!1)},children:t(D,{})}),sx:{mb:2},children:e==="success"?"Level created succesfully!":"Level already exists, please create a new one."})})},ze={easy:4,medium:6,hard:8};function H(){const[e]=i(O),[s,a]=u.exports.useState(Array(6).fill(0).map(()=>Array(6).fill(0)));return u.exports.useEffect(()=>{const n=ze[e];a(new Array(n).fill(0).map(()=>Array(6).fill(0)))},[e]),l(f,{children:[t(Fe,{}),l(R,{className:"Card",children:[t("h1",{children:"Color Inc level creator"}),l("div",{className:"Form",children:[t(Q,{}),t(X,{matrix:s,onTileClick:(n,r)=>{const c=s[n][r]?0:1;s[n][r]=c,a([...s])}})]}),t(Ve,{matrix:s,size:e})]})]})}const Ue=()=>{const[e,s]=i(J);return t(P,{in:e,children:t(k,{style:{width:"calc(100vw - 40px)",maxWidth:"468px"},severity:"success",action:t(S,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{s(!1)},children:t(D,{})}),sx:{mb:2},children:"Level deleted succesfully!"})})};function $e(){var b;const[e,s]=u.exports.useState([]),[a,o]=u.exports.useState([]),[n,r]=u.exports.useState(0),[c]=i(O),[,h]=i(J),d=m=>m.rows.map(A=>A.config.split("").map(ee=>parseInt(ee)));u.exports.useEffect(()=>{(async()=>{const A=await Re(c);s(A),r(0)})()},[c]),u.exports.useEffect(()=>{e.length!==0&&n<e.length&&o(d(e[n]))},[e,n]);const g=()=>{n>0&&r(m=>m-1)},V=()=>{n<e.length-1&&r(m=>m+1)},p=async()=>{var m;s(await Oe(c,(m=e[n])==null?void 0:m.id,e)),h(!0)};return l(f,{children:[t(Ue,{}),l(R,{className:"Card",children:[t("h1",{children:"Manage Levels"}),t(Q,{}),e.length===0&&l(T,{children:["There are no ",c," levels."]}),e.length>0&&l(f,{children:[l("div",{className:"LevelPaginator",children:[t(y,{className:"PaginationButton",onClick:g,children:"<"}),t(T,{className:"Typography",children:(b=e[n])==null?void 0:b.id}),t(y,{className:"PaginationButton",onClick:V,children:">"})]}),t(X,{matrix:a}),t(y,{className:"Button",style:{marginBottom:"20px"},onClick:p,variant:"contained",color:"error",children:"Delete level"}),t(y,{className:"Button",onClick:()=>Le(e),variant:"contained",children:"Download levels"})]})]})]})}const Ge=()=>{const[e,s]=i(Z),[a]=i(q);return t(P,{in:e,children:t(k,{style:{width:"calc(100vw - 40px)",maxWidth:"468px"},severity:"error",action:t(S,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{s(!1)},children:t(D,{})}),sx:{mb:2},children:a==="auth/invalid-email"||a==="auth/invalid-password"?"Invalid email or password.":"An unexpected error has occured."})})};function je(){const{user:e,signin:s}=_(),[,a]=i(Z),[o,n]=B.useState(""),[r,c]=B.useState(""),h=we();return l(f,{children:[t(Ge,{}),e&&t(K,{to:"/CILevelCreator/create"}),l(R,{className:"Card",children:[t("h1",{children:"Login"}),l("form",{onSubmit:async p=>{p.preventDefault(),await s(o,r)?h("/CILevelCreator/create"):a(!0)},children:[t(j,{className:"TextField",onChange:p=>{n(p.target.value)},value:o,label:"Email",variant:"standard"}),t(j,{className:"TextField",onChange:p=>{c(p.target.value)},value:r,label:"Password",variant:"standard",type:"password"}),t(y,{variant:"contained",type:"submit",children:"Login"})]})]})]})}const L=({children:e})=>{const{user:s}=_();return t(f,{children:s?e:t(K,{to:"login"})})};function He(){return l(f,{children:[t(Ae,{}),t("div",{className:"App",children:l(Ce,{children:[t(N,{path:"*",element:t(L,{children:t(H,{})})}),t(N,{path:"/login",element:t(je,{})}),t(N,{path:"/manage",element:t(L,{children:t($e,{})})}),t(N,{path:"/create",element:t(L,{children:t(H,{})})})]})})]})}Ee.render(t(B.StrictMode,{children:t(Ne,{children:t(He,{})})}),document.getElementById("root"));

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7947:function(e,t,i){Promise.resolve().then(i.bind(i,1494)),Promise.resolve().then(i.t.bind(i,3385,23)),Promise.resolve().then(i.t.bind(i,1970,23))},1494:function(e,t,i){"use strict";i.r(t),i.d(t,{HomeContext:function(){return r}});var a=i(7437),n=i(2265),o=i(760);let r=(0,n.createContext)({});t.default=e=>{let{children:t}=e,[i,d]=(0,n.useState)(""),[u,m]=(0,n.useState)(0),[s,l]=(0,n.useState)(!1),[c,p]=(0,n.useState)(0),[f,v]=(0,n.useState)(0),g=(0,n.useRef)(null),[_,k]=(0,n.useState)(1),[h,T]=(0,n.useState)(!1);(0,n.useEffect)(()=>{L(u)},[]);let L=e=>{let t=e%o.Z.length;d(o.Z[t].videoURL),m(t)};return(0,n.useEffect)(()=>{let e=g.current;if(e){e.onloadedmetadata=()=>{p(e.duration),v(e.currentTime),s&&e.play()},e.onended=()=>{L(u+1)},e.onvolumechange=()=>{k(e.volume)};let t=()=>{e.duration&&v(e.currentTime)};return e.addEventListener("timeupdate",t),()=>{e.removeEventListener("timeupdate",t)}}},[i,s]),(0,a.jsx)(r.Provider,{value:{videoURL:i,playing:s,totalTime:c,currentTime:f,videoRef:g,playPause:()=>{let e=g.current;e&&(s?e.pause():e.play(),l(!s))},configCurrentTime:e=>{let t=g.current;t&&(t.currentTime=e,v(e),s&&t.play())},configVideo:L,changeVolume:e=>{let t=g.current;if(!t)return;let i=Math.max(0,Math.min(1,e));t.volume=i,console.log("Volume ajustado:",i),k(i)},videos:o.Z,muted:h,toggleMute:()=>{let e=g.current;e&&(e.muted=!e.muted,T(e.muted))},unMute:()=>{let e=g.current;e&&(e.muted=!1,T(!1))},volume:_},children:t})}},760:function(e,t){"use strict";t.Z=[{videoURL:"video/video1.mp4",imageURL:"/image/imagem1.jpg",description:"Primeiro episodio da primeira temporada de Attack on Titan",title:"serie Attack on Titan"},{videoURL:"video/video2.mp4",imageURL:"/image/imagem2.jpeg",description:" Primeiro episodio da primeira temporada de Attack on Titan",title:"serie Attack on Titan"},{videoURL:"video/video3.mp4",imageURL:"/image/imagem3.jpg",description:"Primeiro episodio da primeira temporada de Attack on Titan",title:"serie Attack on Titan"},{videoURL:"video/video4.mp4",imageURL:"/image/imagem4.jpeg",description:"Primeiro episodio da primeira temporada de Attack on Titan",title:"serie Attack on Titan"}]},3385:function(){},1970:function(e){e.exports={style:{fontFamily:"'__Poppins_cfedef', '__Poppins_Fallback_cfedef'",fontStyle:"normal"},className:"__className_cfedef",variable:"__variable_cfedef"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=7947)}),_N_E=e.O()}]);
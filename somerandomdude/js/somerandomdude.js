/*
		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
*/
function frank_slideshow(a,b){if(document.querySelectorAll){var e=document.querySelectorAll(a);if(e)for(var d=0;d<e.length;d++)new FSS(e[d],b)}}function FSS(a,b){"[object Object]"===Object.prototype.toString.call(b)&&(this.opt=b);this.con=a;this.slds=[];this.nv;this.cpt;this.ci=-1;this.opt.width||(this.opt.width=this.con.offsetWidth);this.opt.height||(this.opt.height=this.con.offsetHeight);this.to;this.autoplay=!0;this.dur=5E3;this.init(a);this.gotoslide(0);this.autoplay&&this.play()}
FSS.prototype.init=function(a){var b=this;this.con.style.width=this.opt.width+"px";this.con.style.height=this.opt.height+"px";this.con.className.match(/(\s|^)fss(\s|$)/)||(this.con.className+=" fss");if(a.hasChildNodes){c=a.firstChild;for(a=0;c;)c&&3!=c.nodeType&&this.slds.push({ndx:a++,el:c.childNodes}),c=c.nextSibling;this.nv=document.createElement("ul");a=document.createAttribute("class");a.nodeValue="fss-nav";this.nv.setAttributeNode(a);for(a=0;a<this.slds.length;a++){var e=document.createElement("li");
e.appendChild(document.createTextNode(""+(a+1)));e.onclick=function(){b.navclick(this)};this.nv.appendChild(e)}this.con.appendChild(this.nv);this.cpt=document.createElement("div");a=document.createAttribute("class");a.nodeValue="fss-caption";this.cpt.setAttributeNode(a);this.con.parentNode.insertBefore(this.cpt,this.con.nextSibling);this.con.onmouseover=function(a){if(a){if(a.target!=b.con)return a.cancelBubble=!0,a.stopPropagation(),!1;b.pause();b.nv.className.match(/(\s|^)active(\s|$)/)||(b.nv.className+=
" active")}};this.con.onmouseout=function(a){if(a){if(b.ischild(a.relatedTarget,b.con))return a.cancelBubble=!0,a.stopPropagation(),!1;b.play();b.nv.className.match(/(\s|^)active(\s|$)/)&&(b.nv.className=b.nv.className.replace(/(\s|^)active(\s|$)/,""))}}}};FSS.prototype.ischild=function(a,b){if(b===a)return!1;for(;a&&a!==b;)a=a.parentNode;return a===b};FSS.prototype.autoNext=function(a){a&&(a.next(),a.play())};FSS.prototype.next=function(){this.gotoslide(this.ci<this.slds.length-1?this.ci+1:0)};
FSS.prototype.navclick=function(a){this.pause();for(var b=0;this.nv.childNodes.item(b);){if(this.nv.childNodes.item(b)==a){this.gotoslide(b);break}b++}};
FSS.prototype.gotoslide=function(a){if(this.ci!=a){this.con.style.backgroundPosition=""+-1*this.opt.width*a+"px 0px";var b=this.nv.querySelector(".active");b&&b.removeAttribute("class");b=document.createAttribute("class");b.nodeValue="active";for(this.nv.childNodes.item(a).setAttributeNode(b);this.cpt.hasChildNodes();)this.cpt.removeChild(this.cpt.firstChild);for(b=0;b<this.slds[a].el.length;b++)this.cpt.appendChild(this.slds[a].el.item(b).cloneNode(!0));this.ci=a}};FSS.prototype.pause=function(){clearTimeout(this.to)};
FSS.prototype.play=function(){clearTimeout(this.to);this.to=setTimeout(this.autoNext,this.dur,this)};var sbLoaderSide=100,resizeImage=1,imgDisplayDelay=600,sbOverlayId="jwSBoverlay",sbContainerId="jwSBcontainer",sbContentId="jwSBcontent",sbImageId="jwSBimage",sbImageAlt="Preview...",sbCaptionId="sbcaption",sbButtonCloseId="jwSBclose",sbCloseTitle="Click anywhere on the screen to close the image...",isIE6=-1!=navigator.userAgent.toLowerCase().indexOf("msie 6");
function simpleBox(){if(!document.getElementsByTagName||!document.getElementById)return!1;for(var a=document.getElementsByTagName("a"),b=0;b<a.length;b++)/simplebox/.test(a[b].getAttribute("rel"))&&(a[b].onclick=function(){var b=this.getAttribute("href"),a=this.getAttribute("title");a||(a="Images from the article "+document.title);buildImgPopup(b,a);return!1})}
function buildImgPopup(a,b){var e=document.createElement("div");e.setAttribute("id",sbOverlayId);if(isIE6){document.getElementsByTagName("html")[0].style.overflow="hidden";var d=document.documentElement.clientWidth+"px",k=document.documentElement.clientHeight+"px"}e.innerHTML='<div id="'+sbContainerId+'" style="width:'+d+";height:"+k+';"><a href="#" title="'+sbCloseTitle+'" class="closingElement">&nbsp;</a></div><div id="'+sbContentId+'"><a id="'+sbImageId+'" class="closingElement" href="#" title="'+
sbCloseTitle+'"></a><span id="'+sbCaptionId+'">'+b+'</span><a id="'+sbButtonCloseId+'" class="closingElement" href="#" title="'+sbCloseTitle+'">&nbsp;</a></div>';document.getElementsByTagName("body")[0].appendChild(e);var f=document.getElementById(sbContentId);f.style.width=sbLoaderSide+"px";f.style.height=sbLoaderSide+"px";f.style.margin="-"+sbLoaderSide/2+"px 0 0 -"+sbLoaderSide/2+"px";isIE6&&(e.style.top=document.documentElement.scrollTop+"px",f.style.top=document.documentElement.clientHeight/
2+"px",f.style.position="absolute");var i=document.getElementById(sbImageId);i.style.background="url("+a+") no-repeat 50% 50%";i.style.display="none";var j=document.getElementById(sbCaptionId);j.style.display="none";var g=new Image;g.onload=function(){if(resizeImage){var a=document.documentElement.clientHeight-40;g.height<a?(imgHeight=g.height,imgWidth=g.width):(imgHeight=a,imgWidth=Math.round(a*g.width/g.height),g.height=imgHeight,g.width=imgWidth)}else imgHeight=g.height,imgWidth=g.width;setTimeout(function(){f.style.background=
"#060606"},300);setTimeout(function(){f.style.width=imgWidth+"px";f.style.height=imgHeight+"px";f.style.margin="-"+(imgHeight+28)/2+"px 0 0 -"+imgWidth/2+"px"},600);setTimeout(function(){i.style.display="block";j.style.display=""},900)};g.src=a;d=e.getElementsByTagName("a");for(k=0;k<d.length;k++)"closingElement"==d[k].className&&(d[k].onclick=function(){e.style.display="none";document.getElementsByTagName("body")[0].removeChild(e);isIE6&&(document.getElementsByTagName("html")[0].style.overflow="");
return!1})}function addLoadEvent(a){var b=window.onload;window.onload="function"!=typeof window.onload?a:function(){b&&b();a()}}addLoadEvent(simpleBox);
window.onload=function(){function a(a,b,d,e){try{_gaq.push(["_trackEvent",a,b,d,e])}catch(f){}}if(document.querySelector){var b=document.createElement("style"),e=document.createAttribute("type");e.nodeValue="text/css";b.setAttributeNode(e);var d=document.createTextNode("a{ -webkit-transition-property: background-color, color; -webkit-transition-duration: .3s; -webkit-transition-timing-function: cubic-bezier(0.02, 0, 0.18, 1.0); -moz-transition-property: background, color; -moz-transition-duration: .3s; -moz-transition-timing-function: cubic-bezier(0.02, 0, 0.18, 1.0); -o-transition-property: background, color; -o-transition-duration: .3s; -o-transition-timing-function: cubic-bezier(0.02, 0, 0.18, 1.0); }");document.getElementsByTagName("head").item(0).appendChild(b);
try{b.appendChild(d)}catch(k){}frank_slideshow("#hero_slideshow .slides",{width:725,height:210});simpleBox();if(document.querySelector("#p72")){var f,i,j,g,l;f=document.querySelectorAll("#projects_navigation dd");for(d=0;d<f.length;d++)b=f[d],b.onclick=function(){f=document.querySelectorAll("#projects_navigation dd");e=this.getAttribute("rel");for(i=0;i<f.length;i++)l=f[i].getAttribute("rel"),l!=e?f[i].className.match(/(\s|^)active(\s|$)/)&&(f[i].className=f[i].className.replace(/(\s|^)active(\s|$)/,
"")):f[i].className.match(/(\s|^)active(\s|$)/)||(f[i].className+=" active");g=document.querySelectorAll("#projects_list li");for(j=0;j<g.length;j++)g[j].className.match(/(\s|^)deselected(\s|$)/)&&(g[j].className=g[j].className.replace(/(\s|^)deselected(\s|$)/,"")),"all"!=e&&!g[j].className.match(RegExp("(\\s|^)"+e+"(\\s|$)"))&&!g[j].className.match(/(\s|^)deselected(\s|$)/)&&(g[j].className+=" deselected")}}var h;h=document.querySelectorAll("#menu-primary li a");for(d=0;d<h.length;d++)b=h[d],b.onclick=
function(){a("Top Nav",this.firstChild.nodeValue,document.title);setTimeout('document.location = "'+this.href+'"',100);return!1};h=document.querySelectorAll("#download_follow a.twitter, #download_follow a.rss");for(d=0;d<h.length;d++)b=h[d],b.onclick=function(){a("Projects Follow",this.firstChild.nodeValue,document.title);setTimeout('document.location = "'+this.href+'"',100);return!1};h=document.querySelectorAll("#other_projects #projects_list li a");for(d=0;d<h.length;d++)b=h[d],b.onclick=function(){a("Other Projects",
this.querySelector("small").firstChild.nodeValue,document.title);setTimeout('document.location = "'+this.href+'"',100);return!1};if(b=document.querySelector("#content.single .post-info .previous a"))b.onclick=function(){a("Previous Post",this.childNodes.item(1).nodeValue,document.title);setTimeout('document.location = "'+this.href+'"',100);return!1};if(b=document.querySelector("#footer_main_promo"))b.onclick=function(){a("Footer Promo",this.querySelector(".header").firstChild.nodeValue,document.title);
setTimeout('document.location = "'+this.href+'"',100);return!1};h=document.querySelectorAll("#text-12 .recommended li a");for(d=0;d<h.length;d++)b=h[d],b.onclick=function(){a("Recommended",this.firstChild.nodeValue,document.title);setTimeout('document.location = "'+this.href+'"',100);return!1};h=document.querySelectorAll("#text-13 .recommended li a");for(d=0;d<h.length;d++)b=h[d],b.onclick=function(){a("Topics",this.firstChild.nodeValue,document.title);setTimeout('document.location = "'+this.href+
'"',100);return!1};h=document.querySelectorAll("#footer_follow_list li a");for(d=0;d<h.length;d++)b=h[d],b.onclick=function(){a("Follow Me",this.querySelector("span").firstChild.nodeValue,document.title);setTimeout('document.location = "'+this.href+'"',100);return!1};if(b=document.querySelector("#tweet-button a"))b.onclick=function(){a("Twitter Button","",document.title);setTimeout('document.location = "'+this.href+'"',100);return!1}}};

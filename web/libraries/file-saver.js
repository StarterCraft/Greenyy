/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r=!e.externalHost&&"download"in o,i=e.webkitRequestFileSystem,a=e.requestFileSystem||i||e.mozRequestFileSystem,s=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},d=0,c=[],l=function(){for(var e=c.length;e--;){var t=c[e];"string"==typeof t?n().revokeObjectURL(t):t.remove()}c.length=0},u=function(e,t,n){for(var o=(t=[].concat(t)).length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){s(e)}}},f=function(s,l){var f,v,w,p,y,h=this,m=s.type,g=!1,S=function(){var e=n().createObjectURL(s);return c.push(e),e},b=function(){u(h,"writestart progress write writeend".split(" "))},E=function(){!g&&f||(f=S()),v?v.location.href=f:window.open(f,"_blank"),h.readyState=h.DONE,b()},O=function(e){return function(){if(h.readyState!==h.DONE)return e.apply(this,arguments)}},x={create:!0,exclusive:!1};if(h.readyState=h.INIT,l||(l="download"),r)return f=S(),o.href=f,o.download=l,p=o,(y=t.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,e,0,0,0,0,0,!1,!1,!1,!1,0,null),p.dispatchEvent(y),h.readyState=h.DONE,void b();e.chrome&&m&&"application/octet-stream"!==m&&(w=s.slice||s.webkitSlice,s=w.call(s,0,s.size,"application/octet-stream"),g=!0),i&&"download"!==l&&(l+=".download"),("application/octet-stream"===m||i)&&(v=e),a?(d+=s.size,a(e.TEMPORARY,d,O(function(e){e.root.getDirectory("saved",x,O(function(e){var t=function(){e.getFile(l,x,O(function(e){e.createWriter(O(function(t){t.onwriteend=function(t){v.location.href=e.toURL(),c.push(e),h.readyState=h.DONE,u(h,"writeend",t)},t.onerror=function(){var e=t.error;e.code!==e.ABORT_ERR&&E()},"writestart progress write abort".split(" ").forEach(function(e){t["on"+e]=h["on"+e]}),t.write(s),h.abort=function(){t.abort(),h.readyState=h.DONE},h.readyState=h.WRITING}),E)}),E)};e.getFile(l,{create:!1},O(function(e){e.remove(),t()}),O(function(e){e.code===e.NOT_FOUND_ERR?t():E()}))}),E)}),E)):E()},v=f.prototype,w=function(e,t){return new f(e,t)};return v.abort=function(){this.readyState=this.DONE,u(this,"abort")},v.readyState=v.INIT=0,v.WRITING=1,v.DONE=2,v.error=v.onwritestart=v.onprogress=v.onwrite=v.onabort=v.onerror=v.onwriteend=null,e.addEventListener("unload",l,!1),w.unload=function(){l(),e.removeEventListener("unload",l,!1)},w}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&null!==module?module.exports=saveAs:"undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs}),String.prototype.endsWithAny=function(){for(var e=Array.prototype.slice.call(arguments),t=this.toLowerCase().toString(),n=0;n<e.length;n++)if(-1!==t.indexOf(e[n],t.length-e[n].length))return!0;return!1};var saveTextAs=saveTextAs||function(e,t,n){if(t=t||"download.txt",n=n||"utf-8",e=(e||"").replace(/\r?\n/g,"\r\n"),saveAs&&Blob){var o=new Blob([e],{type:"text/plain;charset="+n});return saveAs(o,t),!0}var r=window.frames.saveTxtWindow;if(!r&&((r=document.createElement("iframe")).id="saveTxtWindow",r.style.display="none",document.body.insertBefore(r,null),!(r=window.frames.saveTxtWindow)&&!(r=window.open("","_temp","width=100,height=100"))))return window.alert("Sorry, download file could not be created."),!1;var i=r.document;i.open("text/html","replace"),i.charset=n,t.endsWithAny(".htm",".html")?(i.close(),i.body.innerHTML="\r\n"+e+"\r\n"):(t.endsWithAny(".txt")||(t+=".txt"),i.write(e),i.close());var a=i.execCommand("SaveAs",null,t);return r.close(),a};
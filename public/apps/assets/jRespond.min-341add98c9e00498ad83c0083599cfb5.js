!function(n,e,t){"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=t:(n[e]=t,"function"==typeof define&&define.amd&&define(e,[],function(){return t}))}(this,"jRespond",function(n,e,t){"use strict";return function(n){var e=[],i=[],o=n,r="",u="",f=0,l=100,c=500,d=c,a=function(){var n=0;return n="number"!=typeof window.innerWidth?0!==document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth:window.innerWidth},h=function(n){if(n.length===t)p(n);else for(var e=0;e<n.length;e++)p(n[e])},p=function(n){var o=n.breakpoint,f=n.enter||t;e.push(n),i.push(!1),g(o)&&(f!==t&&f.call(null,{entering:r,exiting:u}),i[e.length-1]=!0)},s=function(){for(var n=[],o=[],f=0;f<e.length;f++){var l=e[f].breakpoint,c=e[f].enter||t,d=e[f].exit||t;"*"===l?(c!==t&&n.push(c),d!==t&&o.push(d)):g(l)?(c===t||i[f]||n.push(c),i[f]=!0):(d!==t&&i[f]&&o.push(d),i[f]=!1)}for(var a={entering:r,exiting:u},h=0;h<o.length;h++)o[h].call(null,a);for(var p=0;p<n.length;p++)n[p].call(null,a)},m=function(n){for(var e=!1,t=0;t<o.length;t++)if(n>=o[t].enter&&n<=o[t].exit){e=!0;break}e&&r!==o[t].label?(u=r,r=o[t].label,s()):e||""===r||(r="",s())},g=function(n){if("object"==typeof n){if(n.join().indexOf(r)>=0)return!0}else{if("*"===n)return!0;if("string"==typeof n&&r===n)return!0}},b=function(){var n=a();n!==f?(d=l,m(n)):d=c,f=n,setTimeout(b,d)};return b(),{addFunc:function(n){h(n)},getBreakpoint:function(){return r}}}}(this,this.document));
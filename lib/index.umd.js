!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).core={})}(this,function(e){window&&window.requestAnimationFrame||(window.requestAnimationFrame=function(){return null},window.cancelAnimationFrame=function(){return null});var n={rAF:[],fps:60,then:Date.now()},t=function e(t){var i=n.rAF;if(n.interval=1e3/n.fps,n.now=Date.now(),n.delta=n.now-n.then,n.delta>n.interval){n.then=n.now-n.delta%n.interval;for(var o=0,r=i.length;o<r;o+=1)i[o](t)}return requestAnimationFrame(e)},i=function(){n.id&&window.cancelAnimationFrame(n.id),n.id=null,n.rAF=null},o=function(e){n.rAF.push(e)},r=function(e){for(var t=n.rAF,i=0,o=t.length;i<o;i+=1)t[i]===e&&(n.rAF.splice(i,1),i--)};e.default=function(e){var a;return e.fps&&(n.fps=e.fps),n.id=null==(a=window)?void 0:a.requestAnimationFrame(t),{reset:i,add:o,remove:r,update:t,store:n}},e.resetUpdate=i,e.store=n,e.subscribeUpdate=o,e.unsubscribeUpdate=r,e.update=t});
//# sourceMappingURL=index.umd.js.map
    var genieFlexId = '';
    var genieCompletionId = '';
    var genieOrderIdSelector = '';
    var genieMask = '';
    var genieTotalBasketSelector = '';
    var genieTotalBasketURL = '';
    var genieCompletePageURL = '';
    var genieCompleteIdentifier = '';
    
    function verifyInputs(){
        $('.veGenie_input_field.required').each(function(index, elem) {
            valu = $(elem).val();
            if ( valu === '' ){ 
                $(elem).addClass('inputver_fail');
            }
            else if ( valu !== '' ){
                $(elem).removeClass('inputver_fail');
            }
        });
    }


    $('#veGenie_input_var1').on('input', function() {
       genieFlexId = $('#veGenie_input_var1').val();                         
    });
    $('#veGenie_input_var2').on('input', function() {
       genieCompletionId = $('#veGenie_input_var2').val();                  
    });
    $('#veGenie_input_var3').on('input', function() {
       genieOrderIdSelector = $('#veGenie_input_var3').val();
    });
    $('#veGenie_input_var4').on('input', function() {
       genieMask = $('#veGenie_input_var4').val();
    });
    $('#veGenie_input_var5').on('input', function() {
       genieTotalBasketSelector = $('#veGenie_input_var5').val();
    });
    $('#veGenie_input_var6').on('input', function() {
       var urlMatrix = $('#veGenie_input_var6').val().replace(/ /g, '').split(',');
       genieTotalBasketURL = JSON.stringify(urlMatrix).replace(/"/g, '\'');
    });
    $('#veGenie_input_var7').on('input', function() {
      var urlMatrix1 = $('#veGenie_input_var7').val().replace(/ /g, '').split(',');
       genieCompletePageURL = JSON.stringify(urlMatrix1).replace(/"/g, '\'');
    });
    $('#veGenie_input_var8').on('input', function() {
      genieCompleteIdentifier = $('#veGenie_input_var8').val();
    });

    $('#vegenie_erase_button').on('click', function() {
        $('.veGenie_input_field').each( function(index, elem) { 
            $(elem).val('');
            $(elem).removeClass('inputver_fail');
        });
        $('.veGenie_textarea_result').each( function(index, elem) {
            $(elem).text('');
        });
    });

    $('#vegenie_generate_button').on('click', function() {
        if( (genieFlexId=='') || (genieCompletionId=='') || (genieOrderIdSelector=='') || (genieTotalBasketSelector=='') || (genieCompletePageURL=='') ){
            verifyInputs();
        }else{
            verifyInputs();
            var resultCustomJS = 'onLoad: function() {!function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!c&&u)return u(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module \'"+i+"\'");throw l.code="MODULE_NOT_FOUND",l}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){var n=t[i][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e){var t=e("./settings"),n=e("./gdmhandler"),r=e("./geniehandler");console.info("entering the application"),n.start(t.gdm),r.start(t.genie)},{"./gdmhandler":4,"./geniehandler":5,"./settings":6}],2:[function(e,t){!function(e){function n(){try{return c in e&&e[c]}catch(t){return!1}}function r(e){return e.replace(/^d/,"___$&").replace(p,"___")}var o,a={},i=e.document,c="localStorage",u="script";if(a.disabled=!1,a.version="1.3.17",a.set=function(){},a.get=function(){},a.has=function(e){return void 0!==a.get(e)},a.remove=function(){},a.clear=function(){},a.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var r=a.get(e,t);n(r),a.set(e,r)},a.getAll=function(){},a.forEach=function(){},a.serialize=function(e){return JSON.stringify(e)},a.deserialize=function(e){if("string"!=typeof e)return void 0;try{return JSON.parse(e)}catch(t){return e||void 0}},n())o=e[c],a.set=function(e,t){return void 0===t?a.remove(e):(o.setItem(e,a.serialize(t)),t)},a.get=function(e,t){var n=a.deserialize(o.getItem(e));return void 0===n?t:n},a.remove=function(e){o.removeItem(e)},a.clear=function(){o.clear()},a.getAll=function(){var e={};return a.forEach(function(t,n){e[t]=n}),e},a.forEach=function(e){for(var t=0;t<o.length;t++){var n=o.key(t);e(n,a.get(n))}};else if(i.documentElement.addBehavior){var l,s;try{s=new ActiveXObject("htmlfile"),s.open(),s.write("<"+u+">document.w=window</"+u+\'><iframe src="/favicon.ico"></iframe>\'),s.close(),l=s.w.frames[0].document,o=l.createElement("div")}catch(f){o=i.createElement("div"),l=i.body}var d=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);t.unshift(o),l.appendChild(o),o.addBehavior("#default#userData"),o.load(c);var n=e.apply(a,t);return l.removeChild(o),n}},p=new RegExp("[!\\"#$%&\'()*+,/\\\\\:;<=>?@[\\\]^`{|}~]","g");a.set=d(function(e,t,n){return t=r(t),void 0===n?a.remove(t):(e.setAttribute(t,a.serialize(n)),e.save(c),n)}),a.get=d(function(e,t,n){t=r(t);var o=a.deserialize(e.getAttribute(t));return void 0===o?n:o}),a.remove=d(function(e,t){t=r(t),e.removeAttribute(t),e.save(c)}),a.clear=d(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(c);for(var n,r=0;n=t[r];r++)e.removeAttribute(n.name);e.save(c)}),a.getAll=function(){var e={};return a.forEach(function(t,n){e[t]=n}),e},a.forEach=d(function(e,t){for(var n,r=e.XMLDocument.documentElement.attributes,o=0;n=r[o];++o)t(n.name,a.deserialize(e.getAttribute(n.name)))})}try{var g="__storejs__";a.set(g,g),a.get(g)!=g&&(a.disabled=!0),a.remove(g)}catch(f){a.disabled=!0}a.enabled=!a.disabled,"undefined"!=typeof t&&t.exports&&this.module!==t?t.exports=a:"function"==typeof define&&define.amd?define(a):e.store=a}(Function("return this")())},{}],3:[function(e,t){var n=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};t.exports={PatternPrototype:{match:function(e){var t,n,r,o,a,i,c,u;if(o=this.regex.exec(e),null==o)return null;if(n=o.slice(1),this.isRegex)return n;for(t={},r=c=0,u=n.length;u>c;r=++c)i=n[r],a=this.names[r],null!=i&&("_"===a?(null==t._&&(t._=[]),t._.push(i)):t[a]=i);return t}},newPattern:function(e,n){var r,o,a;if(null==n&&(n="/"),r=e instanceof RegExp,"string"!=typeof e&&!r)throw new TypeError("argument must be a regex or a string");return[":","*"].forEach(function(e){if(n===e)throw new Error("separator can\'t be "+e)}),o=Object.create(t.exports.PatternPrototype),o.isRegex=r,o.regex=r?e:(a=t.exports.toRegexString(e,n),new RegExp(a)),r||(o.names=t.exports.getNames(e,n)),o},escapeForRegex:function(e){return e.replace(/[-\\/\\^$*+?.()|[\\]{}]/g,"\\\$&")},getNames:function(e,r){var o,a,i,c,u;if(null==r&&(r="/"),e instanceof RegExp)return[];for(o=t.exports.escapeForRegex(r),c=new RegExp("((:?:[^"+o+"()]+)|(?:[*]))","g"),i=[],u=c.exec(e);null!=u;){if(a=u[1].slice(1),"_"===a)throw new TypeError(":_ can\'t be used as a pattern name in pattern "+e);if(n.call(i,a)>=0)throw new TypeError("duplicate pattern name :"+a+" in pattern "+e);i.push(a||"_"),u=c.exec(e)}return i},escapeSeparators:function(e,n){var r,o;return null==n&&(n="/"),r=t.exports.escapeForRegex(n),o=new RegExp(r,"g"),e.replace(o,r)},toRegexString:function(e,n){var r,o;return null==n&&(n="/"),o=t.exports.escapeSeparators(e,n),o=o.replace(/\\((.*?)\\)/g,"(?:$1)?").replace(/\\*/g,"(.*?)"),r=t.exports.escapeForRegex(n),t.exports.getNames(e,n).forEach(function(e){return o=o.replace(":"+e,"([^\\\"+n+"]+)")}),"^"+o+"$"}}},{}],4:[function(e,t){function n(e){o("Launching GDM Script"),function(e){var t=document,n=t.createElement("script");n.async=!0,n.defer=!0,n.src=e,t.getElementsByTagName("head")[0].appendChild(n)}((iatDev=window.location.href.indexOf("iatDev=1")>-1||document.cookie.indexOf("iatDev=1")>-1,"//"+("http:"!==window.location.protocol||iatDev?"":"h")+"fp.gdmdigital.com/"+e+".js?r="+1e16*Math.random()+"&m=992&a="+e+(iatDev?"&d=1":"")))}var r=e("./utils/type"),o=e("./utils/log");t.exports={start:function(e){r(e,"object")&&(e.exclude||n(e.flexId))}}},{"./utils/log":9,"./utils/type":10}],5:[function(e,t){function n(e){var t,n=u()||e.orderValue.default,r=a(e.orderId)||(new Date).getTime(),o=e.completionId;t="https://secure.adnxs.com/px?id="+o+"&order_id="+r+"&value="+n+"&t=2",p(t),m("Pixel Added to complete page")}function r(e){var t=!1,r=e.completePage.dynamicIdentifier;r.selector.length&&d.check(selector,function(t){r.criteria.length&&r.value.length&&x[r.criteria](t,r.value)&&n(e)}),g.each(e.completePage.urls,function(n,r){f.test(r,e.completePage.params)&&(t=!0)}),t&&n(e)}function o(e){var t=!1,n=e.orderValue.page;g.each(n.urls,function(n,r){f.test(r,e.completePage.params)&&(t=!0)}),t&&(v("We are on the Order Value Page"),i(e.orderValue))}function a(e){var t=g(e.selector),n=t.text().replace(e.regex,"")||t.val().replace(e.regex,"");return encodeURIComponent(n)}function i(e){v("Checking For Order Value"),d.check(e.selector,function(t){v("Order Value element found");var n=t.val().replace(e.regex,"")||t.text().replace(e.regex,"")||String(e.default);c(n)})}function c(e){v("Storing Order Value"),l.set(s+h,e)}function u(){return v("Obtaining Order Value"),l.get(s+h)}var l=e("store"),s=e("./settings").namespace,f=e("./utils/urls"),d=e("./utils/checkElements"),p=e("./utils/addPixel"),g=window.VEjQuery,m=e("./utils/log"),v=e("./utils/log"),h="orderValue",x={contains:function(e,t){return-1!==e.text().indexOf(String(t))},equal:function(e,t){return e.text()===String(t)},not:function(e,t){return-1===e.text().indexOf(String(t))}};t.exports={start:function(e){r(e),o(e)}}},{"./settings":6,"./utils/addPixel":7,"./utils/checkElements":8,"./utils/log":9,"./utils/urls":11,store:2}],6:[function(e,t){var n=window.veTagData.settings.gdm;t.exports={gdm:{exclude:n.exclude,flexId:n.flexId},genie:{completionId:n.completionId,journeyCode:n.journeyCode,segmentIds:n.segmentIds,orderId:n.orderId,orderValue:n.orderValue,completePage:n.completePage},namespace:"veapps."+n.flexId+".GDM."}},{}],7:[function(e,t){function n(e){var t=document.createElement("img");t.width=1,t.height=1,t.src=e,t.style.visibility="hidden",document.body.appendChild(t),setTimeout(function(){t.style.display="none"},1e3)}t.exports=n},{}],8:[function(e,t){function n(e,t,n){var r=0;e=e||1e3,t=t||600;var a=setInterval(function(){var e=n();r++,(e||t&&r>=t)&&(o("Clearing Check Interval"),clearInterval(a))},e);return a}function r(e,t){var r=n(null,null,function(){var n=a(e);return n.length?(o("Success function is about to be called"),clearInterval(r),t(n),!0):!1})}var o=e("./log"),a=VEjQuery;t.exports={check:function(e,t){o("Element is being checked"),r(e,t)}}},{"./log":9}],9:[function(e,t){function n(){veTagData.settings.consoleMessagesEnabled&&console.info(arguments)}t.exports=n},{}],10:[function(e,t){var n=Object.prototype.toString;t.exports=function(e,t){switch(n.call(e)){case"[object Date]":return"date"===t;case"[object RegExp]":return"regexp"===t;case"[object Arguments]":return"arguments"===t;case"[object Array]":return"array"===t;case"[object Error]":return"error"===t}return null===e?"null"===t:void 0===e?"undefined"===t:e!==e?"nan":e&&1===e.nodeType?"element"===t:(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e),t===typeof e)}},{}],11:[function(e,t){function n(e){if(""===e||"?"===e)return{};var t,n,r,o;for(t=e.replace(/^\\?/,"").split("&"),n=0;n<t.length;n++)o=t[n].split("="),r[o[0]]=o[1];return r}function r(e){try{var t=new String(e).toLowerCase();return t=t.replace("http://",""),t=t.replace("https://",""),t=t.replace("#","?"),t=t.replace(";","?"),"www."===t.substr(0,4)&&(t=t.replace("www.","")),t}catch(n){return""}}function o(e){"www."===e.substr(0,4)&&(e=e.replace("www.",""));var t=i.newPattern(e);return!!t.match(l)}function a(e){var t=!0;return e.length?(u.each(e,function(e,n){e=string(e),n=String(n);var r=i.newPattern(n);r.match(s[e])||r.match(decodeURIComponent(s[e]))||(t=!1)}),c("Result of parameters matching is",t),t):!0}var i=e("url-pattern"),c=e("./log"),u=window.VEjQuery,l=r(window.location.hostname+window.location.pathname),s=n(window.location.search||"");c("PAGE_URL and PAGE_PARAMS have been set."),t.exports={test:function(e,t){return o(e)&&a(t)}}},{"./log":9,"url-pattern":3}]},{},[1]);}';
            
            var resultSettings = "gdm: {\n\tflexId: '" + genieFlexId + "',\n\tcompletionId: '" + genieCompletionId + "',\n\tjourneyCode: '',\n\tsegmentIds: [1,2],\n\torderId: {\n\t\tselector: '" + genieOrderIdSelector + "',\n\t\tmask: '" + genieMask + "',\n\t\tregex: /[0-9]/,\n\t},\n\torderValue: {\n\t\tselector: '" + genieTotalBasketSelector + "',\n\t\tdefault: '0',\n\t\tpage: {\n\t\t\tparams: {},\n\t\t\turl: " + genieTotalBasketURL + "\n\t\t},\n\t\tregex: /[^0-9.]/g\n\t},\n\tcompletePage: {\n\t\turls: " + genieCompletePageURL + ",\n\t\tparams: {}, \n\t\tdynamicIdentifier: {\n\t\t\tselector: '" + genieCompleteIdentifier + "',\n\t\t\tcriteria: 'not',\n\t\t\tvalue: ''\n\t\t} \n\t}\n}\n";
            
            $('#veGenie_result1').text(resultSettings);
            $('#veGenie_result2').text(resultCustomJS);
        }
    });
(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,n){e.exports=n("HAE9")},HAE9:function(e,t,n){var r=n("p9MR"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),l=n("MI3g"),o=n("a7VT"),c=n("Tit0"),i=n("q1tI"),s=n.n(i),u=n("m/Pd"),f=n.n(u),p=n("AT/M"),d=n("hfKm"),h=n.n(d);n("5aCR"),n("RjQN");var m=function(e){function t(){var e,n,a,c,i;Object(r.default)(this,t);for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];return n=Object(l.default)(this,(e=Object(o.default)(t)).call.apply(e,[this].concat(u))),a=Object(p.default)(n),i={},(c="state")in a?h()(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,n}return Object(c.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"one-half column"},s.a.createElement("div",{class:"bannerWrapper"},s.a.createElement("div",{class:"image123"},s.a.createElement("div",{class:"imgContainer"},s.a.createElement("img",{class:"frontLogo"})),s.a.createElement("div",{class:"tech-slideshow"},s.a.createElement("div",{class:"mover-1"}),s.a.createElement("div",{class:"mover-2"})))))))}}]),t}(s.a.Component),v=(n("YFqc"),function(){return s.a.createElement("div",{class:"nav"},s.a.createElement("ul",null,s.a.createElement("li",{class:"home"},s.a.createElement("a",{href:"#"},"Home")),s.a.createElement("li",{class:"tutorials"},s.a.createElement("a",{href:"#"},"Tutorials")),s.a.createElement("li",{class:"about"},s.a.createElement("a",{href:"#"},"About")),s.a.createElement("li",{class:"news"},s.a.createElement("a",{href:"#"},"Newsletter")),s.a.createElement("li",{class:"contact"},s.a.createElement("a",{href:"#"},"Contact"))))}),E=function(e){return s.a.createElement("div",null,s.a.createElement(f.a,null,s.a.createElement("title",null,"Audio-Boy")),s.a.createElement(v,null),s.a.createElement("div",{className:"container"},e.children))},w=(n("lHBs"),function(e){function t(){return Object(r.default)(this,t),Object(l.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(c.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){return s.a.createElement(E,null,s.a.createElement(m,null))}}]),t}(s.a.Component));t.default=w},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("9Jkg")),l=r(n("/HRN")),o=r(n("WaGi")),c=r(n("ZDA2")),i=r(n("/+P4")),s=r(n("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),d=u(n("q1tI")),h=(f(n("17x9")),u(n("nOHt"))),m=n("Bu4q");function v(e){return e&&"object"==typeof e?m.formatWithValidation(e):e}var E=function(e){function t(){var e,n,r,a,o;return(0,l.default)(this,t),(e=(0,c.default)(this,(0,i.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:v(e),as:v(t)}},r=null,a=null,o=null,function(e,t){if(e===r&&t===a)return o;var l=n(e,t);return r=e,a=t,o=l,l}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var l=e.formatUrls(e.props.href,e.props.as),o=l.href,c=l.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var i=window.location.pathname;o=p.resolve(i,o),c=c?p.resolve(i,c):o,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](o,c,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var l=d.Children.only(t),o={onClick:function(t){l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==l.type||"href"in l.props)||(o.href=a||r),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=h.Router._rewriteUrlForNextExport(o.href)),d.default.cloneElement(l,o)}}]),t}(d.Component);t.default=E},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1","ad9d"]]]);
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{126:function(e,t,n){n.d(t,{e:function(){return a}});var o=n(689),i=n(87),r=n(652),s=n(184),a=function(e){var t=e.movie,n=e.onClickFunction,a=(0,o.TH)();return(0,s.jsx)("ul",{className:r.Z.movieList,children:(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{state:{from:a},onClick:n,to:"/movies/".concat(t.id),children:t.title})})})}},903:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(439),i=n(791),r=n(87),s=n(294);var a=function(e){return s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=a42bf4f31f7d8fb3cfc076b340ef7462"))},c=n(174),u=n(126),l=n(652),f=n(184),m=function(){var e=(0,i.useState)(""),t=(0,o.Z)(e,2),n=t[0],s=t[1],m=(0,i.useState)(null),d=(0,o.Z)(m,2),h=d[0],v=d[1],p=(0,r.lr)(),g=(0,o.Z)(p,2),_=g[0],k=g[1],b=_.get("query");(0,i.useEffect)((function(){""!==n&&a(b).then((function(e){0===e.data.results.length&&c.Am.error("No movies found :(",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),v(e.data.results)})).catch((function(e){console.log(e)}))}),[b,n]);var C=function(){h&&h.map((function(e){return k({id:e.id})}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===n&&c.Am.info("Please enter movie name!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),k({query:n})},children:[(0,f.jsx)("input",{className:l.Z.input,id:"input",onChange:function(e){s(e.target.value)}}),(0,f.jsx)("button",{className:l.Z.searchBtn,children:"Search"})]}),h&&h.map((function(e){return console.log(e.title),(0,f.jsx)(u.e,{getMovieId:C,movie:e},e.id)}))]})}},652:function(e,t){t.Z={input:"movies_input__NHKdu",searchBtn:"movies_searchBtn__GVkCX",movieList:"movies_movieList__U-mld"}}}]);
//# sourceMappingURL=903.3ecc2cc7.chunk.js.map
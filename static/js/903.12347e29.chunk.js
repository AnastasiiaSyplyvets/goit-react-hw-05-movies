"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{126:function(e,t,o){o.d(t,{e:function(){return a}});var n=o(689),r=o(87),i=o(652),s=o(184),a=function(e){var t=e.movie,o=e.onClickFunction,a=(0,n.TH)();return(0,s.jsx)("ul",{className:i.Z.movieList,children:(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{state:{from:a},onClick:o,to:"/movies/".concat(t.id),children:t.title})})})}},903:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var n=o(439),r=o(791),i=o(87),s=o(294);var a=function(e){return s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=a42bf4f31f7d8fb3cfc076b340ef7462"))},c=o(174),u=o(126),l=o(652),m=o(184),d=function(){var e=(0,r.useState)(""),t=(0,n.Z)(e,2),o=t[0],s=t[1],d=(0,r.useState)(null),f=(0,n.Z)(d,2),h=f[0],v=f[1],p=(0,i.lr)(),g=(0,n.Z)(p,2),_=g[0],k=g[1],b=_.get("query"),C=function(){h&&h.map((function(e){return k({id:e.id})}))};return console.log("SearchedMovie",h),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===o&&c.Am.info("Please enter movie name!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),k({query:o}),""!==o&&(console.log("query",b),a(b).then((function(e){0===e.data.results.length&&c.Am.error("No movies found :(",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),v(e.data.results)})).catch((function(e){console.log(e)})))},children:[(0,m.jsx)("input",{className:l.Z.input,id:"input",onChange:function(e){s(e.target.value),k({query:e.target.value})}}),(0,m.jsx)("button",{className:l.Z.searchBtn,children:"Search"})]}),h&&h.map((function(e){return console.log(e.title),(0,m.jsx)(u.e,{getMovieId:C,movie:e},e.id)}))]})}},652:function(e,t){t.Z={input:"movies_input__NHKdu",searchBtn:"movies_searchBtn__GVkCX",movieList:"movies_movieList__U-mld"}}}]);
//# sourceMappingURL=903.12347e29.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[504],{854:function(e,t,n){var i=n(881),o=n(184);t.Z=function(){return(0,o.jsx)(i.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#5953B7","#066FAB","#28B9CD","#2855CD"]})}},203:function(e,t,n){n.d(t,{e:function(){return a}});var i=n(689),o=n(87),r=n(652),s=n(184),a=function(e){var t=e.movie,n=e.onClickFunction,a=(0,i.TH)();return(0,s.jsx)("ul",{className:r.Z.movieList,children:(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{children:(0,s.jsx)("svg",{class:"icon",width:"20px",height:"20px",children:(0,s.jsx)("use",{href:"../styles/symbol-defs.svg#icon-play"})})}),(0,s.jsx)(o.rU,{className:r.Z.movieListLink,state:{from:a},onClick:n,to:"/movies/".concat(t.id),children:t.title})]})})}},504:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(439),o=n(791),r=n(87),s=n(294);var a=function(e){return s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=a42bf4f31f7d8fb3cfc076b340ef7462"))},u=n(652),c=n(184);var l=function(e){var t=e.handleFormSubmit,n=e.handleInputValue;return(0,c.jsxs)("form",{onSubmit:t,children:[(0,c.jsx)("input",{className:u.Z.input,id:"input",onChange:n}),(0,c.jsx)("button",{className:u.Z.searchBtn,children:"Search"})]})},m=n(203),h=n(854),d=n(174),f=function(){var e=(0,o.useState)(""),t=(0,i.Z)(e,2),n=t[0],s=t[1],u=(0,o.useState)(null),f=(0,i.Z)(u,2),p=f[0],v=f[1],g=(0,o.useState)(!1),b=(0,i.Z)(g,2),k=b[0],_=b[1],x=(0,r.lr)(),j=(0,i.Z)(x,2),C=j[0],Z=j[1],L=C.get("query");(0,o.useEffect)((function(){null!==L&&(_(!0),a(L).then((function(e){0===e.data.results.length&&d.Am.error("No movies found :(",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),v(e.data.results)})).catch((function(e){console.log(e)})).finally(_(!1)))}),[L]);var w=function(){p&&p.map((function(e){return Z({id:e.id})}))};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{handleFormSubmit:function(e){e.preventDefault(),""===n&&d.Am.info("Please enter movie name!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),Z({query:n})},handleInputValue:function(e){s(e.target.value)}}),k&&(0,c.jsx)(h.Z,{}),p&&p.map((function(e){return(0,c.jsx)(m.e,{getMovieId:w,movie:e},e.id)}))]})}},652:function(e,t){t.Z={input:"movies_input__NHKdu",searchBtn:"movies_searchBtn__GVkCX",movieList:"movies_movieList__U-mld",movieListLink:"movies_movieListLink__SKTUI"}}}]);
//# sourceMappingURL=504.02bf78d8.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[504],{126:function(e,t,n){n.d(t,{e:function(){return a}});var i=n(689),o=n(87),r=n(652),s=n(184),a=function(e){var t=e.movies,n=e.onClickFunction,a=(0,i.TH)();return(0,s.jsx)("ul",{className:r.Z.movieList,children:t.map((function(e){return(0,s.jsx)("li",{className:r.Z.subTitle,children:(0,s.jsx)(o.rU,{className:r.Z.movieListLink,state:{from:a},onClick:n,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}},504:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(439),o=n(791),r=n(87),s=n(294);var a=function(e){return s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=a42bf4f31f7d8fb3cfc076b340ef7462"))},u=n(652),c=n(184);var l=function(e){var t=e.handleFormSubmit,n=e.handleInputValue;return(0,c.jsxs)("form",{onSubmit:t,children:[(0,c.jsx)("input",{className:u.Z.input,id:"input",onChange:n}),(0,c.jsx)("button",{className:u.Z.searchBtn,children:"Search"})]})},m=n(126),d=n(263),f=n(174),v=function(){var e=(0,o.useState)(""),t=(0,i.Z)(e,2),n=t[0],s=t[1],u=(0,o.useState)(null),v=(0,i.Z)(u,2),h=v[0],p=v[1],g=(0,o.useState)(!1),_=(0,i.Z)(g,2),k=_[0],b=_[1],Z=(0,r.lr)(),j=(0,i.Z)(Z,2),x=j[0],C=j[1],L=x.get("query");(0,o.useEffect)((function(){null!==L&&(b(!0),a(L).then((function(e){0===e.data.results.length&&f.Am.error("No movies found :(",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),p(e.data.results)})).catch((function(e){console.log(e)})).finally(b(!1)))}),[L]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{handleFormSubmit:function(e){e.preventDefault(),""===n&&f.Am.info("Please enter movie name!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),C({query:n})},handleInputValue:function(e){s(e.target.value)}}),k&&(0,c.jsx)(d.Z,{}),h&&(0,c.jsx)(m.e,{getMovieId:function(){h&&h.map((function(e){return C({id:e.id})}))},movies:h})]})}},652:function(e,t){t.Z={input:"movies_input__NHKdu",searchBtn:"movies_searchBtn__GVkCX",movieList:"movies_movieList__U-mld",movieListLink:"movies_movieListLink__SKTUI",subTitle:"movies_subTitle__Ygv8k"}}}]);
//# sourceMappingURL=504.5a3e9c9f.chunk.js.map
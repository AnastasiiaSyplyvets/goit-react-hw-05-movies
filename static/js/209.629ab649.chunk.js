"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[209],{126:function(e,n,t){t.d(n,{e:function(){return u}});var i=t(689),o=t(87),c=t(652),r=t(184),u=function(e){var n=e.movie,t=e.onClickFunction,u=(0,i.TH)();return(0,r.jsx)("ul",{className:c.Z.movieList,children:(0,r.jsx)("li",{children:(0,r.jsx)(o.rU,{state:{from:u},onClick:t,to:"/movies/".concat(n.id),children:n.title})})})}},209:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var i=t(439),o=t(791),c=t(87),r=t(294);var u=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=a42bf4f31f7d8fb3cfc076b340ef7462")},a=t(126),l="home_title__mrNy6",s=t(184),f=function(){var e=(0,o.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],f=(0,c.lr)(),m=(0,i.Z)(f,2),d=m[0],h=m[1],_=function(){t.map((function(e){return h({id:e.id})})),console.log(d.get("id"))};return(0,o.useEffect)((function(){u().then((function(e){r(e.data.results)})).catch((function(e){console.log(e)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:l,children:"Trending Today"}),(0,s.jsx)("ul",{children:t.map((function(e){return e.title?(0,s.jsx)(a.e,{movie:e,onClickFunction:_}):null}))})]})}},652:function(e,n){n.Z={input:"movies_input__NHKdu",searchBtn:"movies_searchBtn__GVkCX",movieList:"movies_movieList__U-mld"}}}]);
//# sourceMappingURL=209.629ab649.chunk.js.map
(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";var r=n(1),c=Object(r.b)("contacts/addRequest"),a=Object(r.b)("contacts/addSuccess"),o=Object(r.b)("contacts/addError"),u=Object(r.b)("contacts/fetchRequest"),s=Object(r.b)("contacts/fetchSuccess"),i=Object(r.b)("contacts/fetchError"),b=Object(r.b)("contacts/removeRequest"),l=Object(r.b)("contacts/removeSuccess"),j=Object(r.b)("contacts/removeError"),O=Object(r.b)("FILTER_CONTACTS");e.a={addContactRequest:c,addContactSuccess:a,addContactError:o,fetchContactRequest:u,fetchContactSuccess:s,fetchContactError:i,removeContactRequest:b,removeContactSuccess:l,removeContactError:j,filterContact:O}},18:function(t,e,n){"use strict";e.a={HomeView:"/",LoginView:"/login",RegisterView:"/register",ContactsView:"/contacts"}},25:function(t,e,n){"use strict";var r=n(16),c=n.n(r),a=n(5);c.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var o=function(t){c.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){c.a.defaults.headers.common.Authorization=""};e.a={register:function(t){return function(e){e(a.a.registerRequest()),c.a.post("/users/signup",t).then((function(t){o(t.data.token),e(a.a.registerSuccess(t.data))})).catch((function(t){return e(a.a.registerError(t),alert("This email address is already in use, please try another!"))}))}},logOut:function(){return function(t){t(a.a.logoutRequest()),c.a.post("/users/logout").then((function(){u(),t(a.a.logoutSuccess())})).catch((function(e){return t(a.a.logoutError(e))}))}},logIn:function(t){return function(e){e(a.a.loginRequest()),c.a.post("/users/login",t).then((function(t){o(t.data.token),e(a.a.loginSuccess(t.data))})).catch((function(t){return e(a.a.loginError(t),alert("This email address is not registered on our website, please register!"))}))}},getCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(o(n),t(a.a.getCurrentUserRequest()),c.a.get("/users/current").then((function(e){var n=e.data;return t(a.a.getCurrentUserSuccess(n))})).catch((function(t){return a.a.getCurrentUserError(t)})))}}}},5:function(t,e,n){"use strict";var r=n(1),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/loginRequest"),s=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),l=Object(r.b)("auth/logoutSuccess"),j=Object(r.b)("auth/logoutError"),O=Object(r.b)("auth/getCurrentUserRequest"),g=Object(r.b)("auth/getCurrentUserSuccess"),h=Object(r.b)("auth/getCurrentUserError");e.a={registerRequest:c,registerSuccess:a,registerError:o,logoutRequest:b,logoutSuccess:l,logoutError:j,loginRequest:u,loginSuccess:s,loginError:i,getCurrentUserRequest:O,getCurrentUserSuccess:g,getCurrentUserError:h}},95:function(t,e,n){"use strict";n.r(e);var r,c,a,o,u,s=n(2),i=n(0),b=n.n(i),l=n(24),j=n.n(l),O=n(20),g=n(21),h=n(23),d=n(22),f=n(18),p=n(32),m=n(7),C=n(17),S=n(25),y=Object(C.b)((function(t){return{name:t.auth.user.name,avatar:"https://e7.pngegg.com/pngimages/544/445/png-clipart-marge-simpson-catwoman-batman-homer-simpson-bart-simpson-catwoman-fictional-characters-fictional-character.png"}}),{onLogout:S.a.logOut})((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:e,alt:"avatar",width:"50"}),Object(s.jsxs)("span",{children:["Welcome, ",n]}),Object(s.jsx)("button",{type:"button",onClick:r,children:"logout"})]})})),v=n(43),E=n.n(v),R=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(s.jsx)(E.a,{type:"Rings",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),n}(b.a.Component),x=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,105))})),k=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,106))})),q=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,107))})),w=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,108))})),U={loading:{color:"blue"}},V=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(p.a,{children:Object(s.jsxs)(i.Suspense,{fallback:Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("h1",{style:U.loading,children:["Loading... ",Object(s.jsx)(R,{})]})}),children:[this.props.isAuthenticated&&Object(s.jsx)(y,{}),Object(s.jsxs)(m.d,{children:[Object(s.jsx)(m.b,{exact:!0,path:f.a.HomeView,component:x}),Object(s.jsx)(m.b,{exact:!0,path:f.a.LoginView,component:k}),Object(s.jsx)(m.b,{exact:!0,path:f.a.RegisterView,component:q}),Object(s.jsx)(m.b,{exact:!0,path:f.a.ContactsView,component:w}),Object(s.jsx)(m.a,{to:"/"})]})]})})})}}]),n}(i.Component),z=Object(C.b)((function(t){return{isAuthenticated:t.auth.token}}),{onGetCurrentUser:S.a.getCurrentUser})(V),L=n(44),A=n(4),F=n(46),T=n(8),B=n(10),I=n(1),G=Object(I.c)([],(r={},Object(A.a)(r,B.a.addContactSuccess,(function(t,e){return[].concat(Object(F.a)(t),[e.payload])})),Object(A.a)(r,B.a.fetchContactSuccess,(function(t,e){return e.payload})),Object(A.a)(r,B.a.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),r)),H=Object(I.c)(!1,(c={},Object(A.a)(c,B.a.addContactRequest,(function(){return!0})),Object(A.a)(c,B.a.addContactSuccess,(function(){return!1})),Object(A.a)(c,B.a.addContactError,(function(){return!1})),Object(A.a)(c,B.a.fetchContactRequest,(function(){return!0})),Object(A.a)(c,B.a.fetchContactSuccess,(function(){return!1})),Object(A.a)(c,B.a.fetchContactError,(function(){return!1})),Object(A.a)(c,B.a.removeContactRequest,(function(){return!0})),Object(A.a)(c,B.a.removeContactSuccess,(function(){return!1})),Object(A.a)(c,B.a.removeContactError,(function(){return!1})),c)),J=Object(I.c)("",Object(A.a)({},B.a.filterContact,(function(t,e){return e.payload}))),D=Object(T.c)({items:G,loading:H,filter:J}),M=n(15),N=n(45),P=n.n(N),W=n(5),_={name:null,email:null},K=Object(I.c)(_,(a={},Object(A.a)(a,W.a.registerSuccess,(function(t,e){return e.payload.user})),Object(A.a)(a,W.a.loginSuccess,(function(t,e){return e.payload.user})),Object(A.a)(a,W.a.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(A.a)(a,W.a.logoutSuccess,(function(){return _})),a)),Q=Object(I.c)(null,(o={},Object(A.a)(o,W.a.registerSuccess,(function(t,e){return e.payload.token})),Object(A.a)(o,W.a.loginSuccess,(function(t,e){return e.payload.token})),Object(A.a)(o,W.a.logoutSuccess,(function(){return null})),o)),X=Object(I.c)(null,(u={},Object(A.a)(u,W.a.registerError,(function(t,e){return e.payload})),Object(A.a)(u,W.a.loginError,(function(t,e){return e.payload})),Object(A.a)(u,W.a.logoutError,(function(t,e){return e.payload})),Object(A.a)(u,W.a.getCurrentUserError,(function(t,e){return e.payload})),u)),Y=Object(T.c)({user:K,token:Q,error:X}),Z={key:"auth",storage:P.a,whitelist:["token"]},$=Object(I.a)({reducer:{contacts:D,auth:Object(M.g)(Z,Y)},middleware:Object(I.d)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})}),tt=Object(M.h)($);j.a.render(Object(s.jsx)(C.a,{store:$,children:Object(s.jsx)(L.a,{loading:null,persistor:tt,children:Object(s.jsx)(z,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.de765e36.chunk.js.map
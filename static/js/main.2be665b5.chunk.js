(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/testOne.70275227.png"},56:function(e,t,a){e.exports=a.p+"static/media/testTwo.3aa26c43.png"},57:function(e,t,a){e.exports=a.p+"static/media/testThree.841a7d8b.png"},66:function(e,t,a){e.exports=a(97)},71:function(e,t,a){},72:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),r=a.n(i),c=(a(71),a(6)),s=a(10),o=a(7),m=a(8),u=a(22),d=a(5),h=a(28),b=a(26),p=a(65),g=(a(72),a(54)),f=a(23);var E=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(g.a,{className:"border-top justify-content-between p-3 bg-dark"},l.a.createElement(f.a,{className:"p-0 bg-dark text-light",md:3,sm:12},"Wizative"),l.a.createElement(f.a,{className:"p-0 d-flex justify-content-end text-light",md:3},l.a.createElement("p",null,"\xa9 2020 Wizative.")))))},v=a(99);var k=function(e){return l.a.createElement(v.a,{className:"bg-dark jumbotron-fluid p-0"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center bg-dark"},l.a.createElement(f.a,{md:8,sm:6},e.title&&l.a.createElement("h1",{className:"display-4 font-weight-light text-light"},e.title),e.subTitle&&l.a.createElement("h3",{className:"text-light"},e.subTitle),e.text&&l.a.createElement("h5",{className:"display-6 font-weight-light text-light"},e.text)))))},w=a(20),y=a(55),N=a.n(y),x=a(56),S=a.n(x),j=a(57),T=a.n(j),C=a(41);var O=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return l.a.createElement(C.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var W=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(O,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},z=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var a=Object(w.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(W,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Test 1",subTitle:"Test 1",imgSrc:N.a,link:"https://www.google.com/",selected:!1},{id:1,title:"Test 2",subTitle:"Test 2",imgSrc:S.a,link:"https://twitter.com/explore",selected:!1},{id:2,title:"Test 3",subTitle:"Test 3",imgSrc:T.a,link:"https://www.facebook.com/",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var A=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(z,null))};var I=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center text-justify"},l.a.createElement(f.a,{md:8},e.children)))};var L=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title}),l.a.createElement(I,null,l.a.createElement("p",null,"An Industry Leader"),l.a.createElement("p",null,"We\u2019re a young and talented group of entrepreneurs and engineers with a groundbreaking idea that we hope will contribute towards a better tomorrow. We provide smart solutions for companies of all sizes and pride ourselves on our unparalleled, dedicated service."),l.a.createElement("p",null,"At Wizative, we believe that the right understanding and technological edge can lead companies towards a successful future. We always seek valuable feedback from our clients in order to learn and evolve. Contact us today to set up a meeting with one of our sales representatives or request a demo.")))},F=a(19),B=a(13),G=a(59),H=a(58),J=a.n(H),M=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(F.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),J.a.post("/api/email",n.state).then((function(e){n.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,{title:this.props.title}),l.a.createElement(I,null,l.a.createElement(B.a,{onSubmit:this.handleSubmit},l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(B.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(B.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(B.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(G.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),q=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Wizative",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Introducing Wizative",subTitle:"True Empowerment",text:"Welcome to Wizative, the advanced Software Startup paving the way to the future. We are a team of like-minded and determined individuals, all sharing a vision for success. We believe that our sophisticated technology has the potential to become an industry sensation. Would you like to find out more? Explore our website today and check some of our projects below."},about:{title:"About us"},contact:{title:"Keep in touch"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0 bg-dark text-justify",fluid:!0},l.a.createElement(b.a,{className:"border-bottom navbar-dark",bg:"dark",expand:"lg"},l.a.createElement(u.b,{className:"nav-link",to:"/"},l.a.createElement(b.a.Brand,null,"Wizative")),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(p.a,{className:"ml-auto "},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(L,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(M,{title:e.state.contact.title})}}),l.a.createElement(E,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(96);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.2be665b5.chunk.js.map
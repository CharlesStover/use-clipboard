(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),i=a(2),c=a(5),s=a.n(c);a(11);a(12);function u(e){var t=e.children;return l.a.createElement("section",{className:"code"},l.a.createElement("h3",null,"Code"),l.a.createElement(d,{lang:"jsx"},t.trim()))}var p=a(1),m=a.n(p);a(14),a(15),a(16),a(17),a(18),a(19),a(20),a(21),a(22),a(23);function d(e){var t=e.children,a=e.lang,n=function(e){var t=e.children,a=e.lang;return{dangerouslySetInnerHTML:l.a.useMemo((function(){return{__html:m.a.highlight(t,m.a.languages[a],a)}}),[t,a])}}({children:t,lang:a}).dangerouslySetInnerHTML;return l.a.createElement("pre",{className:"language-".concat(a)},l.a.createElement("code",{className:"language-".concat(a),dangerouslySetInnerHTML:n}))}a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){var e=function(){var e=s()(),t=Object(i.a)(e,2),a=t[0],n=t[1],r=l.a.useState("some value"),o=Object(i.a)(r,2),c=o[0],u=o[1],p=l.a.useCallback((function(e){var t=e.currentTarget.value;u(t)}),[]),m=l.a.useCallback((function(){n(c)}),[n,c]);return l.a.useEffect((function(){window.document.body.scrollIntoView()}),[]),{clipboard:a,handleTextAreaChange:p,handleTextAreaCopyClick:m,isInputCopyDisabled:a===c,textAreaValue:c}}(),t=e.clipboard,a=e.handleTextAreaChange,n=e.handleTextAreaCopyClick,r=e.isInputCopyDisabled,o=e.textAreaValue;return l.a.createElement("main",null,l.a.createElement("h1",null,l.a.createElement("a",{href:"https://www.npmjs.com/package/use-clippy",rel:"noreferrer noopener",target:"_blank",title:"use-clippy - npm"},"use-clippy")," ","demo"),l.a.createElement("div",null,l.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=useClippy%20lets%20you%20manage%20your%20users'%20clipboards%20with%20a%20React%20hook.&url=https://www.npmjs.com/package/use-clippy&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment",rel:"nofollow noreferrer noopener",target:"_blank",title:"Share use-clippy on Twitter"},l.a.createElement("img",{alt:"Tweet",height:20,src:"https://img.shields.io/twitter/url/http/shields.io.svg?style=social"})),l.a.createElement("img",{alt:"npm version",height:20,src:"https://img.shields.io/npm/v/use-clippy.svg"}),l.a.createElement("img",{alt:"minzipped size",height:20,src:"https://img.shields.io/bundlephobia/minzip/use-clippy.svg"}),l.a.createElement("img",{alt:"npm downloads",height:20,src:"https://img.shields.io/npm/dt/use-clippy.svg"})),l.a.createElement("section",null,l.a.createElement("h2",null,"Reading your clipboard"," ",l.a.createElement("span",{"aria-label":"",role:"img"},"\ud83d\udc53")),l.a.createElement("p",null,"Your clipboard's contents are displayed here."),l.a.createElement("textarea",{disabled:!0,value:t}),l.a.createElement(u,null,"\nconst [clipboard] = useClippy();\n\nreturn <textarea disabled value={clipboard} />;\n        ")),l.a.createElement("section",null,l.a.createElement("h2",null,"Setting your clipboard"," ",l.a.createElement("span",{"aria-label":"",role:"img"},"\u270d")),l.a.createElement("p",null,"Clicking the ",l.a.createElement("em",null,"Copy")," button will set your clipboard's value to the input value."),l.a.createElement("p",null,"The ",l.a.createElement("em",null,"Copy")," button is disabled if your clipboard already matches the input value."),l.a.createElement("p",null,"The textarea in the previous section will update."),l.a.createElement("textarea",{onChange:a,value:o}),l.a.createElement("button",{disabled:r,onClick:n},"Copy"),l.a.createElement(u,null,"\nconst [clipboard, setClipboard] = useClippy();\n\nconst isDisabled = clipboard === textAreaValue;\n\nconst handleClick = React.useCallback(() => {\n  setClipboard(textAreaValue);\n}, [setClipboard, textAreaValue]);\n\nreturn (\n  <button disabled={isDisabled} onClick={handleClick}>\n    Copy\n  </button>\n);\n        ")),l.a.createElement("section",null,l.a.createElement("h2",null,"Sponsor"," ",l.a.createElement("span",{"aria-label":"",role:"img"},"\ud83d\udc97")),l.a.createElement("p",null,"If you are a fan of this project, you may"," ",l.a.createElement("a",{href:"https://github.com/sponsors/CharlesStover",rel:"nofollow noreferrer noopener",target:"_blank",title:"Sponsor @CharlesStover on GitHub Sponsors"},"become a sponsor")," ","via GitHub's Sponsors Program.")," "))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(25)}},[[6,1,2]]]);
//# sourceMappingURL=main.ab2a8a7c.chunk.js.map
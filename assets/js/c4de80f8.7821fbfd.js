(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[7943],{6489:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return o}});var i=s(22122),n=s(19756),a=(s(67294),s(3905)),r=["components"],l={title:"Install"},d={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Install",description:"Grid.js comes in multiple formats including UMD and ES module:",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",editUrl:"https://github.com/grid-js/website/edit/master/docs/install.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1623062111,formattedLastUpdatedAt:"6/7/2021",frontMatter:{title:"Install"},sidebar:"sidebar",previous:{title:"License",permalink:"/docs/license"},next:{title:"Hello World",permalink:"/docs/hello-world"}},m=[{value:"Node.js",id:"nodejs",children:[]},{value:"Browser",id:"browser",children:[{value:"unpkg",id:"unpkg",children:[]},{value:"jsdelivr",id:"jsdelivr",children:[]}]}],p={toc:m};function o(e){var t=e.components,s=(0,n.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Grid.js comes in multiple formats including ",(0,a.kt)("strong",{parentName:"p"},"UMD")," and ",(0,a.kt)("strong",{parentName:"p"},"ES module"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gridjs.js"),(0,a.kt)("li",{parentName:"ul"},"gridjs.modern.js"),(0,a.kt)("li",{parentName:"ul"},"gridjs.umd.js"),(0,a.kt)("li",{parentName:"ul"},"gridjs.module.js"),(0,a.kt)("li",{parentName:"ul"},"theme/"),(0,a.kt)("li",{parentName:"ul"},"i10n/"),(0,a.kt)("li",{parentName:"ul"},"plugins/")),(0,a.kt)("p",null,"Explore the project output on ",(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com/browse/gridjs/dist/"},"https://unpkg.com/browse/gridjs/dist/"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can either install Grid.js using NPM or directly include the JavaScript and CSS files from a CDN"))),(0,a.kt)("h2",{id:"nodejs"},"Node.js"),(0,a.kt)("p",null,"Grid.js is available as ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/gridjs"},(0,a.kt)("inlineCode",{parentName:"a"},"gridjs"))," on NPM. To install the package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install gridjs --save\n")),(0,a.kt)("p",null,"Above command will install all the dependencies as well. Then include both JavaScript and CSS files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Grid } from "gridjs";\nimport "gridjs/dist/theme/mermaid.css";\n')),(0,a.kt)("h2",{id:"browser"},"Browser"),(0,a.kt)("p",null,"Grid.js is also available on following CDNs and can be used directly."),(0,a.kt)("h3",{id:"unpkg"},"unpkg"),(0,a.kt)("p",null,"You can download Grid.js from ",(0,a.kt)("a",{parentName:"p",href:"https://unpkg.com/browse/gridjs/dist/"},"unpkg.com/browse/gridjs/dist"),"."),(0,a.kt)("p",null,"Add both JavaScript and css files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module">\n    import {\n        Grid,\n        html\n    } from "https://unpkg.com/gridjs?module";\n<\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="theme/mermaid.min.css"',title:'"theme/mermaid.min.css"'},'<link href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" rel="stylesheet" />\n')),(0,a.kt)("p",null,"You can also import the UMD format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="gridjs.umd.js"',title:'"gridjs.umd.js"'},'<script src="https://unpkg.com/gridjs/dist/gridjs.umd.js"><\/script>\n')),(0,a.kt)("h3",{id:"jsdelivr"},"jsdelivr"),(0,a.kt)("p",null,"Grid.js is available on ",(0,a.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/gridjs"},"jsdelivr.com/package/npm/gridjs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="gridjs.umd.js"',title:'"gridjs.umd.js"'},'<script src="https://cdn.jsdelivr.net/npm/gridjs/dist/gridjs.umd.js"><\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="theme/mermaid.min.css"',title:'"theme/mermaid.min.css"'},'<link href="https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css" rel="stylesheet" />\n')))}o.isMDXComponent=!0}}]);
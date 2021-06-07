(self.webpackChunkgridjs_website=self.webpackChunkgridjs_website||[]).push([[5431],{8008:function(e,n,r){"use strict";r.d(n,{$:function(){return u}});var t=r(93552),a=r(41904),o={search:{placeholder:"\ud83d\udd0d Busqueda..."},sort:{sortAsc:"Ordenar la columna en orden ascendente",sortDesc:"Ordenar la columna en orden descendente"},pagination:{previous:"Anterior",next:"Siguiente",navigate:function(e,n){return"P\xe1gina "+e+" de "+n},page:function(e){return"P\xe1gina "+e},showing:"Mostrando los resultados",of:"sobre",to:"a",results:""},loading:"Cargando...",noRecordsFound:"Nig\xfan resultado encontrado",error:"Se produjo un error al recuperar datos"},s={search:{placeholder:"\ud83d\udd0d Recherche..."},sort:{sortAsc:"Trier la colonne dans l'ordre croissant",sortDesc:"Trier la colonne dans l'ordre d\xe9croissant"},pagination:{previous:"Pr\xe9c\xe9dent",next:"Suivant",navigate:function(e,n){return"Page "+e+" de "+n},page:function(e){return"Page "+e},showing:"Affichage des r\xe9sultats",of:"sur",to:"\xe0",results:""},loading:"Chargement...",noRecordsFound:"Aucun r\xe9sultat trouv\xe9",error:"Une erreur est survenue lors de la r\xe9cup\xe9ration des donn\xe9es"},i=r(16589),c=r(67294),d=r(85384),u=function(e){function n(){return e.apply(this,arguments)||this}return(0,t.Z)(n,e),n.prototype.render=function(){return c.createElement(i.Z,{children:this.props.children,transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:Object.assign({Grid:a.rj,html:a.dy,h:a.h,gCreateRef:a.Vf,gComponent:a.wA,PluginPosition:a.t8,BaseComponent:a.H6,CodeBlock:i.Z,useEffect:c.useEffect,useRef:c.useRef,faker:d,esES:o,frFR:s},this.props.scope)})},n}(c.Component)},59903:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),s=r(8008),i=["components"],c={id:"import-async",title:"Async data import",keywords:["javascript","table","javascript table","gridjs","grid js","async","async function"]},d={unversionedId:"examples/import-async",id:"examples/import-async",isDocsHomePage:!1,title:"Async data import",description:"The data attribute accepts an async function, too. This is useful for making any external HTTP calls and loading",source:"@site/docs/examples/import-async.md",sourceDirName:"examples",slug:"/examples/import-async",permalink:"/docs/examples/import-async",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/import-async.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,formattedLastUpdatedAt:"7/1/2020",frontMatter:{id:"import-async",title:"Async data import",keywords:["javascript","table","javascript table","gridjs","grid js","async","async function"]},sidebar:"sidebar",previous:{title:"Dynamic data import",permalink:"/docs/examples/import-function"},next:{title:"Import server-side data",permalink:"/docs/examples/server"}},u=[],p={toc:u};function l(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," attribute accepts an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function, too. This is useful for making any external HTTP calls and loading\ndata from a server. "),(0,o.kt)("p",null,"Here we have passed a function to the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," attribute which returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," object and resolves\nthe data after 1 second:"),(0,o.kt)(s.$,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  data: () => {\n    return new Promise(resolve => {\n      setTimeout(() =>\n        resolve([\n          ['John', 'john@example.com', '(353) 01 222 3333'],\n          ['Mark', 'mark@gmail.com', '(01) 22 888 4444']\n        ]), 1000);\n    });\n  }\n});\n",mdxType:"LiveExample"}))}l.isMDXComponent=!0}}]);
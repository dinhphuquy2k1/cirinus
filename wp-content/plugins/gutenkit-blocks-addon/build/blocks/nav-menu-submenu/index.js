(()=>{var e,n={6867:(e,n,t)=>{"use strict";const o=window.wp.blocks,u=window.wp.i18n,i=window.wp.element,r=window.wp.blockEditor,a=window.wp.components,l=window.wp.primitives,s=window.ReactJSXRuntime,k=(0,s.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(l.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})}),c=(0,s.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(l.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})}),g=(0,s.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(l.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})}),d=(0,s.jsx)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(l.Path,{d:"M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"})}),m=window.wp.hooks,b=(0,i.memo)((({attributes:e,setAttributes:n,device:t,advancedControl:o,parentClass:i,clientId:l})=>{const{GkitTabs:b,GkitPanelBody:v,GkitResponsive:p,GkitChoose:w,GkitSlider:h,GkitRangeUnit:x,GkitBackgrounGroup:S,GkitColor:C,ChildToParent:_,GkitTypography:I,GkitBoxControl:M,GkitBorderControl:B}=window.gutenkit.components,{gkitResponsiveValue:j,responsiveHelper:y,useFontFamilyinBlock:f,useDeviceList:T}=window.gutenkit.helpers;return f([e?.gkitSubMenuItemTypography]),(0,m.addFilter)("gutenkit.advancedControl.width.exclude","gutenkit/excludeWidthFromNavMenuSubmenu",(e=>e.add("gutenkit/nav-menu-submenu"))),(0,m.addFilter)("gutenkit.advancedControl.position.exclude","gutenkit/excludePositionFromNavMenuSubmenu",(e=>e.add("gutenkit/nav-menu-submenu"))),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.InspectorControls,{children:[(0,s.jsx)(_,{clientId:l}),(0,s.jsx)(b,{type:"top-level",tabs:[{name:"content",title:(0,u.__)("Settings","gutenkit-blocks-addon")},{name:"style",title:(0,u.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,u.__)("Advanced","gutenkit-blocks-addon")}],children:i=>{switch(i.name){case"content":return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(v,{title:(0,u.__)("Settings","gutenkit-blocks-addon"),children:(0,s.jsx)(p,{children:(0,s.jsx)(x,{label:(0,u.__)("Container Width","gutenkit-blocks-addon"),value:j(e,"gkitSubMenuContainerWidth",t),onChange:e=>y("gkitSubMenuContainerWidth",e,t,n),units:{px:{min:200,max:1e3,step:1},rem:{min:1,max:1e3},em:{min:1,max:1e3},vw:{min:200,max:1e3,step:1}}})})})});case"style":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{title:(0,u.__)("Submenu Wrapper","gutenkit-blocks-addon"),children:(0,s.jsx)(p,{children:(0,s.jsx)(w,{label:(0,u.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,u.__)("Left","gutenkit-blocks-addon"),value:"flex-start",icon:k},{label:(0,u.__)("Center","gutenkit-blocks-addon"),value:"center",icon:c},{label:(0,u.__)("Right","gutenkit-blocks-addon"),value:"flex-end",icon:g},{label:(0,u.__)("Space Between","gutenkit-blocks-addon"),value:"space-between",icon:d}],value:j(e,"gkitSubMenuAlignment",t),onChange:e=>y("gkitSubMenuAlignment",e,t,n)})})}),(0,s.jsxs)(v,{title:(0,u.__)("Submenu Item","gutenkit-blocks-addon"),children:[(0,s.jsx)(p,{children:(0,s.jsx)(h,{label:(0,u.__)("Item Space Between","gutenkit-blocks-addon"),value:j(e,"gkitSubMenuItemSpaceBetween",t),onChange:e=>y("gkitSubMenuItemSpaceBetween",e,t,n),units:{px:{min:200,max:1e3,step:1}}})}),(0,s.jsx)(I,{label:(0,u.__)("Typography","gutenkit-blocks-addon"),value:e?.gkitSubMenuItemTypography,onChange:e=>n({gkitSubMenuItemTypography:e})}),(0,s.jsx)(b,{type:"normal",tabs:[{name:"normal",title:(0,u.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,u.__)("Hover","gutenkit-blocks-addon")},{name:"active",title:(0,u.__)("Active","gutenkit-blocks-addon")}],children:t=>{switch(t.name){case"normal":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{label:(0,u.__)("Background","gutenkit-blocks-addon"),onChange:e=>n({gkitSubMenuItemBackgroundNormal:e}),value:e?.gkitSubMenuItemBackgroundNormal,exclude:{video:!0,image:!0}}),(0,s.jsx)(C,{label:(0,u.__)("Text Color","gutenkit-blocks-addon"),value:e?.gkitSubMenuItemTextColorNormal,onChange:e=>n({gkitSubMenuItemTextColorNormal:e})}),(0,s.jsx)(B,{label:(0,u.__)("Border","gutenkit-blocks-addon"),value:e?.gkitSubMenuItemBorderNormal,onChange:e=>n({gkitSubMenuItemBorderNormal:e})})]});case"hover":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{label:(0,u.__)("Background","gutenkit-blocks-addon"),onChange:e=>n({gkitSubMenuItemBackgroundHover:e}),value:e?.gkitSubMenuItemBackgroundHover,exclude:{video:!0,image:!0}}),(0,s.jsx)(C,{label:(0,u.__)("Text Color","gutenkit-blocks-addon"),value:e?.gkitSubMenuItemTextColorHover,onChange:e=>n({gkitSubMenuItemTextColorHover:e})}),(0,s.jsx)(C,{label:(0,u.__)("Border Color","gutenkit-blocks-addon"),value:e?.gkitSubMenuItemBorderColorHover,onChange:e=>n({gkitSubMenuItemBorderColorHover:e})})]});case"active":return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{label:(0,u.__)("Background","gutenkit-blocks-addon"),onChange:e=>n({gkitSubMenuItemBackgroundActive:e}),value:e?.gkitSubMenuItemBackgroundActive,exclude:{video:!0,image:!0}}),(0,s.jsx)(C,{label:(0,u.__)("Text Color","gutenkit-blocks-addon"),value:e?.gkitSubMenuItemTextColorActive,onChange:e=>n({gkitSubMenuItemTextColorActive:e})}),(0,s.jsx)(C,{label:(0,u.__)("Border Color","gutenkit-blocks-addon"),value:e?.gkitSubMenuItemBorderColorActive,onChange:e=>n({gkitSubMenuItemBorderColorActive:e})})]})}}}),(0,s.jsx)(a.__experimentalDivider,{}),(0,s.jsx)(p,{children:(0,s.jsx)(M,{label:(0,u.__)("Padding","gutenkit-blocks-addon"),values:j(e,"gkitSubMenuItemPadding",t),onChange:e=>y("gkitSubMenuItemPadding",e,t,n)})}),(0,s.jsx)(p,{children:(0,s.jsx)(M,{label:(0,u.__)("Border radius","gutenkit-blocks-addon"),values:j(e,"gkitSubMenuItemBorderRadius",t),onChange:e=>y("gkitSubMenuItemBorderRadius",e,t,n)})})]})]});case"advanced":return(0,s.jsx)(s.Fragment,{children:o})}}})]})})}));var v=t(6942),p=t.n(v);const w=window.wp.data,h=JSON.parse('{"UU":"gutenkit/nav-menu-submenu"}'),{navMenuSubMenu:x}=window.gutenkit.editorIcon;(0,o.registerBlockType)(h.UU,{edit:function({attributes:e,setAttributes:n,clientId:t,advancedControl:i,isSelected:a}){const l=window.gutenkit.components,{useBlockStyles:k,useDeviceList:c,useDeviceType:g}=window.gutenkit.helpers,d=c(),m=l.GkitStyle,v=g(),h=(0,r.useBlockProps)(),{getBlockRootClientId:x,getBlock:S,getBlockAttributes:C}=(0,w.select)("core/block-editor"),{replaceInnerBlocks:_,selectBlock:I}=(0,w.dispatch)("core/block-editor"),M=x(t),B=C(M)?.blockClass,j=(0,r.useInnerBlocksProps)({className:p()("gkit-nav-menu-submenu-wrapper",{})},{renderAppender:!1}),y=k(e,n,"blocksCSS",((e,n,t)=>{const{parseCSS:o,backgroundGenerator:u,getBoxValue:i,getBorderValue:r,getSliderValue:a,getTypographyValue:l,getColor:s}=window.gutenkit.helpers,k=e.blockClass;return o([[{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item`,color:s(e?.gkitSubMenuItemTextColorNormal),...r(e?.gkitSubMenuItemBorderNormal)},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item > .gkit-nav-menu-link > .gkit-nav-menu-submenu-arrow`,color:s(e?.gkitSubMenuItemTextColorNormal)},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item:hover`,color:s(e?.gkitSubMenuItemTextColorHover),"border-color":e?.gkitSubMenuItemBorderColorHover},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item:hover > .gkit-nav-menu-link > .gkit-nav-menu-submenu-arrow`,color:s(e?.gkitSubMenuItemTextColorHover)},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item.gkit-nav-menu-item-active`,color:s(e?.gkitSubMenuItemTextColorActive),"border-color":e?.gkitSubMenuItemBorderColorActive},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .${n} .gkit-nav-menu-submenu-arrow`,"font-size":a(e?.gkitSubMenuIndicatorIconSize),width:a(e?.gkitSubMenuIndicatorIconSize),height:a(e?.gkitSubMenuIndicatorIconSize),color:s(e?.gkitSubMenuIndicatorColor)}],t=>[{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .${n} .gkit-nav-menu-submenu`,"min-width":a(e[`gkitSubMenuContainerWidth${t}`])},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .${k} .gkit-nav-menu-submenu-wrapper`,gap:a(e[`gkitSubMenuItemSpaceBetween${t}`])},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item`,...u(e.gkitSubMenuItemBackgroundNormal,`${t}`),...i(e[`gkitSubMenuItemBorderRadius${t}`],"border-radius")},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item .gkit-nav-menu-link`,...i(e[`gkitSubMenuItemPadding${t}`],"padding"),"justify-content":e[`gkitSubMenuAlignment${t}`],...l(e.gkitSubMenuItemTypography,`${t}`)},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item:hover`,...u(e.gkitSubMenuItemBackgroundHover,`${t}`)},{selector:`.wp-block-gutenkit-nav-menu .gkit-nav-menu .gkit-nav-menu-submenu .${k} .gkit-nav-menu-submenu-wrapper .wp-block-gutenkit-nav-menu-item.gkit-nav-menu-item-active`,...u(e.gkitSubMenuItemBackgroundActive,`${t}`)}]],t)})(e,B,d));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{blocksCSS:y}),(0,s.jsx)(b,{attributes:e,setAttributes:n,device:v,advancedControl:i,parentClass:B,clientId:t}),(0,s.jsxs)("div",{...h,children:[(0,s.jsx)("ul",{...j}),(0,s.jsx)("button",{className:"gkit-nav-menu-submenu-add-btn",onClick:()=>{const e=(0,o.createBlock)("gutenkit/nav-menu-item",{}),n=S(t)?.innerBlocks;(0,o.createBlocksFromInnerBlocksTemplate)([e]),_(t,[...n,e]),I(e.clientId)},children:(0,u.__)("Add Menu Item","gutenkit-blocks-addon")})]})]})},icon:{src:x},save:function({attributes:e}){const n=r.useBlockProps.save({id:"block-"+e?.blockID}),t=r.useInnerBlocksProps.save({className:p()("gkit-nav-menu-submenu-wrapper",{})});return(0,s.jsx)("div",{...n,children:(0,s.jsx)("ul",{...t})})}})},6942:(e,n)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function u(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=r(e,i(t)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return u.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)o.call(e,t)&&e[t]&&(n=r(n,t));return n}function r(e,n){return n?e?e+" "+n:e+n:e}e.exports?(u.default=u,e.exports=u):void 0===(t=function(){return u}.apply(n,[]))||(e.exports=t)}()}},t={};function o(e){var u=t[e];if(void 0!==u)return u.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.m=n,e=[],o.O=(n,t,u,i)=>{if(!t){var r=1/0;for(k=0;k<e.length;k++){t=e[k][0],u=e[k][1],i=e[k][2];for(var a=!0,l=0;l<t.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(a=!1,i<r&&(r=i));if(a){e.splice(k--,1);var s=u();void 0!==s&&(n=s)}}return n}i=i||0;for(var k=e.length;k>0&&e[k-1][2]>i;k--)e[k]=e[k-1];e[k]=[t,u,i]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={7404:0,1252:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var u,i,r=t[0],a=t[1],l=t[2],s=0;if(r.some((n=>0!==e[n]))){for(u in a)o.o(a,u)&&(o.m[u]=a[u]);if(l)var k=l(o)}for(n&&n(t);s<r.length;s++)i=r[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(k)},t=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var u=o.O(void 0,[1252],(()=>o(6867)));u=o.O(u)})();
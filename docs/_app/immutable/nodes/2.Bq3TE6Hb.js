import{a as n,t as h,c as E,d as T}from"../chunks/disclose-version.DXIoIYUr.js";import{h as P,aq as M,F as B,ar as F,t as f,q as c,s as l,p as j,e as I,v as p,f as N,k as v,o as C}from"../chunks/runtime.BPqVBGkt.js";import{p as L,i as x}from"../chunks/props.C-Pd8GGV.js";import{a as y}from"../chunks/store.TX-GCZ4E.js";import{s as O}from"../chunks/snippet.BRjh6LXB.js";function m(t,e,o,a){var s=t.__attributes??(t.__attributes={});P&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=o)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[M]=o),o==null?t.removeAttribute(e):typeof o!="string"&&Y(t).includes(e)?t[e]=o:t.setAttribute(e,o))}var G=new Map;function Y(t){var e=G.get(t.nodeName);if(e)return e;G.set(t.nodeName,e=[]);for(var o,a=B(t),s=Element.prototype;s!==a;){o=F(a);for(var r in o)o[r].set&&e.push(r);a=B(a)}return e}function q(t,e){var o=t.__className,a=R(e);P&&t.className===a?t.__className=a:(o!==a||P&&t.className!==a)&&(e==null?t.removeAttribute("class"):t.className=a,t.__className=a)}function R(t){return t??""}var z=h("<aside></aside>");function D(t){var e=z();n(t,e)}var K=h('<header class="__sbk__blog-header"><div class="header-content svelte-kfrs05"><span class="__sbk__blog-header-title"> </span></div></header>');function U(t,e){let o=L(e,"title",3,"Page Title");var a=K(),s=c(a),r=c(s),i=c(r,!0);l(r),l(s),l(a),f(()=>y(i,o())),n(t,a)}var W=h('<main><h1 class="__sbk__post-title"> </h1> <span class="__sbk__post-date"> </span> <hr class="__sbk__post-header-separator"> <article class="__sbk__post-content"><!></article></main>');function X(t,e){j(e,!0);var o=W(),a=c(o),s=c(a,!0);l(a);var r=p(a,2),i=c(r,!0);l(r);var d=p(r,4),g=c(d);O(g,()=>e.postContent),l(d),l(o),f(()=>{y(s,e.postTitle),y(i,e.date)}),n(t,o),I()}var V=h(`<style>body {
            margin: 0;
            padding: 0;
        }</style>`),J=h('<div><!> <div class="page-content __sbk__page-content svelte-wjbadn"><!> <!></div></div> <!>',1);function Q(t,e){const o={title:"Page Title",theme:"sbk-theme-default"};let a=L(e,"noBodySpacing",3,!0),s=C(()=>({...o,...e.config}));var r=J(),i=N(r),d=c(i);U(d,{get title(){return v(s).title}});var g=p(d,2),_=c(g);X(_,{get postTitle(){return e.postTitle},get date(){return e.date},get postContent(){return e.postContent}});var u=p(_,2);D(u),l(g),l(i);var k=p(i,2);x(k,a,b=>{var w=V();n(b,w)}),f(()=>q(i,`${v(s).theme??""} svelte-wjbadn`)),n(t,r)}var Z=h('<figcaption class="svelte-nl6xx5"> </figcaption>'),$=h('<figure class="__sbk__component-image svelte-nl6xx5"><img class="svelte-nl6xx5"> <!></figure>');function ee(t,e){var o=$(),a=c(o),s=p(a,2);x(s,()=>e.caption,r=>{var i=Z(),d=c(i,!0);l(i),f(()=>y(d,e.caption)),n(r,i)}),l(o),f(()=>{m(a,"src",e.src),m(a,"alt",e.alt),m(a,"width",e.width),m(a,"height",e.height)}),n(t,o)}var te=h('<audio class="__sbk__component-audio" controls></audio>');function ae(t,e){let o=L(e,"loop",3,!1);var a=te();f(()=>{m(a,"src",e.src),a.loop=o()}),n(t,a)}var oe=h('<a class="__sbk__component-file-attachment"><span class="icon"><!></span> <span class="name"> </span></a>');function A(t,e){j(e,!0);let o=C(()=>e.src.split("/").pop()??""),a=C(()=>v(o).split(".").pop()??"");var s=oe(),r=c(s),i=c(r);x(i,()=>["wav","mp3","ogg","mid"].includes(v(a)),_=>{var u=T("🎵");n(_,u)},_=>{var u=E(),k=N(u);x(k,()=>["png","jpg","jpeg","webp","ico"].includes(v(a)),b=>{var w=T("🖼️");n(b,w)},b=>{var w=T("📄");n(b,w)},!0),n(_,u)}),l(r);var d=p(r,2),g=c(d,!0);l(d),l(s),f(()=>{m(s,"href",e.src),y(g,v(o))}),n(t,s),I()}const H=""+new URL("../assets/pexels-pixabay-262508.C3mzXgii.jpg",import.meta.url).href,S=""+new URL("../assets/basic_drum_pattern.DTvX3ws_.wav",import.meta.url).href,se="data:text/plain;base64,";var re=h(`<h2>Changelogs</h2> <p><a href="https://github.com/Picorims/svelte-blogging-kit/blob/main/CHANGELOG.md">Check CHANGELOG.md on GitHub</a></p> <h2>Posts are plain HTML with a bit of Svelte</h2> <p>While the BlogPage component renders the page layout and handle the config and metadata, the content is just an HTML snippet.
        This means that headers are written using <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc. tags,
        and paragraphs are written using <code>&lt;p&gt;</code> tags, for example.</p> <h2>The theme is customizable</h2> <p>A default barebones theme is provided, but you can create your own theme. To do so, define a new class somewhere in your project,
        named after the theme you want to create, and pass it to the config. Then, style the elements of the page as you see fit.
        They are all prefixed with <code>__sbk__</code> to avoid conflicts with other styles. Take advantage of the devtools
        to see the classes applied to each element.</p> <h2>Getting started</h2> <p>View the source code of this page in <code>src/routes/+page.svelte</code> to see how this post was created!
        You can also check the <code>BlogPage</code> component in <code>src/lib/components/BlogPage.svelte</code> to see how the default theme is defined.</p> <p><a href="https://github.com/picorims/svelte-blogging-kit">See the GitHub repository here.</a></p> <h2>What you can put in your post</h2> <h3>Classic HTML</h3> <p>Create headers with <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc. tags (<code>&lt;h1&gt;</code> is for the post title!),
        and paragraphs with <code>&lt;p&gt;</code> You can also use your own components if you want, although it is prefered to keep it simple.
        Theming of the post is based on the html tags or classes that you use.</p> <h3>Additional shipped components</h3> <p>Some additional quality of life components are provided to make blog writing easier.</p> <h4>Image</h4> <p>The <code>Image</code> component allows you to easily add images to your post. It takes a <code>src</code> prop for the image source,
        and an <code>alt</code> prop for the alt text. You can also pass a <code>caption</code> prop to add a caption below the image.</p> <!> <h4>FileAttachement</h4> <p>The <code>FileAttachement</code> component allows you to attach files to your post that the reader can download.</p> <!> <!> <!> <h4>Audio</h4> <p>The <code>Audio</code> component allows you to embed audio files in your post. It uses the native audio player
        with controls enabled by default.</p> <!>`,1);function pe(t){Q(t,{postTitle:"Presentation - static pages for blogging",date:"26 October 2024",config:{title:"Svelte Blogging Kit"},postContent:a=>{var s=re(),r=p(N(s),32);ee(r,{src:H,width:2968,height:1971,alt:'The word "blog" written with Scrabble letters on a wooden surface',caption:"Picture from Pixabay downloaded on Pexels: https://www.pexels.com/fr-fr/photo/blog-lettres-sur-bois-brun-262508/"});var i=p(r,6);A(i,{src:S});var d=p(i,2);A(d,{src:H});var g=p(d,2);A(g,{src:se});var _=p(g,6);ae(_,{src:S}),n(a,s)}})}export{pe as component};
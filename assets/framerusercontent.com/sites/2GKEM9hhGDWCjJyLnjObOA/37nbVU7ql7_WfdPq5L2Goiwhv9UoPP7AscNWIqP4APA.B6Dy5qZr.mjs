import{t as e}from"./rolldown-runtime.hBrq4iGT.mjs";import{A as t,F as n,L as r,N as i,O as a,_ as o,j as s,l as c,s as l,u,w as d,y as ee,z as f}from"./react.BKk9MiUK.mjs";import{C as p,a as te,r as m,t as h}from"./motion.DkRGnwdh.mjs";import{$ as g,C as _,E as v,H as y,P as b,S as x,at as S,dt as C,it as w,n as ne,nt as re,ot as T,r as E,s as D,t as ie,tt as ae}from"./framer.9GcSqQsl.mjs";import{d as O,i as oe,l as k}from"./OIjZRBmWDcIE2B6qgG1j.Cqfg86VE.mjs";import{t as se}from"./default-utils.CNYTJcK5.mjs";import{n as ce,r as le}from"./eegriGVDl.CgpQB_3W.mjs";function A({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?c(de,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?c(M,{html:n,style:o}):c(ue,{style:o})}function ue({style:e}){return c(`div`,{style:{minHeight:z(e),...O,overflow:`hidden`,...e},children:c(`div`,{style:H,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function de({url:e,zoom:t,radius:r,border:a,style:o}){let s=!o.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let l=oe(),[u,d]=n(l?void 0:!1);return i(()=>{if(!l)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),l&&s?c(R,{message:`URL embeds do not support auto height.`,style:o}):e.startsWith(`https://`)?u===void 0?c(L,{}):u instanceof Error?c(R,{message:u.message,style:o}):u===!0?c(R,{message:`Can’t embed ${e} due to its content security policy.`,style:o}):c(`iframe`,{src:e,style:{...B,...o,...a,zoom:t,borderRadius:r,transformOrigin:`top center`},loading:`lazy`,fetchPriority:l?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:j(l),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):c(R,{message:`Unsupported protocol.`,style:o})}function j(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function M({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return c(n||r?P:N,{html:e,...t})}return c(F,{html:e,...t})}function N({html:e,style:t}){let r=a(),[o,s]=n(0);i(()=>{let e=r.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&s(r)}return f.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{f.removeEventListener(`message`,t)}},[]);let l=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,u={...B,...t};return t.height||(u.height=o+`px`),c(`iframe`,{ref:r,style:u,srcDoc:l})}function P({html:e,style:t}){let n=a();return i(()=>{let t=n.current;if(t)return t.innerHTML=e,I(t),()=>{t.innerHTML=``}},[e]),c(`div`,{ref:n,style:{...V,...t}})}function F({html:e,style:t}){return c(`div`,{style:{...V,...t},dangerouslySetInnerHTML:{__html:e}})}function I(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)I(t)}function L(){return c(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...k,overflow:`hidden`},children:c(`div`,{style:H,children:`Loading…`})})}function R({message:e,style:t}){return c(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:z(t),...k,overflow:`hidden`,...t},children:c(`div`,{style:H,children:e})})}function z(e){if(!e.height)return 200}var B,V,H,fe=e((()=>{r(),l(),d(),y(),se(),_(A,{type:{type:E.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:E.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:E.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:E.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:E.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:E.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),B={width:`100%`,height:`100%`,border:`none`},V={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},H={textAlign:`center`,minWidth:140}})),U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),y(),h(),d(),fe(),ce(),U=b(A),W={},G=[],K=`framer-Y5B4l`,q={vwOGY9peG:`framer-v-7zl2ng`},J=(e,t,n)=>e&&t?`position`:n,Y=({value:e})=>w()?null:c(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),X=({height:e,id:t,width:n,...r})=>({...r}),Z=C(o(function(e,n){let r=a(null),i=n??r,o=ee(),{activeLocale:l,setLocale:d}=S();g();let{style:f,className:h,layoutId:_,variant:y,...b}=X(e);T(s(()=>le({},l),[l]));let[x,C]=re(y,W,!1),w=v(K),E=t(D)?.isLayoutTemplate,O=J(E,!!t(te)?.transition?.layout);return ae({}),c(D.Provider,{value:{activeVariantId:x,primaryVariantId:`vwOGY9peG`,variantClassNames:q},children:u(m,{id:_??o,children:[c(Y,{value:`html body { background: var(--token-9aba2389-772b-458b-b142-05c7c313d171, rgb(255, 255, 255)); }`}),c(p.div,{...b,className:v(w,`framer-7zl2ng`,h),ref:i,style:{...f},children:c(p.div,{className:`framer-p2rru0`,layout:O,children:c(ie,{children:c(ne,{className:`framer-175ntks-container`,isModuleExternal:!0,nodeId:`bWrIF7y_r`,scopeId:`eegriGVDl`,children:c(A,{height:`100%`,html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ananya Pallerla - Resume</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Outfit:wght@400;600;700&display=swap");
    @page { size: 8.5in 11in; margin: 0; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #ffffff; }
    body {
      font-family: "Inter", Arial, Helvetica, sans-serif;
      color: #4d4d4d;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page {
      position: relative;
      width: 918px;
      height: 1188px;
      margin: 0 auto;
      background: #ffffff;
      overflow: hidden;
    }
    h1, h2 { font-family: "Outfit", Arial, Helvetica, sans-serif; }
    .txt { position: absolute; margin: 0; padding: 0; white-space: nowrap; line-height: 1; }
    .serif { font-family: "Outfit", Arial, Helvetica, sans-serif; }
    .name { font-size: 28px; font-weight: 700; color: #000000; letter-spacing: 0.2px; }
    .role { font-size: 15px; color: #3c3c3c; }
    .contact { font-size: 14px; color: #5a5a5a; }
    .contact-link { font-size: 14px; color: #2857a7; text-decoration: underline; }
    .section { font-size: 18px; font-weight: 700; color: #000000; }
    .body { font-size: 14px; color: #4d4d4d; line-height: 18px; }
    .label { font-size: 14px; font-weight: 700; color: #303030; }
    .body-bold { font-size: 14px; font-weight: 700; color: #303030; }
    .project-title { font-size: 17px; font-weight: 700; color: #303030; }
    .project-title .small { font-size: 12px; font-weight: 700; vertical-align: baseline; }
    .bullet { font-size: 15px; color: #4d4d4d; font-family: "Inter", Arial, Helvetica, sans-serif; }
    .footer { font-size: 12px; color: #8c8c8c; }
    .rule { position: absolute; left: 78px; width: 762px; height: 0; border-top: 1px solid #d9d9d9; }
    .skill-rule { position: absolute; left: 78px; width: 762px; height: 0; border-top: 1px solid #e5e5e5; }
    a { color: inherit; }

    @media print {
      html, body { width: 8.5in; height: 11in; }
      .page {
        margin: 0;
        transform: scale(0.888888889);
        transform-origin: top left;
      }
    }
  </style>
</head>
<body>
  <main class="page" aria-label="Ananya Pallerla Resume">
    <p class="txt footer" style="top:1119px; left:695px;">Ananya Pallerla - Resume</p>

    <h1 class="txt serif name" style="top:55px; left:317px;">ANANYA PALLERLA</h1>
    <p class="txt role" style="top:95px; left:336px;">UI/UX Designer | Product Designer</p>
    <p class="txt contact" style="top:114px; left:367px;">Hyderabad, India |</p>
    <a class="txt contact-link" href="https://www.linkedin.com/in/pallerla-ananya-087535299/" target="_blank" rel="noopener" style="top:114px; left:495px;">LinkedIn</a>

    <div class="rule" style="top:158px;"></div>

    <h2 class="txt serif section" style="top:167px; left:78px;">SUMMARY</h2>
    <p class="txt body" style="top:196px; left:78px;">Entry-level UI/UX Designer with a background in architecture and experience in user-centered design,</p>
    <p class="txt body" style="top:214px; left:78px;">interaction design, and product thinking. Skilled in user research, information architecture, wireframing,</p>
    <p class="txt body" style="top:232px; left:78px;">prototyping, and usability testing, with a focus on accessibility.</p>

    <h2 class="txt serif section" style="top:264px; left:78px;">SKILLS</h2>
    <p class="txt label" style="top:301px; left:86px;">UX &amp; Product Design</p>
    <p class="txt body" style="top:292px; left:322px;">Interaction Design, UI Design, Information Architecture, Wireframing,</p>
    <p class="txt body" style="top:310px; left:322px;">Prototyping, Journey Mapping, Usability Testing, Design Thinking</p>
    <div class="skill-rule" style="top:342px;"></div>
    <p class="txt label" style="top:343px; left:86px;">Programming</p>
    <p class="txt body" style="top:343px; left:322px;">HTML, CSS, JavaScript</p>
    <div class="skill-rule" style="top:374px;"></div>
    <p class="txt label" style="top:374px; left:86px;">Tools</p>
    <p class="txt body" style="top:374px; left:322px;">Figma, Framer, Webflow, Spline 3D, Photoshop, Illustrator, InDesign, Notion</p>
    <div class="skill-rule" style="top:405px;"></div>

    <h2 class="txt serif section" style="top:423px; left:78px;">EXPERIENCE</h2>
    <p class="txt body-bold" style="top:452px; left:78px;">Architect | Elevate Infra | Present</p>
    <p class="txt bullet" style="top:471px; left:110px;">•</p>
    <p class="txt body" style="top:470px; left:137px;">Serve as the sole architect for a 3D-printed housing startup, creating residential designs based on client</p>
    <p class="txt body" style="top:488px; left:137px;">requirements.</p>
    <p class="txt bullet" style="top:508px; left:110px;">•</p>
    <p class="txt body" style="top:507px; left:137px;">Prepare architectural plans, 3D models, and realistic renders to support client presentations and project</p>
    <p class="txt body" style="top:525px; left:137px;">decisions.</p>
    <p class="txt bullet" style="top:545px; left:110px;">•</p>
    <p class="txt body" style="top:545px; left:137px;">Work directly with clients and the startup team to understand needs, revise designs, and deliver</p>
    <p class="txt body" style="top:563px; left:137px;">practical design solutions.</p>

    <p class="txt body-bold" style="top:582px; left:78px;">Freelance Designer | Present</p>
    <p class="txt bullet" style="top:600px; left:110px;">•</p>
    <p class="txt body" style="top:598px; left:137px;">Delivered website design, logo design, letterheads, and brand identity assets for clients, managing</p>
    <p class="txt body" style="top:616px; left:137px;">requirements, revisions, and final handover.</p>

    <p class="txt body-bold" style="top:644px; left:78px;">Architecture Intern | 6 Months</p>
    <p class="txt bullet" style="top:661px; left:110px;">•</p>
    <p class="txt body" style="top:662px; left:137px;">Conducted client interactions to understand user needs and translate them into design decisions.</p>
    <p class="txt bullet" style="top:680px; left:110px;">•</p>
    <p class="txt body" style="top:681px; left:137px;">Collaborated with cross functional stakeholders (clients, consultants) to align design decisions with real</p>
    <p class="txt body" style="top:699px; left:137px;">world constraints.</p>

    <h2 class="txt serif section" style="top:735px; left:78px;">PROJECTS</h2>
    <p class="txt project-title" style="top:764px; left:78px;">Interactive Learning Platform for Digitally Illiterate Users <span class="small">(Web &amp; Mobile)</span></p>
    <p class="txt body" style="top:785px; left:78px;">Inclusive learning experience with simplified navigation and step-by-step user flows.</p>
    <p class="txt body-bold" style="top:811px; left:78px;">Accessible E-Commerce Platform for Artisans <span style="font-size:12px;">(Web &amp; Mobile)</span></p>
    <p class="txt body" style="top:830px; left:78px;">Accessibility first e-commerce experience for artisans with low vision.</p>

    <h2 class="txt serif section" style="top:865px; left:78px;">EDUCATION</h2>
    <p class="txt body-bold" style="top:893px; left:78px;">Bachelor of Architecture</p>
    <p class="txt body" style="top:912px; left:78px;">ICFAI School of Architecture | 2020 – 2025</p>

    <h2 class="txt serif section" style="top:947px; left:78px;">CERTIFICATIONS</h2>
    <p class="txt body" style="top:976px; left:78px;">Google UX Design Certificate (7 Courses)</p>
    <p class="txt body" style="top:994px; left:78px;">UX Design Essentials - Adobe XD</p>
    <p class="txt body" style="top:1012px; left:78px;">Adobe Illustrator CC Essential Training</p>
    <p class="txt body" style="top:1030px; left:78px;">SWAYAM (Overview and Perspectives of Values, Socio Psychological Basis, German Level 1, French</p>
    <p class="txt body" style="top:1048px; left:78px;">Communication)</p>
  </main>
</body>
</html>
`,id:`bWrIF7y_r`,layoutId:`bWrIF7y_r`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})})}),c(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-Y5B4l.framer-nt3dtr, .framer-Y5B4l .framer-nt3dtr { display: block; }`,`.framer-Y5B4l.framer-7zl2ng { align-content: center; align-items: center; background-color: var(--token-9aba2389-772b-458b-b142-05c7c313d171, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1180px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 910px; }`,`.framer-Y5B4l .framer-p2rru0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,`.framer-Y5B4l .framer-175ntks-container { flex: none; height: 1180px; position: relative; width: 910px; }`],`framer-Y5B4l`),Q=Z,Z.displayName=`Page`,Z.defaultProps={height:1180,width:910},x(Z,[{explicitInter:!0,fonts:[]},...U],{supportsExplicitInterCodegen:!0}),$={exports:{default:{type:`reactComponent`,name:`FramereegriGVDl`,slots:[],annotations:{framerAcceptsLayoutTemplate:`true`,framerDisplayContentsDiv:`false`,framerComponentViewportWidth:`true`,framerScrollSections:`false`,framerIntrinsicHeight:`1180`,framerResponsiveScreen:`true`,framerColorSyntax:`true`,framerLayoutTemplateFlowEffect:`true`,framerContractVersion:`1`,framerImmutableVariables:`true`,framerIntrinsicWidth:`910`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerAutoSizeImages:`true`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{$ as __FramerMetadata__,Q as default,G as queryParamNames};
//# sourceMappingURL=37nbVU7ql7_WfdPq5L2Goiwhv9UoPP7AscNWIqP4APA.B6Dy5qZr.mjs.map
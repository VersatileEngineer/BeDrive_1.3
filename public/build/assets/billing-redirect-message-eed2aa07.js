import{bo as A,ci as D,r as l,c5 as M,u as B,b as N,j as n,c as C,B as I,y as c,A as F,k as R,x as L,bL as W,T as E,W as z}from"./main-94102828.js";import{T as V}from"./TaskAlt-956992e7.js";var P="https://js.stripe.com/v3",q=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,y="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",G=function(){for(var e=document.querySelectorAll('script[src^="'.concat(P,'"]')),r=0;r<e.length;r++){var t=e[r];if(q.test(t.src))return t}return null},U=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(P).concat(r);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(t),t},X=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},j=null,$=function(e){return j!==null||(j=new Promise(function(r,t){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(y),window.Stripe){r(window.Stripe);return}try{var a=G();a&&e?console.warn(y):a||(a=U(e)),a.addEventListener("load",function(){window.Stripe?r(window.Stripe):t(new Error("Stripe.js not available"))}),a.addEventListener("error",function(){t(new Error("Failed to load Stripe.js"))})}catch(i){t(i);return}})),j},O=function(e,r,t){if(e===null)return null;var a=e.apply(void 0,r);return X(a,t),a},_=Promise.resolve().then(function(){return $(null)}),k=!1;_.catch(function(s){k||console.warn(s)});var H=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];k=!0;var a=Date.now();return _.then(function(i){return O(i,r,a)})};function J({type:s,productId:e,priceId:r}){const{user:t}=A(),a=D(),i=l.useRef(!1),o=l.useRef(null),{localeCode:S}=M(),[d,h]=l.useState(null),[g,v]=l.useState(null),{branding:{site_name:m},billing:{stripe_public_key:u,stripe:{enable:p}}}=B();return l.useEffect(()=>{!p||!u||i.current||(Promise.all([H(u,{apiVersion:"2022-08-01",locale:S}),s==="setupIntent"?K():Q(e,r)]).then(([f,{clientSecret:b}])=>{if(f&&o.current){const x=f.elements({clientSecret:b,appearance:{theme:a?"night":"stripe"}});x.create("payment",{business:{name:m},terms:{card:"never"},fields:{billingDetails:{address:"auto"}},defaultValues:{billingDetails:{email:t==null?void 0:t.email}}}).mount(o.current),h(f),v(x)}}),i.current=!0)},[e,u,p,a,S,m,s,t==null?void 0:t.email]),{stripe:d,elements:g,paymentElementRef:o,stripeIsEnabled:u!=null&&p}}function K(){return N.post("billing/stripe/create-setup-intent").then(s=>s.data)}function Q(s,e){return N.post("billing/stripe/create-partial-subscription",{product_id:s,price_id:e}).then(r=>r.data)}function ne({productId:s,priceId:e,type:r="subscription",submitLabel:t,returnUrl:a}){const{stripe:i,elements:o,paymentElementRef:S,stripeIsEnabled:d}=J({type:r,productId:s,priceId:e}),[h,g]=l.useState(null),[v,m]=l.useState(!1),u=!d||o!=null&&i!=null,p=async f=>{var b,x;if(f.preventDefault(),!(!i||!o)){m(!0);try{const w=await i[r==="subscription"?"confirmPayment":"confirmSetup"]({elements:o,confirmParams:{return_url:a}});((b=w.error)==null?void 0:b.type)!=="validation_error"&&((x=w.error)!=null&&x.message)&&g(w.error.message)}catch{}m(!1)}};return n.jsxs("form",{onSubmit:p,children:[n.jsx("div",{ref:S,className:C("min-h-[303px]",!d&&"hidden"),children:d&&n.jsx(Y,{})}),h&&!v&&n.jsx("div",{className:"mt-20 text-danger",children:h}),n.jsx(I,{variant:"flat",color:"primary",size:"md",className:"mt-40 w-full",type:"submit",disabled:v||!u,children:t})]})}function Y(){return n.jsxs(l.Fragment,{children:[n.jsx(c,{className:"mb-20 h-30"}),n.jsx(c,{className:"mb-20 h-30"}),n.jsx(c,{className:"mb-20 h-30"}),n.jsx(c,{className:"h-30"})]})}function re({config:s}){return n.jsx(F,{initial:!1,mode:"wait",children:n.jsx("div",{className:"mt-80",children:s?n.jsxs(R.div,{className:"text-center",...L,children:[s.status==="success"?n.jsx(V,{className:"text-positive text-6xl"}):n.jsx(W,{className:"text-danger text-6xl"}),n.jsx("div",{className:"text-2xl font-semibold mt-30",children:n.jsx(E,{...s.message})}),n.jsx(I,{variant:"flat",color:"primary",className:"w-full mt-30",size:"md",elementType:z,to:s.link,children:n.jsx(E,{...s.buttonLabel})})]},"payment-status"):n.jsx(Z,{},"loading-skeleton")})})}function Z(){return n.jsxs(R.div,{className:"text-center max-w-280",...L,children:[n.jsx(c,{size:"w-50 h-50",variant:"rect"}),n.jsx(c,{className:"text-2xl mt-30"}),n.jsx(c,{size:"h-42",className:"mt-30"})]},"loading-skeleton")}export{re as B,ne as S,H as l};
//# sourceMappingURL=billing-redirect-message-eed2aa07.js.map

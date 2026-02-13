"use client";function m(){gtag("consent","default",{analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"})}function s(e){gtag("consent","update",{analytics_storage:e.analytics?"granted":"denied",ad_storage:e.marketing?"granted":"denied",ad_user_data:e.marketing?"granted":"denied",ad_personalization:e.marketing?"granted":"denied"})}function a(e){let n=document.cookie.split("; ").find(r=>r.startsWith(e+"="))?.split("=")[1];return n===void 0?null:JSON.parse(n)}function h(e,t,n){document.cookie=`${t}=${JSON.stringify(e)}; SameSite=None; Secure;${n?` domain=${n};`:""} path=/`}function d(e,t,n){h(e,t,n),s(e),window.dispatchEvent(new CustomEvent("consent:change",{detail:e}))}var o="site_consent_v1";function c({gtmId:e}){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"gtm.js","gtm.start":Date.now()});let t=document.createElement("script");t.async=!0,t.id="google-tag-manager",t.src=`https://www.googletagmanager.com/gtm.js?id=${e}`,document.head.append(t),window.__gtmLoaded=!0}var g=`#banner {
  background-color: white;
  border: 1px solid var(--cc-accent, oklch(0.85 0 0));
  border-radius: calc(0.625rem - 2px);
  max-width: 25%;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem 2rem 2rem;
  opacity: 0;
  pointer-events: none;
  transform: translateY(300px);

  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  transition: all 500ms ease-in-out;
}

#banner.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

#heading {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

#cookie-icon {
  width: 4rem;
  height: 4rem;
}

#content {
  margin-bottom: 1rem;
}

p {
  margin: 0;
}

button {
  background-color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: calc(0.625rem - 2px);
  outline: none;
  font-size: 14px;
  border: none;

  transition: all 300ms ease-in-out;
}

button[data-close] {
  color: black;
  width: 36px;
  height: 36px;

  &:hover {
    color: color-mix(in oklch, black 60%, transparent);
  }
}

button[data-accept] {
  margin-bottom: 0.5rem;
}

button[data-accept],
button[data-reject] {
  padding: 0.5rem 1rem;
  background-color: var(--cc-background, black);
  color: var(--cc-foreground, white);
  border: none;
  width: 100%;

  &:hover {
    background-color: color-mix(
      in oklch,
      var(--cc-background, black) 90%,
      transparent
    );
  }
}

@media (max-width: 768px) {
  #banner {
    left: 2rem;
    max-width: none;
  }
}
`;function i(){let e=document.createElement("div"),t=e.attachShadow({mode:"open"});t.innerHTML=`
    <style>
      ${g}
    </style>
    <div id="banner">
      <div id="heading">
        <svg
          id="cookie-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
          <path d="M11 17v.01" />
          <path d="M7 14v.01" />
        </svg>
        <button data-close>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <div id="content">
        <p>
          We use cookies for analytics to improve this site. You can accept or
          reject analytics cookies.
        </p>
      </div>

      <button data-accept>Accept</button>
      <button data-reject>Reject</button>
    </div>
  `;let n=t.querySelector("[data-close]");n&&(n.onclick=()=>{t.querySelector("#banner")?.classList.remove("visible")});let r=t.querySelector("[data-accept]");r&&(r.onclick=()=>{window.cookieConsent.acceptAnalytics(),t.querySelector("#banner")?.classList.remove("visible")});let p=t.querySelector("[data-reject]");p&&(p.onclick=()=>{window.cookieConsent.rejectAll(),t.querySelector("#banner")?.classList.remove("visible")}),document.body.appendChild(e),setTimeout(()=>{t.querySelector("#banner")?.classList.add("visible")},300)}function l(e){window.cookieConsent={getState(){return a(o)},acceptAnalytics(){d({analytics:!0,marketing:!1},o,e)},rejectAll(){d({analytics:!1,marketing:!1},o,e)},open(){i()}}}function f({gtmId:e,domain:t}){if(e===void 0){console.error("Must provide a Google Tag Manager id");return}window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},m(),c({gtmId:e});let n=a(o);n?s(n):i(),l(t)}import{useEffect as b}from"react";function u({gtmId:e,domain:t}){return b(()=>{e!==void 0&&f({gtmId:e,domain:t})},[]),null}var H=u;export{H as default};

import type { AllinOneAccessibilityPluginOptions } from "../../shared/index.js";

declare global {
  interface Window {
    dataLayer?: unknown[];
    aioaadawidget?: (...args: unknown[]) => void;
  }
}

export const useAllinOneAccessibility = (
  options: AllinOneAccessibilityPluginOptions
): void => {
  if (__VUEPRESS_SSR__) return;

  // avoid duplicated import
  if (window.dataLayer && window.aioaadawidget) return;

  // insert gtag `<script>` tag
  const gtagScript = document.createElement("script");
  gtagScript.src = `https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#420083&token=&position=bottom_right`;
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  // insert gtag snippet
  window.dataLayer = window.dataLayer ?? [];
  // the gtag function must use `arguments` object to forward parameters
  window.aioaadawidget = function aioaadawidget() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  window.aioaadawidget("js", new Date());

  window.aioaadawidget("config");
};

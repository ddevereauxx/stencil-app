/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';


declare global {

  namespace StencilComponents {
    interface AppStencil {

    }
  }

  interface HTMLAppStencilElement extends StencilComponents.AppStencil, HTMLStencilElement {}

  var HTMLAppStencilElement: {
    prototype: HTMLAppStencilElement;
    new (): HTMLAppStencilElement;
  };
  interface HTMLElementTagNameMap {
    'app-stencil': HTMLAppStencilElement;
  }
  interface ElementTagNameMap {
    'app-stencil': HTMLAppStencilElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-stencil': JSXElements.AppStencilAttributes;
    }
  }
  namespace JSXElements {
    export interface AppStencilAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageActionSheet {

    }
  }

  interface HTMLPageActionSheetElement extends StencilComponents.PageActionSheet, HTMLStencilElement {}

  var HTMLPageActionSheetElement: {
    prototype: HTMLPageActionSheetElement;
    new (): HTMLPageActionSheetElement;
  };
  interface HTMLElementTagNameMap {
    'page-action-sheet': HTMLPageActionSheetElement;
  }
  interface ElementTagNameMap {
    'page-action-sheet': HTMLPageActionSheetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-action-sheet': JSXElements.PageActionSheetAttributes;
    }
  }
  namespace JSXElements {
    export interface PageActionSheetAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PageAlert {

    }
  }

  interface HTMLPageAlertElement extends StencilComponents.PageAlert, HTMLStencilElement {}

  var HTMLPageAlertElement: {
    prototype: HTMLPageAlertElement;
    new (): HTMLPageAlertElement;
  };
  interface HTMLElementTagNameMap {
    'page-alert': HTMLPageAlertElement;
  }
  interface ElementTagNameMap {
    'page-alert': HTMLPageAlertElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'page-alert': JSXElements.PageAlertAttributes;
    }
  }
  namespace JSXElements {
    export interface PageAlertAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
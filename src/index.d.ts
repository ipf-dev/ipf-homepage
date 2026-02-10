declare module '*.png';
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module '*.mp4';
declare module '*.jpg';
declare module '*.pdf';
declare module '*.ico';
declare module 'gatsby-plugin-breakpoints';

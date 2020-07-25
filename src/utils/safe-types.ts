/**
 * SSR safe types
 */

import { hasWindowSupport } from "./env";

const w = hasWindowSupport ? window : undefined;

export const Element = w ? w.Element : class Element extends Object {};

export const HTMLElement = w
  ? w.HTMLElement
  : class HTMLElement extends Element {};

export const SVGElement = w
  ? w.SVGElement
  : class SVGElement extends Element {};

export const File = w ? w.File : class File extends Object {};

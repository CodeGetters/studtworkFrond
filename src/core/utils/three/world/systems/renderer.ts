import { WebGLRenderer } from "three";

export function createRenderer(): WebGLRenderer {
  const renderer: WebGLRenderer = new WebGLRenderer({ antialias: true });

  return renderer;
}

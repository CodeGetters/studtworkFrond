import { Loop } from "./systems/loop";
import { Resize } from "./systems/resize";
import { createScene } from "./components/scene";
import { createLight } from "./components/light";
import { createControls } from "./systems/control";
import { createCamera } from "./components/camera";
import { createRenderer } from "./systems/renderer";
import { createAxesHelper, createGridHelper } from "./components/helpers";
import { loadBirds } from "./components/birds/birds";

import type { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import type { OrbitControls } from "three/addons/controls/OrbitControls.js";

let camera: PerspectiveCamera;
let loop;
let scene: Scene;
let render: WebGLRenderer;
let controls: OrbitControls;

class Three {
  constructor(container: HTMLElement) {
    camera = createCamera();
    scene = createScene();
    render = createRenderer();
    loop = new Loop(camera, scene, render);
    container.append(render.domElement);
    controls = createControls(camera, render.domElement);

    const { ambientLight, mainLight } = createLight();

    // 如果不加 light，加载的模型是没有颜色的(黑色)
    scene.add(ambientLight, mainLight);

    const resize: Resize = new Resize(container, camera, render);
    scene.add(createAxesHelper(), createGridHelper());
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    controls.target.copy(parrot.position);
    loop.updatable.push(parrot, flamingo, stork);

    scene.add(parrot, flamingo, stork);
  }

  render() {
    render.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
export { Three };

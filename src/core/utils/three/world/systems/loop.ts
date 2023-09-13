import { PerspectiveCamera, Scene, WebGLRenderer, Clock } from "three";

const clock: Clock = new Clock();

export class Loop {
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  updatable;

  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer,
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatable = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();

      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta: number = clock.getDelta();

    for (const object of this.updatable) {
      object.tick(delta);
    }
  }
}

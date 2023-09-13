import { Color, Scene } from "three";

export function createScene(): Scene {
  const scene: Scene = new Scene();

  scene.background = new Color("skyblue");

  return scene;
}

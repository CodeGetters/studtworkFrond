import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import type { PerspectiveCamera } from "three";

export function createControls(
  camera: PerspectiveCamera,
  canvas,
): OrbitControls {
  const controls: OrbitControls = new OrbitControls(camera, canvas);

  // 启用阻尼 - 增加惯性
  controls.enableDamping = true;

  controls.tick = () => {
    controls.update();
  };

  return controls;
}

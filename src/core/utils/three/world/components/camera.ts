import { PerspectiveCamera } from "three";

export function createCamera(): PerspectiveCamera {
  // 视野角度
  const fov: number = 35;

  // 长宽比 aspect ratio
  const aspect: number = 1;

  // 截面
  const near: number = 0.1;
  const far: number = 100;

  const camera: PerspectiveCamera = new PerspectiveCamera(
    fov,
    aspect,
    near,
    far,
  );

  camera.position.set(-5, 5, 7);

  return camera;
}

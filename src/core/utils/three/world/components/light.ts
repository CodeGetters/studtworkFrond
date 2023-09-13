import { DirectionalLight, AmbientLight, HemisphereLight } from "three";

export function createLight(): {
  mainLight: DirectionalLight;
  ambientLight: HemisphereLight;
} {
  // const ambientLight: AmbientLight = new AmbientLight("white", 2);
  const ambientLight: HemisphereLight = new HemisphereLight(
    "white",
    "darkslategrey",
    5,
  );
  const mainLight: DirectionalLight = new DirectionalLight("white", 4);
  mainLight.position.set(10, 10, 10);

  return { mainLight, ambientLight };
}

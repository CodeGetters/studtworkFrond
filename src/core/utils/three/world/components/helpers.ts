import { AxesHelper, GridHelper } from "three";

export function createAxesHelper(): AxesHelper {
  const helper: AxesHelper = new AxesHelper(3);
  helper.position.set(-3.5, 0, -3.5);

  return helper;
}

export function createGridHelper(): GridHelper {
  const helper: GridHelper = new GridHelper(6);

  return helper;
}

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel";
import { Mesh } from "three";

import Parrot from "@/assets/models/Parrot.glb?url";
import Flamingo from "@/assets/models/Flamingo.glb?url";
import Stork from "@/assets/models/Stork.glb?url";

async function loadBirds(): Promise<{
  parrot: Mesh;
  flamingo: Mesh;
  stork: Mesh;
}> {
  const loader: GLTFLoader = new GLTFLoader();
  // const parrotData = await loader.loadAsync(Parrot);
  const [parrotData, FlamingoData, StorkData] = await Promise.all([
    loader.loadAsync(Parrot),
    loader.loadAsync(Flamingo),
    loader.loadAsync(Stork),
  ]);

  const parrot: Mesh = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo: Mesh = setupModel(FlamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork: Mesh = setupModel(StorkData);
  stork.position.set(0, -2.5, -10);

  console.log("Squaaawk!", parrotData);

  return { parrot, flamingo, stork };
}

export { loadBirds };

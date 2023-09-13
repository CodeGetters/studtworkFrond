import { Three } from "./world/three";

export async function main() {
  const container: HTMLElement | null = document.getElementById("scene");

  if (container) {
    const three = new Three(container);

    await three.init();

    three.start();
  }
}

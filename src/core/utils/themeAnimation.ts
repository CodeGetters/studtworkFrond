import { nextTick } from "vue";
import { useDark } from "@vueuse/core";
// import { asideBgc, asideColor, asidePopperEffect } from "@/core/helpers/config";
import { useConfigStore } from "@/store/config";

const configStore = useConfigStore();

export const isDark = useDark();

/**
 * @param event
 */
export function toggleDark(event: MouseEvent): void {
  const isAppearanceTransition =
    // @ts-expect-error experimental API
    document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value;
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x: number = event.clientX;
  const y: number = event.clientY;
  // Get the distance to the furthest corner
  const endRadius: number = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // @ts-expect-error experimental API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root’s new view
    const clipPath: string[] = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: "ease-out",
        // Specify which pseudo-element to animate
        pseudoElement: isDark.value
          ? "::view-transition-old(root)"
          : "::view-transition-new(root)",
      },
    );
  });

  const theme = localStorage.getItem("vueuse-color-scheme");

  if (theme === "dark") {
    setTimeout(() => {
      configStore.setDefaultConfigProperty("aside.backgroundColor", "#fff");
      configStore.setDefaultConfigProperty("aside.textColor", "#000");
    }, 300);
  } else {
    configStore.setDefaultConfigProperty("aside.backgroundColor", "#000");
    configStore.setDefaultConfigProperty("aside.textColor", "#fff");
  }
}

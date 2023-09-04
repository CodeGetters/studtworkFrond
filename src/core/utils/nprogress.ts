import nProgress from "nprogress";
import "nprogress/nprogress.css";

nProgress.configure({
  easing: "ease",
  speed: 1000,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
  parent: "body",
});

export const start = (): void => {
  nProgress.start();
};

export const done = (): void => {
  nProgress.done();
};

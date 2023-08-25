import { describe, test, expect } from "vitest";
describe("import vue components", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("@/layouts/base/HeaderCom.vue");
    expect(cmp).toBeDefined();
  });

  test("template string imports as expected", async () => {
    // eslint-disable-next-line @typescript-eslint/quotes
    const cmp = await import("@/layouts/base/HeaderCom.vue");
    expect(cmp).toBeDefined();
  });

  test("dynamic imports as expected", async () => {
    const name = "HeaderCom";
    const cmp = await import(`@/layouts/base/${name}.vue`);
    expect(cmp).toBeDefined();
  });
});

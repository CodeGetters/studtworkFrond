import { AnimationMixer } from "three";

import type { Mesh } from "three";

/**
 * 从外部模型中提取需要的数据
 *
 * @param data
 */
export function setupModel(data) {
  /**
   * 提取模型
   */
  const model: Mesh = data.scene.children[0];

  /**
   * 提取剪辑
   */
  const clip = data.animations[0];

  /**
   * 创建混合器和动作
   */
  const mixer: AnimationMixer = new AnimationMixer(model);

  /**
   * 创建动画
   */
  const action = mixer.clipAction(clip);
  action.play();

  model.tick = (delta: number) => mixer.update(delta);

  return model;
}

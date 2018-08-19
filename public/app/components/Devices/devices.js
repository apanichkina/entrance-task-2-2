/**
 *  @module components/DevicesBlock
 */

import template from './devices.tmpl.xml';

/**
 * Popup class to show pop-up block in case of win
 */
class DevicesBlock {
  /**
   * Create a block
   */
  constructor(root) {
    this.root = root;
    this.fest = template;
  }

  /**
   * Render block
   * @param {object} params - description of the fields needed by the fest.
   * @return {DevicesBlock} current class instance.
   */
  render(params) {
    if (this.root) {
      this.root.innerHTML = this.fest(params);
    }

    return this;
  }
}

export default DevicesBlock;

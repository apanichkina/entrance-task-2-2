/**
 *  @module components/ScenariosBlock
 */

import template from './scenarios.tmpl.xml';

/**
 * Popup class to show pop-up block in case of win
 */
class ScenariosBlock {
  /**
   * Create a block
   */
  constructor(root, cardPerPage = 0) {
    this.root = root;
    this.pageSize = cardPerPage;
    this.fest = template;
  }

  /**
   * Render block
   * @param {object} params - description of the fields needed by the fest.
   * @return {ScenariosBlock} current class instance.
   */
  render(params) {
    const pages = [];
    let i = 0;
    const data = params;
    while (data.length) {
      pages[i] = data.splice(0, this.pageSize);
      i += 1;
    }
    console.log('res', pages, params);

    if (this.root) {
      this.root.innerHTML = this.fest(pages);
    }

    return this;
  }
}

export default ScenariosBlock;

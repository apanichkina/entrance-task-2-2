/**
 *  @module components/DevicesBlock
 */

import template from './slider.tmpl.xml';

/**
 * Popup class to show pop-up block in case of win
 */
class SliderBlock {
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
   * @return {SliderBlock} current class instance.
   */
  render(params) {
    if (!this.root) {
      return this;
    }

    const {
      value = '10',
      min = '-10',
      max = '100',
      name = 'slider',
      onInput,
      iconMin,
      iconMax,
    } = params;

    const templateData = {
      value, max, min, name, iconMin, iconMax,
    };

    this.root.innerHTML = this.fest(templateData);

    document.getElementsByName(name)[0].addEventListener('input', onInput);

    return this;
  }
}

export default SliderBlock;

/**
 *  @module components/DevicesBlock
 */

import template from './radioGroup.tmpl.xml';

/**
 * Popup class to show pop-up block in case of win
 */
class RadioGroupBlock {
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
   * @return {RadioGroupBlock} current class instance.
   */
  render(params) {
    if (!this.root) {
      return this;
    }

    const {
      fields,
      name,
      emptyValueName,
      onClick,
    } = params;
    const templateData = [];
    let index = 0;
    fields.forEach((field) => {
      const value = field === emptyValueName ? '' : field;
      templateData.push({
        name,
        value,
        id: [name, index += 1].join('_'),
        label: field,
        onClick,
      });
    });

    this.root.innerHTML = this.fest(templateData);

    document.getElementsByName(name).forEach((el) => {
      el.addEventListener('click', onClick);
    });

    return this;
  }
}

export default RadioGroupBlock;
import template from './radioGroup.tmpl.xml';

class RadioGroupBlock {
  constructor(root) {
    this.root = root;
    this.fest = template;
  }

  render(params) {
    if (!this.root) {
      return this; // <---- внезапный выход
    }

    const {
      fields,
      name,
      onClick,
    } = params;
    const templateData = [];
    let index = 0;

    fields.forEach((value, key) => {
      templateData.push({
        name,
        value,
        id: [name, index += 1].join('_'),
        label: key,
        onClick,
      });
    });

    this.root.innerHTML = this.fest(templateData);

    if (onClick) {
      document.getElementsByName(name).forEach((el, ind) => {
        if (!ind) {
          el.checked = true;
        }
        el.addEventListener('click', onClick);
      });
    }

    return this;
  }
}

export default RadioGroupBlock;

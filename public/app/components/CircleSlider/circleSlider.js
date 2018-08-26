import template from './circleSlider.tmpl.xml';

class SliderBlock {
  constructor(root) {
    this.root = root;
    this.fest = template;
  }

  render(params) {
    if (!this.root) {
      return this; // <---- внезапный выход
    }

    const {
      name = 'slider',
      onInput,
      ...rest
    } = params;

    const templateData = {
      value: '10',
      min: '0',
      max: '100',
      name,
      ...rest,
    };

    this.root.innerHTML = this.fest(templateData);

    // add handlers
    if (onInput) {
      document.getElementsByName(name).forEach((el) => {
        el.addEventListener('input', onInput);
      });
    }

    return this;
  }
}

export default SliderBlock;

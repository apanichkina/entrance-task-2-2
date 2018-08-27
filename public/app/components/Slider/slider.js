import template from './slider.tmpl.xml';

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
      const slider = document.getElementsByName(name);
      for (let i = 0; i < slider.length; i++) {
        slider[i].addEventListener('input', onInput);
      }
    }

    return this;
  }
}

export default SliderBlock;

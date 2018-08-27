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
      hasSpaceStart = false,
      hasSpaceEnd = false,
      collapse = false,
    } = params;
    const templateData = {
      hasSpaceStart,
      hasSpaceEnd,
      collapse,
      items: [],
    };
    let index = 0;

    fields.forEach((value, key) => {
      templateData.items.push({
        name,
        value,
        id: [name, index += 1].join('_'),
        label: key,
        onClick,
      });
    });

    this.root.innerHTML = this.fest(templateData);

    if (onClick) {
      if (collapse) {
        this.select = this.root.querySelector('.select__container select');
        this.select.addEventListener('change', (evt) => {
          onClick(evt);

          const el = this.root.querySelector(`input[value=${evt.target.value}`);
          if (el) {
            el.checked = true;
          }
        });
      }

      const inputs = document.getElementsByName(name);
      for (let i = 0; i < inputs.length; i++) {
        const el = inputs[i];

        if (!i) {
          el.checked = true;
        }

        el.addEventListener('click', (evt) => {
          onClick(evt);

          if (this.select) {
            this.select.value = el.value;
          }
        });
      }
    }

    return this;
  }
}

export default RadioGroupBlock;

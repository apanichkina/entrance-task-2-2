import template from './popup.tmpl.xml';

class Popup {
  constructor(root) {
    this.root = root;
    this.fest = template;
    this.pageContainer = document.getElementsByClassName('root')[0];
  }

  render(params) {
    const {
      onConfirm,
      onCancel,
      ...rest
    } = params;

    this.params = {
      confirm: 'Применить',
      cancel: 'Закрыть',
      ...rest,
    };
    this.root.innerHTML = this.fest(this.params);
    this.handelButtons(onConfirm, onCancel);

    return this;
  }

  getElement() {
    return this.root;
  }

  handelButtons(onConfirm = () => null, onCancel = () => null) {
    const cancelButton = this.root.getElementsByClassName('button_cancel')[0];
    cancelButton.addEventListener('click', () => {
      onCancel();
      this.hidePopup();
    });
    const confirmButton = this.root.getElementsByClassName('button_confirm')[0];
    confirmButton.addEventListener('click', () => {
      onConfirm();
      this.hidePopup();
    });
  }

  showPopup() {
    this.root.classList.add('popup_show');
    this.pageContainer.classList.add('root_no-scroll');
  }

  hidePopup() {
    this.root.classList.remove('popup_show');
    this.pageContainer.classList.remove('root_no-scroll');

    return this;
  }
}

export default Popup;

/**
 *  @module components/popup
 */

import template from './popup.tmpl.xml';
import RadioGroup from '../RadioGroup/radioGroup';


/**
 * Popup class to show pop-up block
 */
class Popup {
  /**
     * Create a pop-up
     */
  constructor(root) {
    this.root = root;
    this.fest = template;
    this.pageContainer = document.getElementsByClassName('root')[0];
  }

  /**
     * Render pop-up
     * @param {object} params - description of the fields needed by the fest.
     * @return {Popup} current class instance.
     */
  render(params) {
    this.params = params;
    this.root.innerHTML = this.fest(this.params);
    if (params.actions) {
      const radioGroupContainer = document.getElementsByClassName('popup__actions')[0];
      const radioGroup = new RadioGroup(radioGroupContainer);

      radioGroup.render({
        fields: params.actions,
        name: 'actions',
        onClick: (el) => {
          if (el.target.value) {
            this.root.querySelectorAll('input.slider')[0].value = el.target.value;
          }
        },
      });

      this.pageContainer.classList.add('root_no-scroll');
    }

    this.init();

    return this;
  }

  /**
     * Add handlers
     */
  init() {
    const closeButton = this.root.getElementsByClassName('js-button-close')[0];
    closeButton.addEventListener('click', this.deletePopup.bind(this));
  }

  /**
     * Delete pop-up
     * @return {Popup} current class instance.
     */
  deletePopup() {
    this.root.classList.remove('popup_show');
    this.pageContainer.classList.remove('root_no-scroll');

    return this;
  }
}

export default Popup;

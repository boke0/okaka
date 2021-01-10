import {Component, defineComponent, html} from 'omusubi-js';

class Alert extends Component {
  static observedAttributes = [
    'text',
    'dark',
    'border',
    'color',
    'dense',
    'type',
    'dismissible',
    'icon',
    'outlined',
    'prominent',
    'transition'
  ];
  attributeChangedCallback(key, old_val, new_val) {
    
  }
  render() {
    return html`
      <slot></slot>
    `;
  }
}
defineComponent('o-alert')(Alert);

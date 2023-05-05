import Component from '@glimmer/component';
import config from 'ember-get-config';

const defaultMascot = { image: '/images/mascots/zoey.png', name: 'Zoey' };

export default class NoteComponent extends Component {
  config = config;

  constructor() {
    super(...arguments);

    if (this.args.mascot) {
      this.mascot =
        config.guidemaker.mascots[this.args.mascot] || defaultMascot;
    } else {
      this.mascot = defaultMascot;
    }
  }
}

import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class TableOfContentsComponent extends Component {
  @service fastboot;
  @service guidemaker;

  get tocLevel() {
    return `toc-level-${this.args.level || '0'}`;
  }
}

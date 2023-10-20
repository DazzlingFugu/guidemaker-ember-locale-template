import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import config from 'ember-get-config';

export default class ChapterLinksComponent extends Component {
  @service page;

  get strCurrentChapter() {
    return config.guidemaker.texts.currentChapter;
  }

  get strNextChapter() {
    return config.guidemaker.texts.nextChapter;
  }
}

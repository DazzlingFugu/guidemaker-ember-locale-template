import { task, timeout } from 'ember-concurrency';
import { action } from '@ember/object';
import { later } from '@ember/runloop';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import algoliasearch from 'algoliasearch';
import config from 'ember-get-config';

const SEARCH_DEBOUNCE_PERIOD = 300;

export default class SearchInputComponent extends Component {
  config = config;
  value = '';

  @tracked response = undefined;

  _focused = false;
  _resultTetherConstraints = [{ to: 'window', pin: ['left', 'right'] }];

  constructor() {
    super(...arguments);
    const { algoliaId, algoliaKey, indexName } = config['algolia'] || {};

    if (algoliaId && algoliaKey && indexName) {
      this.searchFunction = true;
      this.client = algoliasearch(algoliaId, algoliaKey);
      this.index = this.client.initIndex(indexName);
      this.strSearchPlaceholder = config.guidemaker.texts.searchPlaceholder;
    }
  }

  @task({ restartable: true }) *search(query) {
    yield timeout(SEARCH_DEBOUNCE_PERIOD);

    if (!query) {
      this.response = null;
      return this.response;
    }

    const searchObj = {
      hitsPerPage: 15,
    };

    this.response = yield this.index.search(query, searchObj);
    return this.response;
  }

  @action
  oninput(value) {
    this.value = value;
    if (value) {
      this.search.perform(value);
    }
  }

  @action
  onfocus() {
    this._focused = true;
  }

  @action
  onblur() {
    later(
      this,
      function () {
        this._focused = false;
      },
      200
    );
  }
}

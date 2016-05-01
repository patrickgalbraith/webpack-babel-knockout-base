import {ajax} from 'jquery';

export default class WikipediaService {
  search (term) {
    return ajax({
      url:      'http://en.wikipedia.org/w/api.php',
      dataType: 'jsonp',
      data: {
        action: 'opensearch',
        search: term,
        format: 'json'
      }
    })
  }
}
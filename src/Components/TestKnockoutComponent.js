import ko, {observable} from 'knockout';
import template from './TestKnockoutComponent.tmpl.html';

class ViewModel {
  constructor() {
    this.firstName = observable()
  }
}

export default (window) => {
  ko.components.register('test-knockout-component', {
    viewModel: ViewModel,
    template
  })
}
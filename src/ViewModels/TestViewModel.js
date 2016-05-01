import {observable, computed, applyBindings} from 'knockout';

class TestViewModel {
  constructor(window) {
    this.firstName = observable('Bruce')
    this.lastName  = observable('Banner')
    this.fullName  = computed(() => this.firstName() + ' ' + this.lastName())
  }
}

export default (window) => (el) => {
  applyBindings(new TestViewModel(window), el)
}
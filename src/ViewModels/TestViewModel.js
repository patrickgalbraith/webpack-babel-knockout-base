import {observable, computed, applyBindings} from 'knockout';

class TestViewModel {
  constructor() {
    this.firstName = observable('Bruce')
    this.lastName  = observable('Banner')
    this.fullName  = computed(() => this.firstName() + ' ' + this.lastName())
  }
}

export default function(el) {
  applyBindings(new TestViewModel, el)
}
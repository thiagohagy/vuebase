import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faCheck,
  faEdit,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(faEdit);
library.add(faCheck);
library.add(faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
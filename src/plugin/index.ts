import * as directives from './directives/index';
import * as filters from './filters/index';

import { VueConstructor } from 'vue';

export const CustomPlugins = {
    install (Vue: VueConstructor) {
        for(let directive in directives) {
            Vue.directive(directive, (<any>directives)[directive]);
        }
        for (let filter in filters) {
            Vue.filter(filter, (<any>filters)[filter]);
        }
    }
};

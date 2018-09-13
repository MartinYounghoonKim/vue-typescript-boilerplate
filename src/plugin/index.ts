import * as directives from './directives/index';
import { VueConstructor } from 'vue';

export const CustomPlugins = {
    install (Vue: VueConstructor) {
        for(let directive in directives) {
            Vue.directive(directive, (<any>directives)[directive]);
        }
    }
};

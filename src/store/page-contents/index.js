import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const usePageContentsStore = defineStore('page_contents', {
    state,
    getters,
    actions,
});

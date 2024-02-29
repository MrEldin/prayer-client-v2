import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';

export const usePagesStore = defineStore('pages', {
    state,
    getters,
    actions,
});

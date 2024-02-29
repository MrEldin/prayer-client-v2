import {StorageSerializers, useLocalStorage} from "@vueuse/core";

export const state = () => ({
    authenticated: useLocalStorage('authenticated', false),
    user: useLocalStorage('user', null, { serializer: StorageSerializers.object }),
    jwtToken: useLocalStorage('jwtToken', null),
});

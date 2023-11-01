<template>
    <component :is="layout || 'div'">
        <router-view />
    </component>
    <ModalsContainer />
    <dark-mode />

</template>

<script>
import { provide, shallowRef } from 'vue'
import layouts from './layouts'
import router from './router'
import { ModalsContainer } from 'vue-final-modal'
import DarkMode from './components/dark/DarkMode.vue'


export default {
    components: {
        ModalsContainer,
        DarkMode,
        
    },
    
    setup() {
        const layout = shallowRef('div')

        router.afterEach((to) => {
            layout.value = layouts[to.meta.layout] || 'div'
        })
        provide('app:layout', layout)

        return {
            layout
        }
    },
    
}
</script>



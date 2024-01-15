<template>
    <div class="flex">
      <side-bar />
      <section class="flex flex-col">
        <top-bar />
        <router-view />
      </section>
    </div>
</template>
<script>
import {useStore} from "vuex";
import SideBar from '@/components/app/dashboard/SideBar.vue';
import TopBar from '@/components/app/dashboard/TopBar.vue';

export default {
  components: {
    SideBar,
    TopBar
  },
  setup() {
    const store = useStore()

    return {
    }
  }
}
</script>

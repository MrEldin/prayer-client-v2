<template>
    <div class="flex h-screen">
      <side-bar />
      <section class="flex-grow flex flex-col">
        <top-bar />
        <div class="flex-grow">
          <router-view />
        </div>
      </section>
    </div>
</template>
<script>
import {useStore} from "vuex";
import SideBar from '../components/app/dashboard/SideBar.vue';
import TopBar from "../components/app/dashboard/TopBar.vue";

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

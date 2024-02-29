<template>
    <div class="h-screen flex overflow-hidden">
      <side-bar />
      <section class="flex-grow flex flex-col">
        <router-view />
      </section>
    </div>
</template>
<script>
import SideBar from '@/components/app/dashboard/SideBar.vue';
import TopBar from '@/components/app/dashboard/TopBar.vue';

export default {
  components: {
    SideBar,
    TopBar
  },
  setup() {
    return {
    }
  }
}
</script>

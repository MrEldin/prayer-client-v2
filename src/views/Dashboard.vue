<template>
    <div>
      <router-view />
    </div>
</template>
<script>
import {useStore} from "vuex";

export default {
  components: {
  },
  setup() {
    const store = useStore()

    return {
    }
  }
}
</script>

<template>

</template>

<script>
import {useStore} from 'vuex'
import VGrid from "@revolist/vue3-datagrid";
import {ref} from "vue";

export default {
  components: {
    VGrid
  },
  setup() {
    const columns = ref([
      {
        name: "Birth",
        prop: "birthdate",
        columnType: "date",
      },
      {
        prop: "name",
        name: "First",
      },
      {
        prop: "details",
        name: "Second",
      }
    ]);

    const rows = ref([
      {
        birthdate: "2022-08-24",
        name: "1",
        details: "Item 1",
      },
      {
        birthdate: "2022-08-24",
        name: "2",
        details: "Item 2",
      }
    ]);


    const settings = ref({
      autoSizeColumn: true
      });

    return {
      columns,
      rows,
      settings
    }
  }
}
</script>

<style scoped>

.revo-grid {
  width: 100%;
}
</style>

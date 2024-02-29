<template>
  <div class="h-full flex flex-col overflow-y-hidden">
    <top-bar />
    <index />
  </div>
</template>

<script>
import VGrid from "@revolist/vue3-datagrid";
import {ref} from "vue";
import Index from '../components/app/dashboard/Index.vue';
import TopBar from "@/components/app/dashboard/TopBar.vue";

export default {
  components: {
    TopBar,
    VGrid,
    Index
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

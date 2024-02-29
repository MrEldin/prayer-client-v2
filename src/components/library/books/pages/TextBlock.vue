<template>
  <div
      class="border-[0.4px] border-[#d1d1d1] border-opacity-[56%] border-dashed p-2 rounded-lg relative"
  >
    <ContentEditable
        v-model="data.text"
        :attributes="data.attributes"
        placeholder="Unesite text ovog priloga.."
        @update:modelValue="updateBlock"
    />
  </div>
</template>

<script setup>
import ContentEditable from "@/components/library/ContentEditable.vue";

const emit = defineEmits(['editBlock']);

const props = defineProps({
  data: Object,
  id: [String, Number],
});

const updateBlock = () => {
  emit('editBlock', {id: props.id, data: props.data});
};



</script>

<style scoped>
.editable:focus {
  outline: none;
}

.editable:empty:before {
  content: attr(placeholder);
  display: block; /* For line-break */
  color: #d1d1d1;
}
</style>

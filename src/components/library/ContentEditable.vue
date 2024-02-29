<template>
  <div
      class="w-full editable-container relative"
      @click="focusEditable"
      :style="{ '--placeholder-color': computedPlaceholderColor }"
  >
    <div
        ref="editable"
        contenteditable="true"
        class="editable w-full min-h-[20px] outline-none bg-transparent"
        :class="{ 'placeholder-shown': !content.trim() }"
        :data-placeholder="placeholder"
        :style="computedStyle"
        @input="updateContent"
        @keydown="handleKeyDown"
    ></div>
  </div>
</template>

<script setup>
import {ref, watch, computed, onMounted, nextTick} from 'vue';
import {useDebounceFn} from "@vueuse/core";

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: String,
  placeholder: String,
  attributes: Object,
});

const editable = ref(null);
const content = ref(props.modelValue || ''); // Initialize content with modelValue

// Function to set the inner text of the editable div
const setEditableText = (text) => {
  if (editable.value) {
    editable.value.innerText = text;
  }
};

// Initialize the contenteditable text on mount and synchronize with modelValue
onMounted(() => {
  setEditableText(content.value);
});

// Watch for changes in modelValue and update the content and editable div
watch(() => props.modelValue, (newValue, oldValue) => {
  console.log('ContentEditable - modelValue changed from', oldValue, 'to', newValue);
  content.value = newValue || '';
  setEditableText(content.value);
});

// Function to save the cursor position
function saveCursorPosition(editableElement) {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return null; // No selection
  const range = selection.getRangeAt(0);
  const preSelectionRange = range.cloneRange();
  preSelectionRange.selectNodeContents(editableElement);
  preSelectionRange.setEnd(range.startContainer, range.startOffset);
  const start = preSelectionRange.toString().length;

  return { start, end: start + range.toString().length };
}

// Function to restore the cursor position
function restoreCursorPosition(editableElement, savedPosition) {
  if (!savedPosition) return;

  const selection = window.getSelection();
  const range = document.createRange();
  range.setStart(editableElement, 0);
  range.collapse(true);

  const nodeStack = [editableElement];
  let node, foundStart = false;
  let charIndex = 0;

  while (!foundStart && (node = nodeStack.pop())) {
    if (node.nodeType === 3) {
      const nextCharIndex = charIndex + node.length;
      if (!foundStart && savedPosition.start >= charIndex && savedPosition.start <= nextCharIndex) {
        range.setStart(node, savedPosition.start - charIndex);
        foundStart = true;
      }
      if (foundStart && savedPosition.end >= charIndex && savedPosition.end <= nextCharIndex) {
        range.setEnd(node, savedPosition.end - charIndex);
        break;
      }
      charIndex = nextCharIndex;
    } else {
      let i = node.childNodes.length;
      while (i--) {
        nodeStack.push(node.childNodes[i]);
      }
    }
  }

  selection.removeAllRanges();
  selection.addRange(range);
}


const autosave = useDebounceFn(() => {
  const savedPosition = saveCursorPosition(editable.value);
  emit('update:modelValue', content.value);
  nextTick(() => { // Use nextTick to ensure the DOM update completes
    restoreCursorPosition(editable.value, savedPosition);
  });
}, 3000);

const updateContent = () => {
  content.value = editable.value.innerText;
  autosave()
};

const focusEditable = () => {
  editable.value.focus();
};

const handleKeyDown = (event) => {
  // Handle keydown event if needed
};

const computedStyle = computed(() => ({
  color: props.attributes?.color || '#ffffff',
  fontWeight: props.attributes?.bold ? 'bold' : 'normal',
  textAlign: props.attributes?.align || 'left',
}));

const computedPlaceholderColor = computed(() => {
  return props.attributes?.color || 'rgba(255, 255, 255, 0.56)';
});
</script>


<style scoped>
.editable-container .editable.placeholder-shown::before {
  content: attr(data-placeholder);
  color: var(--placeholder-color);
  pointer-events: none;
}

.editable:focus {
  outline: none;
}
</style>

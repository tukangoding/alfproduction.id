<script setup lang="ts">
withDefaults(
  defineProps<{
    filters: string[]
    modelValue: string
  }>(),
  {}
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div
    class="flex gap-2 overflow-x-auto pb-1"
    role="group"
    aria-label="Filter portofolio"
  >
    <button
      v-for="filter in filters"
      :key="filter"
      type="button"
      :aria-pressed="modelValue === filter"
      class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
      :class="
        modelValue === filter
          ? 'bg-primary text-primary-on'
          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
      "
      @click="emit('update:modelValue', filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>

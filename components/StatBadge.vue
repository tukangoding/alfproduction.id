<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <div
    class="md-elevated-1 flex flex-col items-center gap-1 rounded-md-large border border-outline-soft bg-surface-container px-5 py-4 text-center"
  >
    <span class="text-xl font-bold text-on-surface">{{ value }}</span>
    <span class="text-sm text-on-surface-variant">{{ label }}</span>
  </div>
</template>

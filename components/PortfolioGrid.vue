<script setup lang="ts">
import type { PortfolioItem } from '~/config/portfolio'

defineProps<{
  items: PortfolioItem[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <PortfolioCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

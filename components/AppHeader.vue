<script setup lang="ts">
import { brand, nav, waLink, type NavItem } from "~/config/site";

const route = useRoute();
const menuOpen = ref(false);

function isActive(item: NavItem): boolean {
  return route.path === item.to;
}

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  },
);
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-outline-soft bg-surface-translucent backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
    >
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          :src="brand.logo"
          :alt="brand.name"
          class="h-8 w-auto object-contain"
        />
      </NuxtLink>

      <nav
        class="hidden items-center gap-6 md:flex"
        aria-label="Navigasi utama"
      >
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          :external="item.external"
          class="group relative text-sm font-medium transition-colors"
          :class="
            isActive(item)
              ? 'text-on-surface'
              : 'text-on-surface-variant hover:text-on-surface'
          "
        >
          {{ item.label }}
          <span
            aria-hidden="true"
            class="absolute -bottom-1.5 left-0 h-0.5 rounded-full transition-all duration-300"
            :class="
              isActive(item)
                ? 'w-full bg-primary'
                : 'w-0 bg-primary group-hover:w-full'
            "
          />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-on transition-transform hover:scale-105 sm:inline-flex"
        >
          Konsultasi Gratis
        </a>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-high md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          aria-label="Menu"
          @click="menuOpen = !menuOpen"
        >
          <svg
            v-if="!menuOpen"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="slide">
      <div
        v-if="menuOpen"
        id="mobile-nav"
        class="overflow-hidden border-t border-outline-soft md:hidden"
      >
        <nav
          class="mx-auto max-w-6xl px-4 py-4 sm:px-6"
          aria-label="Navigasi menu"
        >
          <ul class="space-y-1">
            <li v-for="item in nav" :key="item.to">
              <NuxtLink
                :to="item.to"
                :external="item.external"
                class="block rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
                :class="
                  isActive(item)
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                "
                @click="menuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
          <a
            :href="waLink()"
            target="_blank"
            rel="noopener"
            class="md-elevated-1 mt-3 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-on"
          >
            Konsultasi Gratis
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 520px;
  opacity: 1;
}
</style>

<script setup lang="ts">
import { brand, nav, waLink, type NavItem } from "~/config/site";

const route = useRoute();
const menuOpen = ref(false);
const headerRef = ref<HTMLElement | null>(null);

function isActive(item: NavItem): boolean {
  return route.path === item.to;
}

function closeMenu() {
  menuOpen.value = false;
}

watch(() => route.path, closeMenu);

onMounted(() => {
  document.addEventListener("click", onClickOutside);
  document.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  document.removeEventListener("click", onClickOutside);
  document.removeEventListener("keydown", onKeydown);
});

function onClickOutside(event: MouseEvent) {
  if (!menuOpen.value) return;
  const target = event.target as Node;
  if (headerRef.value && !headerRef.value.contains(target)) {
    closeMenu();
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") closeMenu();
}
</script>

<template>
  <header
    ref="headerRef"
    class="sticky top-0 z-50 border-b border-outline-soft bg-white"
  >
    <div
      class="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
    >
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          :src="brand.logo"
          :alt="brand.name"
          width="64"
          height="64"
          class="h-14 w-auto object-contain"
        />
      </NuxtLink>

      <nav
        class="hidden items-center gap-5 xl:flex xl:gap-6"
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
                ? 'w-full bg-alf-accent'
                : 'w-0 bg-alf-accent group-hover:w-full'
            "
          />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="md-elevated-1 hidden items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-on transition-transform hover:scale-105 md:inline-flex"
        >
          Konsultasi Gratis
        </a>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container-high xl:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          aria-label="Menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="flex h-4 w-5 flex-col justify-between">
            <span
              class="h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300"
              :class="menuOpen ? 'translate-y-[7px] rotate-45' : ''"
            />
            <span
              class="h-0.5 w-full rounded-full bg-current transition-opacity duration-200"
              :class="menuOpen ? 'opacity-0' : ''"
            />
            <span
              class="h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300"
              :class="menuOpen ? '-translate-y-[7px] -rotate-45' : ''"
            />
          </span>
        </button>
      </div>
    </div>

    <Transition name="slide">
      <div
        v-if="menuOpen"
        id="mobile-nav"
        class="overflow-hidden border-t border-outline-soft bg-white shadow-lg xl:hidden"
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
                    ? 'bg-[#C4D600] font-semibold text-slate-800'
                    : 'text-slate-800 hover:bg-surface-container-high'
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
            class="md-elevated-1 mt-4 flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-on transition-transform hover:scale-[1.02]"
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

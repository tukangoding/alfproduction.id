<script setup lang="ts">
import { brand, nav, socials, contact, waLink, type NavItem } from "~/config/site";

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
    class="sticky top-0 z-50 border-b border-outline-soft bg-white backdrop-blur-md md:bg-surface-translucent"
  >
    <div
      class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
    >
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          :src="brand.logo"
          :alt="brand.name"
          class="h-36 w-auto object-contain"
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

    <div
      v-if="menuOpen"
      class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
      aria-hidden="true"
      @click="closeMenu"
    />

    <div
      id="mobile-nav"
      class="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col justify-between overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
      :class="menuOpen ? 'translate-x-0' : 'translate-x-full'"
      :aria-hidden="!menuOpen"
      :inert="!menuOpen"
    >
      <div class="flex items-center justify-between pb-6">
        <img :src="brand.logo" :alt="brand.name" class="h-8 w-auto" />
        <button
          type="button"
          @click="closeMenu"
          class="rounded-full p-2 text-gray-700 transition hover:bg-gray-100"
          aria-label="Tutup menu"
        >
          <span class="block text-2xl leading-none">&#10005;</span>
        </button>
      </div>

      <nav class="flex flex-col space-y-2 py-4" aria-label="Navigasi menu">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          :external="item.external"
          @click="closeMenu"
          class="rounded-lg px-4 py-3 text-base font-semibold transition"
          :class="
            isActive(item)
              ? 'bg-[#8cb811] text-white shadow-sm'
              : 'text-gray-900 hover:bg-gray-100'
          "
        >
          {{ item.label }}
        </NuxtLink>

        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="mt-4 rounded-full bg-[#8cb811] px-6 py-3.5 text-center text-base font-bold text-white shadow transition hover:opacity-95"
        >
          Konsultasi Gratis
        </a>
      </nav>

      <div class="border-t border-gray-100 pt-6 text-sm text-gray-500">
        <p class="mb-4 font-medium text-gray-800">
          {{ contact.whatsappDisplay }}
        </p>
        <div class="flex gap-3">
          <SocialIconLink
            v-for="s in socials"
            :key="s.name"
            :icon="s.icon"
            :href="s.url"
            :label="s.name"
          />
        </div>
      </div>
    </div>
  </header>
</template>

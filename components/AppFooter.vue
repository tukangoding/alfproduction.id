<script setup lang="ts">
import { brand, contact, socials, waLink } from '~/config/site'
import { includedServices, servicePackages } from '~/config/services'
</script>

<template>
  <footer class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6 md:pt-16">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p class="flex items-baseline gap-1.5 text-lg font-bold tracking-tight text-on-surface">
            <span>{{ brand.name.split(' ')[0] }}</span>
            <span class="text-primary">{{ brand.name.split(' ').slice(1).join(' ') }}</span>
          </p>
          <p class="mt-2 text-sm font-medium text-on-surface">{{ brand.tagline }}</p>
          <p class="mt-3 max-w-xs text-sm leading-relaxed text-on-surface-variant">
            Komposer spesialis lagu Mars &amp; Hymne untuk sekolah, yayasan, dan lembaga — dari
            lirik hingga audio kualitas studio.
          </p>
        </div>

        <nav aria-label="Layanan">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-on-surface">Layanan</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="service in includedServices" :key="service">
              <NuxtLink
                to="/layanan#paket"
                class="text-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-label="Paket">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-on-surface">Paket</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="pkg in servicePackages" :key="pkg.id">
              <NuxtLink
                :to="`/layanan#${pkg.id}`"
                class="text-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {{ pkg.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-on-surface">Kontak</h3>
          <ul class="mt-4 space-y-2.5">
            <li>
              <a
                :href="waLink()"
                target="_blank"
                rel="noopener"
                class="text-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {{ contact.whatsappDisplay }}
              </a>
            </li>
            <li v-for="social in socials" :key="social.name">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="text-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-3 border-t border-outline-soft pt-6 text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex flex-wrap gap-x-5 gap-y-1">
          <NuxtLink
            to="/kebijakan-privasi"
            class="transition-colors hover:text-on-surface"
          >
            Kebijakan Privasi
          </NuxtLink>
          <NuxtLink to="/syarat-ketentuan" class="transition-colors hover:text-on-surface">
            Syarat &amp; Ketentuan
          </NuxtLink>
        </div>
        <p>© 2026 ALF Production</p>
      </div>
    </div>
  </footer>
</template>

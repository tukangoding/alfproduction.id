<script setup lang="ts">
import { brand, contact, socials, waLink } from '~/config/site'
import { includedServices, servicePackages } from '~/config/services'
</script>

<template>
  <footer class="border-t border-outline-soft bg-surface-dim">
    <div class="mx-auto max-w-6xl px-4 pb-6 pt-10 sm:px-6 md:pt-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p class="flex items-baseline gap-1.5 text-lg font-bold tracking-tight text-on-surface">
            <span>{{ brand.name.split(' ')[0] }}</span>
            <span class="text-primary-strong">{{ brand.name.split(' ').slice(1).join(' ') }}</span>
          </p>
          <p class="mt-2 text-sm font-medium text-on-surface">{{ brand.tagline }}</p>
          <p class="mt-3 max-w-xs text-sm leading-relaxed text-on-surface-variant">
            Spesialis produksi Mars &amp; Hymne untuk lembaga dan organisasi — dari
            lirik hingga audio berkualitas studio.
          </p>
        </div>

        <nav aria-label="Layanan">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-on-surface">Layanan</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="service in includedServices" :key="service">
              <NuxtLink
                to="/layanan#paket"
                class="inline-block py-1.5 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
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
                class="inline-block py-1.5 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
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
                class="inline-block py-1.5 text-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {{ contact.whatsappDisplay }}
              </a>
            </li>
          </ul>
          <div class="mt-4 flex items-center gap-3">
            <SocialIconLink icon="whatsapp" :href="waLink()" label="WhatsApp" />
            <SocialIconLink
              v-for="social in socials"
              :key="social.name"
              :icon="social.icon"
              :href="social.url"
              :label="social.name"
            />
          </div>
        </div>
      </div>

      <div
        class="mt-8 flex flex-col gap-3 border-t border-outline-soft pt-5 text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between"
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

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isJSITNetwork?: boolean
  }>(),
  { isJSITNetwork: false }
)

const musicianStatusText = computed(() =>
  props.isJSITNetwork
    ? 'Musisi aktif di Azzam Haroki dan sebagai penulis lagu utama.'
    : 'Musisi Aktif.'
)
</script>

<template>
  <section class="mx-auto max-w-6xl border-t border-outline-soft px-4 pb-10 sm:px-6">
    <div
      class="md-elevated-2 grid grid-cols-1 items-center gap-8 rounded-md-large bg-surface-container p-6 md:grid-cols-[auto_1fr] md:gap-10 md:p-10"
    >
      <div class="relative mx-auto w-56 md:w-64">
        <div
          class="absolute -inset-4 rounded-full bg-primary"
          aria-hidden="true"
        />
        <img
          src="/alief.png"
          alt="Foto founder ALF Production"
          width="500"
          height="500"
          loading="lazy"
          decoding="async"
          class="relative h-auto w-full rounded-full"
        />
      </div>

      <div>
        <span
          class="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-on"
        >
          Personal Guarantee &middot; Dari Founder
        </span>

        <h2
          class="mt-3 text-xl font-bold tracking-tight text-on-surface md:text-2xl"
        >
          Komitmen Kualitas ALF Production
        </h2>

        <p class="mt-3 text-base leading-normal text-on-surface">
          &ldquo;Saya, selaku founder ALF Production, berkomitmen mengerjakan
          setiap Mars &amp; Hymne dengan aransemen yang sungguh-sungguh,
          komunikasi yang jelas selama proses produksi, serta hasil akhir
          terbaik yang kami banggakan &mdash; demi kepuasan lembaga Anda.&rdquo;
        </p>

        <p class="mt-3 text-sm font-medium text-primary-strong">
          {{ musicianStatusText }}
        </p>
      </div>
    </div>
  </section>
</template>

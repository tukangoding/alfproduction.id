<script setup lang="ts">
const props = defineProps<{
  pageId: string
  pageUrl: string
  pageTitle: string
}>()

const DISQUS_SHORTNAME = 'alfproduction-id'

function initDisqus() {
  if (typeof window === 'undefined') return

  // @ts-ignore
  window.disqus_config = function () {
    // @ts-ignore
    this.page.url = props.pageUrl
    // @ts-ignore
    this.page.identifier = props.pageId
    // @ts-ignore
    this.page.title = props.pageTitle
  }

  const d = document
  const s = d.createElement('script')
  s.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`
  s.setAttribute('data-timestamp', String(+new Date()))
  ;(d.head || d.body).appendChild(s)
}

onMounted(() => {
  initDisqus()
})

useHead({
  script: [
    {
      id: 'dsq-count',
      src: `https://${DISQUS_SHORTNAME}.disqus.com/count.js`,
      async: true
    }
  ]
})
</script>

<template>
  <div id="disqus_thread" />
</template>

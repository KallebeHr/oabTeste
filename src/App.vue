<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { siteConfig } from './config/siteConfig'
import InstitutionalSite from './components/InstitutionalSite.vue'
import ProfessionalPage from './components/ProfessionalPage.vue'
const hash = ref(window.location.hash)
const profileSlug = computed(() => hash.value.startsWith('#/equipe/') ? hash.value.slice(9) : '')
async function updateRoute() {
  const wasProfile = Boolean(profileSlug.value)
  hash.value = window.location.hash
  await nextTick()
  if (profileSlug.value) window.scrollTo({ top: 0, behavior: 'instant' })
  else if (wasProfile) document.getElementById(hash.value.slice(1))?.scrollIntoView({ behavior: 'instant' })
}
onMounted(() => window.addEventListener('hashchange', updateRoute))
onUnmounted(() => window.removeEventListener('hashchange', updateRoute))
watchEffect(() => {
  for (const [key, value] of Object.entries(siteConfig.theme)) document.documentElement.style.setProperty(`--color-${key.replace(/[A-Z]/g, l => `-${l.toLowerCase()}`)}`, value)
  document.querySelector('link[rel="icon"]')?.setAttribute('href', siteConfig.brand.favicon)
  const profileIndex = siteConfig.professionalProfiles.findIndex(p => p.slug === profileSlug.value)
  document.title = profileSlug.value && siteConfig.team[profileIndex] ? `${siteConfig.team[profileIndex].name} | ${siteConfig.brand.officeName}` : siteConfig.seo.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', siteConfig.seo.description)
})
</script>
<template><ProfessionalPage v-if="profileSlug" :key="profileSlug" :slug="profileSlug" /><InstitutionalSite v-else /></template>

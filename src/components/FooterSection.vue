<script setup>
import { computed } from 'vue'
import { siteConfig as c } from '../config/siteConfig'

const socialLinks = computed(() => Object.entries(c.social).filter(([, url]) => url))
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="wrap footer-inner">
      <span>{{ c.brand.officeName }}<small>{{ c.brand.oab }}</small></span>
      <p>© {{ currentYear }} · Todos os direitos reservados.</p>
      <nav aria-label="Redes sociais" class="social-links">
        <a v-for="[network, url] in socialLinks" :key="network" :href="url" target="_blank" rel="noopener">{{ network }}</a>
      </nav>
    </div>
  </footer>
</template>

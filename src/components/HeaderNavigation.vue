<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { siteConfig as c, whatsappUrl } from '../config/siteConfig'

const menu = ref(false)
const query = ref('')
const searched = ref(false)
const menuClose = ref(null)
const menuOpen = ref(null)
const links = [['Início', '#inicio'], ['O escritório', '#escritorio'], ['Áreas de atuação', '#areas'], ['Nossa equipe', '#equipe'], ['Localização', '#localizacao'], ['Contato', '#contato']]
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const results = computed(() => {
  const term = normalize(query.value.trim())
  if (!term) return []
  return [
    ...c.practiceAreas.map((area, index) => ({ title: area.title, text: area.description, href: `#area-${index}` })),
    { title: c.about.title, text: c.about.text, href: '#escritorio' },
    { title: 'Contato e atendimento', text: `${c.contact.address} ${c.contact.email}`, href: '#contato' },
    { title: 'Agendamento e triagem', text: 'Solicitar atendimento presencial ou por vídeo', href: '#agendamento' },
    { title: 'Checklist de documentos', text: 'Preparar documentos para o atendimento', href: '#documentos' },
    ...c.faq.map(item => ({ title: item.question, text: item.answer, href: '#duvidas' })),
  ].filter(item => normalize(`${item.title} ${item.text}`).includes(term))
})

watch(menu, async value => {
  document.body.classList.toggle('menu-is-open', value)
  if (value) { await nextTick(); menuClose.value?.focus() }
  else menuOpen.value?.focus()
})

function trapMenuFocus(event) {
  if (!menu.value) return
  const items = [...event.currentTarget.querySelectorAll('a[href],button:not([disabled])')]
  const first = items[0]
  const last = items[items.length - 1]
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
}

onUnmounted(() => document.body.classList.remove('menu-is-open'))
</script>

<template>
  <header id="inicio">
    <div class="topbar wrap">
      <span class="top-note">Ética. Proximidade. Compromisso.</span>
      <button ref="menuOpen" class="menu-toggle icon-button" :aria-expanded="menu" aria-controls="navigation" aria-label="Abrir menu principal" @click="menu = true"><i class="mdi mdi-menu" aria-hidden="true" /></button>
      <nav id="navigation" :class="{ expanded: menu }" aria-label="Navegação principal" @keydown.esc="menu = false" @keydown.tab="trapMenuFocus">
        <div class="mobile-menu-head"><a href="#inicio" @click="menu = false"><span class="monogram">{{ c.brand.initials }}</span><span>{{ c.brand.shortName }}<small>ADVOCACIA</small></span></a><button ref="menuClose" aria-label="Fechar menu principal" @click="menu = false"><i class="mdi mdi-close" aria-hidden="true" /></button></div>
        <p class="mobile-menu-label">NAVEGUE PELO SITE</p>
        <a v-for="([label, href], index) in links" :key="href" :href="href" :style="{ '--menu-index': index }" @click="menu = false"><span>0{{ index + 1 }}</span>{{ label }}<i class="mdi mdi-arrow-right" aria-hidden="true" /></a>
        <div class="mobile-menu-contact"><a :href="`tel:+${c.contact.phoneRaw}`"><i class="mdi mdi-phone-outline" aria-hidden="true" />{{ c.contact.phone }}</a><a :href="whatsappUrl()" target="_blank" rel="noopener"><i class="mdi mdi-whatsapp" aria-hidden="true" />WhatsApp</a></div>
      </nav>
    </div>
    <div class="masthead"><div class="wrap masthead-inner">
      <a href="#inicio" class="brand" :aria-label="`${c.brand.officeName} — início`"><img v-if="c.brand.logo" :src="c.brand.logo" :alt="c.brand.officeName"><span v-else class="monogram">{{ c.brand.initials }}</span><span>{{ c.brand.shortName }}<small>ADVOCACIA</small></span></a>
      <form class="search" role="search" @submit.prevent="searched = true"><label class="sr-only" for="site-search">Pesquisar no site</label><input id="site-search" v-model="query" type="search" placeholder="O que você procura?" @keydown.esc="searched = false"><button aria-label="Pesquisar"><i class="mdi mdi-magnify" aria-hidden="true" /></button></form>
      <a class="header-phone" :href="`tel:+${c.contact.phoneRaw}`"><i class="mdi mdi-phone-outline" aria-hidden="true" /><span><small>Fale com nosso escritório</small>{{ c.contact.phone }}</span></a>
    </div></div>
  </header>
  <section v-if="searched" class="search-results wrap" aria-label="Resultados da pesquisa">
    <button class="close-results" @click="searched = false">Fechar pesquisa <i class="mdi mdi-close" aria-hidden="true" /></button>
    <h2>Resultados da pesquisa</h2>
    <p role="status">{{ query.trim() ? `${results.length} resultado(s) para “${query}”` : 'Digite uma palavra para pesquisar.' }}</p>
    <a v-for="result in results" :key="result.title + result.href" :href="result.href" @click="searched = false">{{ result.title }}<small>{{ result.text }}</small></a>
  </section>
</template>

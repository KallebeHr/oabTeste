<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { siteConfig as c, whatsappUrl } from '../config/siteConfig'
import AccessibilityMenu from './AccessibilityMenu.vue'
import ContactSection from './ContactSection.vue'
import FooterSection from './FooterSection.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import PracticeAreas from './PracticeAreas.vue'
import TeamSection from './TeamSection.vue'

const bubble = ref(false)
const dismissed = ref(false)
const messageIndex = ref(0)
let firstTimer
let intervalTimer
let hideTimer
let motion

function showBubble() {
  if (dismissed.value || document.hidden) return
  bubble.value = true
  hideTimer = setTimeout(() => {
    bubble.value = false
    messageIndex.value++
  }, 9000)
}

onMounted(() => {
  motion = gsap.matchMedia()
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo('.editorial-photo', { y: 10 }, { y: 0, duration: 0.65, ease: 'power2.out', clearProps: 'transform' })
  })
  firstTimer = setTimeout(showBubble, c.whatsappWidget.firstDelay)
  intervalTimer = setInterval(showBubble, c.whatsappWidget.interval)
})

onUnmounted(() => {
  motion?.revert()
  clearTimeout(firstTimer)
  clearTimeout(hideTimer)
  clearInterval(intervalTimer)
})
</script>

<template>
  <a href="#main-content" class="skip-link">Pular para o conteúdo</a>
  <HeaderNavigation />

  <section class="hero" :style="{ backgroundImage: `url(${c.hero.backgroundImage})` }">
    <div class="wrap">
      <p>{{ c.hero.eyebrow }}</p>
      <h1>{{ c.hero.title }}</h1>
      <span>{{ c.hero.subtitle }}</span>
    </div>
  </section>

  <main id="main-content" tabindex="-1" class="wrap">
    <div class="editorial-layout">
      <article id="escritorio">
        <img class="editorial-photo" :src="c.about.photo" :alt="c.about.photoAlt" width="1600" height="880">
        <p class="eyebrow">O ESCRITÓRIO</p>
        <h2>{{ c.about.title }}</h2>
        <p class="lead">{{ c.about.subtitle }}</p>
        <p>{{ c.about.text }}</p>
        <a class="text-link" href="#equipe">Conheça nossa equipe <i class="mdi mdi-arrow-right" aria-hidden="true" /></a>
      </article>
      <aside class="practice-sidebar" aria-label="Nossas especialidades">
        <h2>Como podemos ajudar?</h2>
        <p>Conheça nossas áreas de atuação</p>
        <a v-for="(area, index) in c.practiceAreas" :key="area.title" :href="`#area-${index}`">
          {{ area.title }}<i class="mdi mdi-chevron-right" aria-hidden="true" />
        </a>
        <a class="outline-button" href="#contato">Entre em contato <i class="mdi mdi-arrow-right" aria-hidden="true" /></a>
        <div class="sidebar-note">
          <i class="mdi mdi-message-text-outline" aria-hidden="true" />
          <p>Orientação clara.<br>Atendimento próximo.</p>
          <small>{{ c.contact.businessHours }}</small>
        </div>
      </aside>
    </div>

    <PracticeAreas />
    <TeamSection />
    <ContactSection />
  </main>

  <FooterSection />

  <div class="whatsapp-widget">
    <div v-if="bubble" class="whatsapp-bubble">
      <button aria-label="Não mostrar mais mensagens" @click="dismissed = true; bubble = false">
        <i class="mdi mdi-close" aria-hidden="true" />
      </button>
      <p>{{ c.whatsappWidget.messages[messageIndex % c.whatsappWidget.messages.length] }}</p>
      <a :href="whatsappUrl()" target="_blank" rel="noopener">Iniciar conversa</a>
    </div>
    <a class="whatsapp-button" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Conversar pelo WhatsApp (abre em nova aba)">
      <i class="mdi mdi-whatsapp" aria-hidden="true" />
    </a>
  </div>

  <AccessibilityMenu />
</template>

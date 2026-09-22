<script setup>
import { ref, watch, onUnmounted } from 'vue'

const open = ref(false)
const contrast = ref(false)
const underline = ref(false)
const readable = ref(false)
const size = ref(100)
const status = ref('')
const loading = ref(false)
const libras = ref(false)
const speaking = ref(false)
const paused = ref(false)
let widget

watch(open, value => document.documentElement.classList.toggle('libras-panel-open', value))
watch([contrast, underline, readable, size], () => {
  document.documentElement.classList.toggle('accessible-contrast', contrast.value)
  document.documentElement.classList.toggle('accessible-links', underline.value)
  document.documentElement.classList.toggle('accessible-readable', readable.value)
  document.documentElement.style.fontSize = `${size.value}%`
})

function stopReading() {
  window.speechSynthesis?.cancel()
  speaking.value = false
  paused.value = false
}

function reset() {
  contrast.value = false
  underline.value = false
  readable.value = false
  size.value = 100
  stopReading()
}

function readPage() {
  if (!('speechSynthesis' in window)) {
    status.value = 'A leitura em voz alta não é compatível com este navegador.'
    return
  }

  window.speechSynthesis.cancel()
  const text = document.querySelector('main')?.innerText?.replace(/\s+/g, ' ').trim()
  if (!text) return

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'pt-BR'
  utterance.rate = 0.95
  utterance.onstart = () => {
    speaking.value = true
    paused.value = false
    status.value = 'Leitura da página iniciada.'
  }
  utterance.onend = () => {
    speaking.value = false
    paused.value = false
    status.value = 'Leitura concluída.'
  }
  utterance.onerror = () => {
    speaking.value = false
    paused.value = false
    status.value = 'A leitura foi interrompida.'
  }
  window.speechSynthesis.speak(utterance)
}

function togglePause() {
  if (!speaking.value) return
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume()
    paused.value = false
    status.value = 'Leitura retomada.'
  } else {
    window.speechSynthesis.pause()
    paused.value = true
    status.value = 'Leitura pausada.'
  }
}

async function loadLibras() {
  if (loading.value) return
  loading.value = true
  status.value = 'Carregando o tradutor de Libras…'

  try {
    await new Promise((resolve, reject) => {
      if (window.VLibras) return resolve()
      const script = document.createElement('script')
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
      const timeout = setTimeout(() => reject(new Error('timeout')), 15000)
      script.onload = () => { clearTimeout(timeout); resolve() }
      script.onerror = () => { clearTimeout(timeout); script.remove(); reject(new Error('network')) }
      document.head.appendChild(script)
    })

    if (!widget) widget = new window.VLibras.Widget('https://vlibras.gov.br/app')
    const launcher = await new Promise((resolve, reject) => {
      const start = Date.now()
      const check = () => {
        const button = document.querySelector('#vlibras-access-wrapper')?.shadowRoot?.querySelector('#vlibras-button')
        if (button) return resolve(button)
        if (Date.now() - start > 15000) return reject(new Error('timeout'))
        setTimeout(check, 100)
      }
      check()
    })
    launcher.click()
    libras.value = true
    status.value = ''
    open.value = false
  } catch {
    status.value = 'Não foi possível carregar o VLibras. Verifique sua conexão e tente novamente.'
  } finally {
    loading.value = false
  }
}

onUnmounted(() => {
  reset()
  widget?.destroy?.()
})
</script>

<template>
  <div class="accessibility-widget" @keydown.esc="open = false">
    <section v-show="open" id="accessibility-panel" aria-label="Opções de acessibilidade" class="accessibility-panel">
      <header>
        <h2>Acessibilidade</h2>
        <button aria-label="Fechar acessibilidade" @click="open = false"><i class="mdi mdi-close" aria-hidden="true" /></button>
      </header>
      <p>Personalize sua navegação e leitura</p>
      <div class="size-controls">
        <button aria-label="Diminuir texto" :disabled="size <= 100" @click="size -= 10">A−</button>
        <output aria-live="polite">{{ size }}%</output>
        <button aria-label="Aumentar texto" :disabled="size >= 150" @click="size += 10">A+</button>
      </div>
      <label><input v-model="contrast" type="checkbox"> Alto contraste</label>
      <label><input v-model="underline" type="checkbox"> Destacar links</label>
      <label><input v-model="readable" type="checkbox"> Espaçamento de leitura</label>
      <div class="speech-tools" aria-label="Leitura em voz alta">
        <strong><i class="mdi mdi-account-voice" aria-hidden="true" /> Leitura em voz alta</strong>
        <button v-if="!speaking" class="access-action" @click="readPage"><i class="mdi mdi-play" aria-hidden="true" /> Ler conteúdo principal</button>
        <template v-else>
          <button class="access-action" @click="togglePause"><i class="mdi" :class="paused ? 'mdi-play' : 'mdi-pause'" aria-hidden="true" /> {{ paused ? 'Continuar leitura' : 'Pausar leitura' }}</button>
          <button class="access-action" @click="stopReading"><i class="mdi mdi-stop" aria-hidden="true" /> Parar leitura</button>
        </template>
      </div>
      <button class="access-action" @click="reset"><i class="mdi mdi-restore" aria-hidden="true" /> Restaurar padrão</button>
      <button class="access-action" :disabled="loading" @click="loadLibras"><i class="mdi mdi-hand-wave-outline" aria-hidden="true" /> {{ loading ? 'Carregando…' : (libras ? 'Abrir tradução em Libras' : 'Ativar tradução em Libras') }}</button>
      <p class="libras-status" role="status" aria-live="polite">{{ status }}</p>
      <div v-show="libras" vw class="libras-container enabled"><div vw-access-button class="active" /><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper" /></div></div>
    </section>
    <button class="accessibility-button" aria-controls="accessibility-panel" :aria-expanded="open" aria-label="Opções de acessibilidade" @click="open = !open"><i class="mdi mdi-human" aria-hidden="true" /></button>
  </div>
</template>

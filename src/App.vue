<template>
  <div class="mh3 mt4 mb2 measure-wide">
    <main>
      <section>
        <p>
          <strong>Max Stein</strong> is a sound & media artist based in Los Angeles. His work explores urban space and
          infrastructure through site-specific performances, installation art, field recording, and cartography.
        </p>
        <p v-if="showReadMore">
          <a
            id="readmore-bio" class="link black underline-hover" :class="[readMore ? 'toggle-more' : 'toggle-less']"
            href="#more-bio" title="Read more bio" @click.prevent="readMore = !readMore"
          >+</a>
        </p>
        <div id="more-bio" :class="{ 'visually-hidden': !readMore }">
          <p>
            He designed and runs the Montréal Sound Map (2008-present), and has collaborated on other sound mapping
            projectsincluding TSIKAYA, San Francisco Bay Area Sound Map, Oljud Sthlm, Portland Sound Map, Belfast Sound
            Map, My Favorite Brussels Sound, and the Soundprint Archive.
          </p>
          <p>
            As a frequent collaborator with sound artist and musician, Jen Reimer, he has created in-situ performances
            and installations in resonant spaces around the world. Most recently, they launched an online exhibition of
            urban soundscapes called Sounding the City.
          </p>
        </div>
      </section>

      <section>
        <h1>Projects</h1>
        <TheProject title="Jen Reimer & Max Stein" image="reimerstein2.jpg" website="https://reimerstein.com" />
        <TheProject title="Sounding the City" image="soundingthecity.jpg" website="https://soundingthecity.com" />
        <TheProject title="Sumida-ku Sound Map" image="sumidakusoundmap.jpg" website="https://sumida.reimerstein.com" />
        <TheProject title="Montréal Sound Map" image="montrealsoundmap.jpg" website="https://montrealsoundmap.com" />
        <TheProject
          title="Outremont Wasteland" image="outremontwasteland.jpg"
          website="https://reimerstein.com/outremont-wasteland/"
        />
        <TheProject title="Music for Lamps" image="musicforlamps.jpg" website="https://musicforlamps.com" />
      </section>

      <section>
        <div class="flex justify-between items-end">
          <h1>Contact</h1>
          <h1>
            <a
              id="top" href="#" class="link black underline-hover" title="Back to Top" @click.prevent="scrollToTop"
            >ᐱ</a>
          </h1>
        </div>
        <div>
          <h2 class="normal lh-solid mb2-ns mb4">
            <a
              class="link black underline" href="mailto:maxwell.stein@gmail.com"
              target="_blank"
            >maxwell.stein@gmail.com</a>
          </h2>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheProject from './components/TheProject.vue'

const showReadMore = ref(false)
const readMore = ref(false)

function scrollToTop() {
  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>

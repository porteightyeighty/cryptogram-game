<template>
  <div>
    <div id="puzzle" class="flex space-x-2">
      <LetterTile
        @change-guess="handleChangeGuess"
        v-for="n in answer.length"
        :key="n"
        :clue="answerKey[answer[n - 1]]"
        :guess="guessKey[answerKey[answer[n - 1]]]"
      />
    </div>

    <div id="letterbox" class="w-60 flex flex-wrap justify-center">
      <div
        v-for="(value, key) in guessKey"
        :key="key"
        class="p-2"
        :class="value !== '' ? 'some-active-classes' : 'some-inactive-classes'"
      >
        {{ key }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LetterTile from './LetterTile.vue'
import { createLetterMap, createEmptyLetterMap } from '../lib/letterMaps'
defineProps<{
  answer: string
}>()

const answerKey = createLetterMap()
const guessKey = ref(createEmptyLetterMap())

const handleChangeGuess = ([clue, data]) => {
  guessKey.value[clue] = data ?? ''
}
// const lettersRemaining = ref({
//   A: true,
//   B: true,
//   C: true,
//   D: true,
//   E: true,
//   F: true,
//   G: true,
//   H: true,
//   I: true,
//   J: true,
//   K: true,
//   L: true,
//   M: true,
//   N: true,
//   O: true,
//   P: true,
//   Q: true,
//   R: true,
//   S: true,
//   T: true,
//   U: true,
//   V: true,
//   W: true,
//   X: true,
//   Y: true,
//   Z: true
// })
</script>

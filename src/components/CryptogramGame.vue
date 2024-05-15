<template>
  <div class="w-fit">
    <div id="puzzle" class="flex space-x-2 flex-wrap">
      <LetterTile
        @change-guess="handleChangeGuess"
        v-for="n in answer.length"
        :key="n"
        :clue="isCharacterAlphabetical(answer[n - 1]) ? answerKey[answer[n - 1]] : answer[n - 1]"
        :alphabetical="isCharacterAlphabetical(answer[n - 1])"
        :guess="guessKey[answerKey[answer[n - 1]]]"
      />
    </div>
    <div class="flex justify-center pt-4">
      <div
        id="letterbox"
        class="w-60 flex flex-wrap justify-center border-2 border-border bg-background"
      >
        <div
          v-for="(value, key) in guessKey"
          :key="key"
          class="p-2"
          :class="
            guessCount[key as string] > 1
              ? 'text-error font-bold underline'
              : guessCount[key as string] > 0
                ? 'text-copy'
                : 'text-primary'
          "
        >
          {{ key }}
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center pt-4">
      <button
        v-if="!correct"
        @click="handleSubmit"
        class="w-fit px-2 py-1 border border-primary disabled:bg-background disabled:border-border"
        :disabled="!submittable"
      >
        Submit
      </button>
      <div v-else class="w-fit px-2 py-1 border border-success">Correct!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LetterTile from './LetterTile.vue'
import {
  createLetterMap,
  createEmptyLetterMap,
  createEmptyLetterCount,
  letters,
  type LetterMap
} from '../lib/letterMaps'
const props = defineProps<{
  answer: string
}>()

const isCharacterAlphabetical = (char: string) => {
  return letters.findIndex((letter) => letter === char) > -1
}

const lettersInAnswer = computed(() => {
  let lettersInAnswer: string[] = []
  for (let i = 0; i < props.answer.length; i++) {
    if (
      isCharacterAlphabetical(props.answer[i]) &&
      lettersInAnswer.findIndex((letter) => letter === props.answer[i]) === -1
    ) {
      lettersInAnswer.push(props.answer[i])
    }
  }
  return lettersInAnswer
})

const answerKey: LetterMap = createLetterMap()
const guessKey = ref<LetterMap>(createEmptyLetterMap())
const submittable = computed(() => {
  let lettersGuessed = 0
  for (const key in guessKey.value) {
    if (guessKey.value[key] !== '') {
      lettersGuessed++
    }
  }
  if (lettersGuessed === lettersInAnswer.value.length) return true
  return false
})

const correct = ref<boolean>(false)

const handleSubmit = () => {
  for (const letter of lettersInAnswer.value) {
    console.log(guessKey.value[answerKey[letter]])
    if (guessKey.value[answerKey[letter]] !== letter) {
      correct.value = false
      return
    }
  }
  correct.value = true
  return
}

const guessCount = computed(() => {
  const guessCount = createEmptyLetterCount()
  for (const key in guessKey.value) {
    if (guessKey.value[key] !== '' && guessKey.value[key] in guessCount) {
      guessCount[guessKey.value[key]]++
    }
  }
  return guessCount
})
const handleChangeGuess = ([clue, data]) => {
  guessKey.value = { ...guessKey.value, [clue]: data ?? '' }
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

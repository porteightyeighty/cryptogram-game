<template>
  <div class="grid grid-rows-2 w-6">
    <input type="text" maxlength="1" :value="guess" @input="handleChange" class="border-b w-full" />
    <div>{{ clue }}</div>
  </div>
</template>

<script setup lang="ts">
import { useLetterStore } from '../stores/guesses'
import { computed, ref } from 'vue'
const props = defineProps<{
  clue: string
  guess: string
}>()

const emit = defineEmits(['changeGuess'])
const handleChange = (e: Event) => {
  emit('changeGuess', [props.clue, e.target!.value])
}
</script>

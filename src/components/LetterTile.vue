<template>
  <div>
    <div v-if="alphabetical" class="grid grid-rows-2 w-6 h-16">
      <input
        type="text"
        maxlength="1"
        :value="guess"
        @input="handleChange"
        class="border-b w-full text-center appearance-none"
      />
      <p class="text-center">{{ clue }}</p>
    </div>
    <div v-else class="flex w-6 h-16 items-center">
      <p>{{ clue }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { letters } from '@/lib/letterMaps'
import { computed } from 'vue'
const props = defineProps<{
  clue: string
  guess: string | unknown
  alphabetical: boolean
}>()

const emit = defineEmits(['changeGuess'])
const handleChange = (e: Event) => {
  if (props.alphabetical) {
    emit('changeGuess', [props.clue, e.target!.value])
  }
}
</script>

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createEmptyLetterMap } from '@/lib/letterMaps'

export const useLetterStore = defineStore('letter', () => {
  const guessKey = ref(createEmptyLetterMap())

  return { guessKey }
})

import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => {
    return { loading: true }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    isLoading() {
      this.loading = false;
    },
  },
})
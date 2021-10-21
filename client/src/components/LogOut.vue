<template>
  <div>
    <button class="btn btn-secondary mx-2 exit-button py-2" @click="logOut">Выход</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: [],
  emits:['push-login'],
  setup (props, { emit }) {
    const store = useStore()
    const logOut = () => {
      store.dispatch('logOut')
      emit('push-login')
    }

    return { logOut }
  }
}
</script>

<style lang="scss" scoped>
.exit-button {
  background: #4f4e4e;
  border-radius: 5px;
  border: 0;
}
</style>

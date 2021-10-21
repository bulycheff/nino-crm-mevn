<template>
  <h3>Вход в систему</h3>
  <div class="registration">
    <form class="form-control" @submit.prevent="submitHandler">
      <input v-model="form.username" autocomplete="true" class="input-group-text mt-2" placeholder="username"
             type="text"/>
      <input v-model="form.password" autocomplete="true" class="input-group-text mt-2" placeholder="password"
             type="password"/>
      <button class="btn btn-primary w-100 mt-2" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>

import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const form = reactive({
      username: '', password: ''
    })

    const store = useStore()
    const router = useRouter()

    const submitHandler = async () => {
      const reqData = {
        username: form.username, password: form.password
      }

      await store.dispatch('logIn', JSON.stringify(reqData))
      await router.push('/day')

    }

    return {
      submitHandler, form
    }
  }
}
</script>

<style scoped>

</style>

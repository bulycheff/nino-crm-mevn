<template>
	<h3>Регистрация</h3>
	<div class="registration">
		<form @submit.prevent="submitHandler">
			<input v-model="form.username" autocomplete="true" placeholder="username" type="text"/>
			<input v-model="form.password" autocomplete="true" placeholder="password" type="password"/>
			<button type="submit">Отправить</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
import { server_api_auth } from '../config'
import { reactive } from 'vue'

export default {
  setup () {
    const form = reactive({
      username: '',
      password: ''
    })

    const submitHandler = async () => {
      const config = { headers: { 'Content-Type': 'application/json' } }
      const reqData = {
        username: form.username,
        password: form.password
      }
      await axios.post(`${ server_api_auth }registration`, JSON.stringify(reqData), config)
        .then(( res ) => console.log(res))
        .catch(e => console.log(e.message))
    }

    return {
      submitHandler,
      form
    }
  }
}
</script>

<style scoped>

</style>

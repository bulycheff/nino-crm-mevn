<template>
  <div class="users-page container-md">
    <h4>Пользователи системы.</h4>

    <table class="table table-striped users-table">
      <thead>
      <tr>
        <th scope="col" style="width: 5%">#</th>
        <th scope="col" style="width: 10%">логин</th>
        <th scope="col" style="width: 10%">имя</th>
        <th scope="col" style="width: 10%">действие</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, idx) in users" :key="idx">
        <th>{{ idx + 1 }}</th>
        <td>{{ user.username }}</td>
        <td>{{ user.fullname }}</td>
        <td>
          <button class="btn btn-secondary rounded-2 mx-1" @click="$router.push(`/user/${user.username}`)">
            Редактировать
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <br>
    <button class="btn btn-primary mx-1" @click.prevent="addUser">Добавить пользователя</button>
  </div>
</template>

<script>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import { server_api_auth } from '../config'
import { useStore } from 'vuex'

export default {
  setup () {
    const showModal = ref(false)
    const store = useStore()
    const users = ref([])
    // console.log(users.value)

    const addUser = () => {

    }

    axios.defaults.headers.common['Authorization'] = store.getters.token
    onBeforeMount(async () => {
      const response = await axios.get(`${ server_api_auth }users/`)
      users.value.push(...response.data)
    })

    return { showModal, users, addUser }
  }

}


</script>

<style lang="scss" scoped>

h4 {
  align-items: center;
  text-align: center;
}

</style>

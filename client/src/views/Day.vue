<template>
  <div class="day">
    <h5>Рабочая смена</h5>
    <div v-if="!hasOpenDays">
      <button class="btn btn-primary" type="button" @click.prevent="openDay">Открыть смену</button>
    </div>
  </div>

  <table v-if="hasOpenDays" class="table w-50">
    <thead>
    <tr>
      <th scope="col">Открыта</th>
      <th scope="col">Действие</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="day in daysData.days" :key="day._id">
      <td>{{ dateFormat(day.start, 'datetime') }}</td>
      <td>
        <button class="btn btn-danger" type="button" @click.prevent="closeDay(day._id)">Закрыть смену</button>
      </td>
    </tr>
    </tbody>
  </table>

</template>
<script setup>
import axios from '../../axios'
import { server_api_work } from '../config'
import { computed, onBeforeUnmount, reactive } from 'vue'
import {useStore} from 'vuex'
import dateFormat from '../utils/dateFormat'

const store = useStore()
const daysData = reactive({ days: [] })

axios.get(`${ server_api_work }days/active`)
  .then(loaded => {
    // console.log(loaded.data)
    daysData.days = loaded.data
    store.dispatch('setDays')
  })
  .catch(err => console.log(err))

const hasOpenDays = computed(() => daysData.days.length)

const openDay = () => {
  axios.post(`${ server_api_work }day/create`)
    .then(loaded => {
      console.log(loaded.data)
      daysData.days.push(loaded.data)
    })
    .catch(err => console.log(err))
}

const closeDay = ( id ) => {
  axios.patch(`${ server_api_work }day/close/${ id }`)
    .then(loaded => {
      console.log(loaded.data)
      daysData.days = loaded.data
      store.commit('setDays', loaded.data)
    })
    .catch(err => console.log(err))
}

onBeforeUnmount(() => {
  daysData.days = []
})
</script>

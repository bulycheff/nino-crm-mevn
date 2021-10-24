<template>
  <div class="add-guest container-sm">
    <div class="card card-body mt-4">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Имя гостя</label>
          <input
            v-model="form.name"
            class="form-control"
            placeholder="Введите имя"
            required
          />

        </div>
        <div class="input-group mt-3">
          <label class="input-group-text" for="тип гостя">Тип гостя</label>
          <select id="тип гостя" v-model="form.type" class="form-select" required>
            <option>Новый</option>
            <option>Постоянный</option>
          </select>
        </div>

        <div v-if="form.type==='Новый'" class="input-group mt-3">
          <label class="input-group-text" for="Откуда узнал">Откуда узнал</label>
          <select id="Откуда узнал" v-model="form.from" class="form-select" required>
            <option>Интернет</option>
            <option>Досуг</option>
            <option>По рекомендации</option>
            <option>Пришёл с другом</option>
            <option>Баннер</option>
            <option>Флаер</option>
          </select>
        </div>

        <button class="btn btn-success mt-3" type="submit">
          Добавить гостя
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import {useStore} from 'vuex'

export default {
  setup () {
    const store = useStore()
    const form = reactive({ client_name: '', is_new: '', from_where: '' })

    const onSubmit = async () => {
      const payload = {
        client_name: form.name,
        is_new: form.type === 'новый',
        from_where: form.from,
        day_id: store.getters.day_id
      }

      console.log(payload)

      await store.dispatch('createNewOrder', payload)
    }



    return { form, onSubmit }
  }
}
</script>

<style scoped>
* {
  font-size: 11pt;
}

.input-group-text {
  min-width: 150px;
}

.btn {
  background-color: #323d3d;
  border: 0;
}
</style>

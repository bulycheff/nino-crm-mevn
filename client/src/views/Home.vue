<template>
  <div v-if="isLoading" class="loading">
    <Loader/>
  </div>
  <div v-else class="clients">
    <ClientBlock/>
  </div>
</template>

<script>
import ClientBlock from '../components/ClientBlock'
import { ref, onMounted } from 'vue'
import Loader from '../components/Loader'

export default {
  components: { Loader, ClientBlock }, setup () {
    const isLoading = ref(true)
    onMounted(async ()=> {

    })

    return { isLoading }
  }
}
</script>

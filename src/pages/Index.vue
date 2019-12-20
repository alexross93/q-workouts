<template>
  <q-page class="flex flex-center">
    <WorkoutTable/>
  </q-page>
</template>

<script>
import WorkoutTable from 'components/WorkoutTable.vue'
export default {
  name: 'PageIndex',
  components: {
    WorkoutTable
  }
}
</script>

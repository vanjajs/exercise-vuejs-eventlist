<template>
  <div class="list-group">
    <div
      class="list-group-item list-group-item-action flex-column align-items-start"
      v-for="(event, index) in events">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ event.name }}</h5>
        <small @click="deleteEvent(index)" class="pointer">x</small>
      </div>
      <p class="mb-1">{{ event.description }}</p>
      <small>{{ event.date }}</small>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      events() {
        return this.$store.getters.events;
      }
    },
    methods: {
      deleteEvent(index) {
        if(confirm("Are you sure you want to delete this event?")) {
          this.$store.commit('deleteEvent', index);
        }
      }
    }
  }
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>

<template>
  <div class="card">
    <div class="card-header">
      Add an Event
    </div>
    <div class="card-body">
      <div class="form-group">
        <input type="text" class="form-control" id="eventName" placeholder="Event name" v-model="name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="eventDescription" placeholder="Event description" v-model="description">
      </div>
      <div class="form-group">
        <input type="date" class="form-control" id="eventDate" placeholder="Event date" v-model="date">
      </div>
      <button type="submit" class="btn btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        description: '',
        date: null
      }
    },
    methods: {
      addEvent() {
        const eventData = {
          name: this.name,
          description: this.description,
          date: this.date
        };
        this.$store.commit('addEvent', eventData);
        this.name = '';
        this.description = '';
        this.date = null;
      }
    }
  }
</script>

<style>
</style>

<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Vue Events</a>
    </nav>
    <div class="container">
      <h1>Events</h1>
      <div class="row">
        <div class="col-md-6">
          <app-new-event></app-new-event>
        </div>
        <div class="col-md-6">
          <app-list-events></app-list-events>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  import NewEvent from './components/NewEvent.vue';
  import ListEvents from './components/ListEvents.vue';

  export default {
    components: {
      appNewEvent: NewEvent,
      appListEvents: ListEvents
    }
  }
</script>

<style>

</style>

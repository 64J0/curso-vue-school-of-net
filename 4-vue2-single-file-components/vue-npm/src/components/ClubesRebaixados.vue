<template>
  <div>
    <h3>Time rebaixados</h3>
    <ul>
      <li v-for="time in timesRebaixados" :key="time">
        <clube :time="time"></clube>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    timesRebaixados() {
      return this.times.slice(16, 20);
    },
  },
};
</script>
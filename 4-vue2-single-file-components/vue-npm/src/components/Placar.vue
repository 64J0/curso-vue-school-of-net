<template>
  <form class="form-inline">
    <input type="text" class="form-control col-md-1" v-model="golsCasa" />
    <clube :time="timeCasa" invertido="true" v-if="timeCasa"></clube>
    <span>X</span>
    <clube :time="timeFora" v-if="timeFora"></clube>
    <input type="text" class="form-control col-md-1" v-model="golsFora" />
    <button type="button" class="btn btn-primary" @click="fimJogo">
      Fim de jogo
    </button>
  </form>
</template>

<script>
export default {
  props: ["timeCasa", "timeFora"],
  data() {
    return {
      golsCasa: 0,
      golsFora: 0,
    };
  },
  methods: {
    fimJogo() {
      var golsMarcados = parseInt(this.golsCasa);
      var golsSofridos = parseInt(this.golsFora);
      this.timeCasa.fimJogo(this.timeFora, golsMarcados, golsSofridos);
      this.$emit("fim-jogo", {
        golsCasa: this.golsCasa,
        golsFora: this.golsFora,
      });
    },
  },
};
</script>
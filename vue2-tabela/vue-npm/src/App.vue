<template>
  <div class="container">
    {{ $parent.param1 }}
    {{ $root.param1 }}
    <titulo></titulo>
    <div class="row">
      <div class="col-md-12">
        <novo-jogo :times="times"></novo-jogo>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-12" v-show="visao === 'tabela'">
        <tabela-clubes :times="times"></tabela-clubes>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      times: [],
      timeCasa: null,
      timeFora: null,
      visao: "tabela",
    };
  },
  methods: {
    showTabela() {
      this.visao = "tabela";
    },
    showPlacar({ timeCasa, timeFora }) {
      this.timeCasa = timeCasa;
      this.timeFora = timeFora;
      this.visao = "placar";
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>

<template>
  <div>
    <button class="btn btn-primary" @click="criarNovoJogo" ref="button">
      Novo jogo
    </button>
    <placar-modal-materialize
      :time-casa="timeCasa"
      :time-fora="timeFora"
      ref="modal"
    ></placar-modal-materialize>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeCasa: null,
      timeFora: null,
      times: this.timesColecao,
    };
  },
  //props: ['times'],
  inject: ["timesColecao"],
  methods: {
    criarNovoJogo() {
      console.log(this.$refs);
      var indiceCasa = Math.floor(Math.random() * 20),
        indiceFora = Math.floor(Math.random() * 20);

      this.timeCasa = this.timesColecao[indiceCasa];
      this.timeFora = this.timesColecao[indiceFora];
      var modal = this.$refs.modal;
      modal.showModal();
    },
  },
};
</script>

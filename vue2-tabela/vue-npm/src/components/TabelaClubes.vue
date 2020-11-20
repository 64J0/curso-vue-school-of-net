<template>
  <div>
    <input type="text" class="form-control" v-model="busca" />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th v-for="(coluna, indice) in ordem.colunas" :key="indice">
            <a href="#" @click.prevent="ordenar(indice)">{{
              coluna | ucwords
            }}</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(time, indice) in timesFiltrados"
          :class="{ 'table-success': indice < 6 }"
          :key="indice"
        >
          <td>
            <!--<img :src="time.escudo" alt="" class="escudo">-->
            <!--{{time.nome | ucwords}}-->
            <clube :time="time"></clube>
          </td>
          <td>{{ time.pontos }}</td>
          <td>{{ time.gm }}</td>
          <td>{{ time.gs }}</td>
          <!--<td>{{time | saldo}}</td>-->
          <td>{{ time.saldo }}</td>
        </tr>
      </tbody>
    </table>
    <clubes-libertadores :times="timesOrdered"></clubes-libertadores>
    <clubes-rebaixados :times="timesOrdered"></clubes-rebaixados>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      busca: "",
      ordem: {
        colunas: ["pontos", "gm", "gs", "saldo"],
        orientacao: ["desc", "desc", "asc", "desc"],
      },
      times: this.timesColecao,
    };
  },
  inject: ["timesColecao"],
  computed: {
    timesFiltrados() {
      var self = this;
      return _.filter(this.timesOrdered, function (time) {
        var busca = self.busca.toLowerCase();
        return time.nome.toLowerCase().indexOf(busca) >= 0;
      });
    },
    timesOrdered() {
      return _.orderBy(this.times, this.ordem.colunas, this.ordem.orientacao);
    },
  },
  methods: {
    ordenar(indice) {
      this.$set(
        this.ordem.orientacao,
        indice,
        this.ordem.orientacao[indice] == "desc" ? "asc" : "desc"
      );
    },
  },
};
</script>

import Vue from 'vue'
import App from './App.vue'
import Titulo from './components/Titulo.vue'
import NovoJogo from './components/NovoJogo.vue'
import TabelaClubes from './components/TabelaClubes.vue'
import Modal from './components/Modal.vue'
import PlacarModal from './components/PlacarModal.vue'
import ClubesLibertadores from './components/ClubesLibertadores.vue'
import ClubesRebaixados from './components/ClubesRebaixados.vue'
import Placar from './components/Placar.vue'
import Clube from './components/Clube.vue'
import ModalMaterialize from './components/ModalMaterialize.vue'
import PlacarModalMaterialize from './components/PlacarModalMaterialize.vue'
import Time from './time'

// coisas horriveis do bootstrap
import $ from 'jquery'
// import Popperjs from 'popper.js'
// require('bootstrap/dist/css/bootstrap.min.css')
window.jQuery = window.$ = $
// window.Popper = Popperjs
// require('bootstrap')

// coisas horriveis do materialize
import 'materialize-css/dist/css/materialize.min.css'
window.M = require('materialize-css')

Vue.config.productionTip = false

Vue.filter('ucwords', (valor) => {
  return valor.charAt(0).toUpperCase() + valor.slice(1)
})

Vue.component('titulo', Titulo)
Vue.component('novo-jogo', NovoJogo)
Vue.component('tabela-clubes', TabelaClubes)
Vue.component('modal', Modal)
Vue.component('placar-modal', PlacarModal)
Vue.component('clubes-libertadores', ClubesLibertadores)
Vue.component('clubes-rebaixados', ClubesRebaixados)
Vue.component('placar', Placar)
Vue.component('clube', Clube)
Vue.component('modal-materialize', ModalMaterialize)
Vue.component('placar-modal-materialize', PlacarModalMaterialize)
Vue.component('clube', Clube)

new Vue({
  render: h => h(App),
  provide() {
    return {
      timesColecao: [
        new Time('palmeiras', require('./assets/palmeiras_60x60.png')),
        new Time('Internacional', require('./assets/internacional_60x60.png')),
        new Time('Flamengo', require('./assets/flamengo_60x60.png')),
        new Time('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
        new Time('Santos', require('./assets/santos_60x60.png')),
        new Time('Botafogo', require('./assets/botafogo_60x60.png')),
        new Time('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
        new Time('Corinthians', require('./assets/corinthians_60x60.png')),
        new Time('Grêmio', require('./assets/gremio_60x60.png')),
        new Time('Fluminense', require('./assets/fluminense_60x60.png')),
        new Time('Bahia', require('./assets/bahia_60x60.png')),
        new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
        new Time('São Paulo', require('./assets/sao_paulo_60x60.png')),
        new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
        new Time('Sport', require('./assets/sport_60x60.png')),
        new Time('Ceará', require('./assets/ceara_60x60.png')),
        new Time('Vitória', require('./assets/vitoria_60x60.png')),
        new Time('Vasco', require('./assets/vasco_60x60.png')),
        new Time('América-MG', require('./assets/america_mg_60x60.png')),
        new Time('Paraná', require('./assets/parana_60x60.png')),
      ],
      metodoPraPegarAlgumaCoisa() {

      },
      getAlgumaCoisa() {
        return this.$root.algumacoisa
      },
      method1: this.method1
    }
  }
}).$mount('#app')

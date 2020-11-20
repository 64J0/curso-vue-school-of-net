# Cursos de Vue js - School of Net

Neste repositório estão os códigos desenvolvidos ao longo da trilha de cursos de *Vue.js* da **School of Net**.

Assim como no AngularJS, no Vue também são utilizadas **diretivas** nas tags HTML para associar algum funcionamento do próprio Vue. Essas diretivas são propriedades que não existem nas tags padrão mas que são entendidas pelo compilador/transpilador do Vue.

* Curso 1: Mostra algumas informações bem introdutórias sobre a instância de um objeto Vue. Nos exemplos todos os códigos são criados no formato *inline*, ou seja, juntos do restante do código da aplicação, misturando HTML e JavaScript.
* Curso 2: Aborda principalmente o conceito de *Web Components*, que são uma estratégia criada para facilitar o reuso de código em aplicações Web.
* Curso 3: Não fiz... Chega de *inline* Vue...
* Curso 4: Neste curso finalmente começa a apresentação do Vue da forma interessante, utilizando uma estrutura chamada **Single File Components**.
* Curso 5: Neste curso a mesma aplicação será utilizada para demonstrar a utilização dos *hooks* (gatilhos) do próprio Vue. *Importante:* Os gatilhos não são executados de maneira síncrona. Caso algo assíncrono esteja acontecendo em qualquer das etapas as posteriores não irão esperar isso ser resolvido para serem ativadas. Além disso, também é configurado o pacote do *Materialize* para ser utilizado no lugar do *Bootstrap*.
  * **beforeCreate():** Exemplo buscar algo no localStorage antes do componente ser criado e adicionar no escopo com a palavra reservada *this*.
  * **created():** Buscar informações importantes para o componente mas que tem um custo maior de processamento. Desta forma essa informação só será adquirida quando for realmente necessário na criação do componente. Também é utilizado para configurar o funcionamento da tela de loading.
  * **beforeMount():** Nesta parte do ciclo de vida o componente já tem acesso aos attrs, ou seja, informações passadas para o componente que não são propriedades, por exemplo, o *id* da tag do componente. *Observação:* Não recebe as informações de class pois isso é tratado separadamente pelo Vue.
  * **mounted():**
  * **beforeUpdate():**
  * **updated():**
  * **beforeDestroy():** Define as informações que devem ser destruídas para liberar espaço de memória e diminuir o processamento da aplicação. Vai depender da necessidade. Nessa etapa ainda é possível acessar os dados e métodos do componente.
  * **destroyed():** Nesta etapa é recomendado destruir as informações que não são diretamente ligadas ao Vue, porém que podem ser adicionadas à aplicação, como a definição de eventos da tela, etc.
* Curso 6: Neste curso são abordados assuntos relacionados ao **Vuex**, que é uma ferramenta muito útil para lidar com os estados da aplicação, fornecendo uma única *fonte de verdade* para os componentes. Como esse curso é de 2016 algumas coisas já foram alteradas e diversas informações não são mais pertinentes, porém ainda é possível aproveitar alguns conceitos. Por fim é apresentado bem resumidamente a ferramenta de *debug* que é a extensão criada pelo próprio time de desenvolvimento do Vue.
  * **Flux:** Ferramenta criada por uma equipe do Facebook. Foi a principal ferramenta utilizada como fonte para o desenvolvimento do Vuex. Os dados em uma aplicação *Flux* seguem em apenas uma única direção:
    * *Action --> Dispatcher --> Store --> View*
  * **Redux:** Uma ferramenta que implementa o Flux de maneira simplificada. 
  * **Vuex:** Solução semelhante ao Redux porém voltada para o Vue.

---
Vinícius Gajo Marques Oliveira, 2020
import Vuex from "vuex";
import VueRouter from "vue-router";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import ElementUI from "element-ui";

import Home from "@/views/home/Home.vue";
import Store from "@/store";

/** Cria uma cópia do Vue para testes.
 * Isso evita poluir o app original.
 * @see https://vue-test-utils.vuejs.org/api/options.html#localvue
 */
const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(ElementUI);

/**
 * Determina um bloco (suite) de testes.
 * Utilizado para agrupar testes relacionados
 * a um objeto em comum - nestes caso, o componente
 * `Home.vue`
 * @see https://jestjs.io/docs/en/api
 * */
describe("Integration Test: Home.vue", () => {
  const { mutations, state, modules } = Store;
  let actions;
  let store;
  let wrapper;

  /** Permite executar uma função antes de cada teste.
   * @see https://jestjs.io/docs/en/api#beforeeachfn-timeout
   */
  beforeEach(() => {
    actions = {
      /**
       * Utiliza o recurso do Jest para mock de funções.
       * ele permite testar se a função foi chamada e
       * quais os parametros passados, sem precisar executar
       * de fato a função.
       * @see https://jestjs.io/docs/en/mock-functions.html
       */
      updateResult: jest.fn()
    };

    store = new Vuex.Store({
      actions,
      mutations,
      state,
      modules
    });

    /**
     * Um wrapper monta um componente Vue para testes.
     * @see https://vue-test-utils.vuejs.org/api/wrapper/
     */
    wrapper = shallowMount(Home, { store, localVue });
  });

  /**
   * STORE INTEGRATION TEST
   * */
  it("should dispatch the following store action: updateResult", () => {
    /**
     * O `toHaveBeenCalled` testa se a função passada foi chamada.
     * @see https://jestjs.io/docs/en/expect#tohavebeencalled
     */
    wrapper.vm.validateForm();
    expect(actions.updateResult).toHaveBeenCalled();
  });

  /**
   * UI TEST
   * */
  it("should receive a text value on Partner field", () => {
    /** O `find` retorna o DOM node ou compoente Vue que
     * possua o seletor passado.
     * @see https://vue-test-utils.vuejs.org/api/wrapper/#find
     */
    const partner = wrapper.find("#partner");
    partner.element.value = "Marsellus Wallace";
    expect(partner.element.value).toEqual("Marsellus Wallace");
  });
});

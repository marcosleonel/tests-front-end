import Home from "@/views/home/home.js";

/**
 * Determina um bloco (suite) de testes.
 * Utilizado para agrupar testes relacionados
 * a um objeto em comum - nestes caso, o componente
 * `Home.vue`
 * @see https://jestjs.io/docs/en/api
 * */
describe("Unit Test: Home.vue", () => {
  /**
   * SCHEMA TEST
   * */
  it("should have the follwing data: businessPartenr, burger, speakEnglish and lookLike", () => {
    const data = Home.data();

    /** O `expect` recebe uma variável ou função
     * e oferece diversos métodos para verificar
     * o valor retornado.
     * @see https://jestjs.io/docs/en/expect
     */

    /**
     * O `toHaveProperty` verifica existe a propriedade passada
     * dentre de um dado `Object`.
     * @see https://jestjs.io/docs/en/expect#tohavepropertykeypath-value
     */
    expect(data.form).toHaveProperty("businessPartner");
    expect(data.form).toHaveProperty("burger");
    expect(data.form).toHaveProperty("speakEnglish");
    expect(data.form).toHaveProperty("lookLike");
  });
});

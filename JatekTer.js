import Lampa from "./Lampa.js";

export default class JatekTer {
  #db = 0; /* felkapcsolt lámpák száma */
  #allapotLista = []; /* melyik lámpa ég, melyik nem */
  #meret = 5; /* játék mérete tábla = méret*méret */
  #lepes = 0; /* ennyi lépésben sikerült lekapcsolni az összes lámpát */

  constructor() {
    this.#setAllapotLista();

    this.#megjelenit();
  }

  #megjelenit() {
    const szuloElem = $(".jatekter");
    const divElem = $(".jatekter > div"); 
    szuloElem.empty();
    this.#allapotLista.forEach((allapot, index) => {
      const lampa = new Lampa(index, allapot, divElem ,szuloElem);
    });
  }

  #setAllapotLista() {
    /* beállítja a lista értékeit véletlenszerűen true/false, hossza méret*méret */
    this.#allapotLista = new Array(this.#meret * this.#meret);
    for (let index = 0; index < this.#allapotLista.length; index++) {
      let szam = Math.floor(Math.random() * 2);
      if (szam == 1) {
        this.#allapotLista[index] = true;
      } else if (szam == 0) {
        this.#allapotLista[index] = false;
      }
    }
    console.log(this.#allapotLista);
  }

  #szomszedokKeresese(id) {
    /* megkeresi az aktuális elem szomoszédait, és megváltoztatja az állapotukat*/
  }

  #init() {
    /* új játékoteret hoz létre, alapértékre állítja az adattagokat, új játék */
  }

  #ellenorzes() {
    /* int, megnézi, hogy hány lámpa ég még */
  }
}

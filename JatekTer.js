import Lampa from "./Lampa.js";

export default class JatekTer {
  #db = 0; /* felkapcsolt lámpák száma */
  #allapotLista = []; /* melyik lámpa ég, melyik nem */
  #meret = 5; /* játék mérete tábla = méret*méret */
  #lepes = 0; /* ennyi lépésben sikerült lekapcsolni az összes lámpát */

  constructor() {
    this.#setAllapotLista();
    this.#megjelenit();

    $(window).on("kapcsol", (event) => {
      console.log(event.detail);
      let id = event.detail;
      this.#szomszedokKeresese(id);
    });
  }

  #megjelenit() {
    const szuloElem = $(".jatekter");
    const divElem = $(".jatekter > div");
    szuloElem.empty();
    this.#allapotLista.forEach((allapot, index) => {
      const lampa = new Lampa(index, allapot, divElem, szuloElem);
      lampa.setAllapot();
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
    const elotteN = id - this.#meret;
    const elotte1 = id - 1;
    const utanaN = Number(id) + Number(this.#meret);
    const utana1 = Number(id) + 1;
    /* megkeresi az aktuális elem szomoszédait, és megváltoztatja az állapotukat*/
    this.#allapotLista[elotte1] = !this.#allapotLista[elotte1];
    this.#allapotLista[elotteN] = !this.#allapotLista[elotteN];
    this.#allapotLista[utana1] = !this.#allapotLista[utana1];
    this.#allapotLista[utanaN] = !this.#allapotLista[utanaN];
    this.#allapotLista[id] = !this.#allapotLista[id];
    console.log(this.#allapotLista);
    console.log(id, utana1, utanaN);
    this.#megjelenit();
  }

  #init() {
    /* új játékoteret hoz létre, alapértékre állítja az adattagokat, új játék */
  }

  #ellenorzes() {
    /* int, megnézi, hogy hány lámpa ég még */
  }
}

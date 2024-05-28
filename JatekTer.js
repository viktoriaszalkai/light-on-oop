export default class JatekTer {
  #db = 0; /* felkapcsolt lámpák száma */
  #allapotLista = []; /* melyik lámpa ég, melyik nem */
  #meret = 5; /* játék mérete tábla = méret*méret */
  #lepes = 0; /* ennyi lépésben sikerült lekapcsolni az összes lámpát */

  constructor() {
    this.#setAllapotLista();
  }

  #setAllapotLista() {
    /* beállítja a lista értékeit véletlenszerűen true/false, hossza méret*méret */
    const ALLAPOTLISTA = new Array(this.#meret * this.#meret);
    for (let index = 0; index < ALLAPOTLISTA.length; index++) {
      let szam = Math.floor(Math.random() * 2);
      if (szam == 1) {
        ALLAPOTLISTA[index] = true;
      } else if (szam == 0) {
        ALLAPOTLISTA[index] = false;
      }
    }
    console.log(ALLAPOTLISTA);
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

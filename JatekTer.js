export default class JatekTer{
    #db = 0; /* felkapcsolt lámpák száma */
    #allapotLista = []; /* melyik lámpa ég, melyik nem */
    #meret = 0; /* játék mérete tábla = méret*méret */
    #lepes = 0; /* ennyi lépésben sikerült lekapcsolni az összes lámpát */

    constructor(){

    }

    #setAllapotLista(){
        /* beállítja a lista értékeit véletlenszerűen true/false, hossza méret*méret */
    }

    #szomszedokKeresese(id){
        /* megkeresi az aktuális elem szomoszédait, és megváltoztatja az állapotukat*/
    }

    #init(){
        /* új játékoteret hoz létre, alapértékre állítja az adattagokat, új játék */
    }

    #ellenorzes(){
        /* int, megnézi, hogy hány lámpa ég még */
    }
}
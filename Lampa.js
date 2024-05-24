export default class Lampa{
    #allapot; /* boolean, ég a lámpa, vagay nem */
    #id; /* a lápa sorszáma */
    #diveElem; /* html elem, ez jeleníti meg a lámpát */
    #szuloElem;

    constructor(id, allapot, szuloElem){
        this.#id = id;
        this.#allapot = allapot;
        this.#szuloElem = szuloElem;
    }

    setAllapot(){
        /* a lápa állapotát az ellenkezőre váltja, meghívja a szinBeallit metódust */
    }

    #szinBeallit(){
        /* az elem állapotától függően változtatja a színét */
    }

    #kattintasTrigger(){
        /* létrehoz egy "kapcsolas" nevű saját eseményt */
    }
}
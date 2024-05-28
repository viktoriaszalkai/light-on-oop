export default class Lampa{
    #allapot; /* boolean, ég a lámpa, vagay nem */
    #id; /* a lápa sorszáma */
    #diveElem; /* html elem, ez jeleníti meg a lámpát */
    #szuloElem;

    constructor(id, allapot, divElem, szuloElem){
        this.#id = id;
        this.#allapot = allapot;
        this.#szuloElem = szuloElem;
        this.#diveElem = divElem;

        this.#megjelenit();
    }

    #megjelenit() {
        let txt = `<div><p>${this.#allapot}</p></div>`;
        this.#szuloElem.append(txt);
    }
    

    setAllapot(){
        /* a lápa állapotát az ellenkezőre váltja, meghívja a szinBeallit metódust */
        if(this.#allapot == true){
            this.#szinBeallit();
            this.#allapot = false
        }else{
            this.#szinBeallit();
            this.#allapot = true;
        }
    }

    #szinBeallit(){
        if(this.#allapot == true){
            this.addClass(".fekete")
        }else{
            this.addClass(".feher")
        }
    }

    #kattintasTrigger(){
        /* létrehoz egy "kapcsolas" nevű saját eseményt */
    }
}
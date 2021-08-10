export default class Observable {

    /**
     * @constructor
     * @param Observers
     */

    //Constructeur
    constructor() {
        this.o_col = [];
    }

    //Ajoute un observeur
    registerObserver(observer) {
        this.o_col.push(observer);
        return this.o_col.length - 1; //Récupérer l'index du tableau
    }

    //Supprime un observeur
    unregisterObserver(index) {
        if(typeof index !== 'undefined') {
            this.o_col.splice(index, 1);
        }
    }

    addObservableFromHtmlEvent(source, eventType) {
        source.addEventListener(eventType, event => {
            console.log(event.target.value)
            this.o_col.forEach(fn => fn(event.target.value));
        })
    }

    //Informe les observeur
    notifyObservers() {

    }
    publish(data) {
        this.o_col.forEach(fn => fn(data));
    }

    get observerCollection() {
        return this.o_col;
    }

    set observerCollection(value) {
        this.o_col = value;
    }
}
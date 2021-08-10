import Observable from '../tools/Observable';

console.log('hello world')

const observable = new Observable();
const unsub = observable.registerObserver((data) => {
    console.log(data);
})

observable.addObservableFromHtmlEvent(document.getElementById('input'), 'keyup');

setTimeout(()=>{
    observable.unregisterObserver(unsub)
}, 1000);
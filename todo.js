console.log('sono todo.js', window.location.href); 

// function parseUrlParams() {
//   const url = window.location.href; 
//   const urlArray = url.split('?') //  spexxo nel punto interrogativo; divido tra url e parametri
//   const paramsString = urlArray[1]; // mi prendo i parametri
//   if (paramsString) { //   mi chiedo se paramstring sia presente;
//     const paramsArray = paramsString.split('&'); //  creo array in cui divido parametri in "&" 
//     const paramsObj = {};
//   for (const str of paramsArray) {  //  ciclo su array, perchè mi prenda tutti e due i parametri
//     const strArray = str.split('=');  //  id=3 è chiave con valore, li voglio separare in array, per cui splitto su =
//     console.log('array', str); 
//     paramsObj[strArray[0]] = decodeURIComponent(strArray[1]) //  setto chiave [(indice)[0]], a cui assgno valore (indice)[1], 
    //                                        e li metto in oggetto vuoto paramsObj, così è più facile leggerli;
    //  caratteri strani vengono codificati in codice unicode, vanno trattati con decodeURIComponent(a cui passi il valore strArray[1]);
//   } 
//   console.log(paramsObj);
//   } else { 
//     return null;
//   }
// } 

function parseUrlParams() {  //  secondo metodo
  const urlSearchParams = new URLSearchParams(window.location.search); //creo oggetto 
  const params = Object.fromEntries(urlSearchParams.entries()); //ritraforma in oggett già decodificato 
  return params;
  // console.log('params', params);
} 

const params = parseUrlParams(); 
console.log('params', params);

//  local storage e session storage 

//  session storage vive finche non pulisco sito; 
//  local storage è a livello di pc, permane in sessioni successive 
//  salvo sempre Key = Value: Key deve sempre essere stringa, e Value una stringa (con json.stringify posso usare anche array)

function getToDoFromSessionStorage() { 
const toDoString = sessionStorage.getItem('selectedToDo');  //  richiamo todo da app.js, mi ridà una stringa, devo riconvertirla in oggetto
  if (toDoString) { 
    const todo = JSON.parse(toDoString);  //  converto string in oggetto
    console.log('todo', todo);  //  oggetto in session storage
  }
} 

getToDoFromSessionStorage(); 

//  chiamare mock api con id, per chiedere oggetto; quado ce l'abbiamo, step ulteriore: mostrare dati strutturati come: name con oggetto input; 
//  voglio editare name, tag, e priority
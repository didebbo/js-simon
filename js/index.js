// Parametri

const howManyNumbers = 5;
const rangeOfNumber = 20;
const timeoutSeconds = 2;

// Functions

const main = () => {

    let inputNumber;
    const arrayNumbers = [];
    const inputArrayNumbers = [];
    const arrayFoundNumbers = [];
    let score = 0;
    let log = "";

    while (arrayNumbers.length < howManyNumbers) {
        arrayNumbers.push(Math.floor((Math.random() * rangeOfNumber) + 1));
    }
    alert("Memorizza questi numeri: " + arrayNumbers);
    console.log(arrayNumbers);
    setTimeout(() => {

        alert("Adesso inserisci \"one by one\" i numeri che hai visualizzato, rispettando anche l'ordine da sinistra verso desta.\n\nPremi Ok per continuare.");

        for (let i = 1; i <= howManyNumbers; i++) {

            do inputNumber = parseInt(prompt("Inerisci il " + i + "° numero:"));
            while (isNaN(inputNumber));
            inputArrayNumbers.push(inputNumber);

        }

        for (let i = 0; i < howManyNumbers; i++) {

            if (inputArrayNumbers[i] === arrayNumbers[i]) {
                score++;
                arrayFoundNumbers.push(arrayNumbers[i]);
            }
        }
        if (arrayFoundNumbers.length > 0) {
            log += "Hai trovato i seguenti numeri: ";
            log += arrayFoundNumbers;
        }
        log += "\nPunteggio totale: " + score;

        alert(log);
        location.reload();

    }, 1000 * timeoutSeconds);
}

main();
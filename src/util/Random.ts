//en:This function returns a random number
//sp:Esta función devuelve un número aleatorio
//ru:Эта функция возвращает случайное число
//de:Diese Funktion gibt eine zufällige Zahl zurück
//fr:Cette fonction renvoie un nombre aléatoire
//it:Questa funzione restituisce un numero
/**
 * en:This function returns a random number
 * 
 * sp:Esta función devuelve un número aleatorio
 * 
 * ru:Эта функция возвращает случайное число
 * 
 * de:Diese Funktion gibt eine zufällige Zahl zurück
 * 
 * fr:Cette fonction renvoie un nombre aléatoire
 * 
 * it:Questa funzione restituisce un numero
 * @returns 
 */
function RandomNumber(){
    return Math.round(Math.random() * 100)
}
export default RandomNumber
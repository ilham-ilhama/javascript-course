/*
onload = function () {
    document.querySelector('h1').style.color = "red"
};
*/

/*
//pour ecrir un mot dans html
document.write('hello world');
/*
/*
//pour ecrir dont console
console.log('hello world')
*/

/*
//pour ecrir dont browser 
//balise alert et tree grave
window.alert('hello world')
*/
//types de donnes

//      string
//      number
//      boolean
//      undefined
//      null
//      object

//typeof:faire la definition de type
//document.write(typeof "hello")
//document.write(typeof 10.5 + 11)
//document.write(typeof true)
//document.write(typeof undefined)
//document.write(typeof null)

//var :variable:تابت
//let
//cons: constante:متغير

/*
//la declaration
var name;
var name = "10.5"

//pour ajoute des donne
name = "hajar";
name = "ilham";
name = 10;


console.log(name);
console.log(name);
console.log(name);
console.log(name);
*/

/*
var x ;
x = 10;
x = 40;

let y;
y = 20;
y = 50;

const v = 30 ;

console.log(x);
console.log(y);
console.log(v);
*/

//la difference entre let et var
/*
quant tu fais comme ca cest une ereure mais le langage ne affichet pas que tune erreur et il ca marche
var a = 40;
var a = 50;
*/

/*
quant tu fais comme ca cest une ereure et le programme et affichet lerror
let a = 40 ;
let a = 50 ;

//en utilisons let dans ce cours
*/

//concatenation
//method 1
/*let name = "ilhambaddioui";
let age = 20; 
//let espace = " "
//console.log("my name is"+" "+name +" "+"my age is"+" "+age);
//console.log(10 + 16);
*/

//method 2
// console.log(`my name is ${name} my age is ${age}`)

/*
//les operation arithemetiques
let num1 = 5;
let num2 = 4;

//addition 
console.log(num1 + num2);
//soustraction
console.log(num1 - num2);
//multiplication
console.log(num1 * num2);
//la puissanse
console.log(num1 ** num2);
//divition
console.log(num1 / num2);
//modulo
console.log(num1 % num2);
*/

/*
let num = 10;
//methode 1
num = num + 1;
//methode 2
num += 4;
//pour ajoute 1 
num ++ ; 
//method 3
//il ajouter la valeur et afficher
console.log(++num);
//il ajouter la valeur dans systeme mais il n'affich pas car il lir num avant le++ 
console.log(num++);
*/


//changet des textes a des nombres

//changet tous les text a operation artemitique sauf addition
console.log("5" + "4");
console.log("5" - "4");
console.log("5" / "ilham"); //NaN
console.log(typeof NaN);

//pour changer  texte a nombre dans addition
console.log(+"4" + +"5");
console.log(typeof "5");
console.log(typeof +"5");
console.log(-"5");
console.log(+"5");
console.log(+"ilham");
//dans programation true:on= 1   false:of= 0
console.log(+true);
console.log(+false);
//undefined: valeur qui n'existe pas
console.log(+undefined);
//null: valeur vide= 0
console.log(+null);

// - # Variables temporaires
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 1
// let a = 1;
// let b = 2;
// let c = 3;
// let temp = a;

// a=b;
// b=c;
// c=temp;

// // - ## Afficher le changement des variables 
// console.log(a,b,c);

// - # Exo 1
//     - ## Afficher 4, 3, 2, 1
//     - ## let a = 1; -> 4
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 2
//     - ## let d = 4; -> 1
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let temp;
// temp=a;
// a=d;
// d=temp;
// temp=b;
// b=c;
// c=temp;

// - ## Afficher le changement des variables
// console.log(a,b,c,d);

// - #  Exo 2
//     - ## let a = 1; -> 2
//     - ## let b = 2; -> 3
//     - ## let c = 3; -> 4
//     - ## let d = 4; -> 1
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let temp = a;

// a=b;
// b=c;
// c=d;
// d=temp;
// //     - ## Afficher le changement des variables
// console.log(a,b,c,d);

// - # Exo 3
//     - ## Afficher 4, 3, 2, 1 avec une variable temporaire
//     - ## let tableau = [1, 2, 3, 4];
// let tab = [
//     1, // devient 4
//     2, // devient 3
//     3, // devient 2
//     4, // devient 1
//     "temp"];
// tab[4] = tab[0];
// tab[0] = tab[3];
// tab[3] = tan[4];
// tab[4] = tab[1];
// tab[1] = tab[2];
// tab[2] = tab[4];
// console.log(tab[0],tab[1],tab[2],tab[3]);

// - # Exo 4
// - ## let a = 1 -> 4
// - ## let b = 2 -> 5
// - ## let c = 3 -> 1
// - ## let d = 4 -> 2
// - ## let e = 5 -> 6
// - ## let f = 6 -> 3
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;

temp=a; // vaut 1
a=d; // vaut 4
d=b; // vaut 2
b=e; // vaut 5
e=f; // vaut 6
f=c; // vaut 3
c=temp; // vaut 1
console.log(a,b,c,d,e,f);





// console.log(a,b,c,d,e,f);



// - ## Afficher le changement des variables
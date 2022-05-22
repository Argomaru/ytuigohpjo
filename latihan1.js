// //remove vowels
// //input : "Javascript"
// //output :"jvscrpt"

// var input = "Javascript";

// var output = input.replace(/[aeiou]/gi, "");
// console.log(output);

// //Alphabet Value
// //hitung jumlah value suatu string dimana setiap huruf memiliki value
// //posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// //Examples
// //Input: "abc"
// //Output: 6

// //ini cara goblok
// let alphabet = {
//   A: 1,
//   B: 2,
//   C: 3,
//   D: 4,
//   E: 5,
//   F: 6,
//   G: 7,
//   H: 8,
//   I: 9,
//   J: 10,
//   K: 11,
//   L: 12,
//   M: 13,
//   N: 14,
//   O: 15,
//   P: 16,
//   Q: 17,
//   R: 18,
//   S: 19,
//   T: 20,
//   U: 21,
//   V: 22,
//   W: 23,
//   X: 24,
//   Y: 25,
//   Z: 26,
// };
// console.log(alphabet.A + alphabet.B);


//ini cara pinter
// let temp = 0;
// let alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// let input = 'abc'
// let arrinput = input.split("")
// arrinput.forEach((val) => {
//   if(alph.includes(val)){
//     let index_alpha = alph.indexOf(val) + 1;
//     temp += index_alpha;
//   }

// });

// console.log(temp);

// //Odd alphabet Value
// // sama seperti soal sebelumnya (alphabet) tetapi hanya hitung huruf yang memiliki value ganjil
// // input: "steve"
// // output: 29
// isi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var odd = isi.filter((n) => n % 2);
// console.log(odd);


//  masih salah ini
// let al = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// let inp = 'steve'
// let arrin = inp.split("")
// var tempo = 0;
// arrin.forEach((val) => {
//   if(al.includes(val)){
//     let kuda= val %2 !==0;
//     tempo += kuda;
//   };
// });

// console.log(tempo)
  



// // unique items
// // diketahui ada 2 arrays of numbers, dimana 2 array tsb memiliki beberapa value/number yg sama.
// // Tampilkan sebuah array baru yang berisi list value unique (hanya berada di salah satu array saja)
// // input :
// // arr1 = [1,3,7,4]
// // arr2 = [1,5,3,7,0]
// // Output: [4,5,0]

// var arra1 = [1, 3, 7, 4];
// var arra2 = [1, 5, 3, 7, 0];
// let unique1 = arra1.filter((o) => arra2.indexOf(o) === -1);
// let unique2 = arra2.filter((o) => arra1.indexOf(o) === -1);

// let arra3 = unique1.concat(unique2);

// console.log(arra3);

// //Remove Duplicates
// // diketahui ada 2 arrays of numbers, dimana 2 array tsb memiliki beberapa value/number yg sama.
// // Tampilkan sebuah array baru yang berisi list value dari kedua array tanpa ada isi duplikat
// // input :
// // arr1 = [1,3,7,4]
// // arr2 = [1,5,3,7,0]
// // Output: [1,3,4,5,7,0]

// let arr1 = [1, 3, 7, 4];
// let arr2 = [1, 5, 3, 7, 0];
// let arr3 = arr1.concat(arr2);
// console.log(arr1.concat(arr2));
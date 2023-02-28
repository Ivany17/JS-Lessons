'use strict';
/* Работаем здесь (https://regex101.com/) */
/* . - любой один символ;
   \. - точка;
   [-/*+%] - минус в квадратных скобка между двумя символами означает ДИАПАЗОН. Если мы хотим найти сам минус, то необходимо поставить либо крайним слева, либо крайним справа;
   [abcd] - любой один символ из набора (показывает первую букву, которая появляется в наборе);
   [A-Za-z] -  весь алфавит (большие и маленькие буквы);
   [0-9] - все цифры;
   \d - все цифры;
   \D - всё, кроме цифр;
   \w - все символы, включая "_";
   \w+ - слово любой длины;
   \W - все остальные символы, кроме указаных выше;
   \s - пробельный символ;
   \S - всё, кроме пробельных символов; 
   \b - граница слова;
   \b +\b - все пробелы;
   () - группа;
   (|) - или;
   \\ - чтобы найти символ экрана \ - его нужно экранировать
   \\\\ - если два символа экрана \\ - то перед ним тоже два символа экрана;
   ^ - с чего начинается;
   [^abc] - внутри квадратных скобок циркумфлекс (^) обозначает "кроме";
   [abcde]{2} - отмечает две расположенные рядом буквы в тексте, которые есть в диапазоне
   [abcde]{2,6} - отмечает от... до расположенные рядом буквы в тексте, которые есть в диапазоне
   [abcde]{2,} - отмечает от... до конца расположенные рядом буквы в тексте, которые есть в диапазоне
   [0-9]{1,} - число любой длины
   {0,1} = ?
   {0,} = *
   {1,} = +
   [A-Z][a-z]+ - найдет слово, которое начинается с большой буквы, а остальные маленькие */


const pattern1 = new RegExp('\\b\\w{4}\\b', 'gi');
const pattern2 = /\b\w{4}\b/gi; // g - global; i - insensitive (это флаги)

if(pattern2.test('abcd 123456 @#$%')){
    console.log(true); //true
} else {
    console.log(false);
}

/* Заменяем слово из четырех букв {4}. */
const str = 'All my troubles seemd so far away';
const str1 = 'All my 1956troubles seemd 1985so far away';
const pattern3 = /\b(\d{4})([a-z]+)/gi;
const newStr = str.replace(pattern1, '44'); // 'All my troubles seemd so far 44'
const newStr1 = str1.replace(pattern3, '$1'); // 'All my 1956 seemd 1985 far away'
const newStr2 = str1.replace(pattern3, '$2'); // 'All my troubles seemd so far away'


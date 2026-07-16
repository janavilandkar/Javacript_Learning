let str='Java';
console.log("str =",str)
str=str.concat('script');
console.log("concat = ",str)
console.log("index 1 val = ",str[1]);
console.log("index 4 val = ",str[4]);
console.log("length = ",str.length);
console.log("upper case = ",str.toUpperCase());
console.log("lower case = ",str.toLocaleLowerCase());
console.log("substring = ",str.substring(0,4));
console.log('charat = ',str.charAt(3));
console.log("part of string = ",str.slice(4,11));
console.log("replace = ",str.replace('a','i'))
console.log("replace all = ",str.replaceAll('a','i'))

let str1='   Javascript   ';
console.log("remove white space = ",str1.trim());

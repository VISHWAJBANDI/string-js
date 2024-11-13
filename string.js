
var str1="      what"
var str2="ever       "
var trim_str1=str1.trimStart()
var trim_str2=str2.trimEnd()
var concate_str1_str2=trim_str1.concat(trim_str2)
var upper_string=concate_str1_str2.toUpperCase()
console.log(upper_string)

// o/p=WHATEVER

var str1="exceptions"
var slice_str1=str1.slice(3,7);
var index_str1=slice_str1.length-1;
var lower_portion=slice_str1.toUpperCase();
console.log(index_str1)
console.log(lower_portion)
// o/p=3


var str1="a"
var str2="pple"
var con_string=str1.concat(str2)
var upper_string=con_string.toUpperCase();
var extract=upper_string.charAt(upper_string.length-2);
console.log(extract)
// o/p=L

var str1="anonymous"
var str2="console"
var char_str1=str1.slice(0,5);
var char_str2=str2.slice(3)
var concat_string=char_str1.concat(char_str2)
var upper_string=concat_string.charAt(0).toUpperCase()+concat_string.slice(1,length-1)+concat_string.charAt(concat_string.length-1).toUpperCase();
console.log(upper_string)
// o/p=AnonysolE


var str1="    feedback      "
var trim_str1=str1.trim();
var to_upper_str1=trim_str1.charAt(0).toUpperCase()+trim_str1.slice(1,trim_str1.length-1)+trim_str1.charAt(trim_str1.length-1).toUpperCase();
var ext_str=to_upper_str1.slice(3,7)
var str2="console"
var concat_string=ext_str.concat(str2)
console.log(concat_string)
// o/p=dbacconsole

var str ="hello there, how are you "
var ind_str=str.indexOf("are")
console.log(ind_str)
// o/p=17

















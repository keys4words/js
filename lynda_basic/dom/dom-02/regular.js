var myRe = /hello/;

//or
var myRe2 = new RegExp("hello");

var myString = "Does this sentence contains hellO?";
if(myRe.test(myString)){
    console.log('yea');
}else{
    console.log('no');
}

var re = /^hello/;  //^ at the start
var re = /hello$/;  //$ at the end
var re = /hel+o/;  //+ once or more
var re = /hel*o/;  //* zero or more
var re = /hel?o/;  //* zero or one

/hello|goodbey/;    //either|or
/he..o/;    //. any character or _
/\wello/;   // \w alphanumeric or _
/\bhello/;  // \b word boundary
/[crnld]ope/;   //[...] range of chars


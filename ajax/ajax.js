// asynchronous Javascript and xml
// requests without reload
// javascript for heavy lifting
// talks to server through XHR --  xml http request

// a browser act as a client when it request a page..the website is the server
//  requests without reload like google search
// it can be a in text field html json format

// the page doesnt even need to reload to order to update...it a good thing n bad thing
// var request = new XMLHttpRequest();
// request.open('GET', 'data.txt', false); // false its to make our code asynchronous
// request.send();
// if(request.status === 200){
//     console.log(request)
//     document.writeln(request.responseText);
// }

// making A sychronous Request
//bad thing
// for(var i =0; i < 100; i++){
//     var request = new XMLHttpRequest();
//     request.open('GET', 'data.txt'); /
//     request.send();
//     if(request.status === 200){
//         console.log(request)
//         document.writeln(request.responseText);
//     }
// }


//got to condole...n check the onreeadystatechange

// makng requests asynchronous
// var request = new XMLHttpRequest();
// request.open('GET', 'data.txt'); 
// request.onreadystatechange = function(){
//     if(request.readyState === 4 && request.status === 200) {
//         console.log(request);
//         document.writeln(request.responseText);
//     }
// }
// request.send()



// making it compatible with internet explorer or old browser
var request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest()
}else{
    request = new ActiveXObject('Microsoft.XMLHTTP')
}
request.open('GET', 'data.txt'); 
request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200) {
        console.log(request);
        document.writeln(request.responseText);
    }
}
request.send()
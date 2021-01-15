// asynchronous Javascript and xml
// requests without reload
// javascript for heavy lifting
// talks to server through XHR --  xml http request

// a browser act as a client when it request a page..the website is the server
//  requests without reload like google search
// it can be a in text field html json format

// the page doesnt even need to reload to order to update...it a good thing n bad thing
// var request = new XMLHttpRequest();
// request.open('GET', 'data.txt', false); // false its to make our code synchronous
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
// var request;
// if(window.XMLHttpRequest){
//     request = new XMLHttpRequest()
// }else{
//     request = new ActiveXObject('Microsoft.XMLHTTP')
// }
// request.open('GET', 'data.txt'); 
// request.onreadystatechange = function(){
//     if(request.readyState === 4 && request.status === 200) {
//         console.log(request);
//         document.writeln(request.responseText);
//     }
// }
// request.send()


// MODIFYING THE DOM

// modifying elements with getElementByTagName
// var request;
// if(window.XMLHttpRequest){
//     request = new XMLHttpRequest()
// }else{
//     request = new ActiveXObject('Microsoft.XMLHTTP')
// }
// request.open('GET', 'data.txt'); 
// request.onreadystatechange = function(){
//     if(request.readyState === 4 && request.status === 200) {
//         var modify = document.getElementsByTagName('li');
//         // modify[5].innerHTML = request.responseText;
//         // var modify2  = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
//         // modify2[3].innerHTML = request.responseText;
//         for(var i = 0; i < modify.length; i++){
//             modify[i].innerHTML = request.responseText
//         }
//     }
// }
// request.send()


 // updating the dom with getElementById
// var request;
// if(window.XMLHttpRequest){
//     request = new XMLHttpRequest()
// }else{
//     request = new ActiveXObject('Microsoft.XMLHTTP')
// }
//  request.open('GET', 'data.txt'); 
//  request.onreadystatechange = function(){
//      if(request.readyState === 4 && request.status === 200) {
//         var modify = document.getElementById('update');
//         modify.innerHTML = request.responseText
         
//      }
//  }
//  request.send()



// parsing data in xml

//originally created to read data in xml = xtensible markup language
//  much like html but you get to make ya own tags

// var request;
// if(window.XMLHttpRequest){
//     request = new XMLHttpRequest()
// }else{
//     request = new ActiveXObject('Microsoft.XMLHTTP')
// }
//  request.open('GET', 'data.xml'); 
//  request.onreadystatechange = function(){
//      if(request.readyState === 4 && request.status === 200) {
//         // console.log(request)
//         // console.log(request.responseXML.getElementsByTagName('name')[0])
//         // console.log(request.responseXML.getElementsByTagName('name')[0].firstChild)
//         // console.log(request.responseXML.getElementsByTagName('name')[0].childNodes[0])
//         // console.log(request.responseXML.getElementsByTagName('name')[0].firstChild.nodeValue)
//         // console.log(request.responseXML.getElementsByTagName('name')[0].firstChild.nodeValue)


//         var items = request.responseXML.getElementsByTagName('name');
//         var output = '<ul>';
//         for (var i = 0; i <items.length; i++){
//             output += '<li>' +
//             items[i].firstChild.nodeValue + '</li>';
//         }
//         output  +=  '</ul>';

//         document.getElementById('update').innerHTML = output
//      }
//  }
//  request.send()



//  // parsing data in json

// var request;
// if(window.XMLHttpRequest){
//     request = new XMLHttpRequest()
// }else{
//     request = new ActiveXObject('Microsoft.XMLHTTP')
// }
//  request.open('GET', 'ajax.json'); 
//  request.onreadystatechange = function(){
//      if(request.readyState === 4 && request.status === 200) {
        
//         var items = JSON.parse(request.responseText)
//         console.log(items)
//         var output = '<ul>' ;
//         for(var key in items){
//             output += '<li>' + items[key].name + '</li>';
//         }
//         output += '</ul>';
//         document.getElementById('alaye').innerHTML = output;

//      }
//  }
//  request.send();




//using event driven javascript
// var btnm


var btn = document.getElementById('btn');
btn.onclick = function(){
    var request;
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest()
    }else{
        request = new ActiveXObject('Microsoft.XMLHTTP')
    }
    request.open('GET', 'ajax.json'); 
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200) {
            
            var items = JSON.parse(request.responseText)
            console.log(items)
            var output = '<ul>' ;
            for(var key in items){
                output += '<li>' + items[key].short + '</li>';
            }
            output += '</ul>';
            document.getElementById('alaye').innerHTML = output;

        }
    }
    request.send();
}

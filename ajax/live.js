$('#search').keyup(function(){
    var searchField  = $('#search').val();
    console.log(searchField)
    var Ep = new RegExp(searchField, 'i');
    $.getJSON('ajax.json', function(data){
        // console.log(data)
        var output = '<ul class="searchresults"> ';
        $.each(data, function(key, val){
            if(val.name.search(Ep) != -1){
                output += '<li>' ;
                output += ' <h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.short +'.jpg" alt=""';
                output += ' <br><p>' + val.bio + '</p>';
                output += '</li> <hr>';
            }
            
    
        });
        output += '  </ul>'
        $('#update').html(output);  // it willadd the speakers and the json list
    }); //get JSON
})



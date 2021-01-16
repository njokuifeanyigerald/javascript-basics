// $('.update').load('aj.txt')
// $('.update:last').load('aj.txt')
// $('.update:odd').load('aj.txt')

// // reading data with json
$.getJSON('ajax.json', function(data){
    console.log(data)
    var output = '<ul>';
    $.each(data, function(key, val){
        output += '<li>' + val.name + '</li>';
        output += ' <li>' + val.short + '</li>';
        output += '<li>' + val.bio + '</li> <hr>';

    });
    output += '  </ul>'
    // $('.update').html(output);  // it will replace the mentors
    $('.update').append(output);  // it willadd the speakers and the json list
});
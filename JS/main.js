console.log("start");
$( ".box-container" ).ready(function() {
    $( ".box-container" ).hide();
    $('.save').click(function()
    {
        //vars get
        var textElement=document.getElementById('text').value;
        var dateElement=document.getElementById('date').value;
        var textAreaElement=document.getElementById('area').value;
        var blue=document.getElementById('blue');

        //create elements
        var full1=$('<span class=discriptblue></span>').text(textElement);
    
        var full2=$('<span class=discriptblue></span>').text(dateElement);
        
        var full3=$('<span class=discriptblue></span>').text(textAreaElement);
        var full4=("<hr>");
        

        $(blue).append(full1);
        $(blue).append(full2);
        $(blue).append(full3);
        $(blue).append(full4);

        $('.box-container').show('slow');
    });
    $('.discriptblue').ready(function()
    {
        console.log("aa");
    });
    
    
        
    
  
   
  });
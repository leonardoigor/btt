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
       
        
        localStorage.setItem(textElement,textElement);
        localStorage.setItem(dateElement,dateElement);
        localStorage.setItem(textAreaElement,textAreaElement);
        
        // localStorage.setItem(full4,full4);

        // $( ".box-container" ).show();

        $('.box-container').show('slow');
    });
    
    
    
        
    
  $('document').ready(function () 
  {
      var div=document.getElementById('blue');
    
      console.log(localStorage.length);
    if(localStorage!=null)
    { ;
        var archive=[];
      
        for (var i = 0; i<localStorage.length; i++) {
            archive[i] = localStorage.getItem(localStorage.key(i));
            var full1=$('<span class=discriptblue></span>').text(archive[i]);                    
            
            console.log(archive[i]);
          
            var total=i % 2 ;console.log(total % 2 == 0);
            var todos=div.children;
            
            $(blue).append(full1);
            if(total % 2 == 0){
               
                console.log('total');
                if(todos.length>0)
                 {       
                var full4=("<hr>");
                $( ".box-container" ).show();
                $(blue).append(full4);
               
                }
            }
        }
        console.log(todos);
        console.log('a');
        
    }
    else{console.log('false')}
    
    // console.log(localStorage.full1); 
});   
});
// var full1=$('<span class=discriptblue></span>').text(archive[i]);                    
// $(blue).append(full1);
// $( ".box-container" ).show();





$('#but').on('click', function(){
    var aler = $('#text').val();
    var brideName = $('#text2').val();

    var letter = $('#pismo').val();

    var count = aler;
// Это первый список
    var x = $('#education').val();
    if(x == 'aaa'){
        count = count * 1.5;
    }else if(x == 'bbb'){
        count = count * 1.5;
    }else if(x == 'ccc'){
        count = count * 1.5;
    }else if(x == 'ddd'){
        count = count * 1.5;
    }else if(x == 'none'){
        console.log('error choose variants');
    }
// это второй список


   var y = $('#networth').val();
   if(y == 'rich'){
    count = count * 2;
   }else if(y == 'middle'){
    count = count * 1.5; 
   }else if(y == 'poor'){
    count = count * 1.2;
   }

//это третий список
   if ($('#checkbox1').is(':checked')){
	count = count + 100;
   }else{
       console.log('домбыра не нужна xD');
   }
   if ($('#checkbox2').is(':checked')){
	count = count + 200;
   }else{
       console.log('без этого никак');
   }
   if ($('#checkbox3').is(':checked')){
	count = count + 150;
   }else{
       console.log('не важно главное готовить');
   }
   if ($('#checkbox4').is(':checked')){
	count = count + 100;
   }else{
       console.log('я не смогу есть ее голос');
   }

//radio variant

   var z = $('input[name="test"]:checked').val();
   if(z == 'age1'){
       count = count * 1.5;
   }else if(z == 'age2'){
       count = count * 1.2;
   }else if(z == 'age3'){
       count = count * 0.95;
       console.log('БУ');
   }

// 5 razdel
   if ($('#checkbox5').is(':checked')){
	count = count * 0.85;
   }else{
       
   }
   if ($('#checkbox6').is(':checked')){
	count = count * 0.9;
   }else{
    
   }
   if ($('#checkbox7').is(':checked')){
	count = count - 200;
   }else{
       
   }
    
   alert("Your wife " + brideName + " " + count + " $" + " , wrote the letter for you - " + '"' + letter + '"');
   




});
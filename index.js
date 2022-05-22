const peru = document.getElementById("desP");


// function imageClick() {
//     window.location = "booking.html";
//      const updateText = "Peru";


//      peru.innerHTML = updateText;
//     document.getElementById("desP").innerHTML = "Peru";
//     document.getElementById("desP").innerHTML = "Peru";
//     }



// pin nav to top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
 var items = 0;
 var flight = 0;
 


    function addFood(){
        let addOns = "";
        items = 0;
            if (document.getElementById("water").checked) {
                addOns += " water ";
                items += 40;
            } 
            if (document.getElementById("food").checked) {
                addOns += " food ";
                items += 30;
            } 
            if (document.getElementById("snacks").checked) {
                addOns += " snacks ";
                items += 25;
            } 
            

            cost();
        document.getElementById('items-booked').innerHTML = addOns;   
        document.getElementById('seat-selection-header').scrollIntoView();  
    }


    function imageClickPeru(){
        flight = 0;
        document.getElementById('food-page-header').scrollIntoView();
        document.getElementById('flight-booked').innerHTML = 'Peru';
        flight = 1430;
        cost();
        

    };

    function cost(){
        let cost = flight + items;        
        document.getElementById('cost-total').innerHTML = cost;

    }


    // seat Selection function to see what see is selected 
    function seatSelection(){
        var obj1= document.getElementById("seat-booked");
        var obj2= document.getElementById("seats");
        obj1.innerHTML = obj2.value;

    }

var imgc = function imageClickV() {
    window.location = "food.html";

    }

  
    
    function imageClickP() {
    window.location = "food.html";
    
    }

var images = document.getElementsByTagName("img");
for(var i = 0; i < images.length; i++) {
 var image = images[i];
 image.onclick = function(event) {
     window.location.href = this.id + "food.html";
 }
}


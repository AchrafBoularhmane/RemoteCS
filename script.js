/*------------------------------------------------------FILTER OPTIONS ----------------------------------------------*/
$(document).ready(function(){
    /*Filter All*/ 
    $('select#filterAll').change(function(){
        var filterAll = $(this).children("option:selected").val();
        var filterOptionPrice = document.querySelector('.filterOption.Price').innerHTML;
        var filterOptionSockets = document.querySelector('.filterOption.Sockets').innerHTML;
        var filterOptionNosmokingArea= document.querySelector('.filterOption.No-Smoking-Area').innerHTML;

        var PriceValue = document.getElementById('PriceValue')
        var Sockets = document.getElementById('Sockets')
        var NoSmokingArea = document.getElementById('NoSmokingArea')
        var FilterByPlus = document.getElementById('FilterByPlus')

        var lowPrice = document.getElementById('PriceLow').innerHTML;
        var AveragePrice= document.getElementById('PriceAverage').innerHTML;
        var HighPrice= document.getElementById('PriceHigh').innerHTML;
        /*select price*/
        
        if(filterAll === filterOptionPrice){
                 Sockets.classList.remove('active')            
                 NoSmokingArea.classList.remove('active')
                 PriceValue.classList.add('active')
                 $(document).ready(function(){
                        $('select#PriceValue').change(function(){
                        var PriceValue = $(this).children("option:selected").val();
                        FilterByPlus.classList.add('active')

                        FilterByPlus.addEventListener('click', function(e){
                           e.preventDefault()
                           Sockets.classList.add('active')
                           }) 

                         $('.coffee-shop').hide();
                         if(PriceValue === lowPrice){
                                $('.coffee-shop.PricevalueLow').show();
                                $('select#Sockets').change(function(){
                                    var SocketValue = $(this).children("option:selected").val();
                                    var LowSocket = document.getElementById('SocketLow').innerHTML;
                                    var AverageSocket= document.getElementById('SocketAverage').innerHTML;
                                    $('.coffee-shop.PricevalueLow').hide();
                                    if(SocketValue === LowSocket){
                                        $('.coffee-shop.PricevalueLow.SocketvalueLow').show();
                                        FilterByPlus.addEventListener('click', function(e){
                                            e.preventDefault()
                                            NoSmokingArea.classList.add('active')
                                            }) 
                                         $('select#NoSmokingArea').change(function(){
                                            var NoSmokingArea = $(this).children("option:selected").val();
                                            var YesNSA = document.getElementById('NSAYES').innerHTML;
                                            var NoNSA = document.getElementById('NSANO').innerHTML;
                                            
                                            $('.coffee-shop').hide();
                                            if(NoSmokingArea === YesNSA){
                                            $('.coffee-shop.PricevalueLow.SocketvalueLow.NSAreaYes').show();
                                             }
                        
                                             else if(NoSmokingArea === NoNSA){
                                             $('.coffee-shop.PricevalueLow.SocketvalueLow.NSAreaNo').show();
                                              }
                                    
                                         }); 
                                    }
                              
                                    else if(SocketValue === AverageSocket){
                                       $('.coffee-shop.PricevalueLow.SocketvalueAverage').show();
                                       FilterByPlus.addEventListener('click', function(e){
                                        e.preventDefault()
                                        NoSmokingArea.classList.add('active')
                                        }) 
                                     $('select#NoSmokingArea').change(function(){
                                        var NoSmokingArea = $(this).children("option:selected").val();
                                        var YesNSA = document.getElementById('NSAYES').innerHTML;
                                        var NoNSA = document.getElementById('NSANO').innerHTML;
                                        
                                        $('.coffee-shop').hide();
                                        if(NoSmokingArea === YesNSA){
                                        $('.coffee-shop.PricevalueLow.SocketvalueAverage.NSAreaYes').show();
                                         }
                    
                                         else if(NoSmokingArea === NoNSA){
                                         $('.coffee-shop.PricevalueLow.SocketvalueAverage.NSAreaNo').show();
                                          }
                                
                                     }); 
                                    }
                                    else {
                                        $('.coffee-shop').hide();
                                    }
                              
                                 }); 
                                
                         }

                         else if(PriceValue === AveragePrice){
                            $('.coffee-shop.PricevalueAverage').show();  
                            $('select#Sockets').change(function(){
                                var SocketValue = $(this).children("option:selected").val();
                                var LowSocket = document.getElementById('SocketLow').innerHTML;
                                var AverageSocket= document.getElementById('SocketAverage').innerHTML;
                                $('.coffee-shop.PricevalueAverage').hide();
                                if(SocketValue === LowSocket){
                                    $('.coffee-shop.PricevalueAverage.SocketvalueLow').show();
                                    FilterByPlus.addEventListener('click', function(e){
                                        e.preventDefault()
                                        NoSmokingArea.classList.add('active')
                                        }) 
                                     $('select#NoSmokingArea').change(function(){
                                        var NoSmokingArea = $(this).children("option:selected").val();
                                        var YesNSA = document.getElementById('NSAYES').innerHTML;
                                        var NoNSA = document.getElementById('NSANO').innerHTML;
                                        
                                        $('.coffee-shop').hide();
                                        if(NoSmokingArea === YesNSA){
                                        $('.coffee-shop.PricevalueAverage.SocketvalueLow.NSAreaYes').show();
                                         }
                    
                                         else if(NoSmokingArea === NoNSA){
                                         $('.coffee-shop.PricevalueAverage.SocketvalueLow.NSAreaNo').show();
                                          }
                                
                                     }); 
                                
                                }
                                  
                                        else if(SocketValue === AverageSocket){
                                           $('.coffee-shop.PricevalueAverage.SocketvalueAverage').show();
                                           FilterByPlus.addEventListener('click', function(e){
                                            e.preventDefault()
                                            NoSmokingArea.classList.add('active')
                                            }) 
                                         $('select#NoSmokingArea').change(function(){
                                            var NoSmokingArea = $(this).children("option:selected").val();
                                            var YesNSA = document.getElementById('NSAYES').innerHTML;
                                            var NoNSA = document.getElementById('NSANO').innerHTML;
                                            
                                            $('.coffee-shop').hide();
                                            if(NoSmokingArea === YesNSA){
                                            $('.coffee-shop.PricevalueAverage.SocketvalueAverage.NSAreaYes').show();
                                             }
                        
                                             else if(NoSmokingArea === NoNSA){
                                             $('.coffee-shop.PricevalueAverage.SocketvalueAverage.NSAreaNo').show();
                                              }
                                    
                                         }); 
                                        }
                                        else {
                                            $('.coffee-shop').hide();
                                        }
                                  
                                     }); 
                                
                                    }
                         
                        else if(PriceValue === HighPrice){
                        $('.coffee-shop.PricevalueHigh').show();
                        $('select#Sockets').change(function(){
                            var SocketValue = $(this).children("option:selected").val();
                            var LowSocket = document.getElementById('SocketLow').innerHTML;
                            var AverageSocket= document.getElementById('SocketAverage').innerHTML;
                            $('.coffee-shop.PricevalueHigh').hide();
                            if(SocketValue === LowSocket){
                                $('.coffee-shop.PricevalueHigh.SocketvalueLow').show();
                                FilterByPlus.addEventListener('click', function(e){
                                    e.preventDefault()
                                    NoSmokingArea.classList.add('active')
                                    }) 
                                 $('select#NoSmokingArea').change(function(){
                                    var NoSmokingArea = $(this).children("option:selected").val();
                                    var YesNSA = document.getElementById('NSAYES').innerHTML;
                                    var NoNSA = document.getElementById('NSANO').innerHTML;
                                    
                                    $('.coffee-shop').hide();
                                    if(NoSmokingArea === YesNSA){
                                    $('.coffee-shop.PricevalueHigh.SocketvalueLow.NSAreaYes').show();
                                     }
                
                                     else if(NoSmokingArea === NoNSA){
                                     $('.coffee-shop.PricevalueHigh.SocketvalueLow.NSAreaNo').show();
                                      }
                            
                                 }); 
                            }
                            
                            else if(SocketValue === AverageSocket){
                                $('.coffee-shop.PricevalueHigh.SocketvalueAverage').show();
                                FilterByPlus.addEventListener('click', function(e){
                                    e.preventDefault()
                                    NoSmokingArea.classList.add('active')
                                    }) 
                                 $('select#NoSmokingArea').change(function(){
                                    var NoSmokingArea = $(this).children("option:selected").val();
                                    var YesNSA = document.getElementById('NSAYES').innerHTML;
                                    var NoNSA = document.getElementById('NSANO').innerHTML;
                                    
                                    $('.coffee-shop').hide();
                                    if(NoSmokingArea === YesNSA){
                                    $('.coffee-shop.PricevalueHigh.SocketvalueAverage.NSAreaYes').show();
                                     }
                
                                     else if(NoSmokingArea === NoNSA){
                                     $('.coffee-shop.PricevalueHigh.SocketvalueAverage.NSAreaNo').show();
                                      }
                            
                                 }); 
                            }
                            else {
                                $('.coffee-shop').hide();
                            }       
                         });   
                        }       
             }); 
            }); 
                   
        } else
        /*select sockets*/
         if(filterAll === filterOptionSockets){
            PriceValue.classList.remove('active')
            Sockets.classList.add('active')
            NoSmokingArea.classList.remove('active')
            
            $(document).ready(function(){
                $('select#Sockets').change(function(){
                    var SocketValue = $(this).children("option:selected").val();
                    var LowSocket = document.getElementById('SocketLow').innerHTML;
                    var AverageSocket= document.getElementById('SocketAverage').innerHTML;
                
                    $('.coffee-shop').hide();
                    if(SocketValue === LowSocket){
                        $('.coffee-shop.SocketvalueLow').show();
                    }
              
                    else if(SocketValue === AverageSocket){
                       $('.coffee-shop.SocketvalueAverage').show();
                    }
                    else {
                        $('.coffee-shop').hide();
                    }
              
                 }); 
                }); 
        } 
        /*select non-smoking area*/
        else if(filterAll === filterOptionNosmokingArea){
            PriceValue.classList.remove('active')            
            Sockets.classList.remove('active')            
            NoSmokingArea.classList.add('active')
            $(document).ready(function(){
                   $('select#NoSmokingArea').change(function(){
                    var NoSmokingArea = $(this).children("option:selected").val();
                    var YesNSA = document.getElementById('NSAYES').innerHTML;
                    var NoNSA = document.getElementById('NSANO').innerHTML;
                    
                    $('.coffee-shop').hide();
                    if(NoSmokingArea === YesNSA){
                    $('.coffee-shop.NSAreaYes').show();
                     }

                     else if(NoSmokingArea === NoNSA){
                     $('.coffee-shop.NSAreaNo').show();
                      }
                 }); 
                });
        }
    });
    });

/*---------------------------------------------------ADD NEW COFFEE SHOP ----------------------------------------------*/
var Addcoffeeshop = document.querySelector('.Addcoffee-shop')
var AddNewCSform=document.querySelector('.AddNew-form-modal');
var AddNewbtn= document.getElementById('AddNewCSbtn');
var Closeform = document.querySelector('.close-form');

AddNewbtn.addEventListener('click',function(){
AddNewCSform.classList.add('active');
});

Closeform.addEventListener('click',function(){
AddNewCSform.classList.remove('active');
});

document.querySelector('#AddNewCoffeeShopForm').addEventListener("submit", function(e){
    e.preventDefault()
    submitCoffee()
    AddNewCSform.classList.remove('active');
    Addcoffeeshop.classList.add('active');
})

var firebaseConfig = {
    apiKey: "AIzaSyDzG6LCLB8PV9R2qR_BZOUOsSb-Ukfjrn8",
    authDomain: "remote-3c6f4.firebaseapp.com",
    databaseURL: "https://remote-3c6f4.firebaseio.com",
    projectId: "remote-3c6f4",
    storageBucket: "remote-3c6f4.appspot.com",
    messagingSenderId: "694104041108",
    appId: "1:694104041108:web:924c2264c0b688c3c2f681",
    measurementId: "G-GGVBZGGL10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 // create database var
 let database = firebase.database()
 // set a reference
 let ref = database.ref("NewCoffeeShopAdded")
 
 function submitCoffee(){
     //prepare data
     let data = {
         NameCoffee : document.querySelector('#coffee-name-data').value,
         GoogleMapLink : document.querySelector('.G-M-Link-data').value,
         City: document.querySelector('.city-data').value,
         Price : document.querySelector('input[class="priceForm"]:checked').value,
         NoSmoking: document.querySelector('input[class="NsArea"]:checked').value,
         Sockets : document.querySelector('input[class="socketForm"]:checked').value,
         Noise: document.querySelector('input[class="noiseForm"]:checked').value,
         UserName: document.querySelector('#name-data').value,
         UserEmail: document.querySelector('#email-data').value
     }
     //upload data
     ref.push(data)
     document.querySelector('form').reset();

 
 }

/*------------------------------------------------COFFEE-SHOP-ALL-DETAILS-------------------------------------------------*/
ref.on("value", gotData)
coffeeShopAdded= document.getElementById('All')

function gotData(data){
    data = data.val();
    let keys = Object.keys(data)
    for ( let i=0; i<keys.length; i++){

        var k = keys[i];
        var  NameCoffee = data[k].NameCoffee;
        var  GML = data[k].GoogleMapLink;
        var  NSarea = data[k].NoSmoking;
        var  Noise = data[k].Noise;
        var  Price = data[k].Price;
        var  Sockets = data[k].Price;

    var newdiv = document.createElement("div") ;
    var newdiv1 = document.createElement("div") ;
    var newdiv2=document.createElement("div");
    var newdiv3=document.createElement("div");
    var newdiv4=document.createElement("div");
    var newdiv5=document.createElement("div");
    var newdiv6=document.createElement("div");
    var newdiv7=document.createElement("div");




    newdiv.setAttribute("id", "Addcoffee-shop");
    newdiv1.setAttribute("class", "CS");
    newdiv2.setAttribute("class","vote")
    newdiv3.setAttribute("class","upvoting")
    newdiv5.setAttribute("class","up-vote-logo")
    newdiv4.setAttribute("class","downvoting")
    newdiv6.setAttribute("class","down-vote-logo")
    newdiv7.setAttribute("class","note")



    
    newdiv1.innerHTML += "<a href=''><h2>"  +NameCoffee+ "</h2></a><br>";
    newdiv1.innerHTML += "<a class='GML' href=''>Google Maps:" +GML+ "</a>";
    newdiv1.innerHTML += "<p class='Price'>Price: <span class='PriceValue'>" +Price+ "</span></p>";
    newdiv1.innerHTML += "<p class='NSarea'>No-smoking-area: <span  class='NsaValue'>" +NSarea+ "</span></p>";
    newdiv1.innerHTML += "<p class='Socket'>Sockets: <span  class='SocketValue'>" +Sockets+ "</span></p>";
    newdiv1.innerHTML += "<p class='Noise'>Noise: <span  class='NoiseValue'>" +Noise+ "</span></p>";

    newdiv5.innerHTML +="<span style='margin-right: 5px; color: green;'><i class='fa fa-caret-up'>0</span></i>";
    newdiv6.innerHTML +="<span style='margin-right: 5px; color: red;'><i class='fa fa-caret-down'>0</span></i>";
    newdiv7.innerHTML +="<button type='submit'>/ 10</button>";


    

    $('#All').append($(newdiv))
    $(newdiv).append($(newdiv1))
    $(newdiv1).append($(newdiv2))
    $(newdiv1).append($(newdiv7))
    $(newdiv2).append($(newdiv3))
    $(newdiv2).append($(newdiv4))
    $(newdiv3).append($(newdiv5))
    $(newdiv4).append($(newdiv6))




    var PriceValue = document.querySelectorAll(".PriceValue");
    var SocketValue = document.querySelectorAll(".SocketValue");
    var NSaValue = document.querySelectorAll(".NsaValue");
    var NoiseValue = document.querySelectorAll(".NoiseValue");

     PriceValue.forEach(function(PriceValue) {
        PriceValue.style.fontWeight="bolder"
         if(PriceValue.innerHTML==='High'){
            PriceValue.style.color="red"

                 }else if (PriceValue.innerHTML==='Low'){
                    PriceValue.style.color="Green"
                         }else if (PriceValue.innerHTML==='Average'){
                            PriceValue.style.color="Gold"
                                 }
     });
     SocketValue.forEach(function(SocketValue) {
        SocketValue.style.fontWeight="bolder"
         if(SocketValue.innerHTML==='High'){
            SocketValue.style.color="red"

                 }else if (SocketValue.innerHTML==='Low'){
                    SocketValue.style.color="Green"
                         }else if (SocketValue.innerHTML==='Average'){
                            SocketValue.style.color="Gold"
                                 }
     }); 
     NoiseValue.forEach(function(NoiseValue) {
        NoiseValue.style.fontWeight="bolder"
         if(NoiseValue.innerHTML==='High'){
            NoiseValue.style.color="red"
                 }else if (NoiseValue.innerHTML==='Low'){
                    NoiseValue.style.color="Green"
                         }else if (NoiseValue.innerHTML==='Average'){
                            NoiseValue.style.color="Gold"
                                 }
     });
     NSaValue.forEach(function(NSaValue) {
        NSaValue.style.fontWeight="bolder"
         if(NSaValue.innerHTML==='Yes'){
            NSaValue.style.color="Green"
                 }else if (NSaValue.innerHTML==='No'){
                    NSaValue.style.color="red"
                         }
    });
   
    }
    }
       
  









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
        var  NSareaValue = data[k].NoSmoking;
        var  NoiseValue = data[k].Noise;
        var  PriceValue = data[k].Price;
        var  SocketsValue = data[k].Price;

    var AddcoffeeShop = document.createElement("div") ;
    var CS = document.createElement("div") ;
    var CSname= document.createElement("div");
    var CSnameNote = document.createElement("div");
    var vote=document.createElement("div");
    var upvoting=document.createElement("div");
    var uplogo=document.createElement("div");
    var downvoting=document.createElement("div");
    var downlogo=document.createElement("div");
    var note=document.createElement("div");
    var GMLink=document.createElement("div");
    var Link=document.createElement("a");
    var Price = document.createElement("div")
    var Sockets = document.createElement("div")
    var NSarea = document.createElement("div")
    var Noise = document.createElement("div")
    var PricePlusSockets = document.createElement("div")
    var NSareaPlusNoise = document.createElement("div")



    AddcoffeeShop.setAttribute("id", "Addcoffee-shop");
    CS.setAttribute("class", "CS");
    vote.setAttribute("class","vote");
    upvoting.setAttribute("class","upvoting display");
    uplogo.setAttribute("class","up-vote-logo");
    downvoting.setAttribute("class","downvoting display");
    downlogo.setAttribute("class","down-vote-logo");
    note.setAttribute("class","note");
    GMLink.setAttribute("class","GMLink");
    Link.setAttribute("href",GML);
    Link.setAttribute("target","_blank");
    Price.setAttribute("class","Price");
    Sockets.setAttribute("class","Sockets");
    NSarea.setAttribute("class","NSarea");
    Noise.setAttribute("class","Noise");
    CSnameNote.setAttribute("class", "CSnameNote")
    CSname.setAttribute("class", "CSname")
    PricePlusSockets.setAttribute("class", "PricePLusSockets")
    NSareaPlusNoise.setAttribute("class", "NSareaPlusNoise")



    Price.innerHTML += "<p>Price: <span class='PriceValue'>" +PriceValue+ "</span></p>";
    Sockets.innerHTML += "<p>Sockets: <span  class='SocketValue'>" +SocketsValue+ "</span></p>";
    NSarea.innerHTML += "<p>Non-smoking-area: <span  class='NsaValue'>" +NSareaValue+ "</span></p>";
    Noise.innerHTML += "<p>Noise: <span  class='NoiseValue'>" +NoiseValue+ "</span></p>";
    Link.innerHTML+="Link to Maps";
    CSname.innerHTML += "<a href=''><h2>"  +NameCoffee+ "</h2></a>";
    note.innerHTML +="<button type='submit'>/ 10</button>";
    uplogo.innerHTML +="<span style='margin-right: 5px; color: green;'>0 <i class='fa fa-caret-up'></span></i>";
    downvoting.innerHTML +="<span style='margin-right: 5px; color: red;'>0 <i class='fa fa-caret-down'></span></i>";
    
    $('#All').append($(AddcoffeeShop))
    $(CS).append($(CSnameNote))
    $(CSnameNote.append(CSname))
    $(CSnameNote.append(note))
    $(CS).append($(GMLink))
    $(GMLink).append($(Link))
    $(CS).append($(PricePlusSockets))
    $(PricePlusSockets).append($(Price))
    $(PricePlusSockets).append($(Sockets))
    $(CS).append($(NSareaPlusNoise))
    $(NSareaPlusNoise).append($(NSarea))
    $(NSareaPlusNoise).append($(Noise))
   
  
    $(AddcoffeeShop).append($(CS))
    $(CS).append($(vote))
    $(vote).append($(upvoting))
    $(vote).append($(downvoting))
    $(upvoting).append($(uplogo))
    $(downvoting).append($(downlogo))

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
       
  









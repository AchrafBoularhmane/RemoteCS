/*------------------------------------------------------FILTER OPTIONS ----------------------------------------------*/
$('select#Price,select#Sockets,select#NSArea').change(function(e){
    e.preventDefault()
    var PriceSelected = $('#Price').children("option:selected").val(),
        SocketsSelected = $('#Sockets').children("option:selected").val(),

        coffeeShop = document.querySelectorAll('.Addcoffee-shop'),
        PriceValue = document.querySelectorAll(".Price-Value"),
        SocketValue = document.querySelectorAll(".Sockets-Value");
 

        for(i=0;i<coffeeShop.length;i++){
            coffeeShop[i].classList.add("hide");
               if(PriceSelected == PriceValue[i].textContent || SocketsSelected == SocketValue[i].textContent){ 
                    coffeeShop[i].classList.add("show");
                    coffeeShop[i].classList.remove("hide");
                }  
        }
       
})



/*---------------------------------------------------ADD NEW COFFEE SHOP FORM (FIREBASE) ----------------------------------------------*/
document.querySelector('#AddNewCoffeeShopForm').addEventListener("submit", function(e){
    e.preventDefault()
    submitCoffee() 
})

$('#AddNewCSbtn').click(function(){
    $('.modal-bg').addClass('show');
})
$('#close').click(function(){
    $('.modal-bg').addClass('hide');
    $('.modal-bg').removeClass('show');
})
$('#close-up-review').click(function(){
    $('.modal-upreview').addClass('hide');
    $('.modal-upreview').removeClass('show');
})
$('#close-down-review').click(function(){
    $('.modal-downreview').addClass('hide');
    $('.modal-downreview').removeClass('show');
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
         NameCoffee : $('#coffee-name-data').val(),
         GoogleMapLink : $('#G-M-Link-data').val(),
         City: $('#city-data').children("option:selected").val(),
         Price : $('#price-data').children("option:selected").val(),
         NoSmoking: $('#NSA-data').children("option:selected").val(),
         Sockets : $('#sockets-data').children("option:selected").val(),
         Noise: $('#noise-data').children("option:selected").val(),
         UserName: $('#name-data').val(),
         UserEmail: $('#email-data').val()
     }

     //doube check data //
        var atpos = data.UserEmail.indexOf("@"),
        dotpos = data.UserEmail.lastIndexOf("."),
        reg = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            $('.error-email').addClass('show');
            $('.error-email').removeClass('hide');
            alert('email error')
           return false;
        } else if (data.NameCoffee == ""){
            $('.error-CSname').addClass('show');
            $('.error-CSname').removeClass('hide');
            return false;
        }  else if (data.UserName == ""){
            $('.error-name').addClass('show');
            $('.error-name').removeClass('hide');
            return false;
        } else if (reg.test(data.GoogleMapLink) == false){
            $('.error-GM').addClass('show');
            $('.error-GM').removeClass('hide');
        } else { 
            $('.modal-bg').addClass('hide');
            $('.modal-bg').removeClass('show');
            ref.push(data)
            document.querySelector('form').reset(); 
        }
        
     //upload data
    }

/*------------------------------------------------COFFEE-SHOP-ALL-DETAILS-------------------------------------------------*/
ref.on("value", gotData)
coffeeShopAdded= $('#All-CS')

function gotData(data){
    data = data.val();
    let keys = Object.keys(data)
    for ( let i=0; i<keys.length; i++){
        var k = keys[i];
            NameCoffee = data[k].NameCoffee,
            GML = data[k].GoogleMapLink,
            NSareaValue = data[k].NoSmoking,
            NoiseValue = data[k].Noise,
            PriceValue = data[k].Price,
            SocketsValue = data[k].Sockets;  
                      
                //Create divs for data// 

             var AddcoffeeShop = jQuery('<div/>', {"class": 'Addcoffee-shop'}).appendTo('#All-CS'),
                 CS =  jQuery('<div/>', {"class": 'CS'}).appendTo($(AddcoffeeShop)),
                 NameAndNote =  jQuery('<div/>', {"class": 'Name-Note'}).appendTo($(CS)),
                 Name =  jQuery('<div/>', {"class": 'Name-div'}).appendTo($(NameAndNote)),
                 Note =  jQuery('<div/>', {"class": 'Note'}).appendTo($(NameAndNote)),
                 GMLink = jQuery('<div/>',{"class":'GM-Link'}).appendTo($(CS)),
                 Link = jQuery('<a/>',{"href":GML,"target":"_blank"}).appendTo($(GMLink)),
                 PriceAndSockets = jQuery('<div/>',{"class":'Price-Sockets flex'}).appendTo($(CS)),
                 Price = jQuery('<div/>',{"class":'Price'}).appendTo($(PriceAndSockets)),
                 Sockets = jQuery('<div/>',{"class":'Sockets'}).appendTo($(PriceAndSockets)),
                 NSAndNoise = jQuery('<div/>',{"class":'NS-Noise flex '}).appendTo($(CS)),
                 NS = jQuery('<div/>',{"class":'NS'}).appendTo($(NSAndNoise)),
                 Noise = jQuery('<div/>',{"class":'Noise'}).appendTo($(NSAndNoise)),
                 Vote = jQuery('<div/>',{"class":'Vote'}).appendTo($(CS)),
                 VoteDesc = jQuery('<span>Votes : <span/>',{"class":'desc display'}).appendTo($(Vote)),
                 UpVote = jQuery('<div/>',{"class":'Up_Vote display',}).appendTo($(Vote)),
                 UpLogo = jQuery('<div/>',{"class":'Up_logo'}).appendTo($(UpVote)),
                 DownVote = jQuery('<div/>',{"class":'Down_Vote display'}).appendTo($(Vote)),
                 DownLogo = jQuery('<div/>',{"class":'Down_logo'}).appendTo($(DownVote));

                //Show data//

                 jQuery('<p class = "Name">' + NameCoffee +'</p>').appendTo($(Name));
                 jQuery('<p>Price : <span class ="Price-Value">' + PriceValue +'</span></p>').appendTo($(Price));
                 jQuery('<p>Sockets : <span class ="Sockets-Value">' + SocketsValue +'</span></p>').appendTo($(Sockets));
                 jQuery('<p>Noise : <span class ="Noise-Value">' + NoiseValue +'</span></p>').appendTo($(Noise));
                 jQuery('<p>Non-Smoking : <span class ="NS-Value">' + NSareaValue +'</span></p>').appendTo($(NS));
                 jQuery('<button type="submit" class="btn-sm btn-success">/10</button>').appendTo($(Note));
                 jQuery('<span class ="red" style="margin-right: 5px;"><span class="down-note"></span> <i class="fa fa-caret-down"></i></span>').appendTo($(DownVote));
                 jQuery('<span class ="green" style="margin-right: 5px;"><span class="up-note"></span> <i class="fa fa-caret-up"></i></span>').appendTo($(UpVote));
                 jQuery('<span class = "GMLink">Link to Maps<span/>').appendTo($(Link)); 

                 // Value Color //

                 var PriceValue = document.querySelectorAll(".Price-Value"),
                     SocketValue = document.querySelectorAll(".Sockets-Value"),
                     NoiseValue = document.querySelectorAll(".Noise-Value"),
                     NS = document.querySelectorAll(".NS-Value");

                  PriceValue.forEach(function(PriceValue) {
                      if(PriceValue.innerHTML==='High'){
                         PriceValue.classList.add("red");
                      } else if (PriceValue.innerHTML==='Low'){
                        PriceValue.classList.add("green");
                      } else PriceValue.classList.add("yellow");
                  });
                  SocketValue.forEach(function(SocketValue) {
                    if(SocketValue.innerHTML==='High'){
                       SocketValue.classList.add("red");
                    } else if (SocketValue.innerHTML==='Low'){
                      SocketValue.classList.add("green");
                    } else SocketValue.classList.add("yellow");
                   });
                   NoiseValue.forEach(function(NoiseValue) {
                    if(NoiseValue.innerHTML==='High'){
                       NoiseValue.classList.add("red");
                    } else if (NoiseValue.innerHTML==='Low'){
                      NoiseValue.classList.add("green");
                    } else NoiseValue.classList.add("yellow");
                  });
                  NS.forEach(function(NS) {
                    if(NS.innerHTML==='yes'){
                       NS.classList.add("Green");
                    } else NS.classList.add("red");
                  });              
    }

                 /*USER REVIEW*/
                 
                 $('.Addcoffee-shop').each(function(){

                    var name = $(this).find(".Name").html(),
                        up = $(this).find(".Up_Vote"),
                        down = $(this).find(".Down_Vote");
                        
                        let rev = database.ref("Reviews");
                        let ref1 = database.ref(name + " " + "Up Review Added");

                        ref1.on('value', getdata);

                        function getdata(data){
                            var review = data.val(),
                                keys = Object.keys(review);
                
                            for (var i=0;i<keys.length;i++){
                                var k = keys[i],
                                    upreview = review[k].upreview,
                                    
                                    boxReview = jQuery('<div/>',{"class":'Box-Review'}).appendTo($('.CS'));        
                                    jQuery('<span class = "rev">' + upreview +'</span>').appendTo($(boxReview));                            
                        
                            }
                        }
                                       
                    $(up).on("click",function(){
                        $('.modal-upreview').addClass('show');
                        var cont =  document.querySelector('.up-name-data');
                            cont.innerHTML = name;
                        
                        document.querySelector('#UpvoteForm').addEventListener("submit", function(){
                            upReviewSubmit()
                        })
                           function upReviewSubmit(){
                            let data = {
                                upreview : $('#up-review-data').val(),
                                username : $('#name-upreview-data').val(),
                                useremail : $('#email-upreview-data').val(),       
                            }
                            $('.modal-upreview').addClass('hide');
                            $('.modal-upreview').removeClass('show');
                            ref1.push(data)
                            document.getElementById('UpvoteForm').reset();
                         }
                      
                    })
                
                    $(down).on("click",function(){
                        $('.modal-downreview').addClass('show');
                        var cont =  document.querySelector('.down-name-data');
                        cont.innerHTML = name;          
                        
                        document.querySelector('#DownvoteForm').addEventListener("submit", function(){
                            upReviewSubmit()
                        })
                         let ref2 = database.ref(name + " " + "Down Review Added")
                         function upReviewSubmit(){
                            let data = {
                                upreview : $('#down-review-data').val(),
                                username : $('#name-downreview-data').val(),
                                useremail : $('#email-downreview-data').val(),       
                            }
                            $('.modal-downreview').addClass('hide');
                            $('.modal-downreview').removeClass('show');
                            ref2.push(data)
                            document.getElementById('DownvoteForm').reset(); 
                         }                  
                    })
                });
    }

/*-----------------------------------------------------------------------------------------------------------------------*/ 
  



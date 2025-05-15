//Mobile X Out
$('.x').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(1)').css({'display':'grid'})
        $('.tile-container .box:nth-child(1)').css({'grid-row': 'span 1', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(1) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(1) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(2)').css({'display':'grid'})
        $('.tile-container .box:nth-child(2)').css({'grid-row': 'span 1', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(2) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(2) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(3)').css({'display':'grid'})
        $('.tile-container .box:nth-child(3)').css({'grid-row': 'span 2', 'grid-column': 'span 1'})
        $('.tile-container .box:nth-child(3) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(3) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(4)').css({'display':'grid'})
        $('.tile-container .box:nth-child(4)').css({'grid-row': 'span 2', 'grid-column': 'span 3'})
        $('.tile-container .box:nth-child(4) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(4) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(5)').css({'display':'grid'})
        $('.tile-container .box:nth-child(5)').css({'grid-row': 'span 2', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(5) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(5) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(6)').css({'display':'grid'})
        $('.tile-container .box:nth-child(6)').css({'grid-row': 'span 2', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(6) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(6) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(7)').css({'display':'grid'})
        $('.tile-container .box:nth-child(7)').css({'grid-row': 'span 1', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(7) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(7) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(8)').css({'display':'grid'})
        $('.tile-container .box:nth-child(8)').css({'grid-row': 'span 1', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(8) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(8) h2').css({'display':'grid'})

        $('.x').css({'display':'none'})
    }
}})

$('.tile-container .box .overlay a').on({click: function(){
  if (window.innerWidth < 1035){
    $('.tile-container .box:nth-child(1)').css({'display':'grid'})
        $('.tile-container .box:nth-child(1)').css({'grid-row': 'span 1', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(1) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(1) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(2)').css({'display':'grid'})
        $('.tile-container .box:nth-child(2)').css({'grid-row': 'span 1', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(2) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(2) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(3)').css({'display':'grid'})
        $('.tile-container .box:nth-child(3)').css({'grid-row': 'span 2', 'grid-column': 'span 1'})
        $('.tile-container .box:nth-child(3) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(3) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(4)').css({'display':'grid'})
        $('.tile-container .box:nth-child(4)').css({'grid-row': 'span 2', 'grid-column': 'span 3'})
        $('.tile-container .box:nth-child(4) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(4) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(5)').css({'display':'grid'})
        $('.tile-container .box:nth-child(5)').css({'grid-row': 'span 2', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(5) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(5) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(6)').css({'display':'grid'})
        $('.tile-container .box:nth-child(6)').css({'grid-row': 'span 2', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(6) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(6) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(7)').css({'display':'grid'})
        $('.tile-container .box:nth-child(7)').css({'grid-row': 'span 1', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(7) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(7) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(8)').css({'display':'grid'})
        $('.tile-container .box:nth-child(8)').css({'grid-row': 'span 1', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(8) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(8) h2').css({'display':'grid'})
  }
}
})



//First Child: Partnering
var timer1;
$('.tile-container .box:nth-child(1)').hover(function() {
  timer1 = setTimeout(function() {
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(1)').css({'grid-row':'span 2', 'grid-column':'span 6'});
        $('.tile-container .box:nth-child(1) .overlay').css({'opacity':'1'});
            
        $('.tile-container .box:nth-child(4)').css({'grid-row':'span 1'});

        $('.tile-container .box:nth-child(2)').css({'grid-column':'span 4'});

        $('.tile-container .box:nth-child(1) h2').css({'display':'none'});
    }
  }, 100);
}, function() {
  clearTimeout(timer1);
})

$('.tile-container .box:nth-child(1)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(1)').css({'grid-row':'span 1', 'grid-column':'span 5'});
        $('.tile-container .box:nth-child(1) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(4)').css({'grid-row':'span 2'});

        $('.tile-container .box:nth-child(2)').css({'grid-column':'span 5'});

        $('.tile-container .box:nth-child(1) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(1) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(1)').css({'grid-row':'span 1', 'grid-column':'span 5'});
      $('.tile-container .box:nth-child(1) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(4)').css({'grid-row':'span 2'});

      $('.tile-container .box:nth-child(2)').css({'grid-column':'span 5'});

      $('.tile-container .box:nth-child(1) h2').css({'display':'block'})
  }
}})


$('.tile-container .box:nth-child(1)').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(1)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(1) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(1) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(2)').css({'display':'none'})
        $('.tile-container .box:nth-child(3)').css({'display':'none'})
        $('.tile-container .box:nth-child(4)').css({'display':'none'})
        $('.tile-container .box:nth-child(5)').css({'display':'none'})
        $('.tile-container .box:nth-child(6)').css({'display':'none'})
        $('.tile-container .box:nth-child(7)').css({'display':'none'})
        $('.tile-container .box:nth-child(8)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
}})

//Second Child: Funding
var timer2;
$('.tile-container .box:nth-child(2)').hover(function() {
  timer2 = setTimeout(function() {
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(2)').css({'grid-row':'span 2'});
        $('.tile-container .box:nth-child(2) .overlay').css({'opacity':'1'});
        
        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 5'});

        $('.tile-container .box:nth-child(5)').css({'grid-row':'span 1', 'grid-column':'span 3'});
        $('.tile-container .box:nth-child(5) h2').css({'transform':'rotate(0deg)', 'bottom':'0px'});

        $('.tile-container .box:nth-child(6)').css({'grid-row':'span 1'});
        $('.tile-container .box:nth-child(6) h2').css({'font-size':'90%','transform':'rotate(0deg)', 'left':'0px', 'right':'0px'});

        $('.tile-container .box:nth-child(2) h2').css({'display':'none'})
        
    }
  }, 100);
}, function() {
  clearTimeout(timer2);
})

$('.tile-container .box:nth-child(2)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(2)').css({'grid-row':'span 1'});
        $('.tile-container .box:nth-child(2) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

        $('.tile-container .box:nth-child(5)').css({'grid-row':'span 2', 'grid-column':'span 2'});
        $('.tile-container .box:nth-child(5) h2').css({'transform':'rotate(-90deg)', 'bottom':'-80px'});

        $('.tile-container .box:nth-child(6)').css({'grid-row':'span 2'});
        $('.tile-container .box:nth-child(6) h2').css({'font-size':'150%','transform':'rotate(-90deg)', 'left':'92px', 'right':'-100%'});

        $('.tile-container .box:nth-child(2) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(2) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(2)').css({'grid-row':'span 1'});
      $('.tile-container .box:nth-child(2) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

      $('.tile-container .box:nth-child(5)').css({'grid-row':'span 2', 'grid-column':'span 2'});
      $('.tile-container .box:nth-child(5) h2').css({'transform':'rotate(-90deg)', 'bottom':'-80px'});

      $('.tile-container .box:nth-child(6)').css({'grid-row':'span 2'});
      $('.tile-container .box:nth-child(6) h2').css({'font-size':'150%','transform':'rotate(-90deg)', 'left':'92px', 'right':'-100%'});

      $('.tile-container .box:nth-child(2) h2').css({'display':'block'})
  }
}})

$('.tile-container .box:nth-child(2)').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(2)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(2) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(2) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(1)').css({'display':'none'})
        $('.tile-container .box:nth-child(3)').css({'display':'none'})
        $('.tile-container .box:nth-child(4)').css({'display':'none'})
        $('.tile-container .box:nth-child(5)').css({'display':'none'})
        $('.tile-container .box:nth-child(6)').css({'display':'none'})
        $('.tile-container .box:nth-child(7)').css({'display':'none'})
        $('.tile-container .box:nth-child(8)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
}})


$('.tile-container .box:nth-child(2) .overlay .x').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(2)').css({'grid-row': 'span 1', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(2) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(2) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(1)').css({'display':'grid'})
        $('.tile-container .box:nth-child(3)').css({'display':'grid'})
        $('.tile-container .box:nth-child(4)').css({'display':'grid'})
        $('.tile-container .box:nth-child(5)').css({'display':'grid'})
        $('.tile-container .box:nth-child(6)').css({'display':'grid'})
        $('.tile-container .box:nth-child(7)').css({'display':'grid'})
        $('.tile-container .box:nth-child(8)').css({'display':'grid'})
        $('.tile-container .box:nth-child(9)').css({'display':'grid'})
        $('.tile-container .box:nth-child(10)').css({'display':'grid'})


        $('.x').css({'display':'none'})
    }

}})


//Third Child: Our People
var timer3;
$('.tile-container .box:nth-child(3)').hover(function() {
  timer3 = setTimeout(function() {
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(3)').css({'grid-column':'span 3'});
        $('.tile-container .box:nth-child(3) .overlay').css({'opacity':'1'}); 
        
        $('.tile-container .box:nth-child(2)').css({'grid-column':'span 4'});
        
        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 5'});

        $('.tile-container .box:nth-child(3) h2').css({'display':'none'})
        
    }
  }, 100);
}, function() {
  clearTimeout(timer3);
})

$('.tile-container .box:nth-child(3)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(3)').css({'grid-column':'span 2'});
        $('.tile-container .box:nth-child(3) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(2)').css({'grid-column':'span 5'});

        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

        $('.tile-container .box:nth-child(3) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(3) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(3)').css({'grid-column':'span 2'});
      $('.tile-container .box:nth-child(3) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(2)').css({'grid-column':'span 5'});

      $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

      $('.tile-container .box:nth-child(3) h2').css({'display':'block'})
  }
}})

$('.tile-container .box:nth-child(3)').click(function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(3)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(3) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(3) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(1)').css({'display':'none'})
        $('.tile-container .box:nth-child(2)').css({'display':'none'})
        $('.tile-container .box:nth-child(4)').css({'display':'none'})
        $('.tile-container .box:nth-child(5)').css({'display':'none'})
        $('.tile-container .box:nth-child(6)').css({'display':'none'})
        $('.tile-container .box:nth-child(7)').css({'display':'none'})
        $('.tile-container .box:nth-child(8)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
})


//Fourth Child: Our Offer, Our Ambition
var timer4;
$('.tile-container .box:nth-child(4)').hover(function() {
  timer4 = setTimeout(function() {
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(4)').css({'grid-row':'span 3'});
        $('.tile-container .box:nth-child(4) .overlay').css({'opacity':'1'}); 
        
        $('.tile-container .box:nth-child(7)').css({'grid-column':'span 2'});
        $('.tile-container .box:nth-child(7) h2').css({'font-size':'90%',});

        $('.tile-container .box:nth-child(4) h2').css({'display':'none'})
    }
  }, 100);
}, function() {
  clearTimeout(timer4);
})

$('.tile-container .box:nth-child(4)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(4)').css({'grid-row':'span 2'});
        $('.tile-container .box:nth-child(4) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(7)').css({'grid-column':'span 8'});
        $('.tile-container .box:nth-child(7) h2').css({'font-size':'150%',});

        $('.tile-container .box:nth-child(4) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(4) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(4)').css({'grid-row':'span 2'});
      $('.tile-container .box:nth-child(4) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(7)').css({'grid-column':'span 8'});
      $('.tile-container .box:nth-child(7) h2').css({'font-size':'150%',});

      $('.tile-container .box:nth-child(4) h2').css({'display':'block'})
  }
}})

$('.tile-container .box:nth-child(4)').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(4)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(4) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(4) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(1)').css({'display':'none'})
        $('.tile-container .box:nth-child(2)').css({'display':'none'})
        $('.tile-container .box:nth-child(3)').css({'display':'none'})
        $('.tile-container .box:nth-child(5)').css({'display':'none'})
        $('.tile-container .box:nth-child(6)').css({'display':'none'})
        $('.tile-container .box:nth-child(7)').css({'display':'none'})
        $('.tile-container .box:nth-child(8)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
}})


//Fifth Child: Crisis and Resilience
var timer5;
$('.tile-container .box:nth-child(5)').hover(function() {
  timer5 = setTimeout(function() {
    if (window.innerWidth >= 1035){

        //Expand
        $('.tile-container .box:nth-child(5)').css({'grid-row': 'span 3', 'grid-column':'span 3'});

        //Change flow to horizontal
        $('.tile-container .box:nth-child(5) .overlay').css({'display':'inline-block'});
        $('.tile-container .box:nth-child(5) .overlay p').css({'height':'66%','overflow':'hidden', 'white-space':'pre-line'});
        $('.tile-container .box:nth-child(5) .overlay a').css({'position':'absolute', 'bottom':'15px', 'text-align':'center', 'width':'100%', 'left':'0'});
        
        //Open
        $('.tile-container .box:nth-child(5) .overlay').css({'opacity':'1'});    

        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 5'});

        $('.tile-container .box:nth-child(7)').css({'grid-column':'span 5'});

        $('.tile-container .box:nth-child(5) h2').css({'display':'none'})
        
    }
  }, 100);
}, function() {
  clearTimeout(timer5);
})

$('.tile-container .box:nth-child(5)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(5)').css({'grid-row':'span 2', 'grid-column':'span 2'});
        $('.tile-container .box:nth-child(5) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

        $('.tile-container .box:nth-child(7)').css({'grid-column':'span 8'});

        $('.tile-container .box:nth-child(5) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(5) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(5)').css({'grid-row':'span 2', 'grid-column':'span 2'});
      $('.tile-container .box:nth-child(5) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

      $('.tile-container .box:nth-child(7)').css({'grid-column':'span 8'});

      $('.tile-container .box:nth-child(5) h2').css({'display':'block'})
  }
}})

$('.tile-container .box:nth-child(5)').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(5)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(5) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(5) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(1)').css({'display':'none'})
        $('.tile-container .box:nth-child(2)').css({'display':'none'})
        $('.tile-container .box:nth-child(3)').css({'display':'none'})
        $('.tile-container .box:nth-child(4)').css({'display':'none'})
        $('.tile-container .box:nth-child(6)').css({'display':'none'})
        $('.tile-container .box:nth-child(7)').css({'display':'none'})
        $('.tile-container .box:nth-child(8)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
}})


//Sixth Child: Our Preformance
var timer6;
$('.tile-container .box:nth-child(6)').hover(function() {
  timer6 = setTimeout(function() {
    if (window.innerWidth >= 1035){

        //Expand
        $('.tile-container .box:nth-child(6)').css({'grid-row':'span 3', 'grid-column':'span 3'});

        //Change flow to horizontal
        $('.tile-container .box:nth-child(6) .overlay').css({'display':'inline-block'});
        $('.tile-container .box:nth-child(6) .overlay p').css({'height':'66%','overflow':'hidden', 'white-space':'pre-line'});
        $('.tile-container .box:nth-child(6) .overlay a').css({'position':'absolute', 'bottom':'15px', 'text-align':'center', 'width':'100%', 'left':'0'});
        
        //Open
        $('.tile-container .box:nth-child(6) .overlay').css({'opacity':'1'});

        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 5'});

        $('.tile-container .box:nth-child(7)').css({'grid-column':'span 7'});

        $('.tile-container .box:nth-child(8)').css({'grid-column':'span 2'});

        $('.tile-container .box:nth-child(6) h2').css({'display':'none'})
        
    }
  }, 100);
}, function() {
  clearTimeout(timer6);
})

$('.tile-container .box:nth-child(6)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(6)').css({'grid-row':'span 2', 'grid-column':'span 2'});
        $('.tile-container .box:nth-child(6) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

        $('.tile-container .box:nth-child(7)').css({'grid-column':'span 8'});

        $('.tile-container .box:nth-child(8)').css({'grid-column':'span 4'});

        $('.tile-container .box:nth-child(6) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(6) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(6)').css({'grid-row':'span 2', 'grid-column':'span 2'});
      $('.tile-container .box:nth-child(6) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

      $('.tile-container .box:nth-child(7)').css({'grid-column':'span 8'});

      $('.tile-container .box:nth-child(8)').css({'grid-column':'span 4'});

      $('.tile-container .box:nth-child(6) h2').css({'display':'block'})
  }
}})

$('.tile-container .box:nth-child(6)').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(6)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(6) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(6) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(1)').css({'display':'none'})
        $('.tile-container .box:nth-child(2)').css({'display':'none'})
        $('.tile-container .box:nth-child(3)').css({'display':'none'})
        $('.tile-container .box:nth-child(4)').css({'display':'none'})
        $('.tile-container .box:nth-child(5)').css({'display':'none'})
        $('.tile-container .box:nth-child(7)').css({'display':'none'})
        $('.tile-container .box:nth-child(8)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
}})


//Seventh Child: Innovation
var timer7;
$('.tile-container .box:nth-child(7)').hover(function() {
  timer7 = setTimeout(function() {
    if (window.innerWidth >= 1035){

        //Expand
        $('.tile-container .box:nth-child(7)').css({'grid-row': 'span 2'});

        //Change flow to horizontal
        $('.tile-container .box:nth-child(7) .overlay').css({'display':'inline-block'});
        $('.tile-container .box:nth-child(7) .overlay p').css({'height':'66%','overflow':'hidden', 'white-space':'pre-line'});
        $('.tile-container .box:nth-child(7) .overlay a').css({'position':'absolute', 'bottom':'15px', 'text-align':'center', 'width':'100%', 'left':'0'});
        
        //Open
        $('.tile-container .box:nth-child(7) .overlay').css({'opacity':'1'});
        
        $('.tile-container .box:nth-child(4)').css({'grid-row': 'span 1'});

        $('.tile-container .box:nth-child(5)').css({'grid-row': 'span 1'});
        $('.tile-container .box:nth-child(5) h2').css({'font-size': '90%','transform':'rotate(0deg)', 'bottom':'0px'});

        $('.tile-container .box:nth-child(7) h2').css({'display':'none'})
        
    }
  }, 100);
}, function() {
  clearTimeout(timer7);
})

$('.tile-container .box:nth-child(7)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(7)').css({'grid-row': 'span 1'});
        $('.tile-container .box:nth-child(7) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(4)').css({'grid-row': 'span 2'});

        $('.tile-container .box:nth-child(5)').css({'grid-row': 'span 2'});
        $('.tile-container .box:nth-child(5) h2').css({'font-size': '150%', 'transform':'rotate(-90deg)', 'bottom':'-80px'});

        $('.tile-container .box:nth-child(7) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(7) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(7)').css({'grid-row': 'span 1'});
      $('.tile-container .box:nth-child(7) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(4)').css({'grid-row': 'span 2'});

      $('.tile-container .box:nth-child(5)').css({'grid-row': 'span 2'});
      $('.tile-container .box:nth-child(5) h2').css({'font-size': '150%', 'transform':'rotate(-90deg)', 'bottom':'-80px'});

      $('.tile-container .box:nth-child(7) h2').css({'display':'block'})
  }
}})

$('.tile-container .box:nth-child(7)').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(7)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(7) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(7) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(1)').css({'display':'none'})
        $('.tile-container .box:nth-child(2)').css({'display':'none'})
        $('.tile-container .box:nth-child(3)').css({'display':'none'})
        $('.tile-container .box:nth-child(4)').css({'display':'none'})
        $('.tile-container .box:nth-child(5)').css({'display':'none'})
        $('.tile-container .box:nth-child(6)').css({'display':'none'})
        $('.tile-container .box:nth-child(8)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
}})


$('.tile-container .box:nth-child(7) .overlay .x').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(7)').css({'grid-row': 'span 1', 'grid-column': 'span 2'})
        $('.tile-container .box:nth-child(7) .overlay').css({'opacity':'0'})
        $('.tile-container .box:nth-child(7) h2').css({'display':'grid'})

        $('.tile-container .box:nth-child(1)').css({'display':'grid'})
        $('.tile-container .box:nth-child(2)').css({'display':'grid'})
        $('.tile-container .box:nth-child(3)').css({'display':'grid'})
        $('.tile-container .box:nth-child(4)').css({'display':'grid'})
        $('.tile-container .box:nth-child(5)').css({'display':'grid'})
        $('.tile-container .box:nth-child(6)').css({'display':'grid'})
        $('.tile-container .box:nth-child(8)').css({'display':'grid'})
        $('.tile-container .box:nth-child(9)').css({'display':'grid'})
        $('.tile-container .box:nth-child(10)').css({'display':'grid'})


        $('.x').css({'display':'none'})
    }

}})


//Eigth Child: Awards
var timer8;
$('.tile-container .box:nth-child(8)').hover(function() {
  timer8 = setTimeout(function() {
    if (window.innerWidth >= 1035){
        //Expand
        $('.tile-container .box:nth-child(8)').css({'grid-row':'span 3'});
        
        //Change flow to horizontal
        $('.tile-container .box:nth-child(8) .overlay').css({'display':'inline-block'});
        $('.tile-container .box:nth-child(8) .overlay p').css({'height':'66%','overflow':'hidden', 'white-space':'pre-line'});
        $('.tile-container .box:nth-child(8) .overlay a').css({'position':'absolute', 'bottom':'15px', 'text-align':'center', 'width':'100%', 'left':'0'});
        
        //Open
        $('.tile-container .box:nth-child(8) .overlay').css({'opacity':'1'});

        $('.tile-container .box:nth-child(3)').css({'grid-row':'span 1'});
        $('.tile-container .box:nth-child(3) h2').css({'transform':'none', 'top':'0'});
        
        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 4'});

        $('.tile-container .box:nth-child(8) h2').css({'display':'none'})
        
    }
  }, 100);
}, function() {
  clearTimeout(timer8);
})

$('.tile-container .box:nth-child(8)').on({mouseleave: function(){
    if (window.innerWidth >= 1035){
        $('.tile-container .box:nth-child(8)').css({'grid-row':'span 1', 'grid-column':'span 4'});
        $('.tile-container .box:nth-child(8) .overlay').css({'opacity':'0'});

        $('.tile-container .box:nth-child(3)').css({'grid-row':'span 3'});
        $('.tile-container .box:nth-child(3) h2').css({'transform':'rotate(-90deg)', 'top':'-45px'});
        
        $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

        $('.tile-container .box:nth-child(8) h2').css({'display':'block'})
    }
}})

$('.tile-container .box:nth-child(8) a').on({click: function(){
  if (window.innerWidth >= 1035){
      $('.tile-container .box:nth-child(8)').css({'grid-row':'span 1', 'grid-column':'span 4'});
      $('.tile-container .box:nth-child(8) .overlay').css({'opacity':'0'});

      $('.tile-container .box:nth-child(3)').css({'grid-row':'span 3'});
      $('.tile-container .box:nth-child(3) h2').css({'transform':'rotate(-90deg)', 'top':'-45px'});
      
      $('.tile-container .box:nth-child(4)').css({'grid-column':'span 6'});

      $('.tile-container .box:nth-child(8) h2').css({'display':'block'})
  }
}})

$('.tile-container .box:nth-child(8)').on({click: function(){
    if (window.innerWidth < 1035){
        $('.tile-container .box:nth-child(8)').css({'grid-row': 'span 6', 'grid-column': 'span 4'})
        $('.tile-container .box:nth-child(8) h2').css({'display':'none'})
        $('.tile-container .box:nth-child(8) .overlay').css({'opacity':'1'})


        $('.tile-container .box:nth-child(1)').css({'display':'none'})
        $('.tile-container .box:nth-child(2)').css({'display':'none'})
        $('.tile-container .box:nth-child(3)').css({'display':'none'})
        $('.tile-container .box:nth-child(4)').css({'display':'none'})
        $('.tile-container .box:nth-child(5)').css({'display':'none'})
        $('.tile-container .box:nth-child(6)').css({'display':'none'})
        $('.tile-container .box:nth-child(7)').css({'display':'none'})
        $('.tile-container .box:nth-child(9)').css({'display':'none'})
        $('.tile-container .box:nth-child(10)').css({'display':'none'})
        $('.x').css({'display':'block'})

    }
}})

    $(document).ready(function () {
        var a1 = $('.section_1 h2')
        var a2 = $('.section_3 h2')
        var a3 = $('.section_4 h3')
        $(a1).on('click', function(){
            
            console.log('.section_1 h2')
            
            $(this).animate({
                width : '50%',
                marginLeft : "450px", 
                opasity: .5
            }, 1000).animate({
               width : '50%',
               marginLeft : "150px", 
               opasity: .5
           }, 1000).animate({
            width : '50%',
            marginLeft : "300px", 
            opasity: .5
        }, 1000)
        })
        $(a2).on('click', function(){
            
            console.log('.section_1 h2')
            
            $(this).animate({
                width : '50%',
                marginLeft : "450px", 
                opasity: .5
            }, 1000).animate({
               width : '50%',
               marginLeft : "150px", 
               opasity: .5
           }, 1000).animate({
            width : '50%',
            marginLeft : "300px", 
            opasity: .5
        }, 1000)
        })
        $(a3).on('click', function(){
            
            console.log('.section_1 h2')
            
            $(this).animate({
                width : '50%',
                marginLeft : "450px", 
                opasity: .5
            }, 1000).animate({
               width : '50%',
               marginLeft : "150px", 
               opasity: .5
           }, 1000).animate({
            width : '50%',
            marginLeft : "300px", 
            opasity: .5
        }, 1000)
        })
    });
    $(document).ready(function () {
        var $links = $('.header_top a')
        $links.on('click', function(e){
            e.preventDefault()
           $links.removeClass('nav-link')
            var id = $(this).addClass('nav-link').attr('href')
            var href = $(id).offset().top -60
            $('html, body').animate({
                scrollTop : href
            }, 500)
        })
        $(window).scroll(function(){
            var scroll_top = $(this).scrollTop()
      
        $links.each(function(){
            var target = $(this).attr('href')
            var href = $(target).offset().top -10
            if(scroll_top >= href){
               $links.removeClass('nav-link')
               $(this).addClass('nav-link')
            }
        })
       })
    });

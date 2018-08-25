function leadingZero(e) {
    return (e < 10) ? '0' + e : e;
}
function showClock()
{
    const currentDate = new Date();
    const element = document.querySelector("time");
    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

    element.innerHTML = "<span id='dzien_tygodnia'style='font-size:20px;'>Dzisiaj jest " + days[currentDate.getDay() - 1] + "</span><br/>"+leadingZero(currentDate.getDate()) + "/" + leadingZero((currentDate.getMonth() + 1)) + "/" + currentDate.getFullYear() + "<br/>" +
        leadingZero(currentDate.getHours()) + ":" + leadingZero(currentDate.getMinutes()) + ":" + leadingZero(currentDate.getSeconds());
    

    setTimeout(function ()
    {
        showClock();
    },1000)
}


$(document).ready(
    function () {
        showClock();
        if ($(".podpis", this).hasClass("hoverOff"))
        {

          

           $(".kafelek1",this).on("mouseenter",function () {
              if($(".podpis",this).hasClass("hoverOff"))
                $(".podpis", this).animate(
                    {
                        "right": 30,


                    }, 1000, function () {
                        

                    }).addClass("hoverOn").removeClass("hoverOff");
               
               
            })
            
            $(".kafelek").mouseenter(function () {
                if($(".podpis",this).hasClass("hoverOff"))
                $(".podpis", this).animate(
                    {
                        "left": 30,


                    }, 1000, function () {
                        
                    }).addClass("hoverOn").removeClass("hoverOff");

            })
        }

        $(".kafelek1").mouseleave(function () {
            if ($(".podpis", this).hasClass("hoverOn")) {
                $(".podpis", this).animate(
                    {
                        "right": 0
                    }, 1000, function () {
                        $(this).removeClass("hoverOn").addClass("hoverOff");
                    });
            }
            })
    

        $(".kafelek").mouseleave(function () {
            if ($(".podpis", this).hasClass("hoverOn"))
            {
                $(".podpis", this).animate(
                    {
                        "left": 0
                    }, 1000, function () {
                        $(this).removeClass("hoverOn").addClass("hoverOff");
                    });
            }
            })
        $(".kafel", this).click(function (e)
        {
            var content = $(".kafelek3");
            const href = $(this).attr('href');
            $.ajax({
                url: href,
                
                beforeSend: function () {
                    
                    content.empty();
                    content.append('<i class="icon-spin6 ikona"></i>');
                },
                success: function (result) {

                    content.html(result);
                    
                },
                error: function () {
                    content.html("<p>Przepraszamy, ale strony nie udało się załadować.</p>").append('<i class="icon-emo-cry ikona"></i>');
                    
                },
                complete: function () {
                    content.remove('<i class="icon-spin6 ikona"></i>');
                }

            });
            e.preventDefault();
        })
       

    })


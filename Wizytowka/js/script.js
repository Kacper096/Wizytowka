$(document).ready(
    function () {

        if ($(".podpis", this).hasClass("hoverOff"))
        {
            $(".kafelek1").hover(function () {
                $(".podpis", this).animate(
                    {
                        "right": 30,


                    }, 1000, function () {
                        $(this).removeClass("hoverOff");

                    }).addClass("hoverOn");

            })

            $(".kafelek").hover(function () {
                $(".podpis", this).animate(
                    {
                        "left": 30,


                    }, 1000, function () {
                        $(this).removeClass("hoverOff")
                    }).addClass("hoverOn");;

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

        

    })
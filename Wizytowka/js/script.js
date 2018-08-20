$(document).ready(
    function () {
        $(".kafelek1").hover(function () {
            $(".podpis", this).animate(
                {
                    "right": 30,
                    

                }, 1000).removeClass("hoverOff").addClass("hoverOn");
           
        })

        $(".kafelek1").mouseleave(function () {
            $(".podpis", this).animate(
                {
                    "right": 0
                }, 1000).removeClass("hoverOn").addClass("hoverOff");
        })
    })
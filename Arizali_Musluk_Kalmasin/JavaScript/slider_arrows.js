const left_arrow=document.querySelector("#to_left");
const right_arrow=document.querySelector("to_right");
const area=document.querySelector("#slider > ul");
const area_total_width=area.scrollWidth;
const one_part=area.querySelector("li").clientWidth;

left_arrow.addEventListener("click",event=>
{
    if(area.scrollLeft===0)
    {
        area.scrollTo
        ({
            top:0,
            left:area_total_width,
            behavior:"smooth"
        } )
    }
    else
    {
        area.scrollTo
        ({
            top:0,
            left:area.scrollLeft - 3*one_part,
            behavior:"smooth"
        })
    }
})

right_arrow.addEventListener("click",event=>{
    if(area.scrollLeft>=area_total_width)
    {
        area.scrollTo
        ({
            top:0,
            left:0,
            behavior:"smooth"
       })
    }
    else{
        area.scrollTo({
            top:0,
            left:area_total_width + 3*one_part,
            behavior:"smooth"
        })
    }
})

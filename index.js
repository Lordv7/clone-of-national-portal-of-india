//carosel:

i=0
let a=["1.jpeg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg",]
function fun()
{
    let iref=document.getElementById("simg")
    i++
    if(i>=a.length)
    {
        i=0
    }
    iref.src=a[i]
}
setInterval(fun,2000)



//hide and show


function hide_and_display()
{   var adv_search=document.getElementById('main_smenu')
    if(adv_search.style.display=="block")
    {
        adv_search.style.display="none"
        
    }
    else{

        adv_search.style.display="block"
    }
}
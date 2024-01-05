const button_menu=document.querySelector("#button_menu");
const aside=document.querySelector('aside');
const body=document.body;
const normal_state=
{
    aside:aside.style.display,
    body:body.style.grid
}
const menu_acitve_state=
{
    aside:'none',
    body:`
        "top top"
        "main main"
        "footer footer"`
    
};
button_menu.addEventListener("click",event=>
{
    const {currentTarget}=event
    if(aside.style.display===normal_state.aside)
    {
        aside.style.display=menu_acitve_state.aside;
        body.style.grid=menu_acitve_state.body;
    }
    else
    {
        aside.style.display=normal_state.aside;
        body.style.grid=normal_state.body;
    }
})
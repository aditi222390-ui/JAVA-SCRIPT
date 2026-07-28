const btn = document.getElementById("btn");

btn.addEventListener("mouseover",function()
{
    btn.style.background="Red";
})

document.addEventListener("contextmenu", e => e.preventDefault());



["copy", "cut", "paste"].forEach(eventName => {
document.addEventListener(eventName, e => e.preventDefault());
});
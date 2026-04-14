let parent=document.querySelector("#parent");
let child=document.querySelector("#child");
child.addEventListener("click",function(){
    console.log("child clicked");
});
parent.addEventListener("click",function(){
    console.log("parent  clicked");
}, true
);

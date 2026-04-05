let input=document.querySelectorAll("input");
let form=document.querySelector("form");
let main=document.querySelector("#main");


form.addEventListener("submit",function(dets){
    dets.preventDefault();

    let card=document.createElement("div");
    card.classList.add("card");

    let profile=document.createElement("div");
    profile.classList.add("profile");

    let img=document.createElement("img");
    img.setAttribute("src","img.jpg");

    let h3=document.createElement("h3");
    h3.textContent=input[0].value;

    let h5=document.createElement("h5");
    h5.textContent=input[1].value;

    let p=document.createElement("p");
    p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quod assumenda magni vel voluptas. Blanditiis?"

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

});

function media(){
    var medias = document.querySelector("#medias");
    medias.classList.toggle("media");
    medias.classList.toggle("media-active");

    var a = document.querySelector(".a");
    var b = document.querySelector(".b");
    var c = document.querySelector(".c");
    var d = document.querySelector(".d");
    var e = document.querySelector(".e");

    console.log(a)

    a.classList.toggle("link-visible");
    a.classList.toggle("link-invisible");

    b.classList.toggle("link-visible");
    b.classList.toggle("link-invisible");

    c.classList.toggle("link-visible");
    c.classList.toggle("link-invisible");

    d.classList.toggle("link-visible");
    d.classList.toggle("link-invisible");

    e.classList.toggle("link-visible");
    e.classList.toggle("link-invisible");
}
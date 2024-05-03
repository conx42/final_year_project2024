const left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    editor = document.querySelector(".editor");


    const drag = (e)=>{
        e.preventDefault();
        document.selection ? document.selection.empty() :
        window.getSelection().removeAllRanges();
        left.style.width = (e.pageX -bar.offsetWidth / 3) + "px";
        editor.resize();
    }

    bar.addEventListener("mousedown", ()=>{
        document.addEventListener("mousemove", drag);
    })
    bar.addEventListener("mouseup", ()=>{
        document.removeEventListener("mousemove", drag);
    })
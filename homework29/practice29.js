let text = document.getElementById('text');
text.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

text.addEventListener('mousedown',function(e){
    e.preventDefault();
});
document.addEventListener('keydown', function(event){

    if ((event.ctrlKey && (event.code == "KeyE" || event.code == 'NumpadAdd'))) {
        event.preventDefault();
        let elem = document.getElementById('task1').nextElementSibling;
      
        if(event.code === "KeyE" && elem.nodeName === 'DIV'){
        let box = document.createElement('textarea');
        box.textContent = elem.textContent;
        elem.replaceWith(box);
    }
     else if (event.code == 'NumpadAdd' && elem.nodeName === 'TEXTAREA') {
        let divBox = document.createElement('div');
        divBox.textContent = elem.value;
        elem.replaceWith(divBox);
    }
    }});

/*
var element = document.getElementById('element');
var resize = document.getElementById('resize');
resize.addEventListener('mousedown', initResize, false);

function initResize(e) {
   window.addEventListener('mousemove', Resize, false);
   window.addEventListener('mouseup', stopResize, false);
}
function Resize(e) {
   element.style.width = (e.clientX - element.offsetLeft) + 'px';
   element.style.height = (e.clientY - element.offsetTop) + 'px';
}
function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}
*/
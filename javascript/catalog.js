var  link4= document.querySelector(".servicesandmap a img");

link4.addEventListener("click", function (s) {
    s.preventDefault();

    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    var modalWin3 = document.getElementById('popupWin3');
    modalWin3.style.display = 'block';

    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin3.style.display = 'none'; // делаем окно невидимым
    };

});

function hideA()
{
    a = document.getElementById("popupWin");
    b=document.getElementById("popupWin2");
    a.style.display = "none";
    b.style.display = "none";
};

function showModalWin() {

    var modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';

};

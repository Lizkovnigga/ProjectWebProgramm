var  link= document.querySelector(".aboutcompany a");

link.addEventListener("click", function (e) {
    e.preventDefault();

    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    var modalWin2 = document.getElementById('popupWin2');
    modalWin2.style.display = 'block';

    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin2.style.display = 'none'; // делаем окно невидимым
    };

});

function showModalWin() {

    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    var modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';

    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = 'none'; // делаем окно невидимым
    };
}

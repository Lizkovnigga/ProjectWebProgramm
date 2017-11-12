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

var  link5= document.querySelector(".plus");

link5.addEventListener("click", function (k) {
    k.preventDefault();
});

var  link6= document.querySelector(".minus");

link6.addEventListener("click", function (k) {
    k.preventDefault();
});

var  link7= document.querySelector(".plus1");

link7.addEventListener("click", function (k) {
    k.preventDefault();
});

var  link8= document.querySelector(".minus1");

link8.addEventListener("click", function (k) {
    k.preventDefault();
});

var  link9= document.querySelector(".plus2");

link9.addEventListener("click", function (k) {
    k.preventDefault();
});

var  link10= document.querySelector(".minus2");

link10.addEventListener("click", function (k) {
    k.preventDefault();
});

var  link11= document.querySelector(".plus3");

link11.addEventListener("click", function (k) {
    k.preventDefault();
});

var  link12= document.querySelector(".minus3");

link12.addEventListener("click", function (k) {
    k.preventDefault();
});

function editinput(p){
    var test=document.getElementById("counter").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) - 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter").innerHTML=test;
};
function editinput2(p){
    var test=document.getElementById("counter").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) + 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter").innerHTML=test;
};

function editinput3(p){
    var test=document.getElementById("counter1").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) - 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter1").innerHTML=test;
};
function editinput4(p){
    var test=document.getElementById("counter1").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) + 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter1").innerHTML=test;
};

function editinput5(p){
    var test=document.getElementById("counter2").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) - 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter2").innerHTML=test;
};
function editinput6(p){
    var test=document.getElementById("counter2").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) + 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter2").innerHTML=test;
};
function editinput7(p){
    var test=document.getElementById("counter3").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) - 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter3").innerHTML=test;
};
function editinput8(p){
    var test=document.getElementById("counter3").innerHTML;
    if(p==1 || p>0){ test=parseInt(test) + 1; };
    if(test==0 || test<0){
        test=0;
    }
    document.getElementById("counter3").innerHTML=test;
};
var  link21= document.querySelector(".closemodalwin");

link21.addEventListener("click", function (q) {
    q.preventDefault();
});

var  link20=document.querySelector(".usernavigationprivate2");

link20.addEventListener("click", function (q) {
    q.preventDefault();
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
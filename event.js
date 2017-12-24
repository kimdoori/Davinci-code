/*마우스를 올려놓고 올려놓지 않을때의 함수
투명도를 조절해서 시각적으로 잘 알아볼 수 있게 한다.
*/
function overCB() { //맞추기 버튼에 올려놓을 때
    document.getElementById("correct").style.opacity = 1;
}

function outCB() { //맞추기 버튼에 올려놓지 않을 때
    document.getElementById("correct").style.opacity = 0.7;
}
function overBM() { //곰돌이미니언 버튼에 올려놓을 때
    document.getElementById("곰돌이미니언").style.opacity = 1;
}

function outBM() { //곰돌이미니언 버튼에 올려놓지 않을 때
    document.getElementById("곰돌이미니언").style.opacity = 0.8;
}


function overMenu() { //메뉴 버튼에 올려놓을 때
    document.getElementById("메뉴").style.opacity = 1;
}

function outMenu() { //메뉴 버튼에 올려놓지 않을 때
    document.getElementById("메뉴").style.opacity = 0.7;
}

function overPage1() { //페이지1 버튼에 올려놓을 때
    document.getElementById("페이지1").style.opacity = 1;
}

function outPage1() { //페이지1 버튼에 올려놓지 않을 때
    document.getElementById("페이지1").style.opacity = 0.7;
}

function overPage2() { //페이지2 버튼에 올려놓을 때
    document.getElementById("페이지2").style.opacity = 1;
}

function outPage2() { //페이지2 버튼에 올려놓지 않을 때
    document.getElementById("페이지2").style.opacity = 0.7;
}

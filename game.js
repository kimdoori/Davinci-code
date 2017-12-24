var DavinchiNumber; //사용자가 선택한 타일의 숫자
var DavinchiColor; //사용자가 선택한 타일의 색깔
var YourNumber; //사용자가 고른 숫자
var YourColor; //사용자가 고른 색깔
var ComNumber = new Array(10); //사용자가 맞춰야하는 타일의 숫자
var ComColor = new Array(10); //사용자가 맞춰야하는 타일의 색
var fun = new Array(10); //선택한 타일이 이미 맞춘 타일인지 판단하기 위한 변수
var heart = 8; //목숨
var bananasize = 0; //목숨이 줄어드는 것을 나타낼 때 쓸 변수
var score = 0; //점수
var count = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); //랜덤숫자가 겹치는 횟수를 셀 배열
var i = 0; //ComNumber배열의 인자
var j = 0; //count 배열의 인자
var timer = 30; //시간초
var doo;//숫자와 색을 맞췄을 때 이미지를 바꾸기위해 필요한 변수

var Davincicode = setTimeout(davinci, 10); //처음 시작할 때 davinci함수를 실행한다.
var myVar = setInterval(myTimer, 1000);

function myTimer() { //시간이 가는 것을 나타낼 함수

    document.getElementById("타이머").innerHTML = timer; //말풍선 안의 시간을 바꾼다.
    timer = timer - 1; //1초마다 숫자를 1씩 뺀다.
    if (timer == 9) { //9초마다 시간초를 빨간색으로 바꾼다.
        document.getElementById("타이머").style.color = "red";
    } //if문
    if (timer == 29) { //시간초가 30이 되면 다시 검은색으로 바꾼다.
        document.getElementById("타이머").style.color = "black";
    } //if문
    if (timer == 0) { //30초 지날때마다 목숨이 1 감소한다.
        heart = heart - 1;
        bananasize = bananasize + 42; //목숨을 덮는 이미지의 크기를 늘려 바나나를 하나 가린다.
        document.getElementById("바나나덮개").style.width = bananasize + "px";

        if (heart == 0) { //목숨다하면 진 화면으로
            location.href = "lost.html";
        }//if문
        timer = 30;//타이머가 0이 되면 다시 30으로
    } //if문
}//myTimer()
/*비밀 코드 10개를 발생시킨다.*/
do {
    ComNumber[i] = Math.floor(Math.random() * 12); //0부터 11까지의 랜덤수
    for (j = 0; j < 12; j++) { //발생된 랜덤 수에 맞는 count배열 방에 있는 수를 증가시킨다.(랜덤 수가 2라면 count[2]++)
        if (ComNumber[i] == j) {
            count[j] = count[j] + 1;

            if (count[j] > 2) { //겹치는 숫자가 2개보다 많다면 다시 랜덤 숫자를 받는다.
                count[j] = 2;
                continue;
            }//if문
        } //if문
    } //for문
    i++ //a배열의 인자 1증가
} //do
while (i < 10);


/*비밀코드 순서대로 정렬*/
var t = 0; //배열을 정렬하기 위한 변수
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 9; j++) {
        if (ComNumber[j] > ComNumber[j + 1]) { //연달아 있는 두 수를 비교해서 앞의 수가 크다면
            t = ComNumber[j];
            ComNumber[j] = ComNumber[j + 1];
            ComNumber[j + 1] = t;
            //위치 변경
        } //if문
    } //for문
} //for문

/*비밀코드의 색깔을 정한다.*/
var cc = 0; //비밀코드가 색을 어떻게 가져야할지 판단하는 변수
for (var i = 0; i < 10; i++) {
    if (count[ComNumber[i]] == 2) {//겹치는 숫자가 두개있다면
        cc++;
        if (cc == 1) {//겹치는 코드중 첫번째는 검은색을 넣는다.(0은 검정)
            ComColor[i] = 0;
        } else if (cc == 2) {//겹치는 코드중 두번째는 하얀색을 넣는다.(1은 하양)
            ComColor[i] = 1;
        }
        if (cc == 2) { //2번 다 쓰였다면 cc를 다시 0으로 초기화
            cc = 0;
        }
    } else {//겹치는 숫자가 없다면
        ComColor[i] = Math.floor(Math.random() * 2); //검정, 하양 중 랜점으로 갖는다
    }
} //for



function goto() {//메인화면에서 게임하기 버튼을 누르면 실행되는 함수
    location.href = "game.html";
}

function davinci() { //다빈치타일의 색깔을 판단하는 함수
    for (var i = 0; i < 10; i++) {
        var did = "da" + i;
        if (ComColor[i] == 1) {//하양(1)이라면 이미지를 하얀색미니언으로 바꾼다.
            document.getElementById(did).style.backgroundImage = "url('하양미니언.png')";
        }//if문
         else {//검정(0)이라면 이미지를 검은색미니언으로 바꾼다.
            document.getElementById(did).style.backgroundImage = "url('검정미니언.png')";
        }//else
    }//for

}//davinci()





function davinchi_0() { //1번째 다빈치 타일을 누르면 호출되는 함수-->사용자가 맞춰야할 숫자와 색(1번째 코드의 숫자와 색깔)을 davinchinumber에 넣는다.
    noclick();
    if (fun[0] == 2) {//fun에 2가 있다면 이미 맞춘 타일
        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {
        document.getElementById("n0").innerHTML = "<img src='손가락.png'>";//타일을 선택했다는 것을 알리기위해
        DavinchiNumber = ComNumber[0];
        DavinchiColor = ComColor[0];
        doo = 0; //숫자와 색을 맞췄을 때 이미지를 바꾸기위해 필요한 변수
    }//else

}

function davinchi_1() {//2번째 다빈치 타일을 누르면 호출되는 함수
    noclick();

    if (fun[1] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {
        document.getElementById("n1").innerHTML = "<img src='손가락.png'>";

        DavinchiNumber = ComNumber[1];
        DavinchiColor = ComColor[1];
        doo = 1;
    }//else
}

function davinchi_2() {//3번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[2] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {

        document.getElementById("n2").innerHTML = "<img src='손가락.png'>";

        DavinchiNumber = ComNumber[2];
        DavinchiColor = ComColor[2];
        doo = 2;
    }//else
}

function davinchi_3() {//4번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[3] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {

        document.getElementById("n3").innerHTML = "<img src='손가락.png'>";

        DavinchiNumber = ComNumber[3];
        DavinchiColor = ComColor[3];
        doo = 3;
    }//else
}

function davinchi_4() {//5번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[4] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
     else {

        document.getElementById("n4").innerHTML = "<img src='손가락.png'>";

        DavinchiNumber = ComNumber[4];
        DavinchiColor = ComColor[4];
        doo = 4;
    }//else
}

function davinchi_5() {//6번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[5] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {

        document.getElementById("n5").innerHTML = "<img src='손가락.png'>";

        DavinchiNumber = ComNumber[5];
        DavinchiColor = ComColor[5];
        doo = 5;

    }//else
}

function davinchi_6() {//7번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[6] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {
        document.getElementById("n6").innerHTML = "<img src='손가락.png'>";
        DavinchiNumber = ComNumber[6];
        DavinchiColor = ComColor[6];
        doo = 6;

    }//else
}

function davinchi_7() {//8번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[7] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {
        document.getElementById("n7").innerHTML = "<img src='손가락.png'>";
        DavinchiNumber = ComNumber[7];
        DavinchiColor = ComColor[7];
        doo = 7;

    }//else
}

function davinchi_8() {//9번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[8] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
    else {
        document.getElementById("n8").innerHTML = "<img src='손가락.png'>";

        DavinchiNumber = ComNumber[8];
        DavinchiColor = ComColor[8];
        doo = 8;
    }//else

}

function davinchi_9() {//10번째 다빈치 타일을 누르면 호출되는 함수
    noclick();
    if (fun[9] == 2) {//fun에 2가 있다면 이미 맞춘 타일

        alert("이미 맞추셨습니다. 다른 코드를 선택해주세요.");
    }//if
     else {
        document.getElementById("n9").innerHTML = "<img src='손가락.png'>";

        DavinchiNumber = ComNumber[9];
        DavinchiColor = ComColor[9];
        doo = 9;
    }//else
}

function noclick() {//다른 타일을 누르면 손가락 이미지를 없애기 위한 함수
    for (var i = 0; i < 10; i++)
        if (fun[i] != 2) {//fun에 2가 들어있다면 이미 맞춘 타일이므로 숫자를 지우면 안된다.
            document.getElementById("n" + i).innerHTML = "";
        }

}

function Color0() { //검은색 버튼을 누르면 호출되는 함수//yourcolor에 사용자가 고른 색을 넣는다. 0이면 검정, 1이면 하양
    YourColor = 0;
    document.getElementById("co1").style.opacity = 0.7;//하얀색 버튼을 더 투명하게 만든다.
    document.getElementById("co0").style.opacity = 1;//검은색 버튼이 눌린 것을 나타내기 위해 불투명하게 만든다.
}

function Color1() {//하얀색 버튼을 누르면 호출되는 함수//yourcolor에 사용자가 고른 색을 넣는다. 0이면 검정, 1이면 하양
    YourColor = 1;
    document.getElementById("co0").style.opacity = 0.7;//검은색 버튼을 더 투명하게 만든다.
    document.getElementById("co1").style.opacity = 1;//하얀색 버튼이 눌린 것을 나타내기 위해 불투명하게 만든다.
}

function number() { //사용자가 고른 숫자가 무엇인지 판단하는 함수이다.
    size = document.good.elements["number"].length; //radio의 총 경우의 수를 size에 저장한다.(0~11이니까 12)
    for (var i = 0; i < size; i++) {
        if (document.good.elements["number"][i].checked) { //사용자가 고른 숫자가 무엇인지 판단한다.
            YourNumber = document.good.elements["number"][i].value; //yournumber에 넣는다.
            break;
        }
    }
}

function Game() { //맞추기버튼을 누르면 호출되는 함수

    var gamecount = 0;//타일 몇개를 맞추었는지 판단하는 변수
    number(); //number()함수를 호출하여 사용자가 고른 숫자가 무엇인지 알아낸다.
    var tile = "da" + doo; //몇번째 타일을 넘어뜨리게 보여야하는지 알기 위해 필요한 변수
    document.getElementById("n" + doo).innerHTML = "";
    if (DavinchiNumber == YourNumber && DavinchiColor == YourColor) { //답이 맞으면 점수를 올리고 타일 사이즈를 변경하고 다시 선택하지 못하게 한다.
        alert("맞췄습니다 ^__^");
        score += timer + 70;//빨리 맞출수록 점수가 높게 올라간다.
        document.getElementById("score").innerHTML = score;
        document.getElementById(tile).style.height = "33px"; //사이즈를 변경하여 코드가 넘어진 것을 표현
        document.getElementById("n" + doo).innerHTML = DavinchiNumber;//타일 아래 맞춘 숫자를 표현
        fun[doo] = 2;//다시 선택하지 못하게 2를 넣는다 davinchi_숫자 함수에서 다룬다.

        for (var i = 0; i < 10; i++) {
            if (fun[i] == 2) //타일을 총 몇개 맞췄는지 판단
                gamecount++;
        }
        if (gamecount == 10) { //다 맞추면 최종점수를 알려주고 게임을 끝낸다.(이긴 화면으로)
            alert("당신의 최종 점수는 " + score + "점 입니다 ^~^");
            location.href = "win.html";
        }

    }
    else { //답이 틀리면 목숨을 1 감소시키고 목숨 이미지를 하나 덮는다.
        alert("틀렸습니다 T^T");
        heart = heart - 1;
        bananasize = bananasize + 42; //목숨을 덮는 이미지의 크기를 늘려 바나나를 하나 가린다.
        document.getElementById("바나나덮개").style.width = bananasize + "px";
        if (heart == 0) { //목숨다하면 최종점수를 알려주고 진 화면으로
            alert("당신의 최종 점수는 " + score + "점 입니다 ^~^");
            location.href = "lost.html";
        }

    }
    timer = 30;//맞추기 버튼을 누르면 타이머를 다시 30초로 바꾼다.

}

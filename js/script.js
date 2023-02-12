const wrap = document.getElementsByClassName('wrap')[0];
const box = document.getElementsByClassName('box')[0];
const typing1 = document.getElementsByClassName('typing1')[0];
const typing2 = document.getElementsByClassName('typing2')[0];
let image = document.getElementsByClassName('mate')[0];


new Typed('.typing1', {
    strings: ['<span><a href="javascript:write();">개소리팩토리<br>입장</a></span>'],
    typeSpeed: 100,
    showCursor: false,
});
function write() {
    wrap.style.top = '30%';
    box.style.top = '23%';
    typing1.style.display = 'none';
    new Typed('.typing2', {
        strings: ['<h2>개소리 작성</h2><input type=text id=dogesound placeholder=개소리><br><br><input type=text id=name placeholder=이름><br><br><input type=text id=tokenid placeholder=메이트번호 maxlength=5><br><br><button onclick=make();>제작</button>'],
        typeSpeed: 30,
        showCursor: false,
        bindInputFocusEvents: true,
    });
}
function make(){
    wrap.style.top = '50%';
    box.style.top = '40%';
    if(window.matchMedia( '(max-width: 600px)' ).matches){
        box.style.top = '35%';
    }
    typing2.style.display = 'none';

    var dogesound = document.getElementById('dogesound');
    var name = document.getElementById('name');
    var tokenid = document.getElementById('tokenid');
    var str = "dogesound="+dogesound.value+"&name="+name.value+"&tokenid="+tokenid.value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./save.php", true);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
            self.setTimeout("result()", 500);
        } else {
            console.log("Error");
        }
      }
    };
    
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
    xmlhttp.send(str);
}

function result(){
    new Typed('.typing3', {
        strings: ['','개소리 제작중...^2000', '개소리 제작완료<br><br><button onclick=draw()>개소리 받기</button>'],
        typeSpeed: 40,
        backSpeed: 0,
        showCursor: false,
    });
}

function draw() {
    var dogesound = document.getElementById('dogesound');
    var name = document.getElementById('name');
    var tokenid = document.getElementById('tokenid');

    let canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;

    let ctx = canvas.getContext("2d");
    let image = new Image();
    image.src = "./dscMates/dscMate-"+tokenid.value+".png";
    image.width = 400;
    image.height = 400;
    image.onload = function() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0,0,600,400);
        ctx.rect(0,0,400,400);
        ctx.fill();
        ctx.globalAlpha = 0.5;
        ctx.drawImage(image, 0, 0, image.width , image.height);
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "#fff";
        ctx.font = "900 36px Arial";
        ctx.textAlign = 'center';


        var str = dogesound.value;
        
        if(str.length < 17){
            ctx.fillText(str, 300, 230);
        } else {
            let str2 = str.slice(0, 17);
            let str3 = str.slice(17, 34);
            ctx.fillText(str2, 300, 195);
            ctx.fillText(str3, 300, 235);
        }
        
        ctx.font = "900 20px Arial";
        ctx.textAlign = 'right';
        ctx.fillText(name.value, 550, 270);

        const $link = document.createElement("a");
        $link.download = "canvas.png";
        $link.href = canvas.toDataURL("image/png");
        $link.click();
    }
}

  
window.onload = function() {
    let count = 0;
    let frames = ['-27px -5px', '-49px -5px', '-71px -5px'];
    setInterval(function() {
        image.style.backgroundPosition = frames[count % frames.length];
        count = count +1;
    }, 150);
};
let dressed = false  // 마우스가 캐릭터 위에 있는지
let timer = 0     // 시간 간격
let clothes = 0   // 치마 종류 (0, 1, 2)
let selected = false  // 치마 선택
let glasses = false  // 안경
let flower = false  // 꽃
let candy = false  // 막대사탕

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(252, 232, 242);

  // 왼쪽 커튼
  fill(248, 248, 235)
  stroke(176, 175, 164)
  strokeWeight(3)
  beginShape()
  vertex(0, 0)
  vertex(120, 0)
  // 위쪽
  bezierVertex(140, 70)
  bezierVertex(124, 130)
  bezierVertex(114, 185)
  // 묶인 부분
  bezierVertex(110, 200)
  bezierVertex(106, 210)
  bezierVertex(104, 215)
  // 아래쪽
  bezierVertex(108, 280)
  bezierVertex(112, 360)
  bezierVertex(112, 430)
  vertex(0, 410)
  endShape(CLOSE)
  // 커튼 끈
  fill(225, 205, 170)
  stroke(176, 175, 164)
  strokeWeight(2)
  ellipse(90, 215, 50, 12)
  noFill()
  bezier(0, 215, 25, 220, 45, 220, 65, 215)

  // 오른쪽 커튼
  fill(248, 248, 235)
  stroke(176, 175, 164)
  strokeWeight(3)
  beginShape()
  vertex(600, 0)
  vertex(480, 0)
  // 위쪽
  bezierVertex(460, 70)
  bezierVertex(476, 130)
  bezierVertex(486, 185)
  // 묶인 부분
  bezierVertex(490, 200)
  bezierVertex(494, 210)
  bezierVertex(496, 215)
  // 아래쪽
  bezierVertex(492, 280)
  bezierVertex(488, 360)
  bezierVertex(488, 430)
  vertex(600, 410)
  endShape(CLOSE)
  // 커튼 끈
  fill(225, 205, 170)
  stroke(176, 175, 164)
  strokeWeight(2)
  ellipse(510, 215, 50, 12)
  noFill()
  bezier(600, 215, 575, 220, 555, 220, 535, 215)

  fill(250, 250, 232)
  noStroke()
  rect(220, 320, 200, 40, 7)
  textSize(30);  
  text("🕶️", 245, 352)
  text("🌼", 300, 352)
  text("🍭", 360, 352)
  
// 마우스가 캐릭터 위에 있을 때
if (mouseX > 236 && mouseX < 404 &&
    mouseY > 122 && mouseY < 292) {
  dressed = true;
} else {
  dressed = false;
}

if (dressed == true && selected == false) {
  timer = timer + 1;

  if (timer >= 120) {
    clothes = clothes + 1;
    timer = 0;

    if (clothes > 2) {
      clothes = 0;
    }
  }
} else {
  timer = 0;
}
  // 1. 캐릭터 그리기
  // 캐릭터 몸 선
  fill(255)
  stroke(0)
  strokeWeight(2.5)
  strokeJoin(ROUND)
  strokeCap(ROUND)

  beginShape()
  vertex(268, 138)

  // 왼쪽 귀
  bezierVertex(270, 125)
  bezierVertex(283, 122)
  bezierVertex(289, 138)
  // 귀 사이 윗부분
  bezierVertex(299, 134)
  bezierVertex(311, 133)
  bezierVertex(320, 133)
  // 오른쪽 귀 쪽 윗부분
  bezierVertex(329, 133)
  bezierVertex(341, 134)
  bezierVertex(351, 138)
  // 오른쪽 귀
  bezierVertex(357, 122)
  bezierVertex(370, 125)
  bezierVertex(372, 138)

  // 오른쪽 얼굴
  bezierVertex(394, 146)
  bezierVertex(404, 162)
  bezierVertex(404, 181)
  bezierVertex(404, 200)
  bezierVertex(398, 213)
  bezierVertex(390, 221)

  // 오른쪽 팔
  bezierVertex(392, 231)
  bezierVertex(394, 241)
  bezierVertex(390, 243)
  bezierVertex(387, 246)
  bezierVertex(382, 243)
  bezierVertex(382, 235)
  // 오른쪽 몸통
  bezierVertex(379, 254)
  bezierVertex(371, 269)
  bezierVertex(357, 274)

  // 오른쪽 다리
  bezierVertex(354, 277)
  bezierVertex(353, 292)
  bezierVertex(348, 292)
  bezierVertex(342, 292)
  bezierVertex(343, 277)
  bezierVertex(340, 276)
  // 다리 사이
  bezierVertex(326, 274)
  bezierVertex(313, 274)
  bezierVertex(300, 276)
  // 왼쪽 다리
  bezierVertex(296, 277)
  bezierVertex(297, 292)
  bezierVertex(291, 292)
  bezierVertex(286, 292)
  bezierVertex(286, 277)
  bezierVertex(283, 274)

  // 왼쪽 몸통
  bezierVertex(269, 269)
  bezierVertex(261, 254)
  bezierVertex(257, 235)
  // 왼쪽 팔
  bezierVertex(257, 243)
  bezierVertex(253, 246)
  bezierVertex(249, 243)
  bezierVertex(246, 241)
  bezierVertex(247, 231)
  bezierVertex(249, 221)

  // 왼쪽 얼굴
  bezierVertex(242, 213)
  bezierVertex(236, 200)
  bezierVertex(236, 181)
  bezierVertex(236, 162)
  bezierVertex(246, 146)
  bezierVertex(268, 138)

  endShape(CLOSE)

  // 눈썹
  noFill()
  stroke(0)
  strokeWeight(2.5)
  strokeCap(ROUND)
  line(282, 173, 292, 171)
  line(344, 171, 354, 173)

  // 볼터치
  noStroke()
  fill(242, 175, 194)
  ellipse(265, 201, 24, 14)
  ellipse(374, 201, 24, 14)
  // 볼터치 선
  stroke(0)
  strokeWeight(2)
  line(264, 200, 261, 205)
  line(270, 200, 267, 205)
  line(376.0, 200.5, 378.5, 205.0)
  line(370.0, 200.5, 372.5, 205.0)

  // 눈
  noStroke()
  fill(0)
  ellipse(291, 189, 18, 20)
  ellipse(348, 189, 18, 20)
  // 눈 위쪽 흰색
  fill(255)
  ellipse(289, 185, 10, 8)
  ellipse(346, 185, 10, 8)
  // 눈 아래쪽 흰색
  noFill()
  stroke(255)
  strokeWeight(1.5)
  strokeCap(ROUND)
  arc(291, 193, 11, 5, 0, PI)
  arc(348, 193, 11, 5, 0, PI)

  // 혀
  fill(244, 158, 181)
  stroke(0)
  strokeWeight(1.5)
  ellipse(320, 211, 10, 11)
  // 입
  noFill()
  strokeWeight(2.5)
  arc(314, 205, 12, 10, 0, PI)
  arc(326, 205, 12, 10, 0, PI)
  // 코 (작은 검은 점)
  noStroke()
  fill(0)
  ellipse(320, 204, 5, 5)

  // 2. 옷 그리기
if (dressed == true) {
// 왼쪽 핑크색 치마
noStroke()
fill(255, 182, 193)
if (clothes == 0) {
  fill(255, 182, 193)  // 분홍
} else if (clothes == 1) {
  fill(173, 216, 230)  // 하늘
} else {
  fill(188, 231, 122)  // 연두
}
quad(94, 253, 206, 253, 212, 278, 88, 278)
// 치마 양옆선
stroke(0)
strokeWeight(2.5)
strokeCap(ROUND)
line(93, 253, 88, 278)
line(207, 253, 212, 278)
// 밑단 주름
line(109, 268, 106, 277)
line(123, 270, 120, 279)
line(137, 272, 136, 281)
line(150, 272, 150, 281)
line(163, 272, 164, 281)
line(177, 270, 180, 279)
line(191, 268, 194, 277)


// 가운데_연두색 치마
noStroke()
fill(188, 231, 122)
if (clothes == 0) {
  fill(188, 231, 122)  // 연두
} else if (clothes == 1) {
  fill(255, 182, 193)  // 분홍
} else {
  fill(173, 216, 230)  // 하늘
}
quad(264, 253, 376, 253, 382, 278, 258, 278)
// 치마 양옆선
stroke(0)
strokeWeight(2.5)
strokeCap(ROUND)
line(263, 253, 258, 278)
line(377, 253, 382, 278)
// 밑단 주름
line(279, 268, 276, 277)
line(293, 270, 290, 279)
line(307, 272, 306, 281)
line(320, 272, 320, 281)
line(333, 272, 334, 281)
line(347, 270, 350, 279)
line(361, 268, 364, 277)

// 오른쪽 하늘색 치마
noStroke()
fill(173, 216, 230)
if (clothes == 0) {
  fill(173, 216, 230)  // 하늘
} else if (clothes == 1) {
  fill(188, 231, 122)  // 연두
} else {
  fill(255, 182, 193)  // 분홍
}
quad(434, 253, 546, 253, 552, 278, 428, 278)
// 치마 양옆선
stroke(0)
strokeWeight(2.5)
strokeCap(ROUND)
line(433, 253, 428, 278)
line(547, 253, 552, 278)
// 밑단 주름
line(449, 268, 446, 277)
line(463, 270, 460, 279)
line(477, 272, 476, 281)
line(490, 272, 490, 281)
line(503, 272, 504, 281)
line(517, 270, 520, 279)
line(531, 268, 534, 277)
}

  // 3. 안경
if (glasses == true) {
  noFill()
  stroke(230, 40, 50)  // 빨간색
  strokeWeight(3)
  strokeJoin(ROUND)

  // 왼쪽 안경테
  rect(274, 175, 34, 29, 5)
  // 오른쪽 안경테
  rect(331, 175, 34, 29, 5)
  // 안경 가운데 연결 부분
  line(308, 183, 331, 183)
  // 안경 다리
  line(274, 184, 260, 180)
  line(365, 184, 379, 180)
}

// 4. 꽃
if (flower == true) {
  noStroke()
  fill(255, 170, 190)

  // 꽃잎
  ellipse(365, 131, 15, 17)
  ellipse(377, 139, 15, 17)
  ellipse(373, 153, 15, 17)
  ellipse(357, 153, 15, 17)
  ellipse(353, 139, 15, 17)
  // 꽃 가운데
  fill(255, 220, 90)
  ellipse(365, 143, 13, 13)
}
  
// 5. 막대사탕
if (candy == true) {
  // 사탕 막대
  stroke(0)
  strokeWeight(2)
  line(249, 240, 235, 197)
  // 사탕 동그란 부분
  fill(255, 170, 195)
  stroke(0)
  strokeWeight(2)
  ellipse(235, 190, 23, 23)
  // 사탕 무늬
  noFill()
  stroke(255)
  strokeWeight(2)
  ellipse(235, 190, 18, 18)
  ellipse(235, 190, 10, 10)
}
}

function mousePressed() {
  if (dressed == true) {
    selected = true
  }
}

function keyPressed() {
  if (key == '1') {
    glasses = !glasses
  }

  if (key == '2') {
    flower = !flower
  }

  if (key == '3') {
    candy = !candy
  }

  if (key == ' ') {
    clothes = 0
    timer = 0
    selected = false
    glasses = false
    flower = false
    candy = false
  }

  if (key == 'p'){
    saveCanvas('myCanvas', 'png')
  } 
}
function setup() {
  createCanvas(400, 450);
}

function draw() {
  // 나무 테이블 배경
  // Color Picker Tool로 갈색 찾고 조정함.
  background(185, 125, 60);

  // 테이블 선
  stroke(130, 90, 60)
  // line(x1, y1, x2, y2)
  line(0, 100, 200, 0)
  line(0, 200, 400, 0)
  line(0, 300, 400, 100)
  line(0, 400, 400, 200)
  line(100, 450, 400, 300)
  line(300, 450, 400, 400)

  noStroke()
  fill(50, 50, 50)
  triangle(210, 0, 400, 0, 400, 110)
  // 1. 치즈 플레이트

  // 접시
  stroke(100, 70, 60)
  fill(90, 65, 55, 130)
  // ellipse(x, y, width, height) 기본: CENTER
  ellipse(200, 350, 280, 180)
  stroke(100, 70, 60)
  fill(90, 65, 55, 50)
  ellipse(200, 350, 220, 130)

  // 오른쪽 크래커 2개
  stroke(180, 145, 90)
  fill(225, 195, 135)
  quad(235, 285, 310, 265, 320, 305, 245, 325)
  quad(250, 300, 325, 280, 335, 320, 260, 340)
  // 크래커 구멍
  fill(160, 125, 80)
  circle(295, 280, 3)
  circle(280, 284, 3)
  circle(265, 288, 3)
  circle(315, 295, 3)
  circle(300, 299, 3)
  circle(285, 303, 3)
  circle(270, 307, 3)
  circle(320, 313, 3)
  circle(305, 317, 3)
  circle(290, 321, 3)
  circle(275, 325, 3)
  
  // 아이스크림 그릇
  stroke(100, 70, 60)
  fill(80, 73, 70)
  ellipse(200, 315, 110, 80)
  stroke(58, 58, 61)
  fill(79, 75, 74)
  ellipse(200, 315, 80, 50)
  // 아래 아이스크림
  noStroke()
  fill(165, 185, 110)
  ellipse(200, 305,90, 45)
  // 위 아이스크림
  fill(200, 215, 140)
  // arc(x, y, width, height, start, stop, mode)
  arc(200, 295, 80, 65, PI - QUARTER_PI, QUARTER_PI, OPEN)
  // 아이스크림 토핑
  noStroke()
  fill(127, 164, 96)
  square(200, 268, 5)
  noStroke()
  fill(150, 164, 112)
  square(191, 272, 5)
  noStroke()
  fill(129, 148, 122)
  square(210, 275, 5)

  // 왼쪽 스모크 치즈 4개
  stroke(150, 110, 75)
  fill(235, 220, 180)
  ellipse(98, 345, 50, 30)
  ellipse(128, 335, 48, 29)
  ellipse(101, 318, 48, 29)
  ellipse(123, 313, 46, 28)

  // 왼쪽 콜비잭 치즈 3개
  // rotate(radians(각도)) 회전시키는 도형 앞뒤로 push(), pop() 붙이기.
  //translate(x, y): 회전의 중심 (안하면 원점 기준)
  push()
  translate(95, 364)
  rotate(radians(-10))
  stroke(210, 170, 80)
  fill(250, 215, 105)
  rect(0, 0, 80, 23)
  pop()
  push()
  translate(92, 375)
  rotate(radians(-13))
  stroke(210, 170, 80)
  fill(255, 225, 120)
  rect(0, 0, 80, 23)
  pop()
  push()
  translate(102, 390)
  rotate(radians(-20))
  stroke(210, 170, 80)
  fill(245, 205, 90)
  rect(0, 0, 80, 23)
  pop()

  // 가운데 살라미 4개
  stroke(110, 55, 50)
  fill(145, 70, 65)
  ellipse(219, 385, 45, 38)
  ellipse(190, 400, 45, 38)
  ellipse(225, 404, 48, 39)
  ellipse(260, 396, 45, 40)
  // 무늬
  noStroke()
  fill(210, 150, 135)
  circle(182, 403, 4)
  circle(184, 390, 4)
  circle(195, 411, 4)
  circle(217, 405, 4)
  circle(232, 398, 4)
  circle(230, 414, 4)
  circle(253, 404, 4)
  circle(272, 395, 4)
  circle(225, 377, 4)

  // 오른쪽 과일 치즈 1개
  stroke(180, 160, 125)
  fill(235, 220, 180)
  // triangle(x1, y1, x2, y2, x3, y3)
  triangle(245, 352, 323, 360, 310, 395)
  triangle(245, 352, 244, 365, 310, 395)
  // 과일
  push()
  translate(265, 360)
  rotate(radians(-20))
  noStroke()
  fill(199, 105, 101)
  rect(0, 0, 7, 3)
  pop()
  push()
  translate(295, 375)
  rotate(radians(15))
  noStroke()
  fill(199, 105, 101)
  rect(0, 0, 7, 3)
  pop()
  push()
  translate(305, 365)
  rotate(radians(-30))
  noStroke()
  fill(237, 179, 43)
  rect(0, 0, 7, 3)
  pop()
  push()
  translate(280, 365)
  rotate(radians(10))
  noStroke()
  fill(237, 179, 43)
  rect(0, 0, 7, 3)
  pop()


  // 2. 와인잔

  // 와인잔
  stroke(217, 205, 181)
  fill(255, 255, 255, 40)
  ellipse(325, 120, 75, 18)
  arc(325, 120, 75, 130, 0, PI)
  push()
  stroke(217, 205, 181, 130)
  strokeWeight(5);
  line(325, 186, 325, 236)
  pop()
  ellipse(325, 245, 60, 15)
  noStroke()
  ellipse(325, 245, 48, 9)
  // 와인
  noStroke()
  fill(215, 165, 70, 180)
  ellipse(325, 155, 62, 15)

  push()
  translate(-100, -50)
  // 와인잔
  stroke(217, 205, 181)
  fill(255, 255, 255, 40)
  ellipse(325, 120, 75, 18)
  arc(325, 120, 75, 130, 0, PI)
  push()
  stroke(217, 205, 181, 130)
  strokeWeight(5);
  line(325, 186, 325, 236)
  pop()
  ellipse(325, 245, 60, 15)
  noStroke()
  ellipse(325, 245, 48, 9)
  // 와인
  noStroke()
  fill(215, 165, 70, 180)
  ellipse(325, 155, 62, 15)
  pop()

  push()
  translate(-270, 20)
  // 와인잔
  stroke(217, 205, 181)
  fill(255, 255, 255, 40)
  ellipse(325, 120, 75, 18)
  arc(325, 120, 75, 130, 0, PI)
  push()
  stroke(217, 205, 181, 130)
  strokeWeight(5);
  line(325, 186, 325, 236)
  pop()
  ellipse(325, 245, 60, 15)
  noStroke()
  ellipse(325, 245, 48, 9)
  // 와인
  noStroke()
  fill(215, 165, 70, 180)
  ellipse(325, 155, 62, 15)
  pop()
}
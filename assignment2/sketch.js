let circleSize = 20
let change = -1

let eyeCurve = 165  // random1

let dream = 1 // random2
let bx1 = 1
let by1 = 1
let bx2 = 1
let by2 = 1
let bx3 = 1
let by3 = 1
let bx4 = 1
let by4 = 1
let bx5 = 1
let by5 = 1
let bx6 = 1
let by6 = 1
let hx1 = 1
let hy1 = 1
let hx2 = 1
let hy2 = 1
let hx3 = 1
let hy3 = 1
let hx4 = 1
let hy4 = 1
let hx5 = 1
let hy5 = 1
let hx6 = 1
let hy6 = 1

let dotR = 1 // random3
let dotG = 1
let dotB = 1
let dotx1 = 1
let doty1 = 1
let dotx2 = 1
let doty2 = 1
let dotx3 = 1
let doty3 = 1
let dotx4 = 1
let doty4 = 1
let dotx5 = 1
let doty5 = 1
let dotx6 = 1
let doty6 = 1
let dotx7 = 1
let doty7 = 1
let dotx8 = 1
let doty8 = 1

function setup() {
  createCanvas(500, 600);
  // 이불
  fill(238, 232, 216)
  stroke(205, 198, 182)
  rectMode(CENTER)
  rect(250, 465, 500, 350, 30)
}

function draw() {
  background(225, 216, 202);

  // 베개
  fill(245, 240, 228)
  rectMode(CENTER)
  rect(250, 115, 440, 210, 50) // 다섯번째 부분에 둥근 정도 표현


  // 원숭이 팔 (머리 뒤에 양팔을 둔 모습)
  fill(122, 71, 7)
  stroke(71, 42, 11)
  ellipse(125, 190, 90, 190)
  ellipse(375, 190, 90, 190) 
  ellipse(155, 105, 90, 65) 
  ellipse(345, 105, 90, 65)

  // 몸통
  fill(122, 71, 7)
  ellipse(250, 285, 250, 190)

  // 머리
  fill(122, 71, 7)
  ellipse(250, 170, 205, 230)

  // 귀
  fill(122, 71, 7)
  ellipse(150, 170, 75, 90)
  ellipse(350, 170, 75, 90)
  // 귀 안쪽
  noStroke()
  fill(209, 173, 128)
  ellipse(150, 170, 42, 55)
  ellipse(350, 170, 42, 55)

  // 눈 - 주변 밝은 부분
  fill(209, 173, 128)
  noStroke()
  ellipse(210, 155, 80, 80)
  ellipse(290, 155, 80, 80)
  // 자는 눈
  noFill()
  stroke(75, 48, 30)
  strokeWeight(5)
  // 왼쪽 눈_random1
  bezier(190, 150, 200, eyeCurve, 220, eyeCurve, 230, 150)
  // 오른쪽 눈_random1
  bezier(270, 150, 280, eyeCurve, 300, eyeCurve, 310, 150)

  
  // 입 주위
  fill(209, 173, 128)
  noStroke()
  ellipse(250, 215, 145, 105)

  // 코
  fill(65, 40, 28)
  ellipse(250, 180, 55, 20)
  // 콧구멍
  fill(30, 20, 15)
  ellipse(238, 180, 10, 7)
  ellipse(262, 180, 10, 7)

  // 입
  stroke(60, 38, 25)
  strokeWeight(3)
  bezier(210, 225, 230, 232, 270, 232, 290, 225)
  
  // 이불
  fill(238, 232, 216)
  stroke(205, 198, 182)
  rectMode(CENTER)
  rect(250, 465, 500, 350, 30)
  // 이불 무늬_random
  if (frameCount % 30 == 0) {
  dotx1 = random(0, 500)
  doty1 = random(310, 600)
  dotx2 = random(0, 500)
  doty2 = random(310, 600)
  dotx3 = random(0, 500)
  doty3 = random(310, 600)
  dotx4 = random(0, 500)
  doty4 = random(310, 600)
  dotx5 = random(0, 500)
  doty5 = random(310, 600)
  dotx6 = random(0, 500)
  doty6 = random(310, 600)
  dotx7 = random(0, 500)
  doty7 = random(310, 600)
  dotx8 = random(0, 500)
  doty8 = random(310, 600)

  dotR = random(180, 255)
  dotG = random(180, 255)
  dotB = random(180, 255)
}
  noStroke()
  fill(dotR, dotG, dotB)
  circle(dotx1, doty1, 20)
  circle(dotx2, doty2, 20)
  circle(dotx3, doty3, 30)
  circle(dotx4, doty4, 30)  
  circle(dotx5, doty5, 40)
  circle(dotx6, doty6, 40)
  circle(dotx7, doty7, 50)
  circle(dotx8, doty8, 50)

  // 콧물(?)
  fill(240)
  circle(262, 180, circleSize)
  circleSize += change
  if (circleSize >= 60)
  change = -1
  if (circleSize <= 1)
  change = 1

  // 꿈 이모지_random2
  if (frameCount % 60 == 0){
  dream = (random(0, 2))
  bx1 = random(0, 500)
  by1 = random(0, 120)
  bx2 = random(0, 500)
  by2 = random(0, 120)
  bx3 = random(0, 500)
  by3 = random(0, 120)
  bx4 = random(0, 500)
  by4 = random(0, 120)
  bx5 = random(0, 500)
  by5 = random(0, 120)
  bx6 = random(0, 500)
  by6 = random(0, 120)
  tx1 = random(0, 500)
  ty1 = random(0, 120)
  tx2 = random(0, 500)
  ty2 = random(0, 120)
  tx3 = random(0, 500)
  ty3 = random(0, 120)
  tx4 = random(0, 500)
  ty4 = random(0, 120)
  tx5 = random(0, 500)
  ty5 = random(0, 120)
  tx6 = random(0, 500)
  ty6 = random(0, 120)
  }
  textSize(60)
  if (dream <= 1) {
  text("🍌", bx1, by1)
  text("🍑", bx2, by2)
  text("🍎", bx3, by3)
  text("🍌", bx4, by4)
  text("🍑", bx5, by5)
  text("🍎", bx6, by6)
  }
  if (dream > 1) {
  text("🎄", tx1, ty1)
  text("🎠", tx2, ty2)
  text("🎡", tx3, ty3)
  text("🎄", tx4, ty4)
  text("🎠", tx5, ty5)
  text("🎡", tx6, ty6)
  }
}

function mousePressed() {
  eyeCurve = random(120, 180)  // random1 눈 모양
  circle(random(0, 500), random(280, 600), 10)
  }

function keyPressed(){
  if(key == ' '){
    saveCanvas('myCanvas', 'png') 
  }
}
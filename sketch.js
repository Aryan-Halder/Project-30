const Engine = Matter.Engine
const World =Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,World

function preload() {
polygonimg = loadImage("polygon.png")
}

function setup() {
    createCanvas(800,400)

    imageMode(CENTER)
    image(polygonimg,polygon.x,polygon.y,40,40)

    engine = Engine.create()
    world = engine.world

    box1 = new Box(330,235,30,40)
    box2 = new Box(360,235,30,40)
    box3 = new Box(390,235,30,40)
    box4 = new Box(420,235,30,40)
    box5 = new Box(450,235,30,40)

    box6 = new Box(360,195,30,40)
    box7 = new Box(390,195,30,40)
    box8 = new Box(420,195,30,40)
    box9 = new Box(450,195,30,40)
    
    box10 = new Box(390,155,30,40)
    box11 = new Box(420,155,30,40)
    box12 = new Box(450,155,30,40)

    box13 = new Box(420,115,30,40)
    box14 = new Box(450,115,30,40)

    box15 = new Box(450,75,30,40)

    ball = new Ball(0,0,50)

    ground = new Ground(400,390,800,20)

    polygon = Bodies.circle(50,200,20)
        World.add(world,polygon)

    slingshot = new Slingshot(550,160,200,20)
}
 
function draw() {
    background(247,223,178)
    Engine.update(engine)

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()

    ball.display()

    ground.display()

    slingshot.display()
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY}) 
}

function mouseReleased() {
    slingshot.release()
}

function keyPressed() {
    if(keycode === 32) {
        slingshot.attach(ball.body)
    }
}
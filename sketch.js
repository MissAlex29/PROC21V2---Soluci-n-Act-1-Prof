const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;

//Variables para los cuerpos 
var bottom_ground;//Suelo inferior 
var top_ground; //Suelo superior 
var left_ground; //Suelo izquierdo 
var rigth_ground; //Suelo derecho

function setup() {
  canvas = createCanvas(400, 400);
  //Motor físico 
  engine = Engine.create();
  //Se crea el nuevo mundo 
  world = engine.world;
  //Guardar clase (molde) en las variables y asignar propiedades 
  bottom_ground = new Ground(200,390,400,20);
  top_ground = new Ground(200,10,400,20);
  left_ground = new Ground(10,200,20,400);
  rigth_ground = new Ground(390,200,20,400);
}

function draw() {
  background(189);
  //Se actualiza motor físico
  Engine.update(engine);
  //Mostrar cuerpos con función show 
  bottom_ground.show();
  top_ground.show();
  left_ground.show();
  rigth_ground.show();
}


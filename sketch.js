var ballA;
var database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    ballA = createSprite(250,250,10,10);
    ballA.shapeColor = "red";

//read x and y from firebasedb
// js arrow function - ()=>{}
// call back function are called by library function

    database.ref('ball/position').on("value", (data)=>{
        position = data.val();
        ballA.x = position.x;
        ballA.y = position.y;
    } )
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

//writing to the database 
function changePosition(x,y){

    database.ref('ball/position').set(
        {
            'x' : ballA.x + x,
            'y' : ballA.y + y

        }
    );
}

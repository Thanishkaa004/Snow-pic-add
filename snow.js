
class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'isStatic': false
            
        }
        this.width = 25;
        this.height = 25;
        this.x = random(0,1000);
        this.y = 10;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}

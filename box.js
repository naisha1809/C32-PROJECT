class Box {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("square.png");
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      else{
      World.remove(world,this.body);
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      image( this.image,0, 0, this.width, this.height);
      pop();
    }
    }

    score(){
      if (this.Visibility < 0 && this.Visibility > -1005){
     score++; 
    }
   }
  };
  
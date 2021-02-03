class Paper{
    constructor(x,y,radius){
        var options={
        restitution:0.3,
        friction:5,
        density:1,
        isStatic:false
        }
        this.body=Bodies.circle(x,y,(radius-10)/2,options);
        this.x=x;
        this.y=y;
        this.radius=radius;

        this.image=loadImage("paper.png");
        this.radius=radius;
        World.add(world,this.body);

       
    }
    display(){
        var pos=this.body.position;
       

       if(keyWentDown("up")){
           pos.y=pos.y-13;
           pos.x=pos.x+18;
       }
          
        
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,80);
    

       
    }
}
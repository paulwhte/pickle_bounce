function Pickle(game, scene){
    this.game = game;
    this.scene = scene;
    
    tPickle = new Sprite(this.scene, "pickleNew.png", 150, 150, 0);
    tPickle.setMoveAngle(180);
    tPickle.setSpeed(0);
    tPickle.setPosition(400,300);
    tPickle.setBoundAction(BOUNCE);
    tPickle.timesClicked = 0;
    tPickle.speedBase = 20;
    
    tPickle.game = game;
    tPickle.scene = scene;
    
    dTheta = 45;
    
    tPickle.doGravity = function(){ //falls
        this.addVector(180, .25);
    }
    
    tPickle.hitGround = function(){ //stops when hits ground
        //console.log(this.y);
        if(this.y > 580){
            this.setSpeed(0);
            dTheta = 0;
            clicks = 0;
            tPickle.game.resetButton.visible = true;
            //tPickle.game.checkScore(tPickle.game.pickle.timesClicked);
            if (tPickle.clickable) {
                game.splat.playSound();
            }
            tPickle.clickable = false;
            //tPickle.timesClicked = 0;
        }
        
        
    }
    
    tPickle.spin = function(){ //spin when clicked and 
        dTheta -= .25;
        if(dTheta < 1){
            dTheta = 0;
        }
        
        this.changeImgAngleBy(dTheta);
    }
    
    tPickle.bounce = function(){ //bounce when clicked
        dTheta = 30;
        this.spin();
        this.setSpeed(tPickle.speedBase + tPickle.timesClicked*2);
        if (tPickle.speed > 40) {
            tPickle.setSpeed(50);
        }
        newAngle = Math.random()*81; //generatem angle between 0 and 80
        
        var negater = Math.floor(Math.random()*2); //generate 0 or 1
        //console.log(negater);
        
        if(negater == 1){ //multiply angle by 1 or -1 to get a random between -80 and 80
            multiplier = 1;
        } else {
            multiplier = -1;
        }
        //console.log(multiplier);
        
        newAngle = newAngle * multiplier;
        //console.log(newAngle);
        this.setMoveAngle(newAngle); //bounce up by random angle
    }
    
    tPickle.clicked = function(){
        if (tPickle.clickable) {
            this.bounce();
            tPickle.game.bounce.playSound();
            tPickle.timesClicked++;
        }
    }
    
    tPickle.reset = function(){
        tPickle.setPosition(400,300);
        tPickle.clickable = true;
        tPickle.timesClicked = 0;
    }
    
    tPickle.update = function(){
        this.x += this.dx;
        this.y += this.dy;
        this.checkBounds();
        if (this.visible) {
            this.draw();
        } // end if
        
        tPickle.doGravity();
        tPickle.hitGround();
        tPickle.spin();
    }
    
    return tPickle;
}
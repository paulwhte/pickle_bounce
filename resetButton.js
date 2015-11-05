function ResetButton (game, scene)
{
    this.game = game;
    this.scene = scene;
    
    tButton = new TextBox(this.scene, "reset.png", 400, 100, 0);
    tButton.fontSize = 50;
    tButton.setPosition(400,300);
    
    tButton.game = game;
    
    tButton.clicked = function()
    {
        //console.log("game over");
        tButton.game.checkScore(tButton.game.pickle.timesClicked);
        tButton.game.pickle.reset();
        tButton.visible = false;
    }
    
    tButton.update = function () {
        tButton.text = "Game Over!\nBounces: " + tButton.game.pickle.timesClicked;
        tButton.fitText();
        
        this.x += this.dx;
        this.y += this.dy;
        this.checkBounds();
        if (this.visible) {
            this.draw();
        } // end if
    } // end update
    
    return tButton;
}
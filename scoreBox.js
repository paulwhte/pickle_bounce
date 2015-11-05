function ScoreBox (game, scene)
{
    this.game = game;
    this.scene = scene;
    
    tBox = new TextBox(this.scene, "score.png", 200, 100, 1);
    tBox.setPosition(130,40);
    
    tBox.game = game;
    
    tBox.update = function () {
        tBox.text = "Most Bounces: " + localStorage.highScore + "\nCurrent Bounces: " + tBox.game.pickle.timesClicked;
        tBox.fitText();
        
        this.x += this.dx;
        this.y += this.dy;
        this.checkBounds();
        if (this.visible) {
            this.draw();
        } // end if
    } // end update
    
    return tBox;
}
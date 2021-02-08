var finalScore;
var audio;
class Scene3 extends Phaser.Scene {
  constructor() {

    super("GameOverScene");

  }

  preload(){
this.load.audio('gameover','gameover.mp3');
  }
  create(data){
    console.log("dupa");
    audio=this.sound.add('gameover');
    audio.play();
    finalScore=data;
    scoreText=this.add.text(620,20,"SCORE "+data);

  }
  update(){
    console.log("dupass");
  }
}

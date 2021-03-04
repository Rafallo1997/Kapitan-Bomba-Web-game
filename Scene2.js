  var player;
var hold=false;
var score=0;
var scoreText;
var scoreText;
var cursors;
var audioStart;
var audioGame
var finalScore;
var restart;
var textSpacja;
var audio1=true;
var audioGameOver;
var gameStart=false;
var granie=false;
var koniec=false;
var audioConfig={
    mute: false,
    volume: 3,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0
}
var textConfig={
   fill: '#0f0',
fontSize: 35,
boundsAlignH: "center",
boundsAlignV: "middle" }

class Scene2 extends Phaser.Scene {
  constructor() {
    super("GameScene");

  }

preload(){
  var progressBar = this.add.graphics();
var progressBox = this.add.graphics();
var width = this.cameras.main.width;
var height = this.cameras.main.height;
var loadingText = this.make.text({
    x: width / 2,
    y: height / 2 - 50,
    text: 'Loading...',
    style: {
        font: '20px monospace',
        fill: '#ffffff'
    }
});
loadingText.setOrigin(0.5, 0.5);

progressBox.fillStyle(0x222222, 0.8);
progressBox.fillRect(500, 350, 320, 50);

  this.load.image('1','1.png');
  this.load.image('2','2.png');
  this.load.image('ui','ui2.jpg')
  this.load.audio('start','dup1.wav');
this.load.audio('game','merge.mp3');
this.load.audio('gameover','gameover.mp3');

this.load.on('progress', function (value) {
    console.log(value);
    progressBar.clear();
    progressBar.fillStyle(0xffffff, 1);
    progressBar.fillRect(510, 360, 300 * value, 30);

});

this.load.on('fileprogress', function (file) {
    console.log(file.src);
});

this.load.on('complete', function () {
    console.log('complete');
    progressBar.destroy();
    progressBox.destroy();
loadingText.destroy();
});
}
create() {


    this.add.image(650,600,'ui');
    scoreText=this.add.text(220,600,score,textConfig);
textSpacja=this.add.text(width/2-160,40,"RYP W SPACJE!!!",textConfig);
    cursors = this.input.keyboard.createCursorKeys();
    this.scale.displaySize.setAspectRatio( width/height );
      this.scale.refresh();
    player=this.add.sprite(width/2,height/2,'1');
    audioStart=this.sound.add('start',audioConfig);
    audioGame=this.sound.add('game',audioConfig);
      audioGameOver=this.sound.add('gameover',audioConfig);

  }

  update(){

if(gameStart==false){
  audioStart.play();

  gameStart=true;
}

audioStart.once('complete', function(music){  granie=true;
textSpacja.destroy();});
audioGame.once('complete', function(music){  granie=false;
  koniec=true;
  console.log(koniec);

});



if(granie==true&&audio1==true){
scoreAdd();
  audioGame.play();
    audio1=false;

}

if(granie==true){

    if(cursors.space.isDown){
    player.setTexture('2');

    hold=true;

    }else {
    player.setTexture('1');
    hold=false;
    }

}

console.log("granie "+granie);
if(koniec==true){
  var box=this.add.graphics();
    //this.scene.start('GameOverScene', score);
    audioGameOver.play();
    player.destroy();
    scoreText.destroy();
      finalScore=score;
      this.add.text(220,600,finalScore,textConfig);
      this.add.text(420,220,"GAME OVER",{
         fill: '#0f0',
      fontSize: 80,
      boundsAlignH: "center",
      boundsAlignV: "middle" });
      // box.fillStyle(0x222222, 0.8);
      // box.lineStyle(15,'#0f0' , 1);
      // box.fillRect((width/2)-210, 380, 420, 50);
      restart=this.add.text((width/2)-200, 400, 'BONUS - Jak wyglądał proces testowania gry', { fill: '#0f0' })
      .setInteractive()

      .on('pointerdown', () => {
      this.scene.start('bonus');
      audioGameOver.stop();

      audio1=true;
       gameStart=false;
        granie=false;
        koniec=false;
        hold=false;
        score=0;
        this.scene.reset();


});
koniec=false;
}


}
}

function scoreAdd(){
if(granie==true){
cursors.space.on('up',function(event){console.log("dupa");score+=100;
scoreText.setText(score);});
}


}
function reset(){
 audio1=true;
  gameStart=false;
   granie=false;
   koniec=false;
   hold=false;
   score=0;
   audioGame.destroy();
   restart=this.add.text((width/2)-100, 500, 'Kliknij by zagrać ponownie!', { fill: '#0f0' })
   .setInteractive()
   .on('pointerdown', () => {
     audioGame.stop();
     this.registry.destroy();
   this.events.off();


 this.scene.restart();});
   scoreText.destroy();
 koniec=false;
}

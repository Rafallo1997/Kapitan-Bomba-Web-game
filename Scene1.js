var width =1280;
var height=720;
var video;
var button;
class Scene1 extends Phaser.Scene {
  constructor() {
    super("TitleScreen");

  }



 preload(){

  this.load.video('video','dupa.mp4');
  this.load.on('progress', function (value) {
      console.log(value);

  });

  this.load.on('fileprogress', function (file) {
      console.log(file.src);
  });

  this.load.on('complete', function () {
      console.log('complete');

  });

  }
  create() {



  this.add.text(width/2-100,20,"KAPITAN DUPA THE GAME");
    //this.scene.start("GameScene");
button=this.add.text((width/2)-100, 600, 'Kliknij by zacząć!', { fill: '#0f0' })
.setInteractive()
.on('pointerdown', () => { this.scene.start("GameScene");
this.scale.startFullscreen(); });
video=this.add.video(width/2-20,height/2,'video').setScale(2,2);
video.setPaused(false);
    video.play();



  }


  update(){



  }
}
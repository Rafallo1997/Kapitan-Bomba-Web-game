var finalScore;
var video;
class Scene3 extends Phaser.Scene {
  constructor() {

    super("bonus");

  }

  preload(){
this.load.video('test',"video.mp4")
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
  create(){
    video=this.add.video(width/2-20,height/2,'test').setScale(2,2);
    video.setPaused(false);
        video.play();

  }
  update(){
    console.log("scene  3 ");
    if(video.isPlaying()==false){
console.log("koniec filmu");
      location.reload();}
  }
}

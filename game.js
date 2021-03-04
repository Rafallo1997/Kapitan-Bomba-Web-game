var width =1280;
var height=720;
var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
},
    scene: [Scene1,Scene2,Scene3],
    audio: {
        disableWebAudio: true
    }
}

var game = new Phaser.Game(config);

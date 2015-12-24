/*
 *  main.js
 *  2015/12/22
 *  @auther minimo  
 *  This Program is MIT license.
 */

//スクリーンサイズ
var SC_W = 960;
var SC_H = 640;

phina.main(function() {
  var app = phina.game.GameApp({
    assets: {
      image: {
        'background': 'assets/images/bg.png',
        'hiyoco':     'assets/images/hiyoco_nomal_full.png',
        'waru':       'assets/images/hiyoco_waru_full.png',
      },
      spritesheet: {
        'hiyoco': 'assets/spritesheet/hiyoco.ss',
      },
    },
    startLabel: 'main',
    width: SC_W,
    height: SC_H,
  });

  app.run();
});

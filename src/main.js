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
        'hiyoko': 'assets/images/hiyoco_nomal_full.png',
      },
    },
    startLabel: 'main',
    width: SC_W,
    height: SC_H,
  });

  app.run();
});

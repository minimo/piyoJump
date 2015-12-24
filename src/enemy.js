/*
 *  player.js
 *  2015/12/23
 *  @auther minimo  
 *  This Program is MIT license.
 */

phina.define('Enemy', {
  superClass: 'phina.display.Sprite',

  vy: 0,
  jumpCount: 0,
  jumpMax: 2,

  init: function() {
    this.superInit('waru', 32, 32);
    this.setScale(2).setOrigin(0.5, 1.0);

    this.ss = phina.accessory.FrameAnimation('hiyoco')
        .attachTo(this)
        .gotoAndPlay('moveR');

    this.vy = 0;
    this.jumpCount = 0;
    this.jumpMax = 3;
  },

  update: function(app) {
  },
});

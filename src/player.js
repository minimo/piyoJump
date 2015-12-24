/*
 *  player.js
 *  2015/12/23
 *  @auther minimo  
 *  This Program is MIT license.
 */

phina.define('Player', {
  superClass: 'phina.display.Sprite',

  vy: 0,
  jumpCount: 0,
  jumpMax: 2,

  init: function() {
    this.superInit('hiyoco', 32, 32);
    this.setScale(2).setOrigin(0.5, 1.0);

    this.ss = phina.accessory.FrameAnimation('hiyoco')
        .attachTo(this)
        .gotoAndPlay('moveR');

    this.vy = 0;
    this.jumpCount = 0;
    this.jumpMax = 3;
  },

  update: function(app) {
    this.y += this.vy;
    if (this.isJump) {
        this.vy += 9.8/2;
        this.jumpCount++;
    }
    if (this.y > SC_H*0.8) {
        this.jumpCount = 0;
        this.isJump = false;
        this.vy = 0;
        this.y = SC_H*0.8;
    }
  },

  jump: function() {
    if (this.isSquat || this.jumpCount >= this.jumpMax) return;

    this.vy = -40;
    this.jumpCount++;
    this.isJump = true;
  },

  squat: function() {
    if (this.isSquat || this.isJump) return;

    this.tweener.clear()
      .to({scaleY: 1.5}, 300, 'easeOutBounce')
      .wait(300)
      .to({scaleY: 3}, 500, 'easeOutBounce')
      .call(function(){this.isSquat = false;}.bind(this));
  },
});

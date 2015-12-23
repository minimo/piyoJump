/*
 *  player.js
 *  2015/12/23
 *  @auther minimo  
 *  This Program is MIT license.
 */

phina.define('Player', {
  superClass: 'phina.display.Sprite',

  init: function() {
    this.superInit('hiyoco', 32, 32);
    this.setScale(2).setOrigin(0.5, 1.0);

    this.ss = phina.accessory.FrameAnimation('hiyoco')
        .attachTo(this)
        .gotoAndPlay('moveR');

    this.vy = 0;
    this.jumpCount = 0;
    this.jumpMax = 2;
  },

  update: function(app) {
    this.y += this.vy;
    if (this.inJump) {
        this.vy += 9.8/2;
        this.jumpCount++;
    }
    if (this.y > SC_H*0.8) {
        this.jumpCount = 0;
        this.inJump = false;
        this.vy = 0;
        this.y = SC_H*0.8;
    }
  },

  jump: function() {
    if (this.inSquat || this.jumpCount == this.jumpMax) return;
    this.vy = -50;
    this.jumpCount++;
    this.inJump = true;
  },

  squat: function() {
    if (this.inSquat || this.inJump) return;
    this.tweener.clear()
      .to({scaleY: 1}, 300, 'easeInSine')
      .wait(300)
      .to({scaleY: 2}, 500, 'easeOutBounce')
      .call(function(){this.inSquat = false;}.bind(this));
  },
});

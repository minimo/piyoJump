/*
 *  enemy.js
 *  2015/12/23
 *  @auther minimo  
 *  This Program is MIT license.
 */

phina.define('Enemy', {
  superClass: 'phina.display.Sprite',

  pattern: 0,
  speed: 2,

  init: function(assetName) {
    assetName = assetName || 'waru';
    this.superInit(assetName, 32, 32);
    this.setScale(2).setOrigin(0.5, 1.0);

    this.ss = phina.accessory.FrameAnimation('hiyoco')
        .attachTo(this)
        .gotoAndPlay('walk');
  },

  update: function(app) {
    this.x -= this.speed;
  },
});

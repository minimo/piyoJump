/*
 *  mainscene.js
 *  2015/12/22
 *  @auther minimo  
 *  This Program is MIT license.
 */

phina.define('MainScene', {
  superClass: 'phina.display.CanvasScene',

  init: function() {
    this.superInit();

    var that = this;
    this.player = Player()
      .addChildTo(this)
      .setPosition(SC_W*0.5, SC_H*0.7);

/*
    var label = phina.display.Label('count')
      .addChildTo(this)
      .setPosition(SC_W*0.5,SC_H*0.5);
    label.update = function() {
      this.text = 'count = '+that.player.jumpCount;
    }
*/

    var group = phina.display.CanvasElement().addChildTo(this);
    group.origin.set(0, 0);
    group.width = this.gridX.width;
    group.height = this.gridY.width;

    var flickable = phina.accessory.Flickable().attachTo(group);
    flickable.horizontal = false;
    flickable.vertical = false;

    var that = this;
    flickable.onflickstart = function(e) {
      // キャンセル
      this.cancel();
      var angle = e.direction.toAngle().toDegree()|0;
      //ジャンプ
      if (225 < angle && angle < 315) {
        that.player.jump();
      }
      //しゃがみ
      if (45 < angle && angle < 135) {
        that.player.squat();
      }
    };
  },
  update: function(app) {
  },

  enterEnemy: function() {
  },

});

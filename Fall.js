// var Quaternion = gr.lib.math.Quaternion;
// var Matrix = gr.lib.math.Matrix;
// var Vector3 = gr.lib.math.Vector3;
//
// gr.registerComponent('Fall', {
//   attributes: {
//     Transform:{
//       default:'0 0 0',
//       converter:'Vector3'
//     },
//     //振幅
//     amplitude:{
//       default:0,
//       converter:'Number'
//     },
//     //落ちるスピード
//     fallSpeed:{
//       default:1,
//       converter:'Number'
//     },
//     //落ちる時間
//     fallTime:{
//       default:1.0,
//       converter:'Number'
//     },
//     //振幅の周期
//     period:
//     {
//       default:1.0,
//       converter:'Number'
//     }
//   },
//   // unity でいうとawake
//   $awake: function() {
//     // UnityでいうとGameObject
//     this._transform = this.node.getComponent('Transform');
//   },
//   //unityでいうstart
//   $mount: function() {
//     //this.nodeまでがこのFallと言うタグをつけたものの　と言う意味
//     //getAttributeでそのオブジェクトのpositionを取ってくる
//
//   },
//   $update: function() {
//     //this._transform.localPosition = this._transfrom.localPosition.subtractWith(new Vector3(0,0.1,0));
//     this._transform.localPosition = new Vector3(0, -1, 0));
//   },
// });

/*
grはオーバーロードがあり，
関数を入れるとgrimoireを読み込んだ時のみ呼ばれる
文字列を入れると，gomlの中の関数（？）が呼ばれる
*/

// const helloworld =function()
// {
//   return function(){
//
//   }
// }
//helloworld()()

// gr(function(){
//   let time = 0;
//   setInterval(function(){
//     for(let count = 0; count< 100; count++)
//     {
//
//     }
//     gr('#canves')('scene').
//   },1000);

// const scale = 1;
// const count = 4;
//
// gr(function(){
//   for(let count = 0; count< 100; count++)
//   {
//     let x = Math.floor(Math.random() * 22 - 10);
//     let y = Math.floor(Math.random() * 22 - 10);
//     setTimeout(function(){gr('#canvas')('scene').append(`
//       <mesh id="count${count}" position="${x}, 1, ${y}" scale=“0.42" geometry="sphere" color="white" targetBuffer="default" >
//         <mesh.components>
//         </mesh.components>
//       </mesh>
//     `);}, 100*count)
//     // 上のcanvesはIDを言っている（htmlの）．canvesはgomlの中にあるため，gomlのscene内に追加され
//   }
// });

gr(function(){
  for(let count = 0; count< 100; count++)
  {
    let x = Math.floor(Math.random() * 22 - 10);
    let y = Math.floor(Math.random() * 22 - 10);
    setTimeout(function(){
      gr('#canvas')('scene').append(`
      <mesh id="count${count}" position="${x}, 8, ${y}" scale="0.2" geometry="sphere" color="white" targetBuffer="default">
        <mesh.components>
        </mesh.components>
      </mesh>
    `);}, 100*count)
    // 上のcanvesはIDを言っている（htmlの）．canvesはgomlの中にあるため，gomlのscene内に追加される
  }
});

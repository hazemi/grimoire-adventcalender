Skip to content
This repository
Search
Pull requests
Issues
Gist
 @hazemi
 Watch 3
  Star 2
 Fork 1 kyasbal-1994/grimoirejs-handson
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathgrimoirejs-handson/Session3/index-4.goml
a640f64  35 minutes ago
@pnlybubbles pnlybubbles feat: add Session3
1 contributor
RawBlameHistory
64 lines (63 sloc)  2.06 KB
<goml height="512" width="512">
  <scene>
    <camera>
      <camera.components>
        <MouseCameraControl></MouseCameraControl>
      </camera.components>
    </camera>
    <light type="directional" rotation="30,30,30"></light>
    <object id="circle">
      <object.components>
        <Rotate speed="0,0.1,0"></Rotate>
      </object.components>
      <object id="mesh0" rotation="y(0)">
        <mesh position="10,0,0" geometry="cube" albedo="red">
          <mesh.components>
            <Rotate speed="0,0.5,0"></Rotate>
            <HTMLBinder htmlQuery="#bound0"/>
          </mesh.components>
        </mesh>
      </object>
      <object id="mesh1" rotation="y(60)">
        <mesh position="10,0,0" geometry="cube" albedo="blue">
          <mesh.components>
            <Rotate speed="0,0.5,0"></Rotate>
            <HTMLBinder htmlQuery="#bound1"/>
          </mesh.components>
        </mesh>
      </object>
      <object id="mesh2" rotation="y(120)">
        <mesh position="10,0,0" geometry="cube" albedo="green">
          <mesh.components>
            <Rotate speed="0,0.5,0"></Rotate>
            <HTMLBinder htmlQuery="#bound2"/>
          </mesh.components>
        </mesh>
      </object>
      <object id="mesh3" rotation="y(180)">
        <mesh position="10,0,0" geometry="cube" albedo="yellow">
          <mesh.components>
            <Rotate speed="0,0.5,0"></Rotate>
            <HTMLBinder htmlQuery="#bound3"/>
          </mesh.components>
        </mesh>
      </object>
      <object id="mesh4" rotation="y(240)">
        <mesh position="10,0,0" geometry="cube" albedo="pink">
          <mesh.components>
            <Rotate speed="0,0.5,0"></Rotate>
            <HTMLBinder htmlQuery="#bound4"/>
          </mesh.components>
        </mesh>
      </object>
      <object id="mesh5" rotation="y(300)">
        <mesh position="10,0,0" geometry="cube" albedo="cyan">
          <mesh.components>
            <Rotate speed="0,0.5,0"></Rotate>
            <HTMLBinder htmlQuery="#bound5"/>
          </mesh.components>
        </mesh>
      </object>
    </object>
  </scene>
</goml>
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help

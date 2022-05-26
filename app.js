var canvas = document.getElementById('render-canvas');
/* all our JavaScript code goes here */

// init engine
// 개발을 시작하기 전에 먼저 Babylon.js 엔진 인스턴스를 생성
var engine = new BABYLON.Engine(canvas);

// creating scene
// 장면은 모든 게임 콘텐츠가 표시되는 장소입니다.
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8); // 회색

// creating render loop
// 장면을 실제로 보이게 하려면 렌더링해야 합니다
// var renderLoop = function () {
//   scene.render();
// };
// engine.runRenderLoop(renderLoop);

// create animation
var t = 0;
var renderLoop = function () {
  scene.render();
  t -= 0.01;
  // animation code goes here
  box.rotation.y = t * 2;
  torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
  cylinder.position.y = Math.sin(t * 3);
};
engine.runRenderLoop(renderLoop);

// create camera
// 카메라, 조명 및 개체와 같은 표준 장면 구성 요소를 구현
var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);

// create light
// 손전등처럼 작동하여 주어진 방향으로 스포트라이트를 비추는 광원 추가
var light = new BABYLON.PointLight('light', new BABYLON.Vector3(10, 10, 0), scene);

// create geometry(기하학)
// 상자 모양에 대한 지오메트리를 정의
var box = BABYLON.Mesh.CreateBox('box', 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

// material
// 재료는 물체를 덮는 것, 즉 표면의 색상이나 질감입니다.
var boxMaterial = new BABYLON.StandardMaterial('material', scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86); // 핑크
box.material = boxMaterial;

// torus(도넛형)
var torus = BABYLON.Mesh.CreateTorus('torus', 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
var torusMaterial = new BABYLON.StandardMaterial('material', scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;

// cylinder(원통형)
var cylinder = BABYLON.Mesh.CreateCylinder('cylinder', 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;
var cylinderMaterial = new BABYLON.StandardMaterial('material', scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;

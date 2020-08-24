var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,3000);
// Perspective projection parameters
camera.position.x = 0;
camera.position.y = 4;  //4
camera.position.z = 17; 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




//Floors
var gFrontFloor = new THREE.PlaneGeometry( 45, 15, 32 );
var mFrontFLoor = new THREE.MeshPhongMaterial( {color: 0x660000, side: THREE.DoubleSide});
var meshFrontFloor = new THREE.Mesh( gFrontFloor, mFrontFLoor );
meshFrontFloor.rotation.x = Math.PI / 2;
meshFrontFloor.position.z = 15;
meshFrontFloor.position.y = -3;

var gBackFloor = new THREE.PlaneGeometry( 100, 100, 32 );
var mBackFloor = new THREE.MeshPhongMaterial( {color: 0x444444, side: THREE.DoubleSide});
var meshBackFloor = new THREE.Mesh( gBackFloor, mBackFloor );
meshBackFloor.rotation.x = Math.PI / 2.2;
meshBackFloor.position.z = 50;
meshBackFloor.position.y = 1.5;


var gLeftHighlight = new THREE.PlaneGeometry( 8, 100, 32 );
var mHighlight = new THREE.MeshPhongMaterial( {color: 0x660000, side: THREE.DoubleSide});
var meshLeftHighlight = new THREE.Mesh( gLeftHighlight, mHighlight );
meshLeftHighlight.rotation.x = Math.PI / 2.2;
meshLeftHighlight.position.z = 50;
meshLeftHighlight.position.x = -17;
meshLeftHighlight.position.y = 1.55;


var gRightHighlight = new THREE.PlaneGeometry( 8, 100, 32 );
var meshRightHighlight = new THREE.Mesh( gRightHighlight, mHighlight );
meshRightHighlight.rotation.x = Math.PI / 2.2;
meshRightHighlight.position.z = 50;
meshRightHighlight.position.x = 17;
meshRightHighlight.position.y = 1.55;

//Walls
var gLeftWall = new THREE.PlaneGeometry( 50, 50, 32 );
var gRightWall = new THREE.PlaneGeometry( 50, 50, 32 );
var gBackWall = new THREE.PlaneGeometry( 45, 45, 32 );
var gCeiling = new THREE.PlaneGeometry( 40, 50, 32 );
var mWall = new THREE.MeshPhongMaterial( {color: 0x444444, side: THREE.DoubleSide});
var meshLeftWall= new THREE.Mesh( gLeftWall, mWall );
var meshRightWall= new THREE.Mesh( gRightWall, mWall );
var meshBackWall= new THREE.Mesh( gBackWall, mWall );
var meshCeiling= new THREE.Mesh( gCeiling, mWall );

meshLeftWall.rotation.y = Math.PI / 2;
meshLeftWall.position.x = 18;
meshLeftWall.position.y = 10;
meshLeftWall.position.z = 30;

meshRightWall.rotation.y = Math.PI / 2;
meshRightWall.position.x = -18;
meshRightWall.position.y = 10;
meshRightWall.position.z =  30;

meshCeiling.rotation.x = Math.PI / 2;
meshCeiling.position.y = 20;
meshCeiling.position.z =  30;

meshBackWall.position.y = 10;
meshBackWall.position.z =  50;




//Doors
var gDoor = new THREE.PlaneGeometry( 4.5, 18, 32 );
var mDoor = new THREE.MeshPhongMaterial( {color: 0xdeb887, side: THREE.DoubleSide});
var gDoorKnob = new THREE.CircleGeometry( 0.3, 32);
var mDoorKnob = new THREE.MeshPhongMaterial( {color: 0x000000, side: THREE.DoubleSide});
var meshDoorKnobLeft = new THREE.Mesh( gDoorKnob, mDoorKnob );
var meshDoorKnobRight = new THREE.Mesh( gDoorKnob, mDoorKnob );
var meshLeftDoor = new THREE.Mesh( gDoor, mDoor );
var meshRightDoor = new THREE.Mesh( gDoor, mDoor );

meshDoorKnobLeft.position.z = 49.4;
meshDoorKnobLeft.position.x = 14;
meshDoorKnobLeft.position.y = 5;

meshDoorKnobRight.position.z = 49.4;
meshDoorKnobRight.position.x = -14;
meshDoorKnobRight.position.y = 5;

meshLeftDoor.position.z = 49.5;
meshLeftDoor.position.x = 15.5;
meshLeftDoor.position.y = 0;

meshRightDoor.position.z = 49.5;
meshRightDoor.position.x = -15.5;
meshRightDoor.position.y = 0;

scene.add(meshDoorKnobRight);
scene.add(meshDoorKnobLeft);
scene.add(meshLeftDoor);
scene.add(meshRightDoor);


//Chairs
var ySpacing = 0;
var zSpacing = 0;
var gArmRest = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32 );
var gChair = new THREE.BoxGeometry( 2, 0.5, 2 );
var gChairBase = new THREE.BoxGeometry( 1, 1, 3 );
var mchair = new THREE.MeshPhongMaterial( {color: 0x660000} );
var mChairBase = new THREE.MeshPhongMaterial( {color: 0x444444, side: THREE.DoubleSide});

for (var i=0; i<6; i++){
    ySpacing = ySpacing + 0.5;
    zSpacing = zSpacing + 4;
    var xSpacing = 5;
for(var j=0; j<7; j++){
        var meshArmrest1 = new THREE.Mesh( gArmRest, mchair );
        var meshArmrest2 = new THREE.Mesh( gArmRest, mchair );
        var meshChairSeat = new THREE.Mesh( gChair, mchair );
        var meshChairBack = new THREE.Mesh( gChair, mchair );
        var meshChairBase = new THREE.Mesh( gChairBase, mChairBase );

        meshChairSeat.position.z = 16 + zSpacing;
        meshChairSeat.position.x = -15 + xSpacing;
        meshChairSeat.position.y = -1.5 + ySpacing;

        meshChairBack.rotation.x = Math.PI / 2;
        meshChairBack.position.z = 1;
        meshChairBack.position.x = 0;
        meshChairBack.position.y = 1;

        meshArmrest1.rotation.x = Math.PI / 2;
        meshArmrest1.position.x = 1.2;
        meshArmrest1.position.y = 0.5;

        meshArmrest2.rotation.x = Math.PI / 2;
        meshArmrest2.position.x = -1.2;
        meshArmrest2.position.y = 0.5;

        meshChairBase.rotation.x = Math.PI / 2;
        meshChairBase.position.z = 0;
        meshChairBase.position.x = 0;
        meshChairBase.position.y = -2;

        meshChairSeat.add(meshArmrest1);
        meshChairSeat.add(meshArmrest2);
        meshChairSeat.add(meshChairBack);
        meshChairSeat.add(meshChairBase);
        scene.add(meshChairSeat);

        xSpacing = xSpacing +3;
        renderer.setClearColor(0xEEEEEE);


 }
}

//Stage Areas
var gFrontStage = new THREE.CubeGeometry(36,6,8);
var mStage = new THREE.MeshPhongMaterial({
    color: 0xdeb887
});
var meshFrontStage = new THREE.Mesh(gFrontStage,mStage);
meshFrontStage.position.z = 5.5;

var gBackStage = new THREE.CubeGeometry(40,6,20);
var meshBackStage = new THREE.Mesh(gBackStage,mStage);
meshBackStage.position.z = -6;



//Backdrop & front curtains
var meshBackdrop = null;
var gBackdrop = new THREE.PlaneGeometry(50,50,80,80);
var mCurtain = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
    shininess:25
});

meshBackdrop = new THREE.Mesh(gBackdrop,mCurtain);
meshBackdrop.position.y = 15;
meshBackdrop.position.z = -15;
wave(gBackdrop, 10.5, 0.5);

var meshFLCurtain = null;
var gFLCurtain = new THREE.PlaneGeometry(20,17,75,75);

meshFLCurtain = new THREE.Mesh(gFLCurtain,mCurtain);
meshFLCurtain.position.x = -7.5;
meshFLCurtain.position.y = 10;
meshFLCurtain.position.z = 3;
wave(gFLCurtain, 7, 0.5);

var meshFRCurtain = null;
var gFRCurtain = new THREE.PlaneGeometry(20,17,75,75);

meshFRCurtain = new THREE.Mesh(gFRCurtain,mCurtain);
meshFRCurtain.position.x = 7.5;
meshFRCurtain.position.y = 10;
meshFRCurtain.position.z = 3;
wave(gFRCurtain, 7, 0.5);
meshFLCurtain.scale.x = 0.825;
meshFRCurtain.scale.x = 0.825;


//Right & Left Hide
var gHide = new THREE.CubeGeometry(6,17,2);
var mHide = new THREE.MeshPhongMaterial({
    color: 0x444444,
    shininess:8
});
var meshrHide = new THREE.Mesh(gHide,mHide);
meshrHide.position.x = 15;
meshrHide.position.y = 11;
meshrHide.position.z = 4;

var meshlHide = new THREE.Mesh(gHide,mHide);
meshlHide.position.x = -15;
meshlHide.position.y = 11;
meshlHide.position.z = 4;

//top Hide
var gTHide = new THREE.CubeGeometry(36,5,2);
var meshTHide = new THREE.Mesh(gTHide,mHide);
meshTHide.position.y = 20;
meshTHide.position.z = 4;

//stairs
var gStair1 = new THREE.CubeGeometry(6,5,1);
var mStair = new THREE.MeshPhongMaterial({
    color: 0xdeb887
});
var meshrStair1 = new THREE.Mesh(gStair1,mStair);
meshrStair1.position.x = 15;
meshrStair1.position.y = -0.5;
meshrStair1.position.z = 10;
var meshlStair1 = new THREE.Mesh(gStair1,mStair);
meshlStair1.position.x = -15;
meshlStair1.position.y = -0.5;
meshlStair1.position.z = 10;

var gStair2 = new THREE.CubeGeometry(6,4,1);
var meshrStair2 = new THREE.Mesh(gStair2,mStair);
meshrStair2.position.x = 15;
meshrStair2.position.y = -1;
meshrStair2.position.z = 11;
var meshlStair2 = new THREE.Mesh(gStair2,mStair);
meshlStair2.position.x = -15;
meshlStair2.position.y = -1;
meshlStair2.position.z = 11;

var gStair3 = new THREE.CubeGeometry(6,3,1);
var meshrStair3 = new THREE.Mesh(gStair3,mStair);
meshrStair3.position.x = 15;
meshrStair3.position.y = -1.5;
meshrStair3.position.z = 12;
var meshlStair3 = new THREE.Mesh(gStair3,mStair);
meshlStair3.position.x = -15;
meshlStair3.position.y = -1.5;
meshlStair3.position.z = 12;

var gStair4 = new THREE.CubeGeometry(6,2,1);
var meshrStair4 = new THREE.Mesh(gStair4,mStair);
meshrStair4.position.x = 15;
meshrStair4.position.y = -2;
meshrStair4.position.z = 13;
var meshlStair4 = new THREE.Mesh(gStair4,mStair);
meshlStair4.position.x = -15;
meshlStair4.position.y = -2;
meshlStair4.position.z = 13;

var gStair5 = new THREE.CubeGeometry(6,1,1);
var meshrStair5 = new THREE.Mesh(gStair5,mStair);
meshrStair5.position.x = 15;
meshrStair5.position.y = -2.5;
meshrStair5.position.z = 14;
var meshlStair5 = new THREE.Mesh(gStair5,mStair);
meshlStair5.position.x = -15;
meshlStair5.position.y = -2.5;
meshlStair5.position.z = 14;


//create trees for set
var gTree1Base = new THREE.CylinderGeometry(1,1.75,1.5,30);
var mTree = new THREE.MeshPhongMaterial({
    color: 0x654321,
    shininess:3
});
var meshTree1Base = new THREE.Mesh(gTree1Base,mTree);
meshTree1Base.position.x = 7;
meshTree1Base.position.y = 3.5;
meshTree1Base.position.z = -2;

var gTree1Trunk = new THREE.CylinderGeometry(1,1.1,7,30);
var meshTree1Trunk = new THREE.Mesh(gTree1Trunk,mTree);
meshTree1Trunk.position.y = 4;

var gTree1Branch1 = new THREE.CylinderGeometry(0.2,0.3,3,30);
var meshTree1Branch1 = new THREE.Mesh(gTree1Branch1,mTree);
meshTree1Branch1.position.x = -1.2;
meshTree1Branch1.position.y = 2.5;
meshTree1Branch1.rotation.z = 0.7;

var gTree1BranchEnd = new THREE.SphereGeometry(0.4,20,20);
meshTree1BranchEnd = new THREE.Mesh(gTree1BranchEnd, mTree);
meshTree1BranchEnd.position.x = 0.3;
meshTree1BranchEnd.position.y = 3.5;
meshTree1BranchEnd.position.z = 0.75;

var gTree1LeavesBase = new THREE.SphereGeometry(3,20,20);
var mLeaves = new THREE.MeshPhongMaterial({
    color: 0x008700,
    shininess:3
});
var meshTree1LeavesBase = new THREE.Mesh(gTree1LeavesBase,mLeaves);
meshTree1LeavesBase.scale.y = 0.8;
meshTree1LeavesBase.position.y = 5.8;

var gTree1ExtraLeaves1 = new THREE.SphereGeometry(1.5,20,20);
var meshTree1ExtraLeaves1  = new THREE.Mesh(gTree1ExtraLeaves1,mLeaves);
meshTree1ExtraLeaves1.position.x = -2.5;
meshTree1ExtraLeaves1.position.y = -1.5;

var gTree2Base = new THREE.CylinderGeometry(0.75,1.25,1.75,30);
var meshTree2Base = new THREE.Mesh(gTree2Base,mTree);
meshTree2Base.position.x = -8;
meshTree2Base.position.y = 3.5;
meshTree2Base.position.z = -5;

var gTree2Trunk = new THREE.CylinderGeometry(0.75,0.8,10,30);
var meshTree2Trunk = new THREE.Mesh(gTree2Trunk,mTree);
meshTree2Trunk.position.y = 5.5;

var gTree2LeavesBase = new THREE.SphereGeometry(3,20,20);
var meshTree2LeavesBase = new THREE.Mesh(gTree2LeavesBase,mLeaves);
meshTree2LeavesBase.scale.x = 0.9;
meshTree2LeavesBase.position.y = 6.5;

var gTree2Branch1 = new THREE.CylinderGeometry(0.25,0.4,4,30);
var meshTree2Branch1 = new THREE.Mesh(gTree2Branch1,mTree);
meshTree2Branch1.position.x = 1;
meshTree2Branch1.position.y = 2;
meshTree2Branch1.rotation.z = -0.7;

var gTree2ExtraLeaves1 = new THREE.SphereGeometry(2,20,20);
var meshTree2ExtraLeaves1  = new THREE.Mesh(gTree2ExtraLeaves1,mLeaves);

meshTree2ExtraLeaves1.position.y = 3.5;
meshTree2ExtraLeaves1.scale.x = 0.7;

var gTree2Branch2 = new THREE.CylinderGeometry(0.25,0.4,4,30);
var meshTree2Branch2 = new THREE.Mesh(gTree2Branch2,mTree);
meshTree2Branch2.position.x = -1;
meshTree2Branch2.position.y = 1;
meshTree2Branch2.rotation.z = 0.5;

var gTree2ExtraLeaves2 = new THREE.SphereGeometry(2.5,20,20);
var meshTree2ExtraLeaves2  = new THREE.Mesh(gTree2ExtraLeaves2,mLeaves);

meshTree2ExtraLeaves2.position.y = 3.5;
meshTree2ExtraLeaves2.scale.x = 0.6;

      
//Stage scene components
scene.add(meshFrontStage);
scene.add(meshBackStage);
scene.add(meshBackdrop);
scene.add(meshFRCurtain);
scene.add(meshFLCurtain);
scene.add(meshrHide);
scene.add(meshlHide);
scene.add(meshTHide);
scene.add(meshrStair1);
scene.add(meshlStair1);
scene.add(meshrStair2);
scene.add(meshlStair2);
scene.add(meshrStair3);
scene.add(meshlStair3);
scene.add(meshrStair4);
scene.add(meshlStair4);
scene.add(meshrStair5);
scene.add(meshlStair5);
scene.add(meshTree1Base);
meshTree1Base.add(meshTree1Trunk);
meshTree1Trunk.add(meshTree1BranchEnd);
meshTree1Trunk.add(meshTree1Branch1);
meshTree1Trunk.add(meshTree1LeavesBase);
meshTree1LeavesBase.add(meshTree1ExtraLeaves1);
scene.add(meshTree2Base);
meshTree2Base.add(meshTree2Trunk);
meshTree2Trunk.add(meshTree2LeavesBase);
meshTree2Trunk.add(meshTree2Branch1);
meshTree2Branch1.add(meshTree2ExtraLeaves1);
meshTree2Trunk.add(meshTree2Branch2);
meshTree2Branch2.add(meshTree2ExtraLeaves2);
scene.add(meshFrontFloor);
scene.add(meshLeftWall);
scene.add(meshRightWall);
scene.add(meshCeiling);
scene.add(meshBackFloor);
scene.add(meshBackWall);
scene.add(meshRightHighlight);
scene.add(meshLeftHighlight);



// An array of smoke particles
var SmokeGeoArray = [];
var SmokeMatArray = [];
var SmokeMeshArray = [];
var SmokeOpacity = [];
var SmokeXVel = [];
var SmokeYVel = [];
var SmokeZVel = [];
var iNumber = 1500;

//texture loader
var smokeLoader = new THREE.TextureLoader().load('Textures/smoke-17.png');

for (var i = 0; i < iNumber; i++) {
    SmokeOpacity[i] = Math.random() * 0.5 + 0.1
    SmokeXVel[i] = Math.random() * 0.01 + 0.0005;
    SmokeYVel[i] = Math.random() * SmokeXVel[i] / 2 - 0.0015;
    SmokeZVel[i] = Math.random() * 0.005 - 0.0025;
    SmokeGeoArray.push(new THREE.SphereGeometry(0.25,10,10));
    
   

    SmokeMatArray.push(new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: SmokeOpacity[i],
        map: smokeLoader
    }));
    SmokeMeshArray.push(new THREE.Mesh(SmokeGeoArray[i],SmokeMatArray[i]));
    scene.add(SmokeMeshArray[i]);
    //start position and speeds need to be set
    if (i <= (iNumber / 2)) {
        SmokeMeshArray[i].position.x = 15;
    } else {
        SmokeMeshArray[i].position.x = -15;
    }
    SmokeMeshArray[i].position.y = 6;
    SmokeMeshArray[i].position.z = -1;

}


// Lighting

var gLightBulb = new THREE.SphereGeometry(0.4,20,20);
var mLightBulb = new THREE.MeshBasicMaterial( 0xFFFF00 );
var meshAmbientLightBulb = new THREE.Mesh( gLightBulb, mLightBulb );
var meshPointLightBulb = new THREE.Mesh( gLightBulb, mLightBulb );
var spotLight = new THREE.SpotLight( 0xffffff, 1, 50, Math.PI / -10 );
spotLight.position.set( 0, 28, -6  );
spotLight.target.position.set(10,10,-15);
meshPointLightBulb.position.y = 1;
spotLight.add(meshPointLightBulb);
scene.add( spotLight );

var ambientLight = new THREE.PointLight( 0xffffff, 0.5 ); 
ambientLight.position.set( 0, 21, 39 );
meshAmbientLightBulb.position.y = 0.5;
ambientLight.add(meshAmbientLightBulb);
scene.add( ambientLight );

    renderer.shadowMap.enabled= true;
    renderer.shadowMap.type= THREE.PCFSoftShadowMap;
    spotLight.castShadow= true;
    ambientLight.castShadow= true;
    ambientLight.shadow.mapSize.width= 512;
    spotLight.shadow.mapSize.width= 512;
    ambientLight.shadow.mapSize.height= 512;
    ambientLight.shadow.camera.near= 0.5;
    ambientLight.shadow.camera.far= 500;
    ambientLight.shadow.radius= 5.0;
    meshTree1Base.castShadow = true;
    meshTree2Base.castShadow = true;
    meshFrontStage.castShadow= false;
    meshFrontStage.receiveShadow= true;

//VR effect and controls
var effect = new THREE.StereoEffect( renderer );
effect.setSize( window.innerWidth, window.innerHeight );
var controls = new THREE.DeviceOrientationControls( camera );

//Raycaster for interaction
var raycaster= new THREE.Raycaster();
var mouse = new THREE.Vector2(-10000,-10000);
function onMouseMove( event ) {
mouse.x= ( event.clientX/ renderer.domElement.clientWidth) * 2 -1;
mouse.y= -( event.clientY/ renderer.domElement.clientHeight) * 2 + 1;
    }
window.addEventListener( 'mousemove', onMouseMove, false );


//stage scene identifier

var opening = true;
var closing = false;

function animate() {

    controls.update();

    SmokeMachine();

    if ((opening == true) || (closing == true)){
        CurtainsAnimate();
    }
    
    requestAnimationFrame(animate);
    effect.render(scene, camera);
    

}
animate();


function SmokeMachine() {
    for (var i = 0; i < iNumber; i++) {
        //incrament direction

        if (i <= (iNumber / 2)) {
            SmokeMeshArray[i].position.x -= SmokeXVel[i];
            if(SmokeYVel[i]>=0){
                SmokeMeshArray[i].rotation.z -= SmokeXVel[i]/3;
            }else{
                SmokeMeshArray[i].rotation.z += SmokeXVel[i]/3;
            }

        } else {
            SmokeMeshArray[i].position.x += SmokeXVel[i];
            if(SmokeYVel[i]>=0){
                SmokeMeshArray[i].rotation.z += SmokeXVel[i]/3;
            }else{
                SmokeMeshArray[i].rotation.z -= SmokeXVel[i]/3;
            }
        }
        SmokeMeshArray[i].position.y += SmokeYVel[i];
        SmokeMeshArray[i].position.z += SmokeZVel[i];
        SmokeMeshArray[i].scale += 5;

        //reset position
        if ((SmokeOpacity[i] - 0.00023) <= 0) {
            if (i <= (iNumber / 2)) {
                SmokeMeshArray[i].position.x = 15;
            } else {
                SmokeMeshArray[i].position.x = -15;
            }
            SmokeMeshArray[i].position.y = 6;
            SmokeMeshArray[i].position.z = -1;
            SmokeOpacity[i] = Math.random() * 0.5 + 0.1
            SmokeXVel[i] = Math.random() * 0.01 + 0.001;
            SmokeYVel[i] = Math.random() * SmokeXVel[i] / 2 - 0.0015;
            SmokeZVel[i] = Math.random() * 0.005 - 0.0025;
            SmokeMatArray[i].opacity = SmokeOpacity[i];
            SmokeMeshArray[i].scale.x = 1;
            SmokeMeshArray[i].scale.y = 1;
            SmokeMeshArray[i].scale.z = 1;
           
        } else {
            SmokeOpacity[i] -= 0.00023;
            SmokeMatArray[i].opacity -= 0.00023;
            SmokeMeshArray[i].scale.x +=0.0025;
            SmokeMeshArray[i].scale.y +=0.0025;
            SmokeMeshArray[i].scale.z +=0.0025;

        }
    }
}

function wave(geometry, cycle, height) {
    for (var i = 0; i < geometry.vertices.length; i++) {
        const width = geometry.parameters.width;
        const xPos = ((geometry.vertices[i].x * cycle) / width) * (2 * Math.PI);
        // compute z-posusing sine function
        var zPos = Math.sin(xPos) * height;
        geometry.vertices[i].z = zPos;
    }
    geometry.verticesNeedUpdate = true;
    geometry.computeVertexNormals();
}

document.addEventListener('touchstart', CurtainsLogic, false);

function CurtainsLogic(event){
    if(meshFLCurtain.scale.x <=0.19){
       closing =true;
    }
    else
    {
      opening = true;
        
    }

}

function CurtainsAnimate(){
    if(opening == true){
        if (meshFLCurtain.scale.x >0.19){
            meshFLCurtain.scale.x -= 0.02;
            meshFRCurtain.scale.x -= 0.02;
            meshFLCurtain.position.x -= 0.15;
            meshFRCurtain.position.x += 0.15;
        }else{
            opening = false;
        }
    }else if(closing == true){
        if (meshFLCurtain.scale.x < 0.825){
            meshFLCurtain.scale.x += 0.02;
            meshFRCurtain.scale.x += 0.02;
            meshFLCurtain.position.x += 0.15;
            meshFRCurtain.position.x -= 0.15;
        }else{
            closing = false;
        }
    }
}



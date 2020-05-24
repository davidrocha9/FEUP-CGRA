/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        
        this.slices = 16;
        this.stacks = 8;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.sphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this, 16);
        this.cube = new MyCubeQuad(this);
        this.vehicle = new MyVehicle(this, this.slices, this.stacks);
        this.terrain = new MyTerrain(this);
        this.billboard = new MyBillboard(this);
        this.supplies = [
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
            new MySupply(this),
        ];
        this.supplyNumber = 0;

        
        this.objects = [this.sphere, this.cylinder, this.vehicle];

        this.objectsID = {'Sphere': 0, 'Cylinder': 1, 'Vehicle': 2};

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayEarth = false;
        this.displayObject = true;
        this.displayCubeMap = true;
        this.selectedObject = 2;
        this.selectedTexture = 0;
        this.speedFactor = 1;
        this.scaleFactor = 1;

        //Earth Material for the Sphere
        this.sceneMaterial = new CGFappearance(this);
        this.sceneMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sceneMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sceneMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sceneMaterial.setShininess(10.0);
        this.sceneMaterial.loadTexture("images/earth.jpg");
        this.sceneMaterial.setTextureWrap("REPEAT", "REPEAT");
        
        this.textures = [
            new CGFtexture(this, "images/earth.jpg"),
            new CGFtexture(this, "images/cubemap.png"),
            new CGFtexture(this, "images/forest.png"),
            new CGFtexture(this, "images/desert.png"),
        ];

        this.textureList={
            'Cubemap': 0,
            'Forest': 1,
            'Desert': 2,
        };

        this.defaultMaterial = new CGFappearance(this);
        this.defaultMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setShininess(10.0);
    }
    initLights() {
        this.setGlobalAmbientLight(0.5, 0.5, 0.5, 1.0);
        
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        //this.camera = new CGFcamera(0.5, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(35, 59, 35), vec3.fromValues(0, 24, 0));
        //this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(10, 10, 10), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys() {
        var text="Keys pressed: ";
        var keysPressed=false;

        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyP")) {
            text+=" P "
            if (this.vehicle.autopilot){
                this.vehicle.autopilot = false;
                console.log("aqui agora");
            }
            else{
                this.vehicle.autoPilot();
                console.log("aqui");
            }
            keysPressed = true;
        }
        
        if (!this.vehicle.autopilot){
            if(this.gui.isKeyPressed("KeyW")){
                text+=" W ";
                this.objects[2].accelerate(0.3*this.speedFactor);
                keysPressed=true;
                console.log(this.vehicle.speed);
            }
            if(this.gui.isKeyPressed("KeyS")){
                text+=" S ";
                if(this.vehicle.speed >= 0)
                    this.objects[2].accelerate(-0.3*this.speedFactor);
                keysPressed=true;
                console.log(this.vehicle.speed);
            }
            else if(this.gui.isKeyPressed("KeyA")){
                text+=" A ";
                this.objects[2].turn(-20);
                keysPressed=true;
            }
            else if(this.gui.isKeyPressed("KeyD")){
                text+=" D ";
                this.objects[2].turn(20);
                keysPressed=true;
            }
            else if (this.gui.isKeyPressed("KeyL")) {
                text+=" L ";
                if (this.supplyNumber < 5){
                    this.supplies[this.supplyNumber].drop(this.vehicle.x, this.vehicle.z);
                    this.supplies[this.supplyNumber].display();
                    this.supplyNumber++;
                }
                this.billboard.update();
                keysPressed = true;
            }
            else{
                this.vehicle.blimp.stabilizer1.setAngle(0);
                this.vehicle.blimp.stabilizer2.setAngle(0);
            }
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text+=" R ";
            this.objects[2].reset();
            keysPressed = true;
            this.vehicle.autopilot = false;
            for (var i=0 ; i<5; i++){
                this.supplies[i].reset();
            }
            this.billboard.reset();
            this.supplyNumber = 0;
        }
        
        if(keysPressed){
            console.log(text);
        }
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys(t);
        this.vehicle.update(t);
        for (var i=0 ; i<5; i++){
            this.supplies[i].update(t);
        }
    }
    
    updateTexture(){
        this.cube.updateTexture();
    }

    updateObject(){
        this.objects[this.selectedObject];
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();    
        this.translate(0,24,0);
        
        this.pushMatrix();
        if (this.displayObject)
            this.objects[this.selectedObject].display();
        this.popMatrix();
        
        if (this.displayCubeMap == true)
            this.cube.display();

        this.terrain.display();

        for (var i=0 ; i<5; i++){
            this.supplies[i].display();
        }
        
        this.billboard.display();

        this.popMatrix();
        // ---- END Primitive drawing section
    }
}
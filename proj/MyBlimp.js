/**
* MyPyramid
* @constructor
*/
class MyBlimp extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();

        this.vehicleAngle=0;
        this.speed=0;
        this.x=0;
        this.y=0;
        this.z=0;
        this.autopilot = false;
        this.auto_x = 0;
        this.auto_z = 0;
        
        this.sphere = new MySphere(this.scene, 16, 18);
        this.cylinder= new MyCylinder(this.scene, this.slices);
        this.quad = new MyQuad(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.stabilizer1 = new MyStabilizer(this.scene);
        this.stabilizer2 = new MyStabilizer(this.scene);
        this.stabilizer3 = new MyStabilizer(this.scene);
        this.stabilizer4 = new MyStabilizer(this.scene);
        this.stabilizer1.setAngle(0);
        this.stabilizer2.setAngle(0);
        this.propeller1 = new MyPropeller(this.scene);
        this.propeller2 = new MyPropeller(this.scene); 
        
        this.time = 0.0;
        this.initBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-10, so slices varies 3-93

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    
    display(){
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.vehicleAngle*Math.PI/180.0, 0, 1, 0);
        this.scene.scale(0.5,0.5,0.5);
        //Balloon
        this.scene.pushMatrix();
        if (this.autopilot){
            this.scene.translate(this.x,0,this.z);
            this.scene.rotate(this.angleXX,0,1,0);
            this.scene.translate(-this.x,0,-this.z);
        }

        this.scene.scale(3,3,3);
        this.scene.defaultMaterial.apply();
        
        this.scene.scale(0.5,0.5,1);
        this.sphere.display();

        this.scene.popMatrix();
        
        //Cockpit
        this.scene.pushMatrix();
        this.scene.scale(3,3,3);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.scale(0.1,0.1,0.1);
        this.scene.scale(1,5,1);
        this.scene.translate(0,-0.5,5);
        this.cylinder.display();
        this.scene.popMatrix();
        

        //Extremities of the cockpit
        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(0,-5,2.5);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.3,0.3,0.3);
        this.scene.translate(0,-5,-2.5);
        this.sphere.display();
        this.scene.popMatrix();
        

        //Engines
        this.scene.pushMatrix();
        this.scene.scale(0.15,0.15,0.3);
        this.scene.translate(2.5,-10.5,-2.5);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.15,0.15,0.3);
        this.scene.translate(-2.5,-10.5,-2.5);
        this.sphere.display();
        this.scene.popMatrix();

        //Stabilizers
        this.scene.pushMatrix();
        this.scene.scale(1.25,1.25,1.25);
        this.scene.rotate(90.0*Math.PI/180.0, 0, -1, 0);
        this.scene.translate(-2.5,1,0);
        this.stabilizer1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.25,1.25,1.25);
        this.scene.rotate(90.0*Math.PI/180.0, 0, -1, 0);
        this.scene.translate(-2.5,1,0);
        this.scene.rotate(2*90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.translate(0,2,0);
        this.stabilizer2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.25,1.25,1.25);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.translate(-2.5,1,0);
        this.scene.translate(0,2,0);
        this.scene.rotate(90.0*Math.PI/180.0, 0, 0, 1);
        this.scene.translate(-5.5,-1.5,0);
        this.stabilizer3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.25,1.25,1.25);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.translate(-2.5,1,0);
        this.scene.translate(0,2,0);
        this.scene.rotate(90.0*Math.PI/180.0, 0, 0, 1);
        this.scene.translate(-5.5,-1.5,0);
        this.scene.rotate(2*90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.translate(0,2,0);
        this.stabilizer4.display();
        this.scene.popMatrix();
        
        //Propellers
        this.scene.pushMatrix();
        this.scene.translate(0.375,-1.68,-1.05);
        this.scene.scale(0.75,0.75,0.75);
        this.propeller1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.375,-1.68,-1.05);
        this.scene.scale(0.75,0.75,0.75);
        this.propeller2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.375,-1.6,-1.05);
        this.scene.scale(0.025,0.025,0.025);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.375,-1.6,-1.05);
        this.scene.scale(0.025,0.025,0.025);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12
        
        this.sphere.updateSlices(this.slices);
        this.sphere.updateStacks(this.stacks);
        this.cylinder.updateSlices(this.slices);

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}
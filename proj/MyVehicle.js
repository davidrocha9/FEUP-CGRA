/**
* MyPyramid
* @constructor
*/
class MyVehicle extends CGFobject {
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
        this.elapsedTime = 0;
        this.totalTime = 0;
        this.time = 0;
        
        this.blimp = new MyBlimp(scene, 16,8);
        this.flag = new MyFlag(scene);
        this.rope = new MyCylinder(scene, 16);

        this.initBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-10, so slices varies 3-93

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    
    autoPilot(){
        if (this.autopilot){
            this.autopilot = false;
        }
        else{
            this.autopilot = true;
            this.auto_x = this.x + 5*Math.sin((this.vehicleAngle + 90)*Math.PI/180);
            this.auto_z = this.z + 5*Math.cos((this.vehicleAngle + 90)*Math.PI/180);
            this.time = 0.0;
            this.elapsedTime = 0.0;
            this.blimp.stabilizer1.setAngle(-20*1.5);
            this.blimp.stabilizer2.setAngle(-20*1.5);
        }
    }

    update(t){
        if (this.autopilot){
            if (this.time == 0){
    		    this.time = t;
    	    }
    	    this.elapsedTime = (t - this.time) / 1000.0;
    	    //this.totalTime += this.elapsedTime;
    	    this.time = t;
    	    this.vehicleAngle += 360.0*this.elapsedTime/5;
    	    this.x = -5 * Math.cos(this.vehicleAngle * Math.PI/180) + this.auto_x ;
            this.z = 5 * Math.sin(this.vehicleAngle * Math.PI/180) + this.auto_z ;
    	    //console.log(this.totalTime);
        }
        else{
            this.x += this.speed * Math.sin(this.vehicleAngle*Math.PI/180);
            this.z += this.speed * Math.cos(this.vehicleAngle*Math.PI/180);
        }
        
        if (this.speed != 0)
            this.flag.update(this.speed, t / 100 % 1000);

        this.blimp.propeller1.setAngle(this.speed*t);
        this.blimp.propeller2.setAngle(-this.speed*t);
    }

    turn(angle) {
        if (this.speed < 0){
            this.vehicleAngle -= angle;
        }
        else{
            this.vehicleAngle += angle;
        }
        this.vehicleAngle %= 360;
        this.blimp.stabilizer1.setAngle(-angle*1.5);
        this.blimp.stabilizer2.setAngle(-angle*1.5);
    }

    accelerate(acceleration) {
        if (this.speed + acceleration > 0)
            this.speed += acceleration;
        else
            this.speed = 0;
    }

    reset() {
        this.x = 0;
        this.z = 0;
        this.vehicleAngle = 0;
        this.elapsedTime = 0;
        this.totalTime = 0;
        this.time = 0;
        this.auto_angle = 0;
        this.autopilot = false; 
        this.speed = 0;
        this.blimp.stabilizer1.setAngle(0);
        this.blimp.stabilizer2.setAngle(0);
    }
    
    display(){
        this.scene.pushMatrix();
        this.scene.translate(0,10,0);
        /*if (this.autopilot){
            this.scene.translate(this.auto_x, 0, this.auto_z);
            this.scene.rotate(this.auto_angle, 0, 1, 0);
            this.scene.translate(-this.auto_x, 0, -this.auto_z);
        }*/
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.vehicleAngle*Math.PI/180.0, 0, 1, 0);
        this.scene.scale(this.scene.scaleFactor,this.scene.scaleFactor,this.scene.scaleFactor);
        this.scene.pushMatrix();
        this.blimp.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-3.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(2,1.25,1);
        this.flag.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.005,0.005,1);
        this.scene.translate(0,0,-2.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.rope.display();
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
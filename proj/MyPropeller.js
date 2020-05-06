/**
 * MyPropeller
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPropeller extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.sphere = new MySphere(this.scene, 16, 8);
        this.sphere.initBuffers();
        this.angle = 0;
    }

    setAngle(angle){
        this.angle= angle*Math.PI/180;
    }

    display() {
        this.scene.setDiffuse(0,0,1);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(0, 0, 0.5, 1);
        
        this.scene.pushMatrix();
        this.scene.translate(0,0.1,0);
        this.scene.rotate(this.angle,0,0,1);
        this.scene.scale(0.3,0.3,0.3);
    	this.scene.scale(0.1,0.7,0.01);
        this.sphere.display();
        this.scene.popMatrix();
    }
}
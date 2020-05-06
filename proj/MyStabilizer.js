/**
 * MyStabilizer
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyStabilizer extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.quad = new MyQuad(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.quad.initBuffers();
        this.triangle.initBuffers();
        this.angle = 0;
    }

    setAngle(angle){
        this.angle= angle*Math.PI/180;
    }

    display() {
    	this.scene.pushMatrix();
        this.scene.rotate(this.angle,1,0,0);

        this.scene.pushMatrix();
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(2,0,0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}
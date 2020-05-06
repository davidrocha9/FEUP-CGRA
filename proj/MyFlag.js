/**
 * MyFlag
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFlag extends CGFobject {
	constructor(scene) {
        super(scene);
        this.flag1 = new MyPlane(this.scene, 15);
        this.flag2 = new MyPlane(this.scene, 15);
        
        //Movement Shaders
        this.shader=new CGFshader(this.scene.gl, "shaders/flag.vert", "shaders/flag.frag");;
    }

    update(s, t){
    }
	
	display(){
		this.scene.pushMatrix();
		this.flag1.display();
		this.scene.popMatrix();
    }
}
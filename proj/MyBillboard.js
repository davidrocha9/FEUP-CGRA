/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBillboard extends CGFobject {
	constructor(scene) {
        super(scene);
        this.board = new MyPlane(scene);
        this.bar = new MyPlane(scene);
        this.beam1 = new MyPlane(scene);
        this.beam2 = new MyPlane(scene);
        this.texture = new CGFtexture(this.scene, "images/billboard.png");
        this.wood = new CGFtexture(this.scene, "images/grey.png");
        this.barShader = new CGFshader(scene.gl, 'shaders/bar.vert', 'shaders/bar.frag');
        this.dropped = 0;
    }
    
    update() {
        this.barShader.setUniformsValues({ drops: ++this.dropped});
    }

    reset() {
        this.dropped = 0;
        this.barShader.setUniformsValues({ drops: 0 });
    }
    
	display(){
        this.scene.pushMatrix();
        this.scene.translate(0,-12.5,-24);
        this.scene.scale(8,8,8);

		this.scene.pushMatrix();
		this.texture.bind(0);
		//this.scene.translate(0,-22.5,0);
		this.scene.scale(2,1,1);
        this.board.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.wood.bind(0);
		//this.scene.translate(0.95,-23.5,0);
		this.scene.translate(0.95,-1,0);
		this.scene.scale(0.1,1,1);
        this.beam1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		//this.scene.translate(-0.95,-23.5,0);
		this.scene.translate(-0.95,-1,0);
		this.scene.scale(0.1,1,1);
        this.beam2.display();
		this.scene.popMatrix();
        
        this.scene.setActiveShader(this.barShader);
		this.scene.pushMatrix();
		//this.scene.translate(0,-22.6,0.01);
		this.scene.translate(0,0,0.01)
		this.scene.scale(1.7,0.5,0);
        this.bar.display();
		this.scene.popMatrix();

		this.scene.setActiveShader(this.scene.defaultShader);
		this.scene.popMatrix();
    }
}
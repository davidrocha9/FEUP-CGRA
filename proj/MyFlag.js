/**
 * MyFlag
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFlag extends CGFobject {
	constructor(scene) {
        super(scene);
        this.flag = new MyPlane(this.scene, 15, true);

        this.shader = new CGFshader(this.scene.gl, "shaders/flag.vert", "shaders/flag.frag");
        this.texture = new CGFtexture(this.scene, "images/portugal.png");

        this.shader.setUniformsValues({uSampler: 0});
        this.shader.setUniformsValues({speed: 0});
        this.shader.setUniformsValues({time: 0});
    }

    update(speedFactor, timeFactor){
    	this.shader.setUniformsValues({speed: speedFactor});
        this.shader.setUniformsValues({time: timeFactor});
    }
	
	display(){
		this.texture.bind(0);
		this.scene.pushMatrix();
        this.scene.setActiveShader(this.shader);
        this.flag.display();
		this.scene.popMatrix();

		this.scene.setActiveShader(this.scene.defaultShader);
    }
}
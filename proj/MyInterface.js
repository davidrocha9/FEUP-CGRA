/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }
    
    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'selectedObject', this.scene.objectsID).name('Selected Object').onChange(this.scene.updateObject.bind(this.scene));
        this.gui.add(this.scene, 'selectedTexture', this.scene.textureList).name('Selected Texture').onChange(this.scene.updateTexture.bind(this.scene));
        
        this.initKeys();
        
        return true;
    }

    initKeys(){
        //create reference from the scene to the GUI
        this.scene.gui=this;

        //disable the processKeyboard function
        this.processKeyboard=function(){};

        //create a named array to store wich keys are being pressed
        this.activeKeys={};
    }
    processKeyDown(event){
        //called when a key is pressed down
        //mark it as active in the array
        this.activeKeys[event.code]=true;
    };
    processKeyUp(event){
        //called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
    };
    isKeyPressed(keyCode){
        //returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode]||false;
    }

}
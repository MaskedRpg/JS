//=============================================================================
// MBS - Mobile Dir Pad Upgraded
//-----------------------------------------------------------------------------
// por Masked
//=============================================================================
//-----------------------------------------------------------------------------
// Especificações do plugin (Não modifique!)
// Plugin specifications (Do not modify!)
//

/*:

@author Masked
@plugindesc v1.0 - Creates buttons on screen for mobile games.
<MBS MobileDirPad>
@help
==============================================================================
Introduction
==============================================================================
This plugin is an updated version of the old Mbs_MobileDirPad made by Masked 
(or Brandt).
It contains the new plugin parameters and also, unlike the old one, this one 
contains all the standard buttons of the Rpg maker mv.

==============================================================================
How to use
==============================================================================
If you don't want to use a button, just leave the parameter empty.
To hide or show the controls use the plugin commands(not case sensitive):

MobileDirPad disable
MobileDirPad enable

==============================================================================
Credits
==============================================================================
- You MUST give credits to Masked.
- You can optionally give credits to me, Eliaquim.

==============================================================================
Update log
==============================================================================
Version 1.0 - 04/11/2020
- Released!

@param dPadImage
@text DirPad image
@type file
@dir img/system
@desc The file path for the DPad image
@default

@param dPadX
@text Position X
@type number
@desc The DirPad image position X on screen 
@default 20
@parent dPadImage

@param dPadY
@text Position Y
@type number
@desc The DirPad image position Y on screen
@default 430
@parent dPadImage

@param dPadSize
@text DirPad size
@type number
@desc The DPad buttons size
@default 52
@parent dPadImage

@param actionButtonImage
@text Action button image
@type file
@dir img/system
@desc The file path for the Action Button image
@default

@param actionButtonX
@text Position X
@type number
@desc The ActionButton image position on screen (on format x; y)
@default 600
@parent actionButtonImage

@param actionButtonY
@text Position Y
@type number
@desc The ActionButton image position on screen (on format x; y)
@default 536
@parent actionButtonImage

@param cancelButtonImage
@text Cancel button image
@type file
@dir img/system
@desc The file path for the Cancel Button image
@default

@param cancelButtonX
@text Position X
@type number
@desc The CancelButton image position X on screen
@default 700
@parent cancelButtonImage

@param cancelButtonY
@text Position Y
@type number
@desc The CancelButton image position Y on screen
@parent cancelButtonImage

@param shiftButtonImage
@text Shift button image
@type file
@dir img/system
@desc The file path for the Attack Button image
@default

@param shiftButtonX
@text Position X
@type number
@desc The RunButton image position X on screen
@default 30
@parent shiftButtonImage

@param shiftButtonY
@text Position Y
@type number
@desc The RunButton image position Y on screen
@default 360
@parent shiftButtonImage

@param menuButtonImage
@text Menu button image
@type file
@dir img/system
@desc The file path for the Menu Button image
@default

@param menuButtonX
@text Position X
@type number
@desc The MenuButton image position X on screen
@default 760
@parent menuButtonImage

@param menuButtonY
@text Position Y
@type number
@desc The MenuButton image position Y on screen
@default 0
@parent menuButtonImage

@param qButtonImage
@text PageUp button image
@type file
@dir img/system
@desc The file path for the Q Button image
@default

@param qButtonX
@text Position X
@type number
@desc The QButton image position X on screen
@default 600
@parent qButtonImage

@param qButtonY
@text Position Y
@type number
@desc The QButton image position Y on screen
@default 440
@parent qButtonImage

@param wButtonImage
@text PageDown button image
@type file
@dir img/system
@desc The file path for the Q Button image
@default

@param wButtonX
@text Position X
@type number
@desc The QButton image position X on screen
@default 700
@parent wButtonImage

@param wButtonY
@text Position Y
@type number
@desc The QButton image position Y on screen
@default 406
@parent wButtonImage

@param opacity
@text Control's opacity
@type number
@min 0
@max 255
@desc The opacity used for the controls(0 - 255).
@default 255

@param hideDuration
@text Hide Duration
@type number
@desc Number of frames the UI hiding take
@default 15

@param pcDebug
@text Debug on Pc
@type boolean
@desc Set to 'true' if you want to debug the script on a computer and to 'false' otherwise.
@default true

@param onlyInMap
@text Only in Map
@type boolean
@desc Set to 'true' if you want the dpad to show up just at the map scene and to 'false' otherwise.
@default false
*/

/*:pt
@author Masked
@plugindesc v1.0 - Cria botões na tela para jogos mobile.
<MBS MobileDirPad>
@help

==============================================================================
Introdução
==============================================================================
Este plugin é uma versão atualizada do antigo Mbs_MobileDirPad feito por 
Masked(ou Brandt).
Contém os novos parâmetros de plugin e também, diferente do antigo, este 
contém todos os botões padrões do rpg maker mv.

==============================================================================
Como usar
==============================================================================
Para não usar um botão, apenas deixe o parâmetro vazio.

Para esconder ou mostrar os controles use os comandos de plugin:

MobileDirPad disable
MobileDirPad enable

==============================================================================
Créditos
==============================================================================
- Você DEVE dar créditos para o Masked.
- Você pode, se quiser, dar créditos para mim, Eliaquim.

==============================================================================
Atualizações
==============================================================================
Versão 1.0 - 11/04/2020
- Lançado!

@param dPadImage
@text DirPad image
@type file
@dir img/system
@desc O arquivo de imagem deste botão.
@default

@param dPadX
@text Posição X
@type number
@desc A posição X desse botão na tela.
@default 20
@parent dPadImage

@param dPadY
@text Posição Y
@type number
@desc A posição Y desse botão na tela.
@default 430
@parent dPadImage

@param dPadSize
@text DirPad size
@type number
@desc The DPad buttons size
@default 52
@parent dPadImage

@param actionButtonImage
@text Action button image
@type file
@dir img/system
@desc O arquivo de imagem deste botão.
@default

@param actionButtonX
@text Posição X
@type number
@desc A posição X desse botão na tela.
@default 600
@parent actionButtonImage

@param actionButtonY
@text Posição Y
@type number
@desc A posição Y desse botão na tela.
@default 536
@parent actionButtonImage

@param cancelButtonImage
@text Cancel button image
@type file
@dir img/system
@desc O arquivo de imagem deste botão.
@default

@param cancelButtonX
@text Posição X
@type number
@desc A posição X desse botão na tela.
@default 700
@parent cancelButtonImage

@param cancelButtonY
@text Posição Y
@type number
@desc A posição Y desse botão na tela.
@parent cancelButtonImage

@param shiftButtonImage
@text Shift button image
@type file
@dir img/system
@desc O arquivo de imagem deste botão.
@default

@param shiftButtonX
@text Posição X
@type number
@desc A posição X desse botão na tela.
@default 30
@parent shiftButtonImage

@param shiftButtonY
@text Posição Y
@type number
@desc A posição Y desse botão na tela.
@default 360
@parent shiftButtonImage

@param menuButtonImage
@text Menu button image
@type file
@dir img/system
@desc O arquivo de imagem deste botão.
@default

@param menuButtonX
@text Posição X
@type number
@desc A posição X desse botão na tela.
@default 760
@parent menuButtonImage

@param menuButtonY
@text Posição Y
@type number
@desc A posição Y desse botão na tela.
@default 0
@parent menuButtonImage

@param qButtonImage
@text PageUp button image
@type file
@dir img/system
@desc O arquivo de imagem deste botão.
@default

@param qButtonX
@text Posição X
@type number
@desc A posição X desse botão na tela.
@default 600
@parent qButtonImage

@param qButtonY
@text Posição Y
@type number
@desc A posição Y desse botão na tela.
@default 440
@parent qButtonImage

@param wButtonImage
@text PageDown button image
@type file
@dir img/system
@desc O arquivo de imagem deste botão.
@default

@param wButtonX
@text Posição X
@type number
@desc A posição X desse botão na tela.
@default 700
@parent wButtonImage

@param wButtonY
@text Posição Y
@type number
@desc A posição Y desse botão na tela.
@default 406
@parent wButtonImage

@param opacity
@text Opacidade do controle
@type number
@min 0
@max 255
@desc A transparência do controle(0 - 255).
@default 255

@param hideDuration
@text Delay para esconder controles
@type number
@desc Número de frames para o controle se esconder.
@default 15

@param pcDebug
@text Testar no pc
@type boolean
@desc Coloque para true se você quer testar os controles no pc.
@default true

@param onlyInMap
@text Somente no mapa
@type boolean
@desc Coloque true para mostrar os controles somente na cena do mapa.
@default false
*/

"use strict";

var Imported = Imported || {};
Imported.MBS_MobileDirPad_Upgraded = true;

var MBS = MBS || {};
MBS.MobileDirPad = MBS.MobileDirPad || {};

MBS.MobileDirPad.convertParameters = function(parameters){
    MBS.MobileDirPad.parseParameters = function(string) {
        try {
            return JSON.parse(string, (key, value) => {
                try {
                    return MBS.MobileDirPad.parseParameters(value)
                } catch (e) {
                    return value
                } 
            })
        } catch (e) {
            return string
            }
        }
        return MBS.MobileDirPad.parseParameters(JSON.stringify(parameters))
};

MBS.MobileDirPad.Parameters = PluginManager.parameters('MBS_MobileDirPad_Upgraded');
MBS.MobileDirPad.Param = MBS.MobileDirPad.convertParameters(MBS.MobileDirPad.Parameters) || {};
 
 	//-----------------------------------------------------------------------------
	// Module functions
	//

 	MBS.MobileDirPad.enable = function(flag) {
		Scene_Base.dirpad = flag;
		if (flag) {
			SceneManager._scene.showUserInterface();
		} else {
			SceneManager._scene.hideUserInterface();
		}
	};

	//-----------------------------------------------------------------------------
	// Sprite_DirPad
	//
	// Sprite for the Directional Pad

	function Sprite_DirPad() {
		this.initialize.apply(this, arguments);
	}

	Sprite_DirPad.prototype = Object.create(Sprite_Base.prototype);
	Sprite_DirPad.prototype.constructor = Sprite_DirPad;

	Sprite_DirPad.prototype.initialize = function() {
		Sprite_Base.prototype.initialize.call(this);
		this.bitmap = ImageManager.loadSystem(MBS.MobileDirPad.Param.dPadImage);
		this.anchor.y = 0;//0.5;
		this.anchor.x = 0;//0.5;
		this.z = 5;
		this._lastDir = '';
	};

	Sprite_DirPad.prototype.update = function() {
		Sprite_Base.prototype.update.call(this);
		if (!this.visible) return;
		this.updateMovement();
		this.updateTouch();
	};

	Sprite_DirPad.prototype.updateMovement = function() {
		if (this._moveDuration > 0) {
			this.x += this._moveSpeed;
			this._moveDuration--;
		}
	};

	Sprite_DirPad.prototype.updateTouch = function() {
		if (this._lastDir.length > 0) {
			this._lastDir.split(" ").forEach(function (d) { 
				Input._currentState[d] = false; 
			});
			this._lastDir = '';
		}

		let s = MBS.MobileDirPad.Param.dPadSize;

		if (TouchInput.isPressed()) {
			let sx = this.x - this.width * this.anchor.x;
			let sy = this.y - this.height * this.anchor.y;
			let rect = this.getBounds();
			
			this._lastDir = '';

			if (rect.contains(TouchInput.x,TouchInput.y) && TouchInput.x - rect.x > s * 2) {
				Input._currentState['right'] = true;
				this._lastDir = 'right';
			} else if (rect.contains(TouchInput.x,TouchInput.y) && TouchInput.x - rect.x < s) {
				Input._currentState['left'] = true;
				this._lastDir = 'left';
			} 
			if (rect.contains(TouchInput.x,TouchInput.y) && TouchInput.y - rect.y > s * 2) {
				Input._currentState['down'] = true;
				this._lastDir += ' down';
			} else if (rect.contains(TouchInput.x,TouchInput.y) && TouchInput.y - rect.y < s) {
				Input._currentState['up'] = true;
				this._lastDir += ' up';
			}
			this._lastDir = this._lastDir.trim();
		}
	};

	Sprite_DirPad.prototype.hide = function() {
		this._moveDuration = MBS.MobileDirPad.Param.hideDuration;
		let dest = 0 - 64 - this.width * (1 + this.anchor.x);
		this._moveSpeed = (dest - this.x) / this._moveDuration;
	};

	Sprite_DirPad.prototype.show = function() {
		this._moveDuration = MBS.MobileDirPad.Param.hideDuration;
		let dest = MBS.MobileDirPad.Param.dPadX;
		this._moveSpeed = (dest - this.x) / this._moveDuration;
	};

	//-----------------------------------------------------------------------------
	// Sprite_ActionButton
	//
	// Sprite for the action button

	function Sprite_mbsButton() {
		this.initialize.apply(this, arguments);
	}

	Sprite_mbsButton.prototype = Object.create(Sprite_Base.prototype);
	Sprite_mbsButton.prototype.constructor = Sprite_mbsButton;

	Sprite_mbsButton.prototype.initialize = function(type) {
		Sprite_Base.prototype.initialize.call(this);
		this._type = type;
		
		let imgPath = '';  // default, empty string
	switch (type) {
		case 0:
	imgPath = MBS.MobileDirPad.Param.actionButtonImage;
    break;
		case 1:
    imgPath = MBS.MobileDirPad.Param.cancelButtonImage;
    break;
		case 2:
    imgPath = MBS.MobileDirPad.Param.shiftButtonImage;
    break;
		case 3:
    imgPath = MBS.MobileDirPad.Param.menuButtonImage;
    break;
		case 4:
    imgPath = MBS.MobileDirPad.Param.qButtonImage;
    break;
		case 5:
    imgPath = MBS.MobileDirPad.Param.wButtonImage;
    break;
		default:
    console.error('MBS_MobileDirPad_Upgraded.js: button type ' + type + ' not recognised!');
    break;
}
		// These next two lines are the ones you edited
		if (imgPath == '') {
			this.visible = false;  // make invisible if no image is assigned
		}else{
			this.bitmap = ImageManager.loadSystem(imgPath);  // else load image
		}
		 

		this.anchor.y = 0;//0.5;
		this.anchor.x = 0;//0.5;
		this._moveDuration = 0;
		this._moveSpeed = 0;
		this.z = 5;
	};

	Sprite_mbsButton.prototype.update = function() {
		Sprite_Base.prototype.update.call(this);
		if (!this.visible) return;
		this.updateMovement();
		this.updateTouch();
	};

	Sprite_mbsButton.prototype.updateMovement = function() {
		if (this._moveDuration > 0) {
			this.x += this._moveSpeed;
			this._moveDuration--;
		}
	};

	Sprite_mbsButton.prototype.updateTouch = function() {
		switch(this._type){
			case 0:
				if(TouchInput.isTriggered()){
					let rect = new PIXI.Rectangle(this.x - this.width * this.anchor.x, this.y - this.height * this.anchor.y, this.width, this.height);
					Input._currentState['ok'] = rect.contains(TouchInput.x, TouchInput.y);
				} else {
					Input._currentState['ok'] = false;
				}
			break;
			case 1:
				if(TouchInput.isTriggered()){
					let rect = new PIXI.Rectangle(this.x - this.width * this.anchor.x, this.y - this.height * this.anchor.y, this.width, this.height);
					Input._currentState['cancel'] = rect.contains(TouchInput.x, TouchInput.y);
				} else {
					Input._currentState['cancel'] = false;
				}
			break;
			case 2:
				if(TouchInput.isTriggered()){
					let rect = new PIXI.Rectangle(this.x - this.width * this.anchor.x, this.y - this.height * this.anchor.y, this.width, this.height);
					Input._currentState['shift'] = rect.contains(TouchInput.x, TouchInput.y);
				} else {
					Input._currentState['shift'] = false;
				}
			break;
			case 3:
				if(TouchInput.isTriggered()){
					let rect = new PIXI.Rectangle(this.x - this.width * this.anchor.x, this.y - this.height * this.anchor.y, this.width, this.height);
					Input._currentState['menu'] = rect.contains(TouchInput.x, TouchInput.y);
				} else {
					Input._currentState['menu'] = false;
				}
			break;
			case 4:
				if(TouchInput.isTriggered()){
					let rect = new PIXI.Rectangle(this.x - this.width * this.anchor.x, this.y - this.height * this.anchor.y, this.width, this.height);
					Input._currentState['pageup'] = rect.contains(TouchInput.x, TouchInput.y);
				} else {
					Input._currentState['pageup'] = false;
				}
			break;
			case 5:
				if(TouchInput.isTriggered()){
					let rect = new PIXI.Rectangle(this.x - this.width * this.anchor.x, this.y - this.height * this.anchor.y, this.width, this.height);
					Input._currentState['pagedown'] = rect.contains(TouchInput.x, TouchInput.y);
				} else {
					Input._currentState['pagedown'] = false;
				}
			break;
		}
	};

	Sprite_mbsButton.prototype.hide = function() {
		this._moveDuration = MBS.MobileDirPad.Param.hideDuration;
		let dest = Graphics.width + this.width * this.anchor.x + 64;
		this._moveSpeed = (dest - this.x) / this._moveDuration;
	}

	Sprite_mbsButton.prototype.show = function() {
		this._moveDuration = MBS.MobileDirPad.Param.hideDuration;
		
		let dest = '';  // default, empty string
			switch (this._type) {
				case 0:
			dest = MBS.MobileDirPad.Param.actionButtonX;
			break;
				case 1:
			dest = MBS.MobileDirPad.Param.cancelButtonX;
			break;
				case 2:
			dest = MBS.MobileDirPad.Param.shiftButtonX;
			break;
				case 3:
			dest = MBS.MobileDirPad.Param.menuButtonX;
			break;
				case 4:
			dest = MBS.MobileDirPad.Param.qButtonX;
			break;
				case 5:
			dest = MBS.MobileDirPad.Param.wButtonX;
			break;
				default:
			console.error('MBS_MobileDirPad_Upgraded.js: button type ' + type + ' not recognised!');
			break;
		}
		this._moveSpeed = (dest - this.x) / this._moveDuration;
	}

	//-----------------------------------------------------------------------------
	// Scene_Base
	//
	// The base scene class for all other scenes

	Scene_Base.prototype.isMobileDevice = function() {
		return Utils.isMobileDevice() || MBS.MobileDirPad.Param.pcDebug;
	};

	Scene_Base.dirpad = true;

	MBS.MobileDirPad.Scene_Base_start = Scene_Base.prototype.start;
	Scene_Base.prototype.start = function() {
	    MBS.MobileDirPad.Scene_Base_start.apply(this, arguments);
	    Scene_Base.dirpad = Scene_Base.dirpad && this.isMobileDevice();

	    if (!MBS.MobileDirPad.Param.onlyInMap || this instanceof Scene_Map) {
		    this.createDirPad();
		    this.createActionButtons();
		    MBS.MobileDirPad.enable(Scene_Base.dirpad);
		}
	};

	MBS.MobileDirPad.Scene_Base_update = Scene_Base.prototype.update;
	Scene_Base.prototype.update = function() {
		MBS.MobileDirPad.Scene_Base_update.apply(this, arguments);
		if (this.isMobileDevice() && this._dirPad != undefined && this._aButton != undefined && this._cButton != undefined && this._shiftButton != undefined && this._mButton != undefined && this._qButton != undefined && this._wButton != undefined)
			this._dirPad.visible = this._aButton.visible = this._cButton.visible = this._shiftButton.visible = this._mButton.visible = this._qButton.visible = this._wButton.visible = Scene_Base.dirpad;
	};

	Scene_Base.prototype.createDirPad = function() {
		this._dirPad = new Sprite_DirPad();
		this._dirPad.opacity = MBS.MobileDirPad.Param.opacity;

		this._dirPad.x = MBS.MobileDirPad.Param.dPadX;
		this._dirPad.y = MBS.MobileDirPad.Param.dPadY;

		this.addChild(this._dirPad);
	};

	Scene_Base.prototype.createActionButtons = function() {
		this._aButton = new Sprite_mbsButton(0);
		this._aButton.opacity = MBS.MobileDirPad.Param.opacity;

		this._aButton.x = MBS.MobileDirPad.Param.actionButtonX;
		this._aButton.y = MBS.MobileDirPad.Param.actionButtonY;

		this._cButton = new Sprite_mbsButton(1);
		this._cButton.opacity = MBS.MobileDirPad.Param.opacity;

		this._cButton.x = MBS.MobileDirPad.Param.cancelButtonX;
		this._cButton.y = MBS.MobileDirPad.Param.cancelButtonY;
		
		this._shiftButton = new Sprite_mbsButton(2);
		this._shiftButton.opacity = MBS.MobileDirPad.Param.opacity;

		this._shiftButton.x = MBS.MobileDirPad.Param.shiftButtonX;
		this._shiftButton.y = MBS.MobileDirPad.Param.shiftButtonY;
		
		this._mButton = new Sprite_mbsButton(3);
		this._mButton.opacity = MBS.MobileDirPad.Param.opacity;

		this._mButton.x = MBS.MobileDirPad.Param.menuButtonX;
		this._mButton.y = MBS.MobileDirPad.Param.menuButtonY;
		
		this._qButton = new Sprite_mbsButton(4);
		this._qButton.opacity = MBS.MobileDirPad.Param.opacity;

		this._qButton.x = MBS.MobileDirPad.Param.qButtonX;
		this._qButton.y = MBS.MobileDirPad.Param.qButtonY;
		
		this._wButton = new Sprite_mbsButton(5);
		this._wButton.opacity = MBS.MobileDirPad.Param.opacity;

		this._wButton.x = MBS.MobileDirPad.Param.wButtonX;
		this._wButton.y = MBS.MobileDirPad.Param.wButtonY;

		this.addChild(this._aButton);
		this.addChild(this._cButton);
		this.addChild(this._shiftButton);
		this.addChild(this._mButton);
		this.addChild(this._qButton);
		this.addChild(this._wButton);
	};

	Scene_Base.prototype.hideUserInterface = function() {
		this._dirPad.hide();
		this._aButton.hide();
		this._cButton.hide();
		this._shiftButton.hide();
		this._mButton.hide();
		this._qButton.hide();
		this._wButton.hide();
	};

	Scene_Base.prototype.showUserInterface = function() {
		this._dirPad.show();
		this._aButton.show();
		this._cButton.show();
		this._shiftButton.show();
		this._mButton.show();
		this._qButton.show();
		this._wButton.show();
	};

	//-----------------------------------------------------------------------------
	// Scene_Map
	//
	// The map scene

	MBS.MobileDirPad.Scene_Map_createMessageWindow = Scene_Map.prototype.createMessageWindow;
	Scene_Map.prototype.createMessageWindow = function() {
		MBS.MobileDirPad.Scene_Map_createMessageWindow.call(this);
		let oldStartMessage = this._messageWindow.startMessage;
		let oldTerminateMessage = this._messageWindow.terminateMessage;
		let scene = this;

		this._messageWindow.startMessage = function() {
			oldStartMessage.apply(this, arguments);
			scene.hideUserInterface();
		};
		Window_Message.prototype.terminateMessage = function() {
		    oldTerminateMessage.apply(this, arguments);
		    scene.showUserInterface();
		};
	};

	MBS.MobileDirPad.Scene_Map_terminate = Scene_Map.prototype.terminate;
	Scene_Map.prototype.terminate = function() {
		if (this.isMobileDevice())
	    	this._dirPad.visible = this._aButton.visible = this._cButton.visible = this._shiftButton.visible = this._mButton.visible = this._qButton.visible = this._wButton.visible = false;
		MBS.MobileDirPad.Scene_Map_terminate.apply(this, arguments);
	};

	MBS.MobileDirPad.Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
	Scene_Map.prototype.processMapTouch = function() {
		if (!(this.isMobileDevice() && Scene_Base.dirpad)) MBS.MobileDirPad.Scene_Map_processMapTouch.apply(this, arguments);
	};

	//-----------------------------------------------------------------------------
	// Plugin Command
	//

	MBS.MobileDirPad.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		MBS.MobileDirPad.Game_Interpreter_pluginCommand.apply(this, arguments);
		let cmd = command.toUpperCase();
		let args0 = args[0].toUpperCase();
  		if (cmd === "MOBILEDIRPAD") {
  			if (args0 === "ENABLE") {
  				MBS.MobileDirPad.enable(true);
  			} else if (args0 === "disable") {
  				MBS.MobileDirPad.enable(false);
  			}
  		}
  	};

// })(MBS.MobileDirPad);

Imported["MBS_MobileDirPad_Upgraded"] = 1.1;

if (Imported["MVCommons"]) {
  	PluginManager.register("MBS_MobileDirPad_Upgraded", 1.1, "Shows a DirPad and action buttons when using mobile devices", {  
      email: "masked.rpg@gmail.com",
      name: "Masked", 
      website: "N/A"
    }, "31-10-2015");
}

// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: skin_1.ggsk
// Generated Пн май 18 15:37:22 2020

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._nav_buttons=document.createElement('div');
		this._nav_buttons.ggId="nav_buttons";
		this._nav_buttons.ggLeft=-174;
		this._nav_buttons.ggTop=-40;
		this._nav_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nav_buttons.ggVisible=true;
		this._nav_buttons.className='ggskin ggskin_container ';
		this._nav_buttons.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -174px;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 347px;';
		this._nav_buttons.setAttribute('style',hs);
		this._nav_buttons.style[domTransform + 'Origin']='50% 50%';
		me._nav_buttons.ggIsActive=function() {
			return false;
		}
		me._nav_buttons.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._nav_buttons.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._pan_left=document.createElement('div');
		this._pan_left__img=document.createElement('img');
		this._pan_left__img.className='ggskin ggskin_svg';
		this._pan_left__img.setAttribute('src',basePath + 'images/pan_left.svg');
		this._pan_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pan_left__img['ondragstart']=function() { return false; };
		this._pan_left.appendChild(this._pan_left__img);
		this._pan_left.ggId="pan_left";
		this._pan_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pan_left.ggVisible=true;
		this._pan_left.className='ggskin ggskin_svg ';
		this._pan_left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._pan_left.setAttribute('style',hs);
		this._pan_left.style[domTransform + 'Origin']='50% 50%';
		me._pan_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pan_left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pan_left.onmouseout=function () {
			me.elementMouseDown['pan_left']=false;
		}
		this._pan_left.onmousedown=function () {
			me.elementMouseDown['pan_left']=true;
		}
		this._pan_left.onmouseup=function () {
			me.elementMouseDown['pan_left']=false;
		}
		this._pan_left.ontouchend=function () {
			me.elementMouseDown['pan_left']=false;
		}
		this._pan_left.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._pan_left);
		this._pan_right=document.createElement('div');
		this._pan_right__img=document.createElement('img');
		this._pan_right__img.className='ggskin ggskin_svg';
		this._pan_right__img.setAttribute('src',basePath + 'images/pan_right.svg');
		this._pan_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pan_right__img['ondragstart']=function() { return false; };
		this._pan_right.appendChild(this._pan_right__img);
		this._pan_right.ggId="pan_right";
		this._pan_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pan_right.ggVisible=true;
		this._pan_right.className='ggskin ggskin_svg ';
		this._pan_right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._pan_right.setAttribute('style',hs);
		this._pan_right.style[domTransform + 'Origin']='50% 50%';
		me._pan_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pan_right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pan_right.onmouseout=function () {
			me.elementMouseDown['pan_right']=false;
		}
		this._pan_right.onmousedown=function () {
			me.elementMouseDown['pan_right']=true;
		}
		this._pan_right.onmouseup=function () {
			me.elementMouseDown['pan_right']=false;
		}
		this._pan_right.ontouchend=function () {
			me.elementMouseDown['pan_right']=false;
		}
		this._pan_right.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._pan_right);
		this._tilt_down=document.createElement('div');
		this._tilt_down__img=document.createElement('img');
		this._tilt_down__img.className='ggskin ggskin_svg';
		this._tilt_down__img.setAttribute('src',basePath + 'images/tilt_down.svg');
		this._tilt_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._tilt_down__img['ondragstart']=function() { return false; };
		this._tilt_down.appendChild(this._tilt_down__img);
		this._tilt_down.ggId="tilt_down";
		this._tilt_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tilt_down.ggVisible=true;
		this._tilt_down.className='ggskin ggskin_svg ';
		this._tilt_down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._tilt_down.setAttribute('style',hs);
		this._tilt_down.style[domTransform + 'Origin']='50% 50%';
		me._tilt_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tilt_down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tilt_down.onmouseout=function () {
			me.elementMouseDown['tilt_down']=false;
		}
		this._tilt_down.onmousedown=function () {
			me.elementMouseDown['tilt_down']=true;
		}
		this._tilt_down.onmouseup=function () {
			me.elementMouseDown['tilt_down']=false;
		}
		this._tilt_down.ontouchend=function () {
			me.elementMouseDown['tilt_down']=false;
		}
		this._tilt_down.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._tilt_down);
		this._tilt_up=document.createElement('div');
		this._tilt_up__img=document.createElement('img');
		this._tilt_up__img.className='ggskin ggskin_svg';
		this._tilt_up__img.setAttribute('src',basePath + 'images/tilt_up.svg');
		this._tilt_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._tilt_up__img['ondragstart']=function() { return false; };
		this._tilt_up.appendChild(this._tilt_up__img);
		this._tilt_up.ggId="tilt_up";
		this._tilt_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tilt_up.ggVisible=true;
		this._tilt_up.className='ggskin ggskin_svg ';
		this._tilt_up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._tilt_up.setAttribute('style',hs);
		this._tilt_up.style[domTransform + 'Origin']='50% 50%';
		me._tilt_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tilt_up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tilt_up.onmouseout=function () {
			me.elementMouseDown['tilt_up']=false;
		}
		this._tilt_up.onmousedown=function () {
			me.elementMouseDown['tilt_up']=true;
		}
		this._tilt_up.onmouseup=function () {
			me.elementMouseDown['tilt_up']=false;
		}
		this._tilt_up.ontouchend=function () {
			me.elementMouseDown['tilt_up']=false;
		}
		this._tilt_up.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._tilt_up);
		this._zoom_in=document.createElement('div');
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_svg';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.svg');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_in__img['ondragstart']=function() { return false; };
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in.ggId="zoom_in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_svg ';
		this._zoom_in.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_in.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_in.onmouseout=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function () {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._zoom_in);
		this._zoom_out=document.createElement('div');
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_svg';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.svg');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoom_out__img['ondragstart']=function() { return false; };
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.ggId="zoom_out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_svg ';
		this._zoom_out.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoom_out.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoom_out.onmouseout=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._zoom_out);
		this._sound_off=document.createElement('div');
		this._sound_off__img=document.createElement('img');
		this._sound_off__img.className='ggskin ggskin_svg';
		this._sound_off__img.setAttribute('src',basePath + 'images/sound_off.svg');
		this._sound_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sound_off__img['ondragstart']=function() { return false; };
		this._sound_off.appendChild(this._sound_off__img);
		this._sound_off.ggId="sound_off";
		this._sound_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sound_off.ggVisible=false;
		this._sound_off.className='ggskin ggskin_svg ';
		this._sound_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._sound_off.setAttribute('style',hs);
		this._sound_off.style[domTransform + 'Origin']='50% 50%';
		me._sound_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sound_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sound_off.onclick=function () {
			me.player.playSound("_main","0");
			me._sound_on.style[domTransition]='none';
			me._sound_on.style.visibility=(Number(me._sound_on.style.opacity)>0||!me._sound_on.style.opacity)?'inherit':'hidden';
			me._sound_on.ggVisible=true;
			me._sound_off.style[domTransition]='none';
			me._sound_off.style.visibility='hidden';
			me._sound_off.ggVisible=false;
		}
		this._sound_off.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._sound_off);
		this._sound_on=document.createElement('div');
		this._sound_on__img=document.createElement('img');
		this._sound_on__img.className='ggskin ggskin_svg';
		this._sound_on__img.setAttribute('src',basePath + 'images/sound_on.svg');
		this._sound_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sound_on__img['ondragstart']=function() { return false; };
		this._sound_on.appendChild(this._sound_on__img);
		this._sound_on.ggId="sound_on";
		this._sound_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sound_on.ggVisible=true;
		this._sound_on.className='ggskin ggskin_svg ';
		this._sound_on.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._sound_on.setAttribute('style',hs);
		this._sound_on.style[domTransform + 'Origin']='50% 50%';
		me._sound_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sound_on.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sound_on.onclick=function () {
			me.player.stopSound("_main");
			me._sound_off.style[domTransition]='none';
			me._sound_off.style.visibility=(Number(me._sound_off.style.opacity)>0||!me._sound_off.style.opacity)?'inherit':'hidden';
			me._sound_off.ggVisible=true;
			me._sound_on.style[domTransition]='none';
			me._sound_on.style.visibility='hidden';
			me._sound_on.ggVisible=false;
		}
		this._sound_on.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._sound_on);
		this._rotate=document.createElement('div');
		this._rotate__img=document.createElement('img');
		this._rotate__img.className='ggskin ggskin_svg';
		this._rotate__img.setAttribute('src',basePath + 'images/rotate.svg');
		this._rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rotate__img['ondragstart']=function() { return false; };
		this._rotate.appendChild(this._rotate__img);
		this._rotate.ggId="rotate";
		this._rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rotate.ggVisible=true;
		this._rotate.className='ggskin ggskin_svg ';
		this._rotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._rotate.setAttribute('style',hs);
		this._rotate.style[domTransform + 'Origin']='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._rotate.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._rotate);
		this._fullscreen_exit=document.createElement('div');
		this._fullscreen_exit__img=document.createElement('img');
		this._fullscreen_exit__img.className='ggskin ggskin_svg';
		this._fullscreen_exit__img.setAttribute('src',basePath + 'images/fullscreen_exit.svg');
		this._fullscreen_exit__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen_exit__img['ondragstart']=function() { return false; };
		this._fullscreen_exit.appendChild(this._fullscreen_exit__img);
		this._fullscreen_exit.ggId="fullscreen_exit";
		this._fullscreen_exit.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_exit.ggVisible=false;
		this._fullscreen_exit.className='ggskin ggskin_svg ';
		this._fullscreen_exit.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 245px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._fullscreen_exit.setAttribute('style',hs);
		this._fullscreen_exit.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_exit.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen_exit.onclick=function () {
			me.player.exitFullscreen();
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		}
		this._fullscreen_exit.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._fullscreen_exit);
		this._fullscreen_enter=document.createElement('div');
		this._fullscreen_enter__img=document.createElement('img');
		this._fullscreen_enter__img.className='ggskin ggskin_svg';
		this._fullscreen_enter__img.setAttribute('src',basePath + 'images/fullscreen_enter.svg');
		this._fullscreen_enter__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen_enter__img['ondragstart']=function() { return false; };
		this._fullscreen_enter.appendChild(this._fullscreen_enter__img);
		this._fullscreen_enter.ggId="fullscreen_enter";
		this._fullscreen_enter.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_enter.ggVisible=true;
		this._fullscreen_enter.className='ggskin ggskin_svg ';
		this._fullscreen_enter.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 245px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._fullscreen_enter.setAttribute('style',hs);
		this._fullscreen_enter.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_enter.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen_enter.onclick=function () {
			me.player.enterFullscreen();
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		}
		this._fullscreen_enter.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._fullscreen_enter);
		this._home=document.createElement('div');
		this._home__img=document.createElement('img');
		this._home__img.className='ggskin ggskin_svg';
		this._home__img.setAttribute('src',basePath + 'images/home.svg');
		this._home__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._home__img['ondragstart']=function() { return false; };
		this._home.appendChild(this._home__img);
		this._home.ggId="home";
		this._home.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._home.ggVisible=true;
		this._home.className='ggskin ggskin_svg ';
		this._home.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 315px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._home.setAttribute('style',hs);
		this._home.style[domTransform + 'Origin']='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._home.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._home.onclick=function () {
			me.player.moveToDefaultView(0);
		}
		this._home.ggUpdatePosition=function () {
		}
		this._nav_buttons.appendChild(this._home);
		this.divSkin.appendChild(this._nav_buttons);
		this._loading_screen=document.createElement('div');
		this._loading_screen.ggId="loading_screen";
		this._loading_screen.ggLeft=-100;
		this._loading_screen.ggTop=-25;
		this._loading_screen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_screen.ggVisible=true;
		this._loading_screen.className='ggskin ggskin_rectangle ';
		this._loading_screen.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,80,80,0.784314);';
		hs+='border : 1px solid #ffffff;';
		hs+='height : 49px;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 199px;';
		this._loading_screen.setAttribute('style',hs);
		this._loading_screen.style[domTransform + 'Origin']='50% 50%';
		me._loading_screen.ggIsActive=function() {
			return false;
		}
		me._loading_screen.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading_screen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._hourglass=document.createElement('div');
		this._hourglass__img=document.createElement('img');
		this._hourglass__img.className='ggskin ggskin_svg';
		this._hourglass__img.setAttribute('src',basePath + 'images/hourglass.svg');
		this._hourglass__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._hourglass__img['ondragstart']=function() { return false; };
		this._hourglass.appendChild(this._hourglass__img);
		this._hourglass.ggId="hourglass";
		this._hourglass.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hourglass.ggVisible=true;
		this._hourglass.className='ggskin ggskin_svg ';
		this._hourglass.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		this._hourglass.setAttribute('style',hs);
		this._hourglass.style[domTransform + 'Origin']='50% 50%';
		me._hourglass.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hourglass.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hourglass.ggUpdatePosition=function () {
		}
		this._loading_screen.appendChild(this._hourglass);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="loading_bar";
		this._loading_bar.ggTop=10;
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle ';
		this._loading_bar.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 10px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_bar.style[domTransform + 'Origin']='0% 50%';
		me._loading_bar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_bar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_bar.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 1 + h/2) + 'px';
			}
		}
		this._loading_screen.appendChild(this._loading_bar);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading_text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text ';
		this._loading_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 163px;';
		this._loading_text.setAttribute('style',hs);
		this._loading_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 163px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<b>\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_text.ggUpdatePosition=function () {
		}
		this._loading_screen.appendChild(this._loading_text);
		this.divSkin.appendChild(this._loading_screen);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading_screen.style[domTransition]='none';
			me._loading_screen.style.visibility='hidden';
			me._loading_screen.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading_screen.style[domTransition]='none';
			me._loading_screen.style.visibility=(Number(me._loading_screen.style.opacity)>0||!me._loading_screen.style.opacity)?'inherit':'hidden';
			me._loading_screen.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		}
		this.divSkin.ggExitFullscreen=function() {
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['pan_left']) {
			me.player.changePanLog(3,true);
		}
		if (me.elementMouseDown['pan_right']) {
			me.player.changePanLog(-3,true);
		}
		if (me.elementMouseDown['tilt_down']) {
			me.player.changeTiltLog(-3,true);
		}
		if (me.elementMouseDown['tilt_up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
		me._loading_text.ggUpdateText();
	};
	this.addSkin();
};
(()=>{var _o="165";var bh=0,Xo=1,Eh=2;var bc=1,wh=2,dn=3,In=0,Ie=1,Fe=2,Cn=0,Ri=1,qo=2,Yo=3,Zo=4,Th=5,Zn=100,Ah=101,Rh=102,Ch=103,Ph=104,Ih=200,Lh=201,Uh=202,Dh=203,Ta=204,Aa=205,Nh=206,Fh=207,Oh=208,Bh=209,zh=210,kh=211,Hh=212,Vh=213,Gh=214,Wh=0,Xh=1,qh=2,Js=3,Yh=4,Zh=5,$h=6,Jh=7,Ec=0,Kh=1,Qh=2,Pn=0,jh=1,tu=2,eu=3,xo=4,nu=5,iu=6,su=7;var wc=300,Li=301,Ui=302,Ra=303,Ca=304,Pr=306,Pa=1e3,Jn=1001,Ia=1002,ze=1003,ru=1004;var Es=1005;var Ze=1006,Wr=1007;var Kn=1008;var Ln=1009,au=1010,ou=1011,Ks=1012,Tc=1013,Di=1014,An=1015,Ir=1016,Ac=1017,Rc=1018,Ni=1020,lu=35902,cu=1021,hu=1022,en=1023,uu=1024,du=1025,Ci=1026,Fi=1027,fu=1028,Cc=1029,pu=1030,Pc=1031,Ic=1033,Xr=33776,qr=33777,Yr=33778,Zr=33779,$o=35840,Jo=35841,Ko=35842,Qo=35843,jo=36196,tl=37492,el=37496,nl=37808,il=37809,sl=37810,rl=37811,al=37812,ol=37813,ll=37814,cl=37815,hl=37816,ul=37817,dl=37818,fl=37819,pl=37820,ml=37821,$r=36492,gl=36494,_l=36495,mu=36283,xl=36284,vl=36285,yl=36286;var Qs=2300,La=2301,Jr=2302,Ml=2400,Sl=2401,bl=2402;var gu=3200,_u=3201,Lc=0,xu=1,Tn="",Ne="srgb",Fn="srgb-linear",vo="display-p3",Lr="display-p3-linear",js="linear",Qt="srgb",tr="rec709",er="p3";var oi=7680;var El=519,vu=512,yu=513,Mu=514,Uc=515,Su=516,bu=517,Eu=518,wu=519,wl=35044;var Tl="300 es",pn=2e3,nr=2001,Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=1234567,Qi=Math.PI/180,ss=180/Math.PI;function si(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function yo(i,t){return(i%t+t)%t}function Tu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Au(i,t,e){return i!==t?(e-i)/(t-i):0}function ji(i,t,e){return(1-e)*i+e*t}function Ru(i,t,e,n){return ji(i,t,1-Math.exp(-e*n))}function Cu(i,t=1){return t-Math.abs(yo(i,t*2)-t)}function Pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Iu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Uu(i,t){return i+Math.random()*(t-i)}function Du(i){return i*(.5-Math.random())}function Nu(i){i!==void 0&&(Al=i);let t=Al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fu(i){return i*Qi}function Ou(i){return i*ss}function Bu(i){return(i&i-1)===0&&i!==0}function zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ri={DEG2RAD:Qi,RAD2DEG:ss,generateUUID:si,clamp:ye,euclideanModulo:yo,mapLinear:Tu,inverseLerp:Au,lerp:ji,damp:Ru,pingpong:Cu,smoothstep:Pu,smootherstep:Iu,randInt:Lu,randFloat:Uu,randFloatSpread:Du,seededRandom:Nu,degToRad:Fu,radToDeg:Ou,isPowerOfTwo:Bu,ceilPowerOfTwo:zu,floorPowerOfTwo:ku,setQuaternionFromProperEuler:Hu,normalize:Te,denormalize:Ei},ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],M=s[4],b=s[7],D=s[2],T=s[5],A=s[8];return r[0]=a*_+o*E+l*D,r[3]=a*m+o*M+l*T,r[6]=a*f+o*b+l*A,r[1]=c*_+h*E+u*D,r[4]=c*m+h*M+u*T,r[7]=c*f+h*b+u*A,r[2]=d*_+p*E+g*D,r[5]=d*m+p*M+g*T,r[8]=d*f+p*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kr=new Pt;function Dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){let i=ir("canvas");return i.style.display="block",i}var Rl={};function Nc(i){i in Rl||(Rl[i]=!0,console.warn(i))}function Gu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cl=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pl=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[Fn]:{transfer:js,primaries:tr,toReference:i=>i,fromReference:i=>i},[Ne]:{transfer:Qt,primaries:tr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lr]:{transfer:js,primaries:er,toReference:i=>i.applyMatrix3(Pl),fromReference:i=>i.applyMatrix3(Cl)},[vo]:{transfer:Qt,primaries:er,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Pl),fromReference:i=>i.applyMatrix3(Cl).convertLinearToSRGB()}},Wu=new Set([Fn,Lr]),Zt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ws[t].toReference,s=ws[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ws[i].primaries},getTransfer:function(i){return i===Tn?js:ws[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var li,Ua=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=ir("canvas")),li.width=t.width,li.height=t.height;let n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xu=0,sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qu=0,He=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=Ze,a=Kn,o=en,l=Ln,c=i.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=si(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pa:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pa:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=wc;He.DEFAULT_ANISOTROPY=1;var te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,b=(p+1)/2,D=(f+1)/2,T=(h+d)/4,A=(u+_)/4,N=(g+m)/4;return M>b&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=A/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=N/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=N/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends Un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},rr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let D=Math.sqrt(M),T=Math.atan2(D,f*E);m=Math.sin(m*T)/D,o=Math.sin(o*T)/D}let b=o*E;if(l=l*m+d*b,c=c*m+p*b,h=h*m+g*b,u=u*m+_*b,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new I,Il=new Dn,Qn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),As.subVectors(this.max,qi),ci.subVectors(t.a,qi),hi.subVectors(t.b,qi),ui.subVectors(t.c,qi),yn.subVectors(hi,ci),Mn.subVectors(ui,hi),Hn.subVectors(ci,ui);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Hn.z,Hn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Hn.z,0,-Hn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Hn.y,Hn.x,0];return!ea(e,ci,hi,ui,As)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,ci,hi,ui,As))?!1:(Rs.crossVectors(yn,Mn),e=[Rs.x,Rs.y,Rs.z],ea(e,ci,hi,ui,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},on=[new I,new I,new I,new I,new I,new I,new I,new I],Xe=new I,Ts=new Qn,ci=new I,hi=new I,ui=new I,yn=new I,Mn=new I,Hn=new I,qi=new I,As=new I,Rs=new I,Vn=new I;function ea(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);let o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Yu=new Qn,Yi=new I,na=new I,rs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);let e=Yi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(na)),this.expandByPoint(Yi.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new I,ia=new I,Cs=new I,Sn=new I,sa=new I,Ps=new I,ra=new I,Fa=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(ia);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Cs),o=Sn.dot(this.direction),l=-Sn.dot(Cs),c=Sn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(Cs,d),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){sa.subVectors(e,t),Ps.subVectors(n,t),ra.crossVectors(sa,Ps);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);let l=o*this.direction.dot(Ps.crossVectors(Sn,Ps));if(l<0)return null;let c=o*this.direction.dot(sa.cross(Sn));if(c<0||l+c>a)return null;let h=-o*Sn.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,$u)}lookAt(t,e,n){let s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),bn.crossVectors(n,Ue),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),bn.crossVectors(n,Ue)),bn.normalize(),Is.crossVectors(Ue,bn),s[0]=bn.x,s[4]=Is.x,s[8]=Ue.x,s[1]=bn.y,s[5]=Is.y,s[9]=Ue.y,s[2]=bn.z,s[6]=Is.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],M=n[7],b=n[11],D=n[15],T=s[0],A=s[4],N=s[8],S=s[12],y=s[1],P=s[5],k=s[9],B=s[13],H=s[2],Y=s[6],V=s[10],Q=s[14],G=s[3],ht=s[7],pt=s[11],gt=s[15];return r[0]=a*T+o*y+l*H+c*G,r[4]=a*A+o*P+l*Y+c*ht,r[8]=a*N+o*k+l*V+c*pt,r[12]=a*S+o*B+l*Q+c*gt,r[1]=h*T+u*y+d*H+p*G,r[5]=h*A+u*P+d*Y+p*ht,r[9]=h*N+u*k+d*V+p*pt,r[13]=h*S+u*B+d*Q+p*gt,r[2]=g*T+_*y+m*H+f*G,r[6]=g*A+_*P+m*Y+f*ht,r[10]=g*N+_*k+m*V+f*pt,r[14]=g*S+_*B+m*Q+f*gt,r[3]=E*T+M*y+b*H+D*G,r[7]=E*A+M*P+b*Y+D*ht,r[11]=E*N+M*k+b*V+D*pt,r[15]=E*S+M*B+b*Q+D*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,M=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,b=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,D=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*E+n*M+s*b+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=E*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*f+n*l*f)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*A,t[4]=M*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*A,t[8]=b*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=D*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,E=l*c,M=l*h,b=l*u,D=n.x,T=n.y,A=n.z;return s[0]=(1-(_+f))*D,s[1]=(p+b)*D,s[2]=(g-M)*D,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(d+f))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+M)*A,s[9]=(m-E)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=di.set(s[0],s[1],s[2]).length(),a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);let c=1/r,h=1/a,u=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=pn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===pn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===nr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=pn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,g,_;if(o===pn)g=(a+r)*u,_=-2*u;else if(o===nr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},di=new I,qe=new oe,Zu=new I(0,0,0),$u=new I(1,1,1),bn=new I,Is=new I,Ue=new I,Ll=new oe,Ul=new Dn,nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ju=0,Dl=new I,fi=new Dn,cn=new oe,Ls=new I,Zi=new I,Ku=new I,Qu=new Dn,Nl=new I(1,0,0),Fl=new I(0,1,0),Ol=new I(0,0,1),Bl={type:"added"},ju={type:"removed"},pi={type:"childadded",child:null},aa={type:"childremoved",child:null},Re=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new nn,n=new Dn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Pt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Zi,Ls,this.up):cn.lookAt(Ls,Zi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(cn),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,Ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new I(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=new I,hn=new I,oa=new I,un=new I,mi=new I,gi=new I,zl=new I,la=new I,ca=new I,ha=new I,wi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),hn.subVectors(n,e),oa.subVectors(t,e);let a=Ye.dot(Ye),o=Ye.dot(hn),l=Ye.dot(oa),c=hn.dot(hn),h=hn.dot(oa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),hn.subVectors(t,e),Ye.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ye.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;mi.subVectors(s,n),gi.subVectors(r,n),la.subVectors(t,n);let l=mi.dot(la),c=gi.dot(la);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,s);let h=mi.dot(ca),u=gi.dot(ca);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(mi,a);ha.subVectors(t,r);let p=mi.dot(ha),g=gi.dot(ha);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(gi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return zl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(zl,o);let f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=yo(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ua(a,r,t+1/3),this.g=ua(a,r,t),this.b=ua(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Fc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Zt.fromWorkingColorSpace(be.copy(this),t),Math.round(ye(be.r*255,0,255))*65536+Math.round(ye(be.g*255,0,255))*256+Math.round(ye(be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ne){Zt.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(Us);let n=ji(En.h,Us.h,e),s=ji(En.s,Us.s,e),r=ji(En.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new It;It.NAMES=Fc;var td=0,jn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Ri,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Nn=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ue=new I,Ds=new ct,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Nc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}};var or=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},ed=0,Be=new oe,da=new Re,_i=new I,De=new Qn,$i=new Qn,ve=new I,Ve=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?lr:or)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(De.min,$i.min),De.expandByPoint(ve),ve.addVectors(De.max,$i.max),De.expandByPoint(ve)):(De.expandByPoint($i.min),De.expandByPoint($i.max))}De.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(t,c),ve.add(_i)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new I,l[N]=new I;let c=new I,h=new I,u=new I,d=new ct,p=new ct,g=new ct,_=new I,m=new I;function f(N,S,y){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[N].add(_),o[S].add(_),o[y].add(_),l[N].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,S=E.length;N<S;++N){let y=E[N],P=y.start,k=y.count;for(let B=P,H=P+k;B<H;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new I,b=new I,D=new I,T=new I;function A(N){D.fromBufferAttribute(s,N),T.copy(D);let S=o[N];M.copy(S),M.sub(D.multiplyScalar(D.dot(S))).normalize(),b.crossVectors(T,S);let P=b.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,P)}for(let N=0,S=E.length;N<S;++N){let y=E[N],P=y.start,k=y.count;for(let B=P,H=P+k;B<H;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kl=new oe,Gn=new Fa,Ns=new rs,Hl=new I,xi=new I,vi=new I,yi=new I,fa=new I,Fs=new I,Os=new ct,Bs=new ct,zs=new ct,Vl=new I,Gl=new I,Wl=new I,ks=new I,Hs=new I,de=class extends Re{constructor(t=new Ve,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fa.fromBufferAttribute(u,t),a?Fs.addScaledVector(fa,h):Fs.addScaledVector(fa.sub(e),h))}e.add(Fs)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Ns,Hl)===null||Gn.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,D=M;b<D;b+=3){let T=o.getX(b),A=o.getX(b+1),N=o.getX(b+2);s=Vs(this,f,t,n,c,h,u,T,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=Vs(this,a,t,n,c,h,u,E,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,D=M;b<D;b+=3){let T=b,A=b+1,N=b+2;s=Vs(this,f,t,n,c,h,u,T,A,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=m,M=m+1,b=m+2;s=Vs(this,a,t,n,c,h,u,E,M,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function nd(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===In,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:i}}function Vs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xi),i.getVertexPosition(l,vi),i.getVertexPosition(c,yi);let h=nd(i,t,e,n,xi,vi,yi,ks);if(h){s&&(Os.fromBufferAttribute(s,o),Bs.fromBufferAttribute(s,l),zs.fromBufferAttribute(s,c),h.uv=wi.getInterpolation(ks,xi,vi,yi,Os,Bs,zs,new ct)),r&&(Os.fromBufferAttribute(r,o),Bs.fromBufferAttribute(r,l),zs.fromBufferAttribute(r,c),h.uv1=wi.getInterpolation(ks,xi,vi,yi,Os,Bs,zs,new ct)),a&&(Vl.fromBufferAttribute(a,o),Gl.fromBufferAttribute(a,l),Wl.fromBufferAttribute(a,c),h.normal=wi.getInterpolation(ks,xi,vi,yi,Vl,Gl,Wl,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};wi.getNormal(xi,vi,yi,u.normal),h.face=u}return h}var ti=class i extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(_,m,f,E,M,b,D,T,A,N,S){let y=b/A,P=D/N,k=b/2,B=D/2,H=T/2,Y=A+1,V=N+1,Q=0,G=0,ht=new I;for(let pt=0;pt<V;pt++){let gt=pt*P-B;for(let kt=0;kt<Y;kt++){let $t=kt*y-k;ht[_]=$t*E,ht[m]=gt*M,ht[f]=H,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[f]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(kt/A),u.push(1-pt/N),Q+=1}}for(let pt=0;pt<N;pt++)for(let gt=0;gt<A;gt++){let kt=d+gt+Y*pt,$t=d+gt+Y*(pt+1),X=d+(gt+1)+Y*(pt+1),K=d+(gt+1)+Y*pt;l.push(kt,$t,K),l.push($t,X,K),G+=6}o.addGroup(p,G,S),p+=G,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let s in n)t[s]=n[s]}return t}function id(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var sd={clone:Oi,merge:Ae},rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},cr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=new I,Xl=new ct,ql=new ct,Ee=class extends cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,ql),e.subVectors(ql,Xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mi=-90,Si=1,Oa=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(Mi,Si,t,e);s.layers=this.layers,this.add(s);let r=new Ee(Mi,Si,t,e);r.layers=this.layers,this.add(r);let a=new Ee(Mi,Si,t,e);a.layers=this.layers,this.add(a);let o=new Ee(Mi,Si,t,e);o.layers=this.layers,this.add(o);let l=new Ee(Mi,Si,t,e);l.layers=this.layers,this.add(l);let c=new Ee(Mi,Si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hr=class extends He{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ba=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ti(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Cn});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Ze),new Oa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},pa=new I,od=new I,ld=new Pt,fn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pa.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ld.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new rs,Gs=new I,as=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],M=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+a,d+h,m+g,b+E).normalize(),n[3].setComponents(l-a,d-h,m-g,b-E).normalize(),n[4].setComponents(l-o,d-u,m-_,b-M).normalize(),e===pn)n[5].setComponents(l+o,d+u,m+_,b+M).normalize();else if(e===nr)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bi=class i extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let E=f*d-a;for(let M=0;M<c;M++){let b=M*u-r;g.push(b,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let M=E+c*f,b=E+c*(f+1),D=E+1+c*(f+1),T=E+1+c*f;p.push(M,b,T),p.push(b,D,T)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:xd,batching_vertex:vd,begin_vertex:yd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:bd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Td,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Id,color_vertex:Ld,common:Ud,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Hd,envmap_fragment:Vd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:nf,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Zd,fog_fragment:$d,fog_pars_fragment:Jd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:Qd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:tf,lights_pars_begin:ef,lights_toon_fragment:sf,lights_toon_pars_fragment:rf,lights_phong_fragment:af,lights_phong_pars_fragment:of,lights_physical_fragment:lf,lights_physical_pars_fragment:cf,lights_fragment_begin:hf,lights_fragment_maps:uf,lights_fragment_end:df,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:mf,logdepthbuf_vertex:gf,map_fragment:_f,map_pars_fragment:xf,map_particle_fragment:vf,map_particle_pars_fragment:yf,metalnessmap_fragment:Mf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:bf,morphcolor_vertex:Ef,morphnormal_vertex:wf,morphtarget_pars_vertex:Tf,morphtarget_vertex:Af,normal_fragment_begin:Rf,normal_fragment_maps:Cf,normal_pars_fragment:Pf,normal_pars_vertex:If,normal_vertex:Lf,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:Of,opaque_fragment:Bf,packing:zf,premultiplied_alpha_fragment:kf,project_vertex:Hf,dithering_fragment:Vf,dithering_pars_fragment:Gf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Yf,shadowmap_vertex:Zf,shadowmask_pars_fragment:$f,skinbase_vertex:Jf,skinning_pars_vertex:Kf,skinning_vertex:Qf,skinnormal_vertex:jf,specularmap_fragment:tp,specularmap_pars_fragment:ep,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:ap,uv_pars_vertex:op,uv_vertex:lp,worldpos_vertex:cp,background_vert:hp,background_frag:up,backgroundCube_vert:dp,backgroundCube_frag:fp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:xp,distanceRGBA_frag:vp,equirect_vert:yp,equirect_frag:Mp,linedashed_vert:Sp,linedashed_frag:bp,meshbasic_vert:Ep,meshbasic_frag:wp,meshlambert_vert:Tp,meshlambert_frag:Ap,meshmatcap_vert:Rp,meshmatcap_frag:Cp,meshnormal_vert:Pp,meshnormal_frag:Ip,meshphong_vert:Lp,meshphong_frag:Up,meshphysical_vert:Dp,meshphysical_frag:Np,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Bp,points_frag:zp,shadow_vert:kp,shadow_frag:Hp,sprite_vert:Vp,sprite_frag:Gp},nt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},tn={basic:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ae([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ae([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ae([nt.points,nt.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ae([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ae([nt.common,nt.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ae([nt.sprite,nt.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Ae([nt.common,nt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Ae([nt.lights,nt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};tn.physical={uniforms:Ae([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Ws={r:0,b:0,g:0},Xn=new nn,Wp=new oe;function Xp(i,t,e,n,s,r,a){let o=new It(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1,b=g(E);b===null?f(o,l):b&&b.isColor&&(f(b,1),M=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){let b=g(M);b&&(b.isCubeTexture||b.mapping===Pr)?(h===void 0&&(h=new de(new ti(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Oi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(M.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(Xn)),h.material.toneMapped=Zt.getTransfer(b.colorSpace)!==Qt,(u!==b||d!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new de(new Bi(2,2),new Ge({name:"BackgroundMaterial",uniforms:Oi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==Qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,M){E.getRGB(Ws,Oc(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m}}function qp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,P,k,B,H){let Y=!1,V=u(B,k,P);r!==V&&(r=V,c(r.object)),Y=p(y,B,k,H),Y&&g(y,B,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(y,P,k,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,k){let B=k.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Y=H[P.id];Y===void 0&&(Y={},H[P.id]=Y);let V=Y[B];return V===void 0&&(V=d(l()),Y[B]=V),V}function d(y){let P=[],k=[],B=[];for(let H=0;H<e;H++)P[H]=0,k[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,P,k,B){let H=r.attributes,Y=P.attributes,V=0,Q=k.getAttributes();for(let G in Q)if(Q[G].location>=0){let pt=H[G],gt=Y[G];if(gt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),pt===void 0||pt.attribute!==gt||gt&&pt.data!==gt.data)return!0;V++}return r.attributesNum!==V||r.index!==B}function g(y,P,k,B){let H={},Y=P.attributes,V=0,Q=k.getAttributes();for(let G in Q)if(Q[G].location>=0){let pt=Y[G];pt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));let gt={};gt.attribute=pt,pt&&pt.data&&(gt.data=pt.data),H[G]=gt,V++}r.attributes=H,r.attributesNum=V,r.index=B}function _(){let y=r.newAttributes;for(let P=0,k=y.length;P<k;P++)y[P]=0}function m(y){f(y,0)}function f(y,P){let k=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;k[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),H[y]!==P&&(i.vertexAttribDivisor(y,P),H[y]=P)}function E(){let y=r.newAttributes,P=r.enabledAttributes;for(let k=0,B=P.length;k<B;k++)P[k]!==y[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function M(y,P,k,B,H,Y,V){V===!0?i.vertexAttribIPointer(y,P,k,H,Y):i.vertexAttribPointer(y,P,k,B,H,Y)}function b(y,P,k,B){_();let H=B.attributes,Y=k.getAttributes(),V=P.defaultAttributeValues;for(let Q in Y){let G=Y[Q];if(G.location>=0){let ht=H[Q];if(ht===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let pt=ht.normalized,gt=ht.itemSize,kt=t.get(ht);if(kt===void 0)continue;let $t=kt.buffer,X=kt.type,K=kt.bytesPerElement,dt=X===i.INT||X===i.UNSIGNED_INT||ht.gpuType===Tc;if(ht.isInterleavedBufferAttribute){let rt=ht.data,Nt=rt.stride,Lt=ht.offset;if(rt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<G.locationSize;Vt++)f(G.location+Vt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Vt=0;Vt<G.locationSize;Vt++)m(G.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Vt=0;Vt<G.locationSize;Vt++)M(G.location+Vt,gt/G.locationSize,X,pt,Nt*K,(Lt+gt/G.locationSize*Vt)*K,dt)}else{if(ht.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)f(G.location+rt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let rt=0;rt<G.locationSize;rt++)M(G.location+rt,gt/G.locationSize,X,pt,gt*K,gt/G.locationSize*rt*K,dt)}}else if(V!==void 0){let pt=V[Q];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}E()}function D(){N();for(let y in n){let P=n[y];for(let k in P){let B=P[k];for(let H in B)h(B[H].object),delete B[H];delete P[k]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let k in P){let B=P[k];for(let H in B)h(B[H].object),delete B[H];delete P[k]}delete n[y.id]}function A(y){for(let P in n){let k=n[P];if(k[y.id]===void 0)continue;let B=k[y.id];for(let H in B)h(B[H].object),delete B[H];delete k[y.id]}}function N(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Yp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(c[p],h[p]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==en&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let A=T===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!A)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:b,maxSamples:D}}function $p(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,M=E*4,b=f.clippingState||null;l.value=b,b=h(g,d,M,p);for(let D=0;D!==M;++D)b[D]=e[D];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,b=p;M!==_;++M,b+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jp(i){let t=new WeakMap;function e(a,o){return o===Ra?a.mapping=Li:o===Ca&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ra||o===Ca)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ba(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zi=class extends cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ti=4,Yl=[.125,.215,.35,.446,.526,.582],$n=20,ma=new zi,Zl=new It,ga=null,_a=0,xa=0,va=!1,Yn=(1+Math.sqrt(5))/2,bi=1/Yn,$l=[new I(-Yn,bi,0),new I(Yn,bi,0),new I(-bi,0,Yn),new I(bi,0,Yn),new I(0,Yn,-bi),new I(0,Yn,bi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ur=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Ir,format:en,colorSpace:Fn,depthBuffer:!1},s=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kp(r)),this._blurMaterial=Qp(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,s){let o=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zl),h.toneMapping=Pn,h.autoClear=!1;let p=new Nn({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new de(new ti,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Zl),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let M=this._cubeSize;Xs(s,E*M,f>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ma)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$l[(s-r-1)%$l.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);let f=[],E=0;for(let A=0;A<$n;++A){let N=A/_,S=Math.exp(-N*N/2);f.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let b=this._sizeLods[s],D=3*b*(s>M-Ti?s-M+Ti:0),T=4*(this._cubeSize-b);Xs(e,D,T,3*b,2*b),l.setRenderTarget(e),l.render(u,ma)}};function Kp(i){let t=[],e=[],n=[],s=i,r=i-Ti+1+Yl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ti?l=Yl[a-i+Ti-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,N=T>2?0:-1,S=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];E.set(S,_*g*T),M.set(d,m*g*T);let y=[T,T,T,T,T,T];b.set(y,f*g*T)}let D=new Ve;D.setAttribute("position",new ke(E,_)),D.setAttribute("uv",new ke(M,m)),D.setAttribute("faceIndex",new ke(b,f)),t.push(D),s>Ti&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jl(i,t,e){let n=new $e(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qp(i,t,e){let n=new Float32Array($n),s=new I(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Kl(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ql(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ra||l===Ca,h=l===Li||l===Ui;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ur(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ur(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Nc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function em(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let M=0,b=E.length;M<b;M+=3){let D=E[M+0],T=E[M+1],A=E[M+2];d.push(D,T,T,A,A,D)}}else if(g!==void 0){let E=g.array;_=g.version;for(let M=0,b=E.length/3-1;M<b;M+=3){let D=M+0,T=M+1,A=M+2;d.push(D,T,T,A,A,D)}}else return;let m=new(Dc(d)?lr:or)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function nm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,p[m]);else{_.multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)e.update(f,n,_[E])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function im(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sm(i,t,e){let n=new WeakMap,s=new te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let b=o.attributes.position.count*M,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*D*4*u),A=new rr(T,b,D,u);A.type=An,A.needsUpdate=!0;let N=M*4;for(let y=0;y<u;y++){let P=m[y],k=f[y],B=E[y],H=b*D*4*y;for(let Y=0;Y<P.count;Y++){let V=Y*N;p===!0&&(s.fromBufferAttribute(P,Y),T[H+V+0]=s.x,T[H+V+1]=s.y,T[H+V+2]=s.z,T[H+V+3]=0),g===!0&&(s.fromBufferAttribute(k,Y),T[H+V+4]=s.x,T[H+V+5]=s.y,T[H+V+6]=s.z,T[H+V+7]=0),_===!0&&(s.fromBufferAttribute(B,Y),T[H+V+8]=s.x,T[H+V+9]=s.y,T[H+V+10]=s.z,T[H+V+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ct(b,D)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var dr=class extends He{constructor(t,e,n,s,r,a,o,l,c,h=Ci){if(h!==Ci&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ci&&(n=Di),n===void 0&&h===Fi&&(n=Ni),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zc=new He,kc=new dr(1,1);kc.compareFunction=Uc;var Hc=new rr,Vc=new Na,Gc=new hr,jl=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function Vi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),me(e,n)}}function um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),me(e,n)}}function dm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ec.set(n),i.uniformMatrix4fv(this.addr,!1,ec),me(e,n)}}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function _m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?kc:zc;e.setTexture2D(t||r,s)}function Sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vc,s)}function bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gc,s)}function Em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hc,s)}function wm(i){switch(i){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Em}}function Tm(i,t){i.uniform1fv(this.addr,t)}function Am(i,t){let e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Rm(i,t){let e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Cm(i,t){let e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Pm(i,t){let e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Im(i,t){let e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lm(i,t){let e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Um(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Nm(i,t){i.uniform3iv(this.addr,t)}function Fm(i,t){i.uniform4iv(this.addr,t)}function Om(i,t){i.uniform1uiv(this.addr,t)}function Bm(i,t){i.uniform2uiv(this.addr,t)}function zm(i,t){i.uniform3uiv(this.addr,t)}function km(i,t){i.uniform4uiv(this.addr,t)}function Hm(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zc,r[a])}function Vm(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vc,r[a])}function Gm(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gc,r[a])}function Wm(i,t,e){let n=this.cache,s=t.length,r=Ur(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hc,r[a])}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Im;case 35676:return Lm;case 5124:case 35670:return Um;case 35667:case 35671:return Dm;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}var za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wm(e.type)}},ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xm(e.type)}},Ha=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ya=/(\w+)(\])?(\[|\.)?/g;function sc(i,t){i.seq.push(t),i.map[t.id]=t}function qm(i,t,e){let n=i.name,s=n.length;for(ya.lastIndex=0;;){let r=ya.exec(n),a=ya.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sc(e,c===void 0?new za(o,i,t):new ka(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ha(o),sc(e,u)),e=u}}}var Ii=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function rc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ym=37297,Zm=0;function $m(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Jm(i){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i),n;switch(t===e?n="":t===er&&e===tr?n="LinearDisplayP3ToLinearSRGB":t===tr&&e===er&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case Lr:return[n,"LinearTransferOETF"];case Ne:case vo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ac(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$m(i.getShaderSource(t),a)}else return s}function Km(i,t){let e=Jm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qm(i,t){let e;switch(t){case jh:e="Linear";break;case tu:e="Reinhard";break;case eu:e="OptimizedCineon";break;case xo:e="ACESFilmic";break;case iu:e="AgX";break;case su:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ki(i){return i!==""}function oc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(ng,sg)}var ig=new Map;function sg(i,t){let e=Ct[t];if(e===void 0){let n=ig.get(t);if(n!==void 0)e=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}var rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(i){return i.replace(rg,ag)}function ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function og(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Ui:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ec:t="ENVMAP_BLENDING_MULTIPLY";break;case Kh:t="ENVMAP_BLENDING_MIX";break;case Qh:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=og(e),c=lg(e),h=cg(e),u=hg(e),d=ug(e),p=jm(e),g=tg(r),_=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),f.length>0&&(f+=`
`)):(m=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),f=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,Km("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Va(a),a=oc(a,e),a=lc(a,e),o=Va(o),o=oc(o,e),o=lc(o,e),a=cc(a),o=cc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=E+m+a,b=E+f+o,D=rc(s,s.VERTEX_SHADER,M),T=rc(s,s.FRAGMENT_SHADER,b);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(T).trim(),Y=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{let Q=ac(s,D,"vertex"),G=ac(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+Q+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||H==="")&&(V=!1);V&&(P.diagnostics={runnable:Y,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(D),s.deleteShader(T),N=new Ii(s,_),S=eg(s,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Ym)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}var fg=0,Ga=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wa(t),e.set(t,n)),n}},Wa=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function pg(i,t,e,n,s,r,a){let o=new ar,l=new Ga,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,k,B){let H=k.fog,Y=B.geometry,V=S.isMeshStandardMaterial?k.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),G=Q&&Q.mapping===Pr?Q.image.height:null,ht=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=pt!==void 0?pt.length:0,kt=0;Y.morphAttributes.position!==void 0&&(kt=1),Y.morphAttributes.normal!==void 0&&(kt=2),Y.morphAttributes.color!==void 0&&(kt=3);let $t,X,K,dt;if(ht){let Jt=tn[ht];$t=Jt.vertexShader,X=Jt.fragmentShader}else $t=S.vertexShader,X=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),dt=l.getFragmentShaderID(S);let rt=i.getRenderTarget(),Nt=B.isInstancedMesh===!0,Lt=B.isBatchedMesh===!0,Vt=!!S.map,C=!!S.matcap,Ht=!!Q,Bt=!!S.aoMap,ie=!!S.lightMap,St=!!S.bumpMap,Gt=!!S.normalMap,Ft=!!S.displacementMap,Rt=!!S.emissiveMap,he=!!S.metalnessMap,w=!!S.roughnessMap,x=S.anisotropy>0,z=S.clearcoat>0,Z=S.dispersion>0,$=S.iridescence>0,J=S.sheen>0,vt=S.transmission>0,it=x&&!!S.anisotropyMap,st=z&&!!S.clearcoatMap,Ut=z&&!!S.clearcoatNormalMap,j=z&&!!S.clearcoatRoughnessMap,_t=$&&!!S.iridescenceMap,Ot=$&&!!S.iridescenceThicknessMap,wt=J&&!!S.sheenColorMap,at=J&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,zt=!!S.specularColorMap,le=!!S.specularIntensityMap,R=vt&&!!S.transmissionMap,ot=vt&&!!S.thicknessMap,W=!!S.gradientMap,q=!!S.alphaMap,et=S.alphaTest>0,Tt=!!S.alphaHash,Wt=!!S.extensions,ce=Pn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let _e={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:X,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Fn,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:C,envMap:Ht,envMapMode:Ht&&Q.mapping,envMapCubeUVHeight:G,aoMap:Bt,lightMap:ie,bumpMap:St,normalMap:Gt,displacementMap:d&&Ft,emissiveMap:Rt,normalMapObjectSpace:Gt&&S.normalMapType===xu,normalMapTangentSpace:Gt&&S.normalMapType===Lc,metalnessMap:he,roughnessMap:w,anisotropy:x,anisotropyMap:it,clearcoat:z,clearcoatMap:st,clearcoatNormalMap:Ut,clearcoatRoughnessMap:j,dispersion:Z,iridescence:$,iridescenceMap:_t,iridescenceThicknessMap:Ot,sheen:J,sheenColorMap:wt,sheenRoughnessMap:at,specularMap:Dt,specularColorMap:zt,specularIntensityMap:le,transmission:vt,transmissionMap:R,thicknessMap:ot,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ri&&S.alphaToCoverage===!1,alphaMap:q,alphaTest:et,alphaHash:Tt,combine:S.combine,mapUv:Vt&&_(S.map.channel),aoMapUv:Bt&&_(S.aoMap.channel),lightMapUv:ie&&_(S.lightMap.channel),bumpMapUv:St&&_(S.bumpMap.channel),normalMapUv:Gt&&_(S.normalMap.channel),displacementMapUv:Ft&&_(S.displacementMap.channel),emissiveMapUv:Rt&&_(S.emissiveMap.channel),metalnessMapUv:he&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:it&&_(S.anisotropyMap.channel),clearcoatMapUv:st&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:at&&_(S.sheenRoughnessMap.channel),specularMapUv:Dt&&_(S.specularMap.channel),specularColorMapUv:zt&&_(S.specularColorMap.channel),specularIntensityMapUv:le&&_(S.specularIntensityMap.channel),transmissionMapUv:R&&_(S.transmissionMap.channel),thicknessMapUv:ot&&_(S.thicknessMap.channel),alphaMapUv:q&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Gt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Vt||q),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fe,flipSided:S.side===Ie,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Wt&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function f(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),S.push(o.mask)}function b(S){let y=g[S.type],P;if(y){let k=tn[y];P=sd.clone(k.uniforms)}else P=S.uniforms;return P}function D(S,y){let P;for(let k=0,B=h.length;k<B;k++){let H=h[k];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new dg(i,y,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:D,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:N}}function mg(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){let f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){let f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||gg),n.length>1&&n.sort(d||uc),s.length>1&&s.sort(d||uc)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function _g(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new dc,i.set(n,[a])):s>=r.length?(a=new dc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new It};break;case"SpotLight":e={position:new I,direction:new I,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sg(i){let t=new xg,e=vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,M=0,b=0,D=0,T=0,A=0;c.sort(Mg);for(let S=0,y=c.length;S<y;S++){let P=c[S],k=P.color,B=P.intensity,H=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],B);A++}else if(P.isDirectionalLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,G=e.get(P);G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=V,p++}else if(P.isSpotLight){let V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(B),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;let Q=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,Q.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,P.castShadow){let G=e.get(P);G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Y,b++}_++}else if(P.isRectAreaLight){let V=t.get(P);V.color.copy(k).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let Q=P.shadow,G=e.get(P);G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=V,g++}else if(P.isHemisphereLight){let V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(B),V.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=V,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==E||N.numPointShadows!==M||N.numSpotShadows!==b||N.numSpotMaps!==D||N.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,N.directionalLength=p,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=E,N.numPointShadows=M,N.numSpotShadows=b,N.numSpotMaps=D,N.numLightProbes=A,n.version=yg++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let M=c[f];if(M.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(M.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function fc(i){let t=new Sg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function bg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new fc(i),t.set(s,[o])):r>=a.length?(o=new fc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xa=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tg(i,t,e){let n=new as,s=new ct,r=new ct,a=new te,o=new Xa({depthPacking:_u}),l=new qa,c={},h=e.maxTextureSize,u={[In]:Ie,[Ie]:In,[Fe]:Fe},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Eg,fragmentShader:wg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let f=this.type;this.render=function(T,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Cn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let B=f!==dn&&this.type===dn,H=f===dn&&this.type!==dn;for(let Y=0,V=T.length;Y<V;Y++){let Q=T[Y],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||B===!0||H===!0){let gt=this.type!==dn?{minFilter:ze,magFilter:ze}:{};G.map!==null&&G.map.dispose(),G.map=new $e(s.x,s.y,gt),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let pt=G.getViewportCount();for(let gt=0;gt<pt;gt++){let kt=G.getViewport(gt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),k.viewport(a),G.updateMatrices(Q,gt),n=G.getFrustum(),b(A,N,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===dn&&E(G,N),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function E(T,A){let N=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $e(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,N,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,N,p,_,null)}function M(T,A,N,S){let y=null,P=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=N.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=y.uuid,B=A.uuid,H=c[k];H===void 0&&(H={},c[k]=H);let Y=H[B];Y===void 0&&(Y=y.clone(),H[B]=Y,A.addEventListener("dispose",D)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,S===dn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=i.properties.get(y);k.light=N}return y}function b(T,A,N,S,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let B=t.update(T),H=T.material;if(Array.isArray(H)){let Y=B.groups;for(let V=0,Q=Y.length;V<Q;V++){let G=Y[V],ht=H[G.materialIndex];if(ht&&ht.visible){let pt=M(T,ht,S,y);T.onBeforeShadow(i,T,A,N,B,pt,G),i.renderBufferDirect(N,null,B,pt,T,G),T.onAfterShadow(i,T,A,N,B,pt,G)}}}else if(H.visible){let Y=M(T,H,S,y);T.onBeforeShadow(i,T,A,N,B,Y,null),i.renderBufferDirect(N,null,B,Y,T,null),T.onAfterShadow(i,T,A,N,B,Y,null)}}let k=T.children;for(let B=0,H=k.length;B<H;B++)b(k[B],A,N,S,y)}function D(T){T.target.removeEventListener("dispose",D);for(let N in c){let S=c[N],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function Ag(i){function t(){let R=!1,ot=new te,W=null,q=new te(0,0,0,0);return{setMask:function(et){W!==et&&!R&&(i.colorMask(et,et,et,et),W=et)},setLocked:function(et){R=et},setClear:function(et,Tt,Wt,ce,_e){_e===!0&&(et*=ce,Tt*=ce,Wt*=ce),ot.set(et,Tt,Wt,ce),q.equals(ot)===!1&&(i.clearColor(et,Tt,Wt,ce),q.copy(ot))},reset:function(){R=!1,W=null,q.set(-1,0,0,0)}}}function e(){let R=!1,ot=null,W=null,q=null;return{setTest:function(et){et?dt(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(et){ot!==et&&!R&&(i.depthMask(et),ot=et)},setFunc:function(et){if(W!==et){switch(et){case Wh:i.depthFunc(i.NEVER);break;case Xh:i.depthFunc(i.ALWAYS);break;case qh:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Yh:i.depthFunc(i.EQUAL);break;case Zh:i.depthFunc(i.GEQUAL);break;case $h:i.depthFunc(i.GREATER);break;case Jh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=et}},setLocked:function(et){R=et},setClear:function(et){q!==et&&(i.clearDepth(et),q=et)},reset:function(){R=!1,ot=null,W=null,q=null}}}function n(){let R=!1,ot=null,W=null,q=null,et=null,Tt=null,Wt=null,ce=null,_e=null;return{setTest:function(Jt){R||(Jt?dt(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Jt){ot!==Jt&&!R&&(i.stencilMask(Jt),ot=Jt)},setFunc:function(Jt,Qe,je){(W!==Jt||q!==Qe||et!==je)&&(i.stencilFunc(Jt,Qe,je),W=Jt,q=Qe,et=je)},setOp:function(Jt,Qe,je){(Tt!==Jt||Wt!==Qe||ce!==je)&&(i.stencilOp(Jt,Qe,je),Tt=Jt,Wt=Qe,ce=je)},setLocked:function(Jt){R=Jt},setClear:function(Jt){_e!==Jt&&(i.clearStencil(Jt),_e=Jt)},reset:function(){R=!1,ot=null,W=null,q=null,et=null,Tt=null,Wt=null,ce=null,_e=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,b=null,D=null,T=new It(0,0,0),A=0,N=!1,S=null,y=null,P=null,k=null,B=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,V=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=V>=2);let G=null,ht={},pt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),kt=new te().fromArray(pt),$t=new te().fromArray(gt);function X(R,ot,W,q){let et=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(R,Tt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<W;Wt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(ot+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Tt}let K={};K[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(Js),St(!1),Gt(Xo),dt(i.CULL_FACE),Bt(Cn);function dt(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function rt(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function Nt(R,ot){return h[R]!==ot?(i.bindFramebuffer(R,ot),h[R]=ot,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Lt(R,ot){let W=d,q=!1;if(R){W=u.get(ot),W===void 0&&(W=[],u.set(ot,W));let et=R.textures;if(W.length!==et.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Wt=et.length;Tt<Wt;Tt++)W[Tt]=i.COLOR_ATTACHMENT0+Tt;W.length=et.length,q=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,q=!0);q&&i.drawBuffers(W)}function Vt(R){return p!==R?(i.useProgram(R),p=R,!0):!1}let C={[Zn]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[Rh]:i.FUNC_REVERSE_SUBTRACT};C[Ch]=i.MIN,C[Ph]=i.MAX;let Ht={[Ih]:i.ZERO,[Lh]:i.ONE,[Uh]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[zh]:i.SRC_ALPHA_SATURATE,[Oh]:i.DST_COLOR,[Nh]:i.DST_ALPHA,[Dh]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Bh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[kh]:i.CONSTANT_COLOR,[Hh]:i.ONE_MINUS_CONSTANT_COLOR,[Vh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function Bt(R,ot,W,q,et,Tt,Wt,ce,_e,Jt){if(R===Cn){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),R!==Th){if(R!==_||Jt!==N){if((m!==Zn||M!==Zn)&&(i.blendEquation(i.FUNC_ADD),m=Zn,M=Zn),Jt)switch(R){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}f=null,E=null,b=null,D=null,T.set(0,0,0),A=0,_=R,N=Jt}return}et=et||ot,Tt=Tt||W,Wt=Wt||q,(ot!==m||et!==M)&&(i.blendEquationSeparate(C[ot],C[et]),m=ot,M=et),(W!==f||q!==E||Tt!==b||Wt!==D)&&(i.blendFuncSeparate(Ht[W],Ht[q],Ht[Tt],Ht[Wt]),f=W,E=q,b=Tt,D=Wt),(ce.equals(T)===!1||_e!==A)&&(i.blendColor(ce.r,ce.g,ce.b,_e),T.copy(ce),A=_e),_=R,N=!1}function ie(R,ot){R.side===Fe?rt(i.CULL_FACE):dt(i.CULL_FACE);let W=R.side===Ie;ot&&(W=!W),St(W),R.blending===Ri&&R.transparent===!1?Bt(Cn):Bt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);let q=R.stencilWrite;a.setTest(q),q&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Rt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(R){S!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),S=R)}function Gt(R){R!==bh?(dt(i.CULL_FACE),R!==y&&(R===Xo?i.cullFace(i.BACK):R===Eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),y=R}function Ft(R){R!==P&&(Y&&i.lineWidth(R),P=R)}function Rt(R,ot,W){R?(dt(i.POLYGON_OFFSET_FILL),(k!==ot||B!==W)&&(i.polygonOffset(ot,W),k=ot,B=W)):rt(i.POLYGON_OFFSET_FILL)}function he(R){R?dt(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function w(R){R===void 0&&(R=i.TEXTURE0+H-1),G!==R&&(i.activeTexture(R),G=R)}function x(R,ot,W){W===void 0&&(G===null?W=i.TEXTURE0+H-1:W=G);let q=ht[W];q===void 0&&(q={type:void 0,texture:void 0},ht[W]=q),(q.type!==R||q.texture!==ot)&&(G!==W&&(i.activeTexture(W),G=W),i.bindTexture(R,ot||K[R]),q.type=R,q.texture=ot)}function z(){let R=ht[G];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function wt(R){kt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),kt.copy(R))}function at(R){$t.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),$t.copy(R))}function Dt(R,ot){let W=l.get(ot);W===void 0&&(W=new WeakMap,l.set(ot,W));let q=W.get(R);q===void 0&&(q=i.getUniformBlockIndex(ot,R.name),W.set(R,q))}function zt(R,ot){let q=l.get(ot).get(R);o.get(ot)!==q&&(i.uniformBlockBinding(ot,q,R.__bindingPointIndex),o.set(ot,q))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,ht={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,M=null,b=null,D=null,T=new It(0,0,0),A=0,N=!1,S=null,y=null,P=null,k=null,B=null,kt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:dt,disable:rt,bindFramebuffer:Nt,drawBuffers:Lt,useProgram:Vt,setBlending:Bt,setMaterial:ie,setFlipSided:St,setCullFace:Gt,setLineWidth:Ft,setPolygonOffset:Rt,setScissorTest:he,activeTexture:w,bindTexture:x,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:$,texImage2D:_t,texImage3D:Ot,updateUBOMapping:Dt,uniformBlockBinding:zt,texStorage2D:Ut,texStorage3D:j,texSubImage2D:J,texSubImage3D:vt,compressedTexSubImage2D:it,compressedTexSubImage3D:st,scissor:wt,viewport:at,reset:le}}function Rg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):ir("canvas")}function _(w,x,z){let Z=1,$=he(w);if(($.width>z||$.height>z)&&(Z=z/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let J=Math.floor(Z*$.width),vt=Math.floor(Z*$.height);u===void 0&&(u=g(J,vt));let it=x?g(J,vt):u;return it.width=J,it.height=vt,it.getContext("2d").drawImage(w,0,0,J,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+J+"x"+vt+")."),it}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==ze&&w.minFilter!==Ze}function f(w){i.generateMipmap(w)}function E(w,x,z,Z,$=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=x;if(x===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),x===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){let vt=$?js:Zt.getTransfer(Z);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=vt===Qt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(w,x){let z;return w?x===null||x===Di||x===Ni?z=i.DEPTH24_STENCIL8:x===An?z=i.DEPTH32F_STENCIL8:x===Ks&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===Ni?z=i.DEPTH_COMPONENT24:x===An?z=i.DEPTH_COMPONENT32F:x===Ks&&(z=i.DEPTH_COMPONENT16),z}function b(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ze&&w.minFilter!==Ze?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){let x=w.target;x.removeEventListener("dispose",D),A(x),x.isVideoTexture&&h.delete(x)}function T(w){let x=w.target;x.removeEventListener("dispose",T),S(x)}function A(w){let x=n.get(w);if(x.__webglInit===void 0)return;let z=w.source,Z=d.get(z);if(Z){let $=Z[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&N(w),Object.keys(Z).length===0&&d.delete(z)}n.remove(w)}function N(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let z=w.source,Z=d.get(z);delete Z[x.__cacheKey],a.memory.textures--}function S(w){let x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let $=0;$<x.__webglFramebuffer[Z].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[Z][$]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=w.textures;for(let Z=0,$=z.length;Z<$;Z++){let J=n.get(z[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(w)}let y=0;function P(){y=0}function k(){let w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function B(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function H(w,x){let z=n.get(w);if(w.isVideoTexture&&Ft(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(z,w,x);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function Y(w,x){let z=n.get(w);if(w.version>0&&z.__version!==w.version){$t(z,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function V(w,x){let z=n.get(w);if(w.version>0&&z.__version!==w.version){$t(z,w,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function Q(w,x){let z=n.get(w);if(w.version>0&&z.__version!==w.version){X(z,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let G={[Pa]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},ht={[ze]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},pt={[vu]:i.NEVER,[wu]:i.ALWAYS,[yu]:i.LESS,[Uc]:i.LEQUAL,[Mu]:i.EQUAL,[Eu]:i.GEQUAL,[Su]:i.GREATER,[bu]:i.NOTEQUAL};function gt(w,x){if(x.type===An&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ze||x.magFilter===Wr||x.magFilter===Es||x.magFilter===Kn||x.minFilter===Ze||x.minFilter===Wr||x.minFilter===Es||x.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,G[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ht[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==Es&&x.minFilter!==Kn||x.type===An&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function kt(w,x){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",D));let Z=x.source,$=d.get(Z);$===void 0&&($={},d.set(Z,$));let J=B(x);if(J!==w.__cacheKey){$[J]===void 0&&($[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[J].usedTimes++;let vt=$[w.__cacheKey];vt!==void 0&&($[w.__cacheKey].usedTimes--,vt.usedTimes===0&&N(x)),w.__cacheKey=J,w.__webglTexture=$[J].texture}return z}function $t(w,x,z){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let $=kt(w,x),J=x.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+z);let vt=n.get(J);if(J.version!==vt.__version||$===!0){e.activeTexture(i.TEXTURE0+z);let it=Zt.getPrimaries(Zt.workingColorSpace),st=x.colorSpace===Tn?null:Zt.getPrimaries(x.colorSpace),Ut=x.colorSpace===Tn||it===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let j=_(x.image,!1,s.maxTextureSize);j=Rt(x,j);let _t=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type),wt=E(x.internalFormat,_t,Ot,x.colorSpace,x.isVideoTexture);gt(Z,x);let at,Dt=x.mipmaps,zt=x.isVideoTexture!==!0,le=vt.__version===void 0||$===!0,R=J.dataReady,ot=b(x,j);if(x.isDepthTexture)wt=M(x.format===Fi,x.type),le&&(zt?e.texStorage2D(i.TEXTURE_2D,1,wt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,wt,j.width,j.height,0,_t,Ot,null));else if(x.isDataTexture)if(Dt.length>0){zt&&le&&e.texStorage2D(i.TEXTURE_2D,ot,wt,Dt[0].width,Dt[0].height);for(let W=0,q=Dt.length;W<q;W++)at=Dt[W],zt?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,at.width,at.height,_t,Ot,at.data):e.texImage2D(i.TEXTURE_2D,W,wt,at.width,at.height,0,_t,Ot,at.data);x.generateMipmaps=!1}else zt?(le&&e.texStorage2D(i.TEXTURE_2D,ot,wt,j.width,j.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,_t,Ot,j.data)):e.texImage2D(i.TEXTURE_2D,0,wt,j.width,j.height,0,_t,Ot,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,wt,Dt[0].width,Dt[0].height,j.depth);for(let W=0,q=Dt.length;W<q;W++)if(at=Dt[W],x.format!==en)if(_t!==null)if(zt){if(R)if(x.layerUpdates.size>0){for(let et of x.layerUpdates){let Tt=at.width*at.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,et,at.width,at.height,1,_t,at.data.slice(Tt*et,Tt*(et+1)),0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,at.width,at.height,j.depth,_t,at.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,wt,at.width,at.height,j.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,at.width,at.height,j.depth,_t,Ot,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,wt,at.width,at.height,j.depth,0,_t,Ot,at.data)}else{zt&&le&&e.texStorage2D(i.TEXTURE_2D,ot,wt,Dt[0].width,Dt[0].height);for(let W=0,q=Dt.length;W<q;W++)at=Dt[W],x.format!==en?_t!==null?zt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,at.width,at.height,_t,at.data):e.compressedTexImage2D(i.TEXTURE_2D,W,wt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,at.width,at.height,_t,Ot,at.data):e.texImage2D(i.TEXTURE_2D,W,wt,at.width,at.height,0,_t,Ot,at.data)}else if(x.isDataArrayTexture)if(zt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,wt,j.width,j.height,j.depth),R)if(x.layerUpdates.size>0){let W;switch(Ot){case i.UNSIGNED_BYTE:switch(_t){case i.ALPHA:W=1;break;case i.LUMINANCE:W=1;break;case i.LUMINANCE_ALPHA:W=2;break;case i.RGB:W=3;break;case i.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${_t}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${Ot}.`)}let q=j.width*j.height*W;for(let et of x.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,j.width,j.height,1,_t,Ot,j.data.slice(q*et,q*(et+1)));x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_t,Ot,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,j.width,j.height,j.depth,0,_t,Ot,j.data);else if(x.isData3DTexture)zt?(le&&e.texStorage3D(i.TEXTURE_3D,ot,wt,j.width,j.height,j.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_t,Ot,j.data)):e.texImage3D(i.TEXTURE_3D,0,wt,j.width,j.height,j.depth,0,_t,Ot,j.data);else if(x.isFramebufferTexture){if(le)if(zt)e.texStorage2D(i.TEXTURE_2D,ot,wt,j.width,j.height);else{let W=j.width,q=j.height;for(let et=0;et<ot;et++)e.texImage2D(i.TEXTURE_2D,et,wt,W,q,0,_t,Ot,null),W>>=1,q>>=1}}else if(Dt.length>0){if(zt&&le){let W=he(Dt[0]);e.texStorage2D(i.TEXTURE_2D,ot,wt,W.width,W.height)}for(let W=0,q=Dt.length;W<q;W++)at=Dt[W],zt?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t,Ot,at):e.texImage2D(i.TEXTURE_2D,W,wt,_t,Ot,at);x.generateMipmaps=!1}else if(zt){if(le){let W=he(j);e.texStorage2D(i.TEXTURE_2D,ot,wt,W.width,W.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ot,j)}else e.texImage2D(i.TEXTURE_2D,0,wt,_t,Ot,j);m(x)&&f(Z),vt.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function X(w,x,z){if(x.image.length!==6)return;let Z=kt(w,x),$=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let J=n.get($);if($.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);let vt=Zt.getPrimaries(Zt.workingColorSpace),it=x.colorSpace===Tn?null:Zt.getPrimaries(x.colorSpace),st=x.colorSpace===Tn||vt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Ut=x.isCompressedTexture||x.image[0].isCompressedTexture,j=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let q=0;q<6;q++)!Ut&&!j?_t[q]=_(x.image[q],!0,s.maxCubemapSize):_t[q]=j?x.image[q].image:x.image[q],_t[q]=Rt(x,_t[q]);let Ot=_t[0],wt=r.convert(x.format,x.colorSpace),at=r.convert(x.type),Dt=E(x.internalFormat,wt,at,x.colorSpace),zt=x.isVideoTexture!==!0,le=J.__version===void 0||Z===!0,R=$.dataReady,ot=b(x,Ot);gt(i.TEXTURE_CUBE_MAP,x);let W;if(Ut){zt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Dt,Ot.width,Ot.height);for(let q=0;q<6;q++){W=_t[q].mipmaps;for(let et=0;et<W.length;et++){let Tt=W[et];x.format!==en?wt!==null?zt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,Dt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,0,0,Tt.width,Tt.height,wt,at,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et,Dt,Tt.width,Tt.height,0,wt,at,Tt.data)}}}else{if(W=x.mipmaps,zt&&le){W.length>0&&ot++;let q=he(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Dt,q.width,q.height)}for(let q=0;q<6;q++)if(j){zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,_t[q].width,_t[q].height,wt,at,_t[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Dt,_t[q].width,_t[q].height,0,wt,at,_t[q].data);for(let et=0;et<W.length;et++){let Wt=W[et].image[q].image;zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,Wt.width,Wt.height,wt,at,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,Dt,Wt.width,Wt.height,0,wt,at,Wt.data)}}else{zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,wt,at,_t[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Dt,wt,at,_t[q]);for(let et=0;et<W.length;et++){let Tt=W[et];zt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,0,0,wt,at,Tt.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,et+1,Dt,wt,at,Tt.image[q])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),J.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function K(w,x,z,Z,$,J){let vt=r.convert(z.format,z.colorSpace),it=r.convert(z.type),st=E(z.internalFormat,vt,it,z.colorSpace);if(!n.get(x).__hasExternalTextures){let j=Math.max(1,x.width>>J),_t=Math.max(1,x.height>>J);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,J,st,j,_t,x.depth,0,vt,it,null):e.texImage2D($,J,st,j,_t,0,vt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,n.get(z).__webglTexture,0,St(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,n.get(z).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(w,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let Z=x.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,J=M(x.stencilBuffer,$),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=St(x);Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,J,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,w)}else{let Z=x.textures;for(let $=0;$<Z.length;$++){let J=Z[$],vt=r.convert(J.format,J.colorSpace),it=r.convert(J.type),st=E(J.internalFormat,vt,it,J.colorSpace),Ut=St(x);z&&Gt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,st,x.width,x.height):Gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,st,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,st,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let Z=n.get(x.depthTexture).__webglTexture,$=St(x);if(x.depthTexture.format===Ci)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Fi)Gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Nt(w){let x=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");rt(x.__webglFramebuffer,w)}else if(z){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=i.createRenderbuffer(),dt(x.__webglDepthbuffer[Z],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),dt(x.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(w,x,z){let Z=n.get(w);x!==void 0&&K(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Nt(w)}function Vt(w){let x=w.texture,z=n.get(w),Z=n.get(x);w.addEventListener("dispose",T);let $=w.textures,J=w.isWebGLCubeRenderTarget===!0,vt=$.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[it]=[];for(let st=0;st<x.mipmaps.length;st++)z.__webglFramebuffer[it][st]=i.createFramebuffer()}else z.__webglFramebuffer[it]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)z.__webglFramebuffer[it]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let it=0,st=$.length;it<st;it++){let Ut=n.get($[it]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Gt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){let st=$[it];z.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[it]);let Ut=r.convert(st.format,st.colorSpace),j=r.convert(st.type),_t=E(st.internalFormat,Ut,j,st.colorSpace,w.isXRRenderTarget===!0),Ot=St(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,_t,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,z.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(i.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)K(z.__webglFramebuffer[it][st],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else K(z.__webglFramebuffer[it],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let it=0,st=$.length;it<st;it++){let Ut=$[it],j=n.get(Ut);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),gt(i.TEXTURE_2D,Ut),K(z.__webglFramebuffer,w,Ut,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),m(Ut)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Z.__webglTexture),gt(it,x),x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)K(z.__webglFramebuffer[st],w,x,i.COLOR_ATTACHMENT0,it,st);else K(z.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,it,0);m(x)&&f(it),e.unbindTexture()}w.depthBuffer&&Nt(w)}function C(w){let x=w.textures;for(let z=0,Z=x.length;z<Z;z++){let $=x[z];if(m($)){let J=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get($).__webglTexture;e.bindTexture(J,vt),f(J),e.unbindTexture()}}}let Ht=[],Bt=[];function ie(w){if(w.samples>0){if(Gt(w)===!1){let x=w.textures,z=w.width,Z=w.height,$=i.COLOR_BUFFER_BIT,J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(w),it=x.length>1;if(it)for(let st=0;st<x.length;st++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let st=0;st<x.length;st++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[st]);let Ut=n.get(x[st]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,$,i.NEAREST),l===!0&&(Ht.length=0,Bt.length=0,Ht.push(i.COLOR_ATTACHMENT0+st),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ht.push(J),Bt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let st=0;st<x.length;st++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,vt.__webglColorRenderbuffer[st]);let Ut=n.get(x[st]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function St(w){return Math.min(s.maxSamples,w.samples)}function Gt(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ft(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Rt(w,x){let z=w.colorSpace,Z=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Fn&&z!==Tn&&(Zt.getTransfer(z)===Qt?(Z!==en||$!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function he(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Lt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Gt}function Cg(i,t){function e(n,s=Tn){let r,a=Zt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.BYTE;if(n===ou)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Tc)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===en)return i.RGBA;if(n===uu)return i.LUMINANCE;if(n===du)return i.LUMINANCE_ALPHA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===fu)return i.RED;if(n===Cc)return i.RED_INTEGER;if(n===pu)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Ic)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===Zr)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Jo||n===Ko||n===Qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===tl)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$r||n===gl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$r)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===xl||n===vl||n===yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ya=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Rn=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Za=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ge({vertexShader:Ig,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}},$a=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=new Za,m=e.getContextAttributes(),f=null,E=null,M=[],b=[],D=new ct,T=null,A=new Ee;A.layers.enable(1),A.viewport=new te;let N=new Ee;N.layers.enable(2),N.viewport=new te;let S=[A,N],y=new Ya;y.layers.enable(1),y.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=M[X];return K===void 0&&(K=new ts,M[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=M[X];return K===void 0&&(K=new ts,M[X]=K),K.getGripSpace()},this.getHand=function(X){let K=M[X];return K===void 0&&(K=new ts,M[X]=K),K.getHandSpace()};function B(X){let K=b.indexOf(X.inputSource);if(K===-1)return;let dt=M[K];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||a),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let X=0;X<M.length;X++){let K=b[X];K!==null&&(b[X]=null,M[X].disconnect(K))}P=null,k=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new $e(p.framebufferWidth,p.framebufferHeight,{format:en,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,dt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?Fi:Ci,dt=m.stencil?Ni:Di);let Nt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new $e(d.textureWidth,d.textureHeight,{format:en,type:Ln,depthTexture:new dr(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Y(X){for(let K=0;K<X.removed.length;K++){let dt=X.removed[K],rt=b.indexOf(dt);rt>=0&&(b[rt]=null,M[rt].disconnect(dt))}for(let K=0;K<X.added.length;K++){let dt=X.added[K],rt=b.indexOf(dt);if(rt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=b.length){b.push(dt),rt=Lt;break}else if(b[Lt]===null){b[Lt]=dt,rt=Lt;break}if(rt===-1)break}let Nt=M[rt];Nt&&Nt.connect(dt)}}let V=new I,Q=new I;function G(X,K,dt){V.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(dt.matrixWorld);let rt=V.distanceTo(Q),Nt=K.projectionMatrix.elements,Lt=dt.projectionMatrix.elements,Vt=Nt[14]/(Nt[10]-1),C=Nt[14]/(Nt[10]+1),Ht=(Nt[9]+1)/Nt[5],Bt=(Nt[9]-1)/Nt[5],ie=(Nt[8]-1)/Nt[0],St=(Lt[8]+1)/Lt[0],Gt=Vt*ie,Ft=Vt*St,Rt=rt/(-ie+St),he=Rt*-ie;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(he),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let w=Vt+Rt,x=C+Rt,z=Gt-he,Z=Ft+(rt-he),$=Ht*C/x*w,J=Bt*C/x*w;X.projectionMatrix.makePerspective(z,Z,$,J,w,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ht(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),y.near=N.near=A.near=X.near,y.far=N.far=A.far=X.far,(P!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,k=y.far,A.near=P,A.far=k,N.near=P,N.far=k,A.updateProjectionMatrix(),N.updateProjectionMatrix(),X.updateProjectionMatrix());let K=X.parent,dt=y.cameras;ht(y,K);for(let rt=0;rt<dt.length;rt++)ht(dt[rt],K);dt.length===2?G(y,A,N):y.projectionMatrix.copy(A.projectionMatrix),pt(X,y,K)};function pt(X,K,dt){dt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ss*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let gt=null;function kt(X,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Lt=0;Lt<dt.length;Lt++){let Vt=dt[Lt],C=null;if(p!==null)C=p.getViewport(Vt);else{let Bt=u.getViewSubImage(d,Vt);C=Bt.viewport,Lt===0&&(t.setRenderTargetTextures(E,Bt.colorTexture,d.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(E))}let Ht=S[Lt];Ht===void 0&&(Ht=new Ee,Ht.layers.enable(Lt),Ht.viewport=new te,S[Lt]=Ht),Ht.matrix.fromArray(Vt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Vt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(C.x,C.y,C.width,C.height),Lt===0&&(y.matrix.copy(Ht.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Ht)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Lt=u.getDepthInformation(dt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let dt=0;dt<M.length;dt++){let rt=b[dt],Nt=M[dt];rt!==null&&Nt!==void 0&&Nt.update(rt,K,c||a)}gt&&gt(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let $t=new Bc;$t.setAnimationLoop(kt),this.setAnimationLoop=function(X){gt=X},this.dispose=function(){}}},qn=new nn,Ug=new oe;function Dg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Oc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ie&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ie&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),M=E.envMap,b=E.envMapRotation;M&&(m.envMap.value=M,qn.copy(b),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(qn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let b=M.program;n.uniformBlockBinding(E,b)}function c(E,M){let b=s[E.id];b===void 0&&(g(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",m));let D=M.program;n.updateUBOMapping(E,D);let T=t.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function h(E){let M=u();E.__bindingPointIndex=M;let b=i.createBuffer(),D=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let M=s[E.id],b=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,A=b.length;T<A;T++){let N=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,y=N.length;S<y;S++){let P=N[S];if(p(P,T,S,D)===!0){let k=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],H=0;for(let Y=0;Y<B.length;Y++){let V=B[Y],Q=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+H,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,b,D){let T=E.value,A=M+"_"+b;if(D[A]===void 0)return typeof T=="number"||typeof T=="boolean"?D[A]=T:D[A]=T.clone(),!0;{let N=D[A];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return D[A]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(E){let M=E.uniforms,b=0,D=16;for(let A=0,N=M.length;A<N;A++){let S=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,P=S.length;y<P;y++){let k=S[y],B=Array.isArray(k.value)?k.value:[k.value];for(let H=0,Y=B.length;H<Y;H++){let V=B[H],Q=_(V),G=b%D;G!==0&&D-G<Q.boundary&&(b+=D-G),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=Q.storage}}}let T=b%D;return T>0&&(b+=D-T),E.__size=b,E.__cache={},this}function _(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var fr=class{constructor(t={}){let{canvas:e=Vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Pn,this.toneMappingExposure=1;let M=this,b=!1,D=0,T=0,A=null,N=-1,S=null,y=new te,P=new te,k=null,B=new It(0),H=0,Y=e.width,V=e.height,Q=1,G=null,ht=null,pt=new te(0,0,Y,V),gt=new te(0,0,Y,V),kt=!1,$t=new as,X=!1,K=!1,dt=new oe,rt=new I,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Vt(){return A===null?Q:1}let C=n;function Ht(v,L){return e.getContext(v,L)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",q,!1),C===null){let L="webgl2";if(C=Ht(L,v),C===null)throw Ht(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Bt,ie,St,Gt,Ft,Rt,he,w,x,z,Z,$,J,vt,it,st,Ut,j,_t,Ot,wt,at,Dt,zt;function le(){Bt=new tm(C),Bt.init(),at=new Cg(C,Bt),ie=new Zp(C,Bt,t,at),St=new Ag(C),Gt=new im(C),Ft=new mg,Rt=new Rg(C,Bt,St,Ft,ie,at,Gt),he=new Jp(M),w=new jp(M),x=new cd(C),Dt=new qp(C,x),z=new em(C,x,Gt,Dt),Z=new rm(C,z,x,Gt),_t=new sm(C,ie,Rt),st=new $p(Ft),$=new pg(M,he,w,Bt,ie,Dt,st),J=new Dg(M,Ft),vt=new _g,it=new bg(Bt),j=new Xp(M,he,w,St,Z,d,l),Ut=new Tg(M,Z,ie),zt=new Ng(C,Gt,ie,St),Ot=new Yp(C,Bt,Gt),wt=new nm(C,Bt,Gt),Gt.programs=$.programs,M.capabilities=ie,M.extensions=Bt,M.properties=Ft,M.renderLists=vt,M.shadowMap=Ut,M.state=St,M.info=Gt}le();let R=new $a(M,C);this.xr=R,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=Bt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Bt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(v){v!==void 0&&(Q=v,this.setSize(Y,V,!1))},this.getSize=function(v){return v.set(Y,V)},this.setSize=function(v,L,F=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=v,V=L,e.width=Math.floor(v*Q),e.height=Math.floor(L*Q),F===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Y*Q,V*Q).floor()},this.setDrawingBufferSize=function(v,L,F){Y=v,V=L,Q=F,e.width=Math.floor(v*F),e.height=Math.floor(L*F),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(y)},this.getViewport=function(v){return v.copy(pt)},this.setViewport=function(v,L,F,O){v.isVector4?pt.set(v.x,v.y,v.z,v.w):pt.set(v,L,F,O),St.viewport(y.copy(pt).multiplyScalar(Q).round())},this.getScissor=function(v){return v.copy(gt)},this.setScissor=function(v,L,F,O){v.isVector4?gt.set(v.x,v.y,v.z,v.w):gt.set(v,L,F,O),St.scissor(P.copy(gt).multiplyScalar(Q).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(v){St.setScissorTest(kt=v)},this.setOpaqueSort=function(v){G=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(v=!0,L=!0,F=!0){let O=0;if(v){let U=!1;if(A!==null){let tt=A.texture.format;U=tt===Ic||tt===Pc||tt===Cc}if(U){let tt=A.texture.type,lt=tt===Ln||tt===Di||tt===Ks||tt===Ni||tt===Ac||tt===Rc,ut=j.getClearColor(),mt=j.getClearAlpha(),bt=ut.r,Et=ut.g,Mt=ut.b;lt?(p[0]=bt,p[1]=Et,p[2]=Mt,p[3]=mt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=bt,g[1]=Et,g[2]=Mt,g[3]=mt,C.clearBufferiv(C.COLOR,0,g))}else O|=C.COLOR_BUFFER_BIT}L&&(O|=C.DEPTH_BUFFER_BIT),F&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",q,!1),vt.dispose(),it.dispose(),Ft.dispose(),he.dispose(),w.dispose(),Z.dispose(),Dt.dispose(),zt.dispose(),$.dispose(),R.dispose(),R.removeEventListener("sessionstart",Qe),R.removeEventListener("sessionend",je),zn.stop()};function ot(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let v=Gt.autoReset,L=Ut.enabled,F=Ut.autoUpdate,O=Ut.needsUpdate,U=Ut.type;le(),Gt.autoReset=v,Ut.enabled=L,Ut.autoUpdate=F,Ut.needsUpdate=O,Ut.type=U}function q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function et(v){let L=v.target;L.removeEventListener("dispose",et),Tt(L)}function Tt(v){Wt(v),Ft.remove(v)}function Wt(v){let L=Ft.get(v).programs;L!==void 0&&(L.forEach(function(F){$.releaseProgram(F)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,F,O,U,tt){L===null&&(L=Nt);let lt=U.isMesh&&U.matrixWorld.determinant()<0,ut=vh(v,L,F,O,U);St.setMaterial(O,lt);let mt=F.index,bt=1;if(O.wireframe===!0){if(mt=z.getWireframeAttribute(F),mt===void 0)return;bt=2}let Et=F.drawRange,Mt=F.attributes.position,qt=Et.start*bt,re=(Et.start+Et.count)*bt;tt!==null&&(qt=Math.max(qt,tt.start*bt),re=Math.min(re,(tt.start+tt.count)*bt)),mt!==null?(qt=Math.max(qt,0),re=Math.min(re,mt.count)):Mt!=null&&(qt=Math.max(qt,0),re=Math.min(re,Mt.count));let ae=re-qt;if(ae<0||ae===1/0)return;Dt.setup(U,O,ut,F,mt);let Le,Yt=Ot;if(mt!==null&&(Le=x.get(mt),Yt=wt,Yt.setIndex(Le)),U.isMesh)O.wireframe===!0?(St.setLineWidth(O.wireframeLinewidth*Vt()),Yt.setMode(C.LINES)):Yt.setMode(C.TRIANGLES);else if(U.isLine){let xt=O.linewidth;xt===void 0&&(xt=1),St.setLineWidth(xt*Vt()),U.isLineSegments?Yt.setMode(C.LINES):U.isLineLoop?Yt.setMode(C.LINE_LOOP):Yt.setMode(C.LINE_STRIP)}else U.isPoints?Yt.setMode(C.POINTS):U.isSprite&&Yt.setMode(C.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Yt.renderInstances(qt,ae,U.count);else if(F.isInstancedBufferGeometry){let xt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,we=Math.min(F.instanceCount,xt);Yt.renderInstances(qt,ae,we)}else Yt.render(qt,ae)};function ce(v,L,F){v.transparent===!0&&v.side===Fe&&v.forceSinglePass===!1?(v.side=Ie,v.needsUpdate=!0,Ss(v,L,F),v.side=In,v.needsUpdate=!0,Ss(v,L,F),v.side=Fe):Ss(v,L,F)}this.compile=function(v,L,F=null){F===null&&(F=v),m=it.get(F),m.init(L),E.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),v!==F&&v.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();let O=new Set;return v.traverse(function(U){let tt=U.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let ut=tt[lt];ce(ut,F,U),O.add(ut)}else ce(tt,F,U),O.add(tt)}),E.pop(),m=null,O},this.compileAsync=function(v,L,F=null){let O=this.compile(v,L,F);return new Promise(U=>{function tt(){if(O.forEach(function(lt){Ft.get(lt).currentProgram.isReady()&&O.delete(lt)}),O.size===0){U(v);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let _e=null;function Jt(v){_e&&_e(v)}function Qe(){zn.stop()}function je(){zn.start()}let zn=new Bc;zn.setAnimationLoop(Jt),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(v){_e=v,R.setAnimationLoop(v),v===null?zn.stop():zn.start()},R.addEventListener("sessionstart",Qe),R.addEventListener("sessionend",je),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(L),L=R.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,L,A),m=it.get(v,E.length),m.init(L),E.push(m),dt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$t.setFromProjectionMatrix(dt),K=this.localClippingEnabled,X=st.init(this.clippingPlanes,K),_=vt.get(v,f.length),_.init(),f.push(_),R.enabled===!0&&R.isPresenting===!0){let tt=M.xr.getDepthSensingMesh();tt!==null&&kr(tt,L,-1/0,M.sortObjects)}kr(v,L,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(G,ht),Lt=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Lt&&j.addToRenderList(_,v),this.info.render.frame++,X===!0&&st.beginShadows();let F=m.state.shadowsArray;Ut.render(F,v,L),X===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=_.opaque,U=_.transmissive;if(m.setupLights(),L.isArrayCamera){let tt=L.cameras;if(U.length>0)for(let lt=0,ut=tt.length;lt<ut;lt++){let mt=tt[lt];ko(O,U,v,mt)}Lt&&j.render(v);for(let lt=0,ut=tt.length;lt<ut;lt++){let mt=tt[lt];zo(_,v,mt,mt.viewport)}}else U.length>0&&ko(O,U,v,L),Lt&&j.render(v),zo(_,v,L);A!==null&&(Rt.updateMultisampleRenderTarget(A),Rt.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(M,v,L),Dt.resetDefaultState(),N=-1,S=null,E.pop(),E.length>0?(m=E[E.length-1],X===!0&&st.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function kr(v,L,F,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||$t.intersectsSprite(v)){O&&rt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(dt);let lt=Z.update(v),ut=v.material;ut.visible&&_.push(v,lt,ut,F,rt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||$t.intersectsObject(v))){let lt=Z.update(v),ut=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),rt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),rt.copy(lt.boundingSphere.center)),rt.applyMatrix4(v.matrixWorld).applyMatrix4(dt)),Array.isArray(ut)){let mt=lt.groups;for(let bt=0,Et=mt.length;bt<Et;bt++){let Mt=mt[bt],qt=ut[Mt.materialIndex];qt&&qt.visible&&_.push(v,lt,qt,F,rt.z,Mt)}}else ut.visible&&_.push(v,lt,ut,F,rt.z,null)}}let tt=v.children;for(let lt=0,ut=tt.length;lt<ut;lt++)kr(tt[lt],L,F,O)}function zo(v,L,F,O){let U=v.opaque,tt=v.transmissive,lt=v.transparent;m.setupLightsView(F),X===!0&&st.setGlobalState(M.clippingPlanes,F),O&&St.viewport(y.copy(O)),U.length>0&&Ms(U,L,F),tt.length>0&&Ms(tt,L,F),lt.length>0&&Ms(lt,L,F),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ko(v,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new $e(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ir:Ln,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let tt=m.state.transmissionRenderTarget[O.id],lt=O.viewport||y;tt.setSize(lt.z,lt.w);let ut=M.getRenderTarget();M.setRenderTarget(tt),M.getClearColor(B),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),Lt?j.render(F):M.clear();let mt=M.toneMapping;M.toneMapping=Pn;let bt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),X===!0&&st.setGlobalState(M.clippingPlanes,O),Ms(v,F,O),Rt.updateMultisampleRenderTarget(tt),Rt.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Mt=0,qt=L.length;Mt<qt;Mt++){let re=L[Mt],ae=re.object,Le=re.geometry,Yt=re.material,xt=re.group;if(Yt.side===Fe&&ae.layers.test(O.layers)){let we=Yt.side;Yt.side=Ie,Yt.needsUpdate=!0,Ho(ae,F,O,Le,Yt,xt),Yt.side=we,Yt.needsUpdate=!0,Et=!0}}Et===!0&&(Rt.updateMultisampleRenderTarget(tt),Rt.updateRenderTargetMipmap(tt))}M.setRenderTarget(ut),M.setClearColor(B,H),bt!==void 0&&(O.viewport=bt),M.toneMapping=mt}function Ms(v,L,F){let O=L.isScene===!0?L.overrideMaterial:null;for(let U=0,tt=v.length;U<tt;U++){let lt=v[U],ut=lt.object,mt=lt.geometry,bt=O===null?lt.material:O,Et=lt.group;ut.layers.test(F.layers)&&Ho(ut,L,F,mt,bt,Et)}}function Ho(v,L,F,O,U,tt){v.onBeforeRender(M,L,F,O,U,tt),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(M,L,F,O,v,tt),U.transparent===!0&&U.side===Fe&&U.forceSinglePass===!1?(U.side=Ie,U.needsUpdate=!0,M.renderBufferDirect(F,L,O,U,v,tt),U.side=In,U.needsUpdate=!0,M.renderBufferDirect(F,L,O,U,v,tt),U.side=Fe):M.renderBufferDirect(F,L,O,U,v,tt),v.onAfterRender(M,L,F,O,U,tt)}function Ss(v,L,F){L.isScene!==!0&&(L=Nt);let O=Ft.get(v),U=m.state.lights,tt=m.state.shadowsArray,lt=U.state.version,ut=$.getParameters(v,U.state,tt,L,F),mt=$.getProgramCacheKey(ut),bt=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?w:he).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",et),bt=new Map,O.programs=bt);let Et=bt.get(mt);if(Et!==void 0){if(O.currentProgram===Et&&O.lightsStateVersion===lt)return Go(v,ut),Et}else ut.uniforms=$.getUniforms(v),v.onBuild(F,ut,M),v.onBeforeCompile(ut,M),Et=$.acquireProgram(ut,mt),bt.set(mt,Et),O.uniforms=ut.uniforms;let Mt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Mt.clippingPlanes=st.uniform),Go(v,ut),O.needsLights=Mh(v),O.lightsStateVersion=lt,O.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Et,O.uniformsList=null,Et}function Vo(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=Ii.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Go(v,L){let F=Ft.get(v);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function vh(v,L,F,O,U){L.isScene!==!0&&(L=Nt),Rt.resetTextureUnits();let tt=L.fog,lt=O.isMeshStandardMaterial?L.environment:null,ut=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fn,mt=(O.isMeshStandardMaterial?w:he).get(O.envMap||lt),bt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Et=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Mt=!!F.morphAttributes.position,qt=!!F.morphAttributes.normal,re=!!F.morphAttributes.color,ae=Pn;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ae=M.toneMapping);let Le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Yt=Le!==void 0?Le.length:0,xt=Ft.get(O),we=m.state.lights;if(X===!0&&(K===!0||v!==S)){let Oe=v===S&&O.id===N;st.setState(O,v,Oe)}let Kt=!1;O.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==we.state.version||xt.outputColorSpace!==ut||U.isBatchedMesh&&xt.batching===!1||!U.isBatchedMesh&&xt.batching===!0||U.isBatchedMesh&&xt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xt.instancing===!1||!U.isInstancedMesh&&xt.instancing===!0||U.isSkinnedMesh&&xt.skinning===!1||!U.isSkinnedMesh&&xt.skinning===!0||U.isInstancedMesh&&xt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xt.instancingMorph===!1&&U.morphTexture!==null||xt.envMap!==mt||O.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==st.numPlanes||xt.numIntersection!==st.numIntersection)||xt.vertexAlphas!==bt||xt.vertexTangents!==Et||xt.morphTargets!==Mt||xt.morphNormals!==qt||xt.morphColors!==re||xt.toneMapping!==ae||xt.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,xt.__version=O.version);let an=xt.currentProgram;Kt===!0&&(an=Ss(O,L,U));let bs=!1,kn=!1,Hr=!1,xe=an.getUniforms(),vn=xt.uniforms;if(St.useProgram(an.program)&&(bs=!0,kn=!0,Hr=!0),O.id!==N&&(N=O.id,kn=!0),bs||S!==v){xe.setValue(C,"projectionMatrix",v.projectionMatrix),xe.setValue(C,"viewMatrix",v.matrixWorldInverse);let Oe=xe.map.cameraPosition;Oe!==void 0&&Oe.setValue(C,rt.setFromMatrixPosition(v.matrixWorld)),ie.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&xe.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,kn=!0,Hr=!0)}if(U.isSkinnedMesh){xe.setOptional(C,U,"bindMatrix"),xe.setOptional(C,U,"bindMatrixInverse");let Oe=U.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),xe.setValue(C,"boneTexture",Oe.boneTexture,Rt))}U.isBatchedMesh&&(xe.setOptional(C,U,"batchingTexture"),xe.setValue(C,"batchingTexture",U._matricesTexture,Rt),xe.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",U._colorsTexture,Rt));let Vr=F.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&_t.update(U,F,an),(kn||xt.receiveShadow!==U.receiveShadow)&&(xt.receiveShadow=U.receiveShadow,xe.setValue(C,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(vn.envMap.value=mt,vn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(vn.envMapIntensity.value=L.environmentIntensity),kn&&(xe.setValue(C,"toneMappingExposure",M.toneMappingExposure),xt.needsLights&&yh(vn,Hr),tt&&O.fog===!0&&J.refreshFogUniforms(vn,tt),J.refreshMaterialUniforms(vn,O,Q,V,m.state.transmissionRenderTarget[v.id]),Ii.upload(C,Vo(xt),vn,Rt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ii.upload(C,Vo(xt),vn,Rt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&xe.setValue(C,"center",U.center),xe.setValue(C,"modelViewMatrix",U.modelViewMatrix),xe.setValue(C,"normalMatrix",U.normalMatrix),xe.setValue(C,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Oe=O.uniformsGroups;for(let Gr=0,Sh=Oe.length;Gr<Sh;Gr++){let Wo=Oe[Gr];zt.update(Wo,an),zt.bind(Wo,an)}}return an}function yh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Mh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,L,F){Ft.get(v.texture).__webglTexture=L,Ft.get(v.depthTexture).__webglTexture=F;let O=Ft.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){let F=Ft.get(v);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,F=0){A=v,D=L,T=F;let O=!0,U=null,tt=!1,lt=!1;if(v){let mt=Ft.get(v);mt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(C.FRAMEBUFFER,null),O=!1):mt.__webglFramebuffer===void 0?Rt.setupRenderTarget(v):mt.__hasExternalTextures&&Rt.rebindTextures(v,Ft.get(v.texture).__webglTexture,Ft.get(v.depthTexture).__webglTexture);let bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(lt=!0);let Et=Ft.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?U=Et[L][F]:U=Et[L],tt=!0):v.samples>0&&Rt.useMultisampledRTT(v)===!1?U=Ft.get(v).__webglMultisampledFramebuffer:Array.isArray(Et)?U=Et[F]:U=Et,y.copy(v.viewport),P.copy(v.scissor),k=v.scissorTest}else y.copy(pt).multiplyScalar(Q).floor(),P.copy(gt).multiplyScalar(Q).floor(),k=kt;if(St.bindFramebuffer(C.FRAMEBUFFER,U)&&O&&St.drawBuffers(v,U),St.viewport(y),St.scissor(P),St.setScissorTest(k),tt){let mt=Ft.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,F)}else if(lt){let mt=Ft.get(v.texture),bt=L||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,bt)}N=-1},this.readRenderTargetPixels=function(v,L,F,O,U,tt,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut){St.bindFramebuffer(C.FRAMEBUFFER,ut);try{let mt=v.texture,bt=mt.format,Et=mt.type;if(!ie.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&F>=0&&F<=v.height-U&&C.readPixels(L,F,O,U,at.convert(bt),at.convert(Et),tt)}finally{let mt=A!==null?Ft.get(A).__webglFramebuffer:null;St.bindFramebuffer(C.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,L,F,O,U,tt,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut){St.bindFramebuffer(C.FRAMEBUFFER,ut);try{let mt=v.texture,bt=mt.format,Et=mt.type;if(!ie.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-O&&F>=0&&F<=v.height-U){let Mt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),C.readPixels(L,F,O,U,at.convert(bt),at.convert(Et),0),C.flush();let qt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Gu(C,qt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt)}finally{C.deleteBuffer(Mt),C.deleteSync(qt)}return tt}}finally{let mt=A!==null?Ft.get(A).__webglFramebuffer:null;St.bindFramebuffer(C.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(v,L=null,F=0){v.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);let O=Math.pow(2,-F),U=Math.floor(v.image.width*O),tt=Math.floor(v.image.height*O),lt=L!==null?L.x:0,ut=L!==null?L.y:0;Rt.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,lt,ut,U,tt),St.unbindTexture()},this.copyTextureToTexture=function(v,L,F=null,O=null,U=0){v.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],L=arguments[2],U=arguments[3]||0,F=null);let tt,lt,ut,mt,bt,Et;F!==null?(tt=F.max.x-F.min.x,lt=F.max.y-F.min.y,ut=F.min.x,mt=F.min.y):(tt=v.image.width,lt=v.image.height,ut=0,mt=0),O!==null?(bt=O.x,Et=O.y):(bt=0,Et=0);let Mt=at.convert(L.format),qt=at.convert(L.type);Rt.setTexture2D(L,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let re=C.getParameter(C.UNPACK_ROW_LENGTH),ae=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Le=C.getParameter(C.UNPACK_SKIP_PIXELS),Yt=C.getParameter(C.UNPACK_SKIP_ROWS),xt=C.getParameter(C.UNPACK_SKIP_IMAGES),we=v.isCompressedTexture?v.mipmaps[U]:v.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,we.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,we.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,mt),v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,bt,Et,tt,lt,Mt,qt,we.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,bt,Et,we.width,we.height,Mt,we.data):C.texSubImage2D(C.TEXTURE_2D,U,bt,Et,Mt,qt,we),C.pixelStorei(C.UNPACK_ROW_LENGTH,re),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Le),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xt),U===0&&L.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(v,L,F=null,O=null,U=0){v.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],L=arguments[3],U=arguments[4]||0);let tt,lt,ut,mt,bt,Et,Mt,qt,re,ae=v.isCompressedTexture?v.mipmaps[U]:v.image;F!==null?(tt=F.max.x-F.min.x,lt=F.max.y-F.min.y,ut=F.max.z-F.min.z,mt=F.min.x,bt=F.min.y,Et=F.min.z):(tt=ae.width,lt=ae.height,ut=ae.depth,mt=0,bt=0,Et=0),O!==null?(Mt=O.x,qt=O.y,re=O.z):(Mt=0,qt=0,re=0);let Le=at.convert(L.format),Yt=at.convert(L.type),xt;if(L.isData3DTexture)Rt.setTexture3D(L,0),xt=C.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Rt.setTexture2DArray(L,0),xt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let we=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),an=C.getParameter(C.UNPACK_SKIP_PIXELS),bs=C.getParameter(C.UNPACK_SKIP_ROWS),kn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mt),C.pixelStorei(C.UNPACK_SKIP_ROWS,bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Et),v.isDataTexture||v.isData3DTexture?C.texSubImage3D(xt,U,Mt,qt,re,tt,lt,ut,Le,Yt,ae.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(xt,U,Mt,qt,re,tt,lt,ut,Le,ae.data):C.texSubImage3D(xt,U,Mt,qt,re,tt,lt,ut,Le,Yt,ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,we),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,an),C.pixelStorei(C.UNPACK_SKIP_ROWS,bs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kn),U===0&&L.generateMipmaps&&C.generateMipmap(xt),St.unbindTexture()},this.initRenderTarget=function(v){Ft.get(v).__webglFramebuffer===void 0&&Rt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Rt.setTextureCube(v,0):v.isData3DTexture?Rt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Rt.setTexture2DArray(v,0):Rt.setTexture2D(v,0),St.unbindTexture()},this.resetState=function(){D=0,T=0,A=null,St.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===vo?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Lr?"display-p3":"srgb"}};var pr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},os=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var We=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],a=[],o=new I,l=new oe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ye(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ye(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ls=class extends We{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ja=class extends ls{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function So(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var qs=new I,Ma=new So,Sa=new So,ba=new So,Ka=class extends We{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),c=qs);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ma.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Sa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ba.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ba.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ma.calc(l),Sa.calc(l),ba.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function pc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Fg(i,t){let e=1-i;return e*e*t}function Og(i,t){return 2*(1-i)*i*t}function Bg(i,t){return i*i*t}function es(i,t,e,n){return Fg(i,t)+Og(i,e)+Bg(i,n)}function zg(i,t){let e=1-i;return e*e*e*t}function kg(i,t){let e=1-i;return 3*e*e*i*t}function Hg(i,t){return 3*(1-i)*i*i*t}function Vg(i,t){return i*i*i*t}function ns(i,t,e,n,s){return zg(i,t)+kg(i,e)+Hg(i,n)+Vg(i,s)}var mr=class extends We{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,s.x,r.x,a.x,o.x),ns(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qa=class extends We{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,s.x,r.x,a.x,o.x),ns(t,s.y,r.y,a.y,o.y),ns(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gr=class extends We{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends We{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends We{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(es(t,s.x,r.x,a.x),es(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends We{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(es(t,s.x,r.x,a.x),es(t,s.y,r.y,a.y),es(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xr=class extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(pc(o,l.x,c.x,h.x,u.x),pc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},mc=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:Ka,CubicBezierCurve:mr,CubicBezierCurve3:Qa,EllipseCurve:ls,LineCurve:gr,LineCurve3:ja,QuadraticBezierCurve:_r,QuadraticBezierCurve3:to,SplineCurve:xr}),eo=class extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new mc[s.type]().fromJSON(s))}return this}},vr=class extends eo{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new gr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new _r(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new mr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ls(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var yr=class i extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cs=class i extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;E(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(p,2));function E(){let b=new I,D=new I,T=0,A=(e-t)/n;for(let N=0;N<=r;N++){let S=[],y=N/r,P=y*(e-t)+t;for(let k=0;k<=s;k++){let B=k/s,H=B*l+o,Y=Math.sin(H),V=Math.cos(H);D.x=P*Y,D.y=-y*n+m,D.z=P*V,u.push(D.x,D.y,D.z),b.set(Y,A,V).normalize(),d.push(b.x,b.y,b.z),p.push(B,1-y),S.push(g++)}_.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){let y=_[S][N],P=_[S+1][N],k=_[S+1][N+1],B=_[S][N+1];h.push(y,P,B),h.push(P,k,B),T+=6}c.addGroup(f,T,0),f+=T}function M(b){let D=g,T=new ct,A=new I,N=0,S=b===!0?t:e,y=b===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let P=g;for(let k=0;k<=s;k++){let H=k/s*l+o,Y=Math.cos(H),V=Math.sin(H);A.x=S*V,A.y=m*y,A.z=S*Y,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=Y*.5+.5,T.y=V*.5*y+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){let B=D+k,H=P+k;b===!0?h.push(H,H+1,B):h.push(H+1,H,B),N+=3}c.addGroup(f,N,b===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hs=class extends vr{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new vr().fromJSON(s))}return this}},Gg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wc(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=Zg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return us(r,a,e,o,l,p,0),a}};function Wc(i,t,e,n,s){let r,a;if(s===r_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=gc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=gc(r,i[r],i[r+1],a);return a&&Dr(a,a.next)&&(fs(a),a=a.next),a}function ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dr(e,e.next)||se(e.prev,e,e.next)===0)){if(fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function us(i,t,e,n,s,r,a){if(!i)return;!a&&r&&jg(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Xg(i,n,s,r):Wg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=qg(ei(i),t,e),us(i,t,e,n,s,r,2)):a===2&&Yg(i,t,e,n,s,r):us(ei(i),t,e,n,s,r,1);break}}}function Wg(i){let t=i.prev,e=i,n=i.next;if(se(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ai(s,o,r,l,a,c,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(se(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=no(p,g,t,e,n),E=no(_,m,t,e,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=f&&b&&b.z<=E;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ai(o,h,l,u,c,d,M.x,M.y)&&se(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ai(o,h,l,u,c,d,b.x,b.y)&&se(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ai(o,h,l,u,c,d,M.x,M.y)&&se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=E;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ai(o,h,l,u,c,d,b.x,b.y)&&se(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function qg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Dr(s,r)&&Xc(s,n,n.next,r)&&ds(s,r)&&ds(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),fs(n),fs(n.next),n=i=r),n=n.next}while(n!==i);return ei(n)}function Yg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&n_(a,o)){let l=qc(a,o);a=ei(a,a.next),l=ei(l,l.next),us(a,t,e,n,s,r,0),us(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zg(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Wc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(e_(c));for(s.sort($g),r=0;r<s.length;r++)e=Jg(s[r],e);return e}function $g(i,t){return i.x-t.x}function Jg(i,t){let e=Kg(i,t);if(!e)return t;let n=qc(e,i);return ei(n,n.next),ei(e,e.next)}function Kg(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ai(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ds(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Qg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Qg(i,t){return se(i.prev,i,t.prev)<0&&se(t.next,i,i.next)<0}function jg(i,t,e,n){let s=i;do s.z===0&&(s.z=no(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,t_(s)}function t_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function no(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function e_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ai(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function n_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!i_(i,t)&&(ds(i,t)&&ds(t,i)&&s_(i,t)&&(se(i.prev,i,t.prev)||se(i,t.prev,t))||Dr(i,t)&&se(i.prev,i,i.next)>0&&se(t.prev,t,t.next)>0)}function se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dr(i,t){return i.x===t.x&&i.y===t.y}function Xc(i,t,e,n){let s=Zs(se(i,t,e)),r=Zs(se(i,t,n)),a=Zs(se(e,n,i)),o=Zs(se(e,n,t));return!!(s!==r&&a!==o||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||a===0&&Ys(e,i,n)||o===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function i_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ds(i,t){return se(i.prev,i,i.next)<0?se(i,t,i.next)>=0&&se(i,i.prev,t)>=0:se(i,t,i.prev)<0||se(i,i.next,t)<0}function s_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qc(i,t){let e=new io(i.i,i.x,i.y),n=new io(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gc(i,t,e,n){let s=new io(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function io(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var is=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_c(t),xc(n,t);let a=t.length;e.forEach(_c);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,xc(n,e[l]);let o=Gg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function _c(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mr=class i extends Ve{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new I,g=new ct;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let f=0;f<n;f++){let E=f+m,M=E,b=E+n+1,D=E+n+2,T=E+1;o.push(M,b,T),o.push(b,D,T)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Sr=class i extends Ve{constructor(t=new hs([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;is.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let E=g[m];is.isClockWise(E)===!0&&(g[m]=E.reverse())}let _=is.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let E=g[m];p=p.concat(E)}for(let m=0,f=p.length;m<f;m++){let E=p[m];s.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let m=0,f=_.length;m<f;m++){let E=_[m],M=E[0]+u,b=E[1]+u,D=E[2]+u;n.push(M,b,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return a_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function a_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var br=class i extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let E=[],M=f/n,b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){let T=D/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+b,1-M),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let M=h[f][E+1],b=h[f][E],D=h[f+1][E],T=h[f+1][E+1];(f!==0||a>0)&&p.push(M,b,T),(f!==n-1||l<Math.PI)&&p.push(b,D,T)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ne=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Er=class extends ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function $s(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function o_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},so=class extends ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ml,endingEnd:Ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sl:r=t,o=2*e-n;break;case bl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sl:a=t,l=2*n-e;break;case bl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let D=0;D!==o;++D)r[D]=f*a[h+D]+E*a[c+D]+M*a[l+D]+b*a[u+D];return r}},ro=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ao=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$s(e,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$s(t.times,Array),values:$s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case La:e=this.InterpolantFactoryMethodLinear;break;case Jr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&o_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=La;var ni=class extends Je{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Qs;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends Je{};oo.prototype.ValueTypeName="color";var lo=class extends Je{};lo.prototype.ValueTypeName="number";var co=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},wr=class extends Je{InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Je{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Qs;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends Je{};ho.prototype.ValueTypeName="vector";var uo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},l_=new uo,fo=class{constructor(t){this.manager=t!==void 0?t:l_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Tr=class extends ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new oe,vc=new I,yc=new I,Ar=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Mc=new oe,Ji=new I,wa=new I,po=class extends Ar{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ji),wa.copy(n.position),wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wa),n.updateMatrixWorld(),s.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc)}},Hi=class extends ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new po}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},mo=class extends Ar{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rr=class extends ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new mo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Cr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Sc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Sc(){return(typeof performance>"u"?Date:performance).now()}var bo="\\[\\]\\.:\\/",c_=new RegExp("["+bo+"]","g"),Eo="[^"+bo+"]",h_="[^"+bo.replace("\\.","")+"]",u_=/((?:WC+[\/:])*)/.source.replace("WC",Eo),d_=/(WCOD+)?/.source.replace("WCOD",h_),f_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),p_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),m_=new RegExp("^"+u_+d_+f_+p_+"$"),g_=["material","materials","bones","map"],go=class{constructor(t,e,n){let s=n||jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},jt=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c_,"")}static parseTrackName(t){let e=m_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);g_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=go;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);var x_=document.getElementById("roomName"),eh=document.getElementById("heightInfo"),v_=document.getElementById("photosCount"),y_=document.getElementById("missionTitle"),M_=document.getElementById("missionText"),S_=document.getElementById("progressBar"),Co=document.getElementById("heightSlider"),E_=document.getElementById("idealHeightBtn"),T_=document.getElementById("cameraHud"),i0=document.getElementById("alignmentPanel"),A_=document.getElementById("indPosition"),R_=document.getElementById("indDirection"),C_=document.getElementById("indVertical"),P_=document.getElementById("indHorizon"),I_=document.getElementById("indAngle"),Jp_=document.getElementById("indPlacement"),L_=document.getElementById("roomList"),U_=document.getElementById("overallText"),D_=document.getElementById("overallBar"),Yc=document.getElementById("flash"),N_=document.getElementById("levelLine"),s0=document.getElementById("lensInfo"),F_=document.getElementById("focalText"),O_=document.getElementById("equivText"),r0=document.getElementById("walkBtn"),a0=document.getElementById("cameraBtn"),B_=document.getElementById("captureBtn"),nh=document.getElementById("folderBtn"),o0=document.getElementById("nextBtn"),l0=document.getElementById("feedback"),c0=document.getElementById("resultTitle"),h0=document.getElementById("resultText"),u0=document.getElementById("score"),d0=document.getElementById("breakdown"),f0=document.getElementById("closeFeedback"),wo=document.getElementById("toast"),ih=document.getElementById("gallery"),z_=document.getElementById("clearGallery"),Zc=document.getElementById("galleryGrid"),k_=document.getElementById("start"),H_=document.getElementById("startBtn"),fpRestartBtn=document.getElementById("restartBtn"),Wi=document.createElement("div");Wi.id="gameShell";document.body.prepend(Wi);Wi.appendChild(document.getElementById("ui"));var Pe=new os;(function(){var c=document.createElement("canvas");c.width=8;c.height=256;var g=c.getContext("2d"),gr=g.createLinearGradient(0,0,0,256);gr.addColorStop(0,"#7fb8e6");gr.addColorStop(0.55,"#c3e0f2");gr.addColorStop(1,"#eef5f8");g.fillStyle=gr;g.fillRect(0,0,8,256);var tx=new He(c);tx.colorSpace=Ne;tx.needsUpdate=!0;Pe.background=tx})();Pe.fog=new pr(12965354,42,150);var sh=()=>({w:Math.max(640,Wi.clientWidth),h:Math.max(426,Wi.clientHeight)}),Me=sh(),Xt=new Ee(60,Me.w/Me.h,.05,100);Xt.position.set(-7,1.4,1.5);var _s=Math.min(devicePixelRatio,1),fe=new fr({antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});fe.setPixelRatio(_s);fe.setSize(Me.w,Me.h,!1);fe.shadowMap.enabled=!0;fe.shadowMap.type=2;fe.outputColorSpace=Ne;fe.toneMapping=xo;fe.toneMappingExposure=1.2;Wi.prepend(fe.domElement);Pe.add(new Tr(16055295,7035725,2.05));var Po=new Rr(16774108,3.1);Po.position.set(-7,13,-3.5);Po.castShadow=!0;Po.shadow.mapSize.set(2048,2048);Po.shadow.camera.near=1;Po.shadow.camera.far=44;Po.shadow.camera.left=-16;Po.shadow.camera.right=16;Po.shadow.camera.top=16;Po.shadow.camera.bottom=-16;Po.shadow.bias=-0.0004;Po.shadow.normalBias=0.03;Po.shadow.radius=3.5;Pe.add(Po);var Io=new Hi(16766888,34,14,2);Io.position.set(-4,2.65,0);Io.castShadow=!1;Pe.add(Io);var rh=new Hi(16773846,28,12,2);rh.position.set(2.2,2.65,-2.5);Pe.add(rh);var ah=new Hi(16770759,24,11,2);ah.position.set(6.2,2.6,3);Pe.add(ah);(function(){var grd=new de(new ti(600,1,600),new ne({color:7048739,roughness:1}));grd.position.set(0,-0.55,0);grd.userData.noclip=1;Pe.add(grd);var pal=[0];for(var a=0;a<14;a++){var ang=a/14*Math.PI*2,R=34+((a*7)%14),bx=Math.cos(ang)*R,bz=Math.sin(ang)*R,bh=9+((a*11)%26),bw=6+(a%3)*2.5,bdp=6+(a%4)*2;var col=(a%3===0)?9868950:(a%3===1)?11052922:8158332;var bd=new de(new ti(bw,bh,bdp),new ne({color:col,roughness:.94}));bd.position.set(bx,bh/2-0.5,bz);bd.userData.noclip=1;Pe.add(bd);var wc=new de(new ti(bw*0.9,bh*0.86,bdp*0.9),new ne({color:4934475,emissive:3421236,emissiveIntensity:0.12,roughness:.6}));wc.position.copy(bd.position);wc.userData.noclip=1;Pe.add(wc)}})();var Lo=new $e(Math.round(Me.w*_s*.78),Math.round(Me.h*_s*.78),{colorSpace:Ne,depthBuffer:!0,stencilBuffer:!1}),oh=new os,V_=new zi(-1,1,1,-1,0,1),Uo=new Ge({uniforms:{tDiffuse:{value:Lo.texture},strength:{value:.025},aspect:{value:Me.w/Me.h}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float strength;uniform float aspect;varying vec2 vUv;void main(){vec2 p=vUv*2.0-1.0;p.x*=aspect;float r2=dot(p,p);p*=1.0+strength*r2;p.x/=aspect;vec2 uv=p*.5+.5;if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0)gl_FragColor=vec4(0.015,0.02,0.025,1.0);else gl_FragColor=texture2D(tDiffuse,uv);}"});oh.add(new de(new Bi(2,2),Uo));function lh(){/* imagem retilínea: sem distorção de barril e sem bordas escuras */Uo.uniforms.strength.value=0,fe.setRenderTarget(Lo),fe.render(Pe,Xt),fe.setRenderTarget(null),fe.render(oh,V_)}var yt={wall:new ne({color:15920872,roughness:.92}),floor:new ne({color:10185285,roughness:.72}),tile:new ne({color:14213089,roughness:.7}),dark:new ne({color:2502972}),white:new ne({color:16250868}),wood:new ne({color:10185285}),green:new ne({color:6720099}),blue:new ne({color:8167360}),glass:new Er({color:12577023,transparent:!0,opacity:.32,roughness:.15,transmission:.3})};function ft(i,t,e,n,s,r,a=yt.wall){let o=new ti(n,s,r),l=new de(o,a);return l.position.set(i,t,e),l.castShadow=t<2.9,l.receiveShadow=!0,Pe.add(l),l}function On(i,t,e,n,s=3){var _w=ft(i,s/2,t,e,s,n,yt.wall);_w.userData.isWall=true;return _w}function Do(i,t,e,n,s=12100750){return ft(i,.035,t,e,.07,n,new ne({color:s,roughness:1}))}function Br(i,t){ft(i,.35,t,.45,.7,.45,yt.wood);let e=new de(new br(.55,16,12),yt.green);e.position.set(i,1,t),e.scale.set(.8,1.25,.8),e.castShadow=!0,e.receiveShadow=!0,Pe.add(e)}function ch(i,t,e,n=0,hs=1,fs=1){var W=0.96,H=2.04,fr=0.1,dep=0.2,A=[Math.cos(n),-Math.sin(n)],P=[Math.sin(n),Math.cos(n)];function pp(o,y,wx,hy,dz,mat){var m=ft(i+A[0]*o,y,e+A[1]*o,wx,hy,dz,mat);m.rotation.y=n;m.userData.noclip=1;return m}pp(W/2+fr/2,H/2,fr,H,dep,yt.dark);pp(-(W/2+fr/2),H/2,fr,H,dep,yt.dark);pp(0,H+fr*0.6,W+2.4*fr,fr*1.3,dep,yt.dark);var hl=0.45;var Hx=i+hs*(W/2)*A[0],Hz=e+hs*(W/2)*A[1],a0=(hs>0?n+Math.PI:n),ry1=Math.atan2(-fs*Math.cos(n),fs*Math.sin(n)),sweep=Math.atan2(Math.sin(ry1-a0),Math.cos(ry1-a0));var lf=ft(Hx+hl*Math.cos(a0),H*0.49,Hz-hl*Math.sin(a0),0.9,H*0.94,0.05,new ne({color:14727387,roughness:.62}));lf.rotation.y=a0;lf.userData.noclip=1;var HA=0.43,HP=0.12,hx=Math.abs(A[0])*HA+Math.abs(P[0])*HP,hz=Math.abs(A[1])*HA+Math.abs(P[1])*HP;Dg.push({minX:(i-hx)*At,maxX:(i+hx)*At,minZ:(e-hz)*At,maxZ:(e+hz)*At});var bhx=Math.abs(A[0])*0.5+Math.abs(P[0])*0.15,bhz=Math.abs(A[1])*0.5+Math.abs(P[1])*0.15;doorList.push({leaf:lf,a0:a0,sweep:sweep,hx:Hx,hz:Hz,hl:hl,t:0,cx:i,cz:e,bminX:(i-bhx)*At,bmaxX:(i+bhx)*At,bminZ:(e-bhz)*At,bmaxZ:(e+bhz)*At,closed:true});}function hh(i,t,e,n,s,r=0){let a=ft(i,t,e,n,s,.08,yt.glass);a.rotation.y=r;let o=ft(i,t,e,n+.12,s+.12,.04,yt.dark);o.rotation.y=r;let l=ft(i,t,e,n-.08,s-.08,.09,yt.glass);return l.rotation.y=r,a}var ys=new Rn;ys.visible=false;/* marcador/seta azul do chão removido */var Fo=new de(new yr(.58,24),new Nn({color:3661311,transparent:!0,opacity:.55,depthWrite:!1,side:Fe}));Fo.rotation.x=-Math.PI/2;Fo.position.y=.018;ys.add(Fo);var Oo=new de(new Mr(.66,.78,24),new Nn({color:16777215,transparent:!0,opacity:.82,depthWrite:!1,side:Fe}));Oo.rotation.x=-Math.PI/2;Oo.position.y=.021;ys.add(Oo);var xn=new hs;xn.moveTo(0,.55);xn.lineTo(-.22,.12);xn.lineTo(-.08,.12);xn.lineTo(-.08,-.48);xn.lineTo(.08,-.48);xn.lineTo(.08,.12);xn.lineTo(.22,.12);xn.closePath();var zr=new de(new Sr(xn),new Nn({color:16777215,transparent:!0,opacity:.9,side:Fe,depthWrite:!1}));zr.rotation.x=-Math.PI/2;zr.position.y=.026;zr.scale.set(.65,.65,.65);ys.add(zr);var At=1.18;
var fpFacadeGroundGroup=new Rn;Pe.add(fpFacadeGroundGroup);
function fpClearFacadeGroundMarkers(){while(fpFacadeGroundGroup.children.length){var c=fpFacadeGroundGroup.children.pop();if(c.geometry&&c.geometry.dispose)c.geometry.dispose();if(c.material&&c.material.dispose)c.material.dispose()}}
function fpBuildFacadeGroundMarkers(){
  fpClearFacadeGroundMarkers();
  var roomNames=Object.keys(curRoomRules||{}),rule=null;
  for(var ri0=0;ri0<roomNames.length;ri0++){var rr0=curRoomRules[roomNames[ri0]];if(rr0&&rr0.type==='facade'&&Array.isArray(rr0.facadeShots)){rule=rr0;break}}
  if(!rule)return;
  for(var mi=0;mi<rule.facadeShots.length;mi++){
    var sh=rule.facadeShots[mi],p=sh.position||{};if(p.x==null||p.z==null)continue;
    var g=new Rn();g.position.set(+p.x*At,.22,+p.z*At);g.userData.shotId=sh.id;g.userData.phase=Math.random()*6.283;
    var diskMat=new Nn({color:0x168cff,transparent:true,opacity:.58,depthWrite:false,depthTest:false,side:Fe});
    var disk=new de(new yr(.58*At,40),diskMat);disk.rotation.x=-Math.PI/2;g.add(disk);
    var ringMat=new Nn({color:0x77d7ff,transparent:true,opacity:.98,depthWrite:false,depthTest:false,side:Fe});
    var ring=new de(new Mr(.62*At,.78*At,40),ringMat);ring.rotation.x=-Math.PI/2;ring.position.y=.008;g.add(ring);
    var coreMat=new Nn({color:0xc8f4ff,transparent:true,opacity:.90,depthWrite:false,depthTest:false,side:Fe});
    var core=new de(new Mr(.20*At,.29*At,32),coreMat);core.rotation.x=-Math.PI/2;core.position.y=.012;g.add(core);
    fpFacadeGroundGroup.add(g);
  }
}
function fpUpdateFacadeGroundMarkers(tm){
  var room=activeRoom(),rr=curRoomRules[room]||{},show=rr.type==='facade',done=(show&&ms[room])?fpFacadeSet(ms[room]):new Set();
  fpFacadeGroundGroup.visible=show;
  if(!show)return;
  for(var i0=0;i0<fpFacadeGroundGroup.children.length;i0++){
    var g=fpFacadeGroundGroup.children[i0],isDone=done.has(g.userData.shotId),pulse=1+Math.sin((tm||0)*.004+g.userData.phase)*.10;
    g.scale.set(pulse,pulse,pulse);
    for(var j0=0;j0<g.children.length;j0++){var m=g.children[j0];if(m.material){m.material.color.setHex(isDone?0x55e577:(j0===0?0x168cff:0x77d7ff));m.material.opacity=isDone?(j0===0?.28:.72):(j0===0?.48:.95)}}
  }
}
var Jc=0,Xi=!1,rn=-Math.PI/2,gs=0,xs=0,Ke=10,G_=1.5,W_=23.6,Ce={},mn=[],Or=null,ge=null,Kc=0,To=0;var baseHeight=1.4,edgeAssist=document.getElementById("edgeAssist"),edgeHelp=document.getElementById("edgeHelp"),edgeEls=[];var fpMiniCanvas=document.getElementById("miniMapCanvas"),fpMiniCtx=fpMiniCanvas?.getContext("2d"),fpMiniVisible=!0,fpMiniLast=0;
/* ===== FramePro V9 — Sistema de mapas selecionáveis ===== */
var vs=new ne({color:16053746,roughness:.28}),ai=new ne({color:10200490,roughness:.24,metalness:.65});
function _n(i,t,e,n,s,r,a=vs,o=20){let l=new de(new cs(n,s,r,o),a);return l.position.set(i,t,e),l.castShadow=!0,l.receiveShadow=!0,Pe.add(l),l}
function No(i,t){let e=ft(i,2.72,t,.035,.55,.035,yt.dark),n=new de(new cs(.14,.34,.28,24),new ne({color:16050392,roughness:.45}));n.position.set(i,2.4,t),n.castShadow=!1,Pe.add(n)}

/* material extras compartilhados */
var matBed=new ne({color:15921906,roughness:.9}),matRugA=13088156,matRugB=13944757,matRugC=14076607;

/* estado de mapa (substitui as variáveis fixas do apê original) */
var $c={},Fr=[],ms={},curDetect=function(){return""},
    curBounds={minX:-8.72,maxX:8.72,minZ:-5.72,maxZ:5.72},
    curMini={outer:[-8.65,-5.65,17.3,11.3],rooms:{}},
    mapMeshes=[],curPhaseConfig=null,curRoomRules={},curStairs=[],curFloors=[],curTraffic=null,curMapId=(sessionStorage.getItem("framepro_pending_map")||"ape");sessionStorage.removeItem("framepro_pending_map");
function uh(i,t){return curDetect(i,t)}
function scaleRooms(raw){var o={};for(var k in raw){var r=raw[k];o[k]={cx:r.cx*At,cz:r.cz*At,w:r.w*At,d:r.d*At}}return o}
function makeProgress(order){return Object.fromEntries(order.map(function(k){return[k,{photos:0,sectors:new Set,walls:new Set}]}))}

/* ------- MAPA APARTAMENTO — 3 dormitórios (segue a planta) ------- */
function fpResolveSceneArg(value){
  if(value&&typeof value==="object"){
    if(value.material){
      var named={matBed:matBed,matRugA:matRugA,vs:vs};
      return named[value.material]||yt[value.material];
    }
    if(value.materialConfig)return new ne(value.materialConfig);
  }
  return value;
}
function fpBuildScene(scene){
  if(!Array.isArray(scene)||!scene.length)throw new Error("A fase não possui uma cena 3D válida no campo scene.");
  var handlers={box:ft,wall:On,door:ch,window:hh,light:No,rug:Do,cylinder:_n};
  for(var i=0;i<scene.length;i++){
    var command=scene[i]||{},handler=handlers[command.type];
    if(!handler)throw new Error("Comando 3D desconhecido: "+command.type+" (item "+i+")");
    var args=(command.args||[]).map(fpResolveSceneArg);
    handler.apply(null,args);
  }
}
function fpCreateDetector(config){
  var rules=config&&config.rules||[];
  return function(i,t,y){
    i/=At;t/=At;y=(y==null?1.4:y);
    for(var n=0;n<rules.length;n++){
      var r=rules[n];
      if(r.minX!=null&&!(i>r.minX))continue;
      if(r.maxX!=null&&!(i<r.maxX))continue;
      if(r.minZ!=null&&!(t>r.minZ))continue;
      if(r.maxZ!=null&&!(t<r.maxZ))continue;
      if(r.minY!=null&&!(y>r.minY))continue;
      if(r.maxY!=null&&!(y<r.maxY))continue;
      return r.room;
    }
    return rules.length?rules[rules.length-1].room:"";
  };
}
function fpBuildMapsFromJson(raw){
  var maps={};
  Object.keys(raw||{}).forEach(function(id){
    var cfg=raw[id];
    maps[id]={label:cfg.label,subtitle:cfg.subtitle,icon:cfg.icon,build:function(){fpBuildScene(cfg.scene)},order:cfg.order,roomsRaw:cfg.roomsRaw,detect:fpCreateDetector(cfg.detection),bounds:cfg.bounds,spawn:cfg.spawn,spawnAngle:cfg.spawnAngle||0,mini:cfg.mini,config:cfg};
  });
  return maps;
}
var MAPS=fpBuildMapsFromJson(window.FRAMEPRO_PHASES);
if(!Object.keys(MAPS).length)throw new Error("Nenhuma fase JSON foi carregada.");

/* revisa a planta: remove/afasta móveis que atrapalham a passagem pelas portas */
function fpClearPassages(nu){
  if(!Dg||!Dg.length)return;
  var mgLong=0.55*At, mgShort=0.10*At;
  for(var i=0;i<Dg.length;i++){var g=Dg[i];
    var gw=g.maxX-g.minX, gd=g.maxZ-g.minZ;
    var alongX=gw>=gd; /* opening spans X -> anda-se ao longo de Z */
    g.__alongX=alongX;
    g.__ap=alongX
      ?{minX:g.minX-mgShort,maxX:g.maxX+mgShort,minZ:g.minZ-mgLong,maxZ:g.maxZ+mgLong}
      :{minX:g.minX-mgLong,maxX:g.maxX+mgLong,minZ:g.minZ-mgShort,maxZ:g.maxZ+mgShort};
  }
  for(var q=nu.length-1;q>=0;q--){var m=nu[q];
    if(!m||(m.userData&&(m.userData.isWall||m.userData.noclip)))continue;
    var p=m.geometry&&m.geometry.parameters;if(!p||p.width==null)continue;
    var ry=(m.rotation&&m.rotation.y)||0,ca=Math.abs(Math.cos(ry)),sa=Math.abs(Math.sin(ry));
    var hw=p.width*Math.abs(m.scale.x)/2, hd=p.depth*Math.abs(m.scale.z)/2;
    var hy=p.height*Math.abs(m.scale.y)/2, yTop=m.position.y+hy, yBot=m.position.y-hy;
    /* nunca mexer em piso, teto ou lajes enormes: não atrapalham a passagem */
    if(yTop<=0.25||yBot>=1.75||hw>3.0*At||hd>3.0*At)continue;
    var exm=hw*ca+hd*sa, ezm=hw*sa+hd*ca;
    var aMinX=m.position.x-exm,aMaxX=m.position.x+exm,aMinZ=m.position.z-ezm,aMaxZ=m.position.z+ezm;
    /* dentro do vão real da porta -> remove */
    var removed=false;
    for(var k=0;k<Dg.length;k++){var g=Dg[k];
      if(!(aMaxX<=g.minX||aMinX>=g.maxX||aMaxZ<=g.minZ||aMinZ>=g.maxZ)){
        Pe.remove(m);if(m.geometry&&m.geometry.dispose)m.geometry.dispose();nu.splice(q,1);removed=true;break;
      }
    }
    if(removed)continue;
    /* na área de aproximação da porta -> afasta para fora do caminho */
    for(var k2=0;k2<Dg.length;k2++){var g2=Dg[k2],ap=g2.__ap;
      if(aMaxX<=ap.minX||aMinX>=ap.maxX||aMaxZ<=ap.minZ||aMinZ>=ap.maxZ)continue;
      if(g2.__alongX){
        var czg=(g2.minZ+g2.maxZ)/2,dz=(m.position.z<czg)?-1:1;
        var oz=Math.min(aMaxZ,ap.maxZ)-Math.max(aMinZ,ap.minZ);
        m.position.z+=dz*(oz+0.03*At);
      }else{
        var cxg=(g2.minX+g2.maxX)/2,dx=(m.position.x<cxg)?-1:1;
        var ox=Math.min(aMaxX,ap.maxX)-Math.max(aMinX,ap.minX);
        m.position.x+=dx*(ox+0.03*At);
      }
      aMinX=m.position.x-exm;aMaxX=m.position.x+exm;aMinZ=m.position.z-ezm;aMaxZ=m.position.z+ezm;
    }
  }
}

function loadMap(id){
  var def=MAPS[id]||MAPS.ape;
  for(var i=0;i<mapMeshes.length;i++){Pe.remove(mapMeshes[i]);if(mapMeshes[i].geometry&&mapMeshes[i].geometry.dispose)mapMeshes[i].geometry.dispose()}
  mapMeshes=[];
  var before=new Set(Pe.children);
  Dg=[];doorList=[];def.build();
  var nu=[];
  Pe.children.forEach(function(c){if(!before.has(c)&&c.isMesh)nu.push(c)});
   nu.forEach(function(m){m.position.x*=At;m.position.z*=At;m.scale.x*=At;m.scale.z*=At});
   fpClearPassages(nu);
   mapMeshes=nu;buildColliders(nu);
  $c=scaleRooms(def.roomsRaw);Fr=def.order.slice();curDetect=def.detect;curBounds=def.bounds;
  curMini={outer:def.mini.outer,rooms:def.mini.rooms};
  ms=makeProgress(Fr);
  curMapId=id;curPhaseConfig=def.config||{};curRoomRules=curPhaseConfig.roomRules||{};curStairs=curPhaseConfig.stairs||[];curFloors=curPhaseConfig.floors||[];curTraffic=curPhaseConfig.traffic||null;
  fpBuildFacadeGroundMarkers();
  if(typeof window.__fpTrafficLoad==="function")window.__fpTrafficLoad(curTraffic);
  Xt.position.set(def.spawn.x*At,(def.spawn.y==null?1.4:def.spawn.y),def.spawn.z*At);baseHeight=(def.spawn.y==null?1.4:def.spawn.y);
  rn=def.spawnAngle!=null?def.spawnAngle:-Math.PI/2;gs=0;xs=0;
  if(typeof gh==="function")gh();
  fpMiniLast=0;
  var sel=document.getElementById("mapSelect");if(sel)sel.value=id;var bs=document.querySelector("#brand small");if(bs)bs.textContent=def.icon+" "+def.label+" • "+def.subtitle;
}
function fpMiniMapDraw(i=0){if(!fpMiniCtx||!fpMiniVisible||i-fpMiniLast<80)return;fpMiniLast=i;var t=fpMiniCanvas.width,e=fpMiniCanvas.height,n=fpMiniCtx;n.clearRect(0,0,t,e);n.fillStyle="#091018";n.fillRect(0,0,t,e);var ext=curMini.outer,pad=12,o=(t-2*pad)/ext[2],l=(e-2*pad)/ext[3],c=function(x){return pad+(x-ext[0])*o},h=function(z){return pad+(z-ext[1])*l};n.strokeStyle="#9aabba";n.lineWidth=4;n.strokeRect(c(ext[0]),h(ext[1]),ext[2]*o,ext[3]*l);Object.entries(curMini.rooms).forEach(function(pair){var r=pair[0],m=pair[1],g=ms[r],q=fpReq(r),done=g&&g.photos>=q.photos&&g.walls.size>=q.walls;n.fillStyle=done?"rgba(101,229,114,.46)":"rgba(52,66,82,.68)";n.fillRect(c(m.x),h(m.z),m.w*o,m.h*l);n.strokeStyle=done?"#65e572":"#617084";n.lineWidth=1.5;n.strokeRect(c(m.x),h(m.z),m.w*o,m.h*l);n.fillStyle="#dce7f3";n.font="bold 13px system-ui";n.textAlign="center";n.textBaseline="middle";n.fillText(m.label||r,c(m.x+m.w/2),h(m.z+m.h/2))});try{var __room=activeRoom(),__rr=curRoomRules[__room]||{},__shots=Array.isArray(__rr.facadeShots)?__rr.facadeShots:[];
for(var __si=0;__si<__shots.length;__si++){var __sh=__shots[__si],__pos=__sh.position||{};if(__pos.x==null||__pos.z==null)continue;var __done=ms[__room]&&fpFacadeSet(ms[__room]).has(__sh.id),__mx=c(+__pos.x),__mz=h(+__pos.z);n.beginPath();n.arc(__mx,__mz,5,0,Math.PI*2);n.fillStyle=__done?"#65e572":"#4db8ff";n.fill();n.lineWidth=2;n.strokeStyle="#ffffff";n.stroke();var __tx=(__sh.target&&__sh.target.x!=null)?+__sh.target.x:+__pos.x,__tz=(__sh.target&&__sh.target.z!=null)?+__sh.target.z:(+__pos.z+1),__ang=Math.atan2(__tz-(+__pos.z),__tx-(+__pos.x));n.beginPath();n.moveTo(__mx,__mz);n.lineTo(__mx+Math.cos(__ang)*11,__mz+Math.sin(__ang)*11);n.strokeStyle=__done?"#65e572":"#ffd84d";n.lineWidth=2;n.stroke();}
}catch(__e){}var px=Xt.position.x/At,pz=Xt.position.z/At;try{var __ux=c(px),__uz=h(pz),__ua=-rn-Math.PI/2,__sz=9;n.save();n.translate(__ux,__uz);n.rotate(__ua);n.beginPath();n.moveTo(__sz,0);n.lineTo(-__sz*.65,-__sz*.55);n.lineTo(-__sz*.35,0);n.lineTo(-__sz*.65,__sz*.55);n.closePath();n.fillStyle="#ffffff";n.fill();n.lineWidth=2;n.strokeStyle="#126fba";n.stroke();n.restore();}catch(__pe){}try{var ens=(typeof window.__fpsGetEnemies==="function")?window.__fpsGetEnemies():[];for(var ei=0;ei<ens.length;ei++){var en=ens[ei];if(en.dead)continue;var ex=c(en.x/At),ez=h(en.z/At);n.beginPath();n.arc(ex,ez,6,0,6.283);n.fillStyle="#ff4d4d";n.fill();n.lineWidth=2;n.strokeStyle="#3a0000";n.stroke();}}catch(e){}}function Ao(i){i.x=Math.max(curBounds.minX*At,Math.min(curBounds.maxX*At,i.x)),i.z=Math.max(curBounds.minZ*At,Math.min(curBounds.maxZ*At,i.z))}var dh=[],Bn=(i,t,e,n)=>dh.push({x:i*At,z:t*At,w:e*At,d:n*At});var Dg=[];var doorList=[];loadMap(curMapId);function buildColliders(ms2){dh=[];var R=0.15*At;for(var q=0;q<ms2.length;q++){var m=ms2[q];if(!m)continue;var isW=!!(m.userData&&m.userData.isWall);if(!isW)continue;var g=m.geometry;if(!g||!g.parameters)continue;var p=g.parameters,hw,hd,hy;if(p.width!=null){hw=p.width*Math.abs(m.scale.x)/2;hd=p.depth*Math.abs(m.scale.z)/2;hy=p.height*Math.abs(m.scale.y)/2}else if(p.radiusTop!=null){var rr=Math.max(p.radiusTop,p.radiusBottom)*Math.max(Math.abs(m.scale.x),Math.abs(m.scale.z));hw=rr;hd=rr;hy=p.height*Math.abs(m.scale.y)/2}else continue;var yMax=m.position.y+hy,yMin=m.position.y-hy,pad=R;if(isW){if(hw<0.03||hd<0.03)continue;if(hw*hd>55)continue;}else{if(yMax<0.42)continue;if(yMin>1.62)continue;if(hy<0.12)continue;if(hw<0.16||hd<0.16)continue;if(hw>3.6||hd>3.6)continue;pad=0.06*At;}var ry=(m.rotation&&m.rotation.y)||0,ca=Math.abs(Math.cos(ry)),sa=Math.abs(Math.sin(ry)),ex=hw*ca+hd*sa,ez=hw*sa+hd*ca;dh.push({minX:m.position.x-ex-pad,maxX:m.position.x+ex+pad,minZ:m.position.z-ez-pad,maxZ:m.position.z+ez+pad,minY:yMin-.15,maxY:yMax+.15})}}function Nr(i){if(i.x<curBounds.minX*At||i.x>curBounds.maxX*At||i.z<curBounds.minZ*At||i.z>curBounds.maxZ*At)return!1;for(var dq=0;dq<doorList.length;dq++){var dz2=doorList[dq];if(dz2.closed&&i.x>dz2.bminX&&i.x<dz2.bmaxX&&i.z>dz2.bminZ&&i.z<dz2.bmaxZ)return!1;}for(var g=0;g<Dg.length;g++){var d=Dg[g];if(i.x>d.minX&&i.x<d.maxX&&i.z>d.minZ&&i.z<d.maxZ)return!0}for(var k=0;k<dh.length;k++){var b=dh[k];if(Xt.position.y>b.minY&&Xt.position.y<b.maxY&&i.x>b.minX&&i.x<b.maxX&&i.z>b.minZ&&i.z<b.maxZ)return!1}return!0}function X_(i){var startX=Xt.position.x,startZ=Xt.position.z,len=Math.hypot(i.x,i.z),steps=Math.max(1,Math.ceil(len/(.075*At))),moved=!1,dx=i.x/steps,dz=i.z/steps;for(var st=0;st<steps;st++){var cx=Xt.position.x,cz=Xt.position.z,e={x:cx+dx,z:cz+dz};Ao(e);if(Nr(e)){Xt.position.x=e.x;Xt.position.z=e.z;moved=!0;continue}var slid=!1;if(dx!==0){var nx={x:cx+dx,z:cz};Ao(nx);if(Nr(nx)){Xt.position.x=nx.x;slid=!0}}if(dz!==0){var nz={x:Xt.position.x,z:cz+dz};Ao(nz);if(Nr(nz)){Xt.position.z=nz.z;slid=!0}}if(slid){moved=!0}else{break}}return moved&&(Xt.position.x!==startX||Xt.position.z!==startZ)}function fh(){var effectiveFocal=Ke+4.2;Xt.fov=ri.clamp(2*Math.atan(W_/(2*effectiveFocal))*180/Math.PI,48,100),Xt.updateProjectionMatrix(),F_.textContent=Ke.toFixed(1).replace(".",",")+" mm",O_.textContent="≈ "+Math.round(effectiveFocal*G_)+" mm equivalente"}function Gi(i){i=String(i??"");let t=i.length>70,d=t?Math.min(10000,5600+(i.length-70)*32):4000;wo.textContent=i,wo.classList.toggle("long",t),wo.style.opacity=1,clearTimeout(window.__tt),window.__tt=setTimeout(()=>{wo.style.opacity=0,setTimeout(()=>wo.classList.remove("long"),260)},d)}function q_(i,t){return Math.abs(Math.atan2(Math.sin(i-t),Math.cos(i-t)))}function sn(i){return Math.max(0,Math.min(1,i))}function ph(i){let t=(i%(Math.PI*2)+Math.PI*2)%(Math.PI*2);return Math.floor((t+Math.PI/4)/(Math.PI/2))%4}function Y_(i){let t=ph(rn),e=new Set([t]);if(i.angle>=72&&Ke<=14){let n=t*Math.PI/2,s=(rn%(Math.PI*2)+Math.PI*2)%(Math.PI*2),r=Math.atan2(Math.sin(s-n),Math.cos(s-n));e.add((t+(r>=0?1:3))%4)}return e}function v8Project(i,t,e){let n=new I(i,t,e);n.project(Xt);let cr=fe.domElement.getBoundingClientRect(),ar=edgeAssist.getBoundingClientRect();let x=cr.left-ar.left+(n.x*.5+.5)*cr.width,y=cr.top-ar.top+(-.5*n.y+.5)*cr.height;return{x:x,y:y,z:n.z,front:n.z>-1&&n.z<1,ok:n.z>-1&&n.z<1&&n.x>=-1.04&&n.x<=1.04&&n.y>=-1.04&&n.y<=1.04}}
function v8Balance(i){let t=$c[i]||$c[Fr[0]];if(!t)return 100;let e=new I(t.cx,1.4,t.cz);e.project(Xt);let n=Math.abs(e.y);if(!isFinite(n))n=1;let s=Math.round(100*sn(1-n/.46)),r=(Math.abs(gs)<=.012?100:Math.round(100*sn(1-(Math.abs(gs)-.012)/.135))),v=Math.round(s*.42+r*.58);return isFinite(v)?v:100}
function updateDoors(dt){if(!doorList||!doorList.length)return;var od=2.15*At,od2=od*od;var actors=[[Xt.position.x,Xt.position.z]];try{if(typeof window.__fpsGetEnemies==="function"){var es=window.__fpsGetEnemies();for(var a=0;a<es.length;a++){if(!es[a].dead)actors.push([es[a].x,es[a].z]);}}}catch(e){}try{if(typeof window.__fpBrokerPos==="function"){var bp=window.__fpBrokerPos();if(bp)actors.push([bp.x,bp.z]);}}catch(e){}try{if(typeof window.__dogPos==="function"){var dp=window.__dogPos();if(dp)actors.push([dp.x,dp.z]);}}catch(e){}for(var i=0;i<doorList.length;i++){var d=doorList[i];var open=0;for(var k=0;k<actors.length;k++){var dx=actors[k][0]-d.cx*At,dz=actors[k][1]-d.cz*At;if(dx*dx+dz*dz<od2){open=1;break;}}d.t+=(open-d.t)*Math.min(1,dt*8);if(d.t<0.001)d.t=0;if(d.t>0.999)d.t=1;var Hx=d.hx*At,Hz=d.hz*At,hl=d.hl*At,ry=d.a0+d.sweep*d.t;d.leaf.rotation.y=ry;d.leaf.position.x=Hx+hl*Math.cos(ry);d.leaf.position.z=Hz-hl*Math.sin(ry);d.closed=d.t<0.45;}}
function activeRoom(){var here=curDetect(Xt.position.x,Xt.position.z,Xt.position.y)||"";var fx=-Math.sin(rn),fz=-Math.cos(rn),pd=2.0*At;var px=Xt.position.x+fx*pd,pz=Xt.position.z+fz*pd;px=Math.max(curBounds.minX*At,Math.min(curBounds.maxX*At,px));pz=Math.max(curBounds.minZ*At,Math.min(curBounds.maxZ*At,pz));var vx=px-Xt.position.x,vz=pz-Xt.position.z,vl=Math.hypot(vx,vz),vst=Math.max(2,Math.ceil(vl/(.10*At))),lx=Xt.position.x,lz=Xt.position.z;for(var vi=1;vi<=vst;vi++){var vf=vi/vst,cxx=Xt.position.x+vx*vf,czz=Xt.position.z+vz*vf;if(!Nr({x:cxx,z:czz}))break;lx=cxx;lz=czz;}var aim=curDetect(lx,lz)||"";return aim||here;}
function fpVisibleWallCount(t){
  if(!t)return 0;
  var hw=t.w/2,hd=t.d/2,yv=[.22,1.35,2.55],us=[.08,.5,.92],walls=[
    function(u,y){return[t.cx-hw+u*t.w,y,t.cz-hd]},
    function(u,y){return[t.cx+hw,y,t.cz-hd+u*t.d]},
    function(u,y){return[t.cx+hw-u*t.w,y,t.cz+hd]},
    function(u,y){return[t.cx-hw,y,t.cz+hd-u*t.d]}
  ],count=0;
  Xt.updateMatrixWorld(true);
  for(var wi=0;wi<4;wi++){
    var visible=false,minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9,front=0;
    for(var yi=0;yi<yv.length;yi++)for(var ui=0;ui<us.length;ui++){
      var a=walls[wi](us[ui],yv[yi]),v=new I(a[0],a[1],a[2]).applyMatrix4(Xt.matrixWorldInverse);
      if(v.z>=-.055)continue;
      front++;
      v.applyMatrix4(Xt.projectionMatrix);
      minX=Math.min(minX,v.x);maxX=Math.max(maxX,v.x);minY=Math.min(minY,v.y);maxY=Math.max(maxY,v.y);
      if(v.x>=-1&&v.x<=1&&v.y>=-1&&v.y<=1)visible=true;
    }
    if(front>=2){
      var ix=Math.max(-1,minX),ax=Math.min(1,maxX),iy=Math.max(-1,minY),ay=Math.min(1,maxY);
      var overlap=Math.max(0,ax-ix)*Math.max(0,ay-iy);
      if(visible||overlap>.025)count++;
    }
  }
  return count;
}
function fpDirectionContext(t){
  var px=Xt.position.x,pz=Xt.position.z,hw=t.w/2,hd=t.d/2,e=px-t.cx,n=pz-t.cz;
  var inside=Math.abs(e)<=hw&&Math.abs(n)<=hd;
  var bx=Math.sin(rn),bz=Math.cos(rn),sourceId="",nearest=0;

  if(inside){
    /* Dentro: a parede de tomada é a parede realmente atrás da câmera. */
    var walls=[
      {id:"left",dist:e+hw,dot:-bx,along:n/(hd||1)},
      {id:"right",dist:hw-e,dot:bx,along:n/(hd||1)},
      {id:"top",dist:n+hd,dot:-bz,along:e/(hw||1)},
      {id:"bottom",dist:hd-n,dot:bz,along:e/(hw||1)}
    ];
    var behind=walls.filter(function(w){return w.dot>.18}).sort(function(a,b){return a.dist-b.dist})[0];
    if(!behind)return{score:0,targetType:"none",targetX:t.cx,targetZ:t.cz,targets:[]};
    sourceId=behind.id;
    var ideals=[-1,0,1];nearest=ideals[0];
    for(var k=1;k<ideals.length;k++)if(Math.abs(behind.along-ideals[k])<Math.abs(behind.along-nearest))nearest=ideals[k];
  }else{
    /* Fora: encontra o posicionamento clássico mais próximo do cômodo
       (quatro cantos + quatro centros de parede) e usa exatamente a mesma
       regra de direção aplicada dentro do ambiente. */
    var candidates=[
      {id:"left",ideal:-1,x:t.cx-hw,z:t.cz-hd},{id:"left",ideal:0,x:t.cx-hw,z:t.cz},{id:"left",ideal:1,x:t.cx-hw,z:t.cz+hd},
      {id:"right",ideal:-1,x:t.cx+hw,z:t.cz-hd},{id:"right",ideal:0,x:t.cx+hw,z:t.cz},{id:"right",ideal:1,x:t.cx+hw,z:t.cz+hd},
      {id:"top",ideal:-1,x:t.cx-hw,z:t.cz-hd},{id:"top",ideal:0,x:t.cx,z:t.cz-hd},{id:"top",ideal:1,x:t.cx+hw,z:t.cz-hd},
      {id:"bottom",ideal:-1,x:t.cx-hw,z:t.cz+hd},{id:"bottom",ideal:0,x:t.cx,z:t.cz+hd},{id:"bottom",ideal:1,x:t.cx+hw,z:t.cz+hd}
    ],best=null,bestD=1e99;
    for(var c=0;c<candidates.length;c++){
      var cd=Math.hypot(px-candidates[c].x,pz-candidates[c].z);
      if(cd<bestD){bestD=cd;best=candidates[c]}
    }
    if(!best)return{score:0,targetType:"none",targetX:t.cx,targetZ:t.cz,targets:[]};
    sourceId=best.id;nearest=best.ideal;
  }

  var targets=[],targetType=nearest===0?"center":"cornerTriple";
  if(nearest===0){
    if(sourceId==="left")targets.push({x:t.cx+hw,z:t.cz,kind:"center"});
    else if(sourceId==="right")targets.push({x:t.cx-hw,z:t.cz,kind:"center"});
    else if(sourceId==="top")targets.push({x:t.cx,z:t.cz+hd,kind:"center"});
    else targets.push({x:t.cx,z:t.cz-hd,kind:"center"});
  }else{
    /* No canto: 1 aresta diagonalmente oposta + os centros das 2 paredes
       que se encontram nessa aresta. Os três alvos são tecnicamente válidos. */
    var sourceX,sourceZ;
    if(sourceId==="left"){sourceX=t.cx-hw;sourceZ=t.cz+nearest*hd}
    else if(sourceId==="right"){sourceX=t.cx+hw;sourceZ=t.cz+nearest*hd}
    else if(sourceId==="top"){sourceZ=t.cz-hd;sourceX=t.cx+nearest*hw}
    else{sourceZ=t.cz+hd;sourceX=t.cx+nearest*hw}
    var oppX=t.cx-(sourceX-t.cx),oppZ=t.cz-(sourceZ-t.cz);
    targets.push({x:oppX,z:oppZ,kind:"farCorner"});
    targets.push({x:oppX,z:t.cz,kind:"wallCenter"});
    targets.push({x:t.cx,z:oppZ,kind:"wallCenter"});
  }
  var fx=-Math.sin(rn),fz=-Math.cos(rn),bestScore=0,bestDeg=999,bestTarget=targets[0]||{x:t.cx,z:t.cz};
  for(var q=0;q<targets.length;q++){
    var dx=targets[q].x-px,dz=targets[q].z-pz,len=Math.hypot(dx,dz)||1;dx/=len;dz/=len;
    var dot=Math.max(-1,Math.min(1,fx*dx+fz*dz));
    var deg=Math.acos(dot)*180/Math.PI;
    var score;if(targetType==="center"){score=deg<=0.12?100:(deg<=0.35?Math.max(0,Math.round(86-(deg-0.12)*130)):Math.max(0,Math.round(56-(deg-0.35)*18)));}else{score=deg<=1.25?100:Math.max(0,Math.round(100*(1-(deg-1.25)/18)));}
    if(score>bestScore||(score===bestScore&&deg<bestDeg)){bestScore=score;bestDeg=deg;bestTarget=targets[q]}
  }
  return{score:bestScore,targetType:targetType,targetX:bestTarget.x,targetZ:bestTarget.z,targets:targets,sourceWall:sourceId,sourceIdeal:nearest,outside:!inside};
}
function fpAimDirectionScore(t){return fpDirectionContext(t).score}
function fpPointInZone(z,x,zz){return z&&x>z.minX&&x<z.maxX&&zz>z.minZ&&zz<z.maxZ}
function fpCurrentSpecial(){var x=Xt.position.x/At,z=Xt.position.z/At;for(var i=0;i<curStairs.length;i++)if(fpPointInZone(curStairs[i],x,z))return{type:"stairs",data:curStairs[i]};var room=activeRoom();return{type:(curRoomRules[room]&&curRoomRules[room].type)||"room",data:curRoomRules[room]||{},room:room}}
function fpUpdatePlayerElevation(){var x=Xt.position.x/At,z=Xt.position.z/At,target=null;for(var i=0;i<curStairs.length;i++){var st=curStairs[i];if(!fpPointInZone(st,x,z))continue;var axis=st.axis||"z",v=axis==="x"?x:z,a=axis==="x"?st.minX:st.minZ,b=axis==="x"?st.maxX:st.maxZ,t=(v-a)/(b-a||1);if(st.reverse)t=1-t;t=Math.max(0,Math.min(1,t));target=(st.fromY==null?1.4:st.fromY)+((st.toY==null?4.6:st.toY)-(st.fromY==null?1.4:st.fromY))*t;break}if(target==null){for(var j=0;j<curFloors.length;j++){var f=curFloors[j];if(fpPointInZone(f,x,z)){target=f.cameraY;break}}}if(target!=null)baseHeight+=(target-baseHeight)*.28}
function fpFacadeShotAnalysis(rule){
  /* V43 — fachada: direção horizontal configurada pelo JSON.
     Frontais miram no centro horizontal da fachada.
     Diagonais miram na aresta vizinha correspondente.
     A inclinação vertical é livre para cima, mas fotos apontadas para baixo são recusadas. */
  if(!rule)return{type:"frontNear",label:"Frontal",score:0,valid:false,reason:"Regra de fachada ausente.",candidates:{}};
  var b=rule.buildingBounds||{minX:-10,maxX:10,minY:0,maxY:19,minZ:1.5,maxZ:10};
  var cx=(b.minX+b.maxX)/2,cy=(b.minY+b.maxY)/2,frontZ=b.minZ;
  var defaults=[
    {id:"frontNear",label:"Frontal próxima",mode:"central",position:{x:0,z:-7.2},radius:.45,aim:{x:cx,y:cy,z:frontZ,horizontalTolerance:6,minPitchDeg:0}},
    {id:"frontFar",label:"Frontal oposta",mode:"central",position:{x:0,z:-20.35},radius:.45,aim:{x:cx,y:cy,z:frontZ,horizontalTolerance:6,minPitchDeg:0}},
    {id:"diagLeft",label:"Diagonal esquerda",mode:"diagonal",position:{x:-4.5,z:-20.35},radius:.5,aim:{x:b.maxX,y:cy,z:frontZ,horizontalTolerance:7,minPitchDeg:0}},
    {id:"diagRight",label:"Diagonal direita",mode:"diagonal",position:{x:4.5,z:-20.35},radius:.5,aim:{x:b.minX,y:cy,z:frontZ,horizontalTolerance:7,minPitchDeg:0}}
  ];
  var shots=Array.isArray(rule.facadeShots)&&rule.facadeShots.length?rule.facadeShots:defaults;
  var px=Xt.position.x/At,pz=Xt.position.z/At;
  Xt.updateMatrixWorld(true);
  var fw=new I(0,0,-1).applyQuaternion(Xt.quaternion).normalize();
  function clamp(v){return Math.max(0,Math.min(100,Math.round(v)))}
  function horizontalAngle(ax,az,bx,bz){var al=Math.hypot(ax,az)||1,bl=Math.hypot(bx,bz)||1,d=Math.max(-1,Math.min(1,(ax*bx+az*bz)/(al*bl)));return Math.acos(d)*180/Math.PI}
  function pointScore(dist,r){r=Math.max(.3,+r||.8);if(dist<=r*.22)return 100;if(dist<=r)return clamp(100-(dist-r*.22)/(r*.78)*34);return clamp(66-(dist-r)*(66/(r*1.15)))}
  function directionScore(deg,tol,mode){tol=Math.max(2,+tol||(mode==='central'?6:7));var perfect=mode==='central'?.45:.65;if(deg<=perfect)return 100;if(deg<=tol)return clamp(100-(deg-perfect)/(tol-perfect)*48);return clamp(52-(deg-tol)*(52/(tol*.65)))}
  var candidates={};
  for(var i=0;i<shots.length;i++){
    var sh=shots[i]||{},pos=sh.position||{},aim=sh.aim||sh.target||{},sx=+pos.x||0,sz=+pos.z||0;
    var mode=sh.mode||((sh.id||'').indexOf('diag')===0?'diagonal':'central');
    var targetX=aim.x==null?(mode==='central'?cx:(sh.id==='diagLeft'?b.maxX:b.minX)):+aim.x;
    var targetY=aim.y==null?cy:+aim.y;
    var targetZ=aim.z==null?frontZ:+aim.z;
    var dist=Math.hypot(px-sx,pz-sz);
    var deg=horizontalAngle(fw.x,fw.z,targetX-px,targetZ-pz);
    var configuredTol=aim.horizontalTolerance==null?(sh.angleTolerance==null?(mode==='central'?6:7):+sh.angleTolerance):+aim.horizontalTolerance;
    var minPitchDeg=aim.minPitchDeg==null?0:+aim.minPitchDeg;
    var cameraPitchDeg=Math.asin(Math.max(-1,Math.min(1,fw.y)))*180/Math.PI;
    var desiredPitchDeg=Math.atan2(targetY-Xt.position.y,Math.hypot(targetX-Xt.position.x,targetZ-Xt.position.z)||.0001)*180/Math.PI;
    var pitchDiff=Math.abs(cameraPitchDeg-desiredPitchDeg);
    var verticalTol=aim.verticalTolerance==null?6:Math.max(1,+aim.verticalTolerance);
    var pitchDeg=gs*180/Math.PI;
    /* Centrais: ponto único 3D exato. Diagonais: aresta horizontal e câmera reta/para cima. */
    var pitchOk=mode==='central'?pitchDiff<=verticalTol:pitchDeg>=minPitchDeg-.75;
    var pitchScore=mode==='central'?directionScore(pitchDiff,verticalTol,'central'):(pitchOk?100:clamp(100-(minPitchDeg-pitchDeg)*22));
    var ps=pointScore(dist,sh.radius),horizontalScore=directionScore(deg,configuredTol,mode),ds=Math.min(horizontalScore,pitchScore),hs=Math.round(100*sn(1-Math.abs(xs)/.052));
    var score=clamp(ps*.44+ds*.44+hs*.12);
    var radius=Math.max(.3,+sh.radius||.8),tol=Math.max(2,configuredTol||(mode==='central'?6:7));
    var valid=dist<=radius&&deg<=tol&&pitchOk&&hs>=84;
    var reason=dist>radius?'Entre completamente no círculo azul de posicionamento.':mode==='central'&&pitchDiff>verticalTol?'Mire no ponto único do centro exato da fachada: meio horizontal e vertical.':mode!=='central'&&!pitchOk?'Mantenha a câmera reta ou incline para cima; não aponte para baixo.':deg>tol?(mode==='central'?'Mire no ponto único do centro exato da fachada.':'Mire com precisão na aresta vizinha correspondente da fachada.'):hs<84?'Corrija o nível horizontal da câmera.':'Ponto, direção e horizonte corretos.';
    candidates[sh.id]={type:sh.id,label:sh.label||sh.id,score:score,valid:valid,positionScore:ps,directionScore:ds,horizontalDirectionScore:horizontalScore,pitchScore:pitchScore,pitchDeg:pitchDeg,cameraPitchDeg:cameraPitchDeg,desiredPitchDeg:desiredPitchDeg,pitchDifference:pitchDiff,minPitchDeg:minPitchDeg,horizonScore:hs,coverageScore:100,reason:reason,distance:dist,angleDifference:deg,targetPosition:{x:sx,z:sz},targetPoint:{x:targetX,y:targetY,z:targetZ},radius:radius,angleTolerance:tol,verticalTolerance:verticalTol,mode:mode,allowExtraPhotos:sh.allowExtraPhotos!==false,praiseZoomMinMm:+sh.praiseZoomMinMm||0,zoomPraise:sh.zoomPraise||''};
  }
  var keys=Object.keys(candidates),best=keys.length?candidates[keys[0]]:null;
  for(var k=1;k<keys.length;k++)if(candidates[keys[k]].score>best.score)best=candidates[keys[k]];
  if(!best)return{type:'frontNear',label:'Frontal',score:0,valid:false,reason:'Nenhum ponto configurado.',candidates:{}};
  best.candidates=candidates;return best;
}
function fpFacadeFraming(rule){return fpFacadeShotAnalysis(rule).score}
function mh(){let i=activeRoom(),t=$c[i]||$c[Fr[0]],e=Xt.position.x-t.cx,n=Xt.position.z-t.cz,s=Math.hypot(e,n),r=Math.hypot(t.w,t.d),nx=sn(Math.abs(e)/(t.w/2)),nz=sn(Math.abs(n)/(t.d/2)),a=Math.max(nx,nz),insideRoom=Math.abs(e)<=t.w/2&&Math.abs(n)<=t.d/2,placement=100;if(insideRoom){let dl=e+t.w/2,dr=t.w/2-e,dt=n+t.d/2,db=t.d/2-n,bx=Math.sin(rn),bz=Math.cos(rn),walls=[{dist:dl,dot:-bx,along:n/(t.d/2||1)},{dist:dr,dot:bx,along:n/(t.d/2||1)},{dist:dt,dot:-bz,along:e/(t.w/2||1)},{dist:db,dot:bz,along:e/(t.w/2||1)}],behind=walls.filter(w=>w.dot>.18).sort((x,y)=>x.dist-y.dist)[0];if(!behind){placement=30}else{let q=sn(Math.abs(behind.along)),alongScore=Math.round(70+30*Math.abs(Math.cos(Math.PI*q))),dist=behind.dist,distScore=dist<=.5?100:dist<=.85?Math.round(100-(dist-.5)/.35*25):dist<=1.25?Math.round(75-(dist-.85)/.4*35):Math.max(20,Math.round(40-(dist-1.25)*24)),backScore=Math.round(55+45*sn((behind.dot-.18)/.62));placement=Math.round(Math.min(alongScore,distScore,backScore));if(dist<=.5&&(q<=.12||q>=.88))placement=100}}let g=sn(s/(r*.32)),_=sn((a-.28)/.64),m=sn((20-Ke)/10),rawWallsVisible=fpVisibleWallCount(t),wallsVisible=insideRoom?rawWallsVisible:Math.max(0,rawWallsVisible-1),f=wallsVisible>=3?100:0,aimCtx=fpDirectionContext(t),special=fpCurrentSpecial(),aimDirection=special.type==="facade"?aimCtx.score:(aimCtx.targetType!=="cornerTriple"?(aimCtx.score===100?100:Math.round(100*Math.pow(Math.max(0,Math.min(1,aimCtx.score/100)),7.5))):Math.round(100*Math.pow(Math.max(0,Math.min(1,aimCtx.score/100)),4.2))),disableVertical=(special.type==="stairs"||special.data.disableVerticalAlignment===true),E=disableVertical?100:(Math.abs(gs)<=.012?100:Math.round(100*sn(1-(Math.abs(gs)-.012)/.15))),M=Math.round(100*sn(1-Math.abs(xs)/.052)),b=Math.round(100*sn(1-Math.abs(baseHeight-1.4)/.34)),D=Math.round(100*sn(.08+m*.25+g*.28+_*.25+.14)),T=Ke<=13?100:Math.round(100*sn(1-(Ke-13)/9));var facadeAnalysis=(special.type==="facade")?fpFacadeShotAnalysis(special.data):null,facadeScore=facadeAnalysis?facadeAnalysis.score:100;if(special.type==="facade"){placement=facadeAnalysis?facadeAnalysis.positionScore:0;f=100;aimDirection=facadeAnalysis?facadeAnalysis.directionScore:0;E=(Math.abs(gs)<=.012?100:Math.round(100*sn(1-(Math.abs(gs)-.012)/.15)));M=facadeAnalysis?facadeAnalysis.horizonScore:M;b=100;D=100;T=100}return{room:i,placement:placement,direction:f,aimDirection:aimDirection,aimTargetType:aimCtx.targetType,wallsVisible:wallsVisible,vertical:E,horizon:M,height:b,angle:D,lens:T,specialType:special.type,facadeScore:facadeScore,facadeAnalysis:facadeAnalysis,disableVertical:disableVertical}}
function Z_(i){if(i.specialType==="facade")return Math.max(0,Math.min(100,Math.round(i.placement*.43+i.aimDirection*.43+i.horizon*.14)));var central=i.aimTargetType!=="cornerTriple";let t=i.placement*.24+i.direction*.16+i.aimDirection*.24+i.vertical*.20+i.horizon*.16;if(i.vertical<96)t-=(96-i.vertical)*(central?1.15:.80);if(i.horizon<95)t-=(95-i.horizon)*(central?1.05:.72);if(i.direction<100)t-=24;if(i.aimDirection<(central?94:86))t-=((central?94:86)-i.aimDirection)*(central?1.10:.62);if(i.placement<(central?88:82))t-=((central?88:82)-i.placement)*.55;return Math.max(0,Math.min(100,Math.round(t)))}
function $_(i,t){if(i.specialType==="facade")return !!(i.facadeAnalysis&&i.facadeAnalysis.valid);var central=i.aimTargetType!=="cornerTriple";return t>=(central?91:87)&&i.direction===100&&i.aimDirection>=(central?100:90)&&i.vertical>=(central?96:93)&&i.horizon>=(central?95:92)&&i.placement>=(central?88:80)}
function fpReq(name){var rule=curRoomRules[name]||{};if(rule.type==="facade")return{photos:4,walls:0,facade:true};var k=(name||"").toString().toLowerCase();if(k.indexOf("banheiro")>=0||k.indexOf("circula")>=0||k.indexOf("corredor")>=0||k.indexOf("lavabo")>=0)return{photos:2,walls:2};return{photos:3,walls:4}}
function fpFacadeSet(n){
  if(!n.facadeShots)n.facadeShots=new Set();
  else if(!(n.facadeShots instanceof Set))n.facadeShots=new Set(Array.isArray(n.facadeShots)?n.facadeShots:Object.keys(n.facadeShots).filter(function(k){return n.facadeShots[k]}));
  return n.facadeShots
}

;(function(){if(document.getElementById("fp-v27-style"))return;var st=document.createElement("style");st.id="fp-v27-style";st.textContent=".fpFacadeChecks{display:block;margin-top:5px;color:#dff5ff;font-size:9px;line-height:1.45;white-space:normal}.roomRow.done .fpFacadeChecks{color:#9dffad}";document.head.appendChild(st)})();
function gh(){L_.innerHTML=Fr.map(function(e){var n=ms[e],q=fpReq(e),fac=q.facade?fpFacadeSet(n):null,s=q.facade?fac.size>=4:(n.photos>=q.photos&&n.walls.size>=q.walls);var detail=q.facade?"<span class=\"fpFacadeChecks\">"+(fac.has("frontNear")?"✅":"⬜")+" Frontal próxima &nbsp;"+(fac.has("frontFar")?"✅":"⬜")+" Frontal oposta &nbsp;"+(fac.has("diagLeft")?"✅":"⬜")+" Diag. esquerda &nbsp;"+(fac.has("diagRight")?"✅":"⬜")+" Diag. direita</span>":n.photos+"/"+q.photos+" fotos • "+n.walls.size+"/"+q.walls+" lados";return '<div class="roomRow '+(s?'done':'')+'"><div><b>'+e+'</b><small> '+detail+'</small>'+(q.facade?'':'<div class="coverageDots">'+[0,1,2,3].map(function(r){return '<i class="'+(n.walls.has(r)?'on':'')+'" title="Lado '+(r+1)+'"></i>'}).join('')+'</div>')+'</div><span class="roomCheck">'+(s?'✓':'·')+'</span></div>'}).join("");let __doneUnits=0,__totalUnits=0;Fr.forEach(function(e){let n=ms[e],q=fpReq(e);if(q.facade){__totalUnits+=4;__doneUnits+=Math.min(4,fpFacadeSet(n).size)}else{__totalUnits+=1;if(n.photos>=q.photos&&n.walls.size>=q.walls)__doneUnits+=1}});let t=__totalUnits?Math.round(__doneUnits/__totalUnits*100):0;U_.textContent=t+"%",(window.__fpCoverage=t),(window.__winCoverage&&window.__winCoverage(t)),D_.style.width=t+"%",S_.style.width=t+"%",y_.textContent=t===100?"Imóvel 100% fotografado!":"Fotos + lados necessários",M_.textContent=t===100?"Excelente! Todos os ambientes possuem cobertura suficiente.":(Fr.some(function(r){return fpReq(r).facade})?"Fachada: quatro pontos precisos na guia — duas frontais e duas diagonais.":"Faça a quantidade de fotos e cubra os lados de cada cômodo (banheiro e circulação: 2 fotos e 2 lados).")}
function Qc(i=!0){ge||(ge=new(window.AudioContext||window.webkitAudioContext)),ge.state==="suspended"&&ge.resume();let t=ge.currentTime;for(let e=0;e<(i?2:1);e++){let n=ge.createOscillator(),s=ge.createGain();n.type=i?"sine":"sawtooth",n.frequency.setValueAtTime(i?720+e*260:150,t+e*.07),s.gain.setValueAtTime(.001,t+e*.07),s.gain.exponentialRampToValueAtTime(.16,t+e*.07+.012),s.gain.exponentialRampToValueAtTime(.001,t+e*.07+.16),n.connect(s).connect(ge.destination),n.start(t+e*.07),n.stop(t+e*.07+.18)}}function J_(){ge||(ge=new(window.AudioContext||window.webkitAudioContext)),ge.state==="suspended"&&ge.resume();let i=ge.createOscillator(),t=ge.createGain(),e=ge.createBiquadFilter();i.type="triangle",i.frequency.value=82+Math.random()*22,e.type="lowpass",e.frequency.value=240,t.gain.setValueAtTime(.035,ge.currentTime),t.gain.exponentialRampToValueAtTime(.001,ge.currentTime+.065),i.connect(e).connect(t).connect(ge.destination),i.start(),i.stop(ge.currentTime+.07)}function K_(i,t,e){i.save(),i.strokeStyle="rgba(220,0,0,.88)",i.lineWidth=Math.max(28,t*.035),i.lineCap="round",i.shadowColor="rgba(0,0,0,.7)",i.shadowBlur=16,i.beginPath(),i.moveTo(t*.24,e*.18),i.lineTo(t*.76,e*.82),i.moveTo(t*.76,e*.18),i.lineTo(t*.24,e*.82),i.stroke(),i.restore()}function K__reason(ctx,w,h,technical,joke){
  if(!technical)return;
  ctx.save();
  technical=String(technical).trim();
  joke=String(joke||"").trim();
  var maxW=w*.80,pad=Math.max(18,w*.015);
  function makeLines(text,fontSize,maxLines){
    var lines=[];ctx.font="800 "+fontSize+"px system-ui,Arial";
    var words=text.split(/\s+/),line="";
    for(var q=0;q<words.length;q++){
      var test=line?line+" "+words[q]:words[q];
      if(ctx.measureText(test).width<=maxW||!line)line=test;
      else{lines.push(line);line=words[q]}
    }
    if(line)lines.push(line);
    if(lines.length>maxLines){var rest=lines.slice(maxLines-1).join(" ");lines=lines.slice(0,maxLines-1);lines.push(rest.length>90?rest.slice(0,87)+"...":rest)}
    return lines;
  }
  var fs=Math.max(20,Math.min(46,Math.round(w*(technical.length>95?.024:technical.length>58?.029:.035))));
  var techLines=makeLines(technical,fs,4);
  while(techLines.length>4&&fs>18){fs-=2;techLines=makeLines(technical,fs,4)}
  var jokeFs=Math.max(17,Math.round(fs*.72)),jokeLines=joke?makeLines(joke,jokeFs,2):[];
  var techLH=fs*1.18,jokeLH=jokeFs*1.15,gap=jokeLines.length?Math.max(10,fs*.30):0;
  var bh=pad*1.35+techLines.length*techLH+gap+jokeLines.length*jokeLH+pad*.55;
  var widths=techLines.map(function(x){ctx.font="800 "+fs+"px system-ui,Arial";return ctx.measureText(x).width});
  jokeLines.forEach(function(x){ctx.font="800 "+jokeFs+"px system-ui,Arial";widths.push(ctx.measureText(x).width)});
  var bw=Math.min(w*.88,Math.max(w*.44,Math.max.apply(null,widths.concat([0]))+pad*2));
  var bx=(w-bw)/2,by=Math.max(h*.04,Math.min(h-bh-h*.035,h*.74));
  ctx.fillStyle="rgba(20,29,51,.95)";ctx.strokeStyle="rgba(255,195,76,.96)";ctx.lineWidth=Math.max(3,fs*.065);
  var rr=Math.max(12,fs*.28);ctx.beginPath();ctx.moveTo(bx+rr,by);ctx.arcTo(bx+bw,by,bx+bw,by+bh,rr);ctx.arcTo(bx+bw,by+bh,bx,by+bh,rr);ctx.arcTo(bx,by+bh,bx,by,rr);ctx.arcTo(bx,by,bx+bw,by,rr);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.textAlign="center";ctx.textBaseline="middle";ctx.shadowColor="rgba(0,0,0,.72)";ctx.shadowBlur=fs*.18;
  ctx.fillStyle="#ffd36a";ctx.font="800 "+fs+"px system-ui,Arial";
  var cy=by+pad*.65+techLH*.5;for(var z=0;z<techLines.length;z++)ctx.fillText(techLines[z],w/2,cy+z*techLH,maxW);
  if(jokeLines.length){cy+=techLines.length*techLH+gap-jokeLH*.25;ctx.fillStyle="#7fdbff";ctx.font="800 "+jokeFs+"px system-ui,Arial";for(var j=0;j<jokeLines.length;j++)ctx.fillText(jokeLines[j],w/2,cy+j*jokeLH,maxW)}
  ctx.restore();
}
function K__chaosCaption(ctx,w,h,title,joke){
  if(!joke)return;ctx.save();var maxW=w*.78,pad=Math.max(14,w*.012),fs=Math.max(18,Math.min(34,Math.round(w*.024))),jfs=Math.max(16,Math.round(fs*.78));
  function wrap(text,size,maxLines){ctx.font="900 "+size+"px Arial, sans-serif";var words=String(text||"").split(/\s+/),out=[],line="";for(var i=0;i<words.length;i++){var q=line?line+" "+words[i]:words[i];if(ctx.measureText(q).width<=maxW||!line)line=q;else{out.push(line);line=words[i]}}if(line)out.push(line);return out.slice(0,maxLines)}
  var a=wrap(title||"REGISTRO DE CAOS",fs,2),b=wrap(joke,jfs,2),lh=fs*1.12,jh=jfs*1.12,bh=pad*1.5+a.length*lh+b.length*jh+pad*.45,bw=Math.min(w*.86,maxW+pad*2),bx=(w-bw)/2,by=Math.max(h*.055,Math.min(h*.23,h*.13-bh*.18)),rr=14;
  ctx.fillStyle="rgba(48,10,12,.92)";ctx.strokeStyle="rgba(255,93,66,.98)";ctx.lineWidth=Math.max(3,w*.0025);ctx.beginPath();ctx.moveTo(bx+rr,by);ctx.arcTo(bx+bw,by,bx+bw,by+bh,rr);ctx.arcTo(bx+bw,by+bh,bx,by+bh,rr);ctx.arcTo(bx,by+bh,bx,by,rr);ctx.arcTo(bx,by,bx+bw,by,rr);ctx.closePath();ctx.fill();ctx.stroke();ctx.textAlign="center";ctx.textBaseline="middle";ctx.shadowColor="rgba(0,0,0,.8)";ctx.shadowBlur=8;ctx.fillStyle="#ffb36b";ctx.font="900 "+fs+"px Arial, sans-serif";var y=by+pad*.7+lh*.5;for(var z=0;z<a.length;z++)ctx.fillText(a[z],w/2,y+z*lh);y+=a.length*lh+pad*.12;ctx.fillStyle="#ffffff";ctx.font="800 "+jfs+"px Arial, sans-serif";for(var j=0;j<b.length;j++)ctx.fillText(b[j],w/2,y+j*jh);ctx.restore();
}
function __fpBlobDataURL(blob){return new Promise(function(resolve,reject){var fr=new FileReader();fr.onload=function(){resolve(fr.result)};fr.onerror=reject;fr.readAsDataURL(blob)})}
var __fpPhotoJobs=new Map(),__fpPhotoJobId=0,__fpPhotoWorker=null;
function __fpPhotoWorkerGet(){
  if(__fpPhotoWorker)return __fpPhotoWorker;
  if(typeof Worker==="undefined"||typeof OffscreenCanvas==="undefined"||typeof createImageBitmap==="undefined")return null;
  var workerCode=`
  self.onmessage=async function(ev){
    var d=ev.data,bm=d.bitmap,w=bm.width,h=bm.height,c=new OffscreenCanvas(w,h),ctx=c.getContext('2d',{alpha:false});
    ctx.drawImage(bm,0,0,w,h);bm.close&&bm.close();
    function cross(){ctx.save();ctx.strokeStyle='rgba(220,0,0,.88)';ctx.lineWidth=Math.max(28,w*.035);ctx.lineCap='round';ctx.shadowColor='rgba(0,0,0,.7)';ctx.shadowBlur=16;ctx.beginPath();ctx.moveTo(w*.24,h*.18);ctx.lineTo(w*.76,h*.82);ctx.moveTo(w*.76,h*.18);ctx.lineTo(w*.24,h*.82);ctx.stroke();ctx.restore()}
    function wrap(text,size,maxW,maxLines){ctx.font='800 '+size+'px system-ui,Arial';var words=String(text||'').trim().split(/\\s+/),lines=[],line='';for(var q=0;q<words.length;q++){var test=line?line+' '+words[q]:words[q];if(ctx.measureText(test).width<=maxW||!line)line=test;else{lines.push(line);line=words[q]}}if(line)lines.push(line);if(lines.length>maxLines){var rest=lines.slice(maxLines-1).join(' ');lines=lines.slice(0,maxLines-1);lines.push(rest.length>90?rest.slice(0,87)+'...':rest)}return lines}
    function reason(technical,joke){if(!technical)return;ctx.save();technical=String(technical).trim();joke=String(joke||'').trim();var maxW=w*.80,pad=Math.max(18,w*.015),fs=Math.max(20,Math.min(46,Math.round(w*(technical.length>95?.024:technical.length>58?.029:.035)))),tech=wrap(technical,fs,maxW,4),jfs=Math.max(17,Math.round(fs*.72)),jl=joke?wrap(joke,jfs,maxW,2):[],tlh=fs*1.18,jlh=jfs*1.15,gap=jl.length?Math.max(10,fs*.30):0,bh=pad*1.35+tech.length*tlh+gap+jl.length*jlh+pad*.55,widths=[];tech.forEach(x=>{ctx.font='800 '+fs+'px system-ui,Arial';widths.push(ctx.measureText(x).width)});jl.forEach(x=>{ctx.font='800 '+jfs+'px system-ui,Arial';widths.push(ctx.measureText(x).width)});var bw=Math.min(w*.88,Math.max(w*.44,Math.max.apply(null,widths.concat([0]))+pad*2)),bx=(w-bw)/2,by=Math.max(h*.04,Math.min(h-bh-h*.035,h*.74)),rr=Math.max(12,fs*.28);ctx.fillStyle='rgba(20,29,51,.95)';ctx.strokeStyle='rgba(255,195,76,.96)';ctx.lineWidth=Math.max(3,fs*.065);ctx.beginPath();ctx.moveTo(bx+rr,by);ctx.arcTo(bx+bw,by,bx+bw,by+bh,rr);ctx.arcTo(bx+bw,by+bh,bx,by+bh,rr);ctx.arcTo(bx,by+bh,bx,by,rr);ctx.arcTo(bx,by,bx+bw,by,rr);ctx.closePath();ctx.fill();ctx.stroke();ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor='rgba(0,0,0,.72)';ctx.shadowBlur=fs*.18;ctx.fillStyle='#ffd36a';ctx.font='800 '+fs+'px system-ui,Arial';var cy=by+pad*.65+tlh*.5;for(var z=0;z<tech.length;z++)ctx.fillText(tech[z],w/2,cy+z*tlh,maxW);if(jl.length){cy+=tech.length*tlh+gap-jlh*.25;ctx.fillStyle='#7fdbff';ctx.font='800 '+jfs+'px system-ui,Arial';for(var j=0;j<jl.length;j++)ctx.fillText(jl[j],w/2,cy+j*jlh,maxW)}ctx.restore()}
    function chaos(title,joke){if(!joke)return;ctx.save();var maxW=w*.78,pad=Math.max(14,w*.012),fs=Math.max(18,Math.min(34,Math.round(w*.024))),jfs=Math.max(16,Math.round(fs*.78));function wr(text,size,maxLines){ctx.font='900 '+size+'px Arial, sans-serif';var words=String(text||'').split(/\s+/),out=[],line='';for(var i=0;i<words.length;i++){var q=line?line+' '+words[i]:words[i];if(ctx.measureText(q).width<=maxW||!line)line=q;else{out.push(line);line=words[i]}}if(line)out.push(line);return out.slice(0,maxLines)}var a=wr(title||'REGISTRO DE CAOS',fs,2),b=wr(joke,jfs,2),lh=fs*1.12,jh=jfs*1.12,bh=pad*1.5+a.length*lh+b.length*jh+pad*.45,bw=Math.min(w*.86,maxW+pad*2),bx=(w-bw)/2,by=Math.max(h*.055,Math.min(h*.23,h*.13-bh*.18)),rr=14;ctx.fillStyle='rgba(48,10,12,.92)';ctx.strokeStyle='rgba(255,93,66,.98)';ctx.lineWidth=Math.max(3,w*.0025);ctx.beginPath();ctx.moveTo(bx+rr,by);ctx.arcTo(bx+bw,by,bx+bw,by+bh,rr);ctx.arcTo(bx+bw,by+bh,bx,by+bh,rr);ctx.arcTo(bx,by+bh,bx,by,rr);ctx.arcTo(bx,by,bx+bw,by,rr);ctx.closePath();ctx.fill();ctx.stroke();ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor='rgba(0,0,0,.8)';ctx.shadowBlur=8;ctx.fillStyle='#ffb36b';ctx.font='900 '+fs+'px Arial, sans-serif';var y=by+pad*.7+lh*.5;for(var z=0;z<a.length;z++)ctx.fillText(a[z],w/2,y+z*lh);y+=a.length*lh+pad*.12;ctx.fillStyle='#fff';ctx.font='800 '+jfs+'px Arial, sans-serif';for(var j=0;j<b.length;j++)ctx.fillText(b[j],w/2,y+j*jh);ctx.restore()}
    if(!d.valid){cross();reason(d.why,d.joke)}
    if(d.chaosJoke)chaos(d.chaosTitle,d.chaosJoke)
    var blob=await c.convertToBlob({type:'image/jpeg',quality:.90}),buf=await blob.arrayBuffer();self.postMessage({id:d.id,buffer:buf},[buf]);
  }`;
  try{var url=URL.createObjectURL(new Blob([workerCode],{type:"application/javascript"}));__fpPhotoWorker=new Worker(url);URL.revokeObjectURL(url);__fpPhotoWorker.onmessage=__fpPhotoWorkerDone;__fpPhotoWorker.onerror=function(){try{__fpPhotoWorker.terminate()}catch(e){}__fpPhotoWorker=null};return __fpPhotoWorker}catch(e){return null}
}
function __fpPhotoWorkerDone(ev){var job=__fpPhotoJobs.get(ev.data.id);if(!job)return;__fpPhotoJobs.delete(ev.data.id);var blob=new Blob([ev.data.buffer],{type:"image/jpeg"});__fpFinishPhotoBlob(job,blob)}
function __fpFinishPhotoBlob(job,blob){
  var data=URL.createObjectURL(blob);job.objectUrl=data;
  mn.unshift({data:data,date:new Date().toLocaleTimeString("pt-BR"),room:job.info.room,focal:job.focal,filename:job.filename,total:job.score,valid:job.valid,blob:blob});mn=mn.slice(0,12);Bo();ih.style.display="block";
  var persist=function(){__fpBlobDataURL(blob).then(function(encoded){var item=mn.find(function(x){return x.filename===job.filename});if(item){try{URL.revokeObjectURL(item.data)}catch(e){}item.data=encoded;delete item.blob;try{localStorage.setItem("framepro_photos",JSON.stringify(mn.slice(0,2)))}catch(e){}Bo()}}).catch(function(){})};
  if(window.requestIdleCallback)requestIdleCallback(persist,{timeout:2500});else setTimeout(persist,900);
  if(Or){Or.getFileHandle(job.filename,{create:true}).then(function(fh){return fh.createWritable()}).then(function(wr){return wr.write(blob).then(function(){return wr.close()})}).then(function(){Gi("💾 Foto salva na pasta escolhida")}).catch(function(){Or=null;__fpSavePhotoSmooth(blob,job.filename)})}else __fpSavePhotoSmooth(blob,job.filename)
}
function __fpSavePhotoSmooth(blob,filename){
  /* No pacote Windows, salva via servidor local sem abrir download e sem perder o mouse.
     Na versão web, mantém na galeria para preservar o pointer lock; ao escolher uma pasta,
     os próximos JPGs são gravados automaticamente nela. */
  var local=/^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  if(local&&location.protocol.indexOf("http")===0){
    fetch("/__framepro_save_photo",{method:"POST",headers:{"X-FramePro-Filename":encodeURIComponent(filename),"Content-Type":"image/jpeg"},body:blob})
      .then(function(r){if(!r.ok)throw new Error("save");Gi("💾 JPG salvo na pasta FOTOS • continue jogando")})
      .catch(function(){Gi("📸 Foto salva na galeria • escolha uma pasta para salvar automaticamente")});
    return;
  }
  Gi("📸 Foto salva na galeria sem pausar • use 📁 Escolher pasta para salvar JPGs automaticamente");
}
function __fpRestorePlayFocus(){try{window.focus();if(fe&&fe.domElement){fe.domElement.focus({preventScroll:true});if(Xi&&window.__fpStarted&&document.pointerLockElement!==fe.domElement){var pr=fe.domElement.requestPointerLock&&fe.domElement.requestPointerLock();if(pr&&pr.catch)pr.catch(function(){})}}}catch(e){}}function jcBlob(blob,filename){try{var u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=filename;a.rel="noopener";a.tabIndex=-1;a.style.display="none";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u);__fpRestorePlayFocus()},60);setTimeout(__fpRestorePlayFocus,260)}catch(e){__fpBlobDataURL(blob).then(function(data){jc(data,filename);__fpRestorePlayFocus()})}}
function __fpFallbackPhoto(job,src){setTimeout(function(){var canvas=document.createElement("canvas");canvas.width=src.width;canvas.height=src.height;var ctx=canvas.getContext("2d",{alpha:false});ctx.drawImage(src,0,0,src.width,src.height,0,0,canvas.width,canvas.height);if(!job.valid){K_(ctx,canvas.width,canvas.height);K__reason(ctx,canvas.width,canvas.height,job.why,job.joke)}if(job.chaosJoke)K__chaosCaption(ctx,canvas.width,canvas.height,job.chaosTitle,job.chaosJoke);canvas.toBlob(function(blob){if(blob)__fpFinishPhotoBlob(job,blob)},"image/jpeg",.90)},0)}
function Q_(score,valid,info,why,joke,chaos){
  var seq=(Number(localStorage.getItem("framepro_seq")||0))+1;try{localStorage.setItem("framepro_seq",String(seq))}catch(e){}
  var room=info.room.normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").toUpperCase().replace(/[^A-Z0-9]/g,"");
  var filename=`FRAMEPRO_${String(seq).padStart(4,"0")}-${room}_NOTA${score}_${valid?"OK":"X"}.jpg`,job={id:++__fpPhotoJobId,score:score,valid:valid,info:{room:info.room},why:why,joke:joke,chaosTitle:chaos&&chaos.title||"",chaosJoke:chaos&&chaos.joke||"",focal:Ke,filename:filename};
  var src=fe.domElement,worker=__fpPhotoWorkerGet();
  if(worker){createImageBitmap(src).then(function(bitmap){__fpPhotoJobs.set(job.id,job);worker.postMessage({id:job.id,bitmap:bitmap,valid:valid,why:why,joke:joke,chaosTitle:job.chaosTitle,chaosJoke:job.chaosJoke},[bitmap])}).catch(function(){__fpFallbackPhoto(job,src)})}else __fpFallbackPhoto(job,src)
}
function jc(a,t){try{var arr=a.split(","),mime=(arr[0].match(/:(.*?);/)||[,"image/jpeg"])[1],bstr=atob(arr[1]),n=bstr.length,u8=new Uint8Array(n);while(n--)u8[n]=bstr.charCodeAt(n);var blob=new Blob([u8],{type:mime}),e=URL.createObjectURL(blob),el=document.createElement("a");el.href=e;el.download=t;el.rel="noopener";document.body.appendChild(el);el.click();el.remove();setTimeout(function(){URL.revokeObjectURL(e)},1500);}catch(err){var el2=document.createElement("a");el2.href=a;el2.download=t;document.body.appendChild(el2);el2.click();el2.remove();}}async function j_(){if(!window.showDirectoryPicker){window.__fpFolderReady=false;Gi("⚠️ Este navegador não permite escolher uma pasta. Abra o jogo no Chrome/Edge ou use a versão Windows.");window.dispatchEvent(new CustomEvent("framepro-folder-change"));return false}try{var h=await window.showDirectoryPicker({mode:"readwrite"});var perm=await h.requestPermission({mode:"readwrite"});if(perm!=="granted")throw new Error("permission");Or=h;window.__fpFolderReady=true;window.__fpFolderName=h.name||"Pasta selecionada";nh.textContent="📁 "+window.__fpFolderName;Gi("✅ Pasta escolhida: "+window.__fpFolderName);window.dispatchEvent(new CustomEvent("framepro-folder-change"));return true}catch(e){window.__fpFolderReady=!!Or;Gi(Or?"A pasta anterior continua selecionada.":"⚠️ Escolha uma pasta para liberar o jogo.");window.dispatchEvent(new CustomEvent("framepro-folder-change"));return false}}function Bo(){Zc.innerHTML=mn.map((i,t)=>`<div class="galleryShot"><img src="${i.data}" title="${i.room} \u2022 Nota ${i.total} \u2022 ${i.valid?"v\xE1lida":"descartada"}" data-i="${t}"><span class="galleryBadge ${i.valid?"ok":"bad"}">${i.valid?"\u2713":"\u2715"}</span></div>`).join(""),ih.style.display=mn.length?"block":"none",Zc.querySelectorAll("img").forEach(i=>i.onclick=()=>{let t=mn[+i.dataset.i],e=document.createElement("a");e.href=t.data,e.download=t.filename,e.click()})}function doorInFrame(){
  window.__doorFrameIssue="";
  window.__doorFrameDebug=null;
  if(!doorList||!doorList.length)return false;
  var camx=Xt.position.x,camy=Xt.position.y,camz=Xt.position.z,maxDist=4.8*At; var __ar=activeRoom(),__rb=$c&&$c[__ar],__insideActive=!!(__rb&&Math.abs(camx-__rb.cx)<=__rb.w/2&&Math.abs(camz-__rb.cz)<=__rb.d/2);
  var fw=-Math.sin(rn),fz=-Math.cos(rn),best=null;
  Xt.updateMatrixWorld(true);
  /* Usa sempre o FOV REAL atual da câmera no instante da foto. */
  Xt.updateProjectionMatrix();

  function rawProject(x,y,z){
    var p=new I(x,y,z);p.project(Xt);
    if(!isFinite(p.x)||!isFinite(p.y)||!isFinite(p.z)||p.z<=-1||p.z>=1)return null;
    return{x:(p.x*.5+.5)*Me.w,y:(-.5*p.y+.5)*Me.h,z:p.z};
  }
  function scan(box,type){
    var x0=box[0],x1=box[1],y0=box[2],y1=box[3],z0=box[4],z1=box[5];
    var minx=1e9,maxx=-1e9,miny=1e9,maxy=-1e9,total=0,on=0,rows={};
    var us=[0,.2,.4,.6,.8,1],vs=[0,.14,.28,.42,.56,.70,.84,1];
    for(var ui=0;ui<us.length;ui++)for(var vi=0;vi<vs.length;vi++){
      var u=us[ui],v=vs[vi],pts=[
        [x0+(x1-x0)*u,y0+(y1-y0)*v,z0],
        [x0+(x1-x0)*u,y0+(y1-y0)*v,z1],
        [x0,y0+(y1-y0)*v,z0+(z1-z0)*u],
        [x1,y0+(y1-y0)*v,z0+(z1-z0)*u]
      ];
      for(var k=0;k<pts.length;k++){
        var pr=rawProject(pts[k][0],pts[k][1],pts[k][2]);if(!pr)continue;total++;
        if(pr.x>=-Me.w*.18&&pr.x<=Me.w*1.18&&pr.y>=-Me.h*.16&&pr.y<=Me.h*1.16){
          minx=Math.min(minx,pr.x);maxx=Math.max(maxx,pr.x);miny=Math.min(miny,pr.y);maxy=Math.max(maxy,pr.y);
          if(pr.x>=0&&pr.x<=Me.w&&pr.y>=0&&pr.y<=Me.h){on++;rows[Math.round(pr.y/Math.max(1,Me.h)*20)]=1;}
        }
      }
    }
    if(total<8||minx===1e9)return null;
    var x0c=Math.max(0,minx),x1c=Math.min(Me.w,maxx),y0c=Math.max(0,miny),y1c=Math.min(Me.h,maxy);
    if(x1c<=x0c||y1c<=y0c)return null;
    var w=(x1c-x0c)/Me.w,h=(y1c-y0c)/Me.h,area=w*h;
    var left=x0c/Me.w,right=(Me.w-x1c)/Me.w,top=y0c/Me.h;
    var edge=Math.min(left,right),touchSide=edge<=.095,touchTop=top<=.12; /* Detecção contextual: dentro do cômodo só avalia portas num raio de 2,55 m; fora mantém alcance amplo. Sensibilidade adicional reduzida em 30%. */
    var intrusion=left<=right?x1c/Me.w:(Me.w-x0c)/Me.w;
    return{x0:x0c,x1:x1c,y0:y0c,y1:y1c,w:w,h:h,area:area,on:on,total:total,continuity:Math.min(1,Object.keys(rows).length/11),touchSide:touchSide,touchTop:touchTop,intrusion:intrusion,type:type};
  }
  function score(r,type,dist,facing){
    if(!r)return 0;
    var edge=type==='top'?(r.touchTop?1:Math.max(0,1-r.y0/(Me.h*.22))):(r.touchSide?1:Math.max(0,1-Math.min(r.x0,Me.w-r.x1)/(Me.w*.18)));
    var length=type==='top'?Math.min(1,r.w/.52):Math.min(1,r.h/.62);
    var thick=type==='top'?Math.min(1,r.h/.12):Math.min(1,r.w/.10);
    var area=Math.min(1,r.area/(type==='reveal'?.025:.020));
    var intr=type==='top'?Math.min(1,r.h/.16):Math.min(1,r.intrusion/.13);
    var distW=Math.max(.25,1-dist/maxDist);
    return edge*.27+length*.20+thick*.16+area*.16+intr*.12+r.continuity*.05+Math.max(0,facing)*.02+distW*.02;
  }
  function valid(r,type,sc){
    if(!r)return false;
    if(type==='jamb')return r.touchSide&&r.w>=.0156&&r.w<=.42&&r.h>=.3432&&r.area>=.004992&&r.intrusion>=.0234&&sc>=.468;
    if(type==='reveal')return r.touchSide&&r.w>=.01872&&r.w<=.50&&r.h>=.312&&r.area>=.005928&&r.intrusion>=.02652&&sc>=.4524;
    return r.touchTop&&r.w>=.2496&&r.h>=.04056&&r.h<=.36&&r.area>=.0078&&sc>=.4992;
  }


/* =========================================================================
   SISTEMA DE CORREÇÃO DE PARALAXE (OFFSET DE POSIÇÃO)
   -------------------------------------------------------------------------
   OFFSET_FOTOGRAFO: Adiantamento da posição da câmera em relação ao jogador.
                     Use valores entre 0.2 e 0.5 para "corrigir" o atraso.
   ========================================================================= */
const LENTE_MM = 14; 
const SENS_IMPACTO = 0.9;
const OFFSET_FOTOGRAFO = 0.1; // O fotógrafo "avança" 0.3 unidades na direção do olhar

function inDoorExclusionZone(d, dist) {
    const fov = 2 * Math.atan(36 / (2 * LENTE_MM)) * (180 / Math.PI);
    const fatorLente = fov / 90;

    const mx = (d.bminX + d.bmaxX) / 2;
    const mz = (d.bminZ + d.bmaxZ) / 2;

    // AQUI ESTÁ O PULO DO GATO:
    // Adiantamos a posição da câmera (camx, camz) usando o vetor de direção (fw, fz)
    const posRealX = camx + (fw * OFFSET_FOTOGRAFO);
    const posRealZ = camz + (fz * OFFSET_FOTOGRAFO);

    const dx = mx - posRealX;
    const dz = mz - posRealZ;
    const distToCenter = Math.sqrt(dx * dx + dz * dz);
    
    const dotProduct = (dx * fw + dz * fz) / (distToCenter || 1);

    // O impacto agora é calculado a partir da posição "adiantada" do fotógrafo
    const impactoVisual = (dotProduct * (At / (distToCenter + 0.1))) / fatorLente;

    return impactoVisual > SENS_IMPACTO;
}

  for(var i=0;i<doorList.length;i++){
    var d=doorList[i],cx=d.cx*At,cz=d.cz*At,dx=cx-camx,dz=cz-camz,dist=Math.hypot(dx,dz);
    if(!inDoorExclusionZone(d,dist))continue;
    var facing=dist>.001?(fw*dx+fz*dz)/dist:1;
    if(facing<-.30&&dist>1.15*At)continue;
    var spanX=d.bmaxX-d.bminX,spanZ=d.bmaxZ-d.bminZ,alongX=spanX>=spanZ;
    var frame=.085*At,reveal=.30*At,depth=Math.max(.17*At,(alongX?spanZ:spanX)*1.10);
    var mx=(d.bminX+d.bmaxX)/2,mz=(d.bminZ+d.bmaxZ)/2,parts=[];
    if(alongX){
      parts.push({name:'batente lateral esquerdo',type:'jamb',box:[d.bminX-frame,d.bminX+frame,.02,2.20,mz-depth,mz+depth]});
      parts.push({name:'batente lateral direito',type:'jamb',box:[d.bmaxX-frame,d.bmaxX+frame,.02,2.20,mz-depth,mz+depth]});
      parts.push({name:'lateral interna esquerda da porta',type:'reveal',box:[d.bminX+frame,d.bminX+reveal,.03,2.14,mz-depth,mz+depth]});
      parts.push({name:'lateral interna direita da porta',type:'reveal',box:[d.bmaxX-reveal,d.bmaxX-frame,.03,2.14,mz-depth,mz+depth]});
      parts.push({name:'travessa superior da porta',type:'top',box:[d.bminX-frame,d.bmaxX+frame,1.93,2.25,mz-depth,mz+depth]});
    }else{
      parts.push({name:'batente lateral esquerdo',type:'jamb',box:[mx-depth,mx+depth,.02,2.20,d.bminZ-frame,d.bminZ+frame]});
      parts.push({name:'batente lateral direito',type:'jamb',box:[mx-depth,mx+depth,.02,2.20,d.bmaxZ-frame,d.bmaxZ+frame]});
      parts.push({name:'lateral interna esquerda da porta',type:'reveal',box:[mx-depth,mx+depth,.03,2.14,d.bminZ+frame,d.bminZ+reveal]});
      parts.push({name:'lateral interna direita da porta',type:'reveal',box:[mx-depth,mx+depth,.03,2.14,d.bmaxZ-reveal,d.bmaxZ-frame]});
      parts.push({name:'travessa superior da porta',type:'top',box:[mx-depth,mx+depth,1.93,2.25,d.bminZ-frame,d.bmaxZ+frame]});
    }
    var sideCandidates=[];
    for(var p=0;p<parts.length;p++){
      var r=scan(parts[p].box,parts[p].type);if(!r)continue;
      var sc=score(r,parts[p].type,dist,facing),cand={part:parts[p],r:r,score:sc,dist:dist};
      if(parts[p].type!=='top')sideCandidates.push(cand);
      if(valid(r,parts[p].type,sc)&&(!best||sc>best.score))best=cand;
    }
    for(var a=0;a<sideCandidates.length;a++)for(var b=a+1;b<sideCandidates.length;b++){
      var A=sideCandidates[a],B=sideCandidates[b];
      var same=(A.r.x0<Me.w*.5)===(B.r.x0<Me.w*.5);if(!same)continue;
      var combined=A.r.area+B.r.area,cs=(A.score+B.score)*.5+Math.min(.18,combined*2.8);
      if((A.r.touchSide||B.r.touchSide)&&combined>=.01014&&cs>=.4836&&(!best||cs>best.score))best={part:{name:'batente e lateral interna da porta',type:'reveal'},r:A.r.area>=B.r.area?A.r:B.r,score:cs,dist:dist,combo:true};
    }
  }
  if(best){
    var side=best.part.type!=='top',pct=Math.max(1,Math.round((side?best.r.intrusion:best.r.h)*100));
    window.__doorFrameDebug={name:best.part.name,score:best.score,pct:pct,box:best.r};
    window.__doorFrameIssue='Porta no enquadramento: '+best.part.name+'.';
    return true;
  }
  return false;
}function furnitureBlocking(){var camx=Xt.position.x,camz=Xt.position.z;for(var q=0;q<mapMeshes.length;q++){var m=mapMeshes[q];if(!m||!m.geometry||!m.geometry.parameters)continue;if(m.userData&&m.userData.isWall)continue;var p=m.geometry.parameters;if(p.width==null)continue;var hw=p.width*Math.abs(m.scale.x)/2,hy=p.height*Math.abs(m.scale.y)/2,hd=p.depth*Math.abs(m.scale.z)/2;var yMin=m.position.y-hy,yMax=m.position.y+hy;if(yMax<0.4||yMin>1.9)continue;if(hw>3||hd>3)continue;if(hy<0.6)continue;if(yMax<1.25)continue;var dist=Math.hypot(m.position.x-camx,m.position.z-camz);if(dist>1.7*At)continue;var minx=1e9,miny=1e9,maxx=-1e9,maxy=-1e9,front=0;for(var sx=-1;sx<=1;sx+=2)for(var sy=-1;sy<=1;sy+=2)for(var sz=-1;sz<=1;sz+=2){var pr=v8Project(m.position.x+sx*hw,m.position.y+sy*hy,m.position.z+sz*hd);if(!pr.ok)continue;front++;if(pr.x<minx)minx=pr.x;if(pr.x>maxx)maxx=pr.x;if(pr.y<miny)miny=pr.y;if(pr.y>maxy)maxy=pr.y;}if(front<4)continue;var cx0=Math.max(0,minx),cy0=Math.max(0,miny),cx1=Math.min(Me.w,maxx),cy1=Math.min(Me.h,maxy);if(cx1<=cx0||cy1<=cy0)continue;var area=((cx1-cx0)*(cy1-cy0))/(Me.w*Me.h);if(area>0.64)return true;}return false;}var __praiseGood=[
"Ótima foto — pronta para o anúncio!","Muito bom! O ambiente ficou amplo e convidativo.","Excelente leitura do cômodo!","Enquadramento profissional!","Essa valoriza cada metro quadrado.","Foto limpa, clara e comercial.","O cliente vai querer visitar depois dessa.","Composição muito bem resolvida!","Linhas firmes e ambiente bem apresentado.","Essa merece destaque no anúncio.","Mandou muito bem no enquadramento!","A amplitude do ambiente apareceu de verdade.","Foto forte, equilibrada e convincente.","O corretor já pode publicar essa.","Clique de portfólio!","A perspectiva ficou muito natural.","Essa foto conduz o olhar certinho.","Muito bem! Sem distrações e com boa profundidade.","Resultado elegante e profissional.","Essa ficou incrível!"
];
var __praisePerfect=[
"PERFEIÇÃO ABSOLUTA! 100 em tudo!","Impecável! Nem o Lightroom tem o que corrigir.","Fotografia nível profissional — nota máxima!","Essa vende o imóvel antes da visita.","Cravou tudo: composição, nível, perspectiva e cobertura.","Foto de capa! 100 em todos os critérios.","Isso é fotografia imobiliária de alto nível.","Pode colocar no portfólio agora.","Até um fotógrafo veterano assinaria essa.","Enquadramento perfeito. Missão cumprida!","O imóvel acabou de ganhar valor com essa foto.","Manual de fotografia imobiliária em um clique.","Essa ficou absurda de boa!","Nota 100: o corretor ficou sem palavras.","Perfeita, limpa e comercial. É assim que se faz!","A câmera, o ambiente e a luz entraram em acordo.","Nenhuma correção necessária. Raridade!","Essa merece moldura no escritório.","Você encontrou o ponto ideal do cômodo.","100 em tudo — fotógrafo do mês!","Foto premium desbloqueada!","Precisão cirúrgica no enquadramento.","Essa entra direto na seleção principal.","O anúncio agradece por essa obra-prima.","Perfeição técnica com cara de foto natural."
];
var __errorJokes={
agent:["O corretor entrou na foto sem assinar autorização de imagem.","Era foto do imóvel, não retrato corporativo do corretor.","O corretor achou que era ensaio para o LinkedIn.","Tem um vendedor ocupando metragem útil no enquadramento.","O corretor roubou a cena — e nem é ator.","A comissão apareceu antes do imóvel.","O corretor ficou tão animado que virou decoração.","Retrato imobiliário com participação especial do corretor.","Pede licença para o corretor e tenta de novo.","O imóvel está atrás daquele senhor de terno."],
door:["A porta resolveu participar do anúncio.","Menos batente, mais imóvel!","O batente roubou a cena sem pagar condomínio.","Quase virou catálogo de esquadrias.","A moldura da porta entrou sem convite.","Você fotografou o cômodo de dentro do portal.","O comprador já sabe tudo sobre esse batente.","A porta está pedindo cachê pela participação.","Avança mais um pouco: o batente não precisa de divulgação.","O vão ficou com mais destaque que o ambiente.","Essa porta está perseguindo seu enquadramento.","O batente apareceu mais que a metragem do cômodo.","A moldura quis ser protagonista.","Entrou na porta, mas a câmera ainda ficou do lado de fora.","Quase uma campanha publicitária para marcenaria."],
furniture:["O móvel ficou tão perto que pediu foto 3x4.","Tirada de dentro do armário!","O sofá ocupou a primeira fila do enquadramento.","Tem um móvel bloqueando a visita virtual.","A mesa virou parede de primeiro plano.","O comprador quer ver o cômodo, não a lateral do sofá.","Esse móvel está tentando esconder o imóvel.","A câmera chegou perto demais da decoração.","O primeiro plano engoliu o restante do ambiente.","Parece que a estante segurou a câmera como refém.","Dá um passo para o lado antes que o móvel cobre aluguel.","O móvel ficou gigante e o cômodo virou miniatura."],
direction:["A câmera apontou para o intervalo, não para o jogo.","O eixo do cômodo passou correndo e você não viu.","A sala foi para um lado e a câmera para o outro.","O enquadramento perdeu o endereço do ambiente.","Gira mais um pouco: a parede principal está te chamando.","A composição ficou procurando o centro do cômodo.","O ambiente tem direção; a câmera resolveu improvisar.","Quase acertou o eixo — faltou conversar com as paredes.","A câmera escolheu um canto que não valoriza a planta.","O cômodo ficou sem saber para onde olhar.","As linhas do ambiente pediram alinhamento.","Você enquadrou a indecisão arquitetônica."],
vertical:["As paredes estão fazendo alongamento.","Verticais em fuga! Chamem o arquiteto.","A câmera inclinou e o prédio começou a afinar.","As paredes parecem querer se encontrar no teto.","Perspectiva de torre inclinada, versão sala.","Segura essa câmera reta antes que a casa tombe.","As linhas verticais entraram em modo pirâmide.","O teto está puxando as paredes para dentro.","A arquitetura não é torta; a câmera que se empolgou.","Endireita a câmera: as paredes estão ficando tímidas.","A casa não está caindo, mas a foto jura que está.","Convergência demais — parece cenário de desenho animado."],
horizon:["A casa parece estar descendo uma ladeira.","O nível de bolha pediu demissão.","Essa foto tomou uma caipirinha.","Até o corretor ficou tonto.","O horizonte escorregou para o lado.","A sala está navegando em mar agitado.","Endireita antes que os móveis comecem a deslizar.","A gravidade mudou de direção nessa foto.","Parece que o imóvel foi construído numa rampa.","O chão está tentando fugir pela borda.","A câmera ficou de lado, mas o imóvel não.","Nivelamento freestyle não valoriza o anúncio."],
placement:["O fotógrafo ficou no meio do caminho e a parede percebeu.","Encosta na parede; ela não morde.","Esse posicionamento ficou indeciso entre canto e centro.","A câmera estacionou onde a composição não pediu.","Mais parede nas costas, menos dúvida na foto."],
angle:["O cômodo ficou tímido e mostrou só um pedacinho.","Faltou abrir o leque do ambiente.","Esse ângulo escondeu mais do que revelou.","A planta está pedindo um ponto de vista melhor.","O comprador vai precisar imaginar metade do cômodo.","O ângulo fechou a porta da profundidade.","Mostra a circulação; ela também paga condomínio.","A câmera escolheu o lado menos fotogênico.","O ambiente tem amplitude, mas a foto guardou segredo.","Faltou um passo estratégico para revelar o espaço.","Esse ângulo transformou sala em corredor.","A profundidade ficou esperando fora da foto."],
quality:["A técnica pediu uma segunda tentativa.","Essa ainda não passa na vistoria fotográfica.","O anúncio merece mais um clique.","Quase lá — mas o imóvel sabe que você consegue melhor.","A soma dos pequenos erros virou uma grande conversa.","Essa foto precisa de reforma, não o imóvel.","O clique saiu antes do enquadramento ficar pronto.","A câmera apertou o botão com ansiedade.","Respira, recompõe e dá outro clique.","O imóvel merece uma segunda chance fotográfica.","Ainda não é foto de capa, mas está no caminho.","A técnica ficou na portaria e não subiu."],
generic:["O enquadramento resolveu testar sua paciência.","A foto saiu, mas a técnica ficou carregando.","Mais um ajuste e o imóvel começa a colaborar.","O clique foi corajoso; agora falta precisão.","A câmera improvisou sem avisar o fotógrafo.","Essa tentativa vai para os bastidores.","O imóvel pediu refação com educação.","Quase comercial, ainda um pouco experimental."]
};
var __recentFeedback=[];
var __chaosJokes={
shooting:[
"O anúncio virou cobertura ao vivo do tiroteio.","Era sessão imobiliária, mas entrou no modo filme de ação.","A planta é aberta; o fogo também.","Fotografia imobiliária com trilha sonora de rajada.","O corretor pediu fotos, não evidências para a perícia.","O imóvel está disponível — a vizinhança, nem tanto.","Essa visita precisava de colete, não de grande-angular.","Você clicou no exato momento em que o silêncio pediu demissão.","O HDR vai ter trabalho para equilibrar essas faíscas.","A composição ficou explosiva em todos os sentidos.","A câmera registrou mais disparos que detalhes do acabamento.","A visita técnica escalou rapidamente.","O tour virtual agora vem com classificação indicativa.","Nem o obturador esperava tanto tiro.","Essa foto vende o imóvel e abre um inquérito.","O ambiente tem ótima circulação — principalmente das balas.","A regra dos terços perdeu para a regra do salve-se quem puder.","O corretor falou em imóvel movimentado e exagerou.","Excelente timing; péssimo momento para uma visita.","A foto ficou tão dinâmica que quase pediu câmera lenta."
],
fire:[
"Iluminação quente levada ao pé da letra.","O balanço de branco pediu um extintor.","A decoração está literalmente pegando fogo.","Essa luz ambiente passou um pouco do ponto.","O imóvel está aquecido — talvez aquecido demais.","A lareira conceito aberto saiu do controle.","O anúncio agora inclui aquecimento central e fumaça grátis.","A exposição ficou quente em todos os sentidos.","O fotógrafo buscou luz natural e encontrou combustão natural.","Essa foto está tão quente que o ISO suou.","O proprietário pediu uma foto acolhedora, não incendiária.","A temperatura de cor agora é: bombeiros.","O ambiente ganhou um ponto focal impossível de ignorar.","O fogo valorizou a luz, mas desvalorizou o imóvel.","Essa chama entrou no enquadramento sem autorização do condomínio.","A iluminação cênica foi longe demais.","O anúncio vai precisar de uma planta e de um plano de evacuação.","Até o flash decidiu manter distância.","Foto perfeita para a seção 'antes da reforma'.","A luz ficou linda; o seguro talvez discorde."
],
holes:[
"Parede com ventilação balística recém-instalada.","O imóvel ganhou conceito aberto por métodos questionáveis.","Esses furos não vieram no memorial descritivo.","A parede está praticando pontilhismo de alto calibre.","Textura exclusiva: reboco alvejado.","O acabamento agora é estilo queijo suíço.","A reforma começou sem autorização do síndico.","Cada buraco conta uma história; nenhuma ajuda o anúncio.","A parede pediu massa corrida e um advogado.","O comprador perguntou se os furos ficam no imóvel.","A decoração minimalista levou vários tiros.","Essa parede já viu dias melhores e menos munição.","O enquadramento mostrou todos os detalhes — inclusive os balísticos.","A metragem continua a mesma, mas a parede tem mais saídas.","O imóvel ficou mais arejado de um jeito pouco convencional.","Buraco de bala não conta como ponto de luz.","A parede virou alvo e acertou a foto.","Esse acabamento não consta na ficha técnica.","O reboco está pedindo aposentadoria por invalidez.","Foto imobiliária ou catálogo de perícia?"
],
destruction:[
"O ambiente está em conceito aberto... para o caos.","A visita aconteceu cinco minutos depois do apocalipse.","O imóvel precisa de pequenos reparos e grandes explicações.","A decoração entrou em modo sobrevivência.","Essa foto mostra o potencial — depois de uma reforma completa.","O anúncio vai precisar da categoria 'oportunidade para investidores corajosos'.","A composição está boa; o estado de conservação pediu socorro.","O proprietário disse 'entrega no estado' e não estava brincando.","Ambiente integrado com destroços e decisões ruins.","A foto ficou ótima para o laudo, menos para o anúncio.","O imóvel tem personalidade forte e paredes traumatizadas.","A visita técnica virou episódio final de temporada.","Tudo muito bem distribuído, inclusive os escombros.","O home staging foi substituído por um cenário de ação.","O corretor vai precisar de um argumento muito criativo."
],
combo:[
"Fogo, tiros e buracos: o anúncio virou pacote completo de ação.","Essa foto não precisa de edição; precisa de testemunhas.","O imóvel oferece luz quente, ventilação balística e muita emoção.","Você fotografou a cena exata entre o anúncio e o boletim de ocorrência.","A câmera capturou tudo, menos um ambiente tranquilo.","A visita começou imobiliária e terminou cinematográfica.","Nem a lente 10 mm conseguiu enquadrar todo esse caos.","Composição, combustão e confusão: nota máxima em acontecimentos.","O corretor queria vender rápido; a situação entendeu errado.","Essa imagem vai para o portfólio e para a perícia."
],
downed:[
"O corretor caiu, mas a composição ficou de pé.","Retrato corporativo cancelado por motivos balísticos.","O anúncio ganhou uma baixa e 250 pontos.","O corretor finalmente saiu da frente — de forma dramática.","Essa foto prova que timing é tudo e primeiros socorros também.","O imóvel está intacto; a equipe comercial, nem tanto.","A comissão caiu antes da assinatura.","Registro imobiliário com participação especial da perícia.","Ele pediu para aparecer na foto. Pedido atendido tecnicamente.","O corretor virou elemento de primeiro plano e depois de chão."
]
};
function __chaosPick(kind){return __pickRecent("chaos_"+kind,__chaosJokes[kind]||__chaosJokes.destruction)}
function __getChaosPhoto(){try{if(typeof window.__fpChaosPhotoInfo!=="function")return null;var c=window.__fpChaosPhotoInfo();if(!c||!c.kind)return null;c.joke=__chaosPick(c.kind);return c}catch(e){return null}}
function __pickRecent(key,a){
  if(!a||!a.length)return "";
  var candidates=a.filter(function(x){return __recentFeedback.indexOf(key+"|"+x)<0});
  if(!candidates.length)candidates=a.slice();
  var value=candidates[Math.floor(Math.random()*candidates.length)];
  __recentFeedback.push(key+"|"+value);if(__recentFeedback.length>10)__recentFeedback.shift();
  return value;
}
function __isPerfectPhoto(score,info){return score>=100&&info&&info.placement>=100&&info.direction>=100&&info.aimDirection>=100&&info.vertical>=100&&info.horizon>=100;}
function __errorCategory(agent,door,furn,info,score){
  if(agent)return "agent";if(door)return "door";if(furn)return "furniture";
  var checks=[["direction",Math.min(info.direction,info.aimDirection)],["placement",info.placement],["vertical",info.vertical],["horizon",info.horizon],["quality",score]];
  checks.sort(function(a,b){return a[1]-b[1]});return checks[0]&&__errorJokes[checks[0][0]]?checks[0][0]:"generic";
}
function __pick(a){return __pickRecent("legacy",a);}var __fpPhotoBusy=false,__fpPhotoQueued=false,__fpLastPhotoRequest=0;
function __fpRequestPhoto(){
  if(window.__fpGameDead||!Xi||!window.__fpStarted)return;
  var now=performance.now();
  /* evita o mesmo keydown chegando por dois listeners, sem perder cliques reais */
  if(now-__fpLastPhotoRequest<55)return;
  __fpLastPhotoRequest=now;
  if(__fpPhotoBusy){__fpPhotoQueued=true;return;}
  __fpPhotoBusy=true;
  try{_h();}
  finally{
    __fpPhotoBusy=false;
    if(__fpPhotoQueued&&Xi){
      __fpPhotoQueued=false;
      setTimeout(__fpRequestPhoto,90);
    }
  }
}
window.__fpRequestPhoto=__fpRequestPhoto;
function _h(){if(!Xi)return;let i=mh(),t=Z_(i),e=$_(i,t);var __facade=i.specialType==="facade"?i.facadeAnalysis:null;if(__facade){
  var __doneSet=fpFacadeSet(ms[i.room]),__cand=__facade.candidates||{},__bestMissing=null,__validMissing=null,__validRepeat=null,__facadeExtra=false;
  Object.keys(__cand).forEach(function(k){var c=__cand[k];if(!c)return;
    if(__doneSet.has(k)){
      if(c.valid&&c.allowExtraPhotos!==false&&(!__validRepeat||c.score>__validRepeat.score))__validRepeat=c;
      return;
    }
    if(!__bestMissing||c.score>__bestMissing.score)__bestMissing=c;
    if(c.valid&&(!__validMissing||c.score>__validMissing.score))__validMissing=c;
  });
  if(__validMissing){__facade=__validMissing;i.facadeAnalysis=__facade;t=__facade.score;e=true}
  else if(__validRepeat){__facade=__validRepeat;i.facadeAnalysis=__facade;t=__facade.score;e=true;__facadeExtra=true}
  else if(__bestMissing){__facade=__bestMissing;i.facadeAnalysis=__facade;t=__facade.score;e=false}
  else{e=false;__facade.reason="As quatro fotos obrigatórias já foram concluídas. Você ainda pode repetir qualquer ponto corretamente."}
}var __chaos=__getChaosPhoto();if(typeof window.__fpsScoreDowned==="function"){var __kp=window.__fpsScoreDowned();if(__kp>0){Yc.classList.add("on");setTimeout(()=>Yc.classList.remove("on"),45);var __downChaos={kind:"downed",title:"CORRETOR ABATIDO REGISTRADO",joke:__chaosPick("downed")};Q_(Math.max(t,92),true,i,"","",__downChaos);showJokeFlash(__downChaos.joke);Jc++;v_.textContent=Jc;(window.__onPhoto&&window.__onPhoto(t,true));Qc(!0);Gi("📸 Corretor abatido registrado • +"+__kp+" pontos!");gh();return;}}var __agIn=false,__door=false,__furn=false;if(!__facade){try{__agIn=!!(window.__agentInFrame&&window.__agentInFrame())}catch(_e){}if(__agIn)e=!1;try{__door=!!doorInFrame()}catch(_e){__door=false}if(__door)e=!1;try{__furn=!!furnitureBlocking()}catch(_e){__furn=false}if(__furn)e=!1;}
function technicalIssue(){
  if(__facade)return __facade.reason||"Ajuste o enquadramento específico da fachada.";
  if(__agIn)return "Obstrução da cena: corretor visível no enquadramento";
  if(__door)return window.__doorFrameIssue||"Batente ou lateral da porta visível.";
  if(__furn)return "Obstrução de primeiro plano: móvel ocupa área excessiva do enquadramento";
  var f=[];
  if(i.direction<100)f.push(["Cobertura espacial insuficiente: mostre pelo menos 3 paredes do cômodo",i.direction]);
  if(i.aimDirection<(i.aimTargetType!=="cornerTriple"?97:93))f.push(["Direção extremamente imprecisa: dentro dos ambientes, a mira precisa praticamente travar no alvo correto",i.aimDirection]);
  if(i.vertical<(i.aimTargetType!=="cornerTriple"?96:93))f.push(["Convergência vertical excessiva: câmera inclinada para cima ou para baixo",i.vertical]);
  if(i.horizon<(i.aimTargetType!=="cornerTriple"?95:92))f.push(["Nivelamento horizontal incorreto: horizonte inclinado",i.horizon]);
    if(i.placement<(i.aimTargetType!=="cornerTriple"?88:80))f.push(["Posicionamento inadequado: encoste na parede e use o canto ou o centro",i.placement]);if(t<(i.aimTargetType!=="cornerTriple"?93:89))f.push(["Qualidade técnica abaixo do mínimo (nota "+t+")",t]);
  return f.length?f.sort(function(x,y){return x[1]-y[1]})[0][0]:"Foto fora dos critérios técnicos";
}
var __why=!e?technicalIssue():"",__cat=!e?__errorCategory(__agIn,__door,__furn,i,t):"",__joke=!e?__pickRecent(__cat,__errorJokes[__cat]||__errorJokes.generic):(__isPerfectPhoto(t,i)?__pickRecent("perfect",__praisePerfect):__pickRecent("good",__praiseGood));if(Yc.classList.add("on"),setTimeout(()=>Yc.classList.remove("on"),45),Q_(t,e,i,__why,__joke,__chaos),__chaos&&showJokeFlash(__chaos.joke),Jc++,v_.textContent=Jc,(window.__onPhoto&&window.__onPhoto(t,!!e)),e){let n=ms[i.room];n.photos++;if(__facade){if(!__facadeExtra)fpFacadeSet(n).add(__facade.type)}else{n.sectors.add(ph(rn));for(let s of Y_(i))n.walls.add(s)}Qc(!0),showJokeFlash(__joke);if(__facade){var __zoomPraise=(__facade.type==="frontFar"&&__facade.praiseZoomMinMm>0&&Ke>=__facade.praiseZoomMinMm)?(__facade.zoomPraise||"Excelente uso do zoom: a fachada ficou elegante, limpa e valorizada a partir da calçada oposta!"):"";var __facMsg=__facadeExtra?`PLIM! 📸 Foto extra válida em ${__facade.label} • NOTA ${t}`:`PLIM! ✓ ${__facade.label} concluída • NOTA ${t}`;if(__zoomPraise)__facMsg+=" • ⭐ "+__zoomPraise;Gi(__facMsg)}else Gi(`PLIM! ✓ ${i.room} • NOTA ${t} • foto válida • ${__joke}`)}else{Qc(!1);showErrFlash(__why);if(typeof window.__fpLoseLife==="function")window.__fpLoseLife("❌ "+__why+" • −1 vida");var guidance=__facade?(__facade.reason||"Ajuste o enquadramento da fachada."):__agIn?"Retire o corretor do campo visual antes do disparo.":__door?"Avance e retire a porta do quadro.":__furn?"Mude a posição da câmera para reduzir a obstrução e recuperar a leitura do ambiente.":i.vertical<82?"Mantenha a câmera nivelada, evitando inclinação vertical.":i.horizon<84?"Corrija o nível da câmera até as linhas horizontais ficarem retas.":i.direction<100?"Reposicione a câmera até aparecerem 3 ou 4 paredes.":i.aimDirection<78?i.aimTargetType==="cornerTriple"?"Mire na aresta diagonal oposta ou no centro de uma das duas paredes que chegam nela.":"Mire no centro da parede oposta.":i.placement<100?"Encoste em uma parede e escolha o canto ou o centro como posicionamento.":"Ajuste o nivelamento da câmera.";showJokeFlash(__joke);Gi("❌ "+__why+" • Correção: "+guidance);}gh()}function gn(i){baseHeight=ri.clamp(i,.8,1.75),Co.value=baseHeight,eh.textContent=baseHeight.toFixed(2).replace(".",",")+" m"}function v8EdgeScore(i,t){let e=Math.abs(t.x-i.x),n=Math.abs(t.y-i.y);return n>=e?Math.round(100*sn(1-e/Math.max(n,1)/.16)):Math.round(100*sn(1-n/Math.max(e,1)/.22))}
function v8ClipLine(t,e){let r=edgeAssist.getBoundingClientRect(),xmin=2,ymin=2,xmax=Math.max(3,r.width-2),ymax=Math.max(3,r.height-2),x1=t.x,y1=t.y,x2=e.x,y2=e.y;function code(x,y){let c=0;if(x<xmin)c|=1;else if(x>xmax)c|=2;if(y<ymin)c|=4;else if(y>ymax)c|=8;return c}let c1=code(x1,y1),c2=code(x2,y2),guard=0;while(guard++<12){if(!(c1|c2))return{x1:x1,y1:y1,x2:x2,y2:y2};if(c1&c2)return null;let c=c1||c2,x,y;if(c&8){x=x1+(x2-x1)*(ymax-y1)/(y2-y1||1e-6);y=ymax}else if(c&4){x=x1+(x2-x1)*(ymin-y1)/(y2-y1||1e-6);y=ymin}else if(c&2){y=y1+(y2-y1)*(xmax-x1)/(x2-x1||1e-6);x=xmax}else{x=xmin;y=y1+(y2-y1)*(xmin-x1)/(x2-x1||1e-6)}if(c===c1){x1=x;y1=y;c1=code(x1,y1)}else{x2=x;y2=y;c2=code(x2,y2)}}return null}
function v8ProjectSegment(a,b){Xt.updateMatrixWorld(true);let va=new I(a[0],a[1],a[2]).applyMatrix4(Xt.matrixWorldInverse),vb=new I(b[0],b[1],b[2]).applyMatrix4(Xt.matrixWorldInverse),near=-Math.max(.055,(Xt.near||.05)*1.08);if(va.z>=near&&vb.z>=near)return null;if(va.z>=near||vb.z>=near){let behind=va.z>=near?va:vb,front=va.z>=near?vb:va,den=front.z-behind.z||-1e-6,q=(near-behind.z)/den;behind.x+= (front.x-behind.x)*q;behind.y+=(front.y-behind.y)*q;behind.z=near}va.applyMatrix4(Xt.projectionMatrix);vb.applyMatrix4(Xt.projectionMatrix);let cr=fe.domElement.getBoundingClientRect(),ar=edgeAssist.getBoundingClientRect(),cv=function(v){return{x:cr.left-ar.left+(v.x*.5+.5)*cr.width,y:cr.top-ar.top+(-.5*v.y+.5)*cr.height,front:true}};return[cv(va),cv(vb)]}
function v8SetLine(i,t,e,n){let s=edgeEls[i];s||(s=document.createElement("div"),s.className="edgeLine",edgeAssist.appendChild(s),edgeEls[i]=s);let clipped=v8ClipLine(t,e);if(!clipped){s.style.display="none";return}let r=clipped.x2-clipped.x1,a=clipped.y2-clipped.y1,o=Math.hypot(r,a);s.style.left=clipped.x1+"px";s.style.top=clipped.y1+"px";s.style.width=o+"px";s.style.transform=`rotate(${Math.atan2(a,r)}rad)`;s.style.display=o>8?"block":"none";s.className="edgeLine "+(n>=95?"good":n>=82?"mid":"bad");s.style.opacity=n>=95?".92":n>=82?".72":".48"}
function v8WorldLine(idx,a,b,score){let p=v8ProjectSegment(a,b),el=edgeEls[idx];if(!p){if(el)el.style.display="none";return}v8SetLine(idx,p[0],p[1],score)}
function v8Edges(i){let t=$c[i.room],e=t.w/2,n=t.d/2,s=2.72,r=[[t.cx-e,0.04,t.cz-n],[t.cx+e,0.04,t.cz-n],[t.cx+e,0.04,t.cz+n],[t.cx-e,0.04,t.cz+n]],top=r.map(o=>[o[0],s,o[2]]),c=0;for(let o=0;o<4;o++){let pa=v8Project(r[o][0],r[o][1],r[o][2]),pb=v8Project(top[o][0],top[o][1],top[o][2]),h=v8EdgeScore(pa,pb);v8WorldLine(c++,r[o],top[o],h)}for(let o=0;o<4;o++){let h=(o+1)%4,pa=v8Project(r[o][0],r[o][1],r[o][2]),pb=v8Project(r[h][0],r[h][1],r[h][2]),u=v8EdgeScore(pa,pb),ta=v8Project(top[o][0],top[o][1],top[o][2]),tb=v8Project(top[h][0],top[h][1],top[h][2]),d=v8EdgeScore(ta,tb);v8WorldLine(c++,r[o],r[h],Math.min(u,i.horizon));v8WorldLine(c++,top[o],top[h],Math.min(d,i.horizon))}edgeHelp.textContent=i.vertical>=96&&i.horizon>=96?"✓ Cubo do cômodo ativo alinhado":"Cubo ativo: ajuste até as arestas ficarem verdes";edgeHelp.style.color=i.vertical>=96&&i.horizon>=96?"#65e572":"#ffd166"}
function v81Guides(i){let t=document.getElementById("cameraHud"),e=document.getElementById("precisionReadout"),n=Math.min(i.vertical,i.horizon);t.classList.remove("guide-warn","guide-good","guide-perfect");if(n>=98){t.classList.add("guide-perfect");e.textContent="✓ GUIAS TRAVADAS — precisão máxima";e.style.color="#65e572"}else if(n>=92){t.classList.add("guide-good");e.textContent="✓ Quase perfeito — faça o ajuste fino";e.style.color="#65e572"}else if(n>=78){t.classList.add("guide-warn");e.textContent="Ajuste fino: vertical "+i.vertical+"% • horizonte "+i.horizon+"%";e.style.color="#ffd166"}else{e.textContent="Desalinhado: corrija as linhas da câmera";e.style.color="#ff6b6b"}}
function fpParamHint(el,text,show){if(!el)return;var tip=el.querySelector(".fpParamTip");if(!tip){tip=document.createElement("span");tip.className="fpParamTip";el.appendChild(tip)}tip.textContent=text;tip.classList.toggle("show",!!show)}
function fpEnsureParamHintStyle(){if(document.getElementById("fp-param-hints-style"))return;var st=document.createElement("style");st.id="fp-param-hints-style";st.textContent=".alignItem{position:relative}.fpParamTip{position:absolute;left:calc(100% + 7px);top:50%;transform:translateY(-50%) translateX(-4px);max-width:230px;width:max-content;padding:5px 8px;border-radius:8px;background:rgba(18,108,190,.94);border:1px solid rgba(132,210,255,.75);color:#eefaff;font:700 10px/1.25 system-ui;box-shadow:0 5px 18px rgba(0,0,0,.35);opacity:0;visibility:hidden;transition:.18s;pointer-events:none;z-index:10060}.fpParamTip.show{opacity:1;visibility:visible;transform:translateY(-50%) translateX(0)}@media(max-width:900px),(pointer:coarse){.fpParamTip{left:calc(100% + 4px);max-width:145px;font-size:8px;padding:4px 6px}}";document.head.appendChild(st)}
var __fpHintCycle=0;
var __fpFacadeGuide=null;
function fpFacadeGuideUpdate(i){
  /* A fachada usa somente as dicas azuis dos próprios parâmetros do HUD. */
  if(__fpFacadeGuide){
    __fpFacadeGuide.style.setProperty("display","none","important");
    __fpFacadeGuide.innerHTML="";
  }
}
function fpSetIndicatorLabel(el,text){if(!el)return;var x=el.querySelector(".alignLabel");if(x)x.innerHTML="<i></i>"+text}
function t0(){
  fpEnsureParamHintStyle();
  if(!document.getElementById("fp-facade-hud-style")){var __fhs=document.createElement("style");__fhs.id="fp-facade-hud-style";__fhs.textContent="#alignmentPanel.fpFacadeMode #indDirection{display:none!important;visibility:hidden!important;height:0!important;min-height:0!important;margin:0!important;padding:0!important;border:0!important;overflow:hidden!important}#alignmentPanel.fpFacadeMode #indDirection *{display:none!important}";document.head.appendChild(__fhs);}
  if(A_&&A_.parentNode)A_.remove();if(I_&&I_.parentNode)I_.remove();
  let i=mh(),aimEl=document.getElementById("indAimDirection"),isFacade=i.specialType==="facade",t=isFacade?[[Jp_,i.placement],[aimEl,i.aimDirection],[C_,i.vertical],[P_,i.horizon]]:[[Jp_,i.placement],[R_,i.direction],[aimEl,i.aimDirection],[C_,i.vertical],[P_,i.horizon]];
  if(alignmentPanel){alignmentPanel.style.display="";alignmentPanel.classList.toggle("fpFacadeMode",isFacade);}
  fpSetIndicatorLabel(Jp_,"Posicionamento");
  fpSetIndicatorLabel(R_,"Paredes no enquadramento");
  fpSetIndicatorLabel(aimEl,"Direção");
  fpSetIndicatorLabel(C_,"Verticais da câmera");
  fpSetIndicatorLabel(P_,"Nível horizontal");
  if(C_)C_.style.display="";if(R_){R_.hidden=false;R_.style.removeProperty("display");R_.style.removeProperty("visibility");R_.setAttribute("aria-hidden",isFacade?"true":"false");}
  for(let[e,n]of t)if(e){e.querySelector(".alignValue").textContent=n+"%";e.querySelector(".liveBar span").style.width=n+"%";e.classList.toggle("ok",n>=100);e.style.opacity="1"}
  if(isFacade){
    var fa=i.facadeAnalysis||{};
    var pointTip="Pise com precisão no círculo de posicionamento desenhado no chão.";
    var directionTip="Mire no centro exato da fachada do prédio.";
    if(fa.mode==="diagonal"){
      directionTip=fa.shotId==="diagLeft"?"Inclua o prédio inteiro e toda a extensão da rua na fotografia":fa.shotId==="diagRight"?"Inclua o prédio inteiro e toda a extensão da rua na fotografia.":"Inclua o prédio inteiro e toda a extensão da rua na fotografia.";
    }
    fpParamHint(Jp_,pointTip,i.placement<100);
    fpParamHint(R_,"",false);
    fpParamHint(aimEl,directionTip,i.aimDirection<100);
    fpParamHint(C_,"Verticais apenas informativas nesta fase: aparecem no painel, mas não reduzem a nota nem reprovam.",i.vertical<100);
    fpParamHint(P_,"Mantenha a câmera sem inclinação lateral: o horizonte continua valendo.",i.horizon<100);
  }else{
    fpParamHint(Jp_,"Encoste na parede e use o canto ou o centro.",i.placement<100);
    fpParamHint(R_,"Mostre 3 ou 4 paredes. Agora: "+i.wallsVisible+".",i.direction<100);
    fpParamHint(aimEl,i.aimTargetType==="cornerTriple"?"Mire na aresta diagonal oposta ou no centro de uma das duas paredes que chegam nela.":"Mire no centro da parede oposta.",i.aimDirection<100);
    fpParamHint(C_,i.disableVertical?"Regra vertical suspensa nesta zona.":"Nivele a câmera: não incline para cima ou para baixo.",!i.disableVertical&&i.vertical<100);
    fpParamHint(P_,"Corrija a inclinação lateral até o horizonte ficar reto.",i.horizon<100);
  }
  fpFacadeGuideUpdate(i);
  if(i.specialType==="facade"){edgeAssist.style.display="none";edgeHelp.style.display="none";v81Guides(i)}else if(i.specialType==="stairs"){edgeAssist.style.display="none";edgeHelp.style.display="none"}else{edgeAssist.style.display="block";edgeHelp.style.display="block";v8Edges(i);v81Guides(i)}
}
Co.oninput=()=>gn(+Co.value);E_.onclick=()=>gn(1.4);nh.onclick=j_;function fpRestartGame(mapId){try{sessionStorage.setItem("framepro_pending_map",mapId||curMapId);sessionStorage.setItem("framepro_autostart","1");sessionStorage.setItem("framepro_broker",document.getElementById("optBroker")?.checked?"1":"0");sessionStorage.setItem("framepro_dog",document.getElementById("optDog")?.checked?"1":"0");/* nova rodada: não carrega fotos, cobertura ou pontuação da fase anterior */localStorage.removeItem("framepro_photos");sessionStorage.setItem("framepro_fresh_round","1")}catch(e){}location.reload()}window.__fpRestartGame=fpRestartGame;if(fpRestartBtn)fpRestartBtn.addEventListener("click",()=>fpRestartGame(curMapId));addEventListener("keydown",i=>{["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","Space"].includes(i.code)&&i.preventDefault(),Ce[i.code]=!0,!i.repeat&&(i.code==="KeyM"&&(fpMiniVisible=!fpMiniVisible,document.body.classList.toggle("minimap-off",!fpMiniVisible)), i.code==="ArrowUp"&&gn(baseHeight+.03),i.code==="ArrowDown"&&gn(baseHeight-.03),i.code==="Escape"&&window.__fpStarted&&(Xi?(Xi=!1,document.exitPointerLock&&document.exitPointerLock(),k_.style.display="grid",H_.textContent="Continuar partida",fpRestartBtn&&(fpRestartBtn.style.display="block"),Gi("\u23F8\uFE0F Jogo pausado \u2022 ESC para continuar")):(Xi=!0,__lastRoom=null,k_.style.display="none",H_.textContent="Continuar partida",fpRestartBtn&&(fpRestartBtn.style.display="block"),setTimeout(()=>fe.domElement.requestPointerLock?.(),50),Gi("\u25B6\uFE0F Retomando o treinamento"))))});addEventListener("keyup",i=>Ce[i.code]=!1);addEventListener("keydown",function(e){if(e.code!=="Space"||e.repeat)return;if(!window.__fpStarted||!Xi)return;var tag=(e.target&&e.target.tagName||"").toLowerCase();if(tag==="input"||tag==="textarea"||tag==="select"||e.target&&e.target.isContentEditable)return;e.preventDefault();__fpRequestPhoto();},true);addEventListener("blur",()=>Object.keys(Ce).forEach(i=>Ce[i]=!1));fe.domElement.addEventListener("wheel",i=>{Xi&&(i.preventDefault(),i.altKey?(Ke=ri.clamp(Ke+(i.deltaY>0?.5:-.5),10,20),fh()):xs=ri.clamp(xs+(i.deltaY>0?.012:-.012),-.18,.18))},{passive:!1});fe.domElement.addEventListener("click",()=>{Xi&&fe.domElement.requestPointerLock?.()});addEventListener("mousemove",i=>{document.pointerLockElement===fe.domElement&&(rn-=i.movementX*.0022,gs-=i.movementY*.0018,gs=ri.clamp(gs,-1.22,.65))});document.addEventListener("pointerlockchange",function(){if(Xi&&window.__fpStarted&&document.pointerLockElement!==fe.domElement)setTimeout(__fpRestorePlayFocus,40)});gn(1.4);T_.style.display="block";try{mn=JSON.parse(localStorage.getItem("framepro_photos")||"[]")}catch{}Bo();gh();z_.onclick=()=>{mn=[],localStorage.removeItem("framepro_photos"),Bo()};document.getElementById("miniMapToggle")?.addEventListener("click",i=>{i.stopPropagation();fpMiniVisible=!fpMiniVisible;document.body.classList.toggle("minimap-off",!fpMiniVisible)});H_.addEventListener("click",()=>{k_.style.display="none",window.__fpGameEnded=false,window.__fpGameDead=false,window.__fpStarted=!0,Xi=!0,__lastRoom=null,H_.textContent="Continuar partida",fpRestartBtn&&(fpRestartBtn.style.display="block"),Gi("C\xE2mera ativa! Cubra 3 \xE2ngulos e os 4 lados de cada c\xF4modo."),setTimeout(()=>fe.domElement.requestPointerLock?.(),50)});setTimeout(()=>{try{var ab=sessionStorage.getItem("framepro_autostart");if(ab==="1"){sessionStorage.removeItem("framepro_autostart");var cb=document.getElementById("optBroker"),cd=document.getElementById("optDog");if(cb)cb.checked=sessionStorage.getItem("framepro_broker")!=="0";if(cd)cd.checked=sessionStorage.getItem("framepro_dog")!=="0";H_.click()}}catch(e){}},80);B_.onclick=__fpRequestPhoto;var e0=new Cr,Ro=0,th=0;

/* ===== Numeração rápida das paredes do cômodo ativo ===== */
var __fpWallNumberLayer=null,__fpWallNumberTimer=0;
function fpEnsureWallNumberLayer(){if(__fpWallNumberLayer)return __fpWallNumberLayer;var st=document.createElement("style");st.textContent="#fpWallNumberLayer{position:fixed;inset:0;pointer-events:none;z-index:10045}.fpWallNumber{position:absolute;transform:translate(-50%,-50%) scale(.78);width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:rgba(12,28,45,.82);border:2px solid #65e572;color:#fff;font:900 22px/1 system-ui;box-shadow:0 0 0 4px rgba(101,229,114,.14),0 8px 24px rgba(0,0,0,.42);opacity:0;animation:fpWallNumberFade 1.55s ease forwards}@keyframes fpWallNumberFade{0%{opacity:0;transform:translate(-50%,-50%) scale(.68)}14%{opacity:1;transform:translate(-50%,-50%) scale(1)}62%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) scale(.92)}}@media(pointer:coarse){.fpWallNumber{width:34px;height:34px;font-size:18px}}";document.head.appendChild(st);__fpWallNumberLayer=document.createElement("div");__fpWallNumberLayer.id="fpWallNumberLayer";document.body.appendChild(__fpWallNumberLayer);return __fpWallNumberLayer}
function fpFlashWallNumbers(roomName){return;}
var __fpOldShowRoomFlash=showRoomFlash;showRoomFlash=function(nm){__fpOldShowRoomFlash(nm);setTimeout(function(){fpFlashWallNumbers(nm)},60)};

/* ===== EXPOSIÇÃO AUTOMÁTICA POR AMBIENTE ===== */
var __expHud=document.getElementById("exposureHud"),__shutterEl=document.getElementById("shutterValue"),__apertureEl=document.getElementById("apertureValue"),__isoEl=document.getElementById("isoValue"),__lightSceneEl=document.getElementById("lightSceneName"),__isoNoise=document.getElementById("isoNoise"),__lightTransition=document.getElementById("lightTransition");if(__expHud){__expHud.style.display="block";__expHud.style.visibility="visible";__expHud.style.opacity="1";}
var __expCurrent={shutter:100,aperture:6.3,iso:800,light:1,temp:"neutra",room:""},__expTarget={...__expCurrent},__expFlashTimer=0;
function __roomHash(name){var h=2166136261>>>0,s=String(curMapId||"")+"|"+String(name||"");for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function __isExteriorRoom(name){return /área externa|area externa|externa|quintal|fachada|jardim|terraço|terraco/i.test(String(name||""))}
function __exposureForRoom(name){
  var h=__roomHash(name),outside=__isExteriorRoom(name),shutters=[60,80,100,125],apertures=[5.6,6.3,7.1];
  if(outside)return{shutter:125,aperture:7.1,iso:100,light:1.28,temp:"luz natural",room:name,outside:true};
  /* prioridade da câmera: velocidade muda mais; abertura em seguida; ISO apenas quando necessário */
  var sh=shutters[h%shutters.length],ap=apertures[(h>>>4)%apertures.length];
  var darkness=(h>>>8)%100,iso=400;
  if(darkness>82)iso=2000;else if(darkness>68)iso=1600;else if(darkness>50)iso=1000;else if(darkness>30)iso=800;else if(darkness>14)iso=640;
  /* ambientes tradicionalmente menores/fechados recebem menos luz */
  if(/banheiro|circulação|circulacao|corredor/i.test(name)){sh=60;ap=5.6;iso=Math.max(iso,1250)}
  else if(/cozinha|dormitório|dormitorio|quarto|suíte|suite/i.test(name)){if(sh===125)sh=100;iso=Math.max(iso,640)}
  else if(/sala|estar|jantar|varanda/i.test(name)){sh=Math.max(sh,80);iso=Math.min(iso,1000)}
  iso=Math.max(400,Math.min(2000,iso));
  var ev=(sh/100)*(ap/6.3)*(800/iso),light=Math.max(.62,Math.min(1.18,.82+((h>>>16)%37)/100));
  var temp=((h>>>22)%3===0)?"luz quente":((h>>>22)%3===1)?"luz neutra":"luz fria";
  return{shutter:sh,aperture:ap,iso:iso,light:light,ev:ev,temp:temp,room:name,outside:false};
}
function __setExposureRoom(name){if(!name||name===__expTarget.room)return;__expTarget=__exposureForRoom(name);if(__shutterEl)__shutterEl.innerHTML="1/"+__expTarget.shutter+' <small>s</small>';if(__apertureEl)__apertureEl.textContent="f/"+__expTarget.aperture.toFixed(1);if(__isoEl)__isoEl.textContent=String(__expTarget.iso);if(__lightSceneEl)__lightSceneEl.textContent=__expTarget.temp+" • "+name;if(__expHud){__expHud.classList.remove("changed");void __expHud.offsetWidth;__expHud.classList.add("changed");clearTimeout(__expFlashTimer);__expFlashTimer=setTimeout(function(){__expHud.classList.remove("changed")},900)}if(__lightTransition){__lightTransition.style.opacity="1";setTimeout(function(){__lightTransition.style.opacity="0"},520)}}
function __updateExposure(dt){
  var k=Math.min(1,dt*2.1);__expCurrent.light+=(__expTarget.light-__expCurrent.light)*k;__expCurrent.iso+=(__expTarget.iso-__expCurrent.iso)*k;__expCurrent.aperture+=(__expTarget.aperture-__expCurrent.aperture)*k;__expCurrent.shutter+=(__expTarget.shutter-__expCurrent.shutter)*k;
  /* iluminação realmente varia por ambiente, mas a exposição automática compensa parcialmente */
  var targetExposure=(__expTarget.outside?1.08:1.16)*(1/Math.sqrt(__expCurrent.light));fe.toneMappingExposure+=(targetExposure-fe.toneMappingExposure)*Math.min(1,dt*1.8);
  var lf=__expCurrent.light;Po.intensity+=(3.1*lf-Po.intensity)*k;Io.intensity+=(34*lf-Io.intensity)*k;rh.intensity+=(28*(.88+lf*.12)-rh.intensity)*k;ah.intensity+=(24*(.84+lf*.16)-ah.intensity)*k;
  if(__isoNoise){var grain=__expTarget.outside?0:Math.max(0,Math.min(.105,(__expCurrent.iso-400)/1600*.09));__isoNoise.style.opacity=grain.toFixed(3)}
}

var __lastRoom=null,__roomFlashEl=document.getElementById("roomFlash");function showRoomFlash(nm){if(!__roomFlashEl||!nm)return;__roomFlashEl.textContent=nm;__roomFlashEl.classList.remove("show");void __roomFlashEl.offsetWidth;__roomFlashEl.classList.add("show");}function showJokeFlash(m){var el=document.getElementById("jokeFlash");if(!el||!m)return;el.textContent=String(m);el.classList.remove("show");void el.offsetWidth;el.classList.add("show");}
function showErrFlash(m){var el=document.getElementById("errFlash");if(!el||!m)return;m=String(m);var isLong=m.length>42;el.textContent=m;el.classList.toggle("long",isLong);el.style.setProperty("--flash-duration",(isLong?Math.min(11,6.8+m.length*.025):4.5)+"s");el.classList.remove("show");void el.offsetWidth;el.classList.add("show");}
/* ===== Tráfego configurável por JSON: buzina, perseguição, atropelamento e explosão ===== */
var fpTrafficCars=[],fpTrafficGroup=new Rn(),fpTrafficCfg=null,fpTrafficHitAt=0;
var fpTrafficFall={active:false,start:0,duration:2600,vx:0,vy:0,vz:0,x:0,y:1.4,z:0,roll:0,pitch:0,invUntil:0};
Pe.add(fpTrafficGroup);
function fpTrafficDispose(){while(fpTrafficGroup.children.length){var c=fpTrafficGroup.children.pop();c.traverse(function(o){if(o.geometry&&o.geometry.dispose)o.geometry.dispose()})}fpTrafficCars=[]}
function fpCarMesh(col){var g=new Rn(),body=new de(new ti(2.0,.55,4.0),new ne({color:col,roughness:.48,metalness:.22}));body.position.y=.65;body.castShadow=true;g.add(body);var cab=new de(new ti(1.75,.65,1.9),new ne({color:col,roughness:.42,metalness:.18}));cab.position.set(0,1.18,.15);cab.castShadow=true;g.add(cab);var win=new ne({color:2250290,roughness:.15,metalness:.25,transparent:true,opacity:.72});var windshield=new de(new ti(1.5,.5,.06),win);windshield.position.set(0,1.22,-.83);windshield.rotation.x=-.18;g.add(windshield);for(var sx of [-.86,.86])for(var sz of [-1.25,1.25]){var w=new de(new cs(.38,.38,.26,16),new ne({color:1118481,roughness:.85}));w.rotation.z=Math.PI/2;w.position.set(sx,.38,sz);g.add(w)}return g}
function fpTrafficHorn(car){var now=performance.now();if(car.lastHorn&&now-car.lastHorn<2400)return;car.lastHorn=now;try{var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;var ac=window.__fpTrafficAC||(window.__fpTrafficAC=new AC());if(ac.state==='suspended')ac.resume();var t=ac.currentTime;function voice(freq,detune,vol){var o=ac.createOscillator(),g=ac.createGain(),f=ac.createBiquadFilter();o.type='sawtooth';o.frequency.setValueAtTime(freq,t);o.detune.value=detune;f.type='lowpass';f.frequency.value=1150;f.Q.value=.8;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.035);g.gain.setValueAtTime(vol*.92,t+.28);g.gain.exponentialRampToValueAtTime(.0001,t+.55);o.connect(f).connect(g).connect(ac.destination);o.start(t);o.stop(t+.58)}voice(285,-4,.055);voice(340,4,.042)}catch(e){}}
function fpTrafficLaneVector(l){var d=l.direction||1;return (l.axis||'x')==='x'?{x:d,z:0}:{x:0,z:d}}
function fpTrafficPlayerAhead(c,l){var v=fpTrafficLaneVector(l),dx=Xt.position.x-c.grp.position.x,dz=Xt.position.z-c.grp.position.z;var ahead=dx*v.x+dz*v.z,lateral=Math.abs(dx*(-v.z)+dz*v.x);return{ahead:ahead,lateral:lateral,dx:dx,dz:dz}}
function fpTrafficKnockPlayer(c){var now=performance.now();if(now<fpTrafficFall.invUntil||now-fpTrafficHitAt<1300)return;fpTrafficHitAt=now;var dx=Xt.position.x-c.grp.position.x,dz=Xt.position.z-c.grp.position.z,len=Math.hypot(dx,dz)||1;var cv=fpTrafficLaneVector(c.lane),nx=dx/len,nz=dz/len;fpTrafficFall.active=true;fpTrafficFall.start=now;fpTrafficFall.duration=2550;fpTrafficFall.vx=(cv.x*9+nx*5)*At;fpTrafficFall.vy=8.8*At;fpTrafficFall.vz=(cv.z*9+nz*5)*At;fpTrafficFall.x=Xt.position.x;fpTrafficFall.y=Math.max(baseHeight,.8);fpTrafficFall.z=Xt.position.z;fpTrafficFall.roll=(Math.random()<.5?-1:1)*(1.9+Math.random()*.8);fpTrafficFall.pitch=-1.05-Math.random()*.45;fpTrafficFall.invUntil=now+4400;window.__fpStun=true;if(typeof window.__fpLoseLife==='function')window.__fpLoseLife('🚗 O carro acelerou em você! Você voou e perdeu 1 vida');if(typeof Gi==='function')Gi('📣 BUZINA! O carro freou… e depois acelerou em cima de você!')}
window.__fpTrafficPlayerFx=function(){if(!fpTrafficFall.active)return;window.__fpStun=true;var now=performance.now(),dt=Math.min(.05,(now-(fpTrafficFall.last||now))/1000);fpTrafficFall.last=now;var elapsed=now-fpTrafficFall.start;if(elapsed>=fpTrafficFall.duration){fpTrafficFall.active=false;window.__fpStun=false;Xt.position.y=baseHeight;Xt.rotation.z=0;return}fpTrafficFall.vy-=15.5*At*dt;fpTrafficFall.x+=fpTrafficFall.vx*dt;fpTrafficFall.y+=fpTrafficFall.vy*dt;fpTrafficFall.z+=fpTrafficFall.vz*dt;fpTrafficFall.vx*=Math.pow(.90,dt*10);fpTrafficFall.vz*=Math.pow(.90,dt*10);var ground=.30;if(fpTrafficFall.y<ground){fpTrafficFall.y=ground;fpTrafficFall.vy=Math.abs(fpTrafficFall.vy)*.22;fpTrafficFall.vx*=.75;fpTrafficFall.vz*=.75}Xt.position.x=fpTrafficFall.x;Xt.position.z=fpTrafficFall.z;Xt.position.y=fpTrafficFall.y;var f=Math.min(1,elapsed/420),recover=Math.max(0,(elapsed-(fpTrafficFall.duration-650))/650);Xt.rotation.z=fpTrafficFall.roll*f*(1-recover);Xt.rotation.x=gs+fpTrafficFall.pitch*f*(1-recover)};
window.__fpTrafficLoad=function(cfg){fpTrafficDispose();fpTrafficCfg=cfg;if(!cfg||cfg.enabled===false)return;var lanes=cfg.lanes||[];for(var i=0;i<lanes.length;i++){var lane=lanes[i],count=Math.max(1,lane.count||2);for(var j=0;j<count;j++){var colors=[0xb51f2e,0x1f4f8a,0xd8d8d3,0x222226,0x7d8a62,0xd28b31],grp=fpCarMesh(colors[(i*3+j)%colors.length]);fpTrafficGroup.add(grp);fpTrafficCars.push({grp:grp,lane:lane,pos:(j/count)*(lane.length||80),speed:(lane.speedMin||6)+Math.random()*((lane.speedMax||10)-(lane.speedMin||6)),baseSpeed:0,dead:false,vx:0,vy:0,vz:0,spinX:0,spinY:0,spinZ:0,state:'drive',stateAt:0,lastHorn:0,chargeX:0,chargeZ:0});fpTrafficCars[fpTrafficCars.length-1].baseSpeed=fpTrafficCars[fpTrafficCars.length-1].speed}}};
window.__fpTrafficUpdate=function(dt){if(!fpTrafficCfg)return;var now=performance.now();for(var i=0;i<fpTrafficCars.length;i++){var c=fpTrafficCars[i],l=c.lane;if(!c.dead){var len=l.length||80,axis=l.axis||'x',v=fpTrafficLaneVector(l),sense=fpTrafficPlayerAhead(c,l);
if(c.state==='drive'&&sense.ahead>1.5*At&&sense.ahead<9.5*At&&sense.lateral<1.25*At){c.state='brake';c.stateAt=now;fpTrafficHorn(c);if(typeof Gi==='function')Gi('📣 Um carro buzinou porque você entrou na frente!')}
if(c.state==='brake'){c.speed=Math.max(0,c.speed-dt*18);if(c.speed<=.15||now-c.stateAt>650){c.speed=0;c.state='wait';c.stateAt=now}}
else if(c.state==='wait'){c.speed=0;if(now-c.stateAt>720){c.state='charge';c.stateAt=now;var qx=Xt.position.x-c.grp.position.x,qz=Xt.position.z-c.grp.position.z,ql=Math.hypot(qx,qz)||1;c.chargeX=qx/ql;c.chargeZ=qz/ql;if(typeof Gi==='function')Gi('⚠️ O motorista perdeu a paciência e acelerou em cima de você!')}}
else if(c.state==='charge'){var axis2=l.axis||'x',chargeSpeed=(l.chargeSpeed||15)*At;if(axis2==='x'){var targetDir=Xt.position.x>=c.grp.position.x?1:-1;c.chargeX+=(targetDir-c.chargeX)*Math.min(1,dt*5);c.chargeZ=0;c.grp.position.x+=c.chargeX*chargeSpeed*dt;c.grp.position.z=l.z||0;c.grp.rotation.y=c.chargeX>=0?Math.PI/2:-Math.PI/2}else{var targetDirZ=Xt.position.z>=c.grp.position.z?1:-1;c.chargeZ+=(targetDirZ-c.chargeZ)*Math.min(1,dt*5);c.chargeX=0;c.grp.position.z+=c.chargeZ*chargeSpeed*dt;c.grp.position.x=l.x||0;c.grp.rotation.y=c.chargeZ>=0?0:Math.PI}if(now-c.stateAt>2300){c.state='recover';c.stateAt=now;c.speed=c.baseSpeed*.55}}
else if(c.state==='recover'){c.speed+=(c.baseSpeed-c.speed)*Math.min(1,dt*2.2);if(now-c.stateAt>1600)c.state='drive'}
if(c.state!=='charge'){
 c.pos+=c.speed*dt*(l.direction||1);if(c.pos>len/2)c.pos=-len/2;if(c.pos<-len/2)c.pos=len/2;if(axis==='x'){c.grp.position.set((l.x||0)+c.pos,l.y||0,l.z||0);c.grp.rotation.y=(l.direction||1)>0?Math.PI/2:-Math.PI/2}else{c.grp.position.set(l.x||0,l.y||0,(l.z||0)+c.pos);c.grp.rotation.y=(l.direction||1)>0?0:Math.PI}}
var dx=Xt.position.x-c.grp.position.x,dz=Xt.position.z-c.grp.position.z,axisHit=l.axis||'x',laneLat=axisHit==='x'?Math.abs(Xt.position.z-(l.z||0)):Math.abs(Xt.position.x-(l.x||0)),longHit=axisHit==='x'?Math.abs(dx):Math.abs(dz);if(laneLat<1.18*At&&longHit<2.15*At)fpTrafficKnockPlayer(c)
}else{c.vy-=9.8*dt;c.grp.position.x+=c.vx*dt;c.grp.position.y+=c.vy*dt;c.grp.position.z+=c.vz*dt;c.grp.rotation.x+=c.spinX*dt;c.grp.rotation.y+=c.spinY*dt;c.grp.rotation.z+=c.spinZ*dt;if(c.grp.position.y<-5)c.grp.visible=false}}};
window.__fpTrafficTryShoot=function(origin,dir,maxDist){var best=null,bestT=maxDist||60;for(var i=0;i<fpTrafficCars.length;i++){var c=fpTrafficCars[i];if(c.dead||!c.grp.visible)continue;var p=c.grp.position.clone().sub(origin),t=p.dot(dir);if(t<=0||t>=bestT)continue;var closest=origin.clone().add(dir.clone().multiplyScalar(t));if(closest.distanceTo(c.grp.position)<1.65){best=c;bestT=t}}if(!best)return null;best.dead=true;var impulse=dir.clone().multiplyScalar(13+Math.random()*7);best.vx=impulse.x;best.vy=8+Math.random()*6;best.vz=impulse.z;best.spinX=(Math.random()-.5)*8;best.spinY=(Math.random()-.5)*10;best.spinZ=(Math.random()-.5)*8;try{fpImpactBurst(best.grp.position.clone().add(new I(0,.8,0)),new I(0,1,0),16744448,28)}catch(e){}if(typeof Gi==='function')Gi('💥 CARRO EXPLODIU E SAIU VOANDO!');return best.grp.position.clone().add(new I(0,.8,0))};
window.__fpTrafficLoad(curTraffic);
function xh(i=0){if(requestAnimationFrame(xh),i-th<33)return;th=i;let t=Math.min(e0.getDelta(),.05);if(Ro+=t,Xi&&!window.__fpStun&&!fpTrafficFall.active){let s=(Ce.ShiftLeft?5.4:3.25)*t*At,r=new I(-Math.sin(rn),0,-Math.cos(rn)),a=new I(Math.cos(rn),0,-Math.sin(rn)),o=new I;Ce.KeyW&&o.add(r),Ce.KeyS&&o.sub(r),Ce.KeyD&&o.add(a),Ce.KeyA&&o.sub(a),o.lengthSq()?(o.normalize().multiplyScalar(s),X_(o),To+=t*(Ce.ShiftLeft?13:9),Ro-Kc>(Ce.ShiftLeft?.26:.38)&&(Kc=Ro,J_())):To*=.86}fpUpdatePlayerElevation();if(typeof window.__fpTrafficUpdate==="function")window.__fpTrafficUpdate(t);let e=Ce.KeyW||Ce.KeyA||Ce.KeyS||Ce.KeyD,n=Xi&&e?Math.sin(To)*.022:0;Xt.position.y=baseHeight+n,Xt.rotation.order="YXZ",Xt.rotation.y=rn,Xt.rotation.x=gs,Xt.rotation.z=(window.__fpMobileLevelLock?0:xs),(window.__fpStunFx&&window.__fpStunFx()),(window.__fpTrafficPlayerFx&&window.__fpTrafficPlayerFx()),t0(),fpUpdateFacadeGroundMarkers(i),updateDoors(t),(function(){var __cr=activeRoom();x_.textContent=__cr;if(Xi&&__cr&&__cr!==__lastRoom){showRoomFlash(__cr);__setExposureRoom(__cr);__lastRoom=__cr;}__updateExposure(t);})(),eh.textContent=baseHeight.toFixed(2).replace(".",",")+" m",N_.style.transform=`rotate(${(-xs*57.3).toFixed(1)}deg)`,lh(),fpMiniMapDraw(i)}xh();fh();addEventListener("resize",()=>{Me=sh(),Xt.aspect=Me.w/Me.h,Xt.updateProjectionMatrix(),fe.setSize(Me.w,Me.h,!1),Lo.setSize(Math.round(Me.w*_s*.78),Math.round(Me.h*_s*.78)),Uo.uniforms.aspect.value=Me.w/Me.h});

/* ===== FramePro — Corretor de imóveis (NPC) + arma / tiro / dano ===== */
(function(){
  var fpAgent=null,fpAgState="walk",fpDownUntil=0,fpEnabled=true;
  var __scareDist=4.2;
  window.__fpSetBroker=function(on){fpEnabled=!!on;if(fpAgent)fpAgent.visible=fpEnabled;if(fpEnabled){try{fpReset();}catch(e){}try{if(typeof window.__fpResetBrokerInvasionCounter==="function")window.__fpResetBrokerInvasionCounter();}catch(e){}}};
  window.__fpBrokerPos=function(){return (fpEnabled&&fpAgent&&fpAgent.visible)?{x:fpX,z:fpZ}:null;};
   var fpX=0,fpZ=0,fpTX=0,fpTZ=0,fpYaw=0,fpLast=0,fpAudio=null,fpWalkPhase=0,fpWp=null,fpRepathAt=0;
   var fpStuckT=0,fpLastPX=0,fpLastPZ=0,fpSlideDir=0,fpWpTriedAt=0,fpChasing=false,fpBadT=0,fpGoalD=1e9,fpGoalX=1e9,fpGoalZ=1e9;
  var legL=null,legR=null,armL=null,armR=null,fpCase=null;
  var gun=null,muzzle=null,fpRecoil=0,fpMuzzleUntil=0,fpGunShowUntil=0,fpTracers=[],fpDecals=[],fpDebris=[],fpHoles=[],fpFires=[],fpFireLights=0;
  window.__fpLastChaosShot=window.__fpLastChaosShot||0;
  function __fpChaosVisiblePos(pos){if(!pos)return false;var p=v8Project(pos.x,pos.y||.8,pos.z);return !!(p.ok&&p.x>Me.w*.02&&p.x<Me.w*.98&&p.y>Me.h*.01&&p.y<Me.h*.98)}
  window.__fpChaosPhotoInfo=function(){
    var fire=0,holes=0,destroy=0,shooting=(performance.now()-(window.__fpLastChaosShot||0))<1800;
    for(var i=0;i<fpFires.length;i++)if(fpFires[i]&&fpFires[i].grp&&__fpChaosVisiblePos(fpFires[i].grp.position))fire++;
    for(var h=0;h<fpHoles.length;h++)if(fpHoles[h]&&__fpChaosVisiblePos(fpHoles[h].pos))holes++;
    for(var d=0;d<fpDecals.length;d++)if(fpDecals[d]&&__fpChaosVisiblePos(fpDecals[d].position))destroy++;
    var kind="",title="";
    if((fire&&shooting)||(fire&&holes)||(shooting&&holes)){kind="combo";title="CAOS COMPLETO NO ENQUADRAMENTO"}
    else if(fire){kind="fire";title=fire>1?"INCÊNDIO VISÍVEL NA CENA":"OBJETO EM CHAMAS NA FOTO"}
    else if(shooting){kind="shooting";title="TIROTEIO REGISTRADO NO CLIQUE"}
    else if(holes>=2){kind="holes";title=holes>5?"PAREDE TOMADA POR MARCAS DE BALA":"BURACOS DE BALA VISÍVEIS"}
    else if(destroy>=2){kind="destruction";title="DANOS E DESTROÇOS NO AMBIENTE"}
    if(!kind)return null;return{kind:kind,title:title,fire:fire,holes:holes,destroy:destroy};
  };
  var FALL_MS=60000;
  function fpM(c,r,m){return new ne({color:c,roughness:(r==null?.6:r),metalness:(m||0)});}
  var mSuit=fpM(3355443,.72),mShirt=fpM(15789806,.55),mSkin=fpM(14198904,.7),
      mHair=fpM(2829099,.85),mTie=fpM(8003371,.5),mShoe=fpM(1710618,.4),mCase=fpM(5913634,.55);
  function fpPart(w,h,d,y,mat,ox,oz){
    var mesh=new de(new ti(w,h,d),mat);
    mesh.position.set(ox||0,y,oz||0);
    mesh.castShadow=true;mesh.receiveShadow=true;
    fpAgent.add(mesh);return mesh;
  }
  /* membro com pivô no topo (quadril/ombro) para animar caminhada */
  function fpLimb(px,py,pz,w,h,d,mat){
    var pivot=new Rn();pivot.position.set(px,py,pz);
    var mesh=new de(new ti(w,h,d),mat);
    mesh.position.set(0,-h/2,0);
    mesh.castShadow=true;mesh.receiveShadow=true;
    pivot.add(mesh);pivot.userData.limbLen=h;fpAgent.add(pivot);return pivot;
  }
  function fpBuild(){
    if(fpAgent){Pe.remove(fpAgent);}
    fpAgent=new Rn();
    /* torso + camisa + gravata */
    fpPart(.46,.60,.26,1.05,mSuit,0,0);
    fpPart(.15,.46,.05,1.10,mShirt,0,.12);
    fpPart(.06,.26,.03,1.03,mTie,0,.145);
    /* cabeça */
    fpPart(.10,.08,.10,1.42,mSkin,0,0);
    fpPart(.22,.26,.22,1.60,mSkin,0,0);
    fpPart(.26,.10,.26,1.76,mHair,0,0);
    /* pernas (pivô no quadril y=.82) */
    legL=fpLimb(-.11,.82,0,.16,.74,.18,mSuit);
    legR=fpLimb(.11,.82,0,.16,.74,.18,mSuit);
    var shoeL=new de(new ti(.19,.10,.28),mShoe);shoeL.position.set(0,-.74,.05);shoeL.castShadow=true;legL.add(shoeL);
    var shoeR=new de(new ti(.19,.10,.28),mShoe);shoeR.position.set(0,-.74,.05);shoeR.castShadow=true;legR.add(shoeR);
    /* braços (pivô no ombro y=1.30) */
    armL=fpLimb(-.31,1.30,0,.12,.56,.14,mSuit);
    armR=fpLimb(.31,1.30,0,.12,.56,.14,mSuit);
    fpCase=new de(new ti(.26,.20,.09),mCase);fpCase.position.set(.10,-.60,0);fpCase.castShadow=true;armR.add(fpCase);
    fpAgent.position.set(fpX,0,fpZ);
    Pe.add(fpAgent);
    fpBuildGun();
  }
  /* ---------- arma (viewmodel preso à câmera) ---------- */
  function fpBuildGun(){
    if(gun){Xt.remove(gun);}
    if(Pe.children.indexOf(Xt)<0)Pe.add(Xt);
    Xt.near=.04;Xt.updateProjectionMatrix&&Xt.updateProjectionMatrix();
    gun=new Rn();
    var mBody=new ne({color:8688751,roughness:.4,metalness:.4,emissive:5266000,emissiveIntensity:1.15}),
        mSteel=new ne({color:12303291,roughness:.3,metalness:.55,emissive:7368816,emissiveIntensity:1.05}),
        mGrip=new ne({color:3684150,roughness:.85,metalness:.1,emissive:1710618,emissiveIntensity:.7});
    var body=new de(new ti(.055,.10,.30),mBody);body.position.set(0,-.02,-.10);
    var slide=new de(new ti(.05,.045,.30),mSteel);slide.position.set(0,.05,-.10);
    var barrel=new de(new ti(.032,.032,.14),mSteel);barrel.position.set(0,.03,-.32);
    var grip=new de(new ti(.05,.13,.07),mGrip);grip.position.set(0,-.11,.02);grip.rotation.x=.28;
    muzzle=new de(new ti(.08,.08,.06),new ne({color:16766541,emissive:16755029,emissiveIntensity:2.6}));
    muzzle.position.set(0,.03,-.42);muzzle.visible=false;
    [body,slide,barrel,grip].forEach(function(m){m.castShadow=false;m.receiveShadow=false;});
    gun.add(body,slide,barrel,grip,muzzle);
    gun.position.set(.24,-.20,-.5);
    gun.rotation.y=-.05;
    gun.scale.setScalar(2.0);
    Xt.add(gun);
  }
  function fpUpdateGun(dt,now){
    if(!gun)return;
    gun.visible=window.__fpWeaponVisible!==false&&!!Xi&&(now||0)<fpGunShowUntil;
    fpRecoil=Math.max(0,fpRecoil-dt*7);
    var k=fpRecoil*fpRecoil;
    gun.scale.setScalar(1.15);
    gun.position.z=-.52+k*.14;
    gun.position.y=-.25+k*.04;
    gun.rotation.x=k*.45;
    var bob=Xi?Math.sin((now||0)/380)*.006:0;
    gun.position.x=.15+bob;
    if(muzzle&&fpMuzzleUntil&&now>fpMuzzleUntil){muzzle.visible=false;fpMuzzleUntil=0;}
  }
  /* ---------- colisão / navegação ---------- */
  function fpWalkable(x,z){return Nr({x:x,z:z});}
  function fpNearDoor(x,z,extra){if(!doorList||!doorList.length)return null;var m=extra||.72*At,best=null,bd=1e9;for(var i=0;i<doorList.length;i++){var d=doorList[i],cx=d.cx*At,cz=d.cz*At,dd=Math.hypot(x-cx,z-cz);if(dd<m&&dd<bd){bd=dd;best=d;}}return best;}
  function fpDoorZone(x,z,extra){if(!doorList||!doorList.length)return null;var e=extra==null?.42*At:extra,best=fpNearDoor(x,z,e+1.0*At),bd=best?Math.hypot(x-best.cx*At,z-best.cz*At):1e9;for(var i=0;i<doorList.length;i++){var d=doorList[i],inside=x>d.bminX-e&&x<d.bmaxX+e&&z>d.bminZ-e&&z<d.bmaxZ+e;if(!inside)continue;var dd=Math.hypot(x-d.cx*At,z-d.cz*At);if(dd<bd){bd=dd;best=d;}}return best;}
  function fpForceDoor(d){if(!d)return;d.t=Math.max(d.t||0,.9);d.closed=false;if(d.leaf){var Hx=d.hx*At,Hz=d.hz*At,hl=d.hl*At,ry=d.a0+d.sweep*d.t;d.leaf.rotation.y=ry;d.leaf.position.x=Hx+hl*Math.cos(ry);d.leaf.position.z=Hz-hl*Math.sin(ry);}}
  function fpWalkableR(x,z){var d=fpDoorZone(x,z,.62*At);if(d){fpForceDoor(d);if(fpWalkable(x,z)||fpDoorZone(x,z,.30*At))return true;}if(!fpWalkable(x,z))return false;var r=.045*At;return fpWalkable(x+r,z)&&fpWalkable(x-r,z)&&fpWalkable(x,z+r)&&fpWalkable(x,z-r);}
  function fpStep(vx,vz){
    var len=Math.hypot(vx,vz),steps=Math.max(1,Math.ceil(len/(.035*At))),moved=false;
    for(var i=0;i<steps;i++){
      var sx=vx/steps,sz=vz/steps;
      var d=fpDoorZone(fpX,fpZ,.9*At)||fpDoorZone(fpX+sx,fpZ+sz,.55*At);
      if(d)fpForceDoor(d);
      /* movimento previsível: primeiro reto, depois deslize simples nos eixos */
      var tries=[[sx,sz],[sx,0],[0,sz]];
      var ok=false;
      for(var t=0;t<tries.length;t++){
        var nx=fpX+tries[t][0],nz=fpZ+tries[t][1];
        if(fpWalkableR(nx,nz)||fpDoorZone(nx,nz,.22*At)){
          fpX=nx;fpZ=nz;moved=ok=true;break;
        }
      }
      if(!ok)break;
    }
    return moved;
  }
  function fpLos(x1,z1,x2,z2){var vx=x2-x1,vz=z2-z1,len=Math.hypot(vx,vz),steps=Math.max(2,Math.ceil(len/(.14*At)));for(var i=1;i<steps;i++){var f=i/steps;if(!Nr({x:x1+vx*f,z:z1+vz*f}))return false;}return true;}
  function fpDoorWp(x,z,tx,tz){
    if(!doorList||!doorList.length)return null;
    var best=null,bc=1e9;
    for(var i=0;i<doorList.length;i++){
      var d=doorList[i],cx=d.cx*At,cz=d.cz*At;
      var wx=d.bmaxX-d.bminX,wz=d.bmaxZ-d.bminZ;
      /* o menor eixo do retângulo é a espessura da parede; atravessa nesse eixo */
      var nx=wx<wz?1:0,nz=wx<wz?0:1;
      var side=(tx-cx)*nx+(tz-cz)*nz;
      if(Math.abs(side)<.08*At)side=-((x-cx)*nx+(z-cz)*nz);
      var sg=side>=0?1:-1,exit=.95*At;
      var ex=cx+nx*sg*exit,ez=cz+nz*sg*exit;
      var c=Math.hypot(cx-x,cz-z)+Math.hypot(tx-ex,tz-ez);
      if(c<bc){bc=c;best={x:cx,z:cz,cx:cx,cz:cz,ex:ex,ez:ez,nx:nx,nz:nz,sg:sg,stage:0,door:d};}
    }
    return best;
  }
  function fpDoorGoal(wp){
    if(!wp)return null;
    fpForceDoor(wp.door);
    var inZone=fpDoorZone(fpX,fpZ,.38*At),dc=Math.hypot(fpX-wp.cx,fpZ-wp.cz);
    if(wp.stage===0&&(inZone===wp.door||dc<.30*At))wp.stage=1;
    if(wp.stage===1){
      wp.x=wp.ex;wp.z=wp.ez;
      var crossed=((fpX-wp.cx)*wp.nx+(fpZ-wp.cz)*wp.nz)*wp.sg>.62*At;
      if(crossed||Math.hypot(fpX-wp.ex,fpZ-wp.ez)<.22*At)return null;
    }else{wp.x=wp.cx;wp.z=wp.cz;}
    return wp;
  }
  function fpBrokerDust(x,z){for(var i=0;i<34;i++){var s=.025+Math.random()*.05,m=new de(new ti(s,s,s),new ne({color:Math.random()<.5?7368816:5263440,roughness:.9,transparent:true,opacity:.95}));m.position.set(x+(Math.random()-.5)*.36,.25+Math.random()*1.35,z+(Math.random()-.5)*.36);Pe.add(m);var a=Math.random()*6.283,rr=.35+Math.random()*.9;fpDebris.push({m:m,vx:Math.cos(a)*rr,vy:.8+Math.random()*1.5,vz:Math.sin(a)*rr,life:0,ttl:.6+Math.random()*.7});}}
  function fpDoorUnstick(tx,tz,now){
    /* sem teleporte: apenas abre a porta próxima e limpa o waypoint para recalcular a rota */
    var d=fpDoorZone(fpX,fpZ,1.05*At);
    if(!d)return false;
    fpForceDoor(d);
    fpWp=null;fpRepathAt=now+350;fpStuckT=0;fpBadT=0;fpGoalD=1e9;
    return true;
  }
  function fpThanosRescue(tx,tz,now){
    /* fallback suave: abandona a rota atual, sem mover instantaneamente o corretor */
    fpWp=null;fpRepathAt=now+450;fpStuckT=0;fpBadT=0;fpGoalD=1e9;
    fpRandTarget();
  }
  function fpWatchProgress(tx,tz,moved,now,dt){
    if(Math.hypot(tx-fpGoalX,tz-fpGoalZ)>.45*At){fpGoalX=tx;fpGoalZ=tz;fpGoalD=1e9;fpBadT=0;}
    var gd=Math.hypot(tx-fpX,tz-fpZ);
    if(fpGoalD===1e9||gd<fpGoalD-.025*At){fpGoalD=gd;fpBadT=0;return false;}
    fpBadT+=dt*(moved?1:1.25);
    if(fpBadT>.85){fpWp=null;fpRepathAt=0;fpBadT=0;fpGoalD=1e9;return false;}
    return false;
  }
  function fpRandTarget(){
    for(var i=0;i<50;i++){
      var x=(curBounds.minX+Math.random()*(curBounds.maxX-curBounds.minX))*At;
      var z=(curBounds.minZ+Math.random()*(curBounds.maxZ-curBounds.minZ))*At;
      if(fpWalkableR(x,z)){fpTX=x;fpTZ=z;return;}
    }
    fpTX=fpX;fpTZ=fpZ;
   }
   /* ao encostar na parede: escolhe alvo na direção contrária pra continuar andando */
   function fpReverseTarget(dx,dz){
     var base=Math.atan2(-dx,-dz),dists=[3.5,2.6,1.8,1.2],offs=[0,.5,-.5,.9,-.9,1.35,-1.35];
     for(var di=0;di<dists.length;di++){for(var oi=0;oi<offs.length;oi++){
       var a=base+offs[oi],tx=fpX+Math.sin(a)*dists[di]*At,tz=fpZ+Math.cos(a)*dists[di]*At;
       if(fpWalkableR(tx,tz)&&fpLos(fpX,fpZ,tx,tz))return{x:tx,z:tz};
     }}
     return null;
   }
  function fpFindSpot(){
    for(var i=0;i<100;i++){
      var x=(curBounds.minX+Math.random()*(curBounds.maxX-curBounds.minX))*At;
      var z=(curBounds.minZ+Math.random()*(curBounds.maxZ-curBounds.minZ))*At;
      if(fpWalkableR(x,z))return{x:x,z:z};
    }
    return{x:0,z:0};
  }
  function fpReset(){
    var s=fpFindSpot();fpX=s.x;fpZ=s.z;fpAgState="walk";fpDownUntil=0;fpWalkPhase=0;
    fpStuckT=0;fpBadT=0;fpGoalD=1e9;fpGoalX=1e9;fpGoalZ=1e9;fpLastPX=fpX;fpLastPZ=fpZ;fpWp=null;
    if(fpAgent){fpAgent.position.set(fpX,0,fpZ);fpAgent.rotation.z=0;fpAgent.rotation.y=fpYaw;}
    fpRandTarget();
  }
  function fpTick(now){
    requestAnimationFrame(fpTick);
    var dt=Math.min((now-fpLast)/1000,.05);fpLast=now;
    fpUpdateGun(dt,now);
     fpUpdateTracers(now);
      fpUpdateDebris(dt);
      fpUpdateFires(dt,now);
    if(!fpAgent)return;
    if(!fpEnabled){fpAgent.visible=false;return;}
    fpAgent.visible=true;
    if(fpAgState==="scare"){
      var cd=new I(0,0,-1).applyQuaternion(Xt.quaternion);cd.y=0;var cl=Math.hypot(cd.x,cd.z)||1;cd.x/=cl;cd.z/=cl;
      __scareDist=Math.max(.65,__scareDist-dt*6.2);
      var sx=Xt.position.x+cd.x*__scareDist,sz=Xt.position.z+cd.z*__scareDist;if(!fpWalkableR(sx,sz)){var ok=false;for(var sd=__scareDist;sd>=.75;sd-=.25){sx=Xt.position.x+cd.x*sd;sz=Xt.position.z+cd.z*sd;if(fpWalkableR(sx,sz)){ok=true;break}}if(!ok){fpAgState="walk";fpRandTarget();return;}}fpX=sx;fpZ=sz;
      fpYaw=Math.atan2(Xt.position.x-fpX,Xt.position.z-fpZ);
      fpAgent.rotation.z=0;fpAgent.rotation.y=fpYaw;
      var jb=Math.abs(Math.sin(now*.028))*.14;fpAgent.position.set(fpX,jb,fpZ);
      var sw=Math.sin(now*.03)*1.15;
      if(legL){legL.rotation.x=sw;legR.rotation.x=-sw;armL.rotation.x=-1.35;armR.rotation.x=-1.35;}
      return;
    }
    if(fpAgState==="down"){
      if(now>=fpDownUntil){fpAgState="walk";fpAgent.rotation.z=0;fpAgent.position.y=0;fpWalkPhase=0;fpRandTarget();
        if(typeof Gi==="function")Gi("O corretor se levantou e voltou a circular \u{1F454}");}
      return;
     }
     /* ===== RETA FINAL (cobertura alta): o corretor persegue o jogador e tenta entrar na frente das fotos ===== */
     var _cov=(typeof window.__fpCoverage==="number")?window.__fpCoverage:0;
     if(_cov>=70){
       if(!fpChasing){fpChasing=true;if(typeof Gi==="function")Gi("\uD83D\uDE08 O corretor percebeu a reta final e vai tentar aparecer nas fotos!");}
       var cd=new I(0,0,-1).applyQuaternion(Xt.quaternion);cd.y=0;var cl=Math.hypot(cd.x,cd.z)||1;cd.x/=cl;cd.z/=cl;
       /* alvo: à frente da câmera, dentro do enquadramento (recua até achar ponto válido) */
       var want=2.6*At,tx=Xt.position.x+cd.x*want,tz=Xt.position.z+cd.z*want;
       if(!fpWalkableR(tx,tz)){for(var pd=want;pd>=1.0*At;pd-=.3*At){tx=Xt.position.x+cd.x*pd;tz=Xt.position.z+cd.z*pd;if(fpWalkableR(tx,tz)){break;}}}
       /* sem linha de visão até o alvo -> vai pela porta mais próxima do caminho */
       var cgx=tx,cgz=tz;
       if(!fpLos(fpX,fpZ,tx,tz)){
         if(now>fpRepathAt||!fpWp){fpWp=fpDoorWp(fpX,fpZ,tx,tz);fpRepathAt=now+500;}
         if(fpWp){fpWp=fpDoorGoal(fpWp);if(fpWp){cgx=fpWp.x;cgz=fpWp.z;}}
       }else{fpWp=null;}
       var mvx=cgx-fpX,mvz=cgz-fpZ,ml=Math.hypot(mvx,mvz)||1;
       var dirx=mvx/ml,dirz=mvz/ml,sp=2.2*At*dt;
       var cmoved=false,cfX=0,cfZ=0,cang=fpWp?[0]:[0,.5,-.5,1.0,-1.0,1.5,-1.5];
       for(var ci=0;ci<cang.length;ci++){var cca=Math.cos(cang[ci]),csa=Math.sin(cang[ci]);var crx=dirx*cca-dirz*csa,crz=dirx*csa+dirz*cca;
         if(!cfX&&!cfZ&&fpWalkableR(fpX+crx*.3*At,fpZ+crz*.3*At)){cfX=crx;cfZ=crz;}
         if(ml>.25*At&&fpStep(crx*sp,crz*sp)){cmoved=true;cfX=crx;cfZ=crz;break;}
       }
        var cprog=Math.hypot(fpX-fpLastPX,fpZ-fpLastPZ);
         if(cprog>.02*At){fpStuckT=0;fpLastPX=fpX;fpLastPZ=fpZ;}else{fpStuckT+=dt;if(fpStuckT>.65&&fpDoorUnstick(tx,tz,now)){cmoved=false;}else if(fpStuckT>1.35){fpWp=null;fpRepathAt=0;fpStuckT=0;}}
         if(fpWatchProgress(tx,tz,cmoved,now,dt))return;
        if(cmoved)fpWalkPhase+=dt*11;
       /* encara a câmera quando tem visão; senão, olha para onde caminha (nunca para a parede) */
       var cLos=fpLos(fpX,fpZ,Xt.position.x,Xt.position.z),cfaceX,cfaceZ;
       if(cLos){cfaceX=Xt.position.x-fpX;cfaceZ=Xt.position.z-fpZ;}
       else if(cfX||cfZ){cfaceX=cfX;cfaceZ=cfZ;}
       else{cfaceX=Math.sin(fpYaw);cfaceZ=Math.cos(fpYaw);}
       var cw=Math.atan2(cfaceX,cfaceZ),cdf=Math.atan2(Math.sin(cw-fpYaw),Math.cos(cw-fpYaw));fpYaw+=cdf*Math.min(1,dt*9);
       var cbob=Math.abs(Math.sin(fpWalkPhase))*.05;
       fpAgent.position.set(fpX,cbob,fpZ);fpAgent.rotation.y=fpYaw;fpAgent.rotation.x=0;
       var csw=Math.sin(fpWalkPhase)*.85;
       if(legL){legL.rotation.x=csw;legR.rotation.x=-csw;armL.rotation.x=-csw*.8;armR.rotation.x=csw*.7;}
       return;
     }else if(fpChasing){fpChasing=false;}
     var fdx=fpTX-fpX,fdz=fpTZ-fpZ,fdist=Math.hypot(fdx,fdz);
     var faceX=Math.sin(fpYaw),faceZ=Math.cos(fpYaw); /* padrão: mantém a direção atual (nunca encara a parede) */
     if(fdist<.4){fpWp=null;fpStuckT=0;fpRandTarget();}
     else{
       /* rumo inteligente: se o alvo está atrás de parede, passa pela porta mais próxima do caminho */
       var gx=fpTX,gz=fpTZ;
       if(!fpLos(fpX,fpZ,fpTX,fpTZ)){
         if(now>fpRepathAt||!fpWp){fpWp=fpDoorWp(fpX,fpZ,fpTX,fpTZ);fpRepathAt=now+650;}
         if(fpWp){fpWp=fpDoorGoal(fpWp);if(fpWp){gx=fpWp.x;gz=fpWp.z;}}
       }else{fpWp=null;}
       var mvx2=gx-fpX,mvz2=gz-fpZ,ml2=Math.hypot(mvx2,mvz2)||1;
       var dirx2=mvx2/ml2,dirz2=mvz2/ml2;
       var sp2=1.5*At*dt;
       /* tenta o rumo direto; se travar, desliza por ângulos até 75° para contornar paredes/portais */
       var moved=false,ang=fpWp?[0]:[0,.45,-.45,.9,-.9,1.35,-1.35];
       for(var ai=0;ai<ang.length;ai++){
         var ca=Math.cos(ang[ai]),sa=Math.sin(ang[ai]);
         var rx=dirx2*ca-dirz2*sa,rz=dirx2*sa+dirz2*ca;
         if(!moved&&fpWalkableR(fpX+rx*.3*At,fpZ+rz*.3*At)){faceX=rx;faceZ=rz;} /* olha para uma direção aberta */
         if(fpStep(rx*sp2,rz*sp2)){moved=true;faceX=rx;faceZ=rz;break;}
       }
       if(moved){fpWalkPhase+=dt*9;}
       /* encostou na parede sem porta no caminho: vira pra direção contrária e segue andando */
       var prog=Math.hypot(fpX-fpLastPX,fpZ-fpLastPZ);
         if(prog>.02*At){fpStuckT=0;fpLastPX=fpX;fpLastPZ=fpZ;}
         else{fpStuckT+=dt;if(fpWp&&fpDoorZone(fpX,fpZ,.75*At)){fpForceDoor(fpWp.door);fpStuckT=Math.min(fpStuckT,.45);}else if(fpStuckT>.65&&fpDoorUnstick(gx,gz,now)){moved=false;}else if(!moved||fpStuckT>.85){fpWp=null;var bk=fpReverseTarget(dirx2,dirz2);if(bk){fpTX=bk.x;fpTZ=bk.z;}else fpRandTarget();}}
         if(fpWatchProgress(gx,gz,moved,now,dt))return;
     }
     /* giro suave na direção real do avanço (não atravessa a parede visualmente) */
     var want=Math.atan2(faceX,faceZ),df=Math.atan2(Math.sin(want-fpYaw),Math.cos(want-fpYaw));
     fpYaw+=df*Math.min(1,dt*7);
     var bobY=Math.abs(Math.sin(fpWalkPhase))*.05;
     fpAgent.position.set(fpX,bobY,fpZ);
     fpAgent.rotation.y=fpYaw;
     fpAgent.rotation.x=Math.sin(fpWalkPhase*2)*.02;
     /* balanço natural de pernas e braços (opostos) */
     var sw=Math.sin(fpWalkPhase)*.7;
     if(legL){legL.rotation.x=sw;legR.rotation.x=-sw;armL.rotation.x=-sw*.8;armR.rotation.x=sw*.7;}
   }
  /* ---------- áudio ---------- */
  function fpGun(){
    try{
      fpAudio=fpAudio||new(window.AudioContext||window.webkitAudioContext)();
      if(fpAudio.state==="suspended")fpAudio.resume();
      var t=fpAudio.currentTime,sr=fpAudio.sampleRate;
      /* --- eco/reverberação: delay realimentado para um estampido ecoante --- */
      var echo=fpAudio.createDelay(1.2);echo.delayTime.value=.135;
      var fb=fpAudio.createGain();fb.gain.value=.52;
      var ef=fpAudio.createBiquadFilter();ef.type="lowpass";ef.frequency.value=1300;
      var wet=fpAudio.createGain();wet.gain.value=.6;
      echo.connect(fb);fb.connect(ef);ef.connect(echo);echo.connect(wet);wet.connect(fpAudio.destination);
      /* --- estampido: ruído branco com envelope de percussão (mais surdo) --- */
      var dur=.42,n=fpAudio.createBufferSource(),b=fpAudio.createBuffer(1,Math.floor(sr*dur),sr),d=b.getChannelData(0);
      for(var i=0;i<d.length;i++){var k=i/d.length;d[i]=(Math.random()*2-1)*Math.pow(1-k,2.4);}
      n.buffer=b;
      var g=fpAudio.createGain(),f=fpAudio.createBiquadFilter();
      f.type="lowpass";f.frequency.setValueAtTime(3200,t);f.frequency.exponentialRampToValueAtTime(280,t+.34);f.Q.value=.9;
      g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.9,t+.005);g.gain.exponentialRampToValueAtTime(.001,t+.4);
      n.connect(f);f.connect(g);g.connect(fpAudio.destination);g.connect(echo);n.start(t);n.stop(t+dur);
      /* --- crack inicial (transiente mais surdo) --- */
      var cl=fpAudio.createOscillator(),cg=fpAudio.createGain();
      cl.type="square";cl.frequency.setValueAtTime(1500,t);cl.frequency.exponentialRampToValueAtTime(160,t+.06);
      cg.gain.setValueAtTime(.28,t);cg.gain.exponentialRampToValueAtTime(.001,t+.07);
      cl.connect(cg);cg.connect(fpAudio.destination);cg.connect(echo);cl.start(t);cl.stop(t+.08);
      /* --- corpo grave (boom profundo) --- */
      var bo=fpAudio.createOscillator(),bg=fpAudio.createGain();
      bo.type="sine";bo.frequency.setValueAtTime(120,t);bo.frequency.exponentialRampToValueAtTime(34,t+.3);
      bg.gain.setValueAtTime(.0001,t);bg.gain.exponentialRampToValueAtTime(.85,t+.012);bg.gain.exponentialRampToValueAtTime(.001,t+.44);
      bo.connect(bg);bg.connect(fpAudio.destination);bg.connect(echo);bo.start(t);bo.stop(t+.46);
      /* --- sub-grave extra para peso e eco --- */
      var sub=fpAudio.createOscillator(),sg=fpAudio.createGain();
      sub.type="sine";sub.frequency.setValueAtTime(72,t);sub.frequency.exponentialRampToValueAtTime(26,t+.35);
      sg.gain.setValueAtTime(.0001,t);sg.gain.exponentialRampToValueAtTime(.6,t+.02);sg.gain.exponentialRampToValueAtTime(.001,t+.42);
      sub.connect(sg);sg.connect(fpAudio.destination);sg.connect(echo);sub.start(t);sub.stop(t+.44);
    }catch(e){}
  }
  function fpGlass(){
    try{
      fpAudio=fpAudio||new(window.AudioContext||window.webkitAudioContext)();
      if(fpAudio.state==="suspended")fpAudio.resume();
      var t=fpAudio.currentTime;
      for(var i=0;i<7;i++){var o=fpAudio.createOscillator(),g=fpAudio.createGain();o.type="square";o.frequency.value=1400+Math.random()*3200;var s=t+Math.random()*.09;g.gain.setValueAtTime(.001,s);g.gain.exponentialRampToValueAtTime(.09,s+.006);g.gain.exponentialRampToValueAtTime(.001,s+.13);o.connect(g).connect(fpAudio.destination);o.start(s);o.stop(s+.15);}
    }catch(e){}
  }
  /* ---------- raycast contra a geometria (ray x AABB) ---------- */
  /* o tiro do JOGADOR pode atravessar buracos que já furaram a parede de verdade */
  function fpThroughHole(mesh,px,py,pz){
    if(!mesh||!mesh.userData||!mesh.userData.__punchReady||!fpHoles.length)return false;
    for(var i=0;i<fpHoles.length;i++){var H=fpHoles[i];
      if(H.mesh!==mesh||H.punchIdx==null)continue;
      var dx=px-H.pos.x,dy=py-H.pos.y,dz=pz-H.pos.z,rr=H.r*1.05;
      if(dx*dx+dy*dy+dz*dz<=rr*rr)return true;
    }
    return false;
  }
  function fpRayHit(origin,dir,maxDist,pierce){
    var best=null,bestDist=maxDist;
    for(var q=0;q<mapMeshes.length;q++){
      var m=mapMeshes[q];if(!m||!m.visible||!m.geometry||!m.geometry.parameters)continue;
      if(m.userData&&m.userData.noBulletHit)continue;
      var p=m.geometry.parameters,hw,hy,hd,isBox=p.width!=null;
      if(isBox){hw=p.width/2;hy=p.height/2;hd=p.depth/2;}
      else if(p.radiusTop!=null){var rr=Math.max(p.radiusTop,p.radiusBottom);hw=rr;hd=rr;hy=p.height/2;}
      else continue;
      m.updateMatrixWorld(true);
      var loOrigin=m.worldToLocal(origin.clone());
      var loNext=m.worldToLocal(origin.clone().add(dir));
      var loDir=loNext.sub(loOrigin).normalize();
      var o=[loOrigin.x,loOrigin.y,loOrigin.z],dd=[loDir.x,loDir.y,loDir.z],lo=[-hw,-hy,-hd],hi=[hw,hy,hd];
      var tmin=-Infinity,tmax=Infinity,ok=true,hitAxis=0,hitSign=1;
      for(var a=0;a<3;a++){
        if(Math.abs(dd[a])<1e-9){if(o[a]<lo[a]||o[a]>hi[a]){ok=false;break;}}
        else{var inv=1/dd[a],t1=(lo[a]-o[a])*inv,t2=(hi[a]-o[a])*inv;if(t1>t2){var sw=t1;t1=t2;t2=sw;}
          if(t1>tmin){tmin=t1;hitAxis=a;hitSign=(dd[a]<0?1:-1)}
          if(t2<tmax)tmax=t2;if(tmin>tmax){ok=false;break;}}
      }
      if(!ok)continue;
      var th=tmin;if(th<0)th=tmax;if(th<.001)continue;
      var lp=loOrigin.clone().add(loDir.clone().multiplyScalar(th));
      /* Cylinders use an extra radial check, preventing hits in empty AABB corners. */
      if(!isBox&&lp.x*lp.x+lp.z*lp.z>hw*hw*1.02)continue;
      var wp=m.localToWorld(lp.clone()),worldDist=origin.distanceTo(wp);
      if(worldDist<.02||worldDist>=bestDist||worldDist>maxDist)continue;
      if(pierce&&fpThroughHole(m,wp.x,wp.y,wp.z))continue;
      var ln=new I(0,0,0);if(!isBox){ln.set(lp.x,0,lp.z).normalize();if(Math.abs(lp.y)>hy-.02)ln.set(0,lp.y>0?1:-1,0)}else{if(hitAxis===0)ln.x=hitSign;else if(hitAxis===1)ln.y=hitSign;else ln.z=hitSign;}
      var wn=ln.transformDirection(m.matrixWorld).normalize();
      bestDist=worldDist;best={mesh:m,dist:worldDist,point:wp,normal:wn};
    }
    return best;
  }

   /* faíscas/estilhaços com física simples */
   function fpImpactBurst(pt,nrm,color,cnt){
     for(var i=0;i<cnt;i++){
       var sz=.012+Math.random()*.022;
       var glow=Math.random()<.4;
       var pc=new de(new ti(sz,sz,sz),new ne({color:color,roughness:.7,metalness:.15,emissive:glow?color:0,emissiveIntensity:glow?.9:0}));
       pc.position.copy(pt).add(nrm.clone().multiplyScalar(.02));
       var vx=nrm.x*(1.4+Math.random()*2)+(Math.random()-.5)*3.2;
       var vy=nrm.y*(1.2+Math.random()*2)+(Math.random()*2.4+.6);
       var vz=nrm.z*(1.4+Math.random()*2)+(Math.random()-.5)*3.2;
       Pe.add(pc);
       fpDebris.push({m:pc,vx:vx,vy:vy,vz:vz,life:0,ttl:.55+Math.random()*.6});
     }
     while(fpDebris.length>140){var od=fpDebris.shift();Pe.remove(od.m);if(od.m.geometry.dispose)od.m.geometry.dispose();}
   }
   function fpUpdateDebris(dt){
     if(dt>.05)dt=.05;
     for(var i=fpDebris.length-1;i>=0;i--){var p=fpDebris[i];p.life+=dt;
       if(p.life>=p.ttl){Pe.remove(p.m);if(p.m.geometry.dispose)p.m.geometry.dispose();fpDebris.splice(i,1);continue;}
       p.vy-=9.8*dt;
       p.m.position.x+=p.vx*dt;p.m.position.y+=p.vy*dt;p.m.position.z+=p.vz*dt;
       if(p.m.position.y<.02){p.m.position.y=.02;p.vy*=-.35;p.vx*=.55;p.vz*=.55;}
       p.m.rotation.x+=dt*9;p.m.rotation.y+=dt*7;
     }
    }
    /* coloca fogo permanente em um objeto (queima até o fim da gameplay) */
     function fpIgnite(m,hit){
       if(!m||m.userData.onFire)return;
       if(fpFires.length>=10)return; /* limite de 10 fogos pra não bagunçar */
       m.userData.onFire=true;
      var pm=m.geometry.parameters;
      var hy=(pm&&pm.height?pm.height*Math.abs(m.scale.y):.4);
      var w=Math.max(.22,Math.min(1.3,(pm&&pm.width?pm.width*Math.abs(m.scale.x):.4)));
      /* chamusca o objeto */
      if(m.material&&m.material.color&&!m.material.__scorched){
        var mm=m.material.clone();mm.color.multiplyScalar(.4);if(mm.emissive)mm.emissiveIntensity=0;mm.__scorched=true;m.material=mm;
      }
      var grp=new Rn();
      grp.position.set(m.position.x,m.position.y+hy*.5,m.position.z);
      var flames=[];
      for(var i=0;i<6;i++){
        var col=(Math.random()<.5?16746496:16759860);
        var fm=new de(new ti(w*.45,w*.9,w*.45),new ne({color:col,emissive:col,emissiveIntensity:2.4,transparent:!0,opacity:.85,roughness:1}));
        fm.position.set((Math.random()-.5)*w*.55,Math.random()*w*.5,(Math.random()-.5)*w*.55);
        grp.add(fm);flames.push({m:fm,ph:Math.random()*6.28,sc:.65+Math.random()*.7});
      }
      var light=null;
      if(fpFireLights<6){light=new Hi(16746496,2.2,w*7,2);light.position.y=w*.5;grp.add(light);fpFireLights++;}
      Pe.add(grp);
      fpFires.push({grp:grp,flames:flames,light:light,base:w,et:0});
    }
    function fpUpdateFires(dt,now){
      for(var i=0;i<fpFires.length;i++){var F=fpFires[i];
        for(var j=0;j<F.flames.length;j++){var fl=F.flames[j];
          var s=fl.sc*(.8+Math.abs(Math.sin(now*.008+fl.ph))*.5+Math.random()*.12);
          fl.m.scale.set(s*.9,s*1.45,s*.9);
          fl.m.material.emissiveIntensity=1.9+Math.random()*1.3;
          fl.m.rotation.y+=dt*(1+j*.4);
        }
        if(F.light)F.light.intensity=1.7+Math.sin(now*.012+i)*.5+Math.random()*.5;
        F.et+=dt;
        if(F.et>.11){F.et=0;
          var em=new de(new ti(.032,.032,.032),new ne({color:16755200,emissive:16755200,emissiveIntensity:2.2}));
          em.position.copy(F.grp.position);em.position.x+=(Math.random()-.5)*F.base*.5;em.position.z+=(Math.random()-.5)*F.base*.5;em.position.y+=F.base*.3;
          Pe.add(em);
          fpDebris.push({m:em,vx:(Math.random()-.5)*.7,vy:1.3+Math.random()*1.6,vz:(Math.random()-.5)*.7,life:0,ttl:.6+Math.random()*.5});
        }
      }
    }
    /* buraco de bala / dano em objetos */
   function fpDamage(hit){
     var m=hit.mesh,pm=m.geometry.parameters;
     if(pm&&pm.width!=null&&!m.userData.broken){
       var thin=Math.min(pm.width*Math.abs(m.scale.x),pm.depth*Math.abs(m.scale.z));
       var tall=pm.height>.5;
       var mat=m.material;
       var isGlass=(mat===yt.glass)||(mat&&(mat.transmission>0||(mat.transparent&&mat.opacity<.6)));
       var isTV=(mat===yt.dark&&thin<.24&&tall&&m.position.y>.8);
       /* TV -> tela quebrada */
       if(isTV){
         m.userData.broken=true;
         m.material=new ne({color:1119760,emissive:657930,emissiveIntensity:.35,roughness:.35,metalness:.2});
         fpGlass();
         for(var c=0;c<6;c++){var cg=new ti(.012,.4+Math.random()*.5,.006),ck=new de(cg,new ne({color:11184810,emissive:8947848,emissiveIntensity:.4}));ck.position.copy(hit.point).add(hit.normal.clone().multiplyScalar(.01));ck.lookAt(hit.point.clone().add(hit.normal));ck.rotateZ(Math.random()*Math.PI);Pe.add(ck);fpDecals.push(ck);}
         fpImpactBurst(hit.point,hit.normal,11184810,12);
         return;
       }
       /* vidro / espelho -> estilhaça */
       if(isGlass){
         m.userData.broken=true;
         m.material=new ne({color:12577023,roughness:.18,metalness:.1,transparent:!0,opacity:.12});
         fpGlass();
         fpImpactBurst(hit.point,hit.normal,13625343,16);
         fpBulletHole(hit.point,hit.normal,m);
         return;
       }
     }
     /* luminária / luz acesa -> apaga com faísca */
     if(m.material&&m.material.emissive&&m.material.emissiveIntensity>.1&&!m.userData.broken){
       m.userData.broken=true;
       var em=m.material.clone();em.emissiveIntensity=0;if(em.color)em.color.multiplyScalar(.35);m.material=em;
       fpGlass();
       fpImpactBurst(hit.point,hit.normal,16777062,12);
       fpBulletHole(hit.point,hit.normal,m);
       return;
     }
      /* objeto pequeno solto -> leva um coice e tomba */
      if(!(m.userData&&m.userData.isWall)&&pm&&pm.width!=null&&!m.userData.knocked){
        var w=pm.width*Math.abs(m.scale.x),dp=pm.depth*Math.abs(m.scale.z),hh=pm.height*Math.abs(m.scale.y);
        if(Math.max(w,dp)<.9&&hh<1.4){
          m.userData.knocked=true;
          m.rotation.z+=(Math.random()<.5?-1:1)*(.18+Math.random()*.3);
          m.rotation.x+=(Math.random()-.5)*.24;
          fpImpactBurst(hit.point,hit.normal,12561551,8);
          fpBulletHole(hit.point,hit.normal,m);
          if(!m.userData.onFire&&Math.random()<.45)fpIgnite(m,hit);
          return;
        }
      }
      fpImpactBurst(hit.point,hit.normal,12561551,7);
      fpBulletHole(hit.point,hit.normal,m);
      if(!(m.userData&&m.userData.isWall)&&pm&&pm.width!=null&&!m.userData.onFire&&Math.random()<.45)fpIgnite(m,hit);
    }
     /* ---- buraco que ATRAVESSA a parede de verdade (recorte no shader) ---- */
     function fpSetupPunchMat(m){
        if(m.userData.__punchReady)return;
        m.material=m.material.clone();
        m.material.side=2; /* frente e verso: dá pra ver o outro lado pelo buraco */
        /* chave de programa única: evita que o recorte "vaze" pro teto/chão/outras paredes */
        var _pmat=m.material;_pmat.customProgramCacheKey=function(){return "fppunch-"+_pmat.uuid;};
       var ud=m.userData;
       ud.__hx=new Array(24).fill(0);ud.__hy=new Array(24).fill(0);ud.__hz=new Array(24).fill(0);
       ud.__hr=new Array(24).fill(0);ud.__hs=new Array(24).fill(0);ud.__hcount=0;ud.__hcU=null;
       var pm=m.geometry.parameters;var hw=pm.width*Math.abs(m.scale.x),hd=pm.depth*Math.abs(m.scale.z);
       ud.__thin=(hw<hd)?0:1; /* 0 => eixo fino x ; 1 => eixo fino z */
       m.material.onBeforeCompile=function(sh){
         sh.uniforms.uHC={value:ud.__hcount||0};ud.__hcU=sh.uniforms.uHC;
         sh.uniforms.uThin={value:ud.__thin};
         sh.uniforms.uHx={value:ud.__hx};sh.uniforms.uHy={value:ud.__hy};sh.uniforms.uHz={value:ud.__hz};
         sh.uniforms.uHr={value:ud.__hr};sh.uniforms.uHs={value:ud.__hs};
         sh.vertexShader="varying vec3 vLp;\n"+sh.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>\nvLp=transformed;");
         sh.fragmentShader=("varying vec3 vLp;\nuniform float uHC;uniform float uThin;\nuniform float uHx[24];uniform float uHy[24];uniform float uHz[24];uniform float uHr[24];uniform float uHs[24];\n"+sh.fragmentShader)
           .replace("#include <clipping_planes_fragment>","#include <clipping_planes_fragment>\nfloat _hchar=0.0;\nfor(int _i=0;_i<24;_i++){ if(float(_i)>=uHC) break; vec3 dp=vec3(vLp.x-uHx[_i],vLp.y-uHy[_i],vLp.z-uHz[_i]); if(uThin<0.5)dp.x=0.0; else dp.z=0.0; float ax=(uThin<0.5)?dp.z:dp.x; float an=atan(dp.y,ax); float sd=uHs[_i]; float wob=0.66+0.44*sin(an*3.0+sd)+0.24*sin(an*7.0-sd*1.7)+0.15*sin(an*15.0+sd*0.5)+0.09*sin(an*23.0+sd); float rr=uHr[_i]*max(0.30,wob); float ds=length(dp); if(ds<rr){discard;} if(ds<rr*1.7){_hchar=max(_hchar,1.0-(ds-rr)/(rr*0.7));} }")
           .replace("#include <color_fragment>","#include <color_fragment>\ndiffuseColor.rgb*=(1.0-0.88*clamp(_hchar,0.0,1.0));");
       };
       m.material.needsUpdate=true;
       ud.__punchReady=true;
     }
     function fpPunchWall(m,pt,r,seed,idx){
       fpSetupPunchMat(m);
       var ud=m.userData;
       m.updateMatrixWorld();
       var lp=m.worldToLocal(pt.clone());
       if(idx==null){idx=ud.__hcount;if(idx>=24)idx=23;ud.__hcount=Math.min(24,idx+1);}
       ud.__hx[idx]=lp.x;ud.__hy[idx]=lp.y;ud.__hz[idx]=lp.z;ud.__hr[idx]=r;ud.__hs[idx]=seed;
       if(ud.__hcU)ud.__hcU.value=ud.__hcount;
       return idx;
     }
     /* borda chamuscada/irregular do buraco (decalque). punched=true não tapa o centro */
     function fpBuildHole(grp,r,punched){
       for(var i=grp.children.length-1;i>=0;i--){var c=grp.children[i];grp.remove(c);if(c.geometry&&c.geometry.dispose)c.geometry.dispose();}
       if(!punched){
         /* borda de gesso rachado (claro, cor de parede danificada) */
         var ring=new de(new ti(r*2.3,r*2.3,.006),new ne({color:11974326,roughness:1}));grp.add(ring);
         /* reboco quebrado ao redor (tom médio) */
         var mid=new de(new ti(r*1.65,r*1.65,.01),new ne({color:8947848,roughness:1}));mid.position.z=.003;grp.add(mid);
         /* abertura escura provisória (antes de furar de verdade) */
         var hole=new de(new ti(r*1.05,r*1.05,.02),new ne({color:1315860,roughness:1,metalness:.05}));hole.position.z=.007;grp.add(hole);
         /* rachaduras radiais proporcionais ao tamanho */
         var nc=5+Math.floor(r*10);
         for(var k=0;k<nc;k++){
           var ln=r*(1.1+Math.random()*1.5);
           var cr=new de(new ti(.008,ln,.004),new ne({color:9145227,roughness:1,transparent:!0,opacity:.55}));
           cr.rotation.z=Math.random()*Math.PI;cr.position.z=.004;grp.add(cr);
         }
       }else{
         /* buraco já atravessa: só cacos chamuscados na borda, sem cobrir o vão */
         var flakes=9+Math.floor(r*16);
         for(var f=0;f<flakes;f++){
           var a=f/flakes*6.283+Math.random()*.35;
           var rad=r*(1.02+Math.random()*.55);
           var fw=r*(.16+Math.random()*.26);
           var col=Math.random()<.5?2367259:(Math.random()<.5?5918792:9145227);
           var fk=new de(new ti(fw,fw*(.45+Math.random()*.9),.02),new ne({color:col,roughness:1}));
           fk.position.set(Math.cos(a)*rad,Math.sin(a)*rad,.005);
           fk.rotation.z=Math.random()*Math.PI;grp.add(fk);
         }
       }
     }
     function fpBulletHole(pt,nrm,mesh){
       if(!mesh||!mesh.geometry||!mesh.geometry.parameters||mesh.geometry.parameters.width==null)return;
       /* se já há um buraco perto na mesma parede, ele cresce em vez de virar mancha */
       for(var i=0;i<fpHoles.length;i++){var H=fpHoles[i];
         if(H.nrm.dot(nrm)>.6 && H.pos.distanceTo(pt)<(H.r*1.7+.16)){
           H.hits++; H.r=Math.min(H.r+.06,.85);
           var punched=!!(H.mesh&&H.mesh.userData&&H.mesh.userData.isWall&&H.r>.12);
           fpBuildHole(H.grp,H.r,punched);
           fpImpactBurst(pt,nrm,11974326,6);
           if(punched){H.punchIdx=fpPunchWall(H.mesh,H.pos,H.r*.82,H.seed,H.punchIdx);}
           return;
         }
       }
       var grp=new Rn();
       grp.position.copy(pt).add(nrm.clone().multiplyScalar(.006));
       grp.lookAt(pt.clone().add(nrm));
       grp.rotateZ(Math.random()*Math.PI);
       var r=.06;
       fpBuildHole(grp,r,false);
       Pe.add(grp);
       fpHoles.push({grp:grp,pos:pt.clone(),nrm:nrm.clone(),hits:1,r:r,mesh:mesh||null,seed:Math.random()*6.283,punchIdx:null});
       while(fpHoles.length>45){var oh=fpHoles.shift();Pe.remove(oh.grp);oh.grp.traverse(function(o){if(o.geometry&&o.geometry.dispose)o.geometry.dispose();});}
      }
   window.__fpEnemyImpact=function(origin,dir,maxDist){var h=fpRayHit(origin,dir,maxDist||60);if(!h)return null;fpImpactBurst(h.point,h.normal,12561551,5);fpBulletHole(h.point,h.normal,h.mesh);return h.point;};
  function fpTracer(a,b){
    var len=a.distanceTo(b);if(len<.05)return;
    var g=new ti(.016,.016,len),mat=new ne({color:16769194,emissive:16764006,emissiveIntensity:3,transparent:!0,opacity:.9});
    var t=new de(g,mat);
    t.position.set((a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2);t.lookAt(b);
    Pe.add(t);fpTracers.push({m:t,mat:mat,until:performance.now()+95});
  }
  function fpUpdateTracers(now){
    for(var i=fpTracers.length-1;i>=0;i--){var tr=fpTracers[i],left=tr.until-now;
      if(left<=0){Pe.remove(tr.m);if(tr.m.geometry.dispose)tr.m.geometry.dispose();fpTracers.splice(i,1);continue;}
      tr.mat.opacity=Math.max(0,left/95)*.9;}
  }
  function fpShoot(){
    var __cfgShoot=window.FRAMEPRO_CONFIG||{};
    if(__cfgShoot.TIRO_ATIVO===false||window.__fpGameDead||window.__fpGameEnded||!Xi||window.__fpShootEnabled===false)return;
    window.__fpLastChaosShot=performance.now();
    if(typeof window.__onPlayerShot==="function")window.__onPlayerShot();
    fpGun();
    fpRecoil=1;fpGunShowUntil=performance.now()+450;
    if(muzzle){muzzle.visible=true;muzzle.scale.setScalar(.7+Math.random()*.9);fpMuzzleUntil=performance.now()+55;}
    var origin=Xt.position.clone();
    var dir=new I(0,0,-1).applyQuaternion(Xt.quaternion);dir.normalize();
    var hit=fpRayHit(origin.clone(),dir,60,true);/* só o jogador atravessa os buracos */
    /* corretor padrão: colisão por cápsulas; cabeça é letal e corpo é preciso */
    var brokerHit=false,brokerHeadshot=false,brokerDownHit=false,brokerT=1e9;
    if(fpEnabled&&fpAgent&&(fpAgState==="walk"||fpAgState==="down")){
      /* Corretor caído ocupa uma cápsula horizontal ampla. Antes havia apenas uma esfera pequena,
         por isso os tiros necessários para chamar a invasão quase nunca eram registrados. */
      var samples=fpAgState==="down"?[
        {x:-.72,y:.34,z:0,r:.46,down:true},
        {x:-.36,y:.34,z:0,r:.48,down:true},
        {x:0,y:.34,z:0,r:.50,down:true},
        {x:.36,y:.34,z:0,r:.48,down:true},
        {x:.72,y:.34,z:0,r:.46,down:true}
      ]:[
        {x:0,y:1.62,z:0,r:.18,head:true},
        {x:0,y:1.08,z:0,r:.31},
        {x:0,y:.58,z:0,r:.25}
      ];
      for(var bs=0;bs<samples.length;bs++){
        var sm=samples[bs],sx=fpX+(sm.x||0),sy=sm.y,sz=fpZ+(sm.z||0);
        var bx=sx-origin.x,by=sy-origin.y,bz=sz-origin.z,tb=bx*dir.x+by*dir.y+bz*dir.z;
        if(tb<=0||tb>45||tb>=brokerT)continue;
        var cx=bx-dir.x*tb,cy=by-dir.y*tb,cz=bz-dir.z*tb;
        if(Math.hypot(cx,cy,cz)<=sm.r&&(sm.down||!hit||hit.dist>tb-.30)){
          /* Quando está caído, o corpo tem prioridade sobre o chão e os objetos
             imediatamente abaixo/de trás dele. Isso garante que os 5 tiros sejam contados. */
          brokerT=tb;brokerHit=!sm.down;brokerDownHit=!!sm.down;brokerHeadshot=!!sm.head;
        }
      }
    }
    /* Garantia global: o corpo caído recebe o tiro antes do chão, portas ou carros.
       Usa uma cápsula/esfera larga sobre a posição real do corretor, em qualquer fase. */
    if(fpEnabled&&fpAgent&&fpAgState==="down"&&!brokerDownHit){
      var dbx=fpX-origin.x,dby=.42-origin.y,dbz=fpZ-origin.z;
      var dbt=dbx*dir.x+dby*dir.y+dbz*dir.z;
      if(dbt>0&&dbt<45){
        var dcx=dbx-dir.x*dbt,dcy=dby-dir.y*dbt,dcz=dbz-dir.z*dbt;
        if(Math.hypot(dcx,dcy,dcz)<=.92){brokerT=dbt;brokerHit=false;brokerDownHit=true;brokerHeadshot=false;}
      }
    }
    /* cachorro pode ser atingido */
    var dogEnd=(typeof window.__dogTryShoot==="function")?window.__dogTryShoot(origin,dir,hit?hit.dist:60):null;
    var trafficEnd=(typeof window.__fpTrafficTryShoot==="function")?window.__fpTrafficTryShoot(origin,dir,hit?hit.dist:60):null;
    var fpsEnd=(typeof window.__fpsTryShoot==="function")?window.__fpsTryShoot(origin,dir,Math.min(hit?hit.dist:60,trafficEnd?origin.distanceTo(trafficEnd):60)):null;
    var end=hit?hit.point:origin.clone().add(dir.clone().multiplyScalar(40));
    if(brokerHit||brokerDownHit)end=new I(fpX,brokerHeadshot?1.62:(brokerDownHit?.31:1.0),fpZ);
    if(dogEnd)end=dogEnd;
    if(trafficEnd)end=trafficEnd;if(fpsEnd)end=fpsEnd;
    /* tracer sai da ponta da arma */
    var gunTip=new I(.17,-.13,-.5).applyQuaternion(Xt.quaternion).add(origin);
    fpTracer(gunTip,end);
    if(brokerDownHit){if(typeof window.__onDownedBrokerShot==="function")window.__onDownedBrokerShot();if(typeof Gi==="function")Gi('🎯 Tiro no corretor caído.');}
    else if(fpsEnd){/* inimigo tratou o próprio impacto */}
    else if(trafficEnd){/* carro tratou explosão */}
    else if(dogEnd){/* cachorro tratou o próprio impacto */}
    else if(brokerHit){
      fpAgState="down";fpDownUntil=performance.now()+FALL_MS;
      fpAgent.rotation.z=Math.PI/2;fpAgent.position.y=.30;
      if(legL){legL.rotation.x=0;legR.rotation.x=0;armL.rotation.x=0;armR.rotation.x=0;}
      if(typeof Gi==="function")Gi(brokerHeadshot?'💀 HEADSHOT! Um tiro certeiro na cabeça derrubou o corretor.':"\u{1F52B} Acertou o corretor! Ele ficar\xE1 ca\xEddo 1 min \u2014 ainda atrapalha a foto se estiver \xE0 vista.");
    }else if(hit){fpDamage(hit);}
  }
  /* ---------- o corretor atrapalha a foto? (em pé OU caído; só liberado se ocluso) ---------- */
   window.__agentInFrame=function(){
     if(!fpEnabled||!fpAgent)return false;
     var h=(fpAgState==="down")?.35:1.0;
     var v=new I(fpX,h,fpZ);v.project(Xt);
     var onscreen=v.z>-1&&v.z<1&&Math.abs(v.x)<.96&&Math.abs(v.y)<.97;
     if(!onscreen)return false;
      /* se há uma porta FECHADA (não totalmente aberta) entre a câmera e ele, está em outro cômodo -> não atrapalha */
      if(doorList&&doorList.length){
        var vx=fpX-Xt.position.x,vz=fpZ-Xt.position.z,len=Math.hypot(vx,vz),steps=Math.max(2,Math.ceil(len/(.10*At)));
        for(var di=0;di<doorList.length;di++){var dd=doorList[di];
          if(dd.t>=.85)continue; /* porta aberta -> não bloqueia a visão */
          for(var st=0;st<=steps;st++){var f2=st/steps,X2=Xt.position.x+vx*f2,Z2=Xt.position.z+vz*f2;
            if(X2>dd.bminX&&X2<dd.bmaxX&&Z2>dd.bminZ&&Z2<dd.bmaxZ)return false;
          }
        }
      }
     var bx=fpX-Xt.position.x,by=h-Xt.position.y,bz=fpZ-Xt.position.z,bdist=Math.hypot(bx,by,bz);
     if(bdist<.001)return true;
     var dir=new I(bx/bdist,by/bdist,bz/bdist);
     var occ=fpRayHit(Xt.position.clone(),dir,bdist-.35);
     if(occ)return false; /* há algo na frente do corretor -> não atrapalha */
     return true;
   };
  function fpScream(){
    try{
      fpAudio=fpAudio||new(window.AudioContext||window.webkitAudioContext)();
      if(fpAudio.state==="suspended")fpAudio.resume();
      var t=fpAudio.currentTime,sr=fpAudio.sampleRate;
      var o=fpAudio.createOscillator(),g=fpAudio.createGain(),f=fpAudio.createBiquadFilter();
      o.type="sawtooth";o.frequency.setValueAtTime(900,t);o.frequency.exponentialRampToValueAtTime(180,t+.7);o.frequency.setValueAtTime(1300,t+.72);o.frequency.exponentialRampToValueAtTime(140,t+1.5);
      f.type="bandpass";f.frequency.value=1200;f.Q.value=.7;
      g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.9,t+.03);g.gain.setValueAtTime(.9,t+1.2);g.gain.exponentialRampToValueAtTime(.001,t+1.7);
      o.connect(f).connect(g).connect(fpAudio.destination);o.start(t);o.stop(t+1.75);
      var dur=1.6,n=fpAudio.createBufferSource(),b=fpAudio.createBuffer(1,Math.floor(sr*dur),sr),d=b.getChannelData(0);
      for(var i=0;i<d.length;i++){var k=i/d.length;d[i]=(Math.random()*2-1)*Math.pow(1-k,1.4)*.6;}
      n.buffer=b;var ng=fpAudio.createGain();ng.gain.value=.5;n.connect(ng).connect(fpAudio.destination);n.start(t);n.stop(t+dur);
    }catch(e){}
  }
  window.__fpBrokerScare=function(){fpEnabled=true;if(!fpAgent)return;fpAgent.visible=true;__scareDist=4.4;fpAgState="scare";fpScream();};
  var __fpLoad=loadMap;
  loadMap=function(id){
    __fpLoad(id);
     for(var i=0;i<fpDecals.length;i++){Pe.remove(fpDecals[i]);if(fpDecals[i].geometry&&fpDecals[i].geometry.dispose)fpDecals[i].geometry.dispose();}
     fpDecals=[];
     for(var j=0;j<fpTracers.length;j++){Pe.remove(fpTracers[j].m);}
     fpTracers=[];
      for(var k=0;k<fpDebris.length;k++){Pe.remove(fpDebris[k].m);if(fpDebris[k].m.geometry.dispose)fpDebris[k].m.geometry.dispose();}
      fpDebris=[];
      for(var h=0;h<fpHoles.length;h++){Pe.remove(fpHoles[h].grp);fpHoles[h].grp.traverse(function(o){if(o.geometry&&o.geometry.dispose)o.geometry.dispose();});}
      fpHoles=[];
      for(var f=0;f<fpFires.length;f++){Pe.remove(fpFires[f].grp);fpFires[f].grp.traverse(function(o){if(o.geometry&&o.geometry.dispose)o.geometry.dispose();});}
      fpFires=[];fpFireLights=0;
    fpReset();
  };
  /* Tiro automático progressivo: a cada fase do FPS a cadência aumenta. */
  var fpAutoFireHeld=false,fpAutoFireTimer=null;
  var FP_AUTO_FIRE_BY_LEVEL=[240,215,195,175,160,145,130,118,105,95];
  function fpAutoFireDelay(){
    var lvl=1;
    try{if(typeof window.__fpsGetLevel==="function")lvl=window.__fpsGetLevel()||1;}catch(e){}
    lvl=Math.max(1,Math.min(10,Math.floor(lvl)));
    return FP_AUTO_FIRE_BY_LEVEL[lvl-1];
  }
  function fpStopAutoFire(){
    fpAutoFireHeld=false;
    if(fpAutoFireTimer!==null){clearTimeout(fpAutoFireTimer);fpAutoFireTimer=null;}
  }
  function fpScheduleAutoFire(){
    if((window.FRAMEPRO_CONFIG&&window.FRAMEPRO_CONFIG.TIRO_ATIVO===false)||window.__fpShootEnabled===false||!fpAutoFireHeld||!Xi){fpStopAutoFire();return;}
    fpAutoFireTimer=setTimeout(function(){
      fpAutoFireTimer=null;
      if(!fpAutoFireHeld||!Xi){fpStopAutoFire();return;}
      fpShoot();
      fpScheduleAutoFire();
    },fpAutoFireDelay());
  }
  window.addEventListener("mousedown",function(e){
    if(e.button!==2)return;
    if((window.FRAMEPRO_CONFIG&&window.FRAMEPRO_CONFIG.TIRO_ATIVO===false)||window.__fpShootEnabled===false){e.preventDefault();fpStopAutoFire();return;}
    e.preventDefault();
    if(fpAutoFireHeld)return;
    fpAutoFireHeld=true;
    fpShoot();
    fpScheduleAutoFire();
  });
  window.addEventListener("mouseup",function(e){if(e.button===2)fpStopAutoFire();});
  window.addEventListener("blur",fpStopAutoFire);
  document.addEventListener("visibilitychange",function(){if(document.hidden)fpStopAutoFire();});
  window.addEventListener("contextmenu",function(e){e.preventDefault();});
  fpBuild();fpReset();fpLast=performance.now();requestAnimationFrame(fpTick);
})();

/* ===== FramePro — Cachorro rápido (aparece a cada 2 min, late, morde e derruba) ===== */
(function(){
  var dogEnabled=true, dog=null, state="idle", audio=null;
  var dx=0,dz=0,yaw=0, last=performance.now(), phase=0;
  var SPAWN_MS=120000, STUN_MS=5000, DOWN_MS=180000, WARN_MS=3200, SPEED=2.6, CHARGE=3.4, BITE=1.0;
  var nextSpawn=performance.now()+SPAWN_MS, downUntil=0, nextBark=0, nextGrowl=0, warnUntil=0, fleeUntil=0, fdx=0, fdz=0, stunUntil=0, danceUntil=0, dancePhase=0;
  var legFL,legFR,legBL,legBR,tail,head;
  var dogWp=null, dogRepathAt=0, nextStep=0;
  var dogWallSide=0,dogWallSideUntil=0,dogStuckSince=0,dogBadProgressSince=0,dogBlockedDoor=null,dogBlockedDoorUntil=0;
  var dogEscapeX=0,dogEscapeZ=0,dogEscapeUntil=0,dogEscapeAttempts=0,dogLastMoveX=0,dogLastMoveZ=-1;
  window.__fpStun=false;

  window.__dogSetEnabled=function(on){dogEnabled=!!on;if(dog)dog.visible=false;state="idle";nextSpawn=performance.now()+SPAWN_MS;if(!dogEnabled){window.__fpStun=false;}};
  window.__dogPos=function(){return (dogEnabled&&dog&&dog.visible)?{x:dx,z:dz}:null;};

  window.__dogCelebrate=function(ms){
    if(!dogEnabled||!dog||!Xi||state==="down")return;
    var px=Xt.position.x,pz=Xt.position.z,s=null;
    for(var i=0;i<40;i++){var ang=Math.random()*6.283,r=(1.3+Math.random()*1.6)*At,tx=px+Math.cos(ang)*r,tz=pz+Math.sin(ang)*r;if(walk(tx,tz)){s={x:tx,z:tz};break;}}
    if(s){dx=s.x;dz=s.z;}
    dog.visible=true;dog.rotation.z=0;dog.position.y=0;
    state="dance";danceUntil=performance.now()+(ms||3500);
    try{if(typeof bark==="function")bark(.5);}catch(e){}
  };

  function dMat(c,r){return new ne({color:c,roughness:(r==null?.75:r),metalness:0});}
  var mFur=dMat(9067563,.78),mDark=dMat(5913371,.8),mNose=dMat(1710618,.4);
  function build(){
    if(dog){Pe.remove(dog);}
    dog=new Rn();
    function part(w,h,d,x,y,z,mat){var m=new de(new ti(w,h,d),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;dog.add(m);return m;}
    function limb(x,z){var p=new Rn();p.position.set(x,.44,z);var m=new de(new ti(.11,.42,.12),mDark);m.position.set(0,-.21,0);m.castShadow=true;p.add(m);dog.add(p);return p;}
    part(.34,.32,.66,0,.52,0,mFur);
    part(.30,.30,.22,0,.55,-.28,mFur);
    head=new Rn();head.position.set(0,.62,-.44);
    var hd=new de(new ti(.28,.28,.30),mFur);hd.castShadow=true;head.add(hd);
    var snout=new de(new ti(.16,.14,.20),mFur);snout.position.set(0,-.05,-.22);snout.castShadow=true;head.add(snout);
    var nose=new de(new ti(.08,.07,.06),mNose);nose.position.set(0,-.02,-.34);head.add(nose);
    var earL=new de(new ti(.06,.16,.09),mDark);earL.position.set(-.12,.16,.03);head.add(earL);
    var earR=new de(new ti(.06,.16,.09),mDark);earR.position.set(.12,.16,.03);head.add(earR);
    dog.add(head);
    legFL=limb(-.13,-.24);legFR=limb(.13,-.24);legBL=limb(-.13,.26);legBR=limb(.13,.26);
    tail=new Rn();tail.position.set(0,.62,.34);var tl=new de(new ti(.07,.07,.30),mFur);tl.position.set(0,0,.15);tail.add(tl);tail.rotation.x=-.7;dog.add(tail);
    dog.visible=false;
    Pe.add(dog);
  }
  function bark(vol){
    try{
      audio=audio||new(window.AudioContext||window.webkitAudioContext)();
      if(audio.state==="suspended")audio.resume();
      var t=audio.currentTime;
      for(var w=0;w<2;w++){
        var s=t+w*.15;
        var o=audio.createOscillator(),g=audio.createGain(),f=audio.createBiquadFilter();
        o.type="sawtooth";o.frequency.setValueAtTime(300,s);o.frequency.exponentialRampToValueAtTime(115,s+.12);
        f.type="bandpass";f.frequency.value=850;f.Q.value=1.1;
        g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(vol,s+.02);g.gain.exponentialRampToValueAtTime(.0001,s+.14);
        o.connect(f).connect(g).connect(audio.destination);o.start(s);o.stop(s+.17);
      }
    }catch(e){}
  }
  function yelp(){
    try{
      audio=audio||new(window.AudioContext||window.webkitAudioContext)();
      if(audio.state==="suspended")audio.resume();
      var t=audio.currentTime,o=audio.createOscillator(),g=audio.createGain();
      o.type="sawtooth";o.frequency.setValueAtTime(650,t);o.frequency.exponentialRampToValueAtTime(1500,t+.1);o.frequency.exponentialRampToValueAtTime(280,t+.45);
      g.gain.setValueAtTime(.4,t);g.gain.exponentialRampToValueAtTime(.001,t+.5);
      o.connect(g).connect(audio.destination);o.start(t);o.stop(t+.52);
    }catch(e){}
  }
  function growl(vol){
    try{
      audio=audio||new(window.AudioContext||window.webkitAudioContext)();
      if(audio.state==="suspended")audio.resume();
      var t=audio.currentTime,o=audio.createOscillator(),g=audio.createGain(),f=audio.createBiquadFilter();
      o.type="sawtooth";o.frequency.setValueAtTime(78,t);o.frequency.linearRampToValueAtTime(64,t+.5);
      f.type="lowpass";f.frequency.value=320;f.Q.value=3;
      g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.08);g.gain.setValueAtTime(vol,t+.4);g.gain.exponentialRampToValueAtTime(.0001,t+.6);
      o.connect(f).connect(g).connect(audio.destination);o.start(t);o.stop(t+.62);
    }catch(e){}
  }
  function pawStep(distM){try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();if(audio.state==="suspended")audio.resume();var t=audio.currentTime;var vol=Math.max(0,.2*(1-distM/11));if(vol<=.002)return;var o=audio.createOscillator(),g=audio.createGain(),f=audio.createBiquadFilter();o.type="triangle";o.frequency.value=135+Math.random()*45;f.type="lowpass";f.frequency.value=430;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0004,t+.05);o.connect(f).connect(g).connect(audio.destination);o.start(t);o.stop(t+.06);}catch(e){}}
  function dogForceDoor(d){if(!d)return;d.t=1;d.closed=false;if(d.leaf){var Hx=d.hx*At,Hz=d.hz*At,hl=d.hl*At,ry=d.a0+d.sweep*d.t;d.leaf.rotation.y=ry;d.leaf.position.x=Hx+hl*Math.cos(ry);d.leaf.position.z=Hz-hl*Math.sin(ry);}}
  function dogDoorNear(x,z,extra){if(!doorList||!doorList.length)return null;var best=null,bestD=1e9;extra=extra||.7*At;for(var i=0;i<doorList.length;i++){var d=doorList[i],cx=d.cx*At,cz=d.cz*At,dd=Math.hypot(x-cx,z-cz);if(dd<extra&&dd<bestD){bestD=dd;best=d;}}return best;}
  function dogInDoorPassage(x,z,pad){if(!doorList||!doorList.length)return null;pad=pad==null?.09*At:pad;for(var i=0;i<doorList.length;i++){var d=doorList[i];if(x>d.bminX-pad&&x<d.bmaxX+pad&&z>d.bminZ-pad&&z<d.bmaxZ+pad)return d;}return null;}
  function walk(x,z){var passage=dogInDoorPassage(x,z);if(passage){dogForceDoor(passage);return true;}var r=.085*At;return Nr({x:x,z:z})&&Nr({x:x+r,z:z})&&Nr({x:x-r,z:z})&&Nr({x:x,z:z+r})&&Nr({x:x,z:z-r});}
  function dogLos(x1,z1,x2,z2){var vx=x2-x1,vz=z2-z1,len=Math.hypot(vx,vz),steps=Math.max(2,Math.ceil(len/(.11*At)));for(var i=1;i<steps;i++){var f=i/steps,px=x1+vx*f,pz=z1+vz*f;if(dogInDoorPassage(px,pz,.07*At))continue;if(!Nr({x:px,z:pz}))return false;}return true;}
  function dogDoorWaypoint(x,z,tx,tz){
    if(!doorList||!doorList.length)return null;
    var now=performance.now(),best=null,bestC=1e9;
    for(var i=0;i<doorList.length;i++){
      var d=doorList[i];if(d===dogBlockedDoor&&now<dogBlockedDoorUntil)continue;
      var cx=d.cx*At,cz=d.cz*At,wx=d.bmaxX-d.bminX,wz=d.bmaxZ-d.bminZ;
      var nx=wx<wz?1:0,nz=wx<wz?0:1;
      var es=(x-cx)*nx+(z-cz)*nz,ts=(tx-cx)*nx+(tz-cz)*nz;
      var startSign=es>=0?1:-1,targetSign=ts>=0?1:-1,sameSide=startSign===targetSign;
      var enterX=cx+nx*startSign*.50*At,enterZ=cz+nz*startSign*.50*At;
      var exitX=cx+nx*targetSign*.78*At,exitZ=cz+nz*targetSign*.78*At;
      var entryVisible=dogLos(x,z,enterX,enterZ);
      var c=Math.hypot(enterX-x,enterZ-z)+Math.hypot(tx-exitX,tz-exitZ)+(sameSide?3.5*At:0)+(entryVisible?0:6*At);
      if(c<bestC){bestC=c;best={x:enterX,z:enterZ,cx:cx,cz:cz,enterX:enterX,enterZ:enterZ,exitX:exitX,exitZ:exitZ,nx:nx,nz:nz,startSign:startSign,targetSign:targetSign,stage:0,door:d};}
    }
    return best;
  }
  function dogUpdateDoorWaypoint(wp){
    if(!wp)return null;dogForceDoor(wp.door);
    var dc=Math.hypot(dx-wp.cx,dz-wp.cz),signed=(dx-wp.cx)*wp.nx+(dz-wp.cz)*wp.nz;
    if(wp.stage===0){wp.x=wp.enterX;wp.z=wp.enterZ;if(Math.hypot(dx-wp.enterX,dz-wp.enterZ)<.17*At)wp.stage=1;}
    if(wp.stage===1){wp.x=wp.cx;wp.z=wp.cz;if(dc<.18*At||signed*wp.startSign<.08*At)wp.stage=2;}
    if(wp.stage===2){wp.x=wp.exitX;wp.z=wp.exitZ;if(signed*wp.targetSign>.60*At||Math.hypot(dx-wp.exitX,dz-wp.exitZ)<.16*At)return null;}
    return wp;
  }
  function dogLaneClear(x,z,ux,uz,dist){var len=Math.hypot(ux,uz)||1;ux/=len;uz/=len;var steps=Math.max(2,Math.ceil(dist/(.09*At)));for(var i=1;i<=steps;i++){var f=i/steps,px=x+ux*dist*f,pz=z+uz*dist*f;if(dogInDoorPassage(px,pz,.07*At))continue;if(!walk(px,pz))return false;}return true;}
  function dogRotate2(x,z,a){var c=Math.cos(a),s=Math.sin(a);return{x:x*c-z*s,z:x*s+z*c};}
  function dogChooseStep(ux,uz,amount,goalX,goalZ){
    if(dogLaneClear(dx,dz,ux,uz,.30*At)){dogWallSide=0;dogWallSideUntil=0;return{x:ux*amount,z:uz*amount};}
    var now=performance.now(),angles=[0,.34,-.34,.64,-.64,.96,-.96,1.28,-1.28,1.58,-1.58,Math.PI];
    if(dogWallSide&&now<dogWallSideUntil)angles=[0,dogWallSide*.34,dogWallSide*.64,dogWallSide*.96,dogWallSide*1.28,-dogWallSide*.34,-dogWallSide*.64,Math.PI];
    var before=Math.hypot(goalX-dx,goalZ-dz),best=null,bestScore=-1e9;
    for(var i=0;i<angles.length;i++){
      var a=angles[i],r=dogRotate2(ux,uz,a),nx=dx+r.x*amount,nz=dz+r.z*amount;if(!walk(nx,nz))continue;
      var look=dogLaneClear(dx,dz,r.x,r.z,.28*At),after=Math.hypot(goalX-nx,goalZ-nz),progress=before-after,forward=r.x*ux+r.z*uz;
      var score=progress*8/At+forward*1.25-Math.abs(a)*.18+(look?1.15:0);
      if(dogWallSide&&Math.sign(a)===dogWallSide)score+=.40;
      if(score>bestScore){bestScore=score;best={x:r.x*amount,z:r.z*amount,a:a};}
    }
    if(best){if(Math.abs(best.a)>.14){dogWallSide=Math.sign(best.a)||dogWallSide||1;dogWallSideUntil=now+1200;}return{x:best.x,z:best.z};}
    return null;
  }
  function dogPickRandomEscape(goalX,goalZ,now){
    var best=null,bestScore=-1e9,base=Math.atan2(goalZ-dz,goalX-dx);
    for(var i=0;i<32;i++){
      var ang=i<18?base+(Math.random()*2-1)*Math.PI:Math.random()*Math.PI*2;
      var dist=(.65+Math.random()*1.65)*At,ux=Math.cos(ang),uz=Math.sin(ang);
      var tx=dx+ux*dist,tz=dz+uz*dist;
      if(!walk(tx,tz)||!dogLaneClear(dx,dz,ux,uz,Math.min(dist,.75*At)))continue;
      var before=Math.hypot(goalX-dx,goalZ-dz),after=Math.hypot(goalX-tx,goalZ-tz);
      var reversal=dogLastMoveX*ux+dogLastMoveZ*uz<-.25?1:0;
      var score=(before-after)*1.15/At+Math.random()*2.3-reversal*.95;
      if(score>bestScore){bestScore=score;best={x:tx,z:tz};}
    }
    if(!best){
      for(var j=0;j<24;j++){var a=Math.random()*Math.PI*2,rr=(.45+Math.random()*.9)*At,x=dx+Math.cos(a)*rr,z=dz+Math.sin(a)*rr;if(walk(x,z)){best={x:x,z:z};break;}}
    }
    if(!best)return false;
    dogEscapeX=best.x;dogEscapeZ=best.z;dogEscapeUntil=now+900+Math.random()*1000;dogEscapeAttempts++;
    dogWp=null;dogRepathAt=dogEscapeUntil;dogWallSide=Math.random()<.5?-1:1;dogWallSideUntil=dogEscapeUntil;
    dogStuckSince=0;dogBadProgressSince=0;return true;
  }
  function dogStep(vx,vz,goalX,goalZ){
    var ox=dx,oz=dz,len=Math.hypot(vx,vz),steps=Math.max(1,Math.ceil(len/(.045*At)));
    goalX=goalX==null?dx+vx:goalX;goalZ=goalZ==null?dz+vz:goalZ;
    for(var i=0;i<steps;i++){
      var amount=len/steps,vl=Math.hypot(vx,vz)||1,ux=vx/vl,uz=vz/vl,nx=dx+ux*amount,nz=dz+uz*amount;
      var currentDoor=dogInDoorPassage(dx,dz,.16*At),nextDoor=dogInDoorPassage(nx,nz,.11*At),near=currentDoor||nextDoor||dogDoorNear(dx,dz,.92*At);if(near)dogForceDoor(near);
      if(currentDoor||nextDoor){dx=nx;dz=nz;continue;}
      var chosen=dogChooseStep(ux,uz,amount,goalX,goalZ);if(!chosen||!walk(dx+chosen.x,dz+chosen.z))break;dx+=chosen.x;dz+=chosen.z;
    }
    var movedX=dx-ox,movedZ=dz-oz,moved=Math.hypot(movedX,movedZ);if(moved>.002*At){dogLastMoveX=movedX/moved;dogLastMoveZ=movedZ/moved;}return moved;
  }
  function dogPathClear(x1,z1,x2,z2){var vx=x2-x1,vz=z2-z1,len=Math.hypot(vx,vz),steps=Math.max(2,Math.ceil(len/(.08*At)));for(var i=1;i<steps;i++){var f=i/steps;if(!walk(x1+vx*f,z1+vz*f))return false;}return true;}
  function findSpot(){
    for(var i=0;i<140;i++){
      var x=(curBounds.minX+Math.random()*(curBounds.maxX-curBounds.minX))*At;
      var z=(curBounds.minZ+Math.random()*(curBounds.maxZ-curBounds.minZ))*At;
      if(walk(x,z)&&Math.hypot(x-Xt.position.x,z-Xt.position.z)>3.5*At)return{x:x,z:z};
    }
    return{x:dx,z:dz};
  }
  function spawn(){
    var s=findSpot();dx=s.x;dz=s.z;dogWp=null;dogWallSide=0;dogStuckSince=0;dogBadProgressSince=0;dogBlockedDoor=null;dogEscapeUntil=0;dogEscapeAttempts=0;dogLastMoveX=0;dogLastMoveZ=-1;state="warn";warnUntil=performance.now()+WARN_MS;nextGrowl=0;nextBark=0;dog.visible=true;dog.rotation.z=0;dog.position.set(dx,0,dz);
    if(typeof Gi==="function")Gi("\u{1F415} Um cachorro apareceu rosnando\u2026 atire nele antes que ele avance!");
  }
  function bite(now){
    window.__fpStun=true;stunUntil=now+STUN_MS;
    bark(.95);
    var s=findSpot();fdx=s.x;fdz=s.z;fleeUntil=now+7000;state="flee";
    if(typeof window.__fpLoseLife==="function")window.__fpLoseLife("\u{1F415}\u200D\u{1F9BA} O cachorro te mordeu! \u22121 vida");
    if(typeof Gi==="function")Gi("\u{1F415}\u200D\u{1F9BA} O cachorro te mordeu e fugiu! Voc\xEA caiu por 5 segundos.");
  }
  /* impacto do tiro no cachorro */
  window.__dogTryShoot=function(origin,dir,maxDist){
    if(!dogEnabled||!dog||!dog.visible||state==="down")return null;
    var bx=dx-origin.x,by=.55-origin.y,bz=dz-origin.z,bd=Math.hypot(bx,by,bz);
    if(bd<.001)return null;
    var dot=(dir.x*bx+dir.y*by+dir.z*bz)/bd;
    if(dot>Math.cos(.16)&&bd<maxDist+.6){
      state="down";downUntil=performance.now()+DOWN_MS;dog.rotation.z=Math.PI/2;dog.position.y=.20;yelp();
      window.__fpStun=false;
      if(typeof Gi==="function")Gi("\u{1F3AF} Acertou o cachorro! Ele sumiu e s\xF3 volta em ~3 min.");
      return new I(dx,.55,dz);
    }
    return null;
  };
  /* efeito de queda do jogador (sobrescreve a câmera durante o atordoamento) */
  window.__fpStunFx=function(){
    if(!window.__fpStun)return;
    var now=performance.now();
    if(now>=stunUntil){window.__fpStun=false;return;}
    var f=Math.min(1,(1-(stunUntil-now)/STUN_MS)/.10);
    Xt.position.y=Xt.position.y*(1-f)+.32*f;
    Xt.rotation.z=Xt.rotation.z+1.15*f;
    Xt.rotation.x=Xt.rotation.x-.45*f;
  };
  function tick(now){
    requestAnimationFrame(tick);
    var dt=Math.min((now-last)/1000,.05);last=now;
    if(window.__fpStun&&now>=stunUntil)window.__fpStun=false;
    if(!dogEnabled||!dog||!Xi){if(dog&&!dogEnabled)dog.visible=false;return;}
    if(state==="idle"){dog.visible=false;if(now>=nextSpawn)spawn();return;}
    if(state==="down"){if(now>=downUntil){state="idle";dog.visible=false;dog.rotation.z=0;dog.position.y=0;nextSpawn=now+SPAWN_MS;}return;}
    if(state==="dance"){
      if(now>=danceUntil){state="idle";dog.visible=false;dog.rotation.z=0;dog.position.y=0;nextSpawn=now+SPAWN_MS;return;}
      dancePhase+=dt*13;
      var pxd=Xt.position.x,pzd=Xt.position.z;
      yaw=Math.atan2(pxd-dx,pzd-dz)+Math.sin(dancePhase*.5)*.9;
      var hop=Math.abs(Math.sin(dancePhase*1.4))*.30;
      dog.position.set(dx,hop,dz);dog.rotation.y=yaw+Math.PI;dog.rotation.z=Math.sin(dancePhase)*.38;
      var sw=Math.sin(dancePhase*1.7)*1.15;
      if(legFL){legFL.rotation.x=sw;legBR.rotation.x=-sw;legFR.rotation.x=-sw;legBL.rotation.x=sw;}
      if(head)head.rotation.z=Math.sin(dancePhase*1.2)*.4;
      if(tail)tail.rotation.z=Math.sin(dancePhase*3.2)*.8;
      return;
    }
    var px=Xt.position.x,pz=Xt.position.z;
    if(state==="warn"){
      var ax=px-dx,az=pz-dz,dist=Math.hypot(ax,az)||1;
      if(now>=nextGrowl){growl(.5);nextGrowl=now+900;}
      /* aproxima bem devagar enquanto rosna */
      var sp=SPEED*.35*At*dt;
      dogStep(ax/dist*sp,az/dist*sp,px,pz);
      phase+=dt*7;yaw=Math.atan2(ax,az);
      if(now>=warnUntil){state="hunt";nextBark=0;if(typeof Gi==="function")Gi("\u{1F415}\u200D\u{1F9BA} O cachorro avan\xE7ou! Atire!");}
    }else if(state==="hunt"){
      var ax=px-dx,az=pz-dz,dist=Math.hypot(ax,az)||1;
      if(now>=nextBark){var prox=1-Math.min(1,dist/(7*At));bark(.18+prox*.78);nextBark=now+Math.max(200,650-prox*430);}
      if(dist<BITE*At&&dogPathClear(dx,dz,px,pz)){bite(now);}
      else{
        var tx=px,tz=pz;
        if(dogEscapeUntil&&now<dogEscapeUntil){
          tx=dogEscapeX;tz=dogEscapeZ;
          if(Math.hypot(tx-dx,tz-dz)<.16*At){dogEscapeUntil=0;dogEscapeAttempts=0;}
        }
        if(!(dogEscapeUntil&&now<dogEscapeUntil)&&!dogPathClear(dx,dz,px,pz)){
          if(now>dogRepathAt||!dogWp){dogWp=dogDoorWaypoint(dx,dz,px,pz);dogRepathAt=now+700;}
          if(dogWp){dogWp=dogUpdateDoorWaypoint(dogWp);if(dogWp){tx=dogWp.x;tz=dogWp.z;}}
        }else if(!(dogEscapeUntil&&now<dogEscapeUntil)&&!dogInDoorPassage(dx,dz,.28*At)){dogWp=null;}
        var mx=tx-dx,mz=tz-dz,ml=Math.hypot(mx,mz)||1,sp=CHARGE*At*dt*(dogWp?.68:1);
        var before=Math.hypot(tx-dx,tz-dz),moved=dogStep(mx/ml*sp,mz/ml*sp,tx,tz),after=Math.hypot(tx-dx,tz-dz);
        if(moved>.008*At&&after<before-.004*At){dogStuckSince=0;dogBadProgressSince=0;}
        else{
          if(!dogStuckSince)dogStuckSince=now;
          if(moved>.008*At&&!dogBadProgressSince)dogBadProgressSince=now;
          if(now-dogStuckSince>850||(dogBadProgressSince&&now-dogBadProgressSince>800)){
            if(dogWp){dogBlockedDoor=dogWp.door;dogBlockedDoorUntil=now+1700;}
            dogWp=null;dogRepathAt=0;
            if(!dogEscapeUntil||now>=dogEscapeUntil)dogPickRandomEscape(px,pz,now);
            dogStuckSince=0;dogBadProgressSince=0;
          }
        }
        phase+=dt*20;
      }
      yaw=Math.atan2(ax,az);
    }else if(state==="flee"){
      var ax=fdx-dx,az=fdz-dz,dd=Math.hypot(ax,az)||1,sp=CHARGE*At*dt;
      dogStep(ax/dd*sp,az/dd*sp,fdx,fdz);
      phase+=dt*20;yaw=Math.atan2(ax,az);
      if(dd<.4*At||now>=fleeUntil){state="idle";dog.visible=false;nextSpawn=now+SPAWN_MS;}
    }
    if((state==="warn"||state==="hunt"||state==="flee")&&now>=nextStep){var pd=Math.hypot(px-dx,pz-dz)/At;pawStep(pd);nextStep=now+(state==="warn"?360:220);}
    var bob=Math.abs(Math.sin(phase))*.045;
    dog.position.set(dx,bob,dz);dog.rotation.y=yaw+Math.PI;
    var sw=Math.sin(phase)*.75;
    if(legFL){legFL.rotation.x=sw;legBR.rotation.x=sw;legFR.rotation.x=-sw;legBL.rotation.x=-sw;}
    if(tail)tail.rotation.z=Math.sin(phase*1.6)*.45;
  }
  var _dogLoad=loadMap;
  loadMap=function(id){_dogLoad(id);state="idle";dogWp=null;dogWallSide=0;dogStuckSince=0;dogBadProgressSince=0;dogBlockedDoor=null;dogEscapeUntil=0;dogEscapeAttempts=0;dogLastMoveX=0;dogLastMoveZ=-1;if(dog)dog.visible=false;window.__fpStun=false;nextSpawn=performance.now()+SPAWN_MS;};
  build();requestAnimationFrame(tick);
  /* toggles do menu inicial */
  var startBtn=document.getElementById("startBtn");
  if(startBtn)startBtn.addEventListener("click",function(){
    var cb=document.getElementById("optBroker"),cd=document.getElementById("optDog"),cs=document.getElementById("optShoot"),cw=document.getElementById("optWeapon");
    window.__fpShootEnabled=!!(cs&&cs.checked);window.__fpWeaponVisible=!!(cw&&cw.checked);
    if(typeof window.__fpSetBroker==="function")window.__fpSetBroker(!!(cb&&cb.checked));
    window.__dogSetEnabled(!!(cd&&cd.checked));
    nextSpawn=performance.now()+SPAWN_MS;
  },true);
})();



;(function(){function choosePhase(id){if(!id||!MAPS[id])return;if(window.__fpStarted){Gi("Nova fase selecionada: "+MAPS[id].label+" • reiniciando pontuação e rodada");fpRestartGame(id);return;}loadMap(id);Gi("Mapa: "+MAPS[id].label);}var sel=document.getElementById("mapSelect");if(sel){sel.innerHTML=Object.keys(MAPS).map(function(k){return '<option value="'+k+'">'+MAPS[k].icon+' '+MAPS[k].label+'</option>'}).join("");sel.value=curMapId;sel.addEventListener("change",function(){choosePhase(sel.value)})}var cards=document.getElementById("mapCards");if(cards){cards.innerHTML=Object.keys(MAPS).map(function(k){return '<button type="button" class="mapCard'+(k===curMapId?" active":"")+'" data-map="'+k+'"><div class="mapIcon">'+MAPS[k].icon+'</div><b>'+MAPS[k].label+'</b><span>'+MAPS[k].subtitle+'</span></button>'}).join("");cards.querySelectorAll(".mapCard").forEach(function(b){b.addEventListener("click",function(){var id=b.dataset.map;if(window.__fpStarted){choosePhase(id);return;}cards.querySelectorAll(".mapCard").forEach(function(x){x.classList.remove("active")});b.classList.add("active");if(sel)sel.value=id;choosePhase(id)})})}})();

/* ===== FramePro V49: configuração TXT realmente aplicada ===== */
;(function(){
 var c=window.FRAMEPRO_CONFIG||{};
 window.__fpShootEnabled=!!c.TIRO_ATIVO;
 window.__fpWeaponVisible=!!c.ARMA_VISIVEL;
 var cb=document.getElementById("optBroker"),cd=document.getElementById("optDog"),cs=document.getElementById("optShoot"),cw=document.getElementById("optWeapon");
 if(cb)cb.checked=!!c.CORRETOR_ATIVO;if(cd)cd.checked=!!c.DOG_ATIVO;if(cs)cs.checked=!!c.TIRO_ATIVO;if(cw)cw.checked=!!c.ARMA_VISIVEL;
})();

/* ===== FramePro — MODO FPS: invasão dos corretores após 40 tiros ===== */
(function(){
  var TRIGGER=5, shots=0, active=false;
  var enemies=[], level=1, kills=0, shotScore=0, tracers=[], dust=[], trophies=[];
  window.__fpsGetLevel=function(){return active?level:1;};window.__fpsForceStop=function(){active=false;for(var i=0;i<enemies.length;i++){try{Pe.remove(enemies[i].grp)}catch(e){}}enemies.length=0;updateHud();};
  var last=performance.now(), spawnAt=0, minuteAt=0;
  var HPMAX=100, hp=HPMAX;
  var hud=null, bar=null, dmg=null;
  var sfx=null;
  function actx(){sfx=sfx||new(window.AudioContext||window.webkitAudioContext)();if(sfx.state==="suspended")sfx.resume();return sfx;}
  function enemyGun(distM){try{var a=actx(),t=a.currentTime,sr=a.sampleRate;var vol=.9*Math.max(0,1-distM/26);if(vol<=.002)return;
    var dur=.3,n=a.createBufferSource(),b=a.createBuffer(1,Math.floor(sr*dur),sr),d=b.getChannelData(0);for(var i=0;i<d.length;i++){var k=i/d.length;d[i]=(Math.random()*2-1)*Math.pow(1-k,2.4);}n.buffer=b;
    var g=a.createGain(),f=a.createBiquadFilter();f.type="lowpass";f.frequency.setValueAtTime(5200,t);f.frequency.exponentialRampToValueAtTime(480,t+.26);
    g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.004);g.gain.exponentialRampToValueAtTime(.001,t+.28);
    n.connect(f).connect(g).connect(a.destination);n.start(t);n.stop(t+dur);
    var bo=a.createOscillator(),bg=a.createGain();bo.type="sine";bo.frequency.setValueAtTime(150,t);bo.frequency.exponentialRampToValueAtTime(52,t+.2);bg.gain.setValueAtTime(.0001,t);bg.gain.exponentialRampToValueAtTime(vol*.8,t+.01);bg.gain.exponentialRampToValueAtTime(.001,t+.24);bo.connect(bg).connect(a.destination);bo.start(t);bo.stop(t+.26);
  }catch(e){}}
  function bootStep(distM){try{var a=actx(),t=a.currentTime;var vol=.22*Math.max(0,1-distM/12);if(vol<=.003)return;var o=a.createOscillator(),g=a.createGain(),f=a.createBiquadFilter();o.type="triangle";o.frequency.value=85+Math.random()*30;f.type="lowpass";f.frequency.value=260;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0005,t+.07);o.connect(f).connect(g).connect(a.destination);o.start(t);o.stop(t+.08);}catch(e){}}

  function eM(c,r,m){return new ne({color:c,roughness:(r==null?.6:r),metalness:(m||0)});}
  var mSuit=eM(2235943,.65),mShirt=eM(14672606,.5),mSkin=eM(14198904,.7),
      mTie=eM(13369344,.5),mHair=eM(2829099,.85),mGun=eM(2236962,.4,.55);
  var mGold=eM(16766279,.28,.95),mGoldD=eM(14329344,.35,.9);

  function doorNear(x,z,extra){if(!doorList||!doorList.length)return null;var best=null,bestD=1e9;extra=extra||.8*At;for(var i=0;i<doorList.length;i++){var d=doorList[i],cx=d.cx*At,cz=d.cz*At,dd=Math.hypot(x-cx,z-cz);if(dd<extra&&dd<bestD){bestD=dd;best=d;}}return best;}
  function forceDoor(d){if(!d)return;d.t=1;d.closed=false;if(d.leaf){var Hx=d.hx*At,Hz=d.hz*At,hl=d.hl*At,ry=d.a0+d.sweep*d.t;d.leaf.rotation.y=ry;d.leaf.position.x=Hx+hl*Math.cos(ry);d.leaf.position.z=Hz-hl*Math.sin(ry);}}
  /* O vão real da porta é sempre atravessável para o corretor.
     Isso evita que as amostras laterais do raio encostem no batente e o façam oscilar. */
  function inDoorPassage(x,z,pad){if(!doorList||!doorList.length)return null;pad=pad==null?.10*At:pad;for(var i=0;i<doorList.length;i++){var d=doorList[i];if(x>d.bminX-pad&&x<d.bmaxX+pad&&z>d.bminZ-pad&&z<d.bmaxZ+pad)return d;}return null;}
  function walkR(x,z){var passage=inDoorPassage(x,z);if(passage){forceDoor(passage);return true;}var r=.095*At;return Nr({x:x,z:z})&&Nr({x:x+r,z:z})&&Nr({x:x-r,z:z})&&Nr({x:x,z:z+r})&&Nr({x:x,z:z-r});}
  function los(x1,z1,x2,z2){var vx=x2-x1,vz=z2-z1,len=Math.hypot(vx,vz),steps=Math.max(2,Math.ceil(len/(.12*At)));for(var i=1;i<steps;i++){var f=i/steps;if(!Nr({x:x1+vx*f,z:z1+vz*f}))return false;}return true;}
  /* nenhum tiro atravessa portas que não estejam totalmente abertas */
  function doorClear(x1,z1,x2,z2){if(!doorList||!doorList.length)return true;var vx=x2-x1,vz=z2-z1,len=Math.hypot(vx,vz),steps=Math.max(2,Math.ceil(len/(.10*At)));for(var i=0;i<doorList.length;i++){var d=doorList[i];if(d.t>=.85)continue;for(var s=0;s<=steps;s++){var f=s/steps,x=x1+vx*f,z=z1+vz*f;if(x>d.bminX&&x<d.bmaxX&&z>d.bminZ&&z<d.bmaxZ)return false;}}return true;}
  /* Navegação inteligente em portas: aproxima, alinha, cruza e só então retoma a perseguição. */
  function nearestDoorWaypoint(x,z,tx,tz){
    if(!doorList||!doorList.length)return null;
    var best=null,bestC=1e9;
    for(var i=0;i<doorList.length;i++){
      var d=doorList[i],cx=d.cx*At,cz=d.cz*At;
      var wx=d.bmaxX-d.bminX,wz=d.bmaxZ-d.bminZ;
      /* menor eixo do retângulo = espessura da parede = direção correta da travessia */
      var nx=wx<wz?1:0,nz=wx<wz?0:1;
      var es=(x-cx)*nx+(z-cz)*nz,ts=(tx-cx)*nx+(tz-cz)*nz;
      var targetSign=ts>=0?1:-1,startSign=es>=0?1:-1;
      /* portas que realmente separam corretor e jogador recebem prioridade */
      var sameSide=startSign===targetSign;
      var enterX=cx+nx*startSign*.58*At,enterZ=cz+nz*startSign*.58*At;
      var exitX=cx+nx*targetSign*.92*At,exitZ=cz+nz*targetSign*.92*At;
      var entryVisible=los(x,z,enterX,enterZ);
      var c=Math.hypot(enterX-x,enterZ-z)+Math.hypot(tx-exitX,tz-exitZ)+(sameSide?3.2*At:0)+(entryVisible?0:5.5*At);
      if(c<bestC){bestC=c;best={x:enterX,z:enterZ,cx:cx,cz:cz,enterX:enterX,enterZ:enterZ,exitX:exitX,exitZ:exitZ,nx:nx,nz:nz,startSign:startSign,targetSign:targetSign,stage:0,door:d};}
    }
    return best;
  }
  function updateDoorWaypoint(en,wp){
    if(!wp)return null;
    forceDoor(wp.door);
    var dc=Math.hypot(en.x-wp.cx,en.z-wp.cz);
    var signed=(en.x-wp.cx)*wp.nx+(en.z-wp.cz)*wp.nz;
    if(wp.stage===0){
      wp.x=wp.enterX;wp.z=wp.enterZ;
      if(Math.hypot(en.x-wp.enterX,en.z-wp.enterZ)<.20*At)wp.stage=1;
    }
    if(wp.stage===1){
      wp.x=wp.cx;wp.z=wp.cz;
      if(dc<.22*At||signed*wp.startSign<.10*At)wp.stage=2;
    }
    if(wp.stage===2){
      wp.x=wp.exitX;wp.z=wp.exitZ;
      if(signed*wp.targetSign>.68*At||Math.hypot(en.x-wp.exitX,en.z-wp.exitZ)<.20*At)return null;
    }
    return wp;
  }
  /* Testa um pequeno corredor à frente, em vez de verificar só o próximo ponto. */
  function fpEnemyLaneClear(x,z,dx,dz,dist){var len=Math.hypot(dx,dz)||1,ux=dx/len,uz=dz/len,steps=Math.max(2,Math.ceil(dist/(.10*At)));for(var i=1;i<=steps;i++){var f=i/steps,px=x+ux*dist*f,pz=z+uz*dist*f;if(inDoorPassage(px,pz,.08*At))continue;if(!walkR(px,pz))return false;}return true;}
  function fpRotate2(x,z,a){var c=Math.cos(a),s=Math.sin(a);return{x:x*c-z*s,z:x*s+z*c};}
  /* Direção local inteligente: analisa várias rotas, prefere avanço real e mantém o lado do contorno. */
  function fpChooseEnemyStep(en,ux,uz,amount){
    var now=performance.now(),usingEscape=en.escapeUntil&&now<en.escapeUntil;
    var goalX=usingEscape?en.escapeX:(en.wp?en.wp.x:Xt.position.x),goalZ=usingEscape?en.escapeZ:(en.wp?en.wp.z:Xt.position.z);
    var direct=fpEnemyLaneClear(en.x,en.z,ux,uz,.34*At);
    if(direct){en.wallSide=0;en.wallSideUntil=0;return{x:ux*amount,z:uz*amount};}
    var angles=[0,.36,-.36,.68,-.68,1.02,-1.02,1.38,-1.38,Math.PI];
    if(en.wallSide&&now<en.wallSideUntil){angles=[0,en.wallSide*.36,en.wallSide*.68,en.wallSide*1.02,en.wallSide*1.38,-en.wallSide*.36,-en.wallSide*.68,Math.PI];}
    var before=Math.hypot(goalX-en.x,goalZ-en.z),best=null,bestScore=-1e9;
    for(var i=0;i<angles.length;i++){
      var a=angles[i],r=fpRotate2(ux,uz,a),nx=en.x+r.x*amount,nz=en.z+r.z*amount;
      if(!walkR(nx,nz))continue;
      var look=fpEnemyLaneClear(en.x,en.z,r.x,r.z,.30*At),after=Math.hypot(goalX-nx,goalZ-nz);
      var progress=before-after,forward=r.x*ux+r.z*uz;
      var score=progress*7/At+forward*1.35-Math.abs(a)*.20+(look?1.1:0);
      if(en.wallSide&&Math.sign(a)===en.wallSide)score+=.34;
      if(score>bestScore){bestScore=score;best={x:r.x*amount,z:r.z*amount,a:a};}
    }
    if(best){if(Math.abs(best.a)>.15){en.wallSide=Math.sign(best.a)||en.wallSide||1;en.wallSideUntil=now+1250;}return{x:best.x,z:best.z};}
    return null;
  }
  /* Quando entra em ciclo vai-e-volta, sorteia uma rota de fuga válida e mantém a decisão por um tempo. */
  function fpPickRandomEscape(en,goalX,goalZ,now){
    var best=null,bestScore=-1e9,base=Math.atan2(goalZ-en.z,goalX-en.x);
    for(var i=0;i<32;i++){
      var spread=(Math.random()*2-1)*Math.PI,ang=(i<8?base+spread*.55:Math.random()*Math.PI*2);
      var dist=(.75+Math.random()*1.85)*At,dx=Math.cos(ang),dz=Math.sin(ang);
      if(!fpEnemyLaneClear(en.x,en.z,dx,dz,Math.min(dist,.72*At)))continue;
      var x=en.x+dx*dist,z=en.z+dz*dist;if(!walkR(x,z))continue;
      var progress=Math.hypot(goalX-en.x,goalZ-en.z)-Math.hypot(goalX-x,goalZ-z);
      var reversal=(en.lastMoveX||en.lastMoveZ)?-(dx*(en.lastMoveX||0)+dz*(en.lastMoveZ||0)):0;
      var score=progress*1.25/At+Math.random()*2.4-reversal*.9;
      if(score>bestScore){bestScore=score;best={x:x,z:z};}
    }
    if(!best){
      for(var j=0;j<20;j++){var a=Math.random()*Math.PI*2,rr=(.45+Math.random()*.8)*At,x2=en.x+Math.cos(a)*rr,z2=en.z+Math.sin(a)*rr;if(walkR(x2,z2)){best={x:x2,z:z2};break;}}
    }
    if(!best)return false;
    en.escapeX=best.x;en.escapeZ=best.z;en.escapeUntil=now+1450+Math.random()*1050;en.escapeStarted=now;en.routeLockUntil=en.escapeUntil;en.escapeAttempts=(en.escapeAttempts||0)+1;
    en.wp=null;en.repathAt=now+en.escapeUntil-now;en.wallSide=(Math.random()<.5?-1:1);en.wallSideUntil=en.escapeUntil;en.badProgressSince=0;en.stuckSince=0;
    return true;
  }
  function step(en,vx,vz){var ox=en.x,oz=en.z,len=Math.hypot(vx,vz),steps=Math.max(1,Math.ceil(len/(.050*At)));for(var i=0;i<steps;i++){var amount=len/steps,vl=Math.hypot(vx,vz)||1,ux=vx/vl,uz=vz/vl,moved=false;var rawX=ux*amount,rawZ=uz*amount,nx=en.x+rawX,nz=en.z+rawZ;var currentDoor=inDoorPassage(en.x,en.z,.18*At),nextDoor=inDoorPassage(nx,nz,.12*At),dn=currentDoor||nextDoor||doorNear(en.x,en.z,1.0*At);if(dn)forceDoor(dn);
      /* No vão segue o eixo planejado; fora dele escolhe apenas uma direção com corredor livre. */
      if(currentDoor||nextDoor){en.x=nx;en.z=nz;moved=true;}
      else{var chosen=fpChooseEnemyStep(en,ux,uz,amount);if(chosen&&walkR(en.x+chosen.x,en.z+chosen.z)){en.x+=chosen.x;en.z+=chosen.z;moved=true;}}
      if(!moved)break;}return Math.hypot(en.x-ox,en.z-oz);}
  function doorUnstick(en,tx,tz,now){var d=doorNear(en.x,en.z,1.45*At)||doorNear(tx,tz,1.1*At);if(!d)return false;forceDoor(d);var cx=d.cx*At,cz=d.cz*At,vx=tx-cx,vz=tz-cz,vl=Math.hypot(vx,vz)||1,px=-vz/vl,pz=vx/vl;var cand=[[cx,cz],[cx+vx/vl*.72*At,cz+vz/vl*.72*At],[cx-vx/vl*.58*At,cz-vz/vl*.58*At],[cx+px*.28*At,cz+pz*.28*At],[cx-px*.28*At,cz-pz*.28*At],[cx+vx/vl*1.08*At,cz+vz/vl*1.08*At]];for(var i=0;i<cand.length;i++){var x=cand[i][0],z=cand[i][1];if(Math.hypot(x-Xt.position.x,z-Xt.position.z)<1.05*At)continue;if(walkR(x,z)||Nr({x:x,z:z})){en.x=x;en.z=z;en.wp={x:cx+vx/vl*1.15*At,z:cz+vz/vl*1.15*At,door:d};en.repathAt=now+260;en.stuck=0;en.stuckSince=0;en.badProgressSince=0;return true;}}return false;}
  function spot(){for(var i=0;i<180;i++){var x=(curBounds.minX+Math.random()*(curBounds.maxX-curBounds.minX))*At,z=(curBounds.minZ+Math.random()*(curBounds.maxZ-curBounds.minZ))*At;if(walkR(x,z)&&Math.hypot(x-Xt.position.x,z-Xt.position.z)>4*At)return{x:x,z:z};}return null;}

  function limb(g,px,py,pz,w,h,d,mat){var p=new Rn();p.position.set(px,py,pz);var m=new de(new ti(w,h,d),mat);m.position.set(0,-h/2,0);m.castShadow=true;p.add(m);g.add(p);return p;}
  function buildEnemy(){
    var g=new Rn();
    function part(w,h,d,y,mat,oz){var m=new de(new ti(w,h,d),mat);m.position.set(0,y,oz||0);m.castShadow=true;m.receiveShadow=true;g.add(m);return m;}
    var torso=new Rn();g.add(torso);
    function tpart(w,h,d,y,mat,oz){var m=new de(new ti(w,h,d),mat);m.position.set(0,y,oz||0);m.castShadow=true;torso.add(m);return m;}
    tpart(.46,.60,.26,1.05,mSuit);
    tpart(.15,.46,.05,1.10,mShirt,.12);
    tpart(.06,.30,.03,1.02,mTie,.145);
    part(.22,.26,.22,1.60,mSkin);
    part(.26,.10,.26,1.76,mHair);
    var legL=limb(g,-.11,.82,0,.16,.74,.18,mSuit);
    var legR=limb(g,.11,.82,0,.16,.74,.18,mSuit);
    var shoeL=new de(new ti(.19,.10,.26),mHair);shoeL.position.set(0,-.74,.05);shoeL.castShadow=true;legL.add(shoeL);
    var shoeR=new de(new ti(.19,.10,.26),mHair);shoeR.position.set(0,-.74,.05);shoeR.castShadow=true;legR.add(shoeR);
    var armL=limb(g,-.31,1.30,0,.12,.5,.14,mSuit);
    var armR=limb(g,.31,1.30,0,.12,.5,.14,mSuit);armR.rotation.x=-1.35;
    var gun=new de(new ti(.07,.11,.30),mGun);gun.position.set(0,-.5,-.13);gun.castShadow=true;armR.add(gun);
    var flash=new de(new ti(.12,.12,.12),new ne({color:16766541,emissive:16755029,emissiveIntensity:2.6}));flash.position.set(0,-.5,-.36);flash.visible=false;armR.add(flash);
    Pe.add(g);
    return {grp:g,torso:torso,legL:legL,legR:legR,armL:armL,armR:armR,flash:flash,flashUntil:0,x:0,z:0,yaw:0,hp:2,phase:Math.random()*6,nextShot:performance.now()+900+Math.random()*800,nextStep:0,dead:false,fallUntil:0,wp:null,repathAt:0,wallSide:0,wallSideUntil:0,escapeX:0,escapeZ:0,escapeUntil:0,escapeStarted:0,escapeAttempts:0,routeLockUntil:0,lastMoveX:0,lastMoveZ:0,flipCount:0,flipWindowUntil:0};
  }

  function tracer(a,b){window.__fpLastChaosShot=performance.now();var len=a.distanceTo(b);if(len<.05)return;var gg=new ti(.02,.02,len),mat=new ne({color:16755029,emissive:16733525,emissiveIntensity:3,transparent:true,opacity:.9});var t=new de(gg,mat);t.position.set((a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2);t.lookAt(b);Pe.add(t);tracers.push({m:t,mat:mat,until:performance.now()+90});}
  function updateTracers(now){for(var i=tracers.length-1;i>=0;i--){var tr=tracers[i],left=tr.until-now;if(left<=0){Pe.remove(tr.m);if(tr.m.geometry.dispose)tr.m.geometry.dispose();tracers.splice(i,1);continue;}tr.mat.opacity=Math.max(0,left/90)*.9;}}

  function flashDamage(){if(!dmg)return;dmg.classList.remove("on");void dmg.offsetWidth;dmg.classList.add("on");setTimeout(function(){dmg&&dmg.classList.remove("on");},130);}
  function damage(amount){
    hp=Math.max(0,hp-amount);updateHud();flashDamage();
    if(hp<=0){hp=HPMAX;updateHud();if(typeof window.__fpLoseLife==="function")window.__fpLoseLife("\uD83D\uDD2B Os corretores te derrubaram!");}
  }
   function enemyFire(en,now){
     var gx=en.x,gy=1.16,gz=en.z;
     if(en.flash){en.flash.visible=true;en.flashUntil=now+60;}
     var d=Math.hypot(Xt.position.x-gx,Xt.position.z-gz)/At;
     enemyGun(d);
     var chance=Math.min(.8,.26+level*.045)*Math.max(.22,1-d/16);
     if(Math.random()<chance){
       tracer(new I(gx,gy,gz),new I(Xt.position.x,Xt.position.y-.1,Xt.position.z));
       damage(5+level*1.4);
     }else{
       var tx=Xt.position.x-gx,ty=(Xt.position.y-.1)-gy,tz=Xt.position.z-gz,tl=Math.hypot(tx,ty,tz)||1;
       var sp=.05+Math.random()*.1;
       var dir=new I(tx/tl+(Math.random()-.5)*sp,ty/tl+(Math.random()-.5)*sp*.5,tz/tl+(Math.random()-.5)*sp);dir.normalize();
       var end=(typeof window.__fpEnemyImpact==="function")?window.__fpEnemyImpact(new I(gx,gy,gz),dir,60):null;
       if(!end)end=new I(gx+dir.x*30,gy+dir.y*30,gz+dir.z*30);
       tracer(new I(gx,gy,gz),end);
     }
     en.nextShot=now+Math.max(480,1500-level*85)+Math.random()*450;
   }

   window.__fpsTryShoot=function(origin,dir,maxDist){
     if(!active)return null;var best=null,bestT=1e9,bestHead=false,limit=maxDist+.35;
     for(var i=0;i<enemies.length;i++){var en=enemies[i];if(en.dead)continue;var parts=[{y:1.64,r:.18,head:true},{y:1.12,r:.30},{y:.62,r:.24}];for(var h=0;h<parts.length;h++){var q=parts[h],px=en.x-origin.x,py=q.y-origin.y,pz=en.z-origin.z,t=px*dir.x+py*dir.y+pz*dir.z;if(t<=0||t>limit||t>=bestT)continue;var cx=px-dir.x*t,cy=py-dir.y*t,cz=pz-dir.z*t;if(Math.hypot(cx,cy,cz)<=q.r){bestT=t;best=en;bestHead=!!q.head}}}
     if(!best)return null;if(bestHead){best.hp=0;try{if(typeof showErrFlash==='function')showErrFlash('💀 HEADSHOT')}catch(e){}}else best.hp--;if(best.hp<=0)killEnemy(best);return new I(best.x,bestHead?1.64:1.12,best.z);
   };
  function killEnemy(en){if(en.dead)return;en.dead=true;kills++;if(en.flash)en.flash.visible=false;var now=performance.now();en.deathStart=now;en.deathX=en.x;en.deathZ=en.z;en.deathYaw=en.yaw;en.dusted=false;en.photographed=false;en.dustAt=now+2600;en.fallUntil=now+4200;try{if(typeof window.__onEnemyKilled==="function")window.__onEnemyKilled(level);}catch(e){}try{if(typeof showErrFlash==="function"&&kills%5===0)showErrFlash("\uD83C\uDFC6 "+kills+" ABATIDOS");}catch(e){}updateHud();}
  function updateDeath(en,now){var g=en.grp;if(!g)return;if(en.dusted)return;if(now>=en.dustAt){en.dusted=true;snapDust(en.deathX,en.deathZ);g.visible=false;return;}var t=now-en.deathStart;var es=function(x){x=x<0?0:(x>1?1:x);return 1-Math.pow(1-x,3);};var sit=es(t/85),lie=es(t/200);if(en.legL)en.legL.rotation.x=-1.5*sit*(1-lie);if(en.legR)en.legR.rotation.x=-1.5*sit*(1-lie);if(en.armR)en.armR.rotation.x=-1.35*(1-sit)-0.15*sit;if(en.armL)en.armL.rotation.x=0.2*sit;if(en.torso)en.torso.rotation.x=0.5*sit*(1-lie)-0.12*lie;g.position.set(en.deathX,0,en.deathZ);g.rotation.y=en.deathYaw;g.rotation.x=-(Math.PI*0.5)*lie;g.rotation.z=(t<240)?Math.sin(t/55)*0.05*(1-lie):0;}
  window.__fpsScoreDowned=function(){if(!active)return 0;var pts=0,now=performance.now();for(var i=0;i<enemies.length;i++){var en=enemies[i];if(!en.dead||en.dusted||en.photographed)continue;var dx=en.deathX-Xt.position.x,dz=en.deathZ-Xt.position.z;if(Math.hypot(dx,dz)>9*At)continue;var vis=false,hs=[0.2,0.45];for(var h=0;h<hs.length;h++){var pr=v8Project(en.deathX,hs[h],en.deathZ);if(pr.ok&&pr.x>=Me.w*0.14&&pr.x<=Me.w*0.86&&pr.y>=Me.h*0.08&&pr.y<=Me.h*0.99){vis=true;break;}}if(!vis)continue;if(!los(en.deathX,en.deathZ,Xt.position.x,Xt.position.z))continue;en.photographed=true;pts+=250;shotScore+=250;en.dustAt=Math.min(en.dustAt,now+600);en.fallUntil=en.dustAt+1400;}if(pts>0)updateHud();return pts;};
  function snapDust(x,z){
    var now=performance.now();
    for(var i=0;i<32;i++){
      var s=(.05+Math.random()*.10);
      var mat=new ne({color:(Math.random()<.5?7237230:5197647),transparent:true,opacity:1,roughness:.95});
      var m=new de(new ti(s,s,s),mat);
      m.position.set(x+(Math.random()-.5)*.42,.25+Math.random()*1.65,z+(Math.random()-.5)*.42);
      m.castShadow=false;Pe.add(m);
      var ang=Math.random()*6.283,rad=.5+Math.random()*.8;
      dust.push({m:m,mat:mat,vx:Math.cos(ang)*rad,vy:.5+Math.random()*1.3,vz:Math.sin(ang)*rad,rx:(Math.random()-.5)*8,ry:(Math.random()-.5)*8,born:now,dur:850+Math.random()*750});
    }
  }
  function rescueSpot(en,tx,tz){var best=null,bestScore=1e9,minPlayer=2.35*At;function consider(x,z,score){if(!walkR(x,z))return;if(Math.hypot(x-Xt.position.x,z-Xt.position.z)<minPlayer)return;if(score<bestScore){bestScore=score;best={x:x,z:z};}}if(doorList&&doorList.length){for(var i=0;i<doorList.length;i++){var d=doorList[i],cx=d.cx*At,cz=d.cz*At,toTarget=Math.hypot(tx-cx,tz-cz),toEnemy=Math.hypot(en.x-cx,en.z-cz),base=toEnemy*.72+toTarget*.55;var vx=tx-cx,vz=tz-cz,vl=Math.hypot(vx,vz)||1;consider(cx+vx/vl*1.12*At,cz+vz/vl*1.12*At,base-.22*At);consider(cx-vx/vl*.9*At,cz-vz/vl*.9*At,base+.16*At);for(var r=0;r<3;r++){var rr=[.72,1.02,1.34][r]*At;for(var a=0;a<8;a++){var ang=a*Math.PI/4;consider(cx+Math.cos(ang)*rr,cz+Math.sin(ang)*rr,base+rr*.18);}}}}for(var j=0;j<36;j++){var ang2=Math.random()*6.283,rr2=(.8+Math.random()*2.2)*At;consider(en.x+Math.cos(ang2)*rr2,en.z+Math.sin(ang2)*rr2,8*At+rr2);}if(best)return best;return spot();}
  function startThanosTeleport(en,tx,tz,now){if(en.vanishing)return;var s=rescueSpot(en,tx,tz);if(!s)return;snapDust(en.x,en.z);en.vanishing=true;en.vanishUntil=now+340;en.teleX=s.x;en.teleZ=s.z;en.stuck=0;en.stuckSince=0;en.wp=null;en.repathAt=0;if(en.grp)en.grp.visible=false;}
  function spawnTrophy(x,z){
    var g=new Rn();
    function pc(w,h,d,y,mat,ox){var m=new de(new ti(w,h,d),mat||mGold);m.position.set(ox||0,y,0);m.castShadow=true;g.add(m);return m;}
    pc(.34,.08,.34,.04,mGoldD);
    pc(.24,.07,.24,.115,mGoldD);
    pc(.07,.20,.07,.25);
    pc(.34,.24,.34,.47);
    pc(.34,.10,.20,.63);
    var hL=pc(.05,.20,.06,.47,mGold,-.215);hL.rotation.z=.55;
    var hR=pc(.05,.20,.06,.47,mGold,.215);hR.rotation.z=-.55;
    g.position.set(x,0,z);g.scale.setScalar(.001);Pe.add(g);
    trophies.push({grp:g,born:performance.now()});
  }
  function easeBack(t){var c=1.7;return 1+(c+1)*Math.pow(t-1,3)+c*Math.pow(t-1,2);}
  function updateDust(now,dt){
    for(var i=dust.length-1;i>=0;i--){var d=dust[i],t=(now-d.born)/d.dur;
      if(t>=1){Pe.remove(d.m);if(d.m.geometry.dispose)d.m.geometry.dispose();dust.splice(i,1);continue;}
      d.m.position.x+=d.vx*dt;d.m.position.y+=d.vy*dt;d.m.position.z+=d.vz*dt;d.vy-=.6*dt;
      d.m.rotation.x+=d.rx*dt;d.m.rotation.y+=d.ry*dt;
      d.mat.opacity=Math.max(0,1-t);d.m.scale.setScalar(Math.max(.02,1-t*.85));
    }
  }
  function updateTrophies(now){
    for(var i=0;i<trophies.length;i++){var tr=trophies[i],e=(now-tr.born)/520,s=e<1?Math.max(.001,easeBack(e)):1;
      tr.grp.scale.setScalar(s);tr.grp.rotation.y=(now-tr.born)/1400;tr.grp.position.y=e>=1?(Math.sin((now-tr.born)/520)*.05+.05):0;
    }
  }

  function buildHud(){
    var css=document.createElement("style");
    css.textContent="#fpsHud{position:absolute;left:50%;top:150px;transform:translateX(-50%);z-index:46;display:none;flex-direction:column;align-items:center;gap:6px;font-family:system-ui;pointer-events:none}"
      +"#fpsHud.on{display:flex}"
      +"#fpsHud .row{display:flex;gap:16px;font-weight:800;font-size:14px;color:#ffdada;text-shadow:0 2px 6px rgba(0,0,0,.85)}"
      +"#fpsHud .row b{color:#ff5b5b}"
      +"#fpsBar{width:250px;height:14px;border-radius:8px;background:rgba(0,0,0,.55);border:1px solid rgba(255,255,255,.2);overflow:hidden}"
      +"#fpsBar>i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#ff3b3b,#ff9a3b);transition:width .15s}"
      +"#fpsDmg{position:absolute;inset:0;z-index:44;pointer-events:none;background:radial-gradient(circle at center,transparent 42%,rgba(210,0,0,.6));opacity:0;transition:opacity .12s}"
      +"#fpsDmg.on{opacity:1}";
    document.head.appendChild(css);
    var mount=document.getElementById("ui")||document.getElementById("gameShell")||document.body;
    hud=document.createElement("div");hud.id="fpsHud";
    hud.innerHTML='<div class="row"><span>N\u00CDVEL <b id="fpsLvl">1</b></span><span>ABATIDOS <b id="fpsKills">0</b></span><span>CORRETORES <b id="fpsCount">0</b></span><span>PONTOS <b id="fpsScore">0</b></span></div><div id="fpsBar"><i></i></div>';
    mount.appendChild(hud);
    bar=hud.querySelector("#fpsBar>i");
    dmg=document.createElement("div");dmg.id="fpsDmg";mount.appendChild(dmg);
  }
  function updateHud(){if(!hud)return;hud.classList.toggle("on",active);if(bar)bar.style.width=(hp/HPMAX*100)+"%";var a=0;for(var i=0;i<enemies.length;i++)if(!enemies[i].dead)a++;var L=document.getElementById("fpsLvl"),K=document.getElementById("fpsKills"),C=document.getElementById("fpsCount");if(L)L.textContent=level;if(K)K.textContent=kills;if(C)C.textContent=a;var S=document.getElementById("fpsScore");if(S)S.textContent=shotScore;}

  window.__onPlayerShot=function(){};
  window.__fpResetBrokerInvasionCounter=function(){shots=0;};
  window.__onDownedBrokerShot=function(){
    if(active||window.__fpGameDead)return;
    shots=Math.min(TRIGGER,shots+1);
    try{if(typeof Gi==='function')Gi('⚠️ Corretor caído: '+shots+'/5 tiros para iniciar a invasão.')}catch(e){}
    if(shots>=TRIGGER)activate();
  };
  window.__fpsForceStart=function(){shots=TRIGGER;activate();};
  function activate(){
    if(active||window.__fpGameDead)return;
    window.__fpGameEnded=false;active=true;shots=0;level=1;kills=0;hp=HPMAX;
    minuteAt=performance.now()+60000;spawnAt=performance.now()+700;
    updateHud();
    try{if(typeof showErrFlash==="function")showErrFlash("\uD83D\uDD25 INVAS\u00C3O DOS CORRETORES");}catch(e){}
    if(typeof Gi==="function")Gi("5 tiros no corretor caído! Os corretores invadiram \u2014 sobreviva! Bot\u00E3o direito atira, WASD corre.");
  }

  function tick(now){
    requestAnimationFrame(tick);
    var dt=Math.min((now-last)/1000,.05);last=now;
    updateTracers(now);updateDust(now,dt);updateTrophies(now);
    if(!active)return;
    for(var i=enemies.length-1;i>=0;i--){var e=enemies[i];if(e.flash&&e.flash.visible&&now>e.flashUntil)e.flash.visible=false;if(e.dead){updateDeath(e,now);if(now>e.fallUntil){Pe.remove(e.grp);enemies.splice(i,1);}}}
    if(!Xi)return;
    if(now>minuteAt){
      if(level>=10){fpsWin();return;}
      level++;minuteAt=now+60000;
      try{if(typeof showErrFlash==="function")showErrFlash(level>=10?"\uD83D\uDC80 N\u00CDVEL FINAL 10 \u2014 SOBREVIVA 1 MIN!":"\u26A0\uFE0F N\u00CDVEL "+level);}catch(e){}
      updateHud();
    }
    var alive=0;for(var k=0;k<enemies.length;k++)if(!enemies[k].dead)alive++;
    var cap=(level>=10?12:Math.min(10,2+level));
    if(alive<cap&&now>spawnAt){var s=spot();if(s){var en=buildEnemy();en.x=s.x;en.z=s.z;en.hp=(level>=10?10:2+Math.floor(level/2));en.grp.position.set(s.x,0,s.z);enemies.push(en);}spawnAt=now+(level>=10?620:Math.max(780,2800-level*150));}
    var px=Xt.position.x,pz=Xt.position.z;
    for(var j=0;j<enemies.length;j++){var en=enemies[j];if(en.dead)continue;
      if(en.vanishing){if(now>=en.vanishUntil){en.x=en.teleX;en.z=en.teleZ;en.vanishing=false;en.badProgressSince=0;if(en.grp)en.grp.visible=true;snapDust(en.x,en.z);en.nextShot=now+650+Math.random()*500;}else{continue;}}
      var pdist=Math.hypot(px-en.x,pz-en.z)||1;
      var directClear=los(en.x,en.z,px,pz);
      var vis=directClear&&doorClear(en.x,en.z,px,pz);
      /* IA: se não enxerga o alvo direto, ruma para a porta do caminho mais curto */
      var tx=px,tz=pz;
      if(en.escapeUntil&&now<en.escapeUntil){
        tx=en.escapeX;tz=en.escapeZ;
        if(Math.hypot(tx-en.x,tz-en.z)<.18*At){en.escapeUntil=0;en.escapeAttempts=0;}
      }
      if(!(en.escapeUntil&&now<en.escapeUntil)&&!directClear){
        if(now>en.repathAt||!en.wp){en.wp=nearestDoorWaypoint(en.x,en.z,px,pz);en.repathAt=now+900;}
        if(en.wp){en.wp=updateDoorWaypoint(en,en.wp);if(en.wp){tx=en.wp.x;tz=en.wp.z;}}
      }else if(!(en.escapeUntil&&now<en.escapeUntil)&&!inDoorPassage(en.x,en.z,.34*At)){en.wp=null;}
      var ax=tx-en.x,az=tz-en.z,tdist=Math.hypot(ax,az)||1;
      var moving=false;
      /* separação: empurra inimigos que estão colados uns nos outros */
      var sepx=0,sepz=0,minD=.66*At;
      for(var s2=0;s2<enemies.length;s2++){if(s2===j||Math.abs(s2-j)>8)continue;var o=enemies[s2];if(o.dead)continue;var ox=en.x-o.x,oz=en.z-o.z,od=Math.hypot(ox,oz);if(od>1e-3&&od<minD){var pf=(minD-od)/minD;sepx+=ox/od*pf;sepz+=oz/od*pf;}}
      /* aproxima quando longe OU quando ainda não tem tiro limpo; mantém distância de combate se já enxerga */
      var dirx=0,dirz=0;
      if(pdist>4.2*At||!vis){dirx=ax/tdist;dirz=az/tdist;}
      var doorMode=!!(en.wp||inDoorPassage(en.x,en.z,.42*At));
      if(!doorMode){dirx+=sepx*1.5;dirz+=sepz*1.5;}
      var dl=Math.hypot(dirx,dirz);
      if(dl>1e-3){var sp=(2.1+level*.07)*At*dt*(doorMode?.62:1),bx=en.x,bz=en.z,goalBefore=Math.hypot(tx-en.x,tz-en.z);var prevX=en.x,prevZ=en.z,oldMoveX=en.lastMoveX||0,oldMoveZ=en.lastMoveZ||0,movedDist=step(en,dirx/dl*sp,dirz/dl*sp);moving=movedDist>.012*At;if(moving){var ml=Math.hypot(en.x-prevX,en.z-prevZ)||1,newMoveX=(en.x-prevX)/ml,newMoveZ=(en.z-prevZ)/ml,turnDot=oldMoveX*newMoveX+oldMoveZ*newMoveZ;if(turnDot<-.58){if(now>(en.flipWindowUntil||0)){en.flipCount=0;en.flipWindowUntil=now+1400;}en.flipCount=(en.flipCount||0)+1;}else if(turnDot>.15){en.flipCount=Math.max(0,(en.flipCount||0)-1);}en.lastMoveX=newMoveX;en.lastMoveZ=newMoveZ;var targetYaw=Math.atan2(newMoveX,newMoveZ),yawDelta=Math.atan2(Math.sin(targetYaw-en.yaw),Math.cos(targetYaw-en.yaw));en.yaw+=yawDelta*Math.min(1,dt*11);if(en.flipCount>=3&&!doorMode&&(!en.escapeUntil||now>=en.escapeUntil)){fpPickRandomEscape(en,px,pz,now);en.flipCount=0;}}var goalAfter=Math.hypot(tx-en.x,tz-en.z);if(moving&&goalAfter>=goalBefore-.006*At){if(!en.badProgressSince)en.badProgressSince=now;}else if(moving){en.badProgressSince=0;}if(en.badProgressSince&&now-en.badProgressSince>760){if(inDoorPassage(en.x,en.z,.28*At)){en.badProgressSince=0;}else if(fpPickRandomEscape(en,px,pz,now)){moving=true;en.badProgressSince=0;}else if((en.escapeAttempts||0)>5&&doorUnstick(en,px,pz,now)){moving=true;en.badProgressSince=0;}else if((en.escapeAttempts||0)>7){startThanosTeleport(en,px,pz,now);continue;}}
        /* destravar: se quis mover e não conseguiu (porta/parede), primeiro contorna, depois vira farelo e teleporta */
        if(!moving){en.stuck=(en.stuck||0)+1;if(!en.stuckSince)en.stuckSince=now;
          if(doorMode){
            /* Em porta, nunca dança para os lados: abre, espera um instante e recalcula o alinhamento. */
            if(en.wp)forceDoor(en.wp.door);
            if(now-en.stuckSince>320){en.wp=null;en.repathAt=0;en.stuckSince=now;}
            if(now-en.stuckSince>850){en.wp=null;en.repathAt=0;fpPickRandomEscape(en,px,pz,now);}
          }else{
            /* Nada de esquerda-direita alternado: sorteia uma rota válida e se compromete com ela. */
            if(!en.escapeUntil||now>=en.escapeUntil||now-en.stuckSince>420)fpPickRandomEscape(en,px,pz,now);
            if(en.escapeUntil&&now<en.escapeUntil){var ex=en.escapeX-en.x,ez=en.escapeZ-en.z,el=Math.hypot(ex,ez)||1;var escaped=step(en,ex/el*sp,ez/el*sp);moving=escaped>.01*At;}
            if(!moving&&now-en.stuckSince>900){en.escapeUntil=0;fpPickRandomEscape(en,px,pz,now);}
            if(!moving&&now-en.stuckSince>2600&&(en.escapeAttempts||0)>6){startThanosTeleport(en,px,pz,now);continue;}
          }
        }else{en.stuck=0;en.stuckSince=0;}
      }
      if(!moving&&vis){var aimYaw=Math.atan2(px-en.x,pz-en.z),aimDelta=Math.atan2(Math.sin(aimYaw-en.yaw),Math.cos(aimYaw-en.yaw));en.yaw+=aimDelta*Math.min(1,dt*7);}
      en.phase+=dt*(moving?12:3);
      if(moving&&now>en.nextStep){bootStep(pdist/At);en.nextStep=now+300;}
      if(vis&&pdist<18*At&&now>en.nextShot)enemyFire(en,now);
      var run=moving?1:0;
      en.grp.position.set(en.x,Math.abs(Math.sin(en.phase))*.045*run,en.z);en.grp.rotation.y=en.yaw;
      var sw=Math.sin(en.phase)*(.9*run+.05);
      if(en.legL){en.legL.rotation.x=sw;en.legR.rotation.x=-sw;}
      if(en.armL)en.armL.rotation.x=-sw*.8;
      if(en.armR)en.armR.rotation.x=-1.35+Math.sin(en.phase*2)*.05*run;
      if(en.torso){en.torso.rotation.x=run*.16;en.torso.position.y=Math.abs(Math.sin(en.phase*2))*.02*run;}
    }
    updateHud();
  }

  var _load=loadMap;loadMap=function(id){_load(id);for(var i=0;i<enemies.length;i++)Pe.remove(enemies[i].grp);enemies=[];for(var d=0;d<dust.length;d++)Pe.remove(dust[d].m);dust=[];for(var t=0;t<trophies.length;t++)Pe.remove(trophies[t].grp);trophies=[];updateHud();};

  window.__fpsGetEnemies=function(){return active?enemies:[];};
  window.__spawnWinTrophy=function(){var fx=-Math.sin(rn),fz=-Math.cos(rn);spawnTrophy(Xt.position.x+fx*2,Xt.position.z+fz*2);};
  function fpsWin(){active=false;updateHud();try{if(typeof window.__winFps==="function")window.__winFps();}catch(e){}}
  buildHud();requestAnimationFrame(tick);
})();

})();

/* ===== FramePro — Sistema de 10 vidas + YOU DIE ===== */
;(function(){
  var MAX=10, lives=MAX, dead=false;
  var css=document.createElement("style");
  css.textContent=""
    +"#lifeHud{position:absolute;left:50%;top:100px;transform:translateX(-50%);z-index:45;display:flex;gap:5px;padding:8px 14px;border-radius:14px;background:rgba(8,12,18,.72);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(8px);pointer-events:none}"
    +"#lifeHud .hp{font-size:19px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.6));transition:.2s}"
    +"#lifeHud .hp.off{opacity:.22;filter:grayscale(1)}"
    +"#lifeHud.hit{animation:lifeHit .35s}"
    +"@keyframes lifeHit{0%{transform:translateX(-50%) scale(1)}30%{transform:translateX(-50%) scale(1.12)}100%{transform:translateX(-50%) scale(1)}}"
    +"#dieScreen{position:absolute;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;flex-direction:column;background:radial-gradient(circle at center,rgba(60,0,0,.55),rgba(0,0,0,.94));pointer-events:auto}"
    +"#dieScreen.show{display:flex;animation:dieFade .5s ease-out}"
    +"@keyframes dieFade{from{opacity:0}to{opacity:1}}"
    +"#dieScreen h1{font-family:Impact,Haettenschweiler,Arial Black,sans-serif;font-size:clamp(64px,15vw,180px);letter-spacing:.04em;color:#ff2020;margin:0;text-shadow:0 0 30px rgba(255,0,0,.75),0 6px 30px rgba(0,0,0,.9);animation:dieShake .45s ease-in-out 3}"
    +"@keyframes dieShake{0%,100%{transform:translate(0,0) rotate(0)}20%{transform:translate(-6px,3px) rotate(-1.2deg)}40%{transform:translate(6px,-3px) rotate(1.2deg)}60%{transform:translate(-4px,2px) rotate(-.8deg)}80%{transform:translate(4px,-2px) rotate(.8deg)}}"
    +"#dieScreen p{color:#f3c9c9;font-size:15px;margin:14px 0 22px}"
    +"#dieScreen button{border:0;background:linear-gradient(135deg,#ff5b5b,#c81e1e);color:#fff;font-weight:800;font-size:16px;padding:14px 26px;border-radius:14px;cursor:pointer;box-shadow:0 10px 30px rgba(200,30,30,.45)}"
    +"#dieScreen button:hover{transform:translateY(-1px)}";
  document.head.appendChild(css);

  var hud=document.createElement("div");hud.id="lifeHud";
  var mount=document.getElementById("ui")||document.getElementById("gameShell")||document.body;
  mount.appendChild(hud);
  var die=document.createElement("div");die.id="dieScreen";
  die.innerHTML='<h1>YOU DIE</h1><p>Voc\u00EA perdeu todas as suas vidas.</p><button id="dieRetry">Tentar de novo</button>';
  mount.appendChild(die);
  die.querySelector("#dieRetry").addEventListener("click",function(){location.reload();});

  function render(){
    var h="";for(var i=0;i<MAX;i++){h+='<span class="hp'+(i<lives?"":" off")+'">\u2764\uFE0F</span>';}
    hud.innerHTML=h;
    hud.dataset.lives=String(lives);hud.dataset.maxLives=String(MAX);
    var mobileHearts=document.getElementById("fpMHearts");
    if(mobileHearts){var mh="";for(var j=0;j<MAX;j++)mh+='<span class="fpMobileHeart'+(j<lives?"":" off")+'">❤️</span>';mobileHearts.innerHTML=mh;}
    try{window.dispatchEvent(new CustomEvent("framepro-lives-change",{detail:{lives:lives,max:MAX}}));}catch(e){}
  }
  render();

  window.__fpResetLives=function(){lives=MAX;dead=false;window.__fpGameDead=false;window.__fpGameEnded=false;render();die.classList.remove("show");};

  window.__fpLoseLife=function(msg){
    if(dead)return;
    lives=Math.max(0,lives-1);
    render();
    hud.classList.remove("hit");void hud.offsetWidth;hud.classList.add("hit");
    if(typeof Gi==="function"&&msg)Gi(msg+"  \u2022  \u2764\uFE0F "+lives+"/"+MAX);
    if(lives<=0)gameOver();
  };

  function gameOver(){
    if(dead)return;
    dead=true;window.__fpGameDead=true;window.__fpGameEnded=true;
    try{Object.keys(Ce||{}).forEach(function(k){Ce[k]=false;});}catch(e){}
    try{if(typeof window.__dogSetEnabled==="function")window.__dogSetEnabled(false);}catch(e){}
    try{if(typeof window.__fpsForceStop==="function")window.__fpsForceStop();}catch(e){}
    try{document.exitPointerLock&&document.exitPointerLock();}catch(e){}
    try{window.dispatchEvent(new Event("blur"));}catch(e){}

    /* Jumpscare do corretor: aparece e grita antes da tela final. */
    try{
      if(typeof window.__fpBrokerScare==="function"){
        window.__fpBrokerScare();
        Xi=true; /* mantém a cena renderizando durante o susto */
      }
    }catch(e){}

    setTimeout(function(){
      try{Xi=false;window.__fpStarted=false;Object.keys(Ce||{}).forEach(function(k){Ce[k]=false;});}catch(e){}
      die.classList.add("show");
    },950);
  }

  var sb=document.getElementById("startBtn");
  if(sb)sb.addEventListener("click",function(){window.__fpResetLives();});
})();


/* Bloqueio absoluto após a morte: nenhuma ação atravessa a tela de game over. */
(function(){
  var evs=["keydown","keyup","mousedown","mouseup","pointerdown","pointermove","pointerup","touchstart","touchmove","touchend","wheel"];
  evs.forEach(function(type){document.addEventListener(type,function(e){if(!window.__fpGameDead)return;var t=e.target;if(t&&t.closest&&t.closest("#dieScreen"))return;e.preventDefault();e.stopImmediatePropagation();},true);});
})();
/* ===== FramePro — Pontuação (fotos + FPS), VITÓRIA e RECORDS estilo fliperama ===== */
;(function(){
  var photoScore=0, fpsScore=0, photoCount=0, killCount=0, won=false;
  var RKEY="framepro_records_v1";

  /* ---- estilos ---- */
  var css=document.createElement("style");
  css.textContent=""
    +"#scoreHud{position:absolute;left:50%;top:210px;transform:translateX(-50%);z-index:30;display:flex;gap:8px;font:800 12px system-ui;pointer-events:none}"
    +"#scoreHud .sc{padding:6px 11px;border-radius:11px;background:rgba(8,12,18,.72);border:1px solid rgba(255,255,255,.14);color:#eef6ff;backdrop-filter:blur(6px);box-shadow:0 6px 18px rgba(0,0,0,.35);transition:transform .15s}"
    +"#scoreHud .sc.bump{transform:scale(1.16)}"
    +"#scoreHud .sc b{color:#56d6ff}#scoreHud .sc.total b{color:#ffd447}"
    +"#winScreen{position:absolute;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;flex-direction:column;background:radial-gradient(circle at 50% 35%,rgba(30,45,20,.55),rgba(3,7,12,.96));pointer-events:auto;text-align:center;padding:20px}"
    +"#winScreen.show{display:flex;animation:winFade .5s ease-out}"
    +"@keyframes winFade{from{opacity:0}to{opacity:1}}"
    +"#winScreen h1{font-family:Impact,Haettenschweiler,Arial Black,sans-serif;font-size:clamp(52px,12vw,150px);letter-spacing:.03em;margin:0;line-height:.95;background:linear-gradient(180deg,#fff2b0,#ffcf33 55%,#e88f0a);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:0 6px 30px rgba(0,0,0,.6);animation:winPop .6s cubic-bezier(.2,1.4,.4,1)}"
    +"@keyframes winPop{0%{transform:scale(.4);opacity:0}100%{transform:scale(1);opacity:1}}"
    +"#winScreen .trophy{font-size:clamp(56px,13vw,120px);filter:drop-shadow(0 8px 24px rgba(255,180,20,.5));animation:winBounce 1.6s ease-in-out infinite}"
    +"@keyframes winBounce{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-14px) rotate(4deg)}}"
    +"#winScreen .brk{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin:16px 0 6px}"
    +"#winScreen .brk div{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);border-radius:13px;padding:12px 18px;min-width:120px}"
    +"#winScreen .brk small{display:block;font:700 11px system-ui;letter-spacing:.1em;text-transform:uppercase;color:#b7c6d6}"
    +"#winScreen .brk b{font:900 30px system-ui;color:#eef6ff}#winScreen .brk .tot b{color:#ffd447}"
    +"#winScreen p.sub{color:#dfe8f2;font:600 14px system-ui;margin:8px 0 4px}"
    +"#arcade{margin:10px 0 4px;display:flex;gap:14px;justify-content:center}"
    +".slot{width:64px;height:84px;border-radius:12px;background:rgba(10,16,24,.85);border:2px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;font:900 52px 'Courier New',monospace;color:#65e572;text-shadow:0 0 14px rgba(101,229,114,.7);position:relative}"
    +".slot.active{border-color:#ffd447;box-shadow:0 0 0 2px rgba(255,212,71,.5),0 0 26px rgba(255,212,71,.35);animation:slotBlink 1s steps(2) infinite}"
    +"@keyframes slotBlink{50%{color:#a9ffb6}}"
    +".slot .chev{position:absolute;left:0;right:0;text-align:center;color:#8fa1b7;font:700 16px system-ui;cursor:pointer;pointer-events:auto}"
    +".slot .chev.up{top:-22px}.slot .chev.dn{bottom:-22px}.slot .chev:hover{color:#fff}"
    +"#winBtns{display:flex;gap:10px;margin-top:18px}"
    +"#winScreen button{border:0;border-radius:13px;font:800 15px system-ui;padding:13px 22px;cursor:pointer}"
    +"#okName{background:linear-gradient(135deg,#65e572,#1f9d3a);color:#062810;box-shadow:0 10px 30px rgba(40,180,60,.35)}"
    +"#toStart{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2)}"
    +"#winScreen button:hover{transform:translateY(-1px)}"
    +"#records{width:min(440px,92vw);margin-top:8px;text-align:left;background:rgba(8,12,18,.6);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:14px 16px;display:none}"
    +"#records.show{display:block}"
    +"#records h3{margin:0 0 10px;font:900 15px system-ui;letter-spacing:.14em;text-transform:uppercase;color:#ffd447;text-align:center}"
    +"#records ol{list-style:none;margin:0;padding:0;counter-reset:r}"
    +"#records li{counter-increment:r;display:grid;grid-template-columns:30px 1fr auto;gap:10px;align-items:center;padding:7px 8px;border-radius:9px;font:800 15px 'Courier New',monospace;color:#dbe6f2}"
    +"#records li::before{content:counter(r);color:#7f93a8;text-align:right}"
    +"#records li .nm{color:#65e572;letter-spacing:.18em}"
    +"#records li .pt{color:#eef6ff}"
    +"#records li.me{background:rgba(255,212,71,.14);box-shadow:inset 0 0 0 1px rgba(255,212,71,.4)}"
    +"#records li.me .nm{color:#ffd447}"
    +"#records .winRankControls{display:grid;gap:8px;margin:8px 0 10px}#winRankPhase{width:100%;padding:9px;border-radius:9px;border:1px solid rgba(255,255,255,.16);background:#111b27;color:#eef6ff;font:800 12px system-ui}.winRankTypes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.winRankTypes button{padding:8px 4px;border-radius:8px;border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.05);color:#aebdce;font:800 10px system-ui;cursor:pointer}.winRankTypes button.on{border-color:#ffd447;background:rgba(255,212,71,.15);color:#ffd447}#winRankContext{text-align:center;color:#65e572;font:800 11px system-ui;margin:2px 0 8px}";
  document.head.appendChild(css);

  var mount=document.getElementById("ui")||document.body;

  /* ---- HUD de pontos ---- */
  var shud=document.createElement("div");shud.id="scoreHud";
  shud.innerHTML='<div class="sc" id="scPhoto">\uD83D\uDCF8 FOTOS <b>0</b></div>'
    +'<div class="sc" id="scFps">\uD83C\uDFAF FPS <b>0</b></div>'
    +'<div class="sc total" id="scTot">\uD83C\uDFC6 <b>0</b></div>';
  mount.appendChild(shud);
  function bump(el){if(!el)return;el.classList.remove("bump");void el.offsetWidth;el.classList.add("bump");}
  function refresh(){
    var p=shud.querySelector("#scPhoto b"),f=shud.querySelector("#scFps b"),t=shud.querySelector("#scTot b");
    if(p)p.textContent=photoScore;if(f)f.textContent=fpsScore;if(t)t.textContent=photoScore+fpsScore;
  }
  refresh();

  window.__onPhoto=function(nota,valid){
    photoCount++;
    if(valid){photoScore+=Math.max(0,Math.round(nota));bump(shud.querySelector("#scPhoto"));}
    refresh();
  };
  window.__onEnemyKilled=function(level){
    killCount++;fpsScore+=100+(Math.max(1,level||1)-1)*25;
    bump(shud.querySelector("#scFps"));refresh();
  };

  /* ---- Records (localStorage) ---- */
  function loadRecords(){try{return JSON.parse(localStorage.getItem(RKEY))||[];}catch(e){return [];}}
  function saveRecord(name,score,extra){
    var list=loadRecords();
    var phaseId=(typeof curMapId!=="undefined"&&curMapId)||
      (document.getElementById("mapSelect")&&document.getElementById("mapSelect").value)||
      window.__fpCurrentPhaseId||"unknown";
    var defs=window.FRAMEPRO_PHASES||{};
    var phaseLabel=(typeof MAPS!=="undefined"&&MAPS[phaseId]&&MAPS[phaseId].label)||(defs[phaseId]&&defs[phaseId].label)||phaseId;
    var entry={id:"run_"+Date.now()+"_"+Math.random().toString(36).slice(2,8),name:name,score:Number(score)||0,fps:Number(extra.fps)||0,photos:Number(extra.photos)||0,phase:phaseId,phaseLabel:phaseLabel,date:Date.now()};
    list.push(entry);
    list.sort(function(a,b){return (b.score||0)-(a.score||0);});
    list=list.slice(0,200);
    try{localStorage.setItem(RKEY,JSON.stringify(list));}catch(e){}
    return {list:list,entry:entry};
  }

  /* ---- Tela de vitória + entrada arcade ---- */
  var win=document.createElement("div");win.id="winScreen";
  win.innerHTML=''
    +'<div class="trophy">\uD83C\uDFC6</div>'
    +'<h1 id="winTitle">MISSÃO CONCLUÍDA!</h1>'
    +'<div class="brk"><div><small>Fotos</small><b id="wPhoto">0</b></div>'
    +'<div><small>Bônus</small><b id="wFps">0</b></div>'
    +'<div class="tot"><small>Total</small><b id="wTot">0</b></div></div>'
    +'<p class="sub" id="winMessage">Você fotografou todos os ambientes da cena.</p><p class="sub">Registre suas iniciais (3 letras):</p>'
    +'<div id="arcade"></div>'
    +'<div id="winBtns"><button id="okName">Salvar \u2713</button><button id="toStart">Voltar ao in\u00EDcio</button></div>'
    +'<div id="records"><h3>\uD83C\uDFC6 Ranking da fase</h3><div class="winRankControls"><select id="winRankPhase"></select><div class="winRankTypes"><button type="button" data-type="photos" class="on">\uD83D\uDCF8 Fotos</button><button type="button" data-type="fps">\u2B50 Bônus</button><button type="button" data-type="score">\uD83C\uDFC6 Total</button></div></div><div id="winRankContext"></div><ol id="recList"></ol></div>';
  mount.appendChild(win);

  var slots=[65,65,65], cur=0, arcade=win.querySelector("#arcade"), entered=false;
  function drawArcade(){
    arcade.innerHTML="";
    for(var i=0;i<3;i++){
      var s=document.createElement("div");s.className="slot"+(i===cur?" active":"");
      s.innerHTML='<span class="chev up" data-i="'+i+'" data-d="1">\u25B2</span>'+String.fromCharCode(slots[i])+'<span class="chev dn" data-i="'+i+'" data-d="-1">\u25BC</span>';
      arcade.appendChild(s);
    }
    arcade.querySelectorAll(".chev").forEach(function(c){c.addEventListener("click",function(){var i=+c.dataset.i,d=+c.dataset.d;cur=i;slots[i]=65+(((slots[i]-65)+(d>0?1:25))%26);drawArcade();});});
  }
  drawArcade();

  function onKey(e){
    if(!won||entered)return;
    var k=e.key;
    if(/^[a-zA-Z]$/.test(k)){slots[cur]=k.toUpperCase().charCodeAt(0);if(cur<2)cur++;drawArcade();e.preventDefault();e.stopPropagation();}
    else if(k==="Backspace"){if(cur>0)cur--;slots[cur]=65;drawArcade();e.preventDefault();e.stopPropagation();}
    else if(k==="ArrowRight"){cur=Math.min(2,cur+1);drawArcade();e.preventDefault();}
    else if(k==="ArrowLeft"){cur=Math.max(0,cur-1);drawArcade();e.preventDefault();}
    else if(k==="ArrowUp"){slots[cur]=65+(((slots[cur]-65)+1)%26);drawArcade();e.preventDefault();}
    else if(k==="ArrowDown"){slots[cur]=65+(((slots[cur]-65)+25)%26);drawArcade();e.preventDefault();}
    else if(k==="Enter"){confirmName();e.preventDefault();e.stopPropagation();}
  }
  window.addEventListener("keydown",onKey,true);

  function confirmName(){
    if(entered)return;entered=true;
    var name=String.fromCharCode(slots[0],slots[1],slots[2]);
    var total=photoScore+fpsScore;
    var res=saveRecord(name,total,{fps:fpsScore,photos:photoScore});
    window.__fpLastSavedRecordId=res.entry.id;
    if(typeof window.__fpDrawWinRanking==="function")window.__fpDrawWinRanking(res.entry.phase,"score",res.entry.id);
    win.querySelector("#records").classList.add("show");
    try{window.dispatchEvent(new CustomEvent("framepro-ranking-updated",{detail:res.entry}));}catch(e){}
    win.querySelector("#okName").disabled=true;
    arcade.querySelectorAll(".chev").forEach(function(c){c.style.pointerEvents="none";});
    
  }

  var winRankType="score";
  function winPhaseOptions(list){
    var phases={},defs=window.FRAMEPRO_PHASES||{};
    Object.keys(defs).forEach(function(id){phases[id]=(defs[id]&&defs[id].label)||id;});
    list.forEach(function(r){var id=r.phase||"legacy";if(!phases[id])phases[id]=r.phaseLabel||(id==="legacy"?"Registros antigos":id);});
    return phases;
  }
  window.__fpDrawWinRanking=function(preferredPhase,preferredType,highlightId){
    var list=loadRecords(),phases=winPhaseOptions(list),sel=win.querySelector("#winRankPhase");
    if(!sel)return;
    var old=sel.value;sel.innerHTML="";
    Object.keys(phases).forEach(function(id){var op=document.createElement("option");op.value=id;op.textContent=phases[id];sel.appendChild(op);});
    var current=preferredPhase||old||((typeof curMapId!=="undefined"&&curMapId)||Object.keys(phases)[0]);
    sel.value=phases[current]?current:Object.keys(phases)[0];
    if(preferredType)winRankType=preferredType;
    win.querySelectorAll(".winRankTypes button").forEach(function(b){b.classList.toggle("on",b.dataset.type===winRankType);});
    var phase=sel.value,key=winRankType;
    var rows=list.filter(function(r){return (r.phase||"legacy")===phase;}).sort(function(a,b){return (+b[key]||0)-(+a[key]||0);}).slice(0,10);
    var ol=win.querySelector("#recList"),ctx=win.querySelector("#winRankContext");ol.innerHTML="";
    if(ctx)ctx.textContent=(phases[phase]||phase)+" • "+(key==="photos"?"Fotografias":key==="fps"?"Bônus":"Total");
    if(!rows.length)ol.innerHTML='<li style="grid-template-columns:1fr;text-align:center;color:#8fa1b7">Sem resultados nesta categoria.</li>';
    rows.forEach(function(r){var li=document.createElement("li");if((highlightId&&r.id===highlightId)||r.id===window.__fpLastSavedRecordId)li.className="me";li.innerHTML='<span class="nm">'+(r.name||"???")+'</span><span class="pt">'+(+r[key]||0)+'</span>';ol.appendChild(li);});
  };
  var wrp=win.querySelector("#winRankPhase");if(wrp)wrp.addEventListener("change",function(){window.__fpDrawWinRanking(wrp.value,winRankType,window.__fpLastSavedRecordId);});
  win.querySelectorAll(".winRankTypes button").forEach(function(btn){btn.addEventListener("click",function(){window.__fpDrawWinRanking(wrp&&wrp.value,btn.dataset.type,window.__fpLastSavedRecordId);});});

  function goStart(){location.reload();}

  win.querySelector("#okName").addEventListener("click",confirmName);
  win.querySelector("#toStart").addEventListener("click",goStart);

  function triggerWin(){
    if(won)return;won=true;window.__fpGameEnded=true;
    try{Xi=false;window.__fpStarted=false;Object.keys(Ce||{}).forEach(function(k){Ce[k]=false;});}catch(e){}
    try{if(typeof window.__fpsForceStop==="function")window.__fpsForceStop();}catch(e){}
    try{if(typeof window.__dogSetEnabled==="function")window.__dogSetEnabled(false);}catch(e){}
    try{document.exitPointerLock&&document.exitPointerLock();}catch(e){}
    /* usa as iniciais já digitadas no menu inicial (fliperama) */
    if(window.__fpInitials&&/^[A-Z]{3}$/.test(window.__fpInitials)){
      slots=[window.__fpInitials.charCodeAt(0),window.__fpInitials.charCodeAt(1),window.__fpInitials.charCodeAt(2)];cur=2;drawArcade();
    }
    var total=photoScore+fpsScore;

    win.querySelector("#wPhoto").textContent=photoScore;
    win.querySelector("#wFps").textContent=fpsScore;
    win.querySelector("#wTot").textContent=total;
    var avg=photoCount?Math.round(photoScore/photoCount):0,msg=avg>=95?"Cobertura completa com padrão profissional. Trabalho impecável!":avg>=85?"Todos os ambientes foram cobertos com ótima consistência.":"Cena concluída! Revise as fotos e tente superar sua pontuação.";
    var wt=win.querySelector("#winTitle"),wm=win.querySelector("#winMessage");if(wt)wt.textContent=avg>=95?"🏆 ENSAIO PERFEITO!":"🏠 IMÓVEL CONCLUÍDO!";if(wm)wm.textContent=msg+"  Média por foto: "+avg+" pontos.";
    try{for(var cf=0;cf<70;cf++){var sp=document.createElement("i");sp.className="fpConfetti";sp.style.left=(Math.random()*100)+"vw";sp.style.animationDelay=(Math.random()*1.2)+"s";sp.style.animationDuration=(1.8+Math.random()*2)+"s";sp.textContent=["◆","●","▲","★"][cf%4];document.body.appendChild(sp);setTimeout(function(el){el.remove()},4500,sp)}}catch(e){}
    /* comemoração: cachorro dançando + troféu, só na vitória */
    try{if(typeof window.__spawnWinTrophy==="function")window.__spawnWinTrophy();}catch(e){}
    try{if(typeof window.__dogCelebrate==="function")window.__dogCelebrate(6000);}catch(e){}
    setTimeout(function(){
      try{document.exitPointerLock&&document.exitPointerLock();}catch(e){}
      win.classList.add("show");
    },2600);
  }
  window.__winCoverage=function(t){if(t>=100)triggerWin();};
  window.__winFps=function(){triggerWin();};
})();

/* ===== FramePro — Ocultar qualquer módulo da tela ===== */
;(function(){
  var MODS=[
    ["topbar","Barra superior"],
    ["mission","Missão"],
    ["coveragePanel","Cômodos fotografados"],
    ["tips","Dicas"],
    ["heightControl","Altura da câmera"],
    ["gallery","Fotos salvas"],
    ["miniMapPanel","Planta tática"],
    ["scoreHud","Placar de pontos"],
    ["fpsHud","HUD do modo FPS"],
    ["lifeHud","Vidas"],
    ["cameraHud","Mira / alinhamento"],
    ["bottom","Barra de captura"]
  ];
  var KEY="framepro_hidden_mods";
  var hidden={};try{hidden=JSON.parse(localStorage.getItem(KEY))||{};}catch(e){hidden={};}
  var css=document.createElement("style");
  css.textContent=""
    +"#modBtn{position:absolute;right:18px;bottom:18px;z-index:60;width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:rgba(8,12,18,.82);color:#eef6ff;font-size:20px;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 8px 24px rgba(0,0,0,.4);transition:transform .15s}"
    +"#modBtn:hover{transform:translateY(-1px)}"
    +"#modMenu{position:absolute;right:18px;bottom:74px;z-index:61;width:250px;padding:12px;border-radius:14px;background:rgba(10,15,22,.95);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px);box-shadow:0 12px 40px rgba(0,0,0,.5);display:none}"
    +"#modMenu.show{display:block}"
    +"#modMenu h4{margin:0 0 8px;font:800 12px system-ui;letter-spacing:.12em;text-transform:uppercase;color:#8fa1b7}"
    +"#modMenu label{display:flex;align-items:center;gap:9px;padding:6px 4px;font:600 13px system-ui;color:#dbe6f2;cursor:pointer;border-radius:8px}"
    +"#modMenu label:hover{background:rgba(255,255,255,.06)}"
    +"#modMenu input{accent-color:#55d6ff;width:16px;height:16px;flex:0 0 auto}";
  document.head.appendChild(css);
  var mount=document.getElementById("ui")||document.body;
  var btn=document.createElement("button");btn.id="modBtn";btn.type="button";btn.title="Mostrar/ocultar módulos da tela";btn.textContent="\uD83D\uDC41\uFE0F";mount.appendChild(btn);
  var menu=document.createElement("div");menu.id="modMenu";menu.innerHTML="<h4>M\u00F3dulos da tela</h4>";mount.appendChild(menu);
  function apply(id){var el=document.getElementById(id);if(!el)return;el.style.display=hidden[id]?"none":"";}
  MODS.forEach(function(m){
    var lab=document.createElement("label");
    var cb=document.createElement("input");cb.type="checkbox";cb.checked=!hidden[m[0]];
    cb.addEventListener("change",function(){hidden[m[0]]=!cb.checked;try{localStorage.setItem(KEY,JSON.stringify(hidden));}catch(e){}apply(m[0]);});
    lab.appendChild(cb);lab.appendChild(document.createTextNode(m[1]));menu.appendChild(lab);
    apply(m[0]);
  });
  btn.addEventListener("click",function(){menu.classList.toggle("show");});
})();

/* ===== FramePro — Fliperama no MENU: iniciais obrigatórias + ranking ===== */
;(function(){
  var RKEY="framepro_records_v1";
  var card=document.querySelector("#start .startCard");
  var startBtn=document.getElementById("startBtn");
  var startEl=document.getElementById("start");
  if(!card||!startBtn||!startEl)return;

  /* estilos próprios do bloco de menu (as classes .slot/.chev já existem globalmente) */
  var st=document.createElement("style");
  st.textContent=""
    +"#startArcade{display:flex;gap:14px;justify-content:center;margin:14px 0 6px}"
    +"#startArcade .slot{width:56px;height:74px;font-size:44px}"
    +"#startArcadeHint{font:700 12px system-ui;color:#ffd447;text-align:center;margin:2px 0 0;min-height:16px}"
    +"#startArcade.shake{animation:startShake .3s}"
    +"@keyframes startShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}"
    +"#openRecords{display:block;width:100%;max-width:360px;margin:14px auto 2px;padding:11px 12px;border:1px solid rgba(255,212,71,.4);background:rgba(255,212,71,.08);color:#ffd447;font:800 13px system-ui;border-radius:12px;cursor:pointer;transition:.15s}"
    +"#openRecords:hover{background:rgba(255,212,71,.16);transform:translateY(-1px)}"
    +"#recordsScreen{position:absolute;inset:0;z-index:10000;display:none;overflow:auto;padding:16px;background:radial-gradient(circle at center,rgba(28,30,52,.6),rgba(3,5,10,.94));pointer-events:auto}"
    +"#recordsScreen.show{display:flex}"
    +"#recordsScreen .recCard{width:min(420px,calc(100vw - 30px));margin:auto;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 24px 70px rgba(0,0,0,.55)}"
    +"#recordsScreen h3{margin:0 0 4px;font:900 clamp(18px,3.5vw,22px) system-ui;letter-spacing:.06em;color:#ffd447;text-align:center}"
    +"#recordsScreen .recSub{margin:0 0 16px;text-align:center;color:#9fb0c5;font-size:12px}"
    +"#rankControls{display:grid;gap:10px;margin:14px 0 16px}#rankPhase{width:100%;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:#111b27;color:#eef6ff;font:800 13px system-ui}#rankTypes{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}#rankTypes button{padding:9px 5px;border-radius:9px;border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.05);color:#aebdce;font:800 11px system-ui;cursor:pointer}#rankTypes button.on{border-color:#ffd447;background:rgba(255,212,71,.15);color:#ffd447}#rankContext{text-align:center;color:#65e572;font:800 11px system-ui;margin:-5px 0 10px}"
    +"#recordsScreen ol{list-style:none;margin:0;padding:0;counter-reset:r}"
    +"#recordsScreen li{counter-increment:r;display:grid;grid-template-columns:30px 1fr auto;gap:12px;align-items:center;padding:9px 10px;border-radius:10px;font:800 clamp(14px,3vw,16px) 'Courier New',monospace;color:#dbe6f2;border-bottom:1px solid rgba(255,255,255,.06)}"
    +"#recordsScreen li::before{content:counter(r);color:#7f93a8;text-align:right}"
    +"#recordsScreen li.empty::before{content:none}"
    +"#recordsScreen li:nth-child(1) .pt{color:#ffd447}"
    +"#recordsScreen li .nm{color:#65e572;letter-spacing:.2em}#recordsScreen li .pt{color:#eef6ff}"
    +"#recClose{display:block;width:100%;margin-top:18px;padding:11px;border:0;border-radius:12px;background:linear-gradient(135deg,#56d6ff,#3489ff);color:#07101a;font:800 14px system-ui;cursor:pointer}"
    +"#start.needName #startBtn{opacity:.42;filter:grayscale(.5);pointer-events:none}";
  document.head.appendChild(st);

  /* iniciais salvas anteriormente */
  var saved="";try{saved=(localStorage.getItem("framepro_initials")||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,3);}catch(e){}
  var codes=[-1,-1,-1],cur=0;
  if(/^[A-Z]{3}$/.test(saved)){codes=[saved.charCodeAt(0),saved.charCodeAt(1),saved.charCodeAt(2)];}

  /* bloco no cartão do menu */
  var wrap=document.createElement("div");
  wrap.innerHTML=''
    +'<div class="eyebrow" style="margin-top:18px">\uD83C\uDFAE Fliperama \u2022 suas iniciais</div>'
    +'<p style="margin:4px 0 0">Digite <b>3 letras</b> antes de come\u00E7ar. Sua pontua\u00E7\u00E3o vai para o ranking com esse nome.</p>'
    +'<div id="startArcade"></div>'
    +'<div id="startArcadeHint"></div>'
    +'<button type="button" id="openRecords">\uD83C\uDFC6 Ver recordes</button>';
  var startActions=card.querySelector(".startActions");
  if(startActions)card.insertBefore(wrap,startActions);
  else card.appendChild(wrap);

  /* tela separada de recordes */
  var recScreen=document.createElement("div");
  recScreen.id="recordsScreen";
  recScreen.innerHTML='<div class="recCard"><h3>\uD83C\uDFC6 Ranking</h3><p class="recSub">Escolha a fase e o tipo de pontua\u00E7\u00E3o</p><div id="rankControls"><select id="rankPhase"></select><div id="rankTypes"><button type="button" data-type="photos" class="on">\uD83D\uDCF8 Fotos</button><button type="button" data-type="fps">\u2B50 B\u00F4nus</button><button type="button" data-type="score">\uD83C\uDFC6 Total</button></div></div><div id="rankContext"></div><ol id="startRecList"></ol><button type="button" id="recClose">Fechar</button></div>';
  startEl.appendChild(recScreen);

  var arc=wrap.querySelector("#startArcade");
  var hint=wrap.querySelector("#startArcadeHint");

  function chOf(i){return codes[i]<65?"_":String.fromCharCode(codes[i]);}
  function complete(){return codes[0]>=65&&codes[1]>=65&&codes[2]>=65;}
  function name(){return chOf(0)+chOf(1)+chOf(2);}

  function draw(){
    arc.innerHTML="";
    for(var i=0;i<3;i++){
      var s=document.createElement("div");s.className="slot"+(i===cur?" active":"");
      s.innerHTML='<span class="chev up" data-i="'+i+'" data-d="1">\u25B2</span>'+chOf(i)+'<span class="chev dn" data-i="'+i+'" data-d="-1">\u25BC</span>';
      arc.appendChild(s);
    }
    arc.querySelectorAll(".chev").forEach(function(c){c.addEventListener("click",function(ev){
      ev.stopPropagation();var i=+c.dataset.i,d=+c.dataset.d;cur=i;
      var base=codes[i]<65?(d>0?64:66):codes[i];
      codes[i]=65+(((base-65)+(d>0?1:25))%26);sync();
    });});
    var done=complete();
    startEl.classList.toggle("needName",!done);
    hint.textContent=done?"":"Preencha as 3 letras para liberar o bot\u00E3o";
  }
  function sync(){
    draw();
    if(complete()){window.__fpInitials=name();try{localStorage.setItem("framepro_initials",window.__fpInitials);}catch(e){}}
    else{window.__fpInitials="";}
  }

  /* ranking no menu */
  var rankType="photos";
  function phaseOptions(list){
    var phases={},defs=window.FRAMEPRO_PHASES||{};
    Object.keys(defs).forEach(function(id){phases[id]=(defs[id]&&defs[id].label)||id;});
    list.forEach(function(r){var id=r.phase||"legacy";if(!phases[id])phases[id]=r.phaseLabel||(id==="legacy"?"Registros antigos":id);});
    return phases;
  }
  function drawRecords(){
    var list=[];try{list=JSON.parse(localStorage.getItem(RKEY))||[];}catch(e){list=[];}
    var sel=recScreen.querySelector("#rankPhase"), phases=phaseOptions(list), previous=sel.value;
    sel.innerHTML="";
    Object.keys(phases).forEach(function(id){var op=document.createElement("option");op.value=id;op.textContent=phases[id];sel.appendChild(op);});
    var currentMap=(typeof curMapId!=="undefined"&&curMapId)||Object.keys(phases)[0]||"legacy";
    sel.value=(previous&&phases[previous])?previous:(phases[currentMap]?currentMap:Object.keys(phases)[0]);
    var phase=sel.value, key=rankType;
    var filtered=list.filter(function(r){return (r.phase||"legacy")===phase;}).sort(function(a,b){return (+b[key]||0)-(+a[key]||0);}).slice(0,10);
    var ol=recScreen.querySelector("#startRecList"),ctx=recScreen.querySelector("#rankContext");
    if(ctx)ctx.textContent=(phases[phase]||phase)+" • "+(key==="photos"?"Pontuação das fotografias":key==="fps"?"Pontuação bônus":"Pontuação total");
    ol.innerHTML="";
    if(!filtered.length){ol.innerHTML='<li class="empty" style="grid-template-columns:1fr;text-align:center;color:#8fa1b7">Ainda não há resultados nesta categoria.</li>';}
    else filtered.forEach(function(r){var li=document.createElement("li");li.innerHTML='<span class="nm">'+(r.name||"???")+'</span><span class="pt">'+(+r[key]||0)+'</span>';ol.appendChild(li);});
  }
  recScreen.querySelector("#rankPhase").addEventListener("change",drawRecords);
  recScreen.querySelectorAll("#rankTypes button").forEach(function(btn){btn.addEventListener("click",function(){rankType=btn.dataset.type;recScreen.querySelectorAll("#rankTypes button").forEach(function(b){b.classList.toggle("on",b===btn);});drawRecords();});});
  var openBtn=wrap.querySelector("#openRecords");
  var closeBtn=recScreen.querySelector("#recClose");
  if(openBtn)openBtn.addEventListener("click",function(e){e.stopPropagation();drawRecords();recScreen.classList.add("show");});
  if(closeBtn)closeBtn.addEventListener("click",function(e){e.stopPropagation();recScreen.classList.remove("show");});
  recScreen.addEventListener("click",function(e){if(e.target===recScreen)recScreen.classList.remove("show");});

  window.__fpInitials=complete()?name():"";
  draw();

  /* teclado — só enquanto o menu inicial está visível */
  document.addEventListener("keydown",function(e){
    if(!startEl||startEl.style.display==="none")return;
    if(getComputedStyle(startEl).display==="none")return;
    var k=e.key;
    if(/^[a-zA-Z]$/.test(k)){codes[cur]=k.toUpperCase().charCodeAt(0);if(cur<2)cur++;sync();e.preventDefault();e.stopPropagation();}
    else if(k==="Backspace"){codes[cur]=-1;if(cur>0)cur--;sync();e.preventDefault();e.stopPropagation();}
    else if(k==="ArrowLeft"){cur=Math.max(0,cur-1);draw();e.preventDefault();}
    else if(k==="ArrowRight"){cur=Math.min(2,cur+1);draw();e.preventDefault();}
    else if(k==="ArrowUp"){var b=codes[cur]<65?64:codes[cur];codes[cur]=65+(((b-65+1)%26+26)%26);sync();e.preventDefault();}
    else if(k==="ArrowDown"){var b2=codes[cur]<65?65:codes[cur];codes[cur]=65+(((b2-65+25)%26+26)%26);sync();e.preventDefault();}
  },true);

  /* clicar no botão sem iniciais: chacoalha e avisa (o CSS já bloqueia o clique) */
  startBtn.addEventListener("click",function(e){
    if(!complete()){e.preventDefault();e.stopImmediatePropagation();arc.classList.remove("shake");void arc.offsetWidth;arc.classList.add("shake");hint.textContent="\u26A0\uFE0F Digite suas iniciais primeiro";}
  },true);
})();







/* ===== FramePro — pasta obrigatória antes de iniciar ===== */
;(function(){
  var start=document.getElementById("start"),card=document.querySelector("#start .startCard"),startBtn=document.getElementById("startBtn"),folderHud=document.getElementById("folderBtn");
  if(!start||!card||!startBtn)return;
  window.__fpFolderReady=!!Or;
  var css=document.createElement("style");css.textContent=""
    +"#folderGate{max-width:420px;margin:14px auto;padding:14px 16px;border-radius:14px;background:rgba(8,16,26,.78);border:1px solid rgba(85,214,255,.35);text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.25)}"
    +"#folderGateTitle{font:900 14px system-ui;color:#eef8ff;letter-spacing:.03em}"
    +"#folderGateStatus{margin:7px 0 10px;font:700 12px/1.35 system-ui;color:#ffcc66;overflow-wrap:anywhere}"
    +"#folderGateBtn{width:100%;padding:12px;border:0;border-radius:11px;background:linear-gradient(135deg,#55d6ff,#3489ff);color:#06111c;font:900 14px system-ui;cursor:pointer}"
    +"#folderGateBtn.ready{background:linear-gradient(135deg,#65e572,#2fb974)}"
    +"#start.needFolder #startBtn{opacity:.38!important;filter:grayscale(.7)!important;pointer-events:none!important}"
    +"#start.needFolder #mapSelect,#start.needFolder #mapCards{opacity:.42;filter:grayscale(.45);pointer-events:none}"
    +"#start.needFolder #restartBtn{opacity:.38;pointer-events:none}";
  document.head.appendChild(css);
  var box=document.createElement("div");box.id="folderGate";box.innerHTML='<div id="folderGateTitle">📸 PASTA DAS FOTOGRAFIAS</div><div id="folderGateStatus">Escolha onde os JPGs serão salvos antes de começar.</div><button type="button" id="folderGateBtn">📁 Escolher pasta</button>';
  var actions=card.querySelector(".startActions");if(actions)card.insertBefore(box,actions);else card.appendChild(box);
  var gateBtn=box.querySelector("#folderGateBtn"),status=box.querySelector("#folderGateStatus");
  function sync(){var ok=!!Or&&window.__fpFolderReady!==false;window.__fpFolderReady=ok;start.classList.toggle("needFolder",!ok);gateBtn.classList.toggle("ready",ok);gateBtn.textContent=ok?"📁 Alterar pasta":"📁 Escolher pasta";status.textContent=ok?"✅ Salvando automaticamente em: "+(window.__fpFolderName||Or.name||"pasta selecionada"):"⚠️ Obrigatório: selecione uma pasta para liberar o jogo.";if(folderHud)folderHud.textContent=ok?"📁 "+(window.__fpFolderName||Or.name||"Pasta pronta"):"📁 Escolher pasta";}
  gateBtn.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();j_().then(sync)});
  if(folderHud)folderHud.addEventListener("click",function(){setTimeout(sync,0)});
  window.addEventListener("framepro-folder-change",sync);
  startBtn.addEventListener("click",function(e){if(!Or||!window.__fpFolderReady){e.preventDefault();e.stopImmediatePropagation();sync();Gi("📁 Escolha a pasta das fotos antes de iniciar.");gateBtn.animate([{transform:"translateX(0)"},{transform:"translateX(-7px)"},{transform:"translateX(7px)"},{transform:"translateX(0)"}],{duration:320});}},true);
  document.addEventListener("change",function(e){if((e.target&&e.target.id)==="mapSelect"&&(!Or||!window.__fpFolderReady)){e.preventDefault();e.stopImmediatePropagation();Gi("📁 Escolha a pasta antes de selecionar uma fase.");}},true);
  document.addEventListener("click",function(e){if(e.target&&e.target.closest&&e.target.closest(".mapCard")&&(!Or||!window.__fpFolderReady)){e.preventDefault();e.stopImmediatePropagation();Gi("📁 Escolha a pasta antes de selecionar uma fase.");}},true);
  sync();
})();



/* ===== FramePro Mobile — controles por toque + giroscópio ===== */
;(function(){
  var isMobile=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent||'')||((window.matchMedia&&matchMedia('(pointer:coarse)').matches)&&Math.min(screen.width||9999,screen.height||9999)<900);
  if(!isMobile)return;
  document.documentElement.classList.add('fp-mobile');
  window.__fpMobile=true;

  /* No Android a escolha de diretório não é confiável. Libera o jogo e usa o
     download/galeria do navegador sem bloquear a partida. */
  if(typeof window.showDirectoryPicker!=='function'){
    window.__fpFolderReady=true;
    setTimeout(function(){
      var st=document.getElementById('start');
      if(st)st.classList.remove('needFolder');
      var gate=document.getElementById('folderGateStatus');
      var btn=document.getElementById('folderGateBtn');
      if(gate)gate.textContent='📱 Modo celular: as fotos serão salvas pelos downloads do navegador.';
      if(btn){btn.textContent='📱 Armazenamento do celular';btn.disabled=true;btn.classList.add('ready');}
    },120);
  }

  var css=document.createElement('style');
  css.textContent=`
    .fp-mobile body{overscroll-behavior:none;touch-action:none;-webkit-user-select:none;user-select:none}
    #fpMobileControls{position:fixed;inset:0;z-index:9997;pointer-events:none;display:none;font-family:system-ui,sans-serif}
    body.fp-playing-mobile #fpMobileControls{display:block}
    #fpJoyZone{position:absolute;left:18px;bottom:20px;width:150px;height:150px;border-radius:50%;pointer-events:auto;touch-action:none;background:rgba(7,18,30,.30);border:2px solid rgba(130,220,255,.38);backdrop-filter:blur(3px)}
    #fpJoyKnob{position:absolute;left:45px;top:45px;width:58px;height:58px;border-radius:50%;background:rgba(95,215,255,.74);border:2px solid rgba(255,255,255,.8);box-shadow:0 5px 18px rgba(0,0,0,.35);transform:translate(0,0)}
    #fpLookZone{position:absolute;left:42%;right:0;top:12%;bottom:0;pointer-events:auto;touch-action:none}
    .fpMobBtn{position:absolute;pointer-events:auto;touch-action:none;border:2px solid rgba(255,255,255,.72);color:white;background:rgba(10,22,36,.68);box-shadow:0 5px 18px rgba(0,0,0,.35);font:900 15px system-ui;display:grid;place-items:center;-webkit-tap-highlight-color:transparent}
    #fpPhotoBtn{right:22px;bottom:28px;width:82px;height:82px;border-radius:50%;background:rgba(31,164,255,.78);font-size:30px}
    #fpShootBtn{right:116px;bottom:48px;width:62px;height:62px;border-radius:50%;background:rgba(255,85,70,.75);font-size:25px}
    #fpPauseBtn{right:18px;top:16px;width:48px;height:48px;border-radius:14px;font-size:20px}
    #fpGyroBtn{left:50%;transform:translateX(-50%);bottom:18px;height:42px;padding:0 15px;border-radius:22px;font-size:12px;white-space:nowrap}
    #fpRecenterBtn{left:50%;transform:translateX(-50%);bottom:66px;height:38px;padding:0 13px;border-radius:20px;font-size:12px;display:none}
    #fpGyroPanel{position:fixed;z-index:10050;left:50%;top:50%;transform:translate(-50%,-50%);width:min(88vw,380px);padding:20px;border-radius:18px;background:rgba(7,15,26,.96);border:1px solid rgba(100,210,255,.45);color:#eef8ff;text-align:center;font-family:system-ui;display:none;box-shadow:0 20px 70px rgba(0,0,0,.6)}
    #fpGyroPanel.show{display:block}
    #fpGyroPanel h3{margin:0 0 8px;font-size:20px}#fpGyroPanel p{font-size:13px;line-height:1.45;color:#bcd0df}
    #fpGyroPanel button{margin:6px;padding:11px 16px;border:0;border-radius:10px;font-weight:900;background:#55d6ff;color:#06111c}
    #fpGyroSens{width:100%}
    @media(max-width:700px){#exposureHud{transform:translateX(-50%) scale(.78)!important;transform-origin:top center}#cameraHud{transform:scale(.78);transform-origin:left bottom}.toast{max-width:78vw!important}}


    /* ===== Responsividade mobile real ===== */
    .fp-mobile #gameShell{left:0!important;top:0!important;transform:none!important;width:100dvw!important;height:100dvh!important;max-width:none!important;max-height:none!important;aspect-ratio:auto!important;border-radius:0!important;box-shadow:none!important}
    .fp-mobile canvas{width:100%!important;height:100%!important;touch-action:none!important}
    .fp-mobile #ui{inset:0!important;overflow:hidden!important}
    .fp-mobile #topbar{left:max(8px,env(safe-area-inset-left))!important;right:max(8px,env(safe-area-inset-right))!important;top:max(6px,env(safe-area-inset-top))!important;height:48px!important;padding:6px 9px!important;border-radius:12px!important;gap:6px!important;background:rgba(7,15,25,.72)!important}
    .fp-mobile #brand{gap:7px!important;min-width:0!important}.fp-mobile #brand .logo{width:31px!important;height:31px!important;border-radius:9px!important;font-size:17px!important}.fp-mobile #brand h1{font-size:12px!important;white-space:nowrap!important}.fp-mobile #brand small{display:none!important}
    .fp-mobile .stats{gap:4px!important;min-width:0!important}.fp-mobile .stats .chip{padding:5px 7px!important;border-radius:8px!important;font-size:9px!important;white-space:nowrap!important}.fp-mobile .stats .chip:nth-child(2){display:none!important}.fp-mobile #mapSelect{max-width:94px!important;height:29px!important;padding:3px 5px!important;font-size:9px!important}
    .fp-mobile #mission{left:max(8px,env(safe-area-inset-left))!important;top:62px!important;width:min(42vw,235px)!important;padding:9px 10px!important;border-radius:11px!important;background:rgba(7,15,25,.67)!important}.fp-mobile #mission .eyebrow{font-size:8px!important}.fp-mobile .missionTitle{font-size:12px!important;margin:3px 0!important}.fp-mobile .missionText{display:none!important}.fp-mobile #mission .progress{margin-top:6px!important;height:5px!important}
    .fp-mobile #tips,.fp-mobile #heightControl,.fp-mobile #coveragePanel,.fp-mobile #gallery{display:none!important}
    .fp-mobile #miniMapPanel{right:max(8px,env(safe-area-inset-right))!important;top:62px!important;width:145px!important;padding:7px!important;border-radius:11px!important;background:rgba(7,15,25,.68)!important}.fp-mobile #miniMapCanvas{width:131px!important;height:88px!important}.fp-mobile #miniMapLegend{display:none!important}.fp-mobile .miniHead{font-size:9px!important}.fp-mobile #miniMapToggle{padding:3px 6px!important;font-size:9px!important}
    .fp-mobile #exposureHud{left:50%!important;top:max(60px,calc(env(safe-area-inset-top) + 56px))!important;min-width:0!important;width:190px!important;padding:6px 8px!important;border-radius:10px!important;transform:translateX(-50%) scale(.83)!important;transform-origin:top center!important}.fp-mobile #exposureHud.changed{transform:translateX(-50%) scale(.87)!important}.fp-mobile #exposureHud .expTitle{font-size:8px!important;margin-bottom:3px!important}.fp-mobile #exposureHud .expValues{gap:6px!important}.fp-mobile .expValue{font-size:14px!important}.fp-mobile .expLabel{font-size:7px!important}.fp-mobile #exposureHud .expAuto{font-size:8px!important;margin-top:3px!important}
    .fp-mobile #cameraHud{left:max(8px,env(safe-area-inset-left))!important;right:auto!important;bottom:calc(max(174px,env(safe-area-inset-bottom) + 166px))!important;transform:scale(.68)!important;transform-origin:left bottom!important;max-width:250px!important}.fp-mobile #precisionReadout,.fp-mobile #edgeHelp{display:none!important}
    .fp-mobile #bottom{display:none!important}
    .fp-mobile #toast{top:116px!important;max-width:72vw!important;font-size:11px!important;padding:8px 11px!important}.fp-mobile #roomFlash{top:46%!important;font-size:clamp(22px,7vw,38px)!important}.fp-mobile #errFlash{top:43%!important;width:88vw!important;font-size:clamp(20px,6vw,34px)!important}.fp-mobile #jokeFlash{top:61%!important;width:84vw!important;padding:8px 12px!important;font-size:clamp(17px,5vw,28px)!important}
    .fp-mobile #feedback{left:50%!important;top:50%!important;width:min(92vw,520px)!important;max-height:86dvh!important;padding:14px!important;transform:translate(-50%,-50%)!important;border-radius:15px!important}.fp-mobile .breakdown{grid-template-columns:1fr 1fr!important;gap:6px!important}.fp-mobile #feedback .btn{min-height:44px!important}
    .fp-mobile #start{align-items:flex-start!important;overflow:auto!important;padding:max(10px,env(safe-area-inset-top)) max(10px,env(safe-area-inset-right)) max(12px,env(safe-area-inset-bottom)) max(10px,env(safe-area-inset-left))!important}.fp-mobile .startCard{width:min(94vw,720px)!important;max-height:none!important;margin:auto!important;padding:15px!important;border-radius:16px!important}.fp-mobile .startCard h2{font-size:clamp(18px,5.2vw,27px)!important;line-height:1.12!important;margin:7px 0!important}.fp-mobile .startCard>p{font-size:11px!important;line-height:1.35!important;margin:6px 0 10px!important}.fp-mobile .how{grid-template-columns:repeat(3,1fr)!important;gap:6px!important}.fp-mobile .how>div{padding:8px!important}.fp-mobile .how b{font-size:10px!important}.fp-mobile .how span{font-size:8px!important;line-height:1.25!important}.fp-mobile .mapCards{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:7px!important}.fp-mobile .mapCard{min-height:68px!important;padding:7px 5px!important}.fp-mobile .mapCard .mapIcon{font-size:20px!important}.fp-mobile .mapCard b{font-size:10px!important}.fp-mobile .mapCard span{font-size:8px!important}.fp-mobile .gameOpts{grid-template-columns:1fr 1fr!important;gap:6px!important;margin:8px 0!important}.fp-mobile .gameOpt{padding:8px!important;gap:6px!important}.fp-mobile .gameOpt span{font-size:10px!important}.fp-mobile .gameOpt small{font-size:8px!important}.fp-mobile .startActions{margin-top:9px!important}.fp-mobile .startActions .btn{min-width:0!important;min-height:46px!important;padding:10px!important;font-size:13px!important}
    .fp-mobile #fpJoyZone{left:max(14px,env(safe-area-inset-left))!important;bottom:max(14px,env(safe-area-inset-bottom))!important;width:126px!important;height:126px!important}.fp-mobile #fpJoyKnob{left:37px!important;top:37px!important;width:50px!important;height:50px!important}
    .fp-mobile #fpLookZone{left:34%!important;top:14%!important;right:0!important;bottom:0!important}
    .fp-mobile #fpPhotoBtn{right:max(18px,env(safe-area-inset-right))!important;bottom:max(20px,env(safe-area-inset-bottom))!important;width:74px!important;height:74px!important;font-size:27px!important}
    .fp-mobile #fpShootBtn{right:calc(max(18px,env(safe-area-inset-right)) + 86px)!important;bottom:calc(max(20px,env(safe-area-inset-bottom)) + 12px)!important;width:56px!important;height:56px!important;font-size:22px!important}
    .fp-mobile #fpPauseBtn{right:max(10px,env(safe-area-inset-right))!important;top:calc(max(7px,env(safe-area-inset-top)) + 53px)!important;width:42px!important;height:42px!important;border-radius:12px!important;font-size:18px!important}
    .fp-mobile #fpGyroBtn{left:50%!important;bottom:max(10px,env(safe-area-inset-bottom))!important;height:36px!important;padding:0 11px!important;font-size:10px!important}.fp-mobile #fpRecenterBtn{left:50%!important;bottom:calc(max(10px,env(safe-area-inset-bottom)) + 42px)!important;height:34px!important;font-size:10px!important}
    .fp-mobile #fpGyroPanel{width:min(92vw,390px)!important;max-height:84dvh!important;overflow:auto!important;padding:16px!important}

    @media (orientation:portrait) and (max-width:700px){
      .fp-mobile #mission{width:46vw!important}.fp-mobile #miniMapPanel{display:none!important}.fp-mobile #exposureHud{top:58px!important;width:174px!important;transform:translateX(-50%) scale(.76)!important}
      .fp-mobile #topbar{height:45px!important}.fp-mobile #brand h1{font-size:10px!important}.fp-mobile .stats .chip:first-child{display:none!important}.fp-mobile #mapSelect{max-width:86px!important}
      .fp-mobile #fpJoyZone{width:118px!important;height:118px!important}.fp-mobile #fpJoyKnob{left:34px!important;top:34px!important;width:48px!important;height:48px!important}
      .fp-mobile #fpPhotoBtn{width:70px!important;height:70px!important}.fp-mobile #fpShootBtn{right:calc(max(14px,env(safe-area-inset-right)) + 78px)!important;width:52px!important;height:52px!important}
      .fp-mobile #fpGyroBtn{bottom:calc(max(8px,env(safe-area-inset-bottom)) + 82px)!important}.fp-mobile #fpRecenterBtn{bottom:calc(max(8px,env(safe-area-inset-bottom)) + 122px)!important}
      .fp-mobile .startCard{width:96vw!important}.fp-mobile .how{grid-template-columns:1fr!important}.fp-mobile .how>div:nth-child(n+2){display:none!important}.fp-mobile .mapCards{grid-template-columns:repeat(2,minmax(0,1fr))!important}.fp-mobile .gameOpts{grid-template-columns:1fr!important}
    }
    @media (orientation:landscape) and (max-height:520px){
      .fp-mobile #topbar{top:4px!important;height:42px!important}.fp-mobile #mission{top:51px!important}.fp-mobile #miniMapPanel{top:51px!important}.fp-mobile #exposureHud{top:48px!important;transform:translateX(-50%) scale(.72)!important}.fp-mobile #cameraHud{display:none!important}
      .fp-mobile #fpJoyZone{width:112px!important;height:112px!important}.fp-mobile #fpJoyKnob{left:32px!important;top:32px!important;width:46px!important;height:46px!important}.fp-mobile #fpPhotoBtn{width:66px!important;height:66px!important}.fp-mobile #fpShootBtn{width:50px!important;height:50px!important}.fp-mobile #fpGyroBtn{height:32px!important}.fp-mobile #fpRecenterBtn{height:30px!important}
      .fp-mobile .startCard{padding:10px!important}.fp-mobile .startCard h2{font-size:18px!important}.fp-mobile .startCard>p{display:none!important}.fp-mobile .how{display:none!important}.fp-mobile .mapCard{min-height:58px!important}.fp-mobile .gameOpts{margin:5px 0!important}.fp-mobile .startActions{margin-top:5px!important}
    }
  `;
  document.head.appendChild(css);

  var ui=document.createElement('div');ui.id='fpMobileControls';ui.innerHTML=''
    +'<div id="fpLookZone"></div><div id="fpJoyZone"><div id="fpJoyKnob"></div></div>'
    +'<button id="fpPhotoBtn" class="fpMobBtn" aria-label="Fotografar">📷</button>'
    +'<button id="fpShootBtn" class="fpMobBtn" aria-label="Atirar">🔫</button>'
    +'<button id="fpPauseBtn" class="fpMobBtn" aria-label="Pausar">⏸</button>'
    +'<button id="fpGyroBtn" class="fpMobBtn">📱 Ativar sensores</button>'
    +'<button id="fpRecenterBtn" class="fpMobBtn">🎯 Recentrar</button>';
  document.body.appendChild(ui);
  var panel=document.createElement('div');panel.id='fpGyroPanel';panel.innerHTML='<h3>📱 Mira por movimento</h3><p>Mova o celular para enquadrar. Arraste a tela para giros maiores. O botão Recentrar define a posição atual como neutra.</p><label>Sensibilidade: <b id="fpGyroSensVal">60%</b></label><input id="fpGyroSens" type="range" min="20" max="120" value="60"><br><button id="fpGyroAllow">Ativar giroscópio</button><button id="fpGyroCancel">Agora não</button>';
  document.body.appendChild(panel);

  function playing(){return !!window.__fpStarted&&!!Xi;}
  function syncPlaying(){document.body.classList.toggle('fp-playing-mobile',playing());}
  setInterval(syncPlaying,300);

  /* Joystick digital com diagonais. */
  var joy=ui.querySelector('#fpJoyZone'),knob=ui.querySelector('#fpJoyKnob'),joyId=null;
  function clearMove(){Ce.KeyW=Ce.KeyA=Ce.KeyS=Ce.KeyD=false;knob.style.transform='translate(0,0)';}
  function setJoy(x,y){var m=48,d=Math.hypot(x,y)||1;if(d>m){x=x/d*m;y=y/d*m;}knob.style.transform='translate('+x+'px,'+y+'px)';var dead=12;Ce.KeyW=y<-dead;Ce.KeyS=y>dead;Ce.KeyA=x<-dead;Ce.KeyD=x>dead;}
  joy.addEventListener('pointerdown',function(e){joyId=e.pointerId;joy.setPointerCapture(e.pointerId);var r=joy.getBoundingClientRect();setJoy(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2));e.preventDefault();});
  joy.addEventListener('pointermove',function(e){if(e.pointerId!==joyId)return;var r=joy.getBoundingClientRect();setJoy(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2));e.preventDefault();});
  function endJoy(e){if(joyId===null||e.pointerId!==joyId)return;joyId=null;clearMove();}
  joy.addEventListener('pointerup',endJoy);joy.addEventListener('pointercancel',endJoy);

  /* Arrastar para olhar; funciona junto com o giroscópio. */
  var look=ui.querySelector('#fpLookZone'),lookId=null,lx=0,ly=0;
  look.addEventListener('pointerdown',function(e){lookId=e.pointerId;lx=e.clientX;ly=e.clientY;look.setPointerCapture(e.pointerId);e.preventDefault();});
  look.addEventListener('pointermove',function(e){if(e.pointerId!==lookId||!playing())return;var dx=e.clientX-lx,dy=e.clientY-ly;lx=e.clientX;ly=e.clientY;rn-=dx*.0042;gs=ri.clamp(gs-dy*.0035,-1.12,.62);gyroBaseYaw=rn;gyroBasePitch=gs;e.preventDefault();});
  function endLook(e){if(e.pointerId===lookId)lookId=null;}look.addEventListener('pointerup',endLook);look.addEventListener('pointercancel',endLook);

  ui.querySelector('#fpPhotoBtn').addEventListener('pointerdown',function(e){e.preventDefault();if(playing()&&window.__fpRequestPhoto)window.__fpRequestPhoto();});
  var shoot=ui.querySelector('#fpShootBtn');
  function mouse(type){window.dispatchEvent(new MouseEvent(type,{button:2,bubbles:true,cancelable:true}));}
  shoot.addEventListener('pointerdown',function(e){e.preventDefault();shoot.setPointerCapture(e.pointerId);mouse('mousedown');});
  shoot.addEventListener('pointerup',function(e){e.preventDefault();mouse('mouseup');});shoot.addEventListener('pointercancel',function(){mouse('mouseup');});
  ui.querySelector('#fpPauseBtn').addEventListener('pointerdown',function(e){e.preventDefault();window.dispatchEvent(new KeyboardEvent('keydown',{code:'Escape',key:'Escape',bubbles:true}));});

  /* Giroscópio calibrado, suavizado e com compensação para paisagem. */
  var gyro=false,haveBase=false,baseA=0,baseP=0,gyroBaseYaw=0,gyroBasePitch=0,targetYaw=0,targetPitch=0,sens=.60,lastOri=null;
  function normDeg(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
  function pitchSensor(ev){var ang=(screen.orientation&&screen.orientation.angle)||window.orientation||0;if(Math.abs(ang)===90)return (ang===90?-1:1)*(ev.gamma||0);return ev.beta||0;}
  function calibrate(){if(!lastOri)return;baseA=lastOri.alpha||0;baseP=pitchSensor(lastOri);gyroBaseYaw=rn;gyroBasePitch=gs;targetYaw=rn;targetPitch=gs;haveBase=true;}
  function onOrientation(ev){lastOri=ev;if(!gyro)return;if(!haveBase){calibrate();return;}var da=normDeg((ev.alpha||0)-baseA),dp=pitchSensor(ev)-baseP;targetYaw=gyroBaseYaw-da*(Math.PI/180)*sens;targetPitch=ri.clamp(gyroBasePitch-dp*(Math.PI/180)*sens,-1.12,.62);}
  window.addEventListener('deviceorientation',onOrientation,true);
  function gyroTick(){if(gyro&&playing()){rn+=(targetYaw-rn)*.18;gs+=(targetPitch-gs)*.18;}requestAnimationFrame(gyroTick);}gyroTick();
  function setGyro(on){gyro=on;haveBase=false;var gb=ui.querySelector('#fpGyroBtn'),rc=ui.querySelector('#fpRecenterBtn');gb.textContent=on?'📱 Sensores ligados':'📱 Ativar sensores';gb.style.background=on?'rgba(47,185,116,.82)':'';rc.style.display=on?'grid':'none';if(on)setTimeout(calibrate,120);}
  async function requestGyro(){try{if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){var p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('Permissão negada');}setGyro(true);panel.classList.remove('show');Gi('📱 Giroscópio ativado • mova o celular para enquadrar');}catch(e){setGyro(false);Gi('⚠️ Não foi possível ativar os sensores neste navegador');}}
  ui.querySelector('#fpGyroBtn').addEventListener('pointerdown',function(e){e.preventDefault();if(gyro){setGyro(false);Gi('📱 Giroscópio desligado');}else panel.classList.add('show');});
  ui.querySelector('#fpRecenterBtn').addEventListener('pointerdown',function(e){e.preventDefault();calibrate();Gi('🎯 Câmera recentralizada');});
  panel.querySelector('#fpGyroAllow').onclick=requestGyro;panel.querySelector('#fpGyroCancel').onclick=function(){panel.classList.remove('show');};
  var range=panel.querySelector('#fpGyroSens'),val=panel.querySelector('#fpGyroSensVal');range.oninput=function(){sens=(+range.value)/100;val.textContent=range.value+'%';if(gyro)calibrate();};

  /* Tenta tela cheia e paisagem após iniciar, sem tornar isso obrigatório. */
  var sb=document.getElementById('startBtn');if(sb)sb.addEventListener('click',function(){setTimeout(function(){try{document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(function(){});}catch(e){}try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape').catch(function(){});}catch(e){}syncPlaying();},250);});
})();

/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

/* ===== FramePro Mobile HUD V2 — interface dedicada ===== */
(function(){
  var coarse=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent||'')||((window.matchMedia&&matchMedia('(pointer:coarse)').matches)&&Math.min(screen.width||9999,screen.height||9999)<900);
  if(!coarse)return;
  document.documentElement.classList.add('fp-mobile-v2');
  var style=document.createElement('style');
  style.textContent=`
  html.fp-mobile-v2,html.fp-mobile-v2 body{width:100%!important;height:100%!important;margin:0!important;overflow:hidden!important;background:#000!important;touch-action:none!important}
  html.fp-mobile-v2 #gameShell{position:fixed!important;inset:0!important;left:0!important;top:0!important;transform:none!important;width:100vw!important;width:100dvw!important;height:100vh!important;height:100dvh!important;max-width:none!important;max-height:none!important;aspect-ratio:auto!important;margin:0!important;border:0!important;border-radius:0!important;box-shadow:none!important}
  html.fp-mobile-v2 canvas{width:100%!important;height:100%!important;max-width:none!important;max-height:none!important}
  html.fp-mobile-v2 #topbar,html.fp-mobile-v2 #mission,html.fp-mobile-v2 #tips,html.fp-mobile-v2 #heightControl,html.fp-mobile-v2 #coveragePanel,html.fp-mobile-v2 #miniMapPanel,html.fp-mobile-v2 #gallery,html.fp-mobile-v2 #alignmentPanel,html.fp-mobile-v2 #precisionReadout,html.fp-mobile-v2 #edgeHelp,html.fp-mobile-v2 #lensInfo,html.fp-mobile-v2 #bottom{display:none!important}
  html.fp-mobile-v2 #exposureHud{display:none!important}
  html.fp-mobile-v2 #cameraHud .gridline{opacity:.36!important}
  html.fp-mobile-v2 #cameraHud .v1,html.fp-mobile-v2 #cameraHud .v2{top:0!important;bottom:0!important}
  html.fp-mobile-v2 #cameraHud .h1,html.fp-mobile-v2 #cameraHud .h2{left:0!important;right:0!important}
  #fpMobileHudV2{position:fixed;inset:0;z-index:9996;display:none;pointer-events:none;color:#fff;font-family:Inter,system-ui,Arial,sans-serif}
  body.fp-playing-mobile #fpMobileHudV2{display:block}
  #fpMTop{position:absolute;left:max(10px,env(safe-area-inset-left));right:max(10px,env(safe-area-inset-right));top:max(8px,env(safe-area-inset-top));height:43px;display:flex;align-items:center;justify-content:space-between;gap:7px}
  .fpMPill{display:flex;align-items:center;gap:7px;min-height:38px;padding:6px 10px;border:1px solid rgba(255,255,255,.22);border-radius:13px;background:rgba(5,12,22,.72);box-shadow:0 5px 20px rgba(0,0,0,.28);backdrop-filter:blur(7px);font-weight:900;font-size:12px;text-shadow:0 1px 2px #000}
  #fpMHearts{max-width:43vw;overflow:hidden;white-space:nowrap;color:#ff4b58;font-size:16px;letter-spacing:1px}
  #fpMStats{gap:11px;font-variant-numeric:tabular-nums}
  #fpMExposure{position:absolute;left:50%;top:max(55px,calc(env(safe-area-inset-top) + 51px));transform:translateX(-50%);display:flex;gap:9px;padding:6px 11px;border-radius:12px;background:rgba(5,12,22,.70);border:1px solid rgba(126,211,255,.36);backdrop-filter:blur(7px);font-size:11px;font-weight:900;white-space:nowrap}
  #fpMExposure small{display:block;font-size:7px;color:#8fa8ba;text-transform:uppercase;letter-spacing:.08em;font-weight:700;text-align:center}
  #fpMExposure b{display:block;text-align:center;font-size:13px}
  #fpMRoom{position:absolute;left:50%;top:max(102px,calc(env(safe-area-inset-top) + 96px));transform:translateX(-50%);max-width:58vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:5px 10px;border-radius:999px;background:rgba(5,12,22,.57);font-size:10px;font-weight:800;text-shadow:0 1px 2px #000}
  #fpObjectivesBtn{position:absolute;right:max(10px,env(safe-area-inset-right));top:max(58px,calc(env(safe-area-inset-top) + 52px));pointer-events:auto;border:1px solid rgba(255,255,255,.3);background:rgba(5,12,22,.78);color:#fff;border-radius:12px;padding:9px 11px;font:900 12px system-ui;box-shadow:0 5px 18px rgba(0,0,0,.3)}
  #fpObjectivesDrawer{position:absolute;right:max(10px,env(safe-area-inset-right));top:max(103px,calc(env(safe-area-inset-top) + 96px));width:min(76vw,330px);max-height:58vh;overflow:auto;display:none;pointer-events:auto;padding:12px;border-radius:15px;background:rgba(6,14,24,.94);border:1px solid rgba(255,255,255,.22);box-shadow:0 16px 45px rgba(0,0,0,.55);backdrop-filter:blur(10px)}
  #fpObjectivesDrawer.open{display:block}
  #fpObjectivesDrawer h3{margin:0 0 7px;font-size:14px}.fpObjLine{padding:7px 0;border-top:1px solid rgba(255,255,255,.1);font-size:11px;line-height:1.25}.fpObjLine:first-of-type{border-top:0}.fpObjLine b{font-size:12px}.fpObjProg{height:4px;margin-top:5px;border-radius:9px;background:rgba(255,255,255,.13);overflow:hidden}.fpObjProg i{display:block;height:100%;background:#65e572}
  #fpMobileHint{position:absolute;left:50%;bottom:max(9px,env(safe-area-inset-bottom));transform:translateX(-50%);font-size:9px;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;white-space:nowrap}
  html.fp-mobile-v2 #toast{top:128px!important;max-width:68vw!important;font-size:10px!important;padding:7px 10px!important}
  html.fp-mobile-v2 #errFlash{top:39%!important;width:84vw!important;font-size:clamp(17px,4.7vw,29px)!important}
  html.fp-mobile-v2 #jokeFlash{top:57%!important;width:82vw!important;font-size:clamp(15px,4.2vw,24px)!important}
  html.fp-mobile-v2 #feedback{width:min(92vw,520px)!important;max-height:84dvh!important;overflow:auto!important;padding:13px!important}
  html.fp-mobile-v2 #feedback .score{font-size:39px!important}.fp-mobile-v2 #feedback .resultTitle{font-size:15px!important}.fp-mobile-v2 #feedback .resultText{font-size:10px!important}.fp-mobile-v2 #feedback .breakdown{grid-template-columns:1fr 1fr!important;gap:5px!important}.fp-mobile-v2 #feedback .metric{padding:7px!important}.fp-mobile-v2 #feedback .metric strong,.fp-mobile-v2 #feedback .metric span{font-size:9px!important}
  @media (orientation:portrait){
    #fpMHearts{max-width:55vw;font-size:14px}.fpMPill{padding:5px 8px;font-size:10px}#fpMStats{gap:7px}
    #fpMExposure{top:max(50px,calc(env(safe-area-inset-top) + 47px));gap:7px;padding:5px 8px}#fpMExposure b{font-size:11px}#fpMRoom{top:max(91px,calc(env(safe-area-inset-top) + 86px))}
    #fpObjectivesBtn{top:max(50px,calc(env(safe-area-inset-top) + 46px));font-size:10px;padding:7px 9px}#fpObjectivesDrawer{top:max(88px,calc(env(safe-area-inset-top) + 83px));width:88vw;max-height:55vh}
  }
  @media (max-height:520px) and (orientation:landscape){
    #fpMTop{height:35px}.fpMPill{min-height:33px;padding:4px 8px;font-size:10px}#fpMHearts{font-size:14px}
    #fpMExposure{top:max(44px,calc(env(safe-area-inset-top) + 39px));padding:4px 8px}#fpMExposure small{font-size:6px}#fpMExposure b{font-size:11px}
    #fpMRoom{top:max(78px,calc(env(safe-area-inset-top) + 72px));font-size:9px}#fpObjectivesBtn{top:max(44px,calc(env(safe-area-inset-top) + 39px));padding:7px 9px;font-size:10px}#fpObjectivesDrawer{top:max(80px,calc(env(safe-area-inset-top) + 74px));max-height:61vh}
  }`;
  document.head.appendChild(style);
  var hud=document.createElement('div');hud.id='fpMobileHudV2';hud.innerHTML=`
    <div id="fpMTop"><div id="fpMHearts" class="fpMPill">❤️❤️❤️❤️❤️</div><div id="fpMStats" class="fpMPill"><span>📷 <b id="fpMPhotos">0</b></span><span>🎯 <b id="fpMFps">0</b></span><span>🏆 <b id="fpMScore">0</b></span></div></div>
    <div id="fpMExposure"><span><small>Vel.</small><b id="fpMShutter">1/100</b></span><span><small>Abert.</small><b id="fpMAperture">f/6.3</b></span><span><small>ISO</small><b id="fpMIso">800</b></span></div>
    <div id="fpMRoom">Cômodo</div><button id="fpObjectivesBtn">📋 Objetivos</button><div id="fpObjectivesDrawer"><h3>📋 Cobertura do imóvel</h3><div id="fpObjectivesContent"></div></div><div id="fpMobileHint">Arraste para olhar • joystick para andar</div>`;
  document.body.appendChild(hud);
  var btn=hud.querySelector('#fpObjectivesBtn'),drawer=hud.querySelector('#fpObjectivesDrawer');
  btn.addEventListener('pointerdown',function(e){e.preventDefault();e.stopPropagation();drawer.classList.toggle('open');});
  drawer.addEventListener('pointerdown',function(e){e.stopPropagation();});
  function txt(id,def){var e=document.getElementById(id);return e?(e.textContent||def):def;}
  function numFrom(id,def){var s=txt(id,String(def)).replace(/[^0-9]/g,'');return s||String(def);}
  function sync(){
    hud.querySelector('#fpMPhotos').textContent=numFrom('photosCount',0);
    var fpsEl=document.querySelector('[id*="fps" i], [class*="fps" i]');
    hud.querySelector('#fpMFps').textContent=fpsEl&&/\d/.test(fpsEl.textContent)?(fpsEl.textContent.match(/\d+/)||['0'])[0]:'0';
    var scoreEl=document.querySelector('[id*="trophy" i], [id*="score" i]:not(#score), [class*="trophy" i]');
    hud.querySelector('#fpMScore').textContent=scoreEl&&/\d/.test(scoreEl.textContent)?(scoreEl.textContent.match(/\d+/)||['0'])[0]:'0';
    hud.querySelector('#fpMShutter').textContent=txt('shutterValue','1/100').replace(/\s*s\s*$/,'');
    hud.querySelector('#fpMAperture').textContent=txt('apertureValue','f/6.3');
    hud.querySelector('#fpMIso').textContent=txt('isoValue','800');
    hud.querySelector('#fpMRoom').textContent=txt('roomName','Cômodo')+' • '+txt('heightInfo','1,40 m');
    var hearts=document.getElementById('lifeHud');
    if(hearts){var hp=hearts.querySelectorAll('.hp'),hh='';for(var hi=0;hi<hp.length;hi++)hh+='<span class="fpMobileHeart'+(hp[hi].classList.contains('off')?' off':'')+'">❤️</span>';if(hh)hud.querySelector('#fpMHearts').innerHTML=hh;}
    var roomList=document.getElementById('roomList');
    if(roomList&&drawer.classList.contains('open')){
      var rows=roomList.children,html='';
      for(var i=0;i<rows.length;i++){
        var t=(rows[i].innerText||rows[i].textContent||'').trim().replace(/\s+/g,' ');if(!t)continue;
        var pct=0,m=t.match(/(\d+)\s*\/\s*(\d+)/);if(m&&+m[2])pct=Math.min(100,Math.round((+m[1]/+m[2])*100));
        html+='<div class="fpObjLine"><b>'+t.replace(/[<>]/g,'')+'</b><div class="fpObjProg"><i style="width:'+pct+'%"></i></div></div>';
      }
      hud.querySelector('#fpObjectivesContent').innerHTML=html||'<div class="fpObjLine">Explore o imóvel para carregar os objetivos.</div>';
    }
    requestAnimationFrame(sync);
  }
  sync();
  window.addEventListener('orientationchange',function(){setTimeout(function(){try{window.scrollTo(0,0);}catch(e){}},250);});
})();


/* ===== FramePro Mobile V3: controles + alinhamento + nivelamento ===== */
(function(){
  var mobile=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent||'')||((window.matchMedia&&matchMedia('(pointer:coarse)').matches)&&Math.min(screen.width||9999,screen.height||9999)<900);
  if(!mobile) return;
  window.__fpMobileLevelLock = true;
  var st=document.createElement('style');
  st.textContent=`
    html.fp-mobile-v2 #cameraHud{
      position:fixed!important;inset:0!important;width:100vw!important;height:100dvh!important;
      transform:none!important;transform-origin:center!important;max-width:none!important;
      display:block!important;pointer-events:none!important;z-index:9994!important;
    }
    html.fp-mobile-v2 #cameraHud .gridline{display:block!important;position:absolute!important;opacity:.48!important;transform:none!important}
    html.fp-mobile-v2 #cameraHud .v1{left:33.333%!important;top:0!important;bottom:0!important;width:1px!important}
    html.fp-mobile-v2 #cameraHud .v2{left:66.666%!important;top:0!important;bottom:0!important;width:1px!important}
    html.fp-mobile-v2 #cameraHud .vCenter{left:50%!important;top:0!important;bottom:0!important;width:1px!important}
    html.fp-mobile-v2 #cameraHud .h1{top:33.333%!important;left:0!important;right:0!important;height:1px!important}
    html.fp-mobile-v2 #cameraHud .h2{top:66.666%!important;left:0!important;right:0!important;height:1px!important}
    html.fp-mobile-v2 #cameraHud .hCenter{top:50%!important;left:0!important;right:0!important;height:1px!important}
    html.fp-mobile-v2 #cameraHud .centerDot{display:block!important;left:50%!important;top:50%!important;transform:translate(-50%,-50%)!important}
    html.fp-mobile-v2 #alignmentPanel{
      display:grid!important;position:fixed!important;left:50%!important;right:auto!important;
      bottom:max(12px,env(safe-area-inset-bottom))!important;top:auto!important;
      width:min(310px,42vw)!important;max-height:112px!important;overflow:hidden!important;
      padding:7px!important;gap:4px!important;border-radius:12px!important;
      transform:translateX(-50%)!important;transform-origin:center bottom!important;
      background:rgba(5,12,22,.72)!important;backdrop-filter:blur(7px)!important;z-index:10003!important;
    }
    html.fp-mobile-v2 #alignmentPanel .alignItem{padding:4px 7px!important;border-radius:7px!important;font-size:8px!important}
    html.fp-mobile-v2 #alignmentPanel .alignTop{margin-bottom:3px!important}
    html.fp-mobile-v2 #alignmentPanel .liveBar{height:4px!important}
    html.fp-mobile-v2 #alignmentPanel .alignLabel{gap:4px!important}
    html.fp-mobile-v2 #alignmentPanel .alignItem i{width:7px!important;height:7px!important}
    html.fp-mobile-v2 #level{display:block!important;position:fixed!important;left:50%!important;top:50%!important;width:110px!important;height:22px!important;transform:translate(-50%,-50%)!important;z-index:10002!important}
    html.fp-mobile-v2 #lensInfo{display:none!important}
    html.fp-mobile-v2 #fpMobileControls{display:block!important;visibility:visible!important;opacity:1!important;z-index:10020!important}
    html.fp-mobile-v2 #fpJoyZone,html.fp-mobile-v2 #fpPhotoBtn,html.fp-mobile-v2 #fpShootBtn,html.fp-mobile-v2 #fpPauseBtn,html.fp-mobile-v2 #fpGyroBtn,html.fp-mobile-v2 #fpRecenterBtn{visibility:visible!important;opacity:1!important}
    html.fp-mobile-v2 #fpJoyZone{z-index:10022!important;background:rgba(5,12,22,.54)!important;border-color:rgba(112,220,255,.72)!important}
    html.fp-mobile-v2 .fpMobBtn{z-index:10023!important;box-shadow:0 5px 22px rgba(0,0,0,.58)!important}
    html.fp-mobile-v2 #fpLookZone{z-index:10010!important}
    @media (orientation:landscape){
      html.fp-mobile-v2 #alignmentPanel{width:min(285px,36vw)!important;bottom:max(8px,env(safe-area-inset-bottom))!important}
      html.fp-mobile-v2 #fpGyroBtn{bottom:max(8px,env(safe-area-inset-bottom))!important}
      html.fp-mobile-v2 #fpRecenterBtn{bottom:52px!important}
    }
    @media (orientation:portrait){
      html.fp-mobile-v2 #alignmentPanel{width:min(82vw,320px)!important;bottom:152px!important;max-height:118px!important}
    }
  `;
  document.head.appendChild(st);

  function ensurePlayingClass(){
    var start=document.getElementById('start');
    var active=!start || getComputedStyle(start).display==='none' || start.hidden;
    document.body.classList.toggle('fp-playing-mobile',active);
    var ctr=document.getElementById('fpMobileControls');
    if(ctr) ctr.style.display=active?'block':'none';
    requestAnimationFrame(ensurePlayingClass);
  }
  ensurePlayingClass();

  function lockLevel(){
    try{
      if(typeof xs!=='undefined') xs=0;
      if(typeof Xt!=='undefined' && Xt && Xt.rotation) Xt.rotation.z=0;
      var line=document.getElementById('levelLine'); if(line) line.style.transform='rotate(0deg)';
    }catch(e){}
    requestAnimationFrame(lockLevel);
  }
  lockLevel();

/* FramePro Mobile V10 final fixes */
(function(){var st=document.createElement('style');st.textContent='\n@media (pointer:coarse){\n  html,body{overflow:hidden!important}\n  #lifeHud{display:none!important}\n  #fpMHearts{display:flex!important;align-items:center!important;max-width:44vw!important;font-size:13px!important;letter-spacing:0!important;padding:5px 8px!important}\n  #fpMTop{left:max(74px,calc(env(safe-area-inset-left) + 66px))!important;right:max(172px,calc(env(safe-area-inset-right) + 164px))!important;top:max(7px,env(safe-area-inset-top))!important}\n  #fpMStats{font-size:10px!important;gap:8px!important;min-height:33px!important;padding:4px 8px!important}\n  #fpMExposure{top:max(48px,calc(env(safe-area-inset-top) + 42px))!important;transform:translateX(-50%) scale(.83)!important}\n  #fpMRoom{top:max(82px,calc(env(safe-area-inset-top) + 76px))!important}\n  #fpObjectivesBtn{right:max(68px,calc(env(safe-area-inset-right) + 60px))!important;top:max(7px,env(safe-area-inset-top))!important;padding:8px 9px!important;font-size:10px!important}\n  #fp6Pause{right:max(10px,env(safe-area-inset-right))!important;top:max(7px,env(safe-area-inset-top))!important;width:46px!important;height:42px!important}\n  #fp9Folder{left:max(8px,env(safe-area-inset-left))!important;top:max(7px,env(safe-area-inset-top))!important;height:40px!important;max-width:64px!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;padding:0 8px!important}\n  #alignmentPanel{left:max(8px,env(safe-area-inset-left))!important;top:50%!important;bottom:auto!important;transform:translateY(-50%)!important;width:122px!important;max-height:82px!important;padding:5px!important;gap:3px!important;border-radius:10px!important;z-index:10004!important}\n  #alignmentPanel .alignItem{padding:3px 5px!important;font-size:7px!important}\n  #alignmentPanel .alignTop{margin-bottom:1px!important}\n  #alignmentPanel .liveBar{height:3px!important}\n  #alignmentPanel .alignItem:nth-child(1),#alignmentPanel .alignItem:nth-child(2),#alignmentPanel .alignItem:nth-child(5){display:none!important}\n  #fpMobileV6 #fp6Move{left:max(10px,env(safe-area-inset-left))!important;bottom:max(8px,env(safe-area-inset-bottom))!important}\n  #fpMobileV6 #fp6Look{right:max(88px,calc(env(safe-area-inset-right) + 80px))!important;bottom:max(8px,env(safe-area-inset-bottom))!important}\n  #fpMobileV6 .fp6-joy{width:116px!important;height:116px!important}\n  #fpMobileV6 .fp6-knob{width:46px!important;height:46px!important;left:33px!important;top:33px!important}\n  #fpMobileV6 #fp6Photo{right:max(12px,env(safe-area-inset-right))!important;bottom:112px!important;width:62px!important;height:62px!important}\n  #fpMobileV6 #fp6Shoot{right:max(16px,env(safe-area-inset-right))!important;bottom:42px!important;width:52px!important;height:52px!important}\n  #fpMobileV6 #fp6Sensor{left:max(136px,calc(env(safe-area-inset-left) + 128px))!important;bottom:max(8px,env(safe-area-inset-bottom))!important;width:96px!important;height:34px!important}\n  #fpMobileV6 #fp6Recenter{left:max(136px,calc(env(safe-area-inset-left) + 128px))!important;bottom:47px!important;width:96px!important;height:32px!important}\n  #fp9SensorStatus{left:50%!important;bottom:max(5px,env(safe-area-inset-bottom))!important;transform:translateX(-50%)!important;max-width:180px!important;overflow:hidden!important;text-overflow:ellipsis!important}\n}\n';document.head.appendChild(st);})();

(function(){
  var mobile=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent||'')||((window.matchMedia&&matchMedia('(pointer:coarse)').matches)&&Math.min(screen.width||9999,screen.height||9999)<900);
  if(!mobile)return;
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  ready(function(){
    /* Uma única barra de vida, sincronizada com a vida real do FPS. */
    var mobileHearts=document.getElementById('fpMHearts');
    function syncLives(){
      var source=document.getElementById('lifeHud');
      if(mobileHearts&&source){
        var all=source.querySelectorAll('.hp').length||10;
        var alive=source.querySelectorAll('.hp:not(.off)').length;
        var out=''; for(var i=0;i<all;i++) out+='<span style="opacity:'+(i<alive?'1':'.18')+'">❤️</span>';
        mobileHearts.innerHTML=out;
      }
      requestAnimationFrame(syncLives);
    }
    syncLives();

    /* Pasta no Android: tenta seletor gravável; se não existir, abre seletor de diretório e usa downloads. */
    var folderBtn=document.getElementById('fp9Folder');
    var dirInput=document.createElement('input');
    dirInput.type='file';dirInput.multiple=true;dirInput.setAttribute('webkitdirectory','');dirInput.setAttribute('directory','');dirInput.style.display='none';document.body.appendChild(dirInput);
    dirInput.addEventListener('change',function(){
      var f=dirInput.files&&dirInput.files[0],name='Pasta selecionada';
      if(f&&f.webkitRelativePath)name=f.webkitRelativePath.split('/')[0]||name;
      window.__fpFolderReady=true;window.__fpFolderName=name;
      if(folderBtn)folderBtn.textContent='📁 '+name.slice(0,9);
      var gate=document.getElementById('folderGateStatus');if(gate)gate.textContent='✅ Pasta de referência: '+name+' • JPGs serão salvos pelos downloads do navegador.';
      var start=document.getElementById('start');if(start)start.classList.remove('needFolder');
      window.dispatchEvent(new CustomEvent('framepro-folder-change'));
    });
    async function chooseFolder(e){
      if(e){e.preventDefault();e.stopImmediatePropagation();}
      try{
        if(window.isSecureContext&&typeof window.showDirectoryPicker==='function'){
          var h=await window.showDirectoryPicker({mode:'readwrite'});var p=await h.requestPermission({mode:'readwrite'});if(p!=='granted')throw 0;
          window.__fpFolderReady=true;window.__fpFolderName=h.name||'Pasta';
          if(folderBtn)folderBtn.textContent='📁 '+window.__fpFolderName.slice(0,9);
          window.dispatchEvent(new CustomEvent('framepro-folder-change'));return;
        }
      }catch(_){ }
      dirInput.value='';dirInput.click();
    }
    if(folderBtn){var clone=folderBtn.cloneNode(true);folderBtn.replaceWith(clone);folderBtn=clone;folderBtn.addEventListener('click',chooseFolder,true);folderBtn.addEventListener('touchend',chooseFolder,{passive:false,capture:true});}
    var gateBtn=document.getElementById('folderGateBtn');if(gateBtn){gateBtn.addEventListener('click',chooseFolder,true);}

    /* Olhar: joystick responsivo, filtrado contra tremor e sem atraso excessivo. */
    var look=document.getElementById('fp6Look'),lookKnob=look&&look.querySelector('.fp6-knob');
    if(look){
      var tid=null,cx=0,cy=0,vx=0,vy=0,fx=0,fy=0;
      function center(){var r=look.getBoundingClientRect();cx=r.left+r.width/2;cy=r.top+r.height/2;}
      function move(x,y){center();var dx=x-cx,dy=y-cy,m=Math.hypot(dx,dy),lim=42;if(m>lim){dx=dx/m*lim;dy=dy/m*lim;}vx=dx/lim;vy=dy/lim;if(lookKnob)lookKnob.style.transform='translate('+dx+'px,'+dy+'px)';}
      function start(e){var t=e.changedTouches?e.changedTouches[0]:e;tid=t.identifier!=null?t.identifier:t.pointerId;move(t.clientX,t.clientY);e.preventDefault();e.stopPropagation();}
      function drag(e){var arr=e.changedTouches||[e];for(var i=0;i<arr.length;i++){var t=arr[i];if((t.identifier!=null?t.identifier:t.pointerId)===tid){move(t.clientX,t.clientY);break;}}e.preventDefault();}
      function end(e){vx=vy=0;tid=null;if(lookKnob)lookKnob.style.transform='translate(0,0)';e.preventDefault();}
      look.addEventListener('touchstart',start,{passive:false});look.addEventListener('touchmove',drag,{passive:false});look.addEventListener('touchend',end,{passive:false});look.addEventListener('touchcancel',end,{passive:false});
      look.addEventListener('pointerdown',start,{passive:false});look.addEventListener('pointermove',drag,{passive:false});look.addEventListener('pointerup',end,{passive:false});look.addEventListener('pointercancel',end,{passive:false});
      (function tick(){fx+=(vx-fx)*.42;fy+=(vy-fy)*.42;if((Math.abs(fx)>.018||Math.abs(fy)>.018)&&typeof window.__fpApplyLook==='function')window.__fpApplyLook(fx*8.2,fy*6.4);requestAnimationFrame(tick);})();
    }

    /* Sensores: registra listeners somente após toque, calibra e informa se o navegador não entregar dados. */
    var sensor=document.getElementById('fp6Sensor'),recenter=document.getElementById('fp6Recenter'),status=document.getElementById('fp9SensorStatus');
    var sensorOn=false,last=null,zero=null,sy=0,sp=0,received=0;
    function orientationValues(ev){var angle=(screen.orientation&&screen.orientation.angle)||window.orientation||0;var yaw=ev.alpha||0,pitch;if(angle===90)pitch=ev.gamma||0;else if(angle===270||angle===-90)pitch=-(ev.gamma||0);else pitch=ev.beta||0;return {yaw:yaw,pitch:pitch};}
    function norm(v){while(v>180)v-=360;while(v<-180)v+=360;return v;}
    function onSensor(ev){if(!sensorOn||ev.alpha==null)return;received++;var v=orientationValues(ev);if(!zero){zero=v;last=v;return;}var dy=norm(v.yaw-last.yaw),dp=v.pitch-last.pitch;last=v;if(Math.abs(dy)>12||Math.abs(dp)>12)return;sy=sy*.62+dy*.38;sp=sp*.62+dp*.38;}
    function resetSensor(){zero=null;last=null;sy=sp=0;if(status)status.textContent='SENSOR: recentralizado';}
    async function toggleSensor(e){if(e){e.preventDefault();e.stopImmediatePropagation();}try{
      if(!sensorOn&&typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){var p=await DeviceOrientationEvent.requestPermission();if(p!=='granted')throw new Error('negado');}
      sensorOn=!sensorOn;received=0;resetSensor();
      if(sensorOn){window.addEventListener('deviceorientationabsolute',onSensor,true);window.addEventListener('deviceorientation',onSensor,true);if(sensor)sensor.textContent='📱 SENSOR ON';if(recenter)recenter.style.display='grid';if(status)status.textContent='SENSOR: aguardando movimento';setTimeout(function(){if(sensorOn&&received===0&&status)status.textContent='SENSOR indisponível: use HTTPS ou localhost';},1800);}
      else{window.removeEventListener('deviceorientationabsolute',onSensor,true);window.removeEventListener('deviceorientation',onSensor,true);if(sensor)sensor.textContent='📱 SENSOR';if(recenter)recenter.style.display='none';if(status)status.textContent='SENSOR: desligado';}
    }catch(err){if(status)status.textContent='SENSOR: permissão bloqueada';}}
    if(sensor){var ns=sensor.cloneNode(true);sensor.replaceWith(ns);sensor=ns;sensor.addEventListener('click',toggleSensor,true);sensor.addEventListener('touchend',toggleSensor,{passive:false,capture:true});}
    if(recenter){var nr=recenter.cloneNode(true);recenter.replaceWith(nr);recenter=nr;recenter.addEventListener('click',function(e){e.preventDefault();resetSensor();},true);recenter.addEventListener('touchend',function(e){e.preventDefault();resetSensor();},{passive:false});}
    (function sensorTick(){if(sensorOn&&received&&typeof window.__fpApplyLook==='function'){window.__fpApplyLook(sy*2.8,sp*2.3);sy*=.7;sp*=.7;if(status)status.textContent='SENSOR: ativo';}requestAnimationFrame(sensorTick);})();
  });
})();

/* ===== FramePro V11 repair: mobile HUD/lives/room lines ===== */
;(function(){
  var isPhone=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent||'')||((window.matchMedia&&matchMedia('(pointer:coarse)').matches)&&Math.min(screen.width||9999,screen.height||9999)<900);
  var css=document.createElement('style');
  css.textContent=`
  #edgeAssist .edgeLine{transform-origin:0 50%!important;min-height:2px!important;border-radius:4px!important;pointer-events:none!important}
  #edgeAssist .edgeLine.bad{filter:none!important}
  @media (pointer:coarse){
    #fpMHearts .fpMobileHeart{display:inline-block;transition:opacity .16s,filter .16s;font-size:14px;line-height:1}
    #fpMHearts .fpMobileHeart.off{opacity:.18;filter:grayscale(1)}
  }
  html:not(.fp-true-mobile) #fpMobileControls,html:not(.fp-true-mobile) #fpMobileHudV2,html:not(.fp-true-mobile) #fpMobileV6,html:not(.fp-true-mobile) #fp9Folder,html:not(.fp-true-mobile) #fp9SensorStatus,html:not(.fp-true-mobile) .fp-mobile-only{display:none!important}
  html.fp-true-mobile #alignmentPanel{position:fixed!important;left:calc(env(safe-area-inset-left,0px) + 12px)!important;right:auto!important;top:44%!important;bottom:auto!important;transform:translateY(-50%)!important;width:116px!important;min-width:116px!important;max-width:116px!important;max-height:none!important;margin:0!important;padding:5px!important;box-sizing:border-box!important;overflow:visible!important;z-index:10030!important}
  html.fp-true-mobile #alignmentPanel .alignItem{display:block!important;width:100%!important;box-sizing:border-box!important;padding:4px 6px!important;margin:0 0 3px!important;font-size:8px!important}
  html.fp-true-mobile #alignmentPanel .alignItem:nth-child(1),html.fp-true-mobile #alignmentPanel .alignItem:nth-child(2),html.fp-true-mobile #alignmentPanel .alignItem:nth-child(5){display:none!important}
  html.fp-true-mobile #alignmentPanel .alignTop{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:3px!important;white-space:nowrap!important}
  html.fp-true-mobile #alignmentPanel .alignValue{display:inline!important;min-width:28px!important;text-align:right!important;font-size:8px!important}
  html.fp-true-mobile #alignmentPanel .liveBar{display:block!important;width:100%!important;height:4px!important;margin-top:3px!important}
  html.fp-true-mobile #alignmentPanel .liveBar span{display:block!important;height:100%!important}
  `;
  document.head.appendChild(css);
  if(!isPhone)return;
  document.documentElement.classList.add('fp-true-mobile');
  function mountPanel(){var p=document.getElementById('alignmentPanel');if(p&&p.parentElement!==document.body)document.body.appendChild(p)}
  function syncLife(){var src=document.getElementById('lifeHud'),dst=document.getElementById('fpMHearts');if(src&&dst){var hp=src.querySelectorAll('.hp'),h='';for(var i=0;i<hp.length;i++)h+='<span class="fpMobileHeart'+(hp[i].classList.contains('off')?' off':'')+'">❤️</span>';if(h)dst.innerHTML=h}}
  function init(){mountPanel();syncLife();var src=document.getElementById('lifeHud');if(src)new MutationObserver(syncLife).observe(src,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});window.addEventListener('framepro-lives-change',syncLife);setInterval(function(){mountPanel();syncLife()},700)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

})();

;(()=>{const st=document.createElement("style");st.id="fp-six-params-runtime";st.textContent="#alignmentPanel{overflow:visible!important;max-height:none!important}#alignmentPanel .alignItem,#indPlacement{display:block!important;visibility:visible!important;opacity:1!important}@media(pointer:coarse){#alignmentPanel{width:132px!important;max-height:none!important}#alignmentPanel .alignItem{display:block!important;padding:3px 5px!important;margin:0 0 2px!important;font-size:7px!important}}";document.head.appendChild(st);const f=()=>{const e=document.getElementById("indPlacement");if(e){e.style.setProperty("display","block","important");e.style.setProperty("visibility","visible","important");}};f();setTimeout(f,500);})();

/* FramePro V41: dicas azuis restauradas, textos de orientação simplificados, câmera com maior inclinação para cima. */

/* FramePro V43: mira horizontal da fachada, proibição de inclinação para baixo e dica azul reforçada. */

/* FramePro V45: invasão por 5 tiros no corretor caído corrigida e dicas azuis laterais específicas. */


/* ===== FramePro V52 — bloqueio global após encerramento ===== */
;(function(){
  window.__fpGameEnded=!!window.__fpGameEnded;
  var events=["keydown","keyup","mousedown","mouseup","click","dblclick","contextmenu","pointerdown","pointermove","pointerup","touchstart","touchmove","touchend","wheel"];
  events.forEach(function(type){
    document.addEventListener(type,function(e){
      if(!window.__fpGameEnded&&!window.__fpGameDead)return;
      var t=e.target,allowed=t&&t.closest&&t.closest("#dieScreen,#winScreen,#recordsScreen");
      if(allowed)return;
      e.preventDefault();e.stopImmediatePropagation();
    },true);
  });
})();

/* ===== FramePro V53 — bloqueio absoluto do tiro + sincronização do ranking ===== */
;(function(){
  function shootingOff(){return !!(window.FRAMEPRO_CONFIG&&window.FRAMEPRO_CONFIG.TIRO_ATIVO===false)||window.__fpShootEnabled===false;}
  function syncShootUi(){
    var off=shootingOff();
    ["fpShootBtn","fp6Shoot","shootBtn"].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display=off?"none":"";});
    if(off){window.__fpShootEnabled=false;try{window.dispatchEvent(new Event("mouseup"));}catch(e){}}
  }
  ["mousedown","pointerdown","touchstart","contextmenu"].forEach(function(type){document.addEventListener(type,function(e){
    if(!shootingOff())return;
    var right=e.button===2||e.which===3;
    var shoot=e.target&&e.target.closest&&e.target.closest("#fpShootBtn,#fp6Shoot,#shootBtn");
    if(right||shoot){e.preventDefault();e.stopImmediatePropagation();}
  },true);});
  window.addEventListener("framepro-ranking-updated",function(){
    try{var rs=document.getElementById("recordsScreen");if(rs&&rs.classList.contains("show")){var phase=rs.querySelector("#rankPhase");if(phase)phase.dispatchEvent(new Event("change"));}}catch(e){}
  });
  syncShootUi();setTimeout(syncShootUi,400);setInterval(syncShootUi,1200);
})();

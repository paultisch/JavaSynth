var mousedown=false, octave = 4;
var instruct_showing = true;
var C_key = document.getElementById("C_key"),
	Cs_key = document.getElementById("Cs_key"),
	D_key = document.getElementById("D_key"),
	Ds_key = document.getElementById("Ds_key"),
	E_key = document.getElementById("E_key"),
	F_key = document.getElementById("F_key"),
	Fs_key = document.getElementById("Fs_key"),
	G_key = document.getElementById("G_key"),
	Gs_key = document.getElementById("Gs_key"),
	A_key = document.getElementById("A_key"),
	As_key = document.getElementById("As_key"),
	B_key = document.getElementById("B_key");
	C2_key = document.getElementById("C2_key");
	Cs2_key = document.getElementById("Cs2_key");
	D2_key = document.getElementById("D2_key");
	Ds2_key = document.getElementById("Ds2_key");
	E2_key = document.getElementById("E2_key");

var instructions = document.getElementsByClassName("instructions");


// Event listener for document so that if mouseleave while mousedown, re-entry with mouseup won't register as mousedown
// 		might have to change later...
document.addEventListener('mouseup', function(){
		mousedown=false;
}, false);

// Event listeners for each key: mousedown, mouseup, mouseover, mouseleave:

// C
C_key.addEventListener('mousedown', function() {
		mousedown = true;
		notePressed(0);
		C_key.style.fill = "#CACACA";
	}, false);
C_key.addEventListener('mouseup', function() {
		mousedown = false;
		C_key.style.fill = "white";
		}, false);
C_key.addEventListener('mouseover', function() {
		if(mousedown){
		notePressed(0);
		C_key.style.fill = "#CACACA";
		}
	}, false);
C_key.addEventListener('mouseleave', function() {
		if(mousedown){
		C_key.style.fill = "white";
		}
	}, false);

// C#
Cs_key.addEventListener('mousedown', function() {
		mousedown = true;
		Cs_key.style.fill = "#3B3B3B";
		notePressed(1);
	}, false);
Cs_key.addEventListener('mouseup', function() {
		mousedown = false;
		Cs_key.style.fill = "black";
	}, false);
Cs_key.addEventListener('mouseover', function() {
		if(mousedown){
		Cs_key.style.fill = "#3B3B3B";
		notePressed(1);
		}
	}, false);
Cs_key.addEventListener('mouseleave', function() {
		if(mousedown){
		Cs_key.style.fill = "black";
		}
	}, false);

// D
D_key.addEventListener('mousedown', function() {
		mousedown = true;
		D_key.style.fill = "#CACACA";
		notePressed(2);
	}, false);
D_key.addEventListener('mouseup', function() {
		mousedown = false;
		D_key.style.fill = "white";
	}, false);
D_key.addEventListener('mouseover', function() {
		if(mousedown){
		D_key.style.fill = "#CACACA";
		notePressed(2);
		}
	}, false);
D_key.addEventListener('mouseleave', function() {
		if(mousedown){
		D_key.style.fill = "white";
		}
	}, false);

// D#		
Ds_key.addEventListener('mousedown', function() {
		mousedown = true;
		Ds_key.style.fill = "#3B3B3B";
		notePressed(3);
	}, false);
Ds_key.addEventListener('mouseup', function() {
		mousedown = false;
		Ds_key.style.fill = "black";
	}, false);
Ds_key.addEventListener('mouseover', function() {
		if(mousedown){
		Ds_key.style.fill = "#3B3B3B";
		notePressed(3);
		}
	}, false);
Ds_key.addEventListener('mouseleave', function() {
		if(mousedown){
		Ds_key.style.fill = "black";
		}
	}, false);

// E	
E_key.addEventListener('mousedown', function() {
		mousedown = true;
		E_key.style.fill = "#CACACA";
		notePressed(4);
	}, false);
E_key.addEventListener('mouseup', function() {
		mousedown = false;
		E_key.style.fill = "white";
	}, false);
E_key.addEventListener('mouseover', function() {
		if(mousedown){
		E_key.style.fill = "#CACACA";
		notePressed(4);
		}
	}, false);
E_key.addEventListener('mouseleave', function() {
		if(mousedown){
		E_key.style.fill = "white";
		}
	}, false);

// F
F_key.addEventListener('mousedown', function() {
		mousedown = true;
		F_key.style.fill = "#CACACA";
		notePressed(5);
	}, false);
F_key.addEventListener('mouseup', function() {
		mousedown = false;
		F_key.style.fill = "white";
	}, false);
F_key.addEventListener('mouseover', function() {
		if(mousedown){
		F_key.style.fill = "#CACACA";
		notePressed(5);
		}
	}, false);
F_key.addEventListener('mouseleave', function() {
		if(mousedown){
		F_key.style.fill = "white";
		}
	}, false);

// F#
Fs_key.addEventListener('mousedown', function() {
		mousedown = true;
		Fs_key.style.fill = "#3B3B3B";
		notePressed(6);
	}, false);
Fs_key.addEventListener('mouseup', function() {
		mousedown = false;
		Fs_key.style.fill = "black";
	}, false);
Fs_key.addEventListener('mouseover', function() {
		if(mousedown){
		Fs_key.style.fill = "#3B3B3B";
		notePressed(6);
		}
	}, false);
Fs_key.addEventListener('mouseleave', function() {
		if(mousedown){
		Fs_key.style.fill = "black";
		}
	}, false);

// G
G_key.addEventListener('mousedown', function() {
		mousedown = true;
		G_key.style.fill = "#CACACA";
		notePressed(7);
	}, false);
G_key.addEventListener('mouseup', function() {
		mousedown = false;
		G_key.style.fill = "white";
	}, false);
G_key.addEventListener('mouseover', function() {
		if(mousedown){
		G_key.style.fill = "#CACACA";
		notePressed(7);
		}
	}, false);
G_key.addEventListener('mouseleave', function() {
		if(mousedown){
		G_key.style.fill = "white";
		}
	}, false);

// G#		
Gs_key.addEventListener('mousedown', function() {
		mousedown = true;
		Gs_key.style.fill = "#3B3B3B";
		notePressed(8);
	}, false);
Gs_key.addEventListener('mouseup', function() {
		mousedown = false;
		Gs_key.style.fill = "black";
	}, false);
Gs_key.addEventListener('mouseover', function() {
		if(mousedown){
		Gs_key.style.fill = "#3B3B3B";
		notePressed(8);
		}
	}, false);
Gs_key.addEventListener('mouseleave', function() {
		if(mousedown){
		Gs_key.style.fill = "black";
		}
	}, false);

// A	
A_key.addEventListener('mousedown', function() {
		mousedown = true;
		A_key.style.fill = "#CACACA";
		notePressed(9);
	}, false);
A_key.addEventListener('mouseup', function() {
		mousedown = false;
		A_key.style.fill = "white";
	}, false);
A_key.addEventListener('mouseover', function() {
		if(mousedown){
		A_key.style.fill = "#CACACA";
		notePressed(9);
		}
	}, false);
A_key.addEventListener('mouseleave', function() {
		if(mousedown){
		A_key.style.fill = "white";
		}
	}, false);

// A#		
As_key.addEventListener('mousedown', function() {
		mousedown = true;
		As_key.style.fill = "#3B3B3B";
		notePressed(10);
	}, false);
As_key.addEventListener('mouseup', function() {
		mousedown = false;
		As_key.style.fill = "black";
	}, false);
As_key.addEventListener('mouseover', function() {
		if(mousedown){
		As_key.style.fill = "#3B3B3B";
		notePressed(10);
		}
	}, false);
As_key.addEventListener('mouseleave', function() {
		if(mousedown){
		As_key.style.fill = "black";
		}
	}, false);

// B
B_key.addEventListener('mousedown', function() {
		mousedown = true;
		B_key.style.fill = "#CACACA";
		notePressed(11);
	}, false);
B_key.addEventListener('mouseup', function() {
		mousedown = false;
		B_key.style.fill = "white";
	}, false);
B_key.addEventListener('mouseover', function() {
		if(mousedown){
		B_key.style.fill = "#CACACA";
		notePressed(11);
		}
	}, false);
B_key.addEventListener('mouseleave', function() {
		if(mousedown){
		B_key.style.fill = "white";
		}
	}, false);

// C2
C2_key.addEventListener('mousedown', function() {
		mousedown = true;
		notePressed(12);
		C2_key.style.fill = "#CACACA";
	}, false);
C2_key.addEventListener('mouseup', function() {
		mousedown = false;
		C2_key.style.fill = "white";
		}, false);
C2_key.addEventListener('mouseover', function() {
		if(mousedown){
		notePressed(12);
		C2_key.style.fill = "#CACACA";
		}
	}, false);
C2_key.addEventListener('mouseleave', function() {
		if(mousedown){
		C2_key.style.fill = "white";
		}
	}, false);

// C#
Cs2_key.addEventListener('mousedown', function() {
		mousedown = true;
		Cs2_key.style.fill = "#3B3B3B";
		notePressed(13);
	}, false);
Cs2_key.addEventListener('mouseup', function() {
		mousedown = false;
		Cs2_key.style.fill = "black";
	}, false);
Cs2_key.addEventListener('mouseover', function() {
		if(mousedown){
		Cs2_key.style.fill = "#3B3B3B";
		notePressed(13);
		}
	}, false);
Cs2_key.addEventListener('mouseleave', function() {
		if(mousedown){
		Cs2_key.style.fill = "black";
		}
	}, false);

// D
D2_key.addEventListener('mousedown', function() {
		mousedown = true;
		D2_key.style.fill = "#CACACA";
		notePressed(14);
	}, false);
D2_key.addEventListener('mouseup', function() {
		mousedown = false;
		D2_key.style.fill = "white";
	}, false);
D2_key.addEventListener('mouseover', function() {
		if(mousedown){
		D2_key.style.fill = "#CACACA";
		notePressed(14);
		}
	}, false);
D2_key.addEventListener('mouseleave', function() {
		if(mousedown){
		D2_key.style.fill = "white";
		}
	}, false);

// D#		
Ds2_key.addEventListener('mousedown', function() {
		mousedown = true;
		Ds2_key.style.fill = "#3B3B3B";
		notePressed(15);
	}, false);
Ds2_key.addEventListener('mouseup', function() {
		mousedown = false;
		Ds2_key.style.fill = "black";
	}, false);
Ds2_key.addEventListener('mouseover', function() {
		if(mousedown){
		Ds2_key.style.fill = "#3B3B3B";
		notePressed(15);
		}
	}, false);
Ds2_key.addEventListener('mouseleave', function() {
		if(mousedown){
		Ds2_key.style.fill = "black";
		}
	}, false);

// E	
E2_key.addEventListener('mousedown', function() {
		mousedown = true;
		E2_key.style.fill = "#CACACA";
		notePressed(16);
	}, false);
E2_key.addEventListener('mouseup', function() {
		mousedown = false;
		E2_key.style.fill = "white";
	}, false);
E2_key.addEventListener('mouseover', function() {
		if(mousedown){
		E2_key.style.fill = "#CACACA";
		notePressed(16);
		}
	}, false);
E2_key.addEventListener('mouseleave', function() {
		if(mousedown){
		E2_key.style.fill = "white";
		}
	}, false);
let oscs = [];
let masterGainNode = null;

let wavePicker = document.querySelector("select[name='waveform']");
let volumeControl = document.querySelector("input[name='volume']");

let noteFreq = null;
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
var ctx;

// Create Audio Context
const AudioContext = window.AudioContext || window.webkitAudioContext;
ctx = new AudioContext();
// ctx.suspend();
// var suspended = true;

masterGainNode = ctx.createGain();
masterGainNode.connect(ctx.destination);
masterGainNode.gain.value = volumeControl.value;
vol = volumeControl.value;

// Populate keyboard array with frequencies of piano keys
keyboard=[]
for (i=0; i<89; i++){
	f = 440 * Math.pow(2, (i-49)/12);
	keyboard.push(f);
	}

// document.addEventListener('touchstart', function(){
// 	resumed();
// 	}, false)
// 	
// document.addEventListener('click', function(){
// 	resumed();
// 	}, false)

// function setup(){
volumeControl.addEventListener("change", changeVolume, false);

// function resumed(){
// 	if(suspended){
// 		ctx.resume();
// 		suspended=false;
// 		}
// 	else{
// 		ctx.suspend();
// 		suspended=true;
// 	}
// }


function createKey(note, octave, freq){
	let keyElement = document.createElement("div");
	let labelElement = document.createElement("div");
	
	keyElement.className = "key";
	keyElement.dataset["octave"] = octave;
	keyElement.dataset["note"] = note;
	keyElement.dataset["freq"] = freq;
	
	labelElement.innerHTML = note + "<sub>" + octave + "</sub>";
	keyElement.appendChild(labelElement);
	
	return keyElement;
}

// **************** PLAY TONE FUNCION **************** **************** ****************
var toneEnv;
function playTone(idx){
	var osc = ctx.createOscillator();
	var lfo = ctx.createOscillator();
	osc.type = document.getElementById("waveform").value;	
	lfo.type = document.getElementById("lfoWave").value;	
	osc.frequency.setValueAtTime(keyboard[idx], ctx.currentTime);
	lfo.frequency.value = LFO_Rate;
	
	// Envelope
	toneEnv = ctx.createGain();
	toneEnv.gain.cancelScheduledValues(ctx.currentTime);
	toneEnv.gain.setValueAtTime(0, ctx.currentTime);
	toneEnv.gain.linearRampToValueAtTime(A_amp, ctx.currentTime + attackTime);
	toneEnv.gain.linearRampToValueAtTime(0, ctx.currentTime + attackTime + releaseTime);
	
	// LFO
	let lfoAmp=ctx.createGain();
	
	if(LFO_destination=='gain'){
		lfo.connect(lfoAmp.gain);
		osc.connect(toneEnv).connect(lfoAmp).connect(masterGainNode);
	} else{
	lfo.connect(lfoAmp.gain);
		lfoAmp.connect(osc.frequency);
		osc.connect(toneEnv).connect(masterGainNode);
	}

	lfo.start();	
	osc.start();
	return osc;
}

function notePressed(tone_idx){
	oscs[tone_idx] = (playTone(tone_idx + 12*octave));
// 	masterGainNode.gain.exponentialRampToValueAtTime(vol, 50); //doesn't work??
}

function noteReleased(tone_idx){
// 	masterGainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 500); //doesn't work??
// 	toneEnv.gain.linearRampToValueAtTime(0, ctx.currentTime + attackTime + releaseTime);
	setTimeout(function(){
		oscs[tone_idx].stop();
		oscs[tone_idx] = null;
		}, 50);
// 	})
}

var vol;
function changeVolume(event){
	vol = volumeControl.value;
	masterGainNode.gain.value = vol;
}

let attackTime = 0.2;
const attackControl = document.querySelector('#attack');
attackControl.addEventListener('input', function(){
	attackTime = Number(this.value);
}, false);
// 
// let decayTime = 0.2;
// const decayControl = document.querySelector('#decay');
// decayControl.addEventListener('input', function(){
// 	decayTime = Number(this.value);
// }, false);
// 
// let sustainTime = 0.5;
// const sustainControl = document.querySelector('#sustain');
// sustainControl.addEventListener('input', function(){
// 	sustainTime = Number(this.value);
// }, false);

let releaseTime = 0.5;
const releaseControl = document.querySelector('#release');
releaseControl.addEventListener('input', function(){
	releaseTime = Number(this.value);
}, false);

let A_amp = 0.2;
const A_amp_cntrl = document.querySelector('#A_amp');
A_amp_cntrl.addEventListener('input', function(){
	A_amp = Number(this.value);
}, false);

const octave_cntrl = document.querySelector('#octave');
octave_cntrl.addEventListener('input', function(){
	octave = Number(this.value);
}, false);

let LFO_Rate = 10.0;
const LFO_Rate_cntrl = document.querySelector('#lfoRate');
LFO_Rate_cntrl.addEventListener('input', function(){
	LFO_Rate = Number(this.value);
}, false);

let LFO_destination = 'gain';
const LFO_destination_cntrl = document.querySelector('#lfoDestination');
LFO_destination_cntrl.addEventListener('input', function(){
	LFO_destination = this.value;
}, false);

// let D_amp = 0.2;
// const D_amp_cntrl = document.querySelector('#D_amp');
// D_amp_cntrl.addEventListener('input', function(){
// 	D_amp = Number(this.value);
// }, false);
// 
// let S_amp = 0.5;
// const S_amp_cntrl = document.querySelector('#S_amp');
// S_amp_cntrl.addEventListener('input', function(){
// 	S_amp = Number(this.value);
// }, false);
// 






var cb=false, csb=false, db=false, dsb=false, eb=false, fb=false, fsb=false, gb=false, 
	gsb=false, ab=false, asb=false, bb=false, c2b=false, cs2b=false, d2b=false, ds2b=false, e2b=false;

document.addEventListener('keydown', function() {
	if(event.keyCode==90 && !cb){
	// 'Z' -> C
		notePressed(0);
		C_key.style.fill = "#CACACA";
		cb=true;
		}
	if(event.keyCode==83 && !csb){
	// 'S' -> C#
		notePressed(1);
		Cs_key.style.fill = "#3B3B3B";
		csb=true;
		}
	if(event.keyCode==88 && !db){
	// 'X' -> D
		notePressed(2);
		D_key.style.fill = "#CACACA";
		db=true;
		}
	if(event.keyCode==68 && !dsb){
	// 'Z' -> D#
		notePressed(3);
		Ds_key.style.fill = "#3B3B3B";
		dsb=true;
		}
	if(event.keyCode==67 && !eb){
	// 'S' -> E
		notePressed(4);
		E_key.style.fill = "#CACACA";
		eb=true;
		}
	if(event.keyCode==86 && !fb){
	// 'X' -> F
		notePressed(5);
		F_key.style.fill = "#CACACA";
		fb=true;
		}
	if(event.keyCode==71 && !fsb){
	// 'Z' -> F#
		notePressed(6);
		Fs_key.style.fill = "#3B3B3B";
		fsb=true;
		}
	if(event.keyCode==66 && !gb){
	// 'S' -> G
		notePressed(7);
		G_key.style.fill = "#CACACA";
		gb=true;
		}
	if(event.keyCode==72 && !gsb){
	// 'X' -> G#
		notePressed(8);
		Gs_key.style.fill = "#3B3B3B";
		gsb=true;
		}
	if(event.keyCode==78 && !ab){
	// 'X' -> A
		notePressed(9);
		A_key.style.fill = "#CACACA";
		ab=true;
		}
	if(event.keyCode==74 && !asb){
	// 'Z' -> A#
		notePressed(10);
		As_key.style.fill = "#3B3B3B";
		asb=true;
		}
	if(event.keyCode==77 && !bb){
	// 'S' -> B
		notePressed(11);
		B_key.style.fill = "#CACACA";
		bb=true;
		}
	if(event.keyCode==188 && !c2b){
	// ',' -> C2
		notePressed(12);
		C2_key.style.fill = "#CACACA";
		c2b=true;
		}
	if(event.keyCode==76){
	// 'L' -> Cs2
		notePressed(13);
		Cs2_key.style.fill = "3B3B3B";
		cs2b=true;
		}
	if(event.keyCode==190){
	// '.' -> D2
		notePressed(14);
		D2_key.style.fill = "CACACA";
		d2b=true;
		}
	if(event.keyCode==186){
	// ';' -> Ds2
		notePressed(15);
		Ds2_key.style.fill = "3B3B3B";
		ds2b=true;
		}
	if(event.keyCode==191){
	// '/' -> E2
		notePressed(16);
		E2_key.style.fill = "CACACA";
		e2b=true;
		}
	
	// O for octave down
	if(event.keyCode==79){
		if(octave>1){
		octave -= 1
		document.getElementById("octave").value = octave;
			}
		}
	// P for octave up
	if(event.keyCode==80){
		if(octave<6){
		octave += 1
		document.getElementById("octave").value = octave;
			}
		}
	// I to show/hide instructions
	if(event.keyCode==73){
		if(instruct_showing){
			for(var i=0; i<instructions.length; i++){
				instructions[i].style.display = 'none';
				}
			instruct_showing = false;
		} else {
			for(var i=0; i<instructions.length; i++){
				instructions[i].style.display = 'inline';
				}
			instruct_showing = true;
		}
	}
});
	
document.addEventListener('keyup', function() {
	if(event.keyCode==90 && cb){
	// 'Z' -> C
		C_key.style.fill = "white";
		cb=false;
		}
	if(event.keyCode==83 && csb){
	// 'S' -> C#
		Cs_key.style.fill = "black";
		csb=false;
		}
	if(event.keyCode==88 && db){
	// 'X' -> D
		D_key.style.fill = "white";
		db=false;
		}
	if(event.keyCode==68 && dsb){
	// 'Z' -> D#
		Ds_key.style.fill = "black";
		dsb=false;
		}
	if(event.keyCode==67 && eb){
	// 'S' -> E
		E_key.style.fill = "white";
		eb=false;
		}
	if(event.keyCode==86 && fb){
	// 'X' -> F
		F_key.style.fill = "white";
		fb=false;
		}
	if(event.keyCode==71 && fsb){
	// 'Z' -> F#
		Fs_key.style.fill = "black";
		fsb=false;
		}
	if(event.keyCode==66 && gb){
	// 'S' -> G
		G_key.style.fill = "white";
		gb=false;
		}
	if(event.keyCode==72 && gsb){
	// 'X' -> G#
		Gs_key.style.fill = "black";
		gsb=false;
		}
	if(event.keyCode==78 && ab){
	// 'X' -> A
		A_key.style.fill = "white";
		ab=false;
		}
	if(event.keyCode==74 && asb){
	// 'Z' -> A#
		As_key.style.fill = "black";
		asb=false;
		}
	if(event.keyCode==77 && bb){
	// 'S' -> B
		B_key.style.fill = "white";
		bb=false;
		}
	if(event.keyCode==188){
	// ',' -> C2
		C2_key.style.fill = "white";
		c2b=false;
		}
	if(event.keyCode==76){
	// 'L' -> Cs2
		Cs2_key.style.fill = "black";
		cs2b=false;
		}
	if(event.keyCode==190){
	// '.' -> D2
		D2_key.style.fill = "white";
		d2b=false;
		}
	if(event.keyCode==186){
	// ';' -> Ds2
		Ds2_key.style.fill = "black";
		ds2b=false;
		}
	if(event.keyCode==191){
	// '/' -> E2
		E2_key.style.fill = "white";
		e2b=false;
		}
});

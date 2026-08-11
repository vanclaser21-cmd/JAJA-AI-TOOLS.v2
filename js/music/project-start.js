document.addEventListener("DOMContentLoaded",()=>{

const saved = typeof loadSession === 'function' ? loadSession() : {};

// Safe-get helper
function setIfExists(id, value) {
	const el = document.getElementById(id);
	if (el) el.value = value;
}

const scene = document.getElementById("sceneStructure");
const customLabel = document.getElementById("customShotLabel");
const customInput = document.getElementById("customShot");

if (scene) {
	scene.onchange = () => {
		if (scene.value === "Custom") {
			if (customLabel) customLabel.style.display = "block";
			if (customInput) customInput.style.display = "block";
		} else {
			if (customLabel) customLabel.style.display = "none";
			if (customInput) customInput.style.display = "none";
		}
	};
}

setIfExists('projectTitle', saved.title || "");
setIfExists('lyrics', saved.lyrics || "");
setIfExists('genre', saved.genre || "");
setIfExists('duration', saved.duration || "");
setIfExists('aspectRatio', saved.aspectRatio || "");
setIfExists('sceneStructure', saved.sceneStructure || "");
setIfExists('shotDuration', saved.shotDuration || "");
setIfExists('visualStyle', saved.visualStyle || "");
setIfExists('storyIdea', saved.storyIdea || "");

const nextBtn = document.getElementById("nextStep");
if (!nextBtn) return;

nextBtn.onclick = (e) => {
	e.preventDefault();

	session.title = (document.getElementById("projectTitle") || {}).value || '';
	session.lyrics = (document.getElementById("lyrics") || {}).value || '';
	session.genre = (document.getElementById("genre") || {}).value || '';
	session.duration = (document.getElementById("duration") || {}).value || '';
	session.aspectRatio = (document.getElementById("aspectRatio") || {}).value || '';

	const sceneEl = document.getElementById("sceneStructure");
	if (sceneEl && sceneEl.value === "Custom") {
		session.sceneStructure = `1 Scene = ${(document.getElementById("customShot") || {}).value || ''} Shot`;
	} else if (sceneEl) {
		session.sceneStructure = sceneEl.value || '';
	}

	session.shotDuration = (document.getElementById("shotDuration") || {}).value || '';
	session.visualStyle = (document.getElementById("visualStyle") || {}).value || '';
	session.storyIdea = (document.getElementById("storyIdea") || {}).value || '';

	if (typeof saveSession === 'function') saveSession(session);

	window.location.href = "lyric-analysis.html";
};

});
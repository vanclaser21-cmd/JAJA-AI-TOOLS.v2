document.addEventListener("DOMContentLoaded",()=>{

const saved = loadSession();

const scene =
document.getElementById("sceneStructure");

const customLabel =
document.getElementById("customShotLabel");

const customInput =
document.getElementById("customShot");

scene.onchange = ()=>{

if(scene.value==="Custom"){

customLabel.style.display="block";
customInput.style.display="block";

}else{

customLabel.style.display="none";
customInput.style.display="none";

}

};

document.getElementById("projectTitle").value = saved.title || "";
document.getElementById("lyrics").value = saved.lyrics || "";
document.getElementById("genre").value = saved.genre || "";
document.getElementById("duration").value = saved.duration || "";
document.getElementById("aspectRatio").value = saved.aspectRatio || "";
document.getElementById("sceneStructure").value = saved.sceneStructure || "";
document.getElementById("shotDuration").value = saved.shotDuration || "";
document.getElementById("visualStyle").value = saved.visualStyle || "";
document.getElementById("storyIdea").value = saved.storyIdea || "";

const nextBtn = document.getElementById("nextStep");

if(!nextBtn) return;

nextBtn.onclick = (e)=>{

e.preventDefault();

session.title =
document.getElementById("projectTitle").value;

session.lyrics =
document.getElementById("lyrics").value;

session.genre =
document.getElementById("genre").value;

session.duration =
document.getElementById("duration").value;

session.aspectRatio =
document.getElementById("aspectRatio").value;

if(document.getElementById("sceneStructure").value==="Custom"){

session.sceneStructure =
`1 Scene = ${document.getElementById("customShot").value} Shot`;

}else{

session.sceneStructure =
document.getElementById("sceneStructure").value;

}

session.shotDuration =
document.getElementById("shotDuration").value;

session.visualStyle =
document.getElementById("visualStyle").value;

session.storyIdea =
document.getElementById("storyIdea").value;

saveSession(session);

window.location.href = "lyric-analysis.html";

};

});
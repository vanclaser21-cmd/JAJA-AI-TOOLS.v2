/* ==========================
PROJECT SESSION
========================== */

const DRAMA_STORAGE_KEY = "jaja_drama_project";
function loadDramaSession(){
    const data = localStorage.getItem(DRAMA_STORAGE_KEY);

    if(data){

        return JSON.parse(data);

    }

    return {

        title:"",

        lyrics:"",

        genre:"",

        duration:"",

        visualStyle:"",

        storyIdea:"",

        projectData:"",

        storyboard:""

    };

}

function saveDramaSession(data){
    localStorage.setItem(
        DRAMA_STORAGE_KEY,
        JSON.stringify(data)
    );
}

function clearDramaSession(){
    localStorage.removeItem(DRAMA_STORAGE_KEY);
}

let dramaSession = loadDramaSession();

/* ==========================
WORKFLOW ENGINE
========================== */

const promptText = document.getElementById("promptText");
const copyBtn = document.getElementById("copyPrompt");
const stepNumber = document.getElementById("stepNumber");
const instructionTitle = document.getElementById("instructionTitle");
const workflowGuide = document.getElementById("workflowGuide");

if(stepNumber){

stepNumber.innerHTML =
`STEP ${String(workflow.step).padStart(2,"0")} / ${workflow.total}`;

}

if(instructionTitle){

instructionTitle.innerHTML =
workflow.instruction;

}

if(workflowGuide){

workflowGuide.innerHTML =
workflow.guide.replace(/\n/g,"<br>");

}

if(promptText){

let finalPrompt = workflow.prompt;

finalPrompt =
finalPrompt.replace(/{{storyIdea}}/g, dramaSession.storyIdea || "");

finalPrompt =
finalPrompt.replace(/{{storyCategory}}/g, dramaSession.storyCategory || "");

finalPrompt =
finalPrompt.replace(/{{storySubCategory}}/g, dramaSession.storySubCategory || "");

finalPrompt =
finalPrompt.replace(/{{genre}}/g, dramaSession.genre || "");

finalPrompt =
finalPrompt.replace(/{{episodeCount}}/g, dramaSession.episodeCount || "");

finalPrompt =
finalPrompt.replace(/{{episodeDuration}}/g, dramaSession.episodeDuration || "");

finalPrompt =
finalPrompt.replace(/{{aspectRatio}}/g, dramaSession.aspectRatio || "");

finalPrompt =
finalPrompt.replace(/{{sceneStructure}}/g, dramaSession.sceneStructure || "");

finalPrompt =
finalPrompt.replace(/{{shotDuration}}/g, dramaSession.shotDuration || "");

finalPrompt =
finalPrompt.replace(/{{visualStyle}}/g, dramaSession.visualStyle || "");

finalPrompt =
finalPrompt.replace(/{{customEpisode}}/g, dramaSession.customEpisode || "");

finalPrompt =
finalPrompt.replace(/{{customDuration}}/g, dramaSession.customDuration || "");

finalPrompt =
finalPrompt.replace(/{{customScene}}/g, dramaSession.customScene || "");

finalPrompt =
finalPrompt.replace(/{{customShot}}/g, dramaSession.customShot || "");

finalPrompt =
finalPrompt.replace(/{{customVisual}}/g, dramaSession.customVisual || "");


promptText.value = finalPrompt;

}

if(copyBtn){

copyBtn.innerHTML =
workflow.copyText;

copyBtn.onclick = ()=>{

navigator.clipboard.writeText(promptText.value);

copyBtn.innerHTML =
workflow.copiedText;

setTimeout(()=>{

copyBtn.innerHTML =
workflow.copyText;

},1500);

};

}
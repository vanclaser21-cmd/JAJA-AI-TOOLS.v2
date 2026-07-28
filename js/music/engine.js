const promptText = document.getElementById("promptText");
const copyBtn = document.getElementById("copyPrompt");
const stepNumber = document.getElementById("stepNumber");
const instructionTitle = document.getElementById("instructionTitle");
const workflowGuide =
document.getElementById("workflowGuide");

stepNumber.innerHTML =
`STEP ${String(workflow.step).padStart(2,"0")} / ${workflow.total}`;

instructionTitle.innerHTML =
workflow.instruction;

workflowGuide.innerHTML =
workflow.guide.replace(/\n/g,"<br>");

if(promptText){

promptText.value =
workflow.prompt;

}

if(copyBtn){

copyBtn.innerHTML =
workflow.copyText;

copyBtn.onclick = ()=>{

navigator.clipboard.writeText(workflow.prompt);

copyBtn.innerHTML =
workflow.copiedText;

setTimeout(()=>{

copyBtn.innerHTML =
workflow.copyText;

},1500);

};

}
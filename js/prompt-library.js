const promptTitle = document.getElementById("promptTitle");
const language = document.getElementById("language");
const category = document.getElementById("category");
const promptText = document.getElementById("promptText");
const copyBtn = document.getElementById("copyPrompt");

function getLanguage() {
    return language.value;
}

function updatePrompt() {

    const lang = getLanguage();
    const key = category.value;

    promptTitle.innerHTML =
        category.options[category.selectedIndex].text;

    promptText.value =
        promptLibrary[lang][key] || "";

}

language.addEventListener("change", updatePrompt);

category.addEventListener("change", updatePrompt);

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(promptText.value);

    copyBtn.innerHTML = "✅ COPIED";

    setTimeout(() => {

        copyBtn.innerHTML = "📋 COPY PROMPT";

    }, 1500);

});

updatePrompt();
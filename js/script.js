// ==========================
// PROMPT ENHANCER
// ==========================

const ENHANCER = {

quality:{
"Fast":"realistic",
"Detailed":"highly detailed, masterpiece",
"Ultra Detailed":"ultra detailed, masterpiece, photorealistic, HDR, 8K",
"Cinematic":"cinematic lighting, movie still, volumetric lighting",
"Hyper Realistic":"hyper realistic, RAW photo, award winning photography"
},

lighting:{

"Natural":
"soft natural daylight, realistic ambient light, balanced exposure",

"Golden Hour":
"warm cinematic golden hour lighting, orange sunlight rays, volumetric sunlight, soft shadows, emotional atmosphere",

"Studio":
"professional photography studio lighting, softbox illumination, controlled shadows, premium portrait lighting",

"Ring Light":
"clean ring light portrait lighting, smooth facial illumination, beauty photography style",

"Flash":
"high fashion flash photography, sharp highlights, editorial magazine lighting",

"Neon":
"vibrant neon cyberpunk lighting, colorful reflections, futuristic atmosphere",

"Moody":
"dramatic moody lighting, deep shadows, cinematic contrast, artistic atmosphere"

},

kamera:{

"Close Up":
"professional portrait photography, 85mm lens, shallow depth of field, creamy bokeh, detailed facial focus",

"Medium Shot":
"50mm portrait photography, balanced composition, natural perspective, cinematic framing",

"Full Body":
"full body fashion photography, editorial composition, realistic body proportions",

"POV":
"first person perspective, realistic handheld camera view, immersive composition",

"Drone":
"aerial photography, high angle perspective, cinematic landscape composition",

"Selfie":
"realistic smartphone selfie, natural arm perspective, casual social media photography"

},

hair:{

"Short Hair":
"short textured haircut, realistic hair strands, natural volume",

"Long Hair":
"long flowing hair, realistic strands, natural movement",

"Curly":
"curly textured hair, detailed curls, realistic volume",

"Wavy":
"wavy hairstyle, natural hair texture, soft movement",

"Wolfcut":
"modern wolfcut hairstyle, layered hair, realistic texture",

"Bald":
"clean shaved head, realistic scalp texture"

},

hairColor:{

"Black":
"natural black hair color, realistic shine",

"Brown":
"natural brown hair color, soft highlights",

"Blonde":
"natural blonde hair color, golden tones, realistic texture",

"Red":
"natural red hair color, realistic texture",

"Gray":
"silver gray hair color, realistic aging texture"

},

outfit:{

"Casual":"wearing premium casual outfit with realistic cotton fabric",

"Streetwear":"wearing luxury oversized streetwear, layered fashion, premium fabric",

"Hoodie":"wearing oversized premium hoodie, thick cotton fabric, modern street fashion",

"Office":"wearing modern luxury office suit, clean formal style",

"Sport":"wearing premium sportswear, athletic fit, performance fabric",

"Elegant":"wearing elegant luxury formal fashion, premium tailoring",

"Hanbok":"wearing luxurious traditional Korean Hanbok, premium silk fabric, intricate embroidery, realistic cloth folds, culturally authentic",

"Kebaya":"wearing elegant Indonesian Kebaya, premium lace fabric, intricate batik details, traditional fashion",

"Kimono":"wearing authentic Japanese Kimono, premium silk texture, traditional pattern",

"Batik":"wearing luxury Indonesian Batik shirt, premium cotton fabric, elegant traditional pattern"

},

location:{

"Bedroom":"inside a modern luxury minimalist bedroom, aesthetic interior, clean room, premium furniture",

"Living Room":"inside a luxury modern living room, cozy atmosphere, premium interior design",

"Coffee Shop":"inside a modern aesthetic coffee shop, warm ambiance, premium cafe interior",

"Office":"inside a luxury modern office, clean workspace, elegant business environment",

"Street":"on a modern city street, urban lifestyle atmosphere",

"Rice Field":"inside a beautiful Indonesian rice field, lush green landscape, peaceful countryside, cinematic scenery",

"Beach":"on a tropical white sand beach, crystal clear water, beautiful blue sky",

"Mountain":"on a breathtaking mountain landscape, cinematic natural scenery",

"Forest":"inside a lush green forest, realistic natural environment",

"Studio":"inside a professional photography studio, seamless background"

},

hair:{

"Short Hair":"short textured haircut, realistic hair strands, natural volume",

"Long Hair":"long flowing hair, realistic strands, natural movement",

"Curly":"curly textured hair, detailed curls, realistic volume",

"Wavy":"wavy hairstyle, natural hair texture, soft movement",

"Wolfcut":"modern wolfcut hairstyle, layered hair, realistic texture",

"Bald":"clean shaved head, realistic scalp texture"

},

hairColor:{

"Black":"natural black hair color, realistic shine",

"Brown":"natural brown hair color, soft highlights",

"Blonde":"natural blonde hair, realistic golden tones",

"Red":"natural red hair color, realistic texture",

"Gray":"silver gray hair, realistic aging texture"

},

};

// ==========================
// FUNCTION DROPDOWN
// ==========================

function isiDropdown(id, data, placeholder) {

    const select = document.getElementById(id);

    select.innerHTML = "";

    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = placeholder;
    firstOption.disabled = true;
    firstOption.selected = true;

    select.appendChild(firstOption);

    data.forEach(item => {

        const option = document.createElement("option");

        option.value = item;
        option.textContent = item;

        select.appendChild(option);

    });

}

// ==========================
// ISI DROPDOWN
// ==========================

isiDropdown("negara", DATA.negara, "🌍 Pilih Negara");

isiDropdown("ras", [], "👤 Pilih Ras");

isiDropdown("gender", DATA.gender, "🚻 Pilih Gender");

isiDropdown("umur", DATA.umur, "🎂 Pilih Umur");

isiDropdown("rambut", DATA.rambut, "💇 Pilih Model Rambut");

isiDropdown("warnaRambut", DATA.warnaRambut, "🎨 Pilih Warna Rambut");

isiDropdown("lokasi", DATA.lokasi, "📍 Pilih Lokasi");

isiDropdown("lighting", DATA.lighting, "💡 Pilih Lighting");

isiDropdown("kamera", DATA.kamera, "📷 Pilih Kamera");

isiDropdown("outfit", DATA.outfit, "👕 Pilih Outfit");

isiDropdown("quality", DATA.quality, "✨ Pilih Quality");

// ==========================
// GANTI RAS
// ==========================

document.getElementById("negara").addEventListener("change", function () {

    isiDropdown(
        "ras",
        DATA.ras[this.value],
        "👤 Pilih Ras"
    );

    document.getElementById("ras").addEventListener("change", updatePreview);

    updatePreview();

});

// ==========================
// GENERATE PROMPT
// ==========================

document.getElementById("generateBtn").addEventListener("click", function () {

    const negara = document.getElementById("negara").value;
    const ras = document.getElementById("ras").value;
    const gender = document.getElementById("gender").value;
    const umur = document.getElementById("umur").value;
    const rambut = document.getElementById("rambut").value;
    const warna = document.getElementById("warnaRambut").value;
    const lokasi = document.getElementById("lokasi").value;
    const lighting = document.getElementById("lighting").value;
    const kamera = document.getElementById("kamera").value;
    const outfit = document.getElementById("outfit").value;
    const quality = document.getElementById("quality").value;
const genderAI = {
    "Cowok":"male",
    "Cewek":"female"
};

const genderPrompt = genderAI[gender] || gender;

const umurAI = {
    "18-25":"approximately 22 years old",
    "26-35":"approximately 30 years old",
    "36-45":"approximately 40 years old",
    "46-60":"approximately 50 years old",
    "60+":"elderly"
};

const umurPrompt = umurAI[umur] || umur;
    const kualitas = ENHANCER.quality[quality] || "";

const lightingPrompt = ENHANCER.lighting[lighting] || lighting;

const kameraPrompt = ENHANCER.kamera[kamera] || kamera;

const outfitPrompt = ENHANCER.outfit[outfit] || outfit;

const prompt = `
Create a highly realistic ${genderPrompt} from ${negara},
${ras} ethnicity,
${umurPrompt},
with realistic facial proportions,
symmetrical face,
natural looking skin texture,
${ENHANCER.hair[rambut] || rambut},
${ENHANCER.hairColor[warna] || warna},
${outfitPrompt},
${ENHANCER.location[lokasi] || lokasi},
${lightingPrompt},
${kameraPrompt},
professional photography,
highly detailed eyes,
realistic skin pores,
sharp focus,
depth of field,
photorealistic,
${kualitas}
`;

    document.getElementById("hasil").value = prompt;

});

// ==========================
// COPY
// ==========================

document.getElementById("copyBtn").addEventListener("click", function () {

    const text = document.getElementById("hasil").value;

    navigator.clipboard.writeText(text);

    alert("Prompt berhasil di copy!");

});

// ==========================
// LIVE PREVIEW
// ==========================

function updatePreview(){

document.getElementById("previewNegara").textContent=document.getElementById("negara").value||"-";

document.getElementById("previewRas").textContent=document.getElementById("ras").value||"-";

document.getElementById("previewGender").textContent=document.getElementById("gender").value||"-";

document.getElementById("previewUmur").textContent=document.getElementById("umur").value||"-";

document.getElementById("previewRambut").textContent=document.getElementById("rambut").value||"-";

document.getElementById("previewWarna").textContent=document.getElementById("warnaRambut").value||"-";

document.getElementById("previewOutfit").textContent=document.getElementById("outfit").value||"-";

document.getElementById("previewLokasi").textContent=document.getElementById("lokasi").value||"-";

document.getElementById("previewLighting").textContent=document.getElementById("lighting").value||"-";

document.getElementById("previewKamera").textContent=document.getElementById("kamera").value||"-";

document.getElementById("previewQuality").textContent=document.getElementById("quality").value||"-";

}

[
"negara",
"ras",
"gender",
"umur",
"rambut",
"warnaRambut",
"outfit",
"lokasi",
"lighting",
"kamera",
"quality"
].forEach(id=>{

document.getElementById(id).addEventListener("change",updatePreview);

});

updatePreview();

// ==========================
// IMAGE PREVIEW
// ==========================

document.getElementById("imageUpload").addEventListener("change", function(e){

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(event){

document.getElementById("previewImage").src = event.target.result;

document.getElementById("previewImage").style.display = "block";

document.getElementById("previewIcon").style.display = "none";

}

reader.readAsDataURL(file);

});

// ==========================
// EXPORT TXT
// ==========================

document.getElementById("exportBtn").addEventListener("click",function(){

const isi=document.getElementById("hasil").value;

const blob=new Blob([isi],{type:"text/plain"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="JAJA_AI_PROMPT.txt";

link.click();

URL.revokeObjectURL(link.href);

});
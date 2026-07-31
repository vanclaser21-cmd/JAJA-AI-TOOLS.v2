const DRAMA_STORAGE_KEY = "jaja_drama_project";

function loadDramaSession() {

    try {

        const data =
            localStorage.getItem(
                DRAMA_STORAGE_KEY
            );

        return data
            ? JSON.parse(data)
            : {};

    } catch (err) {

        console.error(
            "Load session error:",
            err
        );

        return {};

    }

}

function saveDramaSession(data) {

    localStorage.setItem(
        DRAMA_STORAGE_KEY,
        JSON.stringify(data)
    );

}
let dramaSession = loadDramaSession();

const categoryData = {

    "👔 CEO / Crazy Rich": [
        "CEO dingin",
        "Pewaris perusahaan",
        "Pernikahan kontrak",
        "Secret billionaire"
    ],

    "💔 Pengkhianatan": [
        "Perselingkuhan",
        "Sahabat menikung",
        "Keluarga mengkhianati",
        "Balas dendam"
    ],

    "⚡ Sistem Kehidupan": [
        "Reinkarnasi",
        "Level Up",
        "Sistem Misi",
        "Skill Baru",
        "Kaya Mendadak"
    ],

    "⚔️ Pendekar / Martial Arts": [
        "Sekte",
        "Kultivasi",
        "Dunia Jianghu",
        "Balas Dendam"
    ],

    "🩺 Dokter Jenius": [
        "Dokter Muda",
        "Ahli Bedah",
        "Tabib",
        "Menyelamatkan Orang Penting"
    ],

    "🎖️ Pensiunan Tentara / Agen Rahasia": [
        "Mantan Pasukan Khusus",
        "Bodyguard",
        "Secret Agent",
        "Hidden Identity"
    ],

    "🔥 Balas Dendam": [
        "Dikhianati",
        "Bangkit Kembali",
        "Membalas Satu per Satu"
    ],

    "👑 Kerajaan": [
        "Putri",
        "Pangeran",
        "Kaisar",
        "Politik Kerajaan"
    ],

    "🎓 Sekolah / Kampus": [
        "Teman Sebangku",
        "Bullying",
        "Cinta Pertama",
        "Genius Tersembunyi"
    ],

    "👨‍👩‍👧 Keluarga / Warisan": [
        "Perebutan Warisan",
        "Anak Hilang",
        "Orang Tua Kaya",
        "Rahasia Keluarga"
    ]
};

function populateSubCategory(categoryValue) {

    const subCategory =
        document.getElementById("storySubCategory");

    if (!subCategory) return;

    subCategory.options.length = 0;

    const first =
        document.createElement("option");

    first.text = "Pilih Sub Kategori";
    first.value = "";
    first.selected = true;
    first.disabled = true;

    subCategory.add(first);

    const list =
        categoryData[categoryValue] || [];

    list.forEach(item => {

        const opt =
            document.createElement("option");

        opt.text = item;
        opt.value = item;

        subCategory.add(opt);

    });

}

function toggleCustom(selectId, wrapId) {

    const select =
        document.getElementById(selectId);

    const wrap =
        document.getElementById(wrapId);

    if (!select || !wrap) return;

    const update = () => {

        wrap.style.display =
            select.value === "Custom"
                ? "block"
                : "none";

    };

    select.addEventListener(
        "change",
        update
    );

    update();
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const saved =
            loadDramaSession();

        const category =
            document.getElementById(
                "storyCategory"
            );

        const subCategory =
            document.getElementById(
                "storySubCategory"
            );

        if (saved.storyIdea)
            document.getElementById(
                "storyIdea"
            ).value =
            saved.storyIdea;

        if (saved.storyCategory && category) {

            category.value =
                saved.storyCategory;

            populateSubCategory(
                saved.storyCategory
            );

        }

        if (
            saved.storySubCategory &&
            subCategory
        ) {

            subCategory.value =
                saved.storySubCategory;

        }

        if (saved.genre)
            document.getElementById(
                "genre"
            ).value =
            saved.genre;

        if (saved.episodeCount)
            document.getElementById(
                "episodeCount"
            ).value =
            saved.episodeCount;

        if (saved.episodeDuration)
            document.getElementById(
                "episodeDuration"
            ).value =
            saved.episodeDuration;

        if (saved.aspectRatio)
            document.getElementById(
                "aspectRatio"
            ).value =
            saved.aspectRatio;

        if (saved.sceneStructure)
            document.getElementById(
                "sceneStructure"
            ).value =
            saved.sceneStructure;

        if (saved.shotDuration)
            document.getElementById(
                "shotDuration"
            ).value =
            saved.shotDuration;

        if (saved.visualStyle)
            document.getElementById(
                "visualStyle"
            ).value =
            saved.visualStyle;

        if (saved.customEpisode)
            document.getElementById(
                "customEpisode"
            ).value =
            saved.customEpisode;

        if (saved.customDuration)
            document.getElementById(
                "customDuration"
            ).value =
            saved.customDuration;

        if (saved.customScene)
            document.getElementById(
                "customScene"
            ).value =
            saved.customScene;

        if (saved.customShot)
            document.getElementById(
                "customShot"
            ).value =
            saved.customShot;

        if (saved.customVisual)
            document.getElementById(
                "customVisual"
            ).value =
            saved.customVisual;

        if (category && subCategory) {

            category.addEventListener(
                "change",
                () => {

                    populateSubCategory(
                        category.value
                    );

                }
            );

        }

        toggleCustom(
            "episodeCount",
            "customEpisodeWrap"
        );

        toggleCustom(
            "episodeDuration",
            "customDurationWrap"
        );

        toggleCustom(
            "sceneStructure",
            "customSceneWrap"
        );

        toggleCustom(
            "shotDuration",
            "customShotWrap"
        );

        toggleCustom(
            "visualStyle",
            "customVisualWrap"
        );

    }
);

const nextBtn =
    document.getElementById(
        "nextStep"
    );

if (nextBtn) {

    nextBtn.onclick = (e) => {
        console.log("NEXT DIKLIK");

        e.preventDefault();

        dramaSession.storyIdea =
            document.getElementById(
                "storyIdea"
            ).value;

        dramaSession.storyCategory =
            document.getElementById(
                "storyCategory"
            ).value;

        dramaSession.storySubCategory =
            document.getElementById(
                "storySubCategory"
            ).value;

        dramaSession.genre =
            document.getElementById(
                "genre"
            ).value;

        dramaSession.episodeCount =
            document.getElementById(
                "episodeCount"
            ).value;

        dramaSession.episodeDuration =
            document.getElementById(
                "episodeDuration"
            ).value;

        dramaSession.aspectRatio =
            document.getElementById(
                "aspectRatio"
            ).value;

        dramaSession.sceneStructure =
            document.getElementById(
                "sceneStructure"
            ).value;

        dramaSession.shotDuration =
            document.getElementById(
                "shotDuration"
            ).value;

        dramaSession.visualStyle =
            document.getElementById(
                "visualStyle"
            ).value;

        const customEpisode =
            document.getElementById(
                "customEpisode"
            );

        if (customEpisode)
            dramaSession.customEpisode =
                customEpisode.value;

        const customDuration =
            document.getElementById(
                "customDuration"
            );

        if (customDuration)
            dramaSession.customDuration =
                customDuration.value;

        const customScene =
            document.getElementById(
                "customScene"
            );

        if (customScene)
            dramaSession.customScene =
                customScene.value;

        const customShot =
            document.getElementById(
                "customShot"
            );

        if (customShot)
            dramaSession.customShot =
                customShot.value;

        const customVisual =
            document.getElementById(
                "customVisual"
            );

        if (customVisual)
            dramaSession.customVisual =
                customVisual.value;

        console.log(
    "SAVE DATA:",
    dramaSession
);

saveDramaSession(
    dramaSession
);

window.location.href =
    "ending-lock.html";

    };

}
const workflow = {

step:2,

total:4,

instruction:"LYRIC ANALYSIS",

guide:`
Tempel prompt ini ke ChatGPT.

AI akan menganalisis seluruh lirik lagu dan membuat file PROJECT_DATA.txt.

Jangan ubah isi file.

Nanti file ini akan dipakai pada langkah berikutnya.
`,

copyText:
"👇 PENCET INI AJA KAWAN",

copiedText:
"🔥 BERES... TINGGAL TEMPEL KE CHATGPT",

prompt:`You are a professional Music Video Creative Director.

Analyze the song below.

DO NOT create storyboard.

DO NOT create image prompt.

DO NOT create video prompt.

Your ONLY job is creating PROJECT_DATA.txt.

Analyze:

- Main Theme
- Emotional Journey
- Mood
- Story Direction
- Character Role
- Visual Style
- Ending
- Production Rules

Return ONLY this format.

PROJECT_DATA.txt

=================================

PROJECT TITLE

SONG ANALYSIS

MAIN STORY

CHARACTER PROFILE

VISUAL STYLE

ENDING

PRODUCTION RULES

=================================

Do not explain anything outside the file.

SONG INFORMATION

Title:
{{projectTitle}}

Genre:
{{genre}}

Duration:
{{duration}}

Visual Style:
{{visualStyle}}

Story Idea:
{{storyIdea}}

{{lyrics}}

Production Rules

Aspect Ratio:
{{aspectRatio}}

Scene Structure:
{{sceneStructure}}

Shot Duration:
{{shotDuration}}

`

};
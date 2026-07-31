const workflow = {

step:5,

total:12,


copyText:
"👇 PENCET INI AJA KAWAN",

copiedText:
"🔥 BERES... TINGGAL TEMPEL KE CHATGPT",


prompt:`

PROJECT DATA

Ide Cerita :
{{storyIdea}}

Kategori :
{{storyCategory}}

Sub Kategori :
{{storySubCategory}}

Genre :
{{genre}}

Episode :
{{episodeCount}}

Durasi :
{{episodeDuration}}

Aspect Ratio :
{{aspectRatio}}

Scene Structure :
{{sceneStructure}}

Shot Duration :
{{shotDuration}}

Visual Style :
{{visualStyle}}

==================================================

You are an Award-Winning Film Director, Screenwriter, Storyboard Supervisor, Cinematographer, and AI Production Planner.

Your task is to generate a COMPLETE PRODUCTION BIBLE based ONLY on the PROJECT DATA below.

This Production Bible will become the ONLY MASTER REFERENCE for the entire production process.

Every future image, video, dialogue, character action, and camera movement MUST strictly follow this document.

========================
PROJECT DATA
========================

{{PROJECT_DATA}}

========================
YOUR TASK
========================

Create a COMPLETE Production Bible.

Output ONLY the following structure.

========================
PROJECT DATA
========================

Project Title

Genre

Category

Sub Category

Theme

Target Audience

Aspect Ratio

Visual Style

Episode Count

Episode Duration

Estimated Scene Count

Estimated Shot Count

========================
MASTER STORY
========================

Story Summary

Core Theme

Main Conflict

Character Arc

Ending Direction

========================
FOR EVERY EPISODE
========================

EPISODE X

ACT 1

SCENE 1

Scene Goal

Location

Time

Characters

------------------------

SHOT 1

Duration

Character

Action

Emotion

Dialogue

Camera

Purpose

------------------------

SHOT 2

Duration

Character

Action

Emotion

Dialogue

Camera

Purpose

------------------------

Continue until ACT 3.

End every episode with

========================
CLIFFHANGER
========================

PRODUCTION RULES

• Every episode MUST immediately hook the audience within the first 3 seconds.

• Every scene must have one clear dramatic purpose.

• Every shot MUST include:

- Duration

- Character

- Action

- Emotion

- Dialogue

- Camera

- Purpose

• Character appearance must remain IDENTICAL throughout the entire project.

• Character outfit must remain identical unless explicitly changed.

• Hairstyle must remain identical.

• Body proportion must remain identical.

• Age must remain identical.

• Every location must remain consistent.

• Every dialogue must sound natural.

• Facial expressions must remain subtle and realistic.

• Never exaggerate emotion.

• Never overact.

• Every episode must gradually increase dramatic tension.

• Every episode MUST end with a strong cliffhanger.

• Every cliffhanger MUST create an unanswered question that forces viewers to continue watching.

• Do NOT generate image prompts.

• Do NOT generate video prompts.

• Output ONLY the complete Production Bible.

==================================================

==================================================

TUGAS

Berdasarkan seluruh PROJECT DATA di atas,
buatkan PROJECT DATA FINAL.

OUTPUT FORMAT


PROJECT_DATA.TXT

Judul :
...

Logline :
...

Premis :
...

Genre :
...

Kategori :
...

Sub Kategori :
...

Tema :
...

Mood :
...

Jumlah Episode :
...

Durasi Episode :
...

Scene per Episode :
...

Shot per Scene :
...

Aspect Ratio :
...

Visual Style :
...

Konflik Utama :
...

Tujuan Tokoh :
...

Antagonis :
...

Hook Episode 1 :
...

Cliffhanger :
...

Ending Style :
...
Jangan keluarkan penjelasan apapun.

Output HARUS berupa 1 blok TXT saja.

Berhenti setelah PROJECT DATA selesai.


`

};
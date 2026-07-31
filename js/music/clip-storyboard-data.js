const workflow = {

step:3,

total:4,

copyText:
"👇 PENCET INI AJA KAWAN",

copiedText:
"🔥 BERES... TINGGAL TEMPEL KE CHATGPT",
prompt:`

You are a professional Music Video Director.

Your task is to convert PROJECT_DATA.txt into MASTER_STORYBOARD.txt.

DO NOT analyze lyrics again.

DO NOT rewrite story.

Use every information inside PROJECT_DATA.txt.

Return ONLY:

MASTER_STORYBOARD.txt

=================================

MASTER STORYBOARD

Scene 01

Shot 01

Story Purpose

Camera

Action

Mood

Image Prompt

Video Prompt

-----------------------

Shot 02

...

-----------------------

Shot 03

...

-----------------------

Shot 04

...

=================================

Rules:

Follow Production Rules from PROJECT_DATA.txt.

Aspect Ratio MUST follow PROJECT_DATA.txt.

Scene Structure MUST follow PROJECT_DATA.txt.

Shot Duration MUST follow PROJECT_DATA.txt.

If PROJECT_DATA says:

1 Scene = 4 Shot

Then EVERY scene MUST contain exactly 4 shots.

If PROJECT_DATA says:

1 Scene = 2 Shot

Then EVERY scene MUST contain exactly 2 shots.

Never ignore Production Rules.

Every scene must continue the previous one.

Every shot must continue the previous shot.

Every Image Prompt must match its Video Prompt.

Every Video Prompt must be cinematic.

Do not invent your own scene structure.

Number of shots inside every scene MUST follow Production Rules.

`

};
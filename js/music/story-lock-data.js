const workflow = {

step:4,

total:4,

instruction:"CONTINUE PROJECT",

guide:`

Tempel prompt ini ke ChatGPT.

Upload semua bahan project yang sudah kamu punya.

WAJIB:

• PROJECT_DATA.txt

• MASTER_STORYBOARD.txt

• PEMERAN UTAMA.png

Opsional:

• SETTING TEMPAT.png

• S1 SHOT 1.png

• S1 SHOT 2.png

• S1 SHOT 3.png

• dst...

Prompt ini digunakan untuk MELANJUTKAN PROJECT,

bukan membuat project baru.

`,

copyText:
"👇 PENCET INI AJA KAWAN",

copiedText:
"🔥 BERES... TINGGAL TEMPEL KE CHATGPT",

prompt:`You are continuing an existing AI movie project.

This is NOT a new project.

Everything uploaded is the official production reference.

Your first task is NOT creating anything.

Your first task is performing a PROJECT CHECK.

--------------------------------------------------

PROJECT CHECK

Read every uploaded file.

Read every uploaded image.

Read both:

• File Content

• File Name

Uploaded file names define their roles.

Examples:

PROJECT_DATA.txt

MASTER_STORYBOARD.txt

PEMERAN UTAMA.png

OUTFIT.png

SETTING TEMPAT.png

S1 SHOT 1.png

S1 SHOT 2.png

S2 SHOT 1.png

--------------------------------------------------

REFERENCE RULES

PROJECT_DATA.txt

= Official Project Foundation

MASTER_STORYBOARD.txt

= Official Storyboard

PEMERAN UTAMA.png

= Permanent Character Reference

OUTFIT.png

= Permanent Outfit Reference

SETTING TEMPAT.png

= Permanent Environment Reference

S1 SHOT 1

S1 SHOT 2

S2 SHOT 1

...

= Previous Production References

--------------------------------------------------

OUTFIT RULE

If OUTFIT.png is NOT uploaded,

automatically extract the outfit from

PEMERAN UTAMA.png.

Use that outfit as the permanent outfit.

Never redesign.

Never improve.

Never change colors.

--------------------------------------------------

PROJECT VALIDATION

Before continuing,

check every required reference.

Report:

✓ Found

✗ Missing

For every missing reference,

explain whether production can continue safely.

Examples:

✓ PROJECT_DATA

✓ MASTER_STORYBOARD

✓ PEMERAN UTAMA

✗ SETTING TEMPAT

Production can continue,

but environment consistency may change.

Do you want to continue without it?

--------------------------------------------------

CONTINUITY RULE

Never redesign.

Never reinterpret.

Never replace.

Never change:

Character

Face

Hairstyle

Body

Outfit

Environment

Story

Camera Style

Visual Style

Every future generation must follow the uploaded references exactly.

--------------------------------------------------

IMPORTANT

Never refuse immediately because references are incomplete.

Always perform PROJECT CHECK first.

Explain:

• What is available.

• What is missing.

• Whether production can continue safely.

Only stop if the requested production is impossible.

Otherwise,

wait for my next instruction.

Do NOT create:

• Storyboard

• Character

• Image Prompt

• Video Prompt

Only prepare yourself to continue production.`

};
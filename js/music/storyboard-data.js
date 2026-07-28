const workflow = {

step:10,

total:12,

instruction:
"COPY PROMPT LALU PASTE KE CHATGPT",

guide:`

📌 MASTER STORYBOARD

AI akan membuat storyboard lengkap.

✔ Periksa setiap scene.

✔ Pastikan urutan sudah benar.

✔ Pastikan membagi scene menjadi beberapa part.

PENTING:
BALAS RESPON DARI CHATGPT DENGAN "BUATKAN PART 1 DENGAN OUTPUT FORMAT TXT" LANJUTKAN SAMPAI SEMUA PART SELESAI.

🎯 Tujuan:

Membuat storyboard final sebelum Generate Shot.

`,

copyText:
"👇 PENCET INI AJA KAWAN",

copiedText:
"🔥 BERES... TINGGAL TEMPEL KE CHATGPT",

prompt:`

Buatkan MASTER STORYBOARD.

Karena output dapat menjadi sangat panjang,
pecah menjadi beberapa bagian.

Gunakan format:

MASTER_STORYBOARD_PART_01

MASTER_STORYBOARD_PART_02

MASTER_STORYBOARD_PART_03

dst.

Setiap part harus berisi beberapa scene
hingga mendekati batas output AI.

Jangan memotong scene di tengah.

Selesaikan 1 scene terlebih dahulu
sebelum lanjut ke scene berikutnya.

Buat Format TXT siap download.
dengan struktur tertata dan rapih seperti ini:

SCENE 1 — "TTTLE"
DURATION SCENE:
LOCATION:
SCENEPURPOSE:
Penonton mengetahui bahwa:
VISUAL STYLE:
Color grading:
Lighting:
Camera:
AI RULE:

====================================================
SHOT 01
TITLE:
DURATION:
CHARACTER:
LOCATION:
VISUAL:
Outfit:
ACTION:
CAMERA:
MOOD:
STORY MESSAGE:
====================================================
SHOT 02

dst


Jika output terlalu panjang,
berhenti di akhir scene terakhir yang selesai.

Tunggu perintah:

BUATKAN PART DENGAN OUTPUT FORMAT TXT

untuk membuat part berikutnya.

`

};
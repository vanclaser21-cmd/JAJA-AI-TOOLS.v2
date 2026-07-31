const workflow = {

step:3,
total:4,

copyText:
"👇 PENCET INI AJA KAWAN",

copiedText:
"🔥 BERES... TINGGAL TEMPEL KE CHATGPT",

prompt:`

====================================================
OUTPUT PRODUCTION RULES
====================================================

Karena MASTER STORYBOARD memiliki output yang sangat panjang, storyboard WAJIB dibagi menjadi beberapa PART.

Setiap PART hanya boleh berisi maksimal 3 SCENE.

Jangan pernah memotong output di tengah SHOT.

Jangan pernah memotong output di tengah SCENE.

Jika output ChatGPT sudah mendekati batas maksimal, AI WAJIB:

1. Menyelesaikan SHOT yang sedang dikerjakan.
2. Menyelesaikan SCENE tersebut.
3. Berhenti setelah SCENE selesai.
4. Jangan mulai SCENE berikutnya.

====================================================

Setelah SCENE terakhir pada PART tersebut selesai, tampilkan:

========================================

END OF
MASTER STORYBOARD

PART XX

Progress:

Episode : XX
Scene selesai : XX
Shot terakhir : XX

Silakan ketik:

"Lanjut"

untuk membuat PART berikutnya.

========================================

====================================================

Saat user mengetik:

"Lanjut"

AI harus langsung melanjutkan dari SCENE berikutnya.

Jangan mengulang scene sebelumnya.

Jangan mengubah cerita.

Jangan mengubah karakter.

Jangan mengubah production rules.

Jangan membuat cerita baru.

Gunakan seluruh PROJECT_DATA.txt sebagai acuan utama.

====================================================

Seluruh PART harus menggunakan format yang sama hingga storyboard selesai.
`

};
const workflow = {

step:12,

total:12,

instruction:
"COPY PROMPT LALU PASTE KE CHATGPT",

guide:`

📌 CHAT LIMIT RECOVERY

Gunakan HANYA jika chat sebelumnya penuh atau limit.

✔ Tempel prompt ini ke chat baru.

✔ AI akan melanjutkan project dari progress terakhir.

✔ Tidak perlu mengulang STEP 01.

🎯 Tujuan:

Melanjutkan workflow tanpa kehilangan progress.

`,

copyText:
"👇 PENCET INI AJA KAWAN",

copiedText:
"🔥 BERES... TINGGAL TEMPEL KE CHATGPT",

prompt:`

Saya ingin melanjutkan project yang sudah berjalan.

Saya sudah mengupload:

- PROJECT_DATA_FILE
- SCENE_DEVELOPMENT
- MASTER_STORYBOARD_TERAKHIR
- CHARACTER_REFERENCE
- OUTFIT_REFERENCE
- LOCATION_REFERENCE

Status project saya:

Current Scene:
( isi sendiri lagi di scene berapa )

Current Shot:
( isi sendiri yang mau di generate shot berapa )

Last Completed:
( isi sendiri shot terakhir yang sudah selesai di generate )

Next Target:
( isi sendiri sama kayak di Current Shot )

Tolong:

1. Baca seluruh file
2. Tampilkan seluruh data lock
3. Ringkas project secara singkat
4. Konfirmasi posisi project saat ini

Jangan membuat data baru.

Jangan mengubah data lock.

Gunakan hanya data yang tersedia pada file.

Tunggu instruksi berikutnya.

`

};
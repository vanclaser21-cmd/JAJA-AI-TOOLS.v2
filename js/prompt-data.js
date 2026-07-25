const promptLibrary = {

indonesia:{

motionDetail:`Animasikan karakter dari Image agar mengikuti secara presisi seluruh gerakan, ekspresi wajah, gestur, timing, framing, sudut kamera, dan pergerakan kamera dari video referensi.
Pertahankan 100% identitas asli dari Image, termasuk wajah, gaya rambut, proporsi tubuh, warna kulit, pakaian, alas kaki, aksesori, warna, tekstur, latar belakang, pencahayaan, dan komposisi.
Pindahkan hanya gerakannya dari video referensi. Jangan pernah menyalin penampilan, pakaian, maupun identitas orang yang ada di video referensi.
Pastikan setiap gerakan terlihat halus, natural, realistis, dan konsisten di setiap frame. Hindari perubahan identitas karakter, perubahan wajah, perubahan pakaian, perubahan latar belakang, flicker, distorsi, deformasi, anggota tubuh tambahan, maupun ketidakkonsistenan visual lainnya.
Hasil akhir harus terlihat seolah-olah karakter asli dari Image secara alami melakukan seluruh gerakan yang ada di video referensi.`,

motionSimple:`Animasikan karakter (Karakter Avatar), agar meniru seluruh gerakan dari video referensi secara presisi.
Pertahankan wajah, identitas, pakaian, pencahayaan, dan latar belakang tanpa perubahan.
Tanpa mengubah sudut kamera maupun melakukan pergerakan kamera, tanpa mengubah posisi karakter di frame, pastikan posisi karakter mulai dari frame pertama hingga akhir frame tetap sama seperti pada gambar.
Pastikan seluruh gerakan terlihat natural, stabil, realistis, dan konsisten tanpa deformasi atau perubahan wajah.`,

faceSwap:`Ganti wajah pada (gambar referensi) dengan avatar saya (Karakter Avatar).
Hanya ganti wajah saja, biarkan ruangan, pakaian, dan pencahayaan tetap sama seperti gambar referensi.
Hasil akhir harus terlihat realistis, natural, konsisten, fotorealistis, tanpa deformasi, tanpa perubahan identitas karakter, tanpa perubahan proporsi tubuh, tanpa perubahan ekspresi yang tidak diperlukan.
Pastikan seluruh elemen menyatu secara sempurna, wajah proporsional simetris, mata sama besar, tekstur kulit alami dengan pori-pori terlihat.
Hindari wajah cacat, kulit plastik, dan mata tidak sejajar.`,

faceLighting:`Buat wajah terlihat lebih natural.
Foto potret realistis dengan wajah proporsional simetris, mata sama besar dan jelas, tekstur kulit alami dengan pori-pori terlihat, senyum tipis natural, cahaya lembut dari samping kiri, fokus tajam pada mata.
Hindari wajah cacat, kulit plastik, mata tidak sejajar.
Gunakan rasio 9:16.`,

replaceBackground:`Ganti ruangan pada (gambar yang mau diubah) agar terlihat seperti ruangan pada (gambar referensi).

Hanya ganti ruangan. Biarkan pencahayaan, angle kamera, sudut frame, pose karakter tetap sama.

Hasil akhir harus realistis, natural, fotorealistis, konsisten, tanpa deformasi, tanpa perubahan identitas karakter, proporsi tubuh maupun ekspresi. Pastikan seluruh elemen menyatu secara sempurna.`,

backgroundLighting:`Sesuaikan pencahayaan ruangan pada gambar agar terlihat sama seperti gambar referensi.

Pertahankan identitas karakter, pose, proporsi tubuh, dan seluruh elemen lainnya. Hasil akhir harus realistis, natural, fotorealistis, dengan pencahayaan yang menyatu sempurna.`,

avatarCloseUp:`Wanita berumur 25 tahun, orang Indonesia asli, keturunan Sunda, berkulit putih, berambut hitam panjang, bermata lebar, tinggi badan 168 cm, berat badan 58 kg.

Buat karakter avatar close-up dengan rasio 1:1.

Foto potret realistis, wajah proporsional simetris, mata sama besar, tekstur kulit alami dengan pori-pori, senyum tipis natural, cahaya lembut dari samping kiri, fokus tajam pada mata.

Hindari wajah cacat, kulit plastik, mata tidak sejajar.`,

avatarFullBody:`Buat satu gambar full body karakter avatar dengan rasio 9:16.

Gunakan detail karakter yang sama seperti sebelumnya.

Wanita berumur 25 tahun, orang Indonesia asli, keturunan Sunda, berkulit putih, berambut hitam panjang, bermata lebar, tinggi badan 168 cm, berat badan 58 kg.

Foto realistis full body dengan detail tinggi, wajah proporsional simetris, tekstur kulit alami, pencahayaan natural, fokus tajam, tanpa deformasi maupun perubahan identitas.`,

cosplay:`Gunakan karakter avatar saya sebagai identitas utama.

Ubah karakter saya menjadi cosplay karakter yang dipilih.

Salin outfit, gaya rambut, softlens, aksesori, warna pakaian, tekstur kain, detail kecil, dan keseluruhan tampilan cosplay agar identik dengan referensi.

Jangan mengubah wajah, bentuk wajah, proporsi tubuh, warna kulit, ekspresi dasar, maupun identitas karakter saya.

Pakaian harus terlihat menyatu secara alami dengan tubuh, memiliki lipatan kain yang realistis, tekstur bahan yang jelas, pencahayaan natural, dan bayangan yang sesuai.

Buat hasil full body dengan rasio 9:16.

Foto harus realistis, natural, fotorealistik, detail tinggi, tekstur kulit alami dengan pori-pori terlihat, wajah simetris, mata proporsional, tanpa deformasi, tanpa wajah plastik, dan tanpa perubahan identitas.`,

extendMotion:`Gunakan Character Image sebagai SATU-SATUNYA identitas karakter.

Gunakan Motion Reference hanya sebagai referensi gerakan tubuh.

Jangan pernah menyalin wajah, pakaian, rambut, identitas, bentuk tubuh, ataupun penampilan dari Motion Reference.

Kunci kamera seperti pada Character Image.

Abaikan seluruh gerakan kamera, zoom, framing, crop, maupun perubahan perspektif.

Transfer hanya skeletal body motion sehingga video lanjutan terlihat menyambung secara natural.

Negative Prompt:

camera movement,
camera drift,
camera shake,
zoom,
zoom in,
zoom out,
dynamic camera,
camera orbit,
camera roll,
camera tilt,
camera pan,
camera dolly,
camera truck,
changing perspective,
changing framing,
cropping,
subject scaling,
subject reposition,
subject resizing.`,

outfitPoseBackground:`Gunakan Karakter Avatar sebagai satu-satunya identitas.

Gunakan Referensi Pose hanya untuk pose tubuh dan sudut kamera.

Gunakan Outfit Referensi hanya untuk pakaian.

Gunakan Setting Tempat hanya untuk latar belakang.

Pertahankan wajah, bentuk wajah, warna kulit, bentuk tubuh, gaya rambut, tinggi badan, proporsi tubuh, dan seluruh identitas karakter.

Salin pose tubuh, posisi tangan, arah kepala, arah pandangan, framing, komposisi, perspektif, dan sudut kamera seakurat mungkin.

Outfit harus mengikuti bentuk tubuh secara alami dengan pencahayaan dan lipatan kain yang realistis.

Background harus menyatu dengan pencahayaan, perspektif, warna ruangan, dan atmosfer.

Hasil akhir harus realistis, natural, fotorealistik, sangat detail, tanpa deformasi, tanpa perubahan identitas karakter, dan seluruh elemen menyatu sempurna.`,

sceneLock:`Animasikan @Scene Reference

ADEGAN :

(PASTE STORYBOARD DI SINI)

tanpa perpindahan atau mengubah arah kamera dari si karakter utama pria.
kamera terus mengikuti karakter utama pria tanpa ada perpindahan scene ataupun cut scene.
buat dengan video cinematic, (tergantung video yang dibuat), dengan durasi (disesuaikan sendiri) detik tanpa cut scene.

buat setting tempat seperti yang terlihat di @Scene Reference.

tanpa merubah apapun,
tanpa menambah hal yang tidak perlu,
tanpa mengganti hal yang tidak diminta,
kunci perintah dan ikuti perintah dengan konsisten.

gunakan gambar @Scene Reference sebagai frame pertama (first frame) yang terkunci, bukan hanya sebagai referensi gaya.

tanpa merubah postur karakter,
tanpa merubah wajah karakter,
tanpa merubah setting tempat,
tanpa merubah outfit,
tanpa merubah gaya rambut,
tanpa merubah warna rambut,
buat semua konsisten.

gunakan referensi wajah pria @Character Reference.
gunakan referensi outfit pria @Outfit Reference.`
,

flowLock: `Pastikan mengikuti seluruh instruksi yang telah saya berikan.`,

identityLock:`gunakan wajah karkter sheet yang barusan saya upload menjadi pemeran utama dalam (disesuaikan dengan kebutuhan), dan gambar full body menjadi refrensi outfit yang akan terus di pake dalam (disesuaikan dengan kebutuhan) sebelum saya memberi perintah untuk di rubah, jangan pernah di ganti tanpa perintah dari saya.

jadi untuk kedepannya setiap kali saya membuat gambar/video disini, pastikan karakter utama memiliki wajah dan penampilan sesuai dengan gambar yang saya kirim, dan kita akan memanggil karakter kita dengan nama (nama karakter kita).`

},

english:{

motionDetail:`Animate the character from Image by precisely following the motion, facial expressions, gestures, timing, framing, camera angle, and camera movement from the reference video.
Preserve 100% of the original identity from Image, including the face, hairstyle, body proportions, skin tone, clothing, footwear, accessories, colors, textures, background, lighting, and composition.
Transfer only the motion from the reference video. Never copy the appearance, clothing, or identity of the reference subject.
Ensure smooth, natural movement with perfect frame-to-frame consistency.
Prevent identity drift, face morphing, clothing changes, background changes, flickering, warping, deformation, extra limbs, or any visual inconsistencies.
The final result should look as if the original character from Image naturally performed the exact actions in the reference video.`,

motionSimple:`Animate (Character Avatar) to precisely replicate every movement from the reference video.
Maintain the face, identity, clothing, lighting, and background without any changes.
Do not change the camera angle or move the camera.
Ensure every movement looks natural, stable, realistic, and consistent without deformation or facial changes.`,

faceSwap:`Replace the face in (Reference Image) with my avatar (Character Avatar).
Only replace the face while keeping the room, clothing, and lighting exactly the same.
The final result must look realistic, natural, consistent, and photorealistic without deformation, without changing the character's identity, body proportions, or unnecessary facial expressions.
Ensure every element blends seamlessly with a proportional symmetrical face, evenly sized eyes, natural skin texture with visible pores.
Avoid facial deformities, plastic skin, and misaligned eyes.`,

faceLighting:`Make the face look more natural.
Create a realistic portrait with a proportional symmetrical face, evenly sized eyes, natural skin texture with visible pores, a subtle natural smile, soft light coming from the left side, and sharp focus on the eyes.
Avoid facial deformities, plastic skin, and misaligned eyes.
Use a 9:16 aspect ratio.`,

replaceBackground:`Replace the room in the image so it matches the reference room.

Only replace the environment. Keep the lighting, camera angle, framing, character pose, facial identity, clothing, and body proportions unchanged.

The final image must be realistic, natural, photorealistic, consistent, and seamlessly blended without deformation or identity changes.`,

backgroundLighting:`Adjust the lighting of the current environment so it matches the reference image.

Preserve the character's identity, pose, clothing, body proportions, and all other visual elements. The final result should look natural, realistic, and perfectly integrated.`,

avatarCloseUp:`25-year-old native Indonesian woman of Sundanese ethnicity with fair skin, long black hair, wide eyes, height 168 cm, weight 58 kg.

Create a realistic close-up avatar with a 1:1 aspect ratio.

Symmetrical face, evenly sized eyes, natural skin texture with visible pores, subtle smile, soft side lighting, sharp eye focus.

Avoid facial deformation, plastic skin, and misaligned eyes.`,

avatarFullBody:`Create one realistic full-body avatar with a 9:16 aspect ratio.

Use the exact same character identity described previously.

25-year-old native Indonesian woman of Sundanese ethnicity with fair skin, long black hair, wide eyes, height 168 cm, weight 58 kg.

Highly detailed photorealistic full-body portrait with symmetrical face, natural skin texture, realistic lighting, sharp details, and consistent identity without deformation.`,

cosplay:`Use my Avatar Character as the only identity reference.

Transform the avatar into the selected cosplay character.

Copy the outfit, hairstyle, contact lenses, accessories, colors, fabric textures, and every visual detail from the cosplay reference.

Do not change the face, facial structure, body proportions, skin tone, hairstyle, or identity of my avatar.

The clothing must naturally fit the body with realistic folds, fabric textures, lighting, and shadows.

Generate a full-body image with a 9:16 aspect ratio.

The final image must be realistic, natural, photorealistic, highly detailed, with visible skin pores, symmetrical face, proportional eyes, no deformation, no plastic skin, and no identity changes.`,

extendMotion:`Use Character Image as the ONLY identity reference.

Use Motion Reference ONLY as body motion reference.

Never copy the face, clothing, hairstyle, body shape, or appearance from Motion Reference.

Lock the camera exactly like Character Image.

Ignore every camera movement, zoom, crop, framing change, and perspective change.

Transfer only skeletal body motion so the continuation looks perfectly seamless.

Negative Prompt:

camera movement,
camera drift,
camera shake,
zoom,
zoom in,
zoom out,
dynamic camera,
camera orbit,
camera roll,
camera tilt,
camera pan,
camera dolly,
camera truck,
changing perspective,
changing framing,
cropping,
subject scaling,
subject reposition,
subject resizing.`,

outfitPoseBackground:`Use Avatar Character as the only identity reference.

Use Pose Reference only for body pose and camera angle.

Use Outfit Reference only for clothing.

Use Environment Reference only for the background.

Preserve the face, facial structure, skin tone, hairstyle, body proportions, height, and every unique identity feature.

Accurately replicate body pose, hand position, head direction, eye direction, framing, composition, perspective, and camera angle.

The outfit must naturally follow the body shape with realistic fabric folds, lighting, and shadows.

Blend the background with realistic lighting, perspective, atmosphere, and room colors.

The final result must be realistic, natural, photorealistic, highly detailed, with perfect identity consistency and seamless integration of every visual element.`,

sceneLock: `Animate @Scene Reference

SCENE :

(PASTE STORYBOARD HERE)

without moving or changing the camera direction from the main male character.

the camera continuously follows the main male character without any scene transition or cut scene.

create a cinematic video, (depending on the desired concept), with a duration of (adjust as needed) seconds without any cut scene.

create the environment exactly as shown in @Scene Reference.

without changing anything,
without adding unnecessary elements,
without replacing anything that was not requested,
lock every instruction and follow every instruction consistently.

use @Scene Reference as the locked first frame, not just as a style reference.

without changing the character's body posture,
without changing the character's face,
without changing the environment,
without changing the outfit,
without changing the hairstyle,
without changing the hair color,
keep everything consistent.

use @Character Reference as the male face reference.

use @Outfit Reference as the male outfit reference.`,

flowLock: `Make sure to follow every instruction I have provided.`,

identityLock: `Use the character sheet face image that I have just uploaded as the main character in (adjust according to your needs), and use the full body image as the outfit reference that will continue to be used in (adjust according to your needs) until I specifically instruct you to change it. Never replace it without my permission.

From this point forward, every time I create an image or video here, make sure the main character always keeps the same face and appearance as the images I uploaded. We will refer to this character by the name (character name).`

}

};
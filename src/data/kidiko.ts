export const indexedRoutes = [
  '/',
  '/toko/',
  '/kontak/',
  '/tentang/',
  '/impact/',
  '/product/toefl-itp-kidiko/',
  '/toefl-itp/',
  '/product/paket-keluarga-grup-wa-dika-maksimal-5-peserta/',
  '/product/paket-kelas-grup-wa-diko-maksimal-50-peserta/',
  '/product/paket-keluarga-grup-wa-diko-maksimal-5-peserta/',
  '/penawaran/',
  '/product/paket-komunitas-grup-wa-diki-maksimal-50-peserta/',
  '/author/kidiko/',
  '/product/paket-kelas-grup-wa-dika-maksimal-50-peserta/',
  '/product-category/paket-ai/',
  '/blog/',
  '/pengembang/',
  '/product/paket-kawan-grup-wa-diki-maksimal-5-peserta/',
];

export const products = [
  {
    slug: 'toefl-itp-kidiko',
    name: 'TOEFL ITP Kidiko',
    audience: 'Siswa, mahasiswa, dan kelas persiapan tes',
    capacity: 'Program latihan terarah',
    description:
      'Pendamping latihan TOEFL ITP berbasis AI untuk drilling vocabulary, grammar, reading, dan pembahasan yang bisa diakses lewat grup WhatsApp.',
    features: ['Latihan bertahap', 'Pembahasan jawaban', 'Materi bisa memakai RAG', 'Rekap progres peserta'],
  },
  {
    slug: 'paket-keluarga-grup-wa-dika-maksimal-5-peserta',
    name: 'Paket Keluarga Grup WA Dika',
    audience: 'Keluarga kecil',
    capacity: 'Maksimal 5 peserta',
    description:
      'AI pendamping belajar untuk keluarga dengan kontrol orang tua atau pendamping agar anak tetap bertanya dan belajar secara aman.',
    features: ['Grup keluarga', 'Moderasi prompt', 'Ringkasan aktivitas', 'Bahan belajar keluarga'],
  },
  {
    slug: 'paket-keluarga-grup-wa-diko-maksimal-5-peserta',
    name: 'Paket Keluarga Grup WA Diko',
    audience: 'Keluarga kecil',
    capacity: 'Maksimal 5 peserta',
    description:
      'Paket grup WhatsApp untuk mendampingi rutinitas belajar harian anak, tanya jawab, dan latihan mandiri dengan pengawasan.',
    features: ['Respons AI terkendali', 'Pantauan wali', 'Belajar di WA', 'Cocok untuk sinyal terbatas'],
  },
  {
    slug: 'paket-kawan-grup-wa-diki-maksimal-5-peserta',
    name: 'Paket Kawan Grup WA Diki',
    audience: 'Kelompok belajar kecil',
    capacity: 'Maksimal 5 peserta',
    description:
      'Paket untuk teman belajar yang ingin berdiskusi, bertanya ke AI, dan tetap menjaga diskusi sosial di dalam grup.',
    features: ['Diskusi kelompok', 'AI sebagai fasilitator', 'Batasan topik aman', 'Cocok untuk peer learning'],
  },
  {
    slug: 'paket-kelas-grup-wa-diko-maksimal-50-peserta',
    name: 'Paket Kelas Grup WA Diko',
    audience: 'Kelas sekolah atau bimbel',
    capacity: 'Maksimal 50 peserta',
    description:
      'AI kelas di grup WhatsApp untuk membantu menjawab pertanyaan siswa, merujuk materi kelas, dan memberi guru ruang untuk memvalidasi jawaban.',
    features: ['Dashboard guru', 'RAG dari materi kelas', 'Moderasi keamanan', 'Rekap aktivitas siswa'],
  },
  {
    slug: 'paket-kelas-grup-wa-dika-maksimal-50-peserta',
    name: 'Paket Kelas Grup WA Dika',
    audience: 'Kelas besar',
    capacity: 'Maksimal 50 peserta',
    description:
      'Pendamping AI untuk kelas aktif, membantu guru mengelola pertanyaan yang berulang dan menjaga siswa tetap berinteraksi.',
    features: ['Validasi guru', 'Catatan aktivitas', 'Kontrol topik', 'Pemakaian ringan di jaringan rendah'],
  },
  {
    slug: 'paket-komunitas-grup-wa-diki-maksimal-50-peserta',
    name: 'Paket Komunitas Grup WA Diki',
    audience: 'Komunitas belajar',
    capacity: 'Maksimal 50 peserta',
    description:
      'Paket untuk komunitas pendidikan yang membutuhkan AI penjawab, kurasi materi, dan moderasi agar diskusi tetap sehat.',
    features: ['Komunitas belajar', 'Basis pengetahuan komunitas', 'Moderasi', 'Ringkasan diskusi'],
  },
];

export const pillars = [
  {
    title: 'AI di WhatsApp',
    text: 'Siswa dan guru tidak perlu memasang aplikasi baru. Kidiko hadir di grup WA yang sudah dipakai setiap hari.',
  },
  {
    title: 'RAG untuk jawaban presisi',
    text: 'Guru dapat menyiapkan materi, aturan kelas, dan dokumen rujukan agar jawaban AI mengikuti konteks pembelajaran.',
  },
  {
    title: 'Guru tetap memantau',
    text: 'Aktivitas siswa bisa diringkas, dipantau, dan divalidasi sehingga AI membantu kelas tanpa menggantikan peran guru.',
  },
  {
    title: 'Moderasi prompt',
    text: 'Kidiko membatasi prompt berbahaya, penyalahgunaan, dan permintaan di luar konteks belajar.',
  },
];

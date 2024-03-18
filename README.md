# Struktur Direktori Aplikasi Next.js

Berikut adalah struktur direktori untuk aplikasi Next.js:

```
my-nextjs-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── hello.ts
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── hooks/
│   │   │   └── useCustomHook.ts
│   │   ├── lib/
│   │   │   ├── db.ts
│   │   │   └── ...
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── index.tsx
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── ...
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── ...
│   │   └── utils/
│   │       ├── helpers.ts
│   │       └── ...
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   └── ...
│   └── ...
├── prisma/
│   ├── schema.prisma
│   └── ...
├── tests/
│   ├── unit/
│   │   └── ...
│   └── integration/
│       └── ...
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Penjelasan Struktur Direktori

- `app`: Direktori utama untuk kode aplikasi Next.js.
  - `api`: Direktori untuk menyimpan route API.
  - `components`: Direktori untuk menyimpan komponen React yang dapat digunakan kembali.
  - `hooks`: Direktori untuk menyimpan custom hooks.
  - `lib`: Direktori untuk menyimpan library atau modul yang digunakan dalam aplikasi.
  - `models`: Direktori untuk menyimpan model data atau definisi tipe data.
  - `pages`: Direktori untuk menyimpan halaman Next.js.
  - `styles`: Direktori untuk menyimpan file CSS global atau styling.
  - `utils`: Direktori untuk menyimpan fungsi utilitas atau helper.

- `public`: Direktori untuk menyimpan aset statis seperti gambar, ikon, atau file lainnya yang dapat diakses langsung.

- `prisma`: Direktori untuk menyimpan konfigurasi dan migrasi database menggunakan Prisma.

- `tests`: Direktori untuk menyimpan file pengujian.
  - `unit`: Direktori untuk menyimpan pengujian unit.
  - `integration`: Direktori untuk menyimpan pengujian integrasi.

- `.env`: File untuk menyimpan variabel lingkungan.

- `.gitignore`: File untuk menentukan file atau direktori yang harus diabaikan oleh Git.

- `package.json`: File untuk menyimpan informasi proyek, dependensi, dan skrip.

- `tsconfig.json`: File konfigurasi TypeScript.

- `next.config.js`: File konfigurasi Next.js.

- `README.md`: File untuk memberikan informasi tentang proyek.

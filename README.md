# Patara

Patara, modern web teknolojileri kullanılarak geliştirilmiş bir web uygulamasıdır. Next.js, React ve Tailwind CSS gibi güncel teknolojiler kullanılarak oluşturulmuştur.

## 🚀 Özellikler

- Modern ve responsive tasarım
- TypeScript ile tip güvenliği
- Tailwind CSS ile özelleştirilebilir UI
- shadcn bileşenleri ile erişilebilir arayüz
- ESLint ve Prettier ile kod kalitesi

## 🛠️ Kullanılan Teknolojiler

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 📁 Proje Yapısı

patara/
├── components/     # Yeniden kullanılabilir UI bileşenleri
├── layout/        # Sayfa düzeni bileşenleri
├── lib/          # Yardımcı fonksiyonlar ve utilities
├── pages/        # Next.js sayfa bileşenleri
├── public/       # Statik dosyalar
├── styles/       # Global stil dosyaları
├── .next/        # Next.js build çıktıları
└── node_modules/ # Bağımlılıklar

## 📋 Gereksinimler

- Node.js v20.x veya üzeri
- pnpm paket yöneticisi

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone [repo-url]
cd patara
```

2. Bağımlılıkları yükleyin:
```bash
pnpm install
```

3. Geliştirme sunucusunu başlatın:
```bash
pnpm dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Build

Projeyi production için build etmek için:

```bash
pnpm build
```

Build edilen projeyi çalıştırmak için:

```bash
pnpm start
```

## 🧪 Linting

Kod kalitesini kontrol etmek için:

```bash
pnpm lint
```


# Naufal Algiffary Portfolio Website

Website portofolio personal untuk menampilkan profil, pengalaman kerja, dan tech stack Naufal Algiffary sebagai Frontend, Mobile, dan Fullstack Developer.

## Highlights

- Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4
- Full animated UI with scroll reveal transitions
- Parallax effects on background layers and stack section
- Experience timeline based on CV
- Clickable contact links (email, LinkedIn, GitHub)
- Profile photo and downloadable CV embedded in the site

## Tech Stack

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Runtime: React 19
- Linting: ESLint

## Project Structure

```text
src/app/
  layout.tsx
  page.tsx
  globals.css
public/
  profile.jpg
  Naufal-Algiffary-CV.pdf
```

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run production server locally:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Netlify Deployment

Project ini sudah disiapkan untuk deployment ke Netlify menggunakan file `netlify.toml`.

### Deploy via Netlify UI

1. Push repository ke GitHub.
2. Login ke Netlify dan klik `Add new site` -> `Import an existing project`.
3. Pilih repository ini.
4. Build command: `npm run build`
5. Publish directory: biarkan default (ditangani oleh plugin Next.js di Netlify).
6. Deploy.

### Optional Environment Variables

Saat ini project ini tidak membutuhkan environment variable khusus.

## Author

- Name: Naufal Algiffary
- LinkedIn: [https://www.linkedin.com/in/naufalgiffary](https://www.linkedin.com/in/naufalgiffary)
- GitHub: [https://github.com/naufalgiffary](https://github.com/naufalgiffary)

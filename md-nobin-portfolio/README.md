# Md Nobin | Personal Brand Portfolio

Production-ready, ultra-fast personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed for deployment to **GitHub Pages**.

---

## 🚀 Quickstart

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Locally**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📁 Where to Add Your Content & Media

| Content Item | Target Location | Notes |
|---|---|---|
| **Your Profile Photo** | `public/images/profile.jpg` | Replace with your photo (square aspect ratio recommended). |
| **Project Images** | `public/images/projects/` | e.g. `project-01.jpg`, `project-02.jpg`. |
| **Downloadable PDFs** | `public/downloads/` | e.g. `seo-audit-sample.pdf`, `case-study.pdf`. |
| **Projects & Case Studies** | `src/data/projects.js` | Edit challenge, results, strategy, downloads, and links. |
| **Services & Deliverables** | `src/data/services.js` | Edit headline descriptions and bullet points. |
| **Certificates** | `src/data/certifications.js` | Add issuer, name, and credential link. |
| **Testimonials** | `src/data/testimonials.js` | Add authentic client feedback or leave empty to hide. |
| **Pricing & Process** | `src/data/process.js` | Adjust pricing packages or scopes. |
| **Social & Contact Details** | `src/data/siteConfig.js` | Update email, calendar, and platform URLs. |

---

## ⚙️ Contact Form & Integration Setup

Create a `.env` file in the root directory (based on `.env.example`):

```env
# Formspree or Web3Forms Endpoint
VITE_FORM_ENDPOINT=https://formspree.io/f/your_form_id

# Direct Channels
VITE_CONTACT_EMAIL=contact@mdnobin.com
VITE_WHATSAPP_NUMBER=8801700000000
VITE_CALENDAR_URL=https://calendly.com/your-username

# Social Profiles (Leave empty to hide buttons)
VITE_LINKEDIN_URL=https://linkedin.com/in/your-profile
VITE_GITHUB_URL=https://github.com/your-username
VITE_FIVERR_URL=
VITE_UPWORK_URL=
```

---

## 🌐 Deploying to GitHub Pages

1. Push your code to your GitHub repository on branch `main`.
2. Go to **Settings** → **Pages** in your GitHub repository.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The included workflow `.github/workflows/deploy.yml` will automatically build and publish the site on every push.

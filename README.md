# My Academic Website

Personal academic homepage for [Xiaochuan Li](https://xiaochuanli.com), built with [Hugo](https://gohugo.io) using the [academimal](https://github.com/yangl1996/academimal) theme.

## Getting Started

Install [Hugo](https://gohugo.io/installation/) (extended edition), then run the development server:

```bash
hugo server
```

Open [http://localhost:1313](http://localhost:1313) to see the result. The page auto-reloads as you edit files.

## Project Structure

```
config.toml                  # Site configuration
content/
  _index.md                  # Homepage (bio, about me)
  publications/_index.md     # Publications section page
data/
  publications/papers.yaml   # Publication entries
  experience.yaml            # Experience entries
  awards.yaml                # Award entries
static/                      # Static assets (images, PDFs, favicons)
themes/academimal/           # Hugo theme (customized)
```

## Editing Content

- **Bio**: Edit `content/_index.md`
- **Publications**: Edit `data/publications/papers.yaml`
- **Experience**: Edit `data/experience.yaml`
- **Awards**: Edit `data/awards.yaml`
- **Site config** (name, email, social links): Edit `config.toml`

## Building

```bash
hugo --gc --minify
```

Output is generated in the `public/` directory.

## Deployment

The site is deployed to [GitHub Pages](https://pages.github.com) via GitHub Actions. Pushing to `main` triggers an automatic build and deploy (see `.github/workflows/hugo.yml`).

Custom domain `xiaochuanli.com` is configured via the `static/CNAME` file and DNS A records pointing to GitHub Pages.

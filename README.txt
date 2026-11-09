# EXPO 2026 Staff QR Profile System

A static, mobile-friendly staff profile website. Each employee has a unique link (`?id=01` ... `?id=22`) and QR code. WhatsApp opens with a prefilled message.

## Included
- 22 staff records imported from the supplied Excel file
- Individual profile pages generated from one responsive template
- WhatsApp click-to-chat button
- Staff directory and search
- QR generation script

## Free hosting: GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a **public** repository, e.g. `expo-2026-staff`.
3. Upload the contents of this folder (not the ZIP itself) to the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
6. After GitHub gives you the published URL, copy it. It will look like `https://YOUR-USERNAME.github.io/expo-2026-staff/`.

## Generate QR PNG files
On a computer with Python installed:
```bash
pip install qrcode[pil]
python generate_qr.py "https://YOUR-USERNAME.github.io/expo-2026-staff/"
```
The script writes one PNG per staff member into `qr-codes/`. Print each QR with the matching staff name. Scan-test before printing.

## Change WhatsApp message
Edit `WHATSAPP_MESSAGE` at the top of `app.js`. Keep `{name}` where you want the employee's name inserted. Example:
`Hello {name}, I met you at EXPO 2026. Please share your product catalogue. Thank you.`

## Update staff
Edit `data/staff.json`. Each record needs `id`, `name`, `phone` (country code, digits only, no +), `designation`, and `workplace`. IDs must be unique.

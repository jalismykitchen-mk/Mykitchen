import json, sys, re
from pathlib import Path
import qrcode

if len(sys.argv) < 2:
    raise SystemExit('Usage: python generate_qr.py "https://YOUR-USERNAME.github.io/expo-2026-staff/"')
base = sys.argv[1].rstrip("/") + "/"
root = Path(__file__).parent
staff = json.loads((root / "data/staff.json").read_text(encoding="utf-8"))
out = root / "qr-codes"
out.mkdir(exist_ok=True)
for person in staff:
    url = base + "?id=" + person["id"]
    img = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=12, border=4)
    img.add_data(url); img.make(fit=True)
    qr = img.make_image(fill_color="#171719", back_color="white").convert("RGB")
    qr.save(out / f'{person["id"]}_{re.sub(r"[^A-Za-z0-9]+","_",person["name"]).strip("_")}.png')
print(f"Created {len(staff)} QR codes in {out}")

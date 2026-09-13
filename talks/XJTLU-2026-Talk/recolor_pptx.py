"""Swap the deck's blue ramp for NYU Violet directly in the OOXML.

Used because the deck is currently held open by the local document preview,
which blocks `slidep upsert-dsl` ("Export file is occupied"). The DSL source in
slides/*.slide was recoloured separately (recolor_to_nyu_violet.py), so this
script keeps the binary and the source in sync.

Every colour in the deck is an explicit <a:srgbClr val="RRGGBB"/>  (verified:
zero <a:schemeClr/> theme references across all 16 slides), so an attribute
swap is lossless and cannot disturb layout, the embedded video, or notes.
"""

from __future__ import annotations

import re
import sys
import zipfile

# Same mapping as recolor_to_nyu_violet.py. Source: NYU MarComm brand guidelines.
MAP = {
    "1E4FA8": "57068C",  # primary accent   -> NYU Violet
    "0E3F8C": "330662",  # deep backgrounds -> Deep Violet
    "3D7BD9": "7B5AA6",  # secondary accent -> Medium Violet 2
    "E8EFF8": "EEE6F3",  # light text/depth -> Light Violet 2
    "F0F5FC": "F6F1FA",  # card background  -> violet tint
    "F7F9FC": "FAF8FC",  # card background  -> paler violet tint
    "E5E7EB": "E4DCEC",  # border           -> violet-tinted border
    "D6DCE5": "D9D0E4",  # divider / border -> violet-tinted border
}

SRC = "XJTLU-2026-Talk.pptx"
DST = sys.argv[1] if len(sys.argv) > 1 else SRC

PATTERN = re.compile(rb'(<a:srgbClr val=")([0-9A-Fa-f]{6})("/>)')


def convert(data: bytes) -> tuple[bytes, int]:
    hits = 0

    def sub(m: re.Match) -> bytes:
        nonlocal hits
        old = m.group(2).decode().upper()
        new = MAP.get(old)
        if new is None:
            return m.group(0)
        hits += 1
        return m.group(1) + new.encode() + m.group(3)

    return PATTERN.sub(sub, data), hits


def main() -> None:
    with zipfile.ZipFile(SRC) as zin:
        items = [(i, zin.read(i.filename)) for i in sorted(zin.infolist(), key=lambda i: i.filename)]
        # keep compression + ordering identical to the source package

    total = 0
    with zipfile.ZipFile(DST, "w", zipfile.ZIP_DEFLATED) as zout:
        for info, data in items:
            if info.filename.endswith((".xml", ".rels")):
                data, hits = convert(data)
                total += hits
            new = zipfile.ZipInfo(info.filename, date_time=info.date_time)
            new.compress_type = info.compress_type
            new.external_attr = info.external_attr
            zout.writestr(new, data)

    print(f"recoloured {total} srgbClr tokens -> {DST}")

    # verification
    with zipfile.ZipFile(DST) as z:
        leftover = set()
        for n in z.namelist():
            if n.endswith(".xml"):
                leftover |= {m.group(2).decode().upper() for m in PATTERN.finditer(z.read(n))}
        stale = sorted(set(MAP) & leftover)
        print("palette now in use:", sorted(leftover))
        print("stale blue tokens remaining:", stale or "none")
        print("slides:", len([n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)]),
              "| notesSlides:", len([n for n in z.namelist() if "notesSlides/notesSlide" in n]),
              "| media:", sorted(n for n in z.namelist() if "/media/" in n))


if __name__ == "__main__":
    main()

"""Recolor the deck's slide DSL from the academic blue ramp to NYU Violet + white.

NYU brand colors, from NYU MarComm's official guidelines
(https://www.nyu.edu/employees/resources-and-services/media-and-communications/
 nyu-brand-guidelines/designing-in-our-style/nyu-colors.html):

    NYU Violet        PMS 2597 C   RGB 87/6/140    #57068C   (primary)
    Deep Violet       PMS 2685 C   RGB 51/6/98     #330662
    Medium Violet 2                RGB 123/90/166  #7B5AA6
    Light Violet 2                 RGB 238/230/243 #EEE6F3

Neutrals and the two semantic accents (warning red, data yellow) are left
untouched -- they carry meaning, not brand.
"""

from pathlib import Path

PROJ = Path(__file__).resolve().parent

# old hex -> new hex  (case-insensitive, matched as a whole 6-digit token)
MAP = {
    "1E4FA8": "57068C",  # primary accent      -> NYU Violet
    "0E3F8C": "330662",  # deep backgrounds    -> Deep Violet
    "3D7BD9": "7B5AA6",  # secondary accent     -> Medium Violet 2
    "E8EFF8": "EEE6F3",  # light text on deep  -> Light Violet 2
    "F0F5FC": "F6F1FA",  # card background     -> violet tint
    "F7F9FC": "FAF8FC",  # card background     -> paler violet tint
    "E5E7EB": "E4DCEC",  # border              -> violet-tinted border
    "D6DCE5": "D9D0E4",  # divider / border    -> violet-tinted border
}

# Deliberately NOT remapped:
#   FFFFFF  background / reversed text
#   1A2230  4A5568  8B97A8   neutral text ramp (keeps violet as the only chroma)
#   D9534F  warning red  (semantic: risk, drift)
#   FFC107  data yellow  (semantic: key figures, pull quotes)


def main():
    import re

    pattern = re.compile(r"#([0-9A-Fa-f]{6})\b")
    total = 0
    for path in sorted((PROJ / "slides").glob("*.slide")):
        src = path.read_text(encoding="utf-8")
        hits = 0

        def sub(m):
            nonlocal hits
            new = MAP.get(m.group(1).upper())
            if new is None:
                return m.group(0)
            hits += 1
            return "#" + new

        out = pattern.sub(sub, src)
        if hits:
            path.write_text(out, encoding="utf-8")
        total += hits
        print(f"{path.name}: {hits} tokens replaced")

    print(f"\ntotal: {total}")
    leftover = set()
    for path in sorted((PROJ / "slides").glob("*.slide")):
        leftover |= {
            m.group(1).upper()
            for m in pattern.finditer(path.read_text(encoding="utf-8"))
        }
    print("palette now in use:", sorted(leftover))


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Remove baked white backgrounds from client logo PNGs via flood-fill.

For every pixel connected to the transparent exterior that is near-white,
set it to fully transparent. White elements enclosed inside the logo emblem
(e.g. white text on a colored shield) are preserved because they are not
connected to the exterior through near-white pixels.

Usage: python3 scripts/clean-logo-backgrounds.py [--threshold 200]
"""

import argparse
import glob
import os
import sys
from collections import deque

from PIL import Image

SRC_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "public",
    "logo-klien",
)
ALPHA_MIN = 8


def clean(path: str, threshold: int) -> int:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    data = list(im.getdata())
    n = w * h

    visited = bytearray(n)
    remove = bytearray(n)
    queue: deque[int] = deque()

    for i, p in enumerate(data):
        if p[3] < ALPHA_MIN:
            visited[i] = 1
            queue.append(i)

    while queue:
        i = queue.popleft()
        x = i % w
        y = i // w
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h:
                j = ny * w + nx
                if visited[j]:
                    continue
                r, g, b, a = data[j]
                if r > threshold and g > threshold and b > threshold:
                    visited[j] = 1
                    if a >= ALPHA_MIN:
                        remove[j] = 1
                    queue.append(j)

    removed = sum(remove)
    if removed == 0:
        return 0

    im2 = Image.new("RGBA", (w, h))
    im2.putdata(
        [(0, 0, 0, 0) if remove[i] else data[i] for i in range(n)]
    )
    im2.save(path)
    return removed


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--threshold", type=int, default=200)
    args = parser.parse_args()

    files = sorted(glob.glob(os.path.join(SRC_DIR, "*.png")))
    if not files:
        print(f"No PNG files found in {SRC_DIR}")
        return 1

    total = 0
    for path in files:
        removed = clean(path, args.threshold)
        total += removed
        print(f"{os.path.basename(path).ljust(44)} removed={removed:>8}")

    print(f"\nDone. Total pixels cleared: {total}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

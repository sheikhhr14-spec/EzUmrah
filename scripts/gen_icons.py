#!/usr/bin/env python3
"""Generate apple-icon.png (180x180) and favicon.ico (multi-size) matching app/icon.svg"""
from PIL import Image, ImageDraw
import math

S = 512  # master canvas, downscaled for crispness


def rounded_rect(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def draw_icon(size):
    """Draw the EzUmrah Kaaba icon at the given size."""
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    # scale factor from the 128 design
    k = size / 128.0
    r = int(28 * k)

    # Background: light gradient approximated with vertical blend
    bg_top = (253, 253, 251, 255)
    bg_bot = (238, 242, 247, 255)
    bg = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    bgd = ImageDraw.Draw(bg)
    for y in range(size):
        t = y / max(size - 1, 1)
        c = tuple(int(bg_top[i] + (bg_bot[i] - bg_top[i]) * t) for i in range(4))
        bgd.line([(0, y), (size, y)], fill=c)
    mask = Image.new('L', (size, size), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=255)
    img.paste(bg, (0, 0), mask)
    d = ImageDraw.Draw(img)

    # subtle border
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=r,
                        outline=(226, 232, 240, 255), width=max(1, int(2 * k)))

    # Gold band colors
    band_l = (212, 178, 122, 255)   # #d4b27a
    band_m = (184, 146, 63, 255)    # #b8923f

    # Kaaba top face: polygon (42,42)(58,30)(100,30)(84,42)
    d.polygon([(42 * k, 42 * k), (58 * k, 30 * k), (100 * k, 30 * k), (84 * k, 42 * k)],
              fill=(42, 42, 56, 255))

    # Kaaba right face: (84,42)(100,30)(100,76)(84,88)
    d.polygon([(84 * k, 42 * k), (100 * k, 30 * k), (100 * k, 76 * k), (84 * k, 88 * k)],
              fill=(30, 30, 44, 255))

    # Kaabra front face: rect 42,42 -> 84,88
    fx, fy, fw, fh = int(42 * k), int(42 * k), int(42 * k), int(46 * k)
    d.rectangle([fx, fy, fx + fw, fy + fh], fill=(20, 20, 31, 255))

    # Gold kiswa band across front face: y 56..65
    bx, by, bw, bh = fx, int(56 * k), fw, int(9 * k)
    # horizontal gradient for the band
    band_img = Image.new('RGBA', (bw, bh), (0, 0, 0, 0))
    bd = ImageDraw.Draw(band_img)
    for x in range(bw):
        t = x / max(bw - 1, 1)
        if t < 0.5:
            tt = t / 0.5
            c = tuple(int(band_l[i] + (band_m[i] - band_l[i]) * tt) for i in range(4))
        else:
            tt = (t - 0.5) / 0.5
            c = tuple(int(band_m[i] + (band_l[i] - band_m[i]) * tt) for i in range(4))
        bd.line([(x, 0), (x, bh)], fill=c)
    img.paste(band_img, (bx, by), band_img)

    # Gold band on right face (darker/shadow): (84,56)(100,44)(100,53)(84,65)
    d.polygon([(84 * k, 56 * k), (100 * k, 44 * k), (100 * k, 53 * k), (84 * k, 65 * k)],
              fill=(138, 109, 47, 255))

    # Kaaba door (gold, rounded top): rect 56,70 w12 h18 rx6
    dx, dy, dw, dh = int(56 * k), int(70 * k), int(12 * k), int(18 * k)
    dr = int(6 * k)
    d.rounded_rectangle([dx, dy, dx + dw, dy + dh], radius=dr, fill=(184, 146, 63, 255))
    # door highlight
    d.rounded_rectangle([dx + int(2 * k), dy + int(2 * k), dx + int(10 * k), dy + int(6 * k)],
                        radius=int(2 * k), fill=(212, 178, 122, 255))

    return img


# apple-icon.png — 180x180
apple = draw_icon(180)
apple.save('app/apple-icon.png')

# favicon.ico — multi-size (16, 32, 48)
fav = draw_icon(256)
fav.save('app/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])

print('Generated: app/apple-icon.png, app/favicon.ico')

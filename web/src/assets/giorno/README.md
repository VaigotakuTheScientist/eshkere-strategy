# Giorno hero asset

The `/giorno/` experiment intentionally renders a visible placeholder until a suitable Giorno Giovanna image is supplied.

Add a rights-cleared, user-supplied cutout at:

`web/src/assets/giorno/giorno-cutout.png`

Preferred specification:

- transparent-background PNG (WebP is also acceptable if transparency is preserved);
- full-body or three-quarter pose, facing slightly right if possible;
- at least 1,600 px tall;
- tightly cropped with no baked-in text, logos, frame, glow, or background;
- artwork the site owner has permission to publish.

Once supplied, import it with Astro's `Picture` component in `GiornoHero.astro`, position it inside `.giorno-hero-shell`, and retain the CSS placeholder as a no-image fallback.

// Utilities for Color Collection generation and grouping
// Pure functions: no React imports here.

// Convert HSL to HEX (uppercase)
export function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

// Generate color families based on categories and shade keys
// categories: [{ key, category, baseHue }]
// shades: ["veryLight", "light", ...] (i18n keys for shade names)
// t: i18n.t function
export function generateColorFamilies(categories, shades, t) {
  const families = [];

  const localizedCategories = categories.map((c) => ({
    name: t(c.key),
    category: c.category,
    baseHue: c.baseHue,
  }));

  const shadeNames = shades.map((k) => t(k));

  localizedCategories.forEach((cat) => {
    for (let familyIndex = 0; familyIndex < 6; familyIndex++) {
      const hueVariation = familyIndex * 12;
      const adjustedHue = (cat.baseHue + hueVariation + 360) % 360;

      const colors = [];
      for (let shade = 0; shade < 5; shade++) {
        const lightness = 90 - shade * 17;
        let saturation;

        if (cat.category === "grays") {
          saturation = shade * 2;
        } else {
          saturation = 85 - shade * 10 + familyIndex * 2;
        }

        const hex = hslToHex(adjustedHue, saturation, lightness);

        colors.push({
          id: `${cat.category}-${familyIndex}-${shade}`,
          hex,
          name: shadeNames[shade],
        });
      }

      families.push({
        id: `${cat.category}-family-${familyIndex}`,
        category: cat.category,
        name: `${cat.name} ${familyIndex + 1}`,
        colors,
      });
    }
  });

  return families;
}

// Build a representative group list from families to show one sample per category
export function groupFamiliesByCategory(families, t) {
  const categories = {
    blues: { name: t("blues"), families: [] },
    greens: { name: t("greens"), families: [] },
    reds: { name: t("reds"), families: [] },
    oranges: { name: t("oranges"), families: [] },
    yellows: { name: t("yellows"), families: [] },
    purples: { name: t("purples"), families: [] },
    pinks: { name: t("pinks"), families: [] },
    cyans: { name: t("cyans"), families: [] },
    magentas: { name: t("magentas"), families: [] },
    teals: { name: t("teals"), families: [] },
    browns: { name: t("browns"), families: [] },
    grays: { name: t("grays"), families: [] },
  };

  families.forEach((family) => {
    if (categories[family.category]) {
      categories[family.category].families.push(family);
    }
  });

  return Object.entries(categories)
    .map(([key, value]) => ({
      category: key,
      name: value.name,
      family: value.families[0],
    }))
    .filter((item) => item.family);
}

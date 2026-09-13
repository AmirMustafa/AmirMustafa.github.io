/* Ten selectable color themes. Each has a "dark" (night) and
   "light" (day) variable set; the mode toggle switches between
   them, the theme select switches which pair is active. */

const THEMES = [
  {
    id: "theme-1", name: "Slate & Emerald",
    fonts: { heading: "Manrope", body: "Manrope", mono: "IBM Plex Mono" },
    dark:  { bg:"#111827", bg2:"#182034", bg3:"#1F2A3D", fg:"#E5E7EB", muted:"#9CA3AF", line:"rgba(229,231,235,0.12)", accent:"#34D399", accentSoft:"#6EE7B7", steel:"#60A5FA" },
    light: { bg:"#F8FAFC", bg2:"#FFFFFF", bg3:"#EEF2F6", fg:"#111827", muted:"#4B5563", line:"rgba(17,24,39,0.10)", accent:"#059669", accentSoft:"#10B981", steel:"#2563EB" },
  },
  {
    id: "theme-2", name: "Midnight Indigo",
    fonts: { heading: "Sora", body: "Inter", mono: "IBM Plex Mono" },
    dark:  { bg:"#0B1220", bg2:"#121B2E", bg3:"#182338", fg:"#E2E8F0", muted:"#94A3B8", line:"rgba(226,232,240,0.12)", accent:"#38BDF8", accentSoft:"#7DD3FC", steel:"#818CF8" },
    light: { bg:"#F1F5F9", bg2:"#FFFFFF", bg3:"#E7EDF3", fg:"#0B1220", muted:"#475569", line:"rgba(11,18,32,0.10)", accent:"#0284C7", accentSoft:"#0EA5E9", steel:"#4F46E5" },
  },
  {
    id: "theme-3", name: "Graphite & Copper",
    fonts: { heading: "Playfair Display", body: "Inter", mono: "IBM Plex Mono" },
    dark:  { bg:"#1C1B1A", bg2:"#242220", bg3:"#2D2A27", fg:"#EDEAE4", muted:"#B5AFA6", line:"rgba(237,234,228,0.12)", accent:"#D08B5B", accentSoft:"#E3A87C", steel:"#8FA6A0" },
    light: { bg:"#FAF7F2", bg2:"#FFFFFF", bg3:"#F0EAE0", fg:"#1C1B1A", muted:"#6B6459", line:"rgba(28,27,26,0.10)", accent:"#B5652F", accentSoft:"#C97A45", steel:"#5C7A73" },
  },
  {
    id: "theme-4", name: "Arctic Minimal",
    fonts: { heading: "Inter", body: "Inter", mono: "IBM Plex Mono" },
    dark:  { bg:"#000000", bg2:"#0D0D0D", bg3:"#161616", fg:"#FFFFFF", muted:"#A3A3A3", line:"rgba(255,255,255,0.12)", accent:"#0EA5E9", accentSoft:"#38BDF8", steel:"#737373" },
    light: { bg:"#FFFFFF", bg2:"#FAFAFA", bg3:"#F0F0F0", fg:"#000000", muted:"#525252", line:"rgba(0,0,0,0.10)", accent:"#0284C7", accentSoft:"#0EA5E9", steel:"#A3A3A3" },
  },
  {
    id: "theme-5", name: "Forest & Sand",
    fonts: { heading: "Manrope", body: "Manrope", mono: "IBM Plex Mono" },
    dark:  { bg:"#14201B", bg2:"#1B2A23", bg3:"#22342B", fg:"#E8E4D8", muted:"#A9AC9E", line:"rgba(232,228,216,0.12)", accent:"#C9A96E", accentSoft:"#DABE8C", steel:"#7FA383" },
    light: { bg:"#F5F1E6", bg2:"#FFFFFF", bg3:"#ECE5D2", fg:"#1F2A22", muted:"#5C6355", line:"rgba(31,42,34,0.10)", accent:"#5B7A5E", accentSoft:"#729675", steel:"#8A7A4E" },
  },
  {
    id: "theme-6", name: "Violet Circuit",
    fonts: { heading: "Space Grotesk", body: "Inter", mono: "IBM Plex Mono" },
    dark:  { bg:"#161022", bg2:"#1D1730", bg3:"#251D3C", fg:"#E9E4F5", muted:"#9C93B3", line:"rgba(233,228,245,0.12)", accent:"#B79CED", accentSoft:"#CBB7F2", steel:"#7C88C4" },
    light: { bg:"#F7F5FC", bg2:"#FFFFFF", bg3:"#ECE7F8", fg:"#1D1730", muted:"#5B5470", line:"rgba(29,23,48,0.10)", accent:"#7C5CD1", accentSoft:"#9575DE", steel:"#5468B0" },
  },
  {
    id: "theme-7", name: "Gold & Ivory",
    fonts: { heading: "Cormorant Garamond", body: "Inter", mono: "IBM Plex Mono" },
    dark:  { bg:"#151009", bg2:"#1E1710", bg3:"#271E14", fg:"#F3EAD6", muted:"#B8A98A", line:"rgba(243,234,214,0.12)", accent:"#D4AF37", accentSoft:"#E4C765", steel:"#A8916B" },
    light: { bg:"#FFFDF8", bg2:"#FFFFFF", bg3:"#F5EFDD", fg:"#221C10", muted:"#6E624A", line:"rgba(34,28,16,0.10)", accent:"#A8811F", accentSoft:"#C29A2E", steel:"#8A7A54" },
  },
  {
    id: "theme-8", name: "Ocean Teal",
    fonts: { heading: "Sora", body: "Sora", mono: "IBM Plex Mono" },
    dark:  { bg:"#08181A", bg2:"#0F2224", bg3:"#162D2F", fg:"#DCEEEF", muted:"#89A8A9", line:"rgba(220,238,239,0.12)", accent:"#2DD4BF", accentSoft:"#5EEAD4", steel:"#60A5C7" },
    light: { bg:"#F3FBFB", bg2:"#FFFFFF", bg3:"#E4F3F2", fg:"#0A2224", muted:"#4B6C6D", line:"rgba(10,34,36,0.10)", accent:"#0D9488", accentSoft:"#14B8A6", steel:"#2E7DA1" },
  },
  {
    id: "theme-9", name: "Crimson & Charcoal",
    fonts: { heading: "Bricolage Grotesque", body: "Inter", mono: "IBM Plex Mono" },
    dark:  { bg:"#161616", bg2:"#1F1F1F", bg3:"#292929", fg:"#EDEDED", muted:"#A3A3A3", line:"rgba(237,237,237,0.12)", accent:"#E11D48", accentSoft:"#FB7185", steel:"#9CA3AF" },
    light: { bg:"#FAFAFA", bg2:"#FFFFFF", bg3:"#EFEFEF", fg:"#161616", muted:"#525252", line:"rgba(22,22,22,0.10)", accent:"#BE123C", accentSoft:"#E11D48", steel:"#6B7280" },
  },
  {
    id: "theme-10", name: "Cobalt Steel",
    fonts: { heading: "Manrope", body: "Manrope", mono: "IBM Plex Mono" },
    dark:  { bg:"#12161C", bg2:"#1A2029", bg3:"#212936", fg:"#E4E8EC", muted:"#8B95A1", line:"rgba(228,232,236,0.12)", accent:"#3B82F6", accentSoft:"#60A5FA", steel:"#818CF8" },
    light: { bg:"#F7F9FC", bg2:"#FFFFFF", bg3:"#EBEFF4", fg:"#12161C", muted:"#525C68", line:"rgba(18,22,28,0.10)", accent:"#2563EB", accentSoft:"#3B82F6", steel:"#6366F1" },
  },
];

function applyTheme(themeId, mode) {
  const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];
  const pal = mode === "light" ? theme.light : theme.dark;
  const root = document.documentElement.style;

  root.setProperty("--bg", pal.bg);
  root.setProperty("--bg-2", pal.bg2);
  root.setProperty("--bg-3", pal.bg3);
  root.setProperty("--fg", pal.fg);
  root.setProperty("--muted", pal.muted);
  root.setProperty("--line", pal.line);
  root.setProperty("--brass", pal.accent);
  root.setProperty("--brass-soft", pal.accentSoft);
  root.setProperty("--steel", pal.steel);

  root.setProperty("--font-heading", `'${theme.fonts.heading}'`);
  root.setProperty("--font-body", `'${theme.fonts.body}'`);
  root.setProperty("--font-mono", `'${theme.fonts.mono}'`);

  document.body.setAttribute("data-theme", mode);
  document.body.setAttribute("data-color-theme", themeId);
}

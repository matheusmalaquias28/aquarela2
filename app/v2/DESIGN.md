---
name: Aquarela Ethos
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#42493e'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#72796e'
  outline-variant: '#c2c9bb'
  surface-tint: '#3b6934'
  primary: '#154212'
  on-primary: '#ffffff'
  primary-container: '#2d5a27'
  on-primary-container: '#9dd090'
  inverse-primary: '#a1d494'
  secondary: '#9e3f41'
  on-secondary: '#ffffff'
  secondary-container: '#fe8988'
  on-secondary-container: '#762125'
  tertiary: '#003a6c'
  on-tertiary: '#ffffff'
  tertiary-container: '#005193'
  on-tertiary-container: '#9cc5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcf0ae'
  primary-fixed-dim: '#a1d494'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#23501e'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#7f282b'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a4c9ff'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#004883'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is rooted in the philosophy of the "artist's studio"—a space that is simultaneously disciplined and wildly creative. It balances the structural precision of a professional course with the fluid, unpredictable beauty of watercolor pigment on wet paper.

The visual style is **Tactile Minimalism**. It avoids the sterility of modern SaaS interfaces by introducing organic textures and irregular "blobs" that mimic pigment blooms. The goal is to evoke a sense of calm, focused creativity. Every interaction should feel as soft as a brushstroke, using generous whitespace to ensure the artwork remains the protagonist.

**Design Principles:**
- **Fluidity:** Use organic, non-geometric shapes for secondary decorative elements.
- **Translucency:** Mimic the "glazing" technique of watercolor where layers of color overlap to create depth.
- **Texture:** Subtly apply grain and cold-press paper textures to backgrounds to ground the digital experience in a physical medium.

## Colors

The palette is divided into "Pigments" (functional colors) and "Wash" (background and decorative colors).

- **Primary (Forest Green):** Represents the organic nature of the reference; used for primary actions and deep emphasis.
- **Secondary (Rose Madder):** A soft, warm red used for highlights and encouraging call-to-outs.
- **Tertiary (Cerulean Blue):** A transparent, airy blue for secondary information and link states.
- **Neutral (Earthy Bone):** This is the "paper" of the UI. Avoid pure white (#FFFFFF) in favor of `#F9F7F2` to reduce eye strain and provide a more natural, traditional feel.

**Watercolor Effect:** When using the accent colors (Rose Madder, Cerulean, Ochre) for decorative elements, apply a 20-40% opacity with a multi-stop gradient to simulate the uneven distribution of pigment in water.

## Typography

This design system utilizes a high-contrast typographic pairing to bridge the gap between "Artistic" and "Professional."

**Headlines:** *Libre Caslon Text* is used for all major titles. Its high contrast and organic serifs mimic the look of ink on paper. Use it sparingly for impact. For display sizes, a slight negative letter spacing creates a more cohesive, editorial look.

**Body:** *Manrope* provides the necessary clarity for instructional content. Its geometric yet friendly proportions ensure that long-form course material is easy to digest.

**Labels:** *Work Sans* is used for UI utility (buttons, tags, navigation). It is set in a slightly heavier weight with increased letter spacing to ensure distinct hierarchy against the serif headings.

## Layout & Spacing

The layout follows a **Fluid Grid** model with an emphasis on "Negative Space as Canvas." 

- **Desktop:** 12-column grid. Modules should frequently "float" or overlap slightly to break the rigid verticality of traditional web design.
- **Mobile:** Single column with 16px margins. Decorative "watercolor splashes" should be repositioned to the background to keep the content path clear.
- **The "Breath" Rule:** Sections should have a minimum vertical gap of 120px. This mimics the margin of a physical painting, preventing the user from feeling overwhelmed by information.

Use the 8px spacing unit for internal component padding, but use larger, non-linear gaps (64px, 80px, 120px) for layout transitions to maintain the artistic atmosphere.

## Elevation & Depth

This design system rejects heavy drop shadows in favor of **Tonal Layering** and **Subtle Diffusion**.

- **Surfaces:** Depth is created by placing components on slightly different shades of neutral. A card might be `#FCFAFA` (Surface Paper) sitting on a `#F9F7F2` (Neutral) background.
- **Soft Shadows:** When elevation is required (e.g., for a floating action button or a modal), use a very large blur radius (32px+) with extremely low opacity (4-6%). The shadow should be tinted with a hint of the primary green or earth tones, never pure black.
- **Texture Overlays:** Use a subtle "multiply" blend mode for paper textures on top-level surfaces to give them a tactile, physical quality.

## Shapes

The shape language is "Softly Structured."

- **Functional Elements:** Buttons, input fields, and cards use a `0.5rem` (8px) radius. This provides a professional, approachable look without feeling too "bubbly" or informal.
- **Decorative Elements:** Use "Masked Shapes." Images should occasionally use irregular, hand-drawn masks (organic blobs) instead of standard rectangles to reinforce the watercolor theme.
- **Dividers:** Avoid straight horizontal lines. Use subtle, hand-drawn-style SVG strokes or soft color transitions to separate sections.

## Components

**Buttons:**
Primary buttons are solid `Primary Green` with white text. Secondary buttons use a "Ghost" style with a 1px border and a subtle watercolor wash effect on hover. Use slightly wider horizontal padding to give them a premium feel.

**Input Fields:**
Minimalist design with only a bottom border in a light earth tone. Upon focus, the border transitions to the primary green with a soft, tinted glow (not a shadow).

**Cards:**
Cards should have no visible border. Use the "Surface Paper" color and a very soft, diffused shadow to lift them from the background. Include a small organic "pigment splash" in the corner of featured cards for personality.

**Progress Indicators:**
For the course modules, use a "Brushstroke" style progress bar—an irregular, painterly line that fills with color as the student progresses.

**Chips/Tags:**
Pill-shaped with low-saturation backgrounds. Use the secondary and tertiary colors at 15% opacity for a "diluted" watercolor appearance.
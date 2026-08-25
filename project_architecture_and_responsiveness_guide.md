# Project Architecture & Responsive Web Design Cheat Sheet

---

## 1. The Core Architecture Philosophy

### **The "3-Layer Rule" for Clean Code Structure**
1. **`app/` (Or `pages/`) — The Controllers / Routes**
   - High-level containers only.
   - Keep logic minimal; assemble section components like building blocks.
2. **`section/` — Page-Level Blocks**
   - Holds major page blocks (`Header`, `Services`, `Works`, `Footer`).
   - Pairs component file (`Header.section.tsx`) with its specific CSS module (`header.module.css`).
3. **`components/` — Reusable Atomic Units**
   - Small, UI elements used anywhere across the app (`Buttons`, `Cards`, `Inputs`, `ThemeToggle`).

---

## 2. Responsive Design Framework (Mobile-First)

### **The Gold Standard: Tailwind CSS Breakpoint Matrix**

| Breakpoint Prefix | Screen Width | Device Target | Strategy & Common Layout |
| :--- | :--- | :--- | :--- |
| **(No Prefix)** | `< 640px` | **Mobile (Default)** | Single column (`flex-col`, `w-full`), base font size (`text-base`). |
| **`sm:`** | `≥ 640px` | Large Phones / Phablets | Minor padding adjustments, small flex-row setups. |
| **`md:`** | `≥ 768px` | **Tablets / iPad** | 2-column grid (`grid-cols-2`), larger headers (`text-xl`). |
| **`lg:`** | `≥ 1024px` | **Laptops / Desktop** | Side-by-side layout (`lg:flex-row`, `lg:w-1/3`), 3-4 col grids. |
| **`xl:`** | `≥ 1280px` | **Large Displays** | Maximum content constraints (`max-w-7xl mx-auto`). |

---

## 3. Responsive Layout Patterns (Memorize These Snippets)

### **Pattern A: Stacking to Side-by-Side (Flexbox)**
Use for Hero sections, split views, header banners.
```tsx
<div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen">
  <div className="w-full lg:w-1/3 h-1/2 lg:h-full">Left Content</div>
  <div className="w-full lg:w-2/3 h-1/2 lg:h-full">Right Content</div>
</div>
```

### **Pattern B: Adaptive Grid (Cards / Products)**
Use for feature cards, portfolio items, dynamic list items.
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
  <div className="p-6 bg-white rounded-lg">Card 1</div>
  <div className="p-6 bg-white rounded-lg">Card 2</div>
  <div className="p-6 bg-white rounded-lg">Card 3</div>
</div>
```

### **Pattern C: Responsive Typography**
Scale text dynamically without hardcoded pixel adjustments.
```tsx
<h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Main Headline Title
</h1>
```

---

## 4. Clean Styling via CSS Modules + `@apply`

Keep JSX clean by placing responsive utility classes inside CSS Module files:

```tsx
// section/Header/header.section.tsx
import styles from "./header.module.css";

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.leftBox}>Left Side</div>
      <div className={styles.rightBox}>Right Side</div>
    </section>
  );
}
```

```css
/* section/Header/header.module.css */
.header {
  @apply flex flex-col w-full min-h-screen;
  @apply lg:flex-row;
}

.leftBox {
  @apply w-full p-4 bg-gray-100;
  @apply md:p-8;
  @apply lg:w-1/3;
}

.rightBox {
  @apply w-full p-4 bg-white;
  @apply md:p-8;
  @apply lg:w-2/3;
}
```

---

## 5. Responsive Testing Checklist

Before completing any web project page, test across these exact viewports:

- [ ] **Mobile Portrait (`375px - 414px`)**: No horizontal scrolling; text is legible; buttons are touch-friendly (min `44px` height).
- [ ] **Tablet (`768px - 820px`)**: Multi-column layouts break down gracefully; navigation transforms into hamburger menu if needed.
- [ ] **Desktop (`1024px - 1440px+`)**: Content is horizontally centered (`mx-auto`) with max-width bounding (`max-w-6xl` or `max-w-7xl`).

---

## 6. Quick Self-Quiz for Practice

1. **Question:** What screen size does `flex flex-col lg:flex-row` target for vertical stacking?
   - *Answer:* Mobile and Tablet (everything under `1024px`).
2. **Question:** What is the correct Tailwind grid layout for 1 column on mobile, 2 on tablet, and 4 on desktop?
   - *Answer:* `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`.
3. **Question:** Where should shared atomic UI components (like a custom `<Button />`) be stored?
   - *Answer:* Inside the root `/components` directory.

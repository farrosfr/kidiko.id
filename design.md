# Kidiko Design System & UI/UX Guidelines

## 1. Visual Identity

### Typography
*   **Headings:** `Space Grotesk Variable`
    *   *Usage:* High-impact headings (H1-H3) to convey a modern, technical, yet friendly feel.
    *   *Style:* Bold (700+) with tight letter spacing for large sizes.
*   **Body:** `Inter Variable`
    *   *Usage:* All body text, descriptions, and UI elements (buttons, badges).
    *   *Style:* Highly legible, 400 for regular text, 500-600 for semi-bold UI elements.

### Color Palette
Kidiko uses a vibrant and educational palette inspired by its brand assets.

*   **Primary (Blue):** Representing technology, trust, and the AI digital space.
    *   `primary-500`: `#2563eb` (Brand Blue)
*   **Accent (Yellow/Amber):** Representing energy, creativity, and education.
    *   `accent-500`: `#f59e0b` (Brand Yellow)
*   **Neutral (Slate/Zinc):**
    *   Light Mode Background: `#fafafa`
    *   Dark Mode Background: `#09090b` (Deep Slate/Black)
    *   Text: `slate-900` (Light Mode) / `slate-100` (Dark Mode)

### Visual Effects
*   **Glassmorphism:** Use `.glass-panel` for navigation or cards over complex backgrounds.
*   **Gradients:** Use `.text-gradient` (Blue -> Yellow -> Amber) for hero sections and key highlights.
*   **Motion:** 
    *   Simple: Use `.reveal-on-scroll` (CSS + Intersection Observer).
    *   Complex: Use **GSAP** for staggered reveals, parallax, or timeline-based hero animations. Always wrap GSAP code in `document.addEventListener('astro:page-load', ...)` to ensure it works with View Transitions.

---

## 2. CSS Framework Recommendation

You are currently using **Tailwind CSS v4**, which is the most modern and performant utility-first framework. For your project (Astro-based Micro-SaaS), **I highly recommend sticking with Tailwind CSS v4** rather than adding another framework like Bootstrap or Bulma.

### Why Tailwind v4?
1.  **Zero-runtime:** No JS overhead for styling.
2.  **Vite Integration:** Fast builds and hot module replacement.
3.  **Modern CSS:** Leverages CSS variables and `@theme` blocks natively.

### Recommended Add-ons for UI/UX:
*   **[Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography):** (Already installed) Use the `prose` class for blog posts and MDX content.
*   **[Lucide Icons](https://lucide.dev/):** A beautiful, consistent icon set that fits the "Zenix" aesthetic.
*   **[Astro-Icon](https://github.com/natemoo-re/astro-icon):** To serve SVG icons with zero client-side JS.
*   **[Headless UI](https://headlessui.com/) / [Radix UI](https://www.radix-ui.com/):** If you need complex components (like Modals or Dropdowns) while keeping full control over the design.

---

## 3. UI/UX Principles

### Performance First
*   Keep the landing page lightweight. Astro handles this by default by shipping zero JS.
*   Only use interactive components (is:visible/is:load) when absolutely necessary.

### Accessibility (a11y)
*   Ensure a minimum contrast ratio of 4.5:1 for body text.
*   Use semantic HTML (`<article>`, `<section>`, `<nav>`).
*   Ensure all interactive elements have `:focus-visible` styles (already defined in `Button.astro`).

### Responsive Excellence
*   **Mobile-First:** Design for small screens first, then use `md:` and `lg:` breakpoints.
*   **Touch Targets:** Ensure buttons are at least 44x44px on mobile.

### Consistency
*   **Border Radius:** Use `rounded-xl` (12px) for a soft, friendly "App" feel.
*   **Spacing:** Stick to the Tailwind 4-based spacing scale (e.g., `p-4`, `p-6`, `p-8`).

---

## 4. Suggested Improvements

1.  **Micro-interactions:** Add `hover:scale-[1.02]` and `active:scale-[0.98]` to cards and buttons for tactile feedback.
2.  **Loading States:** Implement skeleton screens if you add any client-side data fetching.
3.  **Empty States:** Design beautiful empty states for search or blog categories.
4.  **Content Scannability:** Use more `Callout` components in blog posts to break up long text.

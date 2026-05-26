import { expect, test, type Page } from '@playwright/test';

async function useTheme(page: Page, theme: 'light' | 'dark') {
  await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
}

const indexedRoutes = [
  '/',
  '/toko/',
  '/kontak/',
  '/tentang/',
  '/impact/',
  '/product/toefl-itp-kidiko/',
  '/toefl-itp/',
  '/product/paket-keluarga-grup-wa-dika-maksimal-5-peserta/',
  '/product/paket-kelas-grup-wa-diko-maksimal-50-peserta/',
  '/product/paket-keluarga-grup-wa-diko-maksimal-5-peserta/',
  '/penawaran/',
  '/product/paket-komunitas-grup-wa-diki-maksimal-50-peserta/',
  '/author/kidiko/',
  '/product/paket-kelas-grup-wa-dika-maksimal-50-peserta/',
  '/product-category/paket-ai/',
  '/blog/',
  '/pengembang/',
  '/product/paket-kawan-grup-wa-diki-maksimal-5-peserta/',
];

test.describe('Kidiko site', () => {
  test('homepage renders the Kidiko education AI positioning', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /Selamat datang di Kidiko/i })).toBeVisible();
    await expect(page.getByText(/AI belajar di grup WhatsApp/i)).toBeVisible();
    await expect(page.getByAltText(/Ilustrasi Kidiko AI/i)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Lihat Penawaran' })).toHaveAttribute('href', '/penawaran/');
  });

  test('all indexed routes return usable pages', async ({ page }) => {
    for (const route of indexedRoutes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBeLessThan(400);
      await expect(page.locator('body')).toContainText(/Kidiko|TOEFL|Paket|Kontak|Impact|Pengembang/i);
    }
  });

  test('navigation and theme toggle work on desktop and mobile', async ({ page, isMobile }) => {
    await useTheme(page, 'light');
    await page.goto('/');

    if (isMobile) {
      await page.getByRole('button', { name: 'Buka menu' }).click();
    }

    await expect(page.getByRole('link', { name: 'Tentang' }).filter({ visible: true }).first()).toHaveAttribute('href', '/tentang/');
    await expect(page.getByRole('link', { name: 'Kontak' }).filter({ visible: true }).first()).toHaveAttribute('href', '/kontak/');

    if (!isMobile) {
      await page.locator('[data-theme-toggle]:visible').first().click();
      await expect(page.locator('html')).toHaveClass(/dark/);
    }
  });

  test('SEO metadata, sitemap, and robots target kidiko.id', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://kidiko.id/');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'Selamat datang di Kidiko | Kidiko');
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', 'https://kidiko.id/');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://kidiko.id/og-image.png');

    await page.goto('/sitemap.xml');
    await expect(page.locator('body')).toContainText('https://kidiko.id/product/toefl-itp-kidiko/');

    await page.goto('/robots.txt');
    await expect(page.locator('body')).toContainText('Sitemap: https://kidiko.id/sitemap.xml');
  });

  test('blog article renders Kidiko author and safety content', async ({ page }) => {
    await page.goto('/blog/kidiko-ai-whatsapp-pendidikan/');

    await expect(page.getByRole('heading', { name: /Kidiko: AI Pendidikan di Grup WhatsApp/i })).toBeVisible();
    await expect(page.getByText('Kidiko').first()).toBeVisible();
    await expect(page.getByText(/moderasi prompt/i)).toBeVisible();
  });
});

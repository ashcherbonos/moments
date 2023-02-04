import { test, expect } from '@playwright/test';

const galleriesResponse = JSON.stringify([
  {
    _id: 'id1',
    title: 'galleri 1 title',
    images: [
      'https://gallery.1.image.1.jpg',
      'https://gallery.1.image.2.jpg',
      'https://gallery.1.image.3.jpg',
    ],
    likes: 11,
  },
  {
    _id: 'id2',
    title: 'galleri 2 title',
    images: [
      'https://gallery.2.image.1.jpg',
      'https://gallery.2.image.2.jpg',
      'https://gallery.2.image.3.jpg',
    ],
    likes: 12,
  },
  {
    _id: 'id3',
    title: 'galleri 3 title',
    images: [
      'https://gallery.3.image.1.jpg',
      'https://gallery.3.image.2.jpg',
      'https://gallery.3.image.3.jpg',
    ],
    likes: 13,
  },
]);

test.beforeEach(async ({ page }) => {
  await page.route('**/api/galleries?limit=*', (route) => {
    route.fulfill({
      status: 200,
      body: galleriesResponse,
    });
  });
  await page.route('**/like?id=id*', (route) => {
    route.fulfill({
      status: 200,
      body: JSON.stringify(111),
    });
  });
  await page.goto('http://localhost:5173/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Moments/);
});

test('fetch galleries titles', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 2 })).toHaveText([
    'galleri 1 title',
    'galleri 2 title',
    'galleri 3 title',
  ]);
});

test('fetch galleries likes', async ({ page }) => {
  await expect(page.getByTestId('like-label-id1')).toHaveText('111');
});

test('click on like call for patch like api', async ({ page }) => {
  let method = '';

  await page.route('**/like?id=id*', (route) => {
    method = route.request().method();
    route.fulfill({
      status: 200,
      body: JSON.stringify(112),
    });
  });

  await page.getByTestId('like-label-id1').click();
  expect(method === 'PATCH');
  await expect(page.getByTestId('like-label-id1')).toHaveText('112');
});

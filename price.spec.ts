import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Verify item sorting High to Low by price', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.sortBy('Price (high to low)');
  const prices = await inventoryPage.getItemPrices();
  expect(prices).toEqual([...prices].sort((a, b) => b - a));
});

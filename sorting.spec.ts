import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Verify item sorting Z to A', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.sortBy('Name (Z to A)');
  const names = await inventoryPage.getItemNames();
  expect(names).toEqual([...names].sort().reverse());
});

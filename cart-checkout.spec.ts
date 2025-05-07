import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Add items to cart and complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItems(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  await inventoryPage.goToCart();
  await cartPage.verifyItems(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  await cartPage.checkout('John', 'Doe', '12345');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

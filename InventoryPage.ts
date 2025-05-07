import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async sortBy(option: string) {
    await this.page.selectOption('[data-test="product_sort_container"]', { label: option });
  }

  async getItemNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }

  async addItems(items: string[]) {
    for (const item of items) {
      await this.page.click(`text=${item} >> xpath=.. >> .. >> button`);
    }
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}

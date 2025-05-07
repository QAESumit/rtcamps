import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItems(expectedItems: string[]) {
    const items = await this.page.locator('.inventory_item_name').allTextContents();
    expect(items.sort()).toEqual(expectedItems.sort());
  }

  async checkout(firstName: string, lastName: string, zip: string) {
    await this.page.click('[data-test="checkout"]');
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
    await this.page.click('[data-test="finish"]');
  }
}

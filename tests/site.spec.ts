import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", heading: /above the gum line/i },
  { path: "/about", heading: /human pulse/i },
  { path: "/services", heading: /care, in full/i },
  { path: "/services/dental-implants", heading: /dental implants/i },
  { path: "/services/supra-gingival-dentistry", heading: /supra-gingival/i },
  { path: "/reviews", heading: /real patients/i },
  { path: "/offers", heading: /with value/i },
  { path: "/contact", heading: /conversation/i },
  { path: "/virtual-consult", heading: /from home/i },
  { path: "/privacy", heading: /handled with care/i },
];

for (const route of routes) {
  test(`renders ${route.path}`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      route.heading,
    );

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test("primary navigation reaches every main page", async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) <= 1024,
    "Desktop navigation only; mobile menu is covered separately",
  );
  await page.goto("/");
  for (const [label, path] of [
    ["About", "/about"],
    ["Services", "/services"],
    ["Reviews", "/reviews"],
    ["Offers", "/offers"],
    ["Contact", "/contact"],
  ]) {
    await page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name: label })
      .click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
  }
});

test("service search and category filters work", async ({ page }) => {
  await page.goto("/services");
  await page.getByRole("searchbox", { name: "Search services" }).fill("implant");
  await expect(
    page.getByRole("heading", { name: "Dental Implants", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear search" }).click();
  await page.getByRole("button", { name: /Cosmetic & Smile/ }).click();
  await expect(
    page.getByRole("heading", { name: "Cosmetic Dentistry", exact: true }),
  ).toBeVisible();
});

test("contact form validates and submits", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /Send message/i }).click();
  await expect(page.getByText("Please enter your full name.")).toBeVisible();

  await page.getByLabel("Name", { exact: true }).fill("Test Patient");
  await page.getByLabel("Email", { exact: true }).fill("test@example.com");
  await page.getByLabel("Phone", { exact: true }).fill("7015550123");
  await page
    .getByLabel("Message", { exact: true })
    .fill("I would like to ask about a consultation.");
  await page.locator("input[type=checkbox]").first().check();
  await page.getByRole("button", { name: /Send message/i }).click();
  await expect(page.getByText("Message received.")).toBeVisible();
});

test("virtual consult completes in three steps", async ({ page }) => {
  await page.goto("/virtual-consult");
  await page.getByLabel("First name").fill("Test");
  await page.getByLabel("Last name").fill("Patient");
  await page.getByLabel("Email", { exact: true }).fill("test@example.com");
  await page.getByLabel("Phone", { exact: true }).fill("7015550123");
  await page.getByRole("button", { name: /Continue/i }).click();
  await page.getByText("Cosmetic dentistry", { exact: true }).click();
  await page
    .getByLabel("Your desires and concerns")
    .fill("I would like to improve the appearance of my smile.");
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByText("Review your details")).toBeVisible();
  await page.locator("input[type=checkbox]").first().check();
  await page.getByRole("button", { name: /Request my consult/i }).click();
  await expect(page.getByText("Your consult is on its way.")).toBeVisible();
});

test("mobile menu opens and navigates", async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) > 1024,
    "Mobile-only interaction",
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const nav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(nav).toBeVisible();
  await nav.getByRole("link", { name: /Services/ }).click();
  await expect(page).toHaveURL(/\/services$/);
});

test("testimonial carousel advances", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Great place there so patient")).toBeVisible();
  await page.getByRole("button", { name: "Next review" }).click();
  await expect(page.getByText("I met Dr Garr and his staf")).toBeVisible();
});

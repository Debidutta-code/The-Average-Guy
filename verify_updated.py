import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to the site
        try:
            await page.goto("http://localhost:3001", timeout=60000)
        except Exception as e:
            print(f"Failed to connect to dev server: {e}")
            await browser.close()
            return

        # Ensure directory exists
        os.makedirs("verification", exist_ok=True)

        # 1. Check for Back to Top button (should appear after scroll)
        await page.evaluate("window.scrollTo(0, 1000)")
        await page.wait_for_timeout(2000)
        back_to_top = page.locator("button[aria-label='Back to top']")
        if await back_to_top.is_visible():
            print("✅ Back to top button is visible after scroll")
            await back_to_top.screenshot(path="verification/back_to_top.png")
        else:
            print("❌ Back to top button is NOT visible after scroll")

        # 2. Check for Testimonials Carousel
        testimonials_section = page.locator("#reviews")
        await testimonials_section.scroll_into_view_if_needed()
        next_btn = page.locator("button[aria-label='Next testimonial']")
        if await next_btn.is_visible():
            print("✅ Testimonial carousel navigation is visible")
        await testimonials_section.screenshot(path="verification/testimonials_carousel.png")

        # 3. Check for Contact Section
        contact_section = page.locator("#contact")
        if await contact_section.is_visible():
            print("✅ Contact section is visible")
            await contact_section.scroll_into_view_if_needed()
            await contact_section.screenshot(path="verification/contact_section.png")
        else:
            print("❌ Contact section is NOT visible")

        # Full page screenshot
        await page.screenshot(path="verification/updated_full_page.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())

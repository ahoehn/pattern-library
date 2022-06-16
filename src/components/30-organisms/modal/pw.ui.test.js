const host = process.env.TEST_HOST_STORYBOOK_URL;
// Delay that waits for the close animation to finish
const delayTimeAnimation = 300;

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

describe('Modal', () => {
  it('should open modal', async () => {
    await openModal();

    expect(await page.isVisible('.o-modal__content')).toBe(true);
  });

  it('modal should close by button', async () => {
    await openModal();
    await page.click('.o-modal__upper-close-container-button');

    await delay(delayTimeAnimation);
    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should close by pressing outside the modal', async () => {
    await openModal();
    await page.evaluate(() => {
      document
        .querySelector('axa-modal')
        .shadowRoot.querySelector('.o-modal--open')
        .click();
    });

    await delay(delayTimeAnimation);
    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should close by pressing escape on keyboard', async () => {
    await openModal();
    await page.keyboard.press('Escape');

    await delay(delayTimeAnimation);
    expect(await page.isVisible('.o-modal__content')).toBe(false);
  });

  it('should check if children are rendered', async () => {
    await openModal();

    expect(
      await page.textContent(
        '#root > div > axa-modal > axa-heading:nth-child(1)'
      )
    ).toBe('Liability insurance');
  });

  it('should not close modal in forced mode by pressing escape on keyboard', async () => {
    await openForcedModal();

    await page.waitForSelector('.o-modal--open');
    await page.keyboard.press('Escape');

    expect(await page.isVisible('.o-modal__content')).toBe(true);
  });

  it('should not close by pressing outside the modal', async () => {
    await openForcedModal();

    await page.evaluate(() => {
      document
        .querySelector('axa-modal')
        .shadowRoot.querySelector('.o-modal--open')
        .click();
    });

    expect(await page.isVisible('.o-modal__content')).toBe(true);
  });

  it('should not display top-bar with close icon', async () => {
    await openForcedModal();

    expect(await page.isVisible('.o-modal__upper-close-container-button')).toBe(
      false
    );
  });

  it('should check if modal is set to small', async () => {
    await page.goto(
      `${host}/iframe.html?id=components-modal--modal&knob-open=true&knob-small=true&viewMode=story`
    );

    const modalMaxWidth = await page.$eval(
      '.o-modal__container',
      el => window.getComputedStyle(el).maxWidth
    );

    expect(modalMaxWidth).toBe('500px');
  });

  it('should remove margin-top from first child and margin-bottom from last child', async () => {
    await openForcedModal();

    const firstChildElementMargins = await page.$eval(
      'axa-heading[rank="2"]',
      el => window.getComputedStyle(el).margin
    );

    const lastChildElementMargins = await page.$eval(
      'axa-button',
      el => window.getComputedStyle(el).margin
    );

    const noMarginTop = '0px 0px 18px';
    const noMarginBottom = '20px 0px 0px';
    expect(firstChildElementMargins).toBe(noMarginTop);
    expect(lastChildElementMargins).toBe(noMarginBottom);
  });
});

it('should not display top-bar', async () => {
  await openNoHeaderModal();

  expect(await page.isVisible('.o-modal__upper-close-container')).toBe(false);
});

it('should display content with close icon', async () => {
  await openNoHeaderModal();

  expect(
    await page.isVisible(
      '.o-modal__content .o-modal__upper-close-container-button'
    )
  ).toBe(true);
});

it('should remove padding for the root content element', async () => {
  await openNoHeaderModal();

  const contentNoHeaderPadding = await page.$eval(
    '.o-modal__content--noheader',
    el => window.getComputedStyle(el).padding
  );

  expect(contentNoHeaderPadding).toBe('0px');
});

async function openModal() {
  await page.goto(
    `${host}/iframe.html?id=components-modal--modal&viewMode=story`
  );
}

async function openForcedModal() {
  await page.goto(
    `${host}/iframe.html?id=components-modal--modal&knob-open=true&knob-forced=true&viewMode=story`
  );
}

async function openNoHeaderModal() {
  await page.goto(
    `${host}/iframe.html?id=components-modal--modal&knob-open=true&knob-no%20header=true&viewMode=story`
  );
}

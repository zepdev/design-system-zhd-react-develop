import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { checkA11y, configureAxe, injectAxe } from 'axe-playwright';
import { Page } from 'playwright';

/*
 * See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
const a11yConfig: TestRunnerConfig = {
  async preRender(page) {
    await injectAxe(page as Page);
  },
  async postRender(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Apply story-level a11y rules
    await configureAxe(page as Page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await checkA11y(page as Page, '#storybook-root', {
      detailedReport: true,
      // detailedReportOptions: {
      //   html: true,
      // },
    });
  },
};

module.exports = a11yConfig;

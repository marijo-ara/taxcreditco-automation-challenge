# Automation Challenge (Playwright + TypeScript)

Automated test suite for the TaxCreditCo automation challenge survey application.

**Test URL**: https://uat-survey.taxcreditco.com/automation-challenge

This project uses Playwright with TypeScript, following best practices including Page Object Model (POM) pattern, test fixtures, and centralized configuration.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** 18 or higher ([Download Node.js](https://nodejs.org/))
  - To check your Node.js version: `node --version`
- **npm** (comes with Node.js) or **yarn** or **pnpm**
  - To check your npm version: `npm --version`
- **Git** (for cloning the repository)

## 🚀 Installation

Follow these steps to set up the project:

### Step 1: Clone the Repository

```bash
git clone https://github.com/marijo-ara/taxcreditco-automation-challenge.git
cd taxcreditco-automation-challenge
```

### Step 2: Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

This will install:
- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript type definitions for Node.js

### Step 3: Install Playwright Browsers

Playwright requires browser binaries to run tests. Install them using:

```bash
npx playwright install
```

To install system dependencies as well (recommended for Linux):

```bash
npx playwright install --with-deps
```

This will download:
- Chromium
- Firefox
- WebKit (Safari)

**Note**: The browser installation may take a few minutes depending on your internet connection.

## 🧪 Running Tests

The project includes several npm scripts for running tests in different modes:

### Basic Test Execution

Run all tests in headless mode (default):

```bash
npm test
```

or

```bash
npm run test
```

This will execute tests in all configured browsers (Chromium, Firefox, WebKit).

### Run Tests on Specific Browser

Run tests only on Chromium (faster for development):

```bash
npm run test:chromium
```

### Run Tests with Trace (Recommended for Debugging)

Run tests with trace enabled to capture detailed execution information:

```bash
npm run test:trace
```

Run Chromium tests with trace:

```bash
npm run test:chromium:trace
```

After execution, view the trace using:

```bash
npx playwright show-trace trace.zip
```

### Interactive UI Mode

Run tests in Playwright's interactive UI mode (great for debugging and watching tests):

```bash
npm run test:ui
```

### Debug Mode

Run tests in debug mode with Playwright Inspector:

```bash
npm run test:debug
```

With trace enabled:

```bash
npm run test:debug:trace
```

### Headed Mode (Visible Browser)

Run tests with visible browser windows:

```bash
npm run test:headed
```

With trace enabled:

```bash
npm run test:headed:trace
```

### View Test Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:trace` | Run all tests with trace enabled |
| `npm run test:ui` | Run tests in interactive UI mode |
| `npm run test:chromium` | Run tests only on Chromium |
| `npm run test:chromium:trace` | Run Chromium tests with trace |
| `npm run test:debug` | Run tests in debug mode |
| `npm run test:debug:trace` | Run tests in debug mode with trace |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:headed:trace` | Run tests with visible browser and trace |
| `npm run codegen` | Generate tests using Playwright Codegen |

## 📁 Project Structure

```
taxcreditco-automation-challenge/
├── tests/
│   ├── automation-challenge.pom.spec.ts  # Main test file
│   ├── config/
│   │   └── constants.ts                  # Centralized constants (URLs, timeouts, text content)
│   ├── fixtures/
│   │   └── pages.ts                      # Playwright fixtures for page objects
│   ├── helpers/
│   │   ├── test-data.ts                  # Test data factory
│   │   └── utils.ts                      # Utility functions
│   └── pages/
│       ├── BasicInfoPage.ts              # Page Object for basic info form
│       ├── YesNoPage.ts                  # Page Object for Yes/No questions
│       └── ConfirmNamePage.ts            # Page Object for name confirmation
├── playwright.config.ts                  # Playwright configuration
├── package.json                          # Project dependencies and scripts
└── README.md                             # This file
```

## 🔧 Configuration

### Playwright Configuration

Key settings in `playwright.config.ts`:

- **Test Timeout**: 60 seconds per test
- **Retries**: 1 retry locally, 2 retries in CI
- **Browsers**: Chromium, Firefox, WebKit
- **Screenshots**: Captured on failure
- **Videos**: Recorded on first retry
- **Traces**: Captured on first retry
- **Base URL**: https://uat-survey.taxcreditco.com

### Test Configuration

- Tests use **Page Object Model (POM)** pattern
- **Fixtures** provide page objects to tests
- **Test Data Factory** generates test data
- **Constants** are centralized for easy maintenance

## 🏗️ Architecture

This project follows best practices for test automation:

1. **Page Object Model (POM)**: Each page has its own class with methods and locators
2. **Fixtures**: Custom fixtures extend Playwright's base test
3. **Test Data Factory**: Centralized test data generation
4. **Constants**: All configuration values in one place
5. **Test Steps**: Tests are organized with clear steps and expected behaviors
6. **TypeScript**: Full type safety throughout the codebase

## 📊 Test Report

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```

The report includes:
- Test execution results
- Screenshots of failures
- Videos of failed tests
- Trace files for detailed debugging

## 🐛 Troubleshooting

### Browser Installation Issues

If you encounter issues installing browsers:

1. Try installing with system dependencies:
   ```bash
   npx playwright install --with-deps
   ```

2. On Linux, you may need to install additional system libraries
3. Check [Playwright installation guide](https://playwright.dev/docs/intro#installation) for platform-specific instructions

### Test Failures

If tests fail:

1. Check your internet connection (tests access external URLs)
2. Verify the target application is accessible
3. Run tests with trace enabled for detailed debugging:
   ```bash
   npm run test:chromium:trace
   ```
4. View the HTML report for screenshots and error details

### TypeScript Errors

If you see TypeScript errors:

1. Ensure all dependencies are installed: `npm install`
2. Check that you're using Node.js 18+
3. Verify TypeScript can find type definitions

## 🔍 Code Generation

Generate new tests using Playwright's code generation tool:

```bash
npm run codegen
```

This opens a browser where you can interact with the application, and Playwright will generate test code for your actions.

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright TypeScript Guide](https://playwright.dev/docs/intro)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

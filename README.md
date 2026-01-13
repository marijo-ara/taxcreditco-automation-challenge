# Automation Challenge (Playwright + TypeScript)

Automated test suite for the TaxCreditCo automation challenge survey application.

**Test URL**: https://uat-survey.taxcreditco.com/automation-challenge

This project uses Playwright with TypeScript, following best practices including Page Object Model (POM) pattern, test fixtures, and centralized configuration.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** 18 or higher ([Download Node.js](https://nodejs.org/))
  - To check your Node.js version: `node --version`
- **npm** (comes with Node.js) or **yarn** or **pnpm**
  - To check your npm version: `npm --version`
- **Git** (for cloning the repository)

## Installation

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

## Running Tests

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

## Available Scripts

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



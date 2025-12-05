# AoC2025

Advent of Code 2025 Solutions in Node.js

## Setup

This project is set up to run multiple Node.js scripts separately, making it easy to work on different daily challenges independently.

### Prerequisites

- Node.js (v20 or later recommended)
- npm (comes with Node.js)

### Installation

No dependencies are required for the basic setup. If you add any npm packages later, run:

```bash
npm install
```

## Usage

### Running Individual Scripts

You can run scripts in several ways:

#### Method 1: Using npm scripts (recommended)

Each day has a dedicated npm script:

```bash
npm run day01  # Run day 1 solution
npm run day02  # Run day 2 solution
```

#### Method 2: Direct execution

You can run any script directly with Node.js:

```bash
node src/day01.js
node src/day02.js
```

### Adding New Scripts

1. Create a new file in the `src/` directory (e.g., `src/day03.js`)
2. Add a corresponding npm script in `package.json`:
   ```json
   "day03": "node src/day03.js"
   ```
3. Run it with `npm run day03`

## Project Structure

```
AoC2025/
├── src/              # All solution scripts
│   ├── day01.js      # Day 1 solution
│   ├── day02.js      # Day 2 solution
│   └── ...           # Additional days
├── package.json      # Project configuration
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Tips

- Each script is independent and can be run separately
- Add your input files in the `src/` directory or create a separate `inputs/` directory
- Use ES6 modules (import/export) as the project is configured with `"type": "module"`
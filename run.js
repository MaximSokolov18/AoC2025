#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🎄 Advent of Code 2025 🎄\n');
console.log('Available days:');

// List available days
const srcDir = './src';
const days = fs.readdirSync(srcDir)
  .filter(dir => dir.startsWith('day'))
  .sort();

days.forEach(day => {
  console.log(`  - ${day}`);
});

console.log();

rl.question('Enter day number (01-25): ', (input) => {
  const day = input.trim();

  if (!day) {
    console.error('Please provide a day number');
    rl.close();
    process.exit(1);
  }

  // Pad the day with a leading zero if needed
  const paddedDay = String(day).padStart(2, '0');
  const scriptPath = `src/day${paddedDay}/day${paddedDay}.ts`;

  if (!fs.existsSync(scriptPath)) {
    console.error(`\n❌ Day ${paddedDay} not found at ${scriptPath}`);
    rl.close();
    process.exit(1);
  }

  console.log(`\n▶️  Running Day ${paddedDay}...\n`);
  rl.close();

  try {
    execSync(`ts-node ${scriptPath}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`\n❌ Error running day ${paddedDay}`);
    process.exit(1);
  }
});


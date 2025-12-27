#!/usr/bin/env node

/**
 * Fountain Screenplay Validation Script
 *
 * Validates .fountain files for proper syntax and structure.
 * Uses fountain-js for parsing and adds custom validation rules.
 */

const fs = require('fs');
const path = require('path');
const { Fountain } = require('fountain-js');

const fountain = new Fountain();
const srcDir = path.join(__dirname, '..', 'src');

// Check if src directory exists
if (!fs.existsSync(srcDir)) {
  console.error('Error: src/ directory not found');
  process.exit(1);
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.fountain'));

if (files.length === 0) {
  console.log('No .fountain files found in src/');
  process.exit(0);
}

let hasErrors = false;
let totalScenes = 0;
let totalWarnings = 0;

console.log('\n=== Fountain Validation ===\n');

files.forEach(file => {
  const filePath = path.join(srcDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  try {
    const output = fountain.parse(content);
    const lines = content.split('\n');

    // Count scene headings (INT./EXT. patterns)
    const scenePattern = /^(INT\.|EXT\.|INT\.\/EXT\.|I\/E\.)/i;
    const scenes = lines.filter(line => scenePattern.test(line.trim()));
    totalScenes += scenes.length;

    console.log(`\u2713 ${file}: ${scenes.length} scenes parsed successfully`);

    // Validate title page
    if (!content.includes('Title:')) {
      console.log(`  Warning: Missing title page`);
      totalWarnings++;
    }

    // Check for scene headings without time of day
    const timeOfDay = /- (DAY|NIGHT|MORNING|EVENING|DAWN|DUSK|LATER|CONTINUOUS|SAME|MOMENTS LATER)/i;
    scenes.forEach((scene, idx) => {
      if (!timeOfDay.test(scene)) {
        const lineNum = lines.findIndex(l => l.trim() === scene.trim()) + 1;
        console.log(`  Warning: Scene at line ${lineNum} may be missing time of day`);
        totalWarnings++;
      }
    });

    // Check for orphaned parentheticals
    const parentheticalPattern = /^\s*\([^)]+\)\s*$/;
    lines.forEach((line, idx) => {
      if (parentheticalPattern.test(line)) {
        // Check if next non-empty line is dialogue
        let nextIdx = idx + 1;
        while (nextIdx < lines.length && lines[nextIdx].trim() === '') {
          nextIdx++;
        }
        if (nextIdx < lines.length) {
          const nextLine = lines[nextIdx].trim();
          // If next line is a scene heading or character name (ALL CAPS), it's orphaned
          if (scenePattern.test(nextLine) || /^[A-Z][A-Z\s]+$/.test(nextLine)) {
            console.log(`  Warning: Possible orphaned parenthetical at line ${idx + 1}`);
            totalWarnings++;
          }
        }
      }
    });

  } catch (err) {
    console.error(`\u2717 ${file}: Parse error - ${err.message}`);
    hasErrors = true;
  }
});

console.log('\n=== Summary ===');
console.log(`Files validated: ${files.length}`);
console.log(`Total scenes: ${totalScenes}`);
console.log(`Warnings: ${totalWarnings}`);
console.log(`Status: ${hasErrors ? 'FAILED' : 'PASSED'}`);
console.log('');

process.exit(hasErrors ? 1 : 0);

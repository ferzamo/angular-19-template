const fs = require('fs');

// Obtener el umbral de cobertura desde los parámetros de la línea de comandos (default a 80 si no se pasa un valor)
const threshold = parseFloat(process.argv[2]) || 80;

if (isNaN(threshold) || threshold < 0 || threshold > 100) {
  console.error('❌ Invalid threshold value. Please provide a number between 0 and 100.');
  process.exit(1);
}

try {
  const coverage = JSON.parse(fs.readFileSync('./coverage/coverage-summary.json', 'utf-8'));

  const { statements, branches, functions, lines } = coverage.total;

  if (
    statements.pct < threshold ||
    branches.pct < threshold ||
    functions.pct < threshold ||
    lines.pct < threshold
  ) {
    console.error(`❌ Coverage below ${threshold}%!`);
    console.error(`Statements: ${statements.pct}%`);
    console.error(`Branches: ${branches.pct}%`);
    console.error(`Functions: ${functions.pct}%`);
    console.error(`Lines: ${lines.pct}%`);
    process.exit(1);
  } else {
    console.log(`✅ Coverage meets the threshold of ${threshold}%!`);
  }
} catch (error) {
  console.error('❌ Error reading coverage summary:', error.message);
  process.exit(1);
}

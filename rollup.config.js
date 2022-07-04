import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

function makeBundle({ filePath, dir = 'dist' }) {
  return {
    input: filePath,
    output: {
      dir,
      format: 'cjs',
    },
    plugins: [typescript(), terser()],
    external: [],
  };
}

export default defineConfig([
  makeBundle({ filePath: 'src/index.ts' }),
]);

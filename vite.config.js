// vite.config.js 예시 (React Compiler가 활성화될 수 있는 부분)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {}],
        ],
      },
      // SWC를 사용하는 경우:
      // swc: {
      //   jsc: {
      //     experimental: {
      //       plugins: [
      //         ['@swc/plugin-react-compiler', {}]
      //       ]
      //     }
      //   }
      // }
    }),
  ],
});

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
      generateScopedName: function (name, filename, css) {
        var path = require("path");
        var i = css.indexOf("." + name);
        var line = css.substr(0, i).split(/[\r\n]/).length;
        var file = path.basename(filename, ".css");

        return "_" + file + "_" + line + "_" + name;
      },
      hashPrefix: 'myApp'
    }
  }
})

<template>
<button @click="toggleCodeMirrorMode">Toggle</button>
  <textarea v-model="content" id="editor"></textarea>
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/gfm/gfm.js'

export default {
  name: 'App',
  data(){
    return {
      content: '// Saisir votre code ici',
    }
  },
  mounted(){
    this.cm = CodeMirror.fromTextArea(document.getElementById('editor'),{
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
    })
  },
  methods:{

    toggleCodeMirrorMode() {
      const codeMirrorMode = this.cm.getOption('mode');
      if(codeMirrorMode === 'javascript'){
        this.cm.setOption('mode', 'gfm');
      }else {
        this.cm.setOption('mode', 'javascript');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>

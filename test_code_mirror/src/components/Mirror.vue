<template>
<!--<button @click="toggleCodeMirrorMode">Toggle</button>-->
 
 <div class="container">
   <div class="row">
  
     <div class="form-group col">
        <select v-on:change="changeTheme()" v-model="themeSelected" class="form-control">
        <option value="" selected disabled>select a theme</option>
        <option v-bind:key="index" v-for="(theme, index ) in themeData">{{ theme }}</option>
      </select>
     </div>

     <div class="form-group col">
       <select v-on:change="changeMode()" v-model="modeSelected" class="form-control">
        <option value="" selected disabled>select a language</option>
        <option v-bind:key="index" v-for="(mode, index ) in modeData">{{ mode }}</option>
      </select>
     </div>

  </div>

  <div class="form-group">
    <textarea v-model="content" id="editor"></textarea>
  </div>

   
 </div>
  
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/dracula.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/idea.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/lucario.css';
import 'codemirror/theme/moxer.css';
import 'codemirror/mode/gfm/gfm.js';

import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/php/php.js';
import 'codemirror/mode/python/python.js';

export default {
  name: 'App',
  data(){
    return {
      content: '// Saisir votre code ici',

      themeData: ['monokai', 'moxer', 'dracula', 'eclipse', '3024-day', 'solarized', 'lucario', 'isotope', 'idea'],
      themeSelected:'',

      modeData: ['javascript', 'php', 'xml', 'python'],
      modeSelected: ''
       
    }
  },
  mounted(){
    this.cm = CodeMirror.fromTextArea(document.getElementById('editor'),{
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript'
    })
  },
  methods:{

    /*toggleCodeMirrorMode() {
      const codeMirrorMode = this.cm.getOption('mode');
      if(codeMirrorMode === 'javascript'){
        this.cm.setOption('mode', 'gfm');
      }else {
        this.cm.setOption('mode', 'javascript');
      }
    },*/

    changeTheme() {
      this.cm.setOption('theme',this.themeSelected)
    },
    changeMode() {
      this.cm.setOption('mode',this.modeSelected)
    }
  }
}
</script>

<style scoped>

.container {
  padding: 40px 80px 15px 80px;
  background-color: #fff;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 5px;
}


</style>

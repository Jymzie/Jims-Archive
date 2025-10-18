<template>
  <div class="ma-4">
        
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>My VSCode Extensions</h1>
                </div>
                
            </v-col>
            <v-col>
                <h3>DOWNLOADS:</h3>
                <ol>
                    <li v-for="(item,i) in download" :key="i"><a :href="item.link" target="_blank">{{item.title}}</a></li>
                </ol>
            </v-col>
        </v-row>

        

        <v-card class="mt-5">
          <v-card-title class="blue white--text">EXTENSIONS</v-card-title>
          <v-card-text>
            <ol>
              <v-row class="my-2">
                <v-col class="mb-n2" cols="12" xl="2" lg="3" md="4" sm="5" v-for="(item, i) in extensions" :key="i">
                  <li>{{ item }}</li>
                </v-col>
              </v-row>
            </ol>
          </v-card-text>
        </v-card>

        <v-card class="mt-5">
          <v-card-title class="blue white--text">EXPORT EXTENSIONS</v-card-title>
          <v-card-text>
            <ul>
              <li>Open <b>Visual Studio Code</b> and click <b>Terminal</b> at the upper-left corner</li>
              <li>Use this code to export your downloaded extension into txt file
                  <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                    code --list-extensions > vscode-extensions.txt
                  </code></pre>
              </li>
              <li><b>vscode-extensions.txt</b> will be generated at the <b>current path of your Terminal</b></li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mt-5">
          <v-card-title class="blue white--text">IMPORT EXTENSIONS</v-card-title>
          <v-card-text>
            <ul>
              <li>Open <b>Visual Studio Code</b> and click <b>Terminal</b> at the upper-left corner</li>
              <li>Make sure the <b>vscode-extensions.txt</b> is located from the <b>Terminal path</b></li>
              <li>Use this code to import the extensions to your VSCode
                <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                  Get-Content vscode-extensions.txt | ForEach-Object {code --install-extension $_}
                </code></pre>
              </li>
            </ul>
          </v-card-text>
        </v-card>

     
    </div>
</template>

<script>
export default {
  data:()=>({
    download:[
      {title:'Visual Studio Code',link:'https://code.visualstudio.com/'},
      {title:'My Extensions', link:'https://drive.google.com/file/d/1_MDRM83HGfufSnmUBOyzkduObJqAlokW/view?usp=sharing'}
    ],
    extensions:[
      'Auto Close Tag', 'Auto Complete Tag', 'Auto Rename Tag', 'Comment Anchors', 'CSS Formatter', 'ES7+React/Redux/React-Native snippets',
      'json', 'Laravel Blade Snippets', 'Laravel Snippets', 'Material Design Icon Intellisense', 'Material Icon Theme',
      'MongoDB for VS Code', 'npm', 'Path Intellisense', 'PHP Debug', 'PHP Getters & Setters', 'PHP Intelephense', 'PHP IntelliSense',
      'PHP Namespace Resolver', 'Prettier - Code formatter', 'Tailwind CSS IntelliSense', 'TypeScript Vue Plugin (Volar)',
      'Vetur', 'Vue (Official)', 'Vue Peek', 'vue-format', 'vuetify-vscode'
    ]
  }),
  mounted(){
      // Prevent automatic highlighting
      window.Prism = window.Prism || {};
      window.Prism.manual = true;

      // Highlight manually when needed
      Prism.highlightAll();
  },
  methods:{
    mDownload(){
      const link = document.createElement("a");
      link.href = '/downloads/vscode-extensions.txt'
      link.setAttribute("download", 'vscode-extensions.txt')
      document.body.appendChild(link)
      link.click();
      link.remove();
    }
  }
}
</script>
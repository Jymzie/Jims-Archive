<template>
  <div class="ma-4">
        
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>Apache24+PHP Installation</h1>
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
          <v-card-title class="blue white--text">APACHE24 CONFIG</v-card-title>
          <v-card-text>
            <ul>
              <li>Install <b>vc_redist.x64/86.exe</b></li>
              <li>Extract <b>Apache24 zip file</b>. Preferred to be extracted at the main disk or <b>C:\</b></li>
              <li>Open <b>Apache24 folder</b>, create a folder and name it as <b>php</b> and extract <b>PHP zip file</b> inside the php folder</li>
              <li>Go to <b>Apache24/conf</b> and make another copy of <b>httpd.conf</b> for backup then edit it using any text editor app. Put this at the bottom:
                <pre><code class="language-apacheconf">
                  AddHandler application/x-httpd-php .php 
                  # configure the path to php.ini 
                  PHPIniDir "C:/Apache24/php" 
                </code></pre>
              </li>
              <li>Find this loadmodule and uncomment it by removing (<b>#</b>). If its not exist, copy and paste it
                <pre><code class="language-apacheconf">
                  LoadModule php7_module C:\Apache24\php\php7apache2_4.dll
                </code></pre>
                For PHP 8+:
                <pre><code class="language-apacheconf">
                  LoadModule php_module C:\Apache24\php\php8apache2_4.dll
                </code></pre>
              </li>

              <li>Find DirectoryIndex and put index.php
                <pre><code class="language-apacheconf">
                  &lt;IfModule dir_module&gt;
                      DirectoryIndex index.html index.php
                  &lt;/IfModule&gt;
                </code></pre>
              </li>
              <li>Open CMD, go to the Apache24 bin path and check httpd syntax
                <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                    cd C:\Apache24\bin
                  </code></pre>
                <pre class="command-line" data-prompt="C:\Apache24\bin>"><code class="language-bash">
                    httpd -t
                </code></pre>
                If you see <b>Syntax OK</b>, install Apache24
                <pre class="command-line" data-prompt="C:\Apache24\bin>"><code class="language-bash">
                    httpd -k install -n "Apache24"
                </code></pre>
              </li>

              <li>Go to <b>C:\Apache24\php</b>, copy and paste the <b>php.ini-development</b> file and rename it as <b>php.ini</b></li>
              <li>Edit <b>php.ini</b> to any text editor app and uncomment the following extensions by removing (<b>;</b>)
                <pre><code class="language-ini">
                  extension=curl
                  extension=fileinfo
                  extension=gd2/gd
                  extension=intl
                  extension=mbstring
                  extension=exif 
                  extension=mysqli
                  extension=odbc
                  extension=openssl
                  extension=pdo_mysql
                  extension=pdo_odbc
                </code></pre>
              </li>

              <li>Click <b>window start button</b>  and search <b>services</b> or type <b>windows logo+R </b>and type <b>services.msc</b>. Find <b>Apache24</b>, right-click and choose <b>Start</b>. If its already started <b>Restart</b> it</li>
              <li>For some testing, go to <b>C:\Apache24\htdocs</b> and change the extension of <b>index.html</b> to <b>index.php</b>. Edit the file to any text editor app and replace its code with these:
                <pre><code class="language-php">
                  &lt;?php
                    phpinfo();
                  ?&gt;
                </code></pre>
              </li>
              <li>To check if its working and every php extensions are enabled, open your browser and use this url: <a href="http://localhost/index.php" target="_blank">localhost/index.php</a></li>
            </ul>
          </v-card-text>
        </v-card>

     
    </div>
</template>

<script>
export default {
  data:()=>({
    download:[
      {title:'Apache24.zip',link:'https://www.apachelounge.com/download/'},
      {title:'PHP 8.1',link:'https://drive.usercontent.google.com/download?id=1CFIiE9015ZKLMnujJ4gYN1mH-f3dqJ1e&export=download'},
      {title:'vc_redist',link:'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170'},
    ],
  }),
  mounted(){
      // Prevent automatic highlighting
      window.Prism = window.Prism || {};
      window.Prism.manual = true;

      // Highlight manually when needed
      Prism.highlightAll();
  },
}
</script>
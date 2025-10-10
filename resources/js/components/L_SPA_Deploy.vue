<template>
  <div class="ma-4">
        
        <div class="d-flex align-center" style="height: 100%;">
            <h1>Local Server Deployment for Laravel+Vue</h1>
        </div>
      
        
        <v-card class="mt-5">
          <v-card-title class="blue white--text">MODIFICATIONS</v-card-title>
          <v-card-text>
            <ul>
              <li>Open File Explorer and go to <b>C:/Apache24/conf</b>. Open httpd.conf using any text editor app and put these at the bottom part. Don't forget to change the <b>projectalias</b> and <b>projectname</b> then save
                <pre><code class="language-apacheconf">
                  Alias /projectalias C:\Apache24\htdocs\projectname/public/
                  &lt;Directory "C:\Apache24\htdocs\projectname/public/"&gt;
                    AllowOverride All
                    Options Indexes FollowSymLinks
                    Require all granted
                  &lt;/Directory&gt;
                </code></pre>

              </li>

              <li>Open CMD and use this code to open your Project folder to VSCode
                  <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                    cd C:\Apache24\htdocs\ProjectName
                  </code></pre>
                  <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                    code .
                  </code></pre>
              </li>

              <li>Go to <b>public/.htaccess</b> then replace its code with these then save
                <pre><code class="language-apacheconf">
                  &lt;IfModule mod_rewrite.c&gt;
                      &lt;IfModule mod_negotiation.c&gt;
                          Options -MultiViews -Indexes
                      &lt;/IfModule&gt;

                      RewriteEngine On
                      #RewriteBase /
                      # Handle Authorization Header
                      RewriteCond %{HTTP:Authorization} .
                      RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

                      # Redirect Trailing Slashes If Not A Folder...
                      RewriteCond %{REQUEST_FILENAME} !-d
                      RewriteCond %{REQUEST_URI} (.+)/$
                      #RewriteRule ^ %1 [L,R=301]
                      #RewriteRule ^(.*)/$ //$1 [L,R=301]
                          RewriteBase /projectalias/
                          RewriteRule ^(.*)/$ /projectalias/$1 [L,R=301]

                      # Handle Front Controller...
                      RewriteCond %{REQUEST_FILENAME} !-d
                      RewriteCond %{REQUEST_FILENAME} !-f
                      RewriteRule ^ index.php [L]
                  &lt;/IfModule&gt;
                </code></pre>
              </li>

              <li>Go to <b>resources/js/router.js</b> and put 
                <code class="language-js">base: '/projectalias/',</code> under <b>mode: 'history',</b> then save
              </li>

              <li>Go to <b>webpack.mix.js</b>, add this object at the bottom then save
                <pre><code class="language-js">
                  mix.webpackConfig({
                      output: {
                      publicPath: '/projectalias/',
                          chunkFilename: 'js/chunks/[name].js',
                      },
                  });
                </code></pre>
                <i><b>NOTE:</b> Don't forget to change the <b>projectalias</b> and <b>projectname</b></i>
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mt-5">
          <v-card-title class="blue white--text">DEPLOYMENT</v-card-title>
          <v-card-text>
            <ul>
              <li>Go back to CMD, clear the Project cache and run the Project in production mode
                  <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                    composer dump-autoload
                    php artisan optimize:clear
                    npm run prod
                  </code></pre>
              </li>

              <li>Go to services and restart Apache24 services for httpd.conf changes to load</li>
              <li>Go to url: <a>localhost/projectalias</a> to check the project</li>
            </ul>
          </v-card-text>
         </v-card> 
    </div>
</template>

<script>
export default {
  mounted(){
      // Prevent automatic highlighting
      window.Prism = window.Prism || {};
      window.Prism.manual = true;

      // Highlight manually when needed
      Prism.highlightAll();
  },
}
</script>
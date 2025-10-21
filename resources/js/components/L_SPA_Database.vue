<template>
  <div class="ma-4">
        
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>DATABASE SETUP</h1>
                </div>
                
            </v-col>
            <v-col>
                <h3>REQUIREMENTS:</h3>
                <ol>
                  <li v-for="(item,i) in requirements" :key="i">
                      <span v-if="item.link == undefined">{{item.title}}</span>
                      <a v-else :href="item.link" target="_blank">{{ item.title }}</a> 
                  </li>
                </ol>
            </v-col>
        </v-row>
        
        <v-card class="mt-5">
          <v-card-title class="blue white--text">CREATE DATABASE</v-card-title>
          <v-card-text>
            <ul>
              <li>After installation and setting up the MySQL and phpMyAdmin, go to your <b>localhost phpmyadmin</b> and login</li>
              <li>From phpmyadmin sidebar, click <b>New</b></li>
              <li>Set Database name to <b>sample</b> and set Collation to <b>utf8mb4_unicode_ci</b> and click create</li>
              <li>Set table name to <b>sample_table</b> and number of columns to 2 and click Go</li>
              <li>Set the first row name to <b>ID</b> and check <b>A_I (auto increment)</b></li>
              <li>Set the second row name to <b>Name</b>, type to <b>Varchar</b> and length/values to <b>255</b> then click save</li>
              <li>Go to <b>insert</b> tab and set name value to <b>John Doe</b> and click Go</li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mt-5">
          <v-card-title class="blue white--text">SETUP</v-card-title>
          <v-card-text>
            <ul>
              <li>Open CMD, locate your project path and open it to VSCode
                <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                    cd C:\Apache24\htdocs\ProjectName
                  </code></pre>
                <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                    code .
                </code></pre>
            
              </li>

              <li>Go to <b>.env</b> and edit the <b>DB_</b> variables. Put your own phpmyadmin username and password:
                <pre><code class="language-ini">
                  DB_CONNECTION=mysql
                  DB_HOST=localhost
                  DB_PORT=
                  DB_DATABASE=Sample
                  DB_USERNAME=phpmyadmin_username
                  DB_PASSWORD=phpmyadmin_password
                </code></pre>
                <i><b>NOTE:</b> The following steps has a ready-to-use <b>RESTful API Controller</b>, see documentation <a :href="this.$url+'/L_SPA_RestfulAPI'" target="_blank">here</a></i>
              </li>

              <li>Go to <b>resources/js/components/Home.vue</b> and replace its code with:
                <pre><code class="language-html">
                  &lt;template&gt;
                    &lt;v-card&gt;
                        &lt;v-card-text&gt;
                            &lt;v-simple-table&gt;
                                &lt;thead&gt;
                                    &lt;tr&gt;
                                        &lt;td v-for="(header, h) in TableHeader" :key="h"&gt;{{ header }}&lt;/td&gt;
                                    &lt;/tr&gt;
                                &lt;/thead&gt;
                                &lt;tbody&gt;
                                    &lt;tr v-for="(item, i) in TableContent" :key="i"&gt;
                                        &lt;td&gt;{{ itemID }}&lt;/td&gt;
                                        &lt;td&gt;{{ itemName }}&lt;/td&gt;
                                    &lt;/tr&gt;
                                &lt;/tbody&gt;
                            &lt;/v-simple-table&gt;
                        &lt;/v-card-text&gt;
                    &lt;/v-card&gt;
                  &lt;/template&gt;
                  &lt;script&gt;
                    //put script here
                  &lt;/script&gt;
                </code></pre>
                <pre><code class="language-js">
                  //Home.vue script
                  export default {
                    data:() => ({
                        TableHeader:[],
                        TableContent:[]
                    }),
                    created(){
                        this.mTable()
                    },
                    methods:{
                        mTable(){
                            axios.get(`api/sample`)
                            .then(res => {
                                this.TableContent = res.data
                                this.TableHeader = Object.keys(res.data[0])
                            })
                        }
                    }
                  }

                </code></pre>
              </li>

              <li>Go to <b>app/Http/Controllers/SampleController.php</b> and put this code under use <b>Illuminate\Http\Request;</b>
                <pre><code class="language-php">
                  use Illuminate\Support\Facades\DB;
                </code></pre>
                And replace the code from <b>public function index</b> with:
                <pre><code class="language-php">
                  public function index(Request $req){
                    return DB::connection('mysql')
                    ->select("SELECT * FROM sample_table");
                  }
                </code></pre>
              </li>

              <li>Run your local website and check the result
                <div class="centerimg">
                  <img src="images/databasesamp.webp"/>
                </div>
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mt-5">
          <v-card-title class="blue white--text">EXTRAS: CREATE MULTIPLE DB_CONNECTION</v-card-title>
          <v-card-text>
            <ul>
              <li>If you need multiple database connection, go to <b>config/database.php</b>. In the <b>connections</b> array are the list of available database format. We currently using the existing format of mysql for our Sample DB so we need to create another mysql DB through copy/paste:
                <div class="centerimg">
                  <img src="images/databasemulti1.webp"/>
                </div>
                
              </li>

              <li>After pasting it, edit the <b>connection name</b> and its <b>DB_</b> variables to make it unique:
                <div class="centerimg">
                  <img src="images/databasemulti2.webp"/>
                </div>
              </li>

              <li>Go to <b>.env</b>, copy/paste the existing <b>DB_</b> variables and edit it.
                <div class="centerimg">
                  <img src="images/databasemulti3.webp"/>
                </div>
              </li>

              <li>Try your new database. Go to <b>app/Http/Controllers/SampleController.php</b> and replace the code from public function index with your query:
                <pre><code class="language-php">
                  public function index(Request $req){
                    return DB::connection('newconnection')
                    →select("--query");
                  }
                </code></pre>
              </li>
            </ul>
          </v-card-text>
         </v-card> 

         <v-card class="mt-5">
          <v-card-title class="blue white--text">EXTRAS</v-card-title>
          <v-card-text>
            <ul>
              <li><b>USING OTHER SQL STATEMENTS IN DB::CONNECTION</b>
                <pre><code class="language-php">
                  DB::connection('connection_name')
                    →select("--for select query");
                    →insert("--for insert query");
                    →update("--for update query");
                    →delete("--for delete query");
                </code></pre>
              </li>
              <li><b>MULTIPLE CONNECTIONS WITHIN A DB::CONNECTION.</b> Sometimes we need to use <b>JOIN</b> function for 2 or more tables, but located in <b>different databases or servers</b>. Here's how it done:
                <pre><code class="language-php">
                  DB::connection('mysql')
                    ->select("SELECT * FROM sample_table A
                    INNER JOIN DatabaseName.dbo.TableName B
                    ON A.ID = B.ID
                    INNER JOIN ServerName.DatabaseName.dbo.TableName C
                    ON A.Name = C.Name");
                </code></pre>
              <i><b>NOTE:</b> We don't need to put the ServerName if the joining table uses the server of the connection declared</i>
              </li>
            </ul>
          </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
  data:()=>({
    requirements:[
      {title:'phpMyAdmin',link:'https://www.phpmyadmin.net/'},
      {title:'MySQL',link:'https://dev.mysql.com/downloads/'},
      {title:'RESTful API',link:'L_SPA_RestfulAPI'}
    ],
    itemID: '{{item.ID}}',
    itemName: '{{item.Name}}',
    header:'{{ header }}'
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
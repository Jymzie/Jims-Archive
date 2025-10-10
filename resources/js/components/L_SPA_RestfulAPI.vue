<template>
  <div class="ma-4">
        
    <v-row>
        <v-col cols="12" xl="5" lg="5" md="5" sm="12">
            <div class="d-flex align-center" style="height: 100%;">
                <h1>Laravel RESTful API</h1>
            </div>
            
        </v-col>
        <v-col>
          <v-simple-table>
            <thead>
              <tr >
                <th v-for="(header,h) in header" :key="h">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,i) in content" :key="i">
                <td>{{ item.verb }}</td>
                <td>{{ item.path }}</td>
                <td>{{ item.action }}</td>
                <td>{{ item.route }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
    </v-row>
      
        
        
        <v-card class="mt-5">
          <v-card-title class="blue white--text">CREATE A CONTROLLER</v-card-title>
          <v-card-text>
            <ul>
              <li>Open CMD and locate your Project folder path
                <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                    cd C:\Apache24\htdocs\ProjectName
                  </code></pre>
              </li>
              <li>Make a Controller and open your Project folder to VSCode
                <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                  php artisan make:controller SampleController --resource
                  code .
                </code></pre>

              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mt-5">
          <v-card-title class="blue white--text">SETUP</v-card-title>
          <v-card-text>
            <ul>
              <li>Go to <b>resources/js/components/Home.vue</b> and replace its code with these:
                  <pre><code class="language-html">
                    &lt;template&gt;
                      &lt;v-card&gt;
                        &lt;v-card-text&gt;
                          &lt;v-btn @click="mGreetings('Hello')"&gt;Click Here&lt;/v-btn&gt;
                          &lt;span style="font-size: 25px;" class="mx-4"&gt;{{ result }}&lt;/span&gt;
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
                        result: null
                      }),
                      methods:{
                        mGreetings(val){
                          axios.get(`api/sample?data=${val}`)
                          .then(res => {
                              this.result = res.data
                          })
                        }
                      }
                    }
                  </code></pre>
              </li>

              <li>Go to <b>routes/api.php</b> and put this code:
                <pre><code class="language-php">
                  use App\Http\Controllers\SampleController;

                  Route::resource('sample', SampleController::class);
                </code></pre>
              </li>

              <li>Go to <b>app/Http/Controllers/SampleController.php</b> and edit <b>public function index</b>:
                <pre><code class="language-php">
                  public function index(Request $req){
                      return $req->data;
                  }
                </code></pre>
              </li>

              <li>Go to your local website and check the result
                <div class="centerimg">
                  <img src="images/restapires.png"/>
                </div>
                
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card class="mt-5">
          <v-card-title class="blue white--text">EXTRAS</v-card-title>
          <v-card-text>
            <ul>
              <li>GET index with passing 2 $request
                  <pre><code class="language-js">
                    axios.get(`api/api_name?Data=${data}&Data2=example`)
                    .then(res => {
                      //condition
                    }).catch(({response}) =>{
                      //condition if fails
                    }).finally(() =>{
                      //condition triggers after .then and .catch
                    })
                  </code></pre>
              </li>

              <li>POST store with passing $request
                  <pre><code class="language-js">
                    axios.post(`api/api_name`, data)
                    .then(res => {
                      console.log(res.data)
                    })
                  </code></pre>
              </li>

              <li>If using window.location for accurate api correction. Go to <b>resources/js/app.js</b> and put this after import files, use project alias if necessary
                  <pre><code class="language-js">
                    Vue.prototype.$url = window.location.origin+'/projectalias'
                  </code></pre>
                  Example:
                  <pre><code class="language-js">
                    axios.post(`${this.$url}/api/api_name`, data)
                    .then(res => {
                      console.log(res.data)
                    })
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
    header:['Verb','Path','Action','Route Name'],
    content:[
      {verb:'GET',path:'/apiname',action:'index',route:'apiname.index'},
      {verb:'GET',path:'/apiname/create',action:'create',route:'apiname.create'},
      {verb:'POST',path:'/apiname',action:'store',route:'apiname.store'},
      {verb:'GET',path:'/apiname/:id',action:'show',route:'apiname.show'},
      {verb:'GET',path:'/apiname/:id/edit',action:'edit',route:'apiname.edit'},
      {verb:'PUT|PATCH',path:'/apiname/:id',action:'update',route:'apiname.update'},
      {verb:'DELETE',path:'/apiname/:id',action:'destroy',route:'apiname.destroy'},
    ],
    result:'{{ result }}'
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
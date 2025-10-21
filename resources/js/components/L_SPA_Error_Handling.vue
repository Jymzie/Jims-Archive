<template>
  <div class="ma-4">
        
        <div class="d-flex align-center" style="height: 100%;">
            <h1>Error Handling</h1>
        </div>

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

              <li>Go to <b>resources/js/template</b> and create a file <b>Error.vue</b> and put this code:
                <pre><code class="language-html">
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;div class="background"&gt;
                        &lt;div class="font1 text-center" style="font-size: 80px;"&gt;{{status_code}}&lt;/div&gt;
                        &lt;div class="text-center"&gt;
                        &lt;v-btn class=" red white--text" small @click="GoBack"&gt;Go Back&lt;/v-btn&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div style="text-align: center;" class="font2 mb-5"&gt;
                        OOPS! SOMETHING WENT WRONG
                      &lt;/div&gt;

                      &lt;div style="font-size: 13px;text-align: center;"&gt;
                        SORRY FOR THE INCONVINIENCE, WE'RE WORKING ON IT&lt;br /&gt;
                        TRY &lt;strong style="font-size: 15px" class="red--text"
                          &gt;REFRESHING&lt;/strong &gt; THE PAGE OR 
                        &lt;strong style="font-size: 15px" class="red--text"
                          &gt;CONTACT US&lt;/strong &gt;  IF THE PROBLEM PERSIST&lt;br/&gt;

                          &lt;v-icon color="red"&gt;mdi-email&lt;/v-icon&gt; sample@gmail.com
                          &lt;v-icon color="red" class="ml-5"&gt;mdi-alert-circle&lt;/v-icon&gt; {{ status_namecode}}
                      &lt;/div&gt;
                      
                    &lt;/div&gt;
                  
                  &lt;/template&gt;
                  &lt;script&gt;
                    //put script here
                  &lt;/script&gt;
                  &lt;style scoped&gt;
                    /* put style here */
                  &lt;/style&gt;
                </code></pre>
                <pre><code class="language-js">
                  //Error.vue script
                  export default {
                    data: () => ({
                      status_code: null,
                      status_name:{
                        '400':'Bad Request',
                        '401':'Unauthorized',
                        '402':'Payment Required',
                        '403':'Forbidden',
                        '404':'Not Found', 
                        '405':'Method Not Allowed',
                        '406':'Not Acceptable',
                        '407':'Proxy Authentication Required',
                        '408':'Request Timeout',
                        '409':'Conflict',
                        '410':'Gone', 
                        '411':'Length Required',
                        '412':'Precondition Failed',
                        '413':'Payload Too Large', 
                        '414':'URI Too Long',
                        '415':'Unsupported Media Type',
                        '416':'Range Not Satisfiable', 
                        '417':'Expectation Failed',
                        '418':'Im a Teapot',
                        '419':'Page Expired',
                        '421':'Misdirected Requested', 
                        '422':'Unprocessable Entity',
                        '423':'Locked',
                        '424':'Failed Dependency',
                        '425':'Too Early',
                        '426':'Upgrade Required',
                        '428':'Precondition Required',
                        '429':'Too Many Requests',
                        '431':'Request Header Fields Too Large',
                        '451':'Unavailable For Legal Reasons',
                        '500':'Internal Server Error',
                        '501':'Not Implemented',
                        '502':'Bad Gateway',
                        '503':'Service Unavailable',
                        '504':'Gateway Timeout',
                        '505':'HTTP Version Not Supported',
                        '506':'Variant Also Negotiates',
                        '507':'Insufficient Storage',
                        '508':'Loop Detected',
                        '510':'Not Extended',
                        '511':'Network Authentication Required'
                      }
                    }),

                    created(){  
                      this.status_code = this.$route.params.status_code     
                    },
                    destroyed(){
                      this.$store.dispatch('setStatusCode', null)
                    },
                    methods:{
                      GoBack(){
                        window.history.go(-1)
                        this.$store.dispatch('setStatusCode', null)  
                      }
                    }
                  };
                  window.onload = onLoadWindow
                    function onLoadWindow () {
                        window.history.go(-1)    
                    }
                </code></pre>
                <pre><code class="language-css">
                  /* Error.vue style */
                  .font1{
                    font-family: RubikMaps;
                    font-size: 50px;
                    padding-top: 80px;
                    color: white;
                  }
                  .font2{
                    font-family: TitanOne;
                    font-size: 30px;
                    color: white;
                    text-shadow:1px 1px 7px black;
                  }
                  .background{
                    background-image: url('http://localhost/Sample/images/error.gif');
                    background-position: center center;
                    height: 250px;
                    background-size: contain;
                  }
                </code></pre>
              </li>

              <li>Go to <b>app/Exceptions</b> and create a file <b>CommonException.php</b> and put this code:
                <pre><code class="language-php">
                  &lt;?php

                    namespace App\Exceptions;

                    use Exception;
                    use Illuminate\Support\Facades\Log;

                    //ANCHOR for catching of errors logs
                    //NOTE logs located at storage/logs
                    class CommonException extends Exception
                    {
                        protected $e, $err_data, $status_code;
                        public function __construct($e, $err_data, $status_code){
                            $this->e = $e;
                            $this->err_data = $err_data;
                            $this->status_code = $status_code;
                        }
                        public function report(){
                            Log::error(json_encode(array(
                                // 'UserID' => $_COOKIE['UserCode'],
                                // 'UserName' => $_COOKIE['UserName'],
                                'Called Method' => $this->err_data['Functions'],
                                'Message' => mb_convert_encoding($this->e->getMessage(),'UTF-8'),
                                'Passed Parameter' => $this->err_data['Parameters'],
                                'Filename' => $this->e->getFile(),
                                'Line Number' => $this->e->getLine(),
                                'Trace' => $this->e->getTraceAsString()
                            ),JSON_UNESCAPED_UNICODE));
                        }
                        public function render(){
                            return response()->json(
                                [
                                    'message' => $this->e->getMessage(),
                                    'status_code' => $this->status_code
                                ],
                            $this->status_code);
                        }
                    }
                </code></pre>
              </li>

              <li>Go to <b>resources/js</b> and open <b>store.js</b> and add this code inside the state object:
                <pre><code class="language-js">
                  status: null,
                </code></pre>
                Add this code inside the <b>actions</b> object:
                <pre><code class="language-js">
                  setStatusCode(mutate, params){
                      mutate.commit('setStatusCode',params)
                  },
                </code></pre>
                Add this code inside the <b>mutations</b> object:
                <pre><code class="language-js">
                  setStatusCode(state, params){
                      state.status = params
                  }
                </code></pre>
                Add this code above:
                <pre><code class="language-js">
                  import store from './store'
                </code></pre>
                <i><b>NOTE:</b> The following steps has a ready-to-use <b>RESTful API Controller</b>, see documentation <a :href="this.$url+'/L_SPA_RestfulAPI'" target="_blank">here</a></i>
              </li>

              <li>Go to <b>resources/js/components/Home.vue</b> and replace its code with these:
                <pre><code class="language-html">
                  &lt;template&gt;
                    &lt;v-card&gt;
                        &lt;v-card-text&gt;
                            &lt;v-btn @click="mGreetings('Hello')"&gt;Click Here&lt;/v-btn&gt;
                            &lt;span style="font-size: 25px;" class="mx-4"&gt;{{result}}&lt;/span&gt;
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
                                .catch(err => {
                                    let errorval = 500;
                                    if(err.response != null){
                                        errorval = err.response.status
                                    }
                                    this.$store.dispatch('setStatusCode', errorval)
                                    this.$router.push('/error/' + errorval)
                                })
                            }
                        }
                    }
                </code></pre>
              </li>

              <li>Go to <b>app/Http/Controllers/SampleController.php</b> and edit the code inside <b>public function index</b>:
                <pre><code class="language-php">
                  public function index(Request $req){
                      try{
                          return response()->json('generated sample error', 400);
                      }
                      catch (\Exception $e) {
                          $err_data = ['Parameters' => $req->all(), 'Functions' => __FUNCTION__];
                          throw new CommonException($e, $err_data, 500);
                      } 
                  }
                </code></pre>
                <i><b>NOTE:</b> Self-made errors like this won't be recorded to <b>storage/logs</b> and only the <b>catch</b> from 	<b>Home.vue</b> will trigger because the SampleController successfully fulfill the request and will 	send the status code 400 to the Home.vue which is treated as an error for Bad Request</i>
              </li>

              <li>Go to your local website and click the Click Here button. An error page will appear.
                <div class="centerimg">
                  <img src="images/errorsamp.webp"/>
                </div>
              </li>
            </ul>
          </v-card-text>
        </v-card>

     
    </div>
</template>

<script>
export default {
  data:()=>({
    requirements:['phpMyAdmin','MySQL','Implementation of RESTful API'],
    status_code: '{{status_code}}',
    status_namecode: '{{status_name[status_code]}}',
    result:'{{result}}'
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
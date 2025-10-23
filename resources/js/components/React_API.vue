<template>
    <div class="ma-4">
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>Setup MERN API</h1>
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
            <v-card-title class="blue white--text">SETUP</v-card-title>
            <v-card-text>
                <ul>
                    <li>Open CMD and go to Project folder
                        <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                            cd C:\Apache24\htdocs\projectname
                        </code></pre>              
                    </li>
                  
                    <li>Open the Project to VSCode
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\projectname>"><code class="language-bash">
                            code .
                        </code></pre>
                     
                    </li>
                    
                    <li>Edit <b>server/server.ts</b> with this code:
                        <pre><code class="language-js">
                            import express from 'express';
                            import cors from 'cors';
                            import routes from "./routes.ts";
                            import dotenv from 'dotenv';

                            dotenv.config();
                            const app = express();

                            app.use(cors());
                            app.use(express.json());

                            const PORT = process.env.PORT || 8080;

                            app.use((req, res, next) => {
                                console.log(`Request received: ${req.method} ${req.url}`);
                                next(); // Passes control to the next middleware or route handler
                            });

                            app.use("/api", routes);

                            app.listen(PORT, () => {
                                console.log(`Server is running on port ${PORT}`);
                            });
                        </code></pre>
                    </li>

                    <li>Inside the <b>server</b> folder, create <b>routes.ts</b> and put this code:
                        <pre><code class="language-js">
                            import express from 'express';

                            const router = express.Router();
                            import sampleControllers from "./controllers/sampleController.ts";

                            router.get("/sample", sampleControllers.get_table);
                            router.post("/sample/res", sampleControllers.insert_data);

                            export default router;
                        </code></pre>
                    </li>
                    <i><b>NOTE:</b> The following steps has a ready-to-use and installed <b>MongoDB</b> database, see documentation <a :href="this.$url+'/React_Database'" target="_blank">here</a></i>                         
              
                    <li>Edit <b>.env MONGO_URI</b>
                        <pre><code class="language-ini">
                            MONGO_URI=mongodb://localhost:27017
                        </code></pre>
                    </li>

                    <li>Go to <b>server</b> folder, create <b>connection.ts</b> and put this code:
                        <pre><code class="language-js">
                            import { MongoClient, ServerApiVersion } from "mongodb";
                            import dotenv from 'dotenv';

                            dotenv.config();
                            const uri = process.env.MONGO_URI || "";
                            const client = new MongoClient(uri, {
                                serverApi: {
                                    version: ServerApiVersion.v1,
                                    strict: true,
                                    deprecationErrors: true,
                                },
                            });

                            try {
                                // Connect the client to the server
                                await client.connect();
                                // Send a ping to confirm a successful connection
                                await client.db("admin").command({ ping: 1 });
                                console.log(
                                "Pinged your deployment. You successfully connected to MongoDB!"
                                );
                            } catch(err) {
                                console.error(err);
                            }

                            let sample_db = client.db("sample_db");

                            export default {sample_db};
                        </code></pre>
                    </li>

                    <li>Inside the <b>server</b> folder, create <b>controllers</b> folder. Inside it, create <b>sampleController.ts</b> and put this code:
                        <pre><code class="language-js">
                            import db from "../connection.ts"

                            const get_table = async (req, res) => {
                                try {
                                    let result = await db.sample_db.collection("user").find().toArray();
                                    res.send(result);
                                } catch (err) {
                                    return res.status(400).json({ error: err.message });
                                }
                            };

                            const insert_data = async (req, res) => {
                                try {
                                    let params = req.body
                                    await db.sample_db.collection("user").insertOne({name:params.name, age:params.age});
                                    res.send('successful');

                                } catch (err) {
                                    return res.status(400).json({ error: err.message });
                                }
                            };

                            export default {get_table, insert_data}; 
                        </code></pre>
                    </li>

                    <li>Add this code to <b>vite.config.ts</b> under <b>plugins</b> to simplify axios url
                        <pre><code class="language-js">
                           server:{
                                proxy:{
                                    '/api':{
                                        target:'http://localhost:8080',
                                        changeOrigin:true
                                    }
                                }
                            }
                        </code></pre>
                    </li>
                    
                    <li>Edit <b>src/components/pages/Home.tsx</b>
                        <pre><code class="language-js">
                            import { useState, useEffect } from 'react';
                            import axios from 'axios';


                            function Home() {
                                let [name, setName] = useState('')
                                let [age, setAge] = useState('')
                                let [content, setContent] = useState([])

                                const mGetTable = () => {
                                    axios.get('api/sample')
                                    .then((res) => {
                                        setContent(res.data)
                                    })
                                }

                                const mInsertData = () => {
                                    let req = {name:name,age:age}
                                    axios.post('api/sample/res',req)
                                    .then(() => {
                                        mGetTable()
                                    })
                                }

                                useEffect(() => {
                                    mGetTable();
                                }, []);

                                return (
                                    //put html code here
                                )
                            }
                            export default Home
                        </code></pre>
                        <pre><code class="language-html">
                            
                                //Home.tsx html code 
                                &lt;div className='grid grid-cols-2 gap-2'&gt;
                                    &lt;div className="w-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"&gt;  
                                        &lt;input type="text" value={name} onChange={(event) =&gt; setName(event.target.value)} className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required /&gt;
                                        &lt;input type="number" value={age} onChange={(event) =&gt; setAge(event.target.value)} className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required /&gt;
                                        &lt;button type='button' onClick={mInsertData} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"&gt;
                                            Insert
                                        &lt;/button&gt;
                                    &lt;/div&gt;
                                    &lt;div className="w-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"&gt;
                                        &lt;table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'&gt;
                                            &lt;thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'&gt;
                                                &lt;tr&gt;
                                                    &lt;th&gt;name&lt;/th&gt;
                                                    &lt;th&gt;age&lt;/th&gt;
                                                &lt;/tr&gt;
                                            &lt;/thead&gt;
                                            &lt;tbody&gt;
                                                {content.map((items,i) =&gt; (
                                                &lt;tr key={i} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'&gt; 
                                                    &lt;td&gt;{items.name}&lt;/td&gt;
                                                    &lt;td&gt;{items.age}&lt;/td&gt;
                                                &lt;/tr&gt;
                                                ))}
                                            
                                            &lt;/tbody&gt;
                                        &lt;/table&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                        </code></pre>
                    </li>
                    
        
                </ul>
            </v-card-text>
        </v-card>
       
      
        <v-card class="mt-5">
            <v-card-title class="blue white--text">DEPLOYMENT</v-card-title>
            <v-card-text>
                <ul>
                    <li>Go back to CMD and deploy the project
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\projectname>"><code class="language-bash">
                            npm run dev
                        </code></pre>
                    </li>
                    <li>Go to the link provided by the command. Try inserting a new data by filling the required textfields and clicking the insert button:
                        <div class="centerimg">
                            <img src="images/reactapi.webp"/>
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
        requirements:[
            {title:'MongoDB database',link:'React_Database'}
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

<style>

</style>
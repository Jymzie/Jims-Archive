<template>
    <div class="ma-4">
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>Database Setup with MongoDB</h1>
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
            <v-card-title class="blue white--text">MAKE DATABASE</v-card-title>
            <v-card-text>
                <ul>
                    <li>After installing the required software/extensions. Open <b>mongoshdb shell</b> and initialize it
                        <pre class="command-line" data-prompt="Please enter a MongoDB connection string (Default: mongodb://localhost/):"><code class="language-bash">
                            mongosh
                        </code></pre>              
                    </li>
                  
                    <li>Use the following command to make a <b>db</b>. If the db name already created, it will use the existing one instead of creating a new one.
                        <pre class="command-line" data-prompt="mongosh>"><code class="language-bash">
                            use sample_db
                        </code></pre>
                     
                    </li>
                    <li>Insert a data from <b>user</b> table. Just like db, it will a make a new one if the table is not yet existing. <b>db.table_name.insertOne()</b>
                        <pre class="command-line" data-prompt="sample_db>"><code class="language-bash">
                            db.user.insertOne({name:"Jim", age:25})
                        </code></pre>
                     
                    </li>
                    
                </ul>
            </v-card-text>
            
        </v-card>
        
        <v-card class="mt-5">
            <v-card-title class="blue white--text">ADD MONGODB</v-card-title>
            <v-card-text>
                <ul>
                    <li>Open CMD and go to Project folder
                        <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                            cd C:\Apache24\htdocs\ProjectName
                        </code></pre>              
                    </li>
                  
                    <li>Install MongoDB and .env dependencies
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm install mongoose dotenv
                        </code></pre>
                     
                    </li>
                    
                </ul>
            </v-card-text>
            
        </v-card>

        
       
      
        <v-card class="mt-5">
            <v-card-title class="blue white--text">SETUP</v-card-title>
            <v-card-text>
                <ul>
                    <li>Create <b>.env</b> to the root folder and put this code:
                        <pre><code class="language-ini">
                            MONGO_URI=mongodb://localhost:27017/sample_db
                        </code></pre>
                    </li>
                    
                    <li>Edit <b>server/server.ts</b> with this code:
                        <pre><code class="language-js">
                            import express from 'express';
                            import cors from 'cors';
                            import mongoose from "mongoose";
                            import dotenv from 'dotenv';
                            
                            dotenv.config();
                            const app = express();

                            app.use(cors());
                            app.use(express.json());

                            const PORT = process.env.PORT || 8080;

                            // Connect to MongoDB
                            const uri: string =
                                process.env.MONGO_URI || 'mongodb://localhost:27017/db_name';

                            let db;
                            (async () => {
                                try {
                                    let conn = await mongoose.connect(uri);
                                    db = conn.connection.db
                                    console.log(uri);
                                } catch(error) {
                                    console.error(error);
                                }
                            })();


                            app.get('/', async (req, res) => {
                                let r = await db.collection("user").find().toArray();;
                                res.send(r);
                            });

                            app.listen(PORT, () => {
                                console.log(`Server is running on port ${PORT}`);
                            });
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
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm run dev
                        </code></pre>
                    </li>
                    <li>Go to the link provided by the command. Click the label <b>Click Here</b> and inspect element to see the get data.
                        <div class="centerimg">
                            <img src="images/reactdatabase.webp"/>
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
            {title:'MongoDB',link:'https://www.mongodb.com/try/download/community'},
            {title:'MongoshDB Shell',link:'https://www.mongodb.com/docs/mongodb-shell/'},
            {title:'MongoDB php extension',link:'https://pecl.php.net/package/mongodb'}
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
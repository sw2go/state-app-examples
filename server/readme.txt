Gewonnene Einsichten:
---------------------
npm           => node package manager ( für node.js packages )
package.json  => definiert was die npm Befehle machen sollen 
npm install   => installiert anhand der "dependencies" in package.json die packages in ./node_modules 
npm start     => führt aus was unter "scripts" bei "prestart", "start", "poststart" definiert ist
                 z.B. tsc && node dist/server.js ( kompiliert *.ts zu *.js und startet dann server.js )
                 Aufpassen: Falls im tsconfig.json "watch": true gesetzt ist, endet tsc nie (da es die *.ts files überwacht)
                 d.h. der 2. Teil ( node dist/server.js ) wird nie ausgeführt
                 
tsc           => kommt mit dem typescript package ( siehe "dependencies" )
tsconfig.json => definiert was tsc beim kompilieren machen soll
                 z.B. Zielordner der *.js Dateien festlegen "outDir": "./dist" 
                 oder "sourceMap": true damit Debugging möglich wird

Console:         node ./dist/server.js
                 -> dann startet Server auf Port 4444

Console:         npm start 
                 -> führt tsc aus ( damit npm tsc kennt muss unter "devDependencies" z.B. "typescript": "2.1.5" definiert sein )
                 -> dann startet Server auf Port 4444
        
VSCode debugging: in VSCode server starten im Debug-Modus ( siehe launch.json )
                  -> dann startet Server auf Port 4444
        

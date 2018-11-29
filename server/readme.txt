Gewonnene Einsichten:
---------------------
npm           => node package manager ( node.js packages )
package.json  => definiert was die npm Befehle machen sollen 
npm install   => installiert anhand der "dependencies" die packages in ./node_modules 
npm start     => führt aus was unter "scripts" bei "start" definiert ist
                 z.B. tsc && node dist/server.js ( kompiliert *.ts zu *.js und startet dann server.js )

tsc           => kommt mit dem typescript package ( siehe "dependencies" )
tsconfig.json => definiert was tsc beim kompilieren machen soll
                 z.B. Zielordner der *.js Dateien festlegen "outDir": "./dist" 
                 oder "sourceMap": true damit Debugging möglich wird




tsc *.ts --watch geht nicht

testen: server starten im Debug-Modus -> dann kommt der Server auf port 4444 hoch
        wenn start mit "npm start" dann geht's nicht ???

        client starten wie man will 


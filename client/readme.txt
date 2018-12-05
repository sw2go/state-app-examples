Um zu Debuggen:
---------------

.\server
VSCode "Debug"

.\client
ng serve
VSCode "Debug"


Erkenntnisse:
-------------

https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f


backend.ts ist ein Angular Service mit Methoden zum Server-Backend
           findTalks, findTalk, rateTalk
           => alle geben Observables zurück

model.ts   definiert die Typen 
           der Backend Entitäten     => Talk, Filters
           den Status                => State
           die Actions               => Watch, Rate, Unrate
           die Instanz des InitState => initState
           UND die Factory zur Erstellung des reducer ( pure function ) 
           diese Funktion ist das Herz der ganzen Businesslogik
           - sie wir genau 1x durchlaufen
           - nur hier wird das Backend aufgerufen und der State verändert
           - und nur mittels Actions

store.ts   ist generisch und definiert den Store Service 
           den Reducer Type und den StoreAndRouterConnector
           - der Store enthält ein privates actions Subject und
           - eine öffentliche sendAction Methode, diese stellt eine neue Action in den JS Event-Loop
           - im constructor wird die Reducer Methode übergeben

           StoreAndRouterConnector ist ein "guard deciding if a route can be deactivated."
           hat den Vorzustand RouterStateSnapshot
           canActivateChild wird immer aufgerufen
           connectToStore wird aufgerufen bei der Initialiserung
	 
State = { 
  talks: { [id: number]: Talk }, 		// Persistent-State  ( vom Backend )
  list: number[],                               // Client-State      ( zufällig vom Backend )
  filters: Filters,                             // Client-State
  watched: { [id: number]: boolean }            // Transient Client State
};

Tipp: talks: ist ein Dictionary von Talk Objekten      
      Das Backend liefert bereits talks ( wird mit reduce erzeugt ) 
      und list ( default Sortierung )



 



           

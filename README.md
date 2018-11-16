# Prosjekt 4 - Dokumentasjon

## Krav til funksjonalitet
Applikasjonen vår møter kravene som er satt i oppgaven og håndterer dermed søk og resultatbehandling. Websiden vi har utviklet har et enkelt oppsett med en ordsky (i form av to lyssverd), et søkefelt og et resultatfelt som dukker opp når klienten mottar data etter et søk. I tillegg finnes det filtre og sorteringsalternativer, som brukeren kan benytte for å sortere hele søkeresultatet. 

Inputfeltet tar inn en streng i søkefeltet, som på sin side bruker dette til API-kallet til backend. Videre har brukeren valget mellom å søke på ulike endepunkter (dvs. “planets”, “films”, osv.) for å finne forskjellige resultattyper, samt muligheten til å sortere resultatene basert på valg som vedkommende tar. Når brukeren har søkt og mottatt data, vil dette bli listet opp i et felt under søkefeltet. Resultatene dukker opp i puljer ettersom brukeren scroller nedover i feltet. Om ingen resultater kan vises, vil en feilmelding dukke opp. Brukeren kan også velge å trykke på et resultatnavn for å ekspandere objektet og se en listebasert representasjon av ulike attributter som hører til. Ordskyen benytter seg av søkehistorikk som brukeren tidligere har fått lagret på serveren og oppdaterer seg dynamisk.

Vi har benyttet en felles backend med gruppe 6 og 35. I hovedsak har én person fra hver gruppe jobbet med serveren, men vi har likevel valgt å innfri det valgfrie kravet også. API’et er implementert i node med PostgreSQL og Sequelizer for å sette opp databasen.

## Krav til teknologi

### React
I likhet med tidligere prosjekter, har vi benyttet React for å bygge opp applikasjonen. Vi har benyttet god og konsekvent komponentstruktur, herunder Ducks-stilen fra Redux-anbefalinger [fra Redux docs](https://redux.js.org/faq/codestructure), samt gjort god bruk av tidligere lærdom fra de andre prosjektene. Forutsatt at du har node eller yarn installert, settes opp vårt react-prosjekt ved å navigere prosjektmappen med package.json, skrive ‘npm/yarn install’ og ‘npm/yarn start’. Øvrige scripts finnes også i package.json.

### Redux
I dette prosjektet har vi benyttet Redux for å lagre og oppdatere states til ulike komponenter som har behov for å benytte seg av dem. Dette fungerer utmerket med React, men kan brukes i andre sammenhenger også. Hensikten med Redux er å kunne håndtere svært mange states som fungerer på ulike måter og behandles forskjellig, ha “single point of truth” og kunne bruke data på tvers av treet. Med vanlig React, har ikke dette vært enkelt når kompleksiteten av state-håndteringen stadig blir større. Redux fjerner states fra komponentene og setter dem i et eget state-tre. Egne reducers håndterer selve endringen av states, så det ansvaret forsvinner fra komponentene slik det har vært i tidligere prosjekter. For testformål, kan det være en god idé å installere Redux Developer Tools i en nettleser som støtter dette.

Vi har implementert Redux i de tilfellene hvor state(s) ikke er innkapslet av en eneste komponent. Om en state skal benyttes som noe mer enn kun en visuell faktor, er det naturlig å bruke Redux hensiktsmessig. Et av de mest profilerte eksemplene hvor Redux viste seg å være spesielt kraftig var vår API-kall implementasjon. Her benyttet vi oss av en egen action som dispatchet til en reducer som håndterte data, errors og loading status. I tillegg brukte vi mellomvaren Redux Thunk (https://github.com/reduxjs/redux-thunk) for å kunne benytte oss av asynkrone funksjoner i Redux. Koden under illustrerer den aktuelle funksjonen:

```javascript
// Fetches data from API
export const fetchSearchData = fetchUrl => (dispatch) => {
  // Updates loading state and informs reducer which url is being fetched
  dispatch(updateSearchContentLoadingState(true, fetchUrl));

  fetch(fetchUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return false;
    }, (error) => { // Pushes error
      dispatch(updateSearchContentErrorState(error.message));
      dispatch(updateSearchContentLoadingState(false, fetchUrl));
    })
    .then((data) => {
      if (data !== undefined) { // Prevents JSON data to be updated if data does not exist
        dispatch(updateSearchContentSet(data));
      }
    });
};
```

Redux er også benyttet for å håndtere staten til ordskyen, da søkehistorikk blir hentet ut fra serveren hver gang et søk blir gjort. Ordskyen får da oppdatert sine ord, og dermed vil innholdet i lyssablene endre seg. Denne Redux-funksjonaliteten benytter seg av samme reducer som fetching av datainnhold, fordi disse søkene hører godt sammen og samme komponent for søk benytter begge funksjonene (actions).

### Backend
Vår backend har blitt utviklet i samarbeid med gruppe 6 og 35. Vi har basert innholdet til databasen på SWAPI, som er et Star Wars API med innhold fra universet. Datamodellene har dog blitt endret for å passe våre behov. I stedet for å få returnert lenker for felter på relasjonelle objekter, mottar klienten egne objekter i disse feltene. Dette gir en bedre brukeropplevelse, da brukeren slipper å navigere seg gjennom lenker for å finne frem.

I tillegg har backenden implementert søkehistorikk. Hver gang en bruker gjennomfører et suksessfullt søk, vil dette lagres persistent i databasen. Valget falt på dette fremfor Mobx som var et annet alternativ, da et gruppemedlem hadde tidligere erfaring med Redux. Slik kan en applikasjon benytte tidligere søk for display eller liknende. I vårt tilfelle, ble dette brukt til en slags ordsky i form av lasersverd. Backenden har implementert muligheter for søk på ulike objekter i alle modeller og med begrensning på returnerte objekter. I tillegg har applikasjonene mulighet til å sortere resultatet backend. Dette kan gjøres på alle attributter i enten stigende eller synkende rekkefølge.

### Utforming
Under dette prosjektet, såvel som i de tidligere prosjektene, har vi passet på å utvikle applikasjonen responsivt slik at den fungerer godt på alle skjermer. Tekst skalerer etter størrelse og knapper for filtre er plassert i egne flex containere som dynamisk endrer innhold i hver kolonne. Dette er viktig for at skjermer for både desktop, laptop og mobil skal kunne benytte seg av applikasjonen.

Dessuten er utformingen så enkel som mulig, slik at det skal være tydelig for en bruker å skille komponentene fra hverandre. Søkefeltet er lett å bruke og informasjonen rundt funksjonaliteten er så tydelig som mulig. Av brukerhensyn valgte vi å ikke overkomplisere designet på komponentene, til tross for at ordskyen er en kul liten feature.

![Image 1](https://imgur.com/ugIYSO2.jpg "Image 1")
_Opprinnelig skjerm uten søk_
![Image 2](https://imgur.com/AovFvrJ.jpg "Image 2")
_Søk på "Skywalker" med et "people"-filter, sammen med ordskyen_
![Image 3](https://imgur.com/8M5IUUK.jpg "Image 3")
_Resultatet av søket over_
![Image 4](https://imgur.com/QDtClPi.jpg "Image 4")
_Et utvidet objekt fra søkeresultat_

### Utvikling
Vi har gått fra Github til Gitlab i dette prosjektet, som har gitt oss et par endringer i vår utviklingsflyt. I det store og det hele fungerer de systemene ganske likt. Issueboardet, som flytter issues mellom ulike statuskategorier, ble satt opp for oss automatisk, så dette slapp vi eksplisitt lage selv. Boardet ga oss innsikt i hvordan strukturere tiden vår og se vår progresjon over tid. Det viktigste for oss var å ha god Gitstruktur med commits som markerte hvilke issues den hørte til. Alle commits, utenom enkelte merges og kodeopprydning, ble markert slik at andre utviklere enkelt kunne forstå hva prinsippet ved det var. Dette ble koblet opp mot issueboardet, slik at funksjonalitet som var markert som ferdig ble oppdatert automatisk.

I tillegg utviklet vi med god dokumentasjon og komponentinndeling i bakhodet. Dette er viktig for at alle skal kunne finne frem til aktuelle filer og komponenter under utviklingen. Kodeforståelse er viktig, da komponenter i React gjerne gjenbrukes. Filene er derfor gjennomgående kommentert og dokumentert, samt utviklet med hensyn til best practices. I tillegg har vi i dette prosjektet benyttet linting, som kan leses om under seksjonen om testing.

## Testing

### Continuous Integration (CI)
Continuous Integration har vært en stor del av vår utviklingsprosess. Dette har blitt benyttet for å gjennomgående teste commits og merge request for integrasjons- og end-to-end feil. Dette gjør at vi kan oppdage mangler og kodefeil ved build, slik at dette kan rettes opp uten at andre gruppemedlemmer trenger å oppdage disse feilene på egen hånd. Til tross for at å sende commits gjennom en teste-pipeline ikke avdekker absolutt alle feil, hjelper det på lang vei å finne ut av grunnleggende tests og linting (les mer om dette nedenfor).

Selve definisjonen på hvordan Gitlab gjennomgår en slik pipeline, finnes i vår .gitlab-ci.yml-fil. Den gjennomgår ulike egendefinerte stages (build, test, lint) som gjennomfører en rekke jobber. Disse jobbene kjører gjennom en rekke scripts som er definert i prosjektet. Disse jobbene sjekker f.eks. hvordan prosjektet bygger, om den linter skikkelig og om testene passerer. I tillegg definerer .yml-filen caches, for å passe på at pipelines kan gjennomføres så effektivt som mulig.

### Jest
Jest ble som i forrige prosjekt benyttet for enhetstesting, men denne gangen benyttet vi også dependencies fra Enzyme. Dette brukte vi for å passe på at komponentene fungerer som de skal og sikre funksjonalitet som er konsekvent gjennom bruken av applikasjonen. Vi testet en god del ulike funksjoner, blant annet slike som angår fetches, states og mer. Å sette opp og kjøre slike tester var relativt enkelt, da nødvendige dependenciene var enzyme, enzyme-adapter-react-16 og enzyme-to-json. Testene ble lagt under en egen mappe med .test.js filending. Som forklart i seksjonen om CI ble disse kjørt i pipeline, men for å kjøre testene selv kan man gjøre ‘npm test’. Under ligger et eksempel på en test som sjekker opp resultat fra en fetch i store:

```javascript
const store = mockStore({});
    it('should create an action to add a search result', () => {
        const result = {};
        const expectedAction = {
            type: 'FETCHED_RESULTS_RECEIVED',
            payload: result,
        };
        expect(actions.updateSearchContentSet(result)).toEqual(expectedAction);
    });
```

Enhetstestene var en del av vår hensikt å holde høy kodekvalitet på komponentene våre og for å hindre uønskede feil under bruk av applikasjonen. Om backend endret seg ved å for eksempel omstrukturere returnerte objekter, kunne testene våre oppdage feil som kunne forekomme. Derfor har vi laget så mange og så varierte tester som mulig for å dekke koden i høy grad. Resultatene som slik testing gir oss, kunne i stor grad forbedre komponentene våre.

### Cypress
For å teste grafiske frontend-elementer (integrasjonstesting), bestemte vi oss for å bruke Cypress. Dette rammeverket kan benyttes til å teste alle typer elementer i nettlesere og fungerte derfor godt til testing av elementer og integrasjon i vårt CI-system. Cypress har enkle funksjoner for å fetche innhold fra ulike endepunkter og sammenlikne det returnerte innholdet opp mot tekst i et annet element. Her er to eksempler:

```javascript
it('Sets a filter and searches for characters with the name "Skywalker", then checks if the document body contains the desired results.', function() {
    cy.get('.checkboxes > .check_label:nth-child(3)')
    .click()
cy.get('.search_bar')
    .clear()
    .type('Skywalker{enter}')
cy.get('.result_set')
    cy.contains('Luke Skywalker')
    cy.contains('Anakin Skywalker')
    cy.contains('Shmi Skywalker')
it('Checks directly from the API if the same search yields the same response.', function() {
    cy.request('http://it2810-06.idi.ntnu.no/api/api/people/?search=Skywalker')
    .then((response) => {
        expect(response.body).to.have.property('count', 3)
        expect(response.body.results[0]).to.have.property('name', 'Luke Skywalker')
        expect(response.body.results[1]).to.have.property('name', 'Anakin Skywalker')
        expect(response.body.results[2]).to.have.property('name', 'Shmi Skywalker')
    })  
})
}
```

For å gjennomgå alle integrasjonstestene våre, kan man gjøre ‘npm run e2e’.

### Linting (ESLint)
I dette prosjektet bestemte vi oss for å passe på at vår kodekvalitet var høyest mulig ved hjelp av eksterne rammeverk. Med dette benyttet vi ESLint, som er en egen standard for å kvalitetssikre JavaScript og JSX-kode. I tillegg brukte vi Airbnb sitt regelsett for ESLint som passer veldig bra med React. Ved å kontinuerlig sjekke etter kodefeil og formatteringsproblemer, sørget vi for at alle på gruppa committet tilnærmet lik kode. Dermed kunne vi følge samme standarder om best practice og få kodekvalitet på høyest mulig plan. Sjekk for linting kan gjøres med ‘npm run lint’, i tillegg til at enkelte lintingproblemer kan fikses automatisk med ‘npm run lint:fix’.
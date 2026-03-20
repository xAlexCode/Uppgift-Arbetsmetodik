# Anteckningar/tankar kring uppgifterna
Här skriver jag lite om problemen som felsökts och tankar hur jag tänkte som är värda att lägga på minnet eller som anteckning till framtiden.

## Få projektet att funka
I CreateHTML.js --> podCast loopen från API.

När man loopar igenom listan av program med forEach får man automatiskt tillgång till det aktuella objektet i parametern podcast. Det innebär att man inte behöver slå upp objektet igen via podCasts.programs[i] och därav bara kalla på podcast istället. ex  imgPlacement.setAttribute('src', podcast.socialimage); - kallar på bilden från apin. Det var det som orsakade felet i koden att podCasts.programs[i] blev undefined på sista varvet i loopen, vilket gjorde att socialimage inte kunde läsas.

## CSS till Sass
Installerade som vanligt och passade på att skriva en guide när jag ändå höll på.

## Enhetlig namngivning i CSS/SASS
Ordnade upp class namnen i js och css, samt nästlade. Lite svårt att komma på bra namn när man inte är insatt i projektet och får gissa lite.

## Konvertera till typescript
Installerade typescript i ett existerade projekt, vilket var lite klurigare än i ett helt nytt. Fortfarande osäker på konverteringar till typescript men hittade någon lösning för det typescript klagade på. 

## Enhetlig kodkvalitet
Installerade biome istället för Eslint och prettier, ville testa det denna gången. Det var lite smidigare än Eslint då man bara behövde göra en installation eftersom den har prettier inbakat. Samt att det är mer fokus på att ta bort regler än lägga till så det var smidigare. Använde samma konfiguering som förra grupprojektet och det funkar bra. 

## Mobilvyn 
Felstavning i meta-taggen, som gjorde att webbsidan skalade fel. Visar hur enkelt en felstavning kan strula med koden och inte göra som man vill.

## Språk
Byta från "en" till "sv", för att uppläsningen ska bli korrekt på svenska.
```html
<html lang="sv">
```
## Rensa loggnign
Rensa bort console.log ur koden. Men behöll consol.error i api.ts eftersom den används vid felhantering och påverkar inte användaren.

## Dokumentation
Skrev en kort beskrivning av vad projektet gör, la in en skärmdump, beskrev vilka tekniker som använts och gjorde en kort kom igång guide om andra utvecklare vill ändra i projektet. 

## Tillgänglighet (bilder)
I projektet skapas alla bilder i createHtml.ts, så de finns inte direkt i HTML‑filen. För att göra projektet mer tillgängligt behövde jag lägga till ett alt‑attribut i funktionen createImg(). Jag använder podcast.name i alt‑texten så att varje bild får en beskrivning som passar just det programmet. Det blev en generell alt‑text som funkar bra för alla poddbilder.
Jag behövde också ändra document.createElement("IMG") till små bokstäver ("img"), annars trodde TypeScript att det var ett vanligt HTMLElement och då gick det inte att använda .alt.
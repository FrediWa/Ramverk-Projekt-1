# Projekt 1 i Ramverk kursen
Preliminär projekt beskrivning, flera punkter kommer sannolikt att ändras.

## Hur vi arbetar
Vi försöker fördela arbetet så klart och tydligt som möjligt så kan vi alla jobba på samma branch. Detta betyder att om man vill göra ändringar till kompisens fil måste man fråga först så blir det inga problem med att merge filer.<br>
<br>
Så det är bara att koda på så länge man inte rör kaverins filer. För att sedan lätt kunna debugga om något far helt åt fittan önskar jag att alla skulle (relativt) oftan pusha till remoten med klara commit meddelanden.

## Hur du arbetar
Kort sagt så går det till så här:<br>
1. Du klonar repositoryn m.h.a **git clone https://github.com/FrediWa/ramverkProj1.git**
2. Du skriver kod
3. "Stage" din kod med **git add .** (punkten står för alla filer)
4. "Commit" dina ändringar till en local repository med **git commit -m "text här"**
5. Skriv ett kort deskriptivt meddelande istället för "text här" med din commit. Skriv gärna på engelska mellan 5-12 ord. Gör inget om den blir längre än så men försök hålla den kort. Visserligen kan den också vara kortare än 5 ord ifall du får sagt allt du vill.
6. Dra först ner alla ändringar med **git pull**. Om allting går som det ska borde man inte stöta emot några problem.
7. Efter att du har dragit ner senaste ändringarna kan du skuffa upp koden till remote repositoryn med **git push**. Det kan hända att konsolen klagar på dej första gången du gör det här. I så fall skriver du **git push --set-upstream origin master**. Efter att du gjort det borde de i fortsättningen räcka med bara **git push**.
8. Repetera från steg 2.

Det här kan kännas som en massa steg men när man kommer igång med det så är det faktiskt inte så illa. Du gör det här inte heller varje gång du skriver ett tecken. Du kan committa genast när du har någon "helhet" klar som du kan beskriva som t.ex. "Added a customers list Vue" eller "Fixed bugs affecting map on contact page".<br>
<br>
Om man tycker att man tappar bort sig med terminalen, kan man använda sig av GitKraken. Det är gratis att använda om man är registrerad som studerande på Github.<br>
<br>
Med GitKraken gör du stegen 3-7 i princip med 5 musklick istället för en massa skrivande. Commit meddelande måste dock skrivas manuellt in.
### Arbetsfördelning
- Fredrik Wasström – Projektledare, projektstruktur/arkitektur/UI, summary sida och presentation
- Jonas Pihlaja – Hjälp sidan & Tankekarta
- Dilan Zibari – Transport sidan & Beskrivning av arbetsprocessen
- Atte Marjamäki – Framsidan & Specifikationen
- Niklas Krogerus – Mat & Turistmål sidorna & Mötes agendor och protokoll
- Niklas Pihl – 
<br>
Bytande arbetsuppgifter sinsemellan är ok. Meddela dock vem som gjort vad så att jag kan lättare skriva en rapport. Det går nog att se från repon vem som har committa vad men det är jobbigt att söka igenom allting.

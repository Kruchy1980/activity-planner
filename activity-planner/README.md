# activity-planner

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Activity Planner small description
The activity planner created for the wsb diploma defend - no outside data bases just web stores used.

Jest to planner aktywności własnych nie oparty na żadnej bazie danych i z okrojonym zdefiniowanymi rodzajami aktywności.

**Technologies used in this project:**
1. HTML5
2. Vue.js / vue-cli
3. SCSS
4. Java script
5. Bulma framework
6. eslint - package - for code correction checking,
7. moment - package - for data format

**Technologie użyte w tym projekcie:**
1. HTML5
2. Vue.js / vue-cli
3. SCSS
4. Java script
5. Bulma framework
6. eslint - package - do sprawdzania poprawności kodu,
7. moment - package - do formatu daty w dodawanych aktywnościach

**Usabililty**
This application can be used for adding our own activities and spying their progress which we can set manually.
The activity planner is used for our own to add movies or books (for now) we are reading/watching or which we would like to read /watch.
W can add, edit, delete, the singular activity as same as filtering them to have better view on them.

**Użycie**
Tę aplikację możemy używać jako swoją to-do listę z planowanymi lub rozpoczętymi aktywnościami, które możemy edytować (włącznie z manualną zmianą ich postępu), dodawać lub kasować w miarę ukończenia lub kiedykolwiek chcemy.
Ta aplikacja w obecnej wersji ma tylko dwie zdefiniowane aktywności a mianowicie książki i filmy, ale istnieje również możliwość ich rozwoju.
Możemy również filtrować dodane przez nas aktywności w zależności od ich postępu.

**Restrictions**
The application does not have connection to the outside dats base yet so the activities are only recorded to the web browser storages that we could not loose theirs progresses. In the future I am planning to expand the application for more defined classes as well as for data base to get the registered user could use the application freely.

**Ograniczenia**
Jest to aplikacja przeznaczona w chwili obecnej do użytku jednoosobowego, nie posiada połączenia z zewnętrzną bazą danych w związku z czym nie ma kont użytkownika, jednak dane (aktywności) zapisywane są w local Storage przeglądarki co prowadzi do tego, że dany użytkownik nie straci swoich aktywności po wyłączeniu komputera jednak straci je kasując dany storage.


**Big Plans**
In the future i'd like to add more defined activities as well as possibility to register users to the data Bases so on one computer could be more accounts than one with deicated activities.

**Wielkie plany**
W przyszłości aplikacja ta będzie korzystała z zewnętrznych baz danych jak i również będzie miała dodane większą liczbę zdefiniowanych aktywności.

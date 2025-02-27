# React router
A React keretrendszer segítségével SPA (*Single-page application*)-t hozunk létre.

Az egyoldalas alkalmazás olyan webalkalmazás vagy webhely, amely a teljes új oldalak betöltésének alapértelmezett módja helyett dinamikusan átírja az aktuális weboldalt a webszervertől származó új adatokkal, és interakcióba lép a felhasználóval. A cél a gyorsabb átmenetek, amelyek révén a webhely natív alkalmazásnak tűnik.

SPA-ban soha nem történik oldalfrissítés, ehelyett az összes szükséges `HTML`- , `JavaScript`- és `CSS`- kódot vagy lekéri a böngésző egyetlen oldalbetöltéssel, vagy a megfelelő erőforrásokat dinamikusan betölti és szükség szerint hozzáadja az oldalhoz, általában a felhasználói műveletek hatására. 

## React vs MVC
Az **MVC**-ben a Controller szerepe a bejövő kérések kezelése, az adatok továbbítása a modell és a nézet között. A `React Router` nem felel meg teljesen ezeknek az elvárásoknak, hiszen az adatok frissítése a komponenseken belül, általában felhasználói interakció hatására történik. Bár pl.: a `useEffect` segítségével automatizálható az adatfrissítés, ennek ellenére a `Router` csak útválasztónak tekinthető, így a **React** keretrendszert nem tekinthetjük teljesen **MVC** alapúnak.

# A `react-router-dom` főbb komponensei

## `<BrowserRouter>`
Az alkalmazás fő router komponense.
Gondoskodik arról, hogy a React alkalmazás URL-alapú navigációja működjön.
A HTML5 History API-t (*pushState, replaceState*) használja a kliensoldali navigációhoz.
> [!IMPORTANT] 
> Az alkalmazásban csak egyetlen `BrowserRouter` lehet.

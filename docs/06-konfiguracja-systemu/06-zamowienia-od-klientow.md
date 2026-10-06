---
title: "Zamówienia od klientów"
sidebar_label: "6.6. Zamówienia od klientów"
---

W tym module znajduje się lista wszystkich zamówień od klientów, które w systemie ERP zostały oznaczone odpowiednią flagą.

**Lista zamówień od klienta zawiera takie dane jak:**
-	Numer ZK,
-	Kontrahent,
-	Data modyfikacji,
-	Data utworzenia,
-	Termin realizacji,
-	Numery zleceń produkcyjnych,
-	Numery planów produkcyjnych,
-	Status,
-	Akcje:
	-	Szczegóły dokumentu.

**Możliwe jest filtrowanie wg:**
-	Numer ZK,
-	Status:
	-	Wszystkie,
	-	Nowe,
	-	W trakcie planowania,
	-	W trakcie produkcji,
	-	Produkcja zakończona,
	-	Anulowane,
	-	W przygotowaniu,
-	Produkt,
-	Kontrahent,
-	Data złożenia zamówienia,
-	Termin realizacji,
-	Numer zlecenia produkcyjnego.

**Lista zamówień od klienta**

![Lista zamówień od klienta](/img/Obrazy/ZK_lista.png)

**W szczegółach Zamówienia od klientów, widoczne są następujące dane:**
-	Lista produktów:
	-	Symbol,
	-	Nazwa,
	-	Ilość,
	-	Ilość dostępna,
	-	Ilość do produkcji,
	-	Przekazano,
	-	Wymiar,
	-	Status,
	-	Numery planów,
	-	Numery zleceń,
	-	Typ zlecenia,
	-	Receptura produkcji,
-	Podstawowe informacje:
	-	Kontrahent,
	-	Status,
	-	Data utworzenia,
	-	Planowany termin rozpoczęcia realizacji,
	-	Termin realizacji,
	-	Tytuł,
	-	Podtytuł,
	-	Uwagi do dokumentu.

**Szczegóły zamówienia od klienta**

![Szczegóły zamówienia od klienta](/img/Obrazy/ZK_szczegoly.png)

### Proces tworzenia zlecenia produkcyjnego na podstawie ZK

Produkcja dla klienta rozpoczyna się od wprowadzenia do systemu ERP zamówienia od klienta (ZK). 
Zostanie ono pobrane do aplikacji Asiston po oznaczeniu takiego zamówienia odpowiednią flagą. 
Oznaczone ZK trafia do modułu Zamówienia od klienta.

**Widok dostępnej opcji utworzenia zlecenia, przekazania do planu i wykluczenia z produkcji**

![Widok dostępnej opcji utworzenia zlecenia, przekazania do planu i wykluczenia z produkcji](/img/Obrazy/ZK_tworzenie_ZP.png)

Po przejściu do szczegółów, widoczne będą produkty zamówione przez klienta oraz ilości, a także informacja jaki jest obecny stan tych produktów na magazynie. 
Kierownik podejmie decyzję i zatwierdzi, na które produkty i w jakich ilościach zostanie utworzone zlecenie produkcyjne. 
Zatwierdzając towary do produkcji należy określić ich ilość i wskazać recepturę.

Towary możemy przekazać do produkcji klikając „Utwórz Zlecenie” lub przekazać do planu produkcyjnego klikając „Przekaż do planu”. 
Wówczas w szczegółach zamówienia od klienta widnieć będzie numer zlecenia produkcyjnego i zamówienie zmieni status na przyjęte do realizacji.

Użytkownik ma również możliwość wykluczenia zamówienia z produkcji klikając przycisk „Nie podlega produkcji”.

## Opis procesu Zamówienia od klienta

**Zamówienia od klientów**

![Zamówienia od klientów](/img/Obrazy/ZK.png)

Proces rozpoczyna się od utworzenia w systemie ERP dokumentu zamówienia od klienta (ZK). 
Następnie zamówienie jest automatycznie przesyłane do systemu Asiston Produkcja, gdzie w module Zamówienia od klientów tworzony jest dokument ZK.
Pracownik obsługujący ten moduł przechodzi do szczegółów zamówienia, gdzie podejmuje decyzję o dalszym procesie dla każdej pozycji zlecenia. 
Może zaznaczyć jednocześnie wiele pozycji i przypisać im tę samą ścieżkę lub przypisywać różne ścieżki poszczególnym produktom. 
**Ma do wyboru trzy opcje:**
-	Produkt nie podlega produkcji
	-	produkt pozostaje w zamówieniu bez przekazywania do produkcji oraz zostaje oznaczony statusem „Nie podlega produkcji”
-	Utworzenie zlecenia – przed przekazaniem zlecenia do produkcji konieczne jest określenie ilości do wyprodukowania oraz określenie receptury produkcji dla pozycji. System pozwala na określenie domyślnej receptury dla poszczególnych produktów. Jeśli produkt nie ma utworzonej receptury użytkownik musi ja dodać przez utworzeniem zlecenia.   Recepturę produkcji należy dodać z poziomu modułu Receptury produkcji. 
	-	System zmienia status pozycji na ZK na „Przekazane do produkcji”
	-	System automatycznie tworzy zlecenie w widoku „Zlecenia produkcji” ze statusem „Wersja robocza”.
-	Przekazanie do planu produkcji - przed przekazaniem zlecenia do planu konieczne jest określenie ilości do wyprodukowania oraz określenie receptury produkcji dla pozycji. System pozwala na określenie domyślnej receptury dla poszczególnych produktów. Jeśli produkt nie ma utworzonej receptury użytkownik musi ja dodać przez przekazaniem zlecenia do planu.   Recepturę produkcji należy dodać z poziomu modułu Receptury produkcji. 
	-	System wymusza na użytkowniku wskazanie planu produkcji do którego ma zostać dodane zlecenie. Użytkownik może wskazać plan z listy zawierającej plany produkcji ze statusem „w przygotowaniu”
	-	System zmienia status pozycji na ZK na „Przekazane do produkcji”
	-	System automatycznie przypisuje zlecenie do wybranego planu produkcyjnego  
	
Automatycznie tworzone jest zlecenie w widoku „Zlecenia produkcji” ze statusem „Wersja robocza”.


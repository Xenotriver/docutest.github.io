---
title: "Plany produkcji"
sidebar_label: "6.3. Plany produkcji"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

W module „Plan produkcji” widzimy listę dodanych planów oraz przycisk do dodawania nowego planu. 
Moduł ten służy organizacji produkcji poprzez układanie planów według daty realizacji.

**Lista zawiera kolumny:**
	-	Numer planu,
	-	Status,
	-	Data utworzenia,
	-	Postęp realizacji,
	-	Data utworzenia,
	-	Akcje:
		-	Edytuj,
		-	Usuń.

**Listę możemy filtrować po:**
	-	Numer planu,
	-	Status,
	-	Data utworzenia,
	-	Data rozpoczęcia realizacji,
	-	Data zakończenia realizacji.

**Lista planów produkcyjnych**

![Lista planów produkcyjnych](/img/Obrazy/Plany_produkcji_lista.png)

### Dodawanie nowego planu

Tworząc nowy plan podajemy jego nazwę, planowaną datę realizacji i potwierdzamy przyciskiem „Utwórz nowy plan”.

**Dodawanie nowego planu produkcyjnego**

![Dodawanie nowego planu produkcyjnego](/img/Obrazy/Plany_produkcji_dodawanie.png)

**Po utworzeniu planu widzimy jego szczegóły z podziałem na sekcje:**
	-	Dodawanie produktu,
	-	Lista dodanych produktów,
	-	Podstawowe informacje o planie.

**Szczegóły planu produkcyjnego**

![Szczegóły planu produkcyjnego](/img/Obrazy/Plany_produkcji_szczegoly.png)

**Dodając produkt do planu uzupełniamy poniższe pola i zatwierdzamy przyciskiem dodaj:**
	-	Wybierz produkt,
	-	Wybierz recepturę,
	-	Ilość towaru.

**Lista dodanych towarów do planu składa się z kolumn:**
	-	Symbol,
	-	Nazwa,
	-	Ilość,
	-	JM,
	-	Receptura produkcji,
	-	Numer zlecenia,
	-	Typ zlecenia,
	-	Status,
	-	Akcje:
		-	Powiązane ZK – informacje czy produkt został dodany poprzez formularz czy z zamówienia od klienta,
		-	Weź półprodukty – możliwość stworzenia ZP na półprodukty,
		-	Edytuj,
		-	Usuń,
		-	Rozwiń szczegóły – w szczegółach widzimy czy do danego towaru zostało dodane ZP na półprodukty.

**W podstawowych informacjach widzimy informacje:**
	-	Status,
	-	Data utworzenia,
	-	Planowana data rozpoczęcia realizacji,
	-	Planowana data zakończenia realizacji.

<ZapiszZmiany />

Z widoku szczegółów planu możemy przełączyć do widoku „Składniki do produkcji” gdzie widzimy listę z produktami końcowym i surowcami z całego planu produkcyjnego.

**Widok "Składniki do produkcji"**

![Widok "Składniki do produkcji"](/img/Obrazy/Plany_produkcji_skladniki.png)

### Automatyczne generowanie ZP na półprodukty

Funkcjonalność ta automatyzuje proces planowania produkcji dla wyrobów złożonych (wielopoziomowych). 
System samodzielnie identyfikuje konieczność wyprodukowania półproduktów niezbędnych do wytworzenia wyrobu gotowego zawartego w planie, co eliminuje ryzyko pominięcia kluczowych składników i przyspiesza tworzenie pełnego harmonogramu prac.

Jeżeli ustawienie „Automatycznie generuj ZP na półprodukty” w konfiguracji jest włączone oraz w recepturze wskazanej na zleceniu produkcyjnym zawartej w danym planie występują półprodukty posiadające własne receptury, system automatycznie utworzy zlecenia produkcyjne na te półprodukty. 
Nowo utworzone zlecenia na półprodukty otrzymują status „Wersja robocza” i są widoczne na liście zleceń w ramach danego planu.

### Blokada produkcji produktu finalnego do czasu wyprodukowania półproduktu

Funkcjonalność zarządza kolejnością wykonywania zleceń w przypadku produktów złożonych. 
Jeżeli ustawienie „Blokuj produkcję produktu finalnego do czasu wyprodukowania półproduktu” w konfiguracji jest włączone, system automatycznie wstrzymuje zlecenie na wyrób gotowy do momentu, aż powiązane z nim zlecenia na półprodukty zostaną zakończone, a towar trafi na magazyn produkcji w toku.

**Po dodaniu do planu produktu nadrzędnego oraz powiązanego z nim półproduktu i przekazaniu planu do realizacji, system generuje zlecenia produkcyjne:**
	-	na półprodukt, ze statusem „Oczekuje na realizację”,
	-	na produkt nadrzędny, ze statusem „Oczekuje na półprodukt”, blokując możliwość jego realizacji.

W momencie zmiany statusu podrzędnego ZP (na półprodukt) na „Zakończone”, system automatycznie zmienia status nadrzędnego ZP na „Oczekuje na realizację”, umożliwiając jego podjęcie przez operatora. 
Wyprodukowany półprodukt pozostaje na magazynie produkcji w toku i z tego samego magazynu jest automatycznie pobierany jako składnik do zlecenia nadrzędnego.

Nie jest możliwe bezpośrednie anulowanie zlecenia, które jest składnikiem innego aktywnego zlecenia.
Użytkownik może anulować wyłącznie zlecenie główne. 
W takim przypadku system wyświetli komunikat informujący, że anulowane ZP jest zleceniem nadrzędnym dla konkretnych zleceń składowych.

**Po potwierdzeniu operacji:**
	-	Zlecenie nadrzędne zostaje anulowane.
	-	Powiązane zlecenia podrzędne zostają odłączone od relacji i zmienione na zlecenia niezależne. Od tego momentu możliwe jest ich samodzielne anulowanie lub realizacja.
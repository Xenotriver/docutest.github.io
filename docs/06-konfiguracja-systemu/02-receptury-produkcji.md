---
title: "Receptury produkcji"
sidebar_label: "6.2. Receptury produkcji"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Receptura produkcji określa sposób wykonania produktu. Jest wykazem materiałów, surowców, półproduktów, a także przepisem na wykonanie określonego produktu.

**Na liście receptur wyświetlane są takie dane jak:**
-	Nazwa receptury,
-	Produkt finalny,
-	Ilość ref.,
-	Jednostka miary,
-	Data obowiązywania,
-	Wersja receptury,
-	Domyślna,
-	Status,
-	Akcje:
	-	Edytuj,
	-	Kopiuj,
	-	Archiwizuj.

**Możliwe jest również filtrowanie i wyszukanie receptur po:**
-	Nazwa,
-	Produkt,
-	Status,
-	Data obowiązywania,
-	Wersja receptury,
-	Domyślna.

**Lista receptur produkcyjnych**

![Lista receptur produkcyjnych](/img/Obrazy/Receptury_produkcji.png)

Nową recepturę będzie można dodać do listy przyciskiem „Dodaj recepturę”.

**Użycie przycisku zwróci formularz do uzupełnienia, zawierający informacje takie jak:**
-	Nazwa receptury produkcji,
-	Data obowiązywania receptury (od kiedy),
-	Data obowiązywania receptury (do kiedy),
-	Uwagi dla receptury.

**Dodawanie nowej receptury produkcji**

![Dodawanie nowej receptury produkcji](/img/Obrazy/Receptury_produkcji_dodawanie.png)

<ZapiszZmiany />

Po zapisaniu nowej receptury przechodzimy do jej szczegółów.

**Szczegóły receptury podzielone są na sekcje:**
-	Dane podstawowe,
-	Operacje,
-	BOM,
-	Koszty dodatkowe,
-	Odpady i zwroty,
-	Kalkulacje,
-	Załączniki.

### Dane podstawowe

**Dane podstawowe zawierają takie informacje jak:**
-	Nazwa receptury produkcji,
-	Produkt finalny,
-	Oznaczenie receptury jako domyślnej,
-	Data obowiązywania od,
-	Data obowiązywania do,
-	Uwagi,
-	Przełącznik obiegu uproszczonego:
	-	Włączony – system będzie tworzył dokumenty rozliczenia tylko dla surowców i produktu finalnego,
	-	Wyłączony – system będzie tworzył dokumenty rozliczenia dla surowców, półproduktów i produktu finalnego.
-	Wersje:
	-	Receptura domyślna,
	-	Receptura zatwierdzona,
	-	Wersje dokumentu.

**Szczegóły receptury produkcji - dane podstawowe**

![Szczegóły receptury produkcji - dane podstawowe](/img/Obrazy/Receptury_produkcji_szczegoly.png)

### Operacje

Operacje to etapy, które określają chronologiczną kolejność wykonywania pracy. Operacje wybieramy z listy rozwijanej i poprzez przycisk dodaj dodajemy ją do listy operacji.

**Lista operacji składa się z kolumn:**
-	LP,
-	Symbol,
-	Nazwa,
-	Czas operacji,
-	Jednostka czasu,
-	Czas TPZ – czas przygotowawczo-zakończeniowy,
-	Jednostka czasu TPZ,
-	Akcje:
	-	Edytuj pozycje,
	-	Usuń,
	-	Pokaż szczegóły,
-	Oznaczenie flagą operacji finalnej.

**Szczegóły receptury produkcji - operacje**

![Szczegóły receptury produkcji - operacje](/img/Obrazy/Receptury_produkcji_operacje.png)

**Edytując pozycję operacji możemy zdefiniować pola:**
-	LP,
-	Czas operacji,
-	Jednostka czasu,
-	Czas TPZ jednostka czasu TPZ,
-	Stały czas – Tak/Nie,
-	Stanowisko,
-	Grupa maszyn,
-	Kontrola jakości,
-	Operacje równoległe,
-	Planuj po pierwszej sztuce,
-	Operacja Niezależna.

**Edycja operacji**

![Edycja operacji](/img/Obrazy/Receptury_produkcji_operacje_edycja.png)

### BOM

W zakładce BOM dodajemy wszystkie towary które będą wykorzystywane w czasie produkcji.

**Dodając towar wypełniamy poniższe pola i klikamy przycisk dodaj:**
-	Wybierz produkt,
-	Ilość towaru,
-	Jednostka,
-	Operacja,
-	Typ towaru – surowiec lub półprodukt,
-	Towar nadrzędny.

**Lista z dodanymi towarami zawiera kolumny:**
-	Symbol,
-	Nazwa,
-	Operacja,
-	Cena,
-	Wartość,
-	Ilość,
-	JM,
-	Akcje:
	-	Edytuj,
	-	Usuń,
	-	Pokaż szczegóły.

**System umożliwia przełączanie widoku listy dodanych towarów według:**
-	Pełnego zestawienia – widzimy półprodukty, po rozwinięciu ich szczegółów widzimy surowce przypisane do towaru,
-	Składniki – widzimy listę surowców,
-	Produkty wyjściowe – widzimy listę półproduktów.

**BOM**

![BOM](/img/Obrazy/Receptury_produkcji_BOM.png)

Produkt finalny określony jest automatycznie jako pierwszy półprodukt przypisany do operacji finalnej.

### Koszty dodatkowe

W tej zakładce będą definiowane koszty dodatkowe dla produkcji, jak zużycie wody, prądu.

**Dodając koszt uzupełniamy poniższe pola i dodajemy przyciskiem dodaj:**
-	Wybierz koszt – lista kosztów zdefiniowanych w konfiguracji systemu,
-	Ilość,
-	Wybierz jednostkę.

Dodane koszty widnieją na liście poniżej możemy je edytować lub usunąć.

**Koszty dodatkowe**

![Koszty dodatkowe](/img/Obrazy/Receptury_produkcji_koszty.png)

### Odpady i zwroty

Odpady i zwroty to założenia ilościowe ubytków powstałych podczas produkcji lub wynikających z niedoskonałości surowca.

**Dodając odpad/zwrot uzupełniamy poniższe pola i dodajemy go przyciskiem dodaj:**
-	Wybierz produkt,
-	Ilość,
-	Wybierz jednostkę,
-	Wybierz typ,
-	Wybierz operację.

**Dodane pozycje tworzą listę z kolumnami:**
-	Symbol,
-	Nazwa,
-	Operacja,
-	Typ,
-	Ilość,
-	Cena,
-	Wartość,
-	JM,
-	Akcje:
	-	Edytuj,
	-	Usuń.

**Odpady i zwroty**

![Odpady i zwroty](/img/Obrazy/Receptury_produkcji_odpady.png)

Rozliczając daną operację na produkcji, na odpady zostanie wygenerowany dokument PW na magazyn odpadu, na zwroty pozostaną na magazynie produkcyjnym.

### Kalkulacje

W zakładce Kalkulacje możemy przeprowadzić kalkulacje kosztów wyprodukowania danego towaru w zależności od wykorzystanej receptury.

**Do przeprowadzenia obliczeń podajemy:**
-	Ilość kalkulowana – ilość przedmiotu finalnego na którą przeprowadzimy obliczenia,
-	Współczynnik sprzedaży określamy procentowo marżę, na jej podstawie system obliczy cenę sprzedaży.

**Po kliknięciu „Oblicz” widzimy wykres z obliczeniami z podziałem na receptury danego towaru z możliwością przełączanie się między wyliczeniami według:**
-	Materiałów,
-	Operacji,
-	Czasu produkcji,
-	Kosztów dodatkowych.

**Kalkulacje kosztów produkcji**

![Kalkulacje kosztów produkcji](/img/Obrazy/Receptury_produkcji_kalkulacje.png)

### Załączniki

W zakładce „Załączniki” dodajemy załączniki do danej operacji i opisy wytwarzania. Dodane opisy i załączniki będą widoczne w panelu operatora przy realizacji danej operacji.

Dodając załącznik wskazujemy plik i określamy operację której dotyczy. Dodane załączniki widnieją poniżej tworząc listę. Możemy je usunąć klikając w ikonę kosza.

**Dodawanie załączników do operacji**

![Dodawanie załączników do operacji](/img/Obrazy/Receptury_produkcji_zalaczniki.png)

Dodając opis wybieramy operacje i w edytorze treści dodajemy opis. Dodane opisy widnieją poniżej tworząc listę. Możemy je usunąć klikając w ikonę kosza lub przejść do ich edycji.

**Dodawanie opisów do operacji**

![Dodawanie opisów do operacji](/img/Obrazy/Receptury_produkcji_opisy.png)
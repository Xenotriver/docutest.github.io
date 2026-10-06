---
title: "Zlecenia produkcyjne"
sidebar_label: "6.4. Zlecenia produkcyjne"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Moduł gromadzi najważniejsze informacje związane z procesem produkcji. 
Po wejściu do modułu „Zlecenia produkcyjne” pojawia się tabela z listą zleceń.

**Na liście zleceń są widoczne:**
-	Wszystkie zlecenia produkcyjne dodane ręcznie poprzez uzupełnienie formularza z poziomu modułu „Zlecenia produkcyjne”,
-	Wszystkie zlecenia produkcyjne, które powstaną na podstawie ZK,
-	Wszystkie zlecenia produkcyjne dodane po zatwierdzeniu planu produkcyjnego.

**Na liście zleceń produkcyjnych widoczne są takie informacje jak:**
-	Numer,
-	Status,
-	Data utworzenia,
-	Postęp realizacji,
-	Produkt gotowy,
-	Receptura produkcji,
-	Planowana data realizacji,
-	Data rozpoczęcia realizacji,
-	Data zakończenia realizacji,
-	Źródło,
-	Akcje:
	-	Edytuj,
	-	Anuluj.

**Listę możemy filtrować po:**
-	Numer zlecenia,
-	Status:
	-	Wersja robocza,
	-	Oczekuje na realizację,
	-	W trakcie realizacji,
	-	Zakończone,
	-	Anulowane,
-	Data utworzenia,
-	Produkt,
-	Receptura,
-	Planowana data realizacji,
-	Data rozpoczęcia,
-	Data zakończenia,
-	Źródło.

**Lista zleceń produkcyjnych**

![Lista zleceń produkcyjnych](/img/Obrazy/Zlecenia_produkcji_lista_zlecen.png)

Poprzez kliknięcie na wiersz z listy przechodzimy do szczegółów zlecenia produkcyjnego.

### Szczegóły zlecenia produkcyjnego

**Szczegóły podzielone są na sekcje:**
-	Szczegóły zlecenia produkcyjnego,
-	Podsumowanie zlecenia produkcyjnego,
-	Wykres Gantta,
-	Podstawowe informacje.

**Szczegóły zlecenia produkcyjnego**

![Szczegóły zlecenia produkcyjnego](/img/Obrazy/Zlecenia_produkcji_szczegoly_zlecenia.png)

**W sekcji „Szczegóły zlecenia produkcyjnego” widzimy listę z operacjami przypisanymi do zlecenia z informacjami jak:**
-	LP,
-	Operacja,
-	Symbol,
-	Data rozpoczęcia,
-	Data zakończenia,
-	Rzeczywisty czas operacji,
-	Zakładany czas operacji,
-	Maszyna,
-	Stanowisko,
-	Operator,
-	Pokaż więcej.

**Rozwijając szczegóły danej operacji widzimy podsumowanie rozliczeń dodanych przez operatora z poziomu panelu operatora. Widzimy dodatkowo informacje:**
-	Maszyna,
-	Operator,
-	Data rozpoczęcia,
-	Data zakończenia,
-	Dokumenty wewnętrzne,
-	Dokumenty zewnętrzne,
-	Datę utworzenia.

**Rozliczenie do operacji**

![Rozliczenie do operacji](/img/Obrazy/Zlecenia_produkcji_rozliczenia.png)

**W sekcji „Podsumowanie zlecenia produkcyjnego” widzimy towar który produkujemy z informacjami jak:**
-	symbol,
-	nazwa,
-	receptura produkcji,
-	Wyprodukowano,
-	Zlecono,
-	Ilość dostępna.

**Podsumowanie zlecenia produkcyjnego - towar**

![Podsumowanie zlecenia produkcyjnego - towar](/img/Obrazy/Zlecenia_produkcji_podsumowanie.png)

Część z Wykresem Gantta zawiera wizualnie zaprezentowane czasy z operacji. 
Podgląd możliwy jest w podziale na minuty, godziny i dni.

**W sekcji „Podstawowe informacje” umieszczone są informacje o:**
-	Statusie,
-	Dacie utworzenia,
-	Planowanej dacie realizacji,
-	Dacie rozpoczęcia realizacji,
-	Dacie zakończenia realizacji,
-	Typie zlecenia,
-	Źródle,
-	Informacji z jakich zamówień pochodzą produkowane elementy,
-	Uwagami do dokumentu.

**Zlecenie produkcyjne podstawowe informacje**

![Zlecenie produkcyjne podstawowe informacje](/img/Obrazy/Zlecenia_produkcji_podstawowe.png)

Z widoku szczegółów zlecenia możemy przełączyć do widoku „Składniki” gdzie widzimy listę z produktem końcowym, składnikami do produkcji i półproduktami.

**Zlecenie produkcyjne - składniki**

![Zlecenie produkcyjne - składniki](/img/Obrazy/Zlecenia_produkcji_zlecenie_skladniki.png)

Dla zleceń produkcyjnych posiadających status „Wersja robocza”, system udostępnia funkcjonalność edycji kluczowych parametrów planistycznych bezpośrednio w widoku szczegółów. 
Edycja odbywa się w trybie wierszowym – po kliknięciu ikony edycji (ołówek) przy danej pozycji, pola stają się aktywne. 
Zatwierdzenie wprowadzonych zmian następuje poprzez kliknięcie ikony akceptacji.

**Zakres edycji obejmuje:**
-	Sekcja „Szczegóły zlecenia produkcyjnego” (Operacje):
	-	Maszyna – wybór z listy dostępnych maszyn,
	-	Stanowisko – przypisanie do gniazda produkcyjnego,
	-	Operator – imienne wskazanie pracownika.
-	Sekcja „Podsumowanie zlecenia produkcyjnego”:
	-	Receptura produkcji – zmiana technologii wykonania wyrobu (wybór z listy aktywnych receptur),
	-	Zlecono – modyfikacja ilości produktu planowanej do wytworzenia.

**Zlecenie produkcyjne - edycja w wersji roboczej**

![Zlecenie produkcyjne - edycja w wersji roboczej](/img/Obrazy/Zlecenia_produkcji_edycja.png)

#### Generowanie ZD i ZP dla niedoborów składników

W widoku „Składniki do produkcji” dostępnym w szczegółach zlecenia produkcyjnego, system umożliwia identyfikację oraz szybką reakcję na braki materiałowe. Użytkownik ma możliwość zaznaczenia (za pomocą checkboxa) pozycji, których stan magazynowy jest niewystarczający do realizacji zlecenia.

**Zlecenie produkcyjne - widoczność braków**

![Zlecenie produkcyjne - widoczność braków](/img/Obrazy/Zlecenia_produkcji_widocznosc.png)

**Zaznaczenie co najmniej jednej pozycji aktywuje dodatkowe przyciski operacyjne w dolnym pasku narzędziowym:**
-	Utwórz ZP – pozwala na szybkie utworzenie podrzędnego ZP na pojedynczy składnik. Po uzupełnieniu danych w dodatkowym oknie i kliknięciu przycisku Utwórz, zostanie utworzone nowe zlecenie produkcyjne w statusie „Wersja robocza” na wskazaną ilość składnika.

	**Zlecenie produkcyjne - tworzenie ZP**
	
	![Zlecenie produkcyjne - tworzenie ZP](/img/Obrazy/Zlecenia_produkcji_ZP.png)

-	Utwórz ZD – umożliwia zbiorcze generowanie zamówień do dostawców w systemie ERP dla wielu brakujących surowców jednocześnie. Lista dostawców do wyboru jest pełną listą kontrahentów z systemu ERP.

	**Zlecenie produkcyjne - tworzenie ZD**
	
	![Zlecenie produkcyjne - tworzenie ZD](/img/Obrazy/Zlecenia_produkcji_ZD.png)

Po kliknięciu w ikonę samochodu obok łącznej ilości na ZD w tabeli, otrzymamy podgląd dokumentów ZD oraz zamówionych ilości składnika.

**Generowanie ZD - podgląd dostaw**

![Generowanie ZD - podgląd dostaw](/img/Obrazy/Zlecenia_produkcji_generowanie_ZD.png)

### Dodawanie zlecenia produkcyjnego

Aplikacja Asiston Produkcja umożliwia stworzenie nowego zlecenia produkcyjnego w tym widoku za pomocą przycisku Dodaj Zlecenie.

**Dodając zlecenie wypełniamy formularz w którym określamy:**
-	Typ zlecenia,
-	Produkt,
-	Receptura,
-	Ilość,
-	Planowana data rozpoczęcia,
-	Opis.

**Dodawanie zlecenia produkcyjnego**

![Dodawanie zlecenia produkcyjnego](/img/Obrazy/Zlecenia_produkcji_dodawanie.png)

Po zapisaniu przechodzimy do widoku szczegóły zlecenia produkcyjnego.
Przy dodawaniu nowego zlecenia w sekcji „Szczegóły zlecenia produkcyjnego” możemy edytować operacje wskazując w nich maszynę, stanowisko i operatora.

**Dodawanie zlecenia produkcyjnego edycja operacji**

![Dodawanie zlecenia produkcyjnego edycja operacji](/img/Obrazy/Zlecenia_produkcji_edycja_operacji.png)

<ZapiszZmiany />

### Realizowanie zlecenia produkcyjnego

Proces realizacji zlecenia produkcyjnego obejmuje rozliczanie operacji. Poszczególne operacje można rozliczać w sekcji szczegółów zlecenia produkcyjnego.

Aby tego dokonać należy rozwinąć daną operację i kliknąć „ROZLICZ OPERACJĘ”.

W oknie, które się pojawi można wpisać ilość składników użytych do produkcji, a w prawym górnym rogu możemy przełączyć widok tabeli na produkty wyjściowe i odpady.

Możemy dodawać pozycje przy użyciu zielonego przycisku „Dodaj pozycję”.

Po zakończeniu rozliczenia zapisujemy zielonym przyciskiem ZAPISZ ROZLICZENIE dostępnym w dolnej części okna.

**Widok okna rozliczania operacji**

![Widok okna rozliczania operacji](/img/Obrazy/Zlecenia_produkcji_rozliczania.png)

Po wpisaniu odpowiednich wartości należy zakończyć rozliczenie przy użyciu czerwonego przycisku „ZAKOŃCZ ROZLICZENIE”. 
Po wykonaniu tej czynności tło okna zleceń produkcyjnych zmieni kolor na zielony. 
Wówczas możemy zakończyć zlecenie produkcyjne używając zielony przycisk ZAKOŃCZ ZLECENIE w dolnej części okna.

### Akceptacja rozliczenia produkcji

Funkcjonalność umożliwia kierownikowi produkcji lub osobie uprawnionej weryfikację danych wprowadzonych przez operatora oraz ich ewentualną korektę i ostateczne zatwierdzenie przed utworzeniem dokumentów w systemie ERP.

Jeżeli w konfiguracji włączono opcję „Rozliczenie z końcową akceptacją”, po zakończeniu pracy przez operatora zlecenie produkcyjne otrzymuje status „Do akceptacji” (oznaczony kolorem pomarańczowym). 
W widoku szczegółów takiego zlecenia pojawiają się dodatkowe przyciski sterujące procesem akceptacji. 
Uprawniona osoba będzie miała możliwość wprowadzenia zmian w rozliczeniu oraz zatwierdzenie zlecenia przyciskiem „Wyślij do ERP”. 
Spowoduje to wygenerowanie dokumentów RW/PW w zintegrowanym systemie ERP oraz zmianę statusu zlecenia na „Zakończone”.

**W widoku zlecenia produkcyjnego o statusie „Do akceptacji” dostępne są następujące elementy:**
-	Przycisk „Edycja” – uruchamia tryb edycji rozliczenia,
-	Ikona ołówka (przy pozycjach w rozliczeniu ZP) – dostępna po wejściu w tryb edycji, umożliwia zmianę ilości dla poszczególnych pozycji,
-	Ikona akceptacji – pojawia się w miejscu ikony edycji, służy do zatwierdzenia wprowadzonych zmian dla rozliczenia ZP,
-	Przycisk „Wyślij do ERP” – finalizuje proces, generuje dokumenty w ERP i zamyka zlecenie.

**Akceptacja rozliczenia produkcji - Edycja rozliczenia**

![Akceptacja rozliczenia produkcji - Edycja rozliczenia](/img/Obrazy/Zlecenia_produkcji_akceptacja_rozliczenia.png)

### Automatyczne tworzenie ZP na podstawie stanów min/max

Automatyczne tworzenie ZP na podstawie stanów to funkcjonalność umożliwiająca generowanie zleceń dla produktów, których stan magazynowy spadł poniżej zdefiniowanego poziomu minimalnego, z domyślną sugestią ilości do produkcji do poziomu stanu maksymalnego.

Stany minimalne i maksymalne definiuje się w zakładce Produkty, w szczegółach konkretnego produktu, w sekcji Dane Podstawowe.

Produkty, których stan magazynowy spadnie poniżej poziomu określonego w szczegółach produktu są umieszczane w raporcie „Produkcja uzupełniająca (stany min/max)”.

**Z poziomu raportu użytkownik ma możliwość generowania Zleceń Produkcyjnych za pomocą następujących opcji:**
-	Checkbox: Użytkownik może zaznaczyć jeden lub wiele produktów za pomocą checkboxów. Po zaznaczeniu wybranych pozycji, może użyć przycisku np. "Generuj ZP" oraz "Przekaż do Planu", który zainicjuje proces tworzenia odpowiednich dokumentów (pojedyncze ZP w wersji roboczej z sugerowaną ilością do produkcji).
-	Ikona akcji z tooltipem: Obok każdej pozycji w raporcie widnieje ikona akcji po kliknięciu na którą pojawi się opcja "[Generuj ZP] i [Przekaż do planu]". Kliknięcie tej opcji dla pojedynczej pozycji zainicjuje proces generowania ZP, lub przekazania go do planu produkcyjnego.

W wygenerowanej wersji roboczej Zlecenia Produkcyjnego, domyślna ilość do produkcji dla danego produktu będzie podpowiadana na podstawie wartości "Stan maksymalny" minus "Aktualny stan magazynowy". 
Użytkownik ma możliwość edycji tej ilości przed zatwierdzeniem zlecenia.

**Widok raportu Produkcja uzupełniająca (stany min/max)**

![Widok raportu Produkcja uzupełniająca (stany min/max)](/img/Obrazy/Zlecenia_produkcji_produkcja_uzupelniajaca.png)

### Tablica zleceń produkcyjnych

Funkcjonalność służy do wizualizacji bieżącego stanu realizacji produkcji na zbiorczym ekranie (np. monitorze wielkoformatowym w hali produkcyjnej). 
Umożliwia kierownikom i pracownikom monitorowanie postępu prac oraz terminowości kluczowych zleceń w czasie rzeczywistym, bez konieczności wchodzenia w szczegóły każdego dokumentu.

Dostęp do tablicy uzyskuje się z poziomu listy zleceń produkcyjnych. 
Obok przycisku Dodaj zlecenie znajduje się dedykowany przycisk Ekran zleceń, uruchamiający tablicę.

**Tablica zleceń produkcyjnych przycisk dostępu**

![Tablica zleceń produkcyjnych przycisk dostępu](/img/Obrazy/Zlecenia_produkcji_przycisk.png)

Kliknięcie przycisku powoduje otwarcie widoku tablicy w nowej karcie przeglądarki. 
Widok tablicy prezentuje listę zleceń w formie tabelarycznej.

**Na tablicy widoczne są tylko zlecenia produkcyjne posiadające jeden z poniższych statusów:**
-	Oczekuje na realizację,
-	W trakcie realizacji.

**Tabela zawiera następujące kolumny:**
-	Numer ZP,
-	Produkt,
-	Postęp realizacji – wizualizacja procentowego postępu prac (z możliwością sortowania rosnąco/malejąco),
-	Data rozpoczęcia – (z możliwością sortowania rosnąco/malejąco),
-	Data planowana – (z możliwością sortowania rosnąco/malejąco).

**Tablica zleceń produkcyjnych**

![Tablica zleceń produkcyjnych](/img/Obrazy/Zlecenia_produkcji_tablica.png)

W prawym górnym rogu ekranu tablicy dostępna jest ikona ustawień (koło zębate). 
Jej kliknięcie otwiera okno umożliwiające zawężenie wyświetlanych wyników do specyficznych obszarów produkcji.

**Dostępne filtry:**
-	Grupa maszyn – lista rozwijana zawierająca zdefiniowane w systemie grupy maszyn.
-	Typ zlecenia – lista rozwijana zawierająca zdefiniowane w systemie typy zleceń.

Po wybraniu opcji i zatwierdzeniu, widok tablicy odświeża się, prezentując zlecenia spełniające kryteria filtracji.

**Tablica zleceń produkcyjnych - filtrowanie**

![Tablica zleceń produkcyjnych - filtrowanie](/img/Obrazy/Zlecenia_produkcji_tablica_filtr.png)

## Opis procesu zlecenia produkcyjnego

**Zlecenia produkcyjne**

![Zlecenia produkcyjne](/img/Obrazy/ZP.png)

**Proces zlecenia produkcyjnego może zostać zainicjowany na trzy sposoby:**
-	Ręcznie utworzenie zlecenia produkcyjnego przez pracownika posiadającego dostęp do modułu zlecenia produkcyjne. 
	-	Pracownik dodaje zlecenie wskazując między innymi: 
		-	Produkt który należy wyprodukować
		-	Recepturę produkcji – przed utworzeniem zlecenia konieczne jest określenie receptury produkcji dla produkowanego towaru. System pozwala na określenie domyślnej receptury dla poszczególnych produktów. Jeśli produkt nie ma utworzonej receptury użytkownik musi ja dodać przez utworzeniem zlecenia.   Recepturę produkcji należy dodać z poziomu modułu Receptury produkcji. 
		-	Ilość sztuk którą należy wyprodukować 

Po zatwierdzeniu  wprowadzonych wartości system tworzy zlecenie produkcyjne ze statusem „Wersja robocza” i przenosi użytkownika bezpośrednio do widoku utworzonego zlecenia   
-	Przekazanie planu produkcji do realizacji – zlecenie produkcyjne jest tworzone automatycznie w monecie zatwierdzenie planu produkcji i przekazania do realizacji. Utworzone zlecenie produkcyjne zostaje dodane do widoku „zlecenia produkcyjne ze statusem  „Wersja robocza”
-	Utworzenie zlecenia produkcji na podstawie ZK – zlecenie produkcyjne jest tworzone automatycznie w monecie przekazania zlecenia do realizacji w trakcie realizacji procesu opisanego w punkcie  8.1 Zamówienia od klientów. Utworzone zlecenie produkcyjne zostaje dodane do widoku „zlecenia produkcyjne ze statusem  „Wersja robocza”

Pracownik posiadający uprawnienia do modułu zlecenia produkcyjne ma dostęp do wszystkich zleceń dodanych do systemu. 
Po przejściu do szczegó-łów wybranego zlecenia może podjąć decyzję o jego przekazaniu do reali-zacji lub anulowaniu. 
Przed przekazaniem do realizacji użytkownik może op-cjonalnie określić planowane terminy realizacji.

Po przekazaniu zlecenia do realizacji system automatycznie śledzi jego status i postęp prac produkcyjnych na podstawie danych wprowadzanych przez operatorów wykonujących poszczególne operacje. 
Rodzaj i liczba operacji zależą od receptury produktu, który jest wytwarzany.

Pracownik posiadający uprawnienia do modułu zleceń produkcyjnych przez cały czas ma podgląd do bieżącego statusu zlecenia oraz szczegółowego postępu jego realizacji. 
W widoku szczegółów zlecenia użytkownik może również dokonać rozliczenia poszczególnych operacji produkcyjnych. 
Rozliczenie operacji powoduje wygenerowanie odpowiednich dokumentów w systemie ERP.

Jeżeli zlecenie jest powiązane z zamówieniem od klienta, dane wprowadzo-ne w procesie realizacji zlecenia produkcyjnego powodują również aktuali-zacje statusów w zamówieniu klienta.

:::tip

System umożliwia anulowanie zlecenia na każdym etapie realizacji. 

:::
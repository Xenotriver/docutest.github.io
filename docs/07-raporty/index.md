---
title: "Raporty"
sidebar_label: "7. Raporty"
---

# Raporty systemowe

Pozycja z listą raportów gromadzi podstawowe dane systemowe, które mogą służyć analizie i budowaniu wskaźników.

**Widok „Raporty systemowe” zawiera:**
-	Nazwę raportu,
-	Akcje:
	-	Szczegóły.

Użytkownik ma możliwość wyszukiwania raportów po nazwie.

**Raporty systemowe**

![Raporty systemowe](/img/Obrazy/Raporty_systemowe.png)

## Raport wydajności operatorów

Raport ten służy do monitorowania efektywności pracy poszczególnych operatorów w zadanym okresie. 
Umożliwia weryfikację czasu aktywności pracowników, liczby zrealizowanych zadań oraz identyfikację czasu poświęconego na przerwy, co pozwala na optymalizację wydajności zespołu produkcyjnego.

Raport agreguje dane na temat aktywności operatorów w systemie. 
Dane prezentowane są w formie tabelarycznej z możliwością filtrowania wyników dla konkretnego pracownika.

System zlicza czasy na podstawie logowań oraz statusów operacji (rozpoczęcie/zakończenie) rejestrowanych w panelu operatora.

**Widok raportu zawiera filtry:**
-	Operator – lista rozwijana umożliwiająca wybór konkretnego pracownika.

**Tabela wyników zawiera kolumny:**
-	Operator (Imię i nazwisko),
-	Czas aktywności w bieżącym miesiącu (sumaryczny czas zalogowania),
-	Czas poświęcony na realizację operacji (w bieżącym miesiącu),
-	Ilość zakończonych ZP (liczba zleceń produkcyjnych, w których operator brał udział i zostały one zakończone),
-	Ilość zgłoszonych awarii,
-	Ilość zarejestrowanych przerw,
-	Czas spędzony na przerwach.

**Raporty systemowe - Raport wydajności operatorów**

![Raporty systemowe - Raport wydajności operatorów](/img/Obrazy/Raporty_systemowe_wydajnosc_operatorow.png)

## Raport realizacji produkcji

Raport służy do szczegółowej analizy czasów realizacji poszczególnych operacji technologicznych. 
Pozwala na porównanie czasu standardowego (planowanego) z czasem rzeczywistym, identyfikację odchyleń oraz analizę średniego czasu wykonania operacji dla danej receptury.

Raport umożliwia podgląd porównania czasów operacji dla zakończonych i trwających zleceń.

Po przefiltrowaniu listy po konkretnej recepturze oraz operacji, system automatycznie wylicza średni czas wykonania (suma czasów rzeczywistych / ilość operacji) i prezentuje go w kolumnie "Średni czas wykonania".

Z poziomu wiersza raportu możliwe jest bezpośrednie przejście do szczegółów powiązanej receptury.

**Sekcja filtrów umożliwia selekcję danych według:**
-	Zlecenie produkcyjne,
-	Operacja,
-	Receptura,
-	Pracownik,
-	Data dodania od-do,
-	Data zakończenia od-do.

**Tabela raportu zawiera kolumny:**
-	Zlecenie produkcyjne (numer),
-	Operacja (symbol/nazwa),
-	Receptura (nazwa wytwarzanego produktu),
-	Pracownicy (osoby realizujące operację),
-	Data rozpoczęcia operacji,
-	Data zakończenia operacji,
-	Czas standardowy (wynikający z receptury produkcji),
-	Czas rzeczywisty (faktyczny czas realizacji),
-	Różnica (odchylenie między czasem standardowym a rzeczywistym),
-	Czas jednostkowy,
-	Średni czas wykonania (wartość wyliczana dynamicznie),
-	Przycisk akcji: Przejdź do receptury.

**Raporty systemowe - Raport realizacji produkcji**

![Raporty systemowe - Raport realizacji produkcji](/img/Obrazy/Raporty_systemowe_realizacja_produkcji.png)

## Raport braków surowców

Raport identyfikuje niedobory materiałowe, które blokują lub mogą opóźnić realizację zaplanowanych zleceń produkcyjnych. 
Narzędzie to wspiera dział zakupów i magazyn w zapewnieniu ciągłości produkcji poprzez wskazanie różnic między zapotrzebowaniem wynikającym z ZP a dostępnym stanem magazynowym.

Raport generowany jest w oparciu o informacje o brakujących surowcach na zleceniach produkcyjnych.

System analizuje zapotrzebowanie materiałowe dla otwartych ZP i porównuje je z aktualnymi stanami magazynowymi (dostępnymi dla produkcji).

**Filtrowanie listy możliwe jest według kryteriów:**
-	Numer ZP,
-	Data utworzenia ZP (zakres dat),
-	Nazwa produktu,
-	Symbol produktu,
-	Zapotrzebowanie od/do (zakres ilościowy).

**Lista wyników prezentuje następujące dane:**
-	Numer ZP,
-	Data utworzenia ZP,
-	Nazwa produktu,
-	Symbol produktu,
-	Zapotrzebowanie (wymagana ilość),
-	Dostępne na magazynie (aktualny stan),
-	JM (jednostka miary).

**Raporty systemowe - Raport braków surowców**

![Raporty systemowe - Raport braków surowców](/img/Obrazy/Raporty_systemowe_braki_surowcow.png)

## Raport kontroli jakości

Raport gromadzi wyniki wszystkich przeprowadzonych kontroli jakości w procesie produkcyjnym. 
Umożliwia monitorowanie statusu kontroli, analizę poziomu zgodności wyrobów z normami oraz szybką reakcję na wykryte niezgodności poprzez generowanie zleceń naprawczych lub produkcję uzupełniającą.

Raport wyświetla listę kontroli powiązanych ze zleceniami produkcyjnymi.

Możliwe jest rozwijanie szczegółów wiersza, aby zobaczyć parametry kontroli (Skontrolowano, Zgodnych, Wartość, Skontrolowano).

Generowanie ZP na niezgodne: Funkcja dostępna pod przyciskiem akcji. 
Użycie jej powoduje utworzenie nowego Zlecenia Produkcyjnego, powiązanego z dokumentem źródłowym, na ilość sztuk, które nie spełniły kryteriów kontroli jakości.

**Filtry dostępne w raporcie:**
-	Numer ZP,
-	Nazwa (kontroli),
-	Typ kontroli,
-	Status,
-	Data rozpoczęcia,
-	Data zakończenia,
-	Osoba kontrolująca.

**Tabela główna zawiera kolumny (z opcją sortowania):**
-	Numer ZP,
-	Ilość operacji do kontroli,
-	Postęp (pasek postępu procentowego),
-	Przycisk rozwijania szczegółów.

**W widoku szczegółowym (po rozwinięciu wiersza) widoczne są:**
-	Operacja,
-	Nazwa kontroli,
-	Typ kontroli,
-	Rodzaj kontroli (np. Procent do kontroli),
-	Wartość,
-	Skontrolowano (ilość zbadana),
-	Zgodnych (ilość zgodna z planem),
-	Do kontroli (ilość pozostała/wymagana),
-	Przycisk akcji: Generuj ZP na niezgodne.

**Raporty systemowe - Raport kontroli jakości**

![Raporty systemowe - Raport kontroli jakości](/img/Obrazy/Raporty_systemowe_kontrola_jakosci.png)

Funkcja wywoływana przyciskiem „Generuj ZP na niezgodne” w wierszu raportu otwiera formularz, który pozwala na natychmiastowe utworzenie nowego zlecenia produkcyjnego dla produktów niespełniających norm jakościowych.

**Okno dialogowe zawiera następujące pola do uzupełnienia:**
-	Nagłówek – informacja o iteracji produktu (np. „Produkt 1 z 1”),
-	Typ zlecenia (pole obowiązkowe) – lista rozwijana pozwalająca określić rodzaj tworzonego zlecenia (np. Domyślne, Naprawcze),
-	Produkt (pole obowiązkowe) – lista rozwijana z automatycznie podstawionym produktem, którego dotyczyła kontrola,
-	Receptura (pole obowiązkowe) – lista rozwijana do wyboru technologii wykonania (np. receptura naprawcza lub standardowa),
-	Ilość (pole obowiązkowe) – pole edycyjne określające wolumen produkcji dla nowego zlecenia,
-	Planowana data rozpoczęcia – pole wyboru daty z kalendarza,
-	Opis – pole tekstowe na dodatkowe uwagi dotyczące zlecenia.

**Raport kontroli jakości - generuj ZP na niezgodne**

![Raport kontroli jakości - generuj ZP na niezgodne](/img/Obrazy/Raporty_systemowe_kontrola_jakosci_ZP.png)

## Raport produkcja uzupełniająca (stany min/max)

Raport służy do automatyzacji procesu tworzenia zleceń produkcyjnych na podstawie stanów min/max. 
Szczegółowy opis raportu znajduje się w rozdziale Automatyczne tworzenie ZP na podstawie stanów min/max.

# Raporty AI

Moduł generowania raportów przy pomocy sztucznej inteligencji jest zaawansowanym narzędziem analitycznym, które umożliwia dynamiczne generowanie niestandardowych raportów na podstawie zapytań w języku naturalnym. 
Funkcjonalność ta pozwala użytkownikom na samodzielne tworzenie złożonych zestawień bez konieczności angażowania prac programistycznych. 
System w celu zapewnienia pełnego bezpieczeństwa operuje wyłącznie na metadanych (strukturze bazy danych), nie przesyłając żadnych danych systemowych do zewnętrznych dostawców modeli LLM.

## Konfiguracja

Warunkiem koniecznym do korzystania z modułu jest jego uprzednia konfiguracja, dostępna w dedykowanej zakładce po instalacji dodatku (Marketplace - Zainstalowane - Asiston AI).

**Konfiguracja obejmuje:**
-	Wprowadzenie klucza API: Użytkownik musi wprowadzić własny, aktywny klucz API dla wybranego dostawcy modelu językowego (LLM).

**Raporty AI - wprowadzanie klucza API**

![Raporty AI - wprowadzanie klucza API](/img/Obrazy/Raporty_AI_API.png)

**Wybór modelu LLM: System pozwala na wybór jednego z zintegrowanych, wysokowydajnych modeli. Lista dostępnych modeli jest sukcesywnie rozszerzana i obejmuje m.in.:**
-	OpenAI: GPT-5, GPT-4.1
-	Anthropic: Claude Sonnet 4, Claude Sonnet 3.5
-	Google: Gemini 3 Pro, Gemini 2.5 Flash

**Raporty AI - wybór modelu LLM**

![Raporty AI - wybór modelu LLM](/img/Obrazy/Raporty_AI_model.png)

:::warning

Uwaga: Wskazane modele LLM są usługami świadczonymi przez firmy trzecie. 
Asiston nie ponosi odpowiedzialności za ich dostępność, zmiany w funkcjonowaniu czy politykę użytkowania konta klienta.

:::

## Uprawnienia

**Dostęp do funkcjonalności raportów AI jest kontrolowany na dwóch poziomach:**

-	Dostęp do modułu: Uprawnienia do widoczności i możliwości tworzenia nowych raportów są zarządzane centralnie w module Administracja / Role i uprawnienia. Administrator może nadać dostęp do raportów AI wybranym rolom lub poszczególnym użytkownikom.

**Administracja - raporty AI**

![Administracja - raporty AI](/img/Obrazy/Raporty_AI_administracja.png)

-	Uprawnienia do poszczególnych raportów: Po utworzeniu i zapisaniu raportu, w jego widoku szczegółowym dostępna jest zakładka Uprawnienia. Umożliwia ona nadanie uprawnień do uruchamiania konkretnego raportu wybranym użytkownikom.

**Raporty AI - zakładka Uprawnienia**

![Raporty AI - zakładka Uprawnienia](/img/Obrazy/Raporty_AI_uprawnienia.png)

## Generowanie i zarządzanie raportami

Główny widok modułu, dostępny w zakładce Raporty - Raporty AI, prezentuje listę wszystkich zapisanych raportów. 
Z tego poziomu użytkownik może uruchamiać istniejące raporty, edytować je lub tworzyć nowe za pomocą przycisku „Dodaj raport”.

**Raporty AI - lista raportów**

![Raporty AI - lista raportów](/img/Obrazy/Raporty_AI_lista.png)

**Proces generowania nowego raportu składa się z następujących etapów:**

-	Interakcja z modelem LLM: Użytkownik wprowadza zapytanie w języku naturalnym w oknie konwersacji. 
Model LLM analizuje zapytanie i zwraca propozycję polecenia SQL, które zostanie wykonane na bazie danych. 
W razie potrzeby, użytkownik może kontynuować konwersację w celu skorygowania lub doprecyzowania zapytania.

**Raporty AI - generowanie raportu**

![Raporty AI - generowanie raportu](/img/Obrazy/Raporty_AI_generowanie.png)

-	Weryfikacja i modyfikacja zapytania SQL: Po wygenerowaniu polecenia, użytkownik może je zatwierdzić przyciskiem „Użyj”, co spowoduje wykonanie raportu i wyświetlenie jego podglądu. 
Dostępna jest również zakładka SQL, w której zaawansowani użytkownicy mogą ręcznie modyfikować wygenerowane polecenie.

**Raporty AI - ręczna modyfikacja SQL**

![Raporty AI - ręczna modyfikacja SQL](/img/Obrazy/Raporty_AI_SQL.png)

-	Konfiguracja wizualizacji: System udostępnia narzędzia pozwalające na dostosowanie finalnego wyglądu raportu. 
Użytkownik może wybrać, które kolumny z wyniku zapytania mają być widoczne w tabeli oraz które dane mają być prezentowane na wykresie.

**Raporty AI - konfiguracja**

![Raporty AI - konfiguracja](/img/Obrazy/Raporty_AI_konfiguracja.png)

**Raporty AI - wykres**

![Raporty AI - wykres](/img/Obrazy/Raporty_AI_wykresy.png)

-	Zapisywanie i uruchamianie: Po uzyskaniu oczekiwanego rezultatu, użytkownik nadaje raportowi nazwę i zapisuje go. 
Zapisany raport staje się dostępny na liście głównej i może być uruchamiany wielokrotnie.

**Raporty AI - gotowy raport**

![Raporty AI - gotowy raport](/img/Obrazy/Raporty_AI_gotowy.png)
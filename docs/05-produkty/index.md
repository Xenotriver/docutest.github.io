---
title: "Produkty"
sidebar_label: "5. Produkty"
---

Widok listy produktów będzie zawierał:

- Zdjęcie produktu
- Nazwa
- Stan ERP (łączny stan ze wszystkich magazynów)
- Stan WMS (łączny stan ze wszystkich lokalizacji)
- Podstawowa jednostka miary
- Termin kolejnej dostawy
- Ilość w kolejnej dostawie
- Do wydania (suma ilości towaru ze wszystkich dokumentów wydań niezrealizowanych)
- Towar aktywny
- Symbol
- Akcje
  - Przycisk przejścia do szczegółów
  - Przycisk wydruku etykiety produktowej

Lista produktów będzie mogła być filtrowana według następujących kryteriów:

- Symbol/Nazwa/EAN – po frazie
- Produkt - lista rozwijana
- Termin dostawy (od… do…),
- Towar zamówiony – lista rozwijana:
  - Tak
  - Nie
- Jednostka miary - lista rozwijana
- Pokaż stany niezerowe (checkboxy ERP i WMS),
- Pokaż z rezerwacjami (checkbox),
- Lokalizacja – po frazie,
- Towar aktywny

**Widok listy produktów, w systemie Asiston Produkcja.**

![Widok listy produktów, w systemie Asiston Produkcja.](/img/Obrazy/Produkty_lista.png)

Lista produktów będzie regularnie aktualizowana w tle. Oznacza to, że system Asiston Produkcja automatycznie pobierze produkty, dodane w systemie ERP, i udostępni je w widoku listy.

Widok szczegółów produktu będzie zawierał następujące sekcje:

1. Dane podstawowe:
- Zdjęcie (od lewej strony) (do dodania przycisk dodania zdjęcia z pliku)
- Symbol
- Nazwa
- EAN
- Masa
- Wymiary i objętość
- Stan minimalny
- Stan maksymalny
- Checkbox: Towar niebezpieczny
1. Stany ERP
- Magazyn
- Jednostka miary
- Stan
- Rezerwacja
- Dostępne (stan – rezerwacja)
1. Lokalizacje, z podziałem na:
- Magazyn
- Lokalizacja
- Nośnika
- Partia
- Ilość
- JM (jednostka miary)
- Ikona pozwalająca na wydruk etykiety produktu
1. Dozwolone lokalizacje dla produktu - pokazujemy tu lokalizacje, dla której przypisaliśmy towar, który może być tam odkładany (określane w szczegółach każdej Asiston Produkcja)`
1. Dodatkowe kody kreskowe dla produktu
1. Dodatkowe jednostki miary – w tej sekcji prezentowane są dodatkowe jednostki miary przypisane do produktu w systemie ERP wraz z ich przeliczeniem na podstawową jednostkę miary.
1. Informator  - tu znajdą się informacje o dokumentach powiązanych z towarem. Po wejściu do szczegółów produktu, wartości nie będą ładowane do widoku. Konieczne będzie użycie przycisku „Wylicz” do załadowania dokumentów powiązanych z danym produktem:
  1. Dokumenty awizacji dostaw,
  1. Dokumenty awizacji wydań,
  1. Dokumenty kontroli jakości,
  1. Dokumenty przesunięć
1. Pliki - możliwość dodania dowolnego pliku do towaru.

**Przykładowy widok szczegółów produktu, w systemie Asiston Produkcja.**

![Przykładowy widok szczegółów produktu, w systemie Asiston Produkcja.](/img/Obrazy/Produkty_szczegoly.png)
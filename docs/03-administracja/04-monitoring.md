---
title: "Monitoring"
sidebar_label: "3.4. Monitoring"
---

**Pozycja „Administracja/Monitoring” służy do śledzenia historii logowania użytkowników do systemu Asiston Produkcja oraz do śledzenia zmian w systemie. Zawiera listę rozwijaną, na której znajdują się:**
- Historia logowania
- Rejestr zmian
- Harmonogram zadań

## Historia logowania

**Widok historii logowania to lista, zawierająca następujące kolumny:**
- Status,
- Użytkownik (nazwa użytkownika),
- Data zalogowania (system wyświetla również godzinę zalogowania),
- Data wylogowania (także z godziną wylogowania),
- Adres IP (dotyczy komputera z które logował się użytkownik),
- ID sesji (indywidualny numer identyfikacyjny sesji nadawany przez system)
- Akcje:
  - Zobacz szczegóły sesji użytkownika

**Lista może być:**
- Sortowana rosnąco lub malejąco wg zawartości kolumn
  - Data zalogowania,
  - Data wylogowania,
  - Adres IP,
  - ID sesji.
- Filtrowana wg pełnego określenia lub frazy:
  - Nazwa użytkownika,
  - Adres IP
  - Data od - do

**Widok historii logowania, w systemie Asiston Produkcja.**

![Widok historii logowania, w systemie Asiston Produkcja.](/img/Obrazy/Historia_logowania_monitoring.png)

## Rejestr zmian

Rejestr zmian, to lista zmian (typu „dodanie” lub „modyfikacja”), dokonanych przez użytkowników systemu, uprawnionych do wprowadzania zmian.

**Lista składa się z kolumn:**
- Użytkownik,
- ID,
- Sesja,
- Adres IP,
- Akcja,
- ID obiektu,
- Nazwa obiektu,
- Data zdarzenia.
- Akcje:
  - Zobacz sesję użytkownika,
  - Zobacz szczegóły zdarzenia.

**Lista może być:**
- Sortowana rosnąco lub malejąco po zawartości kolumn
  - Użytkownik,
  - ID obiektu,
  - Data zdarzenia.
- Filtrowana wg pełnego określenia lub frazy:
  - Numeru sesji,
  - Nazwy użytkownika,
  - Adresu IP,
  - Źródło,
  - Zdarzenie,
  - Data od,
  - Data do.

**Widok rejestru zmian, w systemie Asiston Produkcja.**

![Widok rejestru zmian, w systemie Asiston Produkcja.](/img/Obrazy/Rejestr_zmian.png)

Do szczegółów zdarzenia można wejść klikając dane zdarzenie na liście lub używając przycisku akcji pozycję „Zobacz szczegóły zdarzenia”. Widok szczegółów zdarzenia zwraca dodatkowe informacje o zdarzeniu, informacji tych nie można edytować (są tylko do odczytu).

**Widok szczegółów zdarzenia w rejestrze zmian.**

![Widok szczegółów zdarzenia w rejestrze zmian.](/img/Obrazy/Rejestr_szczegoly.png)

Przycisk akcji „Zobacz sesję użytkownika”, a liście rejestru zmian, zwraca widok listy aktywności użytkownika, który wprowadził daną zmianę.

**Widok listy aktywności użytkownika, który wprowadził zmianę w systemie Asiston Produkcja.**

![Widok listy aktywności użytkownika, który wprowadził zmianę w systemie Asiston Produkcja.](/img/Obrazy/Rejestr_sesja.png)


## Harmonogram zadań

Harmonogram zadań to lista, która przedstawia czynności wykonywane automatycznie przez system w sposób cykliczny.

**Lista składa się z kolumn:**
- Identyfikator zadania,
- Nazwa zadania,
- Data uruchomienia,
- Cron – określa częstotliwość wykonywania zadania,
- Aktywne:
  - Tak – zadanie jest wykonywane zgodnie z harmonogramem,
  - Nie – zadanie nie jest wykonywane
- Akcje:
  - Pokaż historię,
  - Uruchom zadanie.

**Lista może być sortowana według kolumn:**
- Identyfikator zadania,
- Data uruchomienia.

**Lista może być filtrowana według kolumn:**
- Nazwa zadania.
- Identyfikator zadania,

**Widok listy harmonogramu zadań.**

![Widok listy harmonogramu zadań.](/img/Obrazy/Harmonogram_zadan.png)

## Monitor kolejek

Monitor kolejek przedstawia wszystkie zadania systemu Asiston, które zostały wykonane w tle.

**Monitor kolejek**

![Monitor kolejek](/img/Obrazy/Monitor_kolejek.png)

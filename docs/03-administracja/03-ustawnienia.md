---
title: "Ustawienia"
sidebar_label: "3.3 Ustawienia"
---

**Pozycja „Administracja/Ustawienia”, w menu systemu Asiston Produkcja, zawiera listę rozwijaną kolejnych pozycji:**
- Bezpieczeństwo,
- Poczta,
- Powiadomienia,
- Źródła LDAP,
- Ustawienia sesji,
- Paleta kolorów,
- Licencja.

## Bezpieczeństwo

**W zakładce „Bezpieczeństwo” administrator ustala konfigurację dotyczącą hasła i logowania. W systemie istnieje możliwość konfiguracji:**
- Minimalnej długości hasła
- Po ilu dniach użytkownik musi zmienić hasło
- Po ilu nieudanych próbach logowania konto zostanie zablokowane
- Czas trwania blokady
- Wymuszenia użycia znaków specjalnych w haśle

**Widok okna "Ustawienia/Bezpieczeństwo" w systemie Asiston Produkcja.**

![Widok okna "Ustawienia/Bezpieczeństwo" w systemie Asiston Produkcja.](/img/Obrazy/Bezpieczenstwo.png)

## Poczta

**Ustawienie poczty służy wprowadzeniu danych przydatnych do konfiguracji indywidualnego klienta pocztowego przez użytkownika. Dane obejmują:**
- Adres serwera hostingowego,
- Port serwera - pole obowiązkowe,
- Nazwę użytkownika,
- Hasło użytkownika,
- Nazwę nadawcy - pole obowiązkowe,
- E-mail nadawcy - pole obowiązkowe,
- Adres domenowy - pole obowiązkowe,

**Widok ustawień poczty umożliwia również:**
- Wybór bezpiecznego połączenia SSL,
- Walidację certyfikatu SSL
- przetestowanie prawidłowości ustawień dla wybranego adresu e-mail.

**Widok okna "Ustawienia/Poczta" w systemie Asiston Produkcja.**

![Widok okna "Ustawienia/Poczta" w systemie Asiston Produkcja.](/img/Obrazy/Poczta.png)

## Szablony powiadomień

**Pozycja „Ustawienia/Szablony powiadomień” służy do skonfigurowania szablonów powiadomień, które będą otrzymywali użytkownicy systemu Asiston Produkcja. Widok listy powiadomień ma kolumny:**
- Nazwa szablonu,
- Nazwa powiadomienia,
- Kategoria,
- Data utworzenia
- Akcje:
  - Edytuj
  - Usuń

**Listę powiadomień można filtrować wg następujących kryteriów:**
- Nazwa szablonu,
- Nazwa powiadomienia,
- Kategoria,
- Moje dokumenty.

Filtrowanie odbywa się przyciskiem z nazwą kryterium, po kliknięciu system wyświetla okno do wpisania wyrazu lub jego fragmentu i zwraca przefiltrowaną listę.

**Widok listy ustawionych powiadomień w systemie Asiston Produkcja.**

![Widok listy ustawionych powiadomień w systemie Asiston Produkcja.](/img/Obrazy/Szablony_powiadomien.png)

**W widoku listy, po kliknięciu przycisku ustawień, można również określić jakimi kanałami komunikacji można wysyłać powiadomienia do użytkowników. Do wyboru są:**
- Wiadomości mailowe,
- Microsoft Teams
- Powiadomienia push

Można również dodać stopkę oraz logo (dołączone z pliku), które będą w widoku powiadomienia.

**Widok powiadomień z ustawieniem kanałów komunikacji.**

![Widok powiadomień z ustawieniem kanałów komunikacji.](/img/Obrazy/Powiadomienia_kanaly.png)

**Widok szczegółów szablonu wyświetla następujące informacje o wybranym szablonie powiadomienia:**
- Nazwa – pole obowiązkowe,
- Kategoria – pole obowiązkowe,
- Typ powiadomienia – lista rozwijana, pole obowiązkowe,
- Stan powiadomienia:
  - Włączone
  - Wymagane
  - Pokaż w koncie użytkownika - szablon będzie pokazywany na koncie użytkownika, w pozycji „Moje konto/Powiadomienia”, (punkt „6.3. Powiadomienia”)
- Aktywne kanały komunikacji z użytkownikiem
- Aktualna konfiguracja sposobu powiadamiania o:
  - historii aktywności użytkownika
  - sposobie wysyłania wiadomości błyskawicznych
  - sposobie wysyłania wiadomości mailowych

Wyświetla również klucze dla danego typu powiadomienia oraz informacje o wersji i  statusie dokumentu.

**Widok szczegółów szablonu powiadomień.**

![Widok szczegółów szablonu powiadomień.](/img/Obrazy/Szablon_szczegoly.png)

Nowy szablon dodawany będzie przyciskiem „Dodaj szablon”, w widoku listy powiadomień. 
**Formularz dodawania zwraca do wypełnienia następujące pola obowiązkowe:**
- Nazwa,
- Kategoria
- Typ powiadomienia

**W widoku formularza dodawania można też od razu wybrać stan powiadomienia:**
- Włączone
- Wymagane
- Pokaż w koncie użytkownika - szablon będzie pokazywany na koncie użytkownika, w pozycji „Moje konto/Powiadomienia”

Widok formularza dodawania wyświetla również klucze dla danego typu powiadomienia oraz informacje o wersji i  statusie dokumentu.

**Widok dodawania szablonu powiadomień.**

![Widok dodawania szablonu powiadomień.](/img/Obrazy/Dodawanie_powiadomien.png)

## Ustawienia powiadomień PUSH

Pozycja „Ustawienia/Ustawienia powiadomień PUSH” służy do skonfigurowania aplikacji, aby możliwa było otrzymywanie na urządzeniach powiadomień PUSH. 
**W tym celu należy założyć konto na stronie https://dashboard.onesignal.com, a następnie skopiować i uzupełnić w Asiston Produkcja pola takie jak:**
- Host
- Token
- Api key
- Domena dla powiadomień

**Ustawienia powiadomień PUSH**

![Ustawienia powiadomień PUSH](/img/Obrazy/Ustawienia_PUSH.png)

## Źródła LDAP

LDAP – po angielsku Lightweight Directory Access Protocol to protokół przeznaczony do korzystania z obiektowych baz danych reprezentujących użytkowników sieci oraz inne zasoby. 
Istnieje wiele implementacji protokołu LDAP. 
Najbardziej popularnym z nich jest Active Directory firmy Microsoft.

System Asiston Produkcja wykorzystuje serwery LDAP w celu autoryzacji użytkowników systemu. 
Dzięki temu zarządzanie hasłami użytkowników znajduje się w jednym, centralnym punkcie.

**Lista źródeł LDAP, w systemie Asiston Produkcja, zawiera kolumny:**
- Nazwa źródła,
- Host,
- Domena,
- Login.

**Lista może być:**
- Sortowana rosnąco lub malejąco wg zawartości każdej kolumny – po kliknięciu nazwy kolumny odpowiednią ilość razy, do uzyskania oczekiwanej, posortowanej listy.
- Filtrowana wg frazy, która może występować w którejś z kolumn.

**Widok listy źródeł LDAP, w systemie Asiston Produkcja.**

![Widok listy źródeł LDAP, w systemie Asiston Produkcja.](/img/Obrazy/Lista_LDAP.png)

Dodawanie źródła LDAP obsługiwane będzie przyciskiem „Dodaj źródło” oraz formularzem dodawania. 
**W formularzu są następujące pola obowiązkowe:**
- Nazwa,
- Host,
- Port,
- Domena,
- Nazwa użytkownika,
- Hasło,
- Root,
- Filtry dla synchronizacji użytkowników – jeśli pole jest puste, to używana jest wartość domyślna,
- Filtry dla synchronizacji działów – jeśli pole jest puste, to używana jest wartość domyślna.

**W nowym źródle obowiązkowo należy również wybrać typ logowania (przycisk typu „radio buton”):**
- „domena/użytkownik”,
- „użytkownik@domena”.

**Używając checkboxów wybierzemy:**
- Opcję „utwórz grupy”,
- LDAPS (LDAP over SSL),
- Źródło aktywne.

**Widok formularza dodawania źródła LDAP, w systemie Asiston Produkcja.**

![Widok formularza dodawania źródła LDAP, w systemie Asiston Produkcja.](/img/Obrazy/Dodawanie_LDAP.png)

## Paleta kolorów

**Po zainstalowaniu, system Asiston Produkcja wyświetla się w domyślnych kolorach, które można zmienić, wybierając:**
- Zestaw kolorów wyświetlania z predefiniowanej palety,
- Jeden z predefiniowanych kolorów dla menu systemu (jasny lub ciemny) oraz:
  - Kolor tła – domyślny lub z palety dostępnej po kliknięciu obszaru danego pola,
  - Kolor tekstu - domyślny lub z palety,
  - Kolor podświetlenia aktywnej pozycji w menu - domyślny lub z palety,
  - Kolor tekstu aktywnej pozycji menu - domyślny lub z palety.

**Widok ustawień palety kolorów wyświetlania, w systemie Asiston Produkcja.**

![Widok ustawień palety kolorów wyświetlania, w systemie Asiston Produkcja.](/img/Obrazy/Paleta_kolorow.png)

## Licencja

Okno „Ustawienia/Licencja” wyświetla pole licencji użytkownika z indywidualnym tokenem, potwierdzającym uprawnienia użytkownika do pracy w systemie Asiston Produkcja.

**Widok okna "Ustawienia/Licencja".**

![Widok okna "Ustawienia/Licencja".](/img/Obrazy/Licencja.png)


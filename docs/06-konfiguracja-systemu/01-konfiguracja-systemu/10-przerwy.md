---
title: "Przerwy"
sidebar_label: "6.1.10. Przerwy"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Moduł Przerwy służy do definiowania powodów przerw w systemie Asiston Produkcja. 

Po wejściu w zakładkę widzimy zestawienie w postaci tabelki wszystkich zdefiniowanych przerw w systemie. 
Widok listy zawiera informacje:
	-	nazwa przerwy,
	-	czas trwania,
	-	jednostka czasu,
	-	czy zadanie jest aktywne/nieaktywne,
	-	akcje: 
		-	edytuj,
		-	usuń.

**Widok listy z przerwami.**

![Widok listy z przerwami.](/img/Obrazy/Przerwy_lista.png)

Nad tabelką po prawej stronie przycisk „Dodaj przerwę”. 
Po kliknięciu pojawi się formularz do uzupełnienia.

Widok zawiera następujące pola do uzupełniania:
	-	Nazwa przerwy – pole tekstowe od uzupełniania,
	-	Aktywne – lista rozwija zawierająca wartości „TAK/NIE”. Zaznaczenie opcji „NIE” wykluczy zadanie z listy dostępnych, opcja „TAK” oznacza, że przerwa może zostać wykorzystane podczas pracy.
	-	Czas trwania przerwy – pole liczbowe do uzupełnienia, określamy czas jednostkowy dla danej przerwy,
	-	Opis – pole tekstowe do uzupełniania, miejsce na załączenie słownego opisu,
	-	Automatyczne przypomnienie - lista rozwija zawierająca wartości[TK26.1] „TAK/NIE”. Zaznaczenie opcji „TAK” włączy funkcje przypomnienia dla danej przerwy w postaci dodatkowego komunikatu wyświetlanego operatorowi,
	-	Czas rozpoczęcia przerwy – pole pozwalające na wskazanie dokładnej godziny, o której przerwa ma się rozpocząć,
	-	Ile minut przed przerwą wysłać powiadomienie? - pole, w którym definiujemy, na ile minut przed faktycznym rozpoczęciem przerwy system ma wyświetlić komunikat w panelu operatora.

**Widok formularza dodawania nowego przerwy.**

![Widok formularza dodawania nowego przerwy.](/img/Obrazy/Przerwy_dodawanie.png)

<ZapiszZmiany />
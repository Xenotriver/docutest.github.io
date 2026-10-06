---
title: "Operacje"
sidebar_label: "6.1.12. Operacje"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Zakładka Operacje w części Konfiguracja służy do definicji operacji, które używane będą do tworzenia receptur oraz do planowania harmonogramu produkcji.

Po wejściu w zakładkę pojawi się tabelka, a w niej lista zdefiniowanych operacji. 

Tabela z listą operacji zawiera informacje:
	-	nazwa operacji,
	-	symbol operacji,
	-	czas jednostkowy,
	-	czas TPZ,
	-	akcje:
		-	Edytuj,
		-	Usuń.

**Lista zdefiniowanych operacji.**

![Lista zdefiniowanych operacji.](/img/Obrazy/Operacje_lista.png)

Nad tabelką znajduje się przycisk „Dodaj operację”. 
Po kliknięciu w przycisk, pojawi się formularz do zdefiniowania nowej operacji. 
Aby utworzyć nową operację uzupełniamy informacje:
	-	symbol operacji - pole tekstowe do wpisania symbolu operacji,
	-	czy operacja jest aktywna – tak/nie 
	-	nazwa operacji - pole tekstowe do uzupełnienia,
	-	czas jednostkowy - pole liczbowe do wpisania czasu trwania operacji,
	-	jednostka czasu dla czasu jednostkowego – pole z listą rozwijaną,
	-	czas TPZ (czas przygotowawczo-zakończeniowy) - pole liczbowe do wpisania czasu TPZ dla operacji,
	-	jednostka czasu dla czasu TPZ - pole z listą rozwijaną,
	-	wybór stanowiska, do którego przypisana jest operacja,
	-	wybór grupy maszyn przypisanych do wykonania operacji,
	-	wybór planu kontroli,
	-	Niepodzielny czas jednostkowy – checkbox do zaznaczenia, jeżeli praca przy danej operacji technologicznej nie może być przerwana i musi być wykonana ciągiem.
	-	Planuj po pierwszej sztuce – opcja dotycząca układania planu produkcyjnego
	-	Współbieżność – dopuszczalne operacje biegnące równolegle do siebie
	-	Stały czas – czas nie podlega zmianie
	-	Niezależna

**Widok formularza dodawania nowej operacji.**

![Widok formularza dodawania nowej operacji.](/img/Obrazy/Operacje_dodawanie.png)

<ZapiszZmiany />
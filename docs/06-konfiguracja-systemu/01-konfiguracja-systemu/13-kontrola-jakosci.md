---
title: "Kontrola jakości"
sidebar_label: "6.1.13. Kontrola jakości"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Po wejściu w zakładkę Plany kontroli jakości widzimy listę utworzonych planów kontroli. 
**Zawiera ona informacje:**
	-	nazwa planu kontroli,
	-	symbol planu kontroli,
	-	czy plan kontroli jest aktywny/nieaktywny,
	-	kolumna akcji:
		-	edytuj,
		-	usuń.

**Lista planów kontroli jakości.**

![Lista planów kontroli jakości.](/img/Obrazy/Kontrola_jakosci_lista.png)

Nad tabelą znajduje się przycisk "Dodaj plan". 
Po kliknięciu pojawi się formularz do utworzenia planu.

**Aby dodać plan uzupełniamy:**
	-	nazwę planu kontroli - pole tekstowe do uzupełniania,
	-	czy plan aktywny – tak/nie
	-	symbol planu kontroli - pole tekstowe do uzupełnienia,
	-	osoba zatwierdzająca - lista rozwijana zawierająca wszystkich użytkowników znajdujących się w systemie, w tym miejscu możliwe jest wybranie zatwierdzającego plan kontroli,
	-	typ kontroli jakości:
		-	kontrola wstępna - kontrola powinna być zrealizowana przed rozpoczęciem danej operacji, dotyczy ona surowców potrzebnych do produkcji lub półproduktu wytworzonego w ramach innych procesów, 
		-	kontrola bieżąca - kontrola realizowana w trakcie trwania danej operacji, wstępnie kontrole będzie można realizować po jej zaraportowaniu,
		-	kontrola końcowa - kontrola staje się aktywna po zrealizowaniu całej operacji, 
	-	rodzaj kontroli:
		-	Ilość do kontroli – ile sztuk powinno zostać poddanych kontroli, 
		-	Procent do kontroli - ile % produktów powinno zostać poddanych kontroli,
		-	Co ile sztuk ma się odbyć kontrola - co ile sztuk zaraportowanego wyrobu pojawia się kontrola do wykonania,
		-	Co jaki procent produkcji ma się odbyć kontrola.

**Widok formularza dodawania planu kontroli jakości.**

![Widok formularza dodawania planu kontroli jakości.](/img/Obrazy/Kontrola_jakosci_dodawanie.png)

Obok dostępnych typów kontroli znajdują się checkboxy, po ich zaznaczeniu uaktywniają się pola zawierające listy rozwijane. 
Następnie znajdują się pola do wpisania odpowiedniej wartości. 
Kolumna „Parametry” zawiera pola z listami rozwijalnymi, z której użytkownik wybiera jakie predefiniowane parametry będą brane pod uwagę podczas danej kontroli. 
Istnieje możliwość wyboru nieograniczonej liczby parametrów.  

Poniżej znajduje się też checkbox umożliwiający zbiorcze dodanie parametrów kontroli jakości do wszystkich wybranych typów kontroli. 
Po wybraniu odpowiednich parametrów i zapisaniu konfiguracji, pozycje automatycznie zostaną dodane do kolumny „Parametry”. 

<ZapiszZmiany />

Możliwe jest późniejsze edytowanie ustawień w szczegółach planu kontroli jakości. 
**Użytkownik będzie miał możliwość zmiany:**
	-	nazwy,
	-	symbolu,
	-	osoby zatwierdzającej,
	-	aktywności planu.

**Po naciśnięciu przycisku Parametry kontroli jakości widzimy listę zdefiniowanych parametrów w systemie, lista zawiera informacje:**
	-	nazwa parametru,
	-	typ parametru,
	-	akcje:
		-	edytuj,
		-	usuń.

**Lista zdefiniowanych parametrów kontroli jakości.**

![Lista zdefiniowanych parametrów kontroli jakości.](/img/Obrazy/Parametry_KJ_lista.png)

Aby zdefiniować nowy parametr klikamy w przycisk nad tabelą "Dodaj parametr". 
**Po kliknięciu pojawi się formularz dodawania nowego parametru, należy uzupełnić informacje:**
	-	nazwa parametru - pole tekstowe do uzupełniania,
	-	typ parametru - do wyboru określamy jakiego typu jest dany parametr:
		-	typ tekstowy – pole testowe z możliwością wpisania wartości,
		-	typ liczbowy - pole liczbowe do uzupełnienia, do wskazania wartość minimalna, nominalna, maksymalna oraz jednostka miary,
		-	Tak/Nie – potwierdzenie zgodności parametru na zasadzie: TAK/ NIE,
		-	Tak/Nie + wartość - lista rozwijana z możliwością wybrania wartości oraz lista rozwijana z możliwością wybrania dodatkowego typu parametru,
		-	lista rozwijana – lista rozwijana z możliwością wybrania wartości. Po wybraniu tej opcji pojawi się pole z możliwością wpisania pozycji, która następnie zostanie wyświetlona na liście. 
		
**Widok formularza dodawania parametrów kontroli jakości.**

![Widok formularza dodawania parametrów kontroli jakości.](/img/Obrazy/Parametry_KJ_dodawanie.png)

<ZapiszZmiany />
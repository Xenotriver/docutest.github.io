---
title: "Maszyny"
sidebar_label: "6.1.7. Maszyny"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Zakładka Maszyny to zestaw danych o wszystkich maszynach używanych do produkcji. 
Tabela przedstawia informacje: 
	-	Nazwa maszyny,
	-	Symbol maszyny,
	-	Grupa maszyn,
	-	Najbliższy termin przeglądu,
	-	Czy maszyna jest aktywna,
	-	Akcje: 
		-	Edytuj,
		-	Usuń.

**Widok zawierający listę maszyn w systemie.**

![Widok zawierający listę maszyn w systemie.](/img/Obrazy/Maszyny_lista.png)

Nad tabelką znajduje się przycisk „Dodaj maszynę”, po jego kliknięciu pojawia się formularz do dodania nowej maszyny.

W tej sekcji określamy podstawowe informacje o maszynie:

	-	Aktywna – lista rozwija zawierająca wartości „TAK/NIE”. Zaznaczenie opcji „NIE” wykluczy maszynę z planowania, opcja „TAK” oznacza gotowość maszyny do pracy.
	-	Nazwa maszyny - pole tekstowe do uzupełnienia.
	-	Symbol - pole tekstowe do uzupełnienia.
	-	Grupy maszyn - do wyboru z listy rozwijalnej grup maszyn.
	-	Producent – pole tekstowe do uzupełnienia.
	-	Numer seryjny maszyny – pole tekstowe do uzupełniania.
	-	Czy maszyna podlega gwarancji – checkbox - jeśli użytkownik zaznaczy daną opcję, odblokowane zostanie pole, w którym będzie miał możliwość określenia terminu zakończenia okresu gwarancyjnego.
	-	Termin okresu gwarancyjnego – do wyboru w kalendarzu data zakończenia gwarancji na daną maszynę.
	-	Czy maszyna podlega przeglądowi - checkbox - jeśli użytkownik zaznaczy daną opcję, odblokowane zostanie pole, w którym będzie miał możliwość określenia terminu kolejnego przeglądu.
	-	Data przeglądu - do wyboru w kalendarzu data przeglądu maszyny.
	-	Czy przegląd jest cykliczny - checkbox - jeśli użytkownik zaznaczy daną opcję, odblokowane zostanie pole, w którym będzie miał możliwość określenia cykliczności przeglądu.
	-	Cykliczność:
		-	Dzień – lista rozwijana, na której znajdują się wartości od 1 do 100,
		-	Format – lista rozwijana, na której użytkownik ma możliwość wyboru przedziału czasu, tj. dzień, miesiąc, rok.
	-	Załącznik – miejsce do wczytania pliku.
	-	Opis – pole tekstowe do uzupełnienia opisu maszyny.
	-	Średnia wydajność maszyny – pole określa ile elementów w wybranej jednostce czasu jest w stanie obrobić dana maszyna. 
	-	Jednostka miary – jednostka, w jakiej wyrażona jest wydajność maszyny.
	-	Koszt pracy maszyny – pole określa koszt pracy maszyny w ciągu jednej godziny.
	
Wszystkie zmiany należy zapisać przyciskiem „Zapisz” lub „Zapisz i wróć”. 

**Widok formularza dodawania maszyny.**

![Widok formularza dodawania maszyny.](/img/Obrazy/Maszyny_dodawanie.png)

W rogu znajduje się przycisk „Grupy maszyn”, który umożliwia przejście do listy z dodanymi grupami maszyn. 

Grupa maszyn agreguje maszyny pod względem logistyczno-organizacyjnym. 
W zakładce znajdują się grupy maszyn potrzebne do realizacji produkcji.

Widokiem zakładki jest tabela zawierająca kolumny dotyczące:
	-	Nazwy,
	-	Akcje:
		-	Edytuj,
		-	Usuń.

Możliwe jest filtrowanie tabeli na podstawie nazwy grupy. 

**Widok listy grup maszyn.**

![Widok listy grup maszyn.](/img/Obrazy/Maszyny_grupy.png)

Nad tabelą z prawej strony znajduje się przycisk „Dodaj grupę”. 
Po jego kliknięciu, wyświetli się widok definiowania nowej grupy maszyn. 
Formularz dodawania grupy zawiera pole, w którym należy wpisać nazwę nowej grupy.

**Widok formularza dodawania grupy maszyn.**

![Widok formularza dodawania grupy maszyn.](/img/Obrazy/Maszyny_grupy_dodawanie.png)

<ZapiszZmiany />


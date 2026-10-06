---
title: "Drukarki"
sidebar_label: "6.1.3. Drukarki"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Konfiguracja drukarek służy:
	a)	Udostępnieniu ich dla użytkowników w systemie Asiston,
	b)	Określeniu sposobu ich wykorzystania (np. drukowanie dokumentów lub etykiet z kodami).
	
Po przejściu do konfiguracji drukarek („Konfiguracja Ogólne/Drukarki”) użytkownik otrzyma listę skonfigurowanych już drukarek. Pełny zestaw kolumn, w widoku listy, obejmuje następujące dane:
	-	Nazwa,
	-	Opis,
	-	Rodzaj,
	-	Typ,
	-	Szerokość,
	-	Wysokość ,
	-	DPI,
	-	Akcje:
		-	Edytuj
		-	Usuń  

Lista może być filtrowana wg:
	-	Nazwy,
	-	Typu – wybór predefiniowanych typów słownikowych z listy rozwijanej,
	-	Rodzaju – także wybór z listy rozwijanej predefiniowanych typów słownikowych.
	
**Widok listy drukarek w systemie Asiston**

![Widok listy drukarek w systemie Asiston](/img/Obrazy/Drukarki_lista.png)

Nową drukarkę do listy będzie można dodać przyciskiem „Dodaj drukarkę”. 
Użycie przycisku zwraca widok, w którym należy określić:
	-	Nazwę drukarki – pole wymagane 
	-	Opis 
	-	Rodzaj – pole wymagane
		-	Globalne – dla wszystkich użytkowników 
		-	Użytkownika – dla konkretnego użytkownika 
	-	Typ – pole wymagane
		-	Zebra bezprzewodowa – po wybraniu tego typu, pojawią dodatkowe opcje do uzupełnienia:
			-	Nazwa – pole wymagane
			-	Adres IP – pole wymagane 
			-	Port – pole wymagane 
			-	Szerokość strony – pole wymagane 
			-	Wysokość strony – pole wymagane 
			-	DPI – pole wymagane
		-	Windows – po wybraniu tego typu, pojawią dodatkowe opcje do uzupełnienia:
			-	Nazwa – pole wymagane
			-	Szerokość strony – pole wymagane 
			-	Wysokość strony – pole wymagane 
		-	PDF – po wybraniu tego typu, pojawią dodatkowe opcje do uzupełnienia:
			-	Szerokość strony – pole wymagane 
			-	Wysokość strony – pole wymagane 

System Asiston będzie również obsługiwał dodawanie drukarek, dostępnych w sieci. 
W tym celu należy użyć przycisku „Wyszukaj drukarkę w sieci”. System – w sekcji poniżej - zwróci listę znalezionych drukarek do wyboru. 
Aby drukarka działała prawidłowo, powinna być zainstalowana na serwerze.

**Widok dodawania drukarki w systemie Asiston**

![Widok dodawania drukarki w systemie Asiston](/img/Obrazy/Drukarki_dodawanie.png)

Z widoku listy drukarek można będzie wejść do szczegółów wybranej drukarki. 
Widok szczegółów będzie zwracał pola jak w formularzu dodawania drukarki oraz sekcję „Drukowanie etykiety na urządzeniu”, do wyboru rodzajów etykiet, które będą mogły być drukowane na wybranym urządzeniu. 

Zestaw rodzajów etykiet do wyboru:

|Drukowanie etykiety na urządzeniu|Wł./Wył.|
|---|---|
|Etykiera produktu|Wł./Wył.|
|Przewodnik produkcyjny|Wł./Wył.|

Wszystkie pola, widoczne, w szczegółach drukarki, będą edytowalne, można zmieniać ich zawartość. 

<ZapiszZmiany /> 
		
**Widok szczegółów drukarki, w systemie Asiston**

![Widok szczegółów drukarki, w systemie Asiston](/img/Obrazy/Drukarki_szczegoly.png)
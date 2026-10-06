---
title: "Panel Operatora"
sidebar_label: "6.7. Panel Operatora"
---

Moduł ten opisuje funkcjonalności przeznaczone dla operatora produkcji związane z realizacją procesu produkcyjnego, rozliczaniem produkcji, zgłaszaniem awarii i kontrolą jakości.

**Panel operatora to moduł, w którym możliwe jest:**
-	Przeglądanie operacji przypisanych do operatora,
-	Przeglądanie operacji w trakcie realizacji, jak również rozliczenie wyrobów gotowych, półproduktów, surowców, odpadów,
-	Przeprowadzanie kontroli jakości,
-	Zgłaszanie awarii maszyn,
-	Realizacja i dodawanie zadań okołoprodukcyjnych,
-	Odnotowanie przerwy.

**Na widok panelu operatora składa się:**
-	Moje operacje,
-	Realizowane,
-	Kontrola jakości,
-	Awarie,
-	Zadania okołoprodukcyjne,
-	Przerwa.

**Widok panelu operatora**

![Widok panelu operatora](/img/Obrazy/Panel_operatora_widok.png)

### Moje operacje w panelu operatora

W zakładce moje operacji użytkownik ma podgląd na wszystkie operacje przypisane do naszego stanowiska.

**Lista składa się z następujących kolumn:**
-	Typ operacji,
-	Zlecenie,
-	Operacja,
-	Maszyna,
-	Produkt wyjściowy,
-	Termin(do),
-	Status,
-	Postęp realizacji,
-	Akcje:
	-	Realizuj,
	-	Pokaż szczegóły.

**Lista moje operacje**

![Lista moje operacje](/img/Obrazy/Panel_operatora_moje_operacje.png)

Klikając „Realizuj” rozpoczynamy realizacje operacji, operacja ta pojawia się w „Realizowane”.

### Realizowane w panelu operatora

W zakładce realizowane widzimy listę wszystkie rozpoczętych przez nas operacji.

**Lista składa się z:**
-	Typ operacji,
-	Zlecenie,
-	Maszyna,
-	Produkt wyjściowy,
-	Termin(do),
-	Status,
-	Postęp realizacji,
-	Akcje:
	-	Realizuj,
	-	Pokaż szczegóły.

**Lista rozpoczętych operacji**

![Lista rozpoczętych operacji](/img/Obrazy/Panel_operatora_realizowane.png)

**Przechodząc do szczegółów operacji widzimy:**
-	Numer zlecenia,
-	Status,
-	Pasek postępu,
-	Opis i dodatkowe uwagi,
-	Załączniki,
-	Sekcje składniki:
	-	Pobierz składniki,
	-	Rozlicz odpady,
	-	Rozlicz wyroby,
-	Sekcje kontrola jakości:
	-	Czynności kontrolne do wykonania,
-	Sekcje dane podstawowe:
	-	Podstawowe informacje o zleceniu,
	-	Data utworzenia,
	-	Numer zlecenia,
	-	Operacja,
	-	Maszyna,
	-	Wyrób gotowy,
	-	Ilość,
	-	Termin realizacji,
	-	Opis i dodatkowe uwagi,
-	Przyciski funkcyjne:
	-	Powrót – pozwala na cofnięcie do listy operacji,
	-	Zatrzymaj – powoduje zatrzymanie realizacji operacji w systemie,
	-	Drukuj PDF – umożliwia wydruk karty operacji, która zawiera poniższe informacje związane z operacją:
		-	Numer zlecenia produkcyjnego,
		-	Operacja,
		-	Maszyna,
		-	Produkt wyjściowy,
		-	Opis operacji,
		-	Listy składników, odpadów oraz wyrobu gotowego:
			-	Towar,
			-	Symbol,
			-	Ilość,
		-	Wydruk załącznika,
		-	Rozlicz produkcję.

**Panel operatora - szczegóły operacji**

![Panel operatora - szczegóły operacji](/img/Obrazy/Panel_operatora_realizowane_szczegoly.png)

**Panel operatora - wydruk karty operacji**

![Panel operatora - wydruk karty operacji](/img/Obrazy/Panel_operatora_karta_operacji.png)

#### Pobierz surowce

Po kliknięciu pobierz surowce otwiera się okno gdzie potwierdzamy ilości, które pobiera do produkcji - operator może pobrać składniki zarówno na całą produkcję, jak również na część. 
Sposób integracji związanej z dokumentami tworzonymi w systemie ERP określony jest w konfiguracji.

**Pobieranie surowców do operacji**

![Pobieranie surowców do operacji](/img/Obrazy/Panel_operatora_poberanie_skladnikow.png)

**Pobierając składniki operator ma możliwość pobrać:**
-	w częściach – wskazując ilość składników potrzebną do wyprodukowania określonej ilości wyrobów. Wówczas w systemie ERP zostaną wygenerowane dokumenty RW na składniki, które zostały zużyte w tej partii oraz PW na produkty wyjściowe w ilości, jakiej zostanie wskazane. W ERP zostanie dodane przyjęcie na magazyn produkcyjny.
-	w całości – wówczas w systemie ERP wygenerują się dokumenty RW na wszystkie składniki pobrane do realizacji tego zadania oraz PW na całkowitą ilość produktu wyjściowego, w ERP zostanie dodane przyjęcie na magazyn produkcyjny.

#### Rozlicz odpady

Poprzez przycisk rozlicz odpady operator ma możliwość rozliczenia odpadów i zwrotów powstałych w trakcie produkcji. 
Na liście system wskazuje produkty, które zostały określone w recepturze jako odpad lub zwrot. 
Operator podaje ilości przy pozycjach i zatwierdza. 
Po zatwierdzeniu utworzy się PW na odpady/zwroty w ilości, jakiej zostanie wskazane i w ERP zostanie dodane przyjęcie na odpowiednią lokalizację.

**Rozliczenie odpadów z operacji**

![Rozliczenie odpadów z operacji](/img/Obrazy/Panel_operatora_rozliczanie_odpadow.png)

#### Rozlicz wyroby

**Rozliczając wyroby operator ma możliwość rozliczyć:**
-	w częściach – wskazując ilość wyprodukowanych sztuk. Wówczas w systemie ERP zostaną wygenerowane dokumenty RW na składniki zużyte do wyprodukowania określonej części wyrobów gotowych oraz PW na produkty wyjściowe w ilości, jaka zostanie wskazana. W ERP zostanie dodane przyjęcie na magazyn określony w konfiguracji.
-	w całości – wówczas w systemie ERP wygenerują się dokumenty RW na wszystkie składniki pobrane do realizacji tego zadania oraz PW na całkowitą ilość produktu wyjściowego, w ERP zostanie dodane przyjęcie na magazyn produkcyjny.

Rozliczenia odbywają się według konfiguracji: Konfiguracja / Procesy / Zlecenia produkcyjne - Pozycja: „Rozliczanie wyrobu gotowego”.

Jeżeli operacja zostanie zrealizowana w całości, zostanie ona zamknięta, a operator będzie miał możliwość rozpoczęcia kolejnego zadania w panelu operatora.

Jeżeli po zakończonej operacji była zaplanowana operacja „następująca”, w panelu operatora pojawi się zadanie dla kolejnego pracownika produkcji, który jest przypisany do kolejnej operacji.

Operacja w konfiguracji może zostać oznaczona do planowania po pierwszej sztuce. 
Wówczas, jeżeli zostanie rozliczona przynajmniej jedna sztuka na danej operacji, to inny operator może rozpocząć realizację zadania bez czekania na wyprodukowanie całości.

W momencie rozliczenia wszystkich operacji, nastąpi zakończenie zlecenia produkcyjnego. 
Gdy wszystkie operacje zostaną zrealizowane, zlecenie produkcyjne przyjmie status „Zakończone”.

**Rozliczenie wyrobów z operacji**

![Rozliczenie wyrobów z operacji](/img/Obrazy/Panel_operatora_rozliczanie_wyrobow.png)

### Kontrola jakości w panelu operatora

W panelu operatora po kliknięciu kafelka kontroli jakości widzimy listę zawierającą wszystkie czynności kontrolne, które należy przeprowadzić w ramach danego zlecenia produkcyjnego.

**Lista zawiera następujące informacje:**
-	Operacja,
-	Numer zlecenia,
-	Nazwa kontroli,
-	Typ kontroli,
-	Status,
-	Postęp realizacji,
-	Akcje:
	-	Realizuj.

**Panel operatora - kontrola jakości**

![Panel operatora - kontrola jakości](/img/Obrazy/Panel_operatora_kontrola_jakosci.png)

Realizując daną kontrolę postępujemy według wcześniej zdefiniowanego planu kontroli jakości, który został przypisany w recepturze produkcji.

**Po kliknięciu realizuj wyświetla się okno z podglądem stanu realizacji kontroli oraz szczegółami:**
-	Dane podstawowe:
	-	Typ kontroli,
	-	Numer zlecenia,
	-	Operacja.

**Kliknięcie przycisku kontroluj rozwija okno o następujące elementy:**
-	Lista rozwijana z wyborem produktu,
-	Pole z numerem seryjnym/partią oraz szczegółami kontroli,
-	Sekcja z parametrami kontroli wyszczególnionymi w konfiguracji planu kontroli jakości.

Po zapisaniu okna zapisują się również podane parametry kontrolne.

**Okno kontroli jakości**

![Okno kontroli jakości](/img/Obrazy/Panel_operatora_kontrola_jakosci_okno.png)

Po wykonaniu wszystkich czynności kontrolnych status kontroli z „W trakcie realizacji” zmieni się na „Zakończona”.

**Widok czynności kontrolnych w szczegółach operacji**

![Widok czynności kontrolnych w szczegółach operacji](/img/Obrazy/Panel_operatora_kontrola_jakosci_czynnosci.png)

### Awarie w panelu operatora

**Operator ma możliwość zgłoszenia awarii maszyny na każdym etapie produkcji. Aby to zrobić musi wejść w panel "Awarie", gdzie pokaże mu się formularz do uzupełnienia, zawiera on:**
-	Maszyna,
-	Rodzaj,
-	Opis.

**Panel operatora - zgłoszenie awarii**

![Panel operatora - zgłoszenie awarii](/img/Obrazy/Panel_operatora_awarie.png)

Zgłoszona awaria pojawi się na liście w module Zarządzanie awariami.

### Zadania okołoprodukcyjne w panelu operatora

**Po przejściu do zadań okołoprodukcyjnych pracownik widzi listę zadań, które zostały dodane przez osobę uprawnioną. Na liście widzimy:**
-	Zadanie,
-	Czas na realizację,
-	Okno z podglądem realizacji zadania z licznikiem czasu i przyciskiem do rozpoczęcia zadania i zakończenia.

W pierwszej kolejności użytkownik wybiera z listy po lewej stronie zadanie, które będzie realizował.

**Następnie w widoku po prawej pojawią mu się podstawowe informacje o danym zadaniu:**
-	status,
-	czas na zadanie – zakładany czas na realizację zadania, ustalony przez administratora podczas konfiguracji zadania,
-	pozostało – wyświetlany po rozpoczęciu realizacji zadania, pokazuje różnicę pomiędzy czasem na zadanie a czasem rzeczywistym realizacji zadania.

Poniżej danych podstawowych znajduje się zegar odliczający czas od rozpoczęcia realizacji zadania. 
Pod nim jest przycisk "Rozpocznij zadanie", po którego naciśnięciu rozpoczyna się realizacja zadania, rusza zegar odmierzający czas. 
Poniżej zegara znajduje się opis, dodany podczas konfiguracji zadania.

Następnie przycisk ten zmienia się na "Zatrzymaj zadanie", co umożliwia zakończenie realizacji zadania okołoprodukcyjnego. 
Czas realizacji zadania zostaje zatrzymany a dane o zadaniu trafiają na listę zadań okołoprodukcyjnych w module „Zadania okołoprodukcyjne”.

**Panel operatora - Zadania okołoprodukcyjne**

![Panel operatora - Zadania okołoprodukcyjne](/img/Obrazy/Panel_operatora_zadania_okoloprodukcyjne.png)

### Przerwy w panelu operatora

**Przerwę operator może zgłosić na każdym etapie produkcji. Po wejściu w panel "Przerwy" wybiera z listy po lewej stronie powód przerwy. Po prawej stronie pokażą się podstawowe informacje, takie jak:**
-	status,
-	czas na zadanie – predefiniowany przed administratora podczas konfiguracji przerwy,
-	pozostało – czas pozostały na przerwę, jest to różnica pomiędzy czasem na zadanie a rzeczywistym czasem przerwy.

Poniżej znajduje się czas trwania przerwy oraz przycisk "Rozpocznij", który rozpoczyna realizację przerwy. 
Po rozpoczęciu rusza zegar a przycisk zmienia się na "Zakończ".

**Panel operatora - przerwy**

![Panel operatora - przerwy](/img/Obrazy/Panel_operatora_przerwa.png)

Jeżeli w konfiguracji systemu zdefiniowano automatyczne powiadomienie dla danej przerwy, w panelu operatora o ustalonej godzinie (uwzględniającej czas wyprzedzenia) wyświetli się okno z przypomnieniem.

**Okno powiadomienia zawiera:**
-	licznik czasu: wyświetla dynamicznie odliczany czas do rozpoczęcia przerwy,
-	przycisk „Przejdź do widoku przerw”: kliknięcie przycisku przekierowuje operatora bezpośrednio do ekranu „Przerwy”, umożliwiając szybkie rozpoczęcie rejestracji przerwy w systemie,
-	opcje zamknięcia: operator ma możliwość zamknięcia powiadomienia i kontynuowania pracy do momentu faktycznego rozpoczęcia przerwy.

**Panel operatora przypomnienie o przerwie**

![Panel operatora przypomnienie o przerwie](/img/Obrazy/Panel_operatora_przerwy_przypomnienie.png)

### Skaner w panelu operatora

Funkcjonalność ta automatyzuje proces nawigacji w panelu operatora. 
Operator, zamiast ręcznie przeszukiwać listę zadań, ma możliwość zeskanowania kodu surowca lub wyrobu gotowego. 
Po zeskanowaniu system automatycznie przeniesie go do właściwego ekranu rozliczeń (pobrania materiału lub przyjęcia wyrobu).

**Skanowanie surowca:**
-	system identyfikuje pierwszą dostępną operację przypisaną do operatora, w której zeskanowany towar występuje jako składnik,
-	operacja zostaje automatycznie rozpoczęta,
-	system przenosi operatora bezpośrednio do widoku pobierania surowców.

**Skanowanie produktu finalnego:**
-	system identyfikuje operację, w której zeskanowany towar jest produktem wyjściowym,
-	system przenosi użytkownika bezpośrednio do widoku rozliczania wyrobów.

W przypadku, gdy ten sam produkt występuje w dostępnych zadaniach jednocześnie jako surowiec (w jednej operacji) i jako produkt finalny (w innej), system wstrzymuje automatyczne przejście i wyświetla komunikat informujący o niejednoznaczności. 
Jeżeli system nie znajdzie żadnej operacji powiązanej z wprowadzonym kodem, wyświetlony zostanie komunikat: „Nie odnaleziono pasującej operacji”.

**Panel operatora okno skanowania**

![Panel operatora okno skanowania](/img/Obrazy/Panel_operatora_skaner.png)
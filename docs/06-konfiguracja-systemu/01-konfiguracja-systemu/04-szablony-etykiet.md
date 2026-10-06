---
title: "Szablony etykiet"
sidebar_label: "6.1.4. Szablony etykiet"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Konfiguracja szablonów etykiet służy do zarządzania treścią i wyglądu etykiet, generowanych w systemie Asiston Produkcja i umieszczanych na produktach.

Podstawowym widokiem konfiguracji szablonów etykiet jest ich lista, zawierająca predefiniowane szablony. Każdy szablon dostępny na liście zawiera:
	-	Rodzaj etykiety (możliwość sortowania nazw rosnąco i malejąco),
	-	Przycisk: Akcje:
		-	Szczegóły.

**Widok listy szablonów etykiet w konfiguracji**

![Widok listy szablonów etykiet w konfiguracji](/img/Obrazy/Szablony_etykiet_lista.png)

Po wejściu do szczegółów zostanie otwarty formularz, zawierający:
	-	Sekcję do tworzenia treści i podglądu szablonu, z dwiema zakładkami:
		-	„Treść szablonu” – obsługująca wpisywanie i edycję tekstu,
		-	„Podgląd” – pokazuje utworzony szablon etykiety na podglądzie
	-	Zakładkę „Właściwości” z polami:
		-	„Nazwa” – bez możliwości edycji nazwy,
		-	„Rozmiar wydruku” – możliwość ustawienia rozmiaru w dwóch wymiarach:
			-	Szerokość
			-	Wysokość
		-	„Orientacja” – wybór z lity rozwijanej:
			-	Horyzontalna
			-	Wertykalna
		-	„Dodaj logo” – obsługuje pobieranie logo z pliku oraz zwraca jego podgląd
	-	Zakładkę „Pola dokumentu”, wyświetlającą listę zmiennych, które będzie można użyć w projektowaniu etykiety. Zmienne wyświetlane są w układzie:
		-	Kod
		-	Opis
		Zestaw zmiennych, widocznych w tej zakładce, uzależniony jest od rodzaju etykiety, której dotyczy. Będą to następujące zmienne:
			-	Etykieta produktu:
				-	Nazwa produktu,
				-	Kod EAN produktu
				-	Symbol produktu
				-	Waga produktu
				-	Wysokość produktu
				-	Szerokość produktu
				-	Długość produktu
				-	Jednostka miary
				-	Zdjęcie produktu
				-	Partia
				
**Widok szczegółów szablonu etykiety**

![Widok szczegółów szablonu etykiety](/img/Obrazy/Szablony_etykiet_szczegoly.png)

<ZapiszZmiany />
	


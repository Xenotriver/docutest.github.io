---
title: "Awarie"
sidebar_label: "6.1.6. Awarie"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Sekcja „Awarie” służy konfiguracji awarii oraz określaniu ich typów i skutków.

Do każdego typu awarii można zdefiniować dodatkowo rodzaje awarii. 
Widok składa się z listy zawierającej:
	-	Nazwę,
	-	Koszt, 
	-	Grupę maszyn,
	-	Typ awarii,
	-	Jednostka,
	-	Czy dany rodzaj jest aktywny/nieaktywny.

Listę można filtrować poprzez:
	-	Nazwę, 
	-	Grupę maszyn,
	-	Typ awarii,
	-	Aktywny/nieaktywny rodzaj awarii
	
**Konfiguracja - Lista Awarii**

![Konfiguracja - Lista Awarii](/img/Obrazy/Awarie_lista.png)

Nad listą znajduje się przycisk „Dodaj awarię”, który umożliwia konfigurację nowego rodzaju awarii. 
Po naciśnięciu wyświetla się pusty formularz do uzupełnienia informacjami dotyczącymi:
	-	Nazwy awarii,
	-	Grupy maszyn – lista rozwijana zawierająca wszystkie grupy maszyn skonfigurowane w systemie oraz pozycję „Wszystkie maszyny” do określenia awarii ogólnej.
	-	Typu awarii – lista rozwijana zawierająca wszystkie typy awarii skonfigurowane w systemie,
	-	Koszt awarii – do wpisania koszt awarii,
	-	JM – jednostka miary dla kosztu,
	-	Skutek awarii – lista rozwijana z opcjami „Możliwa jest dalsza realizacja operacji” i „Nie jest możliwa dalsza realizacja operacji”. 

**Konfiguracja - Dodawanie awarii**

![Konfiguracja - Dodawanie awarii](/img/Obrazy/Awarie_dodawanie.png)

Wszystkie wprowadzone informacje należy zapisać przyciskiem „Zapisz” bądź „Zapisz i wróć”. 

W rogu znajduje się przycisk „Typy awarii”, który umożliwia przejście do listy typów awarii. Lista zdefiniowanych typów składa się z:
	-	Nazwy,
	-	Akcje:
		-	Edytuj,
		-	Usuń. 

Filtrowanie odbywa się poprzez:
	-	Nazwę – pole do wpisania nazwy typu awarii bądź części frazy. 

**Konfiguracja - Lista typów awarii**

![Konfiguracja - Lista typów awarii](/img/Obrazy/Awarie_typy.png)

Dodawanie nowego typu awarii odbywa się poprzez naciśnięcie „Dodaj typ awarii”. 
Wyświetli się widok z polem do wpisania nazwy nowego typu. 

**Konfiguracja - Dodawanie typu awarii**

![Konfiguracja - Dodawanie typu awarii](/img/Obrazy/Awarie_typy_dodawanie.png)

<ZapiszZmiany /> 
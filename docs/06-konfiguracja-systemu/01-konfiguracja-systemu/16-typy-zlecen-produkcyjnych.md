---
title: "Typy zleceń produkcyjnych"
sidebar_label: "6.1.16. Typy zleceń produkcyjnych"
---
import ZapiszZmiany from '@site/docs/06-konfiguracja-systemu/_zapisz-zmiany.md';

Po wejściu w zakładkę Typy zleceń produkcyjnych widoczna jest tabela ze zdefiniowanymi wszystkimi typami zleceń.

**Tabela zawiera informacje:**
	-	nazwa typu zlecenia,
	-	symbol typu zlecenia,
	-	schemat numeru zlecenia,
	-	Domyślny,
	-	akcje:
		-	edytuj,
		-	usuń.

**Zestaw filtrów obejmuje:**
	-	nazwa typu zlecenia,
	-	symbol typu zlecenia,
	-	schemat numeru zlecenia.

**Lista z typami zleceń produkcyjnych**

![Lista z typami zleceń produkcyjnych](/img/Obrazy/Typy_zlecen_produkcji.png)

Nad tabelą znajduje się przycisk „Dodaj typ zlecenia”. 
Po jego kliknięciu otwiera się formularz dodawania typu zlecenia oraz konfiguracji numeru zlecenia.

**Nowy typ zlecenia produkcyjnego definiujemy poprzez uzupełnienie informacji, do uzupełnienia są:**
	-	nazwa zlecenia produkcyjnego – pole tekstowe do uzupełniania,
	-	symbol zlecenia – pole tekstowe,
	-	checkbox domyślny typ zlecenia określa dany typ zlecenia jako domyślny,
	-	checkbox – Schemat numeracji dla zlecenia podrzędnego – Zaznaczenie tej opcji pozwala na konfigurację niezależnej numeracji dla zleceń produkcyjnych tworzonych jako podrzędne w module Planów produkcyjnych. Numeracja ta będzie stosowana wyłącznie dla zleceń dodawanych dynamicznie jako zlecenia podrzędne do istniejących zleceń nadrzędnych.

**Dodawanie nowego typu zlecenia produkcyjnego**

![Dodawanie nowego typu zlecenia produkcyjnego](/img/Obrazy/Typy_zlecen_produkcji_dodawanie.png)

**Formularz konfiguracji schematu dla zleceń podrzędnych**

![Formularz konfiguracji schematu dla zleceń podrzędnych](/img/Obrazy/Typy_zlecen_produkcji_podrzedne.png)

Dla każdego typu zlecenia przypisywany będzie schemat numeru dla tego zlecenia. Schemat numeru definiujemy w konfiguratorze.

**Numer składa się z kombinacji informacji o:**
	-	Roku,
	-	Miesiącu,
	-	Dniu,
	-	Symbol typu ZP uzupełniany automatycznie po uzupełnieniu pola „Symbol zlecenia”,
	-	Dodatkowy symbol,
	-	Numeracja – numer kolejny zdefiniowany indywidualnie.

:::note

Elementy można ustawiać w dowolnej kolejności poprzez przesuwanie sekcji (góra-dół). 
W każdej sekcji definiujemy czy dany element będzie włączony oraz czy wymagany jest separator, jeśli nie włączymy opcji separatora to nie zostaje on uwzględniony. 
Możliwe jest ustawienie dowolnego typu separatora.

:::

<ZapiszZmiany />
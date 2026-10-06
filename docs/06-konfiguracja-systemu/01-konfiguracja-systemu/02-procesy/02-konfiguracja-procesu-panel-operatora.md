---
title: "Konfiguracja procesu panelu operatora"
sidebar_label: "Konfiguracja procesu panelu operatora"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WidokRoli from './_widok-roli-uprawnien.md';

# Proces główny

**Wybór wariantu procesu głównego będzie dokonywany przy pomocy listy rozwijanej wariantów, predefiniowanych w systemie Asiston Produkcja:**
	- Włączony -  aktywuje proces, czyniąc go widocznym w menu oraz w konfiguracji.
	- Wyłączony - dezaktywuje proces i ukrywa wszystkie powiązane z nim elementy interfejsu.

# Opcje

**Awarie:**
	- Dozwolone – w panelu operatora możemy zgłaszać awarie 
	-Niedozwolone – w panelu operatora zgłaszanie awarii nie będzie możliwe 

**Wznowienie realizacji operacji po awarii (konfiguracja dostępna w przypadku awarii dozwolonych):**
	- Ręczne – ręczne wznowienie operacji
	-Automatyczne – operacje wznawiają się automatycznie po rozwiązaniu awarii 

**Przerwy:**
	- Dozwolone - w panelu operatora możemy zgłaszać przerwę
	- Niedozwolone - w panelu operatora nie będzie można zgłosić przerw

**Rozpoczęcie przerwy (konfiguracja dostępna w przypadku wyboru dozwolonych):**
	- Przed rozpoczęciem przerwy operator musi zakończyć realizowane zadania
	- Rozpoczęcie przerwy automatycznie przerywa realizowane zadania

**Wznowienie realizacji operacji po przerwie:**
	- Ręczne - ręczne wznowienie operacji
	- Automatyczne - operacje wznawiają się automatycznie po zakończeniu przerwy

**Zadania okołoprodukcyjne:**
	- Dozwolone - w panelu operatora możemy realizować zadania okołoprodukcyjne
	- Niedozwolone -  w panelu operatora nie będzie można realizować zadań okołoprodukcyjnych

**Rozpoczęcie zadania okołoprodukcyjnego (konfiguracja dostępna w przypadku wyboru dozwolonych):**
	- Przed rozpoczęciem zadania okołoprodukcyjnego operator musi zakończyć realizowane zadanie
	- Rozpoczęcie zadania okołoprodukcyjnego automatycznie przerywa realizowane zadanie

**Wznowienie realizacji operacji po zadaniu okołoprodukcyjnym:**
	- Ręczne - ręczne wznowienie operacji
	- Automatyczne - operacje wznawiają się automatycznie po zakończeniu zadania okołoprodukcyjnego

**Opcje:**
**Liczba widoczności zadań na panelu operatora:**
	- Ograniczona 
	- Wszystkie przepisane do niego
	- Wszystkie zaplanowane

Możliwość wykonywania kilku operacji jednocześnie – TAK/NIE
Możliwość dodawania składników spoza listy – TAK/NIE

<WidokRoli />

<Tabs>

	<TabItem value="operacje" label="Moje operacje" default>
	
		<Tabs>
		
			<TabItem value="lista" label="Lista Operacji" default>
			
|Lista operacji|Wł./Wył.|
|---|---|
|Typ operacji|Wł./Wył.|
|Numer zlecenia|Wł./Wył.|
|Maszyny|Wł./Wył.|
|Produkt wyjściowy|Wł./Wył.|
|Ilość|Wł./Wył.|
|Termin (do)|Wł./Wył.|
|Status|Wł./Wył.|
|Pasek postępu|Wł./Wył.|

			</TabItem>
			
			<TabItem value="zlecenia" label="Szczegóły zlecenia" default>

|Szczegóły zlecenia|Wł./Wył.|
|---|---|
|Numer zlecenia|Wł./Wył.|
|Status|Wł./Wył.|
|Pasek postępu|Wł./Wył.|
|Opis i dodatkowe uwagi|Wł./Wył.|
|Załączniki|Wł./Wył.|

			</TabItem>
			
			<TabItem value="rozliczenia" label="Rozliczenia" default>

|Rozliczenie|Wł./Wył.|
|---|---|
|Zdjęcie (Składniki)|Wł./Wył.|
|Nazwa produktu (Składniki)|Wł./Wył.|
|Symbol produktu (Składniki)|Wł./Wył.|
|Ilość (Składniki)|Wł./Wył.|
|Jednostka (Składniki)|Wł./Wył.|
|Przycisk usuwania (Składniki)|Wł./Wył.|
|Zdjęcie (Odpady i zwroty)|Wł./Wył.|
|Nazwa produktu (Odpady i zwroty)|Wł./Wył.|
|Symbol produktu (Odpady i zwroty)|Wł./Wył.|
|Ilość (Odpady i zwroty)|Wł./Wył.|
|Jednostka (Odpady i zwroty)|Wł./Wył.|
|Przycisk usuwania (Odpady i zwroty)|Wł./Wył.|
|Nazwa produktu (Wyroby gotowe)|Wł./Wył.|
|Symbol produktu (Wyroby gotowe)|Wł./Wył.|
|Ilość (Wyroby gotowe)|Wł./Wył.|
|Jednostka (Wyroby gotowe)|Wł./Wył.|
|Przycisk usuwania (Wyroby gotowe)|Wł./Wył.|

			</TabItem>
			
			<TabItem value="kontrola" label="Kontrola jakości" default>

|Kontrola jakości|Wł./Wył.|
|---|---|
|Nazwa kontroli jakości|Wł./Wył.|
|Typ kontroli jakości|Wł./Wył.|

			</TabItem>
			
			<TabItem value="dane" label="Dane podstawowe" default>

|Dane podstawowe|Wł./Wył.|
|---|---|
|Data zlecenia|Wł./Wył.|
|Numer zlecenia|Wł./Wył.|
|Operacja|Wł./Wył.|
|Maszyna|Wł./Wył.|
|Wyrób gotowy|Wł./Wył.|
|Ilość|Wł./Wył.|
|Termin realizacji|Wł./Wył.|
|Pełny opis|Wł./Wył.|

			</TabItem>
			
		</Tabs>
		
	</TabItem>
	
	<TabItem value="awarie" label="Awarie" default>

|Awarie|Wł./Wył.|
|---|---|
|Maszyna|Wł./Wył.|
|Rodzaj|Wł./Wył.|
|Opis awarii|Wł./Wył.|
|Wyczyść pola|Wł./Wył.|
|Zgłoś awarię|Wł./Wył.|

	</TabItem>
	
	<TabItem value="zadania" label="Zadania okołoprodukcyjne" default>

|Zadania okołoprodukcyjne|Wł./Wył.|
|---|---|
|Nazwa zadania|Wł./Wył.|
|Zlecający|Wł./Wył.|
|Status|Wł./Wył.|
|Czas zadania|Wł|Wł./Wył.|
|Rozpocznij zadanie|Wł./Wył.|
|Opis|Wł./Wył.|
|Odśwież listę|Wł./Wył.|

	</TabItem>
	
	<TabItem value="przerwy" label="Przerwy" default>

|Przerwy|Wł./Wył.|
|---|---|
|Nazwa przerwy|Wł./Wył.|
|Czas przerwy|Wł./Wył.|
|Rozpocznij|Wł./Wył.|
|Status|Wł./Wył.|
|Czas na zadanie|Wł./Wył.|
|Pozostało|Wł./Wył.|
|Opis|Wł./Wył.|

	</TabItem>

</Tabs>


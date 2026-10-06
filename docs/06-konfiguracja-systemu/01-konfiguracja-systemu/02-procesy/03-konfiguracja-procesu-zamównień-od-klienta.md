---
title: "Konfiguracja procesu zamówień od klienta"
sidebar_label: "Konfiguracja procesu zamówień od klienta"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WidokRoli from './_widok-roli-uprawnien.md';

# Proces główny

**Wybór wariantu procesu głównego będzie dokonywany przy pomocy listy rozwijanej wariantów, predefiniowanych w systemie Asiston Produkcja:**
	- Wyłączony - dezaktywuje proces i ukrywa wszystkie powiązane z nim elementy interfejsu.
	- Bez początkowej akceptacji – zamówienia trafiające do systemu są natychmiast dostępne do planowania i realizacji, z pominięciem etapu weryfikacji. Przebieg wariantu procesu opisano szczegółowo w rozdziale ZK bez początkowej akceptacji.
	- Z początkową akceptacją – każde nowe zamówienie wymaga manualnego zatwierdzenia przez uprawnionego operatora, zanim zostanie przekazane do produkcji. Przebieg wariantu procesu opisano szczegółowo w rozdziale ZK z początkową akceptacją.

# Opcje

**Możliwość przekazania do realizacji większej ilości niż na zamówieniu od klienta:**
	- Checkbox – Tak/Nie

<WidokRoli />

<Tabs>

	<TabItem value="zamowienia" label="Zamówienia od klientów" default>
	
		<Tabs>
		
			<TabItem value="towary" label="Towary" default>
		
|Towary|Wł./Wył.|
|---|---|
|Symbol|Wł./Wył.|
|Nazwa|Wł./Wył.|
|Ilość|Wł./Wył.|
|Ilość dostępna|Wł./Wył.|
|Ilość do produkcji|Wł./Wył.|
|Ilość przekazana do produkcji|Wł./Wył.|
|Typ zlecenia|Wł./Wył.|
|Receptrura produkcji|Wł./Wył.|
|Status pozycji|Wł./Wył.|
|Numer zleceń produkcyjnych|Wł./Wył.|
|Numer planów produkcyjnych|Wł./Wył.|
		
			</TabItem>
			
			<TabItem value="informacje" label="Podstawowe informacje" default>
		
|Podstawowe informacje|Wł./Wył.|
|---|---|
|Numer planu produkcyjnego|Wł./Wył.|
|Kontrahent|Wł./Wył.|
|Data utworzenia|Wł./Wył.|
|Data rozpoczęcia|Wł./Wył.|
|Termin realizacji|Wł./Wył.|
|Uwagi do dokumentu|Wł./Wył.|
			
			</TabItem>
			
			<TabItem value="ogolne" label="Ogólne" default>
		
|Ogólne|Wł./Wył.|
|---|---|
|Zapisz|Wł./Wył.|
|Utwórz zlecenia|Wł./Wył.|
|Przekaż do planu|Wł./Wył.|
		
			</TabItem>
		
		</Tabs>
		
	</TabItem>
	
</Tabs>
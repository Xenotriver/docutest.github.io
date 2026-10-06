---
title: "Konfiguracja procesu awarie"
sidebar_label: "Konfiguracja procesu awarie"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WidokRoli from './_widok-roli-uprawnien.md';

# Proces główny

**Wybór wariantu procesu głównego będzie dokonywany przy pomocy listy rozwijanej wariantów, predefiniowanych w systemie Asiston Produkcja:**
	- Włączony - aktywuje proces, czyniąc go widocznym w menu, konfiguracji i panelu operatora.
	- Wyłączony - dezaktywuje proces i ukrywa wszystkie powiązane z nim elementy interfejsu.

<WidokRoli />

<Tabs>

	<TabItem value="main" label="Zarządzanie awariami" default>
	
		<Tabs>
			
			<TabItem value="secondary" label="Zarządzanie awariami" default>

|Zarządzanie awariami|Wł./Wył.|
|---|---|
|Nazwa awarii|Wł./Wył.|
|Maszyna|Wł./Wył.|
|Typ awarii|Wł./Wył.|
|Zakładany koszt trwania awarii|Wł./Wył.|
|JM zakładanego kosztu trwania awarii|Wł./Wył.|
|Opis|Wł./Wył.|
|Opis naprawy|Wł./Wył.|

			</TabItem>
		
			<TabItem value="tertiary" label="Koszty awarii" default>

|Koszty awarii|Wł./Wył.|
|---|---|
|Z kartoteki produktowej|Wł./Wył.|
|Koszt|Wł./Wył.|
|Ilość|Wł./Wył.|
|Cena|Wł./Wył.|
|Rzeczywisty koszt|Wł./Wył.|
|JM rzeczywistego kosztu trwania awarii|Wł./Wył.|
|Przycisk dodawania kosztu|Wł./Wył.|
|Przycisk usuwania kosztu|Wł./Wył.|

			</TabItem>

		</Tabs>

	</TabItem>

</Tabs>
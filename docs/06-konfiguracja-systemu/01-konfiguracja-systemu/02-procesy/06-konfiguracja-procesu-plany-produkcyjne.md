---
title: "Konfiguracja procesu plany produkcyjne"
sidebar_label: "Konfiguracja procesu plany produkcyjne"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WidokRoli from './_widok-roli-uprawnien.md';

# Proces główny

**Wybór wariantu procesu głównego będzie dokonywany przy pomocy listy rozwijanej wariantów, predefiniowanych w systemie Asiston Produkcja:**
	-	Włączony - aktywuje proces, czyniąc go widocznym w menu oraz w  konfiguracji.
	-	Wyłączony - dezaktywuje proces i ukrywa wszystkie powiązane z nim elementy interfejsu.

# Opcje

**Agregacja produktów do ZP:**
	-	Na podstawie produktu wyjściowego
	-	Na podstawie cechy produktu
	-	Na podstawie pola własnego
	-	Na podstawie grupy produktu

**Automatycznie generuj ZP na półprodukty:**
	-	Włączone - System samodzielnie zidentyfikuje konieczność wyprodukowania półproduktów niezbędnych do wytworzenia wyrobu gotowego zawartego w planie oraz utworzy ZP na te półprodukty,
	-	Wyłączone.

**Blokuj produkcję produktu finalnego do czasu wyprodukowania półproduktu:**
	-	Włączone - Zlecenia na wyroby nadrzędne (wymagające półproduktów z tego samego planu) będą otrzymywały status „Oczekuje na półprodukt”, blokując możliwość ich rozpoczęcia przez operatora do momentu zakończenia zleceń podrzędnych.
	-	Wyłączone.

<WidokRoli />

<Tabs>

	<TabItem value="main" label="Plan produkcji" default>
	
		<Tabs>
			
			<TabItem value="t" label="Towary" default>

|Towary|Wł./Wył.|
|---|---|
|Symbol towaru|Wł./Wył.|
|Nazwa towaru|Wł./Wył.|
|Zdjęcie towaru|Wł./Wył.|
|Ilość do produkcji|Wł./Wył.|
|JM produktów|Wł./Wył.|
|Nazwa receptury|Wł./Wył.|
|Numer zlecenia produkcyjnego|Wł./Wył.|
|Typ zlecenia produkcyjnego|Wł./Wył.|
|Przycisk usuwania pozycji|Wł./Wył.|
|Przycisk edycji pozycji|Wł./Wył.|
|Przycisk dodawania półproduktów|Wł./Wył.|
|Przycisk widoku powiązanych zamówień|Wł./Wył.|

			</TabItem>
			
			<TabItem value="p" label="Półprodukty" default>

|Półprodukty|Wł./Wył.|
|---|---|
|Symbol towaru|Wł./Wył.|
|Nazwa towaru|Wł./Wył.|
|Zdjęcie towaru|Wł./Wył.|
|Ilość do produkcji|Wł./Wył.|
|JM produktów|Wł./Wył.|
|Nazwa receptury|Wł./Wył.|
|Numer zlecenia produkcyjnego|Wł./Wył.|
|Typ zlecenia produkcyjnego|Wł./Wył.|
|Przycisk usuwania pozycji|Wł./Wył.|
|Przycisk edycji pozycji|Wł./Wył.|
|Przycisk dodawania półproduktów|Wł./Wył.|
|Przycisk widoku powiązanych zamówień|Wł./Wył.|

			</TabItem>

			<TabItem value="dp" label="Dane podstawowe" default>

|Dane podstawowe|Wł./Wył.|
|---|---|
|Typ zlecenia|Wł./Wył.|
|Status|Wł./Wył.|
|Data utworzenia|Wł./Wył.|
|Data rozpoczęcia realizacji|Wł./Wył.|
|Data zakończenia realizajcji|Wł./Wył.|
|Planowana data rozpoczęcia realizacji|Wł./Wył.|
|Planowana data zakończenia realizacji|Wł./Wył.|

			</TabItem>
			
			<TabItem value="sdp" label="Składniki do produkcji" default>
			
|Składniki do produkcji|Wł./Wył.|
|---|---|
|Symbol towaru|Wł./Wył.|
|Nazwa towaru|Wł./Wył.|\
|Ilość do produkcji|Wł./Wył.|
|JM towaru|Wł./Wył.|
|Receptura produkcji|Wł./Wył.|
|Symbol towaru (Składnika)|Wł./Wył.|
|Nazwa towaru (Składnika)|Wł./Wył.|
|Ilość wymagana (Składnika)|Wł./Wył.|
|JM towaru (składnika)|Wł./Wył.|
|Ilość dostepna na magazynie (Składnika)|Wł./Wył.|

			</TabItem>

		</Tabs>

	</TabItem>

</Tabs>
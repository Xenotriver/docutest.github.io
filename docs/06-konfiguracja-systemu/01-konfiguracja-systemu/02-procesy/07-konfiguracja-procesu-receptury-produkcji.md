---
title: "Konfiguracja procesu receptury produkcji"
sidebar_label: "Konfiguracja procesu receptury produkcji"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WidokRoli from './_widok-roli-uprawnien.md';

# Proces główny

**Wybór wariantu procesu głównego będzie dokonywany przy pomocy listy rozwijanej wariantów, predefiniowanych w systemie Asiston Produkcja:**
	-	Włączony - aktywuje proces, czyniąc go widocznym w menu oraz w  konfiguracji.
	-	Wyłączony - dezaktywuje proces i ukrywa wszystkie powiązane z nim elementy interfejsu.

# Opcje

**Koszty dodatkowe:**
	-	Włączone
	-	Wyłączone
**Odpady i zwroty:**
	-	Włączone
	-	Wyłączone
**Kalkulacje:**
	-	Włączone
	-	Wyłączone
**Załączniki:**
	-	Włączone
	-	Wyłączone

<WidokRoli />

<Tabs>

	<TabItem value="operacje" label="Operacje" default>
	
		<Tabs>
		
			<TabItem value="d" label="Dodawanie operacji" default>
				
				|Dodawanie operacji|Wł./Wył.|
				|---|---|
				|Dodawanie operacji (cała sekcja)|Wł./Wył.|
				
			</TabItem>
			
			<TabItem value="lo" label="Lista operacji" default>
			
				|Lista operacji|Wł./Wył.|
				|---|---|
				|LP|Wł./Wył.|
				|Symbol|Wł./Wył.|
				|Nazwa|Wł./Wył.|
				|Czas operacji|Wł./Wył.|
				|Jednostka czasu operacji|Wł./Wył.|
				|Czas TPZ|Wł./Wył.|
				|Jednostka czasu TPZ|Wł./Wył.|
				|Cena|Wł./Wył.|
				|Wartość|Wł./Wył.|
				|Współbieżność|Wł./Wył.|
				|Stały czas|Wł./Wył.|
			
			</TabItem>
			
			<TabItem value="do" label="Drzewo operacji" default>
				
				|Drzewo operacji|Wł./Wył.|
				|---|---|
				|Drzewo operacji (zakładka)|Wł./Wył.|
				|Minuty|Wł./Wył.|
				|Godziny|Wł./Wył.|
				|Dni|Wł./Wył.|
				
			</TabItem>
		
		</Tabs>
	
	</TabItem>
	
	<TabItem value="bom" label="BOM" default>
	
		<Tabs>
		
			<TabItem value="towary" label="Towary" default>
			
				|Towary|Wł./Wył.|
				|---|---|
				|Pełne zestawienie|Wł./Wył.|
				|Składniki|Wł./Wył.|
				|Produkty wyjściowe|Wł./Wył.|
				|Zdjęcie (Towar nadrzędny)|Wł./Wył.|
				|Symbol (Towar nadrzędny)|Wł./Wył.|
				|Nazwa (Towar nadrzędny)|Wł./Wył.|
				|Operacja|Wł./Wył.|
				|Cena (Towar nadrzędny)|Wł./Wył.|
				|Wartość (Towar nadrzędny)|Wł./Wył.|
				|Ilość (Towar nadrzędny)|Wł./Wył.|
				|JM (Towar nadrzędny)|Wł./Wył.|
				|Zdjęcie (Towar podrzędny)|Wł./Wył.|
				|Symbol (Towar podrzędny)|Wł./Wył.|
				|Nazwa (Towar podrzędny)|Wł./Wył.|
				|Cena (Towar podrzędny)|Wł./Wył.|
				|Wartość (Towar podrzędny)|Wł./Wył.|
				|Ilość (Towar podrzędny)|Wł./Wył.|
				|JM (Towar podrzędny)|Wł./Wył.|
				|Edytuj (Towar podrzędny)|Wł./Wył.|
				|Usuń (Towar podrzędny)|Wł./Wył.|
			
			</TabItem>
			
			<TabItem value="dtdl" label="Dodawanie towaru do listy" default>
			
				|Dodawanie towaru do listy|Wł./Wył.|
				|---|---|
				|Dodawanie towarów do listy BOM|Wł./Wył.|
			
			</TabItem>
		
		</Tabs>
	
	</TabItem>
	
	<TabItem value="kd" label="Koszty dodatkowe" default>
	
		<Tabs>
			
			<TabItem value="kde" label="Koszty dodatkowe" default>
			
				|Koszty dodatkowe|Wł./Wył.|
				|---|---|
				|Symbol|Wł./Wył.|
				|Nazwa|Wł./Wył.|
				|Ilość|Wł./Wył.|
				|Cena|Wł./Wył.|
				|Wartość|Wł./Wył.|
				|JM|Wł./Wył.|
				|Edytuj|Wł./Wył.|
				|Usuń|Wł./Wył.|
			
			</TabItem>
			
			<TabItem value="dk" label="Dodawanie kosztów" default>
			
				|Dodawanie kosztów|Wł./Wył.|
				|---|---|
				|Dodawanie kosztu|Wł./Wył.|
			
			</TabItem>
			
		</Tabs>
	
	</TabItem>
	
	<TabItem value="oiz" label="Odpady i zwroty" default>
	
		<Tabs>
		
			<TabItem value="doz" label="Dodawanie odpadów i zwrotów" default>
				
				|Dodawanie odpadów i zwrotów|Wł./Wył.|
				|---|---|
				|Dodawanie towarów do listy odpadów i zwrotów|Wł./Wył.|
				
			</TabItem>
			
			<TabItem value="dt" label="Dodane towary" default>
			
				|Dodane towary|Wł./Wył.|
				|---|---|
				|Zdjęcia|Wł./Wył.|
				|Symbol|Wł./Wył.|
				|Nazwa|Wł./Wył.|
				|Operacja|Wł./Wył.|
				|Typ|Wł./Wył.|
				|Ilość|Wł./Wył.|
				|Cena|Wł./Wył.|
				|Wartość|Wł./Wył.|
				|JM|Wł./Wył.|
				|Edytuj|Wł./Wył.|
				|Usuń|Wł./Wył.|
			
			</TabItem>
		
		</Tabs>
		
	</TabItem>
	
	<TabItem value="k" label="Kalkulacje" defualt>
	
		<Tabs>
			
			<TabItem value="kkr" label="Kalkulacje kosztów receptury">
		
			|Kalkulacje kosztów receptury|Wł./Wył.|
			|---|---|
			|Materiały|Wł./Wył.|
			|Operacje|Wł./Wył.|
			|Czasy produkcyjne|Wł./Wył.|
			|Koszty dodatkowe|Wł./Wył.|
			|Wykres|Wł./Wył.|
			
			</TabItem>
		
		</Tabs>
		
	</TabItem>
	
	<TabItem value="z" label="Załączniki" default>
		
		<Tabs>
		
			<TabItem value="zalaczniki" label="Załączniki" default>
		
			|Załączniki|Wł./Wył.|
			|---|---|
			|Załączniki|Wł./Wył.|
			|Opis wytwarzania|Wł./Wył.|
		
			</TabItem>
		
		</Tabs>
		
	</TabItem>
	
</Tabs>



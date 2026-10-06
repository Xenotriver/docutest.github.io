---
title: "Konfiguracja procesu zlecenia produkcyjne"
sidebar_label: "Konfiguracja procesu zlecenia produkcyjne"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WidokRoli from './_widok-roli-uprawnien.md';

# Proces główny

**Wybór wariantu procesu głównego będzie dokonywany przy pomocy listy rozwijanej wariantów, predefiniowanych w systemie Asiston Produkcja:**
	- Włączony - aktywuje proces, czyniąc go widocznym w menu oraz w konfiguracji. Przebieg wariantu procesu opisano szczegółowo w rozdziale Zlecenia produkcyjne.
	- Wyłączony - dezaktywuje proces i ukrywa wszystkie powiązane z nim elementy interfejsu.

# Opcje

**Konfiguracja tworzenia dokumentów MM dla towarów:**
	- Dokument MM na początku ZP – dokument generowany będzie zbiorczo na wszystkie surowce potrzebne do produkcji po przekazaniu zlecenia do realizacji,
	- Dokument MM po pobraniu surowców - dokument generowany będzie po każdym pobraniu surowców do produkcji,
	- Dokument MM po zakończeniu ZP - dokument generowany będzie zbiorczo na wszystkie surowce wykorzystane do produkcji po zakończeniu ostatnie operacji w zleceniu,
	- Dokument MM po rozpoczęciu operacji – dokument generowany będzie zbiorczo na wszystkie surowce potrzebne do realizacji operacji po rozpoczęciu przez operatora realizacji operacji,
	
:::warning[Uwaga]

	Jeżeli w konfiguracji wskazany „magazyn surowców” oraz „magazyn produkcji w toku” są tymi samymi magazynami, wtedy konfiguracja tworzenia MM nie będzie dostępna, a tworzenie dokumentów MM nie będzie możliwe.
	
:::

**Konfiguracja tworzenia dokumentu RW dla towarów:**
	- dokument RW dla każdej rozliczonej partii – dokument generowany będzie po każdym rozliczeniu partii w produkcji
	- dokument RW dla całej operacji – dokument generowany będzie zbiorczo dla całej operacji, niezależnie od ilości partii
	- dokument RW po zakończeniu ZP – dokument generowany będzie zbiorczo na wszystkie surowce wykorzystane do produkcji po zakończeniu ostatniej operacji w zleceniu
	
**Akceptacja rozliczenia produkcji:**
	- Wyłączone,
	- Rozliczenie z końcową akceptacją – po zakończeniu realizacji ZP będzie wymagana akceptacja uprawnionego operatora z możliwością korekty przed utworzeniem dokumentów PW/RW w systemie ERP.

**Akceptacja rozliczenia produkcji:**
	- Wyłączone,
	- Rozliczenie z końcową akceptacją  –  po zakończeniu realizacji ZP będzie wymagana akceptacja uprawnionego operatora z możliwością korekty przed utworzeniem dokumentów PW/RW w systemie ERP.

**Nadwyżki pobranych surowców:**
	- Realizuj na jednym dokumencie RW – nadmiar produktów jest rozliczany zbiorczo na tym samym dokumencie co bazowa ilość produktów
	- Osobne RW na dodatkowo pobrane towary – nadmiar produktów jest rozliczany na osobnym dokumencie niż bazowa ilość produktów

**Nadwyżki wyprodukowanych wyrobów:**
	- Realizuj na jednym dokumencie PW - nadmiar produktów jest rozliczany zbiorczo na tym samym dokumencie co bazowa ilość produktów
	- Osobne PW na dodatkowo wyprodukowane sztuki – nadmiar produktów jest rozliczany na osobnym dokumencie niż bazowa ilość produktów

**Metoda znakowania produktów:**
	- Numer seryjny
	- Numer partii
	- Data ważności

**Metoda znakowania produktów:**
	- Znakowanie każdej sztuki – Numer seryjny/partii/data ważności nadawana będzie na każdą wyprodukowaną sztukę
	- Znakowanie całej partii - Numer seryjny/partii/data ważności będzie taki sam dla każdej sztuki produktu rozliczonej w tej samej partii
	- Znakowanie całego zlecenia produkcyjnego - Numer seryjny/partii/data ważności będzie taki sam dla każdej sztuki produktu rozliczonej w tym samym zleceniu produkcyjnym

**Nadawanie numerów seryjnych/Partii/Dat ważności:**
	- Po przekazaniu ZP do produkcji – numer seryjny nadawany będzie od razu po przekazaniu zlecenie do produkcji
	- Na wskazanej operacji – numer seryjny nadawany będzie na predefiniowanej operacji
	- Po zakończeniu ZP – numer seryjny nadawany będzie po zakończeniu ostatniej operacji na zleceniu
	
**Ilość składników do pobrania:**
	- Operator nie może pobrać więcej składników niż jest zaplanowane na podstawie receptury produkcji
	- Operator nie może pobrać więcej składników niż jest zaplanowane na podstawie receptury produkcji

**Rozpoczęcie operacji:**
	- Operator może rozpocząć realizację operacji, jeśli nie ma wystarczającej ilości składników
	- Operator nie może rozpocząć realizacji operacji, jeśli nie ma wystarczającej ilości składników

**Wznowienie realizacji operacji po awarii:**
	- Ręczne
	- Automatyczne

**Rozliczenie wyrobu gotowego:**
	- Operator może rozliczyć tylko tyle wyrobu gotowego, na ile wystarczy mu pobranych składników oraz nie więcej niż ma zaplanowane na podstawie zlecenia
	- Operator może rozliczyć tylko tyle wyrobu gotowego, na ile wystarczy mu pobranych składników bez względu na zaplanowaną ilość na podstawie zlecenia
	- Operator może rozliczyć tylko tyle wyrobu gotowego ile ma zaplanowane bez względu na ilość pobranych surowców
	- Operator może rozliczyć dowolną ilość wyrobu gotowego bez względu na ilość pobranych surowców

**Wznowienie realizacji operacji po przerwie:**
	- Ręczne
	- Automatyczne

**Blokuj przekazanie ZP do realizacji w przypadku braku surowców:**
	- Włączone – w przypadku braku surowców potrzebnych do zrealizowania całości zlecenia, jego przekazanie do realizacji nie będzie możliwe. Użytkownik otrzyma komunikat “Występują braki w surowcach dostępnych do produkcji. Należy uzupełnić stan.”
	- Wyłączone – przekazanie do realizacji będzie możliwe pomimo braku surowców.
	
Ekran zleceń – naprzemienne wyświetlanie wskaźników – Wł./Wył.

<WidokRoli />

<Tabs>

	<TabItem value="main" label="Zlecenia produkcji" default>
	
		<Tabs>
			
			<TabItem value="szp" label="Szczegóły zlecenia produkcji" default>

|Szczegóły zlecenia produkcji|Wł./Wył.|
|---|---|
|Numer operacji|Wł./Wył.|
|Operacja|Wł./Wył.|
|Symbol operacji|Wł./Wył.|
|Data rozpoczęcia|Wł./Wył.|
|Data zakończenia|Wł./Wył.|
|Czas operacji|Wł./Wył.|
|Maszyna|Wł./Wył.|
|Stanowisko|Wł./Wył.|
|Operator|Wł./Wył.|
|Numer dokumentu wewnętrznego|Wł./Wył.|
|Numer dokumentu zewnętrznego|Wł./Wył.|
|Data utworzenia dokumentu|Wł./Wył.|
|Symbol towaru (Surowca)|Wł./Wył.|
|Nazwa towaru (Surowca)|Wł./Wył.|
|Ilość surowców|Wł./Wył.|
|Jednostka surowców|Wł./Wył.|
|Partia surowców|Wł./Wył.|

			</TabItem>
			
			<TabItem value="pzp" label="Podsumowanie zlecenia produkcji" default>

|Podsumowanie zlecenia produkcyjnego|Wł./Wył.|
|---|---|
|Zdjęcie produktu|Wł./Wył.|
|Symbol produktu|Wł./Wył.|
|Receptura produkcji|Wł./Wył.|
|Zlecono|Wł./Wył.|
|Wyprodukowano|Wł./Wył.|
|Ilość dostępna|Wł./Wył.|

			</TabItem>
			
			<TabItem value="pi" label="Podstawowe informacje" default>

|Podstawowe informacje|Wł./Wył.|
|---|---|
|Status zlecenia|Wł./Wył.|
|Data utworzenia|Wł./Wył.|
|Data rozpoczęcia realizacji|Wł./Wył.|
|Data zakończenia realizacji|Wł./Wył.|
|Typ zlecenia|Wł./Wył.|
|Uwagi|Wł./Wył.|

			</TabItem>
			
			<TabItem value="rp" label="Rozliczenie operacji" default>

|Rozliczenie operacji|Wł./Wył.|
|---|---|
|Symbol towaru|Wł./Wył.|
|Nazwa towaru|Wł./Wył.|
|Ilość|Wł./Wył.|
|Do pobrania|Wł./Wył.|
|Jednostka|Wł./Wył.|

			</TabItem>
			
			<TabItem value="o" label="Ogólne" default>

|Ogólne|Wł./Wył.|
|---|---|
|Anuluj|Wł./Wył.|
|Zapisz|Wł./Wył.|

			</TabItem>

		</Tabs>

	</TabItem>

</Tabs>
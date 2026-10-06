---
title: "Zarządzanie awariami"
sidebar_label: "6.5. Zarządzanie awariami"
---

Moduł umożliwiający zgłaszanie oraz zarządzanie awariami na stanowiskach produkcyjnych.

**Lista zgłoszonych awarii zawiera informacje:**
-	Nazwa,
-	Status,
-	Typ,
-	Maszyna,
-	Data zgłoszenia,
-	Data zakończenia,
-	Akcje:
	-	Edytuj,
	-	Usuń.

**Listę możemy filtrować po:**
-	Nazwie awarii,
-	Statusie:
	-	Brak wyboru,
	-	Nowa,
	-	Oczekuje na części,
	-	Oczekuje na serwis,
	-	Realizowana,
	-	Zakończona,
	-	Anulowana,
-	Typie,
-	Dacie zgłoszenia,
-	Dacie zakończenia.

**Lista zgłoszonych awarii**

![Lista zgłoszonych awarii](/img/Obrazy/Awarie_zarzadzanie_lista.png)

Awarię można zgłosić z poziomu „Panelu operatora” klikając przycisk „Awarie” lub bezpośrednio z modułu zarządzanie awariami, klikając przycisk „Zgłoś awarię”.

### Zgłoś awarię

**Zgłaszając awarię uzupełniamy formularz:**
-	Nazwa awarii – lista rozwijana z wcześniej zdefiniowanych awarii,
-	Maszyna – lista rozwijana z maszynami dodanymi do systemu,
-	Status.

**Po uzupełnieniu formularza system wstawi dane w pola:**
-	Typ awarii,
-	Zakładany koszt trwania awarii,
-	JM.

**Zgłaszanie awarii**

![Zgłaszanie awarii](/img/Obrazy/Awarie_zarzadzanie_dodawanie.png)

Zapisana awaria zostanie dodana do listy awarii.

### Realizacja awarii

Przystępując do realizacji awarii wchodzimy w jej edycję, gdzie widzimy sekcje z danymi, kosztami awarii i statusem.

**Widok edycji awarii**

![Widok edycji awarii](/img/Obrazy/Awarie_edycja.png)

**W sekcji z danymi widzimy pola:**
-	Nazwa awarii,
-	Maszyna,
-	Typ awarii,
-	Zakładany koszt trwania awarii,
-	JM,
-	Status,
-	Opis,
-	Opis naprawy.

**Osoba zajmująca się awarią może ustawić jej status:**
-	Nowa,
-	Oczekiwanie na części,
-	Oczekiwanie na serwis,
-	Realizowana,
-	Zakończona,
-	Anulowana.

Kiedy awaria zostanie naprawiona należy ustawić status „Zakończona”.

Do zgłoszonej awarii możemy dodać koszty jej naprawy w sekcji koszty widzimy sumę kosztów awarii, możemy dodać dodatkowe koszty poprzez uzupełnienie pozycji:
-	Z kartoteki produktowej – po zaznaczeniu możemy dodać do kosztów towar z kartoteki,
-	Koszt,
-	Ilość,
-	JM,
-	Cena,
-	Wartość (PLN).

Dodane w ten sposób koszty tworzą listę, gdzie widzimy wszystkie koszty awarii.

Pozycję z listy możemy usunąć używając przycisku opcji znajdującego się po prawej stronie każdej pozycji.

**Koszty awarii**

![Koszty awarii](/img/Obrazy/Awarie_koszt.png)
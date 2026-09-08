# ChestShops (Spieler-Shops)

Mit **ChestShops** kannst du eigene Läden aufbauen und rund um die Uhr handeln – auch wenn du offline bist. Andere Spieler kaufen und verkaufen dann direkt an deiner Truhe. Das ist die beste Möglichkeit, um an [Moneten](moneten.md) zu kommen, ohne auf den teuren [AdminShop](adminshop.md) angewiesen zu sein.

## Einen Shop erstellen

1. Stelle eine **Truhe** auf und fülle sie mit den Gegenständen, die du verkaufen (oder ankaufen) willst.
2. Platziere ein **Schild** an der Truhe.
3. Beschrifte das Schild mit vier Zeilen:

```
[leer – dein Name]
<Anzahl>
B <Kaufpreis> : S <Verkaufspreis>
<Item-Name>
```

| Zeile | Inhalt | Beispiel |
|-------|--------|----------|
| 1 | Bleibt leer – dein Name wird automatisch eingetragen | |
| 2 | Stückzahl pro Handel | `64` |
| 3 | Preise: **B** = Spieler kaufen, **S** = Spieler verkaufen | `B 100 : S 50` |
| 4 | Der gehandelte Gegenstand | `DIAMOND` |

!!! note "Kosten & Gebühren"
    - Das Erstellen eines Shops kostet **500 Moneten**.
    - Auf Verkäufe fällt eine **Gebühr von 5 %** an.
    - Zerstörst du den Shop, bekommst du **250 Moneten** zurück.

## Handeln

- **Kaufen/Verkaufen:** Klicke auf das Schild – je nach Preis (B/S) läuft der Handel.
- **Ganze Stacks:** Mit **Schleichen (Shift)** handelst du größere Mengen auf einmal.
- **Teilkäufe** sind erlaubt: Reicht dein Geld oder der Vorrat nur teilweise, wird so viel wie möglich gehandelt.

!!! tip "Nur Kauf **oder** Verkauf"
    Du kannst auch einen reinen Ankaufs- oder Verkaufsshop bauen, indem du nur einen der beiden Preise (B oder S) angibst.

## Verwandte Seiten

- [AdminShop](adminshop.md) – der Shop mit unbegrenztem Vorrat
- [Auktionen](auktionen.md) – für seltene und hochwertige Einzelstücke
- [Moneten](moneten.md) – die Server-Währung

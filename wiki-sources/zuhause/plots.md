# Plots (Bauwelt)

Die **Bauwelt** ist ein kreativer Baubereich ohne Monster. Statt Claims nutzt sie ein **Plot-System**: Die Welt ist in gleich große, durch Wege getrennte Grundstücke (Plots) aufgeteilt, die du beanspruchen und frei gestalten kannst.

## Einen Plot beanspruchen

Stell dich auf einen freien Plot und beanspruche ihn – oder lass dir automatisch den nächsten freien geben:

```
/plot claim    // Beansprucht den Plot, auf dem du stehst
/plot auto     // Weist dir automatisch den nächsten freien Plot zu
/plot home     // Teleportiert dich zu deinem Plot
```

## Mitspieler & Rechte

```
/plot trust <Spieler>   // Erlaubt Bauen – auch wenn du offline bist
/plot add <Spieler>     // Erlaubt Bauen, während du online bist
/plot remove <Spieler>  // Entfernt einen Mitspieler
/plot deny <Spieler>    // Verwehrt einem Spieler den Zutritt
```

!!! tip "Trust vs. Add"
    **Trust** gilt dauerhaft (auch in deiner Abwesenheit) – ideal für feste Bauteams. **Add** wirkt nur, solange du selbst online bist.

## Plot gestalten & verwalten

```
/plot visit <Spieler>   // Besuche den Plot eines anderen
/plot info              // Zeigt Besitzer und Rechte des Plots
/plot biome <Biom>      // Ändert das Biom deines Plots
/plot clear             // Setzt den Plot zurück (Inhalt wird gelöscht)
/plot delete            // Gibt deinen Plot wieder frei
```

!!! warning "Vorsicht mit clear & delete"
    `/plot clear` und `/plot delete` löschen alles auf dem Plot unwiderruflich. Überlege gut, bevor du sie nutzt.

## Gut zu wissen

- Das Plot-System gilt nur in der **Bauwelt**. In der Abenteuerwelt schützt dich das [Claim-System](claims.md).
- Alles, was du außerhalb deines Plots baust (auf den Wegen), ist **nicht geschützt**.
- Angrenzende Plots lassen sich zu größeren Flächen zusammenlegen (`/plot merge`), sofern beide dir gehören.

# Elite-Mobs & Bosse

Neben normalen [Monstern](monstertypen.md) gibt es **Elite-Mobs**: besonders gefährliche Versionen bekannter Gegner mit eigenen Fähigkeiten – und darüber hinaus einzigartige **Bosse**. Sie sind das Herzstück des Abenteuer-Gameplays und der **Abenteurergilde**.

## Elite-Mobs

- Rund **5 %** der natürlich spawnenden Monster werden zu Elite-Mobs.
- Ihr **Level richtet sich nach deiner Ausrüstung** – je besser Waffen und Rüstung der Spieler in der Nähe, desto höher das Elite-Level (natürliches Maximum: 250).
- Elites tragen sichtbare **Rüstung, Partikel-Effekte und Spuren**, die vor ihren Fähigkeiten warnen.
- Beim Angreifen siehst du **Schadens- und Lebensanzeigen** direkt am Mob.

!!! warning "Achte auf die Warnphasen"
    Viele Elite-Fähigkeiten haben eine kurze **Aufbau-Animation**, bevor sie auslösen. Das ist deine Chance auszuweichen – die Effekte zeigen dir, wohin.

## Bosse

Bosse sind seltene, einzigartige Gegner mit viel Leben, starken Angriffen und eigenen Mechaniken.

- **Schwächen & Resistenzen:** Triffst du einen Boss mit etwas, gegen das er **schwach** ist, erscheint `Weak!` und der Schaden wird verdoppelt. Bei einer Resistenz erscheint `Resist!`. Experimentiere mit Waffen, Verzauberungen und Angriffsarten.
- **Voll-Heilung:** Verlässt ein Boss den Kampf (z. B. wenn alle Spieler wegrennen), heilt er sich komplett (`FULL HEAL!`). Bleibt also dran.
- **Blocken:** Ein hochgehaltener Schild reduziert Nahkampfschaden um **20 %** (Fähigkeiten ausgenommen).
- **Tracking:** Viele Bosse kannst du per Klick auf `[Click to track!]` verfolgen. Mit `/em spawntp` gelangst du zum Startpunkt der Abenteuerwelt.

## Die Abenteurergilde

Deinen Fortschritt organisierst du über die **Abenteurergilde** (Adventurer's Hub). Von dort aus rangst du auf, schaltest Belohnungen frei und erhältst dauerhafte Boni.

```
/ag        // Teleport in den Adventurer's Hub
/em        // Zentrales Menü (Status, Wallet, Beute, Quests …)
```

### Ränge

Mit jedem Gildenrang schaltest du den nächsten frei. Höhere Ränge geben dir dauerhaft **mehr maximales Leben, mehr kritische Trefferchance und mehr Ausweichchance**.

| Rang | Titel |
|------|-------|
| 0 | Commoner *(deaktiviert Elites für dich)* |
| 1 | Rookie |
| 2 | Novice |
| 3 | Apprentice |
| 4 | Adventurer |
| 5 | Journeyman |
| 6 | Adept |
| 7 | Veteran |
| 8 | Elite |
| 9 | Master |
| 10 | Hero |

Danach beginnen die **Prestige-Stufen** (Prestige 1, 2, …), die die Rangleiter erneut durchlaufen, einen zusätzlichen ⚜-Marker vergeben und den Rang **Legend** ergänzen.

!!! note "Rang 0 – Commoner"
    Als **Commoner** sind Elite-Spawns für dich deaktiviert. Das ist die Einstellung für alle, die lieber ohne Elite-Kämpfe unterwegs sein wollen.

### Elite Coins

Elite-Mobs und Bosse lassen **Elite Coins** fallen – die eigene Währung der Gilde (getrennt von den [Moneten](../wirtschaft/moneten.md) des Servers). Damit schaltest du in der Gilde Ausrüstung, Verbesserungen und Inhalte frei.

### Beute & Rang-Schranken

Höherwertige **Schatzkisten** verlangen einen Mindest-Gildenrang. Steht dein Rang zu niedrig, bekommst du einen Hinweis und musst zuerst über `/ag` den nächsten Rang freischalten. Bereits geöffnete Kisten haben eine Abklingzeit. Mehr zu Beute und besonderen Gegenständen: [Verzauberungen & Loot](verzauberungen-loot.md).

## Häufige Fragen

**Ich finde keine Elites – woran liegt das?**
Prüfe deinen Gildenrang: Als **Commoner** (Rang 0) sind Elites deaktiviert. Steige über `/ag` auf mindestens Rookie auf.

**Warum heilt sich der Boss ständig?**
Er verlässt den Kampf, wenn niemand ihn angreift oder alle zu weit weg sind. Bleib in Reichweite und mach durchgehend Schaden.

**Wie sehe ich meinen Schaden am Boss?**
Nach großen Boss-Kämpfen bekommst du deinen Anteil angezeigt (`Your damage: …`).

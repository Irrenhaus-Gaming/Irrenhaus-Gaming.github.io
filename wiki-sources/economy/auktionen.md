# Auktionen

Auktionen ermöglichen es, Items im serverübergreifenden Marktplatz zu versteigern. Du kanns eigene Auktionen anlegen, auf andere bieten und Auktionen abbrechen.

## Wichtige Befehle

Öffne das Auktionsinterface:
```
/ah
```

Brich deine eigenen Auktionen ab:
```
/auktion cancel
```

Hole die Erlöse von abgeschlossenen Auktionen und die Gegenstände von abgelaufenen oder abgebrochenen Auktionen ab:

```
/auktion collect
```


## Auktion erstellen

Öffnet das Auktionsinterface für das im Cursor gehaltene Item:

```
/ah auction
```

![Beispiel Screenshot](/images/examples/auction.PNG "Auktion Erstellen"){style="max-width:100%;height:auto;display:block;"}

### Interface Erklärung:

- Der Gegenstand, der zum Verkauf angeboten werden soll, wird in der **Mitte der Kiste** (zwischen den beiden Schildern) angezeigt.

- Mit dem **oberen Schild** lässt sich die Anzahl der angebotenen Gegenstände ändern, z. B. um einen ganzen Stack zu verkaufen.

- Durch Klicken auf den **Diamanten** kann zwischen Verkauf und Biet-Auktion umgeschaltet werden.

  - **Bieten**:
    Bei einer Biet-Auktion steht die Auktion für eine bestimmte Zeit im Markt. Spieler können Gebote abgeben; nach Ablauf der Zeit erhält der Spieler mit dem höchsten Gebot den Gegenstand.

  - **Verkauf**:
    Bei einem Verkauf steht die Auktion für eine bestimmte Zeit im Markt und Spieler können die Auktion jederzeit sofort kaufen. Wenn ein Spieler die Auktion kauft, kann er im Bestätigungsmenü die Menge wählen dadurch ändert sich natürlich auch der Gesamtpreis (weniger Menge = niedrigerer Preis).

- Per Klick auf den **Goldbarren** kann die Währung für den Gegenstand umgestellt werden. Unterstützte Währungen sind [Moneten](/wiki/economy/moneten), XP und Items.

- Per Klick auf die **Glasscheiben** kann der Preis der Auktion angepasst werden. Grüne Scheiben erhöhen den Preis, rote Scheiben verringern ihn. Einzelne Scheibe = ±1, eine 10er-Scheibe = ±10, ein Stack (64) = ±100. Alternativ kann über das untere Schild der Preis direkt eingegeben werden.

- Per Klick auf die **grüne Wolle** wird die Auktion bestätigt. 
- Mit Klick auf die **rote Wolle** wird die Auktion abgebrochen.

Wenn niemand den Artikel gekauft hat und die Zeit abgelaufen ist, erscheint der Gegenstand im Menü **Abgelaufene Auktionen**, wo du ihn wieder abholen kannst.

```
/ah open expiredauctions
```

## Bestätigungen und Discord-Benachrichtigungen

Nach dem Anlegen einer Auktion erscheint eine Bestätigung im Chat. Außerdem wird ein Post im Discord [Auktionshaus Chat](https://discord.com/channels/1157772945784066088/1318892133041705022) erstellt. Halte immer ein Auge auf neue Auktionen!

![Beispiel Screenshot](/images/examples/discord_ah_anouncement.PNG "Discord Post"){style="max-width:100%;height:auto;display:block;"}

## Tipps

- Setze einen realistischen Preis, um die Chance auf Käufer zu erhöhen.  
- Der Mindestpreis ist 500 Moneten. Verkaufe also nur hochwertige Gegenstände im Auktionshaus.  
- Behalte laufende Biet-Auktionen im Auge. Andere Spieler können dich jederzeit überbieten.  
- Abgebrochene Auktionen geben dir das Item zurück.

## Einschränkungen

- **[Elite- und Bossloot](/kampf/elites)** sowie **verfluchte Gegenstände** können **nicht** im Auktionshaus gelistet werden.

## FAQ

**F: Wie sehe ich meine Auktionen?**  
**A:** Nutze ```/ah open myauctions```, um alle deine Auktionen einzusehen.

**F: Kann ich Auktionen vorzeitig stoppen?**  
**A:** Ja. Mit ```/ah cancel``` kannst du deine eigene Auktion abbrechen.

**F: Was passiert, wenn niemand bietet?**  
**A:** Wenn niemand gekauft hat und die Zeit abgelaufen ist, erscheint der Artikel im Menü **Abgelaufene Auktionen**. Öffne es mit ```/ah open expiredauctions``` und sammle deinen Gegenstand wieder ein.


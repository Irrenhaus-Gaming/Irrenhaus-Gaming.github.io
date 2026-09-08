# Home & Teleport

Damit du in der weitläufigen [Welt](../kampf/welt.md) nicht ständig laufen musst, gibt es ein umfangreiches Teleport-System: eigene Home-Punkte, Warps, Teleport-Anfragen und den Rücksprung zur letzten Position.

## Homes

Du kannst dir **bis zu 10 eigene Home-Punkte** setzen und jederzeit dorthin zurückkehren.

```
/sethome <Name>    // Aktuellen Ort als Home speichern (z. B. /sethome basis)
/home              // Menü mit deinen Homes öffnen
/home <Name>       // Zu einem bestimmten Home teleportieren
/delhome <Name>    // Ein Home löschen
/homelist          // Alle deine Homes auflisten
```

!!! tip "Setze Homes an allen wichtigen Orten"
    Basis, Mine, Farm, Handelsplatz – ein `/sethome` an jedem wichtigen Punkt spart dir lange Wege.

## Teleport-Anfragen

```
/tpa <Spieler>      // Bitte darum, zu einem Spieler teleportiert zu werden
/tpahere <Spieler>  // Bitte einen Spieler, zu dir zu kommen
/tpaccept           // Anfrage annehmen
/tpdeny             // Anfrage ablehnen
```

Du kannst dich nur zu Spielern teleportieren, die deine Anfrage **annehmen** – niemand landet ungefragt bei dir.

## Weitere Befehle

```
/spawn         // Zum Server-Spawn
/warp <Name>   // Zu einem öffentlichen Warp-Punkt (z. B. Shop, Abenteuergilde)
/back          // Zurück zur letzten Position (z. B. nach Teleport oder Tod)
```

## Warmup: Kurze Wartezeit

Fast alle Teleports haben eine **Aufwärmzeit von 5 Sekunden**, angezeigt in der Actionbar.

- Bewegst du dich während des Countdowns, **bricht der Teleport ab**.
- Nimmst du Schaden, **bricht der Teleport ebenfalls ab**.

So kann man sich nicht mitten im Kampf einfach wegteleportieren.

## Reisen zwischen den Welten

Der Server besteht aus mehreren Bereichen – **Lobby**, **Abenteuerwelt** und **Bauwelt**. Zwischen ihnen wechselst du über die Portale in der Lobby. Dein **Inventar wird synchronisiert**, sodass deine Gegenstände dich begleiten. Home-Punkte gelten innerhalb der jeweiligen Welt.

## Häufige Fragen

**Wie viele Homes kann ich setzen?**
Bis zu **10**.

**Warum wurde mein Teleport abgebrochen?**
Du hast dich bewegt oder Schaden genommen, während der 5-Sekunden-Countdown lief.

**Kann ich mich zu einem beliebigen Spieler teleportieren?**
Nur wenn er deine `/tpa`-Anfrage annimmt.

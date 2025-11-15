ChestShops und AdminShops

Auf ChestShops-Seiten legen Spieler eigene Kauf-/Verkaufsshops an, indem sie Schilder an Kisten setzen. AdminShops (Server-Shops) sind besondere, von Admins erstellte Shops mit unbegrenztem Bestand.

ChestShop (Selbst erstellte Läden):
Du platzierst ein Schild an einer Kiste. Auf dem Schild steht in Zeile 1 [shop], in Zeile 2 der Typ und Preis (z.B. B 64 100 für Verkauf von 64 Stück zum Preis 100 Moneten), in Zeile 3 die Menge (z.B. 64). Danach klickst du mit dem gewünschten Item in der Hand auf das Schild, um es zu registrieren.

Rechtsklick auf das fertige Schild: Wenn ein Spieler das Schild rechtsklickt, kauft er das Item (Typ B oder S entscheidet, ob Spieler vom Schild kauft oder verkauft).

Kasse auffüllen: Du musst die Kiste befüllen. Items spawnen nicht automatisch.

Benachrichtigungen: Mit /chestshop toggle-notifications kannst du Ton- und Chat-Benachrichtigungen von Shop-Aktionen ein- bzw. ausschalten.

AdminShops (Server-Läden):
Diese Shops sind vom Server bereitgestellte ChestShops mit unbegrenztem Lager. Spieler kaufen bei diesen automatisch, ohne dass Items in der Kiste ausgehen (nicht bestätigt). In der Praxis funktionieren sie wie normale ChestShops – nur dass das Server-Lager konstant aufgefüllt ist (dies ist meist durch Admin-Kiste und Plugin-Einstellung garantiert).

Wichtige Befehle:

```
/chestshop toggle-notifications   // Benachrichtigungen an- oder ausschalten.
/chestshop notify                 // Zeigt aktuelle Notificationseinstellungen an.
```

Beispiel:
Lege ein Schild wie folgt an:

```
[shop]
B 64 100
Wolle 64
```

Dann halte in der Hand 64 Stück Wolle und rechtsklicke das Schild. Du verkaufst 64 Wolle für 100 Moneten an Käufer.

GUI/Ingame-Interaktionen:
Keine speziellen Menüs. Beim Erstellen eines ChestShops-Schildes erscheint eine Bestätigung im Chat. Beim Kauf erscheinen ebenfalls Chatmeldungen. Spieler können mit Shift-Klick meist die volle Stackmenge in Shops handeln.

Serverunterschiede:

Lobby/Bauwelt: Hier werden meist keine ChestShops erlaubt (Selbstgebasteltes, eventuell nur Dekoshops).

Adventure: ChestShops und AdminShops sind hier aktiv, damit Spieler dort handeln können.

Tipps / Best Practices:

Beim Erstellen sind genaue Itemnamen nötig (mit exakter Bezeichnung).

Prüfe die Schildformatierung, sonst funktioniert der Shop nicht.

Höre auf Tipps wie: B steht für „Buy“ (Verkaufen an Shop), S für „Sell“ (Kaufen vom Shop).

Fülle immer genug Ware in die Kiste ein, sonst läuft dein Shop schnell leer.

Einschränkungen / Fallstricke:

ChestShops können gestört werden, wenn der Blocktyp oder die Position verändert wird.

Du kannst nur so viele Items verkaufen, wie in der Kiste vorhanden sind.

Manche wertvolle Items (z.B. event-spezifische Items) sind aus ChestShops ausgeschlossen (werden nicht als Shop akzeptiert).

FAQ:

F: Wie lösche ich ein Shop-Schild?
A: Entferne einfach das Schild oder den Block darunter. Der Shop wird dadurch aufgehoben.

F: Kann ich auch kaufen und gleichzeitig verkaufen?
A: Ein Schild enthält nur einen Modus (Kaufen oder Verkaufen). Du müsstest zwei Schilder anlegen, um beides zu ermöglichen.

F: Was ist der Unterschied zu AdminShops?
A: AdminShops haben unbegrenzt Items. Spieler können direkt vom Server-Shop kaufen (kein individuelles Kisten-Management nötig).
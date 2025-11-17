Mining und Veinminer

Um Erze und Erdblöcke effizient abzubauen, gibt es ein automatisch arbeitendes VeinMiner-System. Wenn du z.B. Kupfererz abbauen willst, kannst du mit einer einzelnen Aktion ganze zusammenhängende Erzgänge mit auf einmal abbauen.

VeinMiner:

Wenn aktiviert, bricht das Minen eines Blocks gleichzeitig alle direkt benachbarten Blöcke desselben Typs ab. So wirst du ganze Erzgänge auf einmal los.

Standardmäßig musst du für jedes Erz die richtige Spitzhacke benutzen (z.B. Diamantspitzhacke für Diamantenerz) (nicht bestätigt).

Maximale Kettengröße (z.B. 100 Blöcke) kann serverseitig begrenzt sein.

Wichtige Befehle:
```
/veinminer enable      // Aktiviert das VeinMining für dich.
/veinminer disable     // Deaktiviert das VeinMining für dich.
/veinminer stats       // Zeigt Statistiken (z.B. gebrochene Blöcke).
```

(Alias: /vm für alle Unterbefehle.)

Beispiel:
Du stehst vor einer Gruppe Erzblöcke. Nach /veinminer enable baut das Abbauen eines Kupfer-Erzblocks automatisch alle angrenzenden Kupfer-Erze ab.

GUI/Ingame-Interaktionen:
Kein GUI. Das Aktivieren/Deaktivieren geschieht im Chat. Es erscheint eine Bestätigung, dass VeinMiner ein- oder ausgeschaltet ist. Danach funktioniert automatisch jedes Mining.

Serverunterschiede:

Nur Adventure/Bauwelt: VeinMiner ist üblicherweise in diesen Welten aktiv; evtl. in der Lobby aus.

Manche Server verbieten VeinMine in bestimmten Zonen (z.B. Spawn = keine Ressourcenabbau).

Tipps / Best Practices:

Baue Erze mit zusammenhängenden Erzgängen (wie Kupfer, Zinn etc.) mit aktiviertem Veinminer, um Zeit zu sparen.

Überprüfe deine Spitzhacke: manche Server verlangen Upgrade für bestimmte Erze (z.B. Stein-Spitzhacke reicht nicht immer für seltene Erze).

Wenn VeinMiner nicht (mehr) funktioniert, könnte er deaktiviert sein (/veinminer status).

Einschränkungen / Fallstricke:

Nur Blocks gleicher Art zählen (kein SilkTouch nötig).

Viele Blöcke auf einmal: Daran gewöhnt man sich, aber sei vorsichtig, im übermäßigen Abbau kann man Block- und Itemverluste haben.

Eventuell Maximalanzahl begrenzt: z.B. bei großen Minen nur 100x100 Blöcke pro Use.

FAQ:

F: Wie erkenne ich, dass VeinMiner aktiv ist?
A: Nach /veinminer enable kommt im Chat eine Bestätigung. Danach bricht beim Mining mehr als ein Block.

F: Funktioniert es mit jeder Spitzhacke?
A: Ja, aber die richtige Werkzeugstufe (Holz/Stein/Eisen/Diamant) muss für das jeweilige Erz passen (wie bei normalem Mining) (nicht bestätigt).
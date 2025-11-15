Homes und Teleport

Spieler können sich zu eigenen Orten (Homes) und speziellen Zielen teleportieren lassen. Übliche Befehle sind /sethome, /home, /spawn, /warp, sowie Teleport-Anfragen /tpa.

Wichtige Befehle:

```
/sethome [Name]      // Speichere deinen aktuellen Standort als Home unter Name.
/home [Name]         // Teleportiert dich zu deinem Home (Standard, falls kein Name).
/spawn               // Teleportiert dich zum Server-Spawn.
/tpa <Spieler>       // Fordere Teleport zum Spieler an.
/tpahere <Spieler>   // Fordere Spieler zu dir an (Teleport-Anfrage).
/tpaccept            // Akzeptiere eine eingehende Teleport-Anfrage.
/tpdecline           // Lehnt eine Anfrage ab (falls verfügbar). 
/back                // Teleportiert dich zurück zur letzten Position.
```

(Bei Bedarf können Homes mit Namen verwaltet werden, z.B. /sethome Haus; /home Haus. /spawn funktioniert serverweit.)

Beispiel:

/sethome Haus – Speichert deine Position als „Haus“ ab.

/home Haus – Teleportiert dich zurück zum „Haus“.

/spawn – Springt an den Spawnpunkt des Servers (Standardort in Lobby/Adventure).

/tpa Anna – Bittet Anna um Teleport zu dir. Sie kann mit /tpaccept annehmen.

/back – Teleportiert dich zur zuletzt verlassenen Position (z.B. vor /warp).

GUI/Ingame-Interaktionen:
Keine speziellen GUIs. Teleport-Befehle starten in der Regel einen kurzen Countdown („Warmup“) und erfordern, dass du dich währenddessen nicht bewegst oder kämpfen kannst (bricht der Vorgang ab). Bei erfolgreichem Teleport kommt eine Bestätigung. Wenn du angegriffen wirst, wird der Teleport (Warump) meist abgebrochen (nicht bestätigt).

Serverunterschiede:

Lobby: /spawn funktioniert hier zum Spawn der Lobby. Warps (/warp) können in der Lobby aktiv sein (z.B. um Arenen, Shops, Mini-Games zu erreichen).

Adventure: Homes, /spawn, Teleport-Anfragen funktionieren, um sich in Welt zu bewegen.

Bauwelt: Oft können Teleport-Anfragen oder Homes nur innerhalb der Bauwelt genutzt werden (je nach Server-Einstellung). Plot- und Baumodus-spezifische Teleporte existieren (z.B. /plot claim etc.).

Tipps / Best Practices:

Setze an allen wichtigen Orten ein Home (Haus, Mine, Stadt) mit /sethome, um lange Wege zu sparen.

Warte nach Teleport-Anfragen, bevor du einen weiteren Befehl eingibst, da du kurz inaktiv bist (Warmup).

Nutze /back beim Verirren oder wenn ein Teleport fehlschlägt (z.B. wegen Combat). Dieser Befehl bringt dich zurück zum Startpunkt der letzten Teleport-Funktion.

Teleport-Anfragen werden in der Regel in Chat-Form vorgestellt; antworte zügig mit /tpaccept oder /tpdecline.

Einschränkungen / Fallstricke:

Viele Teleport-Funktionen haben eine Verzögerung (Warmup). Ein Treffer durch einen Mob bricht sie ab.

Homes und /back können manchmal in Kombat oder in bestimmten Bereichen blockiert sein (das hängt vom Server ab).

Nur deine eigenen Homes sind zugänglich; andere Spieler können ihr Home nicht verwenden.

FAQ:

F: Wie viele Homes kann ich setzen?
A: Oft sind mehrere Homes erlaubt (per Permissions). Probiere /sethome Haus /sethome Mine etc., wenn du Rechte hast.

F: Kann ich auch zu anderen Spielern springen?
A: Nur, wenn sie dich per /tpa eingeladen haben. Direktes Teleporten zu Fremden ist normalerweise nicht möglich.

F: Wie kann ich mich überallhin teleportieren?
A: Verwende /warp <Name>, um zu vordefinierten Warppunkten zu gehen (sofern freigeschaltet).
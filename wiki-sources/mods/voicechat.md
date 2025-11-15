Sprachchat Übersicht

Unser Server bietet integrierten Voice-Chat für echte Kommunikation. Mit gedrückter Taste kannst du in Echtzeit mit anderen in der Nähe sprechen.

Aktivierung: Drücke V (Taste kann variiert sein) um das Voice-Chat-Menü zu öffnen.

Proximity Chat: Standardmäßig hörst du und wirst von Spielern gehört, die in deiner Nähe sind (ähnlich wie in Teamspeak-Radius).

Push-to-Talk: Lege in den Einstellungen fest, ob du zum Sprechen eine Taste drücken musst (Push-to-Talk) oder ob ständige Sprachaktivierung möglich ist (meist V-Taste halten). (Konfigurationserverseitig, nicht bestätigt)

GUI: Im Voice-Menü (Taste V) kannst du z.B. Mikrofonleiser/Mikrofonstummschalten, Gruppen erstellen usw.

Icon-Anzeige: Wenn du sprichst, erscheint über deinem Kopf ein Mikrofon-Symbol. Ebenso siehst du andere Spieler mit Sprechsymbol (Betätigung).

Sprachqualität: Gute Internetverbindung erforderlich; standardmäßig ist Sprach-Codec eingestellt.

Wichtige Hinweise:

Client-Mod notwendig: Du benötigst die Voice-Chat-Mod (z.B. Simple Voice Chat) auf deinem Client, damit es funktioniert
modrepo.de
.

Port: Stelle sicher, dass in deiner Firewall der UDP-Port 24454 offen ist, da dieser für Sprachdaten genutzt wird.

Privatsphäre: Stelle dein Mikrofon nur an, wenn du sprechen möchtest (Im Voice-Menü oder per Taste stummschalten).

Serverunterschiede:

Funktioniert auf allen Welten gleichermaßen, sofern du die Mod hast. Spieler ohne Mod hören nichts und sehen dich stummschalten.

Tipps / Best Practices:

Schalte dich stumm, wenn du nicht sprichst (z.B. Mikrofon-Symbol im Menü aus).

Prüfe vor Spielbeginn die Mikrofon-Einstellungen (etwa in den Sound-Einstellungen des Menüs).

Beachte Server-Regeln: Proximity-Chat bedeutet, du kannst Leute um dich herum hören – achte darauf.

FAQ:

F: Wie starte ich Gruppen-Sprachchat?
A: Verwende /voicechat invite <Name>, um einen anderen Spieler in einen privaten Sprachkanal einzuladen (s. nächste Seite).

F: Ich höre niemanden – was tun?
A: Prüfe, ob du die Voice-Mod installiert hast und der Port (24454 UDP) offen ist.

F: Kann ich permanent leise bleiben?
A: Ja, du kannst dein Mikro über das Menü (Taste V) oder Befehle aus-/einklappen.

Sprachchat-Gruppen und Troubleshooting

Du kannst nicht nur in der Nähe sprechen, sondern auch private Gruppen erstellen, um mit bestimmten Spielern zu reden.

Gruppenchat erstellen: Nutze /voicechat invite <Spieler> – du lädst damit jemanden zu deinem Sprachkanal ein. Der Eingeladene kann mit /voicechat join <dein Name> beitreten oder einfach die Einladung akzeptieren.

Beitreten/Verlassen: Mit /voicechat leave verlässt du den aktuellen Gruppenchat.

Gruppen beenden: Öffne das Voice-Menü (Taste V) und löse die Gruppe auf, oder warte, bis alle gehen.

Sprachregion: Gruppen-Chat hat die gleiche Reichweite wie Proximity (d.h. alle Gruppenmitglieder hören sich in Normalabstand, nicht global!). Nur für kurze Gruppe gedacht.

Fehlersuche:

Mod benötigt: Alle Gruppenfunktionen erfordern die Voice-Chat-Mod auf dem Client
modrepo.de
. Ohne Client-Mod kannst du weder hören noch sprechen.

Port öffnen: Stelle sicher, dass in deinem Netzwerk UDP-Port 24454 offen ist, sonst funktioniert der Sprachverkehr nicht.

Audio-Einstellungen: Prüfe im V-Menü die Lautstärke von Mikrofon und Lautsprecher. Stelle sicher, dass dein Mikrofon nicht stummgeschaltet ist.

Server-Whitelist: Manchmal ist der Voicechat nur in bestimmten Welten (nicht bestätigt) aktiv – falls in Lobby nichts geht, wechsle zur Adventurewelt.

Befehle:
```
/voicechat invite <Spieler>  // Lädt Spieler in Gruppenchat ein.
/voicechat join <Name>      // Tritt dem Sprachkanal eines Spielers bei.
/voicechat leave            // Verlässt deine Gruppe.
/voicechat mute <Spieler>   // (Optional) Stellt das Hören eines Spielers aus.
/voicechat unmute <Spieler> // (Optional) Nimmt Stummschaltung zurück.
```

(Die letzten Befehle können variieren.)

FAQ:

F: Wie beitreten, wenn jemand mich eingeladen hat?
A: Gib /voicechat accept ein oder öffne das V-Menü und klicke auf „Beitreten“, falls angezeigt (je nach Plugin).

F: Ich kann niemanden hören, obwohl Gruppenchat läuft?
A: Prüfe, ob du dich selbst nicht stummgeschaltet hast. Auch ein Neustart des Clients (Escape-Menü) kann helfen.

F: Sprachdaten rauschen/stocken?
A: Das liegt meist an der Netzwerk-Qualität. Stell sicher, dass die Internetverbindung stabil ist.
Quest-Übersicht und Kategorien

Quests auf dem Server sind in verschiedene Themenbereiche eingeteilt und bieten Belohnungen in Moneten. Zu den Kategorien gehören z.B. Aktivitäts-Quests (Tieraufgaben), Sammel-Quests (Rohstoffe sammeln), Jagd-Quests (Monster töten), Verzauberungs-Quests usw. Jede Quest hat ein klares Ziel (z.B. „Schere 15 Schafe“), eine Belohnung und kann einmalig absolviert werden.

Wichtige Befehle:

```
/quests list               // Zeigt alle verfügbaren Quests oder Questkategorien an.
/quests take <Questname>   // Akzeptiert die Quest mit dem gegebenen Namen.
/quests quit <Questname>   // Gibt die Quest wieder auf (wenn unterstützt).
/quests journal            // Öffnet dein Quest-Journal (GUI).
/quest                     // Zeigt dein aktuelles Questziel an.
/quest <Questname>        // Zeigt Details über eine bestimmte Quest an.
```

Beispiel:

/quests list listet dir alle Quest-Kategorien auf (z.B. „Aktivität, Brauen, Sammeln...“).

/quests take Melken #1 – Du nimmst die Quest „Melken: Kühe melken“.

/quests journal – Öffnet ein Journal, in dem du aktuelle Quests siehst.

/quest – Zeigt dein nächstes Ziel der aktiven Quest (z.B. „5 Kühe melken“).

Quests und Kategorien:

Aktivitäts-Quests: Aufgaben wie „Melke 5 Kühe“ oder „Schere 15 Schafe“. (Mehrfache Stufen mit steigendem Ziel.)

Brauen-Quests: Braue x Tränke mit Braustand.

Bau-Quests: Baue oder platziere bestimmte Blöcke (z.B. 256 Holzplanken).

Sammel-Quests: Sammle bestimmte Rohstoffe (Erz, Samen, etc.).

Handwerks-Quests: Stelle bestimmte Gegenstände her (Werkzeuge, Werkbank, Amboss, etc.).

Grabungs-Quests: Grabe oder pflanze Bodenblöcke (Erde, Bambus, Farne, etc.).

Verzauberungs-Quests: Führe besondere Rüstungs-/Gegenstandskombinationen oder Verzauberungen durch (z.B. trage ein komplettes Set) (nicht bestätigt).

Expeditions-Quests: Sammle Materialien aus der Oberwelt/Nether (z.B. „Sammle 64 Kohle“) oder Nether/Ende spezifisch (Glowstone, Enderperlen) (Weltabhängig, nicht bestätigt).

Farm-/Angel-/Jagd-Quests: Typische Quests wie „Fange 8 Fische“, „Töte 64 Zombies“.

Impossible-Quests: Sehr hohe Ziele wie „Bau 19200 Stein ab“ oder „Spiele 120 Stunden“.

Sonstige: Kleinere Spezialquests (z.B. “Töte 20 Creeper mit Explosion” etc.).

(Diese Beispiele basieren auf den vorliegenden Questdaten und sind nicht vollständig aus externen Quellen bestätigt.)

GUI/Ingame-Interaktionen:
Mit /quests list oder /quests journal öffnet sich meist ein GUI-Menü mit allen Quests und Infos. Dort klickst du die Quest an, um Details zu sehen. Manche Quests verwenden außerdem Aktionsleisten, Partikel oder Soundeffekte, wenn du ein Ziel erreichst (z.B. bei Abschluss).

Serverunterschiede:

Adventure: Hier findest du typischerweise alle Quests (nicht bestätigt).

Lobby/Bauwelt: Keine Quests verfügbar (questspezifische Welten).

Tipps / Best Practices:

Setze Priorität auf einfache Quests zum Start („Kühe melken“, „Holz abbauen“).

Die Belohnungen skalieren oft mit Schwierigkeit und Wiederholbarkeit.

Mit /quests journal behältst du den Überblick über Fortschritte.

Einschränkungen / Fallstricke:

Jede Quest ist nur einmalig lösbar (Wiederholbar: Nein).

Ziele müssen genau erfüllt werden (z.B. nicht auf andere Weltportale ausweichen, wenn „Adventure“ verlangt wird).

Manche Ziele (z.B. Monster kills) gelten nur, wenn sie in der richtigen Welt getötet werden (Adventure vs. Nether) (nicht bestätigt).

FAQ:

F: Wo finde ich meine aktiven Quests?
A: Benutze /quests journal (öffnet das Quest-Buch) oder /quest für das aktuelle Ziel.

F: Wie nehme ich neue Quests an?
A: Gib /quests list ein und klicke die gewünschte Quest im Menü an oder nutze /quests take <Name>, sofern unterstützt.

F: Was passiert, wenn ich eine Quest abbreche?
A: Mit /quests quit <Name> gibst du die Quest freiwillig auf. Du kannst sie dann später nicht einfach weiterführen.

F: Gibt es Levels/Erfahrung für Quests?
A: Nein, Quests geben nur Moneten als Belohnung. (Quest-Punkte/Levels werden nicht verwendet.)


Quest-Mechaniken und Journal

Die Quests sind Teil eines fortlaufenden Systems. Jede Quest kann aus mehreren Schritten bestehen und ist in ein Quest-Journal eingebunden.

Annehmen: Mit /quests take <Questname> startest du eine Quest und erhältst Aufgaben.

Fortschritt: Verfolge deinen Fortschritt im Journal (/quests journal) oder mit /quest (zeigt das aktuelle Ziel).

Abschluss: Erfüllst du alle Ziele einer Quest, erhältst du automatisch Belohnungen (Moneten).

Abbrechen: Mit /quests quit <Questname> kannst du eine laufende Quest aufgeben.

Journal:
Ein GUI zeigt alle aktiven Quests. Öffne es mit /quests journal. Hier findest du nächste Ziele und Belohnungen. Nutze regelmäßige Checks, um keine Quest zu vergessen.

Beispiel:
Nimm die Quest „Melken 5 Kühe“. Im Journal siehst du dann „0/5 Kühe gemolken“. Nach jedem Melk-Schritt steht dort „1/5“, „2/5“ etc. Sobald 5/5 erreicht sind, bekommst du die Belohnung automatisch.

Serverunterschiede:

Alle Quests sind überall abschließbar (Lobby/Bauwelt/Adventure).

Tipps / Best Practices:

Schau regelmäßig ins Journal, damit du nicht feststeckst.

Manche Quests belohnen große Mengen Moneten; diese solltest du zuerst machen.

Quest-IDs kannst du in /quests list einsehen (hilfreich für /quests take <ID>).

Einschränkungen / Fallstricke:

Viele Quests sind nicht wiederholbar – plan deine Zeit.

Keine Erfahrung (XP) für Quests, nur die Moneten zählt (die Mechanik ist rein „Währung belohnen“).

FAQ:

F: Wie nehme ich die nächste Quest an?
A: Wähle sie im Journal aus oder nutze /quests list und /quests take <Name>.

F: Kann ich mehrere Quests gleichzeitig machen?
A: Ja, oft kannst du mehrere in verschiedenen Kategorien parallel laufen lassen.
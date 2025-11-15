Spieler können in der Adventure-Welt Grundstücke (Claims) für sich sichern. Damit schützt man Bauwerke vor Zerstörung durch andere. Das Claim-System sorgt dafür, dass nur Besitzer und eingetragene Mitspieler Änderungen im geschützten Gebiet vornehmen können.

Claim-System:
Mit einem Claim wird ein ganzer Chunk (16×16 Blöcke) geschützt. Die wichtigsten Befehle sind:

```
/claim [<Radius>]         // Beansprucht den aktuellen Chunk (Radius = Claimgröße).
/unclaim                  // Hebt den Schutz des Chunks auf (löscht Claim).
/claim add <Spieler>      // Füge einen Spieler zu deinem Claim hinzu.
/claim remove <Spieler>   // Entferne einen Spieler aus deinem Claim.
/claim tp <Name>          // Teleportiert dich zu deinem eigenen Claim mit diesem Namen.
/claims                   // Zeigt alle Claims in der Welt an (Karte oder Liste).
/claim see                // Zeigt die Claim-Grenzen mit Partikeleffekt an.
/claim list               // Öffnet eine Übersicht deiner Claims (Menu).

```

Beispiel:

/claim – Beansprucht den Chunk, in dem du gerade stehst (dein neues Grundstück).

/claim add Max – Macht Max zum Mitspieler deines Claims. Er kann dort jetzt bauen.

/claim remove Max – Entfernt Max wieder.

/unclaim – Gibt deinen Claim frei (nur möglich für den Besitzer).

GUI/Ingame-Interaktionen:

Nach /claim see siehst du bunte Umrandungen um den Chunk.

Beim Claimen ertönt oft ein Soundeffekt.

Das Claim-Plugin kann auch Nachrichten anzeigen („Du hast jetzt einen Claim!“).

Serverunterschiede:

Nur Adventure: Das Claim-System gilt nur in der Adventure-Welt. Bauwelt verwendet Plot-System (siehe dort).

Wer eine Claim-Zone betritt, bekommt möglicherweise eine kurze Info („Du betrittst Max’ Claim“).

Tipps / Best Practices:

Claim-Anforderungen: Weiß in etwa, wie groß ein Claim sein soll, bevor du ihn erstellst (/claim <Radius>).

Nachbarplots: Es ist möglich, dass Claims aneinander grenzen. Kommuniziere mit Spielern, um Konflikte zu vermeiden.

Mitglieder: Füge Freunden mit /claim add <Name> Bau-Rechte hinzu, z.B. für gemeinsame Projekte.

Schau dir mit /claims an, wo Claims liegen (könnte GUI oder Chat-Liste sein).

Einschränkungen / Fallstricke:

Ein Claim schützt nur den Chunk, nicht darüber oder darunter (bei vertikal angeordneten Claims auf mehreren Ebenen bitte mehrfach claimen, falls notwendig).

Manchmal wird dein Claim gelöscht, wenn du offline bist (dauerhafte Claims nur bis Starterbaufläche, nicht bestätigt).

Events (Explosionen, Feuer) sind innerhalb deines Claims ebenfalls blockiert, solange kein Monster hineinwirkt.

FAQ:

F: Wie viele Claims darf ich machen?
A: Standardmäßig einen pro Spieler (der erste Claim). Mehrere Claims müssen erst freigeschaltet werden (abgehackte Anforderungen).

F: Kann ich meinen Claim vergrößern/verkleinern?
A: Nein, du kannst nur neue Claims hinzufügen (sie müssen aber angrenzen). Einziges „Verkleinern“ wäre, Claim freigeben und neu claimen.

F: Können andere Spieler etwas in meinem Claim kaputt machen?
A: Nur wenn du sie als Mitspieler einträgst. Ansonsten ist der Claim für Fremde gesperrt.
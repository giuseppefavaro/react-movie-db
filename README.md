# React MovieDB
## Esercizio 04/05/2022

- aggiornare il codice del vostro progetto del movie db per abilitare il lazy loading
- (opzionalmente) rendere il componente di fallback (<Loading />) più interessante utilizzando le CSS animations
- integrare il file .yml nel vostro repo e godersi le build automatiche

## Esercizio 02/05/2022

- Completare l’implementazione (si deve poter vedere l’alert anche quando create e cancellate una scheda)

- fare in modo che l’alert scompaia dopo un certo numero di secondi (usiamo 5 secondi come base, poi ognuno è libero di cambiarlo come preferisce)

- aggiungere una terza prop al componente per fare in modo che possa essere visualizzato con colori di sfondo diversi (per esempio cancellando una scheda potremmo voler visualizzare un messaggio con un colore di sfondo diverso da quello della creazione)

## Esercizio 28/04/2022

Sulla base della lezione del giorno:

- Rimpiazzare tutti gli stili con estensione '.css' con SASS (scss). Attenzione al nome del file e all'import nel componente!
- Continuare o iniziare l'esercizio avanzato di ieri per chi non l'avesse ancora concluso/iniziato:
  - Alla Homepage, rendere la parte logica relativa alla `<input>` di ricerca:
  - Filtrare la lista dei movies per `Titolo` e per `Categoria`
### Avanzato

- Ogni singola card dovrebbe presentare una 'X', al cui click venga mostrata una modale che richiede all'utente se cancellare dal Database il movie indicato. La modale deve presentare due pulsati, `Conferma` e `Annulla`.
- Per i più audaci, provare a riutilizzare il componente `<Modal />`, rendendolo riutilizzabile allo scopo.
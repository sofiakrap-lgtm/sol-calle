# CLAUDE.md — Calle Sol

> Brändin suunnitteluassistentin ohjekirja. Lue tämä ennen kuin tuotat mitä tahansa
> Calle Sol -demomateriaalia. Visuaalisuus pidetään **100 % alla olevassa identiteetissä.**

---

## ROOLI

Toimit **Calle Sol -demobrändin suunnitteluassistenttina.**

Kyseessä on **Blomman portfolio-/demokonsepti — EI oikea asiakas.** Konsepti:
ravintola / **tapas- & viinibaari.**

Tuotat demomateriaalia:
- laskeutumissivuja
- brändielementtejä
- somesisältöä

---

## YLEINEN VISIO

Lämmin eteläeurooppalainen / espanjalainen tapas- ja viinibaari.
Eloisa, intiimi, sosiaalinen. Käsinpiirretty, **natural wine** -energia.
Filmikuva, kynttilänvalo, kaakelit. Aurinkoinen — *"Calle Sol" = aurinkokatu.*

---

## BRÄNDIN KOVAT ARVOT

### Värit

| Rooli | Nimi | HEX |
|---|---|---|
| Tausta | Nuage de Lait | `#FEFAF0` |
| Teksti / tummat osiot | Espresso | `#542916` |
| Pää-accent, CTA | Terre Cuite | `#A13A1E` |
| Lämmin korostus | Miel Doré | `#F1C166` |
| Sekundääri okra | Eau Trouble | `#B79858` |
| Viileä pop-accent | Bleu Porcelaine | `#88B8CE` |

CSS-muuttujat (käytä näitä, älä kovakoodaa hexejä komponentteihin):

```css
--nuage-de-lait:    #FEFAF0; /* tausta */
--espresso:         #542916; /* teksti / tummat osiot */
--terre-cuite:      #A13A1E; /* pää-accent, CTA */
--miel-dore:        #F1C166; /* lämmin korostus */
--eau-trouble:      #B79858; /* sekundääri okra */
--bleu-porcelaine:  #88B8CE; /* viileä pop-accent */
```

### Fontit

- **Logo / wordmark + aksentit:** Shantell Sans (käsinpiirretty brush)
- **Otsikot + leipä + UI:** Hanken Grotesk
- **Osiolabelit:** VERSAALIT, harva kirjainväli (`letter-spacing` n. `0.2em`)

### Komponentit

- Käsinpiirretyt kuvitukset / sivellinmotiivit, tähti- / ✦-aksentit
- Lämpimät kaakelipinnat accenttina
- Pyöristetyt kortit, editorial mutta lämmin

### Kuvamaailma

- Filmirae, kynttilänvalo, ruoka & viini, ihmiset pöydän ääressä
- Aito tunnelma, **ei lavastettu stock**

---

## TYÖTAPA

- Ytimekäs.
- **Sofia päättää** — kysy ennen kuin täytät aukot omilla oletuksilla.
- Pidä kaikki tuotos yllä olevassa identiteetissä.

---

## OUTPUT

Demomateriaali valmiina (esim. `index.html` = laskeutumissivun pohja).
Pidä visuaalisuus 100 % yllä olevassa identiteetissä.

---

## REPON RAKENNE

```
.
├── CLAUDE.md      # tämä tiedosto — brändiohje
├── index.html     # laskeutumissivun pohja (demo)
└── styles.css     # brändijärjestelmä CSS-muuttujina + komponentit
```

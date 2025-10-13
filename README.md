Yksikkötestiraportti

*Tavoite
Toteuttaa vähintään viisi yksikkötestiä luokkien *metodeille* ja testata mm. raja-arvot ja virhetilanteet.

*Testattava luokka
`MathService` (`src/app/services/math.service.ts`)

*Metodit
- `add(a,b)`: summa
- `subtract(a,b)`: erotus
- `multiply(a,b)`: tulo
- `divide(a,b)`: osamäärä, heittää virheen jos `b === 0`
- `power(a,b)`: potenssi
- `clamp(x,min,max)`: rajoittaa arvon välille `[min,max]`, heittää virheen jos `min > max`

*Testit (specit) ja tarkoitus
1. **adds positive numbers** – peruspaluuarvo
2. **subtract can yield negative result** – negatiivinen tulos
3. **multiplies by zero -> zero** – raja-arvo, nolla
4. **divides normally** – peruspaluuarvo
5. **throws on division by zero** – virheraja-arvo
6. **power with zero exponent is 1** – raja-arvo
7. **clamp caps below min to min** – raja-arvo (alapuoli)
8. **clamp throws when min > max** – virheellinen syöte
![Uploading Näyttökuva 2025-10-13 133325.png…]()

*Tulokset
- Kaikki testit läpäisy: **X specs, 0 failures** (Karman tuloste).
<img width="1270" height="615" alt="image" src="https://github.com/user-attachments/assets/4282228a-2abb-4309-bf05-8e708e671e2e" />


*Lähdekoodi
- `src/app/services/math.service.ts`
- `src/app/services/math.service.spec.ts`


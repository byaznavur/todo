`useRef` — bu ReactJS-dagi hook bo‘lib, u orqali siz qayta render qilishlar orasida o‘zgaruvchan obyektni saqlab turishingiz mumkin. `useState`dan farqli o‘laroq, `useRef` obyektining qiymati o‘zgartirilganda, komponent qayta render qilinmaydi. `useRef` ko‘pincha DOM elementlariga to‘g‘ridan-to‘g‘ri kirish va ularni boshqarish yoki qayta render qilinmasdan o‘zgartirilishi kerak bo‘lgan o‘zgaruvchan qiymatni saqlash uchun ishlatiladi.

### `useRef` qanday ishlaydi?

- **Ref yaratish:** Siz refni `useRef` hook yordamida yaratishingiz mumkin:

  ```javascript
  const myRef = useRef(boshlang‘ichQiymat);
  ```

  `boshlang‘ichQiymat` ixtiyoriy bo‘lib, istalgan qiymat bo‘lishi mumkin. Agar hech qanday qiymat berilmasa, ref obyektining `current` xususiyati sukut bo‘yicha `undefined` bo‘ladi.

- **Refga murojaat qilish:** `useRef` hook obyekt bilan `current` xususiyati orqali foydalanish imkonini beradi. Ushbu xususiyatga har qanday qiymat saqlanishi va keyinchalik unga murojaat qilinishi yoki o‘zgartirilishi mumkin:

  ```javascript
  console.log(myRef.current); // Qiymatga murojaat qilish
  myRef.current = yangiQiymat; // Qiymatni o'zgartirish
  ```

- **Renderlar orasida saqlash:** `current`da saqlangan qiymat komponent qayta render qilinganda saqlanib qoladi va bu qayta render qilishni keltirib chiqarmaydi.

### Asosiy foydalanish holatlari

1. **DOM elementlariga kirish:**

   ```javascript
   import React, { useRef, useEffect } from "react";

   function InputFocus() {
     const inputRef = useRef();

     useEffect(() => {
       inputRef.current.focus();
     }, []);

     return <input ref={inputRef} type="text" />;
   }
   ```

2. **Oldingi qiymatlarni saqlash:**

   ```javascript
   import React, { useRef, useEffect } from "react";

   function PreviousValue({ value }) {
     const prevValue = useRef();

     useEffect(() => {
       prevValue.current = value;
     });

     return (
       <div>
         <p>Joriy qiymat: {value}</p>
         <p>Oldingi qiymat: {prevValue.current}</p>
       </div>
     );
   }
   ```

3. **Ma'lum holatda qayta renderlarni oldini olish:**

   ```javascript
   import React, { useState, useRef } from "react";

   function Counter() {
     const [count, setCount] = useState(0);
     const renders = useRef(0);

     renders.current++;

     return (
       <div>
         <p>Sanash: {count}</p>
         <p>Renderlar soni: {renders.current}</p>
         <button onClick={() => setCount(count + 1)}>Ko‘paytirish</button>
       </div>
     );
   }
   ```

### Amaliy mashqlar

1. **Elementga scroll qilish:**

   - `useRef` orqali sahifaning ma'lum bir qismiga scroll qiladigan tugmani yarating.

2. **Input maydoniga fokus berish:**

   - Bir nechta input maydonlariga ega formani yarating. Forma yuborilganda, birinchi input maydoniga fokus tushsin.

3. **Oldingi holatni saqlash:**

   - `useRef` yordamida joriy qiymat va oldingi qiymatni ko‘rsatuvchi counter yarating.

4. **Stopwatch:**

   - `useRef`ni interval ID-ni saqlash uchun ishlatib, start va stop funksiyalariga ega bo‘lgan stopwatch yarating.

5. **Fayl yuklash preview:**
   - `useRef` orqali fayl yuklash input elementiga kirish imkonini beradigan va tanlangan rasmni preview qiladigan komponent yarating.

Bu mashqlar sizga `useRef`ni ReactJS da qanday samarali foydalanishni tushunishingizga yordam beradi.

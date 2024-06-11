# Lesson-3
*Bu darsda React Router Dom    va svgr blan tanishishingiz mumkin*

### vite-svgr
> vite-svgr  plugin bu  loyhada qilgan svg-larni react componenga aylantirish uchun ishlatiladi va bu svg larni loyihaga olib kelish uchun juda qulay [qo'shimcha ma'lumot](https://www.npmjs.com/package/vite-plugin-svgr)
> 
>Bu plugen vite +reactda urnatilishi 
> 
> >Bu svgr plugeni reactni o'zida boshqacha yul bilan urnatiladi

**svgrni loyihaga urnatish va sozlash**

1 o'rnatush
```
npm install --save-dev vite-plugin-svgr
```
2 svgrni sozlash

*svgr o'rnaligandan so'ng    **vite.config.js**  faylidan  svgrni sozlashimiz mumkin*

_vite.config.js* faylini sozlamalari_

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr(
    { include: "**/*.svg",}
  )],
})

```

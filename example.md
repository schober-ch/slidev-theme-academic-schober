---
theme: ./
favicon: /theme/favicon.svg
layout: lecture-cover
class: text-white
coverAuthor: Prof. Dr. Notso Clever
coverBackgroundUrl: >-
  https://unsplash.com/photos/CANL3bzp6wU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cXVhbnR1bXxlbnwwfHx8fDE3MDcxMjEzNjJ8MA&force=true&w=2400
coverBackgroundSource: unsplash
coverBackgroundSourceUrl: >-
  https://unsplash.com/photos/CANL3bzp6wU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cXVhbnR1bXxlbnwwfHx8fDE3MDcxMjEzNjJ8MA&force=true&w=2400
fonts:
  local: Montserrat, Roboto Mono, Roboto Slab
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled:
    - 1
title: A lecture
lectureHeader: true
lectureName: A lecture
lectureSlug: a-lecture
lectureDescription: A lecture about an interesting topic
info: >
  # slidev-theme-academic


  Created and maintained by [Alexander Eble](https://www.alexeble.de).


  - [GitHub](https://github.com/alexanderdavide/slidev-theme-academic)

  - [npm](https://www.npmjs.com/package/slidev-theme-academic)


  slidev-theme-academic is licensed under
  [MIT](https://github.com/alexanderdavide/slidev-theme-academic/blob/master/LICENSE).


  <ul>
    <li>
      <a href="https://www.alexeble.de/impressum/" target="_blank">Legal information of this website</a>
    </li>
    <li>
      <a href="https://www.alexeble.de/datenschutz/" target="_blank">Privacy policy of this website</a>
    </li>
  </ul>
---

# A lecture

You can see more!


---
layout: table-of-contents
hideInToc: false
---

# table-of-contents

---
layout: index
indexEntries:
  - { title: "Curated cover image for Slidev", uri: 4 }
  - { title: "Curated cover image for Slidev", uri: 5 }
---

# index

`index` used as list of figures

---
layout: figure
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 1
figureUrl: https://picsum.photos/1920/1080
---

# figure

<Footnotes separator>
  <Footnote :number=1><a href="https://picsum.photos/" rel="noreferrer" target="_blank">Picsum</a></Footnote>
</Footnotes>

---
layout: figure-side
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 1
figureUrl: https://picsum.photos/1024/768
---

# figure-side

- Ensures figures are displayed nicely out of the box
- Allows placing the figure on the left or right
- Features an optional figure caption

<Footnotes separator>
  <Footnote :number=1><a href="https://picsum.photos/" rel="noreferrer" target="_blank">Picsum</a></Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Footnotes & Footnote

<span class="font-extralight">
  <q>Give credit where credit is due</q>
  <sup>1</sup>
</span>

<Footnotes separator>
  <Footnote :number=1>Smart person</Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Pagination

<span class="font-extralight">Enabled by default</span>

<img
  class="absolute transform rotate-z-180 -top-0.9 -right-21.5 w-36"
  src="/box.svg"
/>

<p class="absolute font-extralight right-14 transform rotate-8 top-4">Here!</p>

---
layout: index
indexEntries:
  - { title: "GitHub", uri: "https://github.com/alexanderdavide/slidev-theme-academic" }
  - { title: "npm", uri: "https://www.npmjs.com/package/slidev-theme-academic" }
  - { title: "Slidev", uri: "https://sli.dev" }
indexRedirectType: external
---


# index

`index` used as a list of references

---
---
# Lectures

<Lectures/>

---

# Bloch Sphere

<GrokBloch/>

# slidev-theme-academic-schober

Simplifies creating academic presentations with
[Slidev](https://github.com/slidevjs/slidev) by providing the necessary
components and layouts.

Theme based on the original
[slidev-theme-academic](https://github.com/alexanderdavide/slidev-theme-academic)
from alexanderdavide.

**This theme includes customizations for courses and lectures that are not
generic and might only be useable when using my full course setup.**


## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: academic-schober
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts
### lecture-cover
Custom cover based on `cover`, but using the information from the custom
`course.json` file.

## Components
### Lecture Overview
`Lectures` uses the custom `course.json` file to display an overview of all
lectures in a given course. For more details, see [Custom Course Template](https://mygit.th-deg.de/schober/templates/course-template)


## themeConfig

Global parameters of the theme can be set using the `themeConfig` block in the frontmatter of the first page.

Be aware that defining the `themeConfig` block initializes all parameters as `undefined`; hence you may need to set parameters albeit using defaults.

| **Parameter**             | **Type** | **Values**   | **Default** | **Notes**                                                                                                                                          |
| ------------------------- | -------- | ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paginationPagesDisabled` | Array    | -            | `undefined` | Disable global rendering of `Pagination` for pages having individual `Pagination`.                                                                 |
| `paginationX`             | String   | `'l'`, `'r'` | `'r'`       | To disable global default rending, set both `paginationX` and `paginationY` to `undefined`. `Pagination` can then still be used on selected pages. |
| `paginationY`             | String   | `'b'`, `'t'` | `'t'`       | To disable global default rending, set both `paginationX` and `paginationY` to `undefined`. `Pagination` can then still be used on selected pages. |

## Contributing

- `npm run setup`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG

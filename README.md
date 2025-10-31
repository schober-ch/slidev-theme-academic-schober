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

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Layouts
### lecture-cover
Custom cover based on `cover`, but using the information from the custom
`course.json` file.

## Components
### Lecture Overview
`Lectures` uses the custom `course.json` file to display an overview of all
lectures in a given course. For more details, see [Custom Course Template](https://mygit.th-deg.de/schober/templates/course-template)

### Footnotes

`Footnotes` is to be used as parent of `Footnote` children.

| **Parameter** | **Type** | **Values**       | **Default** | **Notes**                                                       |
|---------------|----------|------------------|-------------|-----------------------------------------------------------------|
| `filled`      | Boolean  | `true`, `false`  | `false`     | Overlay subordinate content that may puts itself in background. |
| `separator`   | Boolean  | `true`, `false`  | `false`     | -                                                               |
| `x`           | String   | `'l'`, `'r'`     | `'r'`       | -                                                               |
| `y`           | String   | `'col'`, `'row'` | `'row'`     | -                                                               |

### Footnote

`Footnote` is to be used as children of a `Footnotes` parent.

| **Parameter** | **Type** | **Notes**                                        |
| ------------- | -------- | ------------------------------------------------ |
| `number`      | Number   | Align with an attribution in the pages' content. |

![Footnotes & Footnote](../assets/example-export/06.png)

### Pagination

`Pagination` is rendered globally by default. The global configuration can be defined using [`themeConfig`](#themeconfig).

If certain pages need individual configuration of `Pagination`, exclude them from global rendering of `Pagination` using [`themeConfig`](#themeconfig) and add `Pagination` manually.

| **Parameter** | **Type**      | **Values**   | **Default** | **Notes**                                                                                    |
| ------------- | ------------- | ------------ | ----------- | -------------------------------------------------------------------------------------------- |
| `classNames`  | Array, String | -            | `undefined` | `Pagination` by default uses the color given by the color schema currently active in Slidev. |
| `x`           | String        | `'l'`, `'r'` | `'r'`       | -                                                                                            |
| `y`           | String        | `'b'`, `'t'` | `'t'`       | -                                                                                            |

![Pagination](../assets/example-export/07.png)

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

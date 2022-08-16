# OpenITI TEI Corpus Site Template

This template is used by the TEI conversion process to generate human-readable versions of the TEI documents.

## How to setup the template

To use the template, TEI documents must be added under `static/tei`.

Provide metadata for the TOC and more via a `/static/sitemap.json` structured like this:

```json
{
  "group": "0575AH",
  "authors": [
    {
      "name": "Samcani",
      "id": "0562Samcani",
      "books": [
        {
          "title": "Tahbir",
          "id": "0562Samcani.Tahbir",
          "files": [
            {
              "title": "Shamela",
              "version": "URI",
              "file": "0562Samcani.Tahbir.Shamela0001694-ara1.completed"
            },
            {
              "title": "JK001322",
              "version": "URI",
              "file": "0562Samcani.Tahbir.JK001322-ara1"
            }
          ]
        }
      ]
    }
  ]
}
```

## Running locally for development

* Install NodeJS
* Install `yarn` (recommended, but `npm` can be used too):
  `npm install -g yarn`
* Install dependencies:
  `yarn install`
* Run development server:
  `yarn develop`

## To build the static site

`yarn build`
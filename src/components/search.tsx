"use client"

import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import Link from "next/link"
import { InstantSearchNext } from "react-instantsearch-nextjs"
import "../app/app.css"
import { Content } from "./content"
const { searchClient } = instantMeiliSearch(
  "https://ms-adf78ae33284-106.lon.meilisearch.io",
  "a63da4928426f12639e19d62886f621130f3fa9ff3c7534c5d179f0f51c4f303"
)

const future = { preserveSharedStateOnUnmount: true }

export default function Search(): JSX.Element {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">react-instantsearch-nexjts</a>
        </h1>
        <p className="header-subtitle">
          <Link href="/page1">📃 Page 1</Link>
        </p>
        <p className="header-subtitle">
          <Link href="/page2">📃 Page 2</Link>
        </p>
      </header>
      <div className="container">
        <li>Open console</li>
        <li>Enter something into the search box</li>
        <li>Quickly switch to /page2</li>
      </div>
      <div className="container">
        {/* <InstantSearch
          searchClient={searchClient}
          indexName="steam-videogames"
          future={future}
        >
          <Content />
        </InstantSearch> */}
        <InstantSearchNext
          searchClient={searchClient}
          indexName="steam-videogames"
          future={future}
        >
          <Content />
        </InstantSearchNext>
      </div>
    </div>
  )
}

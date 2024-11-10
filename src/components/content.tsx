import type { Hit } from "instantsearch.js"
import {
  Configure,
  Highlight,
  Hits,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch"
import { Panel } from "./panel"

export const Content = () => {
  type HitProps = {
    hit: Hit
  }

  function Hit({ hit }: HitProps) {
    return (
      <article>
        <div>
          <h1>
            <Highlight attribute="name" hit={hit} />
          </h1>
          <p>
            <Highlight attribute="description" hit={hit} />
          </p>
        </div>
      </article>
    )
  }

  return (
    <>
      <Configure hitsPerPage={8} />
      <div className="search-panel">
        <div className="search-panel__filters">
          <Panel header="platforms">
            <RefinementList attribute="platforms" />
          </Panel>
        </div>

        <div className="search-panel__results">
          <SearchBox placeholder="" className="searchbox" />
          <Hits hitComponent={Hit} />

          <div className="pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}

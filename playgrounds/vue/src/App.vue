<template>
  <div>
    <header class="header">
      <h1 class="header-title">Meilisearch + Vue InstantSearch</h1>
      <p class="header-subtitle">Search in Steam video games 🎮</p>
    </header>
    <p class="disclaimer">
      This is not the official Steam dataset but only for demo purpose. Enjoy
      searching with Meilisearch!
    </p>
    <div class="container">
      <ais-instant-search
        :search-client="searchClient"
        index-name="steam-video-games"
      >
        <div class="search-panel__filters">
          <ais-clear-refinements>
            <span slot="resetLabel">Clear all filters</span>
          </ais-clear-refinements>
          <ais-sort-by
            :items="[
              { value: 'steam-video-games', label: 'Relevant' },
              {
                value: 'steam-video-games:recommendationCount:desc',
                label: 'Most Recommended',
              },
              {
                value: 'steam-video-games:recommendationCount:asc',
                label: 'Least Recommended',
              },
            ]"
          />
          <h2>Genres</h2>
          <ais-refinement-list attribute="genres" />
          <h2>Players</h2>
          <ais-refinement-list attribute="players" />
          <h2>Platforms</h2>
          <ais-refinement-list attribute="platforms" />
          <h2>Misc</h2>
          <ais-refinement-list attribute="misc" />
        </div>

        <div class="search-panel__results">
          <ais-search-box placeholder="Search here…" />

          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <div>
                <div class="hit-name">
                  <ais-highlight :hit="item" attribute="name" />
                </div>
                <img :src="item.image" align="left" :alt="item.image" />
                <div class="hit-description">
                  <ais-snippet :hit="item" attribute="description" />
                </div>
                <div class="hit-info">Price: {{ item.price }}</div>
                <div class="hit-info">Release date: {{ item.releaseDate }}</div>
                <div class="hit-info">
                  Recommended: {{ item.recommendationCount }}
                </div>
              </div>
            </template>
          </ais-hits>

          <ais-pagination :padding="4" />

          <ais-configure
            :hits-per-page.camel="6"
            :attributesToSnippet="['description:50']"
            snippetEllipsisText="…"
          />
        </div>
      </ais-instant-search>
    </div>
  </div>
</template>

<script>
import 'instantsearch.css/themes/algolia-min.css'
import { instantMeiliSearch } from '../../../src/index'

export default {
  data() {
    return {
      recommendation: '',
      searchClient: instantMeiliSearch(
        'https://integration-demos.meilisearch.com',
        '99d1e034ed32eb569f9edc27962cccf90b736e4c5a70f7f5e76b9fab54d6a185'
      ),
    }
  },
  methods: {
    order: function (event, searchParameters, refine) {
      refine({
        ...searchParameters,
        sort: this.recommendation,
      })
    },
  },
}
</script>

<style>
body,
h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.ais-Hits-item {
  margin-bottom: 1em;
  width: calc(50% - 1rem);
}

.ais-Hits-item img {
  margin-right: 1em;
  width: 100%;
  height: 100%;
  margin-bottom: 0.5em;
}

.ais-Highlight-highlighted,
.ais-Snippet-highlighted {
  background: cyan;
  font-style: normal;
}

.disclaimer {
  margin-left: 1em;
}

.hit-name {
  margin-bottom: 0.5em;
}

.hit-description {
  font-size: 90%;
  margin-bottom: 0.5em;
  color: grey;
}

.hit-info {
  font-size: 90%;
}

.header {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to right, #4dba87, #2f9088);
  color: #fff;
  margin-bottom: 1rem;
}

.header-title {
  font-size: 1.2rem;
  font-weight: normal;
}

.header-title::after {
  content: ' ▸ ';
  padding: 0 0.5rem;
}

.header-subtitle {
  font-size: 1.2rem;
}

.container {
  padding: 1rem;
}

.ais-InstantSearch {
  max-width: 960px;
  overflow: hidden;
  margin: 0;
}

.search-panel__filters {
  float: left;
  width: 200px;
}

.search-panel__results {
  margin-left: 210px;
}

.ais-SearchBox {
  margin-bottom: 2rem;
}

.ais-Pagination {
  margin: 2rem auto;
  text-align: center;
}
</style>

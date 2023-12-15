import Fuse, { FuseOptionKey } from "fuse.js";
import * as React from "react";

const context1 = React.createContext({})
const context2 = React.createContext({})

/**
 * 
 * @param {T[]} searchable - The array of content to search
 */
export function zrchConfigTest<T extends BaseRecord>({
  // ============= SEARCH
  searchable = [],
  defaultValue,
  defaultResults,
  groupBy,
  // placeholder,
  // onSelect,
  
  // // ============= CONFIG
  // enableAutoComplete,
  // autoCompleteLength,
  // customAutoComplete,

  // includeScore,
  // includeMatches,
  // minMatchCharLength,
  // useExtendedSearch,
  // ignoreFieldNorm,
  // ignoreLocation,
  // distance,
  // fieldNormWeight,
  // findAllMatches,
  // threshold,
  keys,
  
  // // ============= LIMITS
  // resultsLength,

  // // ============= WINDOW
  // open,
  // onOpenChange,
  // enableDialog,
  // enableWindow,
  // portalInto,
  // classNames,

  // // ============= COMPONENTS
  // InitialComponent,
  // EmptyComponent,
  // FooterComponent,
  // RenderItem,
  // RenderList,

  // // ============= PROVIDER
  // children,

}:{
  //// =========== SEARCH
  searchable?: T[];
  defaultValue?: string;
  defaultResults?: T[];
  groupBy?: string;
  
  //// =========== CONFIG
  keys?: FuseOptionKey<T>[];

  //// =========== WINDOW

  //// =========== COMPONENTS




}) {
  // - ONLY provide the minimum required context for usezrch, the window exists in this provider and can use state directly
  // - ALL values should be state driven to allow updating from usezrch
  // - 

  const [_searchable, _setSearchable] = React.useState<T[]>(searchable ?? [])
  const [_value, _setValue] = React.useState<string>(defaultValue ?? '')
  const [_results, _setResults] = React.useState<T[]>(defaultResults ?? [])
  const [_searchKeys, _setSearchKeys] = React.useState<FuseOptionKey<T>[]>(keys ?? [])
  const [_groupResultsBy, _setGroupResultsBy] = React.useState<string>(groupBy ?? '')

  const _fuseMain = React.useMemo(() => new Fuse(_searchable, {

  }), [])

  const _fuseAutoComplete = React.useMemo(() => new Fuse(_searchable, {
    isCaseSensitive: false,
    findAllMatches: true,
    threshold: .5
  }), [])

  return (
    <>

    </>
  )
}




////////////////////////////////////////////////////////////////////////////////////////////
type BaseRecord = Record<string| number | symbol, any>

type ClassNames = {
  wrapper: '',
  input: {
    wrapper: '',
    icon: '',
    element: ''
  },
  autoComplete: '',
  list: '',
  item: '',
  group: '',
}
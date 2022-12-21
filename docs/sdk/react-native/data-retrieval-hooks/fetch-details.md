# Fetch Details

Every hook that leverages `react-query` behind the scenes returns an object which contains the requested information, as well as information on the request itself.  This looks like:

```typescript
{
    fetchDetails: FetchDetailsType,
    [dataIdentifier: string]: Data
}
```

Learn more here: [https://tanstack.com/query/v4/docs/reference/useQuery](https://tanstack.com/query/v4/docs/reference/useQuery)&#x20;

`fetchDetails` encompasses the following information, fields, and functionality:



* `status: String`
  * Will be:
    * `loading` if there's no cached data and no query attempt was finished yet.
    * `error` if the query attempt resulted in an error. The corresponding `error` property has the error received from the attempted fetch
    * `success` if the query has received a response with no errors and is ready to display its data. The corresponding `data` property on the query is the data received from the successful fetch or if the query's `enabled` property is set to `false` and has not been fetched yet `data` is the first `initialData` supplied to the query on initialization.
* `isLoading: boolean`
  * A derived boolean from the `status` variable above, provided for convenience.
* `isSuccess: boolean`
  * A derived boolean from the `status` variable above, provided for convenience.
* `isError: boolean`
  * A derived boolean from the `status` variable above, provided for convenience.
* `isLoadingError: boolean`
  * Will be `true` if the query failed while fetching for the first time.
* `isRefetchError: boolean`
  * Will be `true` if the query failed while refetching.
* `dataUpdatedAt: number`
  * The timestamp for when the query most recently returned the `status` as `"success"`.
* `error: null | TError`
  * Defaults to `null`
  * The error object for the query, if an error was thrown.
* `errorUpdatedAt: number`
  * The timestamp for when the query most recently returned the `status` as `"error"`.
* `isStale: boolean`
  * Will be `true` if the data in the cache is invalidated or if the data is older than the given `staleTime`.
* `isPlaceholderData: boolean`
  * Will be `true` if the data shown is the placeholder data.
* `isPreviousData: boolean`
  * Will be `true` when `keepPreviousData` is set and data from the previous query is returned.
* `isFetched: boolean`
  * Will be `true` if the query has been fetched.
* `isFetchedAfterMount: boolean`
  * Will be `true` if the query has been fetched after the component mounted.
  * This property can be used to not show any previously cached data.
* `fetchStatus: FetchStatus`
  * `fetching`: Is `true` whenever the queryFn is executing, which includes initial `loading` as well as background refetches.
  * `paused`: The query wanted to fetch, but has been `paused`.
  * `idle`: The query is not fetching.
  * see [Network Mode](https://tanstack.com/query/v4/docs/guides/network-mode) for more information.
* `isFetching: boolean`
  * A derived boolean from the `fetchStatus` variable above, provided for convenience.
* `isPaused: boolean`
  * A derived boolean from the `fetchStatus` variable above, provided for convenience.
* `isRefetching: boolean`
  * Is `true` whenever a background refetch is in-flight, which _does not_ include initial `loading`
  * Is the same as `isFetching && !isLoading`
* `isInitialLoading: boolean`
  * Is `true` whenever the first fetch for a query is in-flight
  * Is the same as `isFetching && isLoading`
* `failureCount: number`
  * The failure count for the query.
  * Incremented every time the query fails.
  * Reset to `0` when the query succeeds.
* `errorUpdateCount: number`
  * The sum of all errors.
* `refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>`
  * A function to manually refetch the query.
  * If the query errors, the error will only be logged. If you want an error to be thrown, pass the `throwOnError: true` option
  * `cancelRefetch?: boolean`
    * Defaults to `true`
      * Per default, a currently running request will be cancelled before a new request is made
    * When set to `false`, no refetch will be made if there is already a request running.
* `remove: () => void`
  * A function to remove the query from the cache.

// import { createApi } from '@reduxjs/toolkit/query/react'
// import type { CountryUrlResponse, UserResponse } from 'types/api'
// import { axiosBaseQuery } from 'utils/apiUtil'
// import type { NavBarAssetsQueryType, NavBarAssetsResultType } from './index.d'
// import { CountryUrl, exchangerMarketUrl, userProfile } from 'consts/urls'

// export const globalAppApi = createApi({
//   reducerPath: 'globalApp',
//   baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_GATEWAY_URL }),

//   //cache time in seconds
//   keepUnusedDataFor: 0,

//   refetchOnReconnect: true,

//   endpoints(build) {
//     return {
//       getNavBarAssets: build.query<NavBarAssetsResultType['value'], NavBarAssetsQueryType>({
//         query: ({ baseAsset }) => ({
//           url: `${exchangerMarketUrl}?orderby=order&$filter=baseAssetId eq '${baseAsset}'&top=4&select=faName,enName,counterAssetId,iconUrl,pair`,
//           method: 'get',
//         }),
//         transformResponse(response: NavBarAssetsResultType) {
//           return response.value
//         },
//       }),
//       getUser: build.query<UserResponse, {}>({
//         query: () => ({
//           url: `${userProfile}`,
//           method: 'get',
//         }),
//         transformResponse(response: UserResponse) {
//           return response
//         },
//       }),
//     }
//   },
// })

// export const { useGetNavBarAssetsQuery, useGetUserQuery } = globalAppApi
export {};

export interface AssetTypeResponse {
  recentTrades: recentTrades[]
  rawAmount: number
  acceptedDecimals: string[]
  acceptedOrderTypes: string[]
  rank: number
  correlationId: number
  assetPairId: number
  baseAssetPairId: any
  brokerPair: string
  pair: string
  name: string
  order: number
  canSell: boolean
  makerFee: number
  blockExplorer: string
  canBuy: boolean
  takerFee: number
  symbol: string
  iconUrl: string
  assetCategoryId: number
  baseAssetId: string
  counterAssetId: string
  dependentAssetPairIds: any[]
  dependentBidAskAssetPairIds: any[]
  ratesChain: number[]
  isDependent: boolean
  close: number
  high: number
  low: number
  open: number
  period: number
  volume: number
  value: number
  surplus: number
  ratio: number
  decimals: number
  bids: BidAndAskType[]
  asks: BidAndAskType[]
  latestRawRate: number
  latestRate: number
  secondLatestRate: number
  yesterdayLatestRate: number
  timestamp: string
  previewsPriceChangeValue: number
  previewsPriceChangePercent: number
  yesterdayPriceChangeValue: number
  yesterdayPriceChangePercent: number
  version: string
  baseAssetDecimals: number
  counterAssetDecimals: number
  socialNetworks: string
  faName: string
  enName: string
  minAmount: number
  latestTradedAmount : number
  lastTradedSide : string
}

export type recentTrades = {
  price: number
  amount: number
  creationTime: string
}

export type BidAndAskType = {
  price: number
  quantity: number
}

export interface OrderBookData {
  asks: Array<BidAndAskType>
  bids: Array<BidAndAskType>
  assetPairId: number
}

export interface AssetGatwaysTypeResponse {
  gatewayName: string
  gatewayId: number
  fee: number
  minimumAmount: number
  order: number
  gatewayDescription: string | null
}

export interface FiatGatwaysTypeResponse {
  apiKey: string | null
  depositTag: string | null
  fee: number
  gatewayId: string
  hasDepositTag: boolean
  minimumAmount: number
  name: string
  order: number
}

export type DepositAddressTypeResponse = {
  depositAddress: string
  depositTag?: string
  newAddress: boolean
}

export type BankType = {
  creationTime: string
  deletionTime: null
  id: number
  isDeleted: boolean
  lastModificationTime: string
  name: string
}

export type UserBankTypeResponse = {
  accountNumber: string
  bank: BankType
  bankId: number
  creationTime: string
  id: number
  interBankAccountNumber: string
  lastModificationTime: string
  note: null
  status: number
  userId: number
}

export interface PriceUpdatedEvent {
  rank: number
  latestRate: number
  secondLatestRate: number
  yesterdayLatestRate: number
  timestamp: string
  assetPairId: number
  close: number
  high: number
  low: number
  open: number
  period: number
  volume: number
  value: number
  rawAmount: number
  previewsPriceChangeValue: number
  previewsPriceChangePercent: number
  yesterdayPriceChangeValue: number
  yesterdayPriceChangePercent: number
  latestTradedAmount : number
  lastTradedSide : string
}

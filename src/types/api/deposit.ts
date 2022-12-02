export interface CryptoHistoryDepositTypeResponseObject {
  amount: number
  assetGatewayId: number
  assetId: string
  confirmationCount: number
  creationTime: Date | string
  depositAddress: null | string
  exchangeRate: number
  explorerTxUrl: string
  fee: null | string
  gatewayId: string
  gatewayName: string
  id: number
  lastModificationTime: Date | string
  phoneNumber: string
  reason: null | string
  status: CryptoTransactionStatus
  trackingCode: null | string
  userFullName: string
  userId: number
}

export interface CryptoHistoryDepositTypeResponse {
  value: CryptoHistoryDepositTypeResponseObject[]
}
export enum CryptoTransactionStatus {
  REJECTED = 'Rejected',
  FULFILLED = 'Fulfilled',
  PENDING = 'Pending',
  ONGOING = 'OnGoing',
}

export interface UserCardsHistoryTypeResponseObject {
  accountNumber: string
  bank: {
    name: string
    isDeleted: boolean
    deletionTime: null | string
    lastModificationTime: Date
    creationTime: Date
  }
  bankId: number
  creationTime: Date
  id: number
  interBankAccountNumber: string
  lastModificationTime: string
  note: null | string
  status: number
  userId: number
}
export interface CustomizedUserCardsHistoryTypeResponseObject extends UserCardsHistoryTypeResponseObject {
  bankName: string
}

export interface SelectedAssetDataTypeResponse {
  assetCategoryId: number
  blockExplorer: string
  creationTime: Date
  deletionTime: null | Date
  faName: string
  iconUrl: string
  id: string
  isDeleted: boolean
  lastModificationTime: null | Date
  name: string
  order: 1
  socialNetworks: string
}

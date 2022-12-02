export interface WithdrawHistoryTypeResponseObject {
  id: number
  assetId: string
  userId: 13
  status: CryptoTransactionStatus
  gatewayId: string
  gatewayName: string
  withdrawalAddress: string
  withdrawalTag: string
  creationTime: Date
  lastModificationTime: Date
  amount: number
  trackingCode: string
  fee: number
  reason: null | string
  userFullName: string
  phoneNumber: string
}

export interface WithdrawHistoryTypeResponse {
  value: WithdrawHistoryTypeResponseObject[]
}
export enum CryptoTransactionStatus {
  REJECTED = 'Rejected',
  FULFILLED = 'Fulfilled',
  PENDING = 'Pending',
  ONGOING = 'OnGoing',
}

export interface UserResponse {
  accountId: null | string
  avatarScanUrl: null
  birthDate: string
  businessLicenseScanUrl: null
  creationTime: string
  email: string
  emailConfirmed: boolean
  fatherName: null
  firstName: string
  lastName: string
  id: number
  lastLoginIp: string
  lastLoginTime: string
  lastModificationTime: null
  passportScanUrl: string
  phoneNumber: string
  phoneNumberConfirmed: boolean
  referralUserId: null
  ssId: string
  ssIdScanUrl: string
  twoFactorEnabled: boolean
  verificationStatus: string
  ValidationType: ValidationType
  cardNumber: string
  country: string
  homeAddress: string
  iban: string
  kycFile: string
  kycStatus: KycStep
  kycType: string
  postalCode?: string
  ssIdCardVerified: boolean
  ssIdPhoneVerified: boolean
  is2faSmsEnabled?: boolean
  is2faEmailEnabled?: boolean
  is2faAppEnabled?: boolean
}

export enum KycStep {
  None = 'None',
  CheckIdentity = 'CheckIdentity',
  Validation = 'Validation',
  IdentityCardUploaded = 'IdentityCardUploaded',
  ProofIdentityUploaded = 'ProofIdentityUploaded',
  Confirmed = 'Confirmed',
}

export enum KycType {
  None,
  Image,
  Clip,
}

export interface UserSecurityResponse {
  isMfaEnabled: boolean
  isVerified: boolean
}

export interface UserDetectIBANTypeResponse {
  ibanInfo: {
    accountNumber: string
    bank: string
    iban: string
    owner: null | string
    status: string
  }
  number: string
  type: string
}

export enum ValidationType {
  Auto = 'Auto',
  Manual = 'Manual',
}

export interface CountryUrlResponse {
  id: number
  commonName: string
  officialName: string
  faName: string
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  currencies: Array<string>
  idd: string
  capital: Array<string>
  region: string
  subregion: string
  latlng: Array<Number>
  timezones: Array<string>
  continents: Array<string>
  flag: string
}

export interface UserNotificationSettingResponse {
  id: number
  email: boolean
  sms: boolean
  pushNotification: boolean
  webSocket: boolean
  lastModifiedDate: string
  creationDate: string
  language: string
  campaigns: boolean
  announcements: boolean
  blogNews: boolean
}

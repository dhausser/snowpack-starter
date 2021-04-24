export enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

export enum IceCreamEnum {
  chocolate = 'Chocolate',
  strawberry = 'Strawberry',
  vanilla = 'Vanilla',
}

export interface FormValues {
  username: string
  password: string
  iceCreamType: IceCreamEnum
  gender: GenderEnum
  remember: boolean
}

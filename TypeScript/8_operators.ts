interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

const key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, 'id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1:UserKeysNoMeta = 'name'
// u1 = '_id'
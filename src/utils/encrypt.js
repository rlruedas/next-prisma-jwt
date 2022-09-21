import bcrypt from 'bcryptjs'

export const hashPassword = (password) => {
    return bcrypt.hashSync(password,10);
}

export const comparePassword = (password, encrypted) => {
    return bcrypt.compareSync(password, encrypted)
}
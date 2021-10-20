import bcrypt from 'bcryptjs'

const users = [
    { 
        name: 'Admin User', 
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    { 
        name: 'Saniya Obaid', 
        email: 'saniya@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    { 
        name: 'Obaid Hashmi', 
        email: 'obaid@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]
export default users
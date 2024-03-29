module.exports = (conection, DataTypes) =>{
    const User = conection.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        name:{
            type:DataTypes.STRING(200),
        },
        email: {
            type: DataTypes.STRING(200),
        },
        message: {
            type: DataTypes.STRING(200),
        },
        create_at: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'users',
        timestamps: false,

    }
    )
    return User;
}
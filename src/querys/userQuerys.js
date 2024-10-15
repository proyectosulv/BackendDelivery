
const Querys = {
    getAllUser : "Select * from users",
    CreateUser: "INSERT INTO Users"+
    "(email, password, name, lastName, phone, image, is_available, "+ 
    "session_token, created_at, updated_at)"+ 
    "VALUES (@Email, @Password, @Name, @LastName, @Phone, @Image, @Is_Avaible, "+ 
    "@Session_Token, @Created_At, @Updated_At);"+  
    "SELECT SCOPE_IDENTITY() AS id;",
}



module.exports = {
    Querys
}
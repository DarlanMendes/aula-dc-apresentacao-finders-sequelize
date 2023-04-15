
const { Sequelize, DataTypes } = require('sequelize');
//Passando URI para conexão opção 1

const sequelize = new Sequelize('postgres://digitalcollege:6MXbyWfaOelGQR3WtI6y43utpQjdjMRK@dpg-cgt1gfiut4mcfrjnd650-a.oregon-postgres.render.com/biblioteca_p5or',
{
dialectOptions: {
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
}}
) 
//Dessa forma foi necessario carregar a opcao ssl

// testa a conexão 

async function testeConexao(){
    try{
        await sequelize.authenticate();
        console.log('Conectado')
    }catch(e){
        console.log(e)
    }
 }
testeConexao()

//criar schema para o usuario
const User = sequelize.define('User', {
    // Model attributes are defined here
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
      // allowNull defaults to true
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    }
  }, {
    // Other model options go here
  });


// Sicroniza e alter se diiferente
async function sicronizacao(){
   await User.sync({ alter: true })
   //console.log(User)
}
sicronizacao()

//Cria novo usuario
// async function criarNovoUsuario(){
//     const novousuario = await User.create({nome:'Sicrano', email:'Sicrano@com', senha:'123456'})
//     //console.log(novousuario)
// }

// criarNovoUsuario()

//Finders 

//FindAll
// async function listarTodosUsuarios(){
//     const listaUsuarios = await User.findAll()
//     console.log('Sem Método Raw    .   .  .', listaUsuarios)
// }

// listarTodosUsuarios()

// async function listarTodosUsuariosRaw(){
//     const listaUsuarios = await User.findAll({raw:true})
//     console.log('Com Método Raw    .   .  .', listaUsuarios)
// }

// listarTodosUsuariosRaw()


//FindAll utilizando where
// async function listarTodosUsuariosWhere(){
//    // const listaUsuarios = await User.findAll({where:{nome:'Sicrano'}})
//    const listaUsuarios = await User.findAll({where:{email:'Fulano@com'}})
//     console.log( listaUsuarios)
// }

// listarTodosUsuariosWhere();

// async function listarUsuarioPorPk(){
//     const Usuario = await User.findByPk(2)
//     // const Usuario = await User.findByPk(1)
//      console.log( Usuario)
//  }
 
//  listarUsuarioPorPk()

//FindOne
// async function listarUsuarioFindOne(){
//     ///const Usuario = await User.findOne()   //primeiro lista
//     const Usuario = await User.findOne({where:{email:'Sicrano@com'}})  
//      console.log( Usuario)
//  }
 
//  listarUsuarioFindOne()


 //FindOrCrete

 //Cria se valores passados nas instancia não existirem e retorna a infromação se ja existia ou não essa instância

//  async function listarUsuarioFindOrCreate(){
    
//     const [user, created] = await User.findOrCreate(
//         {   where:{email:'Beltrano@com'},

//             defaults:{senha:'01234',nome:'Pikachu'}}

//         )  



//      console.log( 'Usuario' ,user);
//      console.log('Criado? ',created )
//  }
 
//  listarUsuarioFindOrCreate()


//findAllandCount

async function listarUsuarioFindAndCountAll(){
    
        const {count, rows} = await User.findAndCountAll(
            {   where:{email:'Sicrano@com'},
                offset:3,     //ponto de partida primeiro encontrado é considerado offset 0
                limit:5      //limite de usuarios buscados   foi 5 a 9
            }
            )  
    
    
    
         console.log( 'Contagem' ,count);  //contagem de usuarios que atendem o where:  (13)
         console.log('Gravações ',rows )
     }
     
     listarUsuarioFindAndCountAll()




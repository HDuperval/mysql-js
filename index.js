import mysql from 'mysql2';
// const mysql = requiere('mysql2') //commonJS

const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'NewCommerce',
        password: 'Jayden2012'
      });

    // simple query
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

  const query = `SELECT *  \
  FROM Products`

// simple query
connection.query(
   query,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  const insertQuery = `INSERT INTO Products (Id, Description, Sku)
  VALUE (?,?,?)`

//   connection.query(insertQuery, [5, "My New Product", "123454"],
//   (err, results) => {
//       if(err){
//           console.log(err)

//       }

//       console.log(results)
//   })

  
    var sql = "INSERT INTO Contactpersons (Id, name, Email, Phone, address) VALUES ?";
    var values = [
        [1, 'Maxo Jean', 'maxo@aol.com', '561-30622021', '9727 Boca FL'],
        [2, 'Seneque Fleurilus', 'seneque@aol.com', '561-3062022', '9928 Boca FL'],
        [3, 'Adrien Stephen', 'adrien@aol.com', '561-3062023', '9929 Boca FL'],
        [4, 'Davidson Demezier', 'davidson@aol.com', '561-3062024', '9930 Boca FL'],
        [5, 'Marie Nicolas', 'marie@aol.com', '561-3062025', '9931 Boca FL']
    ];     
    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
   connection.end();
   
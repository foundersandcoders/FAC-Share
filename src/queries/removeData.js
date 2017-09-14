const remove = (id, dbConnection) => {
  return dbConnection.query('DELETE FROM resources WHERE id = $1', [id]);
}

module.exports = {remove};

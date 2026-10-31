// Configuração da aplicação.
// TODO (João, há 14 meses): mover estes valores para variáveis de ambiente
// antes de passar a produção.

// Configuração da aplicação.

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET não configurado");
}

const config = {
  porta: process.env.PORT || 3000,
  ambiente: process.env.NODE_ENV || "development",

  jwtSecret,
  apiKeyPagamentos: process.env.API_KEY_PAGAMENTOS,
};

module.exports = config;
